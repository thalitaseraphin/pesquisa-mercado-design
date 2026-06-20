import SectionHeader from "./SectionHeader";

const markets = [
  {
    flag: "🇸🇦🇦🇪",
    region: "MENA",
    label: "Oriente Médio & Norte da África",
    size: "USD 2,1B",
    growth: "+14% a.a.",
    growthColor: "text-[#066E4C]",
    countries: "Dubai · Riad · Cairo · Abu Dhabi",
    signal: "📈 Emergindo rápido",
    context: "A Saudi Vision 2030 injetou bilhões em identidade visual nacional, arquitetura de marca e cultura criativa. Dubai consolidou-se como hub criativo global com demanda gigante por branding bilíngue árabe-inglês. O design islâmico contemporâneo — que une caligrafia árabe com tipografia digital — virou diferencial em todo o Ocidente também.",
    opportunity: "Designers brasileiros têm vantagem: estética latina tem apelo emocional semelhante à árabe (cores, calor, ornamentação). Serviços de identidade visual com entrega em inglês, precificado em USD, têm boa entrada via Toptal e We Work Remotely.",
    tags: ["Branding bilíngue", "Design islâmico contemporâneo", "Saudi Vision 2030", "Luxury branding"],
    sources: "Cognitive Market Research · Grand View Research (Creative Economy MENA 2026)",
  },
  {
    flag: "🇮🇩🇻🇳🇹🇭",
    region: "SEA",
    label: "Sudeste Asiático",
    size: "USD 8B",
    growth: "+19% a.a.",
    growthColor: "text-[#066E4C]",
    countries: "Indonésia · Vietnã · Tailândia · Singapura",
    signal: "🔥 Crescimento explosivo",
    context: "Indonésia tem 280M de habitantes e é a 4ª maior população do mundo — com 20M+ criadores ativos. Vietnã e Tailândia têm um dos custos de agência mais baixos do mundo, mas demanda por qualidade premium cresce com as exportações de startups. Singapura é o hub financeiro que compra design de todo o entorno.",
    opportunity: "Designers BR têm abertura para projetos remotos com foco em e-commerce, branding de exportação (marcas locais que querem vender globalmente) e identidade visual para apps de fintech — setor que cresce 35% a.a. na região.",
    tags: ["E-commerce branding", "Fintech UX", "Creator economy", "App design"],
    sources: "Grand View Research · Market Clarity · Statista Southeast Asia Digital 2026",
  },
  {
    flag: "🇮🇳",
    region: "INDIA",
    label: "Índia — Tier 2 e 3 cities",
    size: "USD 4B",
    growth: "+35% a.a.",
    growthColor: "text-[#2563EB]",
    countries: "Bangalore · Mumbai · Pune · Hyderabad · Tier 2+",
    signal: "🔥 Boom de SaaS",
    context: "Mais de 3.000 SaaS companies indianas precisam de design profissional. O mercado de UX design cresce 35% a.a. impulsionado por B2B SaaS de exportação (produto em inglês para cliente global). O diferencial: designers indianos são bons em execução mas têm gap em direção criativa e sistemas de marca — exatamente o que designers BR podem entregar.",
    opportunity: "Idioma comum (inglês) facilita colaboração remota. Posicionamento como 'creative director remoto' para SaaS indiano é uma lacuna real — eles têm execução local mas buscam estratégia criativa de fora. Upwork e LinkedIn são canais de entrada.",
    tags: ["B2B SaaS design", "UX para exportação", "Brand identity", "Remote creative director"],
    sources: "CB Insights India SaaS Report 2026 · Nasscom Design Economy",
  },
  {
    flag: "🇳🇬🇰🇪🇿🇦",
    region: "AFRICA",
    label: "África Subsaariana",
    size: "USD 1,2B",
    growth: "+18% a.a.",
    growthColor: "text-[#066E4C]",
    countries: "Lagos · Nairobi · Joanesburgo · Accra",
    signal: "📈 Emergindo",
    context: "Lagos virou o hub fintech e edtech do continente — Paystack, Flutterwave e decenas de unicórnios precisam de branding de classe mundial. Design africano contemporâneo — que celebra padrões e identidade local — ganhou apelo global nas últimas temporadas de fashion e branding. Nairobi tem o Silicon Savannah, com grande demanda de design para mobile-first.",
    opportunity: "O design africano é underrepresented globalmente — designers BR que estudam e se inspiram no estilo têm abertura para colaboração. Além disso, o posicionamento de 'design latinx com sensibilidade africana' é único e tem apelo no mercado europeu e americano.",
    tags: ["Fintech branding", "Mobile-first UX", "Design africano contemporâneo", "Startup branding"],
    sources: "Partech Africa Report 2026 · Africa Tech Ecosystem Report",
  },
  {
    flag: "🇨🇴🇦🇷🇨🇱",
    region: "LATAM",
    label: "América Latina — além do Brasil",
    size: "USD 3,4B",
    growth: "+12% a.a.",
    growthColor: "text-[#066E4C]",
    countries: "Bogotá · Buenos Aires · Santiago · CDMX",
    signal: "🏆 Oportunidade imediata",
    context: "Colômbia tem Medellín como hub criativo reconhecido internacionalmente e exporta serviços criativos para o mercado espanhol. Argentina tem talento em design com valor competitivo dado o câmbio. Chile tem o mercado B2B mais maduro da LatAm — maior exigência de qualidade. México é a maior economia B2B da região com demanda crescente por UX.",
    opportunity: "Designer brasileiro tem vantagem por proximidade cultural e linguística (espanhol próximo do português). Posicionamento como 'designer de referência da LatAm que fala com o mercado global' é única — a produção criativa do Brasil tem mais reconhecimento do que a de qualquer outro país da região.",
    tags: ["Exportação de serviços criativos", "Branding pan-latam", "B2B LatAm", "Bilíngue PT/ES"],
    sources: "Distrito LatAm Report 2026 · IDB Creative Economy LatAm",
  },
];

export default function MercadosEmergentesSection() {
  return (
    <section id="emergentes" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="🌱"
        part="Expansão global"
        title="Mercados Emergentes de Design"
        description="Onde o design está crescendo fora do eixo BR/EUA/Europa — oportunidades para posicionamento global antes da saturação"
      />

      <div className="bg-[#E9F0FE] border border-[#CFE0FB] border-l-[3px] border-l-[#2563EB] rounded-xl px-5 py-4 mb-5 text-[13.5px] text-[#434A57] leading-[1.65]">
        <strong className="text-[#1A1D24]">Por que isso importa agora:</strong> o designer brasileiro que entra em mercados emergentes hoje está 3–5 anos à frente da saturação que esses mercados vão ter. MENA, SEA e África combinam crescimento de 14–35% a.a. com <strong>baixa oferta de design de qualidade</strong> — o mesmo gap que o Brasil tinha em 2018.
      </div>

      <div className="flex flex-col gap-4">
        {markets.map((m) => (
          <div key={m.region} className="bg-white border border-[#E2E7EF] rounded-xl overflow-hidden shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-3.5 border-b border-[#E2E7EF] bg-[#FAFAFA] flex-wrap">
              <span className="text-[22px] leading-none">{m.flag}</span>
              <div>
                <div className="text-[10px] font-extrabold text-[#6B7480] uppercase tracking-[1px]">{m.region}</div>
                <div className="text-[14px] font-extrabold text-[#1A1D24]">{m.label}</div>
              </div>
              <div className="ml-auto flex items-center gap-3 flex-wrap">
                <div className="text-right">
                  <div className="text-[18px] font-extrabold text-[#1A1D24] leading-none">{m.size}</div>
                  <div className={`text-[12px] font-bold ${m.growthColor}`}>{m.growth}</div>
                </div>
                <span className="text-[11px] font-bold text-[#434A57] bg-white border border-[#E2E7EF] px-2.5 py-1 rounded-lg">{m.signal}</span>
              </div>
            </div>

            <div className="p-5 grid grid-cols-[1fr_280px] gap-5 max-lg:grid-cols-1">
              <div>
                <div className="text-[11px] font-bold text-[#6B7480] mb-1">{m.countries}</div>
                <p className="text-[13.5px] text-[#434A57] leading-[1.7] mb-4">{m.context}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {m.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-semibold text-[#434A57] bg-[#F6F8FB] border border-[#D2D9E4] px-2.5 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="text-[10.5px] text-[#6B7480]">Fontes: {m.sources}</div>
              </div>

              <div className="bg-[#F0F7FF] border border-[#C9DBFB] rounded-xl p-4">
                <div className="text-[10px] font-extrabold text-[#1E40AF] uppercase tracking-[0.8px] mb-2">Para designers brasileiros</div>
                <p className="text-[12.5px] text-[#434A57] leading-[1.6]">{m.opportunity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#1A1D24] rounded-xl p-5 mt-4">
        <div className="text-[12px] font-extrabold text-white/50 uppercase tracking-[0.8px] mb-2">Roteiro de entrada recomendado</div>
        <div className="grid grid-cols-4 gap-3 max-md:grid-cols-2">
          {[
            { step: "01", action: "Escolha 1 mercado", detail: "Foque onde o seu portfólio já tem mais apelo — não tente todos ao mesmo tempo" },
            { step: "02", action: "Adapte o portfólio", detail: "Adicione case fictício no idioma/estética do mercado alvo para sinalizar familiaridade" },
            { step: "03", action: "Entre pelas plataformas", detail: "Toptal e We Work Remotely para sênior; Upwork e LinkedIn para entry — conforme o mercado" },
            { step: "04", action: "Precifique em USD", detail: "Mesmo para LatAm, USD evita descontos de câmbio e posiciona você no nível internacional" },
          ].map((r) => (
            <div key={r.step} className="bg-white/8 rounded-lg p-3">
              <div className="text-[11px] font-extrabold text-[#2563EB] mb-1">{r.step}</div>
              <div className="text-[13px] font-bold text-white mb-1">{r.action}</div>
              <div className="text-[11.5px] text-white/60 leading-[1.5]">{r.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
