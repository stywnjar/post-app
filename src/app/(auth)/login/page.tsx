import { AuthFooter, AuthHeader, LoginForm } from "@/components/auth";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};
export default function LoginPage() {
  return (
    <main className=" w-11/12 md:w-8/12 lg:w-4/12">
      <AuthHeader title="Login" description="Lorem ipsum dolor sit amet." />
      <LoginForm />
      <AuthFooter
        description="doesn't have account yet ? Register here"
        href="/register"
      />
    </main>
  );
}
