<script setup lang="ts">
import { computed } from 'vue'

const {
  href = '#pricing',
  variant = 'primary',
  size = 'md',
} = defineProps<{
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'md' | 'lg'
}>()

const classes = computed(() => {
  const base =
    'pressable inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg font-display font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-2'

  const sizes = size === 'lg' ? 'px-7 py-3.5 text-base' : 'px-5 py-2.5 text-sm'

  const variants = {
    primary:
      'btn-shine bg-brand-cta text-brand-ink glow-cta hover:bg-brand-cta-hover focus-visible:outline-brand-cta',
    secondary:
      'border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/10 focus-visible:outline-white',
    ghost:
      'border border-brand-ink/15 bg-white text-brand-ink hover:border-brand-ink/30 hover:bg-brand-surface focus-visible:outline-brand-ink',
  } as const

  return [base, sizes, variants[variant]]
})
</script>

<template>
  <a :href="href" :class="classes">
    <slot />
    <svg
      v-if="variant === 'primary'"
      viewBox="0 0 24 24"
      class="btn-arrow h-4 w-4"
      fill="none"
      stroke="currentColor"
      stroke-width="2.25"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  </a>
</template>
