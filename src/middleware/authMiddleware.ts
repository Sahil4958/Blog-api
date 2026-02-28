// import jwt from "jsonwebtoken";
// import { Request, Response, NextFunction } from "express";
// import { apiResponse } from "../utils/response";
// import { StatusCodes } from "http-status-codes";
// import { messages } from "../utils/messages";

// interface DecoededTokenInfo {
//   username: string;
//   role: string;
// }
// declare global {
//   namespace Express {
//     interface Request {
//       userInfo?: DecoededTokenInfo;
//     }
//   }
// }

// export const authMiddleware = (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ): void => {
//   const authHeader = req.headers["authorization"];

//   const token = authHeader && authHeader.split(" ")[1];

//   if (!token) {
//     apiResponse(res, StatusCodes.BAD_REQUEST, messages.TOKENLESS_ERROR);
//     return;
//   }

//   try {
//     const decoded = jwt.verify(
//       token,
//       process.env.JWT_SECRETKEY!,
//     ) as DecoededTokenInfo;
//     req.userInfo = decoded;
//     next();
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message:
//         "Access denied, token verification failed. Please log in to continue.",
//     });
//   }
// };

import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { apiResponse } from "../utils/response";
import { messages } from "../utils/messages";
import { IDecoded } from "../module/user/user.interface";
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
    apiResponse(res, StatusCodes.UNAUTHORIZED, "Invalid or expired token");
  }
};
