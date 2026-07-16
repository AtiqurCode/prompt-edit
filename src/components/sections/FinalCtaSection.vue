<script setup lang="ts">
import SiteButton from '@/components/shared/SiteButton.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
</script>

<template>
  <section class="cta-mesh relative overflow-hidden py-20 sm:py-28">
    <div class="pointer-events-none absolute inset-0">
      <div class="bg-grid-fade absolute inset-x-0 top-0 h-72 opacity-25" />
      <div class="animate-blob absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cta/20 blur-3xl" />
    </div>

    <ScrollReveal class="relative mx-auto max-w-4xl px-6 text-center">
      <p class="text-sm font-semibold tracking-[0.28em] text-brand-cta uppercase">Ready to create?</p>
      <h2 class="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
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
