<script setup lang="ts">
import { assetCategories } from '@/data/assetCategories'
import AssetCategoryShowcase from '@/components/shared/AssetCategoryShowcase.vue'
import SoundCategoryGrid from '@/components/shared/SoundCategoryGrid.vue'
import CountUpNumber from '@/components/shared/CountUpNumber.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import TemplatesLibraryStepper from '@/components/shared/TemplatesLibraryStepper.vue'
</script>

<template>
  <section id="templates" class="surface-paper py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <ScrollReveal>
          <p class="eyebrow text-brand-blue-deep">Content Creator Templates Library</p>
          <h2 class="section-title mt-4 max-w-3xl text-brand-ink">
            Over 100,000 professionally designed assets, included with monthly.
          </h2>
          <p class="mt-6 max-w-2xl text-lg leading-relaxed text-brand-slate">
            LUTs, sound effects, text animations, overlays, and backgrounds that help your videos
            look cinematic without rebuilding every effect from scratch.
          </p>
        </ScrollReveal>

        <ScrollReveal :delay="120">
          <div class="rounded-2xl border border-white/10 bg-brand-ink px-8 py-8 text-white shadow-[0_24px_60px_rgba(0,13,34,0.2)]">
            <p class="eyebrow text-brand-yellow">Included with monthly</p>
            <p class="font-display mt-3 text-5xl font-bold tracking-tight">
              <CountUpNumber value="100,000+" />
            </p>
            <p class="mt-2 text-sm font-semibold tracking-[0.14em] text-white/50 uppercase">
              Templates &amp; packs
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
        <TemplatesLibraryStepper />

        <div class="space-y-24">
          <div v-for="(category, index) in assetCategories" :id="category.id" :key="category.id">
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
