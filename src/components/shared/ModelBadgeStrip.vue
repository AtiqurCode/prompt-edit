<script setup lang="ts">
import { modelBadges } from '@/data/modelBadges'
</script>

<template>
  <div class="w-full">
    <p class="mb-4 eyebrow text-center text-white/55">Every major AI model, in one place</p>
    <div
      class="marquee-track relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
    >
      <ul class="flex shrink-0 animate-marquee items-center gap-2.5 pr-2.5">
        <li
          v-for="model in modelBadges"
          :key="model"
          class="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80"
        >
          {{ model }}
        </li>
      </ul>
      <ul class="flex shrink-0 animate-marquee items-center gap-2.5 pr-2.5" aria-hidden="true">
        <li
          v-for="model in modelBadges"
          :key="`dup-${model}`"
          class="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80"
        >
          {{ model }}
        </li>
      </ul>
    </div>
  </div>
</template>
