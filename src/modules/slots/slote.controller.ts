import httpStatus from 'http-status';
import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { SlotService } from './slote.service';

const createSlots = catchAsync(async (req, res) => {
  const result = await SlotService.createSlotIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Slots created successfully',
    data: result,
  });
});

const getAvailableSlots = catchAsync(async (req, res) => {
  const result = await SlotService.getAvailableSlots(req?.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Available slots retrieved successfully',
    data: result,
  });
});
const getUpdateSlots = catchAsync(async (req, res) => {
  const { id } = req.params;
  const query = req.body;
  const result = await SlotService.updateSlots(query, id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update slots retrieved successfully',
    data: result,
  });
});

export const SlotControllers = {
  createSlots,
  getAvailableSlots,
  getUpdateSlots,
};
