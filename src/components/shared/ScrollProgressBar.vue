<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const progress = ref(0)

function onScroll() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  progress.value = scrollable > 0 ? Math.min(100, (window.scrollY / scrollable) * 100) : 0
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="fixed top-0 right-0 left-0 z-[60] h-0.5 bg-white/5">
    <div
      class="h-full bg-gradient-to-r from-brand-cta via-brand-blue to-brand-blue-deep transition-[width] duration-150 ease-out"
      :style="{ width: `${progress}%` }"
    />
  </div>
</template>
