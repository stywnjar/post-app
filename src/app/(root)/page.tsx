import { validateRequest } from "@/libs/lucia";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
  }
  return (
    <main className="flex justify-between">
      <h1>Hello</h1>
      <h1>Hello world!</h1>
    </main>
  );
}
