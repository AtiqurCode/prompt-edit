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
  <div class="fixed top-0 right-0 left-0 z-60 h-1.5 border-b-2 border-brand-ink bg-white/10">
    <div
      class="h-full w-full origin-left bg-brand-cta transition-transform duration-150 ease-out"
      :style="{ transform: `scaleX(${progress / 100})` }"
    />
  </div>
</template>
