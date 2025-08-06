"use server"

import { FormState, SignInpSchema, SignUpFormSchema, SignUpSchema } from "@/zod/schema";
import { GetUser } from "@/lib";
import { redirect } from 'next/navigation'
import { getIronSessionData } from "@/session/session";
import { ErrorMessage, SuccessMessage } from "./messages";


export async function ActionSignUp(state: SignUpFormSchema, formData: FormData): Promise<FormState> {
  const validatedData = SignUpSchema.safeParse({
    userName: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedData?.success) {
    return ErrorMessage(validatedData.error)
  }

  return SuccessMessage('SUCCESS', 'User created!')
}


export async function ActionSignIn(state: SignUpFormSchema, formData: FormData): Promise<FormState> {
  const validatedData = SignInpSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedData?.success) {
    return ErrorMessage(validatedData.error)
  }

  const { data } = validatedData;
  const user = await GetUser(data);
  if (!user) {
    return ErrorMessage("PASSWORD")
  }

  const session = await getIronSessionData();
  session.username = user.userName;
  session.isLoggedIn = true;
  await session.save();
  
  redirect('/')
}

export async function ActionSignOut(): Promise<void> {
  const session = await getIronSessionData();

  session.destroy()
  redirect('/sign-in')
}