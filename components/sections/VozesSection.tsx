import SectionHeader from "./SectionHeader";

type Conta = {
  handle: string;
  nome: string;
  seguidores?: string;
  foco: string;
  badge: string;
  badgeColor: string;
  url: string;
};

type Categoria = {
  titulo: string;
  icon: string;
  desc: string;
  contas: Conta[];
};

const categorias: Categoria[] = [
  {
    titulo: "Mídia Criativa & Publicidade",
    icon: "📣",
    desc: "Veículos que pautam a indústria criativa brasileira",
    contas: [
      {
        handle: "@publicitarioscriativos",
        nome: "Publicitários Criativos",
        seguidores: "1M+",
        foco: "Cases, campanhas, design e branding — o maior hub de criatividade publicitária do Brasil",
        badge: "Publicidade",
        badgeColor: "bg-[#FEF3C7] text-[#B45309]",
        url: "https://www.instagram.com/publicitarioscriativos/",
      },
      {
        handle: "@b9",
        nome: "B9",
        foco: `"Criatividade como cultura, cultura como negócio" — campanhas, festivais (Cannes, SXSW) e indústria criativa`,
        badge: "Indústria criativa",
        badgeColor: "bg-[#FEF3C7] text-[#B45309]",
        url: "https://www.instagram.com/b9/",
      },
      {
        handle: "@meioemensagem",
        nome: "Meio & Mensagem",
        foco: "Maior veículo setorial de marketing, publicidade e comunicação do Brasil",
        badge: "Marketing & Mídia",
        badgeColor: "bg-[#FEF3C7] text-[#B45309]",
        url: "https://www.instagram.com/meioemensagem/",
      },
      {
        handle: "@criatives",
        nome: "Criatives",
        foco: "Portal de entretenimento e inspiração criativa visual — um dos maiores portais criativos do Brasil",
        badge: "Inspiração",
        badgeColor: "bg-[#FEF3C7] text-[#B45309]",
        url: "https://www.instagram.com/criatives/",
      },
    ],
  },
  {
    titulo: "Design Gráfico & Criatividade",
    icon: "🎨",
    desc: "Criadores que moldam o estilo e a identidade da profissão",
    contas: [
      {
        handle: "@lucasinutilismo",
        nome: "Lucas Vinícius",
        seguidores: "3M",
        foco: "Tipografia, design criativo e arte — um dos maiores criadores de design do Brasil, com alcance de mega-influenciador",
        badge: "Tipografia & Arte",
        badgeColor: "bg-[#EDE9FE] text-[#6D28D9]",
        url: "https://www.instagram.com/lucasinutilismo/",
      },
      {
        handle: "@designersbrasileiros",
        nome: "Designers Brasileiros",
        seguidores: "31K",
        foco: "Comunidade de design gráfico focada em valorização profissional e compartilhamento de trabalhos",
        badge: "Comunidade",
        badgeColor: "bg-[#EDE9FE] text-[#6D28D9]",
        url: "https://www.instagram.com/designersbrasileiros/",
      },
      {
        handle: "@brasil.design",
        nome: "Brasil Design",
        foco: "Curadoria de design brasileiro — referências de identidade visual, branding e projetos nacionais",
        badge: "Curadoria",
        badgeColor: "bg-[#EDE9FE] text-[#6D28D9]",
        url: "https://www.instagram.com/brasil.design/",
      },
    ],
  },
  {
    titulo: "UX / UI & Produto Digital",
    icon: "🖥️",
    desc: "Referências técnicas de UX, UI e design de produto no Brasil",
    contas: [
      {
        handle: "@chiefofdesign.br",
        nome: "David Arty — Chief of Design",
        seguidores: "55K",
        foco: "UX e Product Design — referência técnica, de carreira e debates sobre o futuro da profissão no Brasil",
        badge: "UX & Produto",
        badgeColor: "bg-[#DCFCE7] text-[#166534]",
        url: "https://www.instagram.com/chiefofdesign.br/",
      },
      {
        handle: "@aela.io",
        nome: "Aela School",
        foco: "Escola de UX/UI design — formação prática com comunidade ativa de estudantes e profissionais",
        badge: "Educação UX",
        badgeColor: "bg-[#DCFCE7] text-[#166534]",
        url: "https://www.instagram.com/aela.io/",
      },
      {
        handle: "@papodeux",
        nome: "Papo de UX",
        foco: "Podcast e comunidade de UX em português — debates sobre carreira, processo e ferramentas",
        badge: "Podcast & Comunidade",
        badgeColor: "bg-[#DCFCE7] text-[#166534]",
        url: "https://www.instagram.com/papodeux/",
      },
      {
        handle: "@figmabrasil",
        nome: "Figma Brasil",
        seguidores: "12K",
        foco: "Tutoriais, dicas e novidades do Figma para a comunidade brasileira de design",
        badge: "Ferramentas",
        badgeColor: "bg-[#DCFCE7] text-[#166534]",
        url: "https://www.instagram.com/figmabrasil/",
      },
      {
        handle: "@jonasmilancc",
        nome: "Jonas Milan",
        foco: "UI Design experimental — interfaces, identidade visual e letras com estilo próprio e referencial",
        badge: "UI Design",
        badgeColor: "bg-[#DCFCE7] text-[#166534]",
        url: "https://www.instagram.com/jonasmilancc/",
      },
    ],
  },
  {
    titulo: "Marketing & Negócios para Criativos",
    icon: "💼",
    desc: "Canais que ensinam o lado de negócios da profissão",
    contas: [
      {
        handle: "@marketingsemgravata",
        nome: "Marketing sem Gravata",
        foco: "Marketing descontraído via memes — linguagem acessível que traduz conceitos de marketing em humor viral",
        badge: "Marketing",
        badgeColor: "bg-[#DBEAFE] text-[#1D4ED8]",
        url: "https://www.instagram.com/marketingsemgravata/",
      },
      {
        handle: "@agenciadebolso_",
        nome: "Agência de Bolso",
        foco: `"Pílulas" de marketing e gestão de comunicação — foco em pequenos negócios e profissionais autônomos`,
        badge: "Marketing",
        badgeColor: "bg-[#DBEAFE] text-[#1D4ED8]",
        url: "https://www.instagram.com/agenciadebolso_/",
      },
      {
        handle: "@nowall.school",
        nome: "Nowall School",
        foco: "Educação criativa com dicas rápidas de design e marketing — combina aprendizado com diversão",
        badge: "Educação criativa",
        badgeColor: "bg-[#DBEAFE] text-[#1D4ED8]",
        url: "https://www.instagram.com/nowall.school/",
      },
    ],
  },
  {
    titulo: "Tecnologia & IA",
    icon: "🤖",
    desc: "Portais que cobrem as ferramentas que estão remodelando o design",
    contas: [
      {
        handle: "@tecmundo",
        nome: "TecMundo",
        foco: "Maior portal de tecnologia do Brasil — IA, lançamentos e ferramentas digitais que impactam o fluxo de trabalho de design",
        badge: "Tecnologia",
        badgeColor: "bg-[#F1F5F9] text-[#475569]",
        url: "https://www.instagram.com/tecmundo/",
      },
      {
        handle: "@olhardigital",
        nome: "Olhar Digital",
        foco: `"O futuro passa primeiro aqui" — IA, ciência e inovação digital com profundidade jornalística`,
        badge: "Tecnologia & IA",
        badgeColor: "bg-[#F1F5F9] text-[#475569]",
        url: "https://www.instagram.com/olhardigital/",
      },
      {
        handle: "@forbesbrasiloficial",
        nome: "Forbes Brasil",
        foco: "Negócios, empreendedorismo e tendências — relevante para designers que constroem carreira como negócio",
        badge: "Negócios",
        badgeColor: "bg-[#F1F5F9] text-[#475569]",
        url: "https://www.instagram.com/forbesbrasiloficial/",
      },
    ],
  },
];

type Destaque = {
  handle: string;
  likes: string;
  tema: string;
  temaColor: string;
  texto: string;
  url: string;
  data: string;
};

const destaques: Destaque[] = [
  {
    handle: "@publicitarioscriativos",
    likes: "73K",
    tema: "Reactive Marketing",
    temaColor: "bg-[#FEF3C7] text-[#B45309]",
    texto: "Endrick no banco virou pauta de marcas. Nissan, 99, iFood, Vivo e outras somaram à cobrança dos torcedores e criaram conteúdo em tempo real — 5 marcas distintas mobilizadas por 1 momento esportivo não planejado.",
    url: "https://www.instagram.com/publicitarioscriativos/p/DZz1uUPgMfx/",
    data: "20 Jun 2026",
  },
  {
    handle: "@publicitarioscriativos",
    likes: "10K",
    tema: "Branding & Identidade",
    temaColor: "bg-[#EDE9FE] text-[#6D28D9]",
    texto: "Naming rights proibidos na Copa. O Levi's Stadium cobriu seu logo com um pano branco — mas a silhueta ficou tão reconhecível que virou o conteúdo orgânico mais viral do torneio. A marca ficou mais visível sem o logo do que com ele.",
    url: "https://www.instagram.com/publicitarioscriativos/p/DZ2g4cRApPa/",
    data: "21 Jun 2026",
  },
  {
    handle: "@b9.com.br",
    likes: "9.3K",
    tema: "Autenticidade vs Marketing",
    temaColor: "bg-[#FEE2E2] text-[#991B1B]",
    texto: "Adidas usou QR code para 'provar' autenticidade da collab com artesãs mexicanas. Revista mexicana verificou: artesãs receberam US$ 1,80/hora ao longo de 15 meses. As peças são vendidas por até US$ 250. O espaço cultural da comunidade foi convertido em linha de produção.",
    url: "https://www.instagram.com/b9.com.br/p/DY-NxxCFVxZ/",
    data: "30 Mai 2026",
  },
  {
    handle: "@b9.com.br",
    likes: "6.2K",
    tema: "Velocidade Criativa",
    temaColor: "bg-[#DCFCE7] text-[#166534]",
    texto: "NY Knicks campeões da NBA após 53 anos. A Nike já estava no ar com o filme no primeiro intervalo comercial após o buzzer final — criado pela WK NYC. A peça: um torcedor correndo pelas ruas ao som de 'New York State of Mind'. Velocidade de produção como vantagem competitiva.",
    url: "https://www.instagram.com/b9.com.br/p/DZkmKLSFSda/",
    data: "14 Jun 2026",
  },
  {
    handle: "@b9.com.br",
    likes: "1.1K",
    tema: "Rebrand",
    temaColor: "bg-[#EDE9FE] text-[#6D28D9]",
    texto: "KFC fez o maior rebrand em anos: logo engordou e ficou redondo para caber em ícone de app. Cardápio com mais de 20 molhos, nova linha de bebidas (Kwench), lojas com 2 andares e pátio. Decisão central: trocar de público — sair do balde familiar e capturar a Gen Z.",
    url: "https://www.instagram.com/b9.com.br/p/DZnFg_ZgDE7/",
    data: "15 Jun 2026",
  },
  {
    handle: "@meioemensagem",
    likes: "16K",
    tema: "Campanha em Destaque",
    temaColor: "bg-[#FEF3C7] text-[#B45309]",
    texto: "Anitta é a nova embaixadora do Mercado Livre. Campanha 'Vem fazer Comprittas', criada pela GUT São Paulo com produção da Ginga Produções. A relação começou como embaixadora do Mercado Pago e agora se estende ao e-commerce.",
    url: "https://www.instagram.com/meioemensagem/p/DZ5o1tPPesP/",
    data: "22 Jun 2026",
  },
  {
    handle: "@meioemensagem",
    likes: "3.4K",
    tema: "Cannes Lions 2026",
    temaColor: "bg-[#DBEAFE] text-[#1D4ED8]",
    texto: "Noite 1 de Cannes: GUT São Paulo ganhou Grand Prix em Outdoor com 'Field Barcode' para Mercado Livre — transformou o gramado do Pacaembu em código de barras. Africa Creative levou Ouro em Audio & Radio para Abradee.",
    url: "https://www.instagram.com/meioemensagem/p/DZ5iNjaD9s5/",
    data: "22 Jun 2026",
  },
  {
    handle: "@chiefofdesign.br",
    likes: "70",
    tema: "Mercado de UX",
    temaColor: "bg-[#DCFCE7] text-[#166534]",
    texto: "Migrar para UX não é tão simples como vídeos comerciais mostram: a transição exige estudo, dedicação e networking — e em geral leva até 1 ano (6 meses já seria excepcional). Primeiro salário: no máximo R$ 4K. Portfólio só com redesigns de Spotify e Netflix não basta.",
    url: "https://www.instagram.com/chiefofdesign.br/p/DJ1vGBJhfXX/",
    data: "19 Mai 2025",
  },
  {
    handle: "@chiefofdesign.br",
    likes: "24",
    tema: "Carreira em Design",
    temaColor: "bg-[#DCFCE7] text-[#166534]",
    texto: "Carreira em design dá cicatriz primeiro — confiança vem depois. Você manda currículo e ninguém responde (aprende que o problema era o portfólio). Você se compara com todos no LinkedIn e para (aprende que cada trajetória tem um tempo). Fundamento vale mais que Figma.",
    url: "https://www.instagram.com/chiefofdesign.br/p/DXrZ9WeAZzy/",
    data: "28 Abr 2026",
  },
  {
    handle: "@marketingsemgravata",
    likes: "3.4K",
    tema: "Identidade de Marca",
    temaColor: "bg-[#EDE9FE] text-[#6D28D9]",
    texto: "Levi's recusou pagar naming rights, logo foi coberto — e mudou o logo no Instagram para uma versão 'coberta'. Resultado: earned media zero-budget, comentários virais e a marca mais comentada na Copa sem gastar um centavo em patrocínio.",
    url: "https://www.instagram.com/marketingsemgravata/p/DZnmRGvGteH/",
    data: "15 Jun 2026",
  },
  {
    handle: "@marketingsemgravata",
    likes: "1K",
    tema: "Design Atemporal",
    temaColor: "bg-[#F1F5F9] text-[#475569]",
    texto: `"A simplicidade é o último grau da sofisticação." Cortador de unhas, bloco de notas (post-it) e clipe de papel: passaram décadas, viramos o milênio — o design deles em 2026 ainda é cópia exata do original. Eles não mudam porque não precisam: são perfeitos.`,
    url: "https://www.instagram.com/marketingsemgravata/p/DZVkOGWDkor/",
    data: "8 Jun 2026",
  },
  {
    handle: "@publicitarioscriativos",
    likes: "3.9K",
    tema: "Criatividade Social",
    temaColor: "bg-[#FEF3C7] text-[#B45309]",
    texto: "A coleta de sangue anda em baixa em diversos países. A solução criativa: remover a cor que simboliza o próprio sangue. Marvel e HSBC cederam suas marcas para criar artes sem o vermelho — ausência de elemento visual como mensagem principal.",
    url: "https://www.instagram.com/publicitarioscriativos/p/DZ5rl7jJW4Z/",
    data: "22 Jun 2026",
  },
];

export default function VozesSection() {
  return (
    <section id="vozes" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="📱"
        part="Mapa Social"
        title="Vozes do Mercado no Instagram"
        description="Perfis e canais que moldam a conversa sobre design, criatividade e publicidade no Brasil — mapeado para entender onde a audiência vive"
      />

      <div className="space-y-4">
        {categorias.map((cat) => (
          <div key={cat.titulo} className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
            <div className="flex items-start gap-2 mb-4">
              <span className="text-lg leading-none mt-0.5">{cat.icon}</span>
              <div>
                <h3 className="text-[13px] font-bold text-[#1A1D24] uppercase tracking-[0.5px]">{cat.titulo}</h3>
                <p className="text-[12px] text-[#6B7480] mt-0.5">{cat.desc}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
              {cat.contas.map((c) => (
                <a
                  key={c.handle}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-1.5 border border-[#E2E7EF] rounded-lg p-4 hover:bg-[#F6F8FB] hover:border-[#2563EB]/30 transition-colors no-underline group"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[13px] font-bold text-[#2563EB] group-hover:underline">{c.handle}</span>
                    {c.seguidores && (
                      <span className="text-[10.5px] font-bold text-[#434A57] bg-[#EEF1F6] px-2 py-0.5 rounded-full shrink-0">{c.seguidores} seg.</span>
                    )}
                  </div>
                  <span className="text-[12px] font-semibold text-[#434A57]">{c.nome}</span>
                  <p className="text-[12px] text-[#6B7480] leading-[1.55]">{c.foco}</p>
                  <span className={`inline-flex self-start items-center px-2 py-0.5 rounded-full text-[10.5px] font-semibold mt-0.5 ${c.badgeColor}`}>{c.badge}</span>
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Posts em Destaque */}
        <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
          <div className="flex items-start gap-2 mb-4">
            <span className="text-lg leading-none mt-0.5">📌</span>
            <div>
              <h3 className="text-[13px] font-bold text-[#1A1D24] uppercase tracking-[0.5px]">Posts em Destaque — o que está movimentando o mercado</h3>
              <p className="text-[12px] text-[#6B7480] mt-0.5">Conteúdo real extraído desses perfis · curado por relevância para o mercado de design</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
            {destaques.map((d) => (
              <a
                key={d.url}
                href={d.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 border border-[#E2E7EF] rounded-lg p-4 hover:bg-[#F6F8FB] hover:border-[#2563EB]/30 transition-colors no-underline group"
              >
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[12px] font-bold text-[#2563EB] group-hover:underline">{d.handle}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10.5px] font-bold text-[#434A57] bg-[#EEF1F6] px-2 py-0.5 rounded-full">❤️ {d.likes}</span>
                    <span className="text-[10px] text-[#6B7480]">{d.data}</span>
                  </div>
                </div>
                <p className="text-[12.5px] text-[#434A57] leading-[1.6]">{d.texto}</p>
                <span className={`inline-flex self-start items-center px-2 py-0.5 rounded-full text-[10.5px] font-semibold ${d.temaColor}`}>{d.tema}</span>
              </a>
            ))}
          </div>
          <div className="text-[11px] text-[#6B7480] pt-3 border-t border-[#E2E7EF] mt-4">
            Dados coletados via Instagram · Jun 2026 · Likes refletem engajamento no momento da coleta
          </div>
        </div>
      </div>
    </section>
  );
}
