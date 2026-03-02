import { Post } from "../post/models/post.schema";
import IPost from "../post/interfaces/post.interface"
import { messages } from "../../utils/messages";

const createPost = async (userId: string, data: IPost) => {
  const post = await Post.create({ ...data, user: userId });
  return { title: post.title, content: post.content, tags: post.tags };
};

const getAllPost = async (req: any) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;

  const skip = (page - 1) * limit;

  let filter: any = {};

  if (req.query.search) {
    filter.title = {
      $regex: req.query.search,
      $options: "i",
    };
  }

  const totalPosts = await Post.countDocuments(filter);

  const posts = await Post.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  return {
    totalPosts,
    currentPage: page,
    totalPages: Math.ceil(totalPosts / limit),
    posts,
  };
};

const getPostById = async (id: string) => {
  const post = await Post.findById(id);
  if (!post) {
    throw new Error(messages.POST_NOT_FOUND);
  }
  return {
    title: post.title,
    content: post.content,
    tags: post.tags,
  };
};

const updatePost = async (postId: string, data: IPost) => {
  if (!postId) {
    throw new Error(messages.POST_NOT_FOUND);
  }

  const updatedPost = await Post.findByIdAndUpdate(postId, data, {
    new: true,
  }).populate("user", "name email");

  return updatedPost;
};

const deletePost = async (postId: string) => {
  if (!postId) {
    throw new Error(messages.POST_NOT_FOUND);
  }

  const deleted = await Post.findByIdAndDelete(postId);
  return deleted;
};
export { createPost, getAllPost, getPostById, updatePost, deletePost };
