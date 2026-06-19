import SectionHeader from "./SectionHeader";

const trends = [
  { label: "Logos dinâmicos / responsivos", solid: true },
  { label: "Motion-first & kinético", solid: true },
  { label: "Cor reativa (muda por contexto/mood)", solid: false },
  { label: "Gradientes em camadas & duotones", solid: false },
  { label: "GANs gerando elementos originais", solid: false },
  { label: "Autenticidade > perfeição", solid: false },
  { label: "Tipos customizados", solid: false },
  { label: "Colaboração humano-IA com curadoria", solid: false },
];

export default function IdentidadeSection() {
  return (
    <section id="identidade" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="🎨"
        part="Mercado · foco do negócio"
        title="Identidade Visual & IA"
        description="O recorte mais estratégico para a agência: dados, tendências e direção criativa de marca com IA"
      />

      <div className="grid grid-cols-3 gap-3.5 mb-3.5 max-md:grid-cols-1">
        {[
          {
            title: "IA generativa no design",
            val: "USD 1,11B → 4,54B",
            sub: "Mercado de IA generativa em design: de 2025 a 2030, a um CAGR de 31,4%.",
          },
          {
            title: "Serviços de brand identity com IA",
            val: "+340%",
            sub: "Crescimento do mercado global de serviços de identidade de marca com IA desde 2023.",
          },
          {
            title: "Padrão de entrega",
            val: "Sistema > logo",
            sub: 'Marcas migram de "um logo" para sistemas de identidade flexíveis, responsivos e motion-first.',
          },
        ].map((card) => (
          <div key={card.title} className="bg-white border border-[#E2E7EF] rounded-xl p-[22px] shadow-[0_1px_2px_rgba(16,24,40,0.04)] mb-0">
            <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">{card.title}</h3>
            <div className="text-[33px] font-extrabold tracking-[-1px] text-[#1A1D24] leading-none">{card.val}</div>
            <div className="text-[12px] text-[#434A57] mt-1.5" dangerouslySetInnerHTML={{ __html: card.sub.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
          </div>
        ))}
      </div>

      <div className="bg-[#E9F0FE] border border-[#D3E0FB] border-l-[3px] border-l-[#2563EB] rounded-[10px] px-[18px] py-[15px] text-[13.5px] text-[#434A57] mb-3.5 leading-[1.65]">
        <strong className="text-[#1A1D24]">Por que isso importa para a agência:</strong> a IA comoditizou a peça gráfica isolada, mas valorizou o{" "}
        <strong className="text-[#1A1D24]">sistema de identidade</strong> — regras de marca, variações responsivas, logo cinético e governança visual. É exatamente aí que a margem e o diferencial estão em 2026.
      </div>

      <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
        <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">
          Tendências de identidade visual + IA · 2026
        </h3>
        <div className="flex flex-wrap gap-2.5">
          {trends.map((t) => (
            <span
              key={t.label}
              className={`text-[12.5px] font-semibold px-3.5 py-1.5 border rounded-[24px] ${
                t.solid
                  ? "bg-[#2563EB] text-white border-[#2563EB]"
                  : "bg-[#F6F8FB] text-[#434A57] border-[#D2D9E4]"
              }`}
            >
              {t.label}
            </span>
          ))}
        </div>
        <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">
          Fontes: Evalueserve, MarketInc AI, Three Rooms, AI Logo Creator, Logomaker, Similarweb (Gen AI Brand Visibility Index 2026).
        </div>
      </div>

      <div className="mt-1.5 bg-[#ECFDF5] border border-[#BBE9D2] border-l-[3px] border-l-[#0F766E] rounded-[10px] px-[18px] py-[15px] text-[13.5px] text-[#434A57] leading-[1.65]">
        <strong className="text-[#1A1D24]">Como vender isso na prática:</strong> os formatos, hooks de abertura e ângulos de anúncio que mais convertem para serviços de identidade visual estão na seção{" "}
        <a href="#anuncios" className="text-[#2563EB] font-bold no-underline">
          Anúncios &amp; Campanhas em Alta ↓
        </a>{" "}
        — transformação (antes/depois de marca), prova social com número específico e bastidor do processo com IA.
      </div>
    </section>
  );
}
