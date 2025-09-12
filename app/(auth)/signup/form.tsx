"use client";

import { useActionState } from "react";
import GenericButton from "@/components/ui/button/button";
import { EmptyFormState } from "@/lib/constants";
import { ActionSignUp } from "./actions";
import InputField from "@/components/forms/input/input";
import FieldError from "@/components/forms/fieldError/fieldError";

export default function SignUpForm() {
  const [state, action, pending] = useActionState(ActionSignUp, EmptyFormState);

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
        <GenericButton loading="Signing up..." disabled={pending}>
          Sign up
        </GenericButton>
        <p>{state?.message}</p>
      </form>
    </div>
  );
}
