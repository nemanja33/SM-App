import { GetPosts } from "@/lib/repositories/postRepo";
import { getIronSessionData } from "@/lib/auth/session";
import Post from "@/components/ui/post/post";
import CreatePost from "@/components/forms/createPost/createPost";
import { Post as TPost } from "@/lib/generated/prisma-client";

export default async function Home() {
  const session = await getIronSessionData();

  const latestPosts: TPost[] = await GetPosts(4);
  return (
    <div className="wrap">
      {session.isLoggedIn ? (
        <>
          <CreatePost userName={session?.username} />
          {latestPosts.map(({ title, content, author, id, likes }) => (
            <Post
              key={title}
              content={content}
              username={author.userName}
              id={id}
              likes={likes}
            />
          ))}
        </>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
}
