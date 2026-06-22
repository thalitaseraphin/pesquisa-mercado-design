"use client";

import { useState } from "react";
import { ReportDateProvider } from "@/context/ReportDateContext";
import Sidebar from "@/components/layout/Sidebar";
import TopBar from "@/components/layout/TopBar";
import HistoryPanel from "@/components/layout/HistoryPanel";
import HeroSection from "@/components/sections/HeroSection";
import KpiStrip from "@/components/sections/KpiStrip";
import NovidadesSection from "@/components/sections/NovidadesSection";
import IdentidadeSection from "@/components/sections/IdentidadeSection";
import ForumSection from "@/components/sections/ForumSection";
import AnunciosSection from "@/components/sections/AnunciosSection";
import InsightsSection from "@/components/sections/InsightsSection";
import TarefasSection from "@/components/sections/TarefasSection";
import PanoramaSection from "@/components/sections/PanoramaSection";
import BrasilSection from "@/components/sections/BrasilSection";
import RemuneracaoSection from "@/components/sections/RemuneracaoSection";
import AprendizadoSection from "@/components/sections/AprendizadoSection";
import PersonasSection from "@/components/sections/PersonasSection";
import OportunidadesSection from "@/components/sections/OportunidadesSection";
import ModelosSection from "@/components/sections/ModelosSection";
import CanaisSection from "@/components/sections/CanaisSection";
import CompraSection from "@/components/sections/CompraSection";
import CompetitivoSection from "@/components/sections/CompetitivoSection";
import FerramentasSection from "@/components/sections/FerramentasSection";
import InternacionalSection from "@/components/sections/InternacionalSection";
import MercadosEmergentesSection from "@/components/sections/MercadosEmergentesSection";
import EstudosMercadoSection from "@/components/sections/EstudosMercadoSection";
import FontesSection from "@/components/sections/FontesSection";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ReportDateProvider>
      <div className="flex min-h-screen">
        <Sidebar mobileOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="flex-1 md:ml-[272px] min-h-screen">
          <TopBar onMenuClick={() => setSidebarOpen(true)} />

          <main className="px-11 py-14 max-w-[1080px] max-md:px-5 max-md:py-8">
            <HeroSection />
            <KpiStrip />
            <NovidadesSection />
            <IdentidadeSection />
            <ForumSection />
            <AnunciosSection />
            <InsightsSection />
            <TarefasSection />
            <PanoramaSection />
            <BrasilSection />
            <RemuneracaoSection />
            <AprendizadoSection />
            <PersonasSection />
            <OportunidadesSection />
            <ModelosSection />
            <CanaisSection />
            <CompraSection />
            <CompetitivoSection />
            <FerramentasSection />
            <InternacionalSection />
            <MercadosEmergentesSection />
            <EstudosMercadoSection />
            <FontesSection />

            <div className="py-6 text-[12px] text-[#6B7480] border-t border-[#E2E7EF]">
              Documento para uso estratégico interno · IA LAB · Atualizar a cada 6 meses · Próxima revisão: Novembro 2026
            </div>
          </main>
        </div>

        <HistoryPanel />
      </div>
    </ReportDateProvider>
  );
}
