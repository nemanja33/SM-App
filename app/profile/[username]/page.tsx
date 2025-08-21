import { GetUser } from "@/lib/repositories/userRepo";
import { getIronSessionData } from "@/lib/auth/session";
import { notFound } from 'next/navigation'
import Post from "@/components/ui/post/post";
import CreatePost from "@/components/forms/createPost/createPost";
import styles from './styles.module.css'

type UserPage = {
  params: Promise<{
    username: string
  }>
}

type Post = {
  title: string,
  content: string
}

export default async function UserPage({
  params
}: UserPage) {
  const { username } = await params
  const session = await getIronSessionData();
  const user = await GetUser(username);

  if (!user) {
    notFound()
  }

  const isUserPage = session.username === user?.userName;
  const posts = user ? user.posts : [];

  return (
    <div className="wrap">
      <h1 className={styles.username}>{user?.userName}</h1>
      {
        isUserPage && (
          <CreatePost />
        )
      }
      {
        posts.map(({ title, content }: Post) => (
          <Post key={title} content={content} username={user?.userName} />
        ))
      }
    </div>
  )
}
