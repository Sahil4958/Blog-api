import { Response } from "express";
import { StatusCodes } from "http-status-codes";

export const apiResponse = async <T>(
  res: Response,
  code: number,
  message: string,
  data?: T,
) => {
  const status =
    code >= StatusCodes.OK && code < StatusCodes.BAD_REQUEST
      ? "success"
      : "fail";
  if (res.headersSent) return;
  res.status(code).json({
    status,
    message,
    data: data ?? [],
  });
};
