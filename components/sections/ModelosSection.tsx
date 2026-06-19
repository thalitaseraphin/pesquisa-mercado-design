"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

const models = [
  { cat: "red", dot: "#111111", name: "Freela por projeto tradicional", revenue: "Variável · commodity", barrier: "Barreira: baixa", badge: "b-red", badgeText: "Saturado" },
  { cat: "red", dot: "#111111", name: "Pacotes de social media", revenue: "R$800–2.500/mês", barrier: "Barreira: baixa", badge: "b-red", badgeText: "Saturado" },
  { cat: "red", dot: "#111111", name: "Cursos gravados genéricos", revenue: "R$97–497", barrier: "Barreira: baixa", badge: "b-red", badgeText: "Saturado" },
  { cat: "red", dot: "#111111", name: "Plataformas de freela (Upwork, 99freelas)", revenue: "Competição por preço", barrier: "Barreira: baixa", badge: "b-red", badgeText: "Saturado" },
  { cat: "yellow", dot: "#888888", name: "Serviços productizados (escopo fixo)", revenue: "R$3.500–15.000/projeto", barrier: "Barreira: média", badge: "b-yellow", badgeText: "Em expansão" },
  { cat: "yellow", dot: "#888888", name: "Retainer de gestão de marca", revenue: "R$2k–6k/mês recorrente", barrier: "Barreira: média", badge: "b-yellow", badgeText: "Em expansão" },
  { cat: "yellow", dot: "#888888", name: "Eventos ao vivo / workshops", revenue: "R$500–2.000/ingresso", barrier: "Barreira: média", badge: "b-yellow", badgeText: "Em expansão" },
  { cat: "yellow", dot: "#888888", name: "White label para agências", revenue: "Margem 40–60%", barrier: "Barreira: média", badge: "b-yellow", badgeText: "Em expansão" },
  { cat: "yellow", dot: "#888888", name: "Comunidade paga (Discord/Slack)", revenue: "R$50–150/mês × membros", barrier: "Barreira: média", badge: "b-yellow", badgeText: "Em expansão" },
  { cat: "green", dot: "#CFCFCF", name: "Licenciamento de assets (fontes/templates)", revenue: "USD 1k–10k+/mês passivo", barrier: "Barreira: baixa-média", badge: "b-green", badgeText: "Subexplorado" },
  { cat: "green", dot: "#CFCFCF", name: "Design + no-code entregue (Webflow/Framer)", revenue: "+40% por projeto", barrier: "Barreira: média", badge: "b-green", badgeText: "Subexplorado" },
  { cat: "green", dot: "#CFCFCF", name: "Afiliação de ferramentas (Adobe, Figma...)", revenue: "USD 500–2k/mês passivo", barrier: "Barreira: muito baixa", badge: "b-green", badgeText: "Subexplorado" },
  { cat: "green", dot: "#CFCFCF", name: "Especialização vertical premium", revenue: "+40–60% vs. generalista", barrier: "Barreira: baixa", badge: "b-green", badgeText: "Subexplorado" },
  { cat: "green", dot: "#CFCFCF", name: "Equity partnership com startups", revenue: "1–8% equity (pré-seed)", barrier: "Barreira: alta", badge: "b-green", badgeText: "Subexplorado" },
  { cat: "green", dot: "#CFCFCF", name: "Micro-SaaS para designers", revenue: "USD 5k–50k+ MRR", barrier: "Barreira: média (com IA)", badge: "b-green", badgeText: "Subexplorado" },
];

const badgeStyle: Record<string, string> = {
  "b-red": "bg-[#FEF2F2] text-[#B91C1C] border border-[#FAD1D1]",
  "b-yellow": "bg-[#FFF7ED] text-[#9A3412] border border-[#F5DCBE]",
  "b-green": "bg-[#ECFDF5] text-[#066E4C] border border-[#BBE9D2]",
};

const filters = [
  { id: "all", label: "Todos" },
  { id: "red", label: "🔴 Saturados" },
  { id: "yellow", label: "🟡 Em expansão" },
  { id: "green", label: "🟢 Subexplorados" },
];

export default function ModelosSection() {
  const [active, setActive] = useState("all");

  const visible = models.filter((m) => active === "all" || m.cat === active);

  return (
    <section id="modelos" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="💼"
        part="Parte 8"
        title="Modelos de Negócio"
        description="Do saturado ao subexplorado — com dados de mercado validados"
      />

      <div className="flex gap-2 mb-4 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={[
              "px-[15px] py-1.5 rounded-full text-[12px] font-semibold cursor-pointer border transition-all duration-150",
              active === f.id
                ? "border-[#2563EB] bg-[#2563EB] text-white"
                : "border-[#D2D9E4] bg-white text-[#434A57] hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white",
            ].join(" ")}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="bg-white border border-[#E2E7EF] rounded-xl overflow-hidden">
        {visible.map((m) => (
          <div key={m.name} className="flex items-center gap-3 px-5 py-3.5 border-b border-[#E2E7EF] last:border-b-0 hover:bg-[#FAFAFA] transition-colors">
            <div className="w-2 h-2 rounded-full flex-shrink-0 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)]" style={{ background: m.dot }} />
            <div className="text-[13px] font-semibold text-[#1A1D24] flex-1">{m.name}</div>
            <div className="text-[12px] text-[#434A57] w-[150px]">{m.revenue}</div>
            <div className="text-[11px] text-[#6B7480] w-[100px]">{m.barrier}</div>
            <div className="w-[80px] text-right">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${badgeStyle[m.badge]}`}>{m.badgeText}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3">
        Fontes: Creative Market · Envato · Sacra · Colorlib · IdeaProof · Startups.com · Amra &amp; Elma · ProtoPie · Adobe
      </div>
    </section>
  );
}
