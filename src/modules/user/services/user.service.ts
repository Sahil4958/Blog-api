import bcrypt from "bcryptjs";
import { User } from "./user.schema";
import { IUser } from "./user.interface";
import { messages } from "../../utils/messages";
import jwt from "jsonwebtoken";
import config from "../../config";

const createUser = async (data: IUser) => {
  const { name, email, password } = data;

  const existingUser = await User.findOne({ email: email });

  if (existingUser) {
    throw new Error(messages.EXISTING_USER);
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const userData = { ...data, password: hashedPassword };

  const user = await User.create(userData);

  return {
    name: user.name,
    email: user.email,
  };
};

const loginUser = async (data: IUser) => {
  const { email, password } = data;

  const user = await User.findOne({ email: email });
  if (!user) {
    throw new Error(messages.USER_NOT_FOUND);
  }

  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    throw new Error(messages.INCORRECT_PASSWORD);
  }

  const token = jwt.sign(
    {
      id: user._id,
      name: user.name,
      email: user.email,
    },
    config.JWT_SECRETKEY!,
    { expiresIn: "7d" },
  );

  return {
    token: token,
    user: {
      name: user.name,
      email: user.email,
    },
  };
};
export { createUser, loginUser };
