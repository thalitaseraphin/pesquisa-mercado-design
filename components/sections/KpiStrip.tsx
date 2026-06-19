const kpis = [
  {
    icon: "🌍",
    value: "USD 59,3B",
    label: "Mercado global de design gráfico (2026)",
    change: "↑ CAGR 7,6% → USD 85,5B em 2031",
    warn: false,
  },
  {
    icon: "🤖",
    value: "91%",
    label: "Designers usando IA semanalmente (2026)",
    change: "↑ era 35% em 2023",
    warn: false,
  },
  {
    icon: "🇧🇷",
    value: "250mil",
    label: "Profissionais de design no Brasil",
    change: "↑ maior crescimento da economia criativa",
    warn: false,
  },
  {
    icon: "📈",
    value: "+144%",
    label: "Crescimento a/a de vagas exigindo skill de IA",
    change: "abr/2026 · UX Design em USD 13,06B",
    warn: true,
  },
];

export default function KpiStrip() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-[68px] max-lg:grid-cols-2 max-sm:grid-cols-2">
      {kpis.map((kpi) => (
        <div
          key={kpi.value}
          className="relative bg-white border border-[#E2E7EF] rounded-[14px] p-[22px] shadow-[0_1px_2px_rgba(16,24,40,0.04)] overflow-hidden transition-all duration-200 hover:shadow-[0_10px_26px_rgba(16,24,40,0.10)] hover:-translate-y-[3px] group"
        >
          <div className="absolute top-0 left-0 w-full h-[3px] bg-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          <div className="text-[17px] mb-2.5">{kpi.icon}</div>
          <div className="text-[30px] font-extrabold tracking-[-1.2px] text-[#2563EB] leading-none mb-[7px]">
            {kpi.value}
          </div>
          <div className="text-[12px] text-[#434A57] mb-2 leading-[1.4] font-medium">
            {kpi.label}
          </div>
          <div className={`text-[11px] flex items-center gap-[3px] font-semibold ${kpi.warn ? "text-[#B45309]" : "text-[#6B7480]"}`}>
            {kpi.change}
          </div>
        </div>
      ))}
    </div>
  );
}
