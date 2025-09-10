"use client";

import { useActionState } from "react";
import GenericButton from "@/components/ui/button/button";
import { ActionSignIn } from "./actions";
import { FormState } from "@/lib/constants";
import InputField from "@/components/forms/input/input";
import FieldError from "@/components/forms/fieldError/fieldError";

const EMPTY_FORM_STATE: FormState = {
  status: "UNSET" as const,
  message: "",
  fieldErrors: {},
};

export default function SignInForm() {
  const [state, action, pending] = useActionState(
    ActionSignIn,
    EMPTY_FORM_STATE,
  );

  return (
    <div>
      <form action={action}>
        <div>
          <InputField label="Email" type="text" placeholder="Email" />
          <FieldError formState={state} name="email" />
        </div>
        <div>
          <InputField label="Password" type="password" placeholder="Password" />
          <FieldError formState={state} name="password" />
        </div>
        <GenericButton loading="Signing in..." disabled={pending}>
          Sign in
        </GenericButton>
        <p>{state?.message}</p>
      </form>
    </div>
  );
}
