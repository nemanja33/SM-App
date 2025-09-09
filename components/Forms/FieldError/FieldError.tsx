import React from "react";
import { FormState } from "@/lib/constants";

type FieldErrorPros = {
  formState: FormState | undefined;
  name: string;
};

export default function FieldError({ formState, name }: FieldErrorPros) {
  if (!formState || !formState.fieldErrors || !formState.fieldErrors[name]) {
    return null;
  }
  return (
    <strong className="error-message">
      {formState?.fieldErrors[name]?.[0]}
    </strong>
  );
}
