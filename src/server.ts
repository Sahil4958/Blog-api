import app from "./app";
import config from "./config";
import connectDb from "./config/db";

const start = async () => {
  await connectDb();
  app.listen(config.port, () => {
    console.log(`Your Server has been running on ${config.port}`);
  });
};

start();
