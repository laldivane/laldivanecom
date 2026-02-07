import { z } from "zod";
import { SceneStateSchema, InteractionSchema, ObserverSchema } from "./scene";

/**
 * LAL DIVANE - CHARACTER SCHEMA
 * Production-grade validation using Zod.
 */

export const ShotSchema = z.object({
  type: z.string().default("hyperrealistic full-body"),
  framing: z.string().default("head-to-toe"),
  pose: z.string().default("standing"),
  lens: z.string().default("35mm"),
  composition: z.string().default("cinematic"),
  aspect_ratio: z.string().default("9:16"),
});

export const CharacterIdentitySchema = z.object({
  name: z.string().default("Lal Divane"),
  age: z.string().default("24"),
  origin: z.string().default("Turkish-Middle Eastern"),
  presence: z.string().default("regal elegance"),
  archetype: z.string().default("dark feminine"),
});

export const FaceSideSchema = z.object({
  signature: z.string(),
  texture: z.string(),
  skin_tone: z.string().optional(),
  detail: z.string().optional(),
  gore: z.boolean().default(false),
});

export const PhysicalTraitsSchema = z.object({
  face: z.object({
    left_side: FaceSideSchema,
    right_side: FaceSideSchema,
  }),
  eyes: z.object({
    color: z.string(),
    detail: z.string(),
    gaze: z.string(),
  }),
  hair: z.object({
    length: z.string(),
    color: z.string(),
    streaks: z.string(),
  }),
  skin_and_hands: z.object({
    tattoos: z.object({
      style: z.string(),
      motifs: z.string(),
      placement: z.string(),
    }),
    fingers: z.string(),
    nails: z.string(),
  }),
  legs: z.object({
    shape: z.string(),
    texture: z.string(),
    detail: z.string(),
  }),
  breasts: z.string(),
  hips: z.string(),
  outfit: z.object({
    top: z.object({
      type: z.string(),
      embroidery: z.string(),
      accents: z.string(),
    }),
    dress: z.object({
      base_material: z.string(),
      layers: z.string(),
      hem: z.string(),
      effects: z.string(),
      slit: z.string(),
    }),
    footwear: z.object({
      type: z.string(),
      details: z.array(z.string()),
    }),
  }),
});

export const EnvironmentSchema = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  setting: z.string(),
  elements: z.array(z.string()),
  atmosphere: z.string(),
  lighting: z.string().optional(),
});

export const DirectorSchema = z.object({
  position: z.string().default("center"),
  angle: z.string().default("eye"),
  lightingSource: z.string().default("front"),
  proportion: z.string().default("full_body"),
});

export const CharacterSchema = z.object({
  version: z.string().default("3.0"),
  schemaVersion: z.number().default(1),
  
  // Scene-Oriented Fields
  scene: SceneStateSchema,
  interaction: InteractionSchema,
  observer: ObserverSchema,

  shot: ShotSchema,
  character: CharacterIdentitySchema,
  physical_traits: PhysicalTraitsSchema,
  environment: EnvironmentSchema,
  lighting: z.object({
    style: z.string(),
    contrast: z.string(),
  }),
  // pose_and_camera kept for legacy compatibility if needed
  pose_and_camera: z.object({
     pose: z.string().default("standing"),
     camera_angle: z.string().default("eye"),
     framing: z.string().default("full_body"),
     position: z.string().default("center"),
  }).optional(),
  style_render: z.object({
    aesthetic: z.string(),
    engine: z.string(),
    resolution: z.string(),
    post_processing: z.array(z.string()),
  }),
  enabledModules: z.record(z.string(), z.boolean()).default({}),
});

export type Character = z.infer<typeof CharacterSchema>;
