<script setup lang="ts">
import { reactive } from 'vue'
import { toolCategories } from '@/data/toolCategories'
import { wistiaPoster } from '@/data/assets'
import MediaPreviewFacade from '@/components/shared/MediaPreviewFacade.vue'
import type { ToolItem } from '@/types/content'

const categoryMeta: Record<string, { accent: string; label: string; short: string }> = {
  image: { accent: 'text-brand-blue', label: 'Image', short: 'Generate & edit visuals' },
  video: { accent: 'text-brand-cta', label: 'Video', short: 'Films, ads, short-form' },
  audio: { accent: 'text-brand-yellow', label: 'Audio', short: 'Voice, SFX, music' },
}

/** One featured tool per lane — whole studio visible at once */
const featured = reactive<Record<string, ToolItem>>(
  Object.fromEntries(
    toolCategories.map((cat) => [cat.id, cat.items[0]!]),
  ),
)

function featureTool(categoryId: string, item: ToolItem) {
  featured[categoryId] = item
}
</script>

<template>
  <!-- One look: Image · Video · Audio as three equal lanes -->
  <div class="overflow-hidden rounded-2xl border border-white/12 bg-brand-ink-soft shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
    <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4 sm:px-6">
      <div>
        <p class="eyebrow text-brand-cta">Creative studio</p>
        <p class="mt-1 text-sm text-white/55">Image, video, and audio — same marketplace, one screen</p>
      </div>
      <div class="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-white/50 uppercase">
        <span class="h-1.5 w-1.5 rounded-full bg-brand-blue" />
        Image
        <span class="mx-1 text-white/20">·</span>
        <span class="h-1.5 w-1.5 rounded-full bg-brand-cta" />
        Video
        <span class="mx-1 text-white/20">·</span>
        <span class="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
        Audio
      </div>
    </div>

    <div class="grid grid-cols-1 divide-y divide-white/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
      <div
        v-for="category in toolCategories"
        :key="category.id"
        class="flex flex-col p-4 sm:p-5"
      >
        <!-- Lane header -->
        <div class="mb-4 flex items-start justify-between gap-3">
          <div>
            <p class="eyebrow" :class="categoryMeta[category.id]?.accent">
              {{ categoryMeta[category.id]?.label }}
            </p>
            <p class="mt-1 text-xs text-white/50">{{ categoryMeta[category.id]?.short }}</p>
          </div>
          <span class="rounded-full border border-white/12 px-2.5 py-1 text-[10px] font-bold tabular-nums text-white/55">
            {{ category.items.length }}
          </span>
        </div>

        <!-- Featured live tile for this lane -->
        <div
          class="overflow-hidden rounded-xl border border-white/12 bg-black transition-[box-shadow,border-color] duration-300"
          :class="
            category.id === 'image'
              ? 'hover:border-brand-blue/40'
              : category.id === 'video'
                ? 'hover:border-brand-cta/40'
                : 'hover:border-brand-yellow/40'
          "
        >
          <Transition
            mode="out-in"
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 scale-[1.02]"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div :key="featured[category.id]!.wistiaId">
              <MediaPreviewFacade
                :wistia-id="featured[category.id]!.wistiaId"
                :label="featured[category.id]!.name"
                aspect="aspect-video"
                class="min-h-[9rem]"
              />
            </div>
          </Transition>
        </div>
        <div class="mt-3 mb-4 min-h-[4.5rem]">
          <Transition
            mode="out-in"
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-150"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div :key="featured[category.id]!.name">
              <h3 class="font-display text-lg font-bold tracking-tight text-white">
                {{ featured[category.id]!.name }}
              </h3>
              <p class="mt-1 line-clamp-2 text-xs leading-relaxed text-white/50">
                {{ featured[category.id]!.description }}
              </p>
            </div>
          </Transition>
        </div>

        <!-- Full lane grid — everything visible -->
        <div class="mt-auto grid grid-cols-2 gap-2">
          <button
            v-for="item in category.items"
            :key="item.wistiaId"
            type="button"
            class="pressable group relative cursor-pointer overflow-hidden rounded-lg border text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cta"
            :class="
              featured[category.id]!.wistiaId === item.wistiaId
                ? 'border-brand-cta/60 ring-1 ring-brand-cta/40'
                : 'border-white/10 hover:border-white/30'
            "
            :aria-pressed="featured[category.id]!.wistiaId === item.wistiaId"
            @click="featureTool(category.id, item)"
          >
            <img
              :src="wistiaPoster(item.wistiaId)"
              :alt="item.name"
              loading="lazy"
              class="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-brand-ink/20 to-transparent" />
            <span class="absolute inset-x-0 bottom-0 truncate px-2 pb-1.5 text-[11px] font-semibold text-white">
              {{ item.name }}
            </span>
            <span
              v-if="featured[category.id]!.wistiaId === item.wistiaId"
              class="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-brand-cta shadow-[0_0_8px_#27ae60]"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
