import httpStatus from 'http-status';
import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { BookingService } from './bookings.service';

const createBooking = catchAsync(async (req, res) => {
  const result = await BookingService.createBookingIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking Created successfully!',
    data: result,
  });
});
const getAllBooking = catchAsync(async (req, res) => {
  const result = await BookingService.getAllBookingIntoDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All bookings retrieved successfully',
    data: result.map((response) => ({
      _id: response._id,
      customer: response.userId,
      service: response.serviceId,
      slot: response.slotId,
      vehicleType: response.vehicleType,
      vehicleBrand: response.vehicleBrand,
      vehicleModel: response.vehicleModel,
      manufacturingYear: response.manufacturingYear,
      registrationPlate: response.registrationPlate,
      createdAt: response.createdAt,
      updatedAt: response.updatedAt,
    })),
  });
});
const getMyBooking = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BookingService.getMyBookingIntoDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All bookings retrieved successfully',
    data: result.map((response) => ({
      _id: response._id,
      customer: response.userId,
      service: response.serviceId,
      slot: response.slotId,
      vehicleType: response.vehicleType,
      vehicleBrand: response.vehicleBrand,
      vehicleModel: response.vehicleModel,
      manufacturingYear: response.manufacturingYear,
      registrationPlate: response.registrationPlate,
      createdAt: response.createdAt,
      updatedAt: response.updatedAt,
    })),
  });
});

export const BookingControllers = {
  createBooking,
  getAllBooking,
  getMyBooking,
};
