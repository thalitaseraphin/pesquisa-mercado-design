# Design — Dashboard multi-nicho: "Tendências Geral" (Willian Baldan)

**Data:** 2026-07-30
**Status:** Aprovado (aguardando revisão do spec pelo usuário)

## Contexto

O projeto hoje é um dashboard de página única (`app/page.tsx`) 100% dedicado ao
**mercado de design**, com 21 seções cujos dados estão colados dentro de cada
componente (sem camada de abstração de nicho). Um sistema RAG irmão
(`../rag-production`) gera relatórios diários que hoje alimentam manualmente os
arquivos do dashboard de design (`data/reportChanges.ts`, o markdown, seções etc.).

O usuário quer adicionar um **segundo dashboard**, paralelo ao de design, para um
especialista de marketing digital.

## Quem é o especialista

**Willian Baldan** (~54 mil seguidores no Instagram) — estrategista/mentor de
marketing digital, especialista em **lançamentos pagos**. Sócio-fundador da
Agência Orbyka, dono da Agência Criática e do blog Marketing Vencedor. Apaixonado
por empreendedorismo, vendas e tecnologia. Produz conteúdo educacional (Instagram,
YouTube, Spotify) para um público de empreendedores digitais / infoprodutores.

Implicação de design: os **ganchos de conteúdo** (`hook`) de cada item devem
conectar a tendência ao universo dele — lançamentos, vendas, empreendedorismo
digital.

## Objetivo do novo dashboard

Um **radar de conteúdo / inteligência de tendências**: manter o especialista
informado sobre o que está acontecendo em vários domínios (tecnologia, tendências,
negócios, política, luta, design) **e** gerar ideias de conteúdo (posts, vídeos,
roteiros) a partir do que está em alta.

Não é uma pesquisa de mercado estruturada como a de design — por isso não replica
as 21 seções analíticas. É organizado **por tema/vertical**.

## Arquitetura

**Abordagem escolhida: rota por nicho + esqueleto compartilhado + seções
orientadas a dados.**

- `/` continua sendo o dashboard de **Design** — intocado (as 21 seções e seus
  dados hardcoded permanecem como estão).
- `/tendencias` (rota nova) é o dashboard **"Tendências Geral"** do Willian.
- Um **seletor de nicho** no topo da sidebar (dropdown "Design ▼ / Tendências
  Geral") navega entre as duas rotas. Cada nicho tem URL própria — bom para
  bookmark e para o RAG referenciar.
- O esqueleto (`Sidebar`, `TopBar`, `HistoryPanel`) passa a ler um **objeto de
  config de nicho** (nome, label, rota, data mais recente, grupos de navegação)
  em vez de ter esses valores hardcoded.

**Alternativas descartadas:**
- Unificar o modelo de dados do design junto (refactor enorme e arriscado, sem
  ganho imediato — YAGNI).
- Página única com toggle de estado, sem rotas (sem URL própria por nicho, mais
  difícil para o RAG referenciar).

## Por que data-driven no nicho novo (e não no design)

O design foi construído com dados colados em cada componente. Como o de tendências
**nasce vazio e cresce todo dia via RAG**, ele será dirigido por **arquivos de
dados**: a atualização diária vira "adicionar um item num array", sem reescrever
componente.

### Modelo de dados

```ts
// data/tendencias/types.ts
export type FeedItem = {
  date: string;              // "28/07/2026"
  title: string;
  summary: string;           // aceita <strong> (renderizado com dangerouslySetInnerHTML)
  tag?: string;              // subtópico (ex: "UFC", "OpenAI")
  source?: { label: string; url: string };
  hook?: string;             // gancho de conteúdo para o marketing
  isNew?: boolean;
};
```

Cada tema é um `FeedItem[]` em seu próprio arquivo. Uma seção reutilizável
(`ThemeFeedSection`) renderiza qualquer tema a partir do seu array + um
`SectionHeader`.

### Config de nicho

```ts
// data/niches.ts
export type NicheConfig = {
  id: string;            // "design" | "tendencias"
  label: string;         // "Design" | "Tendências Geral"
  route: string;         // "/" | "/tendencias"
  latestDate: string;    // "28/07/2026"
  navGroups: NavGroup[]; // grupos/links da sidebar desse nicho
};
```

O design vira uma entrada (`design`) reaproveitando os `navGroups` que já existem
hoje na `Sidebar.tsx`. O tendências vira outra (`tendencias`). O seletor lista
todas as entradas.

## Seções do dashboard `/tendencias`

| # | Seção | Ícone | Fonte de dados |
|---|-------|-------|----------------|
| 1 | Em Alta Hoje | 📰 | agrega itens mais recentes de todos os temas |
| 2 | Tecnologia & IA | 🤖 | `data/tendencias/tecnologia.ts` |
| 3 | Tendências & Cultura | 📈 | `data/tendencias/tendencias.ts` |
| 4 | Negócios & Empreendedorismo | 💼 | `data/tendencias/negocios.ts` |
| 5 | Política | 🏛️ | `data/tendencias/politica.ts` |
| 6 | Universo da Luta (UFC/MMA/boxe) | 🥊 | `data/tendencias/luta.ts` |
| 7 | Design & Criação | 🎨 | `data/tendencias/design.ts` |
| 8 | Ideias de Conteúdo | 💡 | itens com `hook` de todos os temas |
| 9 | Fontes | 📋 | `data/tendencias/fontes.ts` |

- "Em Alta Hoje" e "Ideias de Conteúdo" são **derivadas** (não têm arquivo
  próprio): agregam sobre os arrays temáticos.
- Todas as seções nascem vazias, com um **estado vazio** ("ainda sem dados — será
  preenchido pela atualização diária").
- Adicionar um tema novo depois = criar 1 arquivo de dados + 1 linha na config.

## Componentes

- `data/niches.ts` — config dos nichos (novo).
- `data/tendencias/types.ts` — `FeedItem` (novo).
- `data/tendencias/{tecnologia,tendencias,negocios,politica,luta,design,fontes}.ts`
  — arrays iniciais (vazios ou com 1 item de exemplo) (novos).
- `components/tendencias/ThemeFeedSection.tsx` — seção genérica orientada a dados
  (novo, "use client" se precisar de estado; senão server component).
- `components/tendencias/EmAltaHojeSection.tsx` — agrega recentes (novo).
- `components/tendencias/IdeiasConteudoSection.tsx` — agrega itens com `hook`
  (novo).
- `app/tendencias/page.tsx` — monta o dashboard do novo nicho (novo).
- `components/layout/Sidebar.tsx` — passa a receber/ler `navGroups` do nicho +
  renderizar o seletor de nicho (editado).
- `components/layout/NicheSwitcher.tsx` — dropdown que navega entre nichos (novo).
- `components/layout/TopBar.tsx` / `HistoryPanel.tsx` — ajustes menores se
  precisarem do nicho ativo (editado se necessário).

Reaproveita `SectionHeader`, `HeroSection`/`KpiStrip` (adaptados ou versão
específica), padrão de cores e geometria de layout já documentados no CLAUDE.md.

## Fluxo de dados

1. `app/tendencias/page.tsx` importa os arrays de `data/tendencias/*.ts`.
2. Renderiza uma `ThemeFeedSection` por tema, passando o array + header.
3. `EmAltaHoje` e `IdeiasConteudo` recebem/derivam de todos os arrays.
4. `Sidebar` recebe a config do nicho `tendencias` e monta a navegação + badges de
   novidade (mesma mecânica `getNewCount...` do design, adaptada aos arrays).

## Integração com o RAG diário

Contrato (implementação da parte Python fica como passo seguinte, fora desta
entrega de frontend):

- A rotina diária (`../rag-production/update_daily.py`) passa a mirar **os dois
  nichos**.
- Para `tendencias`, a atualização **anexa objetos `FeedItem`** aos arrays em
  `data/tendencias/*.ts` (marcando `isNew: true` nos do dia) e registra a data
  mais recente em `data/niches.ts`.
- Formato de saída que o RAG deve produzir por item: os campos de `FeedItem`.

Esta entrega de frontend define e documenta esse formato; a alteração no projeto
Python é um item separado.

## Fora de escopo (YAGNI)

- Refatorar o dashboard de design para ser data-driven.
- Autenticação / múltiplos usuários.
- Editor visual de conteúdo dentro do app.
- Implementar as mudanças no projeto Python `rag-production` (apenas definir o
  contrato).

## Verificação

Sem suíte de testes no projeto. Sanidade via `npm run build` (pega erros de
TypeScript/parse) e conferência visual em `npm run dev` das rotas `/` e
`/tendencias` + o seletor alternando entre elas.
