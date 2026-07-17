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
    class="sticky top-0 z-50 border-b-[3px] border-brand-cta bg-brand-ink transition-all duration-300"
    :class="scrolled ? 'py-2 shadow-brutal' : 'py-4'"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6">
      <img :src="images.logo" alt="PromptEdit" class="h-8 w-auto transition-all sm:h-9">
      <SiteButton href="#pricing" size="md">Get Started</SiteButton>
    </div>
  </header>
</template>
