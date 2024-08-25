import express from 'express';
import validateRequest from '../../app/middlewares/validateRequest';
import { BookingValidation } from './bookings.validation';
import { BookingControllers } from './bookings.controller';
import auth from '../../app/middlewares/auth';
import { USER_ROLE } from '../Auth/auth.constant';

const route = express.Router();

route.post(
  '/bookings',
  auth(USER_ROLE.user),
  validateRequest(BookingValidation.bookingValidationSchema),
  BookingControllers.createBooking,
);
route.get('/bookings', auth(USER_ROLE.admin), BookingControllers.getAllBooking);
route.get(
  '/my-bookings',
  auth(USER_ROLE.user),
  BookingControllers.getMyBooking,
);

export const bookingRoutes = route;
