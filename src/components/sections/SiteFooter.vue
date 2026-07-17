<script setup lang="ts">
import { images } from '@/data/assets'
</script>

<template>
  <footer class="border-t-[3px] border-brand-cta bg-brand-ink text-white/50">
    <div class="mx-auto max-w-7xl px-6 py-14">
      <div class="flex flex-col gap-8 border-b-2 border-white/20 pb-10 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex items-center gap-4">
          <img :src="images.logo" alt="PromptEdit" class="h-7 w-auto opacity-90">
          <p class="max-w-xs text-sm leading-6 text-white/55">
            The AI marketplace and templates library for creators who want one workflow, not ten.
          </p>
        </div>
        <nav class="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href="#" class="font-semibold text-white/70 underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:text-white hover:decoration-brand-cta">Terms &amp; Conditions</a>
          <a href="#" class="font-semibold text-white/70 underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:text-white hover:decoration-brand-cta">Privacy Policy</a>
          <a href="#" class="font-semibold text-white/70 underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:text-white hover:decoration-brand-cta">Earnings Disclaimer</a>
          <a href="mailto:support@contentcreator.com" class="font-semibold text-white/70 underline decoration-transparent decoration-2 underline-offset-4 transition-colors hover:text-white hover:decoration-brand-cta">
            support@contentcreator.com
          </a>
        </nav>
      </div>

      <div class="mt-10 space-y-4 text-xs leading-relaxed text-white/55">
        <p>&copy; 2025 Paul Xavier International LLC. By visiting this page, you agree to the terms, policies, and disclaimers linked above.</p>

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
