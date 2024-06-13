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

export const SlotControllers = {
  createSlots,
};
