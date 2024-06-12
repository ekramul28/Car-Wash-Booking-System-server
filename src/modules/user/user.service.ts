import { TUser } from './user.interface';
import { UserSchema } from './user.model';

const createUserIntoDB = async (payload: TUser) => {
  const createStudent = await UserSchema.create(payload);
  return createStudent;
};

export const UserService = {
  createUserIntoDB,
};
