"use client";

import Link from "next/link";

const kpis = [
  { icon: "🌍", value: "USD 59,3B", label: "Mercado global de design gráfico", sub: "CAGR 7,6% → USD 85,5B em 2031" },
  { icon: "🤖", value: "91%", label: "Designers usando IA semanalmente", sub: "Era 35% em 2023" },
  { icon: "📉", value: "–79%", label: "Queda no gasto com freelance mid-level", sub: "De 0,66% → 0,14% dos orçamentos (Ramp, fev/2026)" },
  { icon: "📈", value: "+144%", label: "Vagas exigindo skill de IA a/a", sub: "UX Design: mercado de USD 13,06B" },
];

const insights = [
  {
    tag: "🆕 Novo · 22 Jun",
    tagColor: "bg-[#DBEAFE] text-[#1E40AF]",
    title: "Direção de motion entra no design tool",
    text: "Com o Runway Aleph 2.0 dentro do Figma Weave, dirigir vídeo frame a frame — trocar câmera, cenário e personagem sem refilmar — vira função nativa do design. Quem domina identidade + motion no mesmo fluxo captura a margem que está migrando.",
  },
  {
    tag: "Insight · Jun",
    tagColor: "bg-[#F6F8FB] text-[#6B7480]",
    title: "A IA virou pré-requisito, não diferencial",
    text: "Com 91% dos designers usando IA semanalmente e vagas com skill de IA crescendo +144% a/a, dominar IA deixou de ser vantagem e passou a ser linha de base. O diferencial agora é direção criativa e pensamento sistêmico.",
  },
  {
    tag: "Insight · Jun",
    tagColor: "bg-[#F6F8FB] text-[#6B7480]",
    title: "Branding migra para identidades vivas",
    text: "Sistemas motion-first e adaptativos substituem logos estáticos. Quem vende identidade visual precisa entregar sistemas dinâmicos e regras de marca legíveis por máquina — não só um logo final.",
  },
  {
    tag: "Insight · Jun",
    tagColor: "bg-[#F6F8FB] text-[#6B7480]",
    title: "Mercado cresce, mas o valor migra",
    text: "Design gráfico vai a USD 59,3B (CAGR 7,6%) e UX a USD 13,06B, porém o valor desloca-se de execução para estratégia, sistemas e curadoria. Preço por 'arte' cai; preço por direção sobe.",
  },
  {
    tag: "Insight · Jun",
    tagColor: "bg-[#F6F8FB] text-[#6B7480]",
    title: "Agentes de IA como novo gatekeeper",
    text: "79% das empresas já implementam agentes de IA. Eles influenciam quais marcas são vistas e recomendadas — posicionamento e dados de marca viram ativo competitivo.",
  },
];

const alerts = [
  {
    title: 'Cliente quer só "ajustar o output da IA"',
    text: "Estudo Ramp (fev/2026): gasto com freelance caiu de 0,66% para 0,14% dos orçamentos enquanto IA subiu de 0 para 2,85%. O mid-level é comprimido. Reposicionar para estratégia, narrativa e sistema de marca é a saída.",
    tag: "🆕 Novo · 22 Jun",
  },
  {
    title: "Comoditização da execução",
    text: "Tarefas repetitivas de design estão sendo automatizadas. Quem vende só 'fazer a arte' perde margem. Reposicionar a oferta para estratégia e sistema é urgente.",
    tag: "Atenção",
  },
  {
    title: "Gap de fluência em IA na contratação",
    text: "50% dos líderes priorizam fluência em IA ao contratar. Sem prova concreta de workflow com IA, a agência fica de fora das melhores oportunidades.",
    tag: "Atenção",
  },
];

const actions = [
  {
    prio: "alta",
    horizon: "Esta semana",
    title: 'Reposicionar a oferta de "arte" para "sistema de marca + IA"',
    text: "Reescrever portfólio e proposta para vender direção criativa, sistemas de identidade adaptativos e workflows com IA — não entregáveis avulsos.",
  },
  {
    prio: "alta",
    horizon: "30 dias",
    title: "Montar uma biblioteca de prompts e contexto de marca",
    text: 'Criar um "asset institucional" de prompts por cliente/uso e documentos de contexto de marca que a IA possa seguir. Cada hora investida em refinar prompt compõe valor.',
  },
  {
    prio: "média",
    horizon: "30–60 dias",
    title: "Adotar 1 agente de IA de ponta a ponta num fluxo real",
    text: "Escolher um pipeline (ex: variações de identidade, social kit) e rodar com agente de IA dentro da ferramenta que o time já usa diariamente.",
  },
];

export default function PaperPage() {
  return (
    <div className="min-h-screen bg-[#EEF1F6]">
      {/* Barra de controle — não imprime */}
      <div className="print:hidden sticky top-0 z-10 flex items-center justify-between px-8 py-3 bg-white border-b border-[#E2E7EF] shadow-sm">
        <Link
          href="/"
          className="flex items-center gap-2 text-[12px] font-semibold text-[#6B7480] hover:text-[#1A1D24] transition-colors no-underline"
        >
          ← Voltar ao Mapa de Mercado
        </Link>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-[#6B7480]">Compartilhe ou imprima este briefing</span>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 text-[12px] font-bold text-white bg-[#1A1D24] hover:bg-[#2563EB] transition-colors px-4 py-1.5 rounded-full cursor-pointer"
          >
            🖨 Imprimir / PDF
          </button>
        </div>
      </div>

      {/* Paper */}
      <div className="mx-auto max-w-[820px] px-8 py-10 print:px-0 print:py-0 print:max-w-full">
        <div className="bg-white rounded-2xl shadow-sm print:shadow-none print:rounded-none overflow-hidden">

          {/* Header */}
          <div className="bg-[#1A1D24] px-8 py-7 print:px-10">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <div className="text-[11px] font-bold text-white/50 uppercase tracking-[1.2px] mb-1">IA LAB · Mapa de Mercado</div>
                <h1 className="text-[22px] font-extrabold text-white tracking-[-0.5px] leading-tight">
                  Briefing Diário — Mercado de Design
                </h1>
                <div className="text-[13px] text-white/60 mt-1">22 de junho de 2026 · Relatório consolidado</div>
              </div>
              <div className="text-right">
                <div className="text-[11px] text-white/40 mb-0.5">Próxima revisão</div>
                <div className="text-[12px] font-bold text-white/70">Novembro 2026</div>
              </div>
            </div>

            {/* Destaque do dia */}
            <div className="mt-5 bg-white/8 border border-white/15 rounded-xl px-5 py-3.5">
              <div className="text-[10px] font-extrabold text-white/50 uppercase tracking-[1px] mb-1.5">📰 Destaque do dia</div>
              <div className="text-[13px] text-white/85 leading-[1.6]">
                Figma Config 2026 começa amanhã (23–25 jun) · Runway Aleph 2.0 no Weave lançado esta semana · Estudo Ramp confirma colapso do freelance mid-level · Canva AI 2.0 + Claude Design no mercado
              </div>
            </div>
          </div>

          <div className="px-8 py-7 print:px-10 space-y-8">

            {/* KPIs */}
            <section>
              <h2 className="text-[10px] font-extrabold text-[#6B7480] uppercase tracking-[1.3px] mb-3">Números do mercado</h2>
              <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1 print:grid-cols-4 print:gap-2">
                {kpis.map((k) => (
                  <div key={k.value} className="bg-[#F6F8FB] border border-[#E2E7EF] rounded-xl p-4">
                    <div className="text-[16px] mb-1.5">{k.icon}</div>
                    <div className="text-[26px] font-extrabold text-[#2563EB] tracking-[-0.8px] leading-none mb-1">{k.value}</div>
                    <div className="text-[11.5px] font-semibold text-[#1A1D24] leading-snug mb-0.5">{k.label}</div>
                    <div className="text-[10.5px] text-[#6B7480]">{k.sub}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Insights */}
            <section>
              <h2 className="text-[10px] font-extrabold text-[#6B7480] uppercase tracking-[1.3px] mb-3">💡 Insights principais</h2>
              <div className="flex flex-col gap-2.5">
                {insights.map((ins, i) => (
                  <div key={i} className="border border-[#E2E7EF] border-l-[3px] border-l-[#2563EB] rounded-xl px-4 py-3.5 bg-white">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full ${ins.tagColor}`}>{ins.tag}</span>
                    </div>
                    <div className="text-[13.5px] font-bold text-[#1A1D24] mb-1 leading-snug">{ins.title}</div>
                    <div className="text-[12.5px] text-[#434A57] leading-[1.6]">{ins.text}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Alertas */}
            <section>
              <h2 className="text-[10px] font-extrabold text-[#6B7480] uppercase tracking-[1.3px] mb-3">⚠ Pontos de atenção</h2>
              <div className="flex flex-col gap-2.5">
                {alerts.map((a, i) => (
                  <div key={i} className="border border-[#F3D9B8] border-l-[3px] border-l-[#B45309] rounded-xl px-4 py-3.5 bg-[#FFFAF2]">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#92400E]">{a.tag}</span>
                    </div>
                    <div className="text-[13.5px] font-bold text-[#1A1D24] mb-1 leading-snug">{a.title}</div>
                    <div className="text-[12.5px] text-[#434A57] leading-[1.6]">{a.text}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Ações */}
            <section>
              <h2 className="text-[10px] font-extrabold text-[#6B7480] uppercase tracking-[1.3px] mb-3">✅ Próximas ações</h2>
              <div className="flex flex-col gap-2.5">
                {actions.map((a, i) => (
                  <div key={i} className="flex gap-3 bg-white border border-[#E2E7EF] rounded-xl px-4 py-3.5 items-start">
                    <div className="w-5 h-5 border-2 border-[#2563EB] rounded-[6px] flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-[5px] uppercase tracking-[0.5px] ${a.prio === "alta" ? "bg-[#2563EB] text-white" : "bg-[#E9F0FE] text-[#1E40AF]"}`}>
                          {a.prio === "alta" ? "Prioridade alta" : "Prioridade média"}
                        </span>
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-[5px] bg-[#F6F8FB] text-[#6B7480] border border-[#E2E7EF] uppercase tracking-[0.5px]">
                          {a.horizon}
                        </span>
                      </div>
                      <div className="text-[13.5px] font-bold text-[#1A1D24] mb-0.5 leading-snug">{a.title}</div>
                      <div className="text-[12px] text-[#434A57] leading-[1.6]">{a.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Footer */}
          <div className="px-8 py-5 border-t border-[#E2E7EF] print:px-10 flex items-center justify-between flex-wrap gap-2">
            <div className="text-[11px] text-[#6B7480]">
              IA LAB · Mapa de Mercado Design 2026 · Documento estratégico interno
            </div>
            <div className="text-[11px] text-[#6B7480]">
              71 fontes validadas · Próxima revisão: Novembro 2026
            </div>
          </div>

        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          body { background: white; }
          @page { margin: 1.5cm; size: A4; }
        }
      `}</style>
    </div>
  );
}
