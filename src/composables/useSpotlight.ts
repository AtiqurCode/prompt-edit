import { onMounted, onUnmounted, type Ref } from 'vue'

/** Sets --spot-x/--spot-y CSS vars on the element as the cursor moves over it. */
export function useSpotlight(target: Ref<HTMLElement | null>) {
  function onMouseMove(event: MouseEvent) {
    const el = target.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  onMounted(() => target.value?.addEventListener('mousemove', onMouseMove))
  onUnmounted(() => target.value?.removeEventListener('mousemove', onMouseMove))
}
