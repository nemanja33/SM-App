import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import PostActions from "@/components/layout/posts/postActions/postActions";
import DeletePost from "@/components/layout/posts/deletePost/deletePost";

interface IPost {
  content: string;
  username: string;
  avatarUrl?: string;
  id: number;
  time?: string;
}

export default function Post({
  content,
  username,
  avatarUrl,
  time = "just now",
  id,
}: IPost) {
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
          <PostActions />
        </div>
        <div>
          {/* limit to current user */}
          <DeletePost id={id} />
        </div>
      </article>
    </>
  );
}
