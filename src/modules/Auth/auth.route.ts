import express from 'express';
import { UserControllers } from './auth.controller';
import validateRequest from '../../app/middlewares/validateRequest';
import { UserValidation } from './auth.validation';
const route = express.Router();

route.post(
  '/signup',
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.createUser,
);
route.post(
  '/login',
  validateRequest(UserValidation.loginValidationSchema),
  UserControllers.loginUser,
);

export const authRoutes = route;
