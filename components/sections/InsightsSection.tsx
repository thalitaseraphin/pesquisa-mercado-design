"use client";

import { useReportDate } from "@/context/ReportDateContext";
import SectionHeader from "./SectionHeader";

const insights = [
  {
    num: "INSIGHT 07 · NOVO",
    title: "IA já é base do fluxo — o diferencial é o julgamento",
    text: "O State of the Designer 2026 da Figma mostra <strong>72% usando IA generativa e 91% dizendo que ela melhora o output</strong>. Mas 67% a veem como complemento e só 18% das empresas cortaram designers por causa dela. A IA virou infraestrutura; <strong>o valor está em curadoria, direção e julgamento</strong> — não em operar a ferramenta.",
    source: "Figma — State of the Designer 2026",
    sourceUrl: "https://www.figma.com/newsroom/",
    updated: "24 Jun 2026",
    reportDate: "24/06/2026",
    attention: false,
  },
  {
    num: "⚠ PONTO DE ATENÇÃO 05 · NOVO",
    title: "O tier commodity já é da IA",
    text: "Logos, templates de social e branding básico — o trabalho de <strong>US$200–800</strong> — estão quase totalmente capturados por Canva e Midjourney. Competir por execução barata é perder por definição. <strong>Reposicionar para estratégia, narrativa e resultado de negócio</strong> é o que ainda sustenta preço.",
    source: "Upwork — Will AI Replace Graphic Designers 2026",
    sourceUrl: "https://www.upwork.com/resources/will-ai-replace-graphic-designers",
    updated: "24 Jun 2026",
    reportDate: "24/06/2026",
    attention: true,
  },
  {
    num: "INSIGHT 06 · NOVO",
    title: "Design skill virou a competência #1 em IA",
    text: "Em meados de 2026 a habilidade de design <strong>lidera os anúncios de vaga em IA — à frente de código e cloud</strong>. UX/produto cresce ~16% até 2034 contra 2–3% do design gráfico. A leitura: <strong>IA substitui tarefas, não papéis</strong>; quem dá direção, posicionamento e ponto de vista captura o valor que sobra.",
    source: "Humbl Design — Will AI Replace Designers 2026",
    sourceUrl: "https://humbldesign.io/blog-posts/will-ai-replace-designers-2026",
    updated: "23 Jun 2026",
    reportDate: "23/06/2026",
    attention: false,
  },
  {
    num: "⚠ PONTO DE ATENÇÃO 04 · NOVO",
    title: `Quando "good enough" vira o brief`,
    text: "Cresce a substituição de design encomendado por <strong>gráficos gerados por IA</strong> em material promocional. O risco não é só de emprego: é <strong>queda de qualidade, perda de consistência de marca e corrida para o fundo</strong>. Defesa: provar ponto de vista, voz e acúmulo de marca ao longo do tempo — o que um prompt não entrega.",
    source: "Clever Marketing — Graphic Design News Jun 2026",
    sourceUrl: "https://www.clevermarketing.co.uk/graphic-design-news-june-2026/",
    updated: "23 Jun 2026",
    reportDate: "23/06/2026",
    attention: true,
  },
  {
    num: "INSIGHT 05 · NOVO",
    title: "Direção de motion entra no design tool",
    text: "Com o <strong>Runway Aleph 2.0 dentro do Figma Weave</strong> (18/06), dirigir vídeo frame a frame — trocar câmera, cenário e personagem sem refilmar — vira função nativa do design. Quem domina identidade <strong>+ motion no mesmo fluxo</strong> captura a margem que está migrando.",
    source: "Figma Blog — Runway Aleph 2.0 in Weave",
    sourceUrl: "https://www.figma.com/blog/direct-every-frame-with-runway-aleph-2/",
    updated: "22 Jun 2026",
    reportDate: "22/06/2026",
    attention: false,
  },
  {
    num: "⚠ PONTO DE ATENÇÃO 03 · NOVO",
    title: 'Cliente quer só "ajustar o output da IA"',
    text: "Estudo Ramp (fev/2026): gasto com freelance caiu de <strong>0,66% para 0,14%</strong> dos orçamentos enquanto IA subiu de 0 para 2,85%. O mid-level é comprimido — clientes geram algo mediano e pedem polimento barato. <strong>Reposicionar para estratégia, narrativa e sistema de marca</strong> é a saída.",
    source: "WeAndTheColor + Ramp Payrolls to Prompts 2026",
    sourceUrl: "https://weandthecolor.com/freelance-designers-cant-compete-with-a-20-month-ai-subscription-heres-what-actually-works-now/209620",
    updated: "22 Jun 2026",
    reportDate: "22/06/2026",
    attention: true,
  },
  {
    num: "INSIGHT 01",
    title: "A IA virou pré-requisito, não diferencial",
    text: "Com <strong>91% dos designers usando IA semanalmente</strong> e vagas com skill de IA crescendo <strong>+144% a/a</strong>, dominar IA deixou de ser vantagem e passou a ser linha de base. O diferencial agora é direção criativa e pensamento sistêmico.",
    source: "Designer Fund — AI in Design 2026",
    sourceUrl: "https://designerfund.com/blog/ai-in-design-2026",
    updated: "Jun 2026",
    reportDate: "19/06/2026",
    attention: false,
  },
  {
    num: "INSIGHT 02",
    title: "Branding migra para identidades vivas",
    text: `Sistemas <strong>motion-first e adaptativos</strong> substituem logos estáticos. Quem vende identidade visual precisa entregar sistemas dinâmicos e regras de marca "legíveis por máquina", não só um logo final.`,
    source: "Three Rooms — Brand Identity Trends 2026",
    sourceUrl: "https://www.threerooms.com/blog/8-design-trends-shaping-brand-identity-in-2026",
    updated: "Jun 2026",
    reportDate: "19/06/2026",
    attention: false,
  },
  {
    num: "INSIGHT 03",
    title: "Mercado cresce, mas o valor migra",
    text: `Design gráfico vai a <strong>USD 59,3B (CAGR 7,6%)</strong> e UX a USD 13,06B, porém o valor desloca-se de execução para <strong>estratégia, sistemas e curadoria</strong>. Preço por "arte" cai; preço por direção sobe.`,
    source: "Mordor Intelligence + Fortune Business Insights 2026",
    sourceUrl: "https://www.mordorintelligence.com/industry-reports/ui-ux-market",
    updated: "Jun 2026",
    reportDate: "19/06/2026",
    attention: false,
  },
  {
    num: "INSIGHT 04",
    title: "Agentes de IA como novo gatekeeper",
    text: "79% das empresas já implementam agentes de IA. Eles passam a <strong>influenciar quais marcas são vistas e recomendadas</strong> — posicionamento e dados de marca viram ativo competitivo.",
    source: "Superside — Top AI Design Agencies 2026",
    sourceUrl: "https://www.superside.com/blog/ai-design-agencies",
    updated: "Jun 2026",
    reportDate: "19/06/2026",
    attention: false,
  },
  {
    num: "⚠ PONTO DE ATENÇÃO 01",
    title: "Comoditização da execução",
    text: `Tarefas repetitivas de design estão sendo automatizadas. Quem vende só "fazer a arte" perde margem. <strong>Reposicionar a oferta para estratégia e sistema</strong> é urgente.`,
    source: "Autodesk AI Jobs Report 2025 + Design Week 2026",
    sourceUrl: "https://www.designweek.co.uk/graphic-design-among-most-at-risk-jobs-from-ai-report/",
    updated: "Jun 2026",
    reportDate: "19/06/2026",
    attention: true,
  },
  {
    num: "⚠ PONTO DE ATENÇÃO 02",
    title: "Gap de fluência em IA na contratação",
    text: "50% dos líderes priorizam fluência em IA ao contratar. Sem prova concreta de workflow com IA, a agência/profissional fica de fora das melhores oportunidades.",
    source: "Figma Design Statistics 2026",
    sourceUrl: "https://www.figma.com/resource-library/design-statistics/",
    updated: "Jun 2026",
    reportDate: "19/06/2026",
    attention: true,
  },
];

export default function InsightsSection() {
  const { selectedDate, setSelectedDate } = useReportDate();
  const filtered = selectedDate ? insights.filter((ins) => ins.reportDate === selectedDate) : insights;

  return (
    <section id="insights" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="💡"
        part="Síntese estratégica"
        title="Insights & Pontos de Atenção"
        description="O que realmente importa para o mercado agora — cada insight com fonte verificada"
      />

      {selectedDate && (
        <div className="flex items-center gap-2 mb-4 text-[12px]">
          <span className="text-[#2563EB] font-bold">📅 Filtrando: {selectedDate}</span>
          <button onClick={() => setSelectedDate("")} className="text-[11px] text-[#6B7480] hover:text-[#1A1D24] underline">
            ver todos
          </button>
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="bg-[#F6F8FB] border border-[#E2E7EF] rounded-xl px-6 py-10 text-center">
          <div className="text-[32px] mb-3">📭</div>
          <div className="text-[14px] font-bold text-[#1A1D24] mb-1">Nenhum insight registrado em {selectedDate}</div>
          <div className="text-[13px] text-[#6B7480] mb-4">Selecione outra data no menu lateral para ver os insights daquele relatório.</div>
          <button onClick={() => setSelectedDate("")} className="text-[12px] font-bold text-[#2563EB] hover:underline">
            Ver todos os insights →
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          {filtered.map((ins) => (
            <div
              key={ins.num}
              className={[
                "rounded-xl p-[22px] shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-[180ms] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(16,24,40,0.10)] flex flex-col",
                ins.attention
                  ? "bg-[#FFFaf2] border border-[#F3D9B8] border-t-[3px] border-t-[#B45309]"
                  : "bg-white border border-[#E2E7EF] border-t-[3px] border-t-[#2563EB]",
              ].join(" ")}
            >
              <div className="flex items-center justify-between mb-2 flex-wrap gap-1">
                <div className={`text-[10.5px] font-extrabold tracking-[1px] ${ins.attention ? "text-[#B45309]" : "text-[#2563EB]"}`}>
                  {ins.num}
                </div>
                <span className="text-[9.5px] font-bold text-[#6B7480] bg-[#F6F8FB] border border-[#E2E7EF] px-2 py-0.5 rounded-full">
                  {ins.updated}
                </span>
              </div>
              <div className="text-[15.5px] font-bold text-[#1A1D24] mb-[7px] leading-[1.4]">{ins.title}</div>
              <div className="text-[13.5px] text-[#434A57] leading-[1.65] flex-1" dangerouslySetInnerHTML={{ __html: ins.text }} />
              <div className="mt-3 pt-3 border-t border-[#E2E7EF]">
                <a
                  href={ins.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#6B7480] hover:text-[#2563EB] no-underline transition-colors"
                >
                  <span className="w-3.5 h-3.5 rounded-sm bg-[#E9F0FE] flex items-center justify-center text-[8px]">↗</span>
                  {ins.source}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
