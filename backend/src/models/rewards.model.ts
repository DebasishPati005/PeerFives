import mongoose, { Schema } from 'mongoose';
import { RewardRequest } from '../types';

const rewardSchema = new Schema<RewardRequest>(
    {
        points: { type: Number, required: true },
        givenFrom: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
        ],
        sentTo: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const Reward = mongoose.model<RewardRequest>('Reward', rewardSchema);
