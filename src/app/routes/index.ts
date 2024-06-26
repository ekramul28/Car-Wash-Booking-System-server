import { Router } from 'express';
import { authRoutes } from '../../modules/Auth/auth.route';
import { serviceRoute } from '../../modules/service/service.route';
import { slotRoutes } from '../../modules/slots/slote.route';
import { bookingRoutes } from '../../modules/bookings/bookings.route';

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
  {
    path: '/services/slots',
    route: slotRoutes,
  },
  {
    path: '/slots',
    route: slotRoutes,
  },
  {
    path: '/bookings',
    route: bookingRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
