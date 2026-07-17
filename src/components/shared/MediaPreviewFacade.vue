<script setup lang="ts">
import { ref } from 'vue'
import { wistiaAutoplayUrl, wistiaPoster } from '@/data/assets'
import { useAutoplayInView } from '@/composables/useAutoplayInView'
import { useExclusiveUnmute } from '@/composables/useExclusiveUnmute'
import IconGlyph from '@/components/shared/IconGlyph.vue'

const {
  wistiaId,
  label = 'preview',
  aspect = 'aspect-video',
  controlClass = '',
} = defineProps<{
  wistiaId: string
  label?: string
  aspect?: string
  /** Extra classes for the tap-to-sound control (e.g. hero placement). */
  controlClass?: string
}>()

const el = ref<HTMLElement | null>(null)
const active = useAutoplayInView(el)
const { soundOn, toggle } = useExclusiveUnmute(active)

/** Prefer pointerdown so touch feels instant; ignore follow-up mouse click after touch. */
function onPointerDown(event: PointerEvent) {
  if (event.pointerType === 'mouse' && event.button !== 0) return
  event.preventDefault()
  toggle()
}
</script>

<template>
  <div
    ref="el"
    class="pointer-events-none relative overflow-hidden bg-brand-ink"
    :class="aspect"
  >
    <img
      :src="wistiaPoster(wistiaId)"
      alt=""
      class="absolute inset-0 h-full w-full object-cover"
      loading="eager"
      decoding="async"
    >
    <iframe
      v-if="active"
      :key="`${wistiaId}-${soundOn ? 'on' : 'off'}`"
      :src="wistiaAutoplayUrl(wistiaId, { muted: !soundOn })"
      :title="label"
      class="absolute inset-0 h-full w-full"
      frameborder="0"
      allow="autoplay"
    />
    <button
      type="button"
      class="pressable pointer-events-auto absolute bottom-2.5 left-2.5 z-20 flex min-h-11 min-w-11 touch-manipulation items-center gap-2 rounded-full border border-white/20 bg-black/75 px-3.5 py-2.5 text-xs font-semibold text-white shadow-[0_8px_24px_rgba(0,0,0,0.45)] backdrop-blur-md transition-[transform,background-color,opacity] duration-150 select-none active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cta"
      :class="[controlClass, active ? 'opacity-100' : 'pointer-events-none opacity-0']"
      :aria-label="soundOn ? `Mute ${label}` : `Tap to hear ${label}`"
      :aria-pressed="soundOn"
      @pointerdown.stop="onPointerDown"
    >
      <IconGlyph :name="soundOn ? 'unmute' : 'mute'" class="h-4 w-4 shrink-0" />
      <span>{{ soundOn ? 'Sound on · tap off' : 'Tap for sound' }}</span>
    </button>
  </div>
</template>
