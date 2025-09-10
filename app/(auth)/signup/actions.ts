"use server";

import { redirect } from "next/navigation";
import { ErrorMessage, FormState } from "@/lib/constants";
import { CreateUser } from "@/lib/repositories/userRepo";
import { SignUpFormSchema, SignUpSchema } from "@/lib/validation/authSchema";
import { hashPassword } from "@/lib/auth/hash";

export async function ActionSignUp(
  state: SignUpFormSchema,
  formData: FormData,
): Promise<FormState> {
  const validatedData = SignUpSchema.safeParse({
    userName: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedData?.success) {
    return ErrorMessage(validatedData.error);
  }

  const hashedPassword = await hashPassword(validatedData.data.password);

  await CreateUser({ ...validatedData.data, password: hashedPassword });

  redirect("/sign-in");
}
