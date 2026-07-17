<script setup lang="ts">
import SiteButton from '@/components/shared/SiteButton.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
</script>

<template>
  <section class="relative overflow-hidden bg-brand-ink py-20 sm:py-28">
    <div class="pointer-events-none absolute inset-0">
      <div class="bg-grid-fade absolute inset-x-0 top-0 h-72 opacity-40" />
    </div>

    <ScrollReveal class="relative mx-auto max-w-4xl px-6 text-center">
      <p class="text-sm font-semibold tracking-[0.28em] text-brand-cta uppercase">Ready to create?</p>
      <h2 class="font-display mt-4 text-4xl font-bold text-white sm:text-5xl">
        Get started today before this exclusive student offer expires.
      </h2>
      <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/68">
        One marketplace for AI tools. One library for pro editing assets. One cleaner way to make
        your content look like it belongs on a premium creative platform.
      </p>
      <SiteButton href="#pricing" size="lg" class="mt-10">
        Click To Get Started Today
      </SiteButton>
    </ScrollReveal>
  </section>
</template>
