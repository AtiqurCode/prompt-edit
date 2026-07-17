<script setup lang="ts">
import { pricingPlans } from '@/data/pricingPlans'
import PricingCard from '@/components/shared/PricingCard.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
</script>

<template>
  <section id="pricing" class="relative overflow-hidden bg-brand-ink py-24 sm:py-32">
    <div class="pointer-events-none absolute inset-0">
      <div class="grid-fade absolute inset-x-0 top-0 h-72" />
      <div class="noise-overlay" />
    </div>

    <div class="relative mx-auto max-w-7xl px-6">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <ScrollReveal>
          <p class="eyebrow text-brand-cta">Prompt Edit Pricing</p>
          <h2 class="section-title mt-4 max-w-xl text-white">
            Save on credits today. Save even more with monthly.
          </h2>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            Start with a one-time student credit deal, or go monthly to unlock the full templates
            library, recurring credits, faster generations, and better long-term value.
          </p>
        </ScrollReveal>

        <ScrollReveal :delay="100">
          <div class="rounded-2xl border border-white/12 bg-white/5 px-7 py-6 backdrop-blur-sm">
            <p class="eyebrow text-brand-yellow">No lock-in</p>
            <p class="mt-3 text-base leading-relaxed text-white/80">
              Every plan is backed by a 100% money-back guarantee on unused credits within 30 days —
              cancel from the site any time.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div class="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <ScrollReveal v-for="(plan, i) in pricingPlans" :key="plan.id" :delay="i * 120">
          <PricingCard :plan="plan" />
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
