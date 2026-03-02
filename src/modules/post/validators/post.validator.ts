import { z } from "zod";

const createPostSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(150, "Title cannot exceed 150 characters")
    .trim(),

  content: z
    .string()
    .min(1, "Content is required")
    .min(10, "Content must be at least 10 characters"),

  tags: z
    .array(z.string().trim().min(1, "Tag cannot be empty"))
    .min(1, "At least one tag is required"),
});

const updatePostSchema = createPostSchema.partial();

export { createPostSchema, updatePostSchema };
