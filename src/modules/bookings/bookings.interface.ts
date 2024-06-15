import { Types } from 'mongoose';

export type TBooking = {
  userId: Types.ObjectId;
  serviceId: Types.ObjectId;
  slotId: Types.ObjectId;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
  isDeleted: boolean;
  createdAt?: string;
  updatedAt?: string;
};
