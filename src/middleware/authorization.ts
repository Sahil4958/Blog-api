import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { Post } from "../modules/post/post.schema";
import { messages } from "../utils/messages";

export const authorization = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.userInfo?.id;
    const postId = req.params.id;

    if (!userId) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: messages.UNAUTHORIZED,
      });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: messages.POST_NOT_FOUND,
      });
    }

    if (post.user.toString() !== userId) {
      return res.status(StatusCodes.FORBIDDEN).json({
        message: "You can only modify your own post",
      });
    }

    next();
  } catch (error) {
    next(error);
  }
};
