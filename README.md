# PromptEdit.com Sales Page Redesign

A redesign of ContentCreator.com's [PromptEdit.com](http://promptedit.com) sales page, built as a portfolio submission for a Design-Focused Front-End Developer application. Built with **Vue 3 + TypeScript + Tailwind CSS v4**.

This file is a running log of the project from first to last — what was done, why, and what's left.

---

## Repo conventions (important)

Git commits/pushes for this project must use the **local** identity only:

- Name: `AtiqurCode`
- Email: `atqur9@gmail.com`

Do **not** commit or push with:

- Claude / Anthropic
- Cursor / CursorAgent
- Any other global git user

See `AGENTS.md` and `.cursor/rules/git-commit-attribution.mdc` for the full rule.

---

## The brief

The job posting skips résumé review entirely: candidates prove themselves by redesigning a real page from the company's own site to be "more intuitive and better than we made it," then publishing it and applying via a Google Form. Requirements called out explicitly:

- Use **Tailwind CSS**
- Match the design quality of **Epidemic Sound, Motion Array, Artlist, Higgsfield, Envato Elements**
- Fix **mobile responsiveness** (the live site has none)
- Ship a **performant** page

---

## Phase 1 — Research & planning

- Read the job posting (PDF/DOCX) and the current live page's saved HTML source (`prompt-edit.html`, 27,566 lines).
- Found the live page is a **Kajabi page-builder export**: 313 inline `<style>` tags, 79 `<script>` tags, 25 eagerly-loaded Wistia iframes, hotlinked Kajabi CDN images, generic `sans-serif` fallback font, and a footer disclaimer that references an unrelated product ("14 Day Filmmaker") — a copy-paste artifact.
- Since no visual screenshot tool was available, researched the five reference sites via `WebFetch`/`WebSearch` to ground the design direction in specific, nameable patterns rather than "make it modern": Epidemic Sound's restrained palette and single persistent CTA, Envato's stat-bar-before-narrative and AI-tool icon rows, Higgsfield's named-model credibility cards, Motion Array/Artlist's bundle-pricing shape.
- Decided with the user: keep the existing persuasive narrative copy as-is (it's a post-purchase upsell page for AI Creator Course students), build as a Vue 3 + TS + Tailwind v4 SPA inside the existing scaffold, reuse the real hotlinked Kajabi/Wistia assets rather than placeholders, stay scoped to the sales page (no bonus features).
- For a "not generic" investment, chose **real interaction craft** over decorative motifs: a genuine draggable before/after slider using the page's actual `Before_promptedit_copy.png`/`After_promptedit_copy.png` pair, and an animated waveform visualizer for the audio previews (explicitly documented as stylistic, not audio-reactive, since the previews are cross-origin Wistia iframes).

## Phase 2 — Initial build

- Installed Tailwind CSS v4 (`@tailwindcss/vite`), stripped all unused `create-vue` scaffold code (demo components, router, Pinia).
- Mined the full asset manifest out of the Kajabi HTML: every real image URL and all 25 Wistia video IDs, mapped section-by-section.
- Built typed content data files (tool categories, asset categories, pricing plans, FAQ, testimonials, model badges, stats) and a component library: `MediaPreviewFacade`, `BeforeAfterSlider`, `WaveformVisualizer`, `StatBar`, `ModelBadgeStrip`, `FaqAccordion`, `PricingCard`, `ToolCategoryGrid`, `AssetCategoryShowcase`.
- Composed all 13 page sections into `App.vue`.
- Verified with a Playwright-driven headless browser (no visual tooling otherwise available): zero console errors, the before/after slider genuinely drags and reveals the real image, production build came in at 98KB JS / 30KB CSS — versus the original page's 313 inline styles and 79 scripts.

## Phase 3 — First round of feedback: header, logo, image quality

Feedback: the header read as a full website nav rather than a single sales page ("we don't need the click skipper"), and the images looked blurry.

- Stripped the header down to just the logo and one CTA — no nav links, no login link, nothing that lets a visitor skip past the page.
- Wired in the real `Prompt_Edit_Logo_Black_Background.webp` logo (verified it has genuine alpha transparency via Pillow, so no CSS invert hacks needed).
- Root-caused the blur: `MediaPreviewFacade` was using Wistia's `/swatch` endpoint, a deliberately tiny (100×56px) blurred placeholder meant for blur-up loading — not a real thumbnail — then stretching it to fill full-size cards. Fixed by resolving real 960×540 stills for all 22 videos via Wistia's public oEmbed API and baking them into a static lookup (`src/data/wistiaThumbnails.ts`), so there's no runtime API dependency.

## Phase 4 — "This looks generic" (client rejected it)

The client reviewed a build and marked it generic — didn't match the reference sites despite the interaction work already in place.

Diagnosed concretely (not just "make it nicer"):
1. Nine sections in a row opened with the identical centered-eyebrow → centered-heading → centered-paragraph formula — the single most recognizable AI-generated-landing-page tell.
2. The hero had zero visual identity: flat navy background, text only.
3. The "text block + media block, alternating sides" layout repeated seven times with no structural variation.
4. Cards used the literal default Tailwind-UI recipe (`rounded-2xl shadow-sm ring-1 ring-black/5`) everywhere.
5. Color was used too timidly to read as a brand.

Rebuilt against that diagnosis:
- Scroll-reveal infrastructure (`useInView` composable, `ScrollReveal` wrapper component, `CountUpNumber`), plus CSS keyframes for gradient blobs, a floating bob, and an infinite marquee.
- Hero rebuilt with animated gradient-mesh blobs, a floating tilted collage of real product thumbnails, an asymmetric two-column layout, and a marquee of the real AI model names (Veo, Kling, Nano Banana Pro, etc.).
- Sticky header now shrinks and gains a shadow on scroll.
- Replaced every centered-block section intro with numbered, asymmetric headers (`01 AI Image Tools`, `02 AI Video Tools`...).
- New card system: gradient-glow border on the highlighted pricing card, rotated/offset testimonial cards with a quote-mark motif, hover-lift throughout.
- Each of the five asset-category showcases (LUTs/SFX/Text/Overlays/Backgrounds) got its own accent color instead of one repeated green, so scrolling through them reads as curated, not copy-pasted.
- Editing-plugins section restructured entirely (stacked, gradient-bordered video, floating "Premiere Pro"/"DaVinci Resolve" badges) instead of repeating the same split layout again.
- FAQ accordion animates height smoothly via a CSS grid-rows transition instead of snapping open instantly.
- Verified again via Playwright at desktop and mobile; fixed an ESLint multi-word-component-name error along the way (renamed `Reveal` → `ScrollReveal`).

## Phase 5 — Deeper feedback: missed content, real brand identity, autoplay video, sharper animation

Feedback: sections were still missing versus the original page, the type/color system should match the real brand rather than an invented one, previews should play as you scroll instead of requiring a click, and the animation still wasn't distinctive enough.

- **Real brand system, not invented colors.** Extracted the actual palette directly from `prompt-edit.html`'s own CSS (confirmed independently by sampling the logo file's pixels): navy `#000d22`/`#161e2a`, green `#27ae60`/`#2ecc71`, blue `#43aef6`/`#0072ef`. Swapped the font from Inter to **Open Sans** — the font the original page actually loads. Every invented violet/pink token was replaced.
- **Autoplay-on-scroll video**, not click-to-play. Rebuilt `MediaPreviewFacade` around Wistia's documented silent-autoplay/loop embed parameters (verified via Wistia's own docs before implementing, to avoid unexpectedly loud autoplay). Built `useAutoplayInView`, an `IntersectionObserver`-driven composable that mounts a video only while a card is substantially visible and tears it down once scrolled away — plus a **global concurrency cap** (max 6 concurrent embeds) added after testing surfaced a real bug: a dense grid could fire off 10 simultaneous video streams and starve each other's bandwidth, leaving several tiles blank. Fixed and re-verified.
- **Restored content that was genuinely missing.** Went back into the source HTML and found: a "Trusted By" image, a header intro video, and — the biggest find — 9 additional real Wistia videos that power the original "Listen to Some of Our Sounds" category browser (Urban / YouTube / Glitch / Impact / Cartoon / Whooshes) plus the real muted-vs-unmuted SFX comparison pair and a drag-and-drop demo, all resolved via Wistia's oEmbed API and now live in the SFX showcase. Added the product-box mockup images as small overlapping accent cards on each asset category.
- **Distinctive, non-generic motion**: cursor-reactive 3D tilt on the hero's video collage (`useTiltGroup`), a gradient scroll-progress bar fixed to the top of the viewport, and a cursor-spotlight glow that follows the pointer across the primary CTA button (`useSpotlight`).
- Final verification: clean type-check, clean lint, Playwright-confirmed autoplay behavior (bounded at 6 concurrent, zero console errors), all image URLs spot-checked for valid HTTP 200s, production build clean at 115KB JS / 47KB CSS (≈42KB/9KB gzipped).

## Phase 6 — "New mode, not just redesign": design-system-driven pass

The client asked for a step change rather than another incremental pass, and pointed at the project's `ui-ux-pro-max` design skill (67 styles, 96 palettes, 57 font pairings, a searchable CSV database) with explicit instructions: no generic patterns, no copy-paste work, no generic colors.

- **Used the skill's search tool for real, not just as a label.** Ran `--design-system` against "AI marketplace SaaS creative tools video editing," which came back recommending a generic SaaS purple (`#7C3AED`) — the kind of violet-gradient cliché that's become its own AI-startup tell. Rejected it rather than applying it blindly, since it would have undone the real-brand-color work from Phase 5. Queried the `style` domain specifically for premium/editorial/creative-software options instead, which surfaced **Bento Grids** (modular, varied-size cards, Apple-style hierarchy) and **Editorial Grid/Magazine** (asymmetric layout, large display type, pull-quote treatment) as the actual fit — and confirmed that direction was already underway elsewhere in the codebase (an `EditorialBreak` divider component, `.editorial-hero`/`.cta-mesh`/`.film-grain`/`.display-headline` CSS utilities, a tabbed `CreativeStudioExplorer` tool browser, a scroll-spy `TemplatesLibraryStepper`).
- **Audited section-by-section against that already-elevated bar.** Hero, Tools, Offer-Intro, Editing Plugins, Templates Library, and Testimonials had already been rebuilt with real hero video, interactive tabbed browsing, and editorial asymmetric layouts. Pricing, Who-It's-For, and the Footer had not — they were the remaining "generic" holdouts (centered intro blocks, a plain Unicode ✓ character standing in for an icon, one long centered stack of legal text).
- **Rebuilt those three specifically:**
  - `PricingSection` — broke the centered-intro formula to match the rest of the page (asymmetric heading + a glassmorphic `.surface-panel` trust card), kept the existing gradient-glow pricing cards.
  - `WhoItsForSection` — replaced the Unicode checkmark with real SVG icons (the skill's own pre-delivery checklist flags emoji/text-as-icon explicitly), and restructured the four fit-points from a stacked list into a Bento-style grid with varied card spans instead of uniform rows.
  - `SiteFooter` — restructured from one long centered paragraph stack into a real footer: a top row (logo, tagline, quick links) over a divider, with the legal fine print below at reduced visual weight.
- **Ran the skill's `ux` domain accessibility checks and caught a real bug from it, not just a checklist pass.** The guidance flagged low-contrast text as a common, high-severity mistake — so rather than trust it by eye, computed actual WCAG contrast ratios in Python for the footer's fine print. `text-white/35` on the brand-ink background came out to **3.14:1**, below the 4.5:1 minimum; bumped it to `white/55` (**6.21:1**) and fixed a second borderline case (`white/45`, 4.48:1 — technically failing) the same way.
- Verified: clean type-check, clean lint, Playwright-confirmed no console errors at desktop and mobile, production build at 124KB JS / 63KB CSS (≈44KB/11KB gzipped) — larger than Phase 5 because of the added interactive components (tabbed tool explorer, sticky category stepper), still a lean budget for what's now on the page.

---

## Where it stands now

- A complete Vue 3 + TS + Tailwind v4 SPA replacing the original 27k-line Kajabi export, content-complete against the source page.
- Real brand colors and typography pulled from the actual site and logo, not invented.
- Real Wistia video throughout, playing automatically as you scroll, bandwidth-bounded.
- A distinct visual identity: animated gradient hero, cursor-reactive collage, scroll-progress bar, spotlight buttons, numbered asymmetric section rhythm, accent-colored asset showcases, a working drag-to-reveal before/after slider.
- Verified end-to-end: `type-check`, `lint`, and `build` all pass; browser-tested via Playwright at desktop and mobile viewports.

## What's left

- **Deployment.** Nothing is published yet — `npm run build` produces a static `dist/` deployable to Vercel, Netlify, or GitHub Pages, satisfying the job post's "publish it on any domain" instruction. This is intentionally left as a pending decision, not yet actioned.
- **Submit the application** via the Google Form once a live URL exists.
- **No automated test coverage added.** The scaffold has Vitest and Cypress wired up, but no unit or e2e tests were written for the new components — worth adding if this needs to be maintained past the application.
- **No formal Lighthouse audit run yet** — the bundle-size numbers above are a good proxy for performance, but a real audit would give a concrete number to cite in the application.
- **Not yet re-reviewed by the client** since the Phase 5 changes — this round of fixes hasn't had feedback yet.

---

## Development

```sh
npm install       # install dependencies
npm run dev       # dev server with hot reload
npm run build     # type-check + production build
npm run preview   # serve the production build locally
npm run lint      # oxlint + eslint
npm run test:unit # Vitest
```
