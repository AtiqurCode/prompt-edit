import { describe, it, expect } from 'vitest'
import { wistiaAutoplayUrl } from '../data/assets'

describe('wistia embed urls', () => {
  it('muted autoplay includes silent flags', () => {
    const url = wistiaAutoplayUrl('abc123')
    expect(url).toContain('muted=true')
    expect(url).toContain('silentAutoPlay=true')
    expect(url).toContain('autoPlay=true')
    expect(url).toContain('playsinline=true')
  })
})
