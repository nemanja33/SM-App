import styles from "./styles.module.css";

interface IIconButton {
  icon: "comment" | "heart" | "arrow-up-right-from-square" | "trash-can";
  label: string;
  handleClick: () => void;
}

export default function IconButton({ icon, label, handleClick }: IIconButton) {
  return (
    <button
      className={styles.button}
      type="button"
      onClick={handleClick}
      aria-label={label}
    >
      <i className={`fa-solid fa-${icon}`}></i>
    </button>
  );
}
