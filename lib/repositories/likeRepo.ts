import prisma from "../prisma";
import { Like } from "../generated/prisma-client";
import { cache } from "react";

export const GetLikeStatus = cache(async function LikePost(
  userId: number,
  postId: number,
): Promise<Like | null> {
  const like = await prisma.like.findUnique({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
  });

  return like;
});

export const LikePost = cache(async function LikePost(
  userId: number,
  postId: number,
): Promise<Like | null> {
  const like = await prisma.like.create({
    data: {
      userId,
      postId,
    },
  });

  return like;
});

export const UnlikePost = cache(async function UnlikePost(
  userId: number,
  postId: number,
): Promise<Like | null> {
  const like = await prisma.like.delete({
    where: {
      userId_postId: {
        userId,
        postId,
      },
    },
  });

  return like;
});
