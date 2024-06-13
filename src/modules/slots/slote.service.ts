import QueryBuilder from '../../app/builder/QueryBuilder';
import AppError from '../../app/errors/AppError';
import { Service } from '../service/service.model';
import { TSlots } from './slots.interface';
import { Slot } from './slots.model';
import { slotSearchableFields } from './slote.constant';

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
  console.log(query);
  const availableSlotsQuery = new QueryBuilder(
    Slot.find().populate('service'),
    query,
  )
    .search(slotSearchableFields)
    .fields()
    .sort()
    .paginate()
    .filter();

  const result = await availableSlotsQuery.modelQuery;
  return result;
};

export const SlotService = {
  createSlotIntoDB,
  getAvailableSlots,
};
