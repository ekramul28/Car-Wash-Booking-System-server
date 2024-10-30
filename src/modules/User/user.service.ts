/* eslint-disable @typescript-eslint/no-explicit-any */
import { UserSearchableFields } from './user.constant';
import QueryBuilder from '../../app/builder/QueryBuilder';
import { User } from '../Auth/auth.model';

const getAllUsersFromDB = async (query: Record<string, unknown>) => {
  const users = new QueryBuilder(User.find(), query)
    .fields()
    .paginate()
    .sort()
    .filter()
    .search(UserSearchableFields);

  const result = await users.modelQuery;

  return result;
};

const getSingleUserFromDB = async (id: string) => {
  const user = await User.findById(id);

  return user;
};
const updateSingleUserDB = async (updateData: any, id: string) => {
  const updatedUser = await User.findByIdAndUpdate({ _id: id }, updateData, {
    new: true,
  });
  return updatedUser;
};
export const UserServices = {
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateSingleUserDB,
};
