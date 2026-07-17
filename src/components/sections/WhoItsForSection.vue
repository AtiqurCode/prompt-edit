<script setup lang="ts">
import { computed, ref } from 'vue'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'
import SiteButton from '@/components/shared/SiteButton.vue'

const fits = [
  {
    id: '01',
    title: 'One interface, not ten',
    pain: 'A dozen logins. A dozen dashboards. A dozen bills.',
    win: 'Every major AI tool in one marketplace — one login, one workflow.',
    icon: 'M4 6h16M4 12h10M4 18h16',
    accent: 'bg-brand-cta',
    glow: 'shadow-[0_0_40px_rgba(39,174,96,0.25)]',
    ring: 'ring-brand-cta/40',
  },
  {
    id: '02',
    title: 'Better credit value',
    pain: 'Paying for tools you barely open this month.',
    win: 'Credits work like fuel — spend what you need, skip the rest.',
    icon: 'M12 3v18M7 8h7a2.5 2.5 0 010 5H8a2.5 2.5 0 000 5h8',
    accent: 'bg-brand-blue',
    glow: 'shadow-[0_0_40px_rgba(67,174,246,0.25)]',
    ring: 'ring-brand-blue/40',
  },
  {
    id: '03',
    title: 'Cinematic in one drag',
    pain: 'Building every title, LUT, and effect from scratch.',
    win: '100,000+ templates — drop polish in, keep editing.',
    icon: 'M4 5h16v14H4z M4 9.5h16 M9 5v4.5',
    accent: 'bg-brand-yellow',
    glow: 'shadow-[0_0_40px_rgba(255,202,58,0.2)]',
    ring: 'ring-brand-yellow/40',
  },
  {
    id: '04',
    title: 'No $130 packs',
    pain: 'Buying bloated bundles for the one asset you actually needed.',
    win: 'Unlimited downloads of what you use — nothing you don’t.',
    icon: 'M5 8h14l-1.5 11.5a2 2 0 01-2 1.5h-7a2 2 0 01-2-1.5L5 8z M9 8V6a3 3 0 016 0v2',
    accent: 'bg-brand-coral',
    glow: 'shadow-[0_0_40px_rgba(255,90,95,0.2)]',
    ring: 'ring-brand-coral/40',
  },
] as const

const activeId = ref<(typeof fits)[number]['id']>('01')
const explored = ref(new Set<string>(['01']))

function select(id: (typeof fits)[number]['id']) {
  activeId.value = id
  explored.value = new Set([...explored.value, id])
}

const matchCount = computed(() => explored.value.size)
const matchPct = computed(() => (matchCount.value / fits.length) * 100)
</script>

<template>
  <section class="relative overflow-hidden bg-brand-ink py-24 sm:py-32">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute top-1/4 -left-20 h-80 w-80 rounded-full bg-brand-cta/10 blur-[100px]" />
      <div class="absolute right-0 bottom-1/4 h-72 w-72 rounded-full bg-brand-blue/10 blur-[90px]" />
      <div class="noise-overlay" />
    </div>

    <div class="relative mx-auto max-w-7xl px-6">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <!-- Sticky match panel -->
        <ScrollReveal class="lg:sticky lg:top-28 lg:self-start">
          <p class="eyebrow text-brand-cta">Who it is for</p>
          <h2 class="section-title mt-4 text-white">
            A PromptEdit subscription is for you if you want
            <span class="text-brand-cta"> one workflow,</span>
            not ten.
          </h2>
          <p class="mt-5 max-w-md text-base leading-relaxed text-white/55">
            Hover or tap each signal. If these pains sound familiar — you’re the match.
          </p>

          <!-- Fit meter -->
          <div class="mt-10 rounded-2xl border border-white/12 bg-white/5 p-5 backdrop-blur-sm">
            <div class="flex items-end justify-between gap-4">
              <div>
                <p class="eyebrow text-white/55">Fit meter</p>
                <p class="font-display mt-2 text-4xl font-bold tracking-tight text-white">
                  {{ matchCount }}<span class="text-white/50">/{{ fits.length }}</span>
                </p>
                <p class="mt-1 text-sm text-white/55">signals explored</p>
              </div>
              <div class="text-right">
                <p
                  class="font-display text-sm font-bold tracking-wide uppercase"
                  :class="matchCount === fits.length ? 'text-brand-cta' : 'text-brand-yellow'"
                >
                  {{ matchCount === fits.length ? 'Strong match' : 'Keep scanning' }}
                </p>
              </div>
            </div>

            <div class="mt-4 h-2 overflow-hidden rounded-full bg-white/10" role="progressbar" :aria-valuenow="matchCount" :aria-valuemin="0" :aria-valuemax="fits.length" aria-label="Fit signals explored">
              <div
                class="h-full rounded-full bg-gradient-to-r from-brand-cta to-brand-blue transition-all duration-500 ease-out"
                :style="{ width: `${matchPct}%` }"
              />
            </div>

            <div class="mt-4 flex gap-2">
              <span
                v-for="fit in fits"
                :key="`dot-${fit.id}`"
                class="h-2 flex-1 rounded-full transition-colors duration-300"
                :class="explored.has(fit.id) ? fit.accent : 'bg-white/15'"
              />
            </div>
          </div>

          <SiteButton href="#pricing" size="lg" class="mt-8">
            See student pricing
          </SiteButton>
        </ScrollReveal>

        <!-- Interactive fit stack -->
        <div class="space-y-3">
          <ScrollReveal
            v-for="(fit, i) in fits"
            :key="fit.id"
            :delay="i * 70"
          >
            <button
              type="button"
              class="pressable group relative w-full cursor-pointer overflow-hidden rounded-2xl border text-left transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cta"
              :class="
                activeId === fit.id
                  ? ['border-transparent bg-brand-ink-soft ring-2', fit.ring, fit.glow]
                  : 'border-white/10 bg-white/[0.03] hover:border-white/25 hover:bg-white/[0.06]'
              "
              :aria-expanded="activeId === fit.id"
              @click="select(fit.id)"
              @mouseenter="select(fit.id)"
              @focus="select(fit.id)"
            >
              <span class="absolute inset-y-0 left-0 w-1.5 transition-all" :class="fit.accent" />

              <div class="flex items-start gap-4 p-5 pl-6 sm:p-6 sm:pl-7">
                <div
                  class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 transition-colors"
                  :class="activeId === fit.id ? 'bg-white/10 text-white' : 'bg-white/5 text-white/60'"
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path :d="fit.icon" />
                  </svg>
                </div>

                <div class="min-w-0 flex-1">
                  <div class="flex flex-wrap items-center gap-2">
                    <span class="font-display text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase tabular-nums">
                      {{ fit.id }}
                    </span>
                    <span
                      v-if="explored.has(fit.id)"
                      class="inline-flex items-center gap-1 rounded-full bg-brand-cta/15 px-2 py-0.5 text-[10px] font-bold tracking-wide text-brand-cta uppercase"
                    >
                      <svg viewBox="0 0 24 24" class="h-3 w-3" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                      Matched
                    </span>
                  </div>

                  <h3 class="font-display mt-1.5 text-lg font-bold tracking-tight text-white sm:text-xl">
                    {{ fit.title }}
                  </h3>

                  <!-- Pain → Win reveal -->
                  <div class="mt-3 grid transition-[grid-template-rows] duration-300 ease-out" :style="{ gridTemplateRows: activeId === fit.id ? '1fr' : '0fr' }">
                    <div class="overflow-hidden">
                      <div class="space-y-3 pb-1">
                        <p class="flex gap-2 text-sm leading-relaxed text-brand-coral/90">
                          <span class="mt-0.5 shrink-0 font-display text-[10px] font-bold tracking-wide uppercase opacity-70">Without</span>
                          <span class="line-through decoration-brand-coral/50">{{ fit.pain }}</span>
                        </p>
                        <p class="flex gap-2 text-sm leading-relaxed text-white/80">
                          <span class="mt-0.5 shrink-0 font-display text-[10px] font-bold tracking-wide text-brand-cta uppercase">With</span>
                          <span>{{ fit.win }}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <p
                    v-if="activeId !== fit.id"
                    class="mt-2 line-clamp-1 text-sm text-white/55"
                  >
                    {{ fit.win }}
                  </p>
                </div>
              </div>
            </button>
          </ScrollReveal>
        </div>
      </div>

      <!-- Guarantee seal -->
      <ScrollReveal :delay="200" class="mt-12">
        <div class="relative overflow-hidden rounded-2xl border border-brand-cta/30 bg-gradient-to-br from-brand-ink-soft to-brand-ink px-8 py-10 sm:px-12">
          <div class="pointer-events-none absolute -right-8 -bottom-8 h-40 w-40 rounded-full border-[12px] border-brand-cta/15" />
          <div class="pointer-events-none absolute -right-4 -bottom-4 h-28 w-28 rounded-full border-[8px] border-brand-cta/25" />

          <div class="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p class="eyebrow text-brand-cta">Unlimited downloads &amp; unlimited usage</p>
              <h3 class="font-display mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Backed by our 100% Money-Back Satisfaction Guarantee
              </h3>
              <p class="mt-4 max-w-2xl text-sm leading-relaxed text-white/55">
                Cancel your subscription any time, and within 30 days of purchase get a full refund on
                unused credits. Spent AI credits are non-refundable, the same way you cannot get a
                refund on gas once you have reached your destination.
              </p>
            </div>

            <div class="mx-auto flex h-28 w-28 shrink-0 flex-col items-center justify-center rounded-full border-2 border-brand-cta bg-brand-cta/10 text-center sm:h-32 sm:w-32">
              <span class="font-display text-2xl font-bold text-brand-cta">100%</span>
              <span class="mt-0.5 text-[10px] font-bold tracking-[0.15em] text-brand-cta/80 uppercase">Guaranteed</span>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
