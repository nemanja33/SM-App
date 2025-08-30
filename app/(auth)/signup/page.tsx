import { Suspense } from "react";
import SignUpForm from "./form";
import FormLoading from "@/components/Forms/FormLoading/FormLoading";

export default function SignUp() {
  return (
    <div>
      <Suspense fallback={<FormLoading />}>
        <SignUpForm />
      </Suspense>
    </div>
  );
}
