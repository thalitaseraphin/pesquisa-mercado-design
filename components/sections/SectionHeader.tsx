interface SectionHeaderProps {
  icon: string;
  part: string;
  title: string;
  description: string;
}

export default function SectionHeader({ icon, part, title, description }: SectionHeaderProps) {
  return (
    <div className="flex items-start gap-[15px] mb-[30px] pb-[18px] border-b border-[#D2D9E4]">
      <div className="w-[42px] h-[42px] rounded-[11px] flex items-center justify-center text-[18px] flex-shrink-0 bg-[#E9F0FE] border border-[#D3E0FB]">
        {icon}
      </div>
      <div>
        <div className="text-[10px] font-extrabold text-[#2563EB] uppercase tracking-[1.4px] mb-1">
          {part}
        </div>
        <h2 className="text-[22px] font-extrabold tracking-[-0.6px] text-[#1A1D24]">
          {title}
        </h2>
        <p className="text-[13.5px] text-[#434A57] mt-1">{description}</p>
      </div>
    </div>
  );
}
