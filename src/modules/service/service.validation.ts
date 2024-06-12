import { z } from 'zod';

const serviceSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'name must be string',
    }),
    description: z.string({
      invalid_type_error: 'description must be string',
    }),
    price: z
      .number({
        invalid_type_error: 'price must be number',
      })
      .nonnegative('Price must be a non-negative number'),
    duration: z
      .number({
        invalid_type_error: 'duration must be number',
      })
      .nonnegative('Duration must be a non-negative number'),
    isDeleted: z.boolean(),
  }),
});

export const ServiceValidation = {
  serviceSchema,
};