"use client"

import { ActionSignIn } from "@/app/(authentication)/_actions/formActions";
import { useActionState } from "react";
import FieldError from "../FieldError/FieldError";
import { FormState } from "@/zod/schema";
import InputField from "../InputField/InputField";
import GenericButton from "@/components/Buttons/GenericButton/GenericButton";

const EMPTY_FORM_STATE: FormState = {
  status: 'UNSET' as const,
  message: '',
  fieldErrors: {},
};

export default function SignInForm() {
  const [state, action, pending] = useActionState(ActionSignIn, EMPTY_FORM_STATE);

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
        <GenericButton label="Sign In" loading="Signing in..." disabled={pending} />
        <p>{state?.message}</p>
      </form>
    </div>
  )
}
