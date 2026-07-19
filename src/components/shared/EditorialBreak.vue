<script setup lang="ts">
const { label, headline, tone = 'dark' } = defineProps<{
  label: string
  headline: string
  tone?: 'dark' | 'light'
}>()

const styles = {
  dark: {
    root: 'border-white/20 bg-brand-ink-soft text-white',
    rail: 'bg-brand-cta',
    label: 'text-brand-cta',
    rule: 'bg-white/30',
    next: 'text-white/50',
    headline: 'text-white',
  },
  light: {
    root: 'border-brand-ink bg-brand-surface text-brand-ink',
    rail: 'bg-brand-ink',
    label: 'text-brand-blue-deep',
    rule: 'bg-brand-ink/25',
    next: 'text-brand-blue-deep',
    headline: 'text-brand-ink',
  },
} as const
</script>

<template>
  <div class="relative overflow-hidden border-y-[3px] py-8 sm:py-16" :class="styles[tone].root">
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-1.5"
      :class="styles[tone].rail"
      aria-hidden="true"
    />

    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="grid grid-cols-1 items-end gap-5 lg:grid-cols-[14rem_1fr] lg:gap-12">
        <div class="flex flex-col gap-2 sm:gap-3">
          <p class="text-[11px] font-semibold tracking-[0.28em] uppercase sm:text-xs sm:tracking-[0.32em]" :class="styles[tone].label">
            {{ label }}
          </p>
          <div class="h-px w-12 sm:w-16" :class="styles[tone].rule" aria-hidden="true" />
          <p class="hidden font-mono text-xs tracking-[0.28em] uppercase sm:block" :class="styles[tone].next">
            Next section
          </p>
        </div>

        <h2
          class="font-display max-w-4xl text-2xl font-bold leading-[1.15] sm:text-4xl lg:text-5xl"
          :class="styles[tone].headline"
        >
          {{ headline }}
        </h2>
      </div>
    </div>
  </div>
</template>
