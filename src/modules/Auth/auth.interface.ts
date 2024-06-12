export type TUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'admin' | 'user';
  address: string;
  isDeleted: boolean;
  userStatus: 'in-progress' | 'blocked';
};

export type TLoginUser = {
  email: string;
  password: string;
};
