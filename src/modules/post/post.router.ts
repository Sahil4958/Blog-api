import { authMiddleware } from "../../middleware/authMiddleware";
import express from "express";
import { validate } from "../../utils/validation";
import { createPostSchema, updatePostSchema } from "./post.validator";
import {
  addPost,
  deletePostById,
  getAll,
  getPost,
  updatePostById,
} from "./post.controller";
import { authorization } from "../../middleware/authorization";

const router = express.Router();

router.get("/", authMiddleware, getAll);
router.get("/:id", authMiddleware, getPost);

router.post("/add", authMiddleware, validate(createPostSchema), addPost);

router.patch(
  "/:id",
  authMiddleware,
  authorization,
  validate(updatePostSchema),
  updatePostById,
);

router.delete("/:id", authMiddleware, authorization, deletePostById);
export default router;
