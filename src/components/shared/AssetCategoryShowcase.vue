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
  <article class="shadow-brutal overflow-hidden rounded-lg border-[3px] border-brand-ink bg-white">
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <ScrollReveal :class="reverse ? 'lg:order-2' : ''" class="border-b-[3px] border-brand-ink p-8 sm:p-10 lg:border-r lg:border-b-0">
        <span
          class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold"
          :class="accentStyles[category.accent].badge"
        >
          <IconGlyph :name="category.icon" class="h-4 w-4" />
          {{ category.stat }}
        </span>

        <h3 class="font-display mt-6 text-3xl font-bold text-brand-ink sm:text-4xl">
          {{ category.heading }}
        </h3>
        <p class="mt-5 text-base leading-8 text-brand-slate">{{ category.description }}</p>

        <slot name="extra" />

        <SiteButton href="#pricing" surface="light" class="mt-8">
          Unlock the Templates Library
        </SiteButton>
      </ScrollReveal>

      <ScrollReveal :delay="120" :class="reverse ? 'lg:order-1' : ''" class="relative bg-brand-ink p-4 sm:p-6">
        <div
          class="absolute inset-0 opacity-30"
          :class="accentStyles[category.accent].glow"
        />
        <div class="relative overflow-hidden rounded-md border-2 border-white">
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
          class="relative mt-4 overflow-hidden rounded-md border-2 border-white bg-transparent p-3"
        >
          <img :src="category.secondaryImage" :alt="category.secondaryImageAlt" loading="lazy" class="w-full object-cover">
        </div>
      </ScrollReveal>
    </div>
  </article>
</template>
