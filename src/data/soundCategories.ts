export interface SoundCategory {
  name: string
  wistiaId: string
}

export const soundCategories: SoundCategory[] = [
  { name: 'Urban', wistiaId: '1zkz745vsy' },
  { name: 'YouTube', wistiaId: '2ve4xlevtb' },
  { name: 'Glitch', wistiaId: '5vsrw5dx7r' },
  { name: 'Impact', wistiaId: '88wnd1t5pj' },
  { name: 'Cartoon', wistiaId: 'k1okxdkoqv' },
  { name: 'Whooshes', wistiaId: 'm4foab6mu6' },
]

export const sfxMuted = { label: 'Muted demo', wistiaId: '9s64bo03y0' }
export const sfxWithSound = { label: 'Tap tile for sound', wistiaId: 'hk5pw8ztg4' }
export const sfxDragAndDrop = { label: 'Drag & Drop Demo', wistiaId: 'qpkyxyck8g' }
