import express from 'express';
import validateRequest from '../../app/middlewares/validateRequest';
import { ServiceValidation } from './service.validation';
import { ServiceControllers } from './service.controller';
import auth from '../../app/middlewares/auth';
import { USER_ROLE } from '../Auth/auth.constant';
const route = express.Router();

route.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(ServiceValidation.serviceSchema),
  ServiceControllers.createService,
);
route.get('/', ServiceControllers.getAllService);
route.get('/:id', ServiceControllers.getSingleService);
route.delete('/:id', auth(USER_ROLE.admin), ServiceControllers.deleteService);
route.put(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(ServiceValidation.updateServiceSchema),
  ServiceControllers.updateService,
);

export const serviceRoute = route;
