import FormLoading from "@/components/forms/formLoading/formLoading";
import { Suspense } from "react";
import SignInForm from "./form";

export default function SignUp() {
  return (
    <div>
      <Suspense fallback={<FormLoading />}>
        <SignInForm />
      </Suspense>
    </div>
  )
}
