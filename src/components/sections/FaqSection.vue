<script setup lang="ts">
import { faqs } from '@/data/faqs'
import FaqAccordion from '@/components/shared/FaqAccordion.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
</script>

<template>
  <section id="faq" class="bg-brand-surface py-14 sm:py-28">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
      <ScrollReveal>
        <p class="text-[11px] font-semibold tracking-[0.24em] text-brand-blue-deep uppercase sm:text-sm sm:tracking-[0.28em]">FAQ</p>
        <h2 class="font-display mt-3 text-3xl font-bold text-brand-ink sm:mt-4 sm:text-5xl">
          Commonly asked questions
        </h2>
        <p class="mt-4 max-w-md text-sm leading-7 text-brand-slate sm:mt-5 sm:text-base sm:leading-8">
          Everything you need to know about credits, templates, licensing, compatibility, and
          cancellation before you claim the offer.
        </p>
      </ScrollReveal>

      <ScrollReveal :delay="120">
        <div class="shadow-brutal rounded-lg border-[3px] border-brand-ink bg-white p-1.5 sm:p-2">
          <FaqAccordion :items="faqs" />
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
