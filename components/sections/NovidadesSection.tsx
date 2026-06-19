import SectionHeader from "./SectionHeader";

const news = [
  {
    href: "https://designerfund.com/blog/ai-in-design-2026",
    tag: "IA · Design",
    tagClass: "bg-[#2563EB] text-white",
    date: "Jun 2026",
    title: "91% dos designers já usam IA toda semana — e o toolstack dobrou",
    desc: `Metade já entregou código gerado por IA; 89% trabalham mais rápido. O foco migra de execução para direção criativa e curadoria. A "inflexão" da IA no design chegou.`,
    source: "Designer Fund — AI in Design 2026",
  },
  {
    href: "https://www.successful-blog.com/1/how-ai-is-changing-branding/",
    tag: "Branding",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "2026",
    title: `Identidades "vivas": logos que mudam por contexto, hora e emoção`,
    desc: "Marcas trocam o logo estático por sistemas kinéticos e motion-first. IA gera milhares de variações em minutos — o trabalho humano vira refino e coerência emocional.",
    source: "Successful Blog — How AI is Changing Branding",
  },
  {
    href: "https://www.threerooms.com/blog/8-design-trends-shaping-brand-identity-in-2026",
    tag: "Brand Identity",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "2026",
    title: "8 tendências de identidade de marca em 2026",
    desc: '"Hybrid Intelligence humanizada", agentes de IA como novos gatekeepers da escolha do consumidor, e paletas minimalistas (preto, branco, azul) que projetam confiança e clareza.',
    source: "Three Rooms — Brand Identity Trends 2026",
  },
  {
    href: "https://news.adobe.com/news/2026/04/adobe-new-creative-agent",
    tag: "Ferramenta",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "Abr 2026",
    title: "Adobe lança Creative Agent e novas IAs do Firefly",
    desc: `Agentes autônomos que executam pipelines criativos multi-etapa a partir de um único brief, mantendo parâmetros de marca em lotes de output. O "vibe design" entra na suíte.`,
    source: "Adobe Newsroom",
  },
  {
    href: "https://www.kittl.com/blogs/graphic-design-trends-2026/",
    tag: "Design Gráfico",
    tagClass: "bg-[#2563EB] text-white",
    date: "2026",
    title: "10 tendências de design gráfico para 2026 (Kittl)",
    desc: '"Design como conhecimento executável": regras de marca e lógica de layout armazenadas em formatos que máquinas seguem. Estética nostálgica-futurista, handcrafted + IA.',
    source: "Kittl Blog — Graphic Design Trends 2026",
  },
  {
    href: "https://www.superside.com/blog/ai-design-agencies",
    tag: "Agências",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "2026",
    title: "As agências de design AI-native que estão definindo o padrão",
    desc: "79% das empresas já saíram da avaliação para a implementação ativa de agentes de IA no início de 2026 — fluxos agênticos viraram padrão competitivo, não experimento.",
    source: "Superside — Top AI Design Agencies 2026",
  },
];

export default function NovidadesSection() {
  return (
    <section id="novidades" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="📰"
        part="Leitura · atualizado 19/06/2026"
        title="Novidades & Notícias"
        description="IA no design gráfico, branding e ferramentas — para ler e acompanhar"
      />
      <div className="flex flex-col gap-3">
        {news.map((item) => (
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
            <div className="text-[15.5px] font-bold text-[#1A1D24] leading-[1.4] mb-1.5">
              {item.title}
            </div>
            <div className="text-[13.5px] text-[#434A57] leading-[1.6]">{item.desc}</div>
            <span className="text-[11.5px] text-[#2563EB] font-semibold mt-[11px] inline-flex items-center gap-1">
              {item.source} <span className="text-[11px]">↗</span>
            </span>
          </a>
        ))}
      </div>
      <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">
        Curadoria atualizada automaticamente. Fontes: Designer Fund, Successful Blog, Three Rooms, Adobe, Kittl, Superside, Gloat, GSDC.
      </div>
    </section>
  );
}
