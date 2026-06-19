import SectionHeader from "./SectionHeader";

const displacement = [
  { shrinking: "Logo comoditizado (R$300–500)", growing: "Identidade completa com processo e IA", badge: "b-yellow", badgeText: "CELACC/USP 2026" },
  { shrinking: "Execução mecânica de social media", growing: "Estratégia + direção de arte", badge: "b-gray", badgeText: "Análise de mercado" },
  { shrinking: "Banco de imagens pago", growing: "Imagem gerada sob direção criativa", badge: "b-blue", badgeText: "AI image market USD 13,9B" },
  { shrinking: "Designer gráfico generalista", growing: "Especialista com método + IA", badge: "b-green", badgeText: "+75% adoção de IA (AIGA)" },
];

const badgeStyle: Record<string, string> = {
  "b-yellow": "bg-[#FFF7ED] text-[#9A3412] border border-[#F5DCBE]",
  "b-gray": "bg-[#F6F8FB] text-[#6B7480] border border-[#E2E7EF]",
  "b-blue": "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
  "b-green": "bg-[#ECFDF5] text-[#066E4C] border border-[#BBE9D2]",
};

const whitespaces = [
  { label: "UI/UX para SaaS e produtos nacionais de PME", stars: "⭐⭐⭐⭐", badge: "b-green" },
  { label: "Identidade visual productizada com IA (preço fixo)", stars: "⭐⭐⭐⭐", badge: "b-green" },
  { label: "Comunidade de designers com curadoria real", stars: "⭐⭐⭐", badge: "b-blue" },
  { label: "Certificação em design com IA", stars: "⭐⭐⭐", badge: "b-blue" },
];

export default function OportunidadesSection() {
  return (
    <section id="oportunidades" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="🎯"
        part="Partes 6 e 7"
        title="Mapa de Oportunidades"
        description="O que está encolhendo, o que está crescendo e os white spaces identificados"
      />

      <div className="bg-white border border-[#E2E7EF] rounded-xl overflow-hidden mb-3.5">
        <div className="px-5 py-3.5 border-b border-[#E2E7EF] text-[13px] font-bold text-[#1A1D24]">O que a IA está deslocando</div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {["O que está encolhendo", "O que está crescendo", "Evidência"].map((h) => (
                  <th key={h} className="text-[10.5px] font-bold uppercase tracking-[0.5px] text-[#6B7480] px-[18px] py-[11px] text-left border-b border-[#E2E7EF] bg-[#FAFAFA]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displacement.map((row) => (
                <tr key={row.shrinking} className="hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-[18px] py-3 text-[13px] text-[#434A57] border-b border-[#E2E7EF]">{row.shrinking}</td>
                  <td className="px-[18px] py-3 text-[13px] font-bold text-[#1A1D24] border-b border-[#E2E7EF]">{row.growing}</td>
                  <td className="px-[18px] py-3 border-b border-[#E2E7EF]">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${badgeStyle[row.badge]}`}>{row.badgeText}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-[#E9F0FE] border border-[#CFE0FB] border-l-[3px] border-l-[#2563EB] rounded-xl p-[18px] mb-3.5">
        <h4 className="text-[14px] font-extrabold text-[#1A1D24] mb-2 flex items-center gap-2">⭐ White space principal — já ocupado pelo IA LAB</h4>
        <p className="text-[13px] text-[#434A57] leading-[1.6]">Método de IA para design ensinado por quem usa em projeto real. Mercado de IA crescendo 32,3%/ano; nenhum player brasileiro encontrado com credibilidade de prática + ensino ao vivo. Posição difícil de replicar.</p>
      </div>

      <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
        <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
          <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">White spaces identificados</h3>
          {whitespaces.map((w) => (
            <div key={w.label} className="flex items-center justify-between py-2.5 border-b border-[#E2E7EF] last:border-b-0">
              <div className="text-[12px] font-medium text-[#1A1D24] flex-1">{w.label}</div>
              <span className={`text-[11px] font-semibold ml-2 ${badgeStyle[w.badge]} inline-flex items-center px-2 py-0.5 rounded-full`}>{w.stars}</span>
            </div>
          ))}
        </div>
        <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
          <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">Roadmap de novos negócios</h3>
          {[
            { period: "0–6 meses", items: "IA LAB recorrente · Comunidade pós-evento · Audit de identidade (produto de entrada)" },
            { period: "6–18 meses", items: "Formação longa com IA · Productized service · UI/UX para SaaS nacionais" },
            { period: "18–36 meses", items: "Plataforma/SaaS para designers · Certificação em IA · White label para agências" },
          ].map((r) => (
            <div key={r.period} className="mt-2.5">
              <div className="text-[10px] font-bold uppercase tracking-[0.8px] text-[#6B7480] mb-1">{r.period}</div>
              <div className="text-[12px] text-[#434A57] leading-[1.6]">{r.items}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
