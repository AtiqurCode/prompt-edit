import type { AccentColor } from '@/types/content'

/**
 * Full literal Tailwind class strings per accent, so the compiler's content
 * scan picks them up even though the accent key is chosen at runtime.
 *
 * Flat brand chips: solid fill, ink border, hard offset shadow.
 * Text is ink on light accents; brand-blue-deep uses white (WCAG AA on deep blue).
 */
export const accentStyles: Record<
  AccentColor,
  { badge: string; text: string; ring: string; glow: string }
> = {
  cta: {
    badge: 'bg-brand-cta text-brand-ink border-2 border-brand-ink shadow-brutal-sm',
    text: 'text-brand-cta',
    ring: 'border-brand-ink',
    glow: 'bg-brand-cta',
  },
  blue: {
    badge: 'bg-brand-blue text-brand-ink border-2 border-brand-ink shadow-brutal-sm',
    text: 'text-brand-blue',
    ring: 'border-brand-ink',
    glow: 'bg-brand-blue',
  },
  blueDeep: {
    badge: 'bg-brand-blue-deep text-white border-2 border-brand-ink shadow-brutal-sm',
    text: 'text-brand-blue-deep',
    ring: 'border-brand-ink',
    glow: 'bg-brand-blue-deep',
  },
  yellow: {
    badge: 'bg-brand-yellow text-brand-ink border-2 border-brand-ink shadow-brutal-sm',
    text: 'text-brand-ink',
    ring: 'border-brand-ink',
    glow: 'bg-brand-yellow',
  },
  coral: {
    badge: 'bg-brand-coral text-brand-ink border-2 border-brand-ink shadow-brutal-sm',
    text: 'text-brand-ink',
    ring: 'border-brand-ink',
    glow: 'bg-brand-coral',
  },
}
