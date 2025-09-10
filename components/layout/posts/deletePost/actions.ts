"use server";

import { ErrorMessage, FormState, SuccessMessage } from "@/lib/constants";
import { DeletePost } from "@/lib/repositories/postRepo";
import { revalidatePath } from "next/cache";

export async function ActionDeletePost(
  state: FormState,
  formData: FormData,
): Promise<FormState> {
  const postId = formData.get("post-id") as string;

  if (!postId) {
    return ErrorMessage("No post!");
  }

  const deletedPost = await DeletePost(Number(postId));

  if (!deletedPost) {
    return ErrorMessage("Error deleting post!");
  }

  revalidatePath("/");

  return SuccessMessage("SUCCESS", "Post deleted!");
}
