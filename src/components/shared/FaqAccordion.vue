<script setup lang="ts">
import { reactive } from 'vue'
import type { FaqItem } from '@/types/content'

const { items } = defineProps<{ items: FaqItem[] }>()
const openState = reactive(new Set<number>([0]))

function toggle(index: number) {
  if (openState.has(index)) openState.delete(index)
  else openState.add(index)
}
</script>

<template>
  <div class="divide-y divide-brand-ink/10">
    <div v-for="(item, index) in items" :key="item.question">
      <h3>
        <button
          type="button"
          class="flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left transition-colors hover:text-brand-blue-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cta"
          :aria-expanded="openState.has(index)"
          :aria-controls="`faq-panel-${index}`"
          @click="toggle(index)"
        >
          <span class="flex items-baseline gap-3">
            <span class="font-display text-sm font-bold text-brand-blue/60 tabular-nums">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
            <span class="font-semibold text-brand-ink">{{ item.question }}</span>
          </span>
          <svg
            viewBox="0 0 24 24"
            class="h-5 w-5 shrink-0 text-brand-cta transition-transform duration-300 ease-out"
            :class="{ 'rotate-45 scale-110': openState.has(index) }"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </h3>
      <div
        class="grid transition-[grid-template-rows] duration-300 ease-out"
        :style="{ gridTemplateRows: openState.has(index) ? '1fr' : '0fr' }"
      >
        <div :id="`faq-panel-${index}`" class="overflow-hidden">
          <p class="pb-5 pl-9 leading-relaxed text-brand-slate">{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
