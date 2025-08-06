import { getIronSessionData } from "@/session/session"
import SignOut from "../Forms/SignOut/SignOut";
import Link from "next/link";
import styles from "./styles.module.css";

export default async function Header() {
  const session = await getIronSessionData();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        TwitterClone
      </Link>
      
      <nav className={styles.nav}>
        {
          session.isLoggedIn ? (

            <div className={styles.userInfo}>
              <Link className={styles.username} href={session.username.toLowerCase().replaceAll(' ', '')}>@{session.username}</Link>
              <SignOut />
            </div>
          ) : (
            <>
              <Link href="/sign-in" className={`${styles.authLink} ${styles.signInLink}`}>
                Sign In
              </Link>
              <Link href="/sign-up" className={`${styles.authLink} ${styles.signUpLink}`}>
                Sign Up
              </Link>
            </>
          )
        }
      </nav>
    </header>
  )
}