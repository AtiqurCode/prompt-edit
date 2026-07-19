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
  <section class="bg-white py-14 sm:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <div class="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <ScrollReveal>
          <p class="text-[11px] font-semibold tracking-[0.24em] text-brand-blue-deep uppercase sm:text-sm sm:tracking-[0.28em]">
            Introducing Prompt Edit
          </p>
          <h2 class="font-display mt-3 max-w-xl text-3xl font-bold text-brand-ink sm:mt-4 sm:text-5xl">
            Think of PromptEdit like a grocery store for AI.
          </h2>
          <p class="mt-5 max-w-lg text-base leading-7 text-brand-slate sm:mt-6 sm:text-lg sm:leading-8">
            Instead of signing up for a bunch of different websites, learning a bunch of different
            interfaces, and stacking expensive subscriptions on top of each other, PromptEdit gives
            you one place to access all the major tools you need to create AI content.
          </p>

          <div class="mt-8 space-y-5 sm:mt-10 sm:space-y-6">
            <div v-for="pillar in pillars" :key="pillar.title" class="border-l-2 border-brand-cta pl-4 sm:pl-5">
              <h3 class="text-base font-bold text-brand-ink sm:text-lg">{{ pillar.title }}</h3>
              <p class="mt-1.5 text-sm leading-6 text-brand-slate sm:mt-2 sm:leading-7">{{ pillar.copy }}</p>
            </div>
          </div>

          <SiteButton href="#pricing" size="lg" surface="light" class="mt-8 sm:mt-10">
            Get Started Today
          </SiteButton>
        </ScrollReveal>

        <ScrollReveal :delay="120">
          <div class="shadow-brutal overflow-hidden rounded-lg border-[3px] border-brand-ink bg-brand-ink p-2.5 sm:shadow-brutal-lg sm:p-4">
            <BeforeAfterSlider
              :before-src="images.before"
              :after-src="images.after"
              before-label="Juggling Subscriptions"
              after-label="One PromptEdit"
            />
            <div class="mt-4 flex flex-col gap-3 border-t-2 border-white/20 pt-4 sm:mt-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:pt-5">
              <img
                :src="images.trustedBy"
                alt="Trusted by creators worldwide"
                class="h-auto w-full max-w-[14rem] opacity-90 sm:max-w-xs"
              >
              <p class="max-w-xs text-sm leading-6 text-white/65 sm:leading-7">
                Drag the slider to see the difference between stacking tools and using one workflow.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
