import { User } from "../generated/prisma-client";
import prisma from "../prisma";

export async function GetPosts(amount: number = 2) {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    take: amount,
    include: { author: true }
  });

  return posts
}

export async function CreatePost(author: User, text: string) {
  const post = await prisma.post.create({
    data: {
      title: "title",
      content: text,
      author: { connect: { id: author.id } }
    }
  });

  return post
}