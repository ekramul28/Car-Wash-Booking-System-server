import { Router } from 'express';
import { authRoutes } from '../../modules/Auth/auth.route';
import { serviceRoute } from '../../modules/service/service.route';
import { slotRoutes } from '../../modules/slots/slote.route';
import { bookingRoutes } from '../../modules/bookings/bookings.route';
import { PaymentRoutes } from '../../modules/payment/payment.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/',
    route: bookingRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/Create-checkout-session',
    route: PaymentRoutes,
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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
