<script setup lang="ts">
import type { PricingPlan } from '@/types/content'
import SiteButton from './SiteButton.vue'

defineProps<{ plan: PricingPlan }>()
</script>

<template>
  <div class="group relative h-full">
    <div
      v-if="plan.highlighted"
      class="absolute -inset-1 rounded-4xl bg-linear-to-br from-brand-cta via-brand-blue to-brand-blue-deep opacity-80 blur-xl transition-opacity duration-500 group-hover:opacity-100"
    />
    <div
      class="relative flex h-full flex-col overflow-hidden rounded-4xl border p-8 transition-transform duration-300 group-hover:-translate-y-1.5"
      :class="
        plan.highlighted
          ? 'border-transparent bg-brand-ink text-white shadow-2xl shadow-black/25'
          : 'border-white/15 bg-white/95 text-brand-ink shadow-2xl shadow-brand-ink/8'
      "
    >
      <span
        v-if="plan.badge"
        class="mb-5 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase"
        :class="plan.highlighted ? 'bg-brand-cta/20 text-brand-cta' : 'bg-brand-ink/6 text-brand-ink/60'"
      >
        {{ plan.badge }}
      </span>

      <h3 class="text-2xl font-extrabold">{{ plan.name }}</h3>

      <p class="mt-6 flex items-baseline gap-1">
        <span class="text-5xl font-extrabold">{{ plan.price }}</span>
        <span
          v-if="plan.priceSuffix"
          :class="plan.highlighted ? 'text-white/60' : 'text-gray-500'"
        >{{ plan.priceSuffix }}</span>
      </p>

      <ul class="mt-8 flex-1 space-y-3 text-sm">
        <li v-for="feature in plan.features" :key="feature" class="flex gap-2.5">
          <svg viewBox="0 0 20 20" class="mt-0.5 h-5 w-5 shrink-0 fill-brand-cta">
            <path
              fill-rule="evenodd"
              d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span :class="plan.highlighted ? 'text-white/85' : 'text-gray-600'">{{ feature }}</span>
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

      <p
        v-if="plan.note"
        class="mt-3 text-center text-xs"
        :class="plan.highlighted ? 'text-white/50' : 'text-gray-400'"
      >
        {{ plan.note }}
      </p>
    </div>
  </div>
</template>
