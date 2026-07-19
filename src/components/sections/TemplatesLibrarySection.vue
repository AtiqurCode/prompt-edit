<script setup lang="ts">
import { assetCategories } from '@/data/assetCategories'
import AssetCategoryShowcase from '@/components/shared/AssetCategoryShowcase.vue'
import SoundCategoryGrid from '@/components/shared/SoundCategoryGrid.vue'
import CountUpNumber from '@/components/shared/CountUpNumber.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import TemplatesLibraryStepper from '@/components/shared/TemplatesLibraryStepper.vue'
import SectionEyebrow from '@/components/shared/SectionEyebrow.vue'
</script>

<template>
  <section id="templates" class="relative overflow-hidden bg-brand-surface py-20 sm:py-28">
    <div class="pointer-events-none absolute inset-0">
      <div class="bg-grid-fade-dark absolute inset-x-0 top-0 h-64 opacity-60" />
    </div>

    <div class="relative mx-auto max-w-7xl px-6">
      <div
        class="overflow-hidden rounded-lg border-[3px] border-brand-ink bg-white shadow-brutal-lg"
      >
        <div class="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr]">
          <ScrollReveal class="border-b-[3px] border-brand-ink p-8 sm:p-10 lg:border-r lg:border-b-0">
            <SectionEyebrow label="Content Creator Templates Library" chapter="03" tone="light" />
            <h2 class="font-display mt-5 max-w-3xl text-4xl font-bold text-brand-ink sm:text-5xl">
              Over 100,000 professionally designed assets, included with monthly.
            </h2>
            <p class="mt-6 max-w-2xl text-lg leading-8 text-brand-slate">
              LUTs, sound effects, text animations, overlays, and backgrounds that help your videos
              look cinematic without rebuilding every effect from scratch.
            </p>
          </ScrollReveal>

          <ScrollReveal
            :delay="120"
            class="flex flex-col justify-between bg-brand-ink p-8 text-white sm:p-10"
          >
            <div>
              <p class="text-xs font-semibold tracking-[0.24em] text-brand-cta uppercase">
                Included with monthly
              </p>
              <p class="font-display mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
                <CountUpNumber value="100,000+" />
              </p>
              <p class="mt-2 text-sm font-semibold tracking-[0.18em] text-white/55 uppercase">
                Templates &amp; packs
              </p>
            </div>
            <div class="mt-8 border-t-2 border-white/20 pt-5">
              <p class="text-sm leading-7 text-white/60">
                Unlimited downloads · commercial usage · cancel anytime
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div class="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
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
