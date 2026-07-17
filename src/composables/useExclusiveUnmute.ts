import { computed, onUnmounted, ref, watch, type Ref } from 'vue'

/** Only one preview across the page may play with sound at a time. */
const unmutedOwner = ref<symbol | null>(null)
let nextId = 0

export function useExclusiveUnmute(enabled: Ref<boolean>) {
  const owner = Symbol(`preview-${++nextId}`)
  const soundOn = computed(() => unmutedOwner.value === owner)

  function toggle() {
    if (!enabled.value) return
    unmutedOwner.value = soundOn.value ? null : owner
  }

  function release() {
    if (unmutedOwner.value === owner) unmutedOwner.value = null
  }

  watch(enabled, (isEnabled) => {
    if (!isEnabled) release()
  })

  onUnmounted(release)

  return { soundOn, toggle, release }
}
