import httpStatus from 'http-status';
import { TService } from './service.interface';
import { Service } from './service.model';
import AppError from '../../app/errors/AppError';
import QueryBuilder from '../../app/builder/QueryBuilder';

const ProductSearchableFields = ['title', 'price', 'description'];

const createServiceIntoDB = async (payload: TService) => {
  const result = await Service.create(payload);
  return result;
};
const getAllServiceIntoDB = async (query: Record<string, unknown>) => {
  const ServiceQuery = new QueryBuilder(Service.find(), query)
    .search(ProductSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await ServiceQuery.modelQuery;
  const meta = await ServiceQuery.countTotal();

  return {
    meta,
    result,
  };
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
