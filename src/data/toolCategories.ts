import type { ToolCategory } from '@/types/content'

export const toolCategories: ToolCategory[] = [
  {
    id: 'image',
    eyebrow: 'AI Image Tools',
    heading: 'What can you do with these image tools?',
    description:
      'Generate, edit, and repurpose visuals without opening a design tool.',
    items: [
      {
        name: 'AI Clones',
        description: 'Generate a photorealistic AI likeness of yourself for content at scale.',
        wistiaId: '6ugrp949dp',
      },
      {
        name: 'Social Media Posts',
        description: 'Turn a single prompt into ready-to-post graphics for every platform.',
        wistiaId: '5bzldtmz36',
      },
      {
        name: 'Graphic Design',
        description: 'Produce logos, banners, and branded graphics without touching Photoshop.',
        wistiaId: 'kvqvjrid9z',
      },
      {
        name: 'Image Editing',
        description: 'Retouch, extend, or remix any photo with a text prompt.',
        wistiaId: '72zakh7jbf',
      },
      {
        name: 'Youtube Thumbnails',
        description: 'Generate scroll-stopping thumbnails that actually get clicks.',
        wistiaId: 'yrq89m8ns0',
      },
      {
        name: 'Online Ads',
        description: 'Create ad creative variations in seconds for faster testing.',
        wistiaId: 'cypx73wu36',
      },
    ],
  },
  {
    id: 'video',
    eyebrow: 'AI Video Tools',
    heading: 'What can you do with these video tools?',
    description: 'Produce finished video, not just clips, straight from a prompt or script.',
    items: [
      {
        name: 'Clone Videos',
        description: 'Turn a script into a talking video of your own AI clone.',
        wistiaId: 'v39qn2mla0',
      },
      {
        name: 'Visual Effects',
        description: 'Add cinematic VFX to raw footage without a plugin.',
        wistiaId: 'qx4qain2eg',
      },
      {
        name: 'Cinematic Films',
        description: 'Generate short films from nothing but a written scene.',
        wistiaId: '3rllmh5doc',
      },
      {
        name: 'Video Ads',
        description: 'Produce scroll-stopping video ads at scale.',
        wistiaId: '1muopqfwh6',
      },
      {
        name: 'Reels & Tiktoks',
        description: 'Generate short-form content built for the algorithm.',
        wistiaId: 'fq2zoz36cz',
      },
      {
        name: 'Youtube Videos',
        description: "Turn a script or outline into a finished long-form video.",
        wistiaId: '8nri26so0p',
      },
    ],
  },
  {
    id: 'audio',
    eyebrow: 'AI Audio Tools',
    heading: 'What can you do with these Audio tools?',
    description: 'Every voice, effect, and score you need, generated on demand.',
    items: [
      {
        name: 'AI Voiceovers',
        description: 'Natural-sounding narration in dozens of voices and languages.',
        wistiaId: 'rsh692c710',
      },
      {
        name: 'AI Voice Clones',
        description: "Clone your own voice for narration you don't have to record.",
        wistiaId: 'rusyskd1ox',
      },
      {
        name: 'Voice Swaps',
        description: 'Swap any voice track for another without re-recording.',
        wistiaId: 'x6w5dao4h0',
      },
      {
        name: 'AI Sound Effects',
        description: 'Generate custom sound effects from a text description.',
        wistiaId: '0yhtigj9mg',
      },
      {
        name: 'AI Music Generation',
        description: 'Compose original, royalty-free music from a prompt.',
        wistiaId: '81m386dh7h',
      },
    ],
  },
]
