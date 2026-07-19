<script setup lang="ts">
import MediaPreviewFacade from '@/components/shared/MediaPreviewFacade.vue'
import SiteButton from '@/components/shared/SiteButton.vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
</script>

<template>
  <section class="bg-white py-20 sm:py-28">
    <div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
      <ScrollReveal :delay="120" class="order-2 lg:order-1">
        <div class="relative">
          <div class="shadow-brutal-lg overflow-hidden rounded-lg border-[3px] border-brand-ink bg-brand-ink p-2">
            <MediaPreviewFacade
              wistia-id="821b33oy7g"
              label="AI Editing Plugins demo"
              aspect="aspect-video"
              class="rounded-md"
            />
          </div>
          <div class="mt-3 flex flex-wrap gap-2 sm:contents">
            <span
              class="shadow-brutal-sm rounded-md border-2 border-brand-ink bg-white px-4 py-2 text-sm font-semibold text-brand-ink sm:absolute sm:-top-4 sm:left-6 sm:mt-0 sm:rotate-1"
            >
              Premiere Pro
            </span>
            <span
              class="shadow-brutal-sm rounded-md border-2 border-brand-ink bg-brand-cta px-4 py-2 text-sm font-semibold text-brand-ink sm:absolute sm:-bottom-4 sm:right-6 sm:mt-0 sm:-rotate-1"
            >
              DaVinci Resolve
            </span>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal class="order-1 lg:order-2">
        <p class="text-sm font-semibold tracking-[0.28em] text-brand-blue-deep uppercase">AI editing plugins</p>
        <h2 class="font-display mt-4 text-4xl font-bold text-brand-ink sm:text-5xl">
          Soundtrack where you edit.
        </h2>
        <p class="mt-6 max-w-lg text-lg leading-8 text-brand-slate">
          No need to open a browser window. The plugins open inside your favorite editing software,
          letting you generate AI creations and instantly add them to any project.
        </p>
        <ul class="mt-8 space-y-4 text-sm text-brand-slate">
          <li class="flex gap-3">
            <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-cta" />
            Generate inside Premiere Pro or DaVinci Resolve
          </li>
          <li class="flex gap-3">
            <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-cta" />
            Drop results straight into your timeline
          </li>
          <li class="flex gap-3">
            <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-cta" />
            Keep your edit flow uninterrupted
          </li>
        </ul>
        <SiteButton href="#pricing" size="lg" surface="light" class="mt-10">
          Click To Get Started Today
        </SiteButton>
      </ScrollReveal>
    </div>
  </section>
</template>
