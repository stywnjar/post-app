import { AuthHeader, AuthFooter } from "@/components/auth";
import { RegisterForm } from "@/components/auth/register-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

export default function RegisterPage() {
  return (
    <main className=" w-11/12 md:w-8/12 lg:w-4/12">
      <AuthHeader title="Register" description="Lorem ipsum dolor sit amet." />
      <RegisterForm />
      <AuthFooter
        description="already have account ? Login here"
        href="/login"
      />
    </main>
  );
}
