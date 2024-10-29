import { UserSearchableFields } from './user.constant';
import { User } from './user.model';
import QueryBuilder from '../../app/builder/QueryBuilder';

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

export const UserServices = {
  getAllUsersFromDB,
  getSingleUserFromDB,
};
