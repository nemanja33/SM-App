import React from "react";
import styles from "./styles.module.css";

type SubmitButtonProps = {
  children: string;
  loading?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit";
};

export default function GenericButton({
  children,
  loading,
  disabled,
  type = "submit",
}: SubmitButtonProps) {
  return (
    <button disabled={disabled} type={type} className={styles.button}>
      {disabled ? loading : children}
    </button>
  );
}
