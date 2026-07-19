<script setup lang="ts">
import SiteButton from '@/components/shared/SiteButton.vue'
import ModelBadgeStrip from '@/components/shared/ModelBadgeStrip.vue'
import MediaPreviewFacade from '@/components/shared/MediaPreviewFacade.vue'

const heroPoints = [
  {
    index: '01',
    label: 'Marketplace',
    copy: 'Every major AI model in one marketplace',
  },
  {
    index: '02',
    label: 'Templates',
    copy: '100,000+ editing templates included with monthly',
  },
  {
    index: '03',
    label: 'Credits',
    copy: 'Pay-as-you-go credits instead of stacked subscriptions',
  },
]
</script>

<template>
  <section id="top" class="relative overflow-hidden bg-brand-ink pt-10 pb-14 sm:pt-24 sm:pb-28">
    <div class="pointer-events-none absolute inset-0">
      <div class="bg-grid-fade absolute inset-x-0 top-0 h-[28rem] opacity-40 sm:opacity-50" />
      <div
        class="absolute -top-24 right-0 hidden h-72 w-72 rounded-full bg-brand-cta/10 blur-3xl sm:block"
        aria-hidden="true"
      />
      <div
        class="absolute bottom-0 left-0 hidden h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl sm:block"
        aria-hidden="true"
      />
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
      <div
        class="mb-7 flex flex-wrap items-center gap-2 border-b-2 border-white/15 pb-4 text-[11px] font-semibold tracking-[0.22em] text-white/55 uppercase sm:mb-10 sm:gap-3 sm:pb-5 sm:text-xs sm:tracking-[0.28em]"
      >
        <span class="inline-flex items-center gap-2 text-brand-cta">
          <span class="h-2 w-2 rounded-full bg-brand-cta" aria-hidden="true" />
          Live offer
        </span>
        <span class="hidden text-white/25 sm:inline" aria-hidden="true">/</span>
        <span class="max-w-[14rem] truncate sm:max-w-none">For AI Creator Course students</span>
        <span class="ml-auto hidden font-mono tracking-widest text-white/50 sm:inline">CH-01</span>
      </div>

      <div class="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div class="max-w-xl">
          <h1 class="display-headline font-display font-bold text-white">
            You bring the course.
            <span class="mt-2 block text-brand-cta">We bring the creative stack.</span>
          </h1>

          <ol class="mt-8 space-y-0 border-y-2 border-white/15 sm:mt-10">
            <li
              v-for="point in heroPoints"
              :key="point.index"
              class="grid grid-cols-[2.75rem_1fr] items-start gap-3 border-b-2 border-white/10 py-3.5 last:border-b-0 sm:grid-cols-[3.5rem_1fr] sm:gap-4 sm:py-4"
            >
              <span class="font-display text-sm font-bold tracking-wider text-brand-cta">
                {{ point.index }}
              </span>
              <div>
                <p class="text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase sm:text-xs sm:tracking-[0.22em]">
                  {{ point.label }}
                </p>
                <p class="mt-1 text-[15px] leading-6 text-white/80 sm:text-lg sm:leading-7">
                  {{ point.copy }}
                </p>
              </div>
            </li>
          </ol>

          <div class="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <SiteButton href="#pricing" size="lg">Get Started Today</SiteButton>
            <div class="flex flex-wrap items-center gap-2.5 text-sm text-white/50">
              <span
                class="inline-flex items-center rounded-md border-2 border-brand-yellow bg-brand-yellow px-3 py-1.5 font-display text-sm font-bold text-brand-ink"
              >
                $39/mo
              </span>
              <span>Best student value</span>
            </div>
          </div>
        </div>

        <div class="relative">
          <div
            class="overflow-hidden rounded-lg border-[3px] border-white bg-brand-ink-soft shadow-brutal-invert sm:shadow-brutal-invert-lg"
          >
            <div
              class="flex items-center justify-between gap-3 border-b-[3px] border-white/25 bg-brand-ink px-3 py-2.5 sm:px-5 sm:py-3"
            >
              <div class="flex items-center gap-2" aria-hidden="true">
                <span class="h-2.5 w-2.5 rounded-full bg-brand-coral" />
                <span class="h-2.5 w-2.5 rounded-full bg-brand-yellow" />
                <span class="h-2.5 w-2.5 rounded-full bg-brand-cta" />
              </div>
              <p class="truncate text-[10px] font-semibold tracking-[0.18em] text-white/55 uppercase sm:text-xs sm:tracking-[0.2em]">
                PromptEdit · product demo
              </p>
              <span
                class="hidden rounded border border-white/30 px-2 py-0.5 text-[10px] font-semibold tracking-[0.18em] text-white/60 uppercase sm:inline"
              >
                Rec
              </span>
            </div>

            <MediaPreviewFacade
              wistia-id="eu37od3pav"
              label="See PromptEdit in action"
              aspect="aspect-video"
              eager
            />

            <div
              class="hidden border-t-[3px] border-white/25 px-5 py-4 sm:flex sm:items-center sm:justify-between"
            >
              <p class="text-sm leading-6 text-white/65">
                Image, video, audio, and editing assets in one place
              </p>
              <p class="text-xs font-semibold tracking-[0.2em] text-brand-cta uppercase">
                Marketplace preview
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 border-t-2 border-white/15 pt-8 sm:mt-20 sm:pt-10">
        <ModelBadgeStrip />
      </div>
    </div>
  </section>
</template>
