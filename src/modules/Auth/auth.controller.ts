import httpStatus from 'http-status';
import sendResponse from '../../app/utils/sendResponse';
import catchAsync from '../../app/utils/catchAsync';
import { UserService } from './auth.service';
import checkDataFound from '../../app/utils/checkDataFound';
import config from '../../app/config';

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
  const { refreshToken, accessToken, needsPasswordChange } = result;

  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24 * 365,
  });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `User logged in successfully!`,
    data: {
      accessToken,
    },
  });
});

export const UserControllers = {
  createUser,
  loginUser,
  getAllUser,
};
