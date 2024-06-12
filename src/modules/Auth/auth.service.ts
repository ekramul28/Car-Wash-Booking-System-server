import httpStatus from 'http-status';
import AppError from '../../app/errors/AppError';
import { User } from './auth.model';
import { TLoginUser, TUser } from './auth.interface';
import bcrypt from 'bcrypt';
const createUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const loginUserIntoDB = async (payload: TLoginUser) => {
  const { password, email } = payload;
  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }
  const isDeleted = user?.isDeleted;

  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is deleted !');
  }
  const userStatus = user?.userStatus;

  if (userStatus === 'blocked') {
    throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked ! !');
  }

  //password check
  const checkPassword = await bcrypt.compare(password, user?.password);
  if (!checkPassword) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');
  }
  return user;
};

export const UserService = {
  createUserIntoDB,
  loginUserIntoDB,
};
