"use client";

import { useReportDate } from "@/context/ReportDateContext";
import SectionHeader from "./SectionHeader";

const news = [
  {
    href: "https://releasebot.io/updates/adobe/firefly",
    tag: "Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "Jun 2026",
    reportDate: "24/06/2026",
    title: "Adobe Firefly vira hub multi-modelo: 25+ modelos de IA e workspace criativo unificado",
    desc: "Atualização de junho/2026: o Firefly ganha um espaço único para gerar, editar e organizar conteúdo (imagem, vídeo, áudio, boards) e passa a hospedar 25+ modelos de parceiros — OpenAI (GPT Image), Google (Veo, Nano Banana 2), Black Forest Labs (Flux.2) e Runway. O Gen-4.5 da Runway roda dentro do app usando os créditos do Firefly Pro.",
    source: "Adobe Firefly — Release Notes Jun 2026",
  },
  {
    href: "https://news.adobe.com/news/2026/06/introducing-adobe-brand-visibility",
    tag: "Branding",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "Jun 2026",
    reportDate: "24/06/2026",
    title: "Adobe lança Brand Visibility: marca precisa ser 'legível' para a busca por IA",
    desc: "A Adobe apresenta uma solução unificada para a era da busca por IA: medir e melhorar como uma marca aparece em respostas de assistentes e mecanismos generativos. Sinal claro de que branding em 2026 inclui ser descoberto e recomendado por agentes — não só por humanos.",
    source: "Adobe Newsroom — Brand Visibility",
  },
  {
    href: "https://colorlib.com/wp/graphic-design-statistics/",
    tag: "Mercado",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "2026",
    reportDate: "24/06/2026",
    title: "Mercado de design segue crescendo (US$45,8B → US$78,3B até 2032) e a barra de skill subiu",
    desc: "Apesar do medo da IA, a indústria cresce: 75% dos designers já usam IA, mas 67% a tratam como complemento. Figma aparece em 67% das vagas (era 30% em 2021) e ferramentas de IA em 32% (era 3% em 2023). Freelancers mid-level cobram US$75–130/h — com identidade de marca e packaging no topo da faixa.",
    source: "Colorlib — Graphic Design Statistics 2026",
  },
  {
    href: "https://www.figma.com/newsroom/",
    tag: "Pesquisa",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "Jun 2026",
    reportDate: "24/06/2026",
    title: "Figma State of the Designer 2026: 72% já usam IA generativa e 91% dizem que ela melhora o output",
    desc: "O relatório anual da Figma mostra a IA consolidada no fluxo: 72% dos designers usam IA generativa e 91% afirmam que ela eleva a qualidade do trabalho. Ainda assim, 67% a veem como complemento — e só 18% das empresas dizem que ela reduziu a necessidade de designers.",
    source: "Figma Newsroom — State of the Designer 2026",
  },
  {
    href: "https://releasebot.io/updates/midjourney",
    tag: "Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "Jun 2026",
    reportDate: "24/06/2026",
    title: "Midjourney torna o V8.1 o modelo padrão e libera o Draft mode — 24 imagens rápidas por geração",
    desc: "O modelo default passa de V7 para V8.1, com prompts mais inteligentes, melhor renderização de texto e saída HD (2x o tamanho e 4x a resolução do V7). O novo Draft mode gera 24 imagens em baixa resolução para iterar rápido; clicar em 'Vary' renderiza a escolhida em qualidade total.",
    source: "Midjourney Release Notes — Jun 2026",
  },
  {
    href: "https://rgd.ca/articles/2026-amplifying-creativity-with-ai-tools-for-designers-in-2026",
    tag: "Carreira",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "2026",
    reportDate: "24/06/2026",
    title: "RGD: o foco de 2026 é IA responsável — amplificar criatividade sem terceirizar o julgamento",
    desc: "A associação de designers do Canadá publica diretrizes para 2026: usar IA para acelerar exploração e tarefas repetitivas, mantendo curadoria humana, transparência com o cliente e responsabilidade sobre direitos e qualidade. O recado: a ferramenta amplia, não substitui o critério profissional.",
    source: "RGD — AI Tools for Designers 2026",
  },
  {
    href: "https://www.upwork.com/resources/will-ai-replace-graphic-designers",
    tag: "Mercado",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "2026",
    reportDate: "24/06/2026",
    title: "Tier commodity (logo, social, branding básico) já é dominado por IA — valor migra para estratégia",
    desc: "Levantamento de mercado: o trabalho que antes custava US$200–800 (logos, templates de social, branding básico) está quase todo capturado por Canva e Midjourney. Quem sobrevive vende pensamento estratégico e resultados de negócio documentados, não portfólio de execução.",
    source: "Upwork — Will AI Replace Graphic Designers",
  },
  {
    href: "https://config.figma.com/",
    tag: "Evento",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "23 Jun 2026",
    reportDate: "23/06/2026",
    title: "Figma Config 2026 abre HOJE em San Francisco — a edição mais focada em IA da história",
    desc: "Começa hoje (23–25/06) no Moscone Center. Keynote do Dylan Field amanhã às 9h PDT. Agenda dominada por design agent, Figma Make e workflows de IA — a indústria toda acompanha para calibrar roadmap.",
    source: "Figma Config 2026",
  },
  {
    href: "https://www.figma.com/blog/config-speakers-looking-ahead-2026/",
    tag: "Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "23 Jun 2026",
    reportDate: "23/06/2026",
    title: "Figma Make e o design agent ganham web search e nova fase no Config",
    desc: "O design agent passa a buscar contexto vivo na web (boas práticas e conteúdo real) sem sair do arquivo. O Figma Make — já a 60% de uso semanal entre os maiores clientes enterprise no Q1 — entra em nova fase com edição direta, anotações e criação de PR.",
    source: "Figma Blog — Config 2026 Speakers",
  },
  {
    href: "https://www.fastcompany.com/91545081/canva-gemini-integration",
    tag: "IA · Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "Jun 2026",
    reportDate: "23/06/2026",
    title: "Canva + Gemini torna o design gráfico por IA ubíquo",
    desc: "Com a integração ao Google Gemini, a Canva fecha o ciclo: já está dentro de Claude, ChatGPT, Copilot e Gemini. Designs nascem na IA já dentro das regras do Brand Kit. Uso dos produtos de IA da Canva triplicou em um ano — produção de marca por IA vira padrão para qualquer um.",
    source: "Fast Company — Canva × Gemini",
  },
  {
    href: "https://www.clevermarketing.co.uk/graphic-design-news-june-2026/",
    tag: "Mercado",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "Jun 2026",
    reportDate: "23/06/2026",
    title: "Empresas trocam design encomendado por IA-graphics — e designers acendem o alerta",
    desc: 'Roundup de junho: cresce a substituição de trabalho criativo por gráficos gerados por IA em material promocional. A reação não é só sobre emprego — é sobre qualidade, consistência de marca e a "corrida para o fundo" quando "good enough" vira o brief.',
    source: "Clever Marketing — Graphic Design News",
  },
  {
    href: "https://humbldesign.io/blog-posts/will-ai-replace-designers-2026",
    tag: "Carreira",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "2026",
    reportDate: "23/06/2026",
    title: "Design skill é agora a competência #1 em vagas de IA — à frente de código e cloud",
    desc: "Análise de mercado em meados de 2026: IA substitui tarefas, não papéis. UX/produto cresce ~16% até 2034 contra 2–3% do design gráfico, e a habilidade de design lidera os anúncios de vaga em IA. O valor migra de executar para julgar, posicionar e dar ponto de vista.",
    source: "Humbl Design — Will AI Replace Designers 2026",
  },
  {
    href: "https://www.figma.com/blog/direct-every-frame-with-runway-aleph-2/",
    tag: "Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "18 Jun 2026",
    reportDate: "22/06/2026",
    title: "Figma Weave ganha Runway Aleph 2.0: direção criativa frame a frame",
    desc: "Lançado em 18/06, o Aleph 2.0 traz controle de vídeo no canvas do Figma — trocar ângulo de câmera, inserir personagem ou transformar o cenário sem refilmagem. Direção de motion vira parte do design tool.",
    source: "Figma Blog — Runway Aleph 2.0 in Weave",
  },
  {
    href: "https://config.figma.com/",
    tag: "Evento",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "23–25 Jun 2026",
    reportDate: "22/06/2026",
    title: "Figma Config 2026 começa amanhã (23–25/06) em San Francisco",
    desc: "A maior conferência de design da Figma acontece esta semana no Moscone Center. Expectativa de anúncios de IA agêntica no canvas — a indústria toda acompanha para calibrar roadmap.",
    source: "Figma Config 2026",
  },
  {
    href: "https://dataconomy.com/2026/04/17/canva-ai-2-0-targets-adobe-and-figma-with-fully-editable-ai-outputs/",
    tag: "IA · Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "2026",
    reportDate: "22/06/2026",
    title: "Canva AI 2.0 e Claude Design miram Adobe e Figma com outputs editáveis",
    desc: "Canva afirma ter co-desenvolvido o Claude Design com a Anthropic e adiciona botão 'export to Canva'. A diferença competitiva passou de gerar para gerar já editável e dentro do fluxo de marca.",
    source: "Dataconomy — Canva AI 2.0",
  },
  {
    href: "https://weandthecolor.com/freelance-designers-cant-compete-with-a-20-month-ai-subscription-heres-what-actually-works-now/209620",
    tag: "Mercado",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "2026",
    reportDate: "22/06/2026",
    title: "O colapso do freelance mid-level por causa da IA",
    desc: "Estudo Ramp 'Payrolls to Prompts' (fev/2026): gasto com plataformas de freelance caiu de 0,66% para 0,14% dos orçamentos, enquanto gasto com modelos de IA subiu de 0 para 2,85%. Originalidade e narrativa de marca viram o que ainda paga.",
    source: "WeAndTheColor — Freelance Market & AI",
  },
  {
    href: "https://designerfund.com/blog/ai-in-design-2026",
    tag: "IA · Design",
    tagClass: "bg-[#2563EB] text-white",
    date: "Jun 2026",
    reportDate: "19/06/2026",
    title: "91% dos designers já usam IA toda semana — e o toolstack dobrou",
    desc: `Metade já entregou código gerado por IA; 89% trabalham mais rápido. O foco migra de execução para direção criativa e curadoria. A "inflexão" da IA no design chegou.`,
    source: "Designer Fund — AI in Design 2026",
  },
  {
    href: "https://www.successful-blog.com/1/how-ai-is-changing-branding/",
    tag: "Branding",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "2026",
    reportDate: "19/06/2026",
    title: `Identidades "vivas": logos que mudam por contexto, hora e emoção`,
    desc: "Marcas trocam o logo estático por sistemas kinéticos e motion-first. IA gera milhares de variações em minutos — o trabalho humano vira refino e coerência emocional.",
    source: "Successful Blog — How AI is Changing Branding",
  },
  {
    href: "https://www.threerooms.com/blog/8-design-trends-shaping-brand-identity-in-2026",
    tag: "Brand Identity",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "2026",
    reportDate: "19/06/2026",
    title: "8 tendências de identidade de marca em 2026",
    desc: '"Hybrid Intelligence humanizada", agentes de IA como novos gatekeepers da escolha do consumidor, e paletas minimalistas (preto, branco, azul) que projetam confiança e clareza.',
    source: "Three Rooms — Brand Identity Trends 2026",
  },
  {
    href: "https://news.adobe.com/news/2026/04/adobe-new-creative-agent",
    tag: "Ferramenta",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "Abr 2026",
    reportDate: "19/06/2026",
    title: "Adobe lança Creative Agent e novas IAs do Firefly",
    desc: `Agentes autônomos que executam pipelines criativos multi-etapa a partir de um único brief, mantendo parâmetros de marca em lotes de output. O "vibe design" entra na suíte.`,
    source: "Adobe Newsroom",
  },
  {
    href: "https://www.kittl.com/blogs/graphic-design-trends-2026/",
    tag: "Design Gráfico",
    tagClass: "bg-[#2563EB] text-white",
    date: "2026",
    reportDate: "19/06/2026",
    title: "10 tendências de design gráfico para 2026 (Kittl)",
    desc: '"Design como conhecimento executável": regras de marca e lógica de layout armazenadas em formatos que máquinas seguem. Estética nostálgica-futurista, handcrafted + IA.',
    source: "Kittl Blog — Graphic Design Trends 2026",
  },
  {
    href: "https://www.superside.com/blog/ai-design-agencies",
    tag: "Agências",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "2026",
    reportDate: "19/06/2026",
    title: "As agências de design AI-native que estão definindo o padrão",
    desc: "79% das empresas já saíram da avaliação para a implementação ativa de agentes de IA no início de 2026 — fluxos agênticos viraram padrão competitivo, não experimento.",
    source: "Superside — Top AI Design Agencies 2026",
  },
];

const instagramAccounts = [
  { handle: "@figmadesign", url: "https://www.instagram.com/figmadesign/", desc: "Workflows e AI features do Figma em tempo real" },
  { handle: "@canva", url: "https://www.instagram.com/canva/", desc: "Tendências de design + tutoriais de IA" },
  { handle: "@adobe", url: "https://www.instagram.com/adobe/", desc: "Firefly, Photoshop e lançamentos criativos" },
  { handle: "@behance", url: "https://www.instagram.com/behance/", desc: "Portfólios em destaque e cases de branding" },
  { handle: "@dribbble", url: "https://www.instagram.com/dribbble/", desc: "UI, web design e inspiração para portfólio" },
];

const instagramHashtags = [
  { tag: "#identidadevisual", url: "https://www.instagram.com/explore/tags/identidadevisual/", lang: "BR" },
  { tag: "#designbrasileiro", url: "https://www.instagram.com/explore/tags/designbrasileiro/", lang: "BR" },
  { tag: "#logotipo", url: "https://www.instagram.com/explore/tags/logotipo/", lang: "BR" },
  { tag: "#brandingbr", url: "https://www.instagram.com/explore/tags/brandingbr/", lang: "BR" },
  { tag: "#logodesign", url: "https://www.instagram.com/explore/tags/logodesign/", lang: "EN" },
  { tag: "#brandidentity", url: "https://www.instagram.com/explore/tags/brandidentity/", lang: "EN" },
  { tag: "#motiondesign", url: "https://www.instagram.com/explore/tags/motiondesign/", lang: "EN" },
  { tag: "#graphicdesign", url: "https://www.instagram.com/explore/tags/graphicdesign/", lang: "EN" },
];

const instagramFormats = [
  { format: "Reels antes/depois com IA", stat: "+240% engagement vs. estático", hot: true },
  { format: "Carrossel de processo (7–10 slides)", stat: "Alta taxa de salvamento", hot: true },
  { format: "Identidade visual completa em <60s", stat: "Viral em branding — máx. retenção", hot: true },
  { format: "Tutorial de prompt (Firefly/Midjourney)", stat: "Em crescimento", hot: false },
  { format: "Case com valores e processo no caption", stat: "Alta conversão → DM", hot: false },
];

export default function NovidadesSection() {
  const { selectedDate, setSelectedDate } = useReportDate();
  const filtered = selectedDate ? news.filter((n) => n.reportDate === selectedDate) : news;

  return (
    <section id="novidades" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="📰"
        part="Leitura · atualizado 24/06/2026"
        title="Novidades & Notícias"
        description="IA no design gráfico, branding e ferramentas — para ler e acompanhar"
      />

      {selectedDate && (
        <div className="flex items-center gap-2 mb-4 text-[12px] text-[#6B7480]">
          <span className="text-[#2563EB] font-bold">📅 Filtrando: {selectedDate}</span>
          <button onClick={() => setSelectedDate("")} className="text-[11px] text-[#6B7480] hover:text-[#1A1D24] underline">
            ver todos
          </button>
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="bg-[#F6F8FB] border border-[#E2E7EF] rounded-xl px-6 py-10 text-center mb-5">
          <div className="text-[32px] mb-3">📭</div>
          <div className="text-[14px] font-bold text-[#1A1D24] mb-1">Nenhuma notícia registrada em {selectedDate}</div>
          <div className="text-[13px] text-[#6B7480] mb-4">Selecione outra data no menu lateral para ver as notícias capturadas naquele dia.</div>
          <button onClick={() => setSelectedDate("")} className="text-[12px] font-bold text-[#2563EB] hover:underline">
            Ver todas as notícias →
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3 mb-5">
          {filtered.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-[#E2E7EF] border-l-[3px] border-l-[#2563EB] rounded-xl px-5 py-[18px] no-underline shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-[180ms] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(16,24,40,0.12)]"
            >
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className={`text-[9.5px] font-extrabold uppercase tracking-[0.8px] px-2.5 py-0.5 rounded-[6px] ${item.tagClass}`}>
                  {item.tag}
                </span>
                <span className="text-[11px] text-[#6B7480] font-semibold">{item.date}</span>
              </div>
              <div className="text-[15.5px] font-bold text-[#1A1D24] leading-[1.4] mb-1.5">{item.title}</div>
              <div className="text-[13.5px] text-[#434A57] leading-[1.6]">{item.desc}</div>
              <span className="text-[11.5px] text-[#2563EB] font-semibold mt-[11px] inline-flex items-center gap-1">
                {item.source} <span className="text-[11px]">↗</span>
              </span>
            </a>
          ))}
        </div>
      )}

      {/* Instagram em Alta */}
      <div className="rounded-xl overflow-hidden border border-[#E2E7EF] shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
        <div className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] px-5 py-4 flex items-center gap-3">
          <span className="text-[22px]">📸</span>
          <div>
            <div className="text-[14px] font-extrabold text-white">Instagram em Alta — Design & Branding</div>
            <div className="text-[11px] text-white/75">Contas, hashtags e formatos com melhor performance · Jun 2026</div>
          </div>
        </div>

        <div className="bg-white p-5 grid grid-cols-3 gap-6 max-lg:grid-cols-1">
          {/* Contas */}
          <div>
            <div className="text-[10px] font-extrabold text-[#6B7480] uppercase tracking-[0.8px] mb-3">Contas para acompanhar</div>
            <div className="flex flex-col gap-3">
              {instagramAccounts.map((acc) => (
                <a key={acc.handle} href={acc.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 group no-underline">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#833AB4] to-[#F77737] flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">
                    {acc.handle[1].toUpperCase()}
                  </div>
                  <div>
                    <div className="text-[12.5px] font-bold text-[#1A1D24] group-hover:text-[#833AB4] transition-colors">{acc.handle}</div>
                    <div className="text-[11px] text-[#6B7480] leading-[1.4]">{acc.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Hashtags */}
          <div>
            <div className="text-[10px] font-extrabold text-[#6B7480] uppercase tracking-[0.8px] mb-3">Hashtags em alta</div>
            <div className="mb-4">
              <div className="text-[9.5px] font-bold text-[#6B7480] uppercase tracking-[0.6px] mb-2">🇧🇷 Português</div>
              <div className="flex flex-wrap gap-1.5">
                {instagramHashtags.filter((h) => h.lang === "BR").map((h) => (
                  <a key={h.tag} href={h.url} target="_blank" rel="noopener noreferrer"
                    className="text-[11.5px] font-semibold text-[#9333EA] bg-[#FAF5FF] border border-[#E9D5FF] px-2.5 py-0.5 rounded-full no-underline hover:bg-[#9333EA] hover:text-white hover:border-[#9333EA] transition-all">
                    {h.tag}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[9.5px] font-bold text-[#6B7480] uppercase tracking-[0.6px] mb-2">🌐 Global</div>
              <div className="flex flex-wrap gap-1.5">
                {instagramHashtags.filter((h) => h.lang === "EN").map((h) => (
                  <a key={h.tag} href={h.url} target="_blank" rel="noopener noreferrer"
                    className="text-[11.5px] font-semibold text-[#E1306C] bg-[#FFF0F5] border border-[#FBCFE8] px-2.5 py-0.5 rounded-full no-underline hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-all">
                    {h.tag}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formatos */}
          <div>
            <div className="text-[10px] font-extrabold text-[#6B7480] uppercase tracking-[0.8px] mb-3">Formatos que estão performando</div>
            <div className="flex flex-col gap-2.5">
              {instagramFormats.map((f) => (
                <div key={f.format} className="flex items-start gap-2">
                  <span className="text-[14px] flex-shrink-0 mt-0.5">{f.hot ? "🔥" : "📈"}</span>
                  <div>
                    <div className="text-[12.5px] font-bold text-[#1A1D24] leading-[1.3]">{f.format}</div>
                    <div className="text-[11px] text-[#6B7480]">{f.stat}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-5 py-2.5 bg-[#FAFAFA] border-t border-[#E2E7EF] text-[10.5px] text-[#6B7480]">
          Curadoria manual · Jun 2026 · Para atualizar: editar <code className="bg-[#F0F0F0] px-1 rounded text-[10px]">instagramAccounts</code>, <code className="bg-[#F0F0F0] px-1 rounded text-[10px]">instagramHashtags</code> e <code className="bg-[#F0F0F0] px-1 rounded text-[10px]">instagramFormats</code> em NovidadesSection.tsx
        </div>
      </div>

      <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">
        Curadoria atualizada manualmente. Fontes: Designer Fund, Successful Blog, Three Rooms, Adobe, Kittl, Superside, Gloat, GSDC.
      </div>
    </section>
  );
}
