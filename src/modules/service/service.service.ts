import httpStatus from 'http-status';
import { TService } from './service.interface';
import { Service } from './service.model';
import AppError from '../../app/errors/AppError';
import { ObjectId, Types } from 'mongoose';

const createServiceIntoDB = async (payload: TService) => {
  const result = await Service.create(payload);
  return result;
};
const getAllServiceIntoDB = async () => {
  const result = await Service.find();
  return result;
};
const getSingleServiceIntoDB = async (id: string) => {
  const result = await Service.findById(id);
  return result;
};

const updateServiceIntoDB = async (id: string, payload: Partial<TService>) => {
  const { ...remainingServiceData } = payload;

  const service = await Service.find({ _id: id });
  if (!service) {
    throw new AppError(httpStatus.NOT_FOUND, 'Service  not found');
  }
  // if (service?.isDeleted) {
  //   throw new AppError(httpStatus.BAD_REQUEST, 'This Service  is deleted');
  // }

  const result = await Service.findByIdAndUpdate(id, remainingServiceData, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteServiceIntoDB = async (id: string) => {
  const result = await Service.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    },
  );
  return result;
};

export const ServiceServices = {
  createServiceIntoDB,
  getAllServiceIntoDB,
  getSingleServiceIntoDB,
  updateServiceIntoDB,
  deleteServiceIntoDB,
};
