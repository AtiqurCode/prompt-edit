<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { assetCategories } from '@/data/assetCategories'
import IconGlyph from './IconGlyph.vue'
import { usePrefersReducedMotion } from '@/composables/usePrefersReducedMotion'

const STEP_LABELS: Record<string, string> = {
  luts: 'LUTs',
  sfx: 'SFX',
  text: 'Text',
  overlays: 'Overlays',
  backgrounds: 'Backgrounds',
}

const steps = assetCategories.map((category) => ({
  id: category.id,
  shortLabel: STEP_LABELS[category.id] ?? category.id,
  icon: category.icon,
}))

const activeId = ref(steps[0]?.id ?? 'luts')
const reducedMotion = usePrefersReducedMotion()
let observer: IntersectionObserver | null = null

function scrollToStep(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const offset = 96
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: reducedMotion.value ? 'auto' : 'smooth' })
}

onMounted(() => {
  const targets = steps
    .map((step) => document.getElementById(step.id))
    .filter((el): el is HTMLElement => el !== null)

  if (targets.length === 0) return

  observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      const top = visible[0]?.target.id
      if (top) activeId.value = top
    },
    { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
  )

  targets.forEach((target) => observer?.observe(target))
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <nav
    aria-label="Templates library categories"
    class="lg:sticky lg:top-[var(--site-header-offset,5.5rem)] lg:self-start"
  >
    <div class="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin] lg:hidden">
      <button
        v-for="step in steps"
        :key="step.id"
        type="button"
        class="shadow-brutal-sm brutal-press flex min-h-11 shrink-0 cursor-pointer items-center gap-1.5 rounded-md border-2 border-brand-ink px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink"
        :class="
          activeId === step.id
            ? 'bg-brand-cta text-brand-ink'
            : 'bg-white text-brand-slate hover:bg-brand-surface'
        "
        :aria-current="activeId === step.id ? 'step' : undefined"
        @click="scrollToStep(step.id)"
      >
        <IconGlyph :name="step.icon" class="h-4 w-4" />
        {{ step.shortLabel }}
      </button>
    </div>

    <ol class="hidden space-y-1 lg:block">
      <li v-for="(step, index) in steps" :key="step.id" class="relative">
        <div
          v-if="index < steps.length - 1"
          class="absolute top-10 left-[1.125rem] h-[calc(100%-0.5rem)] w-0.5"
          :class="activeId === step.id ? 'bg-brand-cta' : 'bg-brand-ink/15'"
        />
        <button
          type="button"
          class="group flex w-full min-h-11 cursor-pointer items-center gap-3 rounded-md px-2 py-2.5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-ink"
          :class="activeId === step.id ? 'bg-brand-cta/15' : 'hover:bg-brand-surface'"
          :aria-current="activeId === step.id ? 'step' : undefined"
          @click="scrollToStep(step.id)"
        >
          <span
            class="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-brand-ink text-sm font-bold transition-colors"
            :class="
              activeId === step.id
                ? 'bg-brand-cta text-brand-ink'
                : 'bg-brand-surface text-brand-slate group-hover:bg-brand-yellow'
            "
          >
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <span>
            <span class="block text-brand-slate"><IconGlyph :name="step.icon" class="h-3.5 w-3.5" /></span>
            <span
              class="block font-semibold"
              :class="activeId === step.id ? 'text-brand-ink' : 'text-brand-slate'"
            >
              {{ step.shortLabel }}
            </span>
          </span>
        </button>
      </li>
    </ol>
  </nav>
</template>
