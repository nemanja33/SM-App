import { Post } from "@/lib/generated/prisma-client";
import { GetPosts } from "@/lib/repositories/postRepo";
import { getIronSessionData } from "@/lib/auth/session";

export default async function Home() {
  const session = await getIronSessionData();

  const latestPosts = await GetPosts();
  
  return (
    <>
      {session.isLoggedIn ? (
        <>
          <p>Welcome back, {session.username}!</p>
          {
            latestPosts.map(({ title, content }: Post) => (
              <article key={title.toLowerCase().replaceAll(" ", "-")}>
                <h2>{title}</h2>
                <p>{content}</p>
              </article>
            ))
          }
        </>
      ) : (
        <p>Please sign in</p>
      )}
    </>
  );
}
