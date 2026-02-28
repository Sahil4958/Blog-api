import type { IDecoded } from "../modules/user/user.interface";

declare global {
  namespace Express {
    interface Request {
      userInfo?: IDecoded;
    }
  }
}

export {};
