"use client"

import { ActionSignUp } from "@/app/(authentication)/_actions/formActions";
import SubmitButton from "@/components/SubmitButton/SubmitButton";
import { useActionState } from "react";
import FieldError from "../FieldError/FieldError";
import { FormState } from "@/zod/schema";
import InputField from "../InputField/InputField";

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
          <InputField label="username" type="text" placeholder="Username" default={} />
          <FieldError formState={state} name="username" />
        </div>
        <div>
          <InputField label="email" type="text" placeholder="Email" />
          <FieldError formState={state} name="email" />
        </div>
        <div>
          <InputField label="password" type="password" placeholder="Password" />
          <FieldError formState={state} name="password" />
        </div>
        <SubmitButton label="Create" loading="Creating..." disabled={pending} />
        <p>{state?.message}</p>
      </form>
    </div>
  )
}
