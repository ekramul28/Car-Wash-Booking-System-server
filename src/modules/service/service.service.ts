import { TService } from './service.interface';
import { Service } from './service.model';

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
