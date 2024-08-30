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
  const result = await BookingService.getAllBookingIntoDB();
  if (!checkDataFound(result, res)) return;
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All bookings retrieved successfully',
    data: result.map((response) => ({
      _id: response._id,
      customer: response.userId,
      service: response.serviceId,
      slot: response.slotId,

      createdAt: response.createdAt,
      updatedAt: response.updatedAt,
    })),
  });
});
const getMyBooking = catchAsync(async (req, res) => {
  const id = req.user.userId;
  console.log({ id });
  const result = await BookingService.getMyBookingIntoDB(id);
  console.log(result);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All bookings retrieved successfully',
    data: result,
  });
});

export const BookingControllers = {
  createBooking,
  getAllBooking,
  getMyBooking,
};
