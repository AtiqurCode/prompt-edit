<script setup lang="ts">
import CreativeStudioExplorer from '@/components/shared/CreativeStudioExplorer.vue'
import SiteButton from '@/components/shared/SiteButton.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
</script>

<template>
  <section id="tools" class="relative overflow-hidden bg-brand-ink py-24 sm:py-32">
    <div class="pointer-events-none absolute inset-0">
      <div class="grid-fade absolute inset-x-0 top-0 h-80" />
      <div class="noise-overlay" />
    </div>

    <div class="relative mx-auto max-w-7xl px-6">
      <ScrollReveal class="max-w-3xl">
        <p class="eyebrow text-brand-cta">What you can access</p>
        <h2 class="section-title mt-4 text-white">
          Image, video, and audio tools — all in one creative studio.
        </h2>
        <p class="mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
          See the whole marketplace at once. Three lanes, every tool visible — pick any tile to
          preview without leaving the studio.
        </p>
      </ScrollReveal>

      <ScrollReveal :delay="120" class="mt-12">
        <CreativeStudioExplorer />
      </ScrollReveal>

      <ScrollReveal
        :delay="180"
        class="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="max-w-xl text-sm leading-relaxed text-white/55">
          Nano Banana Pro, Grok, Seedance, Kling, Veo, Heygen, ElevenLabs, Suno, Ideogram, and more —
          all reachable from one interface.
        </p>
        <SiteButton href="#pricing" size="lg">Claim the student deal</SiteButton>
      </ScrollReveal>
    </div>
  </section>
</template>
