"use client";

import { useReportDate } from "@/context/ReportDateContext";
import SectionHeader from "./SectionHeader";

const news = [
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
        part="Leitura · atualizado 19/06/2026"
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
          <div className="text-[13px] text-[#6B7480] mb-4">O conteúdo desta seção foi capturado em 19/06/2026.</div>
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
