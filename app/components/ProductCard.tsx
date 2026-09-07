import Image from "next/image";
import type { Product } from "@/lib/data/products";
import { ProductCarousel } from "./ProductCarousel";

export function ProductCard({ product }: { product: Product }) {
  const hasCarousel = product.images && product.images.length > 1;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-white">
        {hasCarousel ? (
          <ProductCarousel images={product.images!} alt={product.alt} />
        ) : (
          <Image
            src={product.image}
            alt={product.alt}
            width={600}
            height={400}
            className="h-full w-full object-contain p-2"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-zinc-900">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600">
          {product.description}
        </p>
        <p className="mt-4 text-sm font-medium text-zinc-400">
          Consultar sin compromiso
        </p>
      </div>
    </article>
  );
}
