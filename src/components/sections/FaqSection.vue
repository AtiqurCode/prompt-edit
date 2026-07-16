<script setup lang="ts">
import { faqs } from '@/data/faqs'
import FaqAccordion from '@/components/shared/FaqAccordion.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
</script>

<template>
  <section id="faq" class="bg-brand-surface py-20 sm:py-28">
    <div class="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr]">
      <ScrollReveal>
        <p class="text-sm font-semibold tracking-[0.28em] text-brand-cta uppercase">FAQ</p>
        <h2 class="mt-4 text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl">
          Commonly asked questions
        </h2>
        <p class="mt-5 max-w-md text-base leading-8 text-gray-600">
          Everything you need to know about credits, templates, licensing, compatibility, and
          cancellation before you claim the offer.
        </p>
      </ScrollReveal>

      <ScrollReveal :delay="120">
        <div class="rounded-4xl border border-black/8 bg-white p-2 shadow-xl shadow-brand-ink/6">
          <FaqAccordion :items="faqs" />
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
