import { themes } from "@/data/tendencias/content";
import SectionHeader from "@/components/sections/SectionHeader";
import FeedItemCard from "./FeedItemCard";

// Seção derivada: destaques mais recentes de todos os temas (últimos dias).
export default function EmAltaHojeSection() {
  const recent = themes
    .flatMap((t) => t.items.map((item) => ({ item, themeLabel: t.label })))
    .sort((a, b) => toKey(b.item.date) - toKey(a.item.date))
    .slice(0, 6);

  return (
    <section id="emalta" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="📰"
        part="Em alta · últimos dias"
        title="Em Alta"
        description="Os destaques mais recentes de todos os temas — o resumo para pautar conteúdo"
      />

      {recent.length === 0 ? (
        <div className="bg-[#F6F8FB] border border-dashed border-[#D2D9E4] rounded-xl px-6 py-10 text-center">
          <div className="text-[32px] mb-3">🗓️</div>
          <div className="text-[14px] font-bold text-[#1A1D24] mb-1">Nada capturado ainda</div>
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

// "30/07/2026" -> número comparável (AAAAMMDD)
function toKey(date: string): number {
  const [d, m, y] = date.split("/");
  return Number(`${y}${m}${d}`);
}
