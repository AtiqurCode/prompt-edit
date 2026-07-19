<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { toolCategories } from '@/data/toolCategories'
import MediaPreviewFacade from '@/components/shared/MediaPreviewFacade.vue'
import { usePrefersReducedMotion } from '@/composables/usePrefersReducedMotion'

const LIVE_SLOTS = 2
const WAVE_MS = 3200

const categoryChip: Record<'image' | 'video' | 'audio', string> = {
  image: 'bg-brand-blue text-brand-ink',
  video: 'bg-brand-cta text-brand-ink',
  audio: 'bg-brand-yellow text-brand-ink',
}

const mosaicBands = computed(() => {
  let index = 0
  return toolCategories.map((category, categoryIndex) => ({
    id: category.id as 'image' | 'video' | 'audio',
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

const rootEl = ref<HTMLElement | null>(null)
const sectionInView = ref(false)
const pageVisible = ref(true)
const waveOffset = ref(0)
const reducedMotion = usePrefersReducedMotion()

let waveTimer: ReturnType<typeof setInterval> | null = null
let sectionObserver: IntersectionObserver | null = null

function isLive(globalIndex: number) {
  if (reducedMotion.value || !sectionInView.value || !pageVisible.value) return false
  const total = totalTools.value
  if (total === 0) return false
  const slots = Math.min(LIVE_SLOTS, total)
  for (let i = 0; i < slots; i += 1) {
    if ((waveOffset.value + i) % total === globalIndex) return true
  }
  return false
}

function clearWave() {
  if (waveTimer) {
    clearInterval(waveTimer)
    waveTimer = null
  }
}

function syncWave() {
  clearWave()
  if (reducedMotion.value || !sectionInView.value || !pageVisible.value) return

  waveTimer = setInterval(() => {
    const total = totalTools.value
    if (total === 0) return
    waveOffset.value = (waveOffset.value + 1) % total
  }, WAVE_MS)
}

function onVisibility() {
  pageVisible.value = document.visibilityState === 'visible'
  syncWave()
}

onMounted(() => {
  document.addEventListener('visibilitychange', onVisibility)

  if (!rootEl.value) return
  sectionObserver = new IntersectionObserver(
    (entries) => {
      sectionInView.value = entries[0]?.isIntersecting ?? false
      syncWave()
    },
    { threshold: 0.12, rootMargin: '0px' },
  )
  sectionObserver.observe(rootEl.value)
})

onUnmounted(() => {
  document.removeEventListener('visibilitychange', onVisibility)
  sectionObserver?.disconnect()
  clearWave()
})
</script>

<template>
  <div
    ref="rootEl"
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
          {{ totalTools }} tools across image, video, and audio — tap any tile for sound
        </p>
      </div>
      <div class="flex flex-wrap gap-2" aria-hidden="true">
        <span
          v-for="category in toolCategories"
          :key="category.id"
          class="rounded-md px-3 py-1.5 text-xs font-bold tracking-wide uppercase"
          :class="categoryChip[category.id as 'image' | 'video' | 'audio']"
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

        <div class="grid grid-cols-1 gap-px bg-white/20 min-[400px]:grid-cols-2 lg:grid-cols-3">
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
              poster-size="sm"
              :playing="isLive(item.globalIndex)"
              class="rounded-none"
            />

            <div
              class="pointer-events-none absolute inset-x-0 bottom-0 z-[5] bg-gradient-to-t from-brand-ink via-brand-ink/85 to-transparent px-3 pt-10 pb-9"
            >
              <p
                class="inline-flex rounded border border-white/20 bg-brand-ink/80 px-1.5 py-0.5 text-xs font-semibold tracking-[0.16em] text-white/70 uppercase"
              >
                {{ band.eyebrow.replace('AI ', '') }}
              </p>
              <h4 class="font-display mt-1.5 text-sm font-bold text-white sm:text-base">
                {{ item.name }}
              </h4>
              <p class="mt-0.5 line-clamp-2 text-xs leading-5 text-white/55">
                {{ item.description }}
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>
