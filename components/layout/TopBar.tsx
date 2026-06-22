"use client";

import Link from "next/link";
import { useReportDate } from "@/context/ReportDateContext";

interface TopBarProps {
  onMenuClick: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  const { historyOpen, setHistoryOpen, selectedDate } = useReportDate();

  return (
    <div className="sticky top-0 z-30 flex items-center justify-between px-11 py-3.5 bg-[#EEF1F6]/85 backdrop-blur-[16px] border-b border-[#E2E7EF] max-md:px-5">
      <div className="text-[13px] font-bold tracking-[-0.2px] text-[#1A1D24]">
        Pesquisa de Mercado · Design
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[11px] px-[11px] py-1 rounded-full border border-[#E2E7EF] font-semibold text-[#434A57] bg-white max-sm:hidden">
          71 fontes
        </span>
        <Link
          href="/paper"
          className="flex items-center gap-1.5 text-[11px] font-semibold px-[11px] py-1 rounded-full border border-[#E2E7EF] bg-white text-[#434A57] hover:bg-[#1A1D24] hover:text-white hover:border-[#1A1D24] transition-all no-underline max-sm:hidden"
          title="Ver briefing diário para compartilhar com o time"
        >
          📄 Briefing
        </Link>

        {/* History toggle */}
        <button
          onClick={() => setHistoryOpen(!historyOpen)}
          className={[
            "flex items-center gap-1.5 text-[11px] font-semibold px-[11px] py-1 rounded-full border transition-all cursor-pointer",
            historyOpen
              ? "bg-[#1A1D24] text-white border-[#1A1D24]"
              : selectedDate
                ? "bg-[#E9F0FE] text-[#1E40AF] border-[#C9DBFB] hover:bg-[#D0E3FD]"
                : "bg-white text-[#434A57] border-[#E2E7EF] hover:border-[#C4CAD5]",
          ].join(" ")}
          title="Ver histórico de relatórios"
        >
          <span className="text-[12px]">📅</span>
          <span className="max-sm:hidden">Histórico</span>
          {selectedDate && !historyOpen && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          )}
        </button>

        <button
          className="md:hidden border border-[#E2E7EF] text-[#434A57] px-2.5 py-1 rounded-md text-[16px] bg-white cursor-pointer"
          onClick={onMenuClick}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>
    </div>
  );
}
