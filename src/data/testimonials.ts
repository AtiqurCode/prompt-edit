import type { Testimonial } from '@/types/content'
import { images } from './assets'

export const testimonials: Testimonial[] = [
  {
    quote:
      'Thank you so much for the Content Creator Templates Library! My daughter and I got more editing work done today in 3 hours than we normally do in 3 days!',
    name: 'Hilda Schlueter',
    role: 'Online Course Creator',
    avatar: images.testimonialHilda,
  },
  {
    quote:
      "My videos wouldn't look HALF as good as they do if it wasn't for the Content Creator Templates Library. I lean into them heavily for every edit I do.",
    name: 'Matt Lilley',
    role: 'ContentCreator.com Student',
  },
  {
    quote:
      "The Content Creator Templates Library is a fantastic resource! I don't need any other digital asset subscriptions.",
    name: 'Brady Hales',
    role: 'ContentCreator.com Student',
    avatar: images.testimonialBrady,
  },
]
