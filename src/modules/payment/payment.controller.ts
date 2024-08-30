import httpStatus from 'http-status';
import { createPaymentLinkService } from './payment.service';
import catchAsync from '../../app/utils/catchAsync';
import sendResponse from '../../app/utils/sendResponse';

const stripePayment = catchAsync(async (req, res) => {
  const { id } = req.body;
  const result = await createPaymentLinkService.createPaymentLink(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'link ',
    data: result,
  });
});

export const LinkControllers = {
  stripePayment,
};
