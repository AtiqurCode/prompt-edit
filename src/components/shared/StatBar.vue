<script setup lang="ts">
import { stats } from '@/data/stats'
import CountUpNumber from './CountUpNumber.vue'
</script>

<template>
  <div class="border-y-2 border-white/20 bg-brand-ink">
    <div class="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6">
      <div class="h-scroll-rail" role="list" aria-label="Key stats">
        <div
          v-for="stat in stats"
          :key="stat.label"
          role="listitem"
          class="shadow-brutal-invert min-w-[9rem] rounded-md border-[3px] border-white bg-brand-ink-soft px-4 py-3.5 sm:min-w-[11rem] sm:px-5 sm:py-4"
        >
          <p class="font-display text-xl font-bold text-white sm:text-2xl">
            <CountUpNumber :value="stat.value" />
          </p>
          <p class="mt-1 text-[11px] font-semibold tracking-[0.16em] text-white/55 uppercase sm:text-xs sm:tracking-[0.18em]">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
