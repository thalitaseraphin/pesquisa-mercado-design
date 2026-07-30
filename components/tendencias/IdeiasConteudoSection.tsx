import { themes } from "@/data/tendencias/content";
import SectionHeader from "@/components/sections/SectionHeader";

// Seção derivada: reúne os ganchos de conteúdo (hook) de todos os temas.
export default function IdeiasConteudoSection() {
  const ideias = themes.flatMap((t) =>
    t.items
      .filter((item) => item.hook)
      .map((item) => ({ hook: item.hook as string, title: item.title, themeLabel: t.label, icon: t.icon }))
  );

  return (
    <section id="ideias" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="💡"
        part="Aplicar"
        title="Ideias de Conteúdo"
        description="Ganchos prontos para virar post, Reels ou roteiro — a partir do que está em alta"
      />

      {ideias.length === 0 ? (
        <div className="bg-[#F6F8FB] border border-dashed border-[#D2D9E4] rounded-xl px-6 py-10 text-center">
          <div className="text-[32px] mb-3">💭</div>
          <div className="text-[14px] font-bold text-[#1A1D24] mb-1">Nenhum gancho ainda</div>
          <div className="text-[13px] text-[#6B7480]">
            Os ganchos aparecem aqui conforme os temas são preenchidos.
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
          {ideias.map((idea, i) => (
            <div
              key={i}
              className="bg-white border border-[#E2E7EF] rounded-xl px-5 py-[18px] shadow-[0_1px_2px_rgba(16,24,40,0.04)]"
            >
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-[13px]">{idea.icon}</span>
                <span className="text-[10px] font-bold text-[#6B7480] uppercase tracking-[0.8px]">
                  {idea.themeLabel}
                </span>
              </div>
              <div className="text-[13.5px] text-[#1A1D24] leading-[1.5] font-semibold mb-2">
                {idea.hook}
              </div>
              <div className="text-[11.5px] text-[#6B7480] leading-[1.45]">
                Contexto: {idea.title}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
