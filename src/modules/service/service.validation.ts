import { z } from 'zod';

const updateServiceSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'name must be string',
      })
      .optional(),
    description: z
      .string({
        invalid_type_error: 'description must be string',
      })
      .optional(),
    price: z
      .string({
        invalid_type_error: 'price must be number',
      })
      .optional(),
    duration: z
      .number({
        invalid_type_error: 'duration must be number',
      })
      .nonnegative('Duration must be a non-negative number')
      .optional(),
    isDeleted: z.boolean().optional(),
  }),
});

const serviceSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'name must be string',
    }),
    description: z.string({
      invalid_type_error: 'description must be string',
    }),
    price: z.string({
      invalid_type_error: 'price must be string',
    }),
    duration: z
      .number({
        invalid_type_error: 'duration must be number',
      })
      .nonnegative('Duration must be a non-negative number'),
    isDeleted: z.boolean().optional(),
  }),
});

export const ServiceValidation = {
  serviceSchema,
  updateServiceSchema,
};
