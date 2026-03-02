import { Router } from "express";
import userRoutes from "../modules/user/routers/user.router";
import postRouter from "../modules/post/routers/post.router";

const router = Router();

router.use("/user", userRoutes);
router.use("/post", postRouter);

export default router;
