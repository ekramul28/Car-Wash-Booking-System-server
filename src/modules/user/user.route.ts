import express from 'express';
import { UserControllers } from './user.controller';
const route = express.Router();

route.post('/signup', UserControllers.createUser);

export const userRoutes = route;
