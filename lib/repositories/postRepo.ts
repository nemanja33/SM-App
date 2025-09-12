import { Post, User } from "../generated/prisma-client";
import prisma from "../prisma";

export async function GetPosts(amount: number = 2): Promise<Post[]> {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    take: amount,
    include: { author: true, likes: true },
  });

  return posts;
}

export async function CreatePost(author: User, text: string): Promise<Post> {
  const post = await prisma.post.create({
    data: {
      title: `${text.slice(0, 50)}-${Date.now()}`,
      content: text,
      author: { connect: { id: author.id } },
    },
  });

  return post;
}

export async function DeletePost(id: number): Promise<Post> {
  await new Promise((res) => setTimeout(res, 500));
  const post = await prisma.post.delete({
    where: { id },
  });

  return post;
}
