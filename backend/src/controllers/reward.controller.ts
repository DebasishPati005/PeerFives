import { Request, Response, NextFunction } from 'express';
import { RewardRequest, RewardResponse } from '../types';
import { Reward } from '../models/rewards.model';
import { User } from '../models/user.model';

export const getRewardData = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const id = req.query.id;
    console.log({ id });
    return res.json({
        user: { name: 'Something' },
    });
};

export const createNewReward = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const rewardReq: RewardRequest = req.body;
    console.log({ userReq: req });
    try {
        const reward = new Reward(rewardReq);
        const givenFromUser = await User.findById(rewardReq.givenFrom);
        if (givenFromUser && givenFromUser.p5_balance < rewardReq.points) {
            return res.json({
                error: 'Not possible to do transaction!',
            });
        } else {
            const sentToUser = await User.findById(rewardReq.sentTo);
            givenFromUser!.p5_balance -= rewardReq.points;
            sentToUser!.reward_balance += rewardReq.points;

            await sentToUser?.save();
            await givenFromUser?.save();
            const rewardResponse = await reward.save();

            return res.json({ rewardResponse });
        }
    } catch (error) {
        return res.json({
            error,
        });
    }
};

export const deleteReward = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const id = req.params.id;
    try {
        const rewardResp: RewardResponse | null = await Reward.findById(id);
        const givenFromUser = await User.findById(rewardResp!.givenFrom);
        const sentToUser = await User.findById(rewardResp!.sentTo);

        givenFromUser!.p5_balance += rewardResp!.points;
        sentToUser!.reward_balance -= rewardResp!.points;

        await sentToUser?.save();
        await givenFromUser?.save();
        const rewardResponse = await Reward.findByIdAndDelete(id);

        return res.json({ rewardResponse });
    } catch (error) {
        return res.json({
            error,
        });
    }
};
