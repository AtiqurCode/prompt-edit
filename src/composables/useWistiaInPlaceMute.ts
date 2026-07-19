import { watch, type Ref } from 'vue'

type WistiaVideo = {
  mute: () => void
  unmute: () => void
}

type WistiaQueueItem = {
  id: string
  onReady: (video: WistiaVideo) => void
}

declare global {
  interface Window {
    _wq?: WistiaQueueItem[]
  }
}

function ensureWistiaApi() {
  window._wq = window._wq || []
  if (document.querySelector('script[data-wistia-e-v1]')) return
  const script = document.createElement('script')
  script.src = 'https://fast.wistia.com/assets/external/E-v1.js'
  script.async = true
  script.dataset.wistiaEV1 = ''
  document.head.appendChild(script)
}

/**
 * Keep one iframe playing; mute/unmute in place (no remount / no restart).
 * Unmute should be called from a user-gesture handler.
 */
export function useWistiaInPlaceMute(wistiaId: Ref<string>, active: Ref<boolean>, soundOn: Ref<boolean>) {
  let video: WistiaVideo | null = null

  function apply() {
    if (!video) return
    if (soundOn.value) video.unmute()
    else video.mute()
  }

  /** Call from click handler so unmute counts as a user gesture. */
  function setMuted(muted: boolean) {
    if (!video) return
    if (muted) video.mute()
    else video.unmute()
  }

  function bind() {
    const id = wistiaId.value
    ensureWistiaApi()
    window._wq!.push({
      id,
      onReady(player) {
        video = player
        player.mute()
        apply()
      },
    })
  }

  watch(
    active,
    (isActive) => {
      video = null
      if (isActive) requestAnimationFrame(bind)
    },
    { immediate: true },
  )

  // Mute when another tile steals exclusive sound (no gesture needed).
  watch(soundOn, (on) => {
    if (!on) video?.mute()
  })

  return { setMuted }
}
