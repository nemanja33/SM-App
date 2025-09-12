"use client";

import { useActionState } from "react";
import GenericButton from "@/components/ui/button/button";
import { ActionSignIn } from "./actions";
import { EmptyFormState } from "@/lib/constants";
import InputField from "@/components/forms/input/input";
import FieldError from "@/components/forms/fieldError/fieldError";

export default function SignInForm() {
  const [state, action, pending] = useActionState(ActionSignIn, EmptyFormState);

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
        {state?.message && <p className="error-message">{state?.message}</p>}
      </form>
    </div>
  );
}
