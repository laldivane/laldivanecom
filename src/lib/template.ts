/**
 * LAL DIVANE - VARSAYILAN ŞABLON (BASE TEMPLATE)
 * 
 * Bu dosya, uygulamanın açılışında kullanılan ve tüm özelliklerin 
 * tanımlı olduğu temel JSON şablonunu içerir.
 */

import type { LalPromptTemplate } from "./types";

export const baseTemplate: LalPromptTemplate = {
  version: "3.0.0-scene-beta",

  // V3.0 Scene Defaults
  scene: {
    posture: "standing",
    orientation: "upright",
    surface: { type: "none", material: "undefined", softness: "undefined" },
    location: { space: "void", ownership: "undefined", size: "undefined" },
    environment: { light_level: "dim", light_source: "neon", time: "night" },
    awareness: { consciousness: "awake", emotional_state: "melancholic" },
  },
  interaction: {
    with_environment: "none",
    object: { type: "none", contact: "none" },
  },
  observer: {
    camera_height: "eye",
    distance: "medium",
    angle: "frontal",
    intent: "observing",
  },

  // Legacy Shot Settings (kept for compatibility during migration)
  // 📸 Kamera ve Çekim Ayarları
  shot: {
    type: "hyperrealistic full-body",
    framing: "head-to-toe",
    pose: "standing with a subtle forward lean, one hand slightly raised",
    lens: "35mm",
    composition: "cinematic",
    aspect_ratio: "9:16",
  },

  // 👤 Karakter Kimliği
  character: {
    name: "Lal Divane",
    age: "24",
    origin: "Turkish–Middle Eastern",
    presence: "regal and tragic elegance",
    archetype: "ethereal dark feminine",
  },

  // 🧬 Fiziksel Özellikler
  physical_traits: {
    face: {
      left_side: {
        signature: "blackburn scar",
        texture: "matte black velvet",
        gore: false, // Varsayılan olarak safe mod uyumlu
      },
      right_side: {
        signature: "Pristine",
        texture: "pale flawless skin",
        skin_tone: "pale moon-kissed but not porcelain",
        detail: "glossy crimson mark on cheek",
      },
    },
    eyes: {
      color: "Crimson Red",
      detail: "burning with inner grief",
      gaze: "direct eye contact with viewer",
    },
    hair: {
      length: "floor-length",
      color: "raven black",
      streaks: "vivid crimson",
    },
    skin_and_hands: {
      tattoos: {
        style: "dark sepia henna",
        motifs: "Ottoman patterns",
        placement: "hands and visible skin",
      },
      fingers: "long tapered",
      nails: "black to crimson gradient",
    },
    legs: {
      shape: "normal and aesthetic",
      texture: "pale translucent skin",
      detail: "faint crimson glow under moonlight",
    },
    breasts: "DD cup",
    hips: "voluptuous form",
    
    // 👗 Kıyafet Detayları
    outfit: {
      top: {
        type: "deep crimson velvet corset",
        embroidery: "intricate gold filigree",
        accents: "black satin laces",
      },
      dress: {
        base_material: "relaxed-fit black lounge pants",
        layers: "loose fall",
        hem: "soft ambient light absorption",
        effects: "fully covered",
        slit: "none",
      },
      footwear: {
        type: "dark minimalist socks",
        details: ["matte finish"],
      },
    },
  },

  // 🌌 Ortam ve Atmosfer
  environment: {
    setting: "ruined digital void",
    elements: ["falling ashes", "faded digital signals"],
    atmosphere: "surreal, broken, liminal",
  },

  // 💡 Işıklandırma
  lighting: {
    style: "dramatic chiaroscuro",
    contrast: "deep shadows vs violent crimson neon rim light",
  },

  // 🎨 Render ve Stil
  style_render: {
    aesthetic: "Tragic Dark-Pop",
    engine: "Unreal Engine 5",
    resolution: "8k",
    post_processing: ["slight film grain", "subtle chromatic aberration"],
  },

  // 🎭 Başlangıç Duygusu ve Sahnesi
  emotion: "melankolik",
  director: {
    position: "center",
    angle: "eye",
    lightingSource: "front",
    proportion: "full_body",
  },
  
  // 📸 Yeni Kompozisyon (v2.5)
  pose_and_camera: {
    pose: "standing",
    camera_angle: "eye",
    framing: "full_body",
    position: "center",
  },

  enabledModules: {
    shot: true,
    identity: true,
    face: true,
    eyes: true,
    hair: true,
    tattoos: true,
    body: true,
    outfit: true,
    env: true,
    light: true,
    style: true,
    director: true,
    emotion: true,
    characterVariant: true,
    pose: true,
    props: true,
    timeWeather: true,
    cameraEffects: true,
    videoAction: true,
    renderStyle: true,
    nsfw: true,
    wardrobe: true,
  }
};
