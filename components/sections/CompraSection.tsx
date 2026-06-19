import dynamic from "next/dynamic";
import SectionHeader from "./SectionHeader";

const TicketChart = dynamic(() => import("@/components/charts/TicketChart"), { ssr: false });

const triggers = [
  { icon: "⏱️", title: "Urgência / lotes", sub: "Countdown timer = +8,6% em conversão" },
  { icon: "😰", title: "FOMO", sub: "60% dos millennials compram em 24h após FOMO" },
  { icon: "⭐", title: "Prova social", sub: "Resultados concretos de pares superam qualquer argumento" },
  { icon: "🎯", title: "Autoridade prática", sub: "Quem usa em projeto real > quem ensina teoria" },
  { icon: "✨", title: "Transformação específica", sub: 'Compram "cobrar diferente", não "curso de IA"' },
];

const funnel = [
  { label: "Landing page → Registro", note: "média do mercado", rate: "até 51%", color: "text-[#2563EB]" },
  { label: "Registro → Presença", note: "média", rate: "40–50%", color: "text-[#1A1D24]" },
  { label: "Presença → Comprador", note: "durante o evento", rate: "5–20%", color: "text-[#0F766E]" },
  { label: "Follow-up email pós-evento", note: "do total de vendas", rate: "25%", color: "text-[#1A1D24]" },
];

export default function CompraSection() {
  return (
    <section id="compra" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="🛒"
        part="Parte 10"
        title="Comportamento de Compra"
        description="Gatilhos psicológicos, funil de conversão e benchmarks de lançamento"
      />

      <div className="grid grid-cols-2 gap-3.5 mb-3.5 max-md:grid-cols-1">
        <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
          <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">5 gatilhos de compra validados</h3>
          <div className="flex flex-col gap-2.5">
            {triggers.map((t) => (
              <div key={t.title} className="flex gap-2.5 items-start">
                <span className="text-[18px]">{t.icon}</span>
                <div>
                  <div className="text-[13px] font-semibold text-[#1A1D24]">{t.title}</div>
                  <div className="text-[12px] text-[#434A57]">{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">Fontes: OptinMonster · ResearchGate · LearnStream · CourseAI</div>
        </div>

        <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
          <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">Funil de evento ao vivo (webinar)</h3>
          <div className="flex flex-col gap-2">
            {funnel.map((step, i) => (
              <div key={step.label}>
                <div className="bg-white border border-[#E2E7EF] rounded-[10px] px-5 py-3.5 flex items-center justify-between">
                  <div>
                    <div className="text-[13px] text-[#434A57]">{step.label}</div>
                    <div className="text-[11px] text-[#6B7480] mt-0.5">{step.note}</div>
                  </div>
                  <div className={`text-[20px] font-extrabold tracking-[-0.5px] ${step.color}`}>{step.rate}</div>
                </div>
                {i < funnel.length - 1 && (
                  <div className="text-center text-[#6B7480] text-[14px] my-[-2px]">↓</div>
                )}
              </div>
            ))}
          </div>
          <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">Fontes: Entrepreneurshq · ON24 Webinar Benchmarks 2025</div>
        </div>
      </div>

      <div className="bg-white border border-[#E2E7EF] rounded-xl p-6 mb-3.5">
        <div className="text-[13px] font-bold text-[#1A1D24] mb-1">Conversão de sales page por faixa de ticket</div>
        <div className="text-[12px] text-[#434A57] mb-5">% de visitantes que compram — média do mercado de cursos online</div>
        <TicketChart />
        <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">Fonte: Acceleroi — Average Conversion Rate for Online Courses 2026</div>
      </div>

      <div className="bg-[#FFF7ED] border border-[#F5DCBE] border-l-[3px] border-l-[#B45309] rounded-[10px] px-[18px] py-[15px] text-[13.5px] text-[#434A57] leading-[1.65]">
        <strong className="text-[#1A1D24]">Regra prática para lançamentos:</strong> benchmark de 1–2% de conversão da lista de email para vendas. Para vender 30 ingressos → lista de ~1.500–3.000 contatos qualificados. Lista pequena e qualificada converte muito acima da média.
      </div>
    </section>
  );
}
