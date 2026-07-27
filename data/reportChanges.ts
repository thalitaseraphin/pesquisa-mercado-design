export type SectionChange = {
  id: string;
  label: string;
  icon: string;
  newCount: number;
  highlights: string[];
};

export type ReportChange = {
  date: string;
  label: string;
  isLatest: boolean;
  summary: string;
  changes: SectionChange[];
};

export const reportChanges: ReportChange[] = [
  {
    date: "26/07/2026",
    label: "26 Jul 2026",
    isLatest: true,
    summary: "Autodesk 2026 AI Jobs Report: vagas de IA em Design & Make +147% em 2 anos · PwC Global AI Jobs Barometer: prêmio salarial de skills de IA sobe pra 62% · UX Tools Survey 2026: Figma usado por 82,3% dos designers de UI · Canva atinge 265M usuários ativos mensais e US$4B em ARR",
    changes: [
      {
        id: "novidades",
        label: "Novidades & Notícias",
        icon: "📰",
        newCount: 4,
        highlights: [
          "Autodesk: vagas de IA em Design & Make +147% em 2 anos",
          "PwC: prêmio salarial de skills de IA sobe pra 62% (era 25% em 2024)",
          "UX Tools Survey: Figma usado por 82,3% dos designers de UI",
          "Canva: 265M usuários ativos mensais, US$4B em ARR",
        ],
      },
    ],
  },
  {
    date: "24/07/2026",
    label: "24 Jul 2026",
    isLatest: false,
    summary: "Clutch.co: 88% das empresas usam IA no design, mas só 18% reduziram contratação de designers · Creative Boom: 69% dos criativos relatam burnout e só 10% veem a IA como positiva pra indústria · Mordor Intelligence mapeia o 'User Experience Market' (US$13,58B em 2026) · Figma fecha Q1 fiscal 2026 com receita +46% a/a",
    changes: [
      {
        id: "novidades",
        label: "Novidades & Notícias",
        icon: "📰",
        newCount: 5,
        highlights: [
          "Clutch: 47% das empresas aumentaram orçamento de design em 2026",
          "Creative Boom: 69% dos criativos relatam burnout no último ano",
          "Mordor Intelligence: novo segmento 'User Experience Market' (US$13,58B)",
          "Figma: receita do Q1 fiscal 2026 cresce 46% a/a, NDR em 139%",
          "Business Research Insights revisa mercado de design gráfico e serviços",
        ],
      },
    ],
  },
  {
    date: "23/07/2026",
    label: "23 Jul 2026",
    isLatest: false,
    summary: "Adobe fecha acordo para adquirir a Topaz Labs (upscaling/restauração por IA) · Robert Half 2026: salário inicial de graphic designer nos EUA em US$52k–79,5k · Upwork: freelancers em projetos de IA cobram 44% mais por hora · State of AI Design 2026: designers trocam ChatGPT (88%→65%) por Claude (52%→78%)",
    changes: [
      {
        id: "novidades",
        label: "Novidades & Notícias",
        icon: "📰",
        newCount: 4,
        highlights: [
          "Adobe fecha acordo para adquirir a Topaz Labs",
          "Robert Half 2026: designer júnior em US$52k–79,5k/ano nos EUA",
          "Upwork: freelancers de IA cobram 44% mais por hora",
          "Troca de ferramenta: ChatGPT cai, Claude sobe entre designers",
        ],
      },
    ],
  },
  {
    date: "06/07/2026",
    label: "06 Jul 2026",
    isLatest: false,
    summary: "O pêndulo vira para o lado humano: a Canva declara 2026 o ano do 'Imperfect by Design' · Anti-AI Crafting e serifas 'tortas' viram sinal de autenticidade contra a monocultura visual da IA · Google entra na disputa com o Pics no Workspace (Nano Banana 2) · Adobe expande o Creative Agent por toda a Creative Cloud",
    changes: [
      {
        id: "novidades",
        label: "Novidades & Notícias",
        icon: "📰",
        newCount: 5,
        highlights: [
          "Canva: 2026 é o ano do 'Imperfect by Design'",
          "Monocultura visual da IA: craft humano gera +67% de engajamento",
          "Google entra na disputa com o Pics no Workspace (Nano Banana 2)",
          "Adobe expande o Creative Agent por Photoshop, Premiere e Firefly",
          "State of AI in Design 2026: 91% usam IA toda semana",
        ],
      },
      {
        id: "forum",
        label: "Em Alta nos Fóruns",
        icon: "🔥",
        newCount: 4,
        highlights: [
          "Comunidade abraça a imperfeição ('Imperfect by Design')",
          "'62 mil startups, o mesmo logo swirl': o debate da monocultura",
          "Google Pics: mais um gigante entrando no workflow",
          "Serifas 'tortas' e handmade como assinatura humana",
        ],
      },
      {
        id: "insights",
        label: "Insights & Atenção",
        icon: "💡",
        newCount: 3,
        highlights: [
          "O craft humano virou a defesa contra a commodity da IA",
          "A monocultura visual da IA é uma oportunidade de diferenciação",
          "A ferramenta virou commodity — não construa a oferta nela",
        ],
      },
    ],
  },
  {
    date: "26/06/2026",
    label: "26 Jun 2026",
    isLatest: false,
    summary: "Pós-Config, o foco vira branding na era da IA: convicção e julgamento como o que a IA não copia · logos kinéticos e identidades adaptativas viram expectativa · geradores de logo por IA capturam o tier de entrada · Dylan Field (Figma): 'IA é tailwind, não headwind'",
    changes: [
      {
        id: "novidades",
        label: "Novidades & Notícias",
        icon: "📰",
        newCount: 4,
        highlights: [
          "Dylan Field (Figma): 'IA é tailwind, não headwind'",
          "Branding 2026: o que a IA não consegue copiar",
          "Logos kinéticos e a 'morte do skin-deep'",
          "Geradores de logo por IA miram o tier de entrada",
        ],
      },
      {
        id: "forum",
        label: "Em Alta nos Fóruns",
        icon: "🔥",
        newCount: 4,
        highlights: [
          "Comunidade debate o rótulo 'AI loser' da Figma",
          "Branding: convicção vs. logo gerado por IA",
          "Identidade adaptativa e motion-first como expectativa",
          "Ranking de geradores de logo por IA divide opiniões",
        ],
      },
      {
        id: "insights",
        label: "Insights & Atenção",
        icon: "💡",
        newCount: 3,
        highlights: [
          "A IA comoditizou o logo, não a convicção",
          "Branding 2026 é motion-first e adaptativo",
          "Tier de entrada do branding capturado por IA",
        ],
      },
    ],
  },
  {
    date: "25/06/2026",
    label: "25 Jun 2026",
    isLatest: false,
    summary: "Figma Config 2026 encerra: Code Layers, Motion nativo e Weave entram no canvas · shaders GPU nos planos pagos · plugins de IA por prompt · freelance se bifurca (commodity −28%, especialista em IA +25–60%)",
    changes: [
      {
        id: "novidades",
        label: "Novidades & Notícias",
        icon: "📰",
        newCount: 5,
        highlights: [
          "Config 2026: Code Layers, Motion, Weave e shaders",
          "Figma Motion nativo: timeline, keyframes e export",
          "Code Layers — 'código é material de design'",
          "Shaders GPU chegam aos planos pagos",
          "Freelance se bifurca: commodity cai, IA paga +25–60%",
        ],
      },
      {
        id: "forum",
        label: "Em Alta nos Fóruns",
        icon: "🔥",
        newCount: 4,
        highlights: [
          "Recap do Config 2026: o que muda no dia a dia",
          "Code Layers desafia Cursor no fluxo design→código",
          "Motion nativo: fim do motion como skill à parte?",
          "Upwork: skills de IA dobram de demanda (+109%)",
        ],
      },
      {
        id: "insights",
        label: "Insights & Atenção",
        icon: "💡",
        newCount: 3,
        highlights: [
          "Código vira material de design — fronteira se dissolve",
          "Motion nativo no Figma redesenha a entrega",
          "Bifurcação do freelance: especialista em IA premiado",
        ],
      },
    ],
  },
  {
    date: "24/06/2026",
    label: "24 Jun 2026",
    isLatest: false,
    summary: "State of the Designer 2026 (Figma): 91% dizem que IA melhora o output · Midjourney V8.1 vira padrão + Draft mode · tier commodity dominado por IA · RGD pede IA responsável",
    changes: [
      {
        id: "novidades",
        label: "Novidades & Notícias",
        icon: "📰",
        newCount: 7,
        highlights: [
          "Figma State of the Designer 2026: 91% aprovam IA",
          "Midjourney V8.1 padrão + Draft mode (24 imgs)",
          "Adobe Firefly vira hub de 25+ modelos de IA",
          "Adobe Brand Visibility: marca legível para IA",
          "Mercado cresce a US$78,3B; Figma em 67% das vagas",
          "RGD: diretrizes de IA responsável para 2026",
          "Tier commodity de design dominado por IA",
        ],
      },
      {
        id: "forum",
        label: "Em Alta nos Fóruns",
        icon: "🔥",
        newCount: 4,
        highlights: [
          "Debate sobre o State of the Designer 2026",
          "Midjourney V8.1 + Draft mode na prática",
          "'Trabalho humano vira o novo premium'",
          "RGD e o uso responsável de IA",
        ],
      },
      {
        id: "insights",
        label: "Insights & Atenção",
        icon: "💡",
        newCount: 3,
        highlights: [
          "IA é base do fluxo — diferencial é o julgamento",
          "Tier commodity já é da IA: reposicionar urge",
          "Branding agora inclui ser visível para a IA",
        ],
      },
    ],
  },
  {
    date: "23/06/2026",
    label: "23 Jun 2026",
    isLatest: false,
    summary: "Config 2026 abre hoje · Canva + Gemini ubíquo · alarme sobre IA-graphics · design skill #1 em vagas de IA",
    changes: [
      {
        id: "novidades",
        label: "Novidades & Notícias",
        icon: "📰",
        newCount: 5,
        highlights: [
          "Figma Config 2026 abre hoje em SF",
          "Figma Make + design agent ganham web search",
          "Canva + Gemini: IA-design vira ubíquo",
          "Empresas trocam design por IA-graphics",
          "Design skill é a #1 em vagas de IA",
        ],
      },
      {
        id: "forum",
        label: "Em Alta nos Fóruns",
        icon: "🔥",
        newCount: 4,
        highlights: [
          "Config 2026 dia 1: o que esperar do keynote",
          "Canva ubíquo: o que vale a expertise?",
          "Designers reagem a IA-graphics 'good enough'",
          "Protesto de estudantes contra IA obrigatória",
        ],
      },
      {
        id: "insights",
        label: "Insights & Atenção",
        icon: "💡",
        newCount: 2,
        highlights: [
          "Design skill virou a competência #1 em IA",
          "'Good enough' como brief: corrida para o fundo",
        ],
      },
    ],
  },
  {
    date: "22/06/2026",
    label: "22 Jun 2026",
    isLatest: false,
    summary: "Figma Config 2026 · Aleph 2.0 · colapso freelance · Canva + Claude",
    changes: [
      {
        id: "novidades",
        label: "Novidades & Notícias",
        icon: "📰",
        newCount: 4,
        highlights: [
          "Figma Weave + Runway Aleph 2.0",
          "Figma Config 2026 começa 23/06",
          "Canva AI 2.0 + Claude Design editável",
          "Colapso freelance mid-level (Ramp Study)",
        ],
      },
      {
        id: "identidade",
        label: "Identidade Visual & IA",
        icon: "🎨",
        newCount: 2,
        highlights: [
          "IA no rebranding corporativo acelerado",
          "Motion-first como padrão de identidade",
        ],
      },
      {
        id: "forum",
        label: "Em Alta nos Fóruns",
        icon: "🔥",
        newCount: 3,
        highlights: [
          "Debate sobre IA generativa no dia a dia",
          "Canva vs Figma: onde cada um vence",
          "Como precificar no mercado pós-IA",
        ],
      },
      {
        id: "anuncios",
        label: "Anúncios em Alta",
        icon: "📣",
        newCount: 2,
        highlights: [
          "Figma Aleph 2.0 no Weave — direção frame a frame",
          "Adobe Creative Agent no Express",
        ],
      },
      {
        id: "insights",
        label: "Insights & Atenção",
        icon: "💡",
        newCount: 1,
        highlights: [
          "Risco de commoditização do designer executor",
        ],
      },
      {
        id: "emergentes",
        label: "Mercados Emergentes",
        icon: "🌱",
        newCount: 2,
        highlights: [
          "Motion + vídeo curto como serviço",
          "Vibe Coding para designers não-dev",
        ],
      },
      {
        id: "estudos",
        label: "Estudos & Sinais",
        icon: "🔬",
        newCount: 3,
        highlights: [
          "Ramp — Payrolls to Prompts (fev/2026)",
          "Figma — Design in the Age of AI",
          "Config 2026: prévia dos anúncios",
        ],
      },
    ],
  },
  {
    date: "19/06/2026",
    label: "19 Jun 2026",
    isLatest: false,
    summary: "91% designers usam IA · identidades vivas · Sequoia/WGSN · hooks de vídeo",
    changes: [
      {
        id: "novidades",
        label: "Novidades & Notícias",
        icon: "📰",
        newCount: 5,
        highlights: [
          "91% dos designers usam IA toda semana",
          "Identidades vivas: logos que mudam por contexto",
          "8 tendências de identidade de marca em 2026",
          "Canva ultrapassa 230M usuários",
          "Adobe Firefly Enterprise",
        ],
      },
      {
        id: "forum",
        label: "Em Alta nos Fóruns",
        icon: "🔥",
        newCount: 4,
        highlights: [
          "Figma AI vs Cursor para UI",
          "Design systems com IA",
          "UX Research automatizado",
          "Vibe coding entra no radar",
        ],
      },
      {
        id: "estudos",
        label: "Estudos & Sinais",
        icon: "🔬",
        newCount: 4,
        highlights: [
          "Sequoia — AI tools adoption report",
          "WGSN Design Futures 2026",
          "Designer Fund AI in Design 2026",
          "State of Motion Design 2026",
        ],
      },
      {
        id: "emergentes",
        label: "Mercados Emergentes",
        icon: "🌱",
        newCount: 3,
        highlights: [
          "Vídeo hooks com menos de 3s",
          "Edtech para designers em alta",
          "SaaS para criadores de conteúdo",
        ],
      },
      {
        id: "panorama",
        label: "Panorama Global",
        icon: "🌍",
        newCount: 2,
        highlights: [
          "Mercado gráfico USD 59,3B (CAGR 7,6%)",
          "UX market USD 13,06B",
        ],
      },
      {
        id: "competitivo",
        label: "Cenário Competitivo",
        icon: "⚔️",
        newCount: 2,
        highlights: [
          "Figma consolida posição com IA nativa",
          "Adobe responde com Creative Agent",
        ],
      },
    ],
  },
];

// Mapa de contagem de novidades por seção, para badges no sidebar
// Chave: id da seção · Valor: contagem de novos itens na data mais recente
export function getNewCountBySectionForDate(date: string): Record<string, number> {
  const report = reportChanges.find((r) => r.date === date);
  if (!report) return {};
  return Object.fromEntries(report.changes.map((c) => [c.id, c.newCount]));
}
