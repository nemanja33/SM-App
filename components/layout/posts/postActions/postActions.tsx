import LikePost from "./likePost/likePost";
import { GetLikeStatus } from "@/lib/repositories/likeRepo";
import { GetUser } from "@/lib/repositories/userRepo";
import { getIronSessionData } from "@/lib/auth/session";

interface IPostActions {
  postId: number;
  likeCount: number;
}

export default async function PostActions({ postId, likeCount }: IPostActions) {
  const session = await getIronSessionData();
  if (!session) return <></>;
  const user = await GetUser(session?.username);
  if (!user) return <></>;
  const likeStatus = await GetLikeStatus(user.id, postId);

  return (
    <>
      <LikePost
        postId={postId.toString()}
        isPostLiked={likeStatus ? true : false}
        likeCount={likeCount}
      />
      {/*<IconButton
        icon="comment"
        label="Leave a comment"
        handleClick={postComment}
      />
      <IconButton
        icon="arrow-up-right-from-square"
        label="Share post"
        handleClick={sharePost}
      />*/}
    </>
  );
}
