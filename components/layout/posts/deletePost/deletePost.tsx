"use client";
import styles from "./styles.module.css";
import { useActionState, useCallback, useEffect } from "react";
import { ActionDeletePost } from "./actions";
import { EmptyFormState } from "@/lib/constants";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface IDeletePost {
  id: number;
  username: string;
}

export default function DeletePost({ id, username }: IDeletePost) {
  const router = useRouter();
  const [state, action, pending] = useActionState(
    ActionDeletePost,
    EmptyFormState,
  );

  const onSuccess = useCallback(() => {
    router.refresh();
  }, [router]);

  useEffect(() => {
    if (state.status === "ERROR" && !state.fieldErrors) {
      toast.error(state.message);
    } else if (state.message) {
      toast.success(state.message);
    }

    onSuccess?.();
  }, [state, onSuccess]);

  return (
    <form action={action} className={styles.delete}>
      <input type="hidden" name="username" value={username} />
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
