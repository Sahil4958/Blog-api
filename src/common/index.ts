import { Router } from "express";
import userRoutes from "../module/user/user.router";
import postRouter from "../module/post/post.router";

const router = Router();

router.use("/user", userRoutes);
router.use("/post", postRouter);

export default router;
