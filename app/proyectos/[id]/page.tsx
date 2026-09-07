import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import { ProjectGallery } from "./ProjectGallery";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) return {};
  return {
    title: `${project.name} | Proyectos SF Aberturas`,
    description: project.description,
  };
}

export default function ProyectoDetallePage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);
  if (!project) notFound();

  return (
    <div className="bg-white">
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <Link href="/proyectos" className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 hover:text-zinc-900">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Volver a proyectos
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-2 text-sm font-medium text-zinc-500">
            {project.type} · {project.location}
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-600">
            {project.description}
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
            <Image
              src={project.cover}
              alt={project.name}
              width={1200}
              height={800}
              className="h-auto w-full object-cover"
              priority
              sizes="100vw"
            />
          </div>

          <h2 className="mt-10 text-lg font-semibold text-zinc-900">Galería del proyecto</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Tocá una foto para abrirla en grande. Navegá con flechas o deslizando.
          </p>

          <ProjectGallery images={project.images} alt={project.name} />
        </div>
      </section>
    </div>
  );
}
