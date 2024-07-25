"use client";
import { Home, PenBox, SearchIcon, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function NavbarLinks() {
  const navlinks = [
    { to: "Home", href: "/", icon: <Home size={32} /> },
    { to: "Create", href: "/create", icon: <PenBox size={32} /> },
    { to: "Search", href: "/search", icon: <SearchIcon size={32} /> },
    { to: "Profile", href: "/profile", icon: <User size={32} /> },
  ];
  const path = usePathname();
  return (
    <section className="flex items-center gap-5">
      {navlinks.map((l) => {
        const active = path === l.href;
        return (
          <Link
            href={l.href}
            key={l.to}
            className={`${active ? "text-white/80" : "text-white/30"}  btn btn-link hover:text-white/80`}
          >
            {l.icon}
          </Link>
        );
      })}
    </section>
  );
}
