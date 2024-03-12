import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import userRouter from '../src/routers/user.route';
import rewardRouter from './routers/reward.route';
import bodyParser = require('body-parser');

//For env File
dotenv.config();

const app: Application = express();
const allowedOrigins = ['http://localhost:3000'];

app.use((req: Request, res: Response, next: NextFunction) => {
    const origin = req.headers.origin!;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
    );
    if (req.method == 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});
app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/rewards', rewardRouter);

export default app;
