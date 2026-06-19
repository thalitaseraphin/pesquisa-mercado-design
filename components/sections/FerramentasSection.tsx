import dynamic from "next/dynamic";
import SectionHeader from "./SectionHeader";

const VibeCodingChart = dynamic(() => import("@/components/charts/VibeCodingChart"), { ssr: false });

const tools = [
  { name: "Figma · Receita 2025", val: "USD 1,056B", desc: "41% de crescimento YoY · IPO a USD 45B em julho/2025 · 13M MAU", badge: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]", badgeText: "80–90% market share em UI/UX" },
  { name: "Webflow · Receita 2024", val: "USD 280M", desc: "ARR USD 200M (2023) · 48% crescimento YoY · 200k negócios ativos", badge: "bg-[#ECFDF5] text-[#066E4C] border border-[#BBE9D2]", badgeText: "Design + no-code" },
  { name: "Lovable · ARR", val: "USD 206M", desc: "$7M → $206M em 1 ano (+2.800% YoY) · 8M usuários · 100k produtos/dia", badge: "bg-[#FFF7ED] text-[#9A3412] border border-[#F5DCBE]", badgeText: "Vibe coding emergindo" },
  { name: "Cursor · ARR", val: "USD 1B+", desc: "0 → $1B ARR em 24 meses (recorde B2B) · 1M+ usuários diários", badge: "bg-[#FFF7ED] text-[#9A3412] border border-[#F5DCBE]", badgeText: "Vibe coding" },
  { name: "Bolt · ARR", val: "USD 40M", desc: "$0 → $40M ARR em apenas 5 meses · 5M usuários", badge: "bg-[#FFF7ED] text-[#9A3412] border border-[#F5DCBE]", badgeText: "Crescimento explosivo" },
  { name: "Canva · Receita 2024", val: "USD 2,5B", desc: "Crescimento 44% a.a. · 220M usuários · Valuation USD 48,7B", badge: "bg-[#FEF2F2] text-[#B91C1C] border border-[#FAD1D1]", badgeText: "Comoditizou design básico" },
];

export default function FerramentasSection() {
  return (
    <section id="ferramentas" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="🔧"
        part="Parte 12"
        title="Radar de Ferramentas Emergentes"
        description="O que está mudando o workflow de design agora — antes de virar óbvio"
      />

      <div className="grid grid-cols-3 gap-3 mb-3.5 max-lg:grid-cols-2 max-md:grid-cols-1">
        {tools.map((t) => (
          <div key={t.name} className="bg-white border border-[#E2E7EF] rounded-xl p-[18px]">
            <div className="text-[12px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-1.5">{t.name}</div>
            <div className="text-[25px] font-extrabold tracking-[-0.8px] text-[#1A1D24] leading-none mb-1">{t.val}</div>
            <div className="text-[12px] text-[#434A57]">{t.desc}</div>
            <div className="mt-2">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${t.badge}`}>{t.badgeText}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#ECFDF5] border border-[#BBE9D2] border-l-[3px] border-l-[#0F766E] rounded-[10px] px-[18px] py-[15px] text-[13.5px] text-[#434A57] mb-3.5 leading-[1.65]">
        <strong className="text-[#1A1D24]">O stack do designer avançado em 2026:</strong> Midjourney/FLUX (conceito) → Adobe Firefly + Runway (produção e vídeo) → Figma (design system e UI) → Figma Sites / Webflow / Framer (site publicado) → Lovable / Bolt (produto funcional) → Claude / ChatGPT (copy, briefing, estratégia). O diferencial não é saber todas as ferramentas — é ter processo para decidir qual usar em cada fase.
      </div>

      <div className="bg-white border border-[#E2E7EF] rounded-xl p-6">
        <div className="text-[13px] font-bold text-[#1A1D24] mb-1">Mercado de AI Code Tools (USD bilhões)</div>
        <div className="text-[12px] text-[#434A57] mb-5">Crescimento projetado 2023–2030 · CAGR 27,1%</div>
        <VibeCodingChart />
        <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">Fonte: Mocha — AI App Builder Statistics 2026</div>
      </div>
    </section>
  );
}
