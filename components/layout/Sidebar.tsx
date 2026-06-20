"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useReportDate } from "@/context/ReportDateContext";

const navGroups = [
  {
    label: "Leitura",
    links: [
      { href: "#novidades", icon: "📰", label: "Novidades & Notícias" },
      { href: "#identidade", icon: "🎨", label: "Identidade Visual & IA" },
      { href: "#forum", icon: "🔥", label: "Em Alta nos Fóruns" },
      { href: "#anuncios", icon: "📣", label: "Anúncios em Alta" },
      { href: "#insights", icon: "💡", label: "Insights & Atenção" },
      { href: "#tarefas", icon: "✅", label: "Tarefas — Aplicar Agora" },
    ],
  },
  {
    label: "Panorama",
    links: [
      { href: "#panorama", icon: "🌍", label: "Panorama Global" },
      { href: "#brasil", icon: "🇧🇷", label: "Mercado Brasileiro" },
      { href: "#remuneracao", icon: "💰", label: "Remuneração" },
      { href: "#aprendizado", icon: "📚", label: "Como Estudam" },
    ],
  },
  {
    label: "Estratégia",
    links: [
      { href: "#personas", icon: "👥", label: "Personas" },
      { href: "#oportunidades", icon: "🎯", label: "Oportunidades" },
      { href: "#modelos", icon: "💼", label: "Modelos de Negócio" },
    ],
  },
  {
    label: "Growth",
    links: [
      { href: "#canais", icon: "📢", label: "Canais de Aquisição" },
      { href: "#compra", icon: "🛒", label: "Comportamento de Compra" },
      { href: "#competitivo", icon: "⚔️", label: "Cenário Competitivo" },
    ],
  },
  {
    label: "Inovação",
    links: [
      { href: "#ferramentas", icon: "🔧", label: "Radar de Ferramentas" },
      { href: "#internacional", icon: "🌐", label: "Mercado Internacional" },
      { href: "#emergentes", icon: "🌱", label: "Mercados Emergentes" },
    ],
  },
  {
    label: "Pesquisa",
    links: [
      { href: "#estudos", icon: "🔬", label: "Estudos & Sinais" },
      { href: "#fontes", icon: "📋", label: "71 Fontes Validadas" },
    ],
  },
];

// Relatórios disponíveis — cada entrada representa um dia de pesquisa
const reports = [
  {
    date: "19/06/2026",
    label: "19 Jun 2026",
    summary: "23 seções · Estudos Sequoia/WGSN · Mercados Emergentes · Hooks com vídeos",
    isLatest: true,
  },
  {
    date: "01/05/2026",
    label: "Mai 2026",
    summary: "Versão base · 13 seções · 71 fontes validadas",
    isLatest: false,
  },
];

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const [activeId, setActiveId] = useState("panorama");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { selectedDate, setSelectedDate } = useReportDate();

  useEffect(() => {
    const allIds = navGroups.flatMap((g) => g.links.map((l) => l.href.slice(1)));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const toggleDate = (date: string) => {
    setSelectedDate(selectedDate === date ? "" : date);
  };

  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={onClose} />
      )}

      <aside
        className={[
          "fixed top-0 left-0 w-[272px] h-screen z-50 flex flex-col",
          "bg-[#161A22] border-r border-black",
          "transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        ].join(" ")}
      >
        {/* Logo */}
        <div className="px-[22px] pt-6 pb-5 border-b border-white/10 flex-shrink-0">
          <div className="text-[15px] font-extrabold text-white tracking-[-0.4px]">
            Mapa de Mercado
          </div>
          <div className="text-[11px] text-white/50 mt-1">
            Mercado de Design · 2026
          </div>
          <div className="flex items-center gap-2 mt-2.5 flex-wrap">
            <span className="text-[10px] font-bold text-black bg-white px-2.5 py-0.5 rounded-full">
              Atualizado: 19/06/2026
            </span>
            {selectedDate && (
              <span className="text-[10px] font-bold text-[#2563EB] bg-[#E9F0FE] border border-[#CFE0FB] px-2 py-0.5 rounded-full flex items-center gap-1">
                📅 {selectedDate}
                <button
                  onClick={() => setSelectedDate("")}
                  className="ml-0.5 text-[#6B7480] hover:text-[#1A1D24] font-extrabold leading-none"
                  title="Limpar filtro"
                >×</button>
              </span>
            )}
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="pb-4">
            {navGroups.map((group) => (
              <div key={group.label}>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-[1.3px] px-[22px] pt-[18px] pb-1.5">
                  {group.label}
                </div>
                <nav>
                  {group.links.map((link) => {
                    const id = link.href.slice(1);
                    const isActive = activeId === id;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => { setActiveId(id); onClose(); }}
                        className={[
                          "flex items-center gap-2.5 px-[22px] py-2 text-[13px] no-underline",
                          "border-l-[3px] transition-all duration-150 whitespace-nowrap overflow-hidden",
                          isActive
                            ? "text-white border-white bg-white/10 font-bold"
                            : "text-white/72 border-transparent hover:text-white hover:bg-white/6",
                        ].join(" ")}
                      >
                        <span className="text-[13px] w-4 flex-shrink-0">{link.icon}</span>
                        {link.label}
                      </a>
                    );
                  })}
                </nav>
              </div>
            ))}
          </div>

          {/* Relatórios por data — seletor */}
          <div className="border-t border-white/10 px-[22px] pt-[18px] pb-5">
            <div className="flex items-center justify-between mb-3">
              <div className="text-[10px] font-extrabold tracking-[0.8px] uppercase text-white/50">
                📅 Relatórios por data
              </div>
              {selectedDate && (
                <button
                  onClick={() => setSelectedDate("")}
                  className="text-[10px] font-bold text-white/40 hover:text-white transition-colors"
                >
                  ver todos
                </button>
              )}
            </div>

            <div className="flex flex-col gap-0">
              {reports.map((r) => {
                const isSelected = selectedDate === r.date;
                return (
                  <button
                    key={r.date}
                    onClick={() => toggleDate(r.date)}
                    className={[
                      "relative pl-[18px] border-l pb-4 text-left w-full transition-colors group",
                      isSelected ? "border-white" : "border-white/20 hover:border-white/40",
                    ].join(" ")}
                  >
                    {/* Timeline dot */}
                    <div className={[
                      "absolute left-[-5px] top-[3px] w-2.5 h-2.5 rounded-full border-2 transition-colors",
                      isSelected
                        ? "bg-white border-white"
                        : r.isLatest
                          ? "bg-white/60 border-white/60 group-hover:bg-white group-hover:border-white"
                          : "bg-[#161A22] border-white/40 group-hover:border-white/70",
                    ].join(" ")} />

                    <div className={[
                      "text-[11px] font-extrabold transition-colors flex items-center gap-1.5",
                      isSelected ? "text-white" : "text-white/70 group-hover:text-white",
                    ].join(" ")}>
                      {r.label}
                      {r.isLatest && (
                        <span className="text-[9px] font-extrabold text-black bg-white px-1.5 py-0.5 rounded-full">
                          ATUAL
                        </span>
                      )}
                    </div>
                    <div className={[
                      "text-[10.5px] leading-[1.5] mt-0.5 transition-colors",
                      isSelected ? "text-white/80" : "text-white/40 group-hover:text-white/60",
                    ].join(" ")}>
                      {r.summary}
                    </div>

                    {isSelected && (
                      <div className="mt-1.5 text-[9.5px] font-bold text-[#60A5FA]">
                        ✓ Filtrando por esta data
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollArea>
      </aside>
    </>
  );
}
