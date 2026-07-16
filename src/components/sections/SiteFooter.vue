<script setup lang="ts">
import { images } from '@/data/assets'
</script>

<template>
  <footer class="bg-brand-ink py-14 text-white/50">
    <div class="mx-auto max-w-4xl space-y-6 px-6 text-center text-sm">
      <img :src="images.logo" alt="PromptEdit" class="mx-auto h-7 w-auto opacity-80">

      <p>&copy; 2025 Paul Xavier International LLC</p>

      <p>
        By visiting this page, you agree to
        <a href="#" class="font-semibold text-white/70 hover:text-white">terms and conditions</a>,
        <a href="#" class="font-semibold text-white/70 hover:text-white">privacy policy</a>
        &amp;
        <a href="#" class="font-semibold text-white/70 hover:text-white">earnings disclaimer</a>.
      </p>

      <p>
        This site is not a part of the Facebook website or Facebook Inc. Additionally, this site
        is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
      </p>

      <p class="text-xs leading-relaxed text-white/40">
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

      <p>
        Questions?
        <a href="mailto:support@contentcreator.com" class="font-semibold text-white/70 hover:text-white">
          support@contentcreator.com
        </a>
      </p>
    </div>
  </footer>
</template>
