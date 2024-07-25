interface HeaderProps {
  title: string;
  description: string;
}
export function AuthHeader({ title, description }: HeaderProps) {
  return (
    <section>
      <h1 className="font-bold text-3xl ">{title}</h1>
      <p className="text-white/65">{description}</p>
    </section>
  );
}
