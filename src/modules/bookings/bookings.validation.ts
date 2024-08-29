import mongoose from 'mongoose';
import { z } from 'zod';

const bookingValidationSchema = z.object({
  body: z.object({
    serviceId: z
      .string()
      .refine((val) => mongoose.Types.ObjectId.isValid(val), {
        message: 'Invalid service ID',
      }),
    userId: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
      message: 'Invalid userId ID',
    }),
    slotId: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
      message: 'Invalid slotId ID',
    }),
    date: z.string({
      invalid_type_error: 'date  must be string',
      required_error: 'date is required',
    }),

    startTime: z.string({
      invalid_type_error: ' startTime  must be string',
      required_error: ' startTime is required',
    }),
    endTime: z.string({
      invalid_type_error: 'endTime  must be string',
      required_error: 'endTime is required',
    }),
    isDeleted: z.boolean(),
  }),
});

export const BookingValidation = {
  bookingValidationSchema,
};
