"use client";
import IconButton from "@/components/ui/iconButton/iconButton";

export default function PostActions() {
  function postComment() {
    console.log("postComment");
  }

  function likePost() {
    console.log("likePost");
  }

  function sharePost() {
    console.log("sharePost");
  }

  return (
    <>
      <IconButton icon="heart" label="Like post" handleClick={likePost} />
      <IconButton
        icon="comment"
        label="Leave a comment"
        handleClick={postComment}
      />
      <IconButton
        icon="arrow-up-right-from-square"
        label="Share post"
        handleClick={sharePost}
      />
    </>
  );
}
