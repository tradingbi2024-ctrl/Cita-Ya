import "./globals.css";

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
      <body style={{ margin: 0, fontFamily: "sans-serif" }}>
        {children}
      </body>
    </html>
  );
}