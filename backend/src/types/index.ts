export interface UserRequest {
    name: string;
    p5_balance: number;
    reward_balance: number;
}

export interface UserResponse {
    name: string;
    id: string;
}

export interface RewardRequest {
    points: number;
    givenFrom: string;
    sentTo: string;
}

export interface RewardResponse {
    points: number;
    givenFrom: string;
    sentTo: string;
    timestamp: string;
}
