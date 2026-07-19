import { wistiaThumbnails } from './wistiaThumbnails'

const KAJABI = 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production'

export const images = {
  logo: '/Prompt_Edit_Logo_Black_Background.webp',
  before: `${KAJABI}/file-uploads/sites/8228/images/821c2a-37e6-8b-b36-c8bad0746f1_Before_promptedit_copy.png`,
  after: `${KAJABI}/file-uploads/sites/8228/images/c6cb82f-c0-1f2-b48-2eec5ff2d80d_After_promptedit_copy.png`,
  trustedBy: `${KAJABI}/file-uploads/sites/8228/images/3f41f0-7e0d-a40c-b4f5-bd301788e3d0_Trusted_By_PE_.png`,
  editingPlugins: `${KAJABI}/file-uploads/sites/8228/images/b3ee60-8322-eb08-ad-dcfada228c_ai_editing_plugins.png`,
  lutGrid: `${KAJABI}/file-uploads/themes/2159239506/settings_images/6860d8-5bbb-ac-bc3-6044a4c873aa_CCT_LUT_GRID-min.png`,
  lutBoxes: `${KAJABI}/file-uploads/themes/2159239506/settings_images/c3c1411-e65a-c6bd-ed30-85b2f3d04_CCT_LUT_software_boxes-min.png`,
  sfxBoxes: `${KAJABI}/file-uploads/themes/2159239506/settings_images/a034f08-b326-36ed-f6fe-50306155df3_CCT_SFX_software_boxes-min.png`,
  textGrid: `${KAJABI}/file-uploads/themes/2159239506/settings_images/dea3332-ec8-724-c87c-d06cdc47811_CCT_TITLE_GRID-min_1_.png`,
  textGridMobile: `${KAJABI}/file-uploads/themes/2159239506/settings_images/ea4a46-27e3-504f-402e-0c2f57bc15aa_CCT_TITLE_GRID_mobile_-min.png`,
  textBoxes: `${KAJABI}/file-uploads/themes/2159239506/settings_images/ff6f173-68b-106-a30a-85f15cee8eaf_CCT_TITLE_software_boxes-min.png`,
  overlayGrid: `${KAJABI}/file-uploads/themes/2159239506/settings_images/76b1ec-f3e-5ed4-6bb8-d5e45f8c8db_CCT_OVERLAY_GRID-min.png`,
  overlayGridMobile: `${KAJABI}/file-uploads/themes/2159239506/settings_images/5303aa2-bf24-584a-128f-86cfc0122c5_CCT_OVERLAY_GRID_MOBILE_-min.png`,
  overlayBoxes: `${KAJABI}/file-uploads/themes/2159239506/settings_images/a8bdaf0-73a-aea-7e84-4528311ad72_CCT_OVERLAY_software_boxes-min.png`,
  backgroundGrid: `${KAJABI}/file-uploads/themes/2159239506/settings_images/bbe3604-c34-453b-ae7f-65daf37742a6_CCT_BACKGROUND_GRID-min.png`,
  backgroundGridMobile: `${KAJABI}/file-uploads/themes/2159239506/settings_images/ea1755-8fd2-d37-238-2dcc8af5ba20_CCT_BACKGROUND_GRID_mobile_-min.png`,
  backgroundBoxes: `${KAJABI}/file-uploads/themes/2159239506/settings_images/737a72c-014a-2bd-2116-fd8dfffb43_CCT_BACKGROUND_software_boxes-min.png`,
  testimonialHilda: `${KAJABI}/file-uploads/themes/2159239506/settings_images/f32a71f-0c10-2153-3d0-8c82dad328c4_468282778_10164847460199466_6422244758659880729_n.jpg`,
  testimonialBrady: `${KAJABI}/file-uploads/themes/2159239506/settings_images/670641a-e7bd-ee8b-a5e-a46ec546de8_Brady_Hales_Pro_Pic.png`,
  satisfactionGuarantee: `${KAJABI}/themes/2147904907/settings_images/wQYLmC5ETUStuMB0TZ5X_eLWaGR9tRXaCrbFrZLsu_Satisfaction_Guarantee.png`,
}

type PosterSize = 'sm' | 'md'

/** Real still frame for a Wistia media id, resolved via oEmbed ahead of time. */
export function wistiaPoster(wistiaId: string, size: PosterSize = 'md'): string {
  const base =
    wistiaThumbnails[wistiaId] ?? `https://fast.wistia.com/embed/medias/${wistiaId}/swatch`
  if (size === 'sm' && base.includes('image_crop_resized=')) {
    return base.replace(/image_crop_resized=\d+x\d+/, 'image_crop_resized=480x270')
  }
  return base
}

function wistiaPreviewParams() {
  return new URLSearchParams({
    autoPlay: 'true',
    muted: 'true',
    silentAutoPlay: 'true',
    playsinline: 'true',
    endVideoBehavior: 'loop',
    playButton: 'false',
    controlsVisibleOnLoad: 'false',
    fullscreenButton: 'false',
    settingsControl: 'false',
    qualityControl: 'false',
    playbar: 'false',
    volumeControl: 'false',
    smallPlayButton: 'false',
  })
}

/** Silent looping embed — unmute in place via the Wistia player API. */
export function wistiaAutoplayUrl(wistiaId: string): string {
  return `https://fast.wistia.net/embed/iframe/${wistiaId}?${wistiaPreviewParams().toString()}`
}
