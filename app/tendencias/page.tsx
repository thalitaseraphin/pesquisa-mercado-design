"use client";

import { useState } from "react";
import TendenciasSidebar from "@/components/tendencias/TendenciasSidebar";
import EmAltaHojeSection from "@/components/tendencias/EmAltaHojeSection";
import ThemeFeedSection from "@/components/tendencias/ThemeFeedSection";
import IdeiasConteudoSection from "@/components/tendencias/IdeiasConteudoSection";
import FontesTendenciasSection from "@/components/tendencias/FontesTendenciasSection";
import { themes, LATEST_DATE } from "@/data/tendencias/content";

export default function TendenciasPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <TendenciasSidebar mobileOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 md:ml-[272px] min-h-screen">
        {/* TopBar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-11 py-3.5 bg-[#EEF1F6]/85 backdrop-blur-[16px] border-b border-[#E2E7EF] max-md:px-5">
          <div className="text-[13px] font-bold tracking-[-0.2px] text-[#1A1D24]">
            Tendências Geral · Radar de Conteúdo
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] px-[11px] py-1 rounded-full border border-[#E2E7EF] font-semibold text-[#434A57] bg-white max-sm:hidden">
              Atualizado {LATEST_DATE}
            </span>
            <button
              className="md:hidden border border-[#E2E7EF] text-[#434A57] px-2.5 py-1 rounded-md text-[16px] bg-white cursor-pointer"
              onClick={() => setSidebarOpen(true)}
              aria-label="Abrir menu"
            >
              ☰
            </button>
          </div>
        </div>

        <main className="px-11 py-14 max-w-[1080px] max-md:px-5 max-md:py-8">
          {/* Hero */}
          <section className="mb-[60px]">
            <div className="text-[11px] font-extrabold text-[#2563EB] uppercase tracking-[1.4px] mb-2">
              Willian Baldan · Marketing Digital
            </div>
            <h1 className="text-[34px] font-extrabold tracking-[-1px] text-[#1A1D24] leading-[1.1] max-md:text-[26px]">
              Radar de tendências para pautar seu conteúdo
            </h1>
            <p className="text-[15px] text-[#434A57] mt-3 max-w-[640px] leading-[1.6]">
              O que está acontecendo em tecnologia, negócios, cultura, política, no
              universo da luta e no design — reunido diariamente e traduzido em
              ganchos prontos para posts, Reels e roteiros.
            </p>
          </section>

          <EmAltaHojeSection />
          {themes.map((theme) => (
            <ThemeFeedSection key={theme.id} theme={theme} />
          ))}
          <IdeiasConteudoSection />
          <FontesTendenciasSection />

          <div className="py-6 text-[12px] text-[#6B7480] border-t border-[#E2E7EF]">
            Radar de conteúdo · atualização diária via RAG · Tendências Geral
          </div>
        </main>
      </div>
    </div>
  );
}
