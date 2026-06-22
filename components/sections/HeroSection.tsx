export default function HeroSection() {
  return (
    <div className="mb-[52px]">
      <div className="text-[11px] font-bold text-[#434A57] uppercase tracking-[2px] mb-4">
        Estudo de Mercado · Design + IA
      </div>
      <h1 className="text-[44px] font-extrabold tracking-[-1.8px] leading-[1.05] text-[#1A1D24] mb-4 max-md:text-[32px]">
        O mercado de design<br />
        em <span className="text-[#2563EB] border-b-4 border-[#2563EB]">2026</span>
      </h1>
      <p className="text-[16px] text-[#434A57] max-w-[580px] leading-[1.7]">
        Mapeamento global do mercado de design com dados validados, fontes primárias e análise
        estratégica — atualizado diariamente com novidades de IA, branding e tendências.
      </p>
      <div className="flex gap-[22px] mt-5 flex-wrap">
        {[
          ["71", "fontes com URL"],
          ["19", "seções de análise"],
          ["6", "personas mapeadas"],
          ["22/06/2026", ""],
        ].map(([val, label]) => (
          <span key={val} className="text-[12px] text-[#6B7480]">
            <strong className="text-[#1A1D24] font-bold">{val}</strong>
            {label ? ` ${label}` : ""}
          </span>
        ))}
      </div>
    </div>
  );
}
