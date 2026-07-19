import { onUnmounted, watch, type Ref } from 'vue'

type WistiaVideo = {
  mute: () => void
  unmute: () => void
  volume: (level?: number) => number | void
  play: () => void
  pause: () => void
  remove: () => void
  isMuted: () => boolean
}

type WistiaQueueItem = {
  id: string
  options?: Record<string, unknown>
  onReady: (video: WistiaVideo) => void
}

declare global {
  interface Window {
    _wq?: WistiaQueueItem[]
    Wistia?: {
      api: (matcher: string) => WistiaVideo | undefined
    }
  }
}

const PREVIEW_OPTIONS: Record<string, unknown> = {
  autoPlay: true,
  muted: true,
  silentAutoPlay: true,
  playsinline: true,
  endVideoBehavior: 'loop',
  playButton: false,
  controlsVisibleOnLoad: false,
  fullscreenButton: false,
  settingsControl: false,
  qualityControl: false,
  playbar: false,
  volumeControl: false,
  smallPlayButton: false,
  seo: false,
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

function ensureMediaJsonp(id: string) {
  const key = `data-wistia-media-${id}`
  if (document.querySelector(`script[${key}]`)) return
  const script = document.createElement('script')
  script.src = `https://fast.wistia.com/embed/medias/${id}.jsonp`
  script.async = true
  script.setAttribute(key, '')
  document.head.appendChild(script)
}

/**
 * Inline Wistia embeds (not iframes) so mute/unmute stays synchronous —
 * required for audio after tap on iOS/Android. Iframe Player API is async
 * postMessage and cannot unmute inside a mobile user gesture.
 */
export function useWistiaInPlaceMute(
  wistiaId: Ref<string>,
  active: Ref<boolean>,
  soundOn: Ref<boolean>,
) {
  let video: WistiaVideo | null = null

  function resolvePlayer() {
    const id = wistiaId.value
    return video ?? window.Wistia?.api?.(id) ?? null
  }

  function applyMuteState() {
    const player = resolvePlayer()
    if (!player) return false
    video = player
    if (soundOn.value) {
      player.unmute()
      player.volume(1)
      try {
        player.play()
      } catch {
        // Already playing muted; play() can throw if gesture expired.
      }
    } else {
      player.mute()
    }
    return true
  }

  /** Call from click/pointerup so unmute counts as a user gesture on mobile. */
  function setMuted(muted: boolean) {
    const player = resolvePlayer()
    if (!player) return false
    video = player
    if (muted) {
      player.mute()
      return true
    }
    player.unmute()
    player.volume(1)
    try {
      player.play()
    } catch {
      // ignore
    }
    return true
  }

  function bind() {
    const id = wistiaId.value
    ensureWistiaApi()
    ensureMediaJsonp(id)

    const existing = window.Wistia?.api?.(id)
    if (existing) {
      video = existing
      applyMuteState()
      return
    }

    window._wq!.push({
      id,
      options: PREVIEW_OPTIONS,
      onReady(player) {
        if (wistiaId.value !== id) return
        video = player
        player.mute()
        applyMuteState()
      },
    })
  }

  function teardown() {
    try {
      video?.pause()
      video?.remove()
    } catch {
      // Player may already be gone with the DOM node.
    }
    video = null
  }

  watch(
    active,
    (isActive) => {
      teardown()
      if (isActive) {
        // Wait a frame so the async embed container exists in the DOM.
        requestAnimationFrame(bind)
      }
    },
    { immediate: true },
  )

  watch(wistiaId, () => {
    if (!active.value) return
    teardown()
    requestAnimationFrame(bind)
  })

  // Another tile took exclusive sound — mute without a gesture.
  watch(soundOn, (on) => {
    if (!on) resolvePlayer()?.mute()
  })

  onUnmounted(teardown)

  return { setMuted, applyMuteState }
}
