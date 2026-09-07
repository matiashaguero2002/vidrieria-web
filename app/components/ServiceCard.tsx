import type { Service } from "@/lib/data/services";

function ServiceIcon({ name }: { name: Service["icon"] }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2 as const,
  };

  if (name === "factory") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M3 21h18" />
        <path d="M3 7v14" />
        <path d="M6 7V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2" />
        <path d="M14 7h7v14H10V11a1 1 0 0 1 1-1h3" />
        <path d="M6 10h2" />
        <path d="M6 14h2" />
        <path d="M14 14h2" />
        <path d="M14 18h2" />
      </svg>
    );
  }
  if (name === "wrench") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    );
  }
  if (name === "message") {
    return (
      <svg {...common} aria-hidden="true">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    );
  }
  return (
    <svg {...common} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-900 text-white">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="mt-4 text-base font-semibold text-zinc-900">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-zinc-600">
        {service.description}
      </p>
    </article>
  );
}
