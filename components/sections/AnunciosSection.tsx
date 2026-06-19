import SectionHeader from "./SectionHeader";

const formats = [
  { num: "FORMATO 01", title: "UGC em vídeo curto (15–30s)", text: 'Virou o <strong>padrão dos anúncios de alta performance</strong>. Parece conteúdo nativo, não anúncio — gera ~<strong>4x mais CTR e 50% menor CPA</strong> em prospecção. Vertical, sem produção "polida demais".' },
  { num: "FORMATO 02", title: "Antes / Depois (transformação)", text: "Mostra o \"antes\" feio e o \"depois\" da marca/peça em segundos. Perfeito para identidade visual: <strong>rebrand, logo refeito, antes vs. depois de IA</strong>. Transformação visível = parada de scroll." },
  { num: "FORMATO 03", title: "Carrossel educativo", text: 'Forte retorno no e-commerce e em serviço: ensina algo (ex: "5 erros de identidade visual") e entrega valor antes de vender. Salva e compartilha — alcance orgânico + remarketing.' },
  { num: "FORMATO 04", title: "Criativos gerados por IA (teste em escala)", text: "Em 2026 a IA cruzou o limiar de qualidade: anúncios curtos feitos por IA já performam perto de creators humanos. Usar para <strong>testar muitos ângulos barato</strong> e escalar o vencedor." },
];

const hooks = [
  { tag: "Transformação", title: '"Essa marca faturava pouco até mudar UMA coisa no visual…"', desc: "Hook de antes/depois: promete a virada e mostra o contraste. Funciona para rebrand, página de vendas, social kit." },
  { tag: "Prova social", title: '"Já refiz a identidade de +120 marcas — esses 3 erros se repetem em todas"', desc: "Número específico + resultado específico = credibilidade imediata. O hook de prova social que mais para o scroll." },
  { tag: "Problema-Agitação", title: '"Seu logo tá te fazendo perder cliente e você nem sabe"', desc: "Framework Problema → Agitação → Solução. Abre na dor, agita a frustração, entrega a solução no fim." },
  { tag: "Visual / Padrão quebrado", title: '"Pare de usar Canva pra isso." (corte seco + tela cheia)', desc: "Hook visual com movimento/expressão que quebra o feed. Frase curta e polêmica + gancho que obriga a continuar." },
  { tag: "Emocional / POV", title: '"POV: você é dono de marca e abriu o Instagram do concorrente…"', desc: "Hook emocional que tira do espectador uma reação (inveja saudável, FOMO). Conecta antes de vender." },
  { tag: "Bastidor / Processo", title: '"Veja eu transformar essa marca genérica em 60 segundos"', desc: "Mostra o processo com IA em tempo real. Combina autoridade + entretenimento — alto tempo de retenção." },
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
        description="Formatos, hooks de abertura, influencers e campanhas de marca que mais performam no nicho de design, identidade e IA"
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

      <div className="bg-[#E9F0FE] border border-[#D3E0FB] border-l-[3px] border-l-[#2563EB] rounded-[10px] px-[18px] py-[15px] text-[13.5px] text-[#434A57] mb-[22px] leading-[1.65]">
        <strong className="text-[#1A1D24]">Ver os formatos rodando ao vivo:</strong> as bibliotecas abaixo mostram anúncios reais (ativos e pausados) que dá para filtrar por país, formato e palavra-chave — ótimo para "espionar" o que concorrentes e marcas estão fazendo agora.
        <div className="flex gap-2 flex-wrap mt-[11px]">
          <a href="https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=ALL&q=identidade%20visual&media_type=all" target="_blank" rel="noopener" className="text-[11.5px] font-bold text-[#2563EB] bg-[#E9F0FE] border border-[#CFE0FB] px-2.5 py-1.5 rounded-lg no-underline">Meta Ad Library ↗</a>
          <a href="https://ads.tiktok.com/business/creativecenter/inspiration/topads/pc/en" target="_blank" rel="noopener" className="text-[11.5px] font-bold text-[#2563EB] bg-[#E9F0FE] border border-[#CFE0FB] px-2.5 py-1.5 rounded-lg no-underline">TikTok Top Ads ↗</a>
        </div>
      </div>

      {/* Mercados */}
      <div className="mb-3.5">
        <div className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-[1.4px] mb-1">Exemplos por mercado</div>
        <div className="text-[17px] font-extrabold text-[#1A1D24] tracking-[-0.6px] mb-3.5">Anúncios reais em Brasil, EUA, Espanha e México</div>
      </div>
      <div className="grid grid-cols-2 gap-3.5 mb-2 max-md:grid-cols-1">
        {markets.map((m) => (
          <div key={m.country} className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
            <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">{m.flag} {m.country}</h3>
            <div className="text-[13.5px] text-[#434A57] leading-[1.65]" dangerouslySetInnerHTML={{ __html: m.text }} />
            <div className="flex gap-2 flex-wrap mt-[13px]">
              <a href={`https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=${m.metaCountry}&q=${m.metaQ}&media_type=all`} target="_blank" rel="noopener" className="text-[11.5px] font-bold text-[#2563EB] bg-[#E9F0FE] border border-[#CFE0FB] px-2.5 py-1.5 rounded-lg no-underline">Meta Ad Library · {m.metaCountry} ↗</a>
              <a href={`https://ads.tiktok.com/business/creativecenter/inspiration/topads/pc/en?region=${m.tiktokRegion}`} target="_blank" rel="noopener" className="text-[11.5px] font-bold text-[#2563EB] bg-[#E9F0FE] border border-[#CFE0FB] px-2.5 py-1.5 rounded-lg no-underline">TikTok Top Ads · {m.tiktokRegion} ↗</a>
            </div>
          </div>
        ))}
      </div>
      <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mb-[22px]">Exemplos ao vivo via Meta Ad Library e TikTok Creative Center. Notas de mercado: HypeAuditor, Meio &amp; Mensagem, ipMark, PuroMarketing, Merca2.0, CreatorIQ, Visla (2026).</div>

      {/* Hooks */}
      <div className="mb-3.5">
        <div className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-[1.4px] mb-1">Hooks de abertura</div>
        <div className="text-[17px] font-extrabold text-[#1A1D24] tracking-[-0.6px] mb-3.5">Como abrir o vídeo nos primeiros 3 segundos</div>
      </div>
      <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px] mb-[22px]">
        <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">Ganham ou perdem a atenção em 3 segundos</h3>
        <div className="flex flex-col gap-3">
          {hooks.map((h) => (
            <div key={h.tag} className="bg-white border border-[#E2E7EF] border-l-[3px] border-l-[#2563EB] rounded-xl px-5 py-[18px]">
              <div className="mb-2"><span className="text-[9.5px] font-extrabold uppercase tracking-[0.8px] px-2.5 py-0.5 rounded-[6px] bg-[#2563EB] text-white">{h.tag}</span></div>
              <div className="text-[15.5px] font-bold text-[#1A1D24] leading-[1.4] mb-1.5">{h.title}</div>
              <div className="text-[13.5px] text-[#434A57] leading-[1.6]">{h.desc}</div>
            </div>
          ))}
        </div>
        <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">Estrutura: hook nos 3s, 6–15s para feed, ângulo &gt; produção. Fontes: GetHookd, Segwise, Balistro, Adligator, Influee (120 UGC hooks).</div>
      </div>

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
