/**
 * LAL DIVANE - DOSYA İNDİRME YARDIMCISI (DOWNLOAD HELPER)
 * 
 * Bu modül, tarayıcı tarafında dinamik olarak dosya oluşturup 
 * kullanıcının bilgisayarına indirilmesini sağlar.
 */

/**
 * downloadText: Metin bazlı bir içeriği dosya olarak indirir.
 * 
 * @param filename - Kaydedilecek dosyanın adı (örn: "prompt.txt")
 * @param content - Dosya içeriği
 * @param mime - Dosya türü (MIME type)
 */
export function downloadText(filename: string, content: string, mime = "text/plain") {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
