import { z } from 'zod';

const userValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'name must be string',
    }),
    email: z
      .string({
        invalid_type_error: 'email must be string',
      })
      .email(),
    password: z
      .string()
      .max(20, { message: 'Password can not be more than 20 characters' }),
    phone: z.string({
      invalid_type_error: 'phone must be string',
    }),
    role: z.enum(['admin', 'user']).default('user'),
    address: z.string({
      invalid_type_error: 'address must be string',
    }),
  }),
});

const loginValidationSchema = z.object({
  body: z.object({
    email: z
      .string({
        invalid_type_error: 'email must be string',
      })
      .email(),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

export const UserValidation = {
  userValidationSchema,
  loginValidationSchema,
};
