import { StatusCodes } from "http-status-codes";
import { handleError } from "../../../utils/error";
import { apiResponse } from "../../../utils/response";
import { createUser, loginUser } from "../services/user.service";
import { Request, Response } from "express";
import { messages } from "../../../utils/messages";

const register = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);

    return apiResponse(
      res,
      StatusCodes.CREATED,
      messages.USER_REGISTERED,
      user,
    );
  } catch (error) {
    handleError(res, error);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const user = await loginUser(req.body);

    return apiResponse(
      res,
      StatusCodes.OK,
      messages.USER_LOGIN_SUCCESS,
      user,
    );
  } catch (error) {
    handleError(res, error);
  }
};

export { register, login };
