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
  <section id="top" class="relative overflow-hidden bg-brand-ink pt-16 pb-20 sm:pt-24 sm:pb-28">
    <div class="pointer-events-none absolute inset-0">
      <div class="bg-grid-fade absolute inset-x-0 top-0 h-[28rem] opacity-50" />
      <div
        class="absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-cta/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        class="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl"
        aria-hidden="true"
      />
    </div>

    <div class="relative mx-auto max-w-7xl px-6">
      <!-- Signal strip -->
      <div
        class="mb-10 flex flex-wrap items-center gap-3 border-b-2 border-white/15 pb-5 text-xs font-semibold tracking-[0.28em] text-white/55 uppercase"
      >
        <span class="inline-flex items-center gap-2 text-brand-cta">
          <span class="h-2 w-2 rounded-full bg-brand-cta" aria-hidden="true" />
          Live offer
        </span>
        <span class="hidden text-white/25 sm:inline" aria-hidden="true">/</span>
        <span>For AI Creator Course students</span>
        <span class="ml-auto hidden font-mono tracking-widest text-white/50 sm:inline">CH-01</span>
      </div>

      <div class="grid grid-cols-1 items-end gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div class="max-w-xl">
          <h1 class="display-headline font-display font-bold text-white">
            You bring the course.
            <span class="mt-2 block text-brand-cta">We bring the creative stack.</span>
          </h1>

          <ol class="mt-10 space-y-0 border-y-2 border-white/15">
            <li
              v-for="point in heroPoints"
              :key="point.index"
              class="grid grid-cols-[3.5rem_1fr] items-start gap-4 border-b-2 border-white/10 py-4 last:border-b-0"
            >
              <span class="font-display text-sm font-bold tracking-wider text-brand-cta">
                {{ point.index }}
              </span>
              <div>
                <p class="text-xs font-semibold tracking-[0.22em] text-white/50 uppercase">
                  {{ point.label }}
                </p>
                <p class="mt-1 text-base leading-7 text-white/80 sm:text-lg">{{ point.copy }}</p>
              </div>
            </li>
          </ol>

          <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <SiteButton href="#pricing" size="lg">Click To Get Started Today</SiteButton>
            <div class="flex items-center gap-3 text-sm text-white/50">
              <span
                class="inline-flex items-center rounded-md border-2 border-brand-yellow bg-brand-yellow px-3 py-1.5 font-display text-sm font-bold text-brand-ink"
              >
                $39/mo
              </span>
              <span>Best student value · explore free</span>
            </div>
          </div>
        </div>

        <div class="relative">
          <!-- Studio monitor frame -->
          <div class="overflow-hidden rounded-lg border-[3px] border-white bg-brand-ink-soft shadow-brutal-invert-lg">
            <div
              class="flex items-center justify-between gap-3 border-b-[3px] border-white/25 bg-brand-ink px-4 py-3 sm:px-5"
            >
              <div class="flex items-center gap-2" aria-hidden="true">
                <span class="h-2.5 w-2.5 rounded-full bg-brand-coral" />
                <span class="h-2.5 w-2.5 rounded-full bg-brand-yellow" />
                <span class="h-2.5 w-2.5 rounded-full bg-brand-cta" />
              </div>
              <p class="truncate text-xs font-semibold tracking-[0.2em] text-white/55 uppercase">
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
              class="min-h-[16rem] sm:min-h-[24rem]"
            />

            <div
              class="flex flex-col gap-2 border-t-[3px] border-white/25 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5"
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

      <div class="mt-20 border-t-2 border-white/15 pt-10">
        <ModelBadgeStrip />
      </div>
    </div>
  </section>
</template>
