import type { PricingPlan } from '@/types/content'

export const pricingPlans: PricingPlan[] = [
  {
    id: 'credits',
    name: 'Save on Credits',
    badge: 'Existing Student Discount',
    price: '$98',
    priceSuffix: 'one payment',
    highlighted: false,
    features: [
      'Get $110 worth of AI credits today (save 10%)',
      'Use credits on any AI tool across the entire site',
      'Nano Banana Pro, Grok, Seedance, Kling, Veo, Heygen, ElevenLabs, Suno, Ideogram & more',
      'Run out of credits? Simply buy more — no subscription required',
    ],
    ctaLabel: 'Claim Deal',
  },
  {
    id: 'everything',
    name: 'Save on Everything',
    badge: 'Most Popular',
    price: '$39',
    priceSuffix: '/month',
    highlighted: true,
    features: [
      '$49 worth of AI credits every month',
      'Lifetime 20% boost on monthly credits',
      '10% off anytime you purchase additional credits',
      'Full access to the Content Creator Templates Library (100,000+ assets)',
      'Faster generation speeds',
      'Run multiple generations at once',
    ],
    ctaLabel: 'Claim Deal',
    note: 'Easily cancel at any time',
  },
]
