import SectionHeader from "./SectionHeader";

const tasks = [
  { title: 'Reposicionar a oferta de “arte” para “sistema de marca + IA”', desc: "Reescrever portfólio e proposta para vender direção criativa, sistemas de identidade adaptativos e workflows com IA — não entregáveis avulsos. Atualizar página de serviços e pitch.", prio: "alta", horizon: "Esta semana" },
  { title: "Montar uma biblioteca de prompts e contexto de marca", desc: 'Criar um "asset institucional" de prompts por cliente/uso e documentos de contexto de marca (tom, regras, paleta) que a IA possa seguir. Cada hora investida em refinar prompt compõe valor.', prio: "alta", horizon: "30 dias" },
  { title: "Adotar 1 agente de IA de ponta a ponta num fluxo real", desc: "Escolher um pipeline (ex: variações de identidade, social kit) e rodar com agente de IA dentro da ferramenta que o time já usa diariamente — integração é o que cria hábito sustentável.", prio: "media", horizon: "30–60 dias" },
  { title: 'Criar oferta de “identidade viva” (motion-first)', desc: "Empacotar um serviço de sistema de marca dinâmico/kinético como produto, surfando a tendência 2026. Diferencia da concorrência ainda presa a logo estático.", prio: "media", horizon: "Trimestre" },
  { title: "Provar fluência em IA publicamente (conteúdo + cases)", desc: "Publicar bastidores de workflow com IA (LinkedIn, Instagram) para sinalizar fluência — o critério nº1 de contratação em 2026. Transformar processo em prova social.", prio: "media", horizon: "Contínuo" },
  { title: 'Otimizar presença para "ser recomendado por IA"', desc: "Garantir dados de marca consistentes e descritivos (site, perfis, descrições) para que agentes de IA recomendem você. Posicionamento legível por máquina vira aquisição.", prio: "baixa", horizon: "Trimestre" },
  { title: 'Criar sistema de reactive marketing — ser a próxima marca no feed', desc: 'Mapear os 5–10 momentos culturais previsíveis do semestre (Copa, festivais, premiações) e preparar ativos visuais de antecipação. O caso Endrick/Knicks provou: velocidade + relevância supera patrocínio. 5 marcas mobilizadas por 1 momento não planejado.', prio: 'media', horizon: '30–60 dias' },
  { title: `Estudar e replicar a estratégia Levi's de earned media zero-budget`, desc: 'Analisar o caso Copa 2026: marca proibida de exibir logo cobriu com pano, mudou o perfil do Instagram e virou a mais comentada sem investir em patrocínio. Encontrar o equivalente no contexto do cliente atual — restrição pode ser o brief.', prio: 'media', horizon: '30 dias' },
  { title: 'Monitorar Cannes Lions BR para calibrar benchmarks de campanha', desc: "GUT São Paulo ganhou Grand Prix em Outdoor com 'Field Barcode' (Pacaembu em código de barras para Mercado Livre). Usar as noites do Cannes 2026 para mapear o padrão de trabalho BR premiado — linguagem, formato, estratégia — e incorporar no briefing das próximas identidades.", prio: 'baixa', horizon: 'Contínuo' },
];

const prioStyle: Record<string, string> = {
  alta: "bg-[#2563EB] text-white",
  media: "bg-[#E9F0FE] text-[#1E40AF]",
  baixa: "bg-[#F6F8FB] text-[#6B7480] border border-[#D2D9E4]",
};

const prioLabel: Record<string, string> = {
  alta: "Prioridade alta",
  media: "Prioridade média",
  baixa: "Prioridade baixa",
};

export default function TarefasSection() {
  return (
    <section id="tarefas" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="✅"
        part="Plano de ação"
        title="Tarefas — O que Aplicar Agora no Meu Mercado"
        description="Ações concretas derivadas dos insights, priorizadas por impacto e prazo"
      />
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <div key={task.title} className="flex gap-3.5 bg-white border border-[#E2E7EF] rounded-xl p-[18px] items-start shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-[180ms] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(16,24,40,0.10)]">
            <div className="w-[22px] h-[22px] border-2 border-[#2563EB] rounded-[7px] flex-shrink-0 mt-0.5 relative">
              <span className="absolute inset-0 flex items-center justify-center text-[#2563EB] text-[13px] font-extrabold opacity-25">✓</span>
            </div>
            <div className="flex-1">
              <div className="text-[14.5px] font-bold text-[#1A1D24] mb-1">{task.title}</div>
              <div className="text-[13px] text-[#434A57] leading-[1.6]">{task.desc}</div>
              <div className="flex gap-2 mt-[11px] flex-wrap">
                <span className={`text-[9.5px] font-extrabold uppercase tracking-[0.6px] px-2.5 py-0.5 rounded-[6px] ${prioStyle[task.prio]}`}>
                  {prioLabel[task.prio]}
                </span>
                <span className="text-[9.5px] font-bold uppercase tracking-[0.6px] px-2.5 py-0.5 rounded-[6px] bg-[#F6F8FB] text-[#6B7480] border border-[#E2E7EF]">
                  {task.horizon}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">
        Tarefas derivadas dos insights acima, posts em destaque das Vozes do Mercado e recomendações de implementação 2026 (UX Tigers, Tommaso Ricci, Cflow). Revisadas a cada atualização.
      </div>
    </section>
  );
}
