import { FormState } from "@/zod/schema";
import { ZodError } from "zod";

// add toast messages

export function SuccessMessage(status: FormState['status'], message: string): FormState {
  return {
    status,
    message,
    fieldErrors: {},
  }
}

export function ErrorMessage(error: unknown) {
  switch (true) {
    case error instanceof ZodError:
      return {
        status: 'ERROR' as const,
        message: '',
        fieldErrors: error.flatten().fieldErrors,
        timestamp: Date.now(),
      };
    
    case error instanceof Error:
      return {
        status: 'ERROR' as const,
        message: error.message,
        fieldErrors: {},
        timestamp: Date.now(),
      };
    
    case error === 'PASSWORD':
      return {
        status: 'ERROR' as const,
        message: "Incorrect email or password",
        fieldErrors: {},
        timestamp: Date.now(),
      };
    
    default:
      return {
        status: 'ERROR' as const,
        message: 'An unknown error occurred',
        fieldErrors: {},
        timestamp: Date.now(),
      };
  }
};