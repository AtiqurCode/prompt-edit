<script setup lang="ts">
import { pricingPlans } from '@/data/pricingPlans'
import PricingCard from '@/components/shared/PricingCard.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
</script>

<template>
  <section id="pricing" class="relative overflow-hidden bg-brand-ink py-20 sm:py-28">
    <div class="pointer-events-none absolute inset-0">
      <div class="bg-grid-fade absolute inset-x-0 top-0 h-72 opacity-40" />
    </div>

    <div class="relative mx-auto max-w-7xl px-6">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <ScrollReveal>
          <p class="text-sm font-semibold tracking-[0.28em] text-brand-cta uppercase">
            Prompt Edit Pricing
          </p>
          <h2 class="font-display mt-4 max-w-xl text-4xl font-bold text-white sm:text-5xl">
            Save on credits today. Save even more with monthly.
          </h2>
          <p class="mt-6 max-w-xl text-lg leading-8 text-white/68">
            Start with a one-time student credit deal, or go monthly to unlock the full templates
            library, recurring credits, faster generations, and better long-term value.
          </p>
        </ScrollReveal>

        <ScrollReveal :delay="120">
          <div class="shadow-brutal-invert rounded-lg border-[3px] border-white bg-brand-ink-soft px-8 py-7">
            <p class="text-xs font-semibold tracking-[0.24em] text-brand-cta uppercase">No lock-in</p>
            <p class="mt-3 text-lg leading-8 text-white/85">
              Every plan is backed by a 100% money-back guarantee on unused credits within 30 days —
              cancel from the site any time.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div class="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <ScrollReveal v-for="(plan, i) in pricingPlans" :key="plan.id" :delay="i * 120">
          <PricingCard :plan="plan" />
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
