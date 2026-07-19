import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { effectScope, ref, type EffectScope } from 'vue'
import {
  useExclusiveUnmute,
  __resetExclusiveUnmuteForTests,
} from './useExclusiveUnmute'

describe('useExclusiveUnmute', () => {
  let scope: EffectScope

  beforeEach(() => {
    __resetExclusiveUnmuteForTests()
    scope = effectScope(true)
  })

  afterEach(() => {
    scope.stop()
  })

  it('toggles sound on for one owner', () => {
    const enabled = ref(true)
    const a = scope.run(() => useExclusiveUnmute(enabled))!

    expect(a.soundOn.value).toBe(false)
    a.toggle()
    expect(a.soundOn.value).toBe(true)
    a.toggle()
    expect(a.soundOn.value).toBe(false)
  })

  it('keeps only one unmuted owner at a time', () => {
    const enabled = ref(true)
    const a = scope.run(() => useExclusiveUnmute(enabled))!
    const b = scope.run(() => useExclusiveUnmute(enabled))!

    a.toggle()
    expect(a.soundOn.value).toBe(true)
    expect(b.soundOn.value).toBe(false)

    b.toggle()
    expect(a.soundOn.value).toBe(false)
    expect(b.soundOn.value).toBe(true)
  })

  it('releases sound when disabled', () => {
    const enabled = ref(true)
    const a = scope.run(() => useExclusiveUnmute(enabled))!

    a.toggle()
    expect(a.soundOn.value).toBe(true)

    enabled.value = false
    expect(a.soundOn.value).toBe(false)
  })
})
