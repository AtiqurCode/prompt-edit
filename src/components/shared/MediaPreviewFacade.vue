<script setup lang="ts">
import { ref } from 'vue'
import { wistiaAutoplayUrl, wistiaPoster } from '@/data/assets'
import { useAutoplayInView } from '@/composables/useAutoplayInView'

const { wistiaId, label = 'preview', aspect = 'aspect-video' } = defineProps<{
  wistiaId: string
  label?: string
  aspect?: string
}>()

const el = ref<HTMLElement | null>(null)
const active = useAutoplayInView(el)
</script>

<template>
  <div ref="el" class="relative overflow-hidden bg-brand-ink" :class="aspect">
    <img
      :src="wistiaPoster(wistiaId)"
      alt=""
      class="absolute inset-0 h-full w-full object-cover"
      loading="eager"
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
      class="pointer-events-none absolute right-2 bottom-2 flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-[10px] font-medium text-white backdrop-blur-sm transition-opacity"
      :class="active ? 'opacity-100' : 'opacity-0'"
    >
      <svg viewBox="0 0 20 20" class="h-3 w-3 fill-current" aria-hidden="true">
        <path d="M10 3.5 5.5 7H3a1 1 0 00-1 1v4a1 1 0 001 1h2.5L10 16.5V3.5z" />
        <path d="M13 7.5l4 4M17 7.5l-4 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
      </svg>
      muted
    </span>
  </div>
</template>
