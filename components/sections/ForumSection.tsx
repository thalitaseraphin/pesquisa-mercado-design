"use client";

import { useReportDate } from "@/context/ReportDateContext";
import SectionHeader from "./SectionHeader";

const hotCards = [
  {
    href: "https://www.figma.com/newsroom/",
    src: "Figma",
    heat: "📊 Relatório",
    updated: "24 Jun 2026",
    reportDate: "24/06/2026",
    title: "State of the Designer 2026: 91% dizem que IA melhora o output — mas cresce o medo de virar 'operador'",
    text: 'Os números (72% usando IA, 91% aprovando) reacenderam o debate: se todo mundo usa as mesmas ferramentas, <strong>o diferencial passa a ser gosto, julgamento e direção</strong>. A comunidade discute como provar isso num portfólio.',
    go: "Ver o relatório",
  },
  {
    href: "https://releasebot.io/updates/midjourney",
    src: "Midjourney",
    heat: "🚀 Lançamento",
    updated: "24 Jun 2026",
    reportDate: "24/06/2026",
    title: "V8.1 vira padrão e Draft mode acelera a iteração — 24 imagens por geração",
    text: 'Designers testam o novo fluxo: gerar dezenas de rascunhos em baixa resolução e só renderizar em HD o que prestar. O debate: <strong>a velocidade de exploração dispara, mas a curadoria vira o gargalo</strong> — e o trabalho de verdade.',
    go: "Ver as release notes",
  },
  {
    href: "https://www.upwork.com/resources/will-ai-replace-graphic-designers",
    src: "r/graphic_design",
    heat: "🔥 Polêmico",
    updated: "24 Jun 2026",
    reportDate: "24/06/2026",
    title: 'Tier commodity dominado por IA: "trabalho humano vira o novo premium"',
    text: 'Com logo e social básico capturados por Canva/Midjourney, parte da comunidade aposta que o <strong>excesso de "genérico de IA" vai tornar o feito à mão desejável</strong> — como aconteceu com banco de imagens. Outros respondem: adapte-se ou saia.',
    go: "Ler o debate",
  },
  {
    href: "https://rgd.ca/articles/2026-amplifying-creativity-with-ai-tools-for-designers-in-2026",
    src: "RGD",
    heat: "⚖️ Ético",
    updated: "24 Jun 2026",
    reportDate: "24/06/2026",
    title: "IA responsável: associação publica diretrizes para usar sem terceirizar o julgamento",
    text: 'A RGD (Canadá) defende transparência com o cliente, responsabilidade sobre direitos e <strong>curadoria humana obrigatória</strong>. O recado: a ferramenta amplia a criatividade, mas o critério profissional não se delega.',
    go: "Ler as diretrizes",
  },
  {
    href: "https://www.meioemensagem.com.br/cannes/como-a-ia-esta-inserida-nas-categorias-e-checagem-dos-cases",
    src: "Meio & Mensagem",
    heat: "🏆 Cannes 2026",
    updated: "19 Jun 2026",
    reportDate: "24/06/2026",
    title: 'Cannes Lions institucionaliza IA: "AI Craft" entra em 5 categorias, incluindo Design',
    text: 'Festival cria subcategoria focada no <strong>"sweet spot onde criatividade humana e IA geram algo que nenhum poderia criar sozinho"</strong>. Design, Film Craft, Digital Craft e Creative Data estão dentro. A IA saiu do tema e virou critério formal de julgamento.',
    go: "Ver as mudanças nas categorias",
  },
  {
    href: "https://www.meioemensagem.com.br/sxsw/conexao-austin/em-terra-de-ia-quem-e-craft-e-rei",
    src: "Meio & Mensagem",
    heat: "💬 Debate SXSW",
    updated: "12 Mar 2026",
    reportDate: "24/06/2026",
    title: '"Em terra de IA, quem é craft é rei" — o argumento do estúdio brasileiro no SXSW',
    text: 'Van Queiroz (Colletivo) defende que <strong>sem suar, errar e estressar linguagem não há entrega genuína</strong>. A "ginga" brasileira não é replicável por ferramenta. Ressalva: IA beneficia pequenos negócios sem recursos — o problema é a adoção desnecessária por quem tem.',
    go: "Ler o argumento completo",
  },
  {
    href: "https://www.b9.com.br/178161/canva-ia-briefing-campanha/",
    src: "B9",
    heat: "🤖 Plataformas",
    updated: "16 Abr 2026",
    reportDate: "24/06/2026",
    title: "Canva IA 2.0: de briefing a campanha completa com um comando",
    text: 'Sistema agêntico com 4 camadas — design conversacional, orquestração autônoma, memória ativa e edição por objeto. <strong>Brasil é o maior mercado global</strong>: 1,5 bilhão de designs em 12 meses, 1 em cada 9 internautas usando. Adobe simplifica o complexo; Canva sofistica o acessível — ambas disputam o mesmo workflow.',
    go: "Ler a análise no B9",
  },
  {
    href: "https://www.b9.com.br/shows/braincast/628-o-que-e-ser-uma-agencia-de-publicidade-em-2026/",
    src: "B9 · Braincast",
    heat: "💼 Mercado",
    updated: "12 Abr 2026",
    reportDate: "24/06/2026",
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
  { label: "Maximalismo anti-IA", solid: false },
  { label: "Future Medieval", solid: false },
  { label: "Design como conhecimento executável", solid: true },
  { label: "Mixed-media & 3D", solid: false },
  { label: "Ícones customizados", solid: false },
  { label: "Serifas elegantes + animação IA", solid: false },
];

const history = [
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

  const showCurrent = !selectedDate || selectedDate === "24/06/2026";
  const filteredHistory = selectedDate
    ? history.filter((h) => h.reportDate === selectedDate)
    : history;

  const isHistoryOnlyView = !!selectedDate && selectedDate !== "24/06/2026";

  return (
    <section id="forum" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="🔥"
        part="Comunidades · atualizado 24/06/2026"
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
            <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">Tendências de mercado em alta · 24/06/2026</h3>
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
