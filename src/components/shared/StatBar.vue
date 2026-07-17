<script setup lang="ts">
import { stats } from '@/data/stats'
import CountUpNumber from './CountUpNumber.vue'
import ScrollReveal from './ScrollReveal.vue'

const accents = [
  'from-brand-cta/40 to-transparent',
  'from-brand-blue/40 to-transparent',
  'from-brand-yellow/40 to-transparent',
  'from-brand-coral/40 to-transparent',
  'from-brand-blue-deep/40 to-transparent',
  'from-brand-cta/40 to-transparent',
] as const
</script>

<template>
  <section class="border-y border-white/10 bg-brand-ink-soft">
    <div class="mx-auto max-w-7xl px-6 py-8">
      <ScrollReveal>
        <div class="h-scroll-rail gap-3 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-6">
          <div
            v-for="(stat, i) in stats"
            :key="stat.label"
            class="group relative min-w-[10.5rem] overflow-hidden rounded-xl border border-white/10 bg-brand-ink px-4 py-5 transition-transform duration-200 hover:-translate-y-1 md:min-w-0"
            :style="{ transitionDelay: `${i * 40}ms` }"
          >
            <div
              class="draw-line absolute inset-x-0 top-0 h-px bg-gradient-to-r"
              :class="accents[i % accents.length]"
              :style="{ animationDelay: `${i * 80}ms` }"
            />
            <p class="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              <CountUpNumber :value="stat.value" />
            </p>
            <p class="mt-2 text-[11px] font-semibold tracking-[0.16em] text-white/55 uppercase">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
