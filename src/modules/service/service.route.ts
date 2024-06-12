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
route.get('/', ServiceControllers.getAllService);
route.get('/:id', ServiceControllers.getSingleService);
route.delete('/:id', ServiceControllers.deleteService);
route.put(
  '/:id',
  validateRequest(ServiceValidation.updateServiceSchema),
  ServiceControllers.updateService,
);

export const serviceRoute = route;
