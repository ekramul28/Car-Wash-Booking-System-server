// import Stripe from 'stripe';
import { Booking } from '../bookings/bookings.model';
import { PaymentDetails } from './payment.model';
import { initiatePayment, UserS, VerifyPayment } from './payment.utils';

const amrPayPayment = async (data: {
  totalPrice: number;
  user: UserS;
  totalHoursInDecimal: number;
}) => {
  const result = await initiatePayment(data);
  return result;
};
const afterPaymentPageDB = async (userId: string, tnxId: string) => {
  // Assume VerifyPayment returns an object with the necessary payment details
  const paymentDetails = await VerifyPayment(tnxId);

  const data = {
    userId,
    email: paymentDetails.cus_email,
    amount: paymentDetails.amount_original,
    payment_processor: paymentDetails.payment_processor,
    bank_trxid: paymentDetails.bank_trxid,
    pg_txnid: paymentDetails.pg_txnid,
    mer_txnid: paymentDetails.mer_txnid,
    payment_type: paymentDetails.payment_type,
  };

  if (paymentDetails.pay_status === 'Successful') {
    await Booking.updateMany(
      { userId },
      { payment: 'paid', status: 'inProgress' },
    );

    await PaymentDetails.create(data);
  }

  // Return relevant payment details for further use
  return data;
};

export const createPaymentLinkService = {
  // createPaymentLink,
  afterPaymentPageDB,
  amrPayPayment,
};
