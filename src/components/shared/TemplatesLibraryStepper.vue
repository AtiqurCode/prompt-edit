<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const steps = [
  { id: 'luts', label: 'LUTs', emoji: '🔥' },
  { id: 'sfx', label: 'SFX', emoji: '🎧' },
  { id: 'text', label: 'Text', emoji: '💬' },
  { id: 'overlays', label: 'Overlays', emoji: '🪄' },
  { id: 'backgrounds', label: 'Backgrounds', emoji: '✅' },
]

const activeId = ref(steps[0]?.id ?? 'luts')
let observer: IntersectionObserver | null = null

function scrollToStep(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const offset = 96
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: 'smooth' })
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
  <nav aria-label="Templates library categories" class="lg:sticky lg:top-28 lg:self-start">
    <!-- Mobile: horizontal pills -->
    <div class="flex gap-2 overflow-x-auto pb-2 lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <button
        v-for="step in steps"
        :key="step.id"
        type="button"
        class="shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
        :class="
          activeId === step.id
            ? 'border-brand-cta bg-brand-cta text-white shadow-md shadow-brand-cta/25'
            : 'border-gray-200 bg-white text-gray-600 hover:border-brand-cta/40'
        "
        :aria-current="activeId === step.id ? 'step' : undefined"
        @click="scrollToStep(step.id)"
      >
        <span aria-hidden="true" class="mr-1">{{ step.emoji }}</span>
        {{ step.label }}
      </button>
    </div>

    <!-- Desktop: vertical stepper -->
    <ol class="hidden space-y-1 lg:block">
      <li v-for="(step, index) in steps" :key="step.id" class="relative">
        <div
          v-if="index < steps.length - 1"
          class="absolute top-10 left-[1.125rem] h-[calc(100%-0.5rem)] w-px"
          :class="activeId === step.id ? 'bg-brand-cta/40' : 'bg-gray-200'"
        />
        <button
          type="button"
          class="group flex w-full items-center gap-3 rounded-xl px-2 py-2.5 text-left transition-colors"
          :class="activeId === step.id ? 'bg-brand-cta/10' : 'hover:bg-gray-50'"
          :aria-current="activeId === step.id ? 'step' : undefined"
          @click="scrollToStep(step.id)"
        >
          <span
            class="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors"
            :class="
              activeId === step.id
                ? 'bg-brand-cta text-white shadow-md shadow-brand-cta/30'
                : 'bg-gray-100 text-gray-500 group-hover:bg-brand-cta/20 group-hover:text-brand-cta'
            "
          >
            {{ String(index + 1).padStart(2, '0') }}
          </span>
          <span>
            <span class="block text-xs text-gray-400">{{ step.emoji }}</span>
            <span
              class="block font-semibold"
              :class="activeId === step.id ? 'text-brand-ink' : 'text-gray-600'"
            >
              {{ step.label }}
            </span>
          </span>
        </button>
      </li>
    </ol>
  </nav>
</template>
