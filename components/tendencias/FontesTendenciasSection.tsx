import { fontes } from "@/data/tendencias/content";
import SectionHeader from "@/components/sections/SectionHeader";

// Fontes acompanhadas pelo radar de tendências.
export default function FontesTendenciasSection() {
  return (
    <section id="fontes" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="📋"
        part="Base"
        title="Fontes"
        description="Canais e veículos monitorados para alimentar o radar"
      />

      <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
        {fontes.map((f) => (
          <a
            key={f.url}
            href={f.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border border-[#E2E7EF] rounded-xl px-5 py-4 no-underline shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all hover:border-[#C4CAD5]"
          >
            <div className="text-[13.5px] font-bold text-[#1A1D24] mb-1 inline-flex items-center gap-1">
              {f.label} <span className="text-[11px] text-[#2563EB]">↗</span>
            </div>
            <div className="text-[12px] text-[#6B7480] leading-[1.45]">{f.desc}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
