import { z } from 'zod';

const bookingValidationSchema = z.object({
  body: z.object({
    serviceId: z.string({
      invalid_type_error: 'Service ID must be a string',
      required_error: 'Service ID is required',
    }),
    userId: z.string({
      invalid_type_error: 'User ID must be a string',
      required_error: 'User ID is required',
    }),
    slotId: z.string({
      invalid_type_error: 'Slot ID must be a string',
      required_error: 'Slot ID is required',
    }),
    date: z.string({
      message: 'Date must be in the format YYYY-MM-DD',
    }),
    startTime: z.string({
      invalid_type_error: 'startTime must be a string',
      required_error: 'startTime is required',
    }),
    endTime: z.string({
      invalid_type_error: 'endTime must be a string',
      required_error: 'endTime is required',
    }),
    payment: z
      .string({
        invalid_type_error: 'payment must be a string',
      })
      .optional(),
    status: z
      .string({
        invalid_type_error: 'status must be a string',
      })
      .optional(),

    isDeleted: z.boolean().optional().default(false),
  }),
});

export const BookingValidation = {
  bookingValidationSchema,
};
