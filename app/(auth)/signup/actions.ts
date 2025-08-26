"use server"

import { redirect } from 'next/navigation'
import { ErrorMessage, FormState } from "@/lib/constants";
import { CreateUser } from "@/lib/repositories/userRepo";
import { SignUpFormSchema, SignUpSchema } from "@/lib/validation/authSchema";


export async function ActionSignUp(state: SignUpFormSchema, formData: FormData): Promise<FormState> {
  const validatedData = SignUpSchema.safeParse({
    userName: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedData?.success) {
    return ErrorMessage(validatedData.error)
  }

  await CreateUser(validatedData.data)
  
  redirect('/sign-in')
}

