import SectionHeader from "./SectionHeader";

const insights = [
  { num: "INSIGHT 01", title: "A IA virou pré-requisito, não diferencial", text: "Com <strong>91% dos designers usando IA semanalmente</strong> e vagas com skill de IA crescendo <strong>+144% a/a</strong>, dominar IA deixou de ser vantagem e passou a ser linha de base. O diferencial agora é direção criativa e pensamento sistêmico.", attention: false },
  { num: "INSIGHT 02", title: "Branding migra para identidades vivas", text: `Sistemas <strong>motion-first e adaptativos</strong> substituem logos estáticos. Quem vende identidade visual precisa entregar sistemas dinâmicos e regras de marca "legíveis por máquina", não só um logo final.`, attention: false },
  { num: "INSIGHT 03", title: "Mercado cresce, mas o valor migra", text: `Design gráfico vai a <strong>USD 59,3B (CAGR 7,6%)</strong> e UX a USD 13,06B, porém o valor desloca-se de execução para <strong>estratégia, sistemas e curadoria</strong>. Preço por "arte" cai; preço por direção sobe.`, attention: false },
  { num: "INSIGHT 04", title: "Agentes de IA como novo gatekeeper", text: "79% das empresas já implementam agentes de IA. Eles passam a <strong>influenciar quais marcas são vistas e recomendadas</strong> — posicionamento e dados de marca viram ativo competitivo.", attention: false },
  { num: "⚠ PONTO DE ATENÇÃO 01", title: "Comoditização da execução", text: `Tarefas repetitivas de design estão sendo automatizadas. Quem vende só "fazer a arte" perde margem. <strong>Reposicionar a oferta para estratégia e sistema</strong> é urgente.`, attention: true },
  { num: "⚠ PONTO DE ATENÇÃO 02", title: "Gap de fluência em IA na contratação", text: "50% dos líderes priorizam fluência em IA ao contratar. Sem prova concreta de workflow com IA, a agência/profissional fica de fora das melhores oportunidades.", attention: true },
];

export default function InsightsSection() {
  return (
    <section id="insights" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="💡"
        part="Síntese estratégica"
        title="Insights & Pontos de Atenção"
        description="O que realmente importa para o mercado agora — leitura rápida"
      />
      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        {insights.map((ins) => (
          <div
            key={ins.num}
            className={[
              "rounded-xl p-[22px] shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-[180ms] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(16,24,40,0.10)]",
              ins.attention
                ? "bg-[#FFFaf2] border border-[#F3D9B8] border-t-[3px] border-t-[#B45309]"
                : "bg-white border border-[#E2E7EF] border-t-[3px] border-t-[#2563EB]",
            ].join(" ")}
          >
            <div className={`text-[10.5px] font-extrabold tracking-[1px] mb-2 ${ins.attention ? "text-[#B45309]" : "text-[#2563EB]"}`}>
              {ins.num}
            </div>
            <div className="text-[15.5px] font-bold text-[#1A1D24] mb-[7px] leading-[1.4]">{ins.title}</div>
            <div className="text-[13.5px] text-[#434A57] leading-[1.65]" dangerouslySetInnerHTML={{ __html: ins.text }} />
          </div>
        ))}
      </div>
      <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">
        Síntese a partir dos dados das seções deste estudo e das fontes de novidades (jun/2026).
      </div>
    </section>
  );
}
