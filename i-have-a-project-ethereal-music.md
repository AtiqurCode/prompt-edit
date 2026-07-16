# PromptEdit.com Sales Page Redesign — Job Application Piece

## Context

This is a portfolio submission for a **Design-Focused Front-End Developer** role at ContentCreator.com (job posting: `Front End Developer Application.pdf`). The application process explicitly skips résumé review — candidates prove themselves by redesigning a real page from the company's own site (`contentcreator.com/prompt-edit`) to be "more intuitive and better than we made it," then publishing it and applying via a Google Form.

The company runs an AI-tools + video-asset marketplace (PromptEdit.com). They explicitly want:
- **Tailwind CSS** for styling (non-negotiable — "it's important that you want to use Tailwind")
- Design quality benchmarked against **Epidemic Sound, Motion Array, Artlist, Higgsfield, Envato Elements**
- A **mobile-responsive** page (the current live site is not responsive at all)
- A **performant** sales page

I extracted the full text content and technical makeup of the current live page (`prompt-edit.html`, saved from view-source, 27,566 lines). Findings:
- It's a **Kajabi page-builder export**: 313 inline `<style>` tags, 79 `<script>` tags, 25 eagerly-loaded Wistia `<iframe>` embeds, all images hotlinked from `kajabi-storefronts-production.kajabi-cdn.com`, generic `sans-serif` font stack, `© 2026 Kajabi` platform branding in the footer. This is the opposite of "performant" — that contrast is worth calling out as the improvement story.
- It's structured as a **post-purchase upsell/OTO page** ("Now that you've enrolled in the AI Creator Course, you might be thinking...") rather than a cold-traffic homepage. Per your decision, I'm keeping this narrative structure intact rather than rewriting it as a generic homepage.
- The footer's legal disclaimer paragraph references **"the 14 Day Filmmaker program"** — an unrelated product, clearly a copy-paste artifact from a template. This is a factual defect in the legal boilerplate, not part of the marketing narrative, so I'll correct the product reference while preserving the same disclaimer structure/tone and all other narrative content untouched.

**Decisions already confirmed with you:**
1. Keep the existing upsell narrative/copy structure as-is (just the mis-referenced disclaimer product name gets corrected).
2. Build as a **Vue 3 + TypeScript + Tailwind CSS v4** single-page app inside the existing `prompt-edit` scaffold (matches their real stack: Vue/TS/Tailwind/Inertia-adjacent patterns) — validated as compatible with the scaffold's Vite 8 / Vue 3.5 / vue-tsc 3.3 versions.
3. Reuse the real hotlinked Kajabi CDN images and Wistia video/audio preview embeds rather than placeholder art.
4. Stay tightly scoped to the sales-page redesign — no bonus "AI Studio" mockup section.

## Content Inventory (from the live page, to be preserved)

Full section list extracted from `prompt-edit.html`, in order:
1. Sticky header — logo, "Tutorials" / "Login" links, primary CTA
2. Hero narrative — "grocery store for AI" positioning, problem/solution setup, CTA
3. Offer intro — "Introducing: Prompt Edit," pay-as-you-go pitch
4. AI Image Tools grid (AI Clones, Social Media Posts, Graphic Design, Image Editing, YouTube Thumbnails, Online Ads)
5. AI Video Tools grid (Clone Videos, Visual Effects, Cinematic Films, Video Ads, Reels & TikToks, YouTube Videos)
6. AI Audio Tools grid — 5 items, each with a "Click to preview!" audio demo (Voiceovers, Voice Clones, Voice Swaps, Sound Effects, Music Generation)
7. AI Editing Plugins section (Premiere Pro / DaVinci Resolve in-app plugin pitch)
8. Pricing — two cards: **$98 one-time** (Existing Student Discount, $110 in credits) vs **$39/month** (Save on Everything, $49 credits/mo + 20% lifetime boost + template library access + bonuses)
9. Content Creator Templates Library intro (100,000+ templates, included with subscription)
10. Five asset-category showcases, each with a stat callout, preview grid, supporting copy, and CTA:
    - 4,000+ LUTs
    - 60,000+ SFX (with "🔇 vs 🔊" before/after audio comparison players + category-browsable sound listening)
    - 3,000+ Text Animations
    - 2,000+ Overlays
    - 5,000+ Backgrounds
11. Testimonials (3 quotes: Hilda Schlueter, Matt Lilley, Brady Hales)
12. "Who this is for" qualifier list + 100% Money-Back Guarantee callout
13. FAQ accordion — 7 Q&As (What is PromptEdit, commercial usage rights, quality parity vs. going direct, what's in the Templates Library, download limits, editing-platform compatibility, cancellation policy)
14. Final CTA ("Join Our Free Trial")
15. Footer — legal links (terms/privacy/earnings disclaimer), Facebook disclaimer, corrected program disclaimer, contact email

The current page repeats a "Click To Get Started Today!" full-width CTA block after nearly every section (~10 times). The redesign keeps a handful of well-placed CTAs (after hero, after pricing, after templates intro, final) plus a persistent sticky header CTA — matching how Epidemic Sound/Artlist/Motion Array use one constant nav CTA instead of interrupting every scroll with a repeated banner.

## Reference Site Research

I don't have a visual screenshot tool available, so this isn't a pixel-level visual audit — it's a structural/content read via `WebFetch` (converts pages to text, loses exact visuals) supplemented with general knowledge of these brands' visual identity where the live fetch was blocked. Findings, with source noted per site:

- **Epidemic Sound** (fetched directly): No pricing shown on the homepage at all — pricing lives on its own page. Hero is one bold tagline + two CTAs ("Create free account" / "Contact sales") + a "No credit card required" reassurance line. Immediately under the hero is a **brand-logo social-proof bar** (New Balance, GoPro, Squarespace, Nissan, etc.). Page closes with a 6-question FAQ. Footer is a clean multi-column link directory, not dense legal text.
- **Envato Elements** (fetched directly) — the closest structural analog to PromptEdit's own business model (unlimited-asset-library-by-subscription): hero pairs the value prop with a concrete price anchor ("$16.50/month") and a headline stat ("Unlimited downloads of 28M+ assets"). Directly below the hero is a **stat grid** by category (Video Templates 150,000+, Stock Photos 16M+, Music 350,000+, SFX 940,000+) — proof-by-numbers before any narrative copy. It also runs a **"Suite of AI tools" row** of icon-cards (VideoGen, ImageGen, VoiceGen, MusicGen, etc.) — structurally identical to what PromptEdit's AI Image/Video/Audio tool grids are already doing. Closes with a 3-column "Why creatives choose Envato" value-prop grid (icon + short text, not paragraphs).
- **Higgsfield** (fetched directly): every AI tool/model is shown as a card with a thumbnail, the **actual model name** (Nano Banana Pro, Seedance 2.0, Cinema Studio 3.5, Gemini Omni Flash), a one-line description, and a status badge ("New"/"Trending"). Naming real, recognizable models by name is doing a lot of the credibility work — visitors recognize the models even if they don't know Higgsfield.
- **Motion Array** (direct fetch blocked by the site, so this is from search results + general familiarity): grid-heavy marketplace UI, "Everything Plan" bundle framing (~$24.99/mo, unlimited downloads across templates/stock/plugins/fonts) — validates a bundle-style top pricing tier rather than narrow single-category plans.
- **Artlist** (direct fetch blocked, from search results + general familiarity): has itself pivoted to "the ultimate AI ecosystem for creators," splitting plans into AI-only, Stock-only, and a combined "Max" tier — structurally the same shape as PromptEdit's existing two tiers (credits-only vs. credits+full-template-library), which validates that PromptEdit's current two-tier structure doesn't need to be reinvented, just presented more clearly.
- **promptedit.com** (direct fetch also blocked by the live domain — same bot protection, which is exactly why you supplied the saved view-source `prompt-edit.html` instead): no new information beyond the full content/structure already mined from that file in the Content Inventory above.

## Design Direction

Borrowing specific, nameable patterns from the research above rather than vague "make it modern":
- **Epidemic Sound**: sticky nav with one clear CTA, generous whitespace, reassurance microcopy under CTAs (e.g. "No subscription required" — PromptEdit already has this exact idea in its copy).
- **Envato Elements**: an **"at a glance" stat bar** near the top of the page (before the narrative sections) surfacing PromptEdit's own real numbers — 100,000+ templates, 4,000+ LUTs, 60,000+ SFX, 3,000+ text animations, 2,000+ overlays, 5,000+ backgrounds — as immediate proof, the same way Envato leads with 150,000+/16M+/350,000+ stats. Also: reformat the current "who this is for" bullet list as a 3-column icon value-prop grid instead of plain bullets.
- **Higgsfield**: tool/asset cards get a consistent anatomy — thumbnail, name, one-line description, optional badge. And critically: **surface the real AI model names PromptEdit already integrates** (Nano Banana Pro, Grok, Seedance, Kling, Veo, Heygen, ElevenLabs, Suno, Ideogram — currently buried as a single sentence in the pricing section) as a visible logo/badge strip, likely right under the hero. This is free credibility the current page isn't using.
- **Motion Array / Artlist**: validates keeping PromptEdit's existing two-tier pricing shape (pay-as-you-go credits vs. full bundle-with-templates subscription) as-is — it matches how both competitors structure their plans, so the redesign should focus on *clarity of presentation*, not restructuring the offer.
- **Artlist / Epidemic**: bold, large-type section headers; a single unmistakable primary CTA color used sparingly so it actually stands out (matches the current site's green — keeps brand continuity, just used more deliberately than the ~10 repeated CTA blocks today).

Concretely:
- **Color system** (Tailwind v4 `@theme` tokens): deep navy `brand-ink` for header/dark sections, the existing saturated green as `brand-cta` for primary buttons, a purple/pink gradient pair for AI-tool card accents (Higgsfield-style), warm neutral grays for body copy.
- **Type**: swap the current generic `sans-serif` for a real webfont (Inter or similar geometric sans) via `@font-face`/Google Fonts, with a defined heading/body scale.
- **Layout rhythm**: consistent `max-w-7xl` containers, consistent vertical section padding, responsive grids (2-col mobile → 3/4/6-col desktop, horizontal-scroll carousel on the smallest screens for the 5 asset-category showcases — an Envato "curated collections" pattern) instead of the current page's inconsistent spacing.
- **Interaction as the craft signal** (your call: prioritize real interaction over decorative motifs/metaphor illustrations/type experiments — those are intentionally left out of this build): FAQ as an accessible accordion (`aria-expanded`, keyboard-operable); audio/video previews as click-to-load facades (see below) instead of the current page's 25 eagerly-loaded iframes; plus two bespoke interactive builds described below.

### Two flagship interactive moments (the "not generic" investment)

1. **Draggable before/after slider** on the existing "juggling subscriptions vs. one PromptEdit" visual (hero/offer-intro area). This isn't a fabricated demo — the live page already has a real matched image pair for exactly this comparison:
   - Before: `.../images/821c2a-37e6-8b-b36-c8bad0746f1_Before_promptedit_copy.png`
   - After: `.../images/c6cb82f-c0-1f2-b48-2eec5ff2d80d_After_promptedit_copy.png`
   
   Currently shown as two static side-by-side images. Upgrading to a drag-to-reveal slider (pointer-driven clip-path, keyboard-operable via arrow keys for accessibility) turns a static comparison into something worth pausing on, using assets that are already there for exactly this purpose.

2. **Animated waveform/equalizer visualization** on the AI Audio Tools preview cards and the SFX "🔇 vs 🔊" comparison, replacing the current static emoji pair. **Technical constraint to be upfront about**: the audio/video previews are third-party Wistia `<iframe>` embeds (cross-origin), so genuine Web Audio API frequency analysis on their actual audio isn't possible from the parent page. The waveform will be a stylized animated bar visualization tied to local play/pause state (driven by the same `ref<boolean>` the `MediaPreviewFacade` uses) — it reads as "alive" and intentional, not literally audio-reactive. I'll say this plainly rather than imply real-time audio analysis that isn't actually happening.

## Technical Plan

**Stack**: Vue 3.5 + TypeScript + Tailwind CSS v4, inside the existing untouched `create-vue` scaffold at `/Users/atiqur/Herd/frontend/prompt-edit`. Validated against the actual installed versions (Vite `^8.0.16`, vue-tsc `^3.3.5`) — `@tailwindcss/vite@4.3.2` officially supports Vite 8.

### 1. Install & configure Tailwind v4
- Add `tailwindcss` and `@tailwindcss/vite` as dev dependencies.
- Register the plugin in [vite.config.ts](vite.config.ts) alongside the existing `vue()`, `vueJsx()`, `vueDevTools()` plugins.
- Add `@import "tailwindcss";` as the first line of [src/assets/main.css](src/assets/main.css).
- Define brand design tokens (colors, font family, any custom spacing) via the CSS-first `@theme { ... }` block in that same file — Tailwind v4 doesn't require a `tailwind.config.js` for this, and content-path scanning is automatic. No config file needed since we don't require plugins like `@tailwindcss/typography`.
- Add the chosen webfont (e.g. Inter via Google Fonts `<link>` in [index.html](index.html), or self-hosted) and reference it in the `@theme` font token.

### 2. Strip scaffold cruft
Delete unused create-vue starter files: `src/components/HelloWorld.vue`, `src/components/TheWelcome.vue`, `src/components/WelcomeItem.vue`, `src/components/__tests__/`, `src/components/icons/*`, `src/stores/` (Pinia not needed — uninstall `pinia` from `package.json`), `src/views/AboutView.vue`, `src/assets/logo.svg`, and the create-vue-specific rules in `base.css`/`main.css`. Simplify or remove `vue-router` — a single static marketing page doesn't need routing; use in-page anchor links for nav instead. Rewrite [src/App.vue](src/App.vue) as a lean root shell and [src/main.ts](src/main.ts) to drop the router/pinia registration accordingly.

### 3. Component architecture
`src/components/sections/*.vue` — one file per page section (~13 components matching the content inventory above), composed in order inside a single `HomeView.vue` (or directly in `App.vue`, given there's only one page).

Shared/reused components, driven by typed data arrays rather than duplicated markup:
- `ToolCategoryGrid.vue` — used 3× for AI Image/Video/Audio tool grids, props typed via a shared `ToolCategory` interface (`src/types/`). Cards follow the Higgsfield anatomy: thumbnail, name, one-line description, optional badge.
- `AssetCategoryShowcase.vue` — used 5× for LUTs/SFX/Text/Overlays/Backgrounds, props typed via an `AssetCategory` interface. Grid on desktop/tablet, horizontal-scroll carousel on mobile (Envato "curated collections" pattern).
- `StatBar.vue` — new, Envato-style: a single row of the real headline numbers (100,000+ templates, 4,000+ LUTs, 60,000+ SFX, 3,000+ text animations, 2,000+ overlays, 5,000+ backgrounds) placed near the top of the page as immediate proof, before the deeper narrative sections.
- `ModelBadgeStrip.vue` — new, Higgsfield-style: surfaces the real AI model names PromptEdit already integrates (Nano Banana Pro, Grok, Seedance, Kling, Veo, Heygen, ElevenLabs, Suno, Ideogram) as a visible badge/logo row directly under the hero, instead of leaving them buried in one sentence in the pricing section.
- `MediaPreviewFacade.vue` — the click-to-load pattern for all 25 Wistia embeds: renders a thumbnail + play affordance behind a `v-if`, and only mounts the actual `<iframe>` (swapped in via `v-else`) after a click sets a local `ref<boolean>` to true. This is the single biggest performance win over the current page (25 iframes → 0 iframes until the user actually asks for one).
- `FaqAccordion.vue` — the 7 Q&As, accessible toggle state per item.
- `PricingCard.vue` — the two pricing tiers as one reusable card component with a "highlighted/recommended" variant.
- `BeforeAfterSlider.vue` — flagship interactive component wrapping the real `Before_promptedit_copy.png` / `After_promptedit_copy.png` pair: pointer-driven drag handle (`pointerdown`/`pointermove`/`pointerup`) controlling a `clip-path` reveal percentage held in a `ref<number>`, plus `ArrowLeft`/`ArrowRight` keyboard support and `role="slider"`/`aria-valuenow` for accessibility.
- `WaveformVisualizer.vue` — stylized animated bar-equalizer (a row of `div`s with CSS-animated heights) driven by the same local playing-state `ref<boolean>` as `MediaPreviewFacade`, used in the AI Audio Tools cards and the SFX before/after comparison. Not audio-reactive to the real Wistia stream (cross-origin iframe — see Design Direction) — it's a deliberate stylistic choice, not a shortcut hidden from you.

### 4. Responsiveness
Explicitly test and fix at 375px / 768px / 1280px+ breakpoints (mobile responsiveness is called out in the job post as currently missing entirely):
- Header collapses to a compact bar with just logo + CTA on mobile.
- All grids go 2-col mobile → 3/4/6-col desktop.
- Pricing cards stack vertically on mobile.
- Testimonials stack or scroll horizontally on mobile.

### 5. Performance
- Tailwind's generated utility CSS replaces 313 inline `<style>` blocks.
- `loading="lazy"` + explicit `width`/`height` on all below-the-fold images to prevent layout shift.
- Wistia iframes deferred via the `MediaPreviewFacade` pattern described above.
- Semantic HTML (single `h1`, ordered `h2`s per section), `alt` text on all images, keyboard-accessible interactive elements.

### 6. Legal/footer correction
Keep all existing legal boilerplate (terms/privacy/earnings disclaimer links, Facebook disclaimer, satisfaction guarantee) intact and unchanged in tone, with two fixes: correct the disclaimer paragraph's stray reference to "the 14 Day Filmmaker program" so it names the actual product, and drop the `© 2026 Kajabi` platform-attribution line (that's Kajabi's own builder branding, not the client's).

## Verification

Using the scaffold's existing npm scripts (confirmed from `package.json`):
- `npm run dev` — visually QA every section at 375px/768px/1280px+ in the browser as it's built.
- `npm run type-check` — `vue-tsc` correctness pass.
- `npm run lint` — oxlint + eslint.
- `npm run build` — production build (type-check + `vite build`); confirm output size/bundle is lean.
- `npm run preview` — serve the production build locally for a final pass.
- Manual QA pass: every CTA, the FAQ accordion, and all 25 audio/video preview facades (confirm the Wistia iframe only mounts on click and actually plays).
- Specifically test the before/after slider with mouse drag, touch drag, and keyboard arrows; test the waveform visualizer starts/stops in sync with each preview's play/pause state.
- Optional: a local Lighthouse run (Chrome DevTools) to have a concrete performance/accessibility number to point to when applying, given "performant" is explicitly called out in the job post.

## Deployment (post-build, your call at execution time)

Once `npm run build` produces `dist/`, it's a static site deployable to Vercel, Netlify, or GitHub Pages — any of these satisfy the job post's "publish it on any domain" instruction. Not blocking the plan; decide when we get there.
