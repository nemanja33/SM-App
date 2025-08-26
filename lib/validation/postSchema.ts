import z from "zod";

export const CreatePostSchema = z.object({
  post: z
    .string()
    .min(1, { message: "Post is required" })
    .max(500, { message: "Post must be at max 500 characters long" })
    .trim(),
  username: z
    .string()
    .min(3, { message: 'Username must be at least 8 characters long' })
    .max(16, { message: "Username must be at max 16 characters long" })
    .regex(/^[a-zA-Z0-9]+$/, { message: 'Username can only contain letters and numbers' }),
})

export type CreatePostFormSchema = {
  errors?: {
    post?: string[],
  }
  message?: string
} | undefined