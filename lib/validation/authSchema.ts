import z from "zod";

export const SignUpSchema = z.object({
  userName: z
    .string()
    .min(3, { message: 'Username must be at least 8 characters long' })
    .max(16, { message: "Username must be at max 16 characters long" })
    .regex(/^[a-zA-Z0-9]+$/, { message: 'Username can only contain letters and numbers' }),
  email: z
    .email({ message: 'Please enter a valid email.' })
    .trim(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { message: 'Password must contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Password must contain at least one number.' })
    .trim(),
})

export const SignInpSchema = z.object({
  email: z
    .email({ message: 'Please enter a valid email.' })
    .trim(),
  password: z
    .string()
    .trim(),
})

export type SignInFormSchema = {
  errors?: {
    email?: string[]
    password?: string[]
  }
  message?: string
} | undefined

export type SignUpFormSchema = {
  errors?: {
    userName?: string[]
    email?: string[]
    password?: string[]
  }
  message?: string
} | undefined