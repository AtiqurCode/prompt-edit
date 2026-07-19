import { onMounted, onUnmounted, ref, watch, type Ref } from 'vue'

/**
 * Mounts muted video previews while the tile is near the viewport
 * and tears them down once scrolled away.
 */
export function useAutoplayInView(
  target: Ref<HTMLElement | null>,
  options: { enabled?: Ref<boolean> } = {},
) {
  const enabled = options.enabled
  const intersecting = ref(false)
  const active = ref(false)
  let observer: IntersectionObserver | null = null

  function sync() {
    if (enabled && !enabled.value) {
      active.value = false
      return
    }
    active.value = intersecting.value
  }

  watch(intersecting, sync)
  if (enabled) watch(enabled, sync, { immediate: true })

  function isNearViewport(node: HTMLElement) {
    const rect = node.getBoundingClientRect()
    const vh = window.innerHeight || document.documentElement.clientHeight
    const margin = 120
    return rect.bottom > -margin && rect.top < vh + margin
  }

  function attach(node: HTMLElement) {
    observer?.disconnect()
    observer = new IntersectionObserver(
      (entries) => {
        intersecting.value = entries[0]?.isIntersecting ?? false
      },
      { threshold: 0.01, rootMargin: '160px 0px' },
    )
    observer.observe(node)

    // First IO callback can lag; seed from geometry so above-the-fold demos start immediately.
    if (isNearViewport(node)) intersecting.value = true
  }

  onMounted(() => {
    watch(
      target,
      (node) => {
        if (node) attach(node)
      },
      { immediate: true },
    )
  })

  onUnmounted(() => {
    observer?.disconnect()
    active.value = false
  })

  return active
}
