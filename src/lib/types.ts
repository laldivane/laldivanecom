/**
 * LAL DIVANE PROMPT ENGINE - VERİ TİPLERİ
 * 
 * Bu dosya, uygulama genelinde kullanılan veri yapılarını (interface/type) tanımlar.
 * "Clean Code" prensiplerine uygun olarak her bölümün ne işe yaradığı belirtilmiştir.
 */

/**
 * LalPromptTemplate: Karakterin tüm özelliklerini içeren ana JSON şablonu.
 */
import { type SceneState, type Interaction, type Observer } from "./schemas/scene";

/**
 * LalPromptTemplate: Karakterin tüm özelliklerini içeren ana JSON şablonu.
 */
export type LalPromptTemplate = {
  version: string;
  
  // Scene-Oriented Control (v3.0)
  scene: SceneState;
  interaction: Interaction;
  observer: Observer;

  // Çekim ayarları (Legacy & Hybrid)
  shot: {
    type: string;
    framing: string;
    pose: string;
    lens: string;
    composition: string;
    aspect_ratio: string;
  };

  // Karakterin temel kimlik bilgileri
  character: {
    name: string;
    age: string;
    origin: string;
    presence: string;
    archetype: string;
  };

  // Fiziksel özellikler ve kıyafet detayları
  physical_traits: {
    face: {
      left_side: {
        signature: string; // Karakterin imza izi (yanık/yara)
        texture: string;   // İz dokusu (mat, parlak, kadife vb.)
        gore: boolean;     // Kan/şiddet düzeyi (genelde false tutulur)
      };
      right_side: {
        signature: string;
        texture: string;
        skin_tone: string;
        detail: string;
      };
    };
    eyes: {
      color: string;
      detail: string;
      gaze: string;
    };
    hair: {
      length: string;
      color: string;
      streaks: string;
    };
    skin_and_hands: {
      tattoos: {
        style: string;
        motifs: string;
        placement: string;
      };
      fingers: string;
      nails: string;
    };
    legs: {
      shape: string;
      texture: string;
      detail: string;
    };
    breasts: string;
    hips: string;
    outfit: {
      top: {
        type: string;
        embroidery: string;
        accents: string;
      };
      dress: {
        base_material: string;
        layers: string;
        hem: string;
        effects: string;
        slit: string;
      };
      footwear: {
        type: string;
        details: string[];
      };
    };
    headphones?: {
      type: string;
      detail: string;
      action: string;
    };
  };

  // Ortam ve atmosfer ayarları
  environment: {
    id?: string;
    name?: string;
    setting: string;
    elements: string[];
    atmosphere: string;
  };

  // Işıklandırma tasarımı
  lighting: {
    style: string;
    contrast: string;
  };

  // Yeni Kompozisyon Ayarları (v2.5)
  pose_and_camera?: {
    pose: string;
    camera_angle: string;
    framing: string;
    position: string;
  };

  // Teknik render ve estetik ayarlar
  style_render: {
    aesthetic: string;
    engine: string;
    resolution: string;
    post_processing: string[];
  };

  // Yeni Özellikler: Duygu ve Sahne Yönetimi
  emotion?: string;       // Emotion Matrix'ten gelen anahtar (melankolik, ofkeli vb.)
  director?: {
    position: string;     // Karakterin kadrajdaki yeri
    angle: string;        // Kamera açısı
    lightingSource: string; // Işık kaynağı yönü
    proportion: string;    // Çekim ölçeği (full body, portrait vb.)
  };
  enabledModules?: Record<string, boolean>;
};
