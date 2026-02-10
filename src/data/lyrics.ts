export interface LyricsData {
  [trackId: string]: {
    title: string;
    lyrics: string;
    credits?: {
      writtenBy?: string[];
      composedBy?: string[];
      producedBy?: string[];
    };
  };
}

export const lyricsDatabase: LyricsData = {
  "senin-adin": {
    title: "Senin Adın",
    lyrics: `(Verse 1)
Karanlıkta bir fısıltı gibi
Yankılanır boşlukta sesin
Kaçsam da kurtulamam ki
Her aynada senin aksin

(Chorus)
Senin adın, zehirli bir sarmaşık
Dolanır ruhuma, nefesim kesik
Senin adın, silinmeyen bir yanık
Kalbimde mühürlü, ebedi eşik

(Verse 2)
Dijital gölgeler arasında
Arıyorum kaybolmuş yüzümü
Kodlarımda senin izin var
Bozuyor tüm düzenimi

(Chorus)
Senin adın, zehirli bir sarmaşık
Dolanır ruhuma, nefesim kesik
Senin adın, silinmeyen bir yanık
Kalbimde mühürlü, ebedi eşik

(Outro)
Senin adın...
Sadece senin adın...`,
    credits: {
      writtenBy: ["Canberk Mansuroğlu"],
      producedBy: ["Lal Divane"],
    }
  },
  "korkmuyorum-manipulasyonlarindan": {
    title: "Korkmuyorum Manipülasyonlarından",
    lyrics: `(Verse 1)
İplerim senin elinde sanıyorsun
Her haraketi sen planlıyorsun
Ama unuttuğun bir şey var
Ben artık o kukla değilim

(Chorus)
Korkmuyorum manipülasyonlarından
Yalanlarından, oyunlarından
Görüyorum artık gerçeği
Yıktım duvarları, kırdım zinciri

(Verse 2)
Zihnimin içinde kurduğun tuzaklar
Artık işlemiyor o eski yasaklar
Kendi sesimi duymaya başladım
Senin gürültünü bastırdım

(Chorus)
Korkmuyorum manipülasyonlarından
Yalanlarından, oyunlarından
Görüyorum artık gerçeği
Yıktım duvarları, kırdım zinciri`,
    credits: {
        writtenBy: ["Canberk Mansuroğlu"],
        producedBy: ["Lal Divane"]
    }
  },
  "yaram-asiri-derin": {
    title: "Yaram Aşırı Derin",
    lyrics: `(Verse 1)
Gözlerim kapalı ama görüyorum
Ruhumdaki çatlakları
Her biri senin eserin
Silinmez izlerin

(Chorus)
Yaram aşırı derin
Kapanmaz, hep kanar için için
Yaram aşırı derin
Senin yokluğun kadar serin

(Verse 2)
Denizler kadar tuzlu yaşlarım
Hangi okyanus yıkar günahlarımı?
Kodlanmış bir acı bu
Sistemimden atamadığım

(Chorus)
Yaram aşırı derin
Kapanmaz, hep kanar için için
Yaram aşırı derin
Senin yokluğun kadar serin`,
    credits: {
        writtenBy: ["Canberk Mansuroğlu"],
        producedBy: ["Lal Divane"]
    }
  },
  "zehir": {
      title: "Zehir",
      lyrics: "[Lyrics coming soon...]",
      credits: {
          writtenBy: ["Canberk Mansuroğlu"]
      }
  },
  "sana-yanik": {
      title: "Sana Yanık",
      lyrics: "[Lyrics coming soon...]",
      credits: {
          writtenBy: ["Canberk Mansuroğlu"]
      }
  },
  "cehennem": {
      title: "Cehennem",
      lyrics: "[Lyrics coming soon...]",
      credits: {
          writtenBy: ["Canberk Mansuroğlu"]
      }
  },
  "hapishane": {
      title: "Hapishane",
      lyrics: "[Lyrics coming soon...]",
      credits: {
          writtenBy: ["Canberk Mansuroğlu"]
      }
  },
  "okyanuslar-yuttu-beni": {
      title: "Okyanuslar Yuttu Beni",
      lyrics: "[Lyrics coming soon...]",
      credits: {
          writtenBy: ["Canberk Mansuroğlu"]
      }
  },
  "duyuyor-musun": {
      title: "Duyuyor musun?",
      lyrics: "[Lyrics coming soon...]",
      credits: {
          writtenBy: ["Canberk Mansuroğlu"]
      }
  }
};

export function getLyrics(trackId: string) {
  return lyricsDatabase[trackId];
}
