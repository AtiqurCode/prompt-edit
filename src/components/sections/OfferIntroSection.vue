<script setup lang="ts">
import { images } from '@/data/assets'
import BeforeAfterSlider from '@/components/shared/BeforeAfterSlider.vue'
import SiteButton from '@/components/shared/SiteButton.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'

const pillars = [
  {
    title: 'One login instead of five subscriptions',
    copy: 'Access the major AI tools from one marketplace instead of juggling separate platforms and monthly bills.',
  },
  {
    title: 'Credits work like fuel, not another contract',
    copy: 'Try the tools, use what you need, and only pay for the credits you actually spend.',
  },
  {
    title: 'Templates that make the edit look expensive',
    copy: 'LUTs, SFX, overlays, text packs, and backgrounds help your videos look polished right away.',
  },
]
</script>

<template>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid grid-cols-1 items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <ScrollReveal>
          <p class="text-sm font-semibold tracking-[0.28em] text-brand-blue-deep uppercase">
            Introducing Prompt Edit
          </p>
          <h2 class="font-display mt-4 max-w-xl text-4xl font-bold text-brand-ink sm:text-5xl">
            Think of PromptEdit like a grocery store for AI.
          </h2>
          <p class="mt-6 max-w-lg text-lg leading-8 text-brand-slate">
            Instead of signing up for a bunch of different websites, learning a bunch of different
            interfaces, and stacking expensive subscriptions on top of each other, PromptEdit gives
            you one place to access all the major tools you need to create AI content.
          </p>

          <div class="mt-10 space-y-6">
            <div v-for="pillar in pillars" :key="pillar.title" class="border-l-2 border-brand-cta pl-5">
              <h3 class="text-lg font-bold text-brand-ink">{{ pillar.title }}</h3>
              <p class="mt-2 text-sm leading-7 text-brand-slate">{{ pillar.copy }}</p>
            </div>
          </div>

          <SiteButton href="#pricing" size="lg" surface="light" class="mt-10">
            Click To Get Started Today
          </SiteButton>
        </ScrollReveal>

        <ScrollReveal :delay="120">
          <div class="shadow-brutal-lg overflow-hidden rounded-lg border-[3px] border-brand-ink bg-brand-ink p-3 sm:p-4">
            <BeforeAfterSlider
              :before-src="images.before"
              :after-src="images.after"
              before-label="Juggling Subscriptions"
              after-label="One PromptEdit"
            />
            <div class="mt-5 flex flex-col gap-4 border-t-2 border-white/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <img
                :src="images.trustedBy"
                alt="Trusted by creators worldwide"
                class="h-auto w-full max-w-xs opacity-90"
              >
              <p class="max-w-xs text-sm leading-7 text-white/65">
                Drag the slider to see the difference between stacking tools and using one workflow.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
