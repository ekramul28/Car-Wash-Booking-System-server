import express from 'express';
import { UserControllers } from './user.controller';
import auth from '../../app/middlewares/auth';

const router = express.Router();

router.get('/', UserControllers.getAllUsers);
router.get('/:id', UserControllers.getSingleUser);
router.patch('/:id', auth('admin'), UserControllers.updateSingleUser);

export const UserRoutes = router;
