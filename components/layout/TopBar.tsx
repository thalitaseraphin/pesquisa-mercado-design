interface TopBarProps {
  onMenuClick: () => void;
}

export default function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <div className="sticky top-0 z-30 flex items-center justify-between px-11 py-3.5 bg-[#EEF1F6]/85 backdrop-blur-[16px] border-b border-[#E2E7EF]">
      <div className="text-[13px] font-bold tracking-[-0.2px] text-[#1A1D24]">
        Pesquisa de Mercado · Design
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[11px] px-[11px] py-1 rounded-full border border-[#E2E7EF] font-semibold text-[#434A57] bg-white">
          71 fontes validadas
        </span>
        <span className="text-[11px] px-[11px] py-1 rounded-full bg-[#E9F0FE] text-[#1E40AF] border border-[#C9DBFB] font-semibold">
          23 seções
        </span>
        <button
          className="md:hidden border border-[#E2E7EF] text-[#434A57] px-2.5 py-1 rounded-md text-[16px] bg-white cursor-pointer"
          onClick={onMenuClick}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>
    </div>
  );
}
