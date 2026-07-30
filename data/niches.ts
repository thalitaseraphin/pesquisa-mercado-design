// Registro de nichos (dashboards paralelos). Usado pelo seletor de nicho.

export type Niche = {
  id: string;
  label: string; // nome completo
  short: string; // rótulo curto no seletor
  route: string;
};

export const niches: Niche[] = [
  { id: "design", label: "Mercado de Design", short: "Design", route: "/" },
  { id: "tendencias", label: "Tendências Geral", short: "Tendências", route: "/tendencias" },
];
