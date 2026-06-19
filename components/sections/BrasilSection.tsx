import dynamic from "next/dynamic";
import SectionHeader from "./SectionHeader";

const EdtechChart = dynamic(() => import("@/components/charts/EdtechChart"), { ssr: false });

const progItems = [
  { label: "Trabalhadores formais", val: "59,3%", pct: 59.3, color: "bg-[#2563EB]" },
  { label: "Trabalhadores informais", val: "40,7%", pct: 40.7, color: "bg-[#B45309]" },
];

const tableData = [
  ["Designer Gráfico", "R$3.700/mês", "USD 61.300", "USD 32k–88k"],
  ["UX/UI Designer Sênior", "R$6k–18k/mês", "USD 85k–110k", "USD 85k–110k"],
  ["Diretor Criativo", "R$12k–25k/mês", "USD 138.000", "—"],
  ["Product Designer Sênior", "R$8k–20k/mês", "USD 92.000+", "USD 92k+"],
  ["Freela Generalista", "R$45–75/hora", "USD 45–75/hora", "USD 25–100/hora"],
  ["Freela Especialista", "R$100–250/hora", "USD 100–150+/hora", "USD 60–150/hora"],
];

export default function BrasilSection() {
  return (
    <section id="brasil" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="🇧🇷"
        part="Parte 2"
        title="Mercado Brasileiro de Design"
        description="Estrutura, volume e impacto da IA no mercado nacional"
      />

      <div className="grid grid-cols-2 gap-3.5 mb-3.5 max-md:grid-cols-1">
        <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
          <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">Profissionais de design no Brasil</h3>
          <div className="text-[33px] font-extrabold tracking-[-1px] text-[#1A1D24] leading-none">250.000</div>
          <div className="text-[12px] text-[#434A57] mt-1.5">Fonte: Ministério da Cultura (MICBR) · 2024</div>
          <hr className="my-3.5 border-[#E2E7EF]" />
          {progItems.map((p) => (
            <div key={p.label} className="mb-3.5">
              <div className="flex justify-between text-[12px] text-[#434A57] mb-1.5">
                <span>{p.label}</span>
                <span className="text-[#1A1D24] font-bold">{p.val}</span>
              </div>
              <div className="h-[7px] bg-[#EEF1F6] rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${p.color}`} style={{ width: `${p.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
          <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">EdTech Brasil — crescimento</h3>
          <EdtechChart />
          <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">Fonte: IMARC Group 2025 · CAGR 11,12%</div>
        </div>
      </div>

      <div className="bg-[#FFF7ED] border border-[#F5DCBE] border-l-[3px] border-l-[#B45309] rounded-[10px] px-[18px] py-[15px] text-[13.5px] text-[#434A57] mb-3.5 leading-[1.65]">
        <strong className="text-[#1A1D24]">Dado preocupante (CELACC/USP 2026):</strong> Designers gráficos e multimídia (186,9 mil profissionais) sofreram queda de dois dígitos na demanda por serviços desde a proliferação de IA generativa. A IA está criando uma bifurcação clara no mercado.
      </div>

      <div className="bg-white border border-[#E2E7EF] rounded-xl overflow-hidden">
        <div className="px-5 py-3.5 border-b border-[#E2E7EF] text-[13px] font-bold text-[#1A1D24]">Remuneração média por cargo — Brasil vs. Internacional</div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {["Cargo", "Brasil (estimativa)", "EUA (USD/ano)", "Remoto Internacional"].map((h) => (
                  <th key={h} className="text-[10.5px] font-bold uppercase tracking-[0.5px] text-[#6B7480] px-[18px] py-[11px] text-left border-b border-[#E2E7EF] bg-[#FAFAFA]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map(([cargo, ...rest]) => (
                <tr key={cargo} className="hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-[18px] py-3 text-[13px] text-[#434A57] border-b border-[#E2E7EF] font-bold text-[#1A1D24]">{cargo}</td>
                  {rest.map((cell, i) => (
                    <td key={i} className="px-[18px] py-3 text-[13px] text-[#434A57] border-b border-[#E2E7EF]">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
