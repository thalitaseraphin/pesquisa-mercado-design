"use client";

import { useEffect, useRef, useState } from "react";
import { useReportDate } from "@/context/ReportDateContext";
import { getNewCountBySectionForDate } from "@/data/reportChanges";

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

  // Badges: novidades da data mais recente (23/06/2026)
  const newCounts = getNewCountBySectionForDate("23/06/2026");

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
              Atualizado: 23/06/2026
            </span>
            {selectedDate && (
              <span className="text-[10px] font-bold text-[#2563EB] bg-[#E9F0FE] border border-[#CFE0FB] px-2 py-0.5 rounded-full flex items-center gap-1">
                📅 {selectedDate}
                <button
                  onClick={() => setSelectedDate("")}
                  className="ml-0.5 text-[#6B7480] hover:text-white font-extrabold leading-none cursor-pointer"
                  title="Limpar filtro"
                >×</button>
              </span>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:w-[3px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/25 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/40">
          <div className="py-2">
            {navGroups.map((group) => (
              <div key={group.label}>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-[1.3px] px-[22px] pt-[18px] pb-1.5">
                  {group.label}
                </div>
                <nav>
                  {group.links.map((link) => {
                    const id = link.href.slice(1);
                    const isActive = activeId === id;
                    const count = newCounts[id];
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => { setActiveId(id); onClose(); }}
                        className={[
                          "flex items-center gap-2.5 px-[22px] py-2 text-[13px] no-underline",
                          "border-l-[3px] transition-all duration-150",
                          isActive
                            ? "text-white border-white bg-white/10 font-bold"
                            : "text-white/70 border-transparent hover:text-white hover:bg-white/6",
                        ].join(" ")}
                      >
                        <span className="text-[13px] w-4 flex-shrink-0 leading-none">{link.icon}</span>
                        <span className="flex-1 truncate min-w-0">{link.label}</span>
                        {count ? (
                          <span className="flex-shrink-0 text-[9px] font-bold text-[#1E40AF] bg-[#DBEAFE] px-1.5 py-px rounded-full">
                            +{count}
                          </span>
                        ) : null}
                      </a>
                    );
                  })}
                </nav>
              </div>
            ))}
            <div className="h-4" />
          </div>
        </div>
      </aside>
    </>
  );
}
