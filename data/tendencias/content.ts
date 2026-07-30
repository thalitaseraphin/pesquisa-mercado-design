import type { Theme, Fonte } from "./types";

// ============================================================================
// DASHBOARD "TENDÊNCIAS GERAL" — radar de conteúdo para Willian Baldan
// ----------------------------------------------------------------------------
// Fonte de dados do dashboard /tendencias.
// A atualização diária (RAG) deve ANEXAR novos objetos FeedItem aos arrays
// `items` de cada tema — marcando `isNew: true` nos itens do dia — e atualizar
// LATEST_DATE. Ver: docs/superpowers/specs/2026-07-30-dashboard-...
//
// Conteúdo inicial: pesquisa web dos últimos ~15 dias (15–30/07/2026).
// Itens auto-pesquisados — confira a fonte antes de publicar conteúdo.
// ============================================================================

export const LATEST_DATE = "30/07/2026";

export const themes: Theme[] = [
  {
    id: "tecnologia",
    icon: "🤖",
    label: "Tecnologia & IA",
    description: "Lançamentos, modelos e ferramentas que mudam o jogo do digital",
    items: [
      {
        date: "27/07/2026",
        title: "Anthropic expande parceria com Cognizant para levar o Claude a grandes empresas",
        summary:
          "A Cognizant virou <strong>Global Premier Partner</strong> da rede do Claude e já treinou <strong>mais de 30 mil funcionários</strong>. Casos citados incluem revisão de contratos <strong>40% mais rápida</strong> e pesquisa de underwriting reduzida de horas para cerca de 1 minuto.",
        tag: "Anthropic",
        source: {
          label: "Cognizant Newsroom — Cognizant and Anthropic expand partnership",
          url: "https://news.cognizant.com/2026-07-27-Cognizant-and-Anthropic-expand-partnership-to-embed-Claude-in-Cognizants-industry-platforms,-helping-clients-close-the-gap-between-AI-promise-and-business-outcomes",
        },
        hook: "Prova social de ROI real ('40% menos tempo', 'de horas para 1 minuto'). Reels sobre usar números concretos de produtividade da IA como argumento de venda — quem mostra resultado mensurável fecha mais que quem só fala de 'tendência'.",
      },
      {
        date: "24/07/2026",
        title: "Meta libera IA agêntica ao consumidor: Muse Spark conecta Gmail e Google Calendar",
        summary:
          "A Meta liberou o <strong>Muse Spark 1.1</strong> no Meta AI, com janela de <strong>1 milhão de tokens</strong> e agentes que planejam viagens, pesquisam por minutos e checam a agenda. A IA agora acessa <strong>Gmail e Google Calendar</strong> e envia alertas recorrentes.",
        tag: "Meta / IA agêntica",
        source: {
          label: "SiliconANGLE — Meta makes Muse Spark 1.1 available to consumers",
          url: "https://siliconangle.com/2026/07/24/meta-makes-muse-spark-1-1-available-consumers-debuts-new-facebook-features/",
        },
        hook: "Agentes que executam tarefas mudam a rotina de quem faz lançamento. Roteiro: 'como montar um assistente de IA que organiza sua semana de campanha'.",
      },
      {
        date: "24/07/2026",
        title: "Meta lança app 'Seller' com criação de anúncios por IA para o Marketplace",
        summary:
          "A Meta apresentou o <strong>Seller</strong>, app para vendedores do Marketplace com <strong>criação de listagens assistida por IA</strong> — geração de copy e sugestões de preço — além do 'Facebook Verified' gratuito via selfie em vídeo.",
        tag: "E-commerce / IA",
        source: {
          label: "SiliconANGLE — Meta debuts new Facebook features",
          url: "https://siliconangle.com/2026/07/24/meta-makes-muse-spark-1-1-available-consumers-debuts-new-facebook-features/",
        },
        hook: "IA gerando copy e precificação sozinha empolga e assusta o pequeno empreendedor. Post: 'a IA já escreve seu anúncio — mas quem domina copy de conversão ainda vende mais'.",
      },
      {
        date: "22/07/2026",
        title: "OpenAI lança plataforma de anúncios dentro do ChatGPT",
        summary:
          "A OpenAI abriu o <strong>'Advertise in ChatGPT'</strong>, um Ads Manager self-service que segmenta pelo <strong>contexto da conversa</strong>, não por palavras-chave. Marcas como <strong>Best Buy, Lowe's e VistaPrint</strong> já rodaram as primeiras campanhas em 7 países.",
        tag: "OpenAI",
        source: {
          label: "explainX — OpenAI 'Advertise in ChatGPT' Ads Launch (July 2026)",
          url: "https://explainx.ai/blog/openai-advertise-in-chatgpt-ads-launch-july-2026",
        },
        hook: "Nasce um novo canal de tráfego pago: anúncios no meio da conversa, no momento da decisão. Reels: 'o que muda no seu funil quando o cliente pesquisa no ChatGPT em vez do Google'.",
      },
    ],
  },
  {
    id: "tendencias",
    icon: "📈",
    label: "Tendências & Cultura",
    description: "O que está viralizando, formatos em alta e mudanças de comportamento",
    items: [
      {
        date: "29/07/2026",
        title: "Google Search Console passa a rastrear Instagram, TikTok, X e YouTube globalmente",
        summary:
          "O Google liberou as <strong>Platform Properties</strong> no Search Console: dá para verificar perfis de Instagram, TikTok, X e YouTube e ver quais buscas levam tráfego aos seus posts — <strong>sem precisar de site próprio</strong>.",
        tag: "Social search",
        source: {
          label: "Search Engine Land — Search Console platform properties globally live",
          url: "https://searchengineland.com/google-search-console-platform-properties-are-now-globally-live-483921",
        },
        hook: "Post e Reels viram ativo de SEO. Reels ensinando a otimizar legenda/bio com palavra-chave para o lançamento aparecer no Google — 'seu perfil virou página indexável'.",
        isNew: true,
      },
      {
        date: "27/07/2026",
        title: "YouTube leva Communities e Shorts para a TV e amplia o Shopping",
        summary:
          "No pacote de julho, o YouTube trouxe <strong>Communities no desktop</strong>, uma superfície dedicada de <strong>Shorts na TV</strong> e a expansão do programa de afiliados Shopping.",
        tag: "YouTube",
        source: {
          label: "Quasa — YouTube's July 2026 Updates",
          url: "https://quasa.io/media/youtube-s-july-2026-updates-communities-tv-shorts-shopping-and-thumbnails",
        },
        hook: "Shorts na TV muda o consumo (som e capa importam mais). Post sobre repensar o vertical pensando em 'quem assiste no sofá' e usar Communities para aquecer lançamento.",
      },
      {
        date: "24/07/2026",
        title: "YouTube libera thumbnail personalizada para Shorts após 2 anos de espera",
        summary:
          "Neal Mohan anunciou que a <strong>thumbnail customizada para Shorts</strong> está chegando a todos os criadores do Partner Program (por ora só no desktop) — recurso que o YouTube havia recusado em 2024.",
        tag: "YouTube",
        source: {
          label: "Tubefilter — YouTube adds custom thumbnails on Shorts",
          url: "https://www.tubefilter.com/2026/07/24/youtube-shorts-custom-thumbnails-neal-mohan-feature-update/",
        },
        hook: "A capa vende antes do vídeo: como padronizar thumbnails para reforçar marca e conversão em séries de lançamento.",
      },
      {
        date: "24/07/2026",
        title: "Instagram adiciona rótulos 'AI Info', música em qualquer post e banner de contato",
        summary:
          "A leva de julho do Instagram inclui <strong>rótulos 'AI Info' em todos os posts</strong>, opção de música em qualquer publicação e testes de banner com <strong>horário comercial e contato</strong> no perfil.",
        tag: "Instagram",
        source: {
          label: "SocialBee — 2026 Instagram updates and features",
          url: "https://socialbee.com/blog/instagram-updates/",
        },
        hook: "Transparência de IA no feed é assunto quente. Reels: 'como usar IA sem perder confiança' + transformar o perfil em ponto de conversão com banner de contato.",
      },
      {
        date: "24/07/2026",
        title: "TikTok cria formato de anúncio 'Mini Dramas' e Media Kits dentro do app",
        summary:
          "O TikTok lançou o formato <strong>Mini Dramas</strong> (microsséries patrocinadas) e passou a permitir que criadores gerem seu próprio <strong>media kit dentro do app</strong> para fechar parcerias.",
        tag: "TikTok",
        source: {
          label: "SocialBee — 2026 TikTok updates and features",
          url: "https://socialbee.com/blog/tiktok-updates/",
        },
        hook: "Microsséries espelham o funil de lançamento (episódios que prendem até o carrinho abrir). Gancho: 'transforme sua campanha numa novela de 5 episódios'.",
      },
    ],
  },
  {
    id: "negocios",
    icon: "💼",
    label: "Negócios & Empreendedorismo",
    description: "Mercado, vendas, cases e movimentos de empresas e criadores",
    items: [
      {
        date: "30/07/2026",
        title: "Shopee cresce 35% no 7.7 e Shein mira IPO de até US$ 50 bi",
        summary:
          "A Shopee liderou o 7.7 com <strong>alta de 35% nas vendas</strong> e ampliou de 16 para 26 centros de distribuição no Brasil. Em paralelo, a Shein busca captar <strong>US$ 2 a 3 bilhões</strong> em um IPO avaliado entre US$ 40 e 50 bilhões.",
        tag: "E-commerce",
        source: {
          label: "Times Brasil / CNBC — Shopee cresce 35% no 7.7; Shein mira IPO",
          url: "https://timesbrasil.com.br/empresas-e-negocios/e-commerce/shopee-centros-distribuicao-brasil-2026-citi/",
        },
        hook: "Datas de pico como o 7.7 provam que campanha com deadline e urgência move volume — igual a um lançamento. Gancho sobre gatilho de escassez e por que 'evento de vendas' converte mais que oferta perene.",
        isNew: true,
      },
      {
        date: "28/07/2026",
        title: "Fórum E-commerce Brasil 2026: Agentic Commerce e receita previsível dominam o 2º semestre",
        summary:
          "A 17ª edição (28–30/07, +45 mil profissionais) elegeu quatro pilares: <strong>Agentic Commerce</strong> (agentes de IA vendendo), hiperpersonalização e retail media, reforma tributária e logística, e multicanal — com foco em <strong>crescimento previsível de receita</strong>.",
        tag: "Tendências",
        source: {
          label: "Joom Pulse — Fórum E-commerce Brasil 2026",
          url: "https://blog.joompulse.com/2026/07/28/forum-ecommerce-brasil-2026-temas-tendencias/",
        },
        hook: "'Receita previsível vs. dependência de picos' é a dor de quem só fatura em lançamento. Conteúdo sobre combinar lançamento com recorrência (comunidade/assinatura).",
        isNew: true,
      },
      {
        date: "15/07/2026",
        title: "Shein e AliExpress disparam no Brasil enquanto varejo tradicional perde usuários",
        summary:
          "Dados do 2T26 mostram a <strong>Shein saltando para 113,1 milhões de usuários ativos (+29%)</strong> e o AliExpress crescendo 28% e ultrapassando o Magalu. No sentido oposto: Magalu -9%, Casas Bahia -27%, Americanas -33%.",
        tag: "E-commerce",
        source: {
          label: "Joom Pulse — Importados no e-commerce Brasil 2026",
          url: "https://blog.joompulse.com/2026/07/15/shein-aliexpress-crescimento-brasil-mercado-livre/",
        },
        hook: "A migração para plataformas com descoberta via rede social reforça o 'social commerce'. Mote: criador e infoprodutor precisam vender onde a atenção está, não onde o cliente 'procura'.",
      },
      {
        date: "14/07/2026",
        title: "Fórum E-commerce Brasil terá espaço inédito só para pequenos negócios",
        summary:
          "Pela primeira vez o Fórum criou o 'Mundo Empreendedor', com <strong>acesso gratuito para até 1.000 empreendedores</strong> e estandes para 20 selecionados, em parceria com o Sebrae.",
        tag: "Empreendedorismo",
        source: {
          label: "Agência Sebrae de Notícias — Espaço inédito para pequenos negócios",
          url: "https://agenciasebrae.com.br/cultura-empreendedora/forum-e-commerce-brasil-2026-tera-espaco-inedito-para-pequenos-negocios/",
        },
        hook: "A audiência dele é feita de pequenos negócios digitais. Gancho: 'o mercado grande finalmente olhou pro pequeno' — e como se posicionar como o especialista que ajuda esse pequeno a vender online.",
      },
    ],
  },
  {
    id: "politica",
    icon: "🏛️",
    label: "Política",
    description: "Pautas com impacto em economia, consumo, negócios e opinião pública",
    items: [
      {
        date: "29/07/2026",
        title: "Inflação desacelera e mercado aposta em corte da Selic na reunião de agosto",
        summary:
          "Com o IPCA-15 em forte desaceleração (0,06% no mês) e deflação em alimentos, cresce a expectativa de que o <strong>Copom reduza a Selic, hoje em 14,25%, na reunião de 4-5 de agosto</strong>. Tarifas dos EUA seguem como risco cambial.",
        tag: "Juros",
        source: {
          label: "O Tempo — Com inflação baixa, Copom vai cortar juros?",
          url: "https://www.otempo.com.br/economia/2026/7/29/com-inflacao-baixa-em-julho-copom-vai-cortar-taxa-de-juros",
        },
        hook: "Juros em queda barateiam crédito e reaquecem consumo — janela para conteúdo sobre timing de investir em tráfego pago e parcelamento no checkout.",
        isNew: true,
      },
      {
        date: "28/07/2026",
        title: "Reforma tributária: acaba a tolerância; campos de IBS e CBS viram obrigatórios",
        summary:
          "Encerra-se o período facultativo dos novos campos de IBS e CBS nos documentos fiscais. A partir de <strong>03/08 não será possível emitir nota no regime regular sem os campos preenchidos</strong>, com alíquota-teste de 1%.",
        tag: "Impostos",
        source: {
          label: "Contábeis — Reforma Tributária: IBS e CBS em Julho/Agosto de 2026",
          url: "https://www.contabeis.com.br/artigos/78019/reforma-tributaria-ibs-e-cbs-em-julho-agosto-de-2026/",
        },
        hook: "Todo empreendedor que emite nota (inclusive infoprodutor com CNPJ) precisa checar o sistema de emissão. Gancho prático de 'não deixe para a virada' sobre ERP e compliance fiscal.",
      },
      {
        date: "24/07/2026",
        title: "Tarifaço dos EUA sobe para 37,5% e atinge um terço das exportações brasileiras",
        summary:
          "EUA confirmaram tarifa de 25% e sobretaxa de 12,5%, ambas em vigor desde 24/07, elevando para <strong>37,5% a tarifa sobre calçados, têxteis, móveis, etanol e máquinas</strong>. Cerca de 35,9% das exportações são afetadas; café, carne e frutas ficaram de fora.",
        tag: "Comércio exterior",
        source: {
          label: "Tax Group — Tarifaço de Trump: o que está em jogo",
          url: "https://www.taxgroup.com.br/intelligence/tarifaco-de-trump-o-que-esta-em-jogo-entre-brasil-e-eua/",
        },
        hook: "Choque externo mexe com câmbio e preços — gancho sobre precificar em dólar, custo de SaaS importado e por que diversificar receita reduz dependência de um só fornecedor.",
      },
      {
        date: "16/07/2026",
        title: "Brasil adere à aliança global de IA liderada pela China (WAICO)",
        summary:
          "Brasil e outros 28 países assinaram, em 16/07, a criação da <strong>Organização Mundial de Cooperação em IA (WAICO), com sede em Xangai</strong>. O Marco Legal da IA segue travado no Congresso.",
        tag: "Regulação de IA",
        source: {
          label: "Exame — Brasil assina acordo para órgão global de cooperação em IA",
          url: "https://exame.com/inteligencia-artificial/brasil-e-outros-28-paises-assinam-acordo-para-criacao-de-orgao-global-de-cooperacao-em-ia/",
        },
        hook: "A regra de IA que sair daqui vai definir o que pode em anúncios, deepfakes e uso de dados — conteúdo sobre usar IA em campanhas de forma sustentável.",
      },
    ],
  },
  {
    id: "luta",
    icon: "🥊",
    label: "Universo da Luta (UFC/MMA/Boxe)",
    description: "Cards, resultados, narrativas e ganchos do esporte de combate",
    items: [
      {
        date: "25/07/2026",
        title: "Ankalaev finaliza Guskov no 5º round e reforça topo dos meio-pesados",
        summary:
          "Magomed Ankalaev venceu <strong>Bogdan Guskov</strong> por TKO no 5º round no UFC Abu Dhabi. Passou quatro rounds pacientes com chutes e só no fim mudou para o wrestling.",
        tag: "UFC",
        source: {
          label: "Forbes — UFC Abu Dhabi Results",
          url: "https://www.forbes.com/sites/brianmazique/2026/07/25/ufc-abu-dhabi-results-bonuses-and-highlights/",
        },
        hook: "Construir vantagem antes de atacar é o que separa um lançamento sustentável de uma aposta de sorte.",
      },
      {
        date: "25/07/2026",
        title: "Brasileiro Valter Walker finaliza em 1 minuto e emplaca 5ª vitória seguida",
        summary:
          "Valter Walker precisou de <strong>pouco mais de um minuto</strong> para finalizar Thomas Petersen com um calf slicer no UFC Abu Dhabi, somando a quinta vitória consecutiva.",
        tag: "MMA",
        source: {
          label: "Forbes — UFC Abu Dhabi Results",
          url: "https://www.forbes.com/sites/brianmazique/2026/07/25/ufc-abu-dhabi-results-bonuses-and-highlights/",
        },
        hook: "Cinco vitórias seguidas nascem de repetição obsessiva do mesmo fundamento até virar reflexo — o especialista que treinou o mesmo funil até fechar em um minuto.",
      },
      {
        date: "25/07/2026",
        title: "Tim Tszyu vence Errol Spence Jr. e empurra ex-campeão para a aposentadoria",
        summary:
          "Diante da torcida em Sydney, <strong>Tim Tszyu</strong> venceu Spence por decisão unânime no peso médio. Após a derrota, Spence anunciou a aposentadoria.",
        tag: "Boxe",
        source: {
          label: "CBS Sports — Errol Spence vs. Tim Tszyu results",
          url: "https://www.cbssports.com/boxing/news/errol-spence-vs-tim-tszyu-fight-live-updates-results-scorecard/live/",
        },
        hook: "Tszyu se reconstruiu depois de derrotas duras; Spence soube a hora de parar. Dá para dar a volta por cima após o fracasso — mas também é preciso saber quando encerrar um ciclo.",
      },
      {
        date: "18/07/2026",
        title: "Du Plessis vence Usman por decisão unânime no UFC Oklahoma City",
        summary:
          "Dricus Du Plessis dominou <strong>Kamaru Usman</strong> e venceu por decisão unânime. No card, a brasileira Tabatha Ricci bateu Fatima Kline.",
        tag: "UFC",
        source: {
          label: "ESPN MMA — UFC Fight Night: Du Plessis vs. Usman",
          url: "https://www.espn.com/mma/fightcenter/_/id/600059599/league/ufc",
        },
        hook: "Cinco rounds controlando a distância antes de fechar: virada não é explosão, é gestão de ritmo até o placar cair a seu favor.",
      },
    ],
  },
  {
    id: "design",
    icon: "🎨",
    label: "Design & Criação",
    description: "Tendências visuais, ferramentas criativas e referências de marca",
    items: [
      {
        date: "28/07/2026",
        title: "FTC libera antecipadamente a compra da Topaz Labs pela Adobe",
        summary:
          "A FTC concedeu a terminação antecipada do prazo antitruste, permitindo a Adobe fechar a aquisição da <strong>Topaz Labs</strong> — IA premiada de upscaling e realce de imagem/vídeo — para o ecossistema Firefly e Creative Cloud.",
        tag: "Adobe",
        source: {
          label: "Seeking Alpha — Adobe receives early termination notice from FTC for Topaz",
          url: "https://seekingalpha.com/news/4620549-adobe-receives-early-termination-notice-from-ftc-for-topaz-acquisition",
        },
        hook: "Upscaling profissional chegando ao Firefly: salvar fotos de produto ruins, ampliar prints e deixar criativos de anúncio nítidos sem refazer a arte.",
        isNew: true,
      },
      {
        date: "15/07/2026",
        title: "Canva libera o Code 2.0 para todos os usuários (inclusive plano grátis)",
        summary:
          "A Canva liberou o <strong>Canva Code 2.0</strong> para todos os planos: criar sites, apps e experiências interativas por prompt, editar visualmente e <strong>importar HTML</strong> de outras ferramentas de IA. Publicação em domínio próprio ou grátis.",
        tag: "Canva",
        source: {
          label: "VentureBeat — Canva launches Code 2.0",
          url: "https://venturebeat.com/technology/canva-launches-code-2-0-offering-ai-website-building-to-every-user-including-free-accounts",
        },
        hook: "Montar páginas de captura e mini-apps de lançamento sem dev: gere por prompt, ajuste no editor visual e publique. Ótimo para testar variações de página de venda.",
      },
      {
        date: "15/07/2026",
        title: "Google leva geração de imagem por IA (Nano Banana) para o AI Overviews",
        summary:
          "O <strong>AI Overviews passa a gerar imagens originais por IA</strong> a partir do texto do usuário (modelo Nano Banana), em vez de linkar uma foto existente — sem clique de saída e sem atribuição.",
        tag: "IA / Busca",
        source: {
          label: "Digital Applied — Google AI Overviews Now Generates Images",
          url: "https://www.digitalapplied.com/blog/google-ai-overviews-image-generation-brand-visuals-2026",
        },
        hook: "Se a busca desenha a própria imagem do seu nicho, sua identidade visual precisa ser forte fora do Google. Reforça criativos com marca inconfundível que não se diluem em imagem genérica de IA.",
      },
      {
        date: "15/07/2026",
        title: "Figma inicia liberação dos Code Layers (design vira código de verdade)",
        summary:
          "Os <strong>Code Layers</strong> começaram a ser liberados: convertem uma camada de design em código interativo com um clique/prompt, com edição lado a lado. Junto vieram Motion nativo (timeline/keyframes) e shaders com IA.",
        tag: "Figma",
        source: {
          label: "CMSWire — Figma Launches Code Layers & Motion at Config 2026",
          url: "https://www.cmswire.com/digital-experience/figma-launches-code-layers-motion-at-config-2026/",
        },
        hook: "Para quem prototipa páginas de venda: o Motion nativo permite testar micro-animações de CTA antes de codar, e os Code Layers encurtam a ponte design-para-web.",
      },
    ],
  },
];

export const fontes: Fonte[] = [
  {
    label: "@willianbaldan (Instagram)",
    url: "https://www.instagram.com/willianbaldan/",
    desc: "Perfil do especialista — referência de tom e público",
  },
  {
    label: "SiliconANGLE / VentureBeat",
    url: "https://siliconangle.com/",
    desc: "Tecnologia, IA e lançamentos de big techs",
  },
  {
    label: "Exame",
    url: "https://exame.com/",
    desc: "Negócios, economia e regulação (BR)",
  },
  {
    label: "Search Engine Land",
    url: "https://searchengineland.com/",
    desc: "Busca, SEO e novidades de plataformas sociais",
  },
  {
    label: "ESPN MMA / UFC.com",
    url: "https://www.espn.com/mma/",
    desc: "Resultados e cards de UFC, MMA e boxe",
  },
];
