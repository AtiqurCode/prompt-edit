<script setup lang="ts">
import { reactive } from 'vue'
import type { FaqItem } from '@/types/content'

const { items } = defineProps<{ items: FaqItem[] }>()

const openState = reactive(new Set<number>([0]))

function toggle(index: number) {
  if (openState.has(index)) {
    openState.delete(index)
  } else {
    openState.add(index)
  }
}
</script>

<template>
  <div class="divide-y divide-gray-200 border-y border-gray-200">
    <div v-for="(item, index) in items" :key="item.question">
      <h3>
        <button
          type="button"
          class="flex w-full items-center justify-between gap-4 py-5 text-left"
          :aria-expanded="openState.has(index)"
          :aria-controls="`faq-panel-${index}`"
          @click="toggle(index)"
        >
          <span class="flex items-baseline gap-3">
            <span class="text-sm font-bold text-gray-300 tabular-nums">{{
              String(index + 1).padStart(2, '0')
            }}</span>
            <span class="font-semibold text-brand-ink">{{ item.question }}</span>
          </span>
          <svg
            viewBox="0 0 20 20"
            class="h-5 w-5 shrink-0 fill-none stroke-brand-cta stroke-2 transition-transform duration-300"
            :class="{ 'rotate-45': openState.has(index) }"
          >
            <path d="M10 4v12M4 10h12" stroke-linecap="round" />
          </svg>
        </button>
      </h3>
      <div
        class="grid transition-[grid-template-rows] duration-300 ease-out"
        :style="{ gridTemplateRows: openState.has(index) ? '1fr' : '0fr' }"
      >
        <div :id="`faq-panel-${index}`" class="overflow-hidden">
          <p class="pb-5 pl-9 text-gray-600">{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
