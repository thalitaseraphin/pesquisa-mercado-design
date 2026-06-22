# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # development server (Turbopack)
npm run build    # production build — run this to catch TypeScript/parse errors before pushing
npm run lint     # ESLint check
```

No test suite exists. `npm run build` is the primary sanity check.

## Stack

- **Next.js 16** (App Router, TypeScript) — read `node_modules/next/dist/docs/` before using APIs
- **Tailwind CSS v4** — config via `@theme` in `globals.css`, not `tailwind.config.js`
- **Recharts v3** for all charts
- **shadcn/ui** components in `components/ui/` (installed via `npx shadcn add <component>`)
- **Vercel** deployment — `vercel.json` sets `framework: nextjs`

## Architecture

Single-page dashboard at `app/page.tsx` ("use client") that assembles layout + all 21 section components in a fixed-sidebar layout:

```
app/
  layout.tsx          — Inter font, metadata, html/body wrapper
  globals.css         — Tailwind v4 @theme tokens, body styles, .reveal animation
  page.tsx            — root page: <Sidebar> + <TopBar> + all sections in order

components/
  layout/
    Sidebar.tsx       — "use client" — fixed 272px dark sidebar (#161A22), IntersectionObserver
                        for active nav link, mobile overlay with translate
    TopBar.tsx        — sticky topbar with blur, hamburger for mobile
  charts/             — ALL "use client" Recharts components (9 total)
  sections/           — 21 section components + SectionHeader.tsx
  ui/                 — shadcn/ui primitives (Badge, Button, Card, etc.)
```

**Layout geometry:** Sidebar is `fixed w-[272px]`. Main content uses `md:ml-[272px]`. TopBar is `sticky top-0 z-40`. Every section uses `scroll-mt-[74px]` (compensates for topbar) and `mb-[84px]` (consistent vertical rhythm).

## Key Patterns

**Charts always need `dynamic` import with `ssr: false`** when used inside server components:
```tsx
const MarketsChart = dynamic(() => import("@/components/charts/MarketsChart"), { ssr: false });
```
Chart components themselves carry `"use client"` and render Recharts. Sections that use charts are server components and import charts via `dynamic`.

**Color convention — use Tailwind arbitrary values, not CSS custom properties:**
```tsx
// CORRECT — avoids conflict with shadcn's --accent, --border tokens
className="bg-[#2563EB] text-white border-[#E2E7EF]"

// WRONG — shadcn overrides these tokens with its own values
className="bg-accent border-border"
```

Project palette: `#161A22` (sidebar), `#EEF1F6` (page bg), `#1A1D24` (headings), `#434A57` (body), `#6B7480` (muted), `#2563EB` (blue accent), `#E2E7EF` (border).

**Strings with curly quotes — use template literals or single quotes as outer delimiter:**
```ts
// WRONG — SWC parser treats inner " as string terminator
title: "Identidades "vivas": ...",

// CORRECT
title: `Identidades "vivas": ...`,
title: 'Identidades "vivas": ...',
```

**Recharts `formatter` prop — do not type the value as `number`:**
```tsx
// WRONG — TypeScript error: ValueType | undefined not assignable to number
formatter={(v: number) => [`${v}%`, "Label"]}

// CORRECT
formatter={(v) => [`${Number(v)}%`, "Label"]}
```

**HTML content in sections** — some `desc`/`text` fields contain `<strong>` tags and are rendered with `dangerouslySetInnerHTML`. For plain text JSX nodes, render as `{item.text}`.

**SectionHeader** — every section starts with:
```tsx
<SectionHeader icon="🎨" part="Parte N" title="..." description="..." />
```

**All section data is co-located** in the section file itself (no separate data layer). Each section is a self-contained component with its data arrays defined at module scope.

**Active sections uses `"use client"`:** `PersonasSection` (expand/collapse per card) and `ModelosSection` (filter by business model color) carry `"use client"` directly. Everything else is a server component.

## Adding a New Section

1. Create `components/sections/XSection.tsx` — server component unless it needs `useState`
2. Add `<section id="x" className="mb-[84px] scroll-mt-[74px]">` as wrapper
3. Start with `<SectionHeader ...>`
4. If it needs a chart, import via `dynamic(() => import("@/components/charts/XChart"), { ssr: false })`
5. Register in `app/page.tsx` (import + add to JSX)
6. Add nav link to `Sidebar.tsx` `navGroups` array

## Sistema RAG de Atualização Diária

Existe um projeto Python separado que alimenta esta pesquisa com análises geradas por IA:

```
../rag-production/          ← diretório irmão deste projeto
  config.py                 — modelos, preços, budgets
  cost_tracker.py           — controle de custo por token (request/session/dia)
  circuit_breaker.py        — fallback automático entre modelos
  vector_store.py           — ChromaDB + sentence-transformers
  agents.py                 — RetrieverAgent, SynthesizerAgent, OrchestratorAgent
  rag_system.py             — façade pública
  update_daily.py           — rotina diária com otimização de tokens
  knowledge_base.json       — documentos de pesquisa para ingestão (criar/manter)
  reports/YYYY-MM-DD.md     — relatórios gerados automaticamente
  .env                      — ANTHROPIC_API_KEY (não commitar)
  logs/daily.log            — log de execuções
```

**Cadeia de fallback de modelos:** `claude-haiku-4-5` (primário para rotina diária, mais barato) → `claude-opus-4-8` (fallback) → resposta degradada

**Rotina diária automatizada via launchd:**
- Roda todo dia às 9h mesmo sem Claude Code aberto
- Job: `com.thalita.rag-daily` em `~/Library/LaunchAgents/`
- Gera relatório Markdown em `reports/` e envia notificação macOS
- Lembrete no Google Calendar às 9h (evento recorrente diário)

**Para rodar manualmente:**
```bash
cd "../rag-production"
python update_daily.py
```

**Para adicionar documentos à base de conhecimento**, editar `knowledge_base.json`:
```json
[
  {"text": "conteúdo do documento...", "meta": {"fonte": "entrevista"}}
]
```

**Para verificar o launchd:**
```bash
launchctl list | grep com.thalita.rag-daily
```
