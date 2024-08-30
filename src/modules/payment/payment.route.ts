import express from "express";
import { LinkControllers } from "./payment.controller";
const router = express.Router();

router.post("/", LinkControllers.stripePayment);

export const PaymentRoutes = router;
