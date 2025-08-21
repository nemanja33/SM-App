"use server"

import { redirect } from 'next/navigation'
import { getIronSessionData } from "@/lib/auth/session";
import { ErrorMessage, FormState } from "@/lib/constants";
import { SignInUser } from "@/lib/repositories/userRepo";
import { SignInpSchema, SignUpFormSchema } from "@/lib/validation/authSchema";


export async function ActionSignIn(state: SignUpFormSchema, formData: FormData): Promise<FormState> {
  const validatedData = SignInpSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedData?.success) {
    return ErrorMessage(validatedData.error)
  }

  const { data } = validatedData;
  const user = await SignInUser(data);
  if (!user) {
    return ErrorMessage("PASSWORD")
  }


  // return SuccessMessage('SUCCESS', 'Signed in!')

  const session = await getIronSessionData();
  session.username = user.userName!;
  session.isLoggedIn = true;
  await session.save();
  
  redirect('/')
}