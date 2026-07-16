<script setup lang="ts">
import ScrollReveal from '@/components/shared/ScrollReveal.vue'

const fitPoints = [
  'You want every major AI tool in one easy interface',
  'You want the best deal on AI credits and more output for less money',
  'You want cinematic templates without building everything from scratch',
  'You are tired of buying $130 packs just to get one asset you actually wanted',
]
</script>

<template>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6">
      <div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <ScrollReveal>
          <p class="text-sm font-semibold tracking-[0.28em] text-brand-cta uppercase">Who it is for</p>
          <h2 class="mt-4 text-4xl font-extrabold tracking-tight text-brand-ink sm:text-5xl">
            A PromptEdit subscription is for you if you want one workflow, not ten.
          </h2>
        </ScrollReveal>

        <ScrollReveal :delay="120">
          <ul class="space-y-4">
            <li
              v-for="point in fitPoints"
              :key="point"
              class="flex gap-4 rounded-3xl border border-black/8 bg-brand-surface px-5 py-5"
            >
              <span class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-cta text-sm font-bold text-white">
                ✓
              </span>
              <p class="text-base leading-7 text-gray-700">{{ point }}</p>
            </li>
          </ul>
        </ScrollReveal>
      </div>

      <ScrollReveal :delay="200" class="mt-14">
        <div class="rounded-4xl border border-brand-cta/20 bg-brand-cta/8 px-8 py-8 text-center">
          <p class="text-sm font-semibold tracking-[0.24em] text-brand-cta uppercase">
            Unlimited downloads &amp; unlimited usage
          </p>
          <h3 class="mt-3 text-2xl font-extrabold text-brand-ink">
            Backed by our 100% Money-Back Satisfaction Guarantee
          </h3>
          <p class="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-600">
            Cancel your subscription any time, and within 30 days of purchase get a full refund on
            unused credits. Spent AI credits are non-refundable, the same way you cannot get a refund
            on gas once you have reached your destination.
          </p>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
