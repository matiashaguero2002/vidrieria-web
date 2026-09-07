import { contact } from "@/lib/data/contact";
import MapWrapper from "./MapWrapper";

export const metadata = {
  title: "Pedir presupuesto | SF Aberturas",
  description:
    "Contactá a SF Aberturas en Encarnación. Email, WhatsApp, teléfono, mapa, horarios y zonas de cobertura.",
};

export default function PresupuestoPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Pedir presupuesto
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
            Ponete en contacto con SF Aberturas. Datos placeholders por ahora —
            mapa con ubicación exacta en Encarnación implementado con Leaflet.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-zinc-900">Email</h3>
              <a
                href={`mailto:${contact.email}`}
                className="mt-2 block text-sm font-medium text-zinc-900 hover:underline"
              >
                {contact.email}
              </a>
              <p className="mt-1 text-xs text-zinc-500">Gmail / correo</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-zinc-900">WhatsApp</h3>
              <a
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-sm font-medium text-emerald-700 hover:underline"
              >
                {contact.whatsapp}
              </a>
              <p className="mt-1 text-xs text-zinc-500">Respuesta en el día</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-zinc-900">Teléfono</h3>
              <a
                href={contact.phoneHref}
                className="mt-2 block text-sm font-medium text-zinc-900 hover:underline"
              >
                {contact.phone}
              </a>
              <p className="mt-1 text-xs text-zinc-500">Llamadas directas</p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border border-zinc-200">
              <MapWrapper />
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="text-sm font-semibold text-zinc-900">
                  Días y horarios
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-zinc-600">
                  {contact.hours.map((h) => (
                    <li
                      key={h.days}
                      className="flex justify-between border-b border-zinc-100 py-2 last:border-0"
                    >
                      <span>{h.days}</span>
                      <span className="font-medium text-zinc-900">
                        {h.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="text-sm font-semibold text-zinc-900">
                  Zonas que cubrimos
                </h3>
                <p className="mt-2 text-sm text-zinc-600">
                  Placeholder — Encarnación y alrededores.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {contact.coverage.map((zone) => (
                    <span
                      key={zone}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700"
                    >
                      {zone}
                    </span>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
