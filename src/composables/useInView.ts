import { onMounted, onUnmounted, ref, type Ref } from 'vue'

export function useInView(target: Ref<HTMLElement | null>, options: IntersectionObserverInit = {}) {
  const inView = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced || !target.value) {
      inView.value = true
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          inView.value = true
          observer?.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options },
    )
    observer.observe(target.value)
  })

  onUnmounted(() => observer?.disconnect())

  return inView
}
