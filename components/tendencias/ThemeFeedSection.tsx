import type { Theme } from "@/data/tendencias/types";
import SectionHeader from "@/components/sections/SectionHeader";
import FeedItemCard from "./FeedItemCard";

// Seção genérica orientada a dados: renderiza qualquer tema a partir do seu array.
export default function ThemeFeedSection({ theme }: { theme: Theme }) {
  // Mais recentes primeiro (ordenação simples por data DD/MM/AAAA).
  const items = [...theme.items].sort((a, b) => toKey(b.date) - toKey(a.date));

  return (
    <section id={theme.id} className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon={theme.icon}
        part="Tema"
        title={theme.label}
        description={theme.description}
      />

      {items.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <FeedItemCard key={`${theme.id}-${i}`} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}

function EmptyState() {
  return (
    <div className="bg-[#F6F8FB] border border-dashed border-[#D2D9E4] rounded-xl px-6 py-10 text-center">
      <div className="text-[32px] mb-3">🌱</div>
      <div className="text-[14px] font-bold text-[#1A1D24] mb-1">
        Ainda sem itens neste tema
      </div>
      <div className="text-[13px] text-[#6B7480]">
        Será preenchido pela atualização diária.
      </div>
    </div>
  );
}

// "30/07/2026" -> número comparável (AAAAMMDD)
function toKey(date: string): number {
  const [d, m, y] = date.split("/");
  return Number(`${y}${m}${d}`);
}
