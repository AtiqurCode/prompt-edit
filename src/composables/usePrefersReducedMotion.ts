import { onMounted, onUnmounted, ref } from 'vue'

/** Shared reduced-motion preference with live updates. */
export function usePrefersReducedMotion() {
  const reduced = ref(false)
  let media: MediaQueryList | null = null

  function sync() {
    reduced.value = media?.matches ?? false
  }

  onMounted(() => {
    media = window.matchMedia('(prefers-reduced-motion: reduce)')
    sync()
    media.addEventListener('change', sync)
  })

  onUnmounted(() => {
    media?.removeEventListener('change', sync)
  })

  return reduced
}
