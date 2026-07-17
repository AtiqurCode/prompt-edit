<script setup lang="ts">
import { sfxDragAndDrop, sfxMuted, sfxWithSound, soundCategories } from '@/data/soundCategories'
import MediaPreviewFacade from './MediaPreviewFacade.vue'
import IconGlyph from './IconGlyph.vue'
</script>

<template>
  <div class="mt-6 space-y-6">
    <div class="grid grid-cols-2 gap-3">
      <div class="overflow-hidden rounded-xl border border-brand-ink/8">
        <MediaPreviewFacade :wistia-id="sfxMuted.wistiaId" :label="sfxMuted.label" aspect="aspect-4/3" />
        <p class="flex items-center justify-center gap-1.5 bg-brand-surface py-2 text-center text-xs font-semibold text-brand-slate uppercase">
          <IconGlyph name="mute" class="h-3.5 w-3.5" /> {{ sfxMuted.label }}
        </p>
      </div>
      <div class="overflow-hidden rounded-xl border border-brand-ink/8">
        <MediaPreviewFacade :wistia-id="sfxWithSound.wistiaId" :label="sfxWithSound.label" aspect="aspect-4/3" />
        <p class="flex items-center justify-center gap-1.5 bg-brand-surface py-2 text-center text-xs font-semibold text-brand-slate uppercase">
          <IconGlyph name="unmute" class="h-3.5 w-3.5" /> {{ sfxWithSound.label }}
        </p>
      </div>
    </div>

    <div>
      <p class="eyebrow text-brand-slate/70">Each category previews automatically as you scroll</p>
      <div class="mt-3 grid grid-cols-3 gap-3">
        <div
          v-for="sound in soundCategories"
          :key="sound.wistiaId"
          class="overflow-hidden rounded-xl border border-brand-ink/8"
        >
          <MediaPreviewFacade :wistia-id="sound.wistiaId" :label="sound.name" aspect="aspect-square" />
          <p class="bg-brand-surface py-1.5 text-center text-xs font-medium text-brand-slate">{{ sound.name }}</p>
        </div>
      </div>
    </div>

    <div>
      <p class="eyebrow text-brand-slate/70">Just drag, drop, and go</p>
      <div class="mt-3 overflow-hidden rounded-xl border border-brand-ink/8">
        <MediaPreviewFacade
          :wistia-id="sfxDragAndDrop.wistiaId"
          :label="sfxDragAndDrop.label"
          aspect="aspect-video"
        />
      </div>
    </div>
  </div>
</template>
