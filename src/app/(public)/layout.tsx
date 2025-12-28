import Link from "next/link";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header
        style={{
          padding: "1rem 2rem",
          borderBottom: "1px solid #e5e5e5",
          backgroundColor: "#ffffff",
        }}
      >
        <nav style={{ display: "flex", gap: "1rem" }}>
          <strong>CitaYa</strong>
          <Link href="/">Inicio</Link>
          <Link href="/auth">Login</Link>
        </nav>
      </header>

      <main style={{ padding: "2rem" }}>
        {children}
      </main>
    </>
  );
}