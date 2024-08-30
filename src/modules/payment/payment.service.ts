import Stripe from 'stripe';
import { STRIPE_API_VERSION, STRIPE_SECRET_KEY } from './payment.constant';
import { Booking } from '../bookings/bookings.model';

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: STRIPE_API_VERSION,
});

const createPaymentLink = async (userId: string) => {
  try {
    const bookings = await Booking.find({ userId }).populate('serviceId');
    if (!bookings || bookings.length === 0) {
      throw new Error('No bookings found for the user.');
    }

    const lineItems = bookings.map((booking) => {
      const title = booking.serviceId.title || 'Service';
      const price = booking.serviceId?.price || 0;
      const image = booking.serviceId?.image?.[0] || '';

      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: title,
            images: image ? [image] : [],
          },
          unit_amount: Math.round(price * 100), // Convert to cents
        },
        quantity: 1, // Assuming each booking is a single unit
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'https://mechanical-keyboard-shop-ten.vercel.app/success',
      cancel_url: 'https://mechanical-keyboard-shop-ten.vercel.app/error',
    });

    return session;
  } catch (error) {
    console.error('Error creating payment link:', error.message);
    throw new Error('Failed to create payment link.');
  }
};

export const createPaymentLinkService = {
  createPaymentLink,
};
