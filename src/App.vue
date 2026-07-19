<script setup lang="ts">
import ScrollProgressBar from '@/components/shared/ScrollProgressBar.vue'
import EditorialBreak from '@/components/shared/EditorialBreak.vue'
import SiteHeader from '@/components/sections/SiteHeader.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import StatBar from '@/components/shared/StatBar.vue'
import OfferIntroSection from '@/components/sections/OfferIntroSection.vue'
import ToolsSection from '@/components/sections/ToolsSection.vue'
import EditingPluginsSection from '@/components/sections/EditingPluginsSection.vue'
import PricingSection from '@/components/sections/PricingSection.vue'
import TemplatesLibrarySection from '@/components/sections/TemplatesLibrarySection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import WhoItsForSection from '@/components/sections/WhoItsForSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import FinalCtaSection from '@/components/sections/FinalCtaSection.vue'
import SiteFooter from '@/components/sections/SiteFooter.vue'
</script>

<template>
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:border-2 focus:border-brand-ink focus:bg-brand-cta focus:px-4 focus:py-3 focus:font-semibold focus:text-brand-ink"
  >
    Skip to content
  </a>
  <ScrollProgressBar />
  <SiteHeader />
  <main id="main">
    <HeroSection />
    <StatBar />
    <OfferIntroSection />
    <EditorialBreak
      label="Creative tools"
      headline="Browse the full AI marketplace without leaving your workflow."
      tone="dark"
    />
    <ToolsSection />
    <EditingPluginsSection />
    <EditorialBreak
      label="Templates library"
      headline="Make every project look like it came from a premium asset marketplace."
      tone="light"
    />
    <TemplatesLibrarySection />
    <TestimonialsSection />
    <WhoItsForSection />
    <PricingSection />
    <FaqSection />
    <FinalCtaSection />
  </main>
  <SiteFooter />
</template>
