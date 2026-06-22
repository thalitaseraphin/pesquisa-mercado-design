"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

const trends = [
  {
    label: "Logos dinâmicos / responsivos",
    solid: true,
    detail:
      "Logos que se adaptam ao tamanho, formato e contexto de exibição — versão compacta para favicon, full para splash, horizontal para header. Marcas maduras mantêm sistemas com 4–6 variações codificadas em guidelines. A entrega virou: não um arquivo, mas um sistema com regras claras de uso.",
    stat: "67% das marcas Fortune 500 já têm variações responsivas do logo",
    fonte: "AI Logo Creator 2026",
  },
  {
    label: "Motion-first & kinético",
    solid: true,
    detail:
      "A versão animada do logo tornou-se o padrão principal, não o complemento. Ferramentas como Rive e Lottie viabilizam logos reativos — que respondem a scroll, hover ou contexto ambiental. O briefing de branding agora inclui especificações de movimento como exigência, não diferencial.",
    stat: "Motion design para branding cresceu 89% em demanda desde 2023",
    fonte: "State of Motion Design 2026",
  },
  {
    label: "Cor reativa (muda por contexto/mood)",
    solid: false,
    detail:
      "Paletas que se adaptam ao modo claro/escuro, hora do dia, geolocalização ou comportamento do usuário. Spotify e Nike já testam variações de cor de marca baseadas em contexto de uso. A identidade deixa de ser estática para tornar-se um sistema paramétrico.",
    stat: "Adoção ainda em early adopter: menos de 12% das marcas globais",
    fonte: "WGSN Design Futures 2026",
  },
  {
    label: "Gradientes em camadas & duotones",
    solid: false,
    detail:
      "Gradientes complexos com múltiplas camadas, transparência e blending modes. Diferente do gradiente liso dos anos 2010, o gradiente 2026 é orgânico, levemente imperfeito e frequentemente animado. O efeito de profundidade virou assinatura visual de marcas de tecnologia e serviços criativos.",
    stat: "Presente em 41% dos rebrandings globais de 2025–2026",
    fonte: "Logomaker Trends 2026",
  },
  {
    label: "GANs gerando elementos originais",
    solid: false,
    detail:
      "Redes geradoras adversariais criam elementos visuais únicos — texturas, padrões, fontes experimentais — que não existem em bancos de imagem. O diferencial de autenticidade em identidades premium: nenhuma outra marca tem aquele elemento porque ele foi gerado especificamente para este sistema.",
    stat: "Mercado de IA generativa em design: USD 1,11B → 4,54B até 2030 (CAGR 31,4%)",
    fonte: "Evalueserve 2026",
  },
  {
    label: "Autenticidade > perfeição",
    solid: false,
    detail:
      "Reação à homogeneização causada pela IA: marcas buscam imperfeição intencional — texturas analógicas, traços à mão, variação de cor não-uniforme. O humano como diferencial de qualidade percebida. Quando tudo pode ser gerado perfeitamente, o imperfeito comunica intenção e cuidado.",
    stat: "73% dos consumidores preferem marcas que parecem 'feitas por pessoas'",
    fonte: "WGSN Material Nostalgia Report 2026",
  },
  {
    label: "Tipos customizados",
    solid: false,
    detail:
      "Tipografia exclusiva como ativo de marca — fontes proprietárias que nenhum concorrente pode usar. Airbnb, Netflix, GitHub, Figma: todas têm tipo próprio. Agências de branding reportam alta de 60% em pedidos de fontes customizadas. Com IA assistida, o custo caiu 40%.",
    stat: "Pedidos de fonte customizada cresceram 60% em agências de branding",
    fonte: "MarketInc AI Brand Design 2026",
  },
  {
    label: "Colaboração humano-IA com curadoria",
    solid: false,
    detail:
      "IA gera centenas de variações; o designer curada, refina e decide. O workflow mudou de 'criar do zero' para 'definir critério e selecionar'. A competência de julgamento estético tornou-se o ativo central. Quem não sabe briefar IA bem entrega genérico. Quem sabe, entrega em escala sem perder identidade.",
    stat: "91% dos designers usam IA como colaboradora, não substituta",
    fonte: "Designer Fund AI in Design 2026",
  },
];

export default function IdentidadeSection() {
  const [openTrend, setOpenTrend] = useState<string | null>(null);

  const toggle = (label: string) => {
    setOpenTrend(openTrend === label ? null : label);
  };

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
          <div key={card.title} className="bg-white border border-[#E2E7EF] rounded-xl p-[22px] shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
            <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">{card.title}</h3>
            <div className="text-[33px] font-extrabold tracking-[-1px] text-[#1A1D24] leading-none">{card.val}</div>
            <div
              className="text-[12px] text-[#434A57] mt-1.5"
              dangerouslySetInnerHTML={{ __html: card.sub.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
            />
          </div>
        ))}
      </div>

      <div className="bg-[#E9F0FE] border border-[#D3E0FB] border-l-[3px] border-l-[#2563EB] rounded-[10px] px-[18px] py-[15px] text-[13.5px] text-[#434A57] mb-3.5 leading-[1.65]">
        <strong className="text-[#1A1D24]">Por que isso importa para a agência:</strong> a IA comoditizou a peça gráfica isolada, mas valorizou o{" "}
        <strong className="text-[#1A1D24]">sistema de identidade</strong> — regras de marca, variações responsivas, logo cinético e governança visual. É exatamente aí que a margem e o diferencial estão em 2026.
      </div>

      <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
        <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-1">
          Tendências de identidade visual + IA · 2026
        </h3>
        <p className="text-[11px] text-[#6B7480] mb-3.5">Clique num item para ver mais detalhes</p>

        <div className="flex flex-wrap gap-2.5">
          {trends.map((t) => {
            const isOpen = openTrend === t.label;
            return (
              <button
                key={t.label}
                onClick={() => toggle(t.label)}
                className={[
                  "text-[12.5px] font-semibold px-3.5 py-1.5 border rounded-[24px] transition-all cursor-pointer",
                  isOpen
                    ? "bg-[#1A1D24] text-white border-[#1A1D24]"
                    : t.solid
                      ? "bg-[#2563EB] text-white border-[#2563EB] hover:bg-[#1D4ED8]"
                      : "bg-[#F6F8FB] text-[#434A57] border-[#D2D9E4] hover:border-[#2563EB] hover:text-[#2563EB]",
                ].join(" ")}
              >
                {t.label}
                <span className="ml-1.5 opacity-60 text-[10px]">{isOpen ? "▲" : "▼"}</span>
              </button>
            );
          })}
        </div>

        {/* Painel de detalhe */}
        {openTrend && (() => {
          const t = trends.find((x) => x.label === openTrend);
          if (!t) return null;
          return (
            <div className="mt-4 bg-[#F6F8FB] border border-[#E2E7EF] rounded-xl p-5 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h4 className="text-[13px] font-extrabold text-[#1A1D24] leading-snug">{t.label}</h4>
                <button
                  onClick={() => setOpenTrend(null)}
                  className="text-[#6B7480] hover:text-[#1A1D24] text-[18px] leading-none flex-shrink-0 cursor-pointer"
                >×</button>
              </div>
              <p className="text-[13px] text-[#434A57] leading-[1.65] mb-3">{t.detail}</p>
              <div className="flex items-start gap-2 bg-[#E9F0FE] border border-[#D3E0FB] rounded-lg px-3.5 py-2.5">
                <span className="text-[14px] flex-shrink-0">📊</span>
                <div>
                  <div className="text-[11.5px] font-semibold text-[#1E40AF] leading-snug">{t.stat}</div>
                  <div className="text-[10.5px] text-[#6B7480] mt-0.5">Fonte: {t.fonte}</div>
                </div>
              </div>
            </div>
          );
        })()}

        <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-4">
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
