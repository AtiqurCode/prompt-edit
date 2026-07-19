<script setup lang="ts">
import { computed, ref } from 'vue'
import { wistiaAutoplayUrl, wistiaPoster, wistiaSoundUrl } from '@/data/assets'
import { useAutoplayInView } from '@/composables/useAutoplayInView'
import { useExclusiveUnmute } from '@/composables/useExclusiveUnmute'
import IconGlyph from '@/components/shared/IconGlyph.vue'

const props = withDefaults(
  defineProps<{
    wistiaId: string
    label?: string
    aspect?: string
    /** When set, parent controls muted autoplay (mosaic wave). Unmute still forces live. */
    playing?: boolean
    lazy?: boolean
    posterSize?: 'sm' | 'md'
  }>(),
  {
    label: 'preview',
    aspect: 'aspect-video',
    lazy: false,
    posterSize: 'md',
  },
)

const el = ref<HTMLElement | null>(null)
const unmuteEnabled = ref(true)
const { soundOn, toggle } = useExclusiveUnmute(unmuteEnabled)

const autoplayEnabled = computed(() => props.playing === undefined && !soundOn.value)
const inViewActive = useAutoplayInView(el, { enabled: autoplayEnabled })

const active = computed(() => {
  if (soundOn.value) return true
  if (props.playing === undefined) return inViewActive.value
  return props.playing
})

const embedSrc = computed(() =>
  soundOn.value ? wistiaSoundUrl(props.wistiaId) : wistiaAutoplayUrl(props.wistiaId),
)

const posterSrc = computed(() => wistiaPoster(props.wistiaId, props.posterSize))

function onToggleSound(event: Event) {
  event.preventDefault()
  event.stopPropagation()
  toggle()
}
</script>

<template>
  <div ref="el" class="relative overflow-hidden rounded-md bg-brand-ink" :class="aspect">
    <img
      :src="posterSrc"
      :alt="active ? '' : label"
      class="absolute inset-0 h-full w-full object-cover"
      :class="active || soundOn ? '' : 'mosaic-poster-drift'"
      :loading="lazy ? 'lazy' : 'eager'"
      decoding="async"
      width="960"
      height="540"
    >

    <iframe
      v-if="active"
      :key="`${wistiaId}-${soundOn ? 'sound' : 'mute'}`"
      :src="embedSrc"
      :title="label"
      class="pointer-events-none absolute inset-0 h-full w-full"
      frameborder="0"
      allow="autoplay"
      loading="lazy"
    />

    <!-- Full-tile hit target; indicator stays small -->
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
