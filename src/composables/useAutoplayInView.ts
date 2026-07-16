import { onMounted, onUnmounted, ref, watch, type Ref } from 'vue'

const MAX_CONCURRENT = 10
let activeCount = 0

/**
 * Continuously toggles (not one-shot, unlike useInView) so video previews
 * mount/autoplay while substantially visible and unmount again once
 * scrolled away, keeping the number of concurrently-playing embeds bounded.
 * A module-level cap also limits how many can play across the whole page at
 * once, so a dense grid scrolling into view doesn't fire off a dozen
 * simultaneous video streams and starve each other's bandwidth.
 */
export function useAutoplayInView(target: Ref<HTMLElement | null>) {
  const intersecting = ref(false)
  const active = ref(false)
  let observer: IntersectionObserver | null = null
  let holdsSlot = false

  function releaseSlot() {
    if (holdsSlot) {
      activeCount -= 1
      holdsSlot = false
    }
    active.value = false
  }

  watch(intersecting, (isIntersecting) => {
    if (isIntersecting) {
      if (!holdsSlot && activeCount < MAX_CONCURRENT) {
        activeCount += 1
        holdsSlot = true
        active.value = true
      }
    } else {
      releaseSlot()
    }
  })

  onMounted(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !target.value) return

    observer = new IntersectionObserver(
      (entries) => {
        intersecting.value = entries[0]?.isIntersecting ?? false
      },
      { threshold: 0.15, rootMargin: '220px 0px' },
    )
    observer.observe(target.value)
  })

  onUnmounted(() => {
    observer?.disconnect()
    releaseSlot()
  })

  return active
}
