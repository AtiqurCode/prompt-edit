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

export type AccentColor = 'amber' | 'violet' | 'pink' | 'cyan' | 'emerald'

export interface AssetCategory {
  id: string
  emoji: string
  stat: string
  heading: string
  description: string
  gridImage: string
  gridImageMobile?: string
  demoWistiaId?: string
  secondaryImage?: string
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
