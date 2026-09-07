import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-base font-bold tracking-tight text-zinc-900"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded bg-zinc-900 text-sm font-bold text-white">
                SF
              </span>
              SF Aberturas
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-600">
              Instalación de aberturas de aluminio y vidrio en Paraguay. Calidad
              y confianza para tu hogar o empresa.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Contacto</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>
                <a href="tel:+595981000000" className="hover:text-zinc-900">
                  +595 981 000 000
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@sfaberturas.com.py"
                  className="hover:text-zinc-900"
                >
                  contacto@sfaberturas.com.py
                </a>
              </li>
              <li>Encarnación, Paraguay</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900">Navegación</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>
                <Link href="/" className="hover:text-zinc-900">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="hover:text-zinc-900">
                  Catálogo
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:text-zinc-900">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-zinc-900">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/presupuesto" className="hover:text-zinc-900">
                  Pedir presupuesto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-zinc-900">
              Redes sociales
            </h3>
            <p className="mt-3 text-sm text-zinc-600">
              Seguinos en nuestras redes (placeholders).
            </p>
            <div className="mt-3 flex gap-3">
              <a
                href="#"
                aria-label="Instagram SF Aberturas (placeholder)"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook SF Aberturas (placeholder)"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="WhatsApp SF Aberturas (placeholder)"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500 sm:text-left">
          <p>© {year} SF Aberturas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
