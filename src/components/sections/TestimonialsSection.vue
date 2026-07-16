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
  <section class="bg-brand-ink py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-6">
      <ScrollReveal class="max-w-2xl">
        <p class="text-sm font-semibold tracking-[0.28em] text-brand-cta uppercase">Creator proof</p>
        <h2 class="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Real editors. Real time saved. Real results.
        </h2>
      </ScrollReveal>

      <ScrollReveal :delay="120" class="mt-12">
        <figure class="rounded-4xl border border-white/10 bg-white/5 p-8 sm:p-10">
          <blockquote class="text-2xl leading-10 font-semibold text-white sm:text-3xl">
            “{{ featured?.quote }}”
          </blockquote>
          <figcaption class="mt-8 flex items-center gap-4">
            <img
              v-if="featured?.avatar"
              :src="featured.avatar"
              :alt="featured.name"
              loading="lazy"
              class="h-14 w-14 rounded-full object-cover"
            >
            <span
              v-else
              class="flex h-14 w-14 items-center justify-center rounded-full bg-brand-cta/15 text-lg font-semibold text-brand-cta"
            >
              {{ featured ? initials(featured.name) : '' }}
            </span>
            <div>
              <p class="text-lg font-semibold text-white">{{ featured?.name }}</p>
              <p class="text-sm text-white/55">{{ featured?.role }}</p>
            </div>
          </figcaption>
        </figure>
      </ScrollReveal>

      <div class="mt-8 grid gap-6 md:grid-cols-2">
        <ScrollReveal
          v-for="(testimonial, i) in supporting"
          :key="testimonial.name"
          :delay="160 + i * 80"
        >
          <figure class="h-full rounded-3xl border border-white/10 bg-white/4 p-6">
            <blockquote class="text-base leading-7 text-white/75">“{{ testimonial.quote }}”</blockquote>
            <figcaption class="mt-6 flex items-center gap-3">
              <img
                v-if="testimonial.avatar"
                :src="testimonial.avatar"
                :alt="testimonial.name"
                loading="lazy"
                class="h-11 w-11 rounded-full object-cover"
              >
              <span
                v-else
                class="flex h-11 w-11 items-center justify-center rounded-full bg-brand-cta/10 text-sm font-semibold text-brand-cta"
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
