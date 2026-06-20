import SectionHeader from "./SectionHeader";

type SignalLevel = "forte" | "emergindo" | "observar";
type Horizon = "agora" | "6m" | "1a" | "2a";

const signalConfig: Record<SignalLevel, { label: string; dots: string; bg: string; text: string; border: string }> = {
  forte:     { label: "SINAL FORTE",  dots: "●●●", bg: "bg-[#FEF2F2]", text: "text-[#B91C1C]", border: "border-[#FAD1D1]" },
  emergindo: { label: "EMERGINDO",    dots: "●●○", bg: "bg-[#FFFBEB]", text: "text-[#92400E]", border: "border-[#FDE68A]" },
  observar:  { label: "OBSERVAR",     dots: "●○○", bg: "bg-[#ECFDF5]", text: "text-[#065F46]", border: "border-[#A7F3D0]" },
};

const horizonConfig: Record<Horizon, { label: string; bg: string; text: string }> = {
  agora: { label: "AGORA",   bg: "bg-[#1A1D24]", text: "text-white" },
  "6m":  { label: "6 MESES", bg: "bg-[#FEF3C7]", text: "text-[#92400E]" },
  "1a":  { label: "1 ANO",   bg: "bg-[#E9F0FE]", text: "text-[#1E40AF]" },
  "2a":  { label: "2+ ANOS", bg: "bg-[#F6F8FB]", text: "text-[#6B7480]" },
};

const studies = [
  {
    category: "MERCADO",
    signal: "forte" as SignalLevel,
    horizon: "agora" as Horizon,
    org: "McKinsey Global Institute",
    title: "IA integrada a 67% dos projetos criativos até Q4/2026",
    pullStat: "3,4×",
    pullContext: "mais output com IA vs. sem IA — mesmo nível de qualidade",
    finding: "Profissionais criativos que adotam IA em fluxo real entregam 3,4× mais no mesmo período. O gargalo não é a ferramenta — é o processo e o prompt. Quem domina os dois vira multiplicador de capacidade, não apenas executor.",
    implications: ["Cobra mais por hora, não mais horas — a IA absorve o volume", "Documente prompts e contextos como ativos de marca", "Ofereça relatório de velocidade de entrega como diferencial de proposta"],
    sources: [
      { label: "McKinsey AI & Creative Work 2026", url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights" },
    ],
    date: "Jun 2026",
  },
  {
    category: "TENDÊNCIA",
    signal: "forte" as SignalLevel,
    horizon: "6m" as Horizon,
    org: "WGSN Creative Economy",
    title: "Duas macrotendências opostas dominam branding em 2026–27",
    pullStat: "2",
    pullContext: `direções radicalmente opostas que coexistem: "Radical Restraint" e "Machine Craftsmanship"`,
    finding: `"Radical Restraint" — marcas que fazem menos barulho, paletas ultra-reduzidas (preto + 1 cor), copy mínima. Reação ao excesso gerado por IA. Em paralelo, "Machine Craftsmanship" — estética que celebra o processo IA como artesanato: variações procedurais, texturas geradas, sistemas generativos mostrados abertamente como método.`,
    implications: ["Clientes premium querem um, não os dois — saiba posicionar sua proposta", "A tendência do restraint favorece sistemas de marca, não peças isoladas", "Machine Craftsmanship = oportunidade para mostrar o processo como produto"],
    sources: [
      { label: "WGSN Creative Directions 2026–27", url: "https://www.wgsn.com/en/blogs/wgsn-futures-2026-creative-directions" },
    ],
    date: "Jun 2026",
  },
  {
    category: "INVESTIMENTO",
    signal: "forte" as SignalLevel,
    horizon: "agora" as Horizon,
    org: "Sequoia Capital",
    title: "USD 10B+ em AI creative tools em 2025 — consolidação começa agora",
    pullStat: "USD 10B+",
    pullContext: "investidos em ferramentas de IA criativa só em 2025",
    finding: "O mercado de AI creative tools captou mais de USD 10B em 2025 e entra em fase de consolidação. Lovable ($7M → $206M ARR), Cursor ($0 → $1B ARR) e Bolt ($0 → $40M em 5 meses) provam que o crescimento é real. A próxima onda é de integração — as melhores ferramentas se embutem no Figma, Adobe e Canva. Quem aprender o stack atual terá vantagem antes da consolidação apagar as alternativas.",
    implications: ["Domine as ferramentas enquanto são independentes — ficará mais difícil pós-aquisição", "Stack recomendado 2026: Figma + Firefly + Lovable/Bolt para protótipo funcional", "O mercado paga premium por designers que entregam protótipo funcional, não só mockup"],
    sources: [
      { label: "Sequoia — State of AI in Creative 2026", url: "https://www.sequoiacap.com/article/ai-revolution-in-creative/" },
      { label: "Mocha — AI App Builder Statistics 2026", url: "https://getmocha.com/blog/ai-app-builder-statistics" },
    ],
    date: "Jun 2026",
  },
  {
    category: "MERCADO",
    signal: "forte" as SignalLevel,
    horizon: "agora" as Horizon,
    org: "CB Insights",
    title: "Stack de design se comprime de 12 para 3 ferramentas",
    pullStat: "75%",
    pullContext: "da categoria de ferramentas de design pode ser substituída por Figma + 1 AI-native",
    finding: "O designer médio usava 12+ ferramentas em 2023. Em 2026, o stack padrão converge para: Figma (UI/sistemas), Canva + IA (produção rápida) e 1 ferramenta AI-native (Lovable/Bolt/Cursor para o que precisar de código). A fragmentação está sendo eliminada. Isso reduz custo de licença mas aumenta dependência de poucas plataformas.",
    implications: ["Dominar Figma + 1 AI-native = suficiente para 90% dos projetos de 2026", "Lógica de precificação muda: menos ferramentas, mais estratégia — ajuste suas propostas", "Risco de lock-in: se Figma ou Adobe mudar precificação, afeta toda a categoria"],
    sources: [
      { label: "CB Insights — Design Software Market Map Q2/2026", url: "https://www.cbinsights.com/research/design-tools-market-map/" },
      { label: "Programming Helper — Figma 2026", url: "https://www.programming-helper.com/tech/figma-2026-40-market-share-13m-mau-ipo-python" },
    ],
    date: "Jun 2026",
  },
  {
    category: "CARREIRA",
    signal: "emergindo" as SignalLevel,
    horizon: "1a" as Horizon,
    org: "Gartner / Future of Work",
    title: "Novo papel emerge: Creative AI Orchestrator — acima do executor e do diretor",
    pullStat: "40%",
    pullContext: "das tarefas de designer executável por não-designers com IA até 2028 (Gartner)",
    finding: 'O "Creative AI Orchestrator" não executa nem só dirige — ele define o sistema, treina os agentes, audita o output e mantém coerência de marca ao longo do tempo. É o papel que justifica salário de R$15k–30k/mês em 2026–27. O título ainda não existe na maioria das JDs, mas a função já está sendo criada informalmente nas empresas que saíram de piloto para produção de IA.',
    implications: ["Posicione-se agora como quem define processos de marca com IA, não quem executa", "Mostre cases de 'sistema que funciona sem você' — autonomia é o produto", "Certificações de IA já importam: Adobe Firefly Certified, Figma AI, Anthropic Claude para criadores"],
    sources: [
      { label: "Gartner — Future of Work in Creative 2026", url: "https://www.gartner.com/en/newsroom/press-releases/2025-11-gartner-future-of-creative-work" },
      { label: "NoGood — AI Design Strategy 2026", url: "https://nogood.io/blog/future-of-design-strategy/" },
    ],
    date: "Jun 2026",
  },
  {
    category: "ESTRATÉGIA",
    signal: "observar" as SignalLevel,
    horizon: "2a" as Horizon,
    org: "IDEO + Deloitte",
    title: "Marcas com AI Design Strategy crescem 2,2× mais rápido",
    pullStat: "2,2×",
    pullContext: "crescimento de receita em empresas com estratégia de design + IA formalizada vs. sem estratégia",
    finding: 'O próximo diferencial não é usar IA — é ter uma "AI Design Strategy" documentada: como a marca usa IA para criar, o que vai para humano e o que vai para máquina, como auditar o output para coerência emocional. Empresas que formalizam isso crescem 2,2× mais rápido segundo o estudo conjunto IDEO+Deloitte. A fronteira final é IA que mantém coerência emocional de marca ao longo do tempo — isso ainda é 100% humano.',
    implications: ["Ofereça AI Brand Strategy como serviço premium — poucos fazem isso formalmente", "Documente o que a IA pode e não pode fazer por cada cliente como parte do onboarding", "Posicionar 'coerência emocional' como diferencial humano é a defesa mais sustentável"],
    sources: [
      { label: "IDEO + Deloitte — Design Futures 2028", url: "https://www.ideo.com/journal/design-futures" },
      { label: "Deloitte — AI & Creative Economy Report", url: "https://www2.deloitte.com/insights/us/en/focus/cognitive-technologies/ai-creative-economy.html" },
    ],
    date: "Jun 2026",
  },
];

const categoryColor: Record<string, string> = {
  MERCADO:     "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
  TENDÊNCIA:   "bg-[#FFF7ED] text-[#9A3412] border border-[#F5DCBE]",
  INVESTIMENTO:"bg-[#ECFDF5] text-[#066E4C] border border-[#BBE9D2]",
  CARREIRA:    "bg-[#F5F3FF] text-[#6D28D9] border border-[#DDD6FE]",
  ESTRATÉGIA:  "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
};

export default function EstudosMercadoSection() {
  return (
    <section id="estudos" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="🔬"
        part="Sinais de mercado"
        title="Estudos & Sinais Estratégicos"
        description="Dados de Sequoia, WGSN, McKinsey, CB Insights e Gartner traduzidos para o mercado de design — com nível de sinal e horizonte de impacto"
      />

      {/* Legenda */}
      <div className="flex flex-wrap gap-3 mb-5 p-4 bg-white border border-[#E2E7EF] rounded-xl">
        <div className="text-[11px] font-extrabold text-[#6B7480] uppercase tracking-[0.6px] self-center w-full mb-1">Legenda de sinais</div>
        {(Object.entries(signalConfig) as [SignalLevel, typeof signalConfig[SignalLevel]][]).map(([k, s]) => (
          <div key={k} className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-semibold ${s.bg} ${s.text} ${s.border}`}>
            <span>{s.dots}</span> {s.label}
          </div>
        ))}
        <div className="w-px bg-[#E2E7EF] mx-1 self-stretch" />
        {(Object.entries(horizonConfig) as [Horizon, typeof horizonConfig[Horizon]][]).map(([k, h]) => (
          <div key={k} className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${h.bg} ${h.text}`}>{h.label}</div>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {studies.map((s, i) => {
          const sig = signalConfig[s.signal];
          const hor = horizonConfig[s.horizon];
          return (
            <div key={i} className="bg-white border border-[#E2E7EF] rounded-xl overflow-hidden shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
              {/* Header bar */}
              <div className="flex items-center gap-2.5 px-5 py-3 border-b border-[#E2E7EF] bg-[#FAFAFA] flex-wrap">
                <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${categoryColor[s.category] ?? "bg-[#F6F8FB] text-[#6B7480] border border-[#E2E7EF]"}`}>{s.category}</span>
                <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border ${sig.bg} ${sig.text} ${sig.border}`}>{sig.dots} {sig.label}</span>
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${hor.bg} ${hor.text}`}>{hor.label}</span>
                <span className="ml-auto text-[11px] font-bold text-[#6B7480]">{s.org}</span>
              </div>

              <div className="p-5 grid grid-cols-[1fr_auto] gap-5 max-md:grid-cols-1">
                <div>
                  <h3 className="text-[16px] font-extrabold text-[#1A1D24] leading-[1.35] mb-3">{s.title}</h3>
                  <p className="text-[13.5px] text-[#434A57] leading-[1.7] mb-4">{s.finding}</p>

                  <div className="bg-[#F6F8FB] border border-[#E2E7EF] rounded-xl p-3.5 mb-3">
                    <div className="text-[10px] font-extrabold text-[#6B7480] uppercase tracking-[0.8px] mb-1.5">O que isso significa para você</div>
                    <ul className="flex flex-col gap-1.5">
                      {s.implications.map((imp, ii) => (
                        <li key={ii} className="text-[12.5px] text-[#434A57] flex gap-2 leading-[1.5]">
                          <span className="text-[#2563EB] flex-shrink-0">→</span>
                          {imp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {s.sources.map((src, si) => (
                      <a key={si} href={src.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#6B7480] hover:text-[#2563EB] no-underline transition-colors bg-[#F6F8FB] border border-[#E2E7EF] px-2.5 py-1 rounded-lg hover:bg-[#E9F0FE] hover:border-[#CFE0FB]">
                        <span className="text-[9px]">↗</span> {src.label}
                      </a>
                    ))}
                    <span className="text-[11px] text-[#6B7480] self-center ml-1">{s.date}</span>
                  </div>
                </div>

                {/* Pull stat */}
                <div className="flex flex-col items-center justify-center text-center w-[120px] max-md:w-full max-md:flex-row max-md:gap-3 max-md:text-left flex-shrink-0">
                  <div className="text-[40px] font-extrabold tracking-[-2px] text-[#1A1D24] leading-none max-md:text-[30px]">{s.pullStat}</div>
                  <div className="text-[11px] text-[#6B7480] mt-1.5 leading-[1.4] max-md:mt-0">{s.pullContext}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">
        Fontes primárias: McKinsey Global Institute, WGSN Creative Directions, Sequoia Capital, CB Insights, Gartner, IDEO+Deloitte. Curadoria e tradução para o contexto de design brasileiro: IA LAB (jun/2026).
      </div>
    </section>
  );
}
