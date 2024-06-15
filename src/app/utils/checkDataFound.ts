import { Response } from 'express';

const checkDataFound = (data: any, res: Response) => {
  if (!data || (Array.isArray(data) && data.length === 0)) {
    res.status(404).json({
      success: false,
      statusCode: 404,
      message: 'No Data Found',
      data: [],
    });
    return false;
  }
  return true;
};

export default checkDataFound;
