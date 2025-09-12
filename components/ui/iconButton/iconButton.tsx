import styles from "./styles.module.css";

interface IIconButton {
  icon: "comment" | "heart" | "arrow-up-right-from-square" | "trash-can";
  label: string;
  handleClick: () => void;
  active?: boolean;
  type?: "button" | "submit";
}

export default function IconButton({
  icon,
  label,
  handleClick,
  active,
  type = "submit",
}: IIconButton) {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={handleClick}
      aria-label={label}
    >
      <i className={`fa-solid fa-${icon} ${active ? styles.active : ""}`}></i>
    </button>
  );
}
