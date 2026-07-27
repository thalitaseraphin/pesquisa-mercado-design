"use client";

import { useReportDate } from "@/context/ReportDateContext";
import SectionHeader from "./SectionHeader";

const news = [
  {
    href: "https://adsknews.autodesk.com/en/news/2026-ai-jobs-report/",
    tag: "Pesquisa",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "Jun 2026",
    reportDate: "26/07/2026",
    title: "Autodesk 2026 AI Jobs Report: vagas de IA em Design & Make mais que dobram em 2 anos (+147%)",
    desc: "Segundo relatório anual da Autodesk (divulgado em 22/06/2026): vagas de IA nas áreas de Design & Make cresceram <strong>147% em dois anos</strong>, com +33% só no último ano. O gap de skills persiste — 82% dos estudantes se dizem confiantes com IA genérica (ChatGPT/Claude), mas só 36% com ferramentas de IA específicas da profissão; entre profissionais, 80% vs. 49%. América do Norte cresceu +40% em 2026 (após +89% em 2025), sinal de desaceleração da fase inicial de adoção.",
    source: "Autodesk News — 2026 AI Jobs Report",
  },
  {
    href: "https://www.pwc.com/gx/en/news-room/press-releases/2026/pwc-2026-ai-jobs-barometer.html",
    tag: "Pesquisa",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "Jul 2026",
    reportDate: "26/07/2026",
    title: "PwC Global AI Jobs Barometer 2026: prêmio salarial de skills de IA sobe para 62%",
    desc: "Análise de mais de 1 bilhão de vagas em 27 países (não específico do setor de design, mas relevante como contexto de mercado de trabalho): o prêmio salarial para quem tem skills de IA subiu de <strong>25% (2024) → 57% (2025) → 62% (2026)</strong>. Vagas que exigem skills específicas de IA crescem 8x mais rápido (69%) que o mercado de vagas em geral (9%). Prêmio varia por setor: até 118% em consumer markets, 16% no setor público.",
    source: "PwC — 2026 Global AI Jobs Barometer",
  },
  {
    href: "https://www.uxtools.co/survey/interface-design/trends",
    tag: "Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "2026",
    reportDate: "26/07/2026",
    title: "UX Tools Survey 2026: Figma é usado por 82,3% dos designers de UI, 82,6% semanalmente",
    desc: "Pesquisa anual do UX Tools mostra domínio ainda maior do Figma em 2026 — usado por <strong>82,3% dos designers de UI</strong> pesquisados, com 82,6% relatando uso semanal (proporção de 46:1 em relação ao Sketch). O papel do Figma no fluxo está mudando: parte dos designers usa a ferramenta como ponto de partida para IA (wireframe → IA → código), enquanto outros a usam como 'bisturi' de acabamento em fluxos AI-first, prototipando em ambiente de desenvolvimento antes de voltar ao Figma para refinamento de alta fidelidade.",
    source: "UX Tools — Design Tools Survey 2026",
  },
  {
    href: "https://techbriefly.com/2026/02/19/canva-hits-265-million-active-users-and-4-billion-in-annual-revenue/",
    tag: "Mercado",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "Fev 2026",
    reportDate: "26/07/2026",
    title: "Canva atinge 265 milhões de usuários ativos mensais e US$4 bilhões em receita anual",
    desc: "Segundo o COO Cliff Obrecht à TechCrunch: a Canva fechou 2025 com <strong>mais de 265 milhões de usuários ativos mensais</strong> (+20% a/a) e US$4 bilhões em ARR, com mais de 31 milhões de usuários pagantes. O segmento B2B (empresas com 25+ assentos) cresceu 100% a/a, atingindo US$500 milhões em ARR — atualiza o dado de 220M de usuários já registrado na Parte 1.4 deste mapa.",
    source: "TechCrunch (via Cliff Obrecht, COO Canva) / Music Ally",
  },
  {
    href: "https://clutch.co/resources/graphic-design-industry-2026",
    tag: "Pesquisa",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "2026",
    reportDate: "24/07/2026",
    title: "Clutch.co: 88% das empresas usam IA no design, mas só 18% reduziram a contratação de designers",
    desc: "Pesquisa com 403 profissionais nos EUA mostra que <strong>90% das empresas usam designers gráficos</strong> em alguma capacidade e 88% já usam ferramentas de IA — mas apenas 18% dizem que isso reduziu a necessidade de designers (32% dizem que a IA substituiu só tarefas simples). <strong>47% aumentaram o orçamento de design</strong> no último ano e 53% esperam aumentar nos próximos 12 meses. Criatividade lidera como critério de contratação (39%), muito à frente de velocidade e custo (7% cada).",
    source: "Clutch.co — State of the Graphic Design Industry 2026",
  },
  {
    href: "https://www.creativeboom.com/news/the-state-of-the-creative-industry-2026-what-our-survey-tells-us-about-money-burnout-and-ai/",
    tag: "Pesquisa",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "Jun 2026",
    reportDate: "24/07/2026",
    title: "Creative Boom: 69% dos criativos relatam burnout e só 10% veem a IA como positiva para a indústria",
    desc: "Pesquisa com 882 profissionais criativos (Reino Unido/EUA) revela o maior gap do levantamento: <strong>86% já usam IA no trabalho, mas só 10% avaliam seu efeito geral como positivo</strong> (58% dizem 'misto', 28% negativo). 47% dos criativos autônomos no Reino Unido ganham menos de £30.000/ano, e 'IA' foi a resposta disparada quando perguntados sobre a tendência de design da qual estão mais cansados.",
    source: "Creative Boom — State of the Creative Industry 2026",
  },
  {
    href: "https://www.mordorintelligence.com/industry-reports/user-experience-market",
    tag: "Mercado",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "2026",
    reportDate: "24/07/2026",
    title: "Mordor Intelligence mapeia novo segmento: 'User Experience Market' em US$13,58 bilhões (2026)",
    desc: "Categoria mais ampla que o 'UX Design Market' já registrado neste mapa: estimada em <strong>US$13,58 bilhões em 2026</strong>, com projeção de US$30,24B em 2031 (CAGR 17,38%). É um recorte metodológico distinto — não deve ser somado ao UX Design Market (US$13,06B em 2026) já mapeado na Parte 1.2.",
    source: "Mordor Intelligence — User Experience Market",
  },
  {
    href: "https://investor.figma.com/news-events/news/news-details/2026/Figma-Announces-First-Quarter-2026-Financial-Results/default.aspx",
    tag: "Mercado",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "Mai 2026",
    reportDate: "24/07/2026",
    title: "Figma fecha o 1º trimestre fiscal de 2026 com receita de US$333,4M, alta de 46% ano a ano",
    desc: "Resultado divulgado em 14/05/2026 supera a projeção de analistas (US$316M). O <strong>net dollar retention subiu para 139%</strong>, o maior nível em mais de dois anos, e o lucro por ação não-GAAP veio em US$0,10 vs. consenso de US$0,06 — sinal de saúde financeira forte da ferramenta central do setor de design.",
    source: "Figma Investor Relations — Q1 FY2026 Results",
  },
  {
    href: "https://www.businessresearchinsights.com/market-reports/graphic-design-market-117837",
    tag: "Mercado",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "2026",
    reportDate: "24/07/2026",
    title: "Business Research Insights revisa o mercado de design gráfico: US$56,93B em 2026",
    desc: "Nova estimativa: mercado geral de design gráfico em <strong>US$56,93B (2026) → US$62,18B (2035)</strong>, CAGR 5,4%; o segmento específico de serviços ('Graphic Design Services') em US$55,71B (2026) → US$73,36B (2035), CAGR 3,5%. Complementam, sem substituir, as estimativas já mapeadas na Parte 1.1 deste documento.",
    source: "Business Research Insights — Graphic Design Market",
  },
  {
    href: "https://news.adobe.com/news/2026/06/adobe-to-acquire-topaz-labs",
    tag: "Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "Jul 2026",
    reportDate: "23/07/2026",
    title: "Adobe fecha acordo para adquirir a Topaz Labs, especialista em upscaling e restauração por IA",
    desc: "A Adobe anunciou acordo definitivo para adquirir a <strong>Topaz Labs</strong> (Topaz Photo, Video e Gigapixel), referência em upscaling, nitidez, estabilização e restauração de imagem/vídeo por IA. Fechamento previsto para o 2º semestre de 2026. As ferramentas devem ser integradas ao Firefly e à Creative Cloud, mas continuam disponíveis como produtos standalone.",
    source: "Adobe Newsroom — Adobe to Acquire Topaz Labs",
  },
  {
    href: "https://www.roberthalf.com/us/en/insights/career-development/hot-job-graphic-designer",
    tag: "Mercado",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "2026",
    reportDate: "23/07/2026",
    title: "Robert Half 2026: salário inicial de graphic designer nos EUA vai de US$52k a US$79,5k",
    desc: "O Salary Guide 2026 da Robert Half mostra faixa inicial entre <strong>US$52.000 e US$79.500/ano</strong> para graphic designers nos EUA, variando por experiência e skills. 69% dos líderes de marketing/criativo dizem que a IA está remodelando as skills exigidas em suas equipes — e metade aponta falta de talento com skills de IA como maior barreira de adoção.",
    source: "Robert Half — Graphic Design Careers in 2026",
  },
  {
    href: "https://bestjobsearchapps.com/articles/en/7-highdemand-freelance-skills-for-2026-gigs-on-upwork-and-fiverr",
    tag: "Mercado",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "Fev 2026",
    reportDate: "23/07/2026",
    title: "Upwork: freelancers em projetos de IA ganham 44% mais por hora do que quem não trabalha com IA",
    desc: "O relatório 'In-Demand Skills' da Upwork (fevereiro/2026) confirma o prêmio de mercado para quem domina IA: freelancers em projetos relacionados a IA cobram, em média, <strong>44% mais por hora</strong> do que os que atuam em projetos sem IA — reforçando a bifurcação entre execução comoditizada e especialização premium.",
    source: "Upwork — In-Demand Skills Report 2026",
  },
  {
    href: "https://stateofaidesign.com/chapters/tools",
    tag: "Pesquisa",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "2026",
    reportDate: "23/07/2026",
    title: "Designers trocam de ferramenta de IA: ChatGPT cai de 88% para 65%, Claude sobe de 52% para 78%",
    desc: "O capítulo 'Tools' do State of AI Design 2026 mostra rotatividade real no toolstack: entre ferramentas gerais de IA usadas por designers, o <strong>ChatGPT caiu de 88% (2025) para 65% (2026)</strong> de adoção, enquanto o <strong>Claude subiu de 52% para 78%</strong> no mesmo período. O designer médio já usa 7 ferramentas de IA regularmente — mais que o dobro do ano anterior (3).",
    source: "State of AI Design Report 2026 — Tools",
  },
  {
    href: "https://www.canva.com/newsroom/news/design-trends-2026/",
    tag: "Branding",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "Jul 2026",
    reportDate: "06/07/2026",
    title: "Canva declara 2026 o ano do 'Imperfect by Design' — a era da imperfeição humana",
    desc: "O relatório de tendências da Canva descreve uma <strong>rebelião criativa contra a estética hiperpolida da IA</strong>: 80% dos criadores dizem que 2026 é o ano de 'retomar o controle criativo' — não rejeitando a IA, mas usando-a nos próprios termos. Elementos feitos à mão e táteis geram <strong>67% mais engajamento</strong> que o output puramente gerado por IA.",
    source: "Canva Newsroom — Imperfect by Design 2026",
  },
  {
    href: "https://www.creativebloq.com/design/graphic-design/texture-warmth-and-tactile-rebellion-the-big-graphic-design-trends-for-2026",
    tag: "Mercado",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "Jul 2026",
    reportDate: "06/07/2026",
    title: "A monocultura visual da IA vira o novo inimigo — e o craft, a resposta",
    desc: "Quando todos usam os mesmos modelos treinados nos mesmos dados, tudo converge para a mesma estética — <strong>gradientes suaves e o logo 'swirl' abstrato que ~62 mil startups de IA reinventaram sozinhas</strong>. A reação de 2026 é textura, calor e 'rebelião tátil': grão, colagem, handmade e serifas 'tortas' como prova de presença humana.",
    source: "Creative Bloq — Tactile Rebellion 2026",
  },
  {
    href: "https://thenextweb.com/news/google-pics-workspace-ai-image-generator-nano-banana-2",
    tag: "Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "Jul 2026",
    reportDate: "06/07/2026",
    title: "Google entra na disputa do design com o Pics — IA nativa no Workspace",
    desc: "No I/O 2026, o Google apresentou o <strong>Pics</strong>, app de design e geração de imagem embutido no Workspace, mirando Canva e Claude Design. Movido pelo <strong>Nano Banana 2</strong> (renderização de texto precisa e edição elemento a elemento via Gemini), ele nasce dentro de Docs e Slides. Rollout amplo para assinantes AI Ultra ainda neste verão (EUA).",
    source: "The Next Web — Google Pics",
  },
  {
    href: "https://news.adobe.com/news/2026/06/adobe-unveils-major-expansion",
    tag: "Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "Jun 2026",
    reportDate: "06/07/2026",
    title: "Adobe expande o Creative Agent por toda a Creative Cloud",
    desc: "A Adobe leva o <strong>Creative Agent</strong> para Photoshop, Premiere e Firefly: o usuário descreve o resultado em linguagem natural e o agente <strong>orquestra e executa fluxos multi-etapa</strong> entre os apps. Com 41% de adoção corporativa do Firefly, a aposta é clara — a IA agêntica vira a camada padrão de trabalho na suíte.",
    source: "Adobe Newsroom — Creative Agent Expansion",
  },
  {
    href: "https://stateofaidesign.com/chapters/tools",
    tag: "Pesquisa",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "2026",
    reportDate: "06/07/2026",
    title: "State of AI in Design 2026: 91% usam IA toda semana e 77% a chamam de 'parceira essencial'",
    desc: "O levantamento consolida a IA como base do fluxo: <strong>91% dos designers usam IA generativa semanalmente</strong> (era 54% em 2025) e 77% a descrevem como 'parceira essencial'. Mas o mesmo relatório aponta o contramovimento — o valor humano migra para curadoria, ponto de vista e o que a máquina converge a não fazer.",
    source: "State of AI in Design Report 2026",
  },
  {
    href: "https://stratechery.com/2026/an-interview-with-figma-ceo-dylan-field-about-design-and-ai/",
    tag: "Mercado",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "26 Jun 2026",
    reportDate: "26/06/2026",
    title: `Dylan Field rebate o rótulo de "AI loser": para o CEO da Figma, IA é tailwind, não headwind`,
    desc: "Em entrevista pós-Config, o fundador da Figma argumenta que o canvas é a <strong>interseção natural entre design e IA</strong> — e que a narrativa de mercado que tratou a empresa como perdedora da onda de IA erra o alvo. A leitura: a ferramenta que organiza intenção visual vira ainda mais central quando a geração fica barata.",
    source: "Stratechery — Interview with Dylan Field",
  },
  {
    href: "https://freshlybrewed.co/insights-news/brand-identity-in-2026-what-ai-cant-copy/",
    tag: "Branding",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "Jun 2026",
    reportDate: "26/06/2026",
    title: "Branding 2026: a IA comoditizou logo, paleta e sistema visual — mas não a convicção",
    desc: "A análise resume o que ainda não foi automatizado: <strong>convicção sobre o que a marca representa, disciplina sobre o que ela não é e julgamento para fazer ambos chegarem ao comprador</strong>. Ferramentas geram artefato; o diferencial humano é o ponto de vista que dá sentido a ele.",
    source: "Freshly Brewed — What AI Can't Copy",
  },
  {
    href: "https://elements.envato.com/learn/logo-and-branding-trends",
    tag: "Brand Identity",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "2026",
    reportDate: "26/06/2026",
    title: `Tendências de logo 2026: logos kinéticos, "childlike anarchy" e a morte do skin-deep`,
    desc: "O recado do levantamento de branding é que a identidade <strong>estática e superficial perde espaço para sistemas kinéticos, adaptativos e com personalidade</strong>. Logo deixa de ser um arquivo final e passa a ser um sistema que se move e se ajusta por contexto.",
    source: "Envato Elements — Logo & Branding Trends 2026",
  },
  {
    href: "https://medium.com/@sovannaro/10-best-ai-logo-generators-for-professional-brand-design-in-2026-4361243de404",
    tag: "Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "Jun 2026",
    reportDate: "26/06/2026",
    title: "Geradores de logo por IA (Looka, Brandmark) miram o tier de entrada do branding",
    desc: "O ranking mostra ferramentas de machine learning entregando conceitos que rivalizam com a execução manual e tornam <strong>branding básico acessível a qualquer um</strong>. Para o profissional, o sinal é claro: o valor sai da entrega do logo e migra para estratégia, narrativa e sistema de marca.",
    source: "Medium — 10 Best AI Logo Generators 2026",
  },
  {
    href: "https://www.figma.com/blog/config-2026-recap/",
    tag: "Evento",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "25 Jun 2026",
    reportDate: "25/06/2026",
    title: "Figma Config 2026 encerra: Code Layers, Motion, Weave e shaders chegam ao canvas",
    desc: "Recap do Config (23–25/06): a Figma transforma o canvas num ambiente expressivo — <strong>Code Layers</strong> (código como material de design), <strong>Figma Motion</strong> nativo, ferramentas <strong>Weave</strong> de IA generativa (imagem/vídeo/motion), shaders GPU customizados, plugins generativos e um agente atualizado. Dylan Field: 'a IA baixou o piso, mas os designers elevam o teto'.",
    source: "Figma Blog — Config 2026 Recap",
  },
  {
    href: "https://www.cmswire.com/digital-experience/figma-launches-code-layers-motion-at-config-2026/",
    tag: "Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "25 Jun 2026",
    reportDate: "25/06/2026",
    title: "Figma Motion: timeline com keyframes e export em CSS, React, MP4, WebM e SVG animado",
    desc: "Disponível agora em open beta em todos os planos, o <strong>Figma Motion</strong> traz timeline com keyframes e presets, e exporta para CSS, JSON, React, MP4, WebM, SVG animado e GIF. Animação deixa de exigir ferramenta à parte e passa a viver dentro do arquivo de design — motion vira parte nativa do fluxo.",
    source: "CMSWire — Figma launches Code Layers & Motion",
  },
  {
    href: "https://thenextweb.com/news/figma-config-code-layers-ai-skills-plugins-animations",
    tag: "Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "25 Jun 2026",
    reportDate: "25/06/2026",
    title: "'Código é material de design': Code Layers e plugins de IA por prompt no Config",
    desc: "Qualquer camada vira uma <strong>camada de código interativa</strong> com um clique ou prompt — clonar repositório no canvas, converter componentes em código editável (React + npm, incluindo bibliotecas de motion e 3D) e ajustar via chat de IA. Acesso antecipado começa em julho. Usuários também criam <strong>plugins generativos por descrição</strong>, sem setup de dev.",
    source: "The Next Web — Figma Config 2026",
  },
  {
    href: "https://www.techtimes.com/articles/319041/20260625/figma-config-2026-code-layers-challenge-cursor-gpu-shaders-hit-paid-plans.htm",
    tag: "Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "25 Jun 2026",
    reportDate: "25/06/2026",
    title: "Shaders GPU (WebGPU) entram nos planos pagos e Code Layers mira o território do Cursor",
    desc: "Os <strong>shader fills e effects via WebGPU</strong> — antes experimentais — passam a integrar os planos pagos, trazendo efeitos visuais avançados ao canvas. E o Code Layers posiciona a Figma diretamente contra editores como o Cursor no fluxo design→código, sinalizando a aposta de 'design e engenharia no mesmo arquivo'.",
    source: "Tech Times — Config 2026: shaders & Code Layers",
  },
  {
    href: "https://investors.upwork.com/news-releases/news-release-details/upworks-demand-skills-2026-demand-top-ai-skills-more-doubles-ai",
    tag: "Mercado",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "2026",
    reportDate: "25/06/2026",
    title: "Upwork In-Demand Skills 2026: demanda por skills de IA cresce +109% e o freelance se bifurca",
    desc: "A demanda por habilidades de IA <strong>mais que dobrou (+109% a/a)</strong> no Upwork. O design básico encolheu ~28% como categoria, enquanto freelancers <strong>especializados em IA cobram 25–60% acima</strong> dos generalistas no mesmo campo. O mercado se parte em dois: execução comoditizada de um lado, prêmio para quem combina design + IA do outro.",
    source: "Upwork — In-Demand Skills 2026",
  },
  {
    href: "https://releasebot.io/updates/adobe/firefly",
    tag: "Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "Jun 2026",
    reportDate: "24/06/2026",
    title: "Adobe Firefly vira hub multi-modelo: 25+ modelos de IA e workspace criativo unificado",
    desc: "Atualização de junho/2026: o Firefly ganha um espaço único para gerar, editar e organizar conteúdo (imagem, vídeo, áudio, boards) e passa a hospedar 25+ modelos de parceiros — OpenAI (GPT Image), Google (Veo, Nano Banana 2), Black Forest Labs (Flux.2) e Runway. O Gen-4.5 da Runway roda dentro do app usando os créditos do Firefly Pro.",
    source: "Adobe Firefly — Release Notes Jun 2026",
  },
  {
    href: "https://news.adobe.com/news/2026/06/introducing-adobe-brand-visibility",
    tag: "Branding",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "Jun 2026",
    reportDate: "24/06/2026",
    title: "Adobe lança Brand Visibility: marca precisa ser 'legível' para a busca por IA",
    desc: "A Adobe apresenta uma solução unificada para a era da busca por IA: medir e melhorar como uma marca aparece em respostas de assistentes e mecanismos generativos. Sinal claro de que branding em 2026 inclui ser descoberto e recomendado por agentes — não só por humanos.",
    source: "Adobe Newsroom — Brand Visibility",
  },
  {
    href: "https://colorlib.com/wp/graphic-design-statistics/",
    tag: "Mercado",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "2026",
    reportDate: "24/06/2026",
    title: "Mercado de design segue crescendo (US$45,8B → US$78,3B até 2032) e a barra de skill subiu",
    desc: "Apesar do medo da IA, a indústria cresce: 75% dos designers já usam IA, mas 67% a tratam como complemento. Figma aparece em 67% das vagas (era 30% em 2021) e ferramentas de IA em 32% (era 3% em 2023). Freelancers mid-level cobram US$75–130/h — com identidade de marca e packaging no topo da faixa.",
    source: "Colorlib — Graphic Design Statistics 2026",
  },
  {
    href: "https://www.figma.com/newsroom/",
    tag: "Pesquisa",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "Jun 2026",
    reportDate: "24/06/2026",
    title: "Figma State of the Designer 2026: 72% já usam IA generativa e 91% dizem que ela melhora o output",
    desc: "O relatório anual da Figma mostra a IA consolidada no fluxo: 72% dos designers usam IA generativa e 91% afirmam que ela eleva a qualidade do trabalho. Ainda assim, 67% a veem como complemento — e só 18% das empresas dizem que ela reduziu a necessidade de designers.",
    source: "Figma Newsroom — State of the Designer 2026",
  },
  {
    href: "https://releasebot.io/updates/midjourney",
    tag: "Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "Jun 2026",
    reportDate: "24/06/2026",
    title: "Midjourney torna o V8.1 o modelo padrão e libera o Draft mode — 24 imagens rápidas por geração",
    desc: "O modelo default passa de V7 para V8.1, com prompts mais inteligentes, melhor renderização de texto e saída HD (2x o tamanho e 4x a resolução do V7). O novo Draft mode gera 24 imagens em baixa resolução para iterar rápido; clicar em 'Vary' renderiza a escolhida em qualidade total.",
    source: "Midjourney Release Notes — Jun 2026",
  },
  {
    href: "https://rgd.ca/articles/2026-amplifying-creativity-with-ai-tools-for-designers-in-2026",
    tag: "Carreira",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "2026",
    reportDate: "24/06/2026",
    title: "RGD: o foco de 2026 é IA responsável — amplificar criatividade sem terceirizar o julgamento",
    desc: "A associação de designers do Canadá publica diretrizes para 2026: usar IA para acelerar exploração e tarefas repetitivas, mantendo curadoria humana, transparência com o cliente e responsabilidade sobre direitos e qualidade. O recado: a ferramenta amplia, não substitui o critério profissional.",
    source: "RGD — AI Tools for Designers 2026",
  },
  {
    href: "https://www.upwork.com/resources/will-ai-replace-graphic-designers",
    tag: "Mercado",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "2026",
    reportDate: "24/06/2026",
    title: "Tier commodity (logo, social, branding básico) já é dominado por IA — valor migra para estratégia",
    desc: "Levantamento de mercado: o trabalho que antes custava US$200–800 (logos, templates de social, branding básico) está quase todo capturado por Canva e Midjourney. Quem sobrevive vende pensamento estratégico e resultados de negócio documentados, não portfólio de execução.",
    source: "Upwork — Will AI Replace Graphic Designers",
  },
  {
    href: "https://config.figma.com/",
    tag: "Evento",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "23 Jun 2026",
    reportDate: "23/06/2026",
    title: "Figma Config 2026 abre HOJE em San Francisco — a edição mais focada em IA da história",
    desc: "Começa hoje (23–25/06) no Moscone Center. Keynote do Dylan Field amanhã às 9h PDT. Agenda dominada por design agent, Figma Make e workflows de IA — a indústria toda acompanha para calibrar roadmap.",
    source: "Figma Config 2026",
  },
  {
    href: "https://www.figma.com/blog/config-speakers-looking-ahead-2026/",
    tag: "Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "23 Jun 2026",
    reportDate: "23/06/2026",
    title: "Figma Make e o design agent ganham web search e nova fase no Config",
    desc: "O design agent passa a buscar contexto vivo na web (boas práticas e conteúdo real) sem sair do arquivo. O Figma Make — já a 60% de uso semanal entre os maiores clientes enterprise no Q1 — entra em nova fase com edição direta, anotações e criação de PR.",
    source: "Figma Blog — Config 2026 Speakers",
  },
  {
    href: "https://www.fastcompany.com/91545081/canva-gemini-integration",
    tag: "IA · Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "Jun 2026",
    reportDate: "23/06/2026",
    title: "Canva + Gemini torna o design gráfico por IA ubíquo",
    desc: "Com a integração ao Google Gemini, a Canva fecha o ciclo: já está dentro de Claude, ChatGPT, Copilot e Gemini. Designs nascem na IA já dentro das regras do Brand Kit. Uso dos produtos de IA da Canva triplicou em um ano — produção de marca por IA vira padrão para qualquer um.",
    source: "Fast Company — Canva × Gemini",
  },
  {
    href: "https://www.clevermarketing.co.uk/graphic-design-news-june-2026/",
    tag: "Mercado",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "Jun 2026",
    reportDate: "23/06/2026",
    title: "Empresas trocam design encomendado por IA-graphics — e designers acendem o alerta",
    desc: 'Roundup de junho: cresce a substituição de trabalho criativo por gráficos gerados por IA em material promocional. A reação não é só sobre emprego — é sobre qualidade, consistência de marca e a "corrida para o fundo" quando "good enough" vira o brief.',
    source: "Clever Marketing — Graphic Design News",
  },
  {
    href: "https://humbldesign.io/blog-posts/will-ai-replace-designers-2026",
    tag: "Carreira",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "2026",
    reportDate: "23/06/2026",
    title: "Design skill é agora a competência #1 em vagas de IA — à frente de código e cloud",
    desc: "Análise de mercado em meados de 2026: IA substitui tarefas, não papéis. UX/produto cresce ~16% até 2034 contra 2–3% do design gráfico, e a habilidade de design lidera os anúncios de vaga em IA. O valor migra de executar para julgar, posicionar e dar ponto de vista.",
    source: "Humbl Design — Will AI Replace Designers 2026",
  },
  {
    href: "https://www.figma.com/blog/direct-every-frame-with-runway-aleph-2/",
    tag: "Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "18 Jun 2026",
    reportDate: "22/06/2026",
    title: "Figma Weave ganha Runway Aleph 2.0: direção criativa frame a frame",
    desc: "Lançado em 18/06, o Aleph 2.0 traz controle de vídeo no canvas do Figma — trocar ângulo de câmera, inserir personagem ou transformar o cenário sem refilmagem. Direção de motion vira parte do design tool.",
    source: "Figma Blog — Runway Aleph 2.0 in Weave",
  },
  {
    href: "https://config.figma.com/",
    tag: "Evento",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "23–25 Jun 2026",
    reportDate: "22/06/2026",
    title: "Figma Config 2026 começa amanhã (23–25/06) em San Francisco",
    desc: "A maior conferência de design da Figma acontece esta semana no Moscone Center. Expectativa de anúncios de IA agêntica no canvas — a indústria toda acompanha para calibrar roadmap.",
    source: "Figma Config 2026",
  },
  {
    href: "https://dataconomy.com/2026/04/17/canva-ai-2-0-targets-adobe-and-figma-with-fully-editable-ai-outputs/",
    tag: "IA · Ferramenta",
    tagClass: "bg-[#2563EB] text-white",
    date: "2026",
    reportDate: "22/06/2026",
    title: "Canva AI 2.0 e Claude Design miram Adobe e Figma com outputs editáveis",
    desc: "Canva afirma ter co-desenvolvido o Claude Design com a Anthropic e adiciona botão 'export to Canva'. A diferença competitiva passou de gerar para gerar já editável e dentro do fluxo de marca.",
    source: "Dataconomy — Canva AI 2.0",
  },
  {
    href: "https://weandthecolor.com/freelance-designers-cant-compete-with-a-20-month-ai-subscription-heres-what-actually-works-now/209620",
    tag: "Mercado",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "2026",
    reportDate: "22/06/2026",
    title: "O colapso do freelance mid-level por causa da IA",
    desc: "Estudo Ramp 'Payrolls to Prompts' (fev/2026): gasto com plataformas de freelance caiu de 0,66% para 0,14% dos orçamentos, enquanto gasto com modelos de IA subiu de 0 para 2,85%. Originalidade e narrativa de marca viram o que ainda paga.",
    source: "WeAndTheColor — Freelance Market & AI",
  },
  {
    href: "https://designerfund.com/blog/ai-in-design-2026",
    tag: "IA · Design",
    tagClass: "bg-[#2563EB] text-white",
    date: "Jun 2026",
    reportDate: "19/06/2026",
    title: "91% dos designers já usam IA toda semana — e o toolstack dobrou",
    desc: `Metade já entregou código gerado por IA; 89% trabalham mais rápido. O foco migra de execução para direção criativa e curadoria. A "inflexão" da IA no design chegou.`,
    source: "Designer Fund — AI in Design 2026",
  },
  {
    href: "https://www.successful-blog.com/1/how-ai-is-changing-branding/",
    tag: "Branding",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "2026",
    reportDate: "19/06/2026",
    title: `Identidades "vivas": logos que mudam por contexto, hora e emoção`,
    desc: "Marcas trocam o logo estático por sistemas kinéticos e motion-first. IA gera milhares de variações em minutos — o trabalho humano vira refino e coerência emocional.",
    source: "Successful Blog — How AI is Changing Branding",
  },
  {
    href: "https://www.threerooms.com/blog/8-design-trends-shaping-brand-identity-in-2026",
    tag: "Brand Identity",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "2026",
    reportDate: "19/06/2026",
    title: "8 tendências de identidade de marca em 2026",
    desc: '"Hybrid Intelligence humanizada", agentes de IA como novos gatekeepers da escolha do consumidor, e paletas minimalistas (preto, branco, azul) que projetam confiança e clareza.',
    source: "Three Rooms — Brand Identity Trends 2026",
  },
  {
    href: "https://news.adobe.com/news/2026/04/adobe-new-creative-agent",
    tag: "Ferramenta",
    tagClass: "bg-[#F6F8FB] text-[#434A57] border border-[#D2D9E4]",
    date: "Abr 2026",
    reportDate: "19/06/2026",
    title: "Adobe lança Creative Agent e novas IAs do Firefly",
    desc: `Agentes autônomos que executam pipelines criativos multi-etapa a partir de um único brief, mantendo parâmetros de marca em lotes de output. O "vibe design" entra na suíte.`,
    source: "Adobe Newsroom",
  },
  {
    href: "https://www.kittl.com/blogs/graphic-design-trends-2026/",
    tag: "Design Gráfico",
    tagClass: "bg-[#2563EB] text-white",
    date: "2026",
    reportDate: "19/06/2026",
    title: "10 tendências de design gráfico para 2026 (Kittl)",
    desc: '"Design como conhecimento executável": regras de marca e lógica de layout armazenadas em formatos que máquinas seguem. Estética nostálgica-futurista, handcrafted + IA.',
    source: "Kittl Blog — Graphic Design Trends 2026",
  },
  {
    href: "https://www.superside.com/blog/ai-design-agencies",
    tag: "Agências",
    tagClass: "bg-[#E9F0FE] text-[#1E40AF] border border-[#CFE0FB]",
    date: "2026",
    reportDate: "19/06/2026",
    title: "As agências de design AI-native que estão definindo o padrão",
    desc: "79% das empresas já saíram da avaliação para a implementação ativa de agentes de IA no início de 2026 — fluxos agênticos viraram padrão competitivo, não experimento.",
    source: "Superside — Top AI Design Agencies 2026",
  },
];

const instagramAccounts = [
  { handle: "@figmadesign", url: "https://www.instagram.com/figmadesign/", desc: "Workflows e AI features do Figma em tempo real" },
  { handle: "@canva", url: "https://www.instagram.com/canva/", desc: "Tendências de design + tutoriais de IA" },
  { handle: "@adobe", url: "https://www.instagram.com/adobe/", desc: "Firefly, Photoshop e lançamentos criativos" },
  { handle: "@behance", url: "https://www.instagram.com/behance/", desc: "Portfólios em destaque e cases de branding" },
  { handle: "@dribbble", url: "https://www.instagram.com/dribbble/", desc: "UI, web design e inspiração para portfólio" },
];

const instagramHashtags = [
  { tag: "#identidadevisual", url: "https://www.instagram.com/explore/tags/identidadevisual/", lang: "BR" },
  { tag: "#designbrasileiro", url: "https://www.instagram.com/explore/tags/designbrasileiro/", lang: "BR" },
  { tag: "#logotipo", url: "https://www.instagram.com/explore/tags/logotipo/", lang: "BR" },
  { tag: "#brandingbr", url: "https://www.instagram.com/explore/tags/brandingbr/", lang: "BR" },
  { tag: "#logodesign", url: "https://www.instagram.com/explore/tags/logodesign/", lang: "EN" },
  { tag: "#brandidentity", url: "https://www.instagram.com/explore/tags/brandidentity/", lang: "EN" },
  { tag: "#motiondesign", url: "https://www.instagram.com/explore/tags/motiondesign/", lang: "EN" },
  { tag: "#graphicdesign", url: "https://www.instagram.com/explore/tags/graphicdesign/", lang: "EN" },
];

const instagramFormats = [
  { format: "Reels antes/depois com IA", stat: "+240% engagement vs. estático", hot: true },
  { format: "Carrossel de processo (7–10 slides)", stat: "Alta taxa de salvamento", hot: true },
  { format: "Identidade visual completa em <60s", stat: "Viral em branding — máx. retenção", hot: true },
  { format: "Tutorial de prompt (Firefly/Midjourney)", stat: "Em crescimento", hot: false },
  { format: "Case com valores e processo no caption", stat: "Alta conversão → DM", hot: false },
];

export default function NovidadesSection() {
  const { selectedDate, setSelectedDate } = useReportDate();
  const filtered = selectedDate ? news.filter((n) => n.reportDate === selectedDate) : news;

  return (
    <section id="novidades" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="📰"
        part="Leitura · atualizado 26/07/2026"
        title="Novidades & Notícias"
        description="IA no design gráfico, branding e ferramentas — para ler e acompanhar"
      />

      {selectedDate && (
        <div className="flex items-center gap-2 mb-4 text-[12px] text-[#6B7480]">
          <span className="text-[#2563EB] font-bold">📅 Filtrando: {selectedDate}</span>
          <button onClick={() => setSelectedDate("")} className="text-[11px] text-[#6B7480] hover:text-[#1A1D24] underline">
            ver todos
          </button>
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="bg-[#F6F8FB] border border-[#E2E7EF] rounded-xl px-6 py-10 text-center mb-5">
          <div className="text-[32px] mb-3">📭</div>
          <div className="text-[14px] font-bold text-[#1A1D24] mb-1">Nenhuma notícia registrada em {selectedDate}</div>
          <div className="text-[13px] text-[#6B7480] mb-4">Selecione outra data no menu lateral para ver as notícias capturadas naquele dia.</div>
          <button onClick={() => setSelectedDate("")} className="text-[12px] font-bold text-[#2563EB] hover:underline">
            Ver todas as notícias →
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3 mb-5">
          {filtered.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-[#E2E7EF] border-l-[3px] border-l-[#2563EB] rounded-xl px-5 py-[18px] no-underline shadow-[0_1px_2px_rgba(16,24,40,0.04)] transition-all duration-[180ms] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(16,24,40,0.12)]"
            >
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className={`text-[9.5px] font-extrabold uppercase tracking-[0.8px] px-2.5 py-0.5 rounded-[6px] ${item.tagClass}`}>
                  {item.tag}
                </span>
                <span className="text-[11px] text-[#6B7480] font-semibold">{item.date}</span>
              </div>
              <div className="text-[15.5px] font-bold text-[#1A1D24] leading-[1.4] mb-1.5">{item.title}</div>
              <div className="text-[13.5px] text-[#434A57] leading-[1.6]">{item.desc}</div>
              <span className="text-[11.5px] text-[#2563EB] font-semibold mt-[11px] inline-flex items-center gap-1">
                {item.source} <span className="text-[11px]">↗</span>
              </span>
            </a>
          ))}
        </div>
      )}

      {/* Instagram em Alta */}
      <div className="rounded-xl overflow-hidden border border-[#E2E7EF] shadow-[0_1px_2px_rgba(16,24,40,0.04)]">
        <div className="bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] px-5 py-4 flex items-center gap-3">
          <span className="text-[22px]">📸</span>
          <div>
            <div className="text-[14px] font-extrabold text-white">Instagram em Alta — Design & Branding</div>
            <div className="text-[11px] text-white/75">Contas, hashtags e formatos com melhor performance · Jun 2026</div>
          </div>
        </div>

        <div className="bg-white p-5 grid grid-cols-3 gap-6 max-lg:grid-cols-1">
          {/* Contas */}
          <div>
            <div className="text-[10px] font-extrabold text-[#6B7480] uppercase tracking-[0.8px] mb-3">Contas para acompanhar</div>
            <div className="flex flex-col gap-3">
              {instagramAccounts.map((acc) => (
                <a key={acc.handle} href={acc.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 group no-underline">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#833AB4] to-[#F77737] flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">
                    {acc.handle[1].toUpperCase()}
                  </div>
                  <div>
                    <div className="text-[12.5px] font-bold text-[#1A1D24] group-hover:text-[#833AB4] transition-colors">{acc.handle}</div>
                    <div className="text-[11px] text-[#6B7480] leading-[1.4]">{acc.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Hashtags */}
          <div>
            <div className="text-[10px] font-extrabold text-[#6B7480] uppercase tracking-[0.8px] mb-3">Hashtags em alta</div>
            <div className="mb-4">
              <div className="text-[9.5px] font-bold text-[#6B7480] uppercase tracking-[0.6px] mb-2">🇧🇷 Português</div>
              <div className="flex flex-wrap gap-1.5">
                {instagramHashtags.filter((h) => h.lang === "BR").map((h) => (
                  <a key={h.tag} href={h.url} target="_blank" rel="noopener noreferrer"
                    className="text-[11.5px] font-semibold text-[#9333EA] bg-[#FAF5FF] border border-[#E9D5FF] px-2.5 py-0.5 rounded-full no-underline hover:bg-[#9333EA] hover:text-white hover:border-[#9333EA] transition-all">
                    {h.tag}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[9.5px] font-bold text-[#6B7480] uppercase tracking-[0.6px] mb-2">🌐 Global</div>
              <div className="flex flex-wrap gap-1.5">
                {instagramHashtags.filter((h) => h.lang === "EN").map((h) => (
                  <a key={h.tag} href={h.url} target="_blank" rel="noopener noreferrer"
                    className="text-[11.5px] font-semibold text-[#E1306C] bg-[#FFF0F5] border border-[#FBCFE8] px-2.5 py-0.5 rounded-full no-underline hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-all">
                    {h.tag}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Formatos */}
          <div>
            <div className="text-[10px] font-extrabold text-[#6B7480] uppercase tracking-[0.8px] mb-3">Formatos que estão performando</div>
            <div className="flex flex-col gap-2.5">
              {instagramFormats.map((f) => (
                <div key={f.format} className="flex items-start gap-2">
                  <span className="text-[14px] flex-shrink-0 mt-0.5">{f.hot ? "🔥" : "📈"}</span>
                  <div>
                    <div className="text-[12.5px] font-bold text-[#1A1D24] leading-[1.3]">{f.format}</div>
                    <div className="text-[11px] text-[#6B7480]">{f.stat}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-5 py-2.5 bg-[#FAFAFA] border-t border-[#E2E7EF] text-[10.5px] text-[#6B7480]">
          Curadoria manual · Jun 2026 · Para atualizar: editar <code className="bg-[#F0F0F0] px-1 rounded text-[10px]">instagramAccounts</code>, <code className="bg-[#F0F0F0] px-1 rounded text-[10px]">instagramHashtags</code> e <code className="bg-[#F0F0F0] px-1 rounded text-[10px]">instagramFormats</code> em NovidadesSection.tsx
        </div>
      </div>

      <div className="text-[11px] text-[#6B7480] pt-2.5 border-t border-[#E2E7EF] mt-3.5">
        Curadoria atualizada manualmente. Fontes: Designer Fund, Successful Blog, Three Rooms, Adobe, Kittl, Superside, Gloat, GSDC.
      </div>
    </section>
  );
}
