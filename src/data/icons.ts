import type { IconName } from '@/types/content'

/**
 * Outline glyph paths, one per icon. viewBox 0 0 24 24, meant to be rendered
 * with stroke="currentColor" stroke-width="2" stroke-linecap="round"
 * stroke-linejoin="round" fill="none" — the same convention WhoItsForSection
 * already uses for its inline icons.
 */
export const ICON_PATHS: Record<IconName, string> = {
  luts: 'M4 21V14 M4 10V3 M12 21V12 M12 8V3 M20 21V16 M20 12V3 M2 14h4 M10 8h4 M18 16h4',
  sfx: 'M11 5 6 9H2v6h4l5 4V5z M15.5 8.5a5 5 0 010 7 M18.5 5.5a9 9 0 010 13',
  text: 'M4 7V4h16v3 M9 20h6 M12 4v16',
  overlays: 'M12 3 2 8l10 5 10-5-10-5z M2 16l10 5 10-5 M2 12l10 5 10-5',
  backgrounds:
    'M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z M8.5 11a2 2 0 100-4 2 2 0 000 4z M21 16l-5.5-5.5a1.5 1.5 0 00-2.12 0L4 19',
  mute: 'M11 5 6 9H2v6h4l5 4V5z M22 9l-6 6 M16 9l6 6',
  unmute: 'M11 5 6 9H2v6h4l5 4V5z M15.5 8.5a5 5 0 010 7',
  fitInterface: 'M4 6h16M4 12h10M4 18h16',
  fitCredits: 'M12 3v18M7 8h7a2.5 2.5 0 010 5H8a2.5 2.5 0 000 5h8',
  fitCinematic: 'M4 5h16v14H4z M4 9.5h16 M9 5v4.5',
  fitPacks:
    'M5 8h14l-1.5 11.5a2 2 0 01-2 1.5h-7a2 2 0 01-2-1.5L5 8z M9 8V6a3 3 0 016 0v2',
}
