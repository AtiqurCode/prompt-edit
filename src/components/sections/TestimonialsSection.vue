<script setup lang="ts">
import { testimonials } from '@/data/testimonials'
import ScrollReveal from '@/components/shared/ScrollReveal.vue'

const featured = testimonials[0]
const supporting = testimonials.slice(1)

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}
</script>

<template>
  <section class="bg-brand-ink py-14 sm:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6">
      <ScrollReveal class="max-w-2xl">
        <p class="text-[11px] font-semibold tracking-[0.24em] text-brand-cta uppercase sm:text-sm sm:tracking-[0.28em]">Creator proof</p>
        <h2 class="font-display mt-3 text-3xl font-bold text-white sm:mt-4 sm:text-5xl">
          Real editors. Real time saved. Real results.
        </h2>
      </ScrollReveal>

      <ScrollReveal :delay="120" class="mt-8 sm:mt-12">
        <figure class="shadow-brutal-invert rounded-lg border-[3px] border-white bg-brand-ink-soft p-5 sm:shadow-brutal-invert-lg sm:p-10">
          <blockquote class="text-xl leading-8 font-semibold text-white sm:text-3xl sm:leading-10">
            “{{ featured?.quote }}”
          </blockquote>
          <figcaption class="mt-6 flex items-center gap-3 sm:mt-8 sm:gap-4">
            <img
              v-if="featured?.avatar"
              :src="featured.avatar"
              :alt="featured.name"
              loading="lazy"
              class="h-12 w-12 rounded-full border-2 border-white object-cover sm:h-14 sm:w-14"
            >
            <span
              v-else
              class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-brand-cta text-lg font-semibold text-brand-ink sm:h-14 sm:w-14"
            >
              {{ featured ? initials(featured.name) : '' }}
            </span>
            <div>
              <p class="text-base font-semibold text-white sm:text-lg">{{ featured?.name }}</p>
              <p class="text-sm text-white/55">{{ featured?.role }}</p>
            </div>
          </figcaption>
        </figure>
      </ScrollReveal>

      <div class="mt-5 grid grid-cols-1 gap-4 sm:mt-8 sm:gap-6 md:grid-cols-2">
        <ScrollReveal
          v-for="(testimonial, i) in supporting"
          :key="testimonial.name"
          :delay="160 + i * 80"
        >
          <figure
            class="shadow-brutal-invert h-full rounded-md border-2 border-white bg-brand-ink-soft p-5 motion-safe:transition-transform motion-safe:hover:rotate-0 max-sm:rotate-0 sm:p-6"
            :class="i % 2 === 0 ? 'sm:rotate-1' : 'sm:-rotate-1'"
          >
            <blockquote class="text-sm leading-6 text-white/75 sm:text-base sm:leading-7">“{{ testimonial.quote }}”</blockquote>
            <figcaption class="mt-5 flex items-center gap-3 sm:mt-6">
              <img
                v-if="testimonial.avatar"
                :src="testimonial.avatar"
                :alt="testimonial.name"
                loading="lazy"
                class="h-10 w-10 rounded-full border-2 border-white object-cover sm:h-11 sm:w-11"
              >
              <span
                v-else
                class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-brand-cta text-sm font-semibold text-brand-ink sm:h-11 sm:w-11"
              >
                {{ initials(testimonial.name) }}
              </span>
              <div>
                <p class="font-semibold text-white">{{ testimonial.name }}</p>
                <p class="text-sm text-white/50">{{ testimonial.role }}</p>
              </div>
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
