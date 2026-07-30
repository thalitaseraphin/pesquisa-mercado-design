// Tipos do dashboard "Tendências Geral" (Willian Baldan)
// Orientado a dados: a atualização diária via RAG anexa objetos FeedItem aos arrays de cada tema.

export type FeedItem = {
  date: string; // "30/07/2026"
  title: string;
  summary: string; // aceita <strong> (renderizado com dangerouslySetInnerHTML)
  tag?: string; // subtópico (ex: "UFC", "OpenAI")
  source?: { label: string; url: string };
  hook?: string; // gancho de conteúdo para o marketing (posts/vídeos/roteiros)
  isNew?: boolean;
};

export type Theme = {
  id: string; // usado como id da <section> e âncora da sidebar
  icon: string;
  label: string;
  description: string;
  items: FeedItem[];
};

export type Fonte = {
  label: string;
  url: string;
  desc: string;
};
