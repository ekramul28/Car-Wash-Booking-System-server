/* eslint-disable @typescript-eslint/no-explicit-any */
import AppError from '../../app/errors/AppError';
import { Service } from '../service/service.model';
import { TSlots } from './slots.interface';
import { Slot } from './slots.model';

const createSlotIntoDB = async (payload: TSlots) => {
  const { service, date, startTime, endTime } = payload;

  const serviceData = await Service.findById(service);
  if (!serviceData) {
    throw new AppError(400, 'serviceId  not found');
  }
  if (serviceData.isDeleted) {
    throw new AppError(400, 'service is deleted');
  }
  let serviceDuration = 60;
  serviceDuration = serviceData?.duration;

  const generateTimeSlots = (
    startTime: string,
    endTime: string,
    duration: number,
  ) => {
    const timeToMinutes = (time: string): number => {
      const [hours, minutes] = time.split(':').map(Number);
      return hours * 60 + minutes;
    };

    const minutesToTime = (minutes: number): string => {
      const hours = Math.floor(minutes / 60)
        .toString()
        .padStart(2, '0');
      const mins = (minutes % 60).toString().padStart(2, '0');
      return `${hours}:${mins}`;
    };

    const startMinutes = timeToMinutes(startTime);
    const endMinutes = timeToMinutes(endTime);
    const totalDuration = endMinutes - startMinutes;
    const numberOfSlots = totalDuration / duration;

    const slots = [];
    for (let i = 0; i < numberOfSlots; i++) {
      const slotStart = startMinutes + i * duration;
      const slotEnd = slotStart + duration;
      slots.push({
        service,
        date,
        startTime: minutesToTime(slotStart),
        endTime: minutesToTime(slotEnd),
        isBooked: 'available',
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    return slots;
  };

  const slots = generateTimeSlots(startTime, endTime, serviceDuration);
  const result = await Slot.create(slots);

  return result;
};

//available slots

const getAvailableSlots = async (query: Record<string, unknown>) => {
  const { date, serviceId } = query;

  const queryObj: any = {};
  if (date) queryObj.date = date;
  if (serviceId) queryObj.service = serviceId;
  const result = await Slot.find(queryObj).populate('service').exec();

  return result;
};

export const SlotService = {
  createSlotIntoDB,
  getAvailableSlots,
};
