export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="max-w-lg mx-auto py-32">{children}</div>
    </div>
  );
}
