import dynamic from "next/dynamic";
import SectionHeader from "./SectionHeader";

const CompletionChart = dynamic(() => import("@/components/charts/CompletionChart"), { ssr: false });
const VideoLengthChart = dynamic(() => import("@/components/charts/VideoLengthChart"), { ssr: false });
const LearningChart = dynamic(() => import("@/components/charts/LearningChart"), { ssr: false });

const formacaoItems = [
  { label: "Com bacharelado", val: "65%", pct: 65, color: "bg-[#2563EB]" },
  { label: "Autodidatas", val: "15%", pct: 15, color: "bg-[#0F766E]" },
  { label: "Vagas de UI/UX mencionam Figma", val: "67%", pct: 67, color: "bg-[#2563EB]" },
];

const dropout = [
  { icon: "⚠️", label: "Semanas 1–2", sub: "Maior pico de dropout — expectativa vs. realidade", color: "text-[#B91C1C]" },
  { icon: "📉", label: "Módulo 2–3", sub: "Queda de engajamento quando o conteúdo fica difícil", color: "text-[#B45309]" },
  { icon: "👻", label: "Silêncio total", sub: 'Aluno para de abrir, não cancela — "ghost completion"', color: "text-[#434A57]" },
];

const causes = [
  { rank: "1.", text: "Marketing ≠ realidade do curso (expectativa frustrada)", color: "text-[#B91C1C]" },
  { rank: "2.", text: "Sem interação com instrutor (sensação de abandono)", color: "text-[#B91C1C]" },
  { rank: "3.", text: "Carga percebida como excessiva", color: "text-[#B45309]" },
  { rank: "4.", text: "Sem accountability — sem prazo, sem pressão", color: "text-[#B45309]" },
  { rank: "5.", text: "Conteúdo irrelevante ou entediante", color: "text-[#6B7480]" },
  { rank: "6.", text: "Isolamento — aprendizado solitário desmotiva", color: "text-[#6B7480]" },
];

const tableRows = [
  ["Agência / Design Studio", "Portfólio da agência, aprende rápido", "Portfólio não é autoral — dificulta saída"],
  ["In-house (empresa)", "Estabilidade CLT, crescimento lento", "Pouca variedade de projetos"],
  ["Migração para UI/UX", "Salário 40–79% maior que design gráfico", "Requer capacitação adicional"],
  ["Freelance imediato", "Minoria — exige rede e portfólio antes de se formar", "Instabilidade de renda no início"],
  ["Pós-graduação / especialização", "Quer UX/UI ou direção criativa sem experiência", "Custo + tempo sem renda"],
  ["Abandona o design", "Vai para marketing, comunicação, educação", "Subnotificado — dado não oficial"],
  ["Vira infoprodutor/educador", "3–7 anos de mercado + audiência digital", "Requer autoridade + produto + distribuição"],
];

export default function AprendizadoSection() {
  return (
    <section id="aprendizado" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="📚"
        part="Parte 4"
        title="Como o Designer Estuda"
        description="Caminhos de aprendizado validados com dados"
      />

      <div className="grid grid-cols-2 gap-3.5 mb-3.5 max-md:grid-cols-1">
        <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
          <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">Formação acadêmica</h3>
          {formacaoItems.map((p) => (
            <div key={p.label} className="mb-3.5">
              <div className="flex justify-between text-[12px] text-[#434A57] mb-1.5">
                <span>{p.label}</span>
                <span className="text-[#1A1D24] font-bold">{p.val}</span>
              </div>
              <div className="h-[7px] bg-[#EEF1F6] rounded-full overflow-hidden">
                <div className={`h-full rounded-full ${p.color}`} style={{ width: `${p.pct}%` }} />
              </div>
            </div>
          ))}
          <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF]">Fonte: Colorlib / Figma Design Statistics 2026</div>
        </div>

        <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
          <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">Fontes de aprendizado preferidas</h3>
          <LearningChart />
          <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-2">Fonte: Colorlib — Graphic Design Statistics 2026</div>
        </div>
      </div>

      <div className="bg-[#E9F0FE] border border-[#D3E0FB] border-l-[3px] border-l-[#2563EB] rounded-[10px] px-[18px] py-[15px] text-[13.5px] text-[#434A57] mb-3.5 leading-[1.65]">
        <strong className="text-[#1A1D24]">43%</strong> dos designers aprendem a maior parte das habilidades pelo <strong className="text-[#1A1D24]">YouTube e recursos gratuitos</strong>. O Google UX Certificate já tem mais de <strong className="text-[#1A1D24]">1 milhão de conclusões</strong> globalmente.
      </div>

      <div className="bg-[#FFF7ED] border border-[#F5DCBE] border-l-[3px] border-l-[#B45309] rounded-[10px] px-[18px] py-[15px] text-[13.5px] text-[#434A57] mb-3.5 leading-[1.65]">
        <strong className="text-[#1A1D24]">O dado que ninguém fala:</strong> cursos gravados têm taxa de conclusão de apenas <strong className="text-[#1A1D24]">5–15%</strong>. Plataformas como Udemy reportam até <strong className="text-[#1A1D24]">97% de abandono</strong>. O IA LAB (ao vivo, 2 dias) opera no modelo com maior taxa de conclusão do mercado.
      </div>

      <div className="bg-white border border-[#E2E7EF] rounded-xl p-6 mb-3.5">
        <div className="text-[13px] font-bold text-[#1A1D24] mb-1">Taxa de conclusão por formato de curso</div>
        <div className="text-[12px] text-[#434A57] mb-5">Comparativo — formato gravado vs. ao vivo / com accountability</div>
        <CompletionChart />
        <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">Fontes: Harvard/MIT MOOC research · LearnStream · Xperiencify · DigitalDefynd 2025</div>
      </div>

      <div className="grid grid-cols-2 gap-3.5 mb-3.5 max-md:grid-cols-1">
        <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
          <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">Quando o abandono acontece</h3>
          <div className="flex flex-col gap-2.5">
            {dropout.map((d) => (
              <div key={d.label} className="flex gap-2.5 items-start">
                <span className="text-[18px] flex-shrink-0">{d.icon}</span>
                <div>
                  <div className={`text-[13px] font-semibold ${d.color}`}>{d.label}</div>
                  <div className="text-[12px] text-[#434A57]">{d.sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">Fonte: DigitalDefynd · Opigno · PMC Research 2024</div>
        </div>
        <div className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
          <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">Por que abandonam — ranking de causas</h3>
          <div className="flex flex-col gap-2">
            {causes.map((c) => (
              <div key={c.rank} className="text-[12px] text-[#434A57] flex gap-2">
                <span className={`font-semibold ${c.color}`}>{c.rank}</span>
                {c.text}
              </div>
            ))}
          </div>
          <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">Fonte: DigitalDefynd · MasterTeachingOnline · PMC 2024</div>
        </div>
      </div>

      <div className="bg-white border border-[#E2E7EF] rounded-xl p-6 mb-3.5">
        <div className="text-[13px] font-bold text-[#1A1D24] mb-1">Duração ideal de vídeo educacional vs. retenção</div>
        <div className="text-[12px] text-[#434A57] mb-5">Índice de engajamento relativo por duração — pesquisa MIT com 6,9 milhões de vídeos</div>
        <VideoLengthChart />
        <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">Fontes: MIT research · TechSmith Video Viewer Trends 2024 · Quality Matters · Univ. Wisconsin-Stout</div>
      </div>

      <div className="grid grid-cols-3 gap-3.5 mb-3.5 max-md:grid-cols-1">
        {[
          { title: "Preferência por dispositivo", val: "57%", valColor: "text-[#2563EB]", sub: "preferem mobile para conteúdo educacional", detail: "72% do tempo online global é no celular · 38% dos alunos valorizam app mobile como feature", src: "Fonte: Research.com · Skillademia 2025" },
          { title: "Modelo preferido de aprendizado", val: "55%", valColor: "text-[#0F766E]", sub: "preferem modelo híbrido (live + gravado)", detail: "Live sessions + replay + material de apoio acessível = formato ideal percebido pelos alunos", src: "Fonte: Skillademia · DigitalDefynd 2025" },
          { title: "Estágio e carreira", val: "≠", valColor: "text-[#B45309]", sub: "Estágio é o maior preditor de sucesso — não a nota", detail: "Graduados sem estágio têm muito mais dificuldade de entrar no mercado. Salário de entrada: USD 36k vs. mediana de USD 61k", src: "Fonte: BLS · Research.com 2026" },
        ].map((c) => (
          <div key={c.title} className="bg-white border border-[#E2E7EF] rounded-xl p-[22px]">
            <h3 className="text-[13px] font-bold text-[#434A57] uppercase tracking-[0.5px] mb-3.5">{c.title}</h3>
            <div className={`text-[33px] font-extrabold tracking-[-1px] leading-none ${c.valColor}`}>{c.val}</div>
            <div className="text-[12px] text-[#434A57] mt-1.5">{c.sub}</div>
            <hr className="my-3 border-[#E2E7EF]" />
            <div className="text-[12px] text-[#434A57]">{c.detail}</div>
            <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">{c.src}</div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#E2E7EF] rounded-xl overflow-hidden mb-3.5">
        <div className="px-5 py-3.5 border-b border-[#E2E7EF] text-[13px] font-bold text-[#1A1D24]">O que quem tem bacharelado em design faz depois</div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {["Caminho", "Perfil típico", "Desafio principal"].map((h) => (
                  <th key={h} className="text-[10.5px] font-bold uppercase tracking-[0.5px] text-[#6B7480] px-[18px] py-[11px] text-left border-b border-[#E2E7EF] bg-[#FAFAFA]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map(([caminho, perfil, desafio]) => (
                <tr key={caminho} className="hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-[18px] py-3 text-[13px] font-bold text-[#1A1D24] border-b border-[#E2E7EF]">{caminho}</td>
                  <td className="px-[18px] py-3 text-[13px] text-[#434A57] border-b border-[#E2E7EF]">{perfil}</td>
                  <td className="px-[18px] py-3 text-[13px] text-[#434A57] border-b border-[#E2E7EF]">{desafio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-[#E9F0FE] border border-[#CFE0FB] border-l-[3px] border-l-[#2563EB] rounded-xl p-[18px] mt-3.5">
        <h4 className="text-[14px] font-extrabold text-[#1A1D24] mb-2 flex items-center gap-2">🔍 As perguntas que você não sabia que precisava fazer</h4>
        <p className="text-[13px] text-[#434A57] mb-3">Estas revelam mais do que qualquer dado de mercado. São as que definem copy, formato de produto, timing de oferta e estratégia de upsell.</p>
        <div className="grid grid-cols-2 gap-2 max-md:grid-cols-1">
          {[
            { color: "text-[#2563EB]", label: "Comportamento de compra", items: ["Qual momento de vida dispara a busca por um curso?", "Quanto tempo entre ver e comprar?", "Comprou por indicação ou conteúdo?", "Quantas vezes voltou na página antes de comprar?"] },
            { color: "text-[#0F766E]", label: "Resultado e recompra", items: ["Quantos aplicaram algo em até 30 dias?", "Qual % voltaria a comprar outro produto?", "O que impediu quem não aplicou?", "Qual transformação real eles relatam — não a prometida?"] },
          ].map((q) => (
            <div key={q.label} className="bg-black/10 rounded-lg p-3">
              <div className={`text-[11px] font-semibold ${q.color} mb-1.5 uppercase tracking-[0.5px]`}>{q.label}</div>
              {q.items.map((item) => (
                <div key={item} className="text-[12px] text-[#434A57] leading-[1.7]">❓ {item}</div>
              ))}
            </div>
          ))}
        </div>
        <div className="text-[12px] text-[#434A57] mt-3">📌 <strong className="text-[#1A1D24]">Próximo passo:</strong> pesquisa com 8–12 alunos de edições anteriores do IA LAB. 30 minutos cada. Esse é o insumo para a análise de sinais invisíveis.</div>
      </div>
    </section>
  );
}
