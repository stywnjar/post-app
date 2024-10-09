import { LogoutButton } from "@/components/auth";
import { NavbarLinks } from "./navbar-links";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent  backdrop-blur-lg">
      <nav className="max-w-5xl mx-auto py-2 flex items-center justify-between">
        <section className="w-3/12">
          <h1 className="font-bold text-2xl">JPost</h1>
        </section>
        <NavbarLinks />
        <section className="w-3/12 flex justify-end">
          <LogoutButton />
        </section>
      </nav>
    </header>
  );
}
