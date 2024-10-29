import express from 'express';
import { LinkControllers } from './payment.controller';
const router = express.Router();

router.post('/amrPay', LinkControllers.amrPayPayment);
router.post('/conformation', LinkControllers.afterPaymentPage);
router.post('/fail', LinkControllers.paymentFail);

export const PaymentRoutes = router;
