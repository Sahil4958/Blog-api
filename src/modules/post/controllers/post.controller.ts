import { StatusCodes } from "http-status-codes";
import { handleError } from "../../../utils/error";
import { apiResponse } from "../../../utils/response";
import {
  createPost,
  deletePost,
  getAllPost,
  getPostById,
  updatePost,
} from "../services/post.service";
import { Request, Response } from "express";
import { messages } from "../../../utils/messages";

const addPost = async (req: Request, res: Response) => {
  try {
    const userId = req.userInfo?.id;

    if (!userId) {
      return apiResponse(res, StatusCodes.UNAUTHORIZED, messages.UNAUTHORIZED);
    }

    const data = req.body;
    const post = await createPost(userId, data);

    return apiResponse(res, StatusCodes.CREATED, messages.POST_CREATED, post);
  } catch (error) {
    handleError(res, error);
  }
};

const getAll = async (req: Request, res: Response) => {
  try {
    const data = await getAllPost(req);
    return apiResponse(res, StatusCodes.OK, messages.POST_FETCHED, data);
  } catch (error) {
    return handleError(res, error);
  }
};

const getPost = async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;
    const data = await getPostById(id);
    return apiResponse(res, StatusCodes.OK, messages.POST_FETCHED, data);
  } catch (error) {
    return handleError(res, error);
  }
};

const updatePostById = async (req: Request, res: Response) => {
  try {
    const userId = req.userInfo?.id;
    if (!userId) {
      return apiResponse(res, StatusCodes.UNAUTHORIZED, messages.UNAUTHORIZED);
    }

    const postId = req.params.id as string;
    const post = await updatePost(postId, req.body);

    return apiResponse(res, StatusCodes.OK, messages.POST_UPDATED, post);
  } catch (error) {
    return handleError(res, error);
  }
};

const deletePostById = async (req: Request, res: Response) => {
  try {
    const userId = req.userInfo?.id;

    if (!userId) {
      return apiResponse(res, StatusCodes.UNAUTHORIZED, messages.UNAUTHORIZED);
    }

    const postId = req.params.id as string;

    await deletePost(postId);

    return apiResponse(res, StatusCodes.OK, messages.POST_DELETED);
  } catch (error) {
    return handleError(res, error);
  }
};

export { addPost, getAll, getPost, updatePostById, deletePostById };
