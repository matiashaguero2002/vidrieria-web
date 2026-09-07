"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/css";
import { projects } from "@/lib/data/projects";
import { Lightbox } from "./Lightbox";

export function ProjectsCarousel() {
  const allImages = projects.flatMap((p) => p.images);
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);

  return (
    <>
      <section className="bg-zinc-50 py-16 sm:py-20" aria-labelledby="proyectos-home-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2
                id="proyectos-home-heading"
                className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
              >
                Proyectos realizados
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
                Algunos de nuestros trabajos finalizados en Encarnación y
                alrededores. Tocá una imagen para verla ampliada.
              </p>
            </div>
            <Link
              href="/proyectos"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-zinc-900 hover:text-zinc-600 sm:inline-flex"
            >
              Ver todos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <Splide
            aria-label="Proyectos SF Aberturas"
            extensions={{ AutoScroll }}
            options={{
              type: "loop",
              drag: "free",
              focus: "center",
              perPage: 3,
              perMove: 1,
              gap: "1rem",
              arrows: false,
              pagination: false,
              autoScroll: {
                speed: 1.4,
                pauseOnHover: true,
                pauseOnFocus: false,
                rewindSpeed: 1.4,
              },
              breakpoints: {
                640: { perPage: 1.2, gap: "0.75rem" },
                1024: { perPage: 2.2 },
              },
            }}
          >
            {allImages.map((src, i) => (
              <SplideSlide key={`${src}-${i}`}>
                <button
                  type="button"
                  onClick={() => {
                    setIdx(i);
                    setOpen(true);
                  }}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-sm"
                  aria-label={`Abrir imagen ${i + 1}`}
                >
                  <Image
                    src={src}
                    alt={`Proyecto SF Aberturas ${i + 1}`}
                    width={600}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 33vw"
                  />
                </button>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mt-8 flex justify-center sm:hidden">
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-1.5 rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white"
            >
              Ver todos los proyectos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {open && (
        <Lightbox
          images={allImages}
          index={idx}
          alt="Proyecto SF Aberturas"
          onClose={() => setOpen(false)}
          onPrev={() => setIdx((v) => (v - 1 + allImages.length) % allImages.length)}
          onNext={() => setIdx((v) => (v + 1) % allImages.length)}
        />
      )}
    </>
  );
}
