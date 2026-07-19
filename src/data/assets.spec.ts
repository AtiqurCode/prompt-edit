import { describe, it, expect } from 'vitest'
import { wistiaAutoplayUrl, wistiaSoundUrl } from '../data/assets'

describe('wistia embed urls', () => {
  it('muted autoplay includes silent flags', () => {
    const url = wistiaAutoplayUrl('abc123')
    expect(url).toContain('muted=true')
    expect(url).toContain('silentAutoPlay=true')
    expect(url).toContain('autoPlay=true')
  })

  it('sound url is not muted', () => {
    const url = wistiaSoundUrl('abc123')
    expect(url).toContain('muted=false')
    expect(url).not.toContain('silentAutoPlay=true')
    expect(url).toContain('autoPlay=true')
  })
})
