<script setup lang="ts">
import type { AssetCategory } from '@/types/content'
import { accentStyles } from '@/data/accentStyles'
import MediaPreviewFacade from './MediaPreviewFacade.vue'
import SiteButton from './SiteButton.vue'
import ScrollReveal from './ScrollReveal.vue'
import IconGlyph from './IconGlyph.vue'

const { category, reverse = false } = defineProps<{
  category: AssetCategory
  reverse?: boolean
}>()
</script>

<template>
  <article class="overflow-hidden rounded-lg border-[3px] border-brand-ink bg-white shadow-brutal">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <ScrollReveal
        :class="reverse ? 'lg:order-2' : ''"
        class="border-b-[3px] border-brand-ink p-5 sm:p-10 lg:border-r lg:border-b-0"
      >
        <span
          class="inline-flex items-center gap-2 rounded-md border-2 border-brand-ink px-3 py-1.5 text-xs font-semibold sm:text-sm"
          :class="accentStyles[category.accent].badge"
        >
          <IconGlyph :name="category.icon" class="h-4 w-4" />
          {{ category.stat }}
        </span>

        <h3 class="font-display mt-4 text-2xl font-bold tracking-tight text-brand-ink sm:mt-6 sm:text-4xl">
          {{ category.heading }}
        </h3>
        <p class="mt-3 text-sm leading-6 text-brand-slate sm:mt-5 sm:text-base sm:leading-relaxed">{{ category.description }}</p>

        <slot name="extra" />

        <SiteButton href="#pricing" surface="light" class="mt-6 sm:mt-8">Unlock Templates</SiteButton>
      </ScrollReveal>

      <ScrollReveal
        :delay="100"
        :class="reverse ? 'lg:order-1' : ''"
        class="relative bg-brand-ink p-3 sm:p-6"
      >
        <div class="absolute inset-0 opacity-40" :class="accentStyles[category.accent].glow" />
        <div class="relative overflow-hidden rounded-md border-2 border-white/20">
          <MediaPreviewFacade
            v-if="category.demoWistiaId"
            :wistia-id="category.demoWistiaId"
            :label="category.heading"
            aspect="aspect-4/3"
          />
          <picture v-else>
            <source
              v-if="category.gridImageMobile"
              media="(max-width: 639px)"
              :srcset="category.gridImageMobile"
            >
            <img
              :src="category.gridImage"
              :alt="category.gridImageAlt"
              loading="lazy"
              class="w-full object-cover"
            >
          </picture>
        </div>

        <div
          v-if="category.secondaryImage"
          class="relative mt-3 overflow-hidden rounded-md border-2 border-white/20 p-2 sm:mt-4 sm:p-3"
        >
          <img
            :src="category.secondaryImage"
            :alt="category.secondaryImageAlt"
            loading="lazy"
            class="w-full object-cover"
          >
        </div>
      </ScrollReveal>
    </div>
  </article>
</template>
