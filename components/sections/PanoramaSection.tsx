import dynamic from "next/dynamic";
import SectionHeader from "./SectionHeader";

const MarketsChart = dynamic(() => import("@/components/charts/MarketsChart"), { ssr: false });
const AIAdoptionChart = dynamic(() => import("@/components/charts/AIAdoptionChart"), { ssr: false });

export default function PanoramaSection() {
  return (
    <section id="panorama" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="🌍"
        part="Parte 1"
        title="Panorama Global do Mercado"
        description="Tamanho, crescimento e forças que moldam o mercado de design globalmente"
      />

      <div className="grid grid-cols-2 gap-3.5 mb-3.5 max-md:grid-cols-1">
        <div className="bg-white border border-[#E2E7EF] rounded-xl p-6">
          <div className="text-[13px] font-bold text-[#1A1D24] mb-1">Tamanho dos mercados de design (USD bilhões)</div>
          <div className="text-[12px] text-[#434A57] mb-5">Comparativo entre segmentos — 2024–2025</div>
          <MarketsChart />
        </div>
        <div className="bg-white border border-[#E2E7EF] rounded-xl p-6">
          <div className="text-[13px] font-bold text-[#1A1D24] mb-1">Adoção de IA por designers</div>
          <div className="text-[12px] text-[#434A57] mb-5">% de designers usando ferramentas de IA</div>
          <AIAdoptionChart />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3.5 mb-3.5 max-md:grid-cols-1">
        {[
          { title: "IA Generativa em Design", val: "USD 5,4B", sub: "2026 · CAGR 32,3%", src: "Fonte: NoGood / ResearchGate" },
          { title: "Designers usando IA diariamente", val: "86%", sub: "Criadores globais usam IA generativa", src: "Fonte: Figma Design Statistics 2026" },
          { title: "Premium por uso de IA", val: "+34%", sub: "Designer com IA ganha mais que sem IA", src: "Fonte: McKinsey 2025" },
        ].map((c) => (
          <div key={c.title} className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
            <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">{c.title}</h3>
            <div className="text-[33px] font-extrabold tracking-[-1px] text-[#1A1D24] leading-none">{c.val}</div>
            <div className="text-[12px] text-[#434A57] mt-1.5">{c.sub}</div>
            <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">{c.src}</div>
          </div>
        ))}
      </div>

      <div className="bg-[#E9F0FE] border border-[#D3E0FB] border-l-[3px] border-l-[#2563EB] rounded-[10px] px-[18px] py-[15px] text-[13.5px] text-[#434A57] mb-3.5 leading-[1.65]">
        <strong className="text-[#1A1D24]">O efeito Canva:</strong> USD 48,7B de valuation, 220M usuários, 38,5M designs/dia. Canva democratizou execução básica — e isso é irreversível. O efeito colateral positivo para designers profissionais: libera espaço para estratégia, método e direção criativa.
      </div>

      <div className="bg-[#FFF7ED] border border-[#F5DCBE] border-l-[3px] border-l-[#B45309] rounded-[10px] px-[18px] py-[15px] text-[13.5px] text-[#434A57] leading-[1.65]">
        <strong className="text-[#1A1D24]">Risco mapeado:</strong> 36% das empresas já substituíram ao menos uma tarefa de design por IA. Design gráfico está entre as profissões mais ameaçadas por IA em execução repetitiva — especialmente logo barato e arte avulsa.
      </div>
    </section>
  );
}
