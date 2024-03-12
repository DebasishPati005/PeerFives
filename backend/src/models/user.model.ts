import mongoose, { Schema } from 'mongoose';
import { UserRequest } from '../types';

const userSchema = new Schema<UserRequest>({
    name: { type: String, required: true },
    p5_balance: { type: Number, default: 100 },
    reward_balance: { type: Number, default: 0 },
});

export const User = mongoose.model<UserRequest>('User', userSchema);
