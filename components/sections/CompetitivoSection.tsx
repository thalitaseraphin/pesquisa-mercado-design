import SectionHeader from "./SectionHeader";

const players = [
  { player: "Origamid", focus: "Web Design, UI/UX, Front-end", size: "Pequeno / nichado · 27k+ alunos", gap: "Sem branding/identidade. Sem IA como método." },
  { player: "EBAC Online", focus: "Design, Marketing, Games, Moda", size: "Grande · 150+ cursos · Top-100 EdTech LatAm", gap: "Amplo demais. Sem IA como método central." },
  { player: "Domestika", focus: "Cursos criativos gerais", size: "Global · 8M usuários · USD 76,5M receita", gap: "Sem live, sem comunidade, sem profundidade." },
  { player: "Udemy BR", focus: "Cursos técnicos gerais", size: "Global / marketplace", gap: "Sem curadoria, sem comunidade, sem live." },
  { player: "Alura", focus: "Tecnologia e dados", size: "600k+ alunos · 5k empresas", gap: "Foco em tech/dados, não em design criativo." },
];

const badgeStyle = "inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold";

export default function CompetitivoSection() {
  return (
    <section id="competitivo" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="⚔️"
        part="Parte 11"
        title="Cenário Competitivo — Brasil"
        description="Quem está no mercado de educação em design e onde está o vazio"
      />

      <div className="grid grid-cols-2 gap-3.5 mb-3.5 max-md:grid-cols-1">
        <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
          <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">EdTech Brasil em números</h3>
          <div className="text-[33px] font-extrabold tracking-[-1px] text-[#1A1D24] leading-none">USD 6B</div>
          <div className="text-[12px] text-[#434A57] mt-1.5">2025 → USD 15,6B em 2034 · CAGR 11,12%</div>
          <hr className="my-3 border-[#E2E7EF]" />
          <div className="text-[12px] text-[#434A57]">Brasil tem <strong className="text-[#1A1D24]">47%</strong> das edtechs da América Latina — maior hub regional do continente.</div>
          <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">Fonte: IMARC Group — Brazil EdTech Market 2025</div>
        </div>
        <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
          <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">Domestika (player global em design)</h3>
          <div className="text-[33px] font-extrabold tracking-[-1px] text-[#1A1D24] leading-none">USD 76,5M</div>
          <div className="text-[12px] text-[#434A57] mt-1.5">Receita 2026 · Valuation USD 1,3B · 8M+ usuários</div>
          <hr className="my-3 border-[#E2E7EF]" />
          <div className="text-[12px] text-[#434A57]"><strong className="text-[#1A1D24]">3.500+ cursos criativos</strong>. Plataforma global em português. Sem live, sem comunidade, sem profundidade.</div>
          <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">Fonte: Growjo · TechCrunch 2022</div>
        </div>
      </div>

      <div className="bg-white border border-[#E2E7EF] rounded-xl overflow-hidden mb-3.5">
        <div className="px-5 py-3.5 border-b border-[#E2E7EF] text-[13px] font-bold text-[#1A1D24]">Mapa de players — educação em design no Brasil</div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {["Player", "Foco", "Tamanho", "Gap principal"].map((h) => (
                  <th key={h} className="text-[10.5px] font-bold uppercase tracking-[0.5px] text-[#6B7480] px-[18px] py-[11px] text-left border-b border-[#E2E7EF] bg-[#FAFAFA]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {players.map((p) => (
                <tr key={p.player} className="hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-[18px] py-3 text-[13px] font-bold text-[#1A1D24] border-b border-[#E2E7EF]">{p.player}</td>
                  <td className="px-[18px] py-3 text-[13px] text-[#434A57] border-b border-[#E2E7EF]">{p.focus}</td>
                  <td className="px-[18px] py-3 text-[13px] text-[#434A57] border-b border-[#E2E7EF]">{p.size}</td>
                  <td className="px-[18px] py-3 text-[13px] text-[#434A57] border-b border-[#E2E7EF]">{p.gap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-[#E9F0FE] border border-[#CFE0FB] border-l-[3px] border-l-[#2563EB] rounded-xl p-[18px]">
        <h4 className="text-[14px] font-extrabold text-[#1A1D24] mb-2">🔍 Gap confirmado: nenhum player com esse posicionamento</h4>
        <p className="text-[13px] text-[#434A57] leading-[1.6] mb-2.5">Combinação <strong>IA + Design + Método + Ao vivo + Instrutor que usa em projetos reais</strong> não foi encontrada em nenhum player brasileiro. Este é o posicionamento único do IA LAB.</p>
        <div className="flex flex-wrap gap-2">
          {[
            { label: "Escola da IA → geral, não design", style: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]" },
            { label: "EBAC → design mas sem método de IA", style: "bg-[#F6F8FB] text-[#6B7480] border border-[#E2E7EF]" },
            { label: "Origamid → sem branding, sem IA", style: "bg-[#F6F8FB] text-[#6B7480] border border-[#E2E7EF]" },
            { label: "Domestika → sem live", style: "bg-[#F6F8FB] text-[#6B7480] border border-[#E2E7EF]" },
          ].map((b) => (
            <span key={b.label} className={`${badgeStyle} ${b.style}`}>{b.label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
