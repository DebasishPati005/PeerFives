import express, { Application } from 'express';
import dotenv from 'dotenv';
import userRouter from '../src/routers/user.route';
import rewardRouter from './routers/reward.route';
import bodyParser = require('body-parser');

//For env File
dotenv.config();

const app: Application = express();

app.use(bodyParser.json());

app.use('/user', userRouter);
app.use('/rewards', rewardRouter);

export default app;
