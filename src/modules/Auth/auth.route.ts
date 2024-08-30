import express from 'express';
import { UserControllers } from './auth.controller';
import validateRequest from '../../app/middlewares/validateRequest';
import { UserValidation } from './auth.validation';
import auth from '../../app/middlewares/auth';
import { USER_ROLE } from './auth.constant';
import { UserService } from './auth.service';
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
route.get('/', auth(USER_ROLE.admin), UserControllers.getAllUser);
// route.post(
//   '/refresh-token',
//   // validateRequest(AuthValidation.refreshTokenValidationSchema),
//   UserService.refreshToken,
// );

export const authRoutes = route;
