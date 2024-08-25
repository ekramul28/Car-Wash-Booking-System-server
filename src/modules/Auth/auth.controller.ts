import httpStatus from 'http-status';
import sendResponse from '../../app/utils/sendResponse';
import catchAsync from '../../app/utils/catchAsync';
import { UserService } from './auth.service';
import checkDataFound from '../../app/utils/checkDataFound';

const createUser = catchAsync(async (req, res) => {
  const result = await UserService.createUserIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${req.body?.role} is created successfully`,
    data: {
      _id: result._id,
      name: result.name,
      email: result.email,
      phone: result.phone,
      role: result.role,
      address: result.address,
      createdAt: result?.createdAt,
      updatedAt: result?.updatedAt,
    },
  });
});
const getAllUser = catchAsync(async (req, res) => {
  const result = await UserService.getAllUserIntoDB();
  if (!checkDataFound(result, res)) return;
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'allUser get successfully',
    data: result,
  });
});
const loginUser = catchAsync(async (req, res) => {
  const result = await UserService.loginUserIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `${result.user.role} logged in successfully!`,
    token: result?.token,
    data: {
      _id: result.user._id,
      name: result.user.name,
      email: result.user.email,
      phone: result.user.phone,
      role: result.user.role,
      address: result.user.address,
      createdAt: result?.user.createdAt,
      updatedAt: result?.user.updatedAt,
    },
  });
});

export const UserControllers = {
  createUser,
  loginUser,
  getAllUser,
};
