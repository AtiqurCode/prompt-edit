<script setup lang="ts">
import { computed, ref } from 'vue'
import { testimonials } from '@/data/testimonials'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'

const takes = [
  {
    ...testimonials[0]!,
    id: '01',
    timecode: '00:00:12',
    clip: 'bg-brand-cta',
    ring: 'ring-brand-cta/35',
    metric: { value: '3 hrs', sub: 'beat a 3-day edit' },
    pull: '3 hours of work that used to take 3 days.',
  },
  {
    ...testimonials[1]!,
    id: '02',
    timecode: '00:01:48',
    clip: 'bg-brand-blue',
    ring: 'ring-brand-blue/35',
    metric: { value: '2×', sub: 'sharper looking cuts' },
    pull: "Videos wouldn't look half as good without it.",
  },
  {
    ...testimonials[2]!,
    id: '03',
    timecode: '00:03:05',
    clip: 'bg-brand-yellow',
    ring: 'ring-brand-yellow/40',
    metric: { value: '1', sub: 'library. Zero extra subs.' },
    pull: 'One library replaced every other asset sub.',
  },
] as const

const activeId = ref<(typeof takes)[number]['id']>('01')
const active = computed(() => takes.find((t) => t.id === activeId.value) ?? takes[0]!)

function initials(name: string) {
  return name
    .split(' ')
    .map((p) => p[0])
    .join('')
}

function select(id: (typeof takes)[number]['id']) {
  activeId.value = id
}
</script>

<template>
  <section class="relative overflow-hidden bg-brand-surface py-24 sm:py-32">
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.4]"
      style="
        background-image:
          linear-gradient(rgba(0, 13, 34, 0.055) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 13, 34, 0.055) 1px, transparent 1px);
        background-size: 32px 32px;
      "
    />

    <div class="relative mx-auto max-w-7xl px-6">
      <ScrollReveal class="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p class="eyebrow text-brand-blue-deep">Creator proof</p>
          <h2 class="section-title mt-3 text-brand-ink">
            Real editors. Real time saved. Real results.
          </h2>
        </div>
        <div class="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-brand-slate/55 uppercase">
          <span class="inline-flex items-center gap-1.5 rounded-md border border-brand-ink/10 bg-white px-2.5 py-1.5 font-display">
            <span class="h-1.5 w-1.5 rounded-full bg-brand-coral" />
            Proof reel
          </span>
          <span class="font-display tabular-nums">3 takes</span>
        </div>
      </ScrollReveal>

      <!-- NLE timeline scrubber -->
      <ScrollReveal :delay="60" class="mb-4">
        <div class="overflow-hidden rounded-xl border border-brand-ink/10 bg-brand-ink px-3 py-3 sm:px-4">
          <div class="mb-2 flex items-center justify-between text-[10px] font-semibold tracking-[0.18em] text-white/40 uppercase">
            <span>V1 · Creator takes</span>
            <span class="tabular-nums text-brand-cta">{{ active.timecode }}</span>
          </div>

          <div
            class="relative flex h-12 items-stretch gap-1.5"
            role="tablist"
            aria-label="Jump to a creator take"
          >
            <div
              class="pointer-events-none absolute top-0 bottom-0 z-10 w-0.5 bg-brand-coral shadow-[0_0_12px_rgba(255,90,95,0.85)] transition-all duration-300 ease-out"
              :class="{
                'left-[8%]': activeId === '01',
                'left-[42%]': activeId === '02',
                'left-[76%]': activeId === '03',
              }"
              aria-hidden="true"
            />

            <button
              v-for="take in takes"
              :key="take.id"
              type="button"
              role="tab"
              :aria-selected="activeId === take.id"
              class="pressable relative flex flex-1 cursor-pointer items-center gap-2 overflow-hidden rounded-md border border-white/10 px-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cta"
              :class="activeId === take.id ? 'bg-white/12' : 'bg-white/[0.03] hover:bg-white/[0.08]'"
              @click="select(take.id)"
              @mouseenter="select(take.id)"
              @focus="select(take.id)"
            >
              <span class="absolute inset-y-0 left-0 w-1.5" :class="take.clip" />
              <span class="pl-2 font-display text-[10px] font-bold text-white/45 tabular-nums">{{ take.id }}</span>
              <span class="truncate text-xs font-semibold text-white/85">{{ take.name.split(' ')[0] }}</span>
              <span class="ml-auto hidden text-[10px] text-white/35 tabular-nums sm:inline">{{ take.timecode }}</span>
            </button>
          </div>
        </div>
      </ScrollReveal>

      <!-- Bento board -->
      <ScrollReveal :delay="120">
        <div class="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-4">
          <!-- Portrait -->
          <div class="relative min-h-[22rem] overflow-hidden rounded-2xl border border-brand-ink/10 bg-brand-ink lg:col-span-5 lg:min-h-[26rem]">
            <Transition
              mode="out-in"
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0"
              enter-to-class="opacity-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <div :key="active.name" class="absolute inset-0">
                <img
                  v-if="active.avatar"
                  :src="active.avatar"
                  :alt="active.name"
                  class="h-full w-full object-cover"
                >
                <div
                  v-else
                  class="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-ink-soft to-brand-ink"
                >
                  <span class="font-display text-8xl font-bold text-white/15">
                    {{ initials(active.name) }}
                  </span>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/35 to-transparent" />
              </div>
            </Transition>

            <div class="absolute top-4 left-4 z-10 flex flex-wrap items-center gap-2">
              <span
                class="rounded-md px-2.5 py-1 font-display text-[10px] font-bold tracking-widest text-brand-ink uppercase"
                :class="active.clip"
              >
                Take {{ active.id }}
              </span>
              <span class="rounded-md border border-white/20 bg-black/45 px-2.5 py-1 text-[10px] font-semibold text-white/70 backdrop-blur-sm tabular-nums">
                {{ active.timecode }}
              </span>
            </div>

            <div class="absolute right-5 bottom-5 left-5 z-10">
              <p class="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {{ active.name }}
              </p>
              <p class="mt-1 text-sm text-white/55">{{ active.role }}</p>
            </div>
          </div>

          <!-- Pull + full quote -->
          <div class="flex flex-col justify-between rounded-2xl border border-brand-ink/10 bg-white p-7 shadow-[0_16px_40px_rgba(0,13,34,0.06)] lg:col-span-7">
            <div>
              <p class="eyebrow text-brand-slate/50">Marked take</p>
              <Transition
                mode="out-in"
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 translate-y-2"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-200"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <p
                  :key="active.pull"
                  class="font-display mt-4 text-2xl leading-snug font-bold tracking-tight text-brand-ink sm:text-3xl lg:text-[2.35rem] lg:leading-[1.15]"
                >
                  {{ active.pull }}
                </p>
              </Transition>
            </div>

            <div class="mt-8 flex flex-col gap-5 border-t border-brand-ink/8 pt-5 sm:flex-row sm:items-end sm:justify-between">
              <Transition
                mode="out-in"
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0"
                enter-to-class="opacity-100"
                leave-active-class="transition duration-150"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <div :key="active.metric.value">
                  <p class="font-display text-4xl font-bold tracking-tight text-brand-cta sm:text-5xl">
                    {{ active.metric.value }}
                  </p>
                  <p class="mt-1 text-sm text-brand-slate">{{ active.metric.sub }}</p>
                </div>
              </Transition>
              <p class="max-w-sm text-sm leading-relaxed text-brand-slate">
                “{{ active.quote }}”
              </p>
            </div>
          </div>
        </div>

        <!-- All takes strip — always on screen -->
        <div class="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3 md:gap-4">
          <button
            v-for="take in takes"
            :key="take.id"
            type="button"
            class="pressable group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white p-5 text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cta"
            :class="
              activeId === take.id
                ? ['border-transparent ring-2 shadow-[0_16px_40px_rgba(0,13,34,0.1)]', take.ring]
                : 'border-brand-ink/10 hover:border-brand-ink/20'
            "
            @click="select(take.id)"
            @mouseenter="select(take.id)"
          >
            <span class="absolute inset-y-0 left-0 w-1.5" :class="take.clip" />

            <div class="flex items-start justify-between gap-3 pl-2">
              <div class="flex items-center gap-3">
                <img
                  v-if="take.avatar"
                  :src="take.avatar"
                  :alt="take.name"
                  class="h-11 w-11 rounded-lg object-cover"
                >
                <span
                  v-else
                  class="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-ink font-display text-xs font-bold text-white"
                >
                  {{ initials(take.name) }}
                </span>
                <div>
                  <p class="text-sm font-semibold text-brand-ink">{{ take.name.split(' ')[0] }}</p>
                  <p class="text-[10px] font-semibold tracking-wide text-brand-slate/50 uppercase tabular-nums">
                    Take {{ take.id }} · {{ take.timecode }}
                  </p>
                </div>
              </div>
              <span class="font-display text-xl font-bold tracking-tight text-brand-cta">
                {{ take.metric.value }}
              </span>
            </div>

            <p class="mt-4 line-clamp-2 pl-2 text-sm leading-relaxed text-brand-slate">
              {{ take.pull }}
            </p>
          </button>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
