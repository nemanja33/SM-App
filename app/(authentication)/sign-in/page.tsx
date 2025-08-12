import FormLoading from "@/components/Forms/FormLoading/FormLoading";
import SignInForm from "@/components/Forms/SignInForm/SignInForm";
import { Suspense } from "react";

export default function SignUp() {
  return (
    <div>
      <Suspense fallback={<FormLoading />}>
        <SignInForm />
      </Suspense>
    </div>
  )
}
