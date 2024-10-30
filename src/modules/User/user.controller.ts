import httpStatus from 'http-status';
import { UserServices } from './user.service';
import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';

const getAllUsers = catchAsync(async (req, res) => {
  const users = await UserServices.getAllUsersFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Users Retrieved Successfully',
    data: users,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const user = await UserServices.getSingleUserFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Retrieved Successfully',
    data: user,
  });
});
const updateSingleUser = catchAsync(async (req, res) => {
  const updateData = req.body;
  const { id } = req.params;
  const user = await UserServices.updateSingleUserDB(updateData, id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Update Successfully',
    data: user,
  });
});

export const UserControllers = {
  getSingleUser,
  updateSingleUser,
  getAllUsers,
};
