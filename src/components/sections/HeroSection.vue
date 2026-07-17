<script setup lang="ts">
import SiteButton from '@/components/shared/SiteButton.vue'
import ModelBadgeStrip from '@/components/shared/ModelBadgeStrip.vue'
import MediaPreviewFacade from '@/components/shared/MediaPreviewFacade.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'

const heroPoints = [
  'Every major AI model in one marketplace',
  '100,000+ editing templates included with monthly',
  'Pay-as-you-go credits instead of stacked subscriptions',
]
</script>

<template>
  <section id="top" class="relative min-h-[100svh] overflow-hidden bg-brand-ink">
    <div class="absolute inset-0">
      <MediaPreviewFacade
        wistia-id="eu37od3pav"
        label="See PromptEdit in action"
        aspect="aspect-auto"
        class="h-full min-h-[100svh] w-full [&_img]:h-full [&_img]:min-h-[100svh] [&_img]:object-cover [&_iframe]:min-h-[100svh]"
      />
      <div class="hero-veil absolute inset-0" />
      <div class="noise-overlay" />
      <div class="grid-signal absolute inset-0 opacity-60" />
    </div>

    <div class="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pt-28 pb-14 sm:pb-20 lg:justify-center">
      <div class="max-w-2xl">
        <ScrollReveal>
          <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 backdrop-blur-md">
            <span class="animate-signal h-2 w-2 rounded-full bg-brand-cta" />
            <span class="eyebrow text-white/70">For AI Creator Course students</span>
          </div>
        </ScrollReveal>

        <ScrollReveal :delay="80">
          <h1 class="display-headline text-white">
            You bring the course.
            <span class="block text-brand-cta">We bring the creative stack.</span>
          </h1>
        </ScrollReveal>

        <ul class="mt-8 space-y-3 text-base text-white/75 sm:text-lg">
          <ScrollReveal
            v-for="(point, i) in heroPoints"
            :key="point"
            as="li"
            :delay="160 + i * 90"
            class="flex items-start gap-3"
          >
            <svg
              viewBox="0 0 24 24"
              class="mt-1 h-5 w-5 shrink-0 text-brand-cta"
              fill="none"
              stroke="currentColor"
              stroke-width="2.25"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            <span>{{ point }}</span>
          </ScrollReveal>
        </ul>

        <ScrollReveal :delay="420" class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <SiteButton href="#pricing" size="lg">Click To Get Started Today</SiteButton>
          <a
            href="#tools"
            class="pressable group inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-white/65 hover:text-white"
          >
            Explore the studio
            <svg
              viewBox="0 0 24 24"
              class="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12l7 7 7-7" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </ScrollReveal>
      </div>

      <ScrollReveal :delay="280" class="absolute top-[28%] right-6 hidden w-56 rotate-2 lg:block">
        <div class="animate-float rounded-2xl border border-white/15 bg-brand-ink/70 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <p class="eyebrow text-brand-yellow">Best student value</p>
          <p class="font-display mt-2 text-3xl font-bold text-white">
            $39<span class="text-base font-medium text-white/50">/mo</span>
          </p>
          <p class="mt-1 text-xs text-white/55">Full marketplace + templates</p>
        </div>
      </ScrollReveal>

      <ScrollReveal :delay="500" class="mt-16 border-t border-white/10 pt-8">
        <ModelBadgeStrip />
      </ScrollReveal>
    </div>
  </section>
</template>
