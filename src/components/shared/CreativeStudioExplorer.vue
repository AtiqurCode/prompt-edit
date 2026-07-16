<script setup lang="ts">
import { computed, ref } from 'vue'
import { toolCategories } from '@/data/toolCategories'
import MediaPreviewFacade from '@/components/shared/MediaPreviewFacade.vue'

const activeCategoryId = ref(toolCategories[0]?.id ?? 'image')
const activeItemIndex = ref(0)

const activeCategory = computed(
  () => toolCategories.find((category) => category.id === activeCategoryId.value) ?? toolCategories[0]!,
)
const activeItem = computed(() => activeCategory.value.items[activeItemIndex.value]!)

function selectCategory(id: string) {
  activeCategoryId.value = id
  activeItemIndex.value = 0
}

function selectItem(index: number) {
  activeItemIndex.value = index
}
</script>

<template>
  <div class="studio-shell overflow-hidden rounded-4xl border border-white/10">
    <div class="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-8">
      <div>
        <p class="text-xs font-semibold tracking-[0.28em] text-brand-cta uppercase">Creative studio</p>
        <p class="mt-1 text-sm text-white/55">Browse image, video, and audio tools in one flow</p>
      </div>
      <div class="flex gap-2">
        <button
          v-for="category in toolCategories"
          :key="category.id"
          type="button"
          class="rounded-full px-4 py-2 text-sm font-semibold transition-colors"
          :class="
            activeCategoryId === category.id
              ? 'bg-white text-brand-ink'
              : 'border border-white/15 text-white/70 hover:border-white/30 hover:text-white'
          "
          @click="selectCategory(category.id)"
        >
          {{ category.eyebrow.replace('AI ', '') }}
        </button>
      </div>
    </div>

    <div class="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
      <div class="border-b border-white/10 p-4 sm:p-6 lg:border-r lg:border-b-0">
        <div class="overflow-hidden rounded-3xl border border-white/10 bg-black">
          <MediaPreviewFacade
            :key="activeItem.wistiaId"
            :wistia-id="activeItem.wistiaId"
            :label="activeItem.name"
            aspect="aspect-video"
            class="min-h-[16rem] sm:min-h-[22rem]"
          />
        </div>
        <div class="mt-5 flex items-start justify-between gap-4">
          <div>
            <p class="text-xs font-semibold tracking-[0.24em] text-brand-cta uppercase">
              {{ activeCategory.eyebrow }}
            </p>
            <h3 class="mt-2 text-2xl font-bold text-white sm:text-3xl">{{ activeItem.name }}</h3>
            <p class="mt-3 max-w-xl text-sm leading-7 text-white/65">{{ activeItem.description }}</p>
          </div>
          <span class="hidden rounded-full border border-white/15 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-white/50 uppercase sm:inline">
            Live preview
          </span>
        </div>
      </div>

      <div class="p-4 sm:p-6">
        <p class="text-xs font-semibold tracking-[0.24em] text-white/45 uppercase">Explore the lineup</p>
        <div class="mt-4 space-y-2">
          <button
            v-for="(item, index) in activeCategory.items"
            :key="item.name"
            type="button"
            class="flex w-full items-center gap-3 rounded-2xl border px-3 py-3 text-left transition-all"
            :class="
              activeItemIndex === index
                ? 'border-brand-cta/40 bg-brand-cta/10'
                : 'border-white/8 bg-white/4 hover:border-white/20 hover:bg-white/7'
            "
            @click="selectItem(index)"
          >
            <div class="h-14 w-24 shrink-0 overflow-hidden rounded-xl border border-white/10">
              <MediaPreviewFacade
                :wistia-id="item.wistiaId"
                :label="item.name"
                aspect="aspect-video"
                class="h-full w-full"
              />
            </div>
            <div class="min-w-0">
              <p class="truncate font-semibold text-white">{{ item.name }}</p>
              <p class="mt-1 line-clamp-2 text-xs leading-5 text-white/55">{{ item.description }}</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
