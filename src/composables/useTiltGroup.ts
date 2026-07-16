import { onMounted, onUnmounted, reactive, type Ref } from 'vue'

/** Shared cursor-driven tilt for a cluster of elements, for a parallax-depth feel. */
export function useTiltGroup(containerRef: Ref<HTMLElement | null>, maxDeg = 14) {
  const tilt = reactive({ x: 0, y: 0 })

  function onMouseMove(event: MouseEvent) {
    const el = containerRef.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    tilt.x = px * maxDeg
    tilt.y = py * -maxDeg
  }

  function onMouseLeave() {
    tilt.x = 0
    tilt.y = 0
  }

  onMounted(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const el = containerRef.value
    el?.addEventListener('mousemove', onMouseMove)
    el?.addEventListener('mouseleave', onMouseLeave)
  })

  onUnmounted(() => {
    const el = containerRef.value
    el?.removeEventListener('mousemove', onMouseMove)
    el?.removeEventListener('mouseleave', onMouseLeave)
  })

  return tilt
}
