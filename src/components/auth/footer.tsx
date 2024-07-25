import Link from "next/link";

interface AuthFooterProps {
  href: string;
  description: string;
}
export function AuthFooter({ href, description }: AuthFooterProps) {
  return (
    <section>
      <Link href={href} className="text-white/30 hover:text-white/80">
        {description}
      </Link>
    </section>
  );
}
