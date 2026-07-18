<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { toolCategories } from '@/data/toolCategories'
import MediaPreviewFacade from '@/components/shared/MediaPreviewFacade.vue'

const LIVE_SLOTS = 6
const WAVE_MS = 2600

const categoryChip: Record<string, string> = {
  image: 'bg-brand-blue text-brand-ink',
  video: 'bg-brand-cta text-brand-ink',
  audio: 'bg-brand-yellow text-brand-ink',
}

const mosaicBands = computed(() => {
  let index = 0
  return toolCategories.map((category, categoryIndex) => ({
    id: category.id,
    eyebrow: category.eyebrow,
    description: category.description,
    categoryIndex,
    items: category.items.map((item) => {
      const globalIndex = index
      index += 1
      return { ...item, globalIndex }
    }),
  }))
})

const totalTools = computed(() =>
  mosaicBands.value.reduce((sum, band) => sum + band.items.length, 0),
)

const waveOffset = ref(0)
const reducedMotion = ref(false)
let waveTimer: ReturnType<typeof setInterval> | null = null

function isLive(globalIndex: number) {
  if (reducedMotion.value) return false
  const total = totalTools.value
  if (total === 0) return false
  for (let i = 0; i < Math.min(LIVE_SLOTS, total); i += 1) {
    if ((waveOffset.value + i) % total === globalIndex) return true
  }
  return false
}

onMounted(() => {
  reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion.value) return

  waveTimer = setInterval(() => {
    const total = totalTools.value
    if (total === 0) return
    waveOffset.value = (waveOffset.value + 1) % total
  }, WAVE_MS)
})

onUnmounted(() => {
  if (waveTimer) clearInterval(waveTimer)
})
</script>

<template>
  <div
    class="overflow-hidden rounded-lg border-[3px] border-white bg-brand-ink-soft shadow-brutal-invert-lg"
    role="region"
    aria-label="All creative tools mosaic"
  >
    <div
      class="flex flex-wrap items-center justify-between gap-3 border-b-[3px] border-white bg-brand-ink px-5 py-4 sm:px-6"
    >
      <div>
        <p class="text-xs font-semibold tracking-[0.28em] text-brand-cta uppercase">
          Full lineup · live wall
        </p>
        <p class="mt-1 text-sm text-white/55">
          {{ totalTools }} tools across image, video, and audio — all visible, auto-playing muted
        </p>
      </div>
      <div class="flex flex-wrap gap-2" aria-hidden="true">
        <span
          v-for="category in toolCategories"
          :key="category.id"
          class="rounded-md px-3 py-1.5 text-xs font-bold tracking-wide uppercase"
          :class="categoryChip[category.id]"
        >
          {{ category.eyebrow.replace('AI ', '') }} · {{ category.items.length }}
        </span>
      </div>
    </div>

    <div class="space-y-0">
      <section
        v-for="band in mosaicBands"
        :key="band.id"
        class="border-b-[3px] border-white last:border-b-0"
        :aria-label="band.eyebrow"
      >
        <div
          class="flex flex-col gap-1 border-b-2 border-white/15 bg-brand-ink px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5"
        >
          <div class="flex items-center gap-3">
            <span
              class="h-3 w-3 shrink-0 rounded-sm"
              :class="categoryChip[band.id]"
              aria-hidden="true"
            />
            <h3 class="font-display text-sm font-bold tracking-[0.18em] text-white uppercase">
              {{ band.eyebrow }}
            </h3>
          </div>
          <p class="text-xs text-white/50 sm:max-w-md sm:text-right">{{ band.description }}</p>
        </div>

        <div class="grid grid-cols-2 gap-px bg-white/20 sm:grid-cols-3">
          <article
            v-for="item in band.items"
            :key="`${band.id}-${item.name}`"
            class="mosaic-tile relative bg-brand-ink"
            :class="isLive(item.globalIndex) ? 'mosaic-tile-live' : ''"
            :style="{ animationDelay: `${(band.categoryIndex * 3 + item.globalIndex) * 35}ms` }"
          >
            <MediaPreviewFacade
              :wistia-id="item.wistiaId"
              :label="item.name"
              aspect="aspect-video"
              lazy
              :playing="isLive(item.globalIndex)"
              class="rounded-none"
            />

            <div
              class="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-ink via-brand-ink/85 to-transparent px-3 pt-12 pb-3"
            >
              <p
                class="inline-flex rounded border border-white/20 bg-brand-ink/80 px-1.5 py-0.5 text-[10px] font-semibold tracking-[0.16em] text-white/70 uppercase"
              >
                {{ band.eyebrow.replace('AI ', '') }}
              </p>
              <h4 class="font-display mt-1.5 text-sm font-bold text-white sm:text-base">
                {{ item.name }}
              </h4>
              <p class="mt-0.5 line-clamp-2 text-[11px] leading-4 text-white/55 sm:text-xs sm:leading-5">
                {{ item.description }}
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>
