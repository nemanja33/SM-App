import FormLoading from "@/components/Forms/FormLoading/FormLoading";
import SignUpForm from "@/components/Forms/SignUpForm/SignUpForm";
import { Suspense } from "react";

export default function SignUp() {
  return (
    <div>
      <Suspense fallback={<FormLoading />}>
        <SignUpForm />
      </Suspense>
    </div>
  )
}
