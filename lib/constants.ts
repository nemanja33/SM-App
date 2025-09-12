import { ZodError } from "zod";

export type FormState = {
  status: "UNSET" | "SUCCESS" | "ERROR";
  message: string;
  fieldErrors: Record<string, string[] | undefined>;
};

export const EmptyFormState: FormState = {
  status: "UNSET" as const,
  message: "",
  fieldErrors: {},
};

export function SuccessMessage(
  status: FormState["status"],
  message: string,
): FormState {
  console.log({ status, message });
  return {
    status,
    message,
    fieldErrors: {},
  };
}

export function ErrorMessage(error: unknown) {
  switch (true) {
    case error instanceof ZodError:
      return {
        status: "ERROR" as const,
        message: "",
        fieldErrors: error.flatten().fieldErrors,
        timestamp: Date.now(),
      };

    case error instanceof Error:
      return {
        status: "ERROR" as const,
        message: error.message,
        fieldErrors: {},
        timestamp: Date.now(),
      };

    case error === "PASSWORD":
      return {
        status: "ERROR" as const,
        message: "Incorrect email or password",
        fieldErrors: {},
        timestamp: Date.now(),
      };

    default:
      return {
        status: "ERROR" as const,
        message: error as string,
        fieldErrors: {},
        timestamp: Date.now(),
      };
  }
}
