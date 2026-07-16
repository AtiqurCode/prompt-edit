<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { images } from '@/data/assets'
import SiteButton from '@/components/shared/SiteButton.vue'

const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 24
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b transition-all duration-300"
    :class="
      scrolled
        ? 'border-white/10 bg-brand-ink/95 py-2 shadow-lg shadow-black/20 backdrop-blur'
        : 'border-transparent bg-brand-ink/70 py-4 backdrop-blur-sm'
    "
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
      <img :src="images.logo" alt="PromptEdit" class="h-8 w-auto transition-all sm:h-9">
      <SiteButton href="#pricing" size="md">Get Started</SiteButton>
    </div>
  </header>
</template>
