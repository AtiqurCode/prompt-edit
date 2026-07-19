<script setup lang="ts">
import { computed, ref, toRef } from 'vue'
import { wistiaPoster } from '@/data/assets'
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

const posterSrc = computed(() => wistiaPoster(props.wistiaId, props.posterSize))
const embedClass = computed(
  () =>
    `wistia_embed wistia_async_${props.wistiaId} absolute inset-0 h-full w-full`,
)

const { setMuted } = useWistiaInPlaceMute(toRef(props, 'wistiaId'), active, soundOn)

function onToggleSound(event: Event) {
  event.preventDefault()
  event.stopPropagation()
  const turningOn = !soundOn.value
  toggle()
  // Must stay inside this gesture — iframe postMessage unmute fails on mobile.
  const ok = setMuted(!turningOn)
  if (turningOn && !ok) {
    // Player not ready yet; flip UI back so we don't show a fake unmuted state.
    toggle()
  }
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

    <!-- Inline embed (not iframe): sync mute/unmute works on iOS/Android. -->
    <div
      v-if="active"
      :key="wistiaId"
      :class="embedClass"
      :title="label"
      aria-hidden="true"
    />

    <button
      type="button"
      class="absolute inset-0 z-10 cursor-pointer touch-manipulation focus-visible:outline-none"
      :aria-label="soundOn ? `Mute ${label}` : `Unmute ${label}`"
      :aria-pressed="soundOn"
      @click="onToggleSound"
    >
      <span
        class="absolute right-1 bottom-1 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white/80 sm:right-1.5 sm:bottom-1.5 sm:h-7 sm:w-7 sm:bg-black/40 sm:text-white/75"
        :class="soundOn ? 'bg-black/60 text-white sm:bg-black/55' : ''"
        aria-hidden="true"
      >
        <IconGlyph :name="soundOn ? 'unmute' : 'mute'" class="h-4 w-4 sm:h-3.5 sm:w-3.5" />
      </span>
    </button>
  </div>
</template>
