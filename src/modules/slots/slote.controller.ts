import httpStatus from 'http-status';
import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';
import { SlotService } from './slote.service';
import checkDataFound from '../../app/utils/checkDataFound';

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
  console.log(result);
  if (!checkDataFound(result, res)) return;

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Available slots retrieved successfully',
    data: result,
  });
});

export const SlotControllers = {
  createSlots,
  getAvailableSlots,
};
