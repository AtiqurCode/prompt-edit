<script setup lang="ts">
const { label, headline, tone = 'dark' } = defineProps<{
  label: string
  headline: string
  tone?: 'dark' | 'light'
}>()
</script>

<template>
  <div
    class="border-y-[3px] py-10 sm:py-14"
    :class="
      tone === 'dark'
        ? 'border-white/25 bg-brand-ink-soft text-white'
        : 'border-brand-ink bg-brand-surface text-brand-ink'
    "
  >
    <div class="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-end sm:justify-between">
      <p
        class="text-xs font-semibold tracking-[0.32em] uppercase"
        :class="tone === 'dark' ? 'text-brand-cta' : 'text-brand-slate'"
      >
        {{ label }}
      </p>
      <h2
        class="font-display max-w-3xl text-2xl font-bold sm:text-3xl lg:text-4xl"
        :class="tone === 'dark' ? 'text-white' : 'text-brand-ink'"
      >
        {{ headline }}
      </h2>
    </div>
  </div>
</template>
