import { z } from "zod";

/**
 * SCENE STATE SCHEMA
 * Defines the deterministic state of the scene based on logic, not just aesthetics.
 * Ref: character_forge_full_control_scene_oriented_pipeline_task.md
 */

export const SceneStateSchema = z.object({
  // 1. Posture & Orientation
  posture: z.enum(["lying", "sitting", "standing", "leaning", "curled"]).default("standing"),
  orientation: z.enum(["on_back", "on_side", "face_down", "reclined", "upright", "undefined"]).default("upright"),

  // 2. Surface (Physical contact)
  surface: z.object({
    type: z.enum(["bed", "sofa", "floor", "chair", "ground", "none"]).default("none"),
    material: z.enum(["linen", "velvet", "leather", "concrete", "wood", "undefined"]).default("undefined"),
    softness: z.enum(["soft", "medium", "hard", "undefined"]).default("undefined"),
  }),

  // 3. Location (Spatial context)
  location: z.object({
    space: z.enum(["bedroom", "living_room", "kitchen", "hallway", "void", "underground", "nature"]).default("void"),
    ownership: z.enum(["personal", "abandoned", "public", "undefined"]).default("undefined"),
    size: z.enum(["narrow", "normal", "vast", "undefined"]).default("undefined"),
  }),

  // 4. Environment (Light & Time)
  environment: z.object({
    light_level: z.enum(["dark", "dim", "ambient", "lit"]).default("dim"),
    light_source: z.enum(["window", "tv", "candle", "neon", "moonlight", "none"]).default("neon"),
    time: z.enum(["night", "dusk", "dawn", "day", "undefined"]).default("night"),
  }),

  // 5. Awareness (Consciousness)
  awareness: z.object({
    consciousness: z.enum(["awake", "resting", "drifting"]).default("awake"),
    emotional_state: z.enum(["melancholic", "numb", "reflective", "intense"]).default("melancholic"),
  }),
});

/**
 * INTERACTION SCHEMA
 * Defines physical interaction with objects or environment.
 */
export const InteractionSchema = z.object({
  with_environment: z.enum(["none", "fabric", "object", "light"]).default("none"),
  object: z.object({
    type: z.enum(["pillow", "blanket", "tv", "window", "table", "mirror", "none"]).default("none"),
    contact: z.enum(["touching", "resting_against", "holding", "none"]).default("none"),
  }),
});

/**
 * OBSERVER & CAMERA SCHEMA
 * Defines the camera as a "witness".
 */
export const ObserverSchema = z.object({
  camera_height: z.enum(["above", "eye", "low"]).default("eye"),
  distance: z.enum(["intimate", "medium", "distant"]).default("medium"),
  angle: z.enum(["side", "top_down", "frontal", "dutch"]).default("frontal"),
  intent: z.enum(["witnessing", "observing", "distant_presence"]).default("observing"),
});

export type SceneState = z.infer<typeof SceneStateSchema>;
export type Interaction = z.infer<typeof InteractionSchema>;
export type Observer = z.infer<typeof ObserverSchema>;
