<script setup lang="ts">
const { label, headline, tone = 'dark' } = defineProps<{
  label: string
  headline: string
  tone?: 'dark' | 'light'
}>()
</script>

<template>
  <div
    class="border-y py-10 sm:py-14"
    :class="
      tone === 'dark'
        ? 'border-white/10 bg-brand-ink-soft text-white'
        : 'border-black/8 bg-brand-surface text-brand-ink'
    "
  >
    <div class="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-end sm:justify-between">
      <p
        class="text-xs font-semibold tracking-[0.32em] uppercase"
        :class="tone === 'dark' ? 'text-brand-cta' : 'text-brand-blue-deep'"
      >
        {{ label }}
      </p>
      <h2
        class="max-w-3xl text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl"
        :class="tone === 'dark' ? 'text-white' : 'text-brand-ink'"
      >
        {{ headline }}
      </h2>
    </div>
  </div>
</template>
