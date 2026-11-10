/* Sudis — klasik (açık uçlu) sorular
   PRACTICE: konu başına 3 alıştırma sorusu. BANK: rastgele test havuzu (alıştırmadakilerle aynı soru yok).
   Puanlama: her soru 10 puan. keys = cevapta aranan kavramlar; 'any' içindeki ifadelerden biri geçerse
   o kavramın puanı (w) verilir. İfadeler kök olarak yazılır (ör. 'kaldır' → kaldırıldı, kaldırılması).
   Türkçe karakter ve büyük/küçük harf farkı önemsizdir. Toplam 10'u geçerse 10'a kırpılır. */

window.TEST_CONF = { perSubject: 2, pointsPerQ: 10 };

window.PRACTICE = {
  goc: [
    { id: 'gA1', q: 'Yabancılar politikasının beş evresini yıllarıyla birlikte sıralayınız.',
      a: '1) 1955–1973 işçi alımı evresi (konuk işçi dönemi), 2) 1973–1979 yabancı istihdamının konsolidasyonu, 3) 1979–1981 entegrasyon kavramları evresi, 4) 1981–1990 yabancılar politikasında dönüşüm, 5) 1990–2000 yoğunlaşan göç ve yeni göç durumu.',
      keys: [
        { k: '1. evre: işçi alımı (1955–1973)', w: 2, any: ['işçi alım', 'konuk işçi', '1955'] },
        { k: '2. evre: konsolidasyon (1973–1979)', w: 2, any: ['konsolid', 'istikrar'] },
        { k: '3. evre: entegrasyon kavramları (1979–1981)', w: 2, any: ['entegrasyon kavram', 'entegrasyon evre', 'uyum kavram'] },
        { k: '4. evre: dönüşüm (1981–1990)', w: 2, any: ['dönüşüm', 'değişim'] },
        { k: '5. evre: yeni göç durumu (1990–2000)', w: 2, any: ['yeni göç', 'yoğunlaşan göç', 'yoğun göç', '2000'] }
      ] },
    { id: 'gA2', q: '1964\'te Türkiye ile yapılan işçi alım anlaşmasında ne değişti? Bu değişiklik neden önemlidir?',
      a: 'Türkiye anlaşmasındaki kalışın iki yılla sınırlandırılması 1964\'te Almanya\'nın acil işgücü ihtiyacı yüzünden kaldırıldı. Bu, rotasyon ilkesinden uzaklaşma ve Türk işgücü göçmenlerinin fiilî (kalıcı) göçüne doğru atılan ilk belirleyici adımdır.',
      keys: [
        { k: 'İki yıllık kalış sınırı', w: 3, any: ['iki yıl', '2 yıl', 'iki senelik', '2 senelik'] },
        { k: 'Sınır kaldırıldı', w: 2, any: ['kaldır', 'iptal', 'son ver'] },
        { k: 'Rotasyon ilkesinden uzaklaşma', w: 3, any: ['rotasyon', 'dönüşümlü'] },
        { k: 'Fiilî / kalıcı göçe ilk adım', w: 2, any: ['fiili göç', 'kalıcı', 'yerleş', 'ilk adım'] }
      ] },
    { id: 'gA3', q: 'Aussiedler kimdir ve neden yabancı sayılmazlar?',
      a: 'Aussiedler, Doğu ve Güneydoğu Avrupa\'dan (SSCB, Polonya, Romanya) gelen Alman kökenli kişilerdir. Soyları nedeniyle Anayasa\'nın 116. maddesiyle güvence altına alınmış Alman vatandaşlığı hakkına sahip oldukları için yabancı sayılmazlar; yine de toplumsal ve kültürel olarak gerçek bir göç durumu yaşarlar.',
      keys: [
        { k: 'Doğu / Güneydoğu Avrupa\'dan gelirler', w: 2, any: ['doğu avrupa', 'güneydoğu avrupa', 'sovyet', 'polonya', 'romanya', 'rusya'] },
        { k: 'Alman soyundan / kökenli', w: 3, any: ['soy', 'alman köken', 'kökeni alman', 'etnik alman', 'alman asıllı'] },
        { k: 'Anayasa md. 116', w: 3, any: ['116'] },
        { k: 'Vatandaşlık hakkı', w: 2, any: ['vatandaş'] }
      ] }
  ],
  edebiyat: [
    { id: 'eA1', q: 'Kültürlerarası edebiyatın ›Alman edebiyatı kadar eski‹ olduğu nasıl temellendirilir? Bugünkü hareketteki yenilik nedir?',
      a: 'Alman edebiyatı hiçbir zaman saf bir monokültür olmadı: Thomasin von Circlaria kendini Almancanın İtalyan konuğu sayar, Canetti 8 yaşında öğrendiği Almancada konuk olduğunu söyler, doğuştan Fransız Chamisso Alman ulusal şairi olur; Fontane, Kafka, Celan gibi örnekler de vardır. Yeni olan, dil tercihinin ötesinde: göçle doğan, kültürleri aşan ve çok dilli bir edebiyat hareketidir.',
      keys: [
        { k: 'Saf monokültür hiç olmadı', w: 2, any: ['monokültür', 'tek kültür', 'saf değil', 'saf bir'] },
        { k: 'Tarihsel örnek (Canetti, Chamisso, Thomasin, Fontane…)', w: 4, any: ['canetti', 'chamisso', 'thomasin', 'circlaria', 'fontane', 'kafka', 'celan', 'rose ausländer', 'jurek becker'] },
        { k: 'Yenilik: dil tercihinin ötesinde, çok dilli hareket', w: 4, any: ['çok dil', 'dil tercih', 'kültürleri aş', 'göç'] }
      ] },
    { id: 'eA2', q: 'Seslerin topografyasındaki 2. ses ile 3. sesi karşılaştırınız.',
      a: '2. ses: azınlıklardan gelip yaratıcılık aracı olarak Almancayı seçen yazarlar (Pazarkaya, Özdamar, Dikmen, Biondi, Chiellino). 3. ses: Almancayı okulda ve toplumsal çevrede anadil gibi konuşan ama aile ortamında konuşmayan genç yazarlar (Zehra Çırak, Zafer Şenocak, Feridun Zaimoğlu).',
      keys: [
        { k: '2. ses: Almancayı seçenler', w: 3, any: ['seçe', 'seçti', 'seçmiş', 'seçim', 'tercih'] },
        { k: '2. ses: azınlıklardan gelir', w: 1, any: ['azınlık', 'göçmen'] },
        { k: '3. ses: okulda / toplumda öğrenilen Almanca', w: 3, any: ['okul', 'toplum', 'sosyalizasyon'] },
        { k: '3. ses: ailede konuşulmaz', w: 3, any: ['aile', 'evde'] }
      ] },
    { id: 'eA3', q: 'Aras Ören ile Güney Dal\'ın 70\'lerdeki edebî yaklaşımlarını karşılaştırınız.',
      a: 'Aras Ören, Alman ve Türk toplumlarının gerçekliklerini yeniden ölçecek, gerçekliğe dayalı bir dil aradı; Berlin Üçlemesi (Was will Niyazi in der Naunynstraße? vb.) tipleri sentetik bir düzeye yükseltir. Güney Dal ise ironik mesafesini korudu: İş Sürgünleri / Wenn Ali die Glocken läuten hört ve bir tabutun taşınmasını anlatan Europastraße 5.',
      keys: [
        { k: 'Ören: gerçekliğe dayalı dil', w: 3, any: ['gerçeklik', 'gerçekçi', 'gerçeğe'] },
        { k: 'Ören: Berlin Üçlemesi', w: 2, any: ['berlin', 'niyazi', 'üçleme', 'naunyn'] },
        { k: 'Dal: ironik mesafe', w: 3, any: ['ironi', 'alay'] },
        { k: 'Dal: eserleri', w: 2, any: ['europastra', 'avrupa yolu', 'iş sürgün', 'ali', 'tabut', 'ölü', 'ölün', 'cenaze'] }
      ] }
  ],
  siyaset: [
    { id: 'sA1', q: 'Marshall\'ın vatandaşlık kavramına dayanan yaklaşım ve ›Avrupa ikilemi‹ ne anlama gelir?',
      a: 'Thomas Marshall\'a göre entegrasyon vatandaşlığın (citizenship) genişletilmesiyle sağlanır. ›Avrupa ikilemi‹, savaştan sonra Avrupa\'nın inşasına işçi olarak katkıda bulunan sakinlerin vatandaşlık bakımından görünmez kalması, yani demokratik haklardan yoksun bırakılmasıdır.',
      keys: [
        { k: 'Vatandaşlığın genişletilmesi', w: 3, any: ['genişlet', 'yaygınlaş'] },
        { k: 'Entegrasyon', w: 2, any: ['entegrasyon', 'uyum'] },
        { k: 'Görünmezlik', w: 3, any: ['görünmez', 'görmezden'] },
        { k: 'Demokratik / siyasi haklardan yoksunluk', w: 2, any: ['demokratik', 'siyasi hak', 'hak', 'hakk', 'yoksun'] }
      ] },
    { id: 'sA2', q: 'Yabancılara yerel oy hakkı tanıyan Hamburg ve Schleswig-Holstein düzenlemelerini karşılaştırınız. Sonuçları ne oldu?',
      a: 'Hamburg (1 Şubat 1989) şehirde 8 yıldan uzun yaşayan yabancılara ilçe düzeyinde seçme-seçilme hakkı verdi (180.000\'den 90.000 kişi). Schleswig-Holstein (14 Şubat 1989) 5 yıl şartı ve mütekabiliyet ilkesiyle yalnızca 6 ülkenin (Danimarka, İsveç, Hollanda, İrlanda, Norveç, İsviçre) vatandaşlarına tanıdı. Federal Anayasa Mahkemesi önce ihtiyati tedbirle durdurdu, 1990\'da da oy hakkının Alman olmayı gerektirdiğine karar verdi.',
      keys: [
        { k: 'Hamburg: 8 yıl', w: 2, any: ['8 yıl', 'sekiz yıl'] },
        { k: 'Schleswig-Holstein: 5 yıl', w: 2, any: ['5 yıl', 'beş yıl'] },
        { k: 'Schleswig-Holstein: mütekabiliyet / belirli ülkeler', w: 2, any: ['mütekabil', 'karşılıklı', 'danimarka', 'isveç', 'hollanda'] },
        { k: 'Hamburg: ilçe düzeyi, tüm yabancılar', w: 1, any: ['ilçe', 'tüm yabancı', 'bütün yabancı'] },
        { k: 'Anayasa Mahkemesi durdurdu', w: 3, any: ['anayasa mahkeme', 'karlsruhe', 'durdur', 'iptal', 'askıya'] }
      ] },
    { id: 'sA3', q: 'Sesselmeier\'e göre ›yabancı‹ ile ›göçmen‹ kavramları arasındaki fark nedir? Metinde ›yabancı‹ ile kimler kastedilir?',
      a: 'Yabancı, Almanya\'da yaşayan ama Alman vatandaşı olmayan herkestir. Göç etmiş kişilerin 2. ve 3. kuşağı yabancıdır ama göçmen değildir; vatandaşlığa geçmiş göçmenler ise yabancı değildir. Aussiedler, sığınmacılar ve iç savaş mültecileri hariç tutulduğu için metinde ›yabancı‹ misafir işçiler ve onların torunlarıdır.',
      keys: [
        { k: 'Yabancı = Alman vatandaşı olmayan', w: 3, any: ['vatandaşı olmayan', 'vatandaşlığı olmayan', 'vatandaşlığına sahip olmayan', 'vatandaş değil'] },
        { k: '2./3. kuşak yabancı ama göçmen değil', w: 3, any: ['kuşak', 'kuşağ', 'nesil', 'nesl'] },
        { k: 'Vatandaşlığa geçen göçmen yabancı değil', w: 2, any: ['vatandaşlığa geç', 'vatandaş ol'] },
        { k: 'Kastedilen: misafir işçiler ve torunları', w: 2, any: ['misafir işçi', 'konuk işçi', 'torun'] }
      ] }
  ]
};

window.BANK = {
  goc: [
    { id: 'g1', q: 'İşçi alım anlaşmalarını hangi taraf başlatmıştır? Gerekçeleri nelerdir?',
      a: 'Müzakereler federal hükümetten değil, işçi gönderen ülkelerin girişiminden kaynaklandı. Gerekçeleri eksik istihdam ve işsizlik ile döviz temini, ayrıca halkın göç isteğiydi. Almanya ise ancak Alman şirketlerinin çıkarı örgütlü alımı zorunlu kıldığında kabul etti.',
      keys: [
        { k: 'İşçi gönderen ülkeler başlattı', w: 4, any: ['gönderen', 'göç veren', 'işçi veren', 'kaynak ülke', 'diğer ülke'] },
        { k: 'İşsizlik / eksik istihdam', w: 2, any: ['işsiz', 'eksik istihdam', 'istihdam'] },
        { k: 'Döviz temini', w: 2, any: ['döviz', 'para'] },
        { k: 'Almanya: şirket / işveren çıkarı', w: 2, any: ['şirket', 'işveren', 'işgücü açığ', 'işgücü ihtiya'] }
      ] },
    { id: 'g2', q: 'Almanya\'nın işçi alım anlaşması imzaladığı ülkeleri yıllarıyla yazınız.',
      a: '1955 İtalya, 1960 Yunanistan ve İspanya, 1961 Türkiye, 1963 Fas, 1964 Portekiz, 1965 Tunus, 1968 Yugoslavya.',
      keys: [
        { k: '1955 İtalya', w: 2, any: ['italya'] },
        { k: '1960 Yunanistan, İspanya', w: 2, any: ['yunanistan', 'ispanya'] },
        { k: '1961 Türkiye', w: 2, any: ['1961'] },
        { k: '1963 Fas, 1964 Portekiz, 1965 Tunus', w: 2, any: ['fas', 'portekiz', 'tunus'] },
        { k: '1968 Yugoslavya', w: 2, any: ['yugoslavya', '1968'] }
      ] },
    { id: 'g3', q: '1938 Yabancılar Polisi Yönetmeliği ile 1965 Yabancılar Kanunu arasındaki temel fark nedir?',
      a: '1938 yönetmeliğinde oturma izni için ölçüt yabancının kişisel ›layıklığı‹ydı. 1965 Yabancılar Kanunu ise bağlayıcı ölçüt olarak ›kamu yararını‹ koydu; böylece oturma izni büyük ölçüde makamların takdirine bırakıldı.',
      keys: [
        { k: '1938: kişisel layıklık', w: 4, any: ['layık', 'liyakat', 'kişisel'] },
        { k: '1965: kamu yararı', w: 4, any: ['kamu yarar', 'kamu çıkar', 'kamu menfaat'] },
        { k: 'Makamların takdiri', w: 2, any: ['takdir', 'makam', 'idare'] }
      ] },
    { id: 'g4', q: 'Türkiye ile yapılan işçi alım anlaşmasını İtalya, İspanya gibi ülkelerle yapılanlardan ayıran özellikler nelerdir?',
      a: 'Yalnızca Türkiye ve Fas anlaşmaları kalışı iki yılla sınırlıyordu; yalnızca Türk ve Tunus anlaşmaları sağlık denetimi öngörüyordu; Türkiye anlaşmasında (Fas, Tunus, Yugoslavya gibi) aile birleşimi bölümü yoktu. İki yıl sınırı 1964\'te kaldırıldı.',
      keys: [
        { k: 'Kalış iki yılla sınırlı', w: 3, any: ['iki yıl', '2 yıl'] },
        { k: 'Sağlık denetimi', w: 3, any: ['sağlık', 'muayene', 'tıbbi'] },
        { k: 'Aile birleşimi bölümü yok', w: 3, any: ['aile birleş', 'aile'] },
        { k: '1964\'te sınırın kaldırılması', w: 1, any: ['1964'] }
      ] },
    { id: 'g5', q: '›Zincirleme göç‹ nedir? Nasıl ortaya çıkmıştır?',
      a: '1956–1973 arasında gelenlerin yaklaşık %54\'ü alım komisyonları olmadan geldi. İşverenler işi öğrenmiş çalışanlarını tutmak için onları yurttaşlarını da getirmeye teşvik etti; yeni gelenler de akraba ve tanıdıklarının yakınına yerleşmek istedi. Bu iki etken, göçün kendi kendini besleyen bir zincir hâline gelmesine yol açtı.',
      keys: [
        { k: 'Komisyon olmadan gelme (%54)', w: 2, any: ['komisyon', '54', 'ikinci yol', 'vize'] },
        { k: 'İşverenlerin teşviki', w: 3, any: ['işveren', 'teşvik'] },
        { k: 'Akraba / tanıdık yanına yerleşme', w: 3, any: ['akraba', 'tanıdık', 'yakın', 'hemşeri', 'arkadaş'] },
        { k: 'Birbirini çeken zincir', w: 2, any: ['zincir', 'birbirini', 'getir'] }
      ] },
    { id: 'g6', q: 'İşçi alımının durdurulmasına (Anwerbestopp) giden süreci açıklayınız.',
      a: 'Okullarda yabancı öğrencilerin 35.000\'den 159.000\'e çıkması gibi gelişmeler ›yabancılaşma‹ (Überfremdung) korkusu doğurdu. Hükümet daha 1972\'de, petrol krizinden önce, sınırlamayı öngördü ve Haziran 1973\'te Yabancı İstihdamı Eylem Programı çıktı. 1973\'te Köln Ford fabrikasındaki sendika onaysız Türk işçi grevleri gözetimi sıkılaştırdı. 23 Kasım 1973\'te işçi alımı durduruldu.',
      keys: [
        { k: '1972\'de, petrol krizinden önce planlandı', w: 2, any: ['1972', 'petrol kriz'] },
        { k: 'Haziran 1973 Eylem Programı', w: 2, any: ['eylem program'] },
        { k: 'Yabancılaşma (Überfremdung) korkusu', w: 2, any: ['yabancılaş', 'überfremdung', 'ueberfremdung', 'okul'] },
        { k: 'Köln Ford grevleri', w: 2, any: ['ford', 'grev'] },
        { k: '23 Kasım 1973 durdurma', w: 2, any: ['23 kasım', 'kasım 1973', 'anwerbestopp', 'durdur'] }
      ] },
    { id: 'g7', q: 'Konsolidasyon evresinin (1973–1979) üç temel düşüncesi nelerdir?',
      a: 'Göçün sınırlandırılması, geri dönüşün teşviki ve süreli (geçici) toplumsal entegrasyon.',
      keys: [
        { k: 'Göçün sınırlandırılması', w: 3, any: ['sınırla', 'kısıtla', 'azalt'] },
        { k: 'Geri dönüşün teşviki', w: 3, any: ['geri dönüş', 'dönüş'] },
        { k: 'Entegrasyon', w: 2, any: ['entegrasyon', 'uyum'] },
        { k: 'Süreli (geçici)', w: 2, any: ['süreli', 'geçici', 'sınırlı süre'] }
      ] },
    { id: 'g8', q: 'Kühn Memorandumu (1979) neyi önermiştir ve sonucu ne olmuştur?',
      a: 'Almanya\'nın fiilî bir göç ülkesi olarak tanınmasını ve ›süreli entegrasyon‹dan vazgeçilmesini önerdi; okul öncesi ve okul entegrasyonu, gençlere iş ve eğitime engelsiz erişim, gençlere vatandaşlık seçeneği ve yerel seçimlerde oy hakkı istedi. SPD/FDP hükümeti işgücü piyasası önceliğinde ısrar ettiği için doğrudan bir etkisi olmadı.',
      keys: [
        { k: 'Fiilî göç ülkesi olarak tanınma', w: 3, any: ['göç ülkesi', 'göçmen ülkesi'] },
        { k: 'Süreli entegrasyondan vazgeçme / kalıcı uyum', w: 2, any: ['kalıcı', 'vazgeç', 'süreli'] },
        { k: 'Vatandaşlık / oy hakkı / eğitim önerileri', w: 2, any: ['vatandaş', 'oy', 'seçim', 'okul', 'eğitim'] },
        { k: 'Doğrudan etkisi olmadı', w: 3, any: ['etkisi olmadı', 'etki', 'uygulanmadı', 'sonuçsuz', 'kabul görmedi', 'başarısız'] }
      ] },
    { id: 'g9', q: '1980\'lerde geri dönüşü teşvik için hangi önlemler alındı ve sonuç ne oldu?',
      a: 'Temmuz 1982\'de geri dönüş primi, emeklilik sigortasındaki çalışan primlerinin beklemesiz iadesi ve danışmanlık getirildi; Kasım 1983\'te Geri Dönüş İstekliliğini Teşvik Kanunu çıktı. Primler amacına ulaşmadı: Türk, Yugoslav ve Yunan işçiler aile getirmeye devam etti, yabancı nüfus 4,5 milyondan 4,8 milyona çıktı.',
      keys: [
        { k: 'Geri dönüş primi', w: 3, any: ['prim', 'para', 'teşvik'] },
        { k: 'Emeklilik primlerinin iadesi', w: 2, any: ['emeklilik', 'iade'] },
        { k: '1983 kanunu', w: 2, any: ['1983', 'kanun', 'yasa'] },
        { k: 'Amacına ulaşmadı, aile getirme sürdü', w: 3, any: ['ulaşmadı', 'başarısız', 'aile', 'arttı', 'işe yaramadı'] }
      ] },
    { id: 'g10', q: '1990 Yabancılar Kanunu neden bir ›göç sınırlama kanunu‹ olarak nitelendirilir?',
      a: 'Kanun gençlere vatandaşlığı kolaylaştırmayı amaçlasa da süreli oturma izinlerinin uzatılmasında idarenin takdir alanını genişletti, yeterli konutun kanıtlanmasını şart koştu ve sınır dışı etme hükümlerini sertleştirdi. Ayrıca rotasyon ilkesine dayalı yeni bir konuk işçi statüsü yarattı.',
      keys: [
        { k: 'İdarenin takdir alanı genişledi', w: 3, any: ['takdir', 'idare'] },
        { k: 'Yeterli konut şartı', w: 3, any: ['konut', 'ev'] },
        { k: 'Sınır dışı etme sertleşti', w: 3, any: ['sınır dışı', 'sınırdışı', 'deport'] },
        { k: 'Gençlere vatandaşlık kolaylığı / yeni konuk işçi statüsü', w: 1, any: ['genç', 'rotasyon', 'konuk işçi'] }
      ] },
    { id: 'g11', q: 'Aralık 1992 sığınma uzlaşmasının özünü ve sonuçlarını açıklayınız.',
      a: 'CDU/CSU, FDP ve SPD anlaştı: ›zulüm olmayan‹ ülkelerden ya da ›güvenli üçüncü ülkeler‹ üzerinden gelenlere sığınma hakkı tanınmayacak, yardımlar kısılacaktı; savaş ve iç savaş mültecileri için ayrı süreç kuruldu. Anayasa değişikliği 26 Mayıs 1993\'te kabul edildi, 1 Temmuz 1993\'te yürürlüğe girdi. Sığınmacı sayısı 440.000\'den (1992) 320.000\'e (1993), 1995\'te 128.000\'e düştü.',
      keys: [
        { k: 'Güvenli üçüncü ülke / zulüm olmayan ülke', w: 4, any: ['güvenli', 'üçüncü ülke', 'zulüm'] },
        { k: 'Anayasa değişikliği (1993)', w: 2, any: ['anayasa', '1993'] },
        { k: 'Sığınmacı sayısı düştü', w: 2, any: ['düşt', 'düşe', 'düşü', 'azal', '440000', '320000', '128000'] },
        { k: 'İç savaş mültecilerine ayrı süreç / yardım kısıntısı', w: 2, any: ['iç savaş', 'savaş', 'yardım'] }
      ] },
    { id: 'g12', q: 'Göç sürecinde ›geri dönüş yönelimi‹ göçmenler için hangi işlevi görmüştür?',
      a: 'Geri dönüş yönelimi, fiilî göç sürecinde giderek gerçekdışı hâle gelse de göçmenler arasındaki sadakati güvenceye aldı ve etnik kimliği istikrara kavuşturdu. Göçten doğan sorunları aşma stratejilerinden biri olduğu için anlamlı, hatta yaşamsal derecede gerekliydi.',
      keys: [
        { k: 'Sadakati güvenceye aldı', w: 3, any: ['sadakat', 'bağlılık', 'dayanışma'] },
        { k: 'Etnik kimliği istikrara kavuşturdu', w: 3, any: ['kimlik'] },
        { k: 'Sorunları aşma stratejisi', w: 2, any: ['strateji', 'başa çık', 'aşma', 'yöntem'] },
        { k: 'Giderek gerçekdışı oldu', w: 2, any: ['gerçek dışı', 'gerçekdışı', 'ertele', 'hayal'] }
      ] },
    { id: 'g13', q: 'Yazara göre yabancı düşmanlığının asıl nedeni nedir? Hoyerswerda olaylarının iki yönlü önemini açıklayınız.',
      a: 'Reddin ve saldırganlığın asıl nedeni, süregelen sosyoekonomik kriz karşısında nüfusun önemli kesimlerinin yönelim kaybıdır; yabancı düşmanlığının yabancılardan çok yerlilerle ilgisi vardır. Hoyerswerda (1991 sonbaharı) şiddetin ilk kez halkın bir kesiminde açık onay bulduğu yerdir; ama aynı zamanda geniş bir dayanışma dalgası da başlatmıştır.',
      keys: [
        { k: 'Sosyoekonomik kriz / yönelim kaybı', w: 3, any: ['yönelim', 'kriz', 'sosyoekonomik', 'ekonomik'] },
        { k: 'Yabancılardan çok yerlilerle ilgili', w: 2, any: ['yerli'] },
        { k: 'Şiddet ilk kez açık onay buldu', w: 3, any: ['onay', 'destek', 'alkış'] },
        { k: 'Dayanışma dalgası başlattı', w: 2, any: ['dayanışma', 'karşı hareket'] }
      ] }
  ],
  edebiyat: [
    { id: 'e1', q: 'Kabul eden toplum ile gelenler arasındaki ›temel uyuşmazlık‹ nedir ve yorum için neden önemlidir?',
      a: 'Geçmiş ve gelecek farklı kültür alanlarına atandığı için mekân ve zaman dengesini yitirir. Kabul eden toplum mekânın önceliğini vurgular ve gelenlerin geçmişini yadsır; gelenler ise kendi ön tarihlerinin sürekliliğini, yani zamanın önceliğini öne koyar. Bu uyuşmazlığı tanımak eserleri yorumlamanın önkoşuludur.',
      keys: [
        { k: 'Kabul eden toplum: mekânın önceliği', w: 4, any: ['mekan', 'yer', 'mekân'] },
        { k: 'Gelenler: zamanın önceliği', w: 4, any: ['zaman', 'süreklilik'] },
        { k: 'Geçmişin yadsınması / yorumun önkoşulu', w: 2, any: ['geçmiş', 'ön tarih', 'yadsı', 'önkoşul', 'yorum'] }
      ] },
    { id: 'e2', q: 'Kültürlerarası edebiyatı doğuran göç dalgalarını sıralayınız.',
      a: 'Akdeniz bölgesinden göç (1955\'ten itibaren), Doğu Avrupa\'dan (1968\'den itibaren), Latin Amerika\'dan (1973\'ten itibaren), 70\'ler boyunca Lübnan, Suriye, İran gibi Yakın Doğu ülkelerinden siyasi sürgün ve 80\'lerin ikinci yarısında Doğu/Güneydoğu Avrupa\'dan Alman kökenli ailelerin geri dönüşü (repatriasyon).',
      keys: [
        { k: 'Akdeniz (1955)', w: 2, any: ['akdeniz', 'italya', 'türkiye'] },
        { k: 'Doğu Avrupa (1968)', w: 2, any: ['doğu avrupa'] },
        { k: 'Latin Amerika (1973)', w: 2, any: ['latin'] },
        { k: 'Yakın Doğu\'dan siyasi sürgün', w: 2, any: ['yakın doğu', 'lübnan', 'suriye', 'iran', 'sürgün'] },
        { k: 'Alman kökenlilerin repatriasyonu', w: 2, any: ['repatri', 'geri dönüş', 'alman köken', 'aussiedler'] }
      ] },
    { id: 'e3', q: 'Anadilde yazılan edebiyat bu hareket için neden merkezî kabul edilir?',
      a: 'Çünkü Federal Cumhuriyet\'teki kültürlerarası edebiyatı anadilde yazanlar kurdu; ilk eserleriyle anadilde yazan yazarlar bütün gelişmenin temel eğilimini belirledi. Yalnızca Almanca kısma bakmak bakışı daraltır ve yanlış değerlendirmelere yol açar; bu yazarlar tanındıkça algı düzelir ve Almanca önceliğinden kurtulur.',
      keys: [
        { k: 'Hareketi anadilde yazanlar kurdu', w: 4, any: ['kurdu', 'kuran', 'kurucu', 'başlat', 'temelini', 'öncü'] },
        { k: 'İlk eserler temel eğilimi belirledi', w: 3, any: ['eğilim', 'ilk eser', 'belirle', 'yön ver'] },
        { k: 'Yalnız Almancaya bakmak bakışı daraltır', w: 3, any: ['daral', 'dar', 'yanlış', 'almanca öncel', 'almanca'] }
      ] },
    { id: 'e4', q: 'Siyasi sürgündeki yazarların polifon sesinin yerini belirlemek neden zordur?',
      a: 'Sürgün eserleri kural olarak yazarların bulunduğu ülkede olması şart olmayan yayınevlerinde çıkar. Ayrıca menşe ülkedeki muhalefetle iç hesaplaşma olarak tasarlandıkları için nadiren çevrilirler; Almanca okurları doğrudan ilgilendirmeyen siyasi olaylara ilgi azdır.',
      keys: [
        { k: 'Başka ülkelerdeki yayınevleri', w: 4, any: ['yayınev', 'yayın', 'basıl'] },
        { k: 'Menşe ülkedeki muhalefetle iç hesaplaşma', w: 3, any: ['muhalefet', 'hesaplaş', 'kendi ülke', 'menşe'] },
        { k: 'Nadiren çevrilir / okur ilgisi az', w: 3, any: ['çevril', 'çeviri', 'tercüme', 'ilgi'] }
      ] },
    { id: 'e5', q: 'Kitabın yaklaşımında bu edebiyatta ›birleştirici bir homojenlik‹ aramak neden yanlıştır?',
      a: 'Çünkü bu edebiyat, analitik bir yönteme dönüştürülemeyen harici bir yardımcı yapıdır; sesler birbirinden çok farklı deneyimlerden gelir. Bu nedenle cilt, Almancalığı hareketin temel tetikleyicisi sayan 80\'lerin Germanistiğinden farklı bir yol izler ve köken kültürü, dil seçeneği ve temaları farklılaştırarak kronolojik ele alır.',
      keys: [
        { k: 'Harici yardımcı yapı', w: 4, any: ['yardımcı yapı', 'harici', 'dış yapı'] },
        { k: 'Analitik yönteme dönüştürülemez', w: 3, any: ['analitik', 'yöntem'] },
        { k: '80\'lerin Germanistiğinden (Almancalık) farklı yol', w: 3, any: ['germanist', 'almancalı', 'almanca', 'farklı'] }
      ] },
    { id: 'e6', q: 'Kültürlerarası edebiyatta tercih edilen temalardan en az dördünü yazınız.',
      a: 'Göçe/sürgüne/repatriasyona yol açan kişisel ön tarihle hesaplaşma; yabancı diyara yolculuk; yabancı kültür, toplum ve dille karşılaşma; yerliler ile yabancılar arasında eşit haklara dayalı yeni kimlik projesi; çalışma yaşamına ve gündelik yaşama katılım; menşe ülkedeki siyasi gelişmeyle hesaplaşma; kendi varlığının cinsiyete özgü algılanması.',
      keys: [
        { k: 'Kişisel ön tarihle hesaplaşma', w: 2.5, any: ['ön tarih', 'geçmiş', 'kişisel'] },
        { k: 'Yabancı diyara yolculuk', w: 2.5, any: ['yolculuk', 'yolcu'] },
        { k: 'Yabancı kültür/dille karşılaşma', w: 2.5, any: ['karşılaş'] },
        { k: 'Yeni, eşit haklı kimlik projesi', w: 2.5, any: ['kimlik', 'eşit hak'] },
        { k: 'Çalışma ve gündelik yaşama katılım', w: 2.5, any: ['çalışma', 'gündelik', 'iş hayat', 'katılım'] },
        { k: 'Menşe ülkedeki siyasi gelişme', w: 2.5, any: ['siyasi', 'politik'] },
        { k: 'Cinsiyete özgü algı', w: 2.5, any: ['cinsiyet', 'kadın'] }
      ] },
    { id: 'e7', q: 'Türk göçmen edebiyatı neden bir ›sırat köprüsü‹ne benzetilir?',
      a: 'Çünkü ne Türkiye\'deki edebiyatın doğrudan bir uzantısıdır ne de basitçe Alman edebiyatının bir parçasıdır; belli bir bağımsızlık gösterir ve edebiyat tarihsel meşruiyetini borçlu olduğu iki edebî kültür arasında durur.',
      keys: [
        { k: 'Türkiye\'deki edebiyatın uzantısı değil', w: 3, any: ['uzantı', 'türk edebiyat', 'yurttaki', 'türkiye'] },
        { k: 'Alman edebiyatının parçası değil', w: 3, any: ['alman edebiyat', 'parça'] },
        { k: 'İki kültür arasında durur', w: 2, any: ['arasında', 'iki kültür', 'iki edebi'] },
        { k: 'Bağımsızlık', w: 2, any: ['bağımsız', 'özerk'] }
      ] },
    { id: 'e8', q: 'Bekir Yıldız\'ın ›Alman Ekmeği‹ kitabındaki Almanya tablosunu değerlendiriniz.',
      a: 'Eski konuk işçi Yıldız büyük ölçüde olumsuz bir Almanya tablosu çizer: yozlaşmış Avrupa\'da Türk işçi Asya\'yı, yani saflığı ve el değmemiş doğayı temsil eder, aynı zamanda devrimci fikirlerin taşıyıcısıdır. Metinler yaban ellerdeki zor yaşamı gösterir, ama siyah-beyaz tabloları ve kolay kurulmuş çifte bakışı rahatsız edicidir.',
      keys: [
        { k: 'Olumsuz Almanya tablosu', w: 3, any: ['olumsuz', 'negatif', 'kötü'] },
        { k: 'Yozlaşmış Avrupa', w: 2, any: ['yozlaş', 'çürü', 'bozul'] },
        { k: 'Türk işçi: Asya, saflık, devrimci', w: 2, any: ['asya', 'saf', 'saflı', 'devrim'] },
        { k: 'Siyah-beyaz, basit çifte bakış (eleştiri)', w: 3, any: ['siyah', 'beyaz', 'çifte bakış', 'basit', 'rahatsız'] }
      ] },
    { id: 'e9', q: 'Yüksel Pazarkaya\'yı ilk dönem yazarlarından ayıran özellik nedir? Hangi eseri neden önemlidir?',
      a: 'Pazarkaya göç sürecine işçi olarak değil, göçten önce de Almanya\'da yaşayıp okuyan angaje bir entelektüel olarak katıldı. 1960–1968 arası yazdığı ve Irrwege / Koca Sapmalar (1985) kitabında toplanan şiirleri, Almanya\'daki Türk göçü üzerine ilk edebî ifadeler sayılır ve belgesel değer taşır.',
      keys: [
        { k: 'İşçi değil, angaje entelektüel', w: 4, any: ['entelektüel', 'aydın', 'öğrenci', 'okudu', 'işçi değil'] },
        { k: 'Irrwege / Koca Sapmalar', w: 3, any: ['irrwege', 'koca sapma'] },
        { k: 'Göç üzerine ilk edebî ifadeler', w: 3, any: ['ilk', 'belgesel'] }
      ] },
    { id: 'e10', q: 'Haldun Taner\'in ›Hexenzauber‹ öyküsünün konusu nedir ve neden bir dönüm noktası sayılır?',
      a: 'Mektup biçiminde yazılmış hicivli öykünün kahramanı, deneyimli bir düzenbaz olan yasa dışı bir konuk işçidir. Bir ayı postuna girip Berlin Kurfürstendamm\'da turistik atraksiyon olur ve böylece topluma ›entegre‹ olur. Kılık değiştirmesi hem yabancı çevrenin aşırılıklarının hem de kendi karakterinin maskesini düşürür; bu yüzden Türk göçünün edebî sürecinde dönüm noktasıdır.',
      keys: [
        { k: 'Ayı postuna giren işçi', w: 3, any: ['ayı'] },
        { k: 'Yasa dışı konuk işçi', w: 2, any: ['yasa dışı', 'kaçak', 'kaçağ', 'illegal'] },
        { k: 'Hiciv / mektup biçimi', w: 2, any: ['hiciv', 'mizah', 'mektup', 'ironi'] },
        { k: 'Maske hem çevreyi hem kendini açığa vurur', w: 3, any: ['maske', 'kılık'] }
      ] },
    { id: 'e11', q: '80\'lerde Almanca yazan genç Türk yazar kuşağının özelliklerini açıklayınız.',
      a: 'Büyük ölçüde Almanya\'da doğmuş ya da büyümüşlerdi, Almanca yazıyor ve ilk metinlerini dergi ve antolojilerde yayımlıyorlardı. Tercih ettikleri biçim lirik şiirdi. Temaları kimlik kaybı, yurtsuzluk, parçalanmışlık ve kararsızlıktı. Atılımlarını Alman yayınevlerine değil ›Förderzentrum Jugend schreibt‹ gibi derneklere borçluydular. Örnek: Şenocak, Kemal Kurt, Aktoprak, Zehra Çırak, Alev Tekinay.',
      keys: [
        { k: 'Almanya\'da büyüdüler, Almanca yazdılar', w: 2, any: ['almanca', 'almanya da doğ', 'büyü'] },
        { k: 'Lirik şiir', w: 2, any: ['şiir', 'lirik'] },
        { k: 'Temalar: kimlik kaybı, yurtsuzluk…', w: 3, any: ['kimlik', 'yurtsuz', 'parçalan', 'kararsız', 'aidiyet'] },
        { k: 'Dernekler (Förderzentrum Jugend schreibt)', w: 1, any: ['dernek', 'förderzentrum', 'jugend', 'antoloji', 'dergi'] },
        { k: 'Örnek yazar', w: 2, any: ['şenocak', 'çırak', 'tekinay', 'kemal kurt', 'aktoprak'] }
      ] },
    { id: 'e12', q: 'PoLiKunst nedir ve Türk yazarlarla ilişkisi nasıldır?',
      a: 'PoLiKunst, Çok Uluslu Edebiyat ve Sanat Derneği\'dir (1980–1987). Alman vesayeti olmaksızın yabancı sanatçıların hakları ve aralarındaki iletişim için mücadele etti; dayanışması en çok ayrımcılığa uğrayan Türklere yoğunlaştı ve ilk yıllığın adı ›Ein Gastarbeiter ist ein Türke‹ (1983) oldu. Buna rağmen Şinasi Dikmen dışında Türk yazarların çoğu etkinliklerinden uzak kaldı.',
      keys: [
        { k: 'Çok uluslu edebiyat ve sanat derneği', w: 3, any: ['çok uluslu', 'dernek', 'birlik'] },
        { k: '1980–1987', w: 1, any: ['1980', '1987'] },
        { k: 'Alman vesayeti olmadan haklar', w: 2, any: ['vesayet', 'hak', 'hakk', 'hakla', 'iletişim'] },
        { k: '›Ein Gastarbeiter ist ein Türke‹ yıllığı', w: 2, any: ['gastarbeiter', 'türke', 'yıllık'] },
        { k: 'Dikmen dışında Türk yazarlar uzak kaldı', w: 2, any: ['dikmen', 'uzak'] }
      ] },
    { id: 'e13', q: '90\'larda Türk göçmen edebiyatında görülen ›kendiyle karşılaşma‹ dönüşümünü açıklayınız.',
      a: 'Bu evrede bir ›Ben-genişlemesi‹, benmerkezci bir perspektif öne çıkar: yabanla karşılaşmadan yaban ellerde kendiyle karşılaşmaya dönülür (Ören, Kurt, Şenocak). Bu, yıllardır süren kültürel aracılık beklentisini daha da sorunlu hâle getirir. Özgen Ergin\'in ›Zigeuner‹ öyküsündeki ›Siz Çingene misiniz? – Maalesef hayır. Ben Türk\'üm.‹ diyaloğu kültürlerarası pedagojinin açmazını gösterir.',
      keys: [
        { k: 'Ben-genişlemesi / benmerkezci perspektif', w: 3, any: ['ben', 'benmerkez', 'bireysel', 'öznel'] },
        { k: 'Yabandan kendiyle karşılaşmaya dönüş', w: 3, any: ['kendi', 'kendisiyle'] },
        { k: 'Kültürel aracılık beklentisi sorunlu', w: 2, any: ['aracı', 'arabulucu'] },
        { k: 'Örnek: Özgen Ergin, ›Zigeuner‹', w: 2, any: ['zigeuner', 'çingene', 'ergin', 'şenocak', 'ören', 'kemal kurt'] }
      ] }
  ],
  siyaset: [
    { id: 's1', q: '1955 İtalya anlaşmasında İtalya\'nın ve Almanya\'nın çıkarları nelerdi?',
      a: 'İtalya göçmenlerine Avrupa\'da yeni işgücü piyasaları arıyor, ödemeler dengesi ve dış ticaret açığını Almanya\'da mevsimlik işçi çalıştırarak kapatmak istiyordu. Almanya ise yerli işgücünü genişletmek ücret maliyetlerini artıracağı için işgücü piyasasını açmaya yöneldi; işçi alım tekelini Alman tarafında tutmak için alımın bir işçi alım komisyonuyla yapılmasını istedi.',
      keys: [
        { k: 'İtalya: yeni işgücü piyasaları', w: 2, any: ['işgücü piyasa', 'iş piyasa', 'pazar', 'iş bulma', 'işsiz'] },
        { k: 'İtalya: ödemeler dengesi / dış ticaret açığı', w: 3, any: ['ödemeler', 'açık', 'döviz', 'ticaret'] },
        { k: 'Almanya: işgücü ihtiyacı, ücret maliyeti', w: 3, any: ['ücret', 'maliyet', 'işgücü', 'işçi ihtiya'] },
        { k: 'Almanya: alım komisyonu / tekel', w: 2, any: ['komisyon', 'tekel', 'kontrol', 'denetim'] }
      ] },
    { id: 's2', q: 'Sonraki anlaşmalar göçü daha güçlü etkilese de 1955 İtalya anlaşmasının önemi nerede yatar?',
      a: 'İşgücü piyasasının açılmasını kalıcı biçimde sıradanlaştırmasında: yabancıların kabulünü ilk kez her seferinde meşrulaştırılması gereken istisnai bir durum olmaktan çıkardı, giriş, ulaşım ve seçim usullerini rasyonelleştirdi ve işgücü kaynaklarının açılması için bir emsal oluşturdu.',
      keys: [
        { k: 'İşgücü piyasasının açılmasını sıradanlaştırdı', w: 4, any: ['sıradan', 'olağan', 'normal', 'kalıcı'] },
        { k: 'Yabancı kabulünü istisna olmaktan çıkardı', w: 3, any: ['istisna'] },
        { k: 'Emsal / model oluşturdu', w: 3, any: ['emsal', 'örnek', 'model', 'rasyonel'] }
      ] },
    { id: 's3', q: 'Roma Anlaşması (AET, 1958) yabancı işçiler açısından ne getirmiştir?',
      a: 'Üye ülke işçilerinin serbest dolaşımı yolunda bir adımdı; istihdam, ücret ve çalışma koşullarında uyrukluğa dayalı farklı muameleyi yasakladı (md. 48–49). Başta nitelikli işçilerle sınırlıydı; 1961 ve 1964\'te genişledi, 1968\'de tam serbest dolaşım ilan edildi. En çok İtalyanların işine yaradı.',
      keys: [
        { k: 'Serbest dolaşım', w: 4, any: ['serbest dolaşım', 'dolaşım serbest', 'serbest'] },
        { k: 'Uyrukluğa dayalı ayrımcılık yasağı / eşitlik', w: 3, any: ['ayrım', 'eşit', 'farklı muamele'] },
        { k: '1968\'de tam serbest dolaşım', w: 2, any: ['1968'] },
        { k: 'En çok İtalyanlara yaradı', w: 1, any: ['italyan'] }
      ] },
    { id: 's4', q: 'Federal Hükümet\'in 1977\'deki temel tutumu neden ›çözülemez bir çelişki‹ içeriyordu?',
      a: 'Hükümet bir yandan Almanya\'nın bir göç ülkesi olmadığını söylerken öte yandan yabancı işçilerin kalıcı olarak yerleştiğini kabul etti. Yani yabancı nüfusu entegre etmek isterken ülkeyi göç ülkesi saymadı; bu bağlayıcı olmayan entegrasyonun ifadesi ›süreli entegrasyon‹ oldu.',
      keys: [
        { k: '›Almanya göç ülkesi değil‹', w: 4, any: ['göç ülkesi', 'göçmen ülkesi'] },
        { k: 'Ama yabancılar kalıcı yerleşti / entegre edilmek istendi', w: 3, any: ['kalıcı', 'yerleş', 'entegre', 'entegrasyon'] },
        { k: '›Süreli entegrasyon‹', w: 3, any: ['süreli', 'geçici'] }
      ] },
    { id: 's5', q: '1990 Yabancılar Kanunu\'nun üç temel özelliğini açıklayınız.',
      a: '26 Nisan 1990\'da kabul edilip 1 Ocak 1991\'de yürürlüğe giren kanunun özellikleri: 1) Kısıtlayıcı göç politikası: giriş ve ikamet için oturma izni gerekir (§3); AB dışı yabancılar yalnızca istisnai durumlarda izin alır. 2) İşgücü piyasasına seçici erişim: çalışma izni için oturma izni önkoşuldur ve 1973 durdurma kuralına bağlıdır. 3) Siyasi haklarda eşitsizlik: yabancıların siyasi faaliyeti kısıtlanabilir (§37), bazı temel haklar yalnızca Almanlara aittir.',
      keys: [
        { k: 'Kısıtlayıcı göç / oturma izni şartı', w: 3, any: ['oturma izni', 'kısıtla', 'sınırla', 'ikamet'] },
        { k: 'Seçici işgücü erişimi / çalışma izni', w: 3, any: ['çalışma izni', 'seçici', 'işgücü', 'iş piyasa'] },
        { k: 'Eşit olmayan siyasi haklar', w: 3, any: ['siyasi', 'politik'] },
        { k: '1990 kabul / 1991 yürürlük', w: 1, any: ['1990', '1991', '26 nisan'] }
      ] },
    { id: 's6', q: 'Anayasa\'da yalnızca Almanlara tanınan haklarla yabancılara da tanınan temel hakları yazınız.',
      a: 'Yalnız Almanlara: toplanma özgürlüğü (md. 8), örgütlenme/sendikalaşma (md. 9), serbest dolaşım (md. 11), meslek özgürlüğü (md. 12), kamu görevlerine erişim (md. 33). Yabancılara da: genel hareket özgürlüğü (md. 2 f. 1) ve kanun önünde eşitlik (md. 3).',
      keys: [
        { k: 'Toplanma özgürlüğü (md. 8)', w: 1.5, any: ['toplanma'] },
        { k: 'Örgütlenme / sendikalaşma (md. 9)', w: 1.5, any: ['örgütlen', 'sendika', 'dernek'] },
        { k: 'Serbest dolaşım (md. 11)', w: 1.5, any: ['dolaşım', 'seyahat'] },
        { k: 'Meslek özgürlüğü (md. 12)', w: 1.5, any: ['meslek'] },
        { k: 'Kamu görevi (md. 33)', w: 1, any: ['kamu'] },
        { k: 'Yabancılara: genel hareket özgürlüğü (md. 2)', w: 1.5, any: ['hareket', 'kişilik'] },
        { k: 'Yabancılara: kanun önünde eşitlik (md. 3)', w: 1.5, any: ['eşitlik', 'eşit'] }
      ] },
    { id: 's7', q: 'Yabancılar parlamentoları ve yabancılar danışma kurulları neden başarısız oldu?',
      a: 'Her ikisi de yalnızca danışma işlevi gördü; kararları asıl meclisler için bağlayıcı değildi (›karar vericilerin demokratik vicdanını rahatlatma‹). Danışma kurulu üyelerinin çoğu belediyelerce belirlendiği için meşruiyetleri yetersizdi ve yabancı nüfusla geri bildirim bağı yoktu. Temel neden: karar vericiler ›yabancılar sorununu‹ uzun süre siyasi değil salt sosyoekonomik bir sorun olarak gördü.',
      keys: [
        { k: 'Yalnızca danışma, kararlar bağlayıcı değil', w: 3, any: ['danışma', 'bağlayıcı', 'yetki'] },
        { k: 'Meşruiyet eksikliği (belediyece atanma)', w: 3, any: ['meşru', 'belediye', 'atan', 'seçilme'] },
        { k: 'Sorun salt sosyoekonomik görüldü', w: 4, any: ['sosyoekonomik', 'ekonomik', 'siyasi değil'] }
      ] },
    { id: 's8', q: 'Federal Anayasa Mahkemesi yabancıların yerel oy hakkı konusunda nasıl karar verdi ve ne önerdi?',
      a: 'İkinci Senato, Birlik partilerinden 224 milletvekilinin başvurusu üzerine önce ihtiyati tedbirle uygulamayı durdurdu, 31 Ekim 1990\'da da oybirliğiyle karar verdi: devlet egemenliğinin tek sahibi Alman devlet halkıdır (Staatsvolk), oy hakkı Alman olmayı gerektirir. Çözüm olarak göçmenlerin siyasi talepleri için vatandaşlığa geçişi önerdi.',
      keys: [
        { k: 'Egemenliğin sahibi devlet halkı (Staatsvolk)', w: 3, any: ['devlet halk', 'staatsvolk', 'halk'] },
        { k: 'Oy hakkı Alman olmayı gerektirir', w: 3, any: ['alman ol', 'alman vatandaş', 'almanlara', 'almanlar'] },
        { k: 'Çözüm: vatandaşlığa geçiş', w: 3, any: ['vatandaşlığa geç', 'vatandaş ol', 'vatandaşlık'] },
        { k: 'Kanunlar durduruldu / anayasaya aykırı', w: 1, any: ['iptal', 'durdur', 'aykırı', 'askı'] }
      ] },
    { id: 's9', q: 'Maastricht Antlaşması (1992) yerel oy hakkı konusunda ne değiştirdi ve hangi yeni sorunu doğurdu?',
      a: 'Üye devletlerden 1997\'ye kadar tüm AB vatandaşlarına yerel seçimlerde oy hakkı tanımalarını istedi; Almanya Anayasa\'nın 28. maddesinin 1. fıkrasına bunu ekledi. Sorun: AB\'liler giderek yerlilere yaklaşırken AB dışı ülkelerin vatandaşları, özellikle büyük Türk topluluğu, dışarıda kaldı ve göreli yoksunluk yaşadı.',
      keys: [
        { k: 'AB vatandaşlarına yerel oy hakkı', w: 3, any: ['ab vatandaş', 'avrupa birliği', 'ab li', 'abli', 'ab'] },
        { k: 'Anayasa md. 28', w: 2, any: ['28'] },
        { k: 'AB dışı (Türkler) dışarıda kaldı', w: 3, any: ['ab dışı', 'türk', 'dışarı', 'dışla'] },
        { k: 'Göreli yoksunluk / yeni farklılıklar', w: 2, any: ['yoksun', 'farklılık', 'eşitsiz'] }
      ] },
    { id: 's10', q: '1990 Yabancılar Kanunu vatandaşlığa geçişte hangi kolaylıkları getirdi? Bu kolaylıkların sınırı neydi?',
      a: '§85: 16–23 yaş arası gençler için asgari ikamet 10 yıldan 8 yıla indi (6 yıl okul), aile içinde tek tip vatandaşlıktan vazgeçildi. §86: birinci kuşak 15 yıl sonra kolaylaştırılmış geçiş hakkı kazandı. Harç 5000 DM\'ye varan tutardan 100 DM\'ye düştü. 1993\'te bu kural hakkı kesin yasal hakka dönüştü. Sınırı: önceki vatandaşlıktan vazgeçme zorunluluğu.',
      keys: [
        { k: '16–23 yaş gençler', w: 2, any: ['16', '23', 'genç'] },
        { k: 'İkamet 10 → 8 yıl', w: 2, any: ['8 yıl', 'sekiz yıl', '8'] },
        { k: 'Birinci kuşak 15 yıl', w: 2, any: ['15', 'birinci kuşak', 'ilk kuşak'] },
        { k: 'Harç 100 DM', w: 2, any: ['100', 'harç', 'ücret'] },
        { k: 'Sınır: önceki vatandaşlıktan vazgeçme', w: 2, any: ['vazgeç', 'çifte', 'bırak'] }
      ] },
    { id: 's11', q: '7 Mayıs 1999\'da kabul edilen vatandaşlık reformunun getirdiklerini açıklayınız.',
      a: 'Schröder\'in kırmızı-yeşil koalisyonunun önergesi SPD, Yeşiller ve FDP oylarıyla kabul edildi. 1 Ocak 2000\'den itibaren Almanya\'da doğan yabancı çocuklar otomatik olarak Alman vatandaşı olur, iki pasaportla büyüyebilir ve 23 yaşına kadar bir vatandaşlık için karar vermek zorundadır. Genel çifte vatandaşlık ise CDU/CSU protestoları üzerine kanundan çıkarıldı.',
      keys: [
        { k: 'Almanya\'da doğan çocuklar otomatik vatandaş (jus soli)', w: 3, any: ['doğan', 'doğum', 'jus soli', 'otomatik'] },
        { k: 'İki pasaport', w: 2, any: ['iki pasaport', 'pasaport', 'çifte'] },
        { k: '23 yaşına kadar karar', w: 3, any: ['23'] },
        { k: 'Genel çifte vatandaşlık çıkarıldı', w: 2, any: ['çıkarıl', 'kabul edilmedi', 'reddedil'] }
      ] },
    { id: 's12', q: 'Tamamlayıcılık ve ikame hipotezlerini açıklayınız. Hangisi ne zaman geçerlidir?',
      a: 'Tamamlayıcılık: yabancılar yerlilerin üstlenmek istemediği ya da üstlenemediği işleri doldurur, böylece yerli işgücüne ihtiyacı artırır. İkame: yabancılar yerlilerin işini elinden alır, yerlilere talep azalır. Ampirik olarak ikisi de görülür: işgücü piyasası iyiyken yabancılar tamamlayıcı, işsizlik arttıkça ikame edici rol oynar.',
      keys: [
        { k: 'Tamamlayıcılık', w: 2, any: ['tamamla'] },
        { k: 'Yerlilerin istemediği işleri doldurur', w: 2, any: ['istemedi', 'istemey', 'yapmadı', 'yapmak istemey', 'doldur'] },
        { k: 'İkame: yerlinin yerini alır', w: 3, any: ['ikame', 'yerini al', 'işini al', 'yerine geç'] },
        { k: 'Konjonktüre bağlı: iyi dönem tamamlayıcı, işsizlikte ikame', w: 3, any: ['işsizlik', 'konjonktür', 'kriz', 'durgun', 'ikisi de'] }
      ] },
    { id: 's13', q: 'Segmente (bölünmüş) işgücü piyasasında birincil ve ikincil bölümü karşılaştırınız.',
      a: 'Birincil bölüm yüksek ücret, iyi çalışma koşulları, yükselme şansı ve istikrarlı istihdam sunar. İkincil bölüm kötü çalışma koşulları, düşük ücret ve düşük istihdam istikrarıyla tanımlanır; yükselme yoktur, ›herkesin yapabileceği işler‹dir. İki bölüm birbirine az geçirgendir; belirli göçmen grupları beşeri sermayelerinden bağımsız olarak yalnızca ikincil bölüme girebilir.',
      keys: [
        { k: 'Birincil: yüksek ücret, iyi koşullar', w: 3, any: ['yüksek ücret', 'iyi', 'yüksek maaş'] },
        { k: 'İkincil: düşük ücret, kötü koşullar', w: 3, any: ['düşük', 'kötü'] },
        { k: 'İstikrar / yükselme farkı', w: 2, any: ['istikrar', 'yüksel', 'kariyer', 'güvence'] },
        { k: 'Göçmenler ikincil bölüme girer', w: 2, any: ['göçmen', 'yabancı'] }
      ] },
    { id: 's14', q: 'Yabancıların serbest çalışmaya yönelmesini açıklayan dört yön nelerdir?',
      a: '1) İşçi alımının durdurulması ve ardından gelen konsolidasyon (kalıp aile getirme), 2) işgücü talebinin azaldığı kötü konjonktür ve işsizlikten kaçış, 3) Alman çalışanlara kıyasla serbest çalışmadan gelen daha düşük gelirin daha kolay kabul edilmesi, 4) oturma izni ve yabancılar dairesi kısıtlamalarının kalkması gibi hukuki koşullar.',
      keys: [
        { k: 'İşçi alımının durdurulması / konsolidasyon', w: 2.5, any: ['durdur', 'anwerbestopp', '1973', 'konsolid'] },
        { k: 'Kötü konjonktür / işsizlik', w: 2.5, any: ['konjonktür', 'işsiz', 'kriz'] },
        { k: 'Daha düşük gelire razı olma', w: 2.5, any: ['düşük gelir', 'razı', 'az kazan', 'düşük kazan'] },
        { k: 'Hukuki koşullar (oturma izni)', w: 2.5, any: ['hukuk', 'yasal', 'oturma izni', 'izin'] }
      ] },
    { id: 's15', q: 'Yabancıların gelir ve yoksulluk durumunu Almanlarla karşılaştırınız (sayılarla).',
      a: '1995\'te yabancıların brüt geliri 3430 DM, Almanlarınki 4290 DM; eşdeğer hane geliri yabancılarda 1264 DM, Almanlarda 1665 DM. Göçmenlerde yoksulluk oranı (%50 eşiği) yaklaşık %30, ağır yoksulluk %17. Sosyal yardım alanlar 1995\'te Almanlarda %2,7, yabancılarda %5,5. Göçmenler dahil edilince Gini katsayısı 0,277\'den 0,281\'e çıkar.',
      keys: [
        { k: 'Brüt gelir farkı (3430 / 4290 DM)', w: 2, any: ['3430', '4290', 'brüt'] },
        { k: 'Eşdeğer hane geliri (1264 / 1665 DM)', w: 2, any: ['1264', '1665', 'eşdeğer'] },
        { k: 'Yoksulluk ~%30, ağır yoksulluk %17', w: 2, any: ['30', '17', 'yoksul'] },
        { k: 'Sosyal yardım %5,5 / %2,7', w: 2, any: ['5 5', '2 7', 'sosyal yardım'] },
        { k: 'Gini katsayısı artışı', w: 2, any: ['gini', '0 281', '281'] }
      ] }
  ]
};
