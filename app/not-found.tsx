import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404</h1>
      <p className={styles.message}>
        Oops! The page you are looking for does not exist.<br />
        It might have been moved or deleted.
      </p>
      <Link href="/" className={styles.homeLink}>
        ← Back to Home
      </Link>
    </div>
  )
}