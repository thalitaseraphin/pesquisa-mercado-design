import SectionHeader from "./SectionHeader";

const sources: [number, string, string, string][] = [
  [1,"Figma — 79+ Design Statistics 2026","https://www.figma.com/resource-library/design-statistics/","Dados de mercado"],
  [2,"Colorlib — 85+ Graphic Design Statistics 2026","https://colorlib.com/wp/graphic-design-statistics/","Dados de mercado"],
  [3,"Autodesk — 2025 AI Jobs Report","https://adsknews.autodesk.com/en/news/ai-jobs-report/","Relatório setorial"],
  [4,"Cognitive Market Research — Graphic Design 2024","https://www.cognitivemarketresearch.com/graphic-design-market-report","Research house"],
  [5,"NextMSC — Global Graphic Design Market to $70.53B","https://www.nextmsc.com/news/graphic-design-market","Research house"],
  [6,"Fortune Business Insights — UX Services Market","https://www.fortunebusinessinsights.com/ux-services-market-108780","Research house"],
  [7,"Mordor Intelligence — UI/UX Market","https://www.mordorintelligence.com/industry-reports/ui-ux-market","Research house"],
  [8,"Global Growth Insights — UI/UX Software Market","https://www.globalgrowthinsights.com/market-reports/ui-and-ux-design-software-market-102183","Research house"],
  [9,"Ministério da Cultura — Design emprega 250 mil no Brasil","https://www.gov.br/cultura/pt-br/assuntos/noticias/setores-do-micbr-design-emprega-cerca-de-250-mil-pessoas","Governo brasileiro"],
  [10,"CELACC/USP — Setor Cultural Brasileiro 2014–2024 e IA","https://celacc.eca.usp.br/pt-br/news/2026-04/ocupacao-no-setor-cultural-brasileiro-analise-2014-2024-e-os-possiveis-impactos-da","Pesquisa acadêmica"],
  [11,"Grand View Research — Creator Economy Market","https://www.grandviewresearch.com/industry-analysis/creator-economy-market-report","Research house"],
  [12,"Zamora Design — Canva $40B Empire","https://zamora.design/canvas-strategic-narrative-how-design-democratization-created-a-40-billion-empire/","Análise de mercado"],
  [13,"Design Week — Graphic design at-risk from AI","https://www.designweek.co.uk/graphic-design-among-most-at-risk-jobs-from-ai-report/","Publicação setorial"],
  [14,"Upwork — Will AI Replace Graphic Designers 2026","https://www.upwork.com/resources/will-ai-replace-graphic-designers","Plataforma"],
  [15,"Cropink — 50+ Graphic Design Statistics 2025","https://cropink.com/graphic-design-statistics","Compilação"],
  [16,"Learning Revolution — 49+ eLearning Statistics","https://www.learningrevolution.net/elearning-statistics/","Dados de mercado"],
  [17,"Ruzuku — State of Online Courses 2026","https://www.ruzuku.com/learn/articles/state-of-online-courses-2026","Dados de mercado"],
  [18,"Gazeta de Pinheiros — Mercado Comunicação Visual","https://gazetadepinheiros.com.br/noticia/14099/mercado-de-comunicacao-visual-deve-alcancar-us-6-7-bilhoes-ate-2031-segundo-estudo-internacional","Notícia"],
  [19,"eDesignify — Freelance Design Rates 2025","https://edesignify.com/blogs/freelance-design-rates-in-2025-how-much-should-you-charge","Dados de mercado"],
  [20,"Amra & Elma — Top 20 White Label Marketing Statistics 2025","https://www.amraandelma.com/white-label-marketing-statistics/","Research / benchmark"],
  [21,"ALM Corp — How to Build a 7-Figure White Label Agency","https://almcorp.com/blog/how-to-build-7-figure-white-label-digital-agency/","Guia de mercado"],
  [22,"Brand Auditors — Brand Audit Services & Pricing","https://brandauditors.com/","Referência de preço"],
  [23,"Wayfront — 13 Productized Service Examples","https://wayfront.com/blog/productized-services-examples","Exemplos de mercado"],
  [24,"WP Tavern — Envato passes $1B in community earnings","https://wptavern.com/envato-passes-1-billion-in-community-earnings-while-continuing-to-aggressively-market-its-elements-subscription-against-marketplace-authors","Dado financeiro"],
  [25,"Figuree Studio — How to Make Money from Fonts in Your Sleep","https://figureestudio.com/2025/06/17/how-to-make-money-from-fonts-in-your-sleep-passive-income-guide/","Guia prático"],
  [26,"Segment UI — How Much Can Framer and Web Designers Make","https://segmentui.com/learn/how-much-can-framer-and-web-designers-make-in-2024","Dados de receita"],
  [27,"Sacra — Webflow Revenue & Valuation","https://sacra.com/c/webflow/","Análise financeira"],
  [28,"Webflow Jobs — Webflow Developer Salary Guide 2026","https://www.webflow.jobs/resources/webflow-developer-salary-guide-2026","Dados de salário"],
  [29,"Adobe — Affiliate Marketing Program","https://www.adobe.com/affiliates.html","Programa oficial"],
  [30,"ProtoPie — Best Affiliate Programs for Designers","https://www.protopie.io/blog/affiliate-programs-for-designers","Guia de afiliação"],
  [31,"Affiliate Yoco — Figma Affiliate Program 2025","https://affiliateyoco.com/affiliate-program/figma-affiliate-program","Programa oficial"],
  [32,"Untitled UI — Become an Affiliate","https://www.untitledui.com/affiliates","Programa oficial"],
  [33,"Medium — The Designers Guide to Startup Equity","https://medium.com/@robjbye/the-designers-guide-to-startup-equity-86351062700e","Análise / guia"],
  [34,"Cake Equity — Sweat Equity Guide","https://www.cakeequity.com/guides/sweat-equity","Guia financeiro"],
  [35,"O'Castle — Vertical SaaS Strategy 2024","https://ocastle.com/navigating-niche-markets-the-vertical-saas-strategy-for-business-growth-in-2024/","Análise estratégica"],
  [36,"Aybben — The Rise of Micro-Branding 2025","https://aybben.com/micro-branding-2025/","Tendência de mercado"],
  [37,"IdeaProof — 50 Micro SaaS Ideas 2026","https://ideaproof.io/lists/micro-saas-ideas","Dados de receita"],
  [38,"Market Clarity — Top 30 Most Profitable Indie SaaS","https://mktclarity.com/blogs/news/indie-saas-top","Dados de receita"],
  [39,"Colorlib — 50+ Freelance Statistics 2026","https://colorlib.com/wp/freelance-statistics/","Dados de mercado"],
  [40,"PropelloCloud — Top 13 Referral Marketing Statistics","https://blog.propellocloud.com/referral-marketing-statistics","Dados de marketing"],
  [41,"GigRadar — Get Web Design Clients in 2025","https://gigradar.io/blog/how-to-get-web-design-clients","Guia prático"],
  [42,"Acceleroi — Average Conversion Rate for Online Courses 2026","https://www.acceleroi.com/blog/unlocking-success-exploring-the-average-conversion-rate-for-online-courses","Benchmark de conversão"],
  [43,"Entrepreneurshq — 159 Webinar Statistics 2026","https://entrepreneurshq.com/webinar-statistics/","Dados de conversão"],
  [44,"ON24 — Webinar Benchmarks Report 2025","https://www.on24.com/blog/key-takeaways-from-the-2025-webinar-benchmarks-report/","Benchmark"],
  [45,"Paige Brunton — Email List Size for Online Course Launch","https://www.paigebrunton.com/blog/email-list-size-online-course","Dado de lançamento"],
  [46,"OptinMonster — 25+ FOMO Statistics 2025","https://optinmonster.com/fomo-statistics/","Comportamento de compra"],
  [47,"ResearchGate — Psychological Triggers in Online Shopping","https://www.researchgate.net/publication/390706587_Psychological_Triggers_in_Online_Shopping_The_Influence_of_Scarcity_Urgency_and_Personalization_on_Consumer_Buying_Behavior","Pesquisa acadêmica"],
  [48,"LearnStream — Social Proof for Online Courses","https://learnstream.io/blog/why-social-proof-matters-for-selling-online-courses-and-how-to-use-it/","Marketing de cursos"],
  [49,"CourseAI — Psychology Behind Selling Online Courses","https://courseai.com/the-psychology-behind-selling-online-courses-what-makes-people-buy/","Comportamento de compra"],
  [50,"IMARC Group — Brazil EdTech Market 2025","https://www.imarcgroup.com/brazil-edtech-market","Research house"],
  [51,"TechCrunch — Domestika raises $110M on $1.3B valuation","https://techcrunch.com/2022/01/27/domestika-raises-110m-on-a-1-3b-valuation-to-expand-its-learning-community-for-creative-types/","Notícia financeira"],
  [52,"Growjo — Domestika Revenue & Stats","https://growjo.com/company/Domestika","Dados financeiros"],
  [53,"Origamid — Plataforma de cursos de design","https://www.origamid.com/","Concorrente direto"],
  [54,"EBAC Online — Sobre a escola","https://ebaconline.com.br/about-us","Concorrente direto"],
  [55,"Alura — Empresa mais transformadora 2024 (GSV)","https://www.alura.com.br/artigos/alura-empresa-educacao-mais-transformadora-mundo-gsv-edtech-150","Referência de mercado"],
  [56,"Distrito — EdTech Report 2025","https://materiais.distrito.me/edtech-report-2025","Relatório setorial"],
  [57,"Programming Helper — Figma 2026: Market Share, MAU, IPO","https://www.programming-helper.com/tech/figma-2026-40-market-share-13m-mau-ipo-python","Dados de mercado"],
  [58,"Sacra — Figma Revenue & Valuation","https://sacra.com/c/figma/","Análise financeira"],
  [59,"Figma — AI in Design","https://www.figma.com/ai/","Produto oficial"],
  [60,"LogRocket — Figma AI in 2026","https://blog.logrocket.com/ux-design/figma-ai-2026-quick-overview/","Análise técnica"],
  [61,"ELVTR — A Designer Guide to 2025 AI Tools","https://uk.elvtr.com/blog/a-designers-guide-to-2025s-ai-tools","Guia de ferramentas"],
  [62,"Flatline Agency — AI Design Tools for Brands 2026","https://www.flatlineagency.com/blog/ai-design-tools-for-brands-2026/","Análise de ferramentas"],
  [63,"Adobe Newsroom — New Creative Agent & Firefly AI","https://news.adobe.com/news/2026/04/adobe-new-creative-agent","Comunicado oficial"],
  [64,"NoGood — AI Design Strategy: Future of Design 2026","https://nogood.io/blog/future-of-design-strategy/","Análise estratégica"],
  [65,"Mocha — AI App Builder Statistics 2026","https://getmocha.com/blog/ai-app-builder-statistics","Dados de mercado"],
  [66,"GetPanto — Bolt.new Statistics 2026","https://www.getpanto.ai/blog/bolt-new-statistics","Dados de mercado"],
  [67,"SideTool — Cursor, Bolt, and Lovable AI Compared","https://www.sidetool.co/post/cursor-bolt-and-lovable-ai-compared-find-your-perfect-development-tool/","Comparativo"],
  [68,"Grey.co — The Rise of Brazilian Talent in the Global Economy","https://grey.co/blog/the-rise-of-brazilian-talent-in-the-global-economy-data-trends-and-opportunities","Pesquisa de mercado"],
  [69,"Blog Inter — Quanto ganha um designer no exterior","https://blog.inter.co/quanto-ganha-um-designer-no-exterior-e-como-encontrar-vagas/","Guia de carreira"],
  [70,"NomadGlobal — Designer gráfico no exterior","https://www.nomadglobal.com/conteudos/quanto-ganha-um-designer-grafico-no-exterior","Dados de carreira"],
  [71,"Arc.dev — Latin American Developers 2.2X Income via Remote Work","https://arc.dev/talent-blog/remote-software-developer-salary-report-latin-america-2022/","Pesquisa de salários"],
  [72,"B9 — Criatividade como Cultura, Cultura como Negócio","https://www.b9.com.br/","Mídia setorial BR"],
  [73,"Meio & Mensagem — Marketing, Publicidade e Comunicação","https://www.meioemensagem.com.br/","Mídia setorial BR"],
  [74,"Publicitários Criativos — Cases, Design e Branding","https://www.publicitarioscriativos.com/","Mídia setorial BR"],
  [75,"Forbes Brasil — Negócios, Empreendedorismo e Tendências","https://forbes.com.br/","Mídia de negócios BR"],
  [76,"TecMundo — Tecnologia, IA e Ferramentas Digitais","https://www.tecmundo.com.br/","Mídia de tecnologia BR"],
  [77,"Olhar Digital — O Futuro Passa Primeiro Aqui","https://olhardigital.com.br/","Mídia de tecnologia BR"],
];

export default function FontesSection() {
  return (
    <section id="fontes" className="mb-[84px] scroll-mt-[74px]">
      <SectionHeader
        icon="📋"
        part="Referências"
        title="77 Fontes Validadas"
        description="Todas as fontes utilizadas neste estudo, com URL direta"
      />
      <div className="bg-white border border-[#E2E7EF] rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {["#", "Fonte", "Tipo"].map((h) => (
                  <th key={h} className="text-[10.5px] font-bold uppercase tracking-[0.5px] text-[#6B7480] px-[18px] py-[11px] text-left border-b border-[#E2E7EF] bg-[#FAFAFA]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sources.map(([n, name, url, type]) => (
                <tr key={n} className="hover:bg-[#FAFAFA] transition-colors">
                  <td className="px-[18px] py-3 text-[13px] text-[#6B7480] border-b border-[#E2E7EF] w-8">{n}</td>
                  <td className="px-[18px] py-3 border-b border-[#E2E7EF]">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#2563EB] no-underline hover:underline">{name}</a>
                  </td>
                  <td className="px-[18px] py-3 border-b border-[#E2E7EF]">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#F6F8FB] text-[#6B7480] border border-[#E2E7EF]">{type}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
