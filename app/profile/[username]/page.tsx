import { GetUser } from "@/lib/repositories/userRepo";
import { getIronSessionData } from "@/lib/auth/session";
import { notFound } from "next/navigation";
import Post from "@/components/ui/post/post";
import styles from "./styles.module.css";
import CreatePost from "@/components/forms/createPost/createPost";

type UserPage = {
  params: Promise<{
    username: string;
  }>;
};

export default async function UserPage({ params }: UserPage) {
  const { username } = await params;
  const session = await getIronSessionData();
  const user = await GetUser(username);

  if (!user) {
    notFound();
  }

  const isUserPage = session.username === user?.userName;
  const posts = user ? user.posts : [];

  return (
    <div className="wrap">
      <h1 className={styles.username}>{user?.userName}</h1>
      {isUserPage && <CreatePost userName={session?.username} />}
      {posts.map(({ title, content, id }) => (
        <Post key={title} content={content} username={user?.userName} id={id} />
      ))}
    </div>
  );
}
