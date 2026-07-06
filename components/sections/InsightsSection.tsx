"use client";

import { useReportDate } from "@/context/ReportDateContext";
import SectionHeader from "./SectionHeader";

const insights = [
  {
    num: "INSIGHT 13 · NOVO",
    title: "O craft humano é a nova barreira competitiva",
    text: "A Canva declara 2026 o ano do <strong>'Imperfect by Design'</strong>: 80% dos criadores querem 'retomar o controle criativo' e elementos feitos à mão geram <strong>67% mais engajamento</strong> que o output puramente de IA. A leitura para quem vende design: imperfeição deliberada, textura e presença humana viram <strong>diferencial vendável</strong> — exatamente o que o prompt não replica.",
    source: "Canva — Imperfect by Design 2026",
    sourceUrl: "https://www.canva.com/newsroom/news/design-trends-2026/",
    updated: "06 Jul 2026",
    reportDate: "06/07/2026",
    attention: false,
  },
  {
    num: "INSIGHT 14 · NOVO",
    title: "A monocultura visual da IA é uma oportunidade",
    text: "Modelos treinados nos mesmos dados convergem para a mesma estética — o logo 'swirl' que <strong>~62 mil startups reinventaram sozinhas</strong>. Quando tudo parece igual, <strong>ter ponto de vista vira escasso e valioso</strong>. Diferenciar por voz, textura e escolha humana deixa de ser gosto e passa a ser vantagem de mercado mensurável.",
    source: "Creative Bloq — Tactile Rebellion 2026",
    sourceUrl: "https://www.creativebloq.com/design/graphic-design/texture-warmth-and-tactile-rebellion-the-big-graphic-design-trends-for-2026",
    updated: "06 Jul 2026",
    reportDate: "06/07/2026",
    attention: false,
  },
  {
    num: "⚠ PONTO DE ATENÇÃO 08 · NOVO",
    title: "A ferramenta virou commodity — não construa a oferta nela",
    text: "Com <strong>Google Pics no Workspace</strong>, o Creative Agent da Adobe e o foundation model da Canva, gerar design ficou acessível em todo lugar. Vender 'acesso à ferramenta' ou 'sei usar o app X' perde valor a cada lançamento. A defesa é ancorar a oferta no que a plataforma não entrega: <strong>estratégia, ponto de vista e resultado de negócio</strong>.",
    source: "The Next Web — Google Pics 2026",
    sourceUrl: "https://thenextweb.com/news/google-pics-workspace-ai-image-generator-nano-banana-2",
    updated: "06 Jul 2026",
    reportDate: "06/07/2026",
    attention: true,
  },
  {
    num: "INSIGHT 11 · NOVO",
    title: "A IA comoditizou o logo — não a convicção",
    text: "Com geradores de logo por IA (Looka, Brandmark) entregando o tier de entrada, o artefato virou barato. Mas <strong>convicção sobre o que a marca é, disciplina sobre o que ela não é e julgamento para vender ambos</strong> seguem humanos. O entregável que paga deixou de ser o arquivo e passou a ser o ponto de vista.",
    source: "Freshly Brewed — Brand Identity 2026: What AI Can't Copy",
    sourceUrl: "https://freshlybrewed.co/insights-news/brand-identity-in-2026-what-ai-cant-copy/",
    updated: "26 Jun 2026",
    reportDate: "26/06/2026",
    attention: false,
  },
  {
    num: "INSIGHT 12 · NOVO",
    title: "Branding 2026 é motion-first e adaptativo",
    text: "As tendências de identidade convergem para <strong>logos kinéticos, sistemas adaptativos e a 'morte do skin-deep'</strong>. Identidade estática vira mínimo viável; o esperado é um sistema que se move e se ajusta por contexto. Quem vende marca precisa entregar regras vivas — não um arquivo final.",
    source: "Envato Elements — Logo & Branding Trends 2026",
    sourceUrl: "https://elements.envato.com/learn/logo-and-branding-trends",
    updated: "26 Jun 2026",
    reportDate: "26/06/2026",
    attention: false,
  },
  {
    num: "⚠ PONTO DE ATENÇÃO 07 · NOVO",
    title: "O tier de entrada do branding já é da IA",
    text: "Geradores de logo por IA tornam <strong>branding básico acessível a qualquer um</strong>, comprimindo o trabalho de entrada que sustentava muitos iniciantes. Competir por 'fazer o logo' é perder por definição. A defesa é subir a oferta para <strong>posicionamento, sistema e resultado de negócio</strong> — o que um gerador não entrega.",
    source: "Medium — 10 Best AI Logo Generators 2026",
    sourceUrl: "https://medium.com/@sovannaro/10-best-ai-logo-generators-for-professional-brand-design-in-2026-4361243de404",
    updated: "26 Jun 2026",
    reportDate: "26/06/2026",
    attention: true,
  },
  {
    num: "INSIGHT 10 · NOVO",
    title: "Código virou material de design — a fronteira se dissolve",
    text: "No Config 2026, a Figma transformou qualquer camada em <strong>Code Layer</strong> editável (React + npm) direto no canvas. A leitura: <strong>design e engenharia passam a morar no mesmo arquivo</strong>. Quem entende sistema, componente e um pouco de código deixa de 'entregar tela' e passa a entregar produto — e captura a margem que o handoff antigo dissipava.",
    source: "The Next Web — Figma Config 2026",
    sourceUrl: "https://thenextweb.com/news/figma-config-code-layers-ai-skills-plugins-animations",
    updated: "25 Jun 2026",
    reportDate: "25/06/2026",
    attention: false,
  },
  {
    num: "INSIGHT 09 · NOVO",
    title: "Motion deixou de ser especialidade à parte",
    text: "Com o <strong>Figma Motion nativo</strong> (timeline, keyframes e export em CSS/React/MP4/SVG), animação entra no fluxo padrão de design — sem ferramenta separada. <strong>Identidade estática vira mínimo viável</strong>; o entregável esperado já inclui movimento. Quem só faz arte parada terá que reaprender o brief.",
    source: "CMSWire — Figma Motion no Config 2026",
    sourceUrl: "https://www.cmswire.com/digital-experience/figma-launches-code-layers-motion-at-config-2026/",
    updated: "25 Jun 2026",
    reportDate: "25/06/2026",
    attention: false,
  },
  {
    num: "⚠ PONTO DE ATENÇÃO 06 · NOVO",
    title: "O freelance se partiu em dois — escolha o lado certo",
    text: "Dados do Upwork (In-Demand Skills 2026): demanda por skills de IA <strong>+109% a/a</strong>, design básico encolhendo ~28% como categoria, e <strong>especialistas em IA cobrando 25–60% acima</strong> dos generalistas. Ficar no meio — execução genérica sem IA — é a posição que mais perde preço. A defesa é especializar: design + IA + resultado documentado.",
    source: "Upwork — In-Demand Skills 2026",
    sourceUrl: "https://investors.upwork.com/news-releases/news-release-details/upworks-demand-skills-2026-demand-top-ai-skills-more-doubles-ai",
    updated: "25 Jun 2026",
    reportDate: "25/06/2026",
    attention: true,
  },
  {
    num: "INSIGHT 08 · NOVO",
    title: `Branding agora inclui ser "visível" para a IA`,
    text: "Com o <strong>Adobe Brand Visibility</strong> e o Firefly virando hub de 25+ modelos, a disputa de marca migra para <strong>como ela aparece em respostas de IA</strong>. Posicionamento, dados estruturados e consistência viram ativo de descoberta — marca que a IA não 'enxerga' perde recomendação antes mesmo de chegar ao consumidor.",
    source: "Adobe Newsroom — Brand Visibility 2026",
    sourceUrl: "https://news.adobe.com/news/2026/06/introducing-adobe-brand-visibility",
    updated: "24 Jun 2026",
    reportDate: "24/06/2026",
    attention: false,
  },
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
