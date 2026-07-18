<script setup lang="ts">
import { computed, ref } from 'vue'
import { wistiaAutoplayUrl, wistiaPoster } from '@/data/assets'
import { useAutoplayInView } from '@/composables/useAutoplayInView'

const {
  wistiaId,
  label = 'preview',
  aspect = 'aspect-video',
  playing = undefined,
  lazy = false,
} = defineProps<{
  wistiaId: string
  label?: string
  aspect?: string
  /** When set, parent controls playback (mosaic wave). Otherwise: in-view autoplay. */
  playing?: boolean
  lazy?: boolean
}>()

const el = ref<HTMLElement | null>(null)
const inViewActive = useAutoplayInView(el)

const active = computed(() => (playing === undefined ? inViewActive.value : playing))
</script>

<template>
  <div ref="el" class="relative overflow-hidden rounded-md bg-brand-ink" :class="aspect">
    <img
      :src="wistiaPoster(wistiaId)"
      alt=""
      class="absolute inset-0 h-full w-full object-cover"
      :class="active ? '' : 'mosaic-poster-drift'"
      :loading="lazy ? 'lazy' : 'eager'"
      decoding="async"
    >
    <iframe
      v-if="active"
      :src="wistiaAutoplayUrl(wistiaId)"
      :title="label"
      class="absolute inset-0 h-full w-full"
      frameborder="0"
      allow="autoplay"
    />
    <span
      class="pointer-events-none absolute right-2 bottom-2 flex items-center gap-1 rounded-md border-2 border-white bg-brand-ink px-2 py-1 text-[10px] font-medium text-white transition-opacity duration-200"
      :class="active ? 'opacity-100' : 'opacity-0'"
    >
      <svg viewBox="0 0 20 20" class="h-3 w-3 fill-current" aria-hidden="true">
        <path
          d="M10 3.5 5.5 7H3a1 1 0 00-1 1v4a1 1 0 001 1h2.5L10 16.5V3.5z"
        />
        <path d="M13 7.5l4 4M17 7.5l-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
      </svg>
      muted
    </span>
  </div>
</template>
