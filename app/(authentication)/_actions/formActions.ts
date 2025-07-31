"use server"

import { FormState, SignUpFormSchema, SignUpSchema } from "@/zod/schema";
import { ZodError } from "zod";

function HandlingSuccess(status: FormState['status'], message: string): FormState {
  return {
    status,
    message,
    fieldErrors: {},
  }
}

function HandlingError(error: unknown) {
  if (error instanceof ZodError) {
    return {
      status: 'ERROR' as const,
      message: '',
      fieldErrors: error.flatten().fieldErrors,
      timestamp: Date.now(),
    };
  } else if (error instanceof Error) {
    return {
      status: 'ERROR' as const,
      message: error.message,
      fieldErrors: {},
      timestamp: Date.now(),
    };
  } else {
    return {
      status: 'ERROR' as const,
      message: 'An unknown error occurred',
      fieldErrors: {},
      timestamp: Date.now(),
    };
  }
};

export async function ActionSignUp(state: SignUpFormSchema, formData: FormData) {
  const validatedData = SignUpSchema.safeParse({
    userName: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedData?.success) {
    return HandlingError(validatedData.error)
  }

  return HandlingSuccess('SUCCESS', 'User created!')
}