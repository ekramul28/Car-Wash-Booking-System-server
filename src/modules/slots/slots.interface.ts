import { Model, Types } from 'mongoose';

export type TSlots = {
  service: Types.ObjectId;
  date: Date;
  startTime: string;
  endTime: string;
  isBooked: 'Booked' | 'available' | 'canceled';
};
export interface slotModel extends Model<TSlots> {
  isSlotByCustomId(id: string): Promise<TSlots>;
}
