<script setup lang="ts">
import { ref } from 'vue'
import { useInView } from '@/composables/useInView'

const { delay = 0, as = 'div' } = defineProps<{
  delay?: number
  as?: string
}>()

const el = ref<HTMLElement | null>(null)
const inView = useInView(el)
</script>

<template>
  <component
    :is="as"
    ref="el"
    class="transition-all duration-700 ease-out"
    :class="inView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
    :style="{ transitionDelay: inView ? `${delay}ms` : '0ms' }"
  >
    <slot />
  </component>
</template>
