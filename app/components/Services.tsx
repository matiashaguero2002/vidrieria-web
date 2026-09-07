import { services } from "@/lib/data/services";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="servicios-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="servicios-heading"
            className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
          >
            Nuestros servicios
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600">
            Acompañamos tu proyecto de principio a fin, desde la medición hasta
            la instalación y el postventa.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
