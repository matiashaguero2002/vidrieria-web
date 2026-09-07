import { company } from "@/lib/data/company";

export const metadata = {
  title: "Nosotros | SF Aberturas",
  description:
    "Conocé a SF Aberturas: historia, experiencia y valores. Aberturas de aluminio y vidrio en Encarnación, Paraguay.",
};

export default function NosotrosPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Nosotros
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-600">
            {company.shortDescription} Contenido placeholder — será reemplazado
            por información real.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-zinc-900">
                {company.history.title}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                {company.history.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
              <h3 className="text-sm font-semibold text-zinc-900">
                Presentación
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Espacio reservado para presentación institucional, misión y
                visión. Placeholder: texto breve sobre el compromiso de SF
                Aberturas con la calidad y la atención personalizada en cada
                obra.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                {company.experience.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl bg-white p-4 shadow-sm border border-zinc-200"
                  >
                    <p className="text-lg font-bold text-zinc-900">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-zinc-900">
            {company.experience.title}
          </h2>
          <div className="mt-4 max-w-3xl space-y-4 text-sm leading-7 text-zinc-600">
            {company.experience.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <h3 className="mt-10 text-lg font-semibold text-zinc-900">Valores</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {company.values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <h4 className="text-sm font-semibold text-zinc-900">
                  {v.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {v.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-dashed border-zinc-300 bg-white p-6">
            <h4 className="text-sm font-semibold text-zinc-900">
              Información relevante
            </h4>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Placeholder para datos adicionales: certificaciones, alianzas,
              equipamiento de taller, garantías y cualquier información
              relevante que se desee agregar posteriormente sin modificar la
              estructura.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
