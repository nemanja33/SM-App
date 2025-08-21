import z from "zod";

export const CreatePostSchema = z.object({
  post: z
    .string()
    .max(500, { message: "Post must be at max 500 characters long" })
    .trim()
})

export type CreatePostFormSchema = {
  errors?: {
    post?: string[]
  }
  message?: string
} | undefined