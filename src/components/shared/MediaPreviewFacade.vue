<script setup lang="ts">
import { computed, ref, toRef } from 'vue'
import { wistiaAutoplayUrl, wistiaPoster } from '@/data/assets'
import { useAutoplayInView } from '@/composables/useAutoplayInView'
import { useExclusiveUnmute } from '@/composables/useExclusiveUnmute'
import { useWistiaInPlaceMute } from '@/composables/useWistiaInPlaceMute'
import IconGlyph from '@/components/shared/IconGlyph.vue'

const props = withDefaults(
  defineProps<{
    wistiaId: string
    label?: string
    aspect?: string
    /** When set, parent controls muted autoplay. */
    playing?: boolean
    /** Mount muted autoplay immediately (hero / above-the-fold). */
    eager?: boolean
    lazy?: boolean
    posterSize?: 'sm' | 'md'
  }>(),
  {
    label: 'preview',
    aspect: 'aspect-video',
    eager: false,
    lazy: false,
    posterSize: 'md',
  },
)

const el = ref<HTMLElement | null>(null)
const unmuteEnabled = ref(true)
const { soundOn, toggle } = useExclusiveUnmute(unmuteEnabled)

const autoplayEnabled = computed(() => !props.eager && props.playing === undefined)
const inViewActive = useAutoplayInView(el, { enabled: autoplayEnabled })

const active = computed(() => {
  if (props.eager) return true
  if (props.playing !== undefined) return props.playing
  return inViewActive.value
})

const embedSrc = computed(() => wistiaAutoplayUrl(props.wistiaId))
const posterSrc = computed(() => wistiaPoster(props.wistiaId, props.posterSize))

const { setMuted } = useWistiaInPlaceMute(toRef(props, 'wistiaId'), active, soundOn)

function onToggleSound(event: Event) {
  event.preventDefault()
  event.stopPropagation()
  const turningOn = !soundOn.value
  toggle()
  // Same player, same timecode — only flip mute inside the click gesture.
  setMuted(!turningOn)
}
</script>

<template>
  <div ref="el" class="relative overflow-hidden rounded-md bg-brand-ink" :class="aspect">
    <img
      :src="posterSrc"
      :alt="active ? '' : label"
      class="absolute inset-0 h-full w-full object-cover"
      :class="active ? '' : 'mosaic-poster-drift'"
      :loading="lazy ? 'lazy' : 'eager'"
      decoding="async"
      width="960"
      height="540"
    >

    <iframe
      v-if="active"
      :src="embedSrc"
      :title="label"
      class="wistia_embed pointer-events-none absolute inset-0 h-full w-full"
      name="wistia_embed"
      frameborder="0"
      allow="autoplay; fullscreen"
      loading="eager"
    />

    <button
      type="button"
      class="absolute inset-0 z-10 cursor-pointer touch-manipulation focus-visible:outline-none"
      :aria-label="soundOn ? `Mute ${label}` : `Unmute ${label}`"
      :aria-pressed="soundOn"
      @click="onToggleSound"
    >
      <span
        class="absolute right-1.5 bottom-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white/75"
        :class="soundOn ? 'bg-black/55 text-white' : ''"
        aria-hidden="true"
      >
        <IconGlyph :name="soundOn ? 'unmute' : 'mute'" class="h-3.5 w-3.5" />
      </span>
    </button>
  </div>
</template>
