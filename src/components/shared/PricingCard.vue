<script setup lang="ts">
import { ref } from 'vue'
import type { PricingPlan } from '@/types/content'
import { useInView } from '@/composables/useInView'
import SiteButton from './SiteButton.vue'

defineProps<{ plan: PricingPlan }>()

const el = ref<HTMLElement | null>(null)
const inView = useInView(el)
</script>

<template>
  <div
    ref="el"
    class="pressable relative flex h-full flex-col rounded-2xl border p-8"
    :class="[
      plan.highlighted
        ? 'border-brand-cta/50 bg-brand-ink text-white glow-cta'
        : 'border-white/12 bg-brand-ink-soft text-white',
      inView ? 'in-view' : '',
    ]"
  >
    <div
      v-if="plan.highlighted"
      class="animate-glow-breathe pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-brand-cta/35 via-transparent to-brand-blue/25"
    />

    <span
      v-if="plan.badge"
      class="mb-5 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase"
      :class="plan.highlighted ? 'bg-brand-cta text-brand-ink' : 'bg-brand-yellow/20 text-brand-yellow'"
    >
      {{ plan.badge }}
    </span>

    <h3 class="font-display text-2xl font-bold tracking-tight">{{ plan.name }}</h3>

    <p class="mt-6 flex items-baseline gap-1">
      <span class="font-display text-5xl font-bold tracking-tight">{{ plan.price }}</span>
      <span v-if="plan.priceSuffix" class="text-white/50">{{ plan.priceSuffix }}</span>
    </p>

    <ul class="stagger-check mt-8 flex-1 space-y-3 text-sm">
      <li v-for="feature in plan.features" :key="feature" class="flex gap-2.5">
        <svg
          viewBox="0 0 24 24"
          class="mt-0.5 h-5 w-5 shrink-0 text-brand-cta"
          fill="none"
          stroke="currentColor"
          stroke-width="2.25"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
        <span class="text-white/75">{{ feature }}</span>
      </li>
    </ul>

    <SiteButton
      href="#pricing"
      :variant="plan.highlighted ? 'primary' : 'secondary'"
      size="lg"
      class="mt-8 w-full"
    >
      {{ plan.ctaLabel }}
    </SiteButton>

    <p v-if="plan.note" class="mt-3 text-center text-xs text-white/55">
      {{ plan.note }}
    </p>
  </div>
</template>
