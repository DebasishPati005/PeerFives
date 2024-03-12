import { Router } from 'express';
import * as userController from '../controllers/user.controller';

const router = Router();

router.get('/get/:id', userController.getUserData);

router.post('/create', userController.createUser);

router.put('/edit/:id', userController.editUser);

export default router;
