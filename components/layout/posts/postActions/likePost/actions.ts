"use server";

import { getIronSessionData } from "@/lib/auth/session";
import { ErrorMessage, FormState, SuccessMessage } from "@/lib/constants";
import {
  GetLikeStatus,
  UnlikePost,
  LikePost,
} from "@/lib/repositories/likeRepo";
import { GetUser } from "@/lib/repositories/userRepo";
import { revalidatePath } from "next/cache";

export async function ActionLikePost(
  state: FormState,
  formData: FormData,
): Promise<FormState> {
  const session = await getIronSessionData();
  if (!session) {
    return ErrorMessage("Not logged in!");
  }
  const user = await GetUser(session?.username);
  if (!user) {
    return ErrorMessage("No user!");
  }
  const postId = formData.get("post-id");
  if (!postId) {
    return ErrorMessage("No post!");
  }
  const userId = user?.id;

  const isPostLiked = await GetLikeStatus(userId, Number(postId));

  if (isPostLiked) {
    const unlikePost = await UnlikePost(userId, Number(postId));

    if (!unlikePost) {
      return ErrorMessage("Error unliking post");
    }

    revalidatePath("/");
    return SuccessMessage("SUCCESS", "Post unliked!");
  }

  const likePost = await LikePost(userId, Number(postId));

  if (!likePost) {
    return ErrorMessage("Error unliking post");
  }

  revalidatePath("/");
  return SuccessMessage("SUCCESS", "Post liked!");
}
