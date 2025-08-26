"use server"

import { getIronSessionData } from "@/lib/auth/session";
import { ErrorMessage, SuccessMessage } from "@/lib/constants";
import { CreatePost } from "@/lib/repositories/postRepo";
import { GetUser } from "@/lib/repositories/userRepo";
import { CreatePostFormSchema, CreatePostSchema } from "@/lib/validation/postSchema";
import { revalidatePath } from "next/cache";
import xss from "xss";

export default async function ActionCreatePost(state: CreatePostFormSchema, formData: FormData) {
  const validatedData = CreatePostSchema.safeParse({
    post: formData.get('post'),
    username: formData.get('username')
  })

  if (!validatedData?.success) {
    return ErrorMessage(validatedData.error)
  }

  const session = await getIronSessionData();

  if (!session.isLoggedIn) {
    return ErrorMessage("Invalid user")
  }

  const { post } = validatedData.data;

  const user = await GetUser(session.username);

  if (session.username !== user?.userName) {
    return ErrorMessage("You are not authorized to post as this user");
  }
  
  const sanitizedPost = xss(post);

  const result = await CreatePost(user, sanitizedPost)

  if (!result) {
    return ErrorMessage("Failed to create post");
  }
  
  revalidatePath('/')

  // return SuccessMessage("SUCCESS", "Post created!");
}