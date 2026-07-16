<script setup lang="ts">
import { assetCategories } from '@/data/assetCategories'
import AssetCategoryShowcase from '@/components/shared/AssetCategoryShowcase.vue'
import SoundCategoryGrid from '@/components/shared/SoundCategoryGrid.vue'
import CountUpNumber from '@/components/shared/CountUpNumber.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import TemplatesLibraryStepper from '@/components/shared/TemplatesLibraryStepper.vue'
</script>

<template>
  <section id="templates" class="bg-brand-surface py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <ScrollReveal>
          <p class="text-sm font-semibold tracking-[0.28em] text-brand-cta uppercase">
            Content Creator Templates Library
          </p>
          <h2 class="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl">
            Over 100,000 professionally designed assets, included with monthly.
          </h2>
          <p class="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            LUTs, sound effects, text animations, overlays, and backgrounds that help your videos
            look cinematic without rebuilding every effect from scratch.
          </p>
        </ScrollReveal>

        <ScrollReveal :delay="120">
          <div class="cta-mesh rounded-4xl px-8 py-8 text-white shadow-2xl shadow-brand-ink/10">
            <p class="text-xs font-semibold tracking-[0.24em] text-white/55 uppercase">Included with monthly</p>
            <p class="mt-3 text-5xl font-extrabold">
              <CountUpNumber value="100,000+" />
            </p>
            <p class="mt-2 text-sm font-semibold tracking-[0.18em] text-white/60 uppercase">
              Templates &amp; packs
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div class="mt-16 grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
        <TemplatesLibraryStepper />

        <div class="space-y-28">
          <div
            v-for="(category, index) in assetCategories"
            :id="category.id"
            :key="category.id"
          >
            <AssetCategoryShowcase :category="category" :reverse="index % 2 === 1">
              <template v-if="category.id === 'sfx'" #extra>
                <SoundCategoryGrid />
              </template>
            </AssetCategoryShowcase>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
