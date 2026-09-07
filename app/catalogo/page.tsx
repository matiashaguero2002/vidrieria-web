import { ProductCard } from "../components/ProductCard";
import { products } from "@/lib/data/products";
import { services } from "@/lib/data/services";
import { ServiceCard } from "../components/ServiceCard";

export const metadata = {
  title: "Catálogo | SF Aberturas",
  description:
    "Catálogo completo de SF Aberturas: puertas, ventanas, mamparas, cerramientos, ventiluz y más. Productos en aluminio y vidrio en Encarnación.",
};

export default function CatalogoPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Catálogo
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
            Todos los productos y servicios que ofrece SF Aberturas. Datos
            provisionales — la estructura permite agregar fácilmente nuevos
            productos.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-zinc-900">Productos</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Cada producto muestra imagen, nombre y descripción breve. Por ahora
            sin páginas individuales.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-zinc-900">Servicios</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Fabricación, instalación, asesoramiento y mantenimiento incluidos en
            el catálogo.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
