<script setup lang="ts">
import { images } from '@/data/assets'

const legalLinks = [
  { href: '#', label: 'Terms & Conditions' },
  { href: '#', label: 'Privacy Policy' },
  { href: '#', label: 'Earnings Disclaimer' },
]
</script>

<template>
  <footer class="border-t-[3px] border-brand-cta bg-brand-ink text-white/50">
    <div class="mx-auto max-w-7xl px-6 py-16">
      <!-- Top: brand + channels -->
      <div class="grid grid-cols-1 gap-12 border-b-2 border-white/15 pb-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div class="flex items-center gap-3">
            <img :src="images.logo" alt="PromptEdit" class="h-8 w-auto opacity-95">
            <span
              class="rounded border border-brand-cta/50 px-2 py-0.5 text-[10px] font-semibold tracking-[0.22em] text-brand-cta uppercase"
            >
              Studio
            </span>
          </div>
          <p class="mt-5 max-w-sm text-sm leading-7 text-white/60">
            The AI marketplace and templates library for creators who want one workflow, not ten.
          </p>
          <a
            href="mailto:support@contentcreator.com"
            class="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-white transition-colors duration-200 hover:text-brand-cta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            support@contentcreator.com
            <svg
              viewBox="0 0 24 24"
              class="h-4 w-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </div>

        <div>
          <p class="text-xs font-semibold tracking-[0.28em] text-white/50 uppercase">Navigate</p>
          <nav class="mt-4 flex flex-col gap-3" aria-label="Footer navigation">
            <a
              href="#tools"
              class="cursor-pointer text-sm font-semibold text-white/70 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Creative tools
            </a>
            <a
              href="#templates"
              class="cursor-pointer text-sm font-semibold text-white/70 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Templates library
            </a>
            <a
              href="#pricing"
              class="cursor-pointer text-sm font-semibold text-white/70 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Pricing
            </a>
          </nav>
        </div>

        <div>
          <p class="text-xs font-semibold tracking-[0.28em] text-white/50 uppercase">Legal</p>
          <nav class="mt-4 flex flex-col gap-3" aria-label="Legal links">
            <a
              v-for="link in legalLinks"
              :key="link.label"
              :href="link.href"
              class="cursor-pointer text-sm font-semibold text-white/70 underline decoration-transparent decoration-2 underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-brand-cta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {{ link.label }}
            </a>
          </nav>
        </div>
      </div>

      <!-- Disclaimers -->
      <div class="mt-10 space-y-4 text-xs leading-relaxed text-white/50">
        <p>
          &copy; 2025 Paul Xavier International LLC. By visiting this page, you agree to the terms,
          policies, and disclaimers linked above.
        </p>

        <p>
          This site is not a part of the Facebook website or Facebook Inc. Additionally, this site
          is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>

        <p>
          DISCLAIMER: The sales figures stated on this landing page and discussed in the AI Creator
          Course are our personal sales figures and in some cases the sales figures of previous or
          existing clients. Please understand these results are not typical. We're not implying
          you'll duplicate them (or do anything for that matter). The average person who buys
          "how to" information gets little to no results. We're using these references for example
          purposes only. Your results will vary and depend on many factors including but not
          limited to your background, experience, and work ethic. All business entails risk as well
          as massive and consistent effort and action. If you're not willing to accept that, please
          do not purchase the AI Creator Course.
        </p>
      </div>
    </div>
  </footer>
</template>
