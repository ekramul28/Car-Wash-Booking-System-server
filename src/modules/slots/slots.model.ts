import { Schema, model } from 'mongoose';
import { TSlots, slotModel } from './slots.interface';

const slotsSchema = new Schema<TSlots, slotModel>(
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
      enum: ['booked', 'available', 'canceled'],
      default: 'available',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

slotsSchema.statics.isSlotByCustomId = async function (id: string) {
  return await Slot.findById(id);
};

export const Slot = model<TSlots, slotModel>('Slot', slotsSchema);
