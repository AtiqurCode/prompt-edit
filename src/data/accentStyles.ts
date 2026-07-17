import type { AccentColor } from '@/types/content'

/** Accent chips for asset categories — brand colors only, no purple. */
export const accentStyles: Record<
  AccentColor,
  { badge: string; text: string; ring: string; glow: string }
> = {
  cta: {
    badge: 'bg-brand-cta/15 text-brand-cta border border-brand-cta/35',
    text: 'text-brand-cta',
    ring: 'border-brand-cta/30',
    glow: 'bg-brand-cta/20',
  },
  blue: {
    badge: 'bg-brand-blue/15 text-brand-blue border border-brand-blue/35',
    text: 'text-brand-blue',
    ring: 'border-brand-blue/30',
    glow: 'bg-brand-blue/20',
  },
  blueDeep: {
    badge: 'bg-brand-blue-deep/20 text-brand-blue border border-brand-blue-deep/40',
    text: 'text-brand-blue',
    ring: 'border-brand-blue-deep/30',
    glow: 'bg-brand-blue-deep/25',
  },
  yellow: {
    badge: 'bg-brand-yellow/20 text-brand-yellow border border-brand-yellow/40',
    text: 'text-brand-yellow',
    ring: 'border-brand-yellow/30',
    glow: 'bg-brand-yellow/15',
  },
  coral: {
    badge: 'bg-brand-coral/15 text-brand-coral border border-brand-coral/35',
    text: 'text-brand-coral',
    ring: 'border-brand-coral/30',
    glow: 'bg-brand-coral/20',
  },
}
