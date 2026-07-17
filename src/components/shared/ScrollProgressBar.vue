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
  <div
    class="pointer-events-none fixed top-0 right-0 left-0 z-[60] h-[2px] bg-transparent"
    role="progressbar"
    :aria-valuenow="Math.round(progress)"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Page scroll progress"
  >
    <div
      class="h-full origin-left bg-gradient-to-r from-brand-cta via-brand-blue to-brand-yellow transition-transform duration-150 ease-out"
      :style="{ transform: `scaleX(${progress / 100})` }"
    />
  </div>
</template>
