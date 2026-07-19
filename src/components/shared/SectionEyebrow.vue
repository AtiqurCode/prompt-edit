<script setup lang="ts">
defineProps<{
  label: string
  chapter?: string
  tone?: 'dark' | 'light'
}>()
</script>

<template>
  <div class="flex items-center gap-3">
    <span
      v-if="chapter"
      class="inline-flex h-8 w-8 items-center justify-center rounded-md border-2 font-display text-xs font-bold"
      :class="
        tone === 'dark'
          ? 'border-brand-cta text-brand-cta'
          : 'border-brand-ink bg-brand-ink text-brand-cta'
      "
    >
      {{ chapter }}
    </span>
    <p
      class="text-sm font-semibold tracking-[0.28em] uppercase"
      :class="tone === 'dark' ? 'text-brand-cta' : 'text-brand-blue-deep'"
    >
      {{ label }}
    </p>
  </div>
</template>
