import { Schema, model } from 'mongoose';
import { TBooking } from './bookings.interface';

const bookingSchema = new Schema<TBooking>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    serviceId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Service',
    },
    slotId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Slot',
    },
    date: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export const Booking = model<TBooking>('Booking', bookingSchema);
