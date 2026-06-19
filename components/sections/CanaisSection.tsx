import dynamic from "next/dynamic";
import SectionHeader from "./SectionHeader";

const ChannelsChart = dynamic(() => import("@/components/charts/ChannelsChart"), { ssr: false });

const progItems = [
  { label: "Indicação / boca a boca", val: "42%", pct: 42, color: "bg-[#2563EB]" },
  { label: "Rede pessoal (contatos diretos)", val: "29%", pct: 29, color: "bg-[#2563EB]" },
  { label: "Portfolio website", val: "18%", pct: 18, color: "bg-[#0F766E]" },
  { label: "Plataformas (Upwork, 99freelas)", val: "<11%", pct: 11, color: "bg-[#B45309]" },
];

const tableData = [
  ["Freela em Formação", "Instagram", "Indicação de amigos", "LinkedIn (sem rede)"],
  ["Freela Especializado", "Indicação de clientes", "LinkedIn (ticket alto)", "Plataformas (ticket baixo)"],
  ["Designer de Agência", "LinkedIn", "Instagram (autoridade)", "Cold outreach sem portfólio"],
  ["Dono de Estúdio", "Indicação de parceiros", "Networking", "Freela platform"],
  ["UI/UX de Produto", "LinkedIn", "Comunidades Slack/Discord", "Instagram (nicho errado)"],
  ["Early Adopter de IA", "Twitter/X + LinkedIn", "YouTube (conteúdo técnico)", "Qualquer canal sem conteúdo"],
];

export default function CanaisSection() {
  return (
    <section id="canais" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="📢"
        part="Parte 9"
        title="Canais de Aquisição"
        description="Como designers encontram clientes e como produtos de educação encontram alunos"
      />

      <div className="grid grid-cols-2 gap-3.5 mb-3.5 max-md:grid-cols-1">
        <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
          <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">Como freelas encontram clientes</h3>
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
          <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF]">Fonte: Colorlib — Freelance Statistics 2026</div>
        </div>

        <div className="bg-white border border-[#E2E7EF] rounded-xl p-6">
          <div className="text-[13px] font-bold text-[#1A1D24] mb-1">Conversão por canal — cursos online</div>
          <div className="text-[12px] text-[#434A57] mb-5">Visitante → lead (média dos canais)</div>
          <ChannelsChart />
          <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-2">Fonte: Acceleroi — Online Course Conversion Rates 2026</div>
        </div>
      </div>

      <div className="bg-[#ECFDF5] border border-[#BBE9D2] border-l-[3px] border-l-[#0F766E] rounded-[10px] px-[18px] py-[15px] text-[13.5px] text-[#434A57] mb-3.5 leading-[1.65]">
        <strong className="text-[#1A1D24]">Email é 5–10x mais poderoso que redes sociais.</strong> Lista própria converte 15–25% de visitante → lead, enquanto Instagram/Facebook Ads converte 2–4%. Freelas com portfólio próprio ganham 35% mais que os dependentes de plataformas.
      </div>

      <div className="bg-white border border-[#E2E7EF] rounded-xl overflow-hidden">
        <div className="px-5 py-3.5 border-b border-[#E2E7EF] text-[13px] font-bold text-[#1A1D24]">Canal de aquisição por persona</div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {["Persona", "Canal #1", "Canal #2", "Evitar"].map((h) => (
                  <th key={h} className="text-[10.5px] font-bold uppercase tracking-[0.5px] text-[#6B7480] px-[18px] py-[11px] text-left border-b border-[#E2E7EF] bg-[#FAFAFA]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map(([persona, c1, c2, avoid]) => (
                <tr key={persona} className="hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-[18px] py-3 text-[13px] font-bold text-[#1A1D24] border-b border-[#E2E7EF]">{persona}</td>
                  <td className="px-[18px] py-3 text-[13px] text-[#434A57] border-b border-[#E2E7EF]">{c1}</td>
                  <td className="px-[18px] py-3 text-[13px] text-[#434A57] border-b border-[#E2E7EF]">{c2}</td>
                  <td className="px-[18px] py-3 text-[13px] text-[#434A57] border-b border-[#E2E7EF]">{avoid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
