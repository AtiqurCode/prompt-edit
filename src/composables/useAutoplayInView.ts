import { onMounted, onUnmounted, ref, watch, type Ref } from 'vue'

const MAX_CONCURRENT = 10
let activeCount = 0
const waiters = new Set<() => void>()

/**
 * Continuously toggles so video previews mount/autoplay while visible and
 * unmount once scrolled away. Module-level cap limits concurrent embeds.
 */
export function useAutoplayInView(
  target: Ref<HTMLElement | null>,
  options: { enabled?: Ref<boolean> } = {},
) {
  const enabled = options.enabled
  const intersecting = ref(false)
  const active = ref(false)
  let observer: IntersectionObserver | null = null
  let holdsSlot = false

  function releaseSlot() {
    if (!holdsSlot) {
      active.value = false
      return
    }
    activeCount -= 1
    holdsSlot = false
    active.value = false
    waiters.forEach((notify) => notify())
  }

  function tryAcquire() {
    if (enabled && !enabled.value) {
      releaseSlot()
      return
    }
    if (!intersecting.value) {
      releaseSlot()
      return
    }
    if (holdsSlot) {
      active.value = true
      return
    }
    if (activeCount < MAX_CONCURRENT) {
      activeCount += 1
      holdsSlot = true
      active.value = true
    }
  }

  watch(intersecting, tryAcquire)
  if (enabled) watch(enabled, tryAcquire)

  function attach(node: HTMLElement) {
    observer?.disconnect()
    observer = new IntersectionObserver(
      (entries) => {
        intersecting.value = entries[0]?.isIntersecting ?? false
      },
      { threshold: 0.15, rootMargin: '80px 0px' },
    )
    observer.observe(node)
  }

  onMounted(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    waiters.add(tryAcquire)

    watch(
      target,
      (node) => {
        if (node) attach(node)
      },
      { immediate: true },
    )
  })

  onUnmounted(() => {
    waiters.delete(tryAcquire)
    observer?.disconnect()
    releaseSlot()
  })

  return active
}

/** Test helper — reset module slot state between unit tests. */
export function __resetAutoplaySlotsForTests() {
  activeCount = 0
  waiters.clear()
}
