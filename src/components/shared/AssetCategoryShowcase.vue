<script setup lang="ts">
import type { AssetCategory } from '@/types/content'
import { accentStyles } from '@/data/accentStyles'
import MediaPreviewFacade from './MediaPreviewFacade.vue'
import SiteButton from './SiteButton.vue'
import ScrollReveal from './ScrollReveal.vue'

const { category, reverse = false } = defineProps<{
  category: AssetCategory
  reverse?: boolean
}>()
</script>

<template>
  <article class="overflow-hidden rounded-4xl border border-black/8 bg-white shadow-xl shadow-brand-ink/6">
    <div class="grid lg:grid-cols-2">
      <ScrollReveal :class="reverse ? 'lg:order-2' : ''" class="border-b border-black/8 p-8 sm:p-10 lg:border-r lg:border-b-0">
        <span
          class="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
          :class="accentStyles[category.accent].badge"
        >
          <span aria-hidden="true">{{ category.emoji }}</span>
          {{ category.stat }}
        </span>

        <h3 class="mt-6 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">
          {{ category.heading }}
        </h3>
        <p class="mt-5 text-base leading-8 text-gray-600">{{ category.description }}</p>

        <slot name="extra" />

        <SiteButton href="#pricing" class="mt-8">
          Unlock the Templates Library
        </SiteButton>
      </ScrollReveal>

      <ScrollReveal :delay="120" :class="reverse ? 'lg:order-1' : ''" class="relative bg-brand-ink p-4 sm:p-6">
        <div
          class="absolute inset-0 opacity-30"
          :class="accentStyles[category.accent].glow"
        />
        <div class="relative overflow-hidden rounded-3xl border border-white/10">
          <MediaPreviewFacade
            v-if="category.demoWistiaId"
            :wistia-id="category.demoWistiaId"
            :label="category.heading"
            aspect="aspect-4/3"
          />
          <img
            v-else
            :src="category.gridImage"
            alt=""
            loading="lazy"
            class="w-full object-cover"
          >
        </div>

        <div
          v-if="category.secondaryImage"
          class="relative mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3"
        >
          <img :src="category.secondaryImage" alt="" loading="lazy" class="w-full object-cover">
        </div>
      </ScrollReveal>
    </div>
  </article>
</template>
