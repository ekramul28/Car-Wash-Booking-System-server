import httpStatus from 'http-status';
import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { BookingService } from './bookings.service';
import checkDataFound from '../../app/utils/checkDataFound';

const createBooking = catchAsync(async (req, res) => {
  const userId = req.user.userId;
  const body = { ...req.body, userId };

  const result = await BookingService.createBookingIntoDB(body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking Created successfully!',
    data: result,
  });
});
const getAllBooking = catchAsync(async (req, res) => {
  const result = await BookingService.getAllBookingIntoDB(req.query);
  if (!checkDataFound(result, res)) return;
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All bookings retrieved successfully',
    data: result,
  });
});
const getMyBooking = catchAsync(async (req, res) => {
  const id = req.user.userId;
  const result = await BookingService.getMyBookingIntoDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All bookings retrieved successfully',
    data: result,
  });
});

const deleteSingleMyBooking = catchAsync(async (req, res) => {
  const userId = req.user.userId;
  const { id } = req.params;
  const result = await BookingService.deleteSingleMyBooking(userId, id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Delete booking successfully',
    data: result,
  });
});
const updateSingleBooking = catchAsync(async (req, res) => {
  const updateData = req.body;
  const { id } = req.params;
  const result = await BookingService.updateSingleBookingDB(updateData, id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'update successfully',
    data: result,
  });
});

export const BookingControllers = {
  createBooking,
  getAllBooking,
  getMyBooking,
  deleteSingleMyBooking,
  updateSingleBooking,
};
