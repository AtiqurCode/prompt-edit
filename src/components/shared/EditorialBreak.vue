<script setup lang="ts">
import { ref } from 'vue'
import { useInView } from '@/composables/useInView'

const { label, headline, tone = 'dark' } = defineProps<{
  label: string
  headline: string
  tone?: 'dark' | 'light'
}>()

const el = ref<HTMLElement | null>(null)
const inView = useInView(el)
</script>

<template>
  <div
    ref="el"
    class="border-y py-12 sm:py-16"
    :class="
      tone === 'dark'
        ? 'border-white/10 bg-brand-ink-soft text-white'
        : 'border-brand-ink/8 bg-white text-brand-ink'
    "
  >
    <div class="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p
          class="eyebrow"
          :class="tone === 'dark' ? 'text-brand-cta' : 'text-brand-blue-deep'"
        >
          {{ label }}
        </p>
        <span
          v-if="inView"
          class="draw-line mt-3 block h-0.5 w-16"
          :class="tone === 'dark' ? 'bg-brand-cta' : 'bg-brand-blue'"
        />
      </div>
      <h2
        class="font-display max-w-3xl text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
        :class="tone === 'dark' ? 'text-white' : 'text-brand-ink'"
      >
        {{ headline }}
      </h2>
    </div>
  </div>
</template>
