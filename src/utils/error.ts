import { Response } from "express";
import { ZodError } from "zod";
import { apiResponse } from "./response";
import { StatusCodes } from "http-status-codes";

export const handleError = async (res: Response, error: any): Promise<void> => {
  if (error instanceof ZodError) {
    apiResponse(res, StatusCodes.BAD_REQUEST, "Validation Error", error.issues);
    return;
  }
  apiResponse(
    res,
    StatusCodes.INTERNAL_SERVER_ERROR,
    (error as Error)?.message || "Something Went Wrong",
  );
  return;
};
