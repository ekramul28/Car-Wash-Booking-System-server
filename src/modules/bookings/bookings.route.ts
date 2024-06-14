import express from 'express';
import validateRequest from '../../app/middlewares/validateRequest';
import { BookingValidation } from './bookings.validation';
import { BookingControllers } from './bookings.controller';

const route = express.Router();

route.post(
  '/',
  validateRequest(BookingValidation.bookingValidationSchema),
  BookingControllers.createBooking,
);
route.get('/', BookingControllers.getAllBooking);
route.get('/:id', BookingControllers.getMyBooking);

export const bookingRoutes = route;
