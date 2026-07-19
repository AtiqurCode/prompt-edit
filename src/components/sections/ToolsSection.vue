<script setup lang="ts">
import CreativeStudioExplorer from '@/components/shared/CreativeStudioExplorer.vue'
import SiteButton from '@/components/shared/SiteButton.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import SectionEyebrow from '@/components/shared/SectionEyebrow.vue'
</script>

<template>
  <section id="tools" class="relative overflow-hidden bg-brand-ink py-14 sm:py-28">
    <div class="pointer-events-none absolute inset-0">
      <div class="bg-grid-fade absolute inset-x-0 top-0 h-80 opacity-35" />
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
      <ScrollReveal class="max-w-3xl">
        <SectionEyebrow label="What you can access" chapter="02" tone="dark" />
        <h2 class="font-display mt-4 text-3xl font-bold text-white sm:mt-5 sm:text-5xl">
          Image, video, and audio tools — all in one creative studio.
        </h2>
        <p class="mt-4 max-w-2xl text-base leading-7 text-white/65 sm:mt-5 sm:text-lg sm:leading-8">
          Browse every tool in the lineup. Demos play muted — tap any tile for sound. Only one video
          plays audio at a time.
        </p>
      </ScrollReveal>

      <ScrollReveal :delay="120" class="mt-8 sm:mt-12">
        <CreativeStudioExplorer />
      </ScrollReveal>

      <ScrollReveal
        :delay="180"
        class="mt-8 grid grid-cols-1 gap-4 border-t-2 border-white/15 pt-6 sm:mt-10 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6 sm:pt-8"
      >
        <p class="max-w-xl text-sm leading-7 text-white/55">
          Nano Banana Pro, Grok, Seedance, Kling, Veo, Heygen, ElevenLabs, Suno, Ideogram, and more —
          all reachable from one interface.
        </p>
        <SiteButton href="#pricing" size="lg">Claim the student deal</SiteButton>
      </ScrollReveal>
    </div>
  </section>
</template>
