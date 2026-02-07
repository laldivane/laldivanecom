/**
 * LAL DIVANE - GÜVENLİ VERİ ERİŞİMİ (SAFE GET)
 * 
 * Bu yardımcı modül, derinlemesine mallanmış (nested) JSON nesnelerinden 
 * hata almadan veriyi çekmeyi ve tip dönüşümü yapmayı sağlar.
 */

type PathSeg = string | number;

/**
 * walk: Belirtilen yol (path) boyunca nesne içinde gezinir.
 */
function walk(root: any, path: PathSeg[]) {
  let cur = root;
  for (const k of path) {
    if (cur == null) return undefined;
    cur = cur[k as any];
  }
  return cur;
}

/**
 * getStr: Verilen yoldaki değeri metin (string) olarak döner.
 */
export function getStr(root: any, path: PathSeg[], fallback = ""): string {
  const v = walk(root, path);
  if (typeof v === "string") return v;
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  return fallback;
}

/**
 * getNum: Verilen yoldaki değeri sayı (number) olarak döner.
 */
export function getNum(root: any, path: PathSeg[], fallback = 0): number {
  const v = walk(root, path);
  if (typeof v === "number") return v;
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

/**
 * getBool: Verilen yoldaki değeri mantıksal (boolean) olarak döner.
 */
export function getBool(root: any, path: PathSeg[], fallback = false): boolean {
  const v = walk(root, path);
  if (typeof v === "boolean") return v;
  if (v === "true") return true;
  if (v === "false") return false;
  return fallback;
}

/**
 * getArrStr: Verilen yoldaki dizi içindeki tüm elemanları metne dönüştürerek döner.
 */
export function getArrStr(root: any, path: PathSeg[], fallback: string[] = []): string[] {
  const v = walk(root, path);
  if (!Array.isArray(v)) return fallback;
  return v.map((x) => (typeof x === "string" ? x : String(x)));
}
