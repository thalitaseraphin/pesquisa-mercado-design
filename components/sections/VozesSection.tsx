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
  plataforma: string;
  desc: string;
  contas: Conta[];
};

const categorias: Categoria[] = [
  {
    titulo: "Mídia Criativa & Publicidade",
    icon: "📣",
    plataforma: "Instagram",
    desc: "Veículos que pautam a indústria criativa brasileira",
    contas: [
      {
        handle: "@publicitarioscriativos",
        nome: "Publicitários Criativos",
        seguidores: "571K",
        foco: "Cases, campanhas, design e branding — o maior hub de criatividade publicitária do Brasil",
        badge: "Publicidade",
        badgeColor: "bg-[#FEF3C7] text-[#B45309]",
        url: "https://www.instagram.com/publicitarioscriativos/",
      },
      {
        handle: "@b9.com.br",
        nome: "B9",
        foco: `"Criatividade como cultura, cultura como negócio" — campanhas, festivais (Cannes, SXSW), indústria criativa e podcast Braincast`,
        badge: "Indústria criativa",
        badgeColor: "bg-[#FEF3C7] text-[#B45309]",
        url: "https://www.instagram.com/b9.com.br/",
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
    titulo: "Design Gráfico & Branding",
    icon: "🎨",
    plataforma: "Instagram",
    desc: "Criadores que moldam o estilo e a identidade da profissão",
    contas: [
      {
        handle: "@cleitonavi.design",
        nome: "Cleiton Avi",
        foco: "Designer de marcas com 12+ anos de experiência — identidade visual e branding estratégico com metodologia própria. Designer sênior na Rocketseat",
        badge: "Branding",
        badgeColor: "bg-[#EDE9FE] text-[#6D28D9]",
        url: "https://www.instagram.com/cleitonavi.design/",
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
        foco: "Curadoria de design brasileiro — referências de identidade visual, branding e projetos nacionais de destaque",
        badge: "Curadoria",
        badgeColor: "bg-[#EDE9FE] text-[#6D28D9]",
        url: "https://www.instagram.com/brasil.design/",
      },
    ],
  },
  {
    titulo: "UX / UI & Produto Digital",
    icon: "🖥️",
    plataforma: "Instagram",
    desc: "Referências técnicas de UX, UI e design de produto no Brasil",
    contas: [
      {
        handle: "@chiefofdesign.br",
        nome: "David Arty — Chief of Design",
        seguidores: "55K",
        foco: "UX e Product Design — referência técnica, de carreira e debates sobre o futuro da profissão no Brasil. Criador do CDX Conference",
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
    plataforma: "Instagram",
    desc: "Canais que ensinam o lado de negócios da profissão",
    contas: [
      {
        handle: "@marketingsemgravata",
        nome: "Marketing sem Gravata",
        seguidores: "122K",
        foco: "Marketing descontraído via memes e análises — linguagem acessível que traduz conceitos de marketing em formato viral",
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
    plataforma: "Instagram",
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
  {
    titulo: "YouTube — Canais de Design",
    icon: "▶️",
    plataforma: "YouTube",
    desc: "Onde fica o conteúdo técnico de maior profundidade — aulas, tutoriais e análises longas",
    contas: [
      {
        handle: "Q28a™ // Graphic Design",
        nome: "Q28a™ // Graphic Design",
        seguidores: "140K",
        foco: "O maior canal brasileiro de design gráfico — critiques ao vivo, análises profissionais e debates sobre ferramentas. Comunidade de designers em formação",
        badge: "Design Gráfico",
        badgeColor: "bg-[#FEE2E2] text-[#991B1B]",
        url: "https://www.youtube.com/@Q28a",
      },
      {
        handle: "Origamid",
        nome: "Origamid",
        seguidores: "60.1K",
        foco: "Design gráfico, UI e front-end — plataforma de cursos com canal educacional de qualidade. Referência em identidade visual e web design",
        badge: "Design & Front-end",
        badgeColor: "bg-[#FEE2E2] text-[#991B1B]",
        url: "https://www.youtube.com/@origamid",
      },
      {
        handle: "Aela Brasil",
        nome: "Aela Brasil",
        foco: "UX/UI Design — conteúdo sobre portfólio, carreira e transição para design. Comunidade ativa de estudantes e profissionais de produto",
        badge: "UX/UI",
        badgeColor: "bg-[#FEE2E2] text-[#991B1B]",
        url: "https://www.youtube.com/@AelaBrasil",
      },
      {
        handle: "B9 — Braincast",
        nome: "B9 (Braincast)",
        foco: "Podcast em vídeo sobre criatividade, publicidade e cultura. 'O que é ser uma agência em 2026?' (36.7K views) mostra o alcance do debate",
        badge: "Indústria criativa",
        badgeColor: "bg-[#FEE2E2] text-[#991B1B]",
        url: "https://www.youtube.com/@b9podcast",
      },
    ],
  },
  {
    titulo: "LinkedIn — Profissionais & Debates",
    icon: "💼",
    plataforma: "LinkedIn",
    desc: "Onde UX/produto designers debatem carreira, salário e IA com mais profundidade que o Instagram",
    contas: [
      {
        handle: "David Arty",
        nome: "David Arty — Chief of Design",
        foco: "Designer e criador do Chief of Design — publica sobre mercado de UX, carreira, IA e produto com visão estratégica e embasada",
        badge: "UX & Produto",
        badgeColor: "bg-[#DBEAFE] text-[#1D4ED8]",
        url: "https://www.linkedin.com/in/davidarty/",
      },
      {
        handle: "Cleiton Avi",
        nome: "Cleiton Avi",
        foco: "Designer sênior na Rocketseat — publica sobre branding estratégico, sistemas de identidade e o papel do design nos negócios",
        badge: "Branding",
        badgeColor: "bg-[#DBEAFE] text-[#1D4ED8]",
        url: "https://www.linkedin.com/in/cleiton-avi/",
      },
      {
        handle: "UX Collective",
        nome: "UX Collective (Medium/LinkedIn)",
        foco: "Publicação global com grande presença BR — artigos de profundidade sobre UX, produto, pesquisa e tendências. Referência de leitura semanal",
        badge: "Publicação",
        badgeColor: "bg-[#DBEAFE] text-[#1D4ED8]",
        url: "https://uxdesign.cc/",
      },
      {
        handle: "Figma",
        nome: "Figma (página oficial)",
        foco: "Lançamentos, casos de uso, Config 2026 e futuro das ferramentas — acompanhar para antecipar mudanças no workflow do mercado",
        badge: "Ferramentas",
        badgeColor: "bg-[#DBEAFE] text-[#1D4ED8]",
        url: "https://www.linkedin.com/company/figma/",
      },
    ],
  },
  {
    titulo: "Comunidades Ativas",
    icon: "🏘️",
    plataforma: "Discord · Slack · Fóruns",
    desc: "Onde as conversas acontecem antes de virarem post — as vozes mais brutas e honestas do mercado",
    contas: [
      {
        handle: "Figma Brasil",
        nome: "Figma Brasil (Discord)",
        foco: "Comunidade oficial brasileira do Figma — dúvidas, compartilhamento de trabalhos e discussões sobre ferramentas e workflow",
        badge: "Discord",
        badgeColor: "bg-[#F3E8FF] text-[#7E22CE]",
        url: "https://www.instagram.com/figmabrasil/",
      },
      {
        handle: "Chief of Design Community",
        nome: "Comunidade Chief of Design",
        foco: "Comunidade criada por David Arty — designers de UX/produto, debates sobre carreira, mercado e IA aplicada ao design",
        badge: "Comunidade paga",
        badgeColor: "bg-[#F3E8FF] text-[#7E22CE]",
        url: "https://chiefofdesign.com.br/",
      },
      {
        handle: "Jovens UX/UI",
        nome: "Jovens UX/UI",
        foco: "Comunidade de designers em início de carreira — dúvidas reais, portfólios, vagas e debates sobre transição de carreira",
        badge: "Instagram + comunidade",
        badgeColor: "bg-[#F3E8FF] text-[#7E22CE]",
        url: "https://www.instagram.com/jovensuxui/",
      },
      {
        handle: "r/design + r/graphic_design",
        nome: "Reddit (EN — referência global)",
        foco: "As threads mais honestas do mercado — debates sobre IA vs. design, precificação, portfólio e o futuro da profissão sem filtro",
        badge: "Fórum global",
        badgeColor: "bg-[#F3E8FF] text-[#7E22CE]",
        url: "https://www.reddit.com/r/graphic_design/",
      },
    ],
  },
];

type VideoDestaque = {
  titulo: string;
  canal: string;
  canalUrl: string;
  views: string;
  tema: string;
  temaColor: string;
  desc: string;
  url: string;
};

const videosDestaque: VideoDestaque[] = [
  {
    titulo: "Refazendo Design Gráfico dos Inscritos #03",
    canal: "Q28a™ // Graphic Design",
    canalUrl: "https://www.youtube.com/@Q28a",
    views: "251K",
    tema: "Critique ao Vivo",
    temaColor: "bg-[#DCFCE7] text-[#166534]",
    desc: "Designer profissional analisa e refaz trabalhos da audiência em tempo real. O vídeo mais assistido do canal — mostra o apetite enorme por feedback honesto e crítica construtiva. O formato 'critique' é o que mais engaja no nicho de design BR.",
    url: "https://www.youtube.com/watch?v=2nTSx8euF6Y",
  },
  {
    titulo: "Criando Design Gráfico NÍVEL DE AGÊNCIA",
    canal: "Q28a™ // Graphic Design",
    canalUrl: "https://www.youtube.com/@Q28a",
    views: "193K",
    tema: "Qualidade Profissional",
    temaColor: "bg-[#EDE9FE] text-[#6D28D9]",
    desc: "Processo completo de identidade visual no padrão de grandes agências — evidencia o gap entre básico e profissional. 193K views indica que a audiência quer saber o que separa um designer mediano do nível de mercado.",
    url: "https://www.youtube.com/watch?v=47xThXpee0k",
  },
  {
    titulo: "Designer Gráfico Profissional SÓ COM CANVA? (Prova Cabal)",
    canal: "Q28a™ // Graphic Design",
    canalUrl: "https://www.youtube.com/@Q28a",
    views: "187K",
    tema: "Canva vs Profissional",
    temaColor: "bg-[#FEF3C7] text-[#B45309]",
    desc: "Teste definitivo: dá pra entregar trabalho de agência usando só o Canva? 187K views no debate mais quente do nicho — diretamente conectado à expansão do Canva com IA que domina 1 em cada 9 internautas brasileiros.",
    url: "https://www.youtube.com/watch?v=6pDdZmcqnTA",
  },
  {
    titulo: "O que é ser uma agência de publicidade em 2026? • BRAINCAST 628",
    canal: "B9",
    canalUrl: "https://www.youtube.com/@b9podcast",
    views: "36.7K",
    tema: "Mercado & Agências",
    temaColor: "bg-[#DBEAFE] text-[#1D4ED8]",
    desc: "IA virou infraestrutura (não diferencial), clientes internalizando entregas, consultorias avançando. Episódio mais assistido do Braincast em 2026 — o formato 'podcast de mercado' performa bem mesmo sem o volume visual do YouTube.",
    url: "https://www.youtube.com/watch?v=xUagXkR-8SU",
  },
  {
    titulo: "Curso de Adobe XD — Introdução Aula 1",
    canal: "Origamid",
    canalUrl: "https://www.youtube.com/@origamid",
    views: "121K",
    tema: "Ferramentas de UX",
    temaColor: "bg-[#F1F5F9] text-[#475569]",
    desc: "Mesmo com o Adobe XD descontinuado, continua com 121K views. Sinal claro: designers buscam fundamentos de UX, não só a ferramenta do momento. Demanda por base teórica é persistente e maior que por tutoriais de app específico.",
    url: "https://www.youtube.com/watch?v=nl-Is79eyD8",
  },
  {
    titulo: "A Copa 2026, o ceticismo e a publicidade • BRAINCAST 636",
    canal: "B9",
    canalUrl: "https://www.youtube.com/@b9podcast",
    views: "6.8K",
    tema: "Publicidade & Cultura",
    temaColor: "bg-[#FEE2E2] text-[#991B1B]",
    desc: "Debate sobre o papel da publicidade em eventos culturais de massa — Copa 2026 como laboratório. Ceticismo do brasileiro vs. otimismo das marcas. Contexto direto para campanhas e reactive marketing associados ao torneio.",
    url: "https://www.youtube.com/watch?v=_kbmwcJNkBM",
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
    texto: "Endrick no banco virou pauta de marcas. Nissan, 99, iFood, Vivo e outras criaram conteúdo em tempo real — 5 marcas distintas mobilizadas por 1 momento esportivo não planejado. O padrão: a conversa já existe, a marca entra nela.",
    url: "https://www.instagram.com/publicitarioscriativos/p/DZz1uUPgMfx/",
    data: "20 Jun 2026",
  },
  {
    handle: "@publicitarioscriativos",
    likes: "10K",
    tema: "Branding & Identidade",
    temaColor: "bg-[#EDE9FE] text-[#6D28D9]",
    texto: "Naming rights proibidos na Copa. O Levi's Stadium cobriu o logo com um pano branco — a silhueta ficou tão reconhecível que virou o conteúdo orgânico mais viral do torneio. A marca ficou mais visível sem o logo do que com ele.",
    url: "https://www.instagram.com/publicitarioscriativos/p/DZ2g4cRApPa/",
    data: "21 Jun 2026",
  },
  {
    handle: "@b9.com.br",
    likes: "9.3K",
    tema: "Autenticidade vs Marketing",
    temaColor: "bg-[#FEE2E2] text-[#991B1B]",
    texto: "Adidas usou QR code para 'provar' autenticidade de collab com artesãs mexicanas. Uma revista verificou: artesãs receberam US$1,80/hora ao longo de 15 meses — peças vendidas por até US$250. O espaço cultural da comunidade virou linha de produção.",
    url: "https://www.instagram.com/b9.com.br/p/DY-NxxCFVxZ/",
    data: "30 Mai 2026",
  },
  {
    handle: "@b9.com.br",
    likes: "6.2K",
    tema: "Velocidade Criativa",
    temaColor: "bg-[#DCFCE7] text-[#166534]",
    texto: "NY Knicks campeões após 53 anos. A Nike já estava no ar no primeiro intervalo comercial após o buzzer final — criado pela WK NYC. A peça: um torcedor correndo pelas ruas ao som de 'New York State of Mind'. Velocidade de produção como vantagem competitiva.",
    url: "https://www.instagram.com/b9.com.br/p/DZkmKLSFSda/",
    data: "14 Jun 2026",
  },
  {
    handle: "@b9.com.br",
    likes: "1.1K",
    tema: "Rebrand",
    temaColor: "bg-[#EDE9FE] text-[#6D28D9]",
    texto: "KFC fez o maior rebrand em anos: logo engordou e ficou redondo para caber em ícone de app. Cardápio com mais de 20 molhos, lojas com 2 andares. Decisão central: trocar de público — sair do balde familiar e capturar a Gen Z.",
    url: "https://www.instagram.com/b9.com.br/p/DZnFg_ZgDE7/",
    data: "15 Jun 2026",
  },
  {
    handle: "@meioemensagem",
    likes: "16K",
    tema: "Campanha em Destaque",
    temaColor: "bg-[#FEF3C7] text-[#B45309]",
    texto: "Anitta é a nova embaixadora do Mercado Livre. Campanha 'Vem fazer Comprittas', criada pela GUT São Paulo. A relação começou como embaixadora do Mercado Pago e agora se estende ao e-commerce para a data 7.7.",
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
    likes: "24",
    tema: "Carreira em Design",
    temaColor: "bg-[#DCFCE7] text-[#166534]",
    texto: "Carreira em design dá cicatriz primeiro — confiança vem depois. Você manda currículo, ninguém responde (o problema era o portfólio). Se compara com todos no LinkedIn e para (cada trajetória tem um tempo). Fundamento vale mais que Figma.",
    url: "https://www.instagram.com/chiefofdesign.br/p/DXrZ9WeAZzy/",
    data: "28 Abr 2026",
  },
  {
    handle: "@marketingsemgravata",
    likes: "3.4K",
    tema: "Earned Media",
    temaColor: "bg-[#EDE9FE] text-[#6D28D9]",
    texto: "Levi's recusou pagar naming rights. Logo foi coberto — e a marca mudou o logo no próprio Instagram para uma versão 'coberta'. Resultado: earned media zero-budget, comentários virais, a marca mais comentada da Copa sem investir em patrocínio.",
    url: "https://www.instagram.com/marketingsemgravata/p/DZnmRGvGteH/",
    data: "15 Jun 2026",
  },
  {
    handle: "@marketingsemgravata",
    likes: "1K",
    tema: "Design Atemporal",
    temaColor: "bg-[#F1F5F9] text-[#475569]",
    texto: `"A simplicidade é o último grau da sofisticação." Cortador de unhas, post-it e clipe de papel: passaram décadas, viramos o milênio — o design deles em 2026 ainda é cópia exata do original. Não mudam porque são perfeitos.`,
    url: "https://www.instagram.com/marketingsemgravata/p/DZVkOGWDkor/",
    data: "8 Jun 2026",
  },
  {
    handle: "@publicitarioscriativos",
    likes: "3.9K",
    tema: "Criatividade Social",
    temaColor: "bg-[#FEF3C7] text-[#B45309]",
    texto: "Coleta de sangue em baixa em vários países. A solução criativa: remover a cor que simboliza o sangue. Marvel e HSBC cederam suas marcas para criar artes sem o vermelho — ausência do elemento visual como mensagem principal.",
    url: "https://www.instagram.com/publicitarioscriativos/p/DZ5rl7jJW4Z/",
    data: "22 Jun 2026",
  },
];

export default function VozesSection() {
  const instagramCats = categorias.filter(c => c.plataforma === "Instagram");
  const youtubeCat = categorias.find(c => c.plataforma === "YouTube");
  const remainingCats = categorias.filter(c => c.plataforma !== "Instagram" && c.plataforma !== "YouTube");

  return (
    <section id="vozes" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="📱"
        part="Mapa Social"
        title="Vozes do Mercado"
        description="Quem molda a conversa sobre design, criatividade e publicidade no Brasil — Instagram, YouTube, LinkedIn e comunidades"
      />

      {/* Instagram */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-3 px-1">
          <span className="text-[10px] font-extrabold uppercase tracking-[1px] text-[#6B7480]">Instagram</span>
          <div className="flex-1 h-px bg-[#E2E7EF]" />
        </div>
        <div className="space-y-3">
          {instagramCats.map((cat) => (
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
        </div>
      </div>

      {/* YouTube — canais */}
      {youtubeCat && (
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-3 px-1">
            <span className="text-[10px] font-extrabold uppercase tracking-[1px] text-[#6B7480]">YouTube</span>
            <div className="flex-1 h-px bg-[#E2E7EF]" />
          </div>
          <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px] mb-3">
            <div className="flex items-start gap-2 mb-4">
              <span className="text-lg leading-none mt-0.5">{youtubeCat.icon}</span>
              <div>
                <h3 className="text-[13px] font-bold text-[#1A1D24] uppercase tracking-[0.5px]">{youtubeCat.titulo}</h3>
                <p className="text-[12px] text-[#6B7480] mt-0.5">{youtubeCat.desc}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
              {youtubeCat.contas.map((c) => (
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

          {/* Vídeos em Destaque */}
          <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
            <div className="flex items-start gap-2 mb-4">
              <span className="text-lg leading-none mt-0.5">📊</span>
              <div>
                <h3 className="text-[13px] font-bold text-[#1A1D24] uppercase tracking-[0.5px]">Vídeos em Destaque — o que mais performa</h3>
                <p className="text-[12px] text-[#6B7480] mt-0.5">Views coletados via YouTube · Jun 2026 · ordenados por relevância para o mercado de design</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
              {videosDestaque.map((v) => (
                <a
                  key={v.url}
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-2 border border-[#E2E7EF] rounded-lg p-4 hover:bg-[#F6F8FB] hover:border-[#2563EB]/30 transition-colors no-underline group"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <a href={v.canalUrl} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="text-[12px] font-bold text-[#2563EB] hover:underline">{v.canal}</a>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10.5px] font-bold text-white bg-[#991B1B] px-2 py-0.5 rounded-full">▶ {v.views} views</span>
                    </div>
                  </div>
                  <p className="text-[13.5px] font-bold text-[#1A1D24] leading-[1.35] group-hover:text-[#2563EB]">{v.titulo}</p>
                  <p className="text-[12px] text-[#434A57] leading-[1.6]">{v.desc}</p>
                  <span className={`inline-flex self-start items-center px-2 py-0.5 rounded-full text-[10.5px] font-semibold ${v.temaColor}`}>{v.tema}</span>
                </a>
              ))}
            </div>
            <div className="text-[11px] text-[#6B7480] pt-3 border-t border-[#E2E7EF] mt-4">
              Dados coletados via YouTube Search API · Jun 2026 · Views são cumulativos (não periódicos) · atualizar trimestralmente
            </div>
          </div>
        </div>
      )}

      {/* LinkedIn, Comunidades */}
      <div className="space-y-3 mb-4">
        {remainingCats.map((cat) => (
          <div key={cat.titulo}>
            <div className="flex items-center gap-2 mb-3 px-1">
              <span className="text-[10px] font-extrabold uppercase tracking-[1px] text-[#6B7480]">{cat.plataforma}</span>
              <div className="flex-1 h-px bg-[#E2E7EF]" />
            </div>
            <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
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
          </div>
        ))}
      </div>

      {/* Posts em Destaque */}
      <div className="flex items-center gap-2 mb-3 px-1">
        <span className="text-[10px] font-extrabold uppercase tracking-[1px] text-[#6B7480]">Posts em Destaque · coletados Jun 2026</span>
        <div className="flex-1 h-px bg-[#E2E7EF]" />
      </div>
      <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
        <div className="flex items-start gap-2 mb-4">
          <span className="text-lg leading-none mt-0.5">📌</span>
          <div>
            <h3 className="text-[13px] font-bold text-[#1A1D24] uppercase tracking-[0.5px]">Conteúdo Real — o que está movimentando o mercado</h3>
            <p className="text-[12px] text-[#6B7480] mt-0.5">Posts extraídos ao vivo desses perfis · curados por relevância para o mercado de design · Abr–Jun 2026</p>
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
          Dados coletados via Chrome · Jun 2026 · Likes refletem engajamento no momento da coleta · atualizar mensalmente
        </div>
      </div>
    </section>
  );
}
