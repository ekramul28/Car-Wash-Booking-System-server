import { Types } from 'mongoose';

export type TBooking = {
  userId: Types.ObjectId;
  serviceId: Types.ObjectId;
  slotId: Types.ObjectId;
  date: string;
  startTime: string;
  endTime: string;
  payment?: string;
  status?: string;
  isDeleted?: boolean;
};
