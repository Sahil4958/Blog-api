import type { IDecoded } from "../module/user/user.interface";

declare global {
  namespace Express {
    interface Request {
      userInfo?: IDecoded;
    }
  }
}

export {};
