<script setup lang="ts">
import { ref } from 'vue'
import { modelBadges } from '@/data/modelBadges'
import { usePrefersReducedMotion } from '@/composables/usePrefersReducedMotion'

const reducedMotion = usePrefersReducedMotion()
const paused = ref(false)

function togglePause() {
  paused.value = !paused.value
}
</script>

<template>
  <div class="w-full">
    <div class="mb-4 flex flex-wrap items-center justify-center gap-3">
      <p class="text-center text-xs font-semibold tracking-widest text-white/50 uppercase">
        Every major AI model, in one place
      </p>
      <button
        v-if="!reducedMotion"
        type="button"
        class="cursor-pointer rounded-md border-2 border-white/40 px-3 py-1.5 text-xs font-semibold text-white/70 transition-colors hover:border-white hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        :aria-pressed="paused"
        @click="togglePause"
      >
        {{ paused ? 'Play' : 'Pause' }}
      </button>
    </div>

    <!-- Reduced motion / paused: scrollable static list -->
    <div
      v-if="reducedMotion || paused"
      class="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:thin]"
      role="list"
      aria-label="AI models"
    >
      <span
        v-for="model in modelBadges"
        :key="model"
        role="listitem"
        class="shrink-0 whitespace-nowrap rounded-md border-2 border-white bg-transparent px-4 py-2 text-sm font-semibold text-white"
      >
        {{ model }}
      </span>
    </div>

    <div
      v-else
      class="marquee-track relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
    >
      <ul class="flex shrink-0 animate-marquee items-center gap-3 pr-3">
        <li
          v-for="model in modelBadges"
          :key="model"
          class="whitespace-nowrap rounded-md border-2 border-white bg-transparent px-4 py-2 text-sm font-semibold text-white"
        >
          {{ model }}
        </li>
      </ul>
      <ul class="flex shrink-0 animate-marquee items-center gap-3 pr-3" aria-hidden="true">
        <li
          v-for="model in modelBadges"
          :key="`dup-${model}`"
          class="whitespace-nowrap rounded-md border-2 border-white bg-transparent px-4 py-2 text-sm font-semibold text-white"
        >
          {{ model }}
        </li>
      </ul>
    </div>
  </div>
</template>
