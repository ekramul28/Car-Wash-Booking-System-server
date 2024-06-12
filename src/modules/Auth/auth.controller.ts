import httpStatus from 'http-status';
import sendResponse from '../../app/utils/sendResponse';
import catchAsync from '../../app/utils/catchAsync';
import { UserService } from './auth.service';

const createUser = catchAsync(async (req, res) => {
  const result = await UserService.createUserIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created succesfully',
    data: result,
  });
});
const loginUser = catchAsync(async (req, res) => {
  const result = await UserService.loginUserIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in succesfully!',
    data: result,
  });
});

export const UserControllers = {
  createUser,
  loginUser,
};
