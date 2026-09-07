"use client";

import Image from "next/image";
import { useEffect } from "react";

export function Lightbox({
  images,
  index,
  alt,
  onClose,
  onPrev,
  onNext,
}: {
  images: string[];
  index: number;
  alt: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div
        className="relative flex max-h-[85vh] max-w-4xl w-full items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex max-h-[85vh] w-full items-center justify-center rounded-2xl bg-white p-2 shadow-2xl sm:p-3">
          <Image
            src={images[index]}
            alt={`${alt} ${index + 1}/${images.length}`}
            width={1200}
            height={900}
            className="max-h-[75vh] w-auto max-w-full object-contain"
            sizes="90vw"
            priority
          />
        </div>

        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute -top-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-zinc-700 shadow-lg hover:bg-zinc-100 sm:h-10 sm:w-10"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        {/* Prev */}
        <button
          type="button"
          onClick={onPrev}
          aria-label="Anterior"
          className="absolute left-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-800 shadow-lg backdrop-blur hover:bg-white sm:left-4 sm:h-11 sm:w-11"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* Next */}
        <button
          type="button"
          onClick={onNext}
          aria-label="Siguiente"
          className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-800 shadow-lg backdrop-blur hover:bg-white sm:right-4 sm:h-11 sm:w-11"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        {/* Counter */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-zinc-700 shadow backdrop-blur">
          {index + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
