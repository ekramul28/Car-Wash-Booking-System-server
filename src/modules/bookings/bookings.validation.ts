import mongoose from 'mongoose';
import { z } from 'zod';

const bookingValidationSchema = z.object({
  body: z.object({
    serviceId: z
      .string()
      .refine((val) => mongoose.Types.ObjectId.isValid(val), {
        message: 'Invalid service ID',
      }),
    slotId: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
      message: 'Invalid slotId ID',
    }),
    vehicleType: z.string({
      invalid_type_error: 'vehicleType  must be string',
      required_error: 'vehicleType is required',
    }),
    vehicleBrand: z.string({
      invalid_type_error: 'vehicleBrand  must be string',
      required_error: 'vehicleBrand is required',
    }),
    vehicleModel: z.string({
      invalid_type_error: 'vehicleModel  must be string',
      required_error: 'vehicleModel is required',
    }),
    manufacturingYear: z
      .number({
        invalid_type_error: 'manufacturingYear department must be Number',
        required_error: 'Name is required',
      })
      .int()
      .min(2000),
    registrationPlate: z.string({
      invalid_type_error: 'registrationPlate  must be string',
      required_error: 'registrationPlate is required',
    }),
  }),
});

export const BookingValidation = {
  bookingValidationSchema,
};
