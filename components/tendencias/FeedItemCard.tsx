import type { FeedItem } from "@/data/tendencias/types";

// Card individual de um item do feed. Usado por todas as seções do dashboard
// de tendências. Se houver `source`, o card inteiro vira link.
export default function FeedItemCard({ item }: { item: FeedItem }) {
  const inner = (
    <>
      <div className="flex items-center gap-2 mb-2 flex-wrap">
        {item.tag && (
          <span className="text-[9.5px] font-extrabold uppercase tracking-[0.8px] px-2.5 py-0.5 rounded-[6px] bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]">
            {item.tag}
          </span>
        )}
        <span className="text-[11px] text-[#6B7480] font-semibold">{item.date}</span>
        {item.isNew && (
          <span className="text-[9px] font-extrabold text-white bg-[#2563EB] px-1.5 py-0.5 rounded-full uppercase tracking-[0.5px]">
            Novo
          </span>
        )}
      </div>

      <div className="text-[15.5px] font-bold text-[#1A1D24] leading-[1.4] mb-1.5">
        {item.title}
      </div>
      <div
        className="text-[13.5px] text-[#434A57] leading-[1.6]"
        dangerouslySetInnerHTML={{ __html: item.summary }}
      />

      {item.hook && (
        <div className="mt-3 flex items-start gap-2 bg-[#FFF9E9] border border-[#F5E6B8] rounded-lg px-3 py-2">
          <span className="text-[13px] flex-shrink-0 mt-px">💡</span>
          <div className="text-[12.5px] text-[#7A5B00] leading-[1.5]">
            <span className="font-bold">Gancho de conteúdo:</span> {item.hook}
          </div>
        </div>
      )}

      {item.source && (
        <span className="text-[11.5px] text-[#2563EB] font-semibold mt-[11px] inline-flex items-center gap-1">
          {item.source.label} <span className="text-[11px]">↗</span>
        </span>
      )}
    </>
  );

  const baseClass =
    "block bg-white border border-[#E2E7EF] border-l-[3px] border-l-[#2563EB] rounded-xl px-5 py-[18px] no-underline shadow-[0_1px_2px_rgba(16,24,40,0.04)]";

  if (item.source) {
    return (
      <a
        href={item.source.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClass} transition-all duration-[180ms] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(16,24,40,0.12)]`}
      >
        {inner}
      </a>
    );
  }

  return <div className={baseClass}>{inner}</div>;
}
