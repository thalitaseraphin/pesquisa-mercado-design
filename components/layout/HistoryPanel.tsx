"use client";

import { useReportDate } from "@/context/ReportDateContext";
import { reportChanges } from "@/data/reportChanges";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function HistoryPanel() {
  const { historyOpen, setHistoryOpen, selectedDate, setSelectedDate } = useReportDate();

  const selectDate = (date: string) => {
    setSelectedDate(selectedDate === date ? "" : date);
  };

  return (
    <>
      {/* Backdrop mobile */}
      {historyOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setHistoryOpen(false)}
        />
      )}

      <aside
        className={[
          "fixed top-0 right-0 w-[272px] h-screen z-50 flex flex-col",
          "bg-white border-l border-[#E2E7EF]",
          "transition-transform duration-300 ease-in-out",
          historyOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* Header */}
        <div className="px-5 pt-5 pb-4 border-b border-[#E2E7EF] flex-shrink-0 flex items-start justify-between">
          <div>
            <div className="text-[14px] font-extrabold text-[#1A1D24] tracking-[-0.3px]">
              Histórico
            </div>
            <div className="text-[11px] text-[#6B7480] mt-0.5">
              Novidades por relatório
            </div>
          </div>
          <button
            onClick={() => setHistoryOpen(false)}
            className="text-[#6B7480] hover:text-[#1A1D24] transition-colors text-[18px] leading-none mt-0.5"
            aria-label="Fechar histórico"
          >
            ×
          </button>
        </div>

        <ScrollArea className="flex-1">
          <div className="px-5 py-4 flex flex-col gap-0">
            {reportChanges.map((report, i) => {
              const isSelected = selectedDate === report.date;
              const isLast = i === reportChanges.length - 1;

              return (
                <div key={report.date} className="relative">
                  {/* Timeline line */}
                  {!isLast && (
                    <div className="absolute left-[7px] top-[20px] bottom-0 w-px bg-[#E2E7EF]" />
                  )}

                  <div className="flex gap-3">
                    {/* Timeline dot */}
                    <button
                      onClick={() => selectDate(report.date)}
                      className={[
                        "mt-1 w-3.5 h-3.5 rounded-full border-2 flex-shrink-0 transition-all",
                        isSelected
                          ? "bg-[#2563EB] border-[#2563EB]"
                          : report.isLatest
                            ? "bg-[#1A1D24] border-[#1A1D24] hover:bg-[#2563EB] hover:border-[#2563EB]"
                            : "bg-white border-[#C4CAD5] hover:border-[#2563EB]",
                      ].join(" ")}
                    />

                    <div className="pb-6 flex-1 min-w-0">
                      {/* Date + badge */}
                      <button
                        onClick={() => selectDate(report.date)}
                        className="text-left w-full group"
                      >
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <span className={[
                            "text-[12px] font-extrabold transition-colors",
                            isSelected ? "text-[#2563EB]" : "text-[#1A1D24] group-hover:text-[#2563EB]",
                          ].join(" ")}>
                            {report.label}
                          </span>
                          {report.isLatest && (
                            <span className="text-[9px] font-extrabold text-white bg-[#1A1D24] px-1.5 py-0.5 rounded-full">
                              ATUAL
                            </span>
                          )}
                          {isSelected && (
                            <span className="text-[9px] font-bold text-[#2563EB] bg-[#E9F0FE] px-1.5 py-0.5 rounded-full">
                              ativo
                            </span>
                          )}
                        </div>
                        <div className="text-[10.5px] text-[#6B7480] leading-[1.45]">
                          {report.summary}
                        </div>
                      </button>

                      {/* Section changes */}
                      <div className="mt-2.5 flex flex-col gap-1.5">
                        {report.changes.map((section) => (
                          <div key={section.id} className="group/section">
                            <div className="flex items-start gap-1.5">
                              <span className="text-[11px] flex-shrink-0 mt-px">{section.icon}</span>
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5">
                                  <a
                                    href={`#${section.id}`}
                                    className="text-[11px] font-semibold text-[#434A57] hover:text-[#2563EB] transition-colors no-underline"
                                    onClick={() => setHistoryOpen(false)}
                                  >
                                    {section.label}
                                  </a>
                                  <span className="text-[9px] font-bold text-[#2563EB] bg-[#E9F0FE] px-1.5 py-px rounded-full">
                                    +{section.newCount}
                                  </span>
                                </div>
                                <ul className="mt-0.5 flex flex-col gap-px">
                                  {section.highlights.map((h, j) => (
                                    <li
                                      key={j}
                                      className="text-[10px] text-[#6B7480] leading-[1.4] flex gap-1 items-start"
                                    >
                                      <span className="mt-[3px] flex-shrink-0 w-1 h-1 rounded-full bg-[#C4CAD5]" />
                                      {h}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {isSelected && (
                        <button
                          onClick={() => setSelectedDate("")}
                          className="mt-2 text-[10px] font-semibold text-[#6B7480] hover:text-[#1A1D24] transition-colors"
                        >
                          limpar filtro ×
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Base report */}
            <div className="relative flex gap-3">
              <div className="mt-1 w-3.5 h-3.5 rounded-full border-2 border-[#E2E7EF] bg-white flex-shrink-0" />
              <div className="pb-2">
                <div className="text-[12px] font-extrabold text-[#1A1D24]">Mai 2026</div>
                <div className="text-[10.5px] text-[#6B7480] leading-[1.45]">
                  Versão base · 13 seções · 71 fontes validadas
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>

        {/* Footer hint */}
        <div className="px-5 py-3 border-t border-[#E2E7EF] flex-shrink-0">
          <div className="text-[10px] text-[#6B7480] leading-[1.4]">
            Clique numa data para filtrar o conteúdo por aquele relatório.
          </div>
        </div>
      </aside>
    </>
  );
}
