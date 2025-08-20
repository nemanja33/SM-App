import prisma from "../prisma";

export async function GetPosts(amount: number = 2) {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    take: amount
  });

  return posts
}