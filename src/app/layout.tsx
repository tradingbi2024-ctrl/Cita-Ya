import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "CitaYa",
  description: "Plataforma SaaS para gestión de citas y clientes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        style={{
          margin: 0,
          fontFamily: "sans-serif",
          backgroundColor: "#fafafa",
        }}
      >
        <header
          style={{
            padding: "1rem 2rem",
            borderBottom: "1px solid #e5e5e5",
            backgroundColor: "#ffffff",
          }}
        >
          <nav
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <strong>CitaYa</strong>
            <Link href="/">Inicio</Link>
            <Link href="/app">Dashboard</Link>
            <Link href="/auth">Login</Link>
          </nav>
        </header>

        <main style={{ padding: "2rem" }}>
          {children}
        </main>
      </body>
    </html>
  );
}