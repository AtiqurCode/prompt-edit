<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { images } from '@/data/assets'
import SiteButton from '@/components/shared/SiteButton.vue'

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
    <div
      class="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5"
      :class="
        scrolled
          ? 'border-white/15 bg-brand-ink/90 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl'
          : 'border-white/10 bg-brand-ink/50 backdrop-blur-md'
      "
    >
      <a href="#top" class="flex cursor-pointer items-center gap-3">
        <img :src="images.logo" alt="PromptEdit" class="h-7 w-auto sm:h-8">
      </a>

      <SiteButton href="#pricing" size="md">Get Started</SiteButton>
    </div>
  </header>
</template>
