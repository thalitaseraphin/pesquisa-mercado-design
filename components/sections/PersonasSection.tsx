"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

const personas = [
  {
    icon: "🌱",
    name: "Freela em Formação",
    role: "18–26 anos · Iniciante",
    dores: "Revisão ilimitada por medo de perder cliente. Não sabe precificar — cobra por peça, não por valor. Fatura mal apesar de bastante volume de trabalho.",
    ideal: "R$5k–10k/mês estável com 3–5 clientes. Escopo definido. Portfólio de nicho.",
    canais: ["Instagram", "YouTube", "Indicação"],
  },
  {
    icon: "🚀",
    name: "Freela Especializado",
    role: "3–6 anos de mercado",
    dores: "Teto de horas — para crescer precisa cobrar mais ou atender mais. Ansiedade entre projetos (sem recorrência). Não sabe como escalar sem contratar.",
    ideal: "Serviços productizados. Ticket de R$8k→R$20k+. Recorrência. Produto próprio (template, curso, mentoria).",
    canais: ["LinkedIn", "Portfolio", "Indicação"],
  },
  {
    icon: "🏢",
    name: "Designer de Agência",
    role: "24–32 anos · Quer sair",
    dores: "Medo de sair sem renda fixa garantida. Portfólio é da agência, não autoral. Aprende pouco — repete as mesmas demandas.",
    ideal: "Freela paralelo até igualar 60–70% do salário. Portfólio autoral. 3–5 clientes fixos no 1º ano.",
    canais: ["LinkedIn", "Instagram", "Conteúdo CLT→freela"],
  },
  {
    icon: "🏗️",
    name: "Dono de Estúdio",
    role: "30–45 anos · 2–8 pessoas",
    dores: "Negócio depende dele para vender e entregar. Não consegue tirar férias sem o estúdio travar. Quer crescer mas crescer = gestão de pessoas.",
    ideal: "Processos documentados. Designer sênior para operacional. Posição como diretor criativo / estrategista. Ticket médio maior.",
    canais: ["Networking", "LinkedIn", "Podcast"],
  },
  {
    icon: "💻",
    name: "UI/UX de Produto",
    role: "25–35 anos · Startup/Tech",
    dores: "Dificuldade de mostrar impacto do design em métricas de negócio. Quer trabalhar para empresas internacionais. IA vai automatizar partes do trabalho.",
    dado: "Mediana de USD 85k–110k/ano nos EUA (Colorlib 2026).",
    canais: ["LinkedIn", "Discord/Slack", "Dribbble"],
  },
  {
    icon: "⚡",
    name: "Early Adopter de IA",
    role: "22–35 anos · Qualquer especialidade",
    dores: '"Uso IA mas não sei como isso muda minha precificação." "Clientes desvalorizam quando sabem que usei IA." "Tenho muito conhecimento mas não sei transformar em produto."',
    dado: "75% dos designers usam IA (2025) vs. 35% em 2023 — essa persona é a que mais cresce e tem maior potencial de monetização imediata.",
    canais: ["Twitter/X", "LinkedIn", "YouTube"],
  },
];

export default function PersonasSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (i: number) => {
    setOpenIndexes((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  return (
    <section id="personas" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="👥"
        part="Parte 5"
        title="Mapa de Personas"
        description="6 perfis com dores, jornada e canais de comunicação. Clique para expandir."
      />
      <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
        {personas.map((p, i) => {
          const isOpen = openIndexes.includes(i);
          return (
            <div
              key={p.name}
              onClick={() => toggle(i)}
              className={`bg-white border rounded-xl overflow-hidden cursor-pointer transition-all duration-150 ${isOpen ? "border-[#2563EB]" : "border-[#E2E7EF] hover:border-[#D2D9E4] hover:shadow-[0_6px_18px_rgba(16,24,40,0.07)]"}`}
            >
              <div className="px-[18px] py-4 flex items-center justify-between">
                <div>
                  <div className="text-[14px] font-bold text-[#1A1D24]">
                    {p.icon} {p.name}
                  </div>
                  <div className="text-[11px] text-[#434A57] mt-0.5">{p.role}</div>
                </div>
                <span className={`text-[#6B7480] text-[14px] transition-transform duration-200 ${isOpen ? "rotate-90 text-[#1A1D24]" : ""}`}>›</span>
              </div>

              {isOpen && (
                <div className="px-[18px] pb-4">
                  <div className="h-px bg-[#E2E7EF] mb-3.5" />
                  <div className="text-[10px] font-bold uppercase tracking-[0.8px] text-[#6B7480] mb-1.5">Dores principais</div>
                  <div className="text-[12px] text-[#434A57] leading-[1.6]">{p.dores}</div>
                  {p.ideal && (
                    <>
                      <div className="text-[10px] font-bold uppercase tracking-[0.8px] text-[#6B7480] mt-2.5 mb-1.5">Cenário ideal</div>
                      <div className="text-[12px] text-[#434A57] leading-[1.6]">{p.ideal}</div>
                    </>
                  )}
                  {p.dado && (
                    <>
                      <div className="text-[10px] font-bold uppercase tracking-[0.8px] text-[#6B7480] mt-2.5 mb-1.5">
                        {p.icon === "💻" ? "Dado validado" : "Contexto"}
                      </div>
                      <div className="text-[12px] text-[#434A57] leading-[1.6]">{p.dado}</div>
                    </>
                  )}
                  <div className="text-[10px] font-bold uppercase tracking-[0.8px] text-[#6B7480] mt-2.5 mb-2">Canal de alcance</div>
                  <div className="flex flex-wrap gap-1">
                    {p.canais.map((c) => (
                      <span key={c} className="inline-flex items-center gap-1 text-[11px] text-[#1A1D24] bg-[#F2F2F2] px-2 py-0.5 rounded-[10px]">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
