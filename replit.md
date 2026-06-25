# Workspace

## Overview

ConceptFul — premium creative strategy & design agency marketing website. A multi-page React + Vite static site whose visual language is matched one-for-one to the CreativeLab Framer template (rounded pill CTAs, Plus Jakarta Sans, coral red accent on white).

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React 19 + Vite + Tailwind v4, wouter for routing, framer-motion for motion, react-helmet-async for SEO, react-hook-form + zod for the contact form, sonner for toasts.

## Brand tokens

- Background: `#FFFFFF`, ink/heading `#14142B`, muted `#6E7191`
- Primary / accent (coral red): `#FF3951`
- Soft surface (peach tint): `#FFF4F1`
- Font: Plus Jakarta Sans (400/500/600/700/800)
- Buttons: full pill (`border-radius: 40px`), primary uses `#FF3951` with `box-shadow: 0 8px 22px rgba(255,57,81,0.28)`

## Pages

`/`, `/services`, `/pricing`, `/about`, `/team`, `/contact`, `/campaigns`, `/case-studies`, `/case-studies/clarity-system`, plus a branded 404.

`/pricing` (`src/pages/pricing.tsx`) is the engagement-model pricing page. Sections: hero ("From a Clarity Sprint to an Embedded Partner.") with "Book a Clarity Call" + "Compare Options" anchor that smooth-scrolls to the cards, dark two-column "How this works" manifesto, three engagement-model cards (Clarity Sprint $5k-$12k fixed, Strategic Build $20k-$75k+ with "Most popular" badge / coral border / elevated shadow, Embedded Partner $6k-$20k/mo retainer plus infrastructure scoped to usage), a coral "Polish lane" band immediately below the cards (focused refinements from $1.5k, 1-2 weeks, with its own card ref so the selector can scroll to it), "What you're paying for" comparison columns, "Who this is for" qualifier columns, centered "Pricing philosophy" with an emphasized closing line, an interactive "Where are you starting from?" radio selector (4 options on a `sm:grid-cols-2 lg:grid-cols-4` grid: Polish, Clarity Sprint, Strategic Build, Embedded Partner; animated dark callout reveals below with "View &lt;Tier&gt;" smooth-scroll plus "Book a Clarity Call"), and a dark final CTA. JSON-LD: BreadcrumbList plus a ProfessionalService schema with four Offers (Polish PriceSpec $1.5k-$4.5k, Clarity Sprint $5k-$12k, Strategic Build $20k-$75k, Embedded Partner UnitPriceSpecification $6k/MON).

Eight individual service detail pages live under `/services/:slug` (slugs: `marketing-campaigns`, `graphic-design`, `fractional-cmo`, `brand-development`, `video-animation`, `content-creation`, `one-off-campaigns`, `custom-web-development`). Content is sourced from `src/pages/services/data.ts` and rendered by the shared `src/pages/services/detail.tsx`. Each card in the "Also available" grid on `/services` links to its detail page; unknown slugs fall through to the branded 404.

Three resource landing pages live under `/resources/:slug` (slugs: `videos`, `blog`, `latest-projects`), all sourced from `src/pages/resources/data.ts` and rendered by `src/pages/resources/page.tsx`. They are intentional "coming soon" landing pages with hero copy, a context paragraph, brand CTAs, and cross-links to the other resources. Unknown slugs fall through to the branded 404.

## Navigation

The top nav uses two hover panels driven by the shared `useHoverDropdown` hook (`src/lib/useHoverDropdown.ts`): a 120 ms close grace timer, 350 ms post-Escape suppress window, Escape-to-close with focus restored to the trigger, and quiet auto-close on route change. Closed panels apply `inert` so descendants are not in the tab order, and use `role="region"` (disclosure pattern) rather than ARIA menu semantics.

- **Services megamenu** (`src/components/site/ServicesMegaMenu.tsx`): wide centered panel with two columns. Left lists the 5 Core Practices (deep-link to `/services#<id>`); right lists the 8 Also Available services from `SERVICES` (route to `/services/<slug>`); a dark footer bar contains a "View all services" link and the primary CTA. The `/services` page reads `window.location.hash` on mount and scrolls to the matching section.
- **Resources dropdown** (`src/components/site/ResourcesDropdown.tsx`): small ~320 px panel anchored under the trigger, lists the 3 resources from `RESOURCES`. The trigger defaults to `/resources/blog`.

Mobile renders both as expandable accordions inside the side sheet. Both accordion states reset when the sheet closes.

## SEO / LLM

- Per-page `<title>`, meta description, canonical, full OG (title/description/url/type/site_name/locale/image) and Twitter card tags injected via `react-helmet-async` through `SeoHead`. `noindex` prop suppresses canonical on 404.
- Static `index.html` carries default OG/Twitter image fallbacks; canonical and robots are managed only by Helmet to avoid duplication.
- JSON-LD coverage: Home (`Organization` + `LocalBusiness` + `WebSite` + `FAQPage`), About (`AboutPage`), Services (`Service` + `OfferCatalog`), Service detail (`Service` + `FAQPage`), Team (`Person` for Peter Sierra), Contact (`ContactPage`), Case Studies index (`CollectionPage`), Case Study detail (`Article`). Every nested page emits a `BreadcrumbList`.
- `public/robots.txt` explicitly allows GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, Meta-ExternalAgent, Bytespider, CCBot, cohere-ai and others — so the site can be cited and surfaced by ChatGPT, Claude, Perplexity, Gemini, and Apple Intelligence.
- `public/sitemap.xml` lists every static route (including the 8 service detail pages) with `<lastmod>` + `<changefreq>` + `<priority>`.
- `public/llms.txt` follows the emerging spec with structured Markdown sections (services, method, audience, FAQ, key pages, contact) so LLMs can answer questions about Concepful with accurate facts.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/conceptful run dev` — run the website locally (managed by the `artifacts/conceptful: web` workflow)

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
