import FormLoading from "@/components/forms/formLoading/formLoading";
import { Suspense } from "react";
import SignUpForm from "./form";

export default function SignUp() {
  return (
    <div>
      <Suspense fallback={<FormLoading />}>
        <SignUpForm />
      </Suspense>
    </div>
  )
}
