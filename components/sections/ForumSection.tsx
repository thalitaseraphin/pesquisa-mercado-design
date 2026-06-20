import SectionHeader from "./SectionHeader";

const hotCards = [
  {
    href: "https://www.reddit.com/r/graphic_design/search/?q=AI%20replace&restrict_sr=1&sort=top",
    src: "r/graphic_design",
    heat: "🔥 Polêmico",
    updated: "Jun 2026",
    title: '"A IA vai acabar com a produção gráfica manual até 2030?"',
    text: 'Debate quente: <strong>49% dos profissionais</strong> (UK/US/FR/DE) acham que a produção manual fica obsoleta em 5 anos. Muitos relatam medo da viabilidade da profissão após GPT-4o e Gemini.',
    go: "Abrir discussão no Reddit",
  },
  {
    href: "https://www.reddit.com/r/graphic_design/search/?q=anti%20AI&restrict_sr=1&sort=top",
    src: "r/graphic_design",
    heat: "📈 Crescendo",
    updated: "Jun 2026",
    title: 'Movimento "Anti-IA": o charme da imperfeição',
    text: 'Grãos texturizados, lettering orgânico, hand-drawn e "scrapbooking" viram rebeldia contra a estética limpa e sem alma da IA. <strong>Maximalismo</strong> em alta para "forçar o olhar a desacelerar".',
    go: "Ver threads anti-IA",
  },
  {
    href: "https://dev.to/emma_schmidt_/how-are-you-adapting-your-design-process-for-ai-in-2026-whats-your-plan-32lp",
    src: "DEV Community",
    heat: "💬 Muito comentado",
    updated: "Jun 2026",
    title: '"Como você está adaptando seu processo para IA em 2026?"',
    text: 'Thread cheia de designers trocando workflows: <strong>48% dizem que as ferramentas novas aumentaram a carga</strong> em vez de aliviar. Burnout e "falta de tempo para criar" dominam o desabafo.',
    go: "Ler a conversa no DEV",
  },
  {
    href: "https://www.reddit.com/r/graphic_design/search/?q=AI%20copyright&restrict_sr=1&sort=top",
    src: "r/graphic_design",
    heat: "⚖️ Ético",
    updated: "Jun 2026",
    title: 'Direitos autorais, dados e "o maior roubo de IP da história"',
    text: 'Preocupação ética forte: treino de modelos com obras sem consentimento, consumo de energia e falta de transparência ("black box"). Tema recorrente nas discussões de profissionais.',
    go: "Ver debate sobre direitos autorais",
  },
];

const trends = [
  { label: 'Identidades "vivas" / motion-first', solid: true },
  { label: "Tipografia expressiva & kinética", solid: true },
  { label: "Monospaced no branding", solid: false },
  { label: "Neo-minimalismo com textura", solid: false },
  { label: "Maximalismo anti-IA", solid: false },
  { label: "Future Medieval", solid: false },
  { label: "Design como conhecimento executável", solid: true },
  { label: "Mixed-media & 3D", solid: false },
  { label: "Ícones customizados", solid: false },
  { label: "Serifas elegantes + animação IA", solid: false },
];

// Histórico de capturas anteriores para não perder o contexto ao longo do tempo
const history = [
  {
    date: "Jun 2026",
    snapshot: [
      { src: "r/graphic_design", heat: "🔥 Polêmico", title: '"A IA vai acabar com a produção gráfica manual até 2030?"' },
      { src: "r/graphic_design", heat: "📈 Crescendo", title: 'Movimento "Anti-IA": o charme da imperfeição' },
      { src: "DEV Community", heat: "💬 Muito comentado", title: '"Como você está adaptando seu processo para IA em 2026?"' },
      { src: "r/graphic_design", heat: "⚖️ Ético", title: 'Direitos autorais, dados e "o maior roubo de IP da história"' },
    ],
    trends: ['Identidades "vivas" / motion-first', "Tipografia expressiva & kinética", "Maximalismo anti-IA", "Design como conhecimento executável"],
  },
  {
    date: "Mai 2026",
    snapshot: [
      { src: "r/graphic_design", heat: "🔥 Em alta", title: '"Figma com IA mudou meu workflow completamente — e o meu salário"' },
      { src: "Designer News", heat: "💬 Debate", title: '"Cursor e Bolt substituem o front-end — o que isso faz ao papel do designer?"' },
      { src: "r/web_design", heat: "📈 Crescendo", title: 'Framer vs Webflow vs Figma Sites: qual o melhor para o portfólio de 2026?' },
      { src: "LinkedIn", heat: "🏆 Viral", title: '"Cobrei R$12k por identidade que levei 4 dias fazendo com IA — foi certo?"' },
    ],
    trends: ["Vibe coding + design", "Framer crescendo forte", "Motion e 3D acessíveis via IA", "Identidade visual + pitch deck em pacote"],
  },
];

export default function ForumSection() {
  return (
    <section id="forum" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="🔥"
        part="Comunidades · atualizado 19/06/2026"
        title="Em Alta nos Fóruns & Tendências"
        description="O que está bombando nas comunidades de design (Reddit, Adobe, Figma, DEV) e as tendências do mercado"
      />

      <div className="grid grid-cols-2 gap-4 mb-[22px] max-md:grid-cols-1">
        {hotCards.map((card) => (
          <a
            key={card.href}
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white border border-[#E2E7EF] rounded-xl p-5 no-underline shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-[180ms] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(16,24,40,0.12)]"
          >
            <div className="flex items-center gap-2 mb-2.5 flex-wrap">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.6px] px-2.5 py-0.5 rounded-[6px] bg-[#2563EB] text-white">{card.src}</span>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.6px] px-2.5 py-0.5 rounded-[6px] border border-[#D2D9E4] text-[#434A57]">{card.heat}</span>
              <span className="ml-auto text-[10px] text-[#6B7480] font-semibold">{card.updated}</span>
            </div>
            <div className="text-[15.5px] font-extrabold text-[#1A1D24] mb-1.5 leading-[1.35]">{card.title}</div>
            <div className="text-[13.5px] text-[#434A57] leading-[1.65]" dangerouslySetInnerHTML={{ __html: card.text }} />
            <span className="text-[11.5px] text-[#2563EB] font-bold mt-[11px] inline-flex items-center gap-1">{card.go} <span>↗</span></span>
          </a>
        ))}
      </div>

      <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px] mb-3.5">
        <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">Tendências de mercado em alta · Jun 2026</h3>
        <div className="flex flex-wrap gap-2.5">
          {trends.map((t) => (
            <span key={t.label} className={`text-[12.5px] font-semibold px-3.5 py-1.5 border rounded-[24px] ${t.solid ? "bg-[#2563EB] text-white border-[#2563EB]" : "bg-[#F6F8FB] text-[#434A57] border-[#D2D9E4]"}`}>{t.label}</span>
          ))}
        </div>
        <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">Fontes: Creative Boom, Envato Elements, G2, Kittl, Jukebox, TechRadar, Adobe/DEV/Figma communities (jun/2026).</div>
      </div>

      {/* Histórico */}
      <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
        <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-4">🕓 Histórico de capturas anteriores</h3>
        <div className="flex flex-col gap-0">
          {history.map((h, hi) => (
            <div key={hi} className="relative pl-5 border-l border-[#E2E7EF] pb-6 last:pb-0">
              <div className="absolute left-[-5px] top-[4px] w-2.5 h-2.5 rounded-full bg-[#E2E7EF] border-2 border-white" />
              <div className="text-[11px] font-extrabold text-[#6B7480] uppercase tracking-[0.6px] mb-2">{h.date}</div>
              <div className="flex flex-col gap-1.5 mb-2">
                {h.snapshot.map((s, si) => (
                  <div key={si} className="flex items-start gap-2 text-[12.5px] text-[#434A57]">
                    <span className="text-[9.5px] font-bold text-[#6B7480] bg-[#F6F8FB] border border-[#E2E7EF] px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5">{s.src}</span>
                    <span>{s.title}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {h.trends.map((t) => (
                  <span key={t} className="text-[11px] text-[#2563EB] bg-[#E9F0FE] border border-[#CFE0FB] px-2 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-[11px] text-[#6B7480] pt-3 border-t border-[#E2E7EF] mt-4">
          Atualizar este histórico a cada ciclo de pesquisa (sugestão: mensal). Adicionar novo bloco em <code className="bg-[#F6F8FB] px-1 rounded text-[10px]">ForumSection.tsx → history[]</code>
        </div>
      </div>
    </section>
  );
}
