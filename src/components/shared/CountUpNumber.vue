<script setup lang="ts">
import { ref, watch } from 'vue'
import { useInView } from '@/composables/useInView'

const { value } = defineProps<{ value: string }>()

const el = ref<HTMLElement | null>(null)
const inView = useInView(el)
const display = ref('0')

const match = value.match(/^([\d,]+)(.*)$/)
const target = match ? parseInt(match[1]!.replace(/,/g, ''), 10) : 0
const suffix = match ? match[2] : ''

watch(inView, (isVisible) => {
  if (!isVisible) return
  const duration = 1100
  const start = performance.now()

  function tick(now: number) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    display.value = Math.round(target * eased).toLocaleString('en-US')
    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
})
</script>

<template>
  <span ref="el">{{ display }}{{ suffix }}</span>
</template>
