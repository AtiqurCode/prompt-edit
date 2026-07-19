<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { toolCategories } from '@/data/toolCategories'
import MediaPreviewFacade from '@/components/shared/MediaPreviewFacade.vue'
import { usePrefersReducedMotion } from '@/composables/usePrefersReducedMotion'

const categoryChip: Record<'image' | 'video' | 'audio', string> = {
  image: 'bg-brand-blue text-brand-ink',
  video: 'bg-brand-cta text-brand-ink',
  audio: 'bg-brand-yellow text-brand-ink',
}

const mosaicBands = computed(() =>
  toolCategories.map((category, categoryIndex) => ({
    id: category.id as 'image' | 'video' | 'audio',
    eyebrow: category.eyebrow,
    description: category.description,
    categoryIndex,
    items: category.items,
  })),
)

const totalTools = computed(() =>
  mosaicBands.value.reduce((sum, band) => sum + band.items.length, 0),
)

const rootEl = ref<HTMLElement | null>(null)
const sectionInView = ref(false)
const pageVisible = ref(true)
const reducedMotion = usePrefersReducedMotion()

/** Once the wall is on screen, every tile runs muted. */
const demosLive = computed(
  () => !reducedMotion.value && sectionInView.value && pageVisible.value,
)

let sectionObserver: IntersectionObserver | null = null

function onVisibility() {
  pageVisible.value = document.visibilityState === 'visible'
}

onMounted(() => {
  document.addEventListener('visibilitychange', onVisibility)

  if (!rootEl.value) return
  sectionObserver = new IntersectionObserver(
    (entries) => {
      sectionInView.value = entries[0]?.isIntersecting ?? false
    },
    { threshold: 0.05, rootMargin: '160px 0px' },
  )
  sectionObserver.observe(rootEl.value)
})

onUnmounted(() => {
  document.removeEventListener('visibilitychange', onVisibility)
  sectionObserver?.disconnect()
})
</script>

<template>
  <div
    ref="rootEl"
    class="overflow-hidden rounded-lg border-[3px] border-white bg-brand-ink-soft shadow-brutal-invert sm:shadow-brutal-invert-lg"
    role="region"
    aria-label="All creative tools mosaic"
  >
    <div
      class="flex flex-col gap-3 border-b-[3px] border-white bg-brand-ink px-4 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-6"
    >
      <div>
        <p class="text-[11px] font-semibold tracking-[0.24em] text-brand-cta uppercase sm:text-xs sm:tracking-[0.28em]">
          Full lineup · live wall
        </p>
        <p class="mt-1 text-sm leading-6 text-white/55">
          {{ totalTools }} tools — swipe on mobile, tap any tile for sound
        </p>
      </div>
      <div class="hidden flex-wrap gap-2 sm:flex" aria-hidden="true">
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
          <p class="hidden text-xs text-white/50 sm:block sm:max-w-md sm:text-right">
            {{ band.description }}
          </p>
        </div>

        <!-- Mobile: horizontal snap rail. Desktop: dense mosaic grid. -->
        <div
          class="flex gap-3 overflow-x-auto bg-brand-ink px-4 py-4 [scrollbar-width:thin] snap-x snap-mandatory sm:grid sm:grid-cols-2 sm:gap-px sm:overflow-visible sm:bg-white/20 sm:p-0 lg:grid-cols-3"
        >
          <article
            v-for="(item, itemIndex) in band.items"
            :key="`${band.id}-${item.name}`"
            class="mosaic-tile relative w-[78vw] max-w-[18rem] shrink-0 snap-center overflow-hidden rounded-md border-2 border-white/25 sm:w-auto sm:max-w-none sm:rounded-none sm:border-0 sm:bg-brand-ink"
            :style="{ animationDelay: `${(band.categoryIndex * 3 + itemIndex) * 35}ms` }"
          >
            <MediaPreviewFacade
              :wistia-id="item.wistiaId"
              :label="item.name"
              aspect="aspect-video"
              lazy
              poster-size="sm"
              :playing="demosLive"
              class="rounded-md sm:rounded-none"
            />

            <div
              class="pointer-events-none absolute inset-x-0 bottom-0 z-[5] bg-gradient-to-t from-brand-ink via-brand-ink/85 to-transparent px-3 pt-8 pb-8 sm:pt-10 sm:pb-9"
            >
              <p
                class="hidden rounded border border-white/20 bg-brand-ink/80 px-1.5 py-0.5 text-xs font-semibold tracking-[0.16em] text-white/70 uppercase sm:inline-flex"
              >
                {{ band.eyebrow.replace('AI ', '') }}
              </p>
              <h4 class="font-display text-sm font-bold text-white sm:mt-1.5 sm:text-base">
                {{ item.name }}
              </h4>
              <p class="mt-0.5 hidden text-xs leading-5 text-white/55 sm:line-clamp-2 sm:block">
                {{ item.description }}
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  </div>
</template>
