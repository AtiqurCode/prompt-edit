<script setup lang="ts">
import { pricingPlans } from '@/data/pricingPlans'
import PricingCard from '@/components/shared/PricingCard.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import SectionEyebrow from '@/components/shared/SectionEyebrow.vue'
</script>

<template>
  <section id="pricing" class="relative overflow-hidden bg-brand-ink py-14 sm:py-32">
    <div class="pointer-events-none absolute inset-0">
      <div class="bg-grid-fade absolute inset-x-0 top-0 h-72 opacity-40" />
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6">
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-10">
        <ScrollReveal>
          <SectionEyebrow label="Prompt Edit Pricing" chapter="05" tone="dark" />
          <h2 class="font-display mt-4 max-w-xl text-3xl font-bold text-white sm:text-5xl">
            Save on credits today. Save even more with monthly.
          </h2>
          <p class="mt-4 max-w-xl text-base leading-7 text-white/60 sm:mt-6 sm:text-lg sm:leading-relaxed">
            Start with a one-time student credit deal, or go monthly to unlock the full templates
            library, recurring credits, faster generations, and better long-term value.
          </p>
        </ScrollReveal>

        <ScrollReveal :delay="100">
          <div class="rounded-lg border-2 border-white/15 bg-white/5 px-5 py-5 sm:px-7 sm:py-6">
            <p class="eyebrow text-brand-yellow">No lock-in</p>
            <p class="mt-3 text-sm leading-6 text-white/80 sm:text-base sm:leading-relaxed">
              Every plan is backed by a 100% money-back guarantee on unused credits within 30 days —
              cancel from the site any time.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div class="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <ScrollReveal v-for="(plan, i) in pricingPlans" :key="plan.id" :delay="i * 120">
          <PricingCard :plan="plan" />
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
