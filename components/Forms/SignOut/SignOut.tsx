import { ActionSignOut } from './actions';
import styles from './styles.module.css';

export default function SignOut() {
    return (
        <form action={ActionSignOut} className={styles.form}>
            <button type="submit" className={styles.button}>
                Sign Out
            </button>
        </form>
    )
}