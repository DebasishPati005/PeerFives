import { Router } from 'express';
import * as rewardController from '../controllers/reward.controller';

const router = Router();

router.delete('/delete/:id', rewardController.deleteReward);

router.post('/create', rewardController.createNewReward);

export default router;
