<script setup lang="ts">
import { sfxDragAndDrop, sfxMuted, sfxWithSound, soundCategories } from '@/data/soundCategories'
import MediaPreviewFacade from './MediaPreviewFacade.vue'
import IconGlyph from './IconGlyph.vue'
</script>

<template>
  <div class="mt-6 space-y-6">
    <div class="grid grid-cols-2 gap-3">
      <div>
        <MediaPreviewFacade
          :wistia-id="sfxMuted.wistiaId"
          :label="sfxMuted.label"
          aspect="aspect-4/3"
          poster-size="sm"
        />
        <p class="mt-1.5 flex items-center justify-center gap-1.5 text-center text-xs font-semibold text-brand-slate uppercase">
          <IconGlyph name="mute" class="h-3.5 w-3.5" /> {{ sfxMuted.label }}
        </p>
      </div>
      <div>
        <MediaPreviewFacade
          :wistia-id="sfxWithSound.wistiaId"
          :label="sfxWithSound.label"
          aspect="aspect-4/3"
          poster-size="sm"
        />
        <p class="mt-1.5 flex items-center justify-center gap-1.5 text-center text-xs font-semibold text-brand-slate uppercase">
          <IconGlyph name="unmute" class="h-3.5 w-3.5" /> {{ sfxWithSound.label }}
        </p>
      </div>
    </div>

    <div>
      <p class="text-xs font-semibold tracking-widest text-brand-slate uppercase">
        Each category previews as you scroll — tap any tile for sound
      </p>
      <div class="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <div v-for="sound in soundCategories" :key="sound.wistiaId">
          <MediaPreviewFacade
            :wistia-id="sound.wistiaId"
            :label="sound.name"
            aspect="aspect-square"
            poster-size="sm"
          />
          <p class="mt-1 text-center text-xs font-medium text-brand-slate">{{ sound.name }}</p>
        </div>
      </div>
    </div>

    <div>
      <p class="text-xs font-semibold tracking-widest text-brand-slate uppercase">
        Just drag, drop, and go
      </p>
      <MediaPreviewFacade
        :wistia-id="sfxDragAndDrop.wistiaId"
        :label="sfxDragAndDrop.label"
        aspect="aspect-video"
        class="mt-3"
      />
    </div>
  </div>
</template>
