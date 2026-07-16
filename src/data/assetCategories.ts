import type { AssetCategory } from '@/types/content'
import { images } from './assets'

export const assetCategories: AssetCategory[] = [
  {
    id: 'luts',
    emoji: '🔥',
    stat: '4,000+ LUTs',
    heading: 'Color grade like a colorist, without the years of practice',
    description:
      'A LUT ("Look Up Table") is a drag-and-drop color preset that intricately modifies your footage to give it a significantly more cinematic look, no matter what camera it was shot on. If you\'ve ever watched a video and thought "those colors look incredible," odds are a LUT did the work.',
    gridImage: images.lutGrid,
    demoWistiaId: 'lh70ttj7wh',
    secondaryImage: images.lutBoxes,
    accent: 'amber',
  },
  {
    id: 'sfx',
    emoji: '🎧',
    stat: '60,000+ SFX',
    heading: 'Hear the difference sound makes',
    description:
      'Every sound effect is professionally made and organized into searchable categories, so finding the exact hit, whoosh, or ambience you need takes seconds, not scrolling. All of them work with any editing software — just drag and drop.',
    gridImage: images.sfxBoxes,
    demoWistiaId: '11av7ceye6',
    accent: 'violet',
  },
  {
    id: 'text',
    emoji: '💬',
    stat: '3,000+ Text Animations',
    heading: 'Scroll-stopping text, without the design skills',
    description:
      "Pick a layout, type your message, and watch it come to life — no guesswork, no keyframing from scratch. It's like having a designer on the team, built into every editing platform you already use.",
    gridImage: images.textGrid,
    gridImageMobile: images.textGridMobile,
    demoWistiaId: 'gmarfftvn7',
    secondaryImage: images.textBoxes,
    accent: 'pink',
  },
  {
    id: 'overlays',
    emoji: '🪄',
    stat: '2,000+ Overlays',
    heading: 'A whole new look in one drag',
    description:
      'Drag an overlay onto your footage, change the blend mode, and your video has a whole new style — trendy textures, old-school vintage grain, or that viral social-clip look, in seconds.',
    gridImage: images.overlayGrid,
    gridImageMobile: images.overlayGridMobile,
    demoWistiaId: 'zv193w4q59',
    secondaryImage: images.overlayBoxes,
    accent: 'cyan',
  },
  {
    id: 'backgrounds',
    emoji: '✅',
    stat: '5,000+ Backgrounds',
    heading: 'A clean base layer for every project',
    description:
      'Backgrounds are the base layer of your video — pick one, add it to your project, and place text or images on top for a clean, professional look every time.',
    gridImage: images.backgroundGrid,
    gridImageMobile: images.backgroundGridMobile,
    secondaryImage: images.backgroundBoxes,
    accent: 'emerald',
  },
]
