import { Schema, model } from 'mongoose';
import { TSlots } from './slots.interface';

const slotsSchema = new Schema<TSlots>(
  {
    service: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Service',
    },
    date: { type: Date },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    isBooked: {
      type: String,
      enum: ['Blocked', 'available'],
      default: 'available',
    },
  },
  { timestamps: true },
);

export const Slot = model<TSlots>('Slot', slotsSchema);
