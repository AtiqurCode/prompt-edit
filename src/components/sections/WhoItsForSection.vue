<script setup lang="ts">
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import SectionEyebrow from '@/components/shared/SectionEyebrow.vue'
import IconGlyph from '@/components/shared/IconGlyph.vue'
import type { IconName } from '@/types/content'

const fitPoints: {
  title: string
  copy: string
  icon: IconName
  index: string
}[] = [
  {
    title: 'One interface, not ten',
    copy: 'Every major AI tool in one easy marketplace instead of a dozen separate logins.',
    icon: 'fitInterface',
    index: '01',
  },
  {
    title: 'Better credit value',
    copy: 'The best deal on AI credits, so you get more output for less money.',
    icon: 'fitCredits',
    index: '02',
  },
  {
    title: 'Cinematic in one drag',
    copy: 'Templates that skip the build-it-yourself step entirely.',
    icon: 'fitCinematic',
    index: '03',
  },
  {
    title: 'No $130 packs',
    copy: 'Tired of buying a bloated bundle just to get the one asset you actually wanted? Same.',
    icon: 'fitPacks',
    index: '04',
  },
]
</script>

<template>
  <section class="relative overflow-hidden bg-white py-14 sm:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
        <ScrollReveal>
          <SectionEyebrow label="Who it is for" chapter="04" tone="light" />
          <h2 class="font-display mt-4 text-3xl font-bold text-brand-ink sm:mt-5 sm:text-5xl">
            A PromptEdit subscription is for you if you want one workflow, not ten.
          </h2>
        </ScrollReveal>

        <ScrollReveal :delay="100">
          <p class="max-w-xl text-sm leading-7 text-brand-slate sm:text-base sm:leading-8 lg:text-right">
            Built for creators who already know what they want to make — and refuse to keep paying
            five platforms to finish a single project.
          </p>
        </ScrollReveal>
      </div>

      <div class="mt-10 overflow-hidden rounded-lg border-[3px] border-brand-ink shadow-brutal sm:mt-14 sm:shadow-brutal-lg">
        <ScrollReveal
          v-for="(point, i) in fitPoints"
          :key="point.title"
          :delay="i * 70"
          class="group grid grid-cols-1 border-b-[3px] border-brand-ink bg-white last:border-b-0 sm:grid-cols-[5rem_1fr_auto] sm:items-center"
        >
          <div
            class="flex items-center gap-3 border-b-2 border-brand-ink/10 bg-brand-surface px-4 py-3 sm:h-full sm:flex-col sm:justify-center sm:border-r-[3px] sm:border-b-0 sm:border-brand-ink sm:px-4 sm:py-4"
          >
            <span class="font-display text-base font-bold text-brand-ink sm:text-lg">{{ point.index }}</span>
            <span
              class="flex h-9 w-9 items-center justify-center rounded-md border-2 border-brand-ink bg-brand-ink text-brand-cta transition-colors duration-200 group-hover:bg-brand-cta group-hover:text-brand-ink sm:h-10 sm:w-10"
            >
              <IconGlyph :name="point.icon" class="h-5 w-5" />
            </span>
          </div>

          <div class="px-4 py-5 sm:px-8 sm:py-6">
            <h3 class="font-display text-lg font-bold text-brand-ink sm:text-xl">{{ point.title }}</h3>
            <p class="mt-1.5 max-w-2xl text-sm leading-6 text-brand-slate sm:mt-2 sm:leading-7">{{ point.copy }}</p>
          </div>

          <div class="hidden px-6 sm:block" aria-hidden="true">
            <span
              class="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-ink/20 text-brand-ink/30 transition-colors duration-200 group-hover:border-brand-cta group-hover:bg-brand-cta group-hover:text-brand-ink"
            >
              <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal :delay="260" class="mt-6 sm:mt-8">
        <div
          class="relative overflow-hidden rounded-lg border-[3px] border-brand-ink bg-brand-ink px-5 py-7 shadow-brutal sm:px-14 sm:py-10 sm:shadow-brutal-lg"
        >
          <div class="bg-grid-fade pointer-events-none absolute inset-0 opacity-30" />
          <div
            class="pointer-events-none absolute top-0 left-0 h-full w-1.5 bg-brand-cta"
            aria-hidden="true"
          />
          <div class="relative grid grid-cols-1 gap-5 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <div>
              <p class="text-[11px] font-semibold tracking-[0.24em] text-brand-cta uppercase sm:text-sm sm:tracking-[0.28em]">
                Unlimited downloads &amp; unlimited usage
              </p>
              <h3 class="font-display mt-2 text-xl font-bold text-white sm:mt-3 sm:text-3xl">
                Backed by our 100% Money-Back Satisfaction Guarantee
              </h3>
              <p class="mt-3 max-w-2xl text-sm leading-6 text-white/65 sm:mt-4 sm:leading-7">
                Cancel your subscription any time, and within 30 days of purchase get a full refund on
                unused credits. Spent AI credits are non-refundable, the same way you cannot get a
                refund on gas once you have reached your destination.
              </p>
            </div>
            <div
              class="inline-flex w-fit max-w-full items-center rounded-md border-2 border-brand-cta bg-brand-cta px-4 py-2.5 font-display text-xs font-bold tracking-wide text-brand-ink uppercase sm:px-5 sm:py-3 sm:text-sm"
            >
              30-day unused credit refund
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
