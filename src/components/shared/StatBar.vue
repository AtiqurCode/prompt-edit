<script setup lang="ts">
import { stats } from '@/data/stats'
import CountUpNumber from './CountUpNumber.vue'
</script>

<template>
  <div class="border-y-2 border-white/20 bg-brand-ink">
    <div class="mx-auto max-w-7xl px-6 py-6">
      <div class="h-scroll-rail">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="shadow-brutal-invert min-w-[11rem] rounded-md border-[3px] border-white bg-brand-ink-soft px-5 py-4"
        >
          <p class="font-display text-2xl font-bold text-white">
            <CountUpNumber :value="stat.value" />
          </p>
          <p class="mt-1 text-xs font-semibold tracking-[0.18em] text-white/55 uppercase">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
