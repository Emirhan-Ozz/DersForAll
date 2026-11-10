# Vize Çalışma

5 ders için tek sitede vize çalışma: Tahıl–Baklagil–Yem Bitkileri, Kanatlı Hayvan Besleme, Hayvancılıkta Moleküler Genetik, Gıda Teknolojisi ve Gıda Güvenliği, Fide ve Fidancılık Tekniği.

Her dersin iki sekmesi var:

- **Genel Tekrar:** önemli noktalar listesi ve konu konu özetler.
- **Test:** 4 soru tipi
  - Çoktan seçmeli test: 2 deneme (25'er), büyük test (50), rastgele test (20–50 soru seçilebilir)
  - Boşluk doldurma + doğru/yanlış: 2 deneme + rastgele
  - Klasik (soru-cevap): 2 deneme + rastgele; cevabı yazıp anahtar noktalarla kendini puanlarsın
  - Uzun klasik vize: 4 soru, her soru bir konuyu tüm ayrıntısıyla ister (25'er puan)
  - Konu testleri (tüm tipler, anında kontrol)
  - Genetik: notlardaki 52 soruluk boşluk doldurma birebir

Her testte **Pratik** (anında kontrol) ve **Sınav** (sonda puan) modu var. Rastgele testler daha az görülen soruları öne alır.

## Yapı

```
index.html          tek sayfa
.nojekyll           GitHub Pages için
assets/style.css    koyu mavi tema (açık tema düğmesi var)
assets/app.js       motor: yönlendirme, testler, puanlama
data/<ders>.js      dersin özetleri ve soru bankası
```

Yeni ders eklemek: `data/` altına aynı yapıda bir dosya yaz, `index.html`'e `<script src="data/yeni.js">` satırını ekle.

Soru yazma yardımcıları (`App.Q`): `mc` (ilk şık doğru, site karıştırır), `tf`, `fill` (`____` boşluğu), `op` (klasik), `lg` (uzun klasik).

## Yerelde açmak

```
python -m http.server 8765
```

sonra tarayıcıda `http://localhost:8765`.

İçerik ders notlarından alınmıştır; notta olmayan konu eklenmemiştir. Fide ve Fidancılıkta daldırma, çelik ve büyüme düzenleyicileri finale kaldığı için yoktur.
