"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

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
    ],
  },
];

const changelog = [
  {
    date: "19/06/2026",
    text: "Anúncios & Campanhas em Alta com exemplos ao vivo por mercado (BR, EUA, ES, MX), formatos, hooks e influencers.",
    isNew: true,
  },
  {
    date: "Maio 2026",
    text: "Versão base do Mapa de Mercado — 13 seções, 71 fontes validadas.",
    isNew: false,
  },
];

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  const [activeId, setActiveId] = useState("panorama");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const allIds = navGroups.flatMap((g) =>
      g.links.map((l) => l.href.slice(1))
    );

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
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

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={onClose}
        />
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
          <div className="mt-2.5 inline-block text-[10px] font-bold text-black bg-white px-2.5 py-0.5 rounded-full">
            Atualizado: 19/06/2026
          </div>
        </div>

        {/* Nav */}
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
                        onClick={() => {
                          setActiveId(id);
                          onClose();
                        }}
                        className={[
                          "flex items-center gap-2.5 px-[22px] py-2 text-[13px] no-underline",
                          "border-l-[3px] transition-all duration-150 whitespace-nowrap overflow-hidden",
                          isActive
                            ? "text-white border-white bg-white/10 font-bold"
                            : "text-white/72 border-transparent hover:text-white hover:bg-white/6",
                        ].join(" ")}
                      >
                        <span className="text-[13px] w-4 flex-shrink-0">
                          {link.icon}
                        </span>
                        {link.label}
                      </a>
                    );
                  })}
                </nav>
              </div>
            ))}
          </div>

          {/* Changelog */}
          <div className="mt-auto border-t border-white/10 px-[22px] pt-[18px] pb-5">
            <div className="text-[10px] font-extrabold tracking-[0.8px] uppercase text-white/50 mb-3.5 flex items-center gap-1.5">
              🕓 Linha do Tempo
            </div>
            <div className="flex flex-col gap-0 max-h-[260px] overflow-y-auto">
              {changelog.map((item, i) => (
                <div
                  key={i}
                  className={[
                    "relative pl-[18px] border-l pb-4",
                    item.isNew
                      ? "border-white/18"
                      : "border-transparent pb-0.5",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "absolute left-[-4px] top-[3px] w-2 h-2 rounded-full",
                      item.isNew
                        ? "bg-white"
                        : "bg-[#161A22] border-[1.5px] border-white/50",
                    ].join(" ")}
                  />
                  <div className="text-[11px] font-extrabold text-white">
                    {item.date}
                  </div>
                  <div className="text-[10.5px] leading-[1.5] text-white/62 mt-1">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollArea>

        {/* Sources link */}
        <div className="px-[22px] py-4 border-t border-white/10 flex-shrink-0">
          <a
            href="#fontes"
            className="text-[11px] text-white/55 no-underline font-semibold hover:text-white transition-colors"
            onClick={onClose}
          >
            📋 Ver 71 fontes →
          </a>
        </div>
      </aside>
    </>
  );
}
