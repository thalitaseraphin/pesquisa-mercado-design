import SectionHeader from "./SectionHeader";

const intlProg = [
  { label: "Designer Gráfico geral", val: "USD 32k–88k", pct: 55, color: "bg-[#2563EB]" },
  { label: "UX/UI Designer Sênior", val: "USD 85k–110k", pct: 80, color: "bg-[#2563EB]" },
  { label: "Product Designer Sênior", val: "USD 92k+", pct: 90, color: "bg-[#0F766E]" },
  { label: "Toptal — freela hora", val: "USD 60–150/h", pct: 75, color: "bg-[#B45309]" },
];

const platforms = [
  ["Workana / 99freelas", "Iniciante-intermediário", "USD 5–30", "Mercado latino, competição por preço"],
  ["Upwork", "Intermediário-sênior", "USD 25–100", "Maior plataforma global, curva de reputação"],
  ["Dribbble / Behance", "Qualquer nível", "—", "Portfólio + vagas diretas, essencial para designers"],
  ["LinkedIn", "Sênior", "—", "Melhor para vagas full-time remote (não freela)"],
  ["We Work Remotely", "Sênior", "USD 50–150", "Vagas full-time em empresas EUA/UK"],
  ["Toptal", "Top 3% do mercado", "USD 60–150/h", "Seleção rigorosa · clientes Fortune 500 · pago em USD"],
];

export default function InternacionalSection() {
  return (
    <section id="internacional" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="🌐"
        part="Parte 13"
        title="Designer Brasileiro para o Mercado Internacional"
        description="Oportunidade de carreira e produto — o mercado que poucos exploraram"
      />

      <div className="grid grid-cols-2 gap-3.5 mb-3.5 max-md:grid-cols-1">
        <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
          <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">Posição do Brasil no mercado global</h3>
          <div className="text-[33px] font-extrabold tracking-[-1px] text-[#1A1D24] leading-none">5º lugar</div>
          <div className="text-[12px] text-[#434A57] mt-1.5">Ranking global de talento freelance remoto · 2024</div>
          <hr className="my-3 border-[#E2E7EF]" />
          <div className="text-[12px] text-[#434A57]">25 milhões de autônomos e freelancers no Brasil. País figura entre os top 10 em produção de novo talento freelance global.</div>
          <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">Fonte: Grey.co — Rise of Brazilian Talent 2024</div>
        </div>
        <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
          <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">Salário remoto internacional (USD/ano)</h3>
          {intlProg.map((p) => (
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
          <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF]">Fontes: Blog Inter · NomadGlobal · Toptal</div>
        </div>
      </div>

      <div className="bg-white border border-[#E2E7EF] rounded-xl overflow-hidden mb-3.5">
        <div className="px-5 py-3.5 border-b border-[#E2E7EF] text-[13px] font-bold text-[#1A1D24]">Plataformas de entrada — do mais acessível ao mais exclusivo</div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {["Plataforma", "Perfil", "Ticket/hora", "Diferencial"].map((h) => (
                  <th key={h} className="text-[10.5px] font-bold uppercase tracking-[0.5px] text-[#6B7480] px-[18px] py-[11px] text-left border-b border-[#E2E7EF] bg-[#FAFAFA]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {platforms.map(([plat, perfil, ticket, dif]) => (
                <tr key={plat} className="hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-[18px] py-3 text-[13px] font-bold text-[#1A1D24] border-b border-[#E2E7EF]">{plat}</td>
                  <td className="px-[18px] py-3 text-[13px] text-[#434A57] border-b border-[#E2E7EF]">{perfil}</td>
                  <td className="px-[18px] py-3 text-[13px] text-[#434A57] border-b border-[#E2E7EF]">{ticket}</td>
                  <td className="px-[18px] py-3 text-[13px] text-[#434A57] border-b border-[#E2E7EF]">{dif}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-[#E9F0FE] border border-[#CFE0FB] border-l-[3px] border-l-[#2563EB] rounded-xl p-[18px]">
        <h4 className="text-[14px] font-extrabold text-[#1A1D24] mb-2">💡 Gap de produto identificado</h4>
        <p className="text-[13px] text-[#434A57] leading-[1.6]">Nenhum player brasileiro encontrado com produto específico para "designer que quer entrar no mercado internacional" — combinando portfólio estratégico + precificação em dólar + plataformas de entrada. Oportunidade de produto: mini-curso (R$197–497), mentoria 4–8 semanas (R$1.500–3.000), comunidade de designers BR no mercado global (R$50–150/mês).</p>
      </div>
    </section>
  );
}
