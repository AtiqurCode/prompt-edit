<script setup lang="ts">
import { modelBadges } from '@/data/modelBadges'
</script>

<template>
  <div class="w-full">
    <p class="mb-4 text-center text-xs font-semibold tracking-widest text-white/50 uppercase">
      Every major AI model, in one place
    </p>
    <div
      class="marquee-track relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <ul class="flex shrink-0 animate-marquee items-center gap-3 pr-3">
        <li
          v-for="model in modelBadges"
          :key="model"
          class="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90"
        >
          {{ model }}
        </li>
      </ul>
      <ul class="flex shrink-0 animate-marquee items-center gap-3 pr-3" aria-hidden="true">
        <li
          v-for="model in modelBadges"
          :key="model"
          class="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90"
        >
          {{ model }}
        </li>
      </ul>
    </div>
  </div>
</template>
