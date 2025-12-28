import Link from "next/link";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: "220px",
          borderRight: "1px solid #e5e5e5",
          padding: "1rem",
        }}
      >
        <h3>CitaYa</h3>

        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link href="/app">Dashboard</Link>
            </li>
            <li>
              <Link href="/app/citas">Citas</Link>
            </li>
            <li>
              <Link href="/app/clientes">Clientes</Link>
            </li>
            <li>
              <Link href="/app/metricas">Métricas</Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main style={{ flex: 1, padding: "2rem" }}>{children}</main>
    </div>
  );
}