<script setup lang="ts">
import { faqs } from '@/data/faqs'
import FaqAccordion from '@/components/shared/FaqAccordion.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
</script>

<template>
  <section id="faq" class="bg-brand-surface py-20 sm:py-28">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
      <ScrollReveal>
        <p class="text-sm font-semibold tracking-[0.28em] text-brand-blue-deep uppercase">FAQ</p>
        <h2 class="font-display mt-4 text-4xl font-bold text-brand-ink sm:text-5xl">
          Commonly asked questions
        </h2>
        <p class="mt-5 max-w-md text-base leading-8 text-brand-slate">
          Everything you need to know about credits, templates, licensing, compatibility, and
          cancellation before you claim the offer.
        </p>
      </ScrollReveal>

      <ScrollReveal :delay="120">
        <div class="shadow-brutal rounded-lg border-[3px] border-brand-ink bg-white p-2">
          <FaqAccordion :items="faqs" />
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
