import SectionHeader from "./SectionHeader";

const tableData = [
  { tier: "b-blue", tierId: "Alto ticket", modelo: "Consultoria estratégica de marca", ticket: "R$20k–100k/projeto", obs: "Baixo volume, alta margem" },
  { tier: "b-blue", tierId: "Alto ticket", modelo: "Design System (empresa tech)", ticket: "R$30k–120k/projeto", obs: "Especialização UI/UX" },
  { tier: "b-green", tierId: "Ticket médio", modelo: "Identidade visual PME", ticket: "R$3k–12k/projeto", obs: "Volume médio" },
  { tier: "b-green", tierId: "Ticket médio", modelo: "Retainer mensal (guardião de marca)", ticket: "R$2k–6k/mês", obs: "Recorrência" },
  { tier: "b-yellow", tierId: "Baixo ticket", modelo: "Social media pacote mensal", ticket: "R$800–2.500/mês", obs: "Commoditizado, alto volume" },
  { tier: "b-red", tierId: "Commodity", modelo: "Logo simples / arte avulsa", ticket: "R$300–1.500", obs: "Ameaçado pela IA" },
];

const badgeStyle: Record<string, string> = {
  "b-blue": "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
  "b-green": "bg-[#ECFDF5] text-[#066E4C] border border-[#BBE9D2]",
  "b-yellow": "bg-[#FFF7ED] text-[#9A3412] border border-[#F5DCBE]",
  "b-red": "bg-[#FEF2F2] text-[#B91C1C] border border-[#FAD1D1]",
};

export default function RemuneracaoSection() {
  return (
    <section id="remuneracao" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="💰"
        part="Parte 3"
        title="Modelos de Receita no Design"
        description="Como designers geram renda — do ticket baixo ao premium"
      />

      <div className="bg-[#ECFDF5] border border-[#BBE9D2] border-l-[3px] border-l-[#0F766E] rounded-[10px] px-[18px] py-[15px] text-[13.5px] text-[#434A57] mb-3.5 leading-[1.65]">
        <strong className="text-[#1A1D24]">Dado validado (Toptal via Colorlib):</strong> Especialistas ganham <strong className="text-[#1A1D24]">40–60% mais</strong> que generalistas. Taxa mediana de freela: USD 92,75/hora · 83% dos freelas preferem o modelo por flexibilidade e maior renda.
      </div>

      <div className="bg-white border border-[#E2E7EF] rounded-xl overflow-hidden">
        <div className="px-5 py-3.5 border-b border-[#E2E7EF] text-[13px] font-bold text-[#1A1D24]">Espectro de receita por modelo de trabalho</div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {["Segmento", "Modelo", "Ticket típico (BR)", "Observação"].map((h) => (
                  <th key={h} className="text-[10.5px] font-bold uppercase tracking-[0.5px] text-[#6B7480] px-[18px] py-[11px] text-left border-b border-[#E2E7EF] bg-[#FAFAFA]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.modelo} className="hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-[18px] py-3 text-[13px] border-b border-[#E2E7EF]">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${badgeStyle[row.tier]}`}>{row.tierId}</span>
                  </td>
                  <td className="px-[18px] py-3 text-[13px] font-bold text-[#1A1D24] border-b border-[#E2E7EF]">{row.modelo}</td>
                  <td className="px-[18px] py-3 text-[13px] text-[#434A57] border-b border-[#E2E7EF]">{row.ticket}</td>
                  <td className="px-[18px] py-3 text-[13px] text-[#434A57] border-b border-[#E2E7EF]">{row.obs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
