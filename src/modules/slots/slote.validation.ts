import mongoose from 'mongoose';
import { z } from 'zod';

const slotValidationSchema = z.object({
  body: z.object({
    service: z.string().refine((val) => mongoose.Types.ObjectId.isValid(val), {
      message: 'Invalid service ID',
    }),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: 'Invalid date format',
    }),
    startTime: z
      .string()
      .regex(/^\d{2}:\d{2}$/, { message: 'Invalid start time format' }),
    endTime: z
      .string()
      .regex(/^\d{2}:\d{2}$/, { message: 'Invalid end time format' }),
  }),
});

export const SlotsValidation = {
  slotValidationSchema,
};
