import { z } from "zod";

const addUserSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name cannot exceed 50 characters")
    .trim(),

  email: z.string().email("Invalid email format").toLowerCase().trim(),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password too long"),
});

const loginUserSchema = z.object({
  email: z.string().email("Invalid email format").toLowerCase().trim(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password too long"),
});

export { addUserSchema, loginUserSchema };
