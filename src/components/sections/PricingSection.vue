<script setup lang="ts">
import { pricingPlans } from '@/data/pricingPlans'
import PricingCard from '@/components/shared/PricingCard.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
</script>

<template>
  <section id="pricing" class="cta-mesh relative overflow-hidden py-20 sm:py-28">
    <div class="pointer-events-none absolute inset-0">
      <div class="bg-grid-fade absolute inset-x-0 top-0 h-72 opacity-25" />
    </div>

    <div class="relative mx-auto max-w-7xl px-6">
      <ScrollReveal class="mx-auto max-w-4xl text-center">
        <p class="text-sm font-semibold tracking-[0.28em] text-brand-cta uppercase">
          Prompt Edit Pricing
        </p>
        <h2 class="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Save on credits today. Save even more with monthly.
        </h2>
        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/68">
          Start with a one-time student credit deal, or go monthly to unlock the full templates
          library, recurring credits, faster generations, and better long-term value.
        </p>
      </ScrollReveal>

      <div class="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <ScrollReveal v-for="(plan, i) in pricingPlans" :key="plan.id" :delay="i * 120">
          <PricingCard :plan="plan" />
        </ScrollReveal>
      </div>

      <ScrollReveal :delay="240" class="mx-auto mt-10 max-w-3xl text-center">
        <p class="text-sm leading-7 text-white/55">
          Backed by a 100% money-back satisfaction guarantee. Cancel anytime, and get a full refund
          on unused credits within 30 days.
        </p>
      </ScrollReveal>
    </div>
  </section>
</template>
