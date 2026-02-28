import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 8000,
  mongoUrl: process.env.MONGO_URL || ("" as string),
  JWT_SECRETKEY: process.env.JWT_SECRETKEY,
};

export default config;
