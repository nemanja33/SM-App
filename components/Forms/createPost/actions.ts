"use server"

import { getIronSessionData } from "@/lib/auth/session";
import { ErrorMessage, FormState } from "@/lib/constants";
import { CreatePostFormSchema, CreatePostSchema } from "@/lib/validation/postSchema";
import { revalidatePath } from "next/cache";

export default async function ActionCreatePost(state: CreatePostFormSchema, formData: FormData) {
  const validatedData = CreatePostSchema.safeParse({
    post: formData.get('post')
  })

  if (!validatedData?.success) {
    return ErrorMessage(validatedData.error)
  }

  const session = await getIronSessionData();

  if (!session.isLoggedIn) {
    return ErrorMessage("Invalid user")
  }

  const { data } = validatedData;

  console.log(data);
  

  revalidatePath('/')
}