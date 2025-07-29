
import { Prisma, PrismaClient } from "../lib/generated/prisma-client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    userName: "DotHog",
    email: "dothog@prisma.io",
    password: 'aaaaaa12',
    posts: {
      create: [
        {
          title: "Join the Prisma Discord",
          content: "https://pris.ly/discord",
        },
        {
          title: "Prisma on YouTube",
          content: "https://pris.ly/youtube",
        },
      ],
    },
  },
  {
    userName: "Bob",
    email: "bob@prisma.io",
    password: 'test123',
    posts: {
      create: [
        {
          title: "Follow Prisma on Twitter",
          content: "https://www.twitter.com/prisma",
        },
      ],
    },
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();