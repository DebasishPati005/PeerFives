import { Request, Response, NextFunction } from 'express';
import { UserRequest, UserResponse } from '../types';
import { User } from '../models/user.model';

export const getUserData = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const id = req.params.id;
    try {
        const user: UserResponse | null = await User.findById(id);
        return res.json({ user });
    } catch (error) {
        return res.json({
            error,
        });
    }
};

export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userReq: UserRequest = req.body;
    try {
        const user = new User(userReq);
        const userResponse = await user.save();

        return res.json({ userResponse });
    } catch (error) {
        return res.json({
            error,
        });
    }
};

export const editUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userReq: UserRequest = req.body;
    const id = req.params.id;
    try {
        const userResp = await User.findById(id);
        userResp!.name = userReq.name;
        userResp!.p5_balance += userReq.p5_balance;

        userResp?.save();

        return res.json({ userResp });
    } catch (error) {
        return res.json({
            error,
        });
    }
};
