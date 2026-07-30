"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { niches } from "@/data/niches";

// Seletor de nicho: alterna entre os dashboards paralelos (Design / Tendências).
// Renderizado no topo de cada sidebar.
export default function NicheSwitcher() {
  const pathname = usePathname();

  const isActive = (route: string) =>
    route === "/" ? pathname === "/" : pathname.startsWith(route);

  return (
    <div className="mt-3 flex items-center gap-1 p-0.5 rounded-lg bg-white/10 border border-white/10">
      {niches.map((niche) => {
        const active = isActive(niche.route);
        return (
          <Link
            key={niche.id}
            href={niche.route}
            className={[
              "flex-1 text-center text-[11px] font-bold px-2 py-1 rounded-md no-underline transition-all",
              active
                ? "bg-white text-[#161A22]"
                : "text-white/60 hover:text-white hover:bg-white/10",
            ].join(" ")}
          >
            {niche.short}
          </Link>
        );
      })}
    </div>
  );
}
