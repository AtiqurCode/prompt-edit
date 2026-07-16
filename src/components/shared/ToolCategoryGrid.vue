<script setup lang="ts">
import type { ToolCategory } from '@/types/content'
import MediaPreviewFacade from './MediaPreviewFacade.vue'
import ScrollReveal from './ScrollReveal.vue'

defineProps<{ category: ToolCategory; index: number }>()
</script>

<template>
  <div class="surface-panel-light rounded-4xl p-6 sm:p-8">
    <div class="flex flex-col gap-5 border-b border-black/8 pb-7 lg:flex-row lg:items-end lg:justify-between">
      <div class="flex items-start gap-4">
        <span class="rounded-2xl bg-brand-ink px-4 py-3 text-xl font-black tracking-[0.24em] text-white tabular-nums select-none">
          {{ String(index).padStart(2, '0') }}
        </span>
        <div>
          <p class="text-sm font-semibold tracking-widest text-brand-cta uppercase">
            {{ category.eyebrow }}
          </p>
          <h3 class="mt-1 text-2xl font-bold text-brand-ink sm:text-3xl">
            {{ category.heading }}
          </h3>
        </div>
      </div>
      <p class="max-w-md text-sm leading-6 text-gray-500 lg:text-right">{{ category.description }}</p>
    </div>

    <div class="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      <ScrollReveal v-for="(item, i) in category.items" :key="item.name" :delay="i * 60" as="div">
        <div
          class="group relative overflow-hidden rounded-[1.4rem] border border-black/8 bg-white p-2.5 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-cta/20 hover:shadow-2xl hover:shadow-brand-ink/8"
        >
          <div class="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-brand-cta/8 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div class="relative overflow-hidden rounded-[1.1rem]">
            <MediaPreviewFacade :wistia-id="item.wistiaId" :label="item.name" />
          </div>
          <div class="relative px-1 pt-4 pb-2">
            <div class="flex items-center justify-between gap-3">
              <h4 class="font-semibold text-brand-ink">{{ item.name }}</h4>
              <span class="rounded-full bg-brand-ink/5 px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] text-brand-ink/55 uppercase">
                preview
              </span>
            </div>
            <p class="mt-2 text-sm leading-6 text-gray-500">{{ item.description }}</p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </div>
</template>
