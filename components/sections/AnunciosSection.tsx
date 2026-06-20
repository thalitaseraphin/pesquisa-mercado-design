import SectionHeader from "./SectionHeader";

const formats = [
  { num: "FORMATO 01", title: "UGC em vídeo curto (15–30s)", text: 'Virou o <strong>padrão dos anúncios de alta performance</strong>. Parece conteúdo nativo, não anúncio — gera ~<strong>4x mais CTR e 50% menor CPA</strong> em prospecção. Vertical, sem produção "polida demais".' },
  { num: "FORMATO 02", title: "Antes / Depois (transformação)", text: 'Mostra o "antes" feio e o "depois" da marca/peça em segundos. Perfeito para identidade visual: <strong>rebrand, logo refeito, antes vs. depois de IA</strong>. Transformação visível = parada de scroll.' },
  { num: "FORMATO 03", title: "Carrossel educativo", text: 'Forte retorno no e-commerce e em serviço: ensina algo (ex: "5 erros de identidade visual") e entrega valor antes de vender. Salva e compartilha — alcance orgânico + remarketing.' },
  { num: "FORMATO 04", title: "Criativos gerados por IA (teste em escala)", text: "Em 2026 a IA cruzou o limiar de qualidade: anúncios curtos feitos por IA já performam perto de creators humanos. Usar para <strong>testar muitos ângulos barato</strong> e escalar o vencedor." },
];

const hooks = [
  {
    tag: "Transformação",
    perf: "🔥 Alta",
    title: '"Essa marca faturava pouco até mudar UMA coisa no visual…"',
    desc: "Hook de antes/depois: promete a virada e mostra o contraste. Funciona para rebrand, página de vendas, social kit.",
    searches: [
      { label: "Instagram", url: "https://www.instagram.com/explore/search/?q=identidade+visual+antes+depois" },
      { label: "TikTok", url: "https://www.tiktok.com/search?q=antes+depois+marca" },
      { label: "YouTube", url: "https://www.youtube.com/results?search_query=rebrand+antes+depois+design" },
    ],
  },
  {
    tag: "Prova social",
    perf: "🔥 Alta",
    title: '"Já refiz a identidade de +120 marcas — esses 3 erros se repetem em todas"',
    desc: "Número específico + resultado específico = credibilidade imediata. O hook de prova social que mais para o scroll.",
    searches: [
      { label: "Instagram", url: "https://www.instagram.com/explore/search/?q=erros+identidade+visual" },
      { label: "TikTok", url: "https://www.tiktok.com/search?q=erros+logo+design" },
    ],
  },
  {
    tag: "Problema-Agitação",
    perf: "🔶 Média-alta",
    title: '"Seu logo tá te fazendo perder cliente e você nem sabe"',
    desc: "Framework Problema → Agitação → Solução. Abre na dor, agita a frustração, entrega a solução no fim.",
    searches: [
      { label: "TikTok", url: "https://www.tiktok.com/search?q=logo+ruim+perder+cliente" },
      { label: "Instagram", url: "https://www.instagram.com/explore/search/?q=logo+perder+cliente" },
    ],
  },
  {
    tag: "Visual / Padrão quebrado",
    perf: "🔥 Alta",
    title: '"Pare de usar Canva pra isso." (corte seco + tela cheia)',
    desc: "Hook visual com movimento/expressão que quebra o feed. Frase curta e polêmica + gancho que obriga a continuar.",
    searches: [
      { label: "TikTok", url: "https://www.tiktok.com/search?q=pare+de+usar+canva" },
      { label: "Instagram", url: "https://www.instagram.com/explore/search/?q=canva+vs+design+profissional" },
    ],
  },
  {
    tag: "Emocional / POV",
    perf: "🔶 Média-alta",
    title: '"POV: você é dono de marca e abriu o Instagram do concorrente…"',
    desc: "Hook emocional que tira do espectador uma reação (inveja saudável, FOMO). Conecta antes de vender.",
    searches: [
      { label: "TikTok", url: "https://www.tiktok.com/search?q=pov+dono+de+marca" },
      { label: "Instagram", url: "https://www.instagram.com/explore/search/?q=pov+empreendedor+marca" },
    ],
  },
  {
    tag: "Bastidor / Processo",
    perf: "🔥 Alta",
    title: '"Veja eu transformar essa marca genérica em 60 segundos"',
    desc: "Mostra o processo com IA em tempo real. Combina autoridade + entretenimento — alto tempo de retenção.",
    searches: [
      { label: "Instagram", url: "https://www.instagram.com/explore/search/?q=processo+criativo+identidade+visual" },
      { label: "TikTok", url: "https://www.tiktok.com/search?q=processo+design+marca+ia" },
      { label: "YouTube", url: "https://www.youtube.com/results?search_query=brand+identity+process+AI+design+speedrun" },
    ],
  },
];

const adLibraries = [
  {
    platform: "Meta",
    color: "#1877F2",
    textColor: "white",
    logo: "Meta Ads Library",
    subtitle: "Anúncios ativos e pausados · Filtros por país, formato e palavra-chave",
    filters: [
      { label: "Palavra-chave", value: "identidade visual" },
      { label: "País", value: "Brasil / Global" },
      { label: "Tipo", value: "Todos os formatos" },
      { label: "Status", value: "Ativos + Pausados" },
    ],
    tips: [
      "Filtre por país para ver o que está rodando em cada mercado",
      "Compare anúncios ativos há mais de 30 dias — esses são rentáveis",
      "Use a busca por nome de concorrente para ver a estratégia deles",
    ],
    markets: [
      { flag: "🇧🇷", label: "Brasil", query: "identidade visual", country: "BR" },
      { flag: "🇺🇸", label: "EUA", query: "brand identity", country: "US" },
      { flag: "🇪🇸", label: "Espanha", query: "identidad visual", country: "ES" },
      { flag: "🇲🇽", label: "México", query: "diseño de marca", country: "MX" },
    ],
    baseUrl: "https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country={COUNTRY}&q={QUERY}&media_type=all",
  },
  {
    platform: "TikTok",
    color: "#010101",
    textColor: "white",
    logo: "TikTok Creative Center",
    subtitle: "Top Ads · Filtros por região, setor e período",
    filters: [
      { label: "Categoria", value: "Education / Design" },
      { label: "Região", value: "BR / US / Global" },
      { label: "Período", value: "Últimos 30 dias" },
      { label: "Formato", value: "Spark Ads + In-Feed" },
    ],
    tips: [
      "Vá em 'Top Ads' e filtre por 'Education' para ver o que performa em nicho de curso",
      "Olhe o 'CTR score' para identificar hooks que param o scroll",
      "Análise o script dos 3 primeiros segundos dos top performers",
    ],
    markets: [
      { flag: "🇧🇷", label: "Brasil", query: "design", country: "BR" },
      { flag: "🇺🇸", label: "EUA", query: "design", country: "US" },
      { flag: "🇬🇧", label: "Global", query: "design", country: "ALL" },
    ],
    baseUrl: "https://ads.tiktok.com/business/creativecenter/inspiration/topads/pc/en?region={COUNTRY}",
  },
];

const markets = [
  { flag: "🇧🇷", country: "Brasil", text: "<strong>2º maior mercado de influenciadores do mundo</strong> (4,4M criadores no Instagram). 69% dos consumidores já compraram por indicação de criador e UGC gera até <strong>+28% de engajamento</strong>. Aposte em micro-influenciadores, autenticidade e antes/depois.", metaQ: "identidade%20visual", metaCountry: "BR", tiktokRegion: "BR" },
  { flag: "🇺🇸", country: "Estados Unidos", text: "Mercado mais maduro e <strong>orientado a performance</strong>: social commerce e <strong>TikTok Shop</strong>, micro/nano com até 11,9% de engajamento e creator economy de US$33B. Caminho de compra direto no criativo é o de maior ROI.", metaQ: "brand%20identity", metaCountry: "US", tiktokRegion: "US" },
  { flag: "🇪🇸", country: "Espanha", text: `Mercado em virada para <strong>autenticidade</strong>: UGC superando influencer pago (92% confiam mais em recomendação de pares). Cresce o branding "menos ruído" e experiências <strong>multissensoriais</strong> (motion + som).`, metaQ: "identidad%20visual", metaCountry: "ES", tiktokRegion: "ES" },
  { flag: "🇲🇽", country: "México", text: "Crescimento forte de creator economy na América Latina: <strong>social commerce</strong> e UGC com IA em alta, com autenticidade virando critério de escolha de creator. Ótimo terreno para ângulos de transformação e prova social.", metaQ: "dise%C3%B1o%20de%20marca", metaCountry: "MX", tiktokRegion: "MX" },
];

const angles = [
  { label: "Antes/Depois de marca", solid: true },
  { label: "Bastidor com IA em tempo real", solid: true },
  { label: '"3 erros de identidade visual"', solid: false },
  { label: "Prova social com número específico", solid: false },
  { label: "POV de dono de marca", solid: false },
  { label: "Faceless / voz + tela", solid: false },
  { label: "Tutorial rápido (valor antes da venda)", solid: false },
  { label: "Reação a rebrands famosos", solid: false },
];

export default function AnunciosSection() {
  return (
    <section id="anuncios" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="📣"
        part="Performance · o que está convertendo"
        title="Anúncios & Campanhas em Alta"
        description="Formatos, hooks de abertura com referências de vídeo e como usar as bibliotecas de anúncios para espionar o mercado"
      />

      {/* Formatos */}
      <div className="mb-3.5">
        <div className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-[1.4px] mb-1">Formatos de anúncio</div>
        <div className="text-[17px] font-extrabold text-[#1A1D24] tracking-[-0.6px] mb-3.5">O que mais performa em 2026</div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-[22px] max-md:grid-cols-1">
        {formats.map((f) => (
          <div key={f.num} className="bg-white border border-[#E2E7EF] border-t-[3px] border-t-[#2563EB] rounded-xl p-[22px] shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-[180ms] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(16,24,40,0.10)]">
            <div className="text-[10.5px] font-extrabold text-[#2563EB] tracking-[1px] mb-2">{f.num}</div>
            <div className="text-[15.5px] font-bold text-[#1A1D24] mb-1.5 leading-[1.4]">{f.title}</div>
            <div className="text-[13.5px] text-[#434A57] leading-[1.65]" dangerouslySetInnerHTML={{ __html: f.text }} />
          </div>
        ))}
      </div>

      {/* Ad Libraries — visual */}
      <div className="mb-3.5">
        <div className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-[1.4px] mb-1">Bibliotecas de anúncios</div>
        <div className="text-[17px] font-extrabold text-[#1A1D24] tracking-[-0.6px] mb-1">Como usar Meta e TikTok para pesquisa competitiva</div>
        <div className="text-[13px] text-[#6B7480] mb-4">Anúncios reais rodando agora — ótimo para espionar concorrentes e identificar o que está convertendo no nicho de design e identidade visual.</div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-[22px] max-md:grid-cols-1">
        {adLibraries.map((lib) => (
          <div key={lib.platform} className="rounded-xl overflow-hidden border border-[#E2E7EF] shadow-[0_1px_3px_rgba(16,24,40,0.06)]">
            {/* Platform header */}
            <div style={{ backgroundColor: lib.color }} className="px-4 py-3.5">
              <div className="font-extrabold text-[13px] mb-0.5" style={{ color: lib.textColor }}>{lib.logo}</div>
              <div className="text-[11px] opacity-70" style={{ color: lib.textColor }}>{lib.subtitle}</div>
            </div>
            {/* Filters guide */}
            <div className="bg-[#FAFAFA] px-4 py-3 border-b border-[#E2E7EF]">
              <div className="text-[10px] font-extrabold text-[#6B7480] uppercase tracking-[0.8px] mb-2">Filtros recomendados</div>
              <div className="flex flex-wrap gap-1.5">
                {lib.filters.map((f) => (
                  <span key={f.label} className="text-[11px] text-[#434A57] bg-white border border-[#D2D9E4] rounded-md px-2 py-0.5">
                    <strong>{f.label}:</strong> {f.value}
                  </span>
                ))}
              </div>
            </div>
            {/* Tips */}
            <div className="bg-white px-4 py-3">
              <div className="text-[10px] font-extrabold text-[#6B7480] uppercase tracking-[0.8px] mb-2">Como analisar</div>
              <ul className="flex flex-col gap-1.5">
                {lib.tips.map((tip, i) => (
                  <li key={i} className="text-[12px] text-[#434A57] flex gap-2 leading-[1.5]">
                    <span className="text-[#2563EB] flex-shrink-0 font-bold">{i + 1}.</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
            {/* Market links */}
            <div className="px-4 pt-2 pb-4 bg-white border-t border-[#E2E7EF]">
              <div className="text-[10px] font-extrabold text-[#6B7480] uppercase tracking-[0.8px] mb-2">Abrir por mercado</div>
              <div className="flex flex-wrap gap-1.5">
                {lib.markets.map((m) => {
                  const url = lib.baseUrl
                    .replace("{COUNTRY}", m.country)
                    .replace("{QUERY}", encodeURIComponent(m.query));
                  return (
                    <a
                      key={m.country}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-[#2563EB] bg-[#E9F0FE] border border-[#CFE0FB] px-2.5 py-1 rounded-lg no-underline hover:bg-[#D3E0FB] transition-colors"
                    >
                      {m.flag} {m.label} ↗
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mercados */}
      <div className="mb-3.5">
        <div className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-[1.4px] mb-1">Contexto por mercado</div>
        <div className="text-[17px] font-extrabold text-[#1A1D24] tracking-[-0.6px] mb-3.5">O que está em alta em cada país</div>
      </div>
      <div className="grid grid-cols-2 gap-3.5 mb-2 max-md:grid-cols-1">
        {markets.map((m) => (
          <div key={m.country} className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
            <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">{m.flag} {m.country}</h3>
            <div className="text-[13.5px] text-[#434A57] leading-[1.65]" dangerouslySetInnerHTML={{ __html: m.text }} />
            <div className="flex gap-2 flex-wrap mt-[13px]">
              <a href={`https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=${m.metaCountry}&q=${m.metaQ}&media_type=all`} target="_blank" rel="noopener" className="text-[11.5px] font-bold text-[#2563EB] bg-[#E9F0FE] border border-[#CFE0FB] px-2.5 py-1.5 rounded-lg no-underline">Meta · {m.metaCountry} ↗</a>
              <a href={`https://ads.tiktok.com/business/creativecenter/inspiration/topads/pc/en?region=${m.tiktokRegion}`} target="_blank" rel="noopener" className="text-[11.5px] font-bold text-[#2563EB] bg-[#E9F0FE] border border-[#CFE0FB] px-2.5 py-1.5 rounded-lg no-underline">TikTok · {m.tiktokRegion} ↗</a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mb-[22px]">Notas de mercado: HypeAuditor, Meio &amp; Mensagem, ipMark, PuroMarketing, Merca2.0, CreatorIQ, Visla (2026).</div>

      {/* Hooks com referências de vídeo */}
      <div className="mb-3.5">
        <div className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-[1.4px] mb-1">Hooks de abertura</div>
        <div className="text-[17px] font-extrabold text-[#1A1D24] tracking-[-0.6px] mb-1">Como abrir o vídeo nos primeiros 3 segundos</div>
        <div className="text-[13px] text-[#6B7480] mb-4">Cada hook inclui links para buscar exemplos reais nas plataformas — clique para ver o tipo de conteúdo rodando agora.</div>
      </div>
      <div className="flex flex-col gap-3 mb-[22px]">
        {hooks.map((h) => (
          <div key={h.tag} className="bg-white border border-[#E2E7EF] border-l-[3px] border-l-[#2563EB] rounded-xl px-5 py-[18px]">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-[9.5px] font-extrabold uppercase tracking-[0.8px] px-2.5 py-0.5 rounded-[6px] bg-[#2563EB] text-white">{h.tag}</span>
              <span className="text-[9.5px] font-bold text-[#6B7480]">{h.perf}</span>
            </div>
            <div className="text-[15.5px] font-bold text-[#1A1D24] leading-[1.4] mb-1.5">{h.title}</div>
            <div className="text-[13.5px] text-[#434A57] leading-[1.6] mb-3">{h.desc}</div>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-bold text-[#6B7480] self-center">Ver exemplos:</span>
              {h.searches.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-[#2563EB] bg-[#F6F8FB] border border-[#D2D9E4] px-2.5 py-0.5 rounded-md no-underline hover:bg-[#E9F0FE] hover:border-[#CFE0FB] transition-colors"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mb-[22px]">Estrutura: hook nos 3s, 6–15s para feed, ângulo &gt; produção. Fontes: GetHookd, Segwise, Balistro, Adligator, Influee (120 UGC hooks).</div>

      {/* Ângulos */}
      <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
        <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">Ângulos correlatos que estão em alta</h3>
        <div className="flex flex-wrap gap-2.5">
          {angles.map((a) => (
            <span key={a.label} className={`text-[12.5px] font-semibold px-3.5 py-1.5 border rounded-[24px] ${a.solid ? "bg-[#2563EB] text-white border-[#2563EB]" : "bg-[#F6F8FB] text-[#434A57] border-[#D2D9E4]"}`}>{a.label}</span>
          ))}
        </div>
        <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">Fontes: CreatorIQ, Impact.com, eMarketer, House of Marketers, Stackmatix, Adstellar (jun/2026).</div>
      </div>
    </section>
  );
}
