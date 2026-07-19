<script setup lang="ts">
import type { PricingPlan } from '@/types/content'
import SiteButton from './SiteButton.vue'

defineProps<{ plan: PricingPlan }>()
</script>

<template>
  <div
    class="flex h-full flex-col rounded-lg border-[3px] border-brand-ink p-5 motion-safe:transition-transform motion-safe:duration-150 motion-safe:hover:-translate-y-1 sm:p-8"
    :class="
      plan.highlighted
        ? 'shadow-brutal-cta max-sm:rotate-0 rotate-1 bg-brand-ink text-white motion-safe:hover:rotate-0'
        : 'shadow-brutal max-sm:rotate-0 -rotate-1 bg-white text-brand-ink motion-safe:hover:rotate-0'
    "
  >
    <span
      v-if="plan.badge"
      class="mb-4 inline-flex w-fit items-center rounded-md border-2 border-brand-ink px-3 py-1 text-xs font-semibold tracking-wide uppercase sm:mb-5"
      :class="plan.highlighted ? 'border-white bg-brand-yellow text-brand-ink' : 'bg-brand-yellow text-brand-ink'"
    >
      {{ plan.badge }}
    </span>

    <h3 class="font-display text-xl font-bold sm:text-2xl">{{ plan.name }}</h3>

    <p class="mt-4 flex items-baseline gap-1 sm:mt-6">
      <span class="font-display text-4xl font-bold sm:text-5xl">{{ plan.price }}</span>
      <span
        v-if="plan.priceSuffix"
        :class="plan.highlighted ? 'text-white/60' : 'text-brand-slate/75'"
      >{{ plan.priceSuffix }}</span>
    </p>

    <ul class="mt-6 flex-1 space-y-2.5 text-sm sm:mt-8 sm:space-y-3">
      <li v-for="feature in plan.features" :key="feature" class="flex gap-2.5">
        <svg viewBox="0 0 20 20" class="mt-0.5 h-5 w-5 shrink-0 fill-brand-cta" aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
            clip-rule="evenodd"
          />
        </svg>
        <span :class="plan.highlighted ? 'text-white/85' : 'text-brand-slate'">{{ feature }}</span>
      </li>
    </ul>

    <SiteButton
      href="#pricing"
      :variant="plan.highlighted ? 'primary' : 'secondary'"
      :surface="plan.highlighted ? 'dark' : 'light'"
      size="lg"
      class="mt-6 w-full sm:mt-8"
    >
      {{ plan.ctaLabel }}
    </SiteButton>

    <p
      v-if="plan.note"
      class="mt-3 text-center text-xs"
      :class="plan.highlighted ? 'text-white/50' : 'text-brand-slate/75'"
    >
      {{ plan.note }}
    </p>
  </div>
</template>
