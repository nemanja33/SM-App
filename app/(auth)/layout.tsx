import styles from "./styles.module.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.authContainer}>
      <div className={styles.leftSide}>
        <div className={styles.brandSection}>
          <div className={styles.logo}>SM App</div>
          <div className={styles.tagline}>Connect with the world!</div>
          <ul className={styles.features}>
            <li>Share your thoughts instantly</li>
            <li>Follow interesting people</li>
            <li>Stay updated with trends</li>
            <li>Join conversations worldwide</li>
          </ul>
        </div>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.formSection}>
          <h1 className={styles.formTitle}>Welcome</h1>
          <p className={styles.formSubtitle}>Join the conversation today</p>
          {children}
        </div>
      </div>
    </div>
  );
}
