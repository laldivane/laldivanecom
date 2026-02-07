/**
 * LAL DIVANE - FIREBASE VERİ TABANI İŞLEMLERİ (FIRESTORE)
 * 
 * Bu modül, kullanıcı verilerinin (şablonlar, gardırop, ortamlar) 
 * bulut üzerinde (Firestore) saklanmasını ve senkronize edilmesini sağlar.
 */

import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
  collection,
  query,
  getDocs,
  orderBy,
} from "firebase/firestore";
import { db, auth } from "./firebase";
import type { OutfitItem } from "./wardrobe";
import type { EnvironmentItem } from "./environments";
import type { AssetItem } from "./assets";

/**
 * getUserId: Mevcut kullanıcının benzersiz kimliğini döner. 
 * Oturum açılmamışsa "anonymous" döner.
 */
function getUserId(): string {
  return auth.currentUser?.uid || "anonymous";
}

/**
 * cleanData: Firestore'un desteklemediği 'undefined' değerleri 
 * nesne içinden özyinelemeli (recursive) olarak temizler.
 */
function cleanData(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(v => cleanData(v));
  } else if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => [k, cleanData(v)])
    );
  }
  return obj;
}

// ========== ŞABLON İŞLEMLERİ (TEMPLATES) ==========

export async function saveTemplateToCloud(template: any): Promise<void> {
  const userId = getUserId();
  await setDoc(doc(db, "users", userId, "data", "template"), cleanData({
    content: template,
    updatedAt: serverTimestamp(),
  }));
}

export async function loadTemplateFromCloud(): Promise<any | null> {
  const userId = getUserId();
  const docRef = doc(db, "users", userId, "data", "template");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().content;
  }
  return null;
}

// ========== PRESET İŞLEMLERİ (PRESETS) ==========

export async function savePresetsToCloud(presets: any[]): Promise<void> {
  const userId = getUserId();
  await setDoc(doc(db, "users", userId, "data", "presets"), cleanData({
    items: presets,
    updatedAt: serverTimestamp(),
  }));
}

export async function loadPresetsFromCloud(): Promise<any[]> {
  const userId = getUserId();
  const docRef = doc(db, "users", userId, "data", "presets");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().items || [];
  }
  return [];
}

// ========== GARDIROP İŞLEMLERİ (WARDROBE) ==========

export async function saveWardrobeToCloud(items: OutfitItem[]): Promise<void> {
  const userId = getUserId();
  await setDoc(doc(db, "users", userId, "data", "wardrobe"), cleanData({
    items,
    updatedAt: serverTimestamp(),
  }));
}

export async function loadWardrobeFromCloud(): Promise<OutfitItem[]> {
  const userId = getUserId();
  const docRef = doc(db, "users", userId, "data", "wardrobe");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().items || [];
  }
  return [];
}

// ========== ORTAM İŞLEMLERİ (ENVIRONMENTS) ==========

export async function saveEnvironmentsToCloud(items: EnvironmentItem[]): Promise<void> {
  const userId = getUserId();
  await setDoc(doc(db, "users", userId, "data", "environments"), cleanData({
    items,
    updatedAt: serverTimestamp(),
  }));
}

export async function loadEnvironmentsFromCloud(): Promise<EnvironmentItem[]> {
  const userId = getUserId();
  const docRef = doc(db, "users", userId, "data", "environments");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().items || [];
  }
  return [];
}

// ========== VARLIK İŞLEMLERİ (ASSETS) ==========

export async function saveAssetsToCloud(items: AssetItem[]): Promise<void> {
  const userId = getUserId();
  // Firestore limitlerine takılmamak için base64 verilerini temizle, sadece URL'leri tut.
  const itemsWithoutBase64 = items.map((item) => {
    const { thumbnail, ...rest } = item;
    return {
      ...rest,
      thumbnail: thumbnail?.startsWith("http") ? thumbnail : null,
    };
  });

  await setDoc(doc(db, "users", userId, "data", "assets"), cleanData({
    items: itemsWithoutBase64,
    updatedAt: serverTimestamp(),
  }));
}

export async function loadAssetsFromCloud(): Promise<AssetItem[]> {
  const userId = getUserId();
  const docRef = doc(db, "users", userId, "data", "assets");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data().items || [];
  }
  return [];
}

// ========== GÖRSEL YÜKLEME (CLOUDINARY) ==========
import { uploadToCloudinary } from "./cloudinary";

export async function uploadAssetImage(
  assetId: string,
  file: File
): Promise<{ url: string; publicId: string }> {
  try {
    const response = await uploadToCloudinary(file);
    return {
      url: response.secure_url,
      publicId: response.public_id
    };
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw error;
  }
}

// ========== ART COVERS (PUBLIC) ==========

export interface ArtCover {
  id: string;
  title?: string;
  imageUrl: string;
  createdAt?: any;
}

export async function loadArtCoversFromCloud(): Promise<ArtCover[]> {
  try {
    const q = query(collection(db, "art_covers"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as ArtCover));
  } catch (error) {
    console.error("Error loading art covers:", error);
    return [];
  }
}

// ========== YARDIMCI ARAÇLAR ==========

export interface SyncStatus {
  lastSynced: Date | null;
  isSyncing: boolean;
  error: string | null;
}

/**
 * isFirebaseConfigured: Firebase yapılandırmasının geçerli olup olmadığını kontrol eder.
 */
export function isFirebaseConfigured(): boolean {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  return !!projectId && projectId !== "your-project-id";
}
