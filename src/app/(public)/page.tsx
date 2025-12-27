import Link from "next/link";

export default function PublicHome() {
  return (
      <main
            style={{
                    padding: "2rem",
                            fontFamily: "sans-serif",
                                    maxWidth: "640px",
                                          }}
                                              >
                                                    <h1>CitaYa</h1>

                                                          <p>
                                                                  Agenda online y gestión de clientes para negocios.
                                                                        </p>

                                                                              <ul>
                                                                                      <li>✔ Gestión de citas</li>
                                                                                              <li>✔ Base de clientes</li>
                                                                                                      <li>✔ Métricas simples</li>
                                                                                                            </ul>

                                                                                                                  <nav style={{ marginTop: "2rem" }}>
                                                                                                                          <ul style={{ listStyle: "none", padding: 0 }}>
                                                                                                                                    <li style={{ marginBottom: "0.5rem" }}>
                                                                                                                                                <Link href="/auth">🔐 Iniciar sesión</Link>
                                                                                                                                                          </li>
                                                                                                                                                                    <li>
                                                                                                                                                                                <Link href="/app">📊 Ir al dashboard</Link>
                                                                                                                                                                                          </li>
                                                                                                                                                                                                  </ul>
                                                                                                                                                                                                        </nav>
                                                                                                                                                                                                            </main>
                                                                                                                                                                                                              );
                                                                                                                                                                                                              }