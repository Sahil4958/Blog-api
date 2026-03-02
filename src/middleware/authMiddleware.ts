import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { apiResponse } from "../utils/response";
import { messages } from "../utils/messages";
import { IDecoded } from "../modules/user/interfaces/user.interface";
import config from "../config";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    apiResponse(res, StatusCodes.UNAUTHORIZED, messages.TOKENLESS_ERROR);
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(
      token,
      config.JWT_SECRETKEY as string,
    ) as IDecoded;

    req.userInfo = decoded;
    next();
  } catch (error) {
    apiResponse(res, StatusCodes.UNAUTHORIZED, messages.INVALID_TOKEN);
  }
};
