import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';

type Post = {
  content: string,
  username: string,
  avatarUrl?: string,
  time?: string
}

export default function Post({ content, username, avatarUrl, time = "just now" }: Post) {
  return (
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
        <span className={styles.action}>💬</span>
        <span className={styles.action}>🔁</span>
        <span className={styles.action}>❤️</span>
        <span className={styles.action}>↗️</span>
      </div>
    </article>
  )
}
