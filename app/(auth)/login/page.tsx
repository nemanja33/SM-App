import { Suspense } from "react";
import SignInForm from "./form";
import FormLoading from "@/components/forms/formLoading/formLoading";

export default function SignUp() {
  return (
    <div>
      <Suspense fallback={<FormLoading />}>
        <SignInForm />
      </Suspense>
    </div>
  );
}
