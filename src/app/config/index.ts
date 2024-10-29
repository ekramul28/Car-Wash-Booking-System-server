import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  amr_pay_url: process.env.AMRPAYURL,
  amr_pay_id: process.env.AMRPAYID,
  amr_pay_key: process.env.AMRPAYKey,
  amr_pay_verify_url: process.env.AMRPAYVERIFYURL,
};
