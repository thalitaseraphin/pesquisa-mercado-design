"use client";

import { useEffect, useRef, useState } from "react";
import NicheSwitcher from "@/components/layout/NicheSwitcher";
import { themes, LATEST_DATE } from "@/data/tendencias/content";

interface SidebarProps {
  mobileOpen: boolean;
  onClose: () => void;
}

// Sidebar do dashboard /tendencias. Nav por tema + seletor de nicho.
export default function TendenciasSidebar({ mobileOpen, onClose }: SidebarProps) {
  const [activeId, setActiveId] = useState("emalta");
  const observerRef = useRef<IntersectionObserver | null>(null);

  const navGroups = [
    {
      label: "Hoje",
      links: [
        { href: "#emalta", icon: "📰", label: "Em Alta Hoje" },
        { href: "#ideias", icon: "💡", label: "Ideias de Conteúdo" },
      ],
    },
    {
      label: "Temas",
      links: themes.map((t) => ({ href: `#${t.id}`, icon: t.icon, label: t.label })),
    },
    {
      label: "Base",
      links: [{ href: "#fontes", icon: "📋", label: "Fontes" }],
    },
  ];

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            Tendências Geral
          </div>
          <div className="text-[11px] text-white/50 mt-1">
            Radar de conteúdo · Willian Baldan
          </div>
          <div className="flex items-center gap-2 mt-2.5 flex-wrap">
            <span className="text-[10px] font-bold text-black bg-white px-2.5 py-0.5 rounded-full">
              Atualizado: {LATEST_DATE}
            </span>
          </div>
          <NicheSwitcher />
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
                          "border-l-[3px] transition-all duration-150",
                          isActive
                            ? "text-white border-white bg-white/10 font-bold"
                            : "text-white/70 border-transparent hover:text-white hover:bg-white/6",
                        ].join(" ")}
                      >
                        <span className="text-[13px] w-4 flex-shrink-0 leading-none">{link.icon}</span>
                        <span className="flex-1 truncate min-w-0">{link.label}</span>
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
