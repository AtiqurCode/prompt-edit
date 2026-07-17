<script setup lang="ts">
import ScrollReveal from '@/components/shared/ScrollReveal.vue'

const fitPoints = [
  {
    title: 'One interface, not ten',
    copy: 'Every major AI tool in one easy marketplace instead of a dozen separate logins.',
    icon: 'M4 6h16M4 12h10M4 18h16',
    span: 'lg:col-span-2',
  },
  {
    title: 'Better credit value',
    copy: 'The best deal on AI credits, so you get more output for less money.',
    icon: 'M12 3v18M7 8h7a2.5 2.5 0 010 5H8a2.5 2.5 0 000 5h8',
    span: '',
  },
  {
    title: 'Cinematic in one drag',
    copy: 'Templates that skip the build-it-yourself step entirely.',
    icon: 'M4 5h16v14H4z M4 9.5h16 M9 5v4.5',
    span: '',
  },
  {
    title: 'No $130 packs',
    copy: 'Tired of buying a bloated bundle just to get the one asset you actually wanted? Same.',
    icon: 'M5 8h14l-1.5 11.5a2 2 0 01-2 1.5h-7a2 2 0 01-2-1.5L5 8z M9 8V6a3 3 0 016 0v2',
    span: 'lg:col-span-2',
  },
]
</script>

<template>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6">
      <ScrollReveal class="max-w-2xl">
        <p class="text-sm font-semibold tracking-[0.28em] text-brand-slate uppercase">Who it is for</p>
        <h2 class="font-display mt-4 text-4xl font-bold text-brand-ink sm:text-5xl">
          A PromptEdit subscription is for you if you want one workflow, not ten.
        </h2>
      </ScrollReveal>

      <div class="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
        <ScrollReveal
          v-for="(point, i) in fitPoints"
          :key="point.title"
          :delay="i * 90"
          :class="point.span"
        >
          <div
            class="shadow-brutal group h-full rounded-lg border-[3px] border-brand-ink bg-white p-7 transition-all duration-150 hover:-translate-y-1 hover:shadow-[8px_10px_0_0_var(--color-brand-ink)]"
          >
            <div
              class="flex h-11 w-11 items-center justify-center rounded-md border-2 border-brand-ink bg-brand-ink text-brand-cta transition-colors group-hover:bg-brand-cta group-hover:text-brand-ink"
            >
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path :d="point.icon" />
              </svg>
            </div>
            <h3 class="font-display mt-5 text-lg font-bold text-brand-ink">{{ point.title }}</h3>
            <p class="mt-2 text-sm leading-7 text-brand-slate">{{ point.copy }}</p>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal :delay="260" class="mt-8">
        <div class="shadow-brutal-lg relative overflow-hidden rounded-lg border-[3px] border-brand-ink bg-brand-ink px-8 py-10 text-center sm:px-14">
          <div class="bg-grid-fade pointer-events-none absolute inset-0 opacity-30" />
          <div class="relative">
            <p class="text-sm font-semibold tracking-[0.28em] text-brand-cta uppercase">
              Unlimited downloads &amp; unlimited usage
            </p>
            <h3 class="font-display mt-3 text-2xl font-bold text-white sm:text-3xl">
              Backed by our 100% Money-Back Satisfaction Guarantee
            </h3>
            <p class="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65">
              Cancel your subscription any time, and within 30 days of purchase get a full refund on
              unused credits. Spent AI credits are non-refundable, the same way you cannot get a
              refund on gas once you have reached your destination.
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
