<script setup lang="ts">
import CreativeStudioExplorer from '@/components/shared/CreativeStudioExplorer.vue'
import SiteButton from '@/components/shared/SiteButton.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
</script>

<template>
  <section id="tools" class="relative overflow-hidden bg-brand-ink py-20 sm:py-28">
    <div class="pointer-events-none absolute inset-0">
      <div class="bg-grid-fade absolute inset-x-0 top-0 h-72 opacity-20" />
      <div class="animate-blob-slow absolute bottom-0 right-0 h-96 w-96 rounded-full bg-brand-blue/15 blur-3xl" />
    </div>

    <div class="relative mx-auto max-w-7xl px-6">
      <ScrollReveal class="max-w-3xl">
        <p class="text-sm font-semibold tracking-[0.28em] text-brand-cta uppercase">What you can access</p>
        <h2 class="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Image, video, and audio tools — all in one creative studio.
        </h2>
        <p class="mt-5 max-w-2xl text-lg leading-8 text-white/65">
          Browse the lineup the way premium creative platforms do: one featured preview, fast
          category switching, and enough range to feel like the marketplace is actually deep.
        </p>
      </ScrollReveal>

      <ScrollReveal :delay="120" class="mt-12">
        <CreativeStudioExplorer />
      </ScrollReveal>

      <ScrollReveal :delay="180" class="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p class="max-w-xl text-sm leading-7 text-white/55">
          Nano Banana Pro, Grok, Seedance, Kling, Veo, Heygen, ElevenLabs, Suno, Ideogram, and more —
          all reachable from one interface.
        </p>
        <SiteButton href="#pricing" size="lg">Claim the student deal</SiteButton>
      </ScrollReveal>
    </div>
  </section>
</template>
