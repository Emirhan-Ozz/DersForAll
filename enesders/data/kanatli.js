(function () {
var Q = App.Q, mc = Q.mc, tf = Q.tf, fill = Q.fill, op = Q.op, lg = Q.lg;

App.course({
  id: 'kanatli', short: 'Kanatlı Besleme', title: 'Kanatlı Hayvan Besleme',
  desc: 'Sindirim sistemi, enerji ve besin maddeleri, YYK ve anti besleme faktörleri, yumurta tavukçuluğu, yem katkı maddeleri.',
  lead: 'Kaynak: ders notu (3 Kasım). Sindirim yolu tablosu (süre, pH, enzim, hormon) ve yem katkı maddeleri en yoğun bölüm. Formüller ve oranlar ezber ister.',
  traps: [
    { t: 'Sıra: **ağız → kursak → proventrikulus → taşlık → duodenum → jejunum-ileum → sekum → kolon-kloaka**.', topic: 'sindirim-yolu' },
    { t: 'En asidik bölüm **taşlık** (pH 2.0-3.0); proventrikulus 2.5-3.5. HCl ve pepsinojen **proventrikulustan** salgılanır, pepsin taşlıkta proteini parçalar.', topic: 'sindirim-yolu' },
    { t: 'En uzun kalış **sekum**: 6-12 saat (lif fermantasyonu, UYA ve B vitamini).', topic: 'sindirim-yolu' },
    { t: 'Gastrin = **tokluk**, grelin = **açlık** sinyali. Sekretin **bikarbonat** salgılatıp kimusu nötralize eder ve gastrini **inhibe** eder.', topic: 'sindirim-detay' },
    { t: 'Kanatlılarda **laktaz yok** → süt şekeri ishal yapar.', topic: 'sindirim-detay' },
    { t: 'BE → (− dışkı) **SE** → (− idrar ve gaz) **ME** → (− ısı üretimi) **NE**. Kataloglarda **ME** kullanılır.', topic: 'enerji' },
    { t: 'Enerji ↑ protein ↓ → **yağlanma**. Etlik civciv **22**, yumurtacı civciv **19** kalori.', topic: 'enerji' },
    { t: 'Sıcak stresinde enerji **yağdan**, soğuk stresinde **nişastadan** (KH parçalanırken ısı çıkar).', topic: 'aminoasit-isi' },
    { t: 'Kas gelişiminde sınırlayıcı AA: **lizin, methionin, triptofan**. Triptofan → **B3 (niasin)**.', topic: 'aminoasit-isi' },
    { t: 'YYK: et piliçleri **1.5-1.8**; süt sığırı **1.4-1.8** (<1.3 israf, >1.8 vücut yıkımı); yumurta tavuğu **1.9-2.2**.', topic: 'yyk-antibesin' },
    { t: 'Enzim **toz** yeme katılırsa etkili; **pelette** ısınma ile denatüre olur.', topic: 'yyk-antibesin' },
    { t: 'Molting: canlı ağırlık kaybı **%25-30**, tüylerin **%80**\'den fazlası dökülür.', topic: 'yumurta' },
    { t: 'Yem katkı maddeleri rasyona **%1**\'e kadar, ortalama **%0.1-0.5** katılır. En eski katkı: **fitobiyotikler**.', topic: 'katki' },
    { t: 'Kekik → **karvakrol**, karanfil → **öjenol**, tarçın → **sinnamaldehit**. Sarımsak gaz yapar, kanatlıda kullanılmaz.', topic: 'katki' }
  ],
  rules: {
    'sindirim-yolu': 'Ağız (<5 sn, pH 6.5-7) → kursak (30-120 dk, 4.5-5.5, depolama) → proventrikulus (10-30 dk, 2.5-3.5, pepsin+HCl) → taşlık (30-90 dk, 2-3, öğütme) → duodenum (10-20 dk, 5.8-6.4, pankreas enzimleri) → jejunum-ileum (60-120 dk, emilim) → sekum (6-12 saat, fermantasyon) → kolon-kloaka (5-15 dk, su geri emilimi).',
    'sindirim-detay': 'Kursakta LAB (S. salivarius, L. acidophilus) asidik ortam sağlar. Koilin taşlığı HCl\'den korur. Sekretin: bikarbonat, gastrin inhibisyonu, safra artışı, mide hareketini yavaşlatma.',
    enerji: 'SE = BE − dışkı; ME = SE − idrar ve gaz; NE = ME − ısı. Enerji önce bazal metabolizmaya gider. Yem geçiş hızı yüksek → yem enerjisi yüksek tutulur.',
    'aminoasit-isi': '10 esansiyel AA: methionin, lizin, treonin, triptofan, arginin, izolösin, lösin, valin, histidin, fenilalanin. Vücut ısısı 41-42 °C.',
    'yyk-antibesin': 'YYK (FCR) = tüketilen yem / canlı ağırlık artışı. Anti besleme faktörlerine çözüm: ısıl işlem, enzim, yıkama-ıslatma-fermantasyon.',
    yumurta: 'Verim 60-70 hafta, 50. haftada düşer. Molting önce stres (kükürtlü AA kesilir, yüksek Zn, düşük Na, az ışık, kısıtlı su), sonra yüksek protein ve kükürtlü AA.',
    katki: 'Gruplar: fitobiyotik, probiyotik, antioksidan, enzim, toksin bağlayıcı, organik asit. Aflatoksin/okratoksin Aspergillus; DON/ZEN Fusarium.'
  },
  topics: [
    { id: 'sindirim-yolu', title: 'Sindirim yolu: organlar, süre, pH, enzimler', src: 'Not: 1.1–1.2',
      blocks: [
        { t: 'p', text: 'Kanatlılarda sindirim üç şekilde olur: **mikrobiyal**, **fiziksel** ve **kimyasal** sindirim.' },
        { t: 'table', head: ['Organ', 'Kalış', 'pH', 'Salgı / enzim', 'Düzenleyici', 'İşlev'], rows: [
          ['Gaga ve ağız', '< 5 sn', '6.5–7.0', 'Tükürük amilazı (pityalin, zayıf), mukus', 'Otonom uyarım', 'Yemi yakalama, kayganlaştırma'],
          ['Kursak', '30–120 dk', '4.5–5.5', 'Mikrobiyal laktaz/amilaz, pityalin, LAB', 'Enterik refleksler', 'Depolama, ıslatma, asitleştirme'],
          ['Proventrikulus', '10–30 dk', '2.5–3.5', 'Pepsin, HCl', 'Gastrin, ghrelin', 'Kimyasal-enzimatik sindirimi başlatma'],
          ['Taşlık (gizzard, ventriculus)', '30–90 dk', '2.0–3.0', 'Koilin; kimustaki pepsin', 'Nöropeptitler', 'Kasılma + grit ile mekanik öğütme'],
          ['Duodenum', '10–20 dk', '5.8–6.4', 'Tripsin, kimotripsin, amilaz, lipaz, safra (pankreas)', 'Sekretin, CCK', 'Enzimatik hidroliz, asidik kimusun nötrleşmesi'],
          ['Jejunum ve ileum', '60–120 dk', '6.4–7.4', 'Maltaz, sükraz, aminopeptidaz (fırçamsı kenar – villus)', 'Peptid YY, nörotensin', 'Besin, vitamin ve su emilimi'],
          ['Sekum (çift)', '6–12 saat', '6.0–6.8', 'Mikrobiyal ksilanaz, selülaz, proteaz', 'İçsel motilite', 'Lif fermantasyonu, su emilimi, UYA ve B vitamini üretimi'],
          ['Kolon ve kloaka', '5–15 dk', '6.5–7.2', 'Belirgin enzim yok', 'Aldosteron', 'Su geri emilimi, idrar-dışkı birleşimi ve atılım']
        ] },
        { t: 'tip', text: 'Hatırlama: "Ağızda yakala → kursakta beklet → proventrikulusta kimyasal sindir → taşlıkta öğüt → ince bağırsakta em → sekumda fermente et → kloakadan at."' },
        { t: 'p', text: '**pH hikâyesi:** ağız nötre yakın → mide bölümlerinde asitleşme → duodenumda nötrleşme → ince bağırsakta emilim → sekumda fermantasyon.' },
        { t: 'note', text: 'Kalış süreleri ve pH aralıkları yaklaşıktır. UYA: uçucu yağ asitleri.' }
      ] },
    { id: 'sindirim-detay', title: 'Kursak, mide, ince bağırsak, sekum ayrıntıları', src: 'Not: 1.3–1.10',
      blocks: [
        { t: 'h', text: 'Kursak' },
        { t: 'ul', items: [
          'LAB\'lar: **Streptococcus salivarius** ve **Lactobacillus acidophilus**. Asidik ortam sağlayıp alkali seven Salmonella ve E. coli\'yi baskılar.',
          '**Kursak yırtılması:** iyi öğütülmemiş kavuzlu yemler veya keskin nesneler yutulunca.',
          '**Kursak mantarı:** Candida\'nın yerleşmesi; ilaçla tedavi edilir.'
        ] },
        { t: 'h', text: 'Proventrikulus (bez mide)' },
        { t: 'ul', items: [
          'Salgıların toplandığı mide: asitle aktifleşen proteazlar için **HCl**, ayrıca **pepsinojen** ve mukus salgılar.',
          '**Gastrin:** tokluk sinyali. **Grelin:** açlık sinyali.',
          '**Kimus:** yağ sindirimi için gerekli salgı karışımı ile oluşan kıvamlı bulamaç.'
        ] },
        { t: 'h', text: 'Ventrikulus (taşlık, gizzard)' },
        { t: 'ul', items: [
          'Fiziksel parçalanma: kaslı yapı (ve yutulan taş) ile.',
          'Kimyasal parçalanma: HCl ile aktifleşen **pepsin** proteinleri burada parçalar.',
          '**Koilin tabakası:** iç yüzeyi kaplayan sarımsı KH/protein kompleksi; HCl\'nin kas dokusuna zarar vermesini engeller.',
          '**Goblet hücreleri:** mukus salgılar, taşlığın kendini sindirmesini engeller; epitelde sürekli yenilenir, aksi halde lezyon → ülser, gastrit, kanser.'
        ] },
        { t: 'h', text: 'İnce bağırsak ve sekretin' },
        { t: 'ul', items: [
          'Duodenum (pankreas enzimleri): tripsin, kimotripsin, amilaz, lipaz, safra.',
          'Jejunum ve ileum (fırçamsı kenar – villus): maltaz, sükraz, aminopeptidazlar.',
          '**Sekretin:** pankreastan **bikarbonat** salgılatıp kimusu nötralize eder; **gastrini inhibe** ederek HCl\'yi azaltır; karaciğerde **safra** üretimini hızlandırır; midenin peristaltik hareketini **yavaşlatır**.'
        ] },
        { t: 'h', text: 'Sekum (kör bağırsak) ve UYA' },
        { t: 'ul', items: [
          'Selülotik bakteriler selülaz salgılar; lifli parçalar kör bağırsakta sindirilir. UYA\'lar enerji sağlar ama birincil amaç faydalı etkileridir.',
          '**Asetik asit** → asetat → asetil CoA → ATP / karaciğerde **yağa** dönüşür.',
          '**Propiyonik asit** → propiyonat → propiyonil CoA → süksinil CoA → ATP / karaciğerde **glikoza** dönüşür.',
          '**Bütirik asit** → bağırsak hücrelerinin **yakıtı** (temel fonksiyon).'
        ] },
        { t: 'h', text: 'Diğer' },
        { t: 'ul', items: [
          'Yağ: duodenumda enzimlerle **sindirim**, jejunum-ileumda **emilim**. Yumurtadaki civciv sarıdaki yağı **pinositoz ve endositoz** ile alır.',
          '**Laktaz yok** → kanatlıya süt şekeri verilirse **ishal** yapar.',
          '**Bresse tavuğu:** kırmızı gaga, mavi bacak, beyaz tüy; süt ürünleriyle beslenir; eti pişerken su kaybetmez, son 1 ayda süt ile mermerleşir.',
          '**Vagus siniri:** beyin ile organlar arasında iletişim; beyin–bağırsak iletişimi.'
        ] }
      ] },
    { id: 'enerji', title: 'Enerji sistemleri ve enerji–protein dengesi', src: 'Not: 2.1–2.5',
      blocks: [
        { t: 'table', head: ['Enerji', 'Tanım'], rows: [
          ['Brüt enerji (BE)', 'Yem yakılınca açığa çıkan ısı enerjisi'],
          ['Sindirilebilir enerji (SE)', 'BE − dışkı ile atılan enerji'],
          ['Metabolik enerji (ME)', 'SE − idrar ve gazlar ile atılan enerji. **Kataloglarda ME** ile gösterilir.'],
          ['Net enerji (NE)', 'ME − ısı üretiminde kullanılan enerji → net enerji et, süt, yumurta']
        ] },
        { t: 'ul', items: [
          'Enerji önce **bazal metabolizmada**, sonra verim için kullanılır.',
          'Kanatlılarda **yem geçiş hızı yüksek** olduğu için yem enerjisi yüksek tutulur.',
          'Besleme şartlarında **ketozis görülmez**; çok nadiren küçük civcivlerde ve tüy kırdırmada görülebilir.',
          '**Yarkalar:** aşırı enerji → erken yaşlanma ve **erken yumurtlama** → hep **küçük yumurta**. Hedef ağırlığa kadar enerji kontrollü verilir. Erken yumurtlayan tavuk yaşlılıkta kemik sorunları, tüy kırdırma ve kafes yorgunluğu yaşar.',
          'Rasyonda **enerji ↑, protein ↓ → yağlanma** (büyüme tetiklenir ama protein yetmez).',
          'Etlik piliçlere (civcivlere) **22**, yumurtacı civcivlere **19** kalori; etlikte hızlı gelişim istenir (genetik kapasite).',
          'İhtiyaç fazlası her protein **bol azotlu gübreye** dönüşür.'
        ] },
        { t: 'table', head: ['Enerji kaynakları', 'Protein kaynakları'], rows: [
          ['Yağlar', 'Hayvansal kaynaklar'], ['Bitkisel yağlar', 'Rendering ürünleri (balık unu, et/kemik unu)'], ['Buğdaygil daneleri', 'Baklagil tohumları'], ['', 'Küspeler'], ['', 'Fermantasyon atıkları']
        ] }
      ] },
    { id: 'aminoasit-isi', title: 'Amino asitler, vücut ısısı ve ısı stresi', src: 'Not: 2.6–2.8',
      blocks: [
        { t: 'p', text: 'Doğada 300\'den fazla amino asit var; bunlardan 10\'u esansiyel, 10\'u esansiyel olmayan olarak verilir.' },
        { t: 'table', head: ['Esansiyel', 'Esansiyel olmayan'], rows: [
          ['Methionin', 'Alanin'], ['Lizin', 'Aspartik asit (asparajin)'], ['Treonin', 'Glutamik asit (glutamin)'], ['Triptofan', 'Glisin'],
          ['Arginin', 'Serin'], ['İzolösin', 'Prolin'], ['Lösin', 'Sistein'], ['Valin', 'Tirozin'], ['Histidin', ''], ['Fenilalanin', '']
        ] },
        { t: 'ul', items: [
          '**Lizin, methionin, triptofan** kas gelişimi için olmazsa olmaz; **sınırlayıcı faktör**.',
          'Tüm protein kaynaklarının AA miktar ve çeşitliliği farklıdır.',
          'Vitamine dönüşen AA: **triptofan → B3 (niasin)**.'
        ] },
        { t: 'h', text: 'Isı stresi' },
        { t: 'ul', items: [
          'Kanatlılarda vücut ısısı **41-42 °C**.',
          'Isı stresinin 3 işareti: **rektal termometre** ile ölçüm, **solunum sayısı** değişimi, **nabız**.',
          'Küçük vücut ve geniş vücut yüzey alanı → enerjinin büyük kısmı **termoregülasyona** gider.',
          '**Sıcak stresi:** enerji **yağlarla** verilir (nişasta parçalanırken yüksek ısı açığa çıkar). **Soğuk stresi:** enerji **nişasta** ile.',
          'Yağ daha konsantre enerjidir; birim alana daha çok enerji sağlar.',
          '**C vitamini** sıcak stresinde: kortizolü düşürür, oksidatif stresi ve serbest radikalleri nötralize eder, bağışıklığın düşmesini engeller.'
        ] }
      ] },
    { id: 'yyk-antibesin', title: 'Yemden yararlanma, anti besleme faktörleri, NOP', src: 'Not: 3.1–3.3',
      blocks: [
        { t: 'table', head: ['Verim', 'Formül', 'Hedef'], rows: [
          ['Et (YYK = FCR)', 'Toplam tüketilen yem (kg) / canlı ağırlık artışı', 'Et piliçleri 1.5–1.8'],
          ['Süt', 'Üretilen süt (kg) / tüketilen yem KM (kg)', 'Süt sığırı 1.4–1.8; < 1.3 israf; > 1.8 vücut yağı/kas yıkarak süt üretiyor'],
          ['Yumurta', 'Toplam tüketilen yem (kg) / toplam yumurta ağırlığı (kg)', 'Yumurta tavuğu 1.9–2.2 (2 kg yem → 1 kg yumurta)']
        ] },
        { t: 'trap', text: 'Süt formülü ters yöndedir (ürün / yem). Et ve yumurtada yem payda değil paydadadır: yem / ürün.' },
        { t: 'h', text: 'Anti besleme faktörleri' },
        { t: 'ul', items: [
          'Proteaz inhibitörleri, fitatlar, tanen ve polifenoller, lektinler, saponinler, guatrojenler, okzalatlar, alkaloidler.',
          'Çözümleri: **ısıl işlemler**, **enzim ilavesi**, **yıkama-ıslatma ve fermantasyon**.'
        ] },
        { t: 'h', text: 'NOP ve enzim' },
        { t: 'ul', items: [
          '**NOP** = nişasta olmayan polisakkaritler: selüloz, lignin, çözünmeyen hemiselülozlar.',
          'Enzimle birlikte tüketilince **yapışkan sümük** kıvamına gelir, toz/toprakla birleşip **kloakta tıkanma**, çatlama ve ölümlere yol açar.',
          'Enzimler **toz yeme** katılırsa etkinliği artar; **pelet** yemde sıkıştırma ısısıyla **denatüre** olup etkisini kaybeder.'
        ] }
      ] },
    { id: 'yumurta', title: 'Yumurta tavukçuluğu', src: 'Not: 4.1–4.3',
      blocks: [
        { t: 'ul', items: [
          'Tavuk verimi **60-70 hafta**; **50. haftada** verim düşer.',
          'Eşeysel olgunluk **18. haftaya** çekilmeye çalışılır; ancak yumurta büyüklüğü tavuğun ağırlığıyla ilgili olduğu için olgunluk **kg** cinsinden değerlendirilir.'
        ] },
        { t: 'h', text: 'Molting (zorlamalı tüy dökümü)' },
        { t: 'table', head: ['Aşama', 'Uygulama'], rows: [
          ['Önce', 'Kükürtlü AA\'ler kesilir; **%25-30** canlı ağırlık kaybı; yüksek çinko, düşük sodyum, düşük aydınlatma, kısıtlı su ile yapay stres; tüylerin **%80**\'den fazlası dökülür'],
          ['Sonra', 'Yüksek protein, yüksek kükürtlü AA, vitamin-mineral takviyesi'],
          ['Sonuç', 'Verim ↑, kalite ↑, yumurta büyüklüğü ↑, ekonomik önem ↑']
        ] },
        { t: 'h', text: 'Yumurtada manipüle edilebilen nitelikler' },
        { t: 'ul', items: [
          '**Renk:** Arap ülkeleri koyu (skalada **9**), Avrupa açık (**4-6**).',
          '**Mineral:** selenyum (reprodüksiyon, kas sağlığı, bağışıklık), iyot.',
          'AA kompozisyonu; yağ asidi kompozisyonu; **ADEK** vitaminleri sarıda depolanır.',
          '**Koku:** Ω3 kaynakları (balık, alg). **Yumurta ömrü:** **E vitamini** oksidasyondan korur.',
          '**IgY:** immünoglobulinler yumurtaya geçer, civcive **vitellus** üzerinden ulaşır (maternal bağışıklık). Maternal bağışıklığını tamamlayamayan civciv tam kapasiteye ulaşamaz.',
          'IgY insanlarda: zararlı organizmaları bağlayıp çoğalma ve tutunmayı engeller; sadece hedef patojene etkili, florayı bozmaz; yan etkisi yok (yumurta alerjisi hariç). Protein yapılı olduğundan mide asidinde parçalanır → **kapsülasyon** gerekir.',
          'Yumurta tam gıda: **100** referans değeri. Renk ve koku **sarıda** depolanır.'
        ] }
      ] },
    { id: 'katki', title: 'Kanatlı yem katkı maddeleri', src: 'Not: 5.1–5.5',
      blocks: [
        { t: 'ul', items: [
          'Rasyona **%1**\'e kadar, ortalama **%0.1-0.5** katılır. Doğal ve sentetik üretilir (ör. sentetik fitaz; fermentörlere laktik asit bakterisi).',
          'Temel yaklaşım: sağlığı iyileştirmek. Hiçbir katkı maddesi tamamen dengeli değildir.',
          'İlk yem katkıları **fitobiyotiklerdir**. **Antibiyotikler** büyütme faktörü olarak kullanıldı; kalıntı ve antibiyotik direnci nedeniyle artık kullanılmıyor.'
        ] },
        { t: 'table', head: ['Grup', 'Açıklama / örnek'], rows: [
          ['Fitobiyotikler', 'En eski katkılar; antiseptik gül yağı, nane yağı. Yem tüketimini destekler, sindirimi hızlandırır. Sarımsak antimikrobiyal ama gaz yapar → kanatlıda kullanılmaz. Tarçın yağı antimikrobiyal, ürün kalitesini artırır'],
          ['Probiyotikler', 'Canlı kültürler, yaygın **Bacillus**. Mikrobiyotayı dengeler, bağışıklığı güçlendirir; **rekabetçi dışlama** (E. coli, Salmonella). Sindirim sağlığı bozulmadan kullanılmaz; ilk civciv yemlerinde verim sağlar'],
          ['Prebiyotikler', 'Kanatlı enzimleriyle parçalanamayan, probiyotiklerin seçici kullandığı KH: **FOS, β-glukan, MOS**'],
          ['Sinbiyotikler', 'Probiyotik + prebiyotik'],
          ['Antioksidanlar', 'Serbest radikal/oksidatif stres ve doku hasarını engeller; yaşlanmayı geciktirir, raf ömrünü uzatır. E vit., selenyum (glutatyon peroksidaz, SOD), polifenoller (kekik, biberiye, üzüm çekirdeği)'],
          ['Enzimler', 'Sindirimi zor bileşenleri parçalar. **Fitaz** bağlı fosforu çözer; **ksilanaz** ve **β-glukanaz** hücre duvarı polisakkaritlerini parçalar'],
          ['Toksin bağlayıcılar', 'Aktif karbon/kömür, zeolit, bentonit'],
          ['Organik asitler', 'Asetik, formik, fumarik, sitrik asit; pH düşürür, yem hijyeni ve depolama stabilitesi, patojen baskısı, antibiyotik alternatifi']
        ] },
        { t: 'table', head: ['Fitobiyotik', 'Etken madde'], rows: [['Kekik', 'Karvakrol'], ['Karanfil', 'Öjenol'], ['Tarçın', 'Sinnamaldehit']] },
        { t: 'table', head: ['Mantar', 'Toksin'], rows: [['Aspergillus', 'Aflatoksin, okratoksin'], ['Fusarium', 'DON (deoksinivalenol), zearalenon (ZEN)']] },
        { t: 'p', text: 'Mikotoksinler karaciğer metabolizmasını, böbrek fonksiyonlarını ve hormon aktivitesini bozar (**ZEN**: endokrin, özellikle **östrojen** etkili).' }
      ] }
  ],

  bank: [
    /* sindirim yolu */
    mc('sindirim-yolu', 'Kanatlılarda yemin sindirim yolundaki doğru sırası hangisidir?', ['Ağız → kursak → proventrikulus → taşlık → duodenum', 'Ağız → proventrikulus → kursak → taşlık → duodenum', 'Ağız → taşlık → kursak → proventrikulus → duodenum', 'Ağız → kursak → taşlık → proventrikulus → duodenum', 'Ağız → duodenum → kursak → taşlık → sekum'], 'Kursakta beklet, proventrikulusta kimyasal sindir, taşlıkta öğüt.'),
    mc('sindirim-yolu', 'Sindirim yolunda en uzun kalış süresi hangi bölümdedir?', ['Sekum (6-12 saat)', 'Kursak (30-120 dk)', 'Taşlık (30-90 dk)', 'Jejunum-ileum (60-120 dk)', 'Kolon ve kloaka (5-15 dk)'], 'Sekumda lif fermantasyonu 6-12 saat sürer.'),
    mc('sindirim-yolu', 'pH değeri en düşük (en asidik) bölüm hangisidir?', ['Taşlık (2.0-3.0)', 'Proventrikulus (2.5-3.5)', 'Kursak (4.5-5.5)', 'Duodenum (5.8-6.4)', 'Sekum (6.0-6.8)'], 'Taşlık 2.0-3.0 ile en asidik bölümdür.', { 1: 'Proventrikulus asidiktir ama aralığı taşlıktan biraz yüksektir (2.5-3.5).' }),
    mc('sindirim-yolu', 'Yemin depolanması, ıslatılması ve asitleştirilmesi hangi organın temel işlevidir?', ['Kursak', 'Taşlık', 'Proventrikulus', 'Sekum', 'Duodenum'], 'Kursak: 30-120 dk, pH 4.5-5.5.'),
    mc('sindirim-yolu', 'Pepsin ve HCl salgısının bulunduğu, kimyasal ve enzimatik sindirimin başladığı bölüm hangisidir?', ['Proventrikulus', 'Kursak', 'Taşlık', 'Duodenum', 'Kolon'], 'Proventrikulus (bez mide): pepsin, HCl; düzenleyici gastrin ve ghrelin.'),
    mc('sindirim-yolu', 'Kasılma ve grit desteğiyle mekanik öğütme yapan bölüm hangisidir?', ['Taşlık (gizzard / ventriculus)', 'Proventrikulus', 'Kursak', 'Sekum', 'İleum'], 'Taşlık kaslı yapısıyla yemi öğütür.'),
    mc('sindirim-yolu', 'Tripsin, kimotripsin, amilaz, lipaz ve safranın etkili olduğu bölüm hangisidir?', ['Duodenum', 'Jejunum ve ileum', 'Proventrikulus', 'Kursak', 'Sekum'], 'Duodenum: pankreas enzimleri; düzenleyici sekretin ve CCK.', { 1: 'Jejunum-ileumda fırçamsı kenar enzimleri (maltaz, sükraz, aminopeptidaz) vardır.' }),
    mc('sindirim-yolu', 'Maltaz, sükraz ve aminopeptidazlar (fırçamsı kenar enzimleri) hangi bölümde bulunur?', ['Jejunum ve ileum', 'Duodenum', 'Kursak', 'Taşlık', 'Kolon'], 'Jejunum-ileum: villuslardaki fırçamsı kenar enzimleri; besin, vitamin ve su emilimi.'),
    mc('sindirim-yolu', 'Lif fermantasyonu, UYA ve B vitamini üretiminin yapıldığı bölüm hangisidir?', ['Sekum', 'Kolon', 'Kursak', 'Duodenum', 'Proventrikulus'], 'Sekum (çift): mikrobiyal ksilanaz, selülaz, proteaz.'),
    mc('sindirim-yolu', 'Kolon ve kloakada etkili olan düzenleyici (hormon) hangisidir?', ['Aldosteron', 'Gastrin', 'Sekretin', 'Peptid YY', 'Ghrelin'], 'Kolon-kloaka: su geri emilimi; düzenleyici aldosteron.'),
    mc('sindirim-yolu', 'Duodenumdaki pH aralığı hangisidir?', ['5.8-6.4', '2.0-3.0', '4.5-5.5', '6.5-7.2', '2.5-3.5'], 'Duodenumda asidik kimus nötrleşir.'),
    mc('sindirim-yolu', 'Kanatlıların gaga ve ağzında bulunan zayıf etkili enzim hangisidir?', ['Tükürük amilazı (pityalin)', 'Pepsin', 'Lipaz', 'Tripsin', 'Selülaz'], 'Ağız: tükürük amilazı (zayıf) ve mukus.'),
    mc('sindirim-yolu', 'Jejunum ve ileumda etkili düzenleyiciler hangileridir?', ['Peptid YY ve nörotensin', 'Gastrin ve ghrelin', 'Sekretin ve CCK', 'Aldosteron', 'Nöropeptitler'], 'Duodenumda sekretin-CCK, proventrikulusta gastrin-ghrelin.'),
    /* sindirim detay */
    mc('sindirim-detay', 'Kursakta bulunan laktik asit bakterileri (LAB) hangileridir?', ['Streptococcus salivarius ve Lactobacillus acidophilus', 'Salmonella ve E. coli', 'Bacillus subtilis ve Candida', 'Aspergillus ve Fusarium', 'Clostridium ve Streptococcus'], 'LAB\'lar asidik ortam sağlayıp Salmonella ve E. coli\'yi baskılar.'),
    mc('sindirim-detay', 'Kursak mantarı hangi etkenin kursağa yerleşmesiyle oluşur?', ['Candida', 'Aspergillus', 'Fusarium', 'Salmonella', 'Lactobacillus'], 'Kursak mantarı Candida kaynaklıdır, ilaçla tedavi edilir.'),
    mc('sindirim-detay', 'Kursak yırtılmasının nedeni aşağıdakilerden hangisidir?', ['İyi öğütülmemiş kavuzlu yemler veya keskin nesneler yutulması', 'Laktaz eksikliği', 'Aşırı yağ tüketimi', 'Candida yerleşmesi', 'Düşük pH'], 'Candida kursak mantarına yol açar; yırtılma mekanik nedenlidir.'),
    mc('sindirim-detay', 'Açlık sinyali veren hormon hangisidir?', ['Grelin', 'Gastrin', 'Sekretin', 'Aldosteron', 'Kortizol'], 'Gastrin tokluk, grelin açlık sinyalidir.', { 1: 'Gastrin tokluk sinyalidir.' }),
    mc('sindirim-detay', 'Taşlığın iç yüzeyini kaplayan ve HCl\'nin kas dokusuna zarar vermesini engelleyen yapı hangisidir?', ['Koilin tabakası', 'Goblet hücreleri', 'Villuslar', 'Kimus', 'Aleuron'], 'Koilin sarımsı KH/protein kompleksidir.'),
    mc('sindirim-detay', 'Sekretinin görevlerinden hangisi **değildir**?', ['Gastrin salınımını artırmak', 'Pankreastan bikarbonat salgılatmak', 'Karaciğerde safra üretimini hızlandırmak', 'Midenin peristaltik hareketini yavaşlatmak', 'Kimusu nötralize ederek ince bağırsağı asitten korumak'], 'Sekretin gastrini inhibe eder, HCl salınımını azaltır.'),
    mc('sindirim-detay', 'Karaciğerde glikoza dönüşen uçucu yağ asidi hangisidir?', ['Propiyonik asit', 'Asetik asit', 'Bütirik asit', 'Formik asit', 'Laktik asit'], 'Propiyonat → propiyonil CoA → süksinil CoA → ATP / glikoz.', { 1: 'Asetik asit karaciğerde yağa dönüşür.' }),
    mc('sindirim-detay', 'Bağırsak hücreleri tarafından yakıt olarak kullanılması temel fonksiyonu olan UYA hangisidir?', ['Bütirik asit', 'Asetik asit', 'Propiyonik asit', 'Sitrik asit', 'Fumarik asit'], 'Bütirik asit bağırsak hücrelerinin yakıtıdır.'),
    mc('sindirim-detay', 'Kanatlılarda yağların emilimi hangi bölümde gerçekleşir?', ['Jejunum ve ileum', 'Duodenum', 'Kursak', 'Taşlık', 'Sekum'], 'Duodenumda sindirim, jejunum-ileumda emilim.'),
    mc('sindirim-detay', 'Yumurtadaki civcivler yumurta sarısındaki yağları hangi yolla hücre içine alır?', ['Pinositoz ve endositoz', 'Difüzyon ve osmoz', 'Fagositoz ve ekzositoz', 'Aktif taşıma ve filtrasyon', 'Fermantasyon'], 'Notlarda pinositoz ve endositoz geçer.'),
    mc('sindirim-detay', 'Kanatlılara süt şekeri verildiğinde ishal görülmesinin nedeni nedir?', ['Laktaz enziminin olmaması', 'Amilazın olmaması', 'Sekumun çift olması', 'Pepsinin fazla olması', 'Safranın az olması'], 'Kanatlılarda laktaz enzimi yoktur.'),
    mc('sindirim-detay', 'Kırmızı gaga, mavi bacak ve beyaz tüylü; süt ürünleriyle beslenen tavuk hangisidir?', ['Bresse', 'Leghorn', 'Brahma', 'Ross', 'Rhode Island'], 'Bresse tavuğunun eti son 1 ayda süt ile mermerleşir.'),
    mc('sindirim-detay', 'Beyin ile organlar (beyin–bağırsak) arasındaki iletişimi sağlayan sinir hangisidir?', ['Vagus siniri', 'Siyatik sinir', 'Optik sinir', 'Fasiyal sinir', 'Trigeminal sinir'], 'Notta vagus siniri beyin–bağırsak iletişimi olarak geçer.'),
    mc('sindirim-detay', 'Taşlıkta mukus salgılayarak taşlığın kendini sindirmesini engelleyen hücreler hangileridir?', ['Goblet hücreleri', 'Koilin hücreleri', 'Paneth hücreleri', 'Pariyetal hücreler', 'Villus hücreleri'], 'Goblet hücreleri sürekli yenilenir; yenilenmezse lezyonlar ülser, gastrit, kansere dönüşebilir.'),
    /* enerji */
    mc('enerji', 'Sindirilebilir enerji nasıl hesaplanır?', ['Brüt enerji − dışkı ile atılan enerji', 'Brüt enerji − idrar ve gaz enerjisi', 'Metabolik enerji − ısı üretimi', 'Net enerji + dışkı enerjisi', 'Metabolik enerji − dışkı enerjisi'], 'SE = BE − dışkı.'),
    mc('enerji', 'Yem kataloglarında enerji değeri genellikle hangisiyle gösterilir?', ['Metabolik enerji (ME)', 'Brüt enerji', 'Sindirilebilir enerji', 'Net enerji', 'Isı enerjisi'], 'Kataloglarda ME (metabolize olabilir enerji) değeri kullanılır.'),
    mc('enerji', 'Net enerji nasıl bulunur?', ['Metabolik enerji − ısı üretiminde kullanılan enerji', 'Brüt enerji − dışkı enerjisi', 'Sindirilebilir enerji − idrar ve gaz', 'Brüt enerji − metabolik enerji', 'Metabolik enerji + ısı enerjisi'], 'NE = ME − ısı; büyüme ve verimde (et, süt, yumurta) kullanılır.'),
    mc('enerji', 'Kanatlılarda yem enerjisinin yüksek tutulmasının nedeni nedir?', ['Yem geçiş hızının yüksek olması', 'Ketozisin sık görülmesi', 'Laktaz enziminin olmaması', 'Vücut ısısının düşük olması', 'Sekumun çift olması'], 'Yem geçiş hızı yüksek olduğu için.'),
    mc('enerji', 'Rasyonda enerji yüksek, protein düşük olursa ne görülür?', ['Yağlanma', 'Ketozis', 'Kursak yırtılması', 'Tüy dökümü', 'İshal'], 'Enerji büyümeyi tetikler ama protein yetersiz olduğu için yağlanma olur.'),
    mc('enerji', 'Etlik piliçlere ve yumurtacı civcivlere verilen kalori değerleri hangisidir?', ['Etlik 22, yumurtacı 19', 'Etlik 19, yumurtacı 22', 'Etlik 41, yumurtacı 42', 'Etlik 15, yumurtacı 18', 'İkisine de 22'], 'Etlik civcivde hızlı gelişim istendiği için yüksek kalori.'),
    mc('enerji', 'Yarkalara aşırı enerji verilmesinin sonucu hangisidir?', ['Erken yumurtlama ve gelecekte hep küçük yumurta üretimi', 'Geç yumurtlama ve iri yumurta', 'Ketozis', 'Laktoz intoleransı', 'Yüksek tüy kalitesi'], 'Hedef ağırlığa kadar enerji kontrollü verilmelidir.'),
    mc('enerji', 'İhtiyaçtan fazla verilen protein ne olur?', ['Bol azotlu gübreye dönüşür', 'Tamamen kas dokusuna dönüşür', 'Yumurta sarısında depolanır', 'Karaciğerde vitamine dönüşür', 'Sekumda selüloza dönüşür'], 'Fazla protein azotlu gübre olarak atılır.'),
    mc('enerji', 'Aşağıdakilerden hangisi protein kaynağı olarak **verilmemiştir**?', ['Buğdaygil daneleri', 'Rendering ürünleri', 'Baklagil tohumları', 'Küspeler', 'Fermantasyon atıkları'], 'Buğdaygil daneleri enerji kaynağıdır.'),
    mc('enerji', 'Kanatlılarda ketozis için hangisi doğrudur?', ['Besleme şartlarında görülmez; çok nadiren küçük civcivlerde ve tüy kırdırmada görülebilir', 'Yumurta tavuklarında sık görülür', 'Sıcak stresinin temel belirtisidir', 'Yüksek proteinli rasyonla oluşur', 'Etlik piliçlerde rutin sorundur'], 'Notlara göre besleme şartlarında görülmez.'),
    /* aminoasit-isi */
    mc('aminoasit-isi', 'Aşağıdakilerden hangisi esansiyel amino asittir?', ['Treonin', 'Alanin', 'Glisin', 'Serin', 'Prolin'], 'Esansiyel: methionin, lizin, treonin, triptofan, arginin, izolösin, lösin, valin, histidin, fenilalanin.'),
    mc('aminoasit-isi', 'Aşağıdakilerden hangisi esansiyel **olmayan** amino asittir?', ['Tirozin', 'Lizin', 'Valin', 'Histidin', 'Arginin'], 'Esansiyel olmayanlar: alanin, aspartik asit, glutamik asit, glisin, serin, prolin, sistein, tirozin.'),
    mc('aminoasit-isi', 'Kas gelişimi için sınırlayıcı faktör olan amino asitler hangileridir?', ['Lizin, methionin, triptofan', 'Alanin, glisin, serin', 'Lösin, izolösin, valin', 'Prolin, sistein, tirozin', 'Arginin, histidin, treonin'], 'Bunlar olmadan diğer AA\'ler yeterli olsa da kas gelişmez.'),
    mc('aminoasit-isi', 'Vitamine dönüşen amino asit ve dönüştüğü vitamin hangisidir?', ['Triptofan → B3 (niasin)', 'Lizin → B12', 'Methionin → C vitamini', 'Tirozin → A vitamini', 'Glisin → E vitamini'], 'Ödev sorusu: triptofan → niasin.'),
    mc('aminoasit-isi', 'Kanatlılarda normal vücut ısısı kaç °C\'dir?', ['41-42', '37-38', '38-39', '43-44', '39-40'], 'Kanatlılarda vücut ısısı 41-42 °C.'),
    mc('aminoasit-isi', 'Aşağıdakilerden hangisi ısı stresinin üç temel işaretinden biridir?', ['Solunum sayısındaki değişim', 'Yem rengi', 'Tüy rengi', 'Gaga uzunluğu', 'Yumurta kabuğu rengi'], 'Üç işaret: rektal termometre ile ölçüm, solunum sayısı, nabız.'),
    mc('aminoasit-isi', 'Sıcak stresi yaşayan kanatlıya enerji neden yağ ile sağlanır?', ['Karbonhidratlar (nişasta) parçalanırken yüksek ısı açığa çıkar', 'Yağ sindirilemez', 'Yağ protein kaynağıdır', 'Nişasta laktaz gerektirir', 'Yağ vücut ısısını yükseltir'], 'Soğuk stresinde ise nişasta ile enerji sağlanır.'),
    mc('aminoasit-isi', 'Soğuk stresinde enerji kaynağı olarak öncelikle ne kullanılır?', ['Nişasta', 'Yağ', 'Protein', 'Selüloz', 'Lignin'], 'Nişasta parçalanırken ısı açığa çıkması soğukta avantajdır.'),
    mc('aminoasit-isi', 'Sıcak stresinde C vitamini takviyesinin etkisi hangisidir?', ['Sıcaklığa bağlı kortizol seviyesini düşürür', 'Kortizol seviyesini artırır', 'Bağışıklığı baskılar', 'Serbest radikal oluşumunu artırır', 'Vücut ısısını yükseltir'], 'C vitamini kortizolü düşürür, oksidatif stresi nötralize eder, bağışıklığın düşmesini engeller.'),
    mc('aminoasit-isi', 'Kanatlıların enerjinin büyük kısmını termoregülasyona harcamasının nedeni nedir?', ['Küçük vücut yapısı ve geniş vücut yüzey alanı', 'Laktaz eksikliği', 'Yüksek yem geçiş hızı', 'Sekumun çift olması', 'Ketozis'], 'Notlardaki gerekçe budur.'),
    /* yyk */
    mc('yyk-antibesin', 'Et piliçlerinde yemden yararlanma katsayısı (FCR) hangi aralıkta olmalıdır?', ['1.5-1.8', '1.9-2.2', '1.4-1.8', '2.5-3.0', '1.0-1.2'], 'Et piliçleri 1.5-1.8.', { 1: 'Bu yumurta tavuğu değeridir.', 2: 'Bu süt sığırı değeridir.' }),
    mc('yyk-antibesin', 'Et için YYK (FCR) formülü hangisidir?', ['Toplam tüketilen yem / canlı ağırlık artışı', 'Canlı ağırlık artışı / tüketilen yem', 'Üretilen süt / tüketilen yem KM', 'Tüketilen yem / yumurta sayısı', 'Canlı ağırlık / yaş'], 'YYK = FCR = tüketilen yem (kg) / canlı ağırlık artışı.'),
    mc('yyk-antibesin', 'Süt sığırında YYK 1.8\'den büyükse bu neyi gösterir?', ['Vücut yağı veya kas yıkarak süt üretildiğini', 'Yem israfı olduğunu', 'İdeal durumu', 'Yağlanma olduğunu', 'Ketozis olmadığını'], '<1.3 israf; >1.8 vücut rezervlerinden süt üretimi.', { 1: 'İsraf YYK 1.3\'ten küçük olduğunda vardır.' }),
    mc('yyk-antibesin', 'Yumurta tavuğunda YYK hangi aralıkta olmalıdır?', ['1.9-2.2', '1.5-1.8', '1.4-1.8', '1.0-1.3', '3.0-3.5'], '2 kg yem → 1 kg yumurta.'),
    mc('yyk-antibesin', 'Aşağıdakilerden hangisi anti besleme faktörü **değildir**?', ['Fitaz', 'Fitatlar', 'Lektinler', 'Saponinler', 'Guatrojenler'], 'Fitaz bir enzimdir (katkı maddesi); fitat ise anti besleme faktörüdür.'),
    mc('yyk-antibesin', 'Anti besleme faktörlerinin çözüm yollarından hangisi notlarda **yoktur**?', ['Antibiyotik ilavesi', 'Isıl işlemler', 'Enzim ilavesi', 'Yıkama-ıslatma', 'Fermantasyon'], 'Çözümler: ısıl işlem, enzim ilavesi, yıkama-ıslatma ve fermantasyon.'),
    mc('yyk-antibesin', 'Aşağıdakilerden hangisi NOP (nişasta olmayan polisakkarit) grubundadır?', ['Lignin', 'Amilopektin', 'Amiloz', 'Glikoz', 'Laktoz'], 'NOP: selüloz, lignin, çözünmeyen hemiselülozlar.'),
    mc('yyk-antibesin', 'Enzimler pelet yemlere katıldığında etkisini neden kaybeder?', ['Sıkıştırma sırasındaki ısınmayla denatüre olur', 'Peletler enzimi bağlar', 'Pelet yem asidiktir', 'Kanatlı peleti sindiremez', 'Enzim tozda inaktiftir'], 'Toz yemde etkinlik artar, pelette denatüre olur.'),
    mc('yyk-antibesin', 'NOP\'ler enzimle birlikte tüketildiğinde hangi sorun görülebilir?', ['Yapışkan kıvam ile kloakta tıkanma, çatlama ve ölümler', 'Kursak mantarı', 'Laktoz intoleransı', 'Ketozis', 'Koilin tabakasının kalınlaşması'], 'Sümük kıvamı toz/toprakla birleşerek kloakta tıkanma yapar.'),
    /* yumurta */
    mc('yumurta', 'Tavukta verim süresi ve verimin düştüğü hafta hangisidir?', ['60-70 hafta; 50. haftada düşer', '30-40 hafta; 20. haftada düşer', '80-90 hafta; 70. haftada düşer', '18 hafta; 10. haftada düşer', '100 hafta; 90. haftada düşer'], 'Verim 60-70 hafta, 50. haftada düşüş.'),
    mc('yumurta', 'Eşeysel olgunluğun yaşa göre değil kg cinsinden değerlendirilmesinin nedeni nedir?', ['Yumurta büyüklüğünün tavuğun ağırlığıyla ilgili olması', 'Tüy dökümünün ağırlığa bağlı olması', 'Ketozis riskinin olması', 'Yem tüketiminin sabit olması', 'Vücut ısısının değişmesi'], 'Gelecekteki yumurta büyüklüğü ağırlıkla ilgilidir.'),
    mc('yumurta', 'Molting uygulamasında hedeflenen canlı ağırlık kaybı ne kadardır?', ['%25-30', '%5-10', '%50-60', '%80', '%1-2'], '%25-30 (dikkat!). %80 dökülen tüy oranıdır.', { 3: '%80 dökülen tüy oranıdır, ağırlık kaybı değil.' }),
    mc('yumurta', 'Molting öncesi yapay stres ortamı için hangisi **uygulanmaz**?', ['Yüksek sodyum', 'Yüksek çinko', 'Düşük aydınlatma süresi', 'Kısıtlı su', 'Kükürtlü amino asitlerin kesilmesi'], 'Sodyum düşük tutulur.'),
    mc('yumurta', 'Molting sonrası hangi besleme uygulanır?', ['Yüksek protein, yüksek kükürtlü AA, vitamin-mineral takviyesi', 'Kükürtlü AA\'lerin kesilmesi', 'Su kısıtlaması', 'Düşük protein ve yüksek çinko', 'Aydınlatmanın azaltılması'], 'Sonuç: verim, kalite ve yumurta büyüklüğü artar.'),
    mc('yumurta', 'Arap ülkelerinin talep ettiği yumurta renk skalası değeri hangisidir?', ['9', '4-6', '1-2', '12', '3'], 'Araplar koyu (9), Avrupa açık (4-6).'),
    mc('yumurta', 'Yumurtanın oksidasyondan korunarak ömrünün uzatılması hangi vitaminle sağlanır?', ['E vitamini', 'C vitamini', 'B3 vitamini', 'K vitamini', 'D vitamini'], 'E vitamini antioksidandır.'),
    mc('yumurta', 'Yumurtada istenmeyen kokuya sebep olan kaynak hangisidir?', ['Ω3 kaynakları (balık ve algler)', 'Selenyum', 'İyot', 'E vitamini', 'Kalsiyum'], 'Ω3 kaynakları koku yapar.'),
    mc('yumurta', 'Civcive maternal bağışıklık sağlayan yumurta immünoglobulini hangisidir?', ['IgY', 'IgG', 'IgA', 'IgE', 'IgM'], 'IgY yumurtaya geçer, vitellus üzerinden civcive ulaşır.'),
    mc('yumurta', 'IgY\'nin insanlarda kullanımında kapsülasyon gerekmesinin nedeni nedir?', ['Protein yapılı olduğu için mide asidinde parçalanması', 'Yağda çözünmesi', 'Alerji yapmaması', 'Floraya zarar vermesi', 'Isıya dayanıklı olması'], 'IgY protein yapılıdır.'),
    mc('yumurta', 'Yumurta sarısında depolanan vitaminler hangileridir?', ['A, D, E, K', 'B ve C', 'B3 ve B12', 'Sadece C', 'Sadece E'], 'Yağda çözünen ADEK sarıda depolanır.'),
    mc('yumurta', 'Selenyumun yumurtada önemli olduğu işlevler hangileridir?', ['Reprodüksiyon, kas sağlığı ve bağışıklık', 'Renk ve koku', 'Kabuk sertliği', 'Tüy dökümü', 'Laktoz sindirimi'], 'Notta selenyum: reprodüksiyon, kas sağlığı ve bağışıklık.'),
    /* katkı */
    mc('katki', 'Yem katkı maddeleri rasyona ortalama hangi oranda katılır?', ['%0.1-0.5', '%5-10', '%1-5', '%10-20', '%0.01'], '%1\'e kadar, ortalama %0.1-0.5.'),
    mc('katki', 'İlk yem katkı maddeleri hangileridir?', ['Fitobiyotikler', 'Antibiyotikler', 'Probiyotikler', 'Organik asitler', 'Toksin bağlayıcılar'], 'En eski katkılar fitobiyotiklerdir.'),
    mc('katki', 'Antibiyotiklerin büyütme faktörü olarak artık kullanılmamasının nedeni nedir?', ['Kalıntı bırakmaları ve patojenlerin direnç geliştirmesi', 'Pahalı olmaları', 'Fitobiyotik olmaları', 'Yem tüketimini artırmaları', 'Laktaz içermeleri'], ''),
    mc('katki', 'Kekikteki etken madde hangisidir?', ['Karvakrol', 'Öjenol', 'Sinnamaldehit', 'Avenin', 'Zearalenon'], 'Kekik-karvakrol, karanfil-öjenol, tarçın-sinnamaldehit.'),
    mc('katki', 'Karanfilin etken maddesi hangisidir?', ['Öjenol', 'Karvakrol', 'Sinnamaldehit', 'Bütirat', 'Fitaz'], ''),
    mc('katki', 'Sarımsak antimikrobiyal olmasına rağmen kanatlıda neden kullanılmaz?', ['Gaz yapar', 'Toksiktir', 'Pahalıdır', 'Laktaz içerir', 'Pelette bozulur'], 'Notta: antimikrobiyaldir ama gaz yapar.'),
    mc('katki', 'Probiyotiklerin patojenlerle besin maddeleri için savaşması hangi mekanizmadır?', ['Rekabetçi dışlama', 'Denatürasyon', 'Fermantasyon', 'Toksin bağlama', 'Kapsülasyon'], 'Probiyotikler (Bacillus grupları) rekabetçi dışlama yapar.'),
    mc('katki', 'Aşağıdakilerden hangisi prebiyotiktir?', ['MOS (mannan oligosakkarit)', 'Bacillus', 'Zeolit', 'Fitaz', 'Formik asit'], 'Prebiyotikler: FOS, β-glukan, MOS.'),
    mc('katki', 'Bağlı fosforu çözen enzim hangisidir?', ['Fitaz', 'Ksilanaz', 'β-glukanaz', 'Laktaz', 'Selülaz'], 'Ksilanaz ve β-glukanaz hücre duvarı polisakkaritlerini parçalar.'),
    mc('katki', 'Fusarium mantarının ürettiği toksinler hangileridir?', ['DON ve zearalenon (ZEN)', 'Aflatoksin ve okratoksin', 'Karvakrol ve öjenol', 'FOS ve MOS', 'Pepsin ve HCl'], 'Aspergillus: aflatoksin, okratoksin.', { 1: 'Bunlar Aspergillus toksinleridir.' }),
    mc('katki', 'Endokrin aktiviteyi, özellikle östrojen etkisiyle bozan mikotoksin hangisidir?', ['Zearalenon (ZEN)', 'Aflatoksin', 'Okratoksin', 'DON', 'Sinnamaldehit'], 'ZEN östrojen etkilidir.'),
    mc('katki', 'Aşağıdakilerden hangisi toksin bağlayıcı olarak kullanılır?', ['Bentonit', 'Sitrik asit', 'β-glukan', 'Tarçın yağı', 'Bacillus'], 'Aktif kömür, zeolit, bentonit.'),
    mc('katki', 'İçme suyu veya yeme katılarak pH\'ı düşüren ve antibiyotik alternatifi olarak kullanılan katkı grubu hangisidir?', ['Organik asitler', 'Toksin bağlayıcılar', 'Prebiyotikler', 'Antioksidanlar', 'Fitobiyotikler'], 'Asetik, formik, fumarik, sitrik asit.'),
    mc('katki', 'Antioksidan olarak kullanılan selenyum hangi enzimlerin yapısında görev alır?', ['Glutatyon peroksidaz ve süperoksit dismutaz', 'Fitaz ve ksilanaz', 'Pepsin ve tripsin', 'Laktaz ve amilaz', 'Selülaz ve proteaz'], 'Notta: Selenyum (G. peroksidaz, S.O. dismutaz).'),

    /* D/Y */
    tf('sindirim-yolu', 'Sekum çift yapılıdır ve kalış süresi 6-12 saattir.', true, ''),
    tf('sindirim-yolu', 'Kursağın pH değeri 2.0-3.0 arasındadır.', false, 'Kursak 4.5-5.5; 2.0-3.0 taşlıktır.'),
    tf('sindirim-yolu', 'Kolon ve kloakada belirgin bir sindirim enzimi yoktur.', true, 'İşlev su geri emilimi ve atılımdır.'),
    tf('sindirim-yolu', 'Duodenumda sekretin ve CCK düzenleyici olarak görev yapar.', true, ''),
    tf('sindirim-yolu', 'Gaga ve ağızda yem 30-120 dakika kalır.', false, 'Ağızda < 5 sn; 30-120 dk kursaktır.'),
    tf('sindirim-detay', 'Gastrin açlık sinyali veren hormondur.', false, 'Gastrin tokluk, grelin açlık sinyalidir.'),
    tf('sindirim-detay', 'Kursaktaki LAB\'lar alkali seven Salmonella ve E. coli\'yi baskılar.', true, ''),
    tf('sindirim-detay', 'Asetik asit karaciğerde glikoza dönüşür.', false, 'Asetik asit yağa, propiyonik asit glikoza dönüşür.'),
    tf('sindirim-detay', 'Pepsinojen proventrikulustan salgılanır.', true, 'HCl ile aktifleşen pepsin taşlıkta proteini parçalar.'),
    tf('sindirim-detay', 'Sekretin gastrin salınımını artırarak HCl salgısını yükseltir.', false, 'Sekretin gastrini inhibe eder, HCl azalır.'),
    tf('enerji', 'Metabolik enerji, sindirilebilir enerjiden idrar ve gazlarla atılan enerjinin çıkarılmasıyla bulunur.', true, ''),
    tf('enerji', 'Enerji önce verim için, sonra bazal metabolizma için kullanılır.', false, 'Önce bazal metabolizma, sonra verim.'),
    tf('enerji', 'Yumurtacı civcivlere etlik civcivlerden daha fazla kalori verilir.', false, 'Etlik 22, yumurtacı 19.'),
    tf('enerji', 'Bitkisel yağlar enerji kaynağıdır.', true, 'Enerji: yağlar, bitkisel yağlar, buğdaygil daneleri.'),
    tf('aminoasit-isi', 'Sistein esansiyel bir amino asittir.', false, 'Sistein esansiyel olmayanlar listesindedir.'),
    tf('aminoasit-isi', 'Yağ, karbonhidrata göre daha konsantre bir enerji kaynağıdır.', true, ''),
    tf('aminoasit-isi', 'Kanatlılarda vücut ısısı 41-42 °C\'dir.', true, ''),
    tf('yyk-antibesin', 'Süt sığırında YYK 1.3\'ten küçükse israf vardır.', true, ''),
    tf('yyk-antibesin', 'Enzimler toz yemlere katıldığında etkinliği azalır.', false, 'Tozda artar, pelette azalır.'),
    tf('yyk-antibesin', 'Tanen ve polifenoller anti besleme faktörlerindendir.', true, ''),
    tf('yumurta', 'Molting sırasında tüylerin %80\'den fazlası dökülür.', true, ''),
    tf('yumurta', 'Avrupa ülkeleri koyu renkli (skala 9) yumurta tercih eder.', false, 'Avrupa açık renk (4-6), Arap ülkeleri koyu (9).'),
    tf('yumurta', 'Yumurta insan beslenmesinde tam gıda olarak 100 referans değerindedir.', true, ''),
    tf('yumurta', 'IgY bağırsak florasının tamamına zarar verir.', false, 'Sadece hedef patojene etkilidir, florayı korur.'),
    tf('katki', 'Probiyotikler sindirim sağlığı bozulmadan kullanılmaz.', true, 'Notta böyle geçer.'),
    tf('katki', 'Tarçın yağı kanatlıda antimikrobiyal özellik gösterir ve ürün kalitesini artırır.', true, ''),
    tf('katki', 'Aflatoksin Fusarium mantarı tarafından üretilir.', false, 'Aflatoksin Aspergillus\'un toksinidir.'),
    tf('katki', 'Hiçbir yem katkı maddesi tamamen dengeli değildir.', true, ''),

    /* Boşluk */
    fill('sindirim-yolu', 'Kanatlılarda sindirim mikrobiyal, fiziksel ve ____ sindirim olmak üzere üç şekilde olur.', ['kimyasal'], ''),
    fill('sindirim-yolu', 'Taşlığın diğer adları gizzard ve ____ dur.', ['ventriculus', 'ventrikulus'], ''),
    fill('sindirim-yolu', 'Proventrikulusta pepsin ve ____ salgılanır.', ['HCl', 'hidroklorik asit'], ''),
    fill('sindirim-yolu', 'Kolon ve kloakada düzenleyici hormon ____ dur.', ['aldosteron'], ''),
    fill('sindirim-detay', 'Taşlığın iç yüzeyini kaplayan sarımsı KH/protein kompleksine ____ tabakası denir.', ['koilin'], ''),
    fill('sindirim-detay', '____ : açlık sinyali hormonu.', ['grelin', 'ghrelin'], ''),
    fill('sindirim-detay', 'Sekretin pankreastan ____ salgılatarak kimusu nötralize eder.', ['bikarbonat'], ''),
    fill('sindirim-detay', 'Bağırsak hücreleri tarafından yakıt olarak kullanılan UYA ____ asittir.', ['bütirik'], ''),
    fill('sindirim-detay', 'Kanatlılarda ____ enzimi olmadığı için süt şekeri ishal yapar.', ['laktaz'], ''),
    fill('sindirim-detay', 'Kursak mantarı ____ mantarının kursağa yerleşmesiyle oluşur.', ['Candida'], ''),
    fill('enerji', 'Sindirilebilir enerji = brüt enerji − ____ ile atılan enerji.', ['dışkı'], ''),
    fill('enerji', 'Kataloglarda enerji ____ değeri ile gösterilir.', ['ME', 'metabolik enerji', 'metabolize olabilir enerji'], ''),
    fill('enerji', 'Rasyonda enerji ↑, protein ↓ olursa ____ oluşur.', ['yağlanma'], ''),
    fill('enerji', 'Etlik civcivlere ____ kalori verilir.', ['22'], 'Yumurtacı civcivlere 19.'),
    fill('aminoasit-isi', 'Triptofan B3 vitaminine, yani ____ e dönüşür.', ['niasin'], ''),
    fill('aminoasit-isi', 'Sıcak stresi yaşayan hayvana enerji ____ ile sağlanır.', ['yağlar', 'yağ'], ''),
    fill('aminoasit-isi', 'Sıcak stresinde C vitamini stres hormonu ____ seviyesini düşürür.', ['kortizol'], ''),
    fill('yyk-antibesin', 'Yumurta tavuğunda ____ kg yem ile 1 kg yumurta üretilmelidir.', ['2'], 'YYK 1.9-2.2.'),
    fill('yyk-antibesin', 'NOP, nişasta ____ polisakkaritler demektir.', ['olmayan'], ''),
    fill('yyk-antibesin', 'Enzimler ____ yemlere katılırsa sıkıştırma ısısıyla denatüre olur.', ['pelet'], ''),
    fill('yumurta', 'Molting uygulamasında canlı ağırlık kaybı %____ olmalıdır.', ['25-30', '25 - 30', '25 30'], ''),
    fill('yumurta', 'Yumurtadaki immünoglobulinler civcive ____ üzerinden ulaşır.', ['vitellus'], ''),
    fill('yumurta', 'Yumurtada oksidasyonu önleyerek ömrü uzatan vitamin ____ vitaminidir.', ['E'], ''),
    fill('katki', 'Yem katkı maddeleri rasyona %____ \'e kadar katılır.', ['1'], ''),
    fill('katki', 'Tarçının etken maddesi ____ dir.', ['sinnamaldehit'], ''),
    fill('katki', 'Prebiyotiklere örnek: FOS, β-glukan ve ____.', ['MOS', 'mannan oligosakkarit'], ''),
    fill('katki', 'Probiyotik olarak yaygın kullanılan canlı kültürler ____ gruplarıdır.', ['Bacillus'], ''),

    /* Klasik */
    op('sindirim-yolu', 'Kanatlılarda sindirim yolunu sırasıyla yazıp her bölümün temel işlevini belirtiniz.', [
      'Ağız: yakalama, kayganlaştırma', 'Kursak: depolama, ıslatma, asitleştirme', 'Proventrikulus: kimyasal-enzimatik sindirimin başlaması (pepsin, HCl)',
      'Taşlık: mekanik öğütme', 'Duodenum: enzimatik hidroliz, nötrleşme; jejunum-ileum: emilim', 'Sekum: lif fermantasyonu, UYA, B vit.; kolon-kloaka: su geri emilimi, atılım'
    ], 'Ağız (yakalama, kayganlaştırma) → kursak (depolama, ıslatma, asitleştirme) → proventrikulus (pepsin ve HCl ile kimyasal sindirimin başlatılması) → taşlık (kasılma ve grit ile mekanik öğütme) → duodenum (pankreas enzimleriyle hidroliz, asidik kimusun nötrleşmesi) → jejunum-ileum (besin, vitamin, su emilimi) → sekum (lif fermantasyonu, su emilimi, UYA ve B vitamini) → kolon-kloaka (su geri emilimi, idrar-dışkı birleşimi ve atılım).'),
    op('sindirim-detay', 'Sekretinin görevlerini yazınız.', [
      'Pankreastan bikarbonat salgılatıp kimusu nötralize eder, ince bağırsağı asitten korur', 'Gastrin salınımını inhibe ederek HCl\'yi azaltır',
      'Karaciğerde safra üretimini hızlandırır', 'Midenin peristaltik hareketini yavaşlatır'
    ], 'Sekretin (pH dengesi ve nötralizasyon): pankreastan bikarbonat salgılatarak kimusu nötralize eder ve ince bağırsağı asitten korur; gastrin salınımını inhibe ederek HCl salınımını azaltır; karaciğerde safra üretimini hızlandırır; midenin peristaltik hareketini yavaşlatarak bağırsaktaki sindirimin düzgün işlemesini sağlar.'),
    op('sindirim-detay', 'Kör bağırsakta (sekum) oluşan uçucu yağ asitlerini ve metabolik yollarını yazınız.', [
      'Selülotik bakteriler selülaz salgılar, lif sekumda sindirilir', 'Asetik asit → asetat → asetil CoA → ATP / karaciğerde yağ',
      'Propiyonik asit → propiyonat → propiyonil CoA → süksinil CoA → ATP / karaciğerde glikoz', 'Bütirik asit → bağırsak hücrelerinin yakıtı'
    ], 'Sekumda selülotik bakteriler selülaz salgılar ve lifli parçalar sindirilir. UYA\'lar enerji sağlar ama birincil amaçları faydalı etkileridir.\n• Asetik asit → asetat → asetil CoA → enerji (ATP) / karaciğerde yağa dönüşür.\n• Propiyonik asit → propiyonat → propiyonil CoA → süksinil CoA → ATP / karaciğerde glikoza dönüşür.\n• Bütirik asit → bağırsak hücrelerinin yakıtı (temel fonksiyon).'),
    op('enerji', 'Rasyon enerji sistemlerini tanımlayınız.', [
      'Brüt enerji: yakılınca açığa çıkan ısı', 'Sindirilebilir enerji = BE − dışkı enerjisi', 'Metabolik enerji = SE − idrar ve gaz; kataloglarda ME', 'Net enerji = ME − ısı üretimi; et, süt, yumurta verimi'
    ], '• Brüt enerji: yem yakılarak açığa çıkan ısı enerjisi ile ölçülür.\n• Sindirilebilir enerji: brüt enerji − dışkı ile atılan enerji.\n• Metabolik enerji: sindirilebilir enerji − idrar ve gazlarla atılan enerji; kataloglarda ME değeri ile gösterilir.\n• Net enerji: metabolik enerji − ısı üretiminde kullanılan enerji; büyüme ve verimde kullanılır (net enerji et, süt, yumurta).'),
    op('enerji', 'Yarkalarda enerji kontrolünün ve enerji–protein dengesinin önemini açıklayınız.', [
      'Aşırı enerji → erken yaşlanma, erken yumurtlama', 'Erken yumurtlama → hep küçük yumurta; hedef ağırlığa kadar kontrollü enerji',
      'Erken yumurtlayan tavuk: kemik sorunları, tüy kırdırma, kafes yorgunluğu', 'Enerji ↑ protein ↓ → yağlanma',
      'Etlik 22, yumurtacı civciv 19 kalori; fazla protein azotlu gübre'
    ], 'Yarkalara aşırı enerji vermek erken yaşlanmaya ve erken yumurtlamaya sebep olur; erken yumurtaya gelen tavuk gelecekte hep küçük yumurta üretir. Bu yüzden hedef ağırlığa ulaşana kadar enerji kontrollü verilir. Erken yumurtlayan tavuk yaşlılıkta kemik sorunları, tüy kırdırma ve kafes yorgunluğu yaşar.\nRasyonda enerji yüksek, protein düşük olursa büyüme tetiklenir ama protein yetmediği için yağlanma olur. Bu nedenle etlik civcivlere 22, yumurtacı civcivlere 19 kalori verilir (etlikte hızlı gelişim istenir). İhtiyaç fazlası protein azotlu gübreye dönüşür.'),
    op('aminoasit-isi', 'Isı stresinin işaretlerini ve sıcak/soğuk stresinde beslemeyi açıklayınız.', [
      'Vücut ısısı 41-42 °C; termoregülasyona büyük enerji (küçük vücut, geniş yüzey)', 'İşaretler: rektal ölçüm, solunum sayısı, nabız',
      'Sıcak stresinde enerji yağdan (nişasta parçalanırken ısı çıkar)', 'Soğuk stresinde nişasta', 'C vitamini: kortizol ↓, oksidatif stres ↓, bağışıklık korunur'
    ], 'Kanatlılarda vücut ısısı 41-42 °C\'dir; küçük vücut ve geniş yüzey alanı nedeniyle enerjinin büyük kısmı termoregülasyona gider. Isı stresinin işaretleri: rektal termometre ölçümü, solunum sayısındaki değişim ve nabız.\nSıcak stresinde enerji yağlarla verilir çünkü nişasta parçalanırken yüksek ısı açığa çıkar; soğuk stresinde enerji nişasta ile sağlanır. Yağ daha konsantre enerjidir. C vitamini takviyesi kortizolü düşürür, oksidatif stresi ve serbest radikalleri nötralize eder, bağışıklığın düşmesini engeller.'),
    op('yyk-antibesin', 'Et, süt ve yumurta için yemden yararlanma katsayısı formüllerini ve hedef değerlerini yazınız.', [
      'Et: tüketilen yem / canlı ağırlık artışı; et piliçleri 1.5-1.8', 'Süt: üretilen süt / tüketilen yem KM; 1.4-1.8',
      'Süt: <1.3 israf, >1.8 vücut yağı/kas yıkımı', 'Yumurta: tüketilen yem / yumurta ağırlığı; 1.9-2.2 (2 kg yem → 1 kg yumurta)'
    ], '• Et: YYK = FCR = toplam tüketilen yem (kg) / canlı ağırlık artışı; et piliçlerinde 1.5-1.8.\n• Süt: üretilen süt (kg) / tüketilen yem KM (kg); süt sığırında 1.4-1.8. 1.3\'ten küçükse israf, 1.8\'den büyükse vücut yağı veya kas yıkarak süt üretiyordur.\n• Yumurta: toplam tüketilen yem (kg) / üretilen toplam yumurta ağırlığı (kg); yumurta tavuğunda 1.9-2.2 (2 kg yem → 1 kg yumurta).'),
    op('yyk-antibesin', 'Anti besleme faktörlerini ve çözüm yollarını; NOP ve enzim kullanımını açıklayınız.', [
      'Proteaz inhibitörleri, fitatlar, tanen-polifenoller, lektinler', 'Saponinler, guatrojenler, okzalatlar, alkaloidler',
      'Çözüm: ısıl işlem, enzim ilavesi, yıkama-ıslatma ve fermantasyon', 'NOP: selüloz, lignin, çözünmeyen hemiselüloz; enzimle yapışkan kıvam → kloak tıkanması',
      'Enzim tozda etkili, pelette denatüre'
    ], 'Anti besleme faktörleri: proteaz inhibitörleri, fitatlar, tanen ve polifenoller, lektinler, saponinler, guatrojenler, okzalatlar, alkaloidler. Çözümleri: ısıl işlemler, enzim ilavesi, yıkama-ıslatma ve fermantasyon.\nNOP (nişasta olmayan polisakkaritler: selüloz, lignin, çözünmeyen hemiselülozlar) enzimle birlikte tüketildiğinde yapışkan sümük kıvamına gelir, toz/toprakla birleşip kloakta tıkanma, çatlama ve ölümlere sebep olur. Enzimler toz yemlere katılırsa etkinliği artar; pelet yemlerde sıkıştırma ısısıyla denatüre olup etkisini kaybeder.'),
    op('yumurta', 'Molting (zorlamalı tüy dökümü) uygulamasını aşamalarıyla açıklayınız.', [
      'Önce: kükürtlü AA kesilir', 'Canlı ağırlık kaybı %25-30', 'Yüksek çinko, düşük sodyum, düşük aydınlatma, kısıtlı su; tüylerin %80\'den fazlası dökülür',
      'Sonra: yüksek protein, yüksek kükürtlü AA, vitamin-mineral', 'Sonuç: verim, kalite, yumurta büyüklüğü ve ekonomik önem artar'
    ], 'Molting zorlamalı tüy dökümü uygulamasıdır.\nÖnce: kükürtlü amino asitler kesilir; %25-30 canlı ağırlık kaybı yaratılır; yüksek çinko, düşük sodyum, düşük aydınlatma süresi ve kısıtlı su ile yapay stres ortamı oluşturulur; tüylerin %80\'den fazlası dökülür.\nSonra: yüksek protein, yüksek kükürtlü AA ve vitamin-mineral takviyesi yapılır.\nSonuç: verim, kalite, yumurta büyüklüğü ve ekonomik önem artar.'),
    op('katki', 'Fitobiyotikleri açıklayınız; kanatlıda en çok kullanılanları etken maddeleriyle yazınız.', [
      'En eski yem katkıları; antiseptik özellikli (gül yağı, nane yağı)', 'Yem tüketimini destekler, sindirimi hızlandırır',
      'Sarımsak gaz yapar → kullanılmaz; tarçın yağı antimikrobiyal, kalite artırır', 'Kekik-karvakrol, karanfil-öjenol, tarçın-sinnamaldehit'
    ], 'Fitobiyotikler en eski yem katkı maddeleridir; antiseptik özellikli gül yağı, nane yağı gibi bitkisel ürünlerdir. Yem tüketimini destekler, sindirimi hızlandırır. Sarımsak antimikrobiyaldir ama gaz yaptığı için kanatlıda kullanılmaz. Tarçın yağı kanatlıda antimikrobiyaldir; yeme doğrudan katılabilir veya kapsüle edilir; ürün kalitesini artırır.\nEn çok kullanılanlar: kekik → karvakrol, karanfil → öjenol, tarçın → sinnamaldehit.'),

    /* Uzun klasik */
    lg('sindirim-yolu', 'Kanatlı sindirim yolunu organ organ; kalış süresi, pH, salgı/enzim, düzenleyici ve işlevleriyle ayrıntılı anlatınız.', [
      'Ağız: <5 sn, pH 6.5-7, pityalin ve mukus, yakalama-kayganlaştırma',
      'Kursak: 30-120 dk, pH 4.5-5.5, mikrobiyal laktaz/amilaz ve LAB; depolama-ıslatma-asitleştirme',
      'Proventrikulus: 10-30 dk, pH 2.5-3.5, pepsin-HCl, gastrin-ghrelin',
      'Taşlık: 30-90 dk, pH 2-3, koilin, mekanik öğütme (grit)',
      'Duodenum: 10-20 dk, pH 5.8-6.4, pankreas enzimleri ve safra, sekretin-CCK, nötrleşme',
      'Jejunum-ileum: 60-120 dk, pH 6.4-7.4, fırçamsı kenar enzimleri, peptid YY-nörotensin, emilim',
      'Sekum: 6-12 saat, pH 6-6.8, mikrobiyal ksilanaz-selülaz-proteaz, lif fermantasyonu, UYA, B vit.',
      'Kolon-kloaka: 5-15 dk, pH 6.5-7.2, enzim yok, aldosteron, su geri emilimi ve atılım'
    ], 'Kanatlılarda sindirim mikrobiyal, fiziksel ve kimyasal olarak gerçekleşir.\n• Gaga ve ağız: <5 sn, pH 6.5-7.0; zayıf tükürük amilazı (pityalin) ve mukus; otonom uyarım; yemi yakalama ve kayganlaştırma.\n• Kursak: 30-120 dk, pH 4.5-5.5; mikrobiyal laktaz/amilaz, gagadan gelen pityalin, LAB (S. salivarius, L. acidophilus); enterik refleksler; depolama, ıslatma, asitleştirme.\n• Proventrikulus: 10-30 dk, pH 2.5-3.5; pepsin(ojen), HCl, mukus; gastrin (tokluk) ve ghrelin (açlık); kimyasal-enzimatik sindirimin başlatılması.\n• Taşlık: 30-90 dk, pH 2.0-3.0; koilin salgısı ve kimustaki pepsin; nöropeptitler; kasılma ve grit ile mekanik öğütme.\n• Duodenum: 10-20 dk, pH 5.8-6.4; tripsin, kimotripsin, amilaz, lipaz, safra; sekretin ve CCK; enzimatik hidroliz ve asidik kimusun nötrleşmesi.\n• Jejunum ve ileum: 60-120 dk, pH 6.4-7.4; maltaz, sükraz, aminopeptidaz (villus); peptid YY ve nörotensin; besin, vitamin, su emilimi.\n• Sekum (çift): 6-12 saat, pH 6.0-6.8; mikrobiyal ksilanaz, selülaz, proteaz; içsel motilite; lif fermantasyonu, su emilimi, UYA ve B vitamini üretimi.\n• Kolon ve kloaka: 5-15 dk, pH 6.5-7.2; belirgin enzim yok; aldosteron; su geri emilimi, idrar-dışkı birleşimi ve atılım.'),
    lg('sindirim-detay', 'Kursak, proventrikulus ve taşlığın yapı ve işlevlerini; görülen sorunlarla birlikte ayrıntılı anlatınız.', [
      'Kursak: depolama; LAB (S. salivarius, L. acidophilus) asidik ortam, Salmonella-E. coli baskılanır',
      'Kursak sorunları: yırtılma (kavuzlu yem, keskin nesne), Candida mantarı',
      'Proventrikulus: salgı midesi; HCl, pepsinojen, mukus',
      'Gastrin tokluk, grelin açlık; kimus tanımı',
      'Taşlık: kaslı yapı + taş ile fiziksel parçalanma; pepsin ile protein yıkımı',
      'Koilin: HCl\'den korur; goblet hücreleri: mukus, kendini sindirmeyi engeller',
      'Goblet yenilenmezse lezyon → ülser, gastrit, kanser'
    ], 'Kursak: yemin depolandığı, ıslatıldığı ve asitleştirildiği bölümdür. Buradaki LAB\'lar (Streptococcus salivarius ve Lactobacillus acidophilus) asidik ortam sağlar ve alkali seven Salmonella ve E. coli gibi patojenleri baskılar. Sorunlar: kursak yırtılması (iyi öğütülmemiş kavuzlu yemler veya keskin nesneler), kursak mantarı (Candida; ilaçla tedavi).\nProventrikulus (bez mide): salgıların toplandığı midedir; asitle aktifleşen proteazlar için HCl salgılar, pepsinojen ve mukus da buradan salgılanır. Gastrin tokluk, grelin açlık sinyali hormonudur. Kimus: salgı karışımı ile oluşan kıvamlı bulamaç.\nVentrikulus (taşlık, gizzard): kaslı yapısı (ve yutulan taşlar) ile yemi fiziksel olarak parçalar; HCl ile aktifleşen pepsin burada proteinleri kimyasal olarak parçalar. Koilin tabakası iç yüzeyi kaplayan sarımsı KH/protein kompleksidir ve HCl\'nin kas dokularına zarar vermesini engeller. Goblet hücreleri mukus salgılayıp taşlığın kendini sindirmesini engeller; sürekli yenilenmezlerse küçük lezyonlar ülser, gastrit ve kansere dönüşebilir.'),
    lg('enerji', 'Kanatlılarda enerji metabolizmasını; enerji sistemleri, enerji kullanımı, yarka beslemesi, enerji–protein dengesi ve kaynaklarıyla birlikte anlatınız.', [
      'BE, SE (−dışkı), ME (−idrar, gaz; katalog), NE (−ısı; et, süt, yumurta)',
      'Enerji önce bazal metabolizma, sonra verim',
      'Yem geçiş hızı yüksek → yem enerjisi yüksek; ketozis görülmez',
      'Yarka: aşırı enerji → erken yumurtlama, küçük yumurta; hedef ağırlığa kadar kontrol',
      'Enerji ↑ protein ↓ → yağlanma; etlik 22, yumurtacı 19 kalori',
      'Fazla protein → azotlu gübre',
      'Enerji kaynakları: yağlar, bitkisel yağlar, buğdaygil daneleri; protein kaynakları: hayvansal, rendering, baklagil, küspe, fermantasyon atıkları'
    ], 'Rasyon enerji sistemleri: brüt enerji (yakılınca açığa çıkan ısı) → sindirilebilir enerji (BE − dışkı) → metabolik enerji (SE − idrar ve gazlar; kataloglarda ME) → net enerji (ME − ısı üretimi; net enerji et/süt/yumurta).\nEnerji önce bazal metabolizmada, sonra verim için kullanılır. Kanatlılarda yem geçiş hızı yüksek olduğu için yem enerjisi yüksek tutulur. Besleme şartlarında ketozis görülmez (çok nadiren küçük civcivlerde ve tüy kırdırmada).\nYarkalara aşırı enerji vermek erken yaşlanma ve erken yumurtlamaya, dolayısıyla hep küçük yumurta üretimine yol açar; hedef ağırlığa kadar enerji kontrollü verilir. Erken yumurtlayan tavuk yaşlılıkta kemik sorunları, tüy kırdırma, kafes yorgunluğu yaşar.\nEnerji ↑ protein ↓ → yağlanma. Bu yüzden etlik civcivlere 22, yumurtacı civcivlere 19 kalori verilir; etlik civcivin hızlı gelişimi genetik kapasitesiyle ilgilidir. İhtiyaç fazlası protein azotlu gübreye dönüşür.\nEnerji kaynakları: yağlar, bitkisel yağlar, buğdaygil daneleri. Protein kaynakları: hayvansal kaynaklar, rendering ürünleri (balık unu, et/kemik unu), baklagil tohumları, küspeler, fermantasyon atıkları.'),
    lg('aminoasit-isi', 'Amino asitleri (esansiyel/esansiyel olmayan, sınırlayıcı AA) ve kanatlılarda ısı stresi ile beslenmeyi ayrıntılı anlatınız.', [
      '300\'den fazla AA; 10 esansiyel: methionin, lizin, treonin, triptofan, arginin, izolösin, lösin, valin, histidin, fenilalanin',
      'Esansiyel olmayan: alanin, aspartik asit, glutamik asit, glisin, serin, prolin, sistein, tirozin',
      'Lizin, methionin, triptofan sınırlayıcı; kaynakların AA profili farklı',
      'Triptofan → B3 (niasin)',
      'Vücut ısısı 41-42 °C; enerji büyük ölçüde termoregülasyona',
      'Isı stresi işaretleri: rektal ölçüm, solunum, nabız',
      'Sıcakta yağ, soğukta nişasta; C vitamini etkileri'
    ], 'Doğada 300\'den fazla amino asit vardır. Esansiyel olanlar: methionin, lizin, treonin, triptofan, arginin, izolösin, lösin, valin, histidin, fenilalanin. Esansiyel olmayanlar: alanin, aspartik asit (asparajin), glutamik asit (glutamin), glisin, serin, prolin, sistein, tirozin.\nLizin, methionin ve triptofan kas gelişimi için olmazsa olmazdır; sınırlayıcı faktördür. Tüm protein kaynaklarının AA miktar ve çeşitliliği farklıdır. Vitamine dönüşen AA: triptofan → B3 (niasin).\nKanatlılarda vücut ısısı 41-42 °C\'dir; küçük vücut yapısı ve geniş yüzey alanı nedeniyle enerjinin büyük kısmı termoregülasyona gider. Isı stresinin işaretleri: rektal termometre ölçümü, solunum sayısı değişimi, nabız.\nSıcak stresinde enerji yağlarla sağlanır (KH/nişasta parçalanırken yüksek ısı açığa çıkar); soğuk stresinde nişasta ile. Yağ daha konsantre enerjidir. C vitamini sıcak stresinde kortizolü düşürür, oksidatif stresi ve serbest radikalleri nötralize eder, bağışıklığın düşmesini engeller.'),
    lg('yumurta', 'Yumurta tavukçuluğunu; verim süresi, eşeysel olgunluk, molting ve yumurtada manipüle edilebilen nitelikler (IgY dahil) ile anlatınız.', [
      'Verim 60-70 hafta, 50. haftada düşüş', 'Eşeysel olgunluk 18. hafta hedeflenir ama kg cinsinden değerlendirilir',
      'Molting öncesi: kükürtlü AA kesilir, %25-30 ağırlık kaybı, yüksek Zn, düşük Na, az ışık, kısıtlı su, %80+ tüy dökümü',
      'Molting sonrası: yüksek protein ve kükürtlü AA, vit-min; verim-kalite-büyüklük artar',
      'Renk: Arap 9, Avrupa 4-6; selenyum ve iyot; ADEK sarıda', 'Koku Ω3; ömür E vitamini; renk ve koku sarıda',
      'IgY: vitellus ile maternal bağışıklık; insanlarda hedef patojen, florayı korur; kapsülasyon gerekir',
      'Yumurta tam gıda, 100 referans'
    ], 'Tavuk verimi 60-70 haftadır; 50. haftada verim düşer. Eşeysel olgunluk 18. haftaya çekilmeye çalışılır, ancak yumurta büyüklüğü tavuğun ağırlığıyla ilgili olduğu için kg cinsinden değerlendirilir.\nMolting (zorlamalı tüy dökümü): önce kükürtlü AA\'ler kesilir, %25-30 canlı ağırlık kaybı yaratılır; yüksek çinko, düşük sodyum, düşük aydınlatma ve kısıtlı su ile stres oluşturulur; tüylerin %80\'den fazlası dökülür. Sonra yüksek protein, yüksek kükürtlü AA ve vitamin-mineral verilir. Sonuç: verim, kalite, yumurta büyüklüğü ve ekonomik önem artar.\nManipüle edilebilen nitelikler: renk (Arap ülkeleri koyu, skala 9; Avrupa açık, 4-6); mineral içeriği (selenyum – reprodüksiyon, kas sağlığı, bağışıklık; iyot); AA kompozisyonu; yağ asidi kompozisyonu ve ADEK (sarıda depolanır); koku (Ω3 kaynakları: balık, alg); ömür (E vitamini oksidasyondan korur).\nIgY: immünoglobulinler yumurtaya geçer, civcive vitellus üzerinden ulaşır (maternal bağışıklık); bunu tamamlayamayan civciv tam kapasiteye ulaşamaz. İnsanlarda zararlı organizmaları bağlayıp çoğalma ve tutunmalarını engeller, sadece hedef patojenlere etkilidir, florayı bozmaz, yan etkisi yoktur (yumurta alerjisi hariç). Protein yapılı olduğundan mide asidinde parçalanır, kapsülasyon gerekir.\nYumurta tam gıdadır (100 referans); renk ve koku sarıda depolanır.'),
    lg('katki', 'Kanatlı yem katkı maddelerini tanımlayıp tüm gruplarını örnekleriyle anlatınız.', [
      'Rasyona %1\'e kadar, ortalama %0.1-0.5; doğal veya sentetik; amaç sağlığı iyileştirmek',
      'İlk katkılar fitobiyotikler; antibiyotikler kalıntı ve direnç nedeniyle bırakıldı',
      'Fitobiyotikler: kekik-karvakrol, karanfil-öjenol, tarçın-sinnamaldehit; sarımsak kullanılmaz',
      'Probiyotikler: Bacillus, rekabetçi dışlama; prebiyotikler: FOS, β-glukan, MOS; sinbiyotik',
      'Antioksidanlar: E vit., selenyum (GPx, SOD), polifenoller',
      'Enzimler: fitaz (bağlı P), ksilanaz, β-glukanaz',
      'Toksin bağlayıcılar: aktif kömür, zeolit, bentonit; Aspergillus aflatoksin-okratoksin, Fusarium DON-ZEN',
      'Organik asitler: asetik, formik, fumarik, sitrik; pH ↓, antibiyotik alternatifi'
    ], 'Yem katkı maddeleri rasyona %1\'e kadar (ortalama %0.1-0.5) katılan doğal veya sentetik maddelerdir (ör. sentetik fitaz; fermentörlere laktik asit bakterisi). Temel yaklaşım sağlığı iyileştirmektir; hiçbiri tamamen dengeli değildir. İlk katkılar fitobiyotiklerdir. Antibiyotikler büyütme faktörü olarak sunulmuş, kalıntı bıraktığı ve patojenler direnç geliştirdiği için artık kullanılmamaktadır.\n• Fitobiyotikler: en eski katkılar (gül yağı, nane yağı); yem tüketimini destekler, sindirimi hızlandırır. Sarımsak gaz yaptığı için kullanılmaz; tarçın yağı antimikrobiyal. En çok: kekik-karvakrol, karanfil-öjenol, tarçın-sinnamaldehit.\n• Probiyotikler: canlı kültürler (Bacillus); mikrobiyotayı dengeler, bağışıklığı güçlendirir, rekabetçi dışlama ile E. coli ve Salmonella ile savaşır; ilk civciv yemlerinde verim sağlar.\n• Prebiyotikler: kanatlı enzimleriyle parçalanamayan, probiyotiklerin seçici kullandığı KH: FOS, β-glukan, MOS. Sinbiyotikler: probiyotik + prebiyotik.\n• Antioksidanlar: oksidatif stres ve doku hasarını engeller, yaşlanmayı geciktirir, raf ömrünü uzatır: E vit., selenyum (glutatyon peroksidaz, SOD), polifenoller (kekik, biberiye, üzüm çekirdeği).\n• Enzimler: fitaz bağlı fosforu çözer; ksilanaz ve β-glukanaz hücre duvarı polisakkaritlerini parçalar.\n• Toksin bağlayıcılar: aktif kömür, zeolit, bentonit. Aspergillus → aflatoksin, okratoksin; Fusarium → DON, zearalenon (östrojen etkili). Mikotoksinler karaciğer, böbrek ve hormon aktivitesini bozar.\n• Organik asitler: asetik, formik, fumarik, sitrik; pH\'ı düşürür, yem hijyeni ve depolama stabilitesi sağlar, patojenleri baskılar, antibiyotik alternatifidir.'),
    lg('yyk-antibesin', 'Yemden yararlanma katsayısını (et, süt, yumurta), anti besleme faktörlerini ve NOP–enzim ilişkisini ayrıntılı anlatınız.', [
      'YYK = yem dönüşüm oranı', 'Et: yem / canlı ağırlık artışı; et piliçleri 1.5-1.8',
      'Süt: süt / yem KM; 1.4-1.8; <1.3 israf, >1.8 vücut yıkımı', 'Yumurta: yem / yumurta ağırlığı; 1.9-2.2',
      'Anti besleme faktörleri: proteaz inhibitörü, fitat, tanen-polifenol, lektin, saponin, guatrojen, okzalat, alkaloid',
      'Çözüm: ısıl işlem, enzim, yıkama-ıslatma-fermantasyon',
      'NOP: selüloz, lignin, çözünmeyen hemiselüloz; enzimle yapışkan kıvam, kloak tıkanması',
      'Enzim toz yemde etkili, pelette denatüre'
    ], 'Yemden yararlanma katsayısı = yem dönüşüm oranı.\n• Et (FCR): toplam tüketilen yem (kg) / canlı ağırlık artışı; et piliçlerinde 1.5-1.8.\n• Süt: üretilen süt (kg) / tüketilen yem KM (kg); süt sığırında 1.4-1.8; 1.3\'ten küçükse israf, 1.8\'den büyükse vücut yağı veya kas yıkarak süt üretimi.\n• Yumurta: toplam tüketilen yem (kg) / toplam yumurta ağırlığı (kg); 1.9-2.2, yani 2 kg yem → 1 kg yumurta.\nAnti besleme faktörleri: proteaz inhibitörleri, fitatlar, tanen ve polifenoller, lektinler, saponinler, guatrojenler, okzalatlar, alkaloidler. Çözümleri: ısıl işlemler, enzim ilavesi, yıkama-ıslatma ve fermantasyon.\nNOP (selüloz, lignin, çözünmeyen hemiselülozlar) enzim ile tüketildiğinde yapışkan sümük kıvamına gelir; toz/toprakla birleşerek kloakta tıkanmaya, çatlama ve ölümlere yol açar. Enzimler toz yeme katılırsa etkinliği artar; pelet yemde sıkıştırma ısısıyla denatüre olur.'),
    lg('sindirim-detay', 'İnce bağırsak enzimleri, sekretin, sekumdaki UYA\'lar, yağ sindirimi ve laktaz konusunu ayrıntılı anlatınız.', [
      'Duodenum: tripsin, kimotripsin, amilaz, lipaz, safra (pankreas)', 'Jejunum-ileum: maltaz, sükraz, aminopeptidaz (fırçamsı kenar)',
      'Sekretin: bikarbonat, gastrin inhibisyonu, safra artışı, mide hareketini yavaşlatma',
      'Sekum: selülaz; asetik → yağ, propiyonik → glikoz, bütirik → bağırsak yakıtı',
      'Yağ: duodenumda sindirim, jejunum-ileumda emilim; civciv pinositoz-endositoz',
      'Laktaz yok → ishal; Bresse tavuğu (süt ile beslenir)'
    ], 'Duodenumda pankreas enzimleri (tripsin, kimotripsin, amilaz, lipaz) ve safra; jejunum ve ileumda villuslardaki fırçamsı kenar enzimleri (maltaz, sükraz, aminopeptidazlar) etkilidir.\nSekretin pankreastan bikarbonat salgılatıp kimusu nötralize eder, ince bağırsağı asitten korur; gastrin salınımını inhibe ederek HCl\'yi azaltır; karaciğerde safra üretimini hızlandırır; midenin peristaltik hareketini yavaşlatır.\nSekumda selülotik bakteriler selülaz salgılar, lifler sindirilir. UYA\'lar: asetik asit → asetat → asetil CoA → ATP / karaciğerde yağ; propiyonik asit → propiyonil CoA → süksinil CoA → ATP / karaciğerde glikoz; bütirik asit → bağırsak hücrelerinin yakıtı.\nYağ sindirimi duodenumda enzimlerle olur, emilim jejunum ve ileumda; yumurtadaki civciv sarıdaki yağları pinositoz ve endositoz ile alır.\nKanatlılarda laktaz enzimi yoktur; süt şekeri verilirse ishal yapar. Bresse tavuğu (kırmızı gaga, mavi bacak, beyaz tüy) süt ürünleriyle beslenir; eti pişerken su kaybetmez ve son 1 ayda süt ile mermerleşir.')
  ]
});
})();
