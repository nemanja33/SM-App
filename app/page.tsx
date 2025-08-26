import { GetPosts } from "@/lib/repositories/postRepo";
import { getIronSessionData } from "@/lib/auth/session";
import Post from "@/components/ui/post/post";
import CreatePost from "@/components/forms/createPost/createPost";

export default async function Home() {
  const session = await getIronSessionData();

  const latestPosts = await GetPosts(4);
  
  return (
    <div className="wrap">
      {session.isLoggedIn ? (
        <>
          <CreatePost userName={session?.username} />
          {
            latestPosts.map(({ title, content, author }) => (
              <Post key={title} content={content} username={author.userName} />
            ))
          }
        </>
      ) : (
        <p>Please sign in</p>
      )}
    </div>
  );
}
