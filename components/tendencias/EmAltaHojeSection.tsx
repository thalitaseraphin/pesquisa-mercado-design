import { themes, LATEST_DATE } from "@/data/tendencias/content";
import SectionHeader from "@/components/sections/SectionHeader";
import FeedItemCard from "./FeedItemCard";

// Seção derivada: agrega os itens da data mais recente de todos os temas.
export default function EmAltaHojeSection() {
  const recent = themes
    .flatMap((t) => t.items.map((item) => ({ item, themeLabel: t.label })))
    .filter(({ item }) => item.date === LATEST_DATE);

  return (
    <section id="emalta" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="📰"
        part={`Em alta · ${LATEST_DATE}`}
        title="Em Alta Hoje"
        description="O que apareceu hoje em todos os temas — o resumo do dia para pautar conteúdo"
      />

      {recent.length === 0 ? (
        <div className="bg-[#F6F8FB] border border-dashed border-[#D2D9E4] rounded-xl px-6 py-10 text-center">
          <div className="text-[32px] mb-3">🗓️</div>
          <div className="text-[14px] font-bold text-[#1A1D24] mb-1">
            Nada capturado ainda para {LATEST_DATE}
          </div>
          <div className="text-[13px] text-[#6B7480]">
            A atualização diária preenche esta seção automaticamente.
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {recent.map(({ item, themeLabel }, i) => (
            <div key={i}>
              <div className="text-[10px] font-bold text-[#6B7480] uppercase tracking-[0.8px] mb-1.5">
                {themeLabel}
              </div>
              <FeedItemCard item={item} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
