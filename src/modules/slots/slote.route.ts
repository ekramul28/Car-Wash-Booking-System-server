import express from 'express';
import validateRequest from '../../app/middlewares/validateRequest';
import { SlotsValidation } from './slote.validation';
import { SlotControllers } from './slote.controller';

const route = express.Router();

route.post(
  '/',
  validateRequest(SlotsValidation.slotValidationSchema),
  SlotControllers.createSlots,
);

export const slotRoutes = route;
