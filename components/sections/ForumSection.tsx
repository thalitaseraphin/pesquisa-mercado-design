"use client";

import { useReportDate } from "@/context/ReportDateContext";
import SectionHeader from "./SectionHeader";

const hotCards = [
  {
    href: "https://www.canva.com/newsroom/news/design-trends-2026/",
    src: "Canva / It's Nice That",
    heat: "📈 Tendência",
    updated: "06 Jul 2026",
    reportDate: "06/07/2026",
    title: "Comunidade abraça a imperfeição: 'Imperfect by Design' vira bandeira",
    text: 'O relatório da Canva pegou as comunidades: 2026 é o ano de <strong>retomar o controle criativo sem rejeitar a IA</strong>. Designers trocam exemplos de textura, grão e handmade — e apontam que o feito à mão gera <strong>67% mais engajamento</strong> que o output puramente gerado.',
    go: "Ver o relatório",
  },
  {
    href: "https://www.creativebloq.com/design/graphic-design/texture-warmth-and-tactile-rebellion-the-big-graphic-design-trends-for-2026",
    src: "r/graphic_design",
    heat: "🔥 Polêmico",
    updated: "06 Jul 2026",
    reportDate: "06/07/2026",
    title: "'62 mil startups, o mesmo logo swirl': o debate da monocultura visual da IA",
    text: 'Vira pauta quente: quando todos usam os mesmos modelos, tudo converge para a mesma estética. A comunidade discute como <strong>ter ponto de vista virou o ativo escasso</strong> — e por que textura e "rebelião tátil" são a resposta à padronização.',
    go: "Ver o debate",
  },
  {
    href: "https://thenextweb.com/news/google-pics-workspace-ai-image-generator-nano-banana-2",
    src: "The Next Web / HN",
    heat: "🤖 Ferramentas",
    updated: "06 Jul 2026",
    reportDate: "06/07/2026",
    title: "Google Pics entra no workflow: mais um gigante na disputa do design",
    text: 'Com o <strong>Pics no Workspace</strong> (Nano Banana 2), o Google mira Canva e Claude Design. A discussão nas comunidades: a geração ficou <strong>ubíqua e barata</strong> — o valor sai da ferramenta e migra para quem sabe o que pedir e por quê.',
    go: "Ler sobre o Pics",
  },
  {
    href: "https://www.creativebloq.com/design/graphic-design/texture-warmth-and-tactile-rebellion-the-big-graphic-design-trends-for-2026",
    src: "Creative community",
    heat: "📈 Tendência",
    updated: "06 Jul 2026",
    reportDate: "06/07/2026",
    title: "Serifas 'tortas' e handmade viram assinatura humana anti-IA",
    text: 'A "rebelião tátil" domina o feed: <strong>serifas irregulares, colagem e imperfeição deliberada</strong> sinalizam que houve uma escolha humana — algo que a IA converge a não fazer. Designers usam isso como prova de autoria e refino.',
    go: "Ver as tendências",
  },
  {
    href: "https://www.meioemensagem.com.br/cannes/como-a-ia-esta-inserida-nas-categorias-e-checagem-dos-cases",
    src: "Meio & Mensagem",
    heat: "🏆 Cannes 2026",
    updated: "19 Jun 2026",
    reportDate: "25/06/2026",
    title: 'Cannes Lions institucionaliza IA: "AI Craft" entra em 5 categorias, incluindo Design',
    text: 'Festival cria subcategoria focada no <strong>"sweet spot onde criatividade humana e IA geram algo que nenhum poderia criar sozinho"</strong>. Design, Film Craft, Digital Craft e Creative Data estão dentro. A IA saiu do tema e virou critério formal de julgamento.',
    go: "Ver as mudanças nas categorias",
  },
  {
    href: "https://www.meioemensagem.com.br/sxsw/conexao-austin/em-terra-de-ia-quem-e-craft-e-rei",
    src: "Meio & Mensagem",
    heat: "💬 Debate SXSW",
    updated: "12 Mar 2026",
    reportDate: "25/06/2026",
    title: '"Em terra de IA, quem é craft é rei" — o argumento do estúdio brasileiro no SXSW',
    text: 'Van Queiroz (Colletivo) defende que <strong>sem suar, errar e estressar linguagem não há entrega genuína</strong>. A "ginga" brasileira não é replicável por ferramenta. Ressalva: IA beneficia pequenos negócios sem recursos — o problema é a adoção desnecessária por quem tem.',
    go: "Ler o argumento completo",
  },
  {
    href: "https://www.b9.com.br/178161/canva-ia-briefing-campanha/",
    src: "B9",
    heat: "🤖 Plataformas",
    updated: "16 Abr 2026",
    reportDate: "25/06/2026",
    title: "Canva IA 2.0: de briefing a campanha completa com um comando",
    text: 'Sistema agêntico com 4 camadas — design conversacional, orquestração autônoma, memória ativa e edição por objeto. <strong>Brasil é o maior mercado global</strong>: 1,5 bilhão de designs em 12 meses, 1 em cada 9 internautas usando. Adobe simplifica o complexo; Canva sofistica o acessível — ambas disputam o mesmo workflow.',
    go: "Ler a análise no B9",
  },
  {
    href: "https://www.b9.com.br/shows/braincast/628-o-que-e-ser-uma-agencia-de-publicidade-em-2026/",
    src: "B9 · Braincast",
    heat: "💼 Mercado",
    updated: "12 Abr 2026",
    reportDate: "25/06/2026",
    title: '"O que é ser uma agência de publicidade em 2026?" — Braincast #628',
    text: 'IA virou infraestrutura (não diferencial), clientes estão internalizando entregas, consultorias avançando sobre território das agências. <strong>O formato "agência" pode não ser mais a categoria óbvia</strong> — o mercado está se reorganizando em torno de algo diferente.',
    go: "Ouvir o Braincast",
  },
];

const trends = [
  { label: 'Identidades "vivas" / motion-first', solid: true },
  { label: "Tipografia expressiva & kinética", solid: true },
  { label: "Monospaced no branding", solid: false },
  { label: "Neo-minimalismo com textura", solid: false },
  { label: "Craft & imperfeição (Imperfect by Design)", solid: true },
  { label: "Maximalismo anti-IA", solid: true },
  { label: "Future Medieval", solid: false },
  { label: "Design como conhecimento executável", solid: true },
  { label: "Mixed-media & 3D", solid: false },
  { label: "Ícones customizados", solid: false },
  { label: "Serifas elegantes + animação IA", solid: false },
];

const history = [
  {
    date: "26 Jun 2026",
    reportDate: "26/06/2026",
    snapshot: [
      { src: "Stratechery / HN", heat: "💬 Debate", title: '"AI loser"? Dylan Field: IA é tailwind, não headwind' },
      { src: "r/graphic_design", heat: "🔥 Polêmico", title: "Branding: o que a IA não copia? Convicção vs. logo por prompt" },
      { src: "Creative community", heat: "📈 Tendência", title: "Logos kinéticos e identidade adaptativa viram expectativa" },
      { src: "LinkedIn / Medium", heat: "🤖 Ferramentas", title: "Geradores de logo por IA capturam o tier de entrada" },
    ],
    trends: ["Convicção vs. logo gerado por IA", "Identidade adaptativa / motion-first", "Tier de entrada capturado por IA", "Ponto de vista como diferencial"],
  },
  {
    date: "25 Jun 2026",
    reportDate: "25/06/2026",
    snapshot: [
      { src: "Figma Config", heat: "🗓️ Recap", title: "Config 2026 encerra: Code Layers, Motion e Weave entram no canvas" },
      { src: "DEV / HN", heat: "🔥 Polêmico", title: "Code Layers desafia o Cursor — design vs. engenharia no mesmo arquivo" },
      { src: "r/motiondesign", heat: "🚀 Lançamento", title: "Motion nativo no Figma: fim do motion como especialidade à parte?" },
      { src: "Upwork", heat: "📊 Mercado", title: "Skills de IA dobram de demanda (+109%) e design básico encolhe 28%" },
    ],
    trends: ['Identidades "vivas" / motion-first', "Código como material de design", "Motion nativo no design tool", "Especialização design + IA"],
  },
  {
    date: "24 Jun 2026",
    reportDate: "24/06/2026",
    snapshot: [
      { src: "Figma", heat: "📊 Relatório", title: "State of the Designer 2026: 91% dizem que IA melhora o output — medo de virar 'operador'" },
      { src: "Midjourney", heat: "🚀 Lançamento", title: "V8.1 vira padrão e Draft mode acelera a iteração — 24 imagens por geração" },
      { src: "r/graphic_design", heat: "🔥 Polêmico", title: 'Tier commodity dominado por IA: "trabalho humano vira o novo premium"' },
      { src: "RGD", heat: "⚖️ Ético", title: "IA responsável: diretrizes para usar sem terceirizar o julgamento" },
    ],
    trends: ['Identidades "vivas" / motion-first', "Curadoria como diferencial", "Maximalismo anti-IA", "Design como conhecimento executável"],
  },
  {
    date: "23 Jun 2026",
    reportDate: "23/06/2026",
    snapshot: [
      { src: "Figma Config", heat: "🗓️ Abre hoje", title: "Config 2026 dia 1: o que a comunidade espera do keynote" },
      { src: "Fast Company", heat: "💬 Muito comentado", title: "Canva ubíquo via Gemini: o que ainda vale a expertise profissional?" },
      { src: "Clever Marketing", heat: "🔥 Polêmico", title: 'Designers reagem a IA-graphics: quando "good enough" vira o brief' },
      { src: "TwistedSifter", heat: "📈 Viralizou", title: "Estudantes protestam contra IA obrigatória no curso" },
    ],
    trends: ['Identidades "vivas" / motion-first', "Direção de motion no design tool", "Design como conhecimento executável", "Maximalismo anti-IA"],
  },
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
    date: "Abr 2026",
    reportDate: "01/04/2026",
    snapshot: [
      { src: "B9", heat: "🤖 Produto", title: "Canva IA 2.0 transforma briefing em campanha inteira — sistema agêntico com memória ativa lançado no Canva Create LA" },
      { src: "B9 · Braincast", heat: "💬 Debate", title: 'Braincast #628: "O que é ser uma agência de publicidade em 2026?" — IA como infraestrutura, internalização e consultorias avançando' },
      { src: "Meio & Mensagem", heat: "🎙️ SXSW", title: '"Em terra de IA, quem é craft é rei" — Van Queiroz (Colletivo) defende o processo humano como único diferencial real' },
      { src: "TecMundo", heat: "🔧 Ferramentas", title: "Canva lança Affinity de graça para todos; Adobe anuncia IA generativa no Photoshop, Lightroom e Premiere" },
    ],
    trends: ["IA como infraestrutura (não diferencial)", "Craft e autenticidade humana", "Agências em transição de modelo", "Plataformas disputando workflow criativo completo"],
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

  const showCurrent = !selectedDate || selectedDate === "06/07/2026";
  const filteredHistory = selectedDate
    ? history.filter((h) => h.reportDate === selectedDate)
    : history;

  const isHistoryOnlyView = !!selectedDate && selectedDate !== "06/07/2026";

  return (
    <section id="forum" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="🔥"
        part="Comunidades · atualizado 06/07/2026"
        title="Em Alta nos Fóruns & Tendências"
        description="O que está bombando nas comunidades de design (Reddit, Adobe, Figma, B9, Meio &amp; Mensagem, TecMundo) e as tendências do mercado"
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
          {/* Fóruns & comunidades */}
          <div className="flex items-center gap-2 mb-3 px-0.5">
            <span className="text-[10px] font-extrabold uppercase tracking-[1px] text-[#6B7480]">Fóruns & Comunidades Globais</span>
            <div className="flex-1 h-px bg-[#E2E7EF]" />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-5 max-md:grid-cols-1">
            {hotCards.slice(0, 4).map((card) => (
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

          {/* Mídia criativa brasileira */}
          <div className="flex items-center gap-2 mb-3 px-0.5">
            <span className="text-[10px] font-extrabold uppercase tracking-[1px] text-[#6B7480]">Mídia Criativa Brasileira — B9 · Meio &amp; Mensagem</span>
            <div className="flex-1 h-px bg-[#E2E7EF]" />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-[22px] max-md:grid-cols-1">
            {hotCards.slice(4).map((card) => (
              <a
                key={card.href}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-[#E2E7EF] rounded-xl p-5 no-underline shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-[180ms] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(16,24,40,0.12)]"
              >
                <div className="flex items-center gap-2 mb-2.5 flex-wrap">
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.6px] px-2.5 py-0.5 rounded-[6px] bg-[#B45309] text-white">{card.src}</span>
                  <span className="text-[10px] font-extrabold uppercase tracking-[0.6px] px-2.5 py-0.5 rounded-[6px] border border-[#D2D9E4] text-[#434A57]">{card.heat}</span>
                  <span className="ml-auto text-[10px] text-[#6B7480] font-semibold">{card.updated}</span>
                </div>
                <div className="text-[15.5px] font-extrabold text-[#1A1D24] mb-1.5 leading-[1.35]">{card.title}</div>
                <div className="text-[13.5px] text-[#434A57] leading-[1.65]" dangerouslySetInnerHTML={{ __html: card.text }} />
                <span className="text-[11.5px] text-[#B45309] font-bold mt-[11px] inline-flex items-center gap-1">{card.go} <span>↗</span></span>
              </a>
            ))}
          </div>

          <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px] mb-3.5">
            <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">Tendências de mercado em alta · 06/07/2026</h3>
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
