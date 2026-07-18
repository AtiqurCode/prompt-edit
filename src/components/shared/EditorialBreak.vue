<script setup lang="ts">
const { label, headline, tone = 'dark' } = defineProps<{
  label: string
  headline: string
  tone?: 'dark' | 'light'
}>()
</script>

<template>
  <div
    class="relative overflow-hidden border-y-[3px] py-12 sm:py-16"
    :class="
      tone === 'dark'
        ? 'border-white/20 bg-brand-ink-soft text-white'
        : 'border-brand-ink bg-brand-surface text-brand-ink'
    "
  >
    <div
      class="pointer-events-none absolute inset-y-0 left-0 w-1.5"
      :class="tone === 'dark' ? 'bg-brand-cta' : 'bg-brand-ink'"
      aria-hidden="true"
    />

    <div class="mx-auto max-w-7xl px-6">
      <div class="grid grid-cols-1 items-end gap-8 lg:grid-cols-[14rem_1fr] lg:gap-12">
        <div class="flex flex-col gap-3">
          <p
            class="text-xs font-semibold tracking-[0.32em] uppercase"
        :class="tone === 'dark' ? 'text-brand-cta' : 'text-brand-blue-deep'"
      >
        {{ label }}
      </p>
          <div
            class="h-px w-16"
            :class="tone === 'dark' ? 'bg-white/30' : 'bg-brand-ink/25'"
            aria-hidden="true"
          />
          <p
            class="font-mono text-[10px] tracking-[0.28em] uppercase"
            :class="tone === 'dark' ? 'text-white/50' : 'text-brand-blue-deep'"
          >
            Next section
          </p>
        </div>

        <h2
          class="font-display max-w-4xl text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl"
          :class="tone === 'dark' ? 'text-white' : 'text-brand-ink'"
        >
          {{ headline }}
        </h2>
      </div>
    </div>
  </div>
</template>
