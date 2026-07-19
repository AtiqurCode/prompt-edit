<script setup lang="ts">
import CreativeStudioExplorer from '@/components/shared/CreativeStudioExplorer.vue'
import SiteButton from '@/components/shared/SiteButton.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import SectionEyebrow from '@/components/shared/SectionEyebrow.vue'
</script>

<template>
  <section id="tools" class="relative overflow-hidden bg-brand-ink py-20 sm:py-28">
    <div class="pointer-events-none absolute inset-0">
      <div class="bg-grid-fade absolute inset-x-0 top-0 h-80 opacity-35" />
    </div>

    <div class="relative mx-auto max-w-7xl px-6">
      <ScrollReveal class="max-w-3xl">
        <SectionEyebrow label="What you can access" chapter="02" tone="dark" />
        <h2 class="font-display mt-5 text-4xl font-bold text-white sm:text-5xl">
          Image, video, and audio tools — all in one creative studio.
        </h2>
        <p class="mt-5 max-w-2xl text-lg leading-8 text-white/65">
          One wall. Every topic. Muted demos cycle across the mosaic — tap any tile for sound. Only
          one video plays audio at a time.
        </p>
      </ScrollReveal>

      <ScrollReveal :delay="120" class="mt-12">
        <CreativeStudioExplorer />
      </ScrollReveal>

      <ScrollReveal
        :delay="180"
        class="mt-10 grid grid-cols-1 gap-6 border-t-2 border-white/15 pt-8 sm:grid-cols-[1fr_auto] sm:items-center"
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
