import express from 'express';
import validateRequest from '../../app/middlewares/validateRequest';
import { ServiceValidation } from './service.validation';
import { ServiceControllers } from './service.controller';
const route = express.Router();

route.post(
  '/',
  validateRequest(ServiceValidation.serviceSchema),
  ServiceControllers.createService,
);

export const serviceRoute = route;
