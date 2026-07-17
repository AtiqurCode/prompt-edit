<script setup lang="ts">
import { images } from '@/data/assets'
import BeforeAfterSlider from '@/components/shared/BeforeAfterSlider.vue'
import SiteButton from '@/components/shared/SiteButton.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'

const pillars = [
  {
    title: 'One login instead of five subscriptions',
    copy: 'Access the major AI tools from one marketplace instead of juggling separate platforms and monthly bills.',
  },
  {
    title: 'Credits work like fuel, not another contract',
    copy: 'Try the tools, use what you need, and only pay for the credits you actually spend.',
  },
  {
    title: 'Templates that make the edit look expensive',
    copy: 'LUTs, SFX, overlays, text packs, and backgrounds help your videos look polished right away.',
  },
]
</script>

<template>
  <section class="surface-paper relative overflow-hidden py-24 sm:py-32">
    <div class="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
    <div class="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-cta/10 blur-3xl" />

    <div class="relative mx-auto max-w-7xl px-6">
      <div class="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal>
          <p class="eyebrow text-brand-blue-deep">Introducing Prompt Edit</p>
          <h2 class="section-title mt-4 text-brand-ink">
            Think of PromptEdit like a grocery store for AI.
          </h2>
          <p class="mt-6 max-w-lg text-lg leading-relaxed text-brand-slate">
            Instead of signing up for a bunch of different websites, learning a bunch of different
            interfaces, and stacking expensive subscriptions on top of each other, PromptEdit gives
            you one place to access all the major tools you need to create AI content.
          </p>

          <div class="mt-10 space-y-4">
            <div
              v-for="(pillar, i) in pillars"
              :key="pillar.title"
              class="group rounded-xl border border-brand-ink/8 bg-white p-5 transition-colors hover:border-brand-cta/40"
            >
              <div class="flex gap-4">
                <span class="font-display text-sm font-bold text-brand-cta tabular-nums">
                  {{ String(i + 1).padStart(2, '0') }}
                </span>
                <div>
                  <h3 class="font-display text-base font-semibold text-brand-ink">{{ pillar.title }}</h3>
                  <p class="mt-1.5 text-sm leading-relaxed text-brand-slate">{{ pillar.copy }}</p>
                </div>
              </div>
            </div>
          </div>

          <SiteButton href="#pricing" size="lg" class="mt-10">
            Click To Get Started Today
          </SiteButton>
        </ScrollReveal>

        <ScrollReveal :delay="120" direction="right">
          <div class="rounded-2xl border border-brand-ink/10 bg-brand-ink p-3 shadow-[0_30px_80px_rgba(0,13,34,0.18)] sm:p-4">
            <div class="mb-3 flex items-center justify-between px-1">
              <div class="flex items-center gap-2">
                <span class="h-2.5 w-2.5 rounded-full bg-brand-coral" />
                <span class="h-2.5 w-2.5 rounded-full bg-brand-yellow" />
                <span class="h-2.5 w-2.5 rounded-full bg-brand-cta" />
              </div>
              <span class="text-[10px] font-semibold tracking-[0.2em] text-white/40 uppercase">Compare workflows</span>
            </div>

            <BeforeAfterSlider
              :before-src="images.before"
              :after-src="images.after"
              before-label="Juggling Subscriptions"
              after-label="One PromptEdit"
            />

            <div class="mt-4 flex flex-col gap-4 border-t border-white/10 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <img
                :src="images.trustedBy"
                alt="Trusted by creators worldwide"
                class="h-auto w-full max-w-xs opacity-90"
              >
              <p class="max-w-xs text-sm leading-relaxed text-white/55">
                Drag the slider to see stacking tools vs one workflow.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
