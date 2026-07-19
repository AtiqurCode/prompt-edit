<script setup lang="ts">
import { computed } from 'vue'

const {
  href = '#pricing',
  variant = 'primary',
  size = 'md',
  surface = 'dark',
} = defineProps<{
  href?: string
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
  /** Background this button sits on — determines border/shadow color so it
   * stays visible (a black border reads as invisible against brand-ink). */
  surface?: 'light' | 'dark'
}>()

const classes = computed(() => [
  'brutal-press inline-flex min-h-11 max-w-full cursor-pointer items-center justify-center rounded-md border-[3px] font-display font-bold uppercase tracking-wide text-center text-balance focus-visible:outline-2 focus-visible:outline-offset-2',
  'w-full whitespace-normal sm:w-auto sm:whitespace-nowrap',
  size === 'lg'
    ? 'px-4 py-3.5 text-sm leading-snug sm:min-h-12 sm:px-8 sm:py-4 sm:text-base'
    : 'px-4 py-3 text-sm leading-snug sm:px-6',
  surface === 'dark'
    ? 'shadow-brutal-invert border-white focus-visible:outline-white'
    : 'shadow-brutal border-brand-ink focus-visible:outline-brand-ink',
  variant === 'primary' ? 'bg-brand-cta text-brand-ink' : 'bg-white text-brand-ink',
])
</script>

<template>
  <a :href="href" :class="classes">
    <slot />
  </a>
</template>
