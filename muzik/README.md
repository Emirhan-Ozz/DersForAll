# Müzik · 4 ders (Umutcan)

https://emirhan-ozz.github.io/DersForAll/muzik/

| Kod | Ders | Kaynak |
|---|---|---|
| Pİ101 | Piyano I | Selmin & Enver Tufan, *Piyano Metodu 1* · Czerny, *Op. 599* |
| ÇEL101 | Viyolonsel I | Marian Międlar, *Szkoła na wiolonczelę I* (Lehçe; açıklamalar Türkçeye çevrildi) |
| MÜZ1017 | Müzik Teorisi | Bona *Müzik Teorisi* notları (Batı + Türk müziği) · *Solfège des Solfèges 1A* |
| MÜZ1021 | Antik Uygarlıklar ve Müzik | *Uygarlık Tarihi I* (AÖF TAR113U) |

Şimdilik yalnız **anlatım** var; Test sekmesi "yakında" sayfası gösterir.

## Yapı

```
index.html            üst bar (ders seçici + Anlatım / Test), betik sırası
assets/app.js         motor: yönlendirme, İçindekiler, bloklar, porte ve klavye çizimi
assets/music.js       nota matematiği (Piano notes sitesinden)
assets/style.css      Starter düzeni (EnesDers'ten)
assets/theme.css      lacivert #0D0F54 tema, müzik bileşenleri
assets/fonts/         Noto Music (müzik sembolleri)
data/<ders>.js        App.course({...}): konular ve önemli noktalar
kit-init.js           arama dizini
```

Blok türleri: `p`, `h`, `ul`, `ol`, `steps`, `table`, `defs` (terim–tanım), `sym` (müzik sembolü kartları), `trap`, `tip`, `note`, `music` (kitapta geçen müzik bilgisi), `ext` (kitapta olmayan ek bilgi), `staff` (porte: `clef` treble/bass/grand, `notes`), `kb` (klavye), `svg`.

Kaynak PDF'ler telif nedeniyle repoya eklenmedi.
