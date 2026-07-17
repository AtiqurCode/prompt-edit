<script setup lang="ts">
import SiteButton from '@/components/shared/SiteButton.vue'
import ModelBadgeStrip from '@/components/shared/ModelBadgeStrip.vue'
import MediaPreviewFacade from '@/components/shared/MediaPreviewFacade.vue'

const heroPoints = [
  'Every major AI model in one marketplace',
  '100,000+ editing templates included with monthly',
  'Pay-as-you-go credits instead of stacked subscriptions',
]
</script>

<template>
  <section id="top" class="relative overflow-hidden bg-brand-ink pt-14 pb-20 sm:pt-20 sm:pb-28">
    <div class="pointer-events-none absolute inset-0">
      <div class="bg-grid-fade absolute inset-x-0 top-0 h-80 opacity-60" />
    </div>

    <div class="relative mx-auto max-w-7xl px-6">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div class="max-w-2xl">
          <p class="text-sm font-semibold tracking-[0.28em] text-brand-cta uppercase">
            For AI Creator Course students
          </p>

          <h1 class="display-headline font-display mt-6 font-bold text-white">
            You bring the course.
            <span class="text-brand-cta">
              We bring the creative stack.
            </span>
          </h1>

          <ul class="mt-8 space-y-3 text-base text-white/72 sm:text-lg">
            <li v-for="point in heroPoints" :key="point" class="flex items-start gap-3">
              <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-cta" />
              <span>{{ point }}</span>
            </li>
          </ul>

          <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <SiteButton href="#pricing" size="lg">Click To Get Started Today</SiteButton>
            <p class="text-sm text-white/50">No credit card required to explore the offer</p>
          </div>
        </div>

        <div class="relative">
          <div class="shadow-brutal-invert-lg overflow-hidden rounded-lg border-[3px] border-white bg-black">
            <MediaPreviewFacade
              wistia-id="eu37od3pav"
              label="See PromptEdit in action"
              aspect="aspect-video"
              class="min-h-[16rem] sm:min-h-[24rem]"
            />
          </div>

          <div class="shadow-brutal absolute -bottom-5 left-6 right-6 hidden -rotate-1 rounded-md border-[3px] border-brand-ink bg-brand-yellow px-5 py-4 sm:block">
            <div class="flex items-center justify-between gap-4">
              <div>
                <p class="text-xs font-semibold tracking-[0.24em] text-brand-ink/70 uppercase">PromptEdit marketplace</p>
                <p class="mt-1 text-sm text-brand-ink">Image, video, audio, and editing assets in one place</p>
              </div>
              <div class="text-right">
                <p class="font-display text-2xl font-bold text-brand-ink">$39<span class="text-sm text-brand-ink/70">/mo</span></p>
                <p class="text-xs font-semibold text-brand-ink">Best student value</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20 border-t-2 border-white/20 pt-10">
        <ModelBadgeStrip />
      </div>
    </div>
  </section>
</template>
