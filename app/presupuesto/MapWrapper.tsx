"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] w-full animate-pulse rounded-2xl bg-zinc-100" />
  ),
});

export default function MapWrapper() {
  return <Map />;
}
