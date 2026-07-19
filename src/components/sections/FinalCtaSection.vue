<script setup lang="ts">
import SiteButton from '@/components/shared/SiteButton.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import SectionEyebrow from '@/components/shared/SectionEyebrow.vue'
</script>

<template>
  <section class="relative overflow-hidden bg-brand-ink py-14 sm:py-32">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute top-1/2 left-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cta/15 blur-[80px] sm:h-[28rem] sm:w-[28rem] sm:blur-[100px]" />
    </div>

    <ScrollReveal class="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
      <SectionEyebrow label="Ready to create?" chapter="06" tone="dark" class="justify-center" />
      <h2 class="font-display mt-4 text-3xl font-bold text-white sm:text-5xl">
        Get started today before this exclusive student offer expires.
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/60 sm:mt-6 sm:text-lg sm:leading-relaxed">
        One marketplace for AI tools. One library for pro editing assets. One cleaner way to make
        your content look like it belongs on a premium creative platform.
      </p>
      <SiteButton href="#pricing" size="lg" class="mt-8 sm:mt-10">
        Get Started Today
      </SiteButton>
    </ScrollReveal>
  </section>
</template>
