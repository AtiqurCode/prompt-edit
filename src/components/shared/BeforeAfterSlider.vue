<script setup lang="ts">
import { ref } from 'vue'

const {
  beforeSrc,
  afterSrc,
  beforeLabel = 'Before',
  afterLabel = 'After',
} = defineProps<{
  beforeSrc: string
  afterSrc: string
  beforeLabel?: string
  afterLabel?: string
}>()

const containerRef = ref<HTMLElement | null>(null)
const position = ref(50)
const isDragging = ref(false)

function setPositionFromClientX(clientX: number) {
  const el = containerRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const pct = ((clientX - rect.left) / rect.width) * 100
  position.value = Math.min(100, Math.max(0, pct))
}

function onPointerDown(event: PointerEvent) {
  isDragging.value = true
  setPositionFromClientX(event.clientX)
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
}

function onPointerMove(event: PointerEvent) {
  if (!isDragging.value) return
  setPositionFromClientX(event.clientX)
}

function onPointerUp() {
  isDragging.value = false
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
}

function onKeydown(event: KeyboardEvent) {
  const step = event.shiftKey ? 20 : 5
  if (event.key === 'ArrowLeft') {
    position.value = Math.max(0, position.value - step)
  } else if (event.key === 'ArrowRight') {
    position.value = Math.min(100, position.value + step)
  } else if (event.key === 'Home') {
    position.value = 0
  } else if (event.key === 'End') {
    position.value = 100
  } else {
    return
  }
  event.preventDefault()
}
</script>

<template>
  <div
    ref="containerRef"
    class="relative aspect-4/3 w-full touch-none overflow-hidden rounded-2xl bg-brand-ink select-none sm:aspect-video"
    @pointerdown="onPointerDown"
  >
    <img
      :src="beforeSrc"
      :alt="beforeLabel"
      draggable="false"
      class="absolute inset-0 h-full w-full object-cover"
    >

    <div
      class="absolute inset-0 h-full w-full overflow-hidden"
      :style="{ clipPath: `inset(0 ${100 - position}% 0 0)` }"
    >
      <img
        :src="afterSrc"
        :alt="afterLabel"
        draggable="false"
        class="absolute inset-0 h-full w-full object-cover"
      >
    </div>

    <span
      class="pointer-events-none absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase"
    >{{ beforeLabel }}</span>
    <span
      class="pointer-events-none absolute top-3 right-3 rounded-full bg-brand-cta px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase"
    >{{ afterLabel }}</span>

    <div
      class="pointer-events-none absolute inset-y-0 w-0.5 bg-white/80"
      :style="{ left: `${position}%` }"
    />

    <button
      type="button"
      role="slider"
      :aria-label="`Drag to compare ${beforeLabel} and ${afterLabel}`"
      aria-valuemin="0"
      aria-valuemax="100"
      :aria-valuenow="Math.round(position)"
      class="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-brand-ink shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-brand-cta"
      :style="{ left: `${position}%` }"
      @pointerdown.stop="onPointerDown"
      @keydown="onKeydown"
    >
      <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current">
        <path d="M8 5l-6 7 6 7V5zm8 0v14l6-7-6-7z" />
      </svg>
    </button>
  </div>
</template>
