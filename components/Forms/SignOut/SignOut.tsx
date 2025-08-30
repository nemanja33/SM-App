import GenericButton from "@/components/ui/button/button";
import { ActionSignOut } from "./actions";
import styles from "./styles.module.css";

export default function SignOut() {
  return (
    <form action={ActionSignOut} className={styles.form}>
      <GenericButton type="submit">Sign Out</GenericButton>
    </form>
  );
}
