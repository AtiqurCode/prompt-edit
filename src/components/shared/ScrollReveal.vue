<script setup lang="ts">
import { ref } from 'vue'
import { useInView } from '@/composables/useInView'

const { delay = 0, as = 'div', direction = 'up' } = defineProps<{
  delay?: number
  as?: string
  direction?: 'up' | 'left' | 'right' | 'none'
}>()

const el = ref<HTMLElement | null>(null)
const inView = useInView(el)

const hidden = {
  up: 'translate-y-10 opacity-0',
  left: '-translate-x-8 opacity-0',
  right: 'translate-x-8 opacity-0',
  none: 'opacity-0',
} as const
</script>

<template>
  <component
    :is="as"
    ref="el"
    class="transition-all duration-700 ease-out will-change-transform"
    :class="inView ? 'translate-x-0 translate-y-0 opacity-100' : hidden[direction]"
    :style="{ transitionDelay: inView ? `${delay}ms` : '0ms' }"
  >
    <slot />
  </component>
</template>
