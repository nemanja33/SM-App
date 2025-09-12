import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import PostActions from "@/components/layout/posts/postActions/postActions";
import DeletePost from "@/components/layout/posts/deletePost/deletePost";
import { getIronSessionData } from "@/lib/auth/session";
import { Like } from "@/lib/generated/prisma-client";

interface IPost {
  content: string;
  username: string;
  avatarUrl?: string;
  id: number;
  likes: Like[];
  time?: string;
}

export default async function Post({
  content,
  username,
  avatarUrl,
  time = "just now",
  id,
  likes,
}: IPost) {
  const session = await getIronSessionData();
  return (
    <>
      <article className={styles.article}>
        <div className={styles.header}>
          <Link href={`/profile/${username}`} className={styles.username}>
            {avatarUrl ? (
              <Image src={avatarUrl} alt={username} className={styles.avatar} />
            ) : (
              <span className={styles.avatar}>{username[0]}</span>
            )}
            {username}
          </Link>
          <span className={styles.time}>· {time}</span>
        </div>
        <div className={styles.content}>{content}</div>
        <div className={styles.actions}>
          <PostActions postId={id} likeCount={likes.length} />
        </div>
        {username === session?.username && (
          <div>
            <DeletePost id={id} username={username} />
          </div>
        )}
      </article>
    </>
  );
}
