import { Router } from 'express';
import { authRoutes } from '../../modules/Auth/auth.route';
import { serviceRoute } from '../../modules/service/service.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/services',
    route: serviceRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
