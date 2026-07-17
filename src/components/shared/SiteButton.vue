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
  'brutal-press inline-flex cursor-pointer items-center justify-center rounded-md border-[3px] font-display font-bold whitespace-nowrap uppercase tracking-wide focus-visible:outline-2 focus-visible:outline-offset-2',
  size === 'lg' ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm',
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
