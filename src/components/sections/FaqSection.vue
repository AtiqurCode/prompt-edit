<script setup lang="ts">
import { faqs } from '@/data/faqs'
import FaqAccordion from '@/components/shared/FaqAccordion.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
</script>

<template>
  <section id="faq" class="surface-paper py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr]">
      <ScrollReveal>
        <p class="eyebrow text-brand-blue-deep">FAQ</p>
        <h2 class="section-title mt-4 text-brand-ink">Commonly asked questions</h2>
        <p class="mt-5 max-w-md text-base leading-relaxed text-brand-slate">
          Everything you need to know about credits, templates, licensing, compatibility, and
          cancellation before you claim the offer.
        </p>
      </ScrollReveal>

      <ScrollReveal :delay="100">
        <div class="rounded-2xl border border-brand-ink/10 bg-white px-5 py-2 shadow-[0_16px_40px_rgba(0,13,34,0.05)] sm:px-7">
          <FaqAccordion :items="faqs" />
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
