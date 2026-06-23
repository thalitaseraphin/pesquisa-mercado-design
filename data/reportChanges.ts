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
    date: "23/06/2026",
    label: "23 Jun 2026",
    isLatest: true,
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
