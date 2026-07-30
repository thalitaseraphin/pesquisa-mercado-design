import type { Theme, Fonte } from "./types";

// ============================================================================
// DASHBOARD "TENDÊNCIAS GERAL" — radar de conteúdo para Willian Baldan
// ----------------------------------------------------------------------------
// Este arquivo é a fonte de dados do dashboard /tendencias.
// A atualização diária (RAG) deve ANEXAR novos objetos FeedItem aos arrays
// `items` de cada tema abaixo — marcando `isNew: true` nos itens do dia — e
// atualizar LATEST_DATE. Ver: docs/superpowers/specs/2026-07-30-dashboard-...
//
// Os itens marcados com tag "Exemplo" são ilustrativos (mostram o formato do
// card e dos ganchos de conteúdo). Podem ser removidos assim que o RAG começar
// a preencher com itens reais.
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
        date: "30/07/2026",
        title: "Novo modelo de IA generativa promete criar páginas de venda a partir de um prompt",
        summary:
          "<strong>Exemplo ilustrativo</strong> — ferramentas de IA seguem invadindo o fluxo de quem faz lançamento: da copy ao design da página, tudo a partir de uma descrição. Substitua este item pelo lançamento real do dia.",
        tag: "Exemplo",
        hook: "Reels 'testei a IA que monta página de vendas sozinha' — mostre o antes/depois e conecte ao seu método de lançamento pago.",
        isNew: true,
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
        date: "30/07/2026",
        title: "Formato de vídeo curto 'documentário de bastidor' cresce entre criadores",
        summary:
          "<strong>Exemplo ilustrativo</strong> — tendências de formato e narrativa que o especialista pode adaptar. Substitua pela tendência real capturada no dia.",
        tag: "Exemplo",
        hook: "Transforme o bastidor do seu próximo lançamento em uma série de Stories no estilo 'documentário'.",
        isNew: true,
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
        title: "Case de lançamento fatura 7 dígitos com estrutura enxuta",
        summary:
          "<strong>Exemplo ilustrativo</strong> — cases de vendas e empreendedorismo digital que rendem conteúdo educacional. Substitua pelo case real do dia.",
        tag: "Exemplo",
        hook: "Post carrossel dissecando a estrutura do lançamento — 'o que eu faria diferente'.",
        isNew: true,
      },
    ],
  },
  {
    id: "politica",
    icon: "🏛️",
    label: "Política",
    description: "Movimentos e pautas com impacto em economia, consumo e opinião pública",
    items: [],
  },
  {
    id: "luta",
    icon: "🥊",
    label: "Universo da Luta (UFC/MMA/Boxe)",
    description: "Cards, resultados, narrativas e ganchos do esporte de combate",
    items: [
      {
        date: "30/07/2026",
        title: "Próximo card de UFC promete revanche aguardada",
        summary:
          "<strong>Exemplo ilustrativo</strong> — o universo da luta é fonte rica de metáforas de superação, disciplina e virada. Substitua pelo evento/resultado real do dia.",
        tag: "UFC · Exemplo",
        hook: "Reels conectando a mentalidade do lutador antes da revanche com a persistência de quem empreende.",
        isNew: true,
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
        date: "30/07/2026",
        title: "Estética 'handmade' volta a performar contra o visual polido de IA",
        summary:
          "<strong>Exemplo ilustrativo</strong> — tendências de design que impactam criativos e páginas de venda. Substitua pela tendência real do dia.",
        tag: "Exemplo",
        hook: "Atualize a identidade visual do seu próximo lançamento com elementos mais 'humanos' e teste o engajamento.",
        isNew: true,
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
    label: "TechCrunch",
    url: "https://techcrunch.com/",
    desc: "Tecnologia, IA e movimentos de mercado",
  },
  {
    label: "Exame / InfoMoney",
    url: "https://exame.com/",
    desc: "Negócios, economia e empreendedorismo (BR)",
  },
  {
    label: "UFC.com",
    url: "https://www.ufc.com/",
    desc: "Cards, resultados e notícias do MMA",
  },
];
