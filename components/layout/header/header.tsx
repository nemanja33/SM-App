import { getIronSessionData } from "@/lib/auth/session";
import Link from "next/link";
import styles from "./styles.module.css";
import GenericLink from "@/components/ui/link/link";
import SignOut from "@/components/forms/signOut/SignOut";

export default async function Header() {
  const session = await getIronSessionData();

  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        TwitterClone
      </Link>

      <nav className={styles.nav}>
        {session.isLoggedIn ? (
          <div className={styles.userInfo}>
            <Link
              className={styles.username}
              href={`/profile/${session.username.toLowerCase().replaceAll(" ", "")}`}
            >
              @{session.username}
            </Link>
            <SignOut />
          </div>
        ) : (
          <>
            <GenericLink href="/login">Login</GenericLink>
            <GenericLink href="/signup">Sign up</GenericLink>
          </>
        )}
      </nav>
    </header>
  );
}
