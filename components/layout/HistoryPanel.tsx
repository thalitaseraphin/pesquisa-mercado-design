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
      {/* Backdrop — só em mobile quando aberto manualmente */}
      {historyOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 xl:hidden"
          onClick={() => setHistoryOpen(false)}
        />
      )}

      <aside
        className={[
          "fixed top-0 right-0 w-[260px] h-screen z-50 flex flex-col",
          "bg-[#FAFBFC] border-l border-[#E2E7EF]",
          "transition-transform duration-300 ease-in-out",
          // Desktop xl+: sempre visível. Mobile/tablet: segue historyOpen
          historyOpen ? "translate-x-0" : "translate-x-full xl:translate-x-0",
        ].join(" ")}
      >
        {/* Header */}
        <div className="px-5 pt-5 pb-4 border-b border-[#E2E7EF] flex-shrink-0">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[13px] font-extrabold text-[#1A1D24] tracking-[-0.3px]">
                Histórico de Relatórios
              </div>
              <div className="text-[10.5px] text-[#6B7480] mt-0.5">
                Clique numa data para filtrar
              </div>
            </div>
            {/* Fechar — só aparece em mobile */}
            <button
              onClick={() => setHistoryOpen(false)}
              className="xl:hidden text-[#6B7480] hover:text-[#1A1D24] transition-colors text-[20px] leading-none"
              aria-label="Fechar histórico"
            >
              ×
            </button>
          </div>

          {/* Filtro ativo */}
          {selectedDate && (
            <div className="mt-3 flex items-center justify-between bg-[#E9F0FE] border border-[#C9DBFB] rounded-lg px-3 py-2">
              <span className="text-[10.5px] font-bold text-[#1E40AF]">
                📅 Filtrando: {selectedDate}
              </span>
              <button
                onClick={() => setSelectedDate("")}
                className="text-[#6B7480] hover:text-[#1A1D24] text-[13px] font-bold leading-none ml-2"
                title="Limpar filtro"
              >
                ×
              </button>
            </div>
          )}
        </div>

        <ScrollArea className="flex-1">
          <div className="px-5 py-5 flex flex-col">
            {reportChanges.map((report, i) => {
              const isSelected = selectedDate === report.date;
              const isLast = i === reportChanges.length - 1;

              return (
                <div key={report.date} className="relative">
                  {/* Linha da timeline */}
                  {!isLast && (
                    <div className="absolute left-[6px] top-[18px] bottom-0 w-px bg-[#E2E7EF]" />
                  )}

                  <div className="flex gap-3 mb-5">
                    {/* Dot */}
                    <button
                      onClick={() => selectDate(report.date)}
                      className={[
                        "mt-[3px] w-3 h-3 rounded-full border-2 flex-shrink-0 transition-all cursor-pointer",
                        isSelected
                          ? "bg-[#2563EB] border-[#2563EB]"
                          : report.isLatest
                            ? "bg-[#1A1D24] border-[#1A1D24] hover:bg-[#2563EB] hover:border-[#2563EB]"
                            : "bg-white border-[#C4CAD5] hover:border-[#2563EB]",
                      ].join(" ")}
                    />

                    <div className="flex-1 min-w-0">
                      {/* Cabeçalho da data */}
                      <button
                        onClick={() => selectDate(report.date)}
                        className="text-left w-full group cursor-pointer"
                      >
                        <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
                          <span className={[
                            "text-[12px] font-extrabold transition-colors",
                            isSelected
                              ? "text-[#2563EB]"
                              : "text-[#1A1D24] group-hover:text-[#2563EB]",
                          ].join(" ")}>
                            {report.label}
                          </span>
                          {report.isLatest && (
                            <span className="text-[9px] font-extrabold text-white bg-[#1A1D24] px-1.5 py-0.5 rounded-full">
                              ATUAL
                            </span>
                          )}
                          {isSelected && (
                            <span className="text-[9px] font-bold text-[#2563EB] bg-[#DBEAFE] px-1.5 py-0.5 rounded-full">
                              ativo
                            </span>
                          )}
                        </div>
                        <div className="text-[10.5px] text-[#6B7480] leading-[1.45]">
                          {report.summary}
                        </div>
                      </button>

                      {/* Seções com novidades */}
                      <div className="mt-2.5 flex flex-col gap-2">
                        {report.changes.map((section) => (
                          <div key={section.id}>
                            <div className="flex items-start gap-1.5">
                              <span className="text-[11px] flex-shrink-0 mt-px leading-none">
                                {section.icon}
                              </span>
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-1.5 mb-1">
                                  <a
                                    href={`#${section.id}`}
                                    className="text-[11px] font-semibold text-[#434A57] hover:text-[#2563EB] transition-colors no-underline"
                                    onClick={() => setHistoryOpen(false)}
                                  >
                                    {section.label}
                                  </a>
                                  <span className="text-[9px] font-bold text-[#2563EB] bg-[#DBEAFE] px-1.5 py-px rounded-full flex-shrink-0">
                                    +{section.newCount}
                                  </span>
                                </div>
                                <ul className="flex flex-col gap-0.5">
                                  {section.highlights.map((h, j) => (
                                    <li
                                      key={j}
                                      className="text-[10px] text-[#6B7480] leading-[1.4] flex gap-1.5 items-start"
                                    >
                                      <span className="mt-[4px] flex-shrink-0 w-[5px] h-[5px] rounded-full bg-[#D1D8E2]" />
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
                          className="mt-2 text-[10px] font-semibold text-[#6B7480] hover:text-[#434A57] transition-colors cursor-pointer"
                        >
                          limpar filtro ×
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Entrada base */}
            <div className="flex gap-3">
              <div className="mt-[3px] w-3 h-3 rounded-full border-2 border-[#E2E7EF] bg-white flex-shrink-0" />
              <div>
                <div className="text-[12px] font-extrabold text-[#1A1D24]">Mai 2026</div>
                <div className="text-[10.5px] text-[#6B7480] leading-[1.45] mt-0.5">
                  Versão base · 13 seções · 71 fontes validadas
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </aside>
    </>
  );
}
