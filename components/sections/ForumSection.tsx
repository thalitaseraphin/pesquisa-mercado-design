"use client";

import { useReportDate } from "@/context/ReportDateContext";
import SectionHeader from "./SectionHeader";

const hotCards = [
  {
    href: "https://config.figma.com/",
    src: "Figma Config",
    heat: "🗓️ Abre hoje",
    updated: "23 Jun 2026",
    reportDate: "23/06/2026",
    title: "Config 2026 dia 1: o que a comunidade espera do keynote",
    text: 'A conferência abre hoje em SF com o keynote do Dylan Field amanhã. Comunidade aposta em <strong>design agent com web search</strong> e nova fase do Figma Make. Designers planejam recalibrar workflow conforme os anúncios.',
    go: "Ver agenda do Config 2026",
  },
  {
    href: "https://www.fastcompany.com/91545081/canva-gemini-integration",
    src: "Fast Company",
    heat: "💬 Muito comentado",
    updated: "23 Jun 2026",
    reportDate: "23/06/2026",
    title: "Canva ubíquo via Gemini: o que ainda vale a expertise profissional?",
    text: 'Com a Canva dentro de <strong>Claude, ChatGPT, Copilot e Gemini</strong>, fazer "design decente" sem treino virou trivial. O debate na comunidade: o valor migra para julgamento, estratégia e trabalho que conecta — não para apertar prompt.',
    go: "Ler o debate",
  },
  {
    href: "https://www.clevermarketing.co.uk/graphic-design-news-june-2026/",
    src: "Clever Marketing",
    heat: "🔥 Polêmico",
    updated: "23 Jun 2026",
    reportDate: "23/06/2026",
    title: 'Designers reagem a IA-graphics: quando "good enough" vira o brief',
    text: 'Empresas trocam trabalho encomendado por gráficos de IA em material promocional. A reação é sobre <strong>qualidade, consistência de marca e corrida para o fundo</strong> — não só emprego. Ponto de vista e acúmulo de marca viram a defesa.',
    go: "Ler a análise do mês",
  },
  {
    href: "https://www.clevermarketing.co.uk/graphic-design-news-june-2026/",
    src: "TwistedSifter",
    heat: "📈 Viralizou",
    updated: "23 Jun 2026",
    reportDate: "23/06/2026",
    title: "Estudantes fazem protesto silencioso contra IA obrigatória no curso",
    text: 'Forçados pelo professor a usar IA em tudo, alunos coordenaram entregar o output <strong>mais "cara de IA" possível</strong> — demonstrando exatamente o que se perde. Reacendeu o debate sobre o que a educação em design deveria ensinar.',
    go: "Ver o caso",
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

const history = [
  {
    date: "22 Jun 2026",
    reportDate: "22/06/2026",
    snapshot: [
      { src: "Figma Config", heat: "🗓️ Esta semana", title: "Figma Config 2026 (23–25/06): o que esperar de IA no canvas" },
      { src: "WeAndTheColor", heat: "🔥 Polêmico", title: 'O colapso do freelance mid-level: "competir com assinatura de US$20/mês"' },
      { src: "Fast Company", heat: "💬 Muito comentado", title: 'Claude Design vs. Adobe, Canva e Figma: a "era frenemies" do design' },
      { src: "It's Nice That", heat: "📈 Crescendo", title: "Reação humana à IA: grão, colagem, zine e imperfeição em alta" },
    ],
    trends: ['Identidades "vivas" / motion-first', "Direção de motion no design tool", "Maximalismo anti-IA", "Design como conhecimento executável"],
  },
  {
    date: "19 Jun 2026",
    reportDate: "19/06/2026",
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
    reportDate: "01/05/2026",
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
  const { selectedDate, setSelectedDate } = useReportDate();

  const showCurrent = !selectedDate || selectedDate === "23/06/2026";
  const filteredHistory = selectedDate
    ? history.filter((h) => h.reportDate === selectedDate)
    : history;

  const isHistoryOnlyView = !!selectedDate && selectedDate !== "23/06/2026";

  return (
    <section id="forum" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="🔥"
        part="Comunidades · atualizado 23/06/2026"
        title="Em Alta nos Fóruns & Tendências"
        description="O que está bombando nas comunidades de design (Reddit, Adobe, Figma, DEV) e as tendências do mercado"
      />

      {selectedDate && (
        <div className="flex items-center gap-2 mb-4 text-[12px]">
          <span className="text-[#2563EB] font-bold">📅 Filtrando: {selectedDate}</span>
          <button onClick={() => setSelectedDate("")} className="text-[11px] text-[#6B7480] hover:text-[#1A1D24] underline">
            ver todos
          </button>
        </div>
      )}

      {/* Se filtrando por data antiga → mostrar snapshot como destaque */}
      {isHistoryOnlyView && filteredHistory.length > 0 && (
        <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-xl p-5 mb-4">
          <div className="text-[11px] font-extrabold text-[#92400E] uppercase tracking-[0.6px] mb-3">
            📸 Snapshot de {filteredHistory[0].date} — conteúdo desta data
          </div>
          <div className="flex flex-col gap-2 mb-3">
            {filteredHistory[0].snapshot.map((s, si) => (
              <div key={si} className="flex items-start gap-2 text-[13px] text-[#434A57]">
                <span className="text-[9.5px] font-bold text-[#92400E] bg-[#FEF3C7] border border-[#FDE68A] px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5">{s.src}</span>
                <span className="font-semibold">{s.title}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {filteredHistory[0].trends.map((t) => (
              <span key={t} className="text-[11px] text-[#92400E] bg-[#FEF3C7] border border-[#FDE68A] px-2 py-0.5 rounded-full">{t}</span>
            ))}
          </div>
        </div>
      )}

      {/* Cards atuais */}
      {showCurrent && (
        <>
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
            <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">Tendências de mercado em alta · 23/06/2026</h3>
            <div className="flex flex-wrap gap-2.5">
              {trends.map((t) => (
                <span key={t.label} className={`text-[12.5px] font-semibold px-3.5 py-1.5 border rounded-[24px] ${t.solid ? "bg-[#2563EB] text-white border-[#2563EB]" : "bg-[#F6F8FB] text-[#434A57] border-[#D2D9E4]"}`}>{t.label}</span>
              ))}
            </div>
            <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">Fontes: Creative Boom, Envato Elements, G2, Kittl, Jukebox, TechRadar, Adobe/DEV/Figma communities (jun/2026).</div>
          </div>
        </>
      )}

      {/* Histórico */}
      <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
        <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-4">🕓 Histórico de capturas anteriores</h3>
        {filteredHistory.length === 0 ? (
          <div className="text-[13px] text-[#6B7480] py-4 text-center">
            Nenhum histórico registrado para {selectedDate}.{" "}
            <button onClick={() => setSelectedDate("")} className="text-[#2563EB] font-bold hover:underline">Ver todos →</button>
          </div>
        ) : (
          <div className="flex flex-col gap-0">
            {filteredHistory.map((h, hi) => (
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
        )}
        <div className="text-[11px] text-[#6B7480] pt-3 border-t border-[#E2E7EF] mt-4">
          Atualizar mensalmente. Adicionar novo bloco em <code className="bg-[#F6F8FB] px-1 rounded text-[10px]">ForumSection.tsx → history[]</code> com <code className="bg-[#F6F8FB] px-1 rounded text-[10px]">reportDate: "DD/MM/YYYY"</code>
        </div>
      </div>
    </section>
  );
}
