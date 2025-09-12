"use client";
import IconButton from "@/components/ui/iconButton/iconButton";
import { EmptyFormState } from "@/lib/constants";
import { useActionState, useState } from "react";
import { ActionLikePost } from "./actions";
import styles from "./styles.module.css";

interface ILikePost {
  postId: string;
  isPostLiked: boolean;
  likeCount: number;
}

export default function LikePost({
  postId,
  isPostLiked,
  likeCount,
}: ILikePost) {
  const [isLiked, setIsLiked] = useState<boolean>(isPostLiked);
  const [_, action] = useActionState(ActionLikePost, EmptyFormState);
  function likePost() {
    setIsLiked(!isLiked);
  }

  return (
    <form action={action}>
      <input type="hidden" name="post-id" value={postId} />
      <IconButton
        icon="heart"
        label="Like post"
        handleClick={likePost}
        active={isLiked}
      />
      <span className={styles.likeCount}>{likeCount}</span>
    </form>
  );
}
