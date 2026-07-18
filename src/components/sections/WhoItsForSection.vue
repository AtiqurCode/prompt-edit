<script setup lang="ts">
import ScrollReveal from '@/components/shared/ScrollReveal.vue'

const fitPoints = [
  {
    title: 'One interface, not ten',
    copy: 'Every major AI tool in one easy marketplace instead of a dozen separate logins.',
    icon: 'M4 6h16M4 12h10M4 18h16',
    index: '01',
  },
  {
    title: 'Better credit value',
    copy: 'The best deal on AI credits, so you get more output for less money.',
    icon: 'M12 3v18M7 8h7a2.5 2.5 0 010 5H8a2.5 2.5 0 000 5h8',
    index: '02',
  },
  {
    title: 'Cinematic in one drag',
    copy: 'Templates that skip the build-it-yourself step entirely.',
    icon: 'M4 5h16v14H4z M4 9.5h16 M9 5v4.5',
    index: '03',
  },
  {
    title: 'No $130 packs',
    copy: 'Tired of buying a bloated bundle just to get the one asset you actually wanted? Same.',
    icon: 'M5 8h14l-1.5 11.5a2 2 0 01-2 1.5h-7a2 2 0 01-2-1.5L5 8z M9 8V6a3 3 0 016 0v2',
    index: '04',
  },
]
</script>

<template>
  <section class="relative overflow-hidden bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16">
        <ScrollReveal>
          <div class="flex items-center gap-3">
            <span
              class="inline-flex h-8 w-8 items-center justify-center rounded-md border-2 border-brand-ink bg-brand-yellow font-display text-xs font-bold text-brand-ink"
            >
              04
            </span>
            <p class="text-sm font-semibold tracking-[0.28em] text-brand-blue-deep uppercase">
              Who it is for
            </p>
          </div>
          <h2 class="font-display mt-5 text-4xl font-bold text-brand-ink sm:text-5xl">
            A PromptEdit subscription is for you if you want one workflow, not ten.
          </h2>
        </ScrollReveal>

        <ScrollReveal :delay="100">
          <p class="max-w-xl text-base leading-8 text-brand-slate lg:text-right">
            Built for creators who already know what they want to make — and refuse to keep paying
            five platforms to finish a single project.
          </p>
        </ScrollReveal>
      </div>

      <!-- Fit brief: numbered rows, not soft card grid -->
      <div class="mt-14 overflow-hidden rounded-lg border-[3px] border-brand-ink shadow-brutal-lg">
        <ScrollReveal
          v-for="(point, i) in fitPoints"
          :key="point.title"
          :delay="i * 70"
          class="group grid grid-cols-1 border-b-[3px] border-brand-ink bg-white last:border-b-0 sm:grid-cols-[5rem_1fr_auto] sm:items-center"
        >
          <div
            class="flex items-center gap-3 border-b-2 border-brand-ink/10 bg-brand-surface px-5 py-4 sm:h-full sm:flex-col sm:justify-center sm:border-r-[3px] sm:border-b-0 sm:border-brand-ink sm:px-4"
          >
            <span class="font-display text-lg font-bold text-brand-ink">{{ point.index }}</span>
            <span
              class="flex h-10 w-10 items-center justify-center rounded-md border-2 border-brand-ink bg-brand-ink text-brand-cta transition-colors duration-200 group-hover:bg-brand-cta group-hover:text-brand-ink"
            >
              <svg
                viewBox="0 0 24 24"
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path :d="point.icon" />
              </svg>
            </span>
          </div>

          <div class="px-6 py-6 sm:px-8">
            <h3 class="font-display text-xl font-bold text-brand-ink">{{ point.title }}</h3>
            <p class="mt-2 max-w-2xl text-sm leading-7 text-brand-slate">{{ point.copy }}</p>
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

      <ScrollReveal :delay="260" class="mt-8">
        <div
          class="relative overflow-hidden rounded-lg border-[3px] border-brand-ink bg-brand-ink px-8 py-10 shadow-brutal-lg sm:px-14"
        >
          <div class="bg-grid-fade pointer-events-none absolute inset-0 opacity-30" />
          <div
            class="pointer-events-none absolute top-0 left-0 h-full w-1.5 bg-brand-cta"
            aria-hidden="true"
          />
          <div class="relative grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <div>
              <p class="text-sm font-semibold tracking-[0.28em] text-brand-cta uppercase">
                Unlimited downloads &amp; unlimited usage
              </p>
              <h3 class="font-display mt-3 text-2xl font-bold text-white sm:text-3xl">
                Backed by our 100% Money-Back Satisfaction Guarantee
              </h3>
              <p class="mt-4 max-w-2xl text-sm leading-7 text-white/65">
                Cancel your subscription any time, and within 30 days of purchase get a full refund on
                unused credits. Spent AI credits are non-refundable, the same way you cannot get a
                refund on gas once you have reached your destination.
              </p>
            </div>
            <div
              class="inline-flex w-fit items-center rounded-md border-2 border-brand-cta bg-brand-cta px-5 py-3 font-display text-sm font-bold tracking-wide text-brand-ink uppercase"
            >
              30-day unused credit refund
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
