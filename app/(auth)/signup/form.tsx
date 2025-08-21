"use client"

import { useActionState } from "react";
import GenericButton from "@/components/ui/button/button";
import InputField from "@/components/forms/input/input";
import FieldError from "@/components/forms/fieldError/fieldError";
import { FormState } from "@/lib/constants";
import { ActionSignUp } from "./actions";

const EMPTY_FORM_STATE: FormState = {
  status: 'UNSET' as const,
  message: '',
  fieldErrors: {},
};

export default function SignUpForm() {
  const [state, action, pending] = useActionState(ActionSignUp, EMPTY_FORM_STATE);

  return (
    <div>
      <form action={action}>
        <div>
          <InputField label="Username" type="text" placeholder="Username" />
          <FieldError formState={state} name="username" />
        </div>
        <div>
          <InputField label="Email" type="text" placeholder="Email" />
          <FieldError formState={state} name="email" />
        </div>
        <div>
          <InputField label="Password" type="password" placeholder="Password" />
          <FieldError formState={state} name="password" />
        </div>
        <GenericButton label="Sign Up" loading="Signing up..." disabled={pending} />
        <p>{state?.message}</p>
      </form>
    </div>
  )
}
