import { Router } from "express";
import userRoutes from "../modules/user/user.router";
import postRouter from "../modules/post/post.router";

const router = Router();

router.use("/user", userRoutes);
router.use("/post", postRouter);

export default router;
