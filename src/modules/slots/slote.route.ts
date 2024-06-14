import express from 'express';
import validateRequest from '../../app/middlewares/validateRequest';
import { SlotsValidation } from './slote.validation';
import { SlotControllers } from './slote.controller';
import auth from '../../app/middlewares/auth';
import { USER_ROLE } from '../Auth/auth.constant';

const route = express.Router();

route.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(SlotsValidation.slotValidationSchema),
  SlotControllers.createSlots,
);
route.get('/availability', SlotControllers.getAvailableSlots);

export const slotRoutes = route;
