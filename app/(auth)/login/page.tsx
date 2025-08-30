import { Suspense } from "react";
import SignInForm from "./form";
import FormLoading from "@/components/Forms/FormLoading/FormLoading";

export default function SignUp() {
  return (
    <div>
      <Suspense fallback={<FormLoading />}>
        <SignInForm />
      </Suspense>
    </div>
  );
}
