import dotenv from 'dotenv';

dotenv.config();

export const config = {
  mongoURI: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  port: process.env.PORT || 5000
};