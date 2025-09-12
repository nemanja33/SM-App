"use client";

import GenericButton from "@/components/ui/button/button";
import styles from "./styles.module.css";
import { useActionState, useEffect } from "react";
import { EmptyFormState } from "@/lib/constants";
import toast from "react-hot-toast";
import InputField from "../input/input";
import ActionCreatePost from "./actions";
import FieldError from "../fieldError/fieldError";

export default function CreatePost({ userName }: { userName: string }) {
  const [state, action, pending] = useActionState(
    ActionCreatePost,
    EmptyFormState,
  );

  useEffect(() => {
    if (state.status === "ERROR" && !state.fieldErrors) {
      toast.error(state.message);
    } else if (state.message) {
      toast.success(state.message);
    }
  }, [state]);

  return (
    <form className={styles.form} action={action}>
      <input type="hidden" name="username" value={userName} />
      <InputField
        label="post"
        type="textarea"
        placeholder="Type something..."
      />
      <FieldError formState={state} name="post" />
      <GenericButton disabled={pending} loading="Loading...">
        Submit
      </GenericButton>
    </form>
  );
}
