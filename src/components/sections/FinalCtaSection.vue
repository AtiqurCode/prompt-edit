<script setup lang="ts">
import SiteButton from '@/components/shared/SiteButton.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
</script>

<template>
  <section class="relative overflow-hidden bg-brand-ink py-24 sm:py-32">
    <div class="pointer-events-none absolute inset-0">
      <div class="animate-orb absolute top-1/2 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cta/15 blur-[100px]" />
      <div
        class="animate-orb absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-brand-blue/10 blur-[80px]"
        style="animation-delay: -3s"
      />
      <div class="noise-overlay" />
    </div>

    <ScrollReveal class="relative mx-auto max-w-3xl px-6 text-center">
      <p class="eyebrow text-brand-yellow">Ready to create?</p>
      <h2 class="section-title mt-4 text-white">
        Get started today before this exclusive student offer expires.
      </h2>
      <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
        One marketplace for AI tools. One library for pro editing assets. One cleaner way to make
        your content look like it belongs on a premium creative platform.
      </p>
      <SiteButton href="#pricing" size="lg" class="mt-10">
        Click To Get Started Today
      </SiteButton>
    </ScrollReveal>
  </section>
</template>
