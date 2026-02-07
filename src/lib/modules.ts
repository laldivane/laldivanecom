/**
 * LAL DIVANE - MODULES INDEX
 * 
 * Tüm modüllerin merkezi export noktası.
 */


// ====== HAIR STYLES MODULE ======
export {
  type HairState,
  type HairOption,
  hairStyleOptions,
  hairVolumeOptions,
  hairAccessoryOptions,
  hairMovementOptions,
  defaultHair,
  hairToPrompt,
  randomHair,
} from "./hairStyles";

// ====== POSES MODULE ======
export {
  type PoseState,
  type PoseOption,
  poseCategories,
  poseOptions,
  handOptions,
  gazeOptions,
  defaultPose,
  poseToPrompt,
  randomPose,
} from "./poses";

// ====== PROPS MODULE ======
export {
  type PropsState,
  type PropOption,
  heldItemOptions,
  nearbyObjectOptions,
  fabricOptions,
  defaultProps,
  propsToPrompt,
  randomProps,
} from "./props";

// ====== TIME & WEATHER MODULE ======
export {
  type TimeWeatherState,
  type TimeWeatherOption,
  timeOfDayOptions,
  weatherOptions,
  seasonOptions,
  moonPhaseOptions,
  defaultTimeWeather,
  timeWeatherToPrompt,
  randomTimeWeather,
} from "./timeWeather";

// ====== CAMERA EFFECTS MODULE ======
export {
  type CameraEffectsState,
  type CameraOption,
  depthOfFieldOptions,
  filmGrainOptions,
  colorGradingOptions,
  lensEffectsOptions,
  motionBlurOptions,
  defaultCameraEffects,
  cameraEffectsToPrompt,
  randomCameraEffects,
} from "./cameraEffects";

// ====== CHARACTER VARIANTS MODULE ======
export {
  type CharacterVariant,
  characterVariants,
  defaultVariant,
  getVariant,
  randomVariant,
} from "./characterVariants";

// ====== VIDEO ACTIONS MODULE ======
export {
  type VideoActionState,
  type VideoOption,
  movementOptions,
  facialMotionOptions,
  cameraMotionOptions,
  environmentDynamicOptions,
  defaultVideoAction,
  videoActionToPrompt,
} from "./videoActions";

// ====== RENDER STYLES MODULE ======
export {
  type RenderStyleState,
  type RenderStyleOption,
  renderStyleOptions,
  defaultRenderStyle,
  renderStyleToPrompt,
  randomRenderStyle,
} from "./renderStyles";

// ====== NSFW MODULE ======
export {
  type NsfwState,
  nsfwScenarios,
  nsfwIntensities,
  nsfwAngles,
  nsfwOutfitModifiers,
  defaultNsfwState,
  nsfwToPrompt,
  randomNsfwState,
} from "./nsfw";

// ====== PROMPT HISTORY MODULE ======
export {
  type PromptHistoryItem,
  type PromptCollection,
  loadHistory,
  saveHistory,
  addToHistory,
  toggleFavorite,
  deleteFromHistory,
  clearHistory,
  getFavorites,
  searchHistory,
  loadCollections,
  saveCollections,
  createCollection,
  addToCollection,
  removeFromCollection,
  deleteCollection,
  exportHistoryAsJson,
  exportHistoryAsText,
  formatTimestamp,
} from "./promptHistory";

// ====== COMBINED STATE TİPİ ======
import type { HairState } from "./hairStyles";
import type { PoseState } from "./poses";
import type { PropsState } from "./props";
import type { TimeWeatherState } from "./timeWeather";
import type { CameraEffectsState } from "./cameraEffects";
import type { VideoActionState } from "./videoActions";
import type { RenderStyleState } from "./renderStyles";
import type { NsfwState } from "./nsfw";

export interface ExtendedModulesState {
  hair: HairState;
  pose: PoseState;
  props: PropsState;
  timeWeather: TimeWeatherState;
  cameraEffects: CameraEffectsState;
  characterVariant: string;
  videoAction: VideoActionState;
  renderStyle: RenderStyleState;
  nsfw: NsfwState;
  enabledModules: Record<string, boolean>;
}

// ====== VARSAYILAN EXTENDED STATE ======
import { defaultHair } from "./hairStyles";
import { defaultPose } from "./poses";
import { defaultProps } from "./props";
import { defaultTimeWeather } from "./timeWeather";
import { defaultCameraEffects } from "./cameraEffects";
import { defaultVariant } from "./characterVariants";
import { defaultVideoAction } from "./videoActions";
import { defaultRenderStyle } from "./renderStyles";
import { defaultNsfwState } from "./nsfw";


export const defaultExtendedState: ExtendedModulesState = {
  hair: defaultHair,
  pose: defaultPose,
  props: defaultProps,
  timeWeather: defaultTimeWeather,
  cameraEffects: defaultCameraEffects,
  characterVariant: defaultVariant,
  videoAction: defaultVideoAction,
  renderStyle: defaultRenderStyle,
  nsfw: defaultNsfwState,
  enabledModules: {
    hair: true,
    pose: true,
    props: true,
    timeWeather: true,
    cameraEffects: true,
    characterVariant: true,
    videoAction: true,
    renderStyle: true,
    nsfw: true,
    wardrobe: true,
    emotion: true,
    director: true,
    environment: true,
  },
};

const EXTENDED_KEY = "lal-extended-v1";

export function loadExtendedModules(): ExtendedModulesState {
  if (typeof window === "undefined") return defaultExtendedState;
  try {
    const stored = localStorage.getItem(EXTENDED_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Merge with default state to ensure new properties (like nsfw) are initialized
      return { ...defaultExtendedState, ...parsed };
    }
  } catch {}
  return defaultExtendedState;
}

export function saveExtendedModules(state: ExtendedModulesState) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(EXTENDED_KEY, JSON.stringify(state));
  } catch {}
}

// ====== RANDOM EXTENDED STATE ======
import { randomHair } from "./hairStyles";
import { randomPose } from "./poses";
import { randomProps } from "./props";
import { randomTimeWeather } from "./timeWeather";
import { randomCameraEffects } from "./cameraEffects";
import { randomVariant } from "./characterVariants";
import { randomVideoAction } from "./videoActions";
import { randomRenderStyle } from "./renderStyles";
import { randomNsfwState } from "./nsfw";

export function randomExtendedState(): ExtendedModulesState {
  return {
    hair: randomHair(),
    pose: randomPose(),
    props: randomProps(),
    timeWeather: randomTimeWeather(),
    cameraEffects: randomCameraEffects(),
    characterVariant: Math.random() > 0.7 ? randomVariant() : "classic",
    videoAction: randomVideoAction(),
    renderStyle: randomRenderStyle(),
    nsfw: randomNsfwState(),
    enabledModules: defaultExtendedState.enabledModules,
  };
}

// ====== EXTENDED STATE TO PROMPT ======
import { hairToPrompt } from "./hairStyles";
import { poseToPrompt } from "./poses";
import { propsToPrompt } from "./props";
import { timeWeatherToPrompt } from "./timeWeather";
import { cameraEffectsToPrompt } from "./cameraEffects";
import { getVariant } from "./characterVariants";
import { videoActionToPrompt } from "./videoActions";
import { renderStyleToPrompt } from "./renderStyles";
import { nsfwToPrompt } from "./nsfw";

export function extendedStateToPrompt(state: ExtendedModulesState, kind: "image" | "video" = "image"): string {
  const parts: string[] = [];
  
  // Character variant
  if (state.enabledModules.characterVariant && state.characterVariant !== "classic") {
    const variant = getVariant(state.characterVariant);
    if (variant) parts.push(variant.prompt);
  }
  
  // Hair
  if (state.enabledModules.hair) {
    const hairPrompt = hairToPrompt(state.hair);
    if (hairPrompt) parts.push(hairPrompt);
  }
  
  // Pose
  if (state.enabledModules.pose) {
    const posePrompt = poseToPrompt(state.pose);
    if (posePrompt) parts.push(posePrompt);
  }
  
  // Props
  if (state.enabledModules.props) {
    const propsPrompt = propsToPrompt(state.props);
    if (propsPrompt) parts.push(propsPrompt);
  }
  
  // Time & Weather
  if (state.enabledModules.timeWeather) {
    const timePrompt = timeWeatherToPrompt(state.timeWeather);
    if (timePrompt) parts.push(timePrompt);
  }
  
  // Camera Effects
  if (state.enabledModules.cameraEffects) {
    const cameraPrompt = cameraEffectsToPrompt(state.cameraEffects);
    if (cameraPrompt) parts.push(cameraPrompt);
  }

  // Video Actions
  if (kind === "video" && state.enabledModules.videoAction) {
    const videoPrompt = videoActionToPrompt(state.videoAction);
    if (videoPrompt) parts.push(videoPrompt);
  }

  // Render Style
  if (state.enabledModules.renderStyle) {
    const renderPrompt = renderStyleToPrompt(state.renderStyle);
    if (renderPrompt) parts.push(renderPrompt);
  }

  // NSFW Module
  if (state.enabledModules.nsfw) {
    const nsfwPrompt = nsfwToPrompt(state.nsfw);
    if (nsfwPrompt) parts.push(nsfwPrompt);
  }
  
  return parts.join(", ");
}
