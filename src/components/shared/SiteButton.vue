<script setup lang="ts">
import { computed, ref } from 'vue'
import { useSpotlight } from '@/composables/useSpotlight'

const {
  href = '#pricing',
  variant = 'primary',
  size = 'md',
} = defineProps<{
  href?: string
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
}>()

const el = ref<HTMLElement | null>(null)
useSpotlight(el)

const classes = computed(() => [
  'group relative isolate inline-flex items-center justify-center overflow-hidden rounded-full border font-semibold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cta',
  size === 'lg' ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm',
  variant === 'primary'
    ? 'border-brand-cta/70 bg-brand-cta text-white shadow-[0_14px_34px_rgba(39,174,96,0.22)] hover:-translate-y-0.5 hover:bg-brand-cta-hover hover:shadow-[0_18px_40px_rgba(39,174,96,0.28)]'
    : 'border-black/8 bg-white text-brand-ink shadow-sm hover:-translate-y-0.5 hover:bg-gray-50',
])
</script>

<template>
  <a ref="el" :href="href" :class="classes">
    <span
      v-if="variant === 'primary'"
      class="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style="background: radial-gradient(120px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(255, 255, 255, 0.35), transparent 70%)"
    />
    <span class="relative"><slot /></span>
  </a>
</template>
