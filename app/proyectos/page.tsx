import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data/projects";

export const metadata = {
  title: "Proyectos | SF Aberturas",
  description:
    "Trabajos finalizados de SF Aberturas: viviendas, oficinas y comercios en Encarnación y alrededores. Galería de proyectos en aluminio y vidrio.",
};

export default function ProyectosPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Proyectos
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
            Galería de trabajos finalizados. Cada proyecto incluye imagen
            principal, descripción y ubicación. Tocá para ver el detalle.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/proyectos/${project.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={project.cover}
                    alt={project.name}
                    width={600}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-semibold text-zinc-900">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-zinc-500">
                    {project.type} · {project.location}
                  </p>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-zinc-600">
                    {project.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-zinc-900">
                    Ver proyecto
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
