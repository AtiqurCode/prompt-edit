<script setup lang="ts">
import MediaPreviewFacade from '@/components/shared/MediaPreviewFacade.vue'
import SiteButton from '@/components/shared/SiteButton.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'

const points = [
  'Generate inside Premiere Pro or DaVinci Resolve',
  'Drop results straight into your timeline',
  'Keep your edit flow uninterrupted',
]
</script>

<template>
  <section class="surface-paper relative overflow-hidden py-24 sm:py-32">
    <div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
      <ScrollReveal :delay="100" class="order-2 lg:order-1">
        <div class="relative">
          <div class="overflow-hidden rounded-2xl border border-brand-ink/10 bg-brand-ink p-2 shadow-[0_30px_80px_rgba(0,13,34,0.15)]">
            <MediaPreviewFacade
              wistia-id="821b33oy7g"
              label="AI Editing Plugins demo"
              aspect="aspect-video"
              class="rounded-xl"
            />
          </div>

          <span class="absolute -top-3 left-5 rounded-full border border-brand-ink/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-ink shadow-md">
            Premiere Pro
          </span>
          <span class="absolute -bottom-3 right-5 rounded-full bg-brand-cta px-3.5 py-1.5 text-xs font-semibold text-brand-ink shadow-md">
            DaVinci Resolve
          </span>
        </div>
      </ScrollReveal>

      <ScrollReveal class="order-1 lg:order-2">
        <p class="eyebrow text-brand-blue-deep">AI editing plugins</p>
        <h2 class="section-title mt-4 text-brand-ink">Soundtrack where you edit.</h2>
        <p class="mt-6 max-w-lg text-lg leading-relaxed text-brand-slate">
          No need to open a browser window. The plugins open inside your favorite editing software,
          letting you generate AI creations and instantly add them to any project.
        </p>
        <ul class="mt-8 space-y-4">
          <li v-for="item in points" :key="item" class="flex gap-3 text-sm text-brand-slate">
            <svg
              viewBox="0 0 24 24"
              class="mt-0.5 h-5 w-5 shrink-0 text-brand-cta"
              fill="none"
              stroke="currentColor"
              stroke-width="2.25"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {{ item }}
          </li>
        </ul>
        <SiteButton href="#pricing" size="lg" class="mt-10">Click To Get Started Today</SiteButton>
      </ScrollReveal>
    </div>
  </section>
</template>
