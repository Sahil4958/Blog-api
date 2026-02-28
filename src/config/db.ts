import mongoose from "mongoose";
import config from "./index";

const connectDb = async () => {
  try {
    await mongoose.connect(config.mongoUrl);
    console.log("Your mongodb has been connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDb;
