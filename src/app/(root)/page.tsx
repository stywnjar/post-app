import { validateRequest } from "@/libs/lucia";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const { user } = await validateRequest();
  if (!user) {
    redirect("/login");
  }
  return (
    <main className="flex justify-between">
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </main>
  );
}
