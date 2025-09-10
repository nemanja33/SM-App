"use client";
import styles from "./styles.module.css";
import { useActionState, useEffect } from "react";
import { ActionDeletePost } from "./actions";
import { FormState } from "@/lib/constants";
import toast from "react-hot-toast";

const EMPTY_FORM_STATE: FormState = {
  status: "UNSET" as const,
  message: "",
  fieldErrors: {},
};

interface IDeletePost {
  id: number;
}

export default function DeletePost({ id }: IDeletePost) {
  const [state, action, pending] = useActionState(
    ActionDeletePost,
    EMPTY_FORM_STATE,
  );

  useEffect(() => {
    if (state.status === "ERROR" && !state.fieldErrors) {
      toast.error(state.message);
    } else if (state.message) {
      toast.success(state.message);
    }
  }, [state]);

  return (
    <form action={action} className={styles.delete}>
      <input type="hidden" name="post-id" value={id} />
      <button
        className={styles.button}
        type="submit"
        aria-label="Delete post"
        disabled={pending}
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </form>
  );
}
