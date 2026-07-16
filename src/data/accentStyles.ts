import type { AccentColor } from '@/types/content'

/**
 * Full literal Tailwind class strings per accent, so the compiler's content
 * scan picks them up even though the accent key is chosen at runtime.
 */
export const accentStyles: Record<
  AccentColor,
  { badge: string; text: string; ring: string; glow: string }
> = {
  amber: {
    badge: 'bg-amber-100 text-amber-700',
    text: 'text-amber-600',
    ring: 'ring-amber-400/30',
    glow: 'bg-amber-400/20',
  },
  violet: {
    badge: 'bg-violet-100 text-violet-700',
    text: 'text-violet-600',
    ring: 'ring-violet-400/30',
    glow: 'bg-violet-400/20',
  },
  pink: {
    badge: 'bg-pink-100 text-pink-700',
    text: 'text-pink-600',
    ring: 'ring-pink-400/30',
    glow: 'bg-pink-400/20',
  },
  cyan: {
    badge: 'bg-cyan-100 text-cyan-700',
    text: 'text-cyan-600',
    ring: 'ring-cyan-400/30',
    glow: 'bg-cyan-400/20',
  },
  emerald: {
    badge: 'bg-emerald-100 text-emerald-700',
    text: 'text-emerald-600',
    ring: 'ring-emerald-400/30',
    glow: 'bg-emerald-400/20',
  },
}
