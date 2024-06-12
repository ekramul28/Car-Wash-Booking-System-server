import { z } from 'zod';

const userValidationSchema = z.object({
  id: z.string({
    invalid_type_error: 'Password must be string',
  }),
  name: z.string({
    invalid_type_error: 'name must be string',
  }),
  email: z
    .string({
      invalid_type_error: 'Password must be string',
    })
    .email(),
  password: z
    .string()
    .max(20, { message: 'Password can not be more than 20 characters' }),
  phone: z.string({
    invalid_type_error: 'Password must be string',
  }),
  role: z.enum(['admin', 'user']).default('user'),
  address: z.string({
    invalid_type_error: 'Password must be string',
  }),
});

export const UserValidation = {
  userValidationSchema,
};
