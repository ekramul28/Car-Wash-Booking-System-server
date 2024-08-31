import { Service } from '../service/service.model';
import { TBooking } from './bookings.interface';
import { Booking } from './bookings.model';
import AppError from '../../app/errors/AppError';
import httpStatus from 'http-status';
import { Slot } from '../slots/slots.model';

const createBookingIntoDB = async (payload: TBooking) => {
  const { serviceId, slotId } = payload;

  const service = await Service.isServiceExistsByCustomId(serviceId);
  if (!service) {
    throw new AppError(httpStatus.NOT_FOUND, 'Service  not found');
  }
  if (service?.isDeleted) {
    throw new AppError(httpStatus.BAD_REQUEST, 'This Service  is deleted');
  }

  const slot = await Slot.isSlotByCustomId(slotId);

  if (!slot) {
    throw new AppError(httpStatus.NOT_FOUND, 'Service  not found');
  }
  if (slot?.isBooked === 'booked') {
    throw new AppError(httpStatus.BAD_REQUEST, 'This Slot  is already Booked');
  }

  if (slot) {
    await Slot.findByIdAndUpdate(
      slotId,
      { isBooked: 'Booked' },
      {
        new: true,
      },
    );
  }

  const result = (
    await (
      await (await Booking.create(payload)).populate('serviceId')
    ).populate('slotId')
  ).populate('userId');

  return result;
};

const getAllBookingIntoDB = async () => {
  const result = await Booking.find()
    .populate('serviceId')
    .populate('slotId')
    .populate('userId');

  return result;
};
const getMyBookingIntoDB = async (id: string) => {
  const result = await Booking.find({ userId: id })
    .populate('serviceId')
    .populate('slotId')
    .populate('userId');

  return result;
};

export const BookingService = {
  createBookingIntoDB,
  getAllBookingIntoDB,
  getMyBookingIntoDB,
};
