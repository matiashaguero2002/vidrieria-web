import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-white" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">
            Aberturas de aluminio y vidrio
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl"
          >
            Soluciones en aluminio y vidrio para tu espacio
          </h1>
          <p className="max-w-xl text-lg leading-7 text-zinc-600">
            En SF Aberturas fabricamos e instalamos ventanas, puertas, mamparas y
            cerramientos a medida. Asesoramiento profesional, calidad garantizada
            y servicio en Encarnación y todo Paraguay.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/presupuesto"
              className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-7 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
            >
              Solicitar presupuesto
            </Link>
            <Link
              href="/catalogo"
              className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-7 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 focus-visible:ring-offset-2"
            >
              Ver productos
            </Link>
          </div>
          <div className="flex items-center gap-4 pt-2 text-sm text-zinc-500">
            <span className="flex items-center gap-1.5">
              <span
                className="h-2 w-2 rounded-full bg-emerald-500"
                aria-hidden="true"
              />
              Asesoramiento sin costo
            </span>
            <span aria-hidden="true" className="text-zinc-300">
              |
            </span>
            <span>Instalación profesional</span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm">
            <Image
              src="/img/hero.svg"
              alt="Ventanal de aluminio y vidrio instalado por SF Aberturas"
              width={1200}
              height={800}
              priority
              className="h-auto w-full object-cover aspect-[3/2]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-zinc-200 bg-white p-4 shadow-lg sm:flex sm:items-center sm:gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-900">
                +500 proyectos
              </p>
              <p className="text-xs text-zinc-500">Clientes satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
