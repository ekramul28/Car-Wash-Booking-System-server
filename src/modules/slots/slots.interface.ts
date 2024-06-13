import { Types } from 'mongoose';

export type TSlots = {
  service: Types.ObjectId;
  date: Date;
  startTime: string;
  endTime: string;
  isBooked: 'Booked' | 'available';
};
