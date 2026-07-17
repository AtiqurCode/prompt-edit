<script setup lang="ts">
import { ICON_PATHS } from '@/data/icons'
import type { IconName } from '@/types/content'

defineProps<{ name: IconName }>()
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path :d="ICON_PATHS[name]" />
  </svg>
</template>
