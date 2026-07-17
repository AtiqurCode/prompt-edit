export interface ToolItem {
  name: string
  description: string
  wistiaId: string
}

export interface ToolCategory {
  id: string
  eyebrow: string
  heading: string
  description: string
  items: ToolItem[]
}

export type AccentColor = 'cta' | 'blue' | 'blueDeep' | 'yellow' | 'coral'

export type IconName = 'luts' | 'sfx' | 'text' | 'overlays' | 'backgrounds' | 'mute' | 'unmute'

export interface AssetCategory {
  id: string
  icon: IconName
  stat: string
  heading: string
  description: string
  gridImage: string
  gridImageAlt: string
  gridImageMobile?: string
  demoWistiaId?: string
  secondaryImage?: string
  secondaryImageAlt?: string
  accent: AccentColor
}

export interface PricingPlan {
  id: string
  name: string
  price: string
  priceSuffix?: string
  badge?: string
  highlighted: boolean
  features: string[]
  ctaLabel: string
  note?: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  avatar?: string
}
