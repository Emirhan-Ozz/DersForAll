(function () {
var Q = App.Q, mc = Q.mc, tf = Q.tf, fill = Q.fill, op = Q.op, lg = Q.lg;

App.course({
  id: 'gida', short: 'Gıda Teknolojisi', title: 'Gıda Teknolojisi ve Gıda Güvenliği',
  desc: 'Bileşim ve bozulmalar, kurutma, ısıl işlem, soğutma-dondurma, fermantasyon, konserve, MAP, ışınlama, meyve-sebze ve tahıl teknolojisi.',
  lead: 'Kaynak: 1–7. hafta vize notları. ★★★ (slaytta kırmızı) yerler: pastörizasyon/sterilizasyon, pH 4.6, F0, ışınlama, HMF, pektin, falling number, Maillard.',
  traps: [
    { t: '**Pastörizasyon:** patojenlerin tümü ölür, **bütün** mikroorganizmalar ölmez. **Sterilizasyon:** >100 °C, tümü hedeflenir; ticari sterilizasyon **mutlak** sterilite sağlamaz.', topic: 'isil' },
    { t: 'Süt pastörizasyonu: **72 °C 15 sn** (HTST) veya **63 °C 30 dk** (LTLT). UHT: **135-150 °C, 2-4 sn**.', topic: 'isil' },
    { t: 'Pastörizasyonda mutlaka ölmeli: **Mycobacterium tuberculosis** ve **Coxiella burnetii**. Konservede asıl tehlike: **Clostridium botulinum** ve sporları.', topic: 'isil' },
    { t: 'Düşük asitli gıdada kritik pH **4.6**; **pH < 4.6 güvenli**.', topic: 'fermantasyon' },
    { t: '**F0:** 121.1 °C\'de C. botulinum sporlarını yok etmek için gereken süre (dakika). Sıcaklık düşerse süre uzar.', topic: 'konserve' },
    { t: 'Işınlama = **soğuk sterilizasyon**; **radyoaktiviteye sebep olmaz**. Hücre küçüldükçe direnç **artar**. Radura logosu.', topic: 'konserve' },
    { t: 'Radurizasyon **<1 kGy**, radisidasyon **<10 kGy**, radapperdizasyon **>10 kGy** (enzim ve spor için 50 kGy).', topic: 'konserve' },
    { t: 'Hızlı dondurma: **mikro** kristal, az damlama kaybı; yavaş dondurma: hücre dışında **makro** kristal, doku bozulur.', topic: 'soguk' },
    { t: 'HM pektin **yüksek şeker + asit**, sert jel, geleneksel reçel. LM/LMA pektin **Ca²⁺ köprüsü** (yumurta kutusu), diyet reçel.', topic: 'meyve-sebze' },
    { t: '**HMF** = basit şeker + asit + ısı → kanserojen risk; düşük sıcaklıkta reçel üretimi gerekir.', topic: 'meyve-sebze' },
    { t: 'Yüksek **falling number** = **düşük** α-amilaz aktivitesi = ekmeğe uygun.', topic: 'tahil-urun' },
    { t: '**Maillard** = indirgen şeker + amino asit + ısı. **Karamelizasyon** = sadece şeker + ısı.', topic: 'tahil-urun' },
    { t: 'Ekmek **T. aestivum**, makarna **T. durum** (makarnada mayalama yok). Mısır ekmeğinde fermantasyon sadece buğday unu eklenirse olur.', topic: 'tahil-urun' }
  ],
  rules: {
    bilesim: 'KH ve protein 4 kcal/g, yağ 9 kcal/g, vitaminler enerji vermez. Yağda çözünen ADEK, suda çözünen B ve C (depolanmaz).',
    bozulma: 'Bozulma nedenleri: fiziksel (sıcaklık, RH-aw, ışık, darbe), kimyasal (enzimatik / enzimatik olmayan), mikrobiyal (bakteri, maya, küf).',
    kurutma: 'Su aktivitesi = gıdadaki suyun buhar basıncı / aynı sıcaklıktaki saf su buhar basıncı. Yüksek aw reaksiyon ve mikrobiyal faaliyeti hızlandırır.',
    isil: 'Pastörizasyon: 60-80 °C, ılımlı, patojenler ölür, raf ömrü uzar ama soğuk zincir gerekir. Sterilizasyon: >100 °C, vejetatif + spor formdaki bozucular inhibe edilir.',
    soguk: 'Soğutma 0-4 °C, doku korunur. Dondurma 0 °C altı, sıvı su kalmaz, mikrobiyal faaliyet durur; doku genellikle korunmaz (hızlı dondur, yavaş çöz).',
    fermantasyon: 'Koruma: düşük pH, alkol, organik asitler, besin için yarışma. Kritik pH 4.6. Laktik: Lactobacillus; alkol: S. cerevisiae; asetik: Acetobacter; propiyonik: Propionibacterium.',
    konserve: 'Konserve: ısıl işlem + hermetik kapama. MAP: N2 dolgu, CO2 antimikrobiyal, O2 az (canlı ürün ve et rengi). Işınlama: kısa dalga boylu, yüksek frekanslı enerji.',
    'meyve-sebze': 'Meyve suyu %100, nektar %25-50, meyveli içecek <%10. Reçel: parçalar iri; marmelat: parça yok. Salça ısıl işlemi 85-90 °C 3-5 dk pektinazı inaktive eder.',
    'tahil-urun': 'Tahıl: KH %65-75, protein %8-12. Depolama nemi %12-14; >%14 küf/mikotoksin. Gluten = gliadin + glutenin. Falling number α-amilaz göstergesi.'
  },
  topics: [
    { id: 'bilesim', title: 'Gıdaların bileşimi', src: '1. hafta',
      blocks: [
        { t: 'table', head: ['Bileşen', 'Element', 'Enerji', 'Notlar'], rows: [
          ['Karbonhidrat', 'C, H, O', '4 kcal/g', 'Temel enerji kaynağı. Basit: monosakkarit (glikoz, fruktoz, galaktoz), disakkarit (sakkaroz, laktoz, maltoz). Kompleks: nişasta, glikojen, selüloz'],
          ['Protein', 'C, H, O, N (bazılarında S)', '4 kcal/g', 'Amino asitlerden (11 + 9 esansiyel). Hayvansal proteinler tam protein. Görev: yapım-onarım, enzim-hormon, bağışıklık, kas kasılması, taşıma'],
          ['Yağ', 'C, H, O', '9 kcal/g', 'ADEK emilimi, hormon üretimi, hücre yapısı, korunma ve yalıtım. Doymamış (oda sıcaklığında sıvı): MUFA, PUFA (omega 3, 6, 9). Doymuş (katı): hayvansal yağlar'],
          ['Vitaminler', '—', '**Enerji vermez**', 'Büyüme, bağışıklık, gelişme, enerji üretiminde rol. Yağda çözünen ADEK; suda çözünen C ve B grubu (depolanmaz)']
        ] }
      ] },
    { id: 'bozulma', title: 'Gıdalarda bozulmalar', src: '1. hafta',
      blocks: [
        { t: 'ul', items: [
          '**Bozulma:** değişiklikler nedeniyle gıdanın tüketilemez hale gelmesi; renk, tat, koku, yapıda istenmeyen değişim. Sonuç: **sağlık, kalite ve ekonomik kayıp**.',
          '**Önleme:** ambalajlama, ısı uygulaması, soğukta muhafaza, su aktivitesini düşürme, dondurma, katkı maddesi.',
          '**Nedenler:** fiziksel (sıcaklık, RH-aw, ışık, darbe) → kimyasal (enzimatik / enzimatik olmayan) → mikrobiyal (bakteri, maya, küf).',
          '**aw:** serbest suyun oranı; mikrobiyal faaliyeti ve kimyasal reaksiyonları (oksidasyon, Maillard) etkiler.'
        ] },
        { t: 'table', head: ['Gıda', 'aw', 'Mikroorganizma', 'Minimum aw'], rows: [
          ['Saf su', '≈ 1', 'Bakteri (patojen)', '0.91–0.95'], ['Taze et, süt', '≈ 0.98', 'Küf', '0.80'], ['Meyve', '≈ 0.98', 'Halofilik bakteri', '0.75'],
          ['Ekmek', '≈ 0.95', 'Ozmofilik maya', '0.60'], ['Peynir', '≈ 0.90', '', ''], ['Kuru meyve', '≈ 0.60', '', ''], ['Galeta, bisküvi, kraker', '≈ 0.30', '', '']
        ] },
        { t: 'table', head: ['Enzim', 'Hedef', 'Değişim'], rows: [
          ['Polifenol oksidaz (PPO)', 'Polifenoller', 'Renk değişimi, kararma'], ['Lipaz', 'Yağlar (trigliserit)', 'Yağ asitlerine parçalanma, acılaşma'],
          ['Proteaz', 'Proteinler', 'Protein parçalanması, koku ve doku bozulması'], ['Amilaz', 'Nişasta', 'Basit şekerlere parçalama, tatlılık değişimi'],
          ['Pektinaz', 'Pektin (hücre duvarı)', 'Meyvede yumuşama, meyve suyunda çökelti, bulanıklık'], ['Laktaz', 'Laktoz', 'Laktoz parçalanması, asitlik artışı, tat değişimi']
        ] },
        { t: 'ul', items: [
          '**Enzimatik olmayan:** Maillard (indirgen şeker + amino asit + ısı → kahverengi renk, aroma, lisin vb. besin kaybı) · karamelizasyon (şeker + yüksek sıcaklık) · oksidasyon (yağ asidi + O2 → ransidite/acılaşma) · pigment bozulması (asitle renk değişimi; konservede yeşilin kahverengiye dönmesi).',
          '**Mikrobiyolojik:** bakteri (asidik tat, gaz, toksin, şişme, kötü koku) · maya (alkol, asit, gaz; ekşi-alkollü tat) · küf (mikotoksin, renk bozulması).'
        ] },
        { t: 'table', head: ['Gıda (1. hafta tablosu)', 'Saklama °C'], rows: [
          ['Taze balık', '0–2'], ['Ekmek, kuru baklagil, un-şeker-tuz', '18–22'], ['Patates, soğan', '7–15'], ['Ayran, kefir, peynir', '1–4'], ['Tropikal meyveler', '10–13'], ['Donuk ürünler', '−18 ve altı']
        ] },
        { t: 'note', text: 'Notlarda 1. ve 3. haftada iki saklama tablosu var; et, süt, yumurta ve sebze için aralıklar biraz farklı. 3. hafta tablosu Soğutma konusunda.' }
      ] },
    { id: 'kurutma', title: 'Muhafaza yöntemleri ve kurutma', src: '2. hafta',
      blocks: [
        { t: 'table', head: ['Mikroorganizmaya etkisi', 'Yöntemler'], rows: [
          ['Öldürme', 'Yüksek sıcaklık, ışınlama'],
          ['Gelişimi yavaşlatma', 'Düşük sıcaklık, aw düşürme, MAP, asitliği artırma, katkı'],
          ['Bulaşmayı önleme', 'Aseptik çalışma, ambalajlama, dekontaminasyon']
        ] },
        { t: 'ul', items: [
          '**Kurutma:** gıdadaki suyun uzaklaştırılması; en eski muhafaza yöntemlerinden. Esas: suyu mikroorganizma ve biyokimyasal reaksiyonlar için gerekli seviyenin altına indirmek.',
          '**Su aktivitesi** = gıdadaki suyun buhar basıncı / **aynı sıcaklıktaki** saf suyun buhar basıncı.',
          '**Yüksek su aktivitesi** biyokimyasal reaksiyonların ve mikrobiyal faaliyetlerin daha hızlı olmasına yol açar.',
          'Etki mekanizması: aw düşer (reaksiyonlar yavaşlar/durur) + ısıl işlem (mikrobiyal yük azalır).'
        ] },
        { t: 'table', head: ['Gıda', 'Nem %', 'aw'], rows: [
          ['Taze et', '65–75', '0.98'], ['Süt', '87', '0.98'], ['Peynir', '50', '0.95'], ['Ekmek', '35–45', '0.95'], ['Bal', '17–20', '0.55'], ['Kuru meyve', '15–25', '0.60–0.70'], ['Bisküvi', '2–5', '0.30–0.50']
        ] },
        { t: 'table', head: ['Kurutma tipi', 'Özellik'], rows: [
          ['Güneşte', 'Ucuz, uzun süre, iklime bağlı, hijyen riski, çevreden bulaşma (meyve, sebze, balık)'],
          ['Sıcak hava akımı', 'Kısa süre, iklimden bağımsız, kontrollü sıcaklık, hijyenik; yüksek enerji, ısıyla besin kaybı'],
          ['Vakumlu', 'Daha düşük sıcaklık, daha hızlı kuruma'],
          ['Tambur', 'Yüksek sıcaklık, yüzeyle direkt temas, kısa süre, yüksek besin kaybı; ısıya dayanıklı ürünler'],
          ['Sprey', 'Sıvı gıdalar, kısa süre, kurulum maliyeti, toz ürün'],
          ['Dondurarak', 'Üst kalite (renk, bileşim), uzun süre, düşük sıcaklık, ısıya hassas gıdalar; çok yüksek enerji ve kurulum maliyeti'],
          ['Radyasyon (infrared/mikrodalga)', 'Elektromanyetik dalgayla su buharlaşır; kısa süre; hassas kontrol gerekir, ürün yanabilir']
        ] }
      ] },
    { id: 'isil', title: 'Isıl işlem: pastörizasyon ve sterilizasyon', src: '2. hafta ★★★',
      blocks: [
        { t: 'ul', items: [
          '**Isıl işlem:** sıcaklıkla bozulma etkeni mikroorganizmaların yok edilmesi; amaç bileşenleri koruyarak mikrobiyal yükü düşürmek ve patojenleri elimine etmek (uygun sıcaklık-süre).',
          '**İnaktivasyon:** proteinlerin denatürasyonu (DNA, RNA, hücre zarı) ve enzimlerin inaktivasyonu.',
          '**Hücre zarı:** en önemli etki zar bozulması; lipitler akışkanlaşır, içerik dışarı/dış içerik içeri geçer, zar proteinleri denatüre olur.',
          'Endüstride iki kategori: **pastörizasyon** ve **sterilizasyon** (sıcaklık şartları ve mikrobiyal yük).'
        ] },
        { t: 'h', text: 'Pastörizasyon' },
        { t: 'ul', items: [
          'Patojenlerin **tümü** ve bozucuların **büyük bölümü** inhibe edilir; **bütün mikroorganizmalar yok edilmez**; diğerleri düşük seviyeye iner.',
          'Sağlık güvenliği sağlanır, raf ömrü uzar.',
          'Ilımlı ısıl işlem: süt, meyve suyu, bira, yumurta gibi ısıya hassas gıdalar; genellikle **60-80 °C, 30 dk\'ya kadar**.',
          'Süt (kodeks): **72 °C 15 sn (HTST)** veya **63 °C 30 dk (LTLT)**.',
          'Spor oluşturmayan patojenler **Mycobacterium tuberculosis** (verem) ve **Coxiella burnetii** (Q humması) **tamamen** ölmelidir.',
          'Canlı kalanlar: **termodurik** (Streptococcus, Lactobacillus; yüksek sıcaklıkta gelişemez, sıcaklık düşünce tekrar ürer) · **termofilik** (Bacillus, Clostridium; yüksek sıcaklıkta üremeye devam eder).'
        ] },
        { t: 'h', text: 'Sterilizasyon' },
        { t: 'ul', items: [
          '**100 °C\'den yüksek**; patojen olsun olmasın **tüm** mikroorganizmaların inhibisyonu hedeflenir.',
          'Pastörize ürüne göre **daha uzun raf ömrü**; **soğuk zincir şartı yoktur**.',
          '**Ticari sterilizasyon** mutlak sterilizasyon sağlamaz; vejetatif ve spor formdaki **bozulma sebebi** tüm mikroorganizmalar inhibe edilir.',
          '**Clostridium botulinum** ve sporları: anaerobik koşullarda ürer; gaz üretimiyle şişme (kapaktan anlaşılır); **botulinum toksini (nörotoksin)**.',
          '**UHT** (süt, meyve suyu): **135-150 °C, 2-4 sn**; borusal sistem, ani soğutma, aseptik ambalaj, uzun raf ömrü.'
        ] }
      ] },
    { id: 'soguk', title: 'Soğutma, dondurma ve soğuk zincir', src: '3. hafta',
      blocks: [
        { t: 'ul', items: [
          '**Soğutma:** gıdaların **0-4 °C**\'de tutulması; en yaygın muhafaza yöntemi; raf ömrü uzar; tat, renk, besin ve doku korunur (dokuda net fiziksel değişim olmaz); gıda güvenliği.',
          '**Dondurma:** **0 °C altında** buz haline getirme; raf ömrü uzar; tat, renk, besin korunur; **doku genellikle korunmaz** (hızlı dondur / yavaş çöz); mevsim dışı tüketim.',
          'Mikrobiyal faaliyet için **sıvı su** gerekir; donunca sıvı su kalmaz → faaliyet durur.',
          '**Yavaş dondurma:** 3-72 saatte istenen sıcaklık. **Hızlı dondurma:** 30 dk\'da −20 °C altı.',
          'Dondurma hızı etkiler: buz kristali büyüklüğü, mikroorganizmanın sıcaklık adaptasyonu, soğuk şoku.'
        ] },
        { t: 'table', head: ['Gıda grubu (3. hafta)', 'Depolama °C'], rows: [
          ['Et ve ürünleri', '0–2'], ['Süt ve ürünleri', '0–4'], ['Sebze ve meyveler', '4–8'], ['Tropik meyveler, patates, soğan', '8–15'], ['Pişmiş yemekler', '0–4'], ['Deniz ürünleri', '0–2'], ['Yumurta', '4']
        ] },
        { t: 'table', head: ['', 'Yavaş dondurma', 'Hızlı dondurma'], rows: [
          ['Bitki dokusu', 'Hücre dışında makro kristal; hücre içi su dışarı çıkar; hücre duvarı zedelenir; tekstür bozulur; damlama kaybı', 'Hücre içi ve dışında mikro kristal; kısmi zedelenme; duyusal özellikler daha iyi korunur; damlama kaybı az'],
          ['Mikroorganizma', 'Hücre dışında makro kristal; mikroorganizma büzülür; kısmi hücre zedelenmesi', 'Su hücre içinde donar (hacim artışı); hücre zarı delinir']
        ] },
        { t: 'ul', items: [
          '**Buhar sıkıştırmalı** sistem: kompresör, kondenser, genleşme valfi, evaporatör. **Absorpsiyonlu** (entegre tesis): absorber, jeneratör, kondenser, evaporatör. Temel: buharlaşma ve yoğuşma; **Carnot çevrimi**; madde kaybı yok.',
          'Yeni teknolojiler: hibrit adsorpsiyon/absorpsiyon, güneş destekli, faz değiştiren materyaller, termoelektrik, manyetik, termosonik, elektrokalorik soğutma.',
          '**Soğuk zincir:** üretim → işleme ve paketleme → depolama ve taşıma → dağıtım/perakende → tüketici.'
        ] }
      ] },
    { id: 'fermantasyon', title: 'Fermantasyon', src: '4-5. hafta ★★★',
      blocks: [
        { t: 'ul', items: [
          '**Fermantasyon (mayalama):** mikroorganizma faaliyetiyle besin maddelerinin kimyasal değiştiği ve yeni bileşiklerin oluştuğu biyolojik proses.',
          'Mikroorganizmalar: bakteri (Lactobacillus, Acetobacter, Propionibacterium), maya (Saccharomyces cerevisiae, Candida, Zygosaccharomyces), küf (Aspergillus, Penicillium).',
          '**Koruma mekanizması:** düşük pH (Clostridium botulinum\'a karşı), alkol, organik asitler (zar ve hücre içi yapıları bozar), besin için yarışma. Organik asit + alkol = geniş spektrumlu etki.',
          'Düşük asitli gıdalarda **kritik pH 4.6**; **pH < 4.6 güvenli**.'
        ] },
        { t: 'table', head: ['Tür', 'Mikroorganizma', 'Besini', 'Ürün'], rows: [
          ['Laktik asit', 'Lactobacillus spp.', 'Laktoz, glikoz, fruktoz, maltoz, sakkaroz', 'Yoğurt, turşu, salam'],
          ['Alkol (etanol)', 'Saccharomyces cerevisiae', 'Glikoz, fruktoz, sakkaroz', 'Ekmek, bira, şarap'],
          ['Asetik asit', 'Acetobacter spp.', 'Şeker, alkol', 'Sirke'],
          ['Propiyonik asit', 'Propionibacterium spp.', 'Laktik asit', 'Bazı spesifik peynirler'],
          ['Karma', 'Maya + bakteri', 'Şekerler ve lifler', 'Kefir, kombucha, ekşi maya ekmeği, zeytin']
        ] },
        { t: 'table', head: ['Mikroorganizma', 'Gelişme pH', 'En iyi pH'], rows: [['Bakteriler', '4.6–9.0', '6.5–7.5'], ['Mayalar', '3.0–8.5', '4.5–6.5'], ['Küfler', '2.0–11.0', '6.5–7.0']] },
        { t: 'table', head: ['Alkol %', 'Etki'], rows: [['< 5', 'Önemsiz'], ['5–10', 'Bazı bakteri ve maya yavaşlar'], ['10–15', 'Çoğu bakteri önlenir'], ['> 18', 'Tüm mikroorganizmalar için öldürücü']] },
        { t: 'table', head: ['Fermantasyon', 'Konserve'], rows: [
          ['Özgün tat, asidik özellik, fermente bileşen katmak; bozulmayı önlemek dolaylı', 'Bozulmayı önlemek, raf ömrünü uzatmak'],
          ['Spesifik mikroorganizmaların çoğaltılmasıyla', 'Isıtma (pastörizasyon/sterilizasyon) ve hermetik kapama ile'],
          ['Mikrobiyal faaliyet var', 'Mikrobiyal faaliyet yok ya da çok az']
        ] }
      ] },
    { id: 'konserve', title: 'Konserve, MAP ve ışınlama', src: '4-5. hafta ★★★',
      blocks: [
        { t: 'h', text: 'Konserve' },
        { t: 'ul', items: [
          'Bozulma ve zehirlenme etkeni mikroorganizmaların ve enzimlerin **ısıl işlemle** inhibe edilip raf ömrünün uzatıldığı proses; **ısıl işlem + hermetik kapama**.',
          'Koruma: ısıl işlem, asitli ortam, tuzlama/salamura, şekerleme.',
          'Ambalaj: **cam** (inert, şeffaf; ağır, kırılgan) · **metal** (dayanıklı, hafif, yüksek ısı iletimi; migrasyon, korozyon, oksitlenme) · **plastik** (hafif, şeffaf, esnek, ısıya uygun; migrasyon).',
          '**Migrasyon** önlemek için **lak** (epoksi, beyaz, altın vb.) uygulanır.',
          '**Botulizm riski** (Clostridium botulinum).',
          '**F0 değeri:** **121.1 °C**\'de C. botulinum sporlarını yok etmek için gereken ısıl işlem süresi; birimi **dakika**; ürünün **soğuk noktasının** bu sıcaklıkta ne kadar tutulacağını gösterir; sıcaklık düşerse süre uzar.'
        ] },
        { t: 'h', text: 'Modifiye atmosfer paketleme (MAP)' },
        { t: 'ul', items: [
          'Depolama atmosferinin bileşimi değiştirilerek sızdırmaz ambalajda depolama; mikrobiyal faaliyeti ve reaksiyonları yavaşlatır/sonlandırır.',
          '**Azot:** inert, hacmi doldurur, reaksiyona girmez. **CO2:** bakteri ve küf çoğalmasını önler. **O2:** tamamen uzaklaştırılmaz; az miktarda; canlı gıdalar ve et renginin korunması için gerekli.',
          '**Aktif MAP** (genellikle meyve-sebze dışı): ambalaj → vakum → istenen gaz → sızdırmaz kapama.',
          '**Pasif MAP** (meyve-sebze, canlı): gaz değiştirilmez; ürünün metabolizmasıyla modifiye atmosfer oluşur (1-2 saatten güne kadar).'
        ] },
        { t: 'table', head: ['Gıda', 'N2 %', 'O2 %', 'CO2 %'], rows: [
          ['Meyve-sebze', '80–92', '5–10', '3–10'], ['Taze kırmızı et', '0–5 (ops.)', '70–80', '20–30'], ['Et ürünleri', '50–100', '0–30', '20–50'],
          ['Kümes hayvanları', '20–40', '0–30', '40–60'], ['Süt ürünleri / hazır yemek', '60–70', '—', '30–40'], ['Deniz ürünleri', '40–60', '—', '40–60'], ['Cips', '100', '—', '—']
        ] },
        { t: 'h', text: 'Işınlama' },
        { t: 'ul', items: [
          '**Soğuk sterilizasyon.** Kısa dalga boylu ve yüksek frekanslı elektromanyetik enerjiyle sağlık risklerini gidermek ve raf ömrünü uzatmak.',
          'Işınlama gıdada **radyoaktiviteye sebep olmaz**.',
          'Etki: mikroorganizma, parazit, böcek ölür; zar yapısı bozulur, enzim yapısı değişir, RNA-DNA değişir.',
          'Hücre boyutu küçüldükçe **dirence artar**. Direnç: enzimler > mikroorganizmalar; sporlar > vejetatif hücre; bakteri > maya-küf; maya-küf > parazit-böcek.',
          '**Radurizasyon** < 1 kGy (yük azaltma, filizlenme önleme) · **Radisidasyon** < 10 kGy (spor oluşturmayan patojenler) · **Radapperdizasyon** > 10 kGy (ticari sterilizasyon; enzim ve spor için 50 kGy).',
          'Olumsuz: yağlı gıdada **acılaşma**, yüksek proteinlide **kötü koku ve tat**.',
          'Etikette yazı veya **Radura logosu** ile belirtilmesi zorunlu.'
        ] }
      ] },
    { id: 'meyve-sebze', title: 'Meyve-sebze işleme: meyve suyu, reçel, salça, turşu', src: '6. hafta ★★★',
      blocks: [
        { t: 'ul', items: [
          '**Solunum:** enerji için gerekli; şeker, organik asit kullanılır. Solunum hızı yüksek olanlarda bozulma hızlı (muz, brokoli, çilek, marul).',
          '**Fizyolojik bozulmalar:** solma (su kaybı, yapraklı sebze), yumuşama (hücre duvarı parçalanması), renk değişimi (klorofil, karotenoid), tat-aroma kaybı.'
        ] },
        { t: 'h', text: 'Meyve suyu ve nektar' },
        { t: 'table', head: ['Ürün', 'Meyve oranı', 'İlave'], rows: [
          ['Meyve suyu', '%100', 'Su ve şeker yok; doğrudan meyveden veya konsantrenin sulandırılmasıyla'], ['Meyve nektarı', '%25–50', 'Su ve şeker/tatlandırıcı'], ['Meyveli içecek', '< %10', 'Su, şeker, aroma, katkı']
        ] },
        { t: 'ul', items: [
          '**Presleme-sıkma:** sadece fiziksel (elma, üzüm, narenciye). **Ekstraksiyon:** mekanik + kimyasal + enzimatik; posa-lif yoğun ürünler (şeftali, kayısı); daha yüksek verim.',
          '**Filtrasyon ve durultma:** bulanıklığı giderip berraklık sağlamak. Pektin, nişasta ve proteinlerin polifenollerle bileşikleri bulanıklık yapar.',
          '**Durultma (klarifikasyon)** = depektinizasyon + berraklaştırma; filtrasyondan ileri seviye. Pektolitik ve amilotik enzimler pektin ve amilozu parçalar.',
          '**Berraklaştırma:** jelatin (+), bentonit (−), kizelzol (−) → flok → süzme.'
        ] },
        { t: 'h', text: 'Reçel ve marmelat' },
        { t: 'ul', items: [
          '**Reçel:** bütün, yarım veya daha küçük meyve parçalarına şeker ilavesiyle kıvamlı ürün; parçalar hangi meyveden olduğunu gösterecek kadar iri.',
          '**Marmelat:** meyve ezmesine (pulp) şeker ilavesi; meyve parçacığı yok. Fark parça iriliğidir.',
          'Aşamalar: hammadde → ön işlem → şeker ilavesi ve pişirme (genellikle **%60-65 şeker**, gerekirse pektin ve sitrik asit; uygun °Bx\'e kadar, **~105 °C**) → dolum-kapatma → soğutma-etiketleme.',
          'Jel: pektin + şeker, uygun pH (**3.0-3.5**) ve ısı ile.',
          '**HMF (5-hidroksi metil furfural):** basit şeker + asidik ortam + ısı. Bal, reçel, karamelize ürün, ekmek kabuğu, meyve suyunda. Kanserojen-toksik → **düşük sıcaklıkta reçel üretimi** gerekir.',
          'Jelleşmeyi pektin kaynağı ve **metoksilasyon derecesi (CH3)** etkiler: HM – LM – LMA.',
          '**HM pektin:** şeker suyu bağlar, pektinler arası OH grupları **hidrojen bağı** ile jel yapar. **LM ve LMA:** **Ca²⁺** iyonlarıyla iyonik bağ (**yumurta kutusu / egg-box** modeli).'
        ] },
        { t: 'table', head: ['Pektin', 'Şeker', 'Mekanizma', 'Jelleşme °C', 'Jel', 'Reçel'], rows: [
          ['HM (yüksek metoksilli)', 'Yüksek (%55-65)', 'Asit + şeker', '> 80', 'Sert, kırılgan; ısıtmayla başlar, soğumayla tamamlanır', 'Geleneksel'],
          ['LM (düşük metoksilli)', 'Gerekmez (tat için)', 'Ca²⁺ köprüleri', '60–80', 'Daha yumuşak', 'Diyet'],
          ['LMA (amide)', 'Gerekmez (tat için)', 'Ca²⁺ köprüleri (daha az Ca)', '70–75', 'Yumuşak, esnek, ısıya dayanıklı', 'Diyet']
        ] },
        { t: 'h', text: 'Salça' },
        { t: 'ul', items: [
          'Domates ve kırmızı biberden ezilip suyu çıkarılan pürenin fazla suyunun buharlaştırılmasıyla elde edilen koyu püre.',
          'Proses: tam olgun hammadde (renk) → yıkama, ayıklama → parçalama → **ısıl işlem 85-90 °C, 3-5 dk** (**pektinaz** inaktivasyonu) → pulper ve ince elek (çekirdek-kabuk ayırma) → **vakum altında konsantrasyon (60-70 °C; 30-36 °Bx)** → dolum-kapatma-pastörizasyon → soğutma-etiketleme.',
          'Kalite: renk, kıvam (30 °Bx), serum ayrılması (enzim), siyah-kırmızı benek (yanma, kabuk-çekirdek, alüminyum, oksidasyon, mikrobiyal), kaba lif-çekirdek-kabuk, küf sayısı.'
        ] },
        { t: 'h', text: 'Turşu' },
        { t: 'ul', items: [
          'Sebze ve meyvelerin tuzlu, asitli **salamurada** fermente edilmesiyle üretilir.',
          '**Laktik asit fermantasyonu (doğal):** **sirke kullanılmaz**; doğal LAB veya starter kültür; **2-4 hafta**.',
          '**Sirke ile asidifikasyon:** **%4-6 sirke** (asetik asit), **10-20 gün**; fermantasyon olmaz veya sınırlı. Toplam sirke > %25 kritik (pH 4.6 sınırı).',
          'Kalite: duyusal (görünüş, doku, tat, sertlik); kimyasal (**pH 3.0-4.0**, tuz **%3-8**); mikrobiyal.',
          'Bozulma: bulanık-köpüklü salamura, yumuşak-erimiş sebze, kötü koku, kapakta **bombe**, küf.'
        ] }
      ] },
    { id: 'tahil-urun', title: 'Tahıl ve ürünleri teknolojisi', src: '7. hafta ★★★',
      blocks: [
        { t: 'ul', items: [
          'Tahıl (hububat): genellikle buğdaygillerden hasat edilen ürünler ve tohumları.',
          'Bileşim: **KH %65-75, protein %8-12, yağ %1-3, lif ve kül %1-2**.',
          '**Bin tane ağırlığı** yüksek → iri dolgun, kaliteli. **Hektolitre (HL)** ağırlığı yüksek → dolgun, kaliteli.',
          '**Tane sertliği:** öğütmeye direnç; yüksek protein ve düşük nem → sert. Sert tane → irmik; yumuşak → ince un.',
          'Depolama nemi: buğday, mısır, kabuklu pirinç **%12-14**; arpa, yulaf-çavdar %12-13. **>%14** → küf ve mikotoksin; tohum canlı → metabolizma ve ısı.',
          'Silolar: nem ve sıcaklık takibi, havalandırma (ısınma/kızışma).'
        ] },
        { t: 'table', head: ['Buğday', 'Sertlik', 'Kullanım'], rows: [['Sert buğday', 'Çok sert', 'Makarna, irmik'], ['Sert ekmeklik', 'Sert', 'Ekmek, pide, simit'], ['Orta sert', 'Orta', 'Çeşitli unlu ürünler'], ['Yumuşak', 'Yumuşak', 'Bisküvi, kek, bazı hamur işleri']] },
        { t: 'h', text: 'Nişasta ve gluten' },
        { t: 'ul', items: [
          '**Nişasta:** kompleks KH, bitkilerin glikoz depolama şekli; **amiloz + amilopektin**.',
          'Jelleşme: **60-80 °C** ısı ve su ile; amiloz suyla şişip çözünür, dallanmış amilopektin suyu tutup viskoziteyi artırır.',
          '**Gluten = gliadin + glutenin:** bitkisel protein; mayalanma gazlarını tutup kabarmayı sağlar; **her tahılda bulunmaz**; hamura esneklik ve elastikiyet verir; protein kaynağı.',
          '**Çölyak:** bağırsak villuslarını tahrip eder, emilimi azaltır; hastalar **tamamen glutensiz** beslenmeli. Ayrıca gluten hassasiyeti (intoleransı).'
        ] },
        { t: 'h', text: 'Un üretimi ve öğütme' },
        { t: 'ol', items: [
          'Tahıl seçimi ve depolama (bin tane, HL ağırlığı, nem)', 'Temizleme (eleme, hava akımı, mıknatıs)',
          'Nem ayarlama ve yumuşatma (endosperm yumuşar, kepek kolay ayrılır, kalite artar)', 'Öğütme (un, irmik)', 'Eleme ve sınıflandırma',
          'Zenginleştirme (opsiyonel: B vitaminleri, demir)', 'Paketleme'
        ] },
        { t: 'table', head: ['', 'Geleneksel (taş değirmen)', 'Modern (valsli)'], rows: [
          ['Kepek', 'Kabuk ve kepek kısmen una geçer', 'Ayrılır'], ['Ürün', 'Tam tahıl unu', 'Beyaz un'], ['Besin değeri', 'Yüksek', 'Düşük (kepek gider)'], ['Kapasite/verim', 'Düşük', 'Yüksek']
        ] },
        { t: 'p', text: 'Ruşeym (yağ, E vitamini, antioksidan) un üretiminde ayrılır; yağ bozulması kaliteyi düşürür. Endosperm nişasta ve protein içerir, kullanılır. Kabuk lif, mineral ve B vitamini içerir, ayrılır.' },
        { t: 'h', text: 'Un analizleri' },
        { t: 'table', head: ['Test', 'Ne ölçer'], rows: [
          ['Granülometri', 'Partikül boyutu; ince unlar pastacılık ve ekmeğe uygun'],
          ['Protein (gluten) + asetat testi', 'Protein içeriği ve kalitesi; elastikiyet ve hacim; kullanım amacı'],
          ['**Falling number**', 'α-amilaz aktivitesi; nişastanın ne kadar şekere parçalanacağı; **yüksek değer = düşük enzim aktivitesi = ekmeğe uygun**'],
          ['**Farinograf**', 'Su absorpsiyonu, karışma özellikleri, viskozite; karıştırma süresi ve dayanıklılık'],
          ['**Extensograf**', 'Hamurun **uzama** ve dayanıklılığı; un ve glutenin ekmek performansı']
        ] },
        { t: 'h', text: 'Ekmek, mısır ekmeği, makarna' },
        { t: 'ul', items: [
          '**Ekmek:** hammadde → yoğurma → fermantasyon (ön mayalama) → şekil ve son fermantasyon → pişirme (**200-250 °C**) → soğutma-ambalaj. Un: **Triticum aestivum**. **CO2** gazı glutenle tutulup şişmeyi sağlar.',
          '**Mısır ekmeği:** un, su, tuz, kabartma ajanı (karbonat, kabartma tozu); **maya kullanılmaz** (buğday unu eklenirse kullanılabilir) → pişirme **180-200 °C**. Fermantasyon sadece buğday unu eklenirse vardır.',
          '**Makarna:** su, tuz, bazen yumurta → yoğurma → **ekstrüzyon** (kalıp) → kurutma → paketleme. Un: **Triticum durum**. **Mayalama-fermantasyon yoktur.**'
        ] },
        { t: 'h', text: 'Maillard reaksiyonu' },
        { t: 'ul', items: [
          'Amino asitler + indirgen şekerler + yüksek ısı. **Karamelizasyon değildir** (karamelizasyonda sadece şeker ve ısı).',
          'Kahverengi renk; karakteristik aroma (ekmek, kavrulmuş et, kahve, tatlılar, yanık dondurma).',
          'İleri ürünler (heterosiklik aminler vb.) **kanserojen** olabilir → aşırı pişirmeden kaçınılmalı.'
        ] }
      ] }
  ],

  bank: [
    /* bileşim */
    mc('bilesim', 'Yağların sağladığı enerji 1 gramda kaç kcal\'dir?', ['9', '4', '7', '2', '0'], 'KH ve protein 4, yağ 9 kcal/g; vitamin enerji vermez.'),
    mc('bilesim', 'Aşağıdakilerden hangisi enerji vermez?', ['Vitaminler', 'Karbonhidratlar', 'Proteinler', 'Yağlar', 'Nişasta'], 'Vitaminler büyüme, bağışıklık, enerji üretiminde rol oynar ama enerji vermez.'),
    mc('bilesim', 'Aşağıdakilerden hangisi disakkarittir?', ['Laktoz', 'Glikoz', 'Fruktoz', 'Galaktoz', 'Nişasta'], 'Disakkarit: sakkaroz, laktoz, maltoz.'),
    mc('bilesim', 'Suda çözünen ve vücutta depolanmayan vitaminler hangileridir?', ['C ve B grubu', 'A ve D', 'E ve K', 'A, D, E, K', 'Sadece A'], 'Yağda çözünenler ADEK.'),
    mc('bilesim', 'Oda sıcaklığında katı olan yağlar genellikle hangisidir?', ['Doymuş (hayvansal) yağlar', 'MUFA', 'PUFA', 'Omega 3', 'Omega 9'], 'Doymamışlar oda sıcaklığında sıvıdır.'),
    /* bozulma */
    mc('bozulma', 'Gıda bozulmasının sonuçları olarak notlarda hangi üç kayıp vurgulanır?', ['Sağlık, kalite ve ekonomik kayıp', 'Renk, koku ve tat kaybı', 'Su, yağ ve protein kaybı', 'Enerji, zaman ve iş kaybı', 'Vitamin, mineral ve lif kaybı'], ''),
    mc('bozulma', 'Patojen bakteriler için minimum su aktivitesi hangi aralıktadır?', ['0.91-0.95', '0.80', '0.75', '0.60', '0.30'], 'Küf 0.80, halofilik bakteri 0.75, ozmofilik maya 0.60.'),
    mc('bozulma', 'En düşük su aktivitesinde gelişebilen mikroorganizma grubu hangisidir?', ['Ozmofilik maya (0.60)', 'Küf (0.80)', 'Halofilik bakteri (0.75)', 'Patojen bakteri (0.91)', 'Termofilik bakteri'], ''),
    mc('bozulma', 'Polifenol oksidaz (PPO) enziminin gıdada yol açtığı değişim hangisidir?', ['Renk değişimi, kararma', 'Acılaşma', 'Yumuşama ve bulanıklık', 'Tatlılık değişimi', 'Asitlik artışı'], 'Lipaz acılaşma, pektinaz yumuşama-bulanıklık, amilaz tatlılık.'),
    mc('bozulma', 'Meyvede yumuşama, meyve suyunda çökelti ve bulanıklığa yol açan enzim hangisidir?', ['Pektinaz', 'Lipaz', 'Proteaz', 'Laktaz', 'PPO'], ''),
    mc('bozulma', 'Yağ asitlerine parçalanma ve acılaşmaya yol açan enzim hangisidir?', ['Lipaz', 'Amilaz', 'Pektinaz', 'PPO', 'Laktaz'], ''),
    mc('bozulma', 'Konserve sebzelerde yeşil rengin kahverengiye dönmesi hangi enzimatik olmayan bozulmaya örnektir?', ['Pigment bozulması', 'Maillard', 'Karamelizasyon', 'Oksidasyon', 'Lipoliz'], 'Asit etkisiyle renk değişimi.'),
    mc('bozulma', 'Yağ asitlerinin oksijenle tepkimesi sonucu ransidite (acılaşma) oluşması hangi bozulmadır?', ['Oksidasyon', 'Maillard', 'Karamelizasyon', 'Pigment bozulması', 'Fermantasyon'], ''),
    mc('bozulma', 'Mikotoksin oluşumu ve renk bozulması hangi mikroorganizma grubuyla ilişkilidir?', ['Küf', 'Maya', 'Bakteri', 'Virüs', 'Parazit'], 'Maya: alkol, asit, gaz; bakteri: asidik tat, gaz, toksin, şişme.'),
    mc('bozulma', 'Donuk ürünlerin saklama sıcaklığı hangisidir?', ['−18 °C ve altı', '0-4 °C', '−4 °C', '−10 °C', '1-4 °C'], ''),
    /* kurutma */
    mc('kurutma', 'Su aktivitesi nasıl tanımlanır?', ['Gıdadaki suyun buhar basıncının aynı sıcaklıktaki saf suyun buhar basıncına oranı', 'Gıdadaki toplam su miktarı', 'Saf suyun buhar basıncının gıdadaki suya oranı', 'Gıdanın nem yüzdesi', 'Gıdadaki bağlı suyun oranı'], ''),
    mc('kurutma', 'Su aktivitesi en düşük gıda hangisidir?', ['Bisküvi', 'Bal', 'Kuru meyve', 'Ekmek', 'Peynir'], 'Bisküvi 0.30-0.50; bal 0.55; kuru meyve 0.60-0.70.'),
    mc('kurutma', 'Balın su aktivitesi yaklaşık kaçtır?', ['0.55', '0.98', '0.95', '0.30', '0.80'], 'Bal nem %17-20, aw 0.55.'),
    mc('kurutma', 'Hangi kurutma yönteminde üst kalite (renk, bileşim) elde edilir ancak enerji ve kurulum maliyeti çok yüksektir?', ['Dondurarak kurutma', 'Güneşte kurutma', 'Tambur kurutma', 'Sıcak hava akımı', 'Vakumlu kurutma'], 'Isıya hassas gıdalar için.'),
    mc('kurutma', 'Sıvı gıdalardan toz ürün elde etmek için kullanılan kurutma yöntemi hangisidir?', ['Sprey kurutma', 'Güneşte kurutma', 'Tambur kurutma', 'Vakumlu kurutma', 'Radyasyonla kurutma'], ''),
    mc('kurutma', 'Yüksek sıcaklık ve yüzeyle doğrudan temas nedeniyle besin kaybı yüksek olan kurutma yöntemi hangisidir?', ['Tambur kurutma', 'Dondurarak kurutma', 'Vakumlu kurutma', 'Güneşte kurutma', 'Sprey kurutma'], 'Isıya dayanıklı ürünlere uygulanır.'),
    mc('kurutma', 'Gelişimin yavaşlatılması yoluyla etki eden muhafaza yöntemi hangisidir?', ['MAP', 'Işınlama', 'Aseptik çalışma', 'Yüksek sıcaklık', 'Dekontaminasyon'], 'Yavaşlatma: düşük sıcaklık, aw düşürme, MAP, asitlik, katkı. Öldürme: sıcaklık, ışınlama. Bulaşmayı önleme: aseptik, ambalaj, dekontaminasyon.'),
    mc('kurutma', 'Daha düşük sıcaklıkta ve daha hızlı kuruma sağlayan yöntem hangisidir?', ['Vakumlu kurutma', 'Güneşte kurutma', 'Tambur kurutma', 'Sıcak hava akımı', 'Sprey kurutma'], ''),
    /* ısıl */
    mc('isil', 'Pastörizasyon için hangisi **yanlıştır**?', ['Bütün mikroorganizmalar yok edilir', 'Patojenlerin tümü inhibe edilir', 'Bozucuların büyük bölümü inhibe edilir', 'Raf ömrü uzar', 'Genellikle 60-80 °C uygulanır'], 'Pastörizasyonda bütün mikroorganizmalar yok edilmez.'),
    mc('isil', 'Sütte HTST pastörizasyon koşulu hangisidir?', ['72 °C, 15 sn', '63 °C, 30 dk', '135-150 °C, 2-4 sn', '121.1 °C, F0', '85-90 °C, 3-5 dk'], 'LTLT 63 °C 30 dk; UHT 135-150 °C 2-4 sn.', { 1: 'Bu LTLT (düşük sıcaklık uzun süre) koşuludur.', 2: 'Bu UHT koşuludur.' }),
    mc('isil', 'Pastörizasyonla tamamen öldürülmesi gereken spor oluşturmayan patojenler hangileridir?', ['Mycobacterium tuberculosis ve Coxiella burnetii', 'Clostridium botulinum ve Bacillus', 'Streptococcus ve Lactobacillus', 'Saccharomyces ve Candida', 'Aspergillus ve Penicillium'], ''),
    mc('isil', 'Pastörizasyondan sonra canlı kalan, yüksek sıcaklıkta gelişemeyen ama sıcaklık düşünce tekrar üreyebilen bakteriler hangileridir?', ['Termodurik (Streptococcus, Lactobacillus)', 'Termofilik (Bacillus, Clostridium)', 'Patojenler', 'Halofilikler', 'Ozmofilikler'], 'Termofilikler yüksek sıcaklıkta üremeye devam eder.', { 1: 'Termofilikler yüksek sıcaklıkta da üremeye devam eder.' }),
    mc('isil', 'Sterilizasyon için hangisi doğrudur?', ['Soğuk zincirde depolama şartı yoktur', '60-80 °C\'de uygulanır', 'Patojenlerin sadece bir kısmı ölür', 'Raf ömrü pastörize üründen kısadır', 'Ticari sterilizasyon mutlak sterilite sağlar'], 'Sterilizasyon >100 °C; ticari sterilizasyon mutlak sterilite sağlamaz.'),
    mc('isil', 'UHT işleminin koşulu hangisidir?', ['135-150 °C, 2-4 sn', '72 °C, 15 sn', '63 °C, 30 dk', '100 °C, 30 dk', '60-80 °C, 30 dk'], 'Borusal sistem, ani soğutma, aseptik ambalaj.'),
    mc('isil', 'Isıl işlemin hücreye en önemli etkisi hangisidir?', ['Hücre zarının bozulması', 'DNA\'nın çoğalması', 'Spor oluşumunun artması', 'Su aktivitesinin artması', 'Hücre duvarının kalınlaşması'], 'Lipitler akışkanlaşır, içerik dışarı çıkar, zar proteinleri denatüre olur.'),
    mc('isil', 'Konservelerde kapak şişmesiyle anlaşılabilen ve nörotoksin üreten bakteri hangisidir?', ['Clostridium botulinum', 'Mycobacterium tuberculosis', 'Coxiella burnetii', 'Lactobacillus', 'Acetobacter'], 'Anaerobik koşullarda ürer, gaz üretir.'),
    mc('isil', 'Ticari sterilizasyon için hangisi doğrudur?', ['Vejetatif ve spor formdaki bozulma sebebi tüm mikroorganizmalar inhibe edilir, ancak mutlak sterilite sağlanmaz', 'Sadece patojenler ölür', 'Mutlak sterilite sağlanır', '60-80 °C uygulanır', 'Sporlar etkilenmez'], ''),
    /* soğuk */
    mc('soguk', 'Soğutmada gıdalar hangi sıcaklık aralığında tutulur?', ['0-4 °C', '−18 °C ve altı', '8-15 °C', '18-22 °C', '−4 ile 0 °C'], ''),
    mc('soguk', 'Dondurma ile mikrobiyal faaliyetin durmasının nedeni nedir?', ['Sıvı formda su kalmaması', 'pH\'ın düşmesi', 'Oksijenin tükenmesi', 'Işığın kesilmesi', 'Enzimlerin artması'], 'Mikrobiyal faaliyet için sıvı su gerekir.'),
    mc('soguk', 'Hızlı dondurmada istenen sıcaklığa ulaşma süresi nedir?', ['30 dakikada −20 °C altı', '3-72 saat', '24 saatte −4 °C', '2-4 saniye', '10-20 gün'], 'Yavaş dondurma 3-72 saat.'),
    mc('soguk', 'Hızlı dondurmanın bitki dokusuna etkisi hangisidir?', ['Hücre içi ve dışında mikro kristaller oluşur, damlama kaybı azalır', 'Hücre dışında makro kristal oluşur', 'Hücre duvarı tamamen zedelenir', 'Damlama kaybı artar', 'Tekstür tamamen bozulur'], ''),
    mc('soguk', 'Buhar sıkıştırmalı soğutma sisteminin elemanları arasında hangisi **yoktur**?', ['Jeneratör', 'Kompresör', 'Kondenser', 'Genleşme valfi', 'Evaporatör'], 'Jeneratör ve absorber absorpsiyonlu sistemdedir.'),
    mc('soguk', 'Soğutma sistemlerinde kullanılan çevrim hangisidir?', ['Carnot çevrimi', 'Krebs çevrimi', 'Calvin çevrimi', 'Otto çevrimi', 'Rankine-Maillard çevrimi'], 'Buharlaşma ve yoğuşma temel; madde kaybı olmaz.'),
    mc('soguk', 'Soğuk zincirin doğru sırası hangisidir?', ['Üretim → işleme-paketleme → depolama-taşıma → dağıtım-perakende → tüketici', 'Üretim → tüketici → depolama → paketleme', 'Paketleme → üretim → taşıma → tüketici', 'Depolama → üretim → işleme → tüketici', 'Üretim → perakende → işleme → tüketici'], ''),
    mc('soguk', 'Dondurmanın dezavantajı olarak notlarda belirtilen özellik hangisidir?', ['Doku özellikleri genellikle korunmaz', 'Raf ömrü kısalır', 'Tat ve renk kaybolur', 'Mevsim dışı tüketim engellenir', 'Besin değeri tamamen yok olur'], '"Hızlı dondur, yavaş çöz" önerilir.'),
    /* fermantasyon */
    mc('fermantasyon', 'Düşük asitli gıdalarda kritik pH değeri kaçtır?', ['4.6', '7.0', '3.0', '5.5', '6.5'], 'pH < 4.6 güvenli.'),
    mc('fermantasyon', 'Sirke üretiminde rol alan mikroorganizma hangisidir?', ['Acetobacter spp.', 'Lactobacillus spp.', 'Saccharomyces cerevisiae', 'Propionibacterium spp.', 'Aspergillus'], ''),
    mc('fermantasyon', 'Ekmek, bira ve şarap hangi fermantasyon türüyle üretilir?', ['Alkol (etanol) fermantasyonu', 'Laktik asit fermantasyonu', 'Asetik asit fermantasyonu', 'Propiyonik asit fermantasyonu', 'Karma fermantasyon'], 'Saccharomyces cerevisiae.'),
    mc('fermantasyon', 'Bazı spesifik peynirlerde laktik asidi besin olarak kullanan mikroorganizma hangisidir?', ['Propionibacterium spp.', 'Acetobacter spp.', 'Lactobacillus spp.', 'Saccharomyces cerevisiae', 'Candida'], ''),
    mc('fermantasyon', 'Kefir ve kombucha hangi fermantasyon türüne örnektir?', ['Karma (maya + bakteri)', 'Laktik asit', 'Alkol', 'Asetik asit', 'Propiyonik asit'], 'Ekşi maya ekmeği ve zeytin de karma.'),
    mc('fermantasyon', 'Tüm mikroorganizmalar için öldürücü alkol oranı hangisidir?', ['%18\'in üzeri', '%5\'in altı', '%5-10', '%10-15', '%2'], ''),
    mc('fermantasyon', 'En geniş pH aralığında gelişebilen mikroorganizma grubu hangisidir?', ['Küfler (2.0-11.0)', 'Bakteriler (4.6-9.0)', 'Mayalar (3.0-8.5)', 'Patojenler', 'Termofilikler'], ''),
    mc('fermantasyon', 'Konserve ile karşılaştırıldığında fermantasyon için hangisi doğrudur?', ['Mikrobiyal faaliyet mevcuttur', 'Hermetik kapama ile üretilir', 'Temel amacı sadece raf ömrünü uzatmaktır', 'Mikrobiyal faaliyet yoktur', 'Mutlaka sterilizasyon uygulanır'], ''),
    mc('fermantasyon', 'Fermantasyonun koruma mekanizmaları arasında hangisi **yoktur**?', ['Yüksek pH', 'Alkol üretimi', 'Organik asitler', 'Besin için yarışma', 'Düşük pH'], 'Koruma düşük pH ile sağlanır.'),
    /* konserve-map-ışınlama */
    mc('konserve', 'F0 değeri nedir?', ['121.1 °C\'de C. botulinum sporlarını yok etmek için gereken ısıl işlem süresi', '100 °C\'de tüm mikroorganizmaları öldüren sıcaklık', 'Konservenin pH değeri', 'Konservenin raf ömrü (gün)', 'Ambalajın lak kalınlığı'], 'Birimi dakika; soğuk noktanın bu sıcaklıkta tutulma süresi.'),
    mc('konserve', 'Konserve kutularında migrasyonu önlemek için ne uygulanır?', ['Lak uygulaması', 'Işınlama', 'MAP', 'Vakumlama', 'Tuzlama'], 'Epoksi, beyaz, altın vb. lak.'),
    mc('konserve', 'İnert yapılı ve şeffaf ancak ağır ve kırılgan olan konserve ambalajı hangisidir?', ['Cam kavanoz', 'Metal kutu', 'Plastik kap', 'Karton', 'Alüminyum folyo'], ''),
    mc('konserve', 'MAP\'ta bakteri ve küflerin çoğalmasını önleyen gaz hangisidir?', ['Karbondioksit', 'Azot', 'Oksijen', 'Argon', 'Hidrojen'], 'Azot inert dolgu, oksijen canlılık ve et rengi için.'),
    mc('konserve', 'MAP\'ta reaksiyonlara girmeyen, hacmi doldurmak için kullanılan inert gaz hangisidir?', ['Azot', 'Karbondioksit', 'Oksijen', 'Etilen', 'Ozon'], ''),
    mc('konserve', 'Taze kırmızı et MAP\'ında oksijen oranının yüksek (%70-80) tutulmasının nedeni nedir?', ['Et renginin korunması', 'Bakterileri öldürmek', 'Hacmi doldurmak', 'Asitliği artırmak', 'Yağ oksidasyonunu önlemek'], 'Oksijen et ürünlerinde rengin korunması için gereklidir.'),
    mc('konserve', 'Ürünün kendi metabolik aktivitesiyle ambalaj içinde modifiye atmosfer oluşan yöntem hangisidir?', ['Pasif MAP', 'Aktif MAP', 'Vakum ambalaj', 'Aseptik ambalaj', 'Hermetik kapama'], 'Genellikle canlı meyve-sebzelerde.'),
    mc('konserve', 'Cips ambalajında kullanılan gaz bileşimi hangisidir?', ['%100 azot', '%100 oksijen', '%70 O2 + %30 CO2', '%50 CO2 + %50 O2', '%100 CO2'], ''),
    mc('konserve', 'Işınlama için hangisi doğrudur?', ['Gıdada radyoaktiviteye sebep olmaz', 'Gıdayı radyoaktif yapar', 'Sıcak sterilizasyondur', 'Uzun dalga boylu enerji kullanır', 'Etikette belirtilmesi gerekmez'], 'Soğuk sterilizasyon; Radura logosu zorunlu.'),
    mc('konserve', 'Radyasyona direnç sıralaması için hangisi doğrudur?', ['Sporlar vejetatif hücrelerden daha dirençlidir', 'Böcekler bakterilerden daha dirençlidir', 'Mikroorganizmalar enzimlerden daha dirençlidir', 'Hücre boyutu büyüdükçe direnç artar', 'Maya-küfler bakterilerden daha dirençlidir'], 'Hücre küçüldükçe direnç artar: enzim > mikroorganizma; spor > vejetatif; bakteri > maya-küf > parazit-böcek.'),
    mc('konserve', 'Ticari sterilizasyon amaçlı (>10 kGy) ışınlama uygulaması hangisidir?', ['Radapperdizasyon', 'Radurizasyon', 'Radisidasyon', 'Pastörizasyon', 'Blanşlama'], 'Radurizasyon <1 kGy, radisidasyon <10 kGy.'),
    mc('konserve', 'Filizlenmeyi önlemek ve mikrobiyal yükü azaltmak için uygulanan düşük dozlu (<1 kGy) ışınlama hangisidir?', ['Radurizasyon', 'Radisidasyon', 'Radapperdizasyon', 'UHT', 'Ticari sterilizasyon'], ''),
    mc('konserve', 'Işınlamanın yağlı gıdalardaki olumsuz etkisi hangisidir?', ['Acılaşma', 'Radyoaktivite', 'Şişme', 'Kararma', 'Jelleşme'], 'Yüksek proteinlilerde kötü koku ve tat.'),
    /* meyve-sebze */
    mc('meyve-sebze', 'Meyve nektarındaki meyve oranı hangisidir?', ['%25-50', '%100', '<%10', '%60-65', '%80-92'], 'Meyve suyu %100, meyveli içecek <%10.'),
    mc('meyve-sebze', 'Posa ve lif açısından yoğun ürünlerde (şeftali, kayısı) kullanılan, mekanik-kimyasal-enzimatik yöntemleri birleştiren işlem hangisidir?', ['Ekstraksiyon', 'Presleme', 'Filtrasyon', 'Pastörizasyon', 'Konsantrasyon'], 'Presleme sadece fiziksel (elma, üzüm, narenciye).'),
    mc('meyve-sebze', 'Durultma (klarifikasyon) hangi işlemlerden oluşur?', ['Depektinizasyon + berraklaştırma', 'Presleme + filtrasyon', 'Pastörizasyon + soğutma', 'Ekstraksiyon + konsantrasyon', 'Fermantasyon + süzme'], ''),
    mc('meyve-sebze', 'Berraklaştırmada kullanılan pozitif yüklü yardımcı madde hangisidir?', ['Jelatin', 'Bentonit', 'Kizelzol', 'Pektin', 'Sitrik asit'], 'Jelatin (+), bentonit (−), kizelzol (−).'),
    mc('meyve-sebze', 'Reçel ile marmelat arasındaki temel fark nedir?', ['Meyve parçacıklarının iriliği', 'Şeker oranı', 'Pişirme sıcaklığı', 'Kullanılan pektin türü', 'Ambalaj tipi'], 'Marmelatta meyve parçacığı bulunmaz.'),
    mc('meyve-sebze', 'Geleneksel reçel üretiminde genellikle kullanılan şeker oranı hangisidir?', ['%60-65', '%25-50', '%10', '%3-8', '%100'], 'Kaynatma ~105 °C, uygun °Bx\'e kadar.'),
    mc('meyve-sebze', 'HMF oluşumuna yol açan koşullar hangileridir?', ['Basit şekerler + asidik ortam + ısı', 'Amino asit + yağ + soğuk', 'Protein + oksijen + ışık', 'Nişasta + su + düşük sıcaklık', 'Pektin + kalsiyum'], 'Kanserojen-toksik; düşük sıcaklıkta reçel üretimi gerekir.'),
    mc('meyve-sebze', 'Kalsiyum iyonlarıyla "yumurta kutusu (egg-box)" modeline göre jel oluşturan pektinler hangileridir?', ['LM ve LMA pektinler', 'HM pektinler', 'Sadece HM pektin', 'Nişasta', 'Jelatin'], 'HM pektin şeker ve asitle hidrojen bağı üzerinden jelleşir.'),
    mc('meyve-sebze', 'Sert ve kırılgan jel veren, geleneksel reçelde kullanılan pektin hangisidir?', ['Yüksek metoksilli (HM) pektin', 'Düşük metoksilli (LM) pektin', 'Amide (LMA) pektin', 'Kalsiyum pektat', 'Depektinize pektin'], ''),
    mc('meyve-sebze', 'Salça üretiminde 85-90 °C, 3-5 dk ısıl işlemin amacı hangi enzimin inaktivasyonudur?', ['Pektinaz', 'Lipaz', 'Amilaz', 'Laktaz', 'Proteaz'], ''),
    mc('meyve-sebze', 'Salçada vakum altında konsantrasyon hangi koşullarda yapılır?', ['60-70 °C, 30-36 °Bx\'e kadar', '105 °C, %60-65 şeker', '135-150 °C, 2-4 sn', '85-90 °C, 3-5 dk', '200-250 °C'], ''),
    mc('meyve-sebze', 'Doğal laktik asit fermantasyonu ile turşu üretiminde hangisi doğrudur?', ['Sirke kullanılmaz, 2-4 hafta sürer', '%4-6 sirke kullanılır', 'Fermantasyon olmaz', '10-20 günde olgunlaşır', 'Sadece starter kültür kullanılabilir'], 'Sirke ile asidifikasyonda %4-6 sirke, 10-20 gün, fermantasyon yok veya sınırlı.'),
    mc('meyve-sebze', 'Turşuda kalite için istenen pH aralığı hangisidir?', ['3.0-4.0', '4.6-9.0', '6.5-7.5', '1.0-2.0', '5.0-6.0'], 'Tuz %3-8.'),
    mc('meyve-sebze', 'Aşağıdakilerden hangisi turşuda bozulma belirtisi **değildir**?', ['Sert ve gevrek sebze', 'Bulanık ve köpüklü salamura', 'Kapakta bombe', 'Küf oluşumu', 'Kötü koku'], ''),
    mc('meyve-sebze', 'Solunum hızı yüksek olduğu için bileşimi hızlı bozulan ürünlere örnek hangisidir?', ['Muz, brokoli, çilek, marul', 'Patates, soğan', 'Ceviz, fındık', 'Un, şeker', 'Kuru baklagil'], ''),
    mc('meyve-sebze', 'Yapraklı sebzelerde su kaybına bağlı fizyolojik bozulma hangisidir?', ['Solma', 'Yumuşama', 'Kararma', 'Bombe', 'Jelleşme'], 'Yumuşama hücre duvarı parçalanmasıdır.'),
    /* tahıl */
    mc('tahil-urun', 'Tahılların karbonhidrat oranı yaklaşık ne kadardır?', ['%65-75', '%8-12', '%1-3', '%30-40', '%90'], 'Protein %8-12, yağ %1-3, lif-kül %1-2.'),
    mc('tahil-urun', 'Buğday için ideal depolama nem oranı hangisidir?', ['%12-14', '%18-20', '%5-8', '%25', '%30-35'], '%14\'ün üzeri küf ve mikotoksin riski.'),
    mc('tahil-urun', 'Tane sertliği için hangisi doğrudur?', ['Sert taneler öğütmede daha çok irmik verir', 'Düşük protein sert tane yapar', 'Yüksek nem sert tane yapar', 'Yumuşak tane irmik verir', 'Sertlik öğütmeyi etkilemez'], 'Yüksek protein ve düşük nem → sert.'),
    mc('tahil-urun', 'Bisküvi ve kek için uygun buğday hangisidir?', ['Yumuşak buğday', 'Sert buğday', 'Sert ekmeklik buğday', 'Durum buğdayı', 'Orta sert buğday'], 'Sert buğday makarna ve irmik.'),
    mc('tahil-urun', 'Gluteni oluşturan proteinler hangileridir?', ['Gliadin ve glutenin', 'Amiloz ve amilopektin', 'Kazein ve albümin', 'Aktin ve miyozin', 'Pektin ve selüloz'], 'Amiloz ve amilopektin nişastayı oluşturur.'),
    mc('tahil-urun', 'Nişastanın jelleşmesi hangi sıcaklık aralığında gerçekleşir?', ['60-80 °C', '0-4 °C', '105 °C', '200-250 °C', '121 °C'], ''),
    mc('tahil-urun', 'Çölyak hastaları için hangisi doğrudur?', ['Tamamen glutensiz beslenmelidir', 'Az miktarda gluten tüketebilir', 'Sadece makarna yememelidir', 'Laktoz tüketmemelidir', 'Nişasta tüketmemelidir'], 'Gluten villusları tahrip eder.'),
    mc('tahil-urun', 'Yüksek falling number değeri neyi ifade eder?', ['Düşük α-amilaz aktivitesi ve ekmek üretimine uygunluğu', 'Yüksek enzim aktivitesi', 'Düşük protein', 'Yüksek su absorpsiyonu', 'İnce partikül boyutu'], ''),
    mc('tahil-urun', 'Hamurun uzama ve dayanıklılığını gösteren test hangisidir?', ['Extensograf', 'Farinograf', 'Falling number', 'Granülometri', 'Asetat testi'], 'Farinograf: su absorpsiyonu ve karışma özellikleri.', { 1: 'Farinograf su absorpsiyonu, karışma süresi ve viskoziteyi ölçer.' }),
    mc('tahil-urun', 'Unun su absorpsiyon kapasitesini ve hamurun karıştırma özelliklerini ölçen test hangisidir?', ['Farinograf', 'Extensograf', 'Falling number', 'Granülometri', 'Bin tane ağırlığı'], ''),
    mc('tahil-urun', 'Modern (valsli) öğütme için hangisi doğrudur?', ['Beyaz un ve yüksek verim, ancak düşük besin içeriği', 'Tam tahıl unu üretir', 'Kepek una geçer', 'Düşük kapasitelidir', 'Besin değeri taş değirmenden yüksektir'], ''),
    mc('tahil-urun', 'Un üretiminde temizleme aşamasında kullanılanlar hangileridir?', ['Eleme, hava akımı, mıknatıs', 'Ekstrüzyon, kurutma', 'Fermantasyon, pişirme', 'Lak, vakum', 'Işınlama, MAP'], ''),
    mc('tahil-urun', 'Makarna üretimi için hangisi **yanlıştır**?', ['Mayalama-fermantasyon aşaması vardır', 'Triticum durum kullanılır', 'Ekstrüzyonla şekil verilir', 'Kurutma aşaması vardır', 'Bazen yumurta eklenir'], 'Makarnada mayalama-fermantasyon yoktur.'),
    mc('tahil-urun', 'Mısır unu ile ekmekte (yalnız mısır unu) kabarmayı ne sağlar?', ['Karbonat veya kabartma tozu', 'Maya', 'Gluten', 'Laktik asit bakterisi', 'Pektin'], 'Maya sadece buğday unu eklenirse kullanılabilir.'),
    mc('tahil-urun', 'Ekmek pişirme sıcaklığı hangisidir?', ['200-250 °C', '180-200 °C', '105 °C', '60-80 °C', '135-150 °C'], 'Mısır ekmeği 180-200 °C.'),
    mc('tahil-urun', 'Maillard reaksiyonu ile karamelizasyonun farkı nedir?', ['Maillard\'da amino asit ve indirgen şeker birlikte; karamelizasyonda sadece şeker ve ısı', 'Karamelizasyonda amino asit gerekir', 'Maillard soğukta olur', 'Karamelizasyon kanserojen ürün oluşturmaz, Maillard renk oluşturmaz', 'İkisi aynı reaksiyondur'], ''),
    mc('tahil-urun', 'Maillard reaksiyonunun ileri ürünlerinden kanserojen olabilenlere örnek hangisidir?', ['Heterosiklik aminler', 'Gluten', 'Amilopektin', 'Pektin', 'Laktik asit'], 'Aşırı pişirmeden kaçınılmalıdır.'),
    mc('tahil-urun', 'Un üretiminde ruşeymin ayrılmasının nedeni nedir?', ['Yağ bozulmasıyla kalite düşüşü', 'Nişasta içermesi', 'Gluten içermemesi', 'Kepeğin parçası olması', 'Su aktivitesini artırması'], 'Ruşeym yağ, E vitamini ve antioksidan içerir.'),

    /* D/Y */
    tf('bilesim', 'Proteinler 1 gramda 9 kcal enerji sağlar.', false, 'Protein 4, yağ 9 kcal/g.'),
    tf('bilesim', 'Hayvansal proteinler tam protein olarak kabul edilir.', true, ''),
    tf('bozulma', 'Su aktivitesi Maillard ve oksidasyon gibi kimyasal reaksiyonları etkiler.', true, ''),
    tf('bozulma', 'Küflerin gelişebildiği minimum su aktivitesi 0.95\'tir.', false, 'Küf 0.80; patojen bakteri 0.91-0.95.'),
    tf('bozulma', 'Mayalar alkol, asit ve gaz oluşturarak ekşi-alkollü tada neden olur.', true, ''),
    tf('kurutma', 'Yüksek su aktivitesi mikrobiyal faaliyetin daha hızlı olmasına yol açar.', true, '★★★ bilgi.'),
    tf('kurutma', 'Güneşte kurutma iklimden bağımsız ve hijyeniktir.', false, 'Güneşte kurutma iklime bağlı ve hijyen riski taşır; sıcak hava akımı iklimden bağımsızdır.'),
    tf('kurutma', 'Radyasyonla (infrared/mikrodalga) kurutmada hassas kontrol gerekir, aksi halde ürün yanabilir.', true, ''),
    tf('isil', 'Pastörizasyonda patojen mikroorganizmalar yok edilir.', true, ''),
    tf('isil', 'Sterilize ürünler soğuk zincirde depolanmak zorundadır.', false, 'Sterilizasyonda soğuk zincir şartı yoktur.'),
    tf('isil', 'Termofilik bakteriler (Bacillus, Clostridium) yüksek sıcaklıkta üremeye devam eder.', true, ''),
    tf('isil', 'Ticari sterilizasyon ile gıdalarda mutlak sterilizasyon sağlanır.', false, 'Mutlak sterilizasyon sağlanmaz.'),
    tf('soguk', 'Soğutma gıdanın dokusunda net bir fiziksel değişime sebep olmaz.', true, ''),
    tf('soguk', 'Yavaş dondurmada hücre içi ve dışında mikro kristaller oluşur.', false, 'Yavaşta hücre dışında makro kristal; mikro kristal hızlı dondurmada.'),
    tf('soguk', 'Hızlı dondurmada su mikroorganizma hücresi içinde donar ve hücre zarı delinir.', true, ''),
    tf('fermantasyon', 'pH değeri 4.6\'nın altında olan gıdalar güvenli kabul edilir.', true, ''),
    tf('fermantasyon', 'Asetik asit fermantasyonu Lactobacillus ile yapılır.', false, 'Asetik: Acetobacter; laktik: Lactobacillus.'),
    tf('fermantasyon', 'Yoğurt, turşu ve salam laktik asit fermantasyonu ürünleridir.', true, ''),
    tf('fermantasyon', '%5\'in altındaki alkolün mikroorganizmalar üzerine etkisi önemsizdir.', true, ''),
    tf('konserve', 'F0 değerinde sıcaklık düşerse gereken süre kısalır.', false, 'Sıcaklık düşerse süre uzar.'),
    tf('konserve', 'MAP\'ta oksijen tamamen uzaklaştırılır.', false, 'Tamamen uzaklaştırılmaz; az miktarda bırakılır.'),
    tf('konserve', 'Işınlanmış gıdaların etiketinde yazı veya Radura logosu ile belirtilmesi zorunludur.', true, ''),
    tf('konserve', 'Işınlamada hücre boyutu küçüldükçe radyasyona direnç azalır.', false, 'Direnç artar.'),
    tf('konserve', 'Metal konserve kutularının dezavantajları migrasyon, korozyon ve oksitlenmedir.', true, ''),
    tf('meyve-sebze', 'Meyve suyuna su ve şeker ilave edilir.', false, 'Meyve suyu %100\'dür, ilave yok; nektarda su ve şeker ilave edilir.'),
    tf('meyve-sebze', 'HM pektin jelleşmesi için yüksek şeker ve asidik ortam gerekir.', true, ''),
    tf('meyve-sebze', 'LMA pektin yumuşak, esnek ve ısıya dayanıklı jel oluşturur.', true, ''),
    tf('meyve-sebze', 'Sirke ile asidifikasyonda olgunlaşma 2-4 hafta sürer.', false, 'Sirkede 10-20 gün; doğal fermantasyonda 2-4 hafta.'),
    tf('tahil-urun', 'Gluten her tahılda bulunur.', false, 'Her tahılda bulunmaz.'),
    tf('tahil-urun', 'Taş değirmenlerde kabuk ve kepek kısmen una geçer ve tam tahıl unu elde edilir.', true, ''),
    tf('tahil-urun', 'Maillard reaksiyonu bir karamelizasyon reaksiyonudur.', false, 'Karamelizasyon değildir; karamelizasyonda sadece şeker ve ısı.'),
    tf('tahil-urun', 'Ekmek üretiminde Triticum aestivum unu kullanılır.', true, 'Makarnada Triticum durum.'),

    /* Boşluk */
    fill('bilesim', 'Yağda çözünen vitaminler ____ vitaminleridir.', ['ADEK', 'A D E K', 'A, D, E, K'], ''),
    fill('bilesim', 'Yağlar 1 gramda ____ kcal enerji sağlar.', ['9'], ''),
    fill('bozulma', 'Polifenollerde renk değişimi ve kararmaya yol açan enzim ____ dır.', ['polifenol oksidaz', 'PPO'], ''),
    fill('bozulma', 'Ozmofilik mayaların gelişebildiği minimum aw değeri ____ dır.', ['0.60', '0,60', '0.6', '0,6'], ''),
    fill('bozulma', 'Gıdalarda yağ asidi + oksijen tepkimesiyle oluşan acılaşmaya ____ denir.', ['ransidite', 'ransidite/acılaşma'], ''),
    fill('kurutma', 'Su aktivitesi, gıdadaki suyun buhar basıncının aynı sıcaklıktaki ____ suyun buhar basıncına oranıdır.', ['saf'], ''),
    fill('kurutma', 'Sıvı gıdalardan toz ürün elde edilen kurutma yöntemi ____ kurutmadır.', ['sprey', 'püskürtmeli'], ''),
    fill('isil', 'Süt pastörizasyonunda LTLT yöntemi ____ °C\'de 30 dakikadır.', ['63'], ''),
    fill('isil', 'UHT işlemi 135-150 °C\'de ____ saniye uygulanır.', ['2-4', '2 - 4', '2 4'], ''),
    fill('isil', 'Q humması etkeni ____ burnetii pastörizasyonla tamamen öldürülmelidir.', ['Coxiella'], ''),
    fill('isil', 'Botulinum toksini bir ____ dir.', ['nörotoksin'], ''),
    fill('soguk', 'Hızlı dondurmada 30 dakikada ____ °C\'nin altına inilir.', ['-20', '−20', 'eksi 20', '20'], ''),
    fill('soguk', 'Absorpsiyonlu soğutma sisteminin elemanları absorber, ____, kondenser ve evaporatördür.', ['jeneratör'], ''),
    fill('fermantasyon', 'Düşük asitli gıdalarda kritik pH değeri ____ dır.', ['4.6', '4,6'], ''),
    fill('fermantasyon', 'Ekmek, bira ve şarapta rol alan maya Saccharomyces ____ dir.', ['cerevisiae'], ''),
    fill('fermantasyon', 'Sirke üretiminde ____ spp. rol alır.', ['Acetobacter'], ''),
    fill('konserve', 'F0 değeri ____ °C\'de C. botulinum sporlarını yok etmek için gereken süredir.', ['121.1', '121,1'], ''),
    fill('konserve', 'Konserve kutularında migrasyonu önlemek için ____ uygulaması yapılır.', ['lak'], ''),
    fill('konserve', 'Işınlamaya "____ sterilizasyon" da denir.', ['soğuk'], ''),
    fill('konserve', 'Işınlanmış gıdalar etikette yazı veya ____ logosu ile belirtilir.', ['Radura'], ''),
    fill('konserve', 'Spor oluşturmayan patojenler için uygulanan (<10 kGy) ışınlamaya ____ denir.', ['radisidasyon'], ''),
    fill('meyve-sebze', 'Meyveli içeceklerde meyve oranı %____ \'un altındadır.', ['10'], ''),
    fill('meyve-sebze', 'Reçel ve marmelatta jel, pektin ve şeker karışımının pH ____ arasında ısıyla oluşturduğu yapıdır.', ['3.0-3.5', '3-3.5', '3,0-3,5', '3 3.5'], ''),
    fill('meyve-sebze', 'HMF\'nin açılımı 5-Hidroksi Metil ____ dır.', ['Furfural'], ''),
    fill('meyve-sebze', 'Salça vakum altında 60-70 °C\'de ____ °Bx\'e kadar konsantre edilir.', ['30-36', '30 - 36', '30 36'], ''),
    fill('meyve-sebze', 'Sirke ile turşu üretiminde %____ sirke (asetik asit) kullanılır.', ['4-6', '4 - 6', '4 6'], ''),
    fill('tahil-urun', 'Nişasta amiloz ve ____ gruplarından oluşur.', ['amilopektin'], ''),
    fill('tahil-urun', 'Undaki α-amilaz aktivitesinin göstergesi ____ testidir.', ['falling number', 'düşme sayısı'], ''),
    fill('tahil-urun', 'Makarna üretiminde Triticum ____ kullanılır.', ['durum'], ''),
    fill('tahil-urun', 'Makarnaya son şekil ____ makineleriyle verilir.', ['ekstrüzyon'], ''),

    /* Klasik */
    op('bozulma', 'Gıda bozulmasının nedenlerini sınıflandırıp her birine örnek veriniz.', [
      'Fiziksel: sıcaklık, RH-aw, ışık, darbe', 'Kimyasal enzimatik: PPO, lipaz, proteaz, amilaz, pektinaz, laktaz',
      'Kimyasal enzimatik olmayan: Maillard, karamelizasyon, oksidasyon, pigment bozulması', 'Mikrobiyal: bakteri, maya, küf (etkileriyle)'
    ], 'Bozulma nedenleri fiziksel → kimyasal → mikrobiyal olarak sıralanır.\n• Fiziksel: sıcaklık, bağıl nem-su aktivitesi, ışık, darbe.\n• Kimyasal – enzimatik: PPO (kararma), lipaz (acılaşma), proteaz (koku-doku bozulması), amilaz (tatlılık), pektinaz (yumuşama, bulanıklık), laktaz (asitlik). Enzimatik olmayan: Maillard, karamelizasyon, oksidasyon (ransidite), pigment bozulması.\n• Mikrobiyal: bakteri (asidik tat, gaz, toksin, şişme, koku), maya (alkol, asit, gaz), küf (mikotoksin, renk bozulması).'),
    op('isil', 'Pastörizasyon ve sterilizasyonu karşılaştırınız.', [
      'Pastörizasyon: 60-80 °C, ılımlı; patojenler ölür, bütün mikroorganizmalar ölmez', 'Süt: 72 °C 15 sn veya 63 °C 30 dk; M. tuberculosis ve C. burnetii ölmeli',
      'Sterilizasyon: >100 °C, tüm mikroorganizmalar hedeflenir; daha uzun raf ömrü, soğuk zincir yok', 'Ticari sterilizasyon mutlak değildir; C. botulinum sporları hedef',
      'UHT 135-150 °C 2-4 sn'
    ], 'Pastörizasyon ılımlı ısıl işlemdir (genellikle 60-80 °C, 30 dk\'ya kadar); patojenlerin tümü ve bozucuların büyük bölümü inhibe edilir, ancak bütün mikroorganizmalar yok edilmez. Sütte 72 °C 15 sn (HTST) veya 63 °C 30 dk (LTLT); Mycobacterium tuberculosis ve Coxiella burnetii tamamen ölmelidir. Termodurik ve termofilik bakteriler canlı kalabilir.\nSterilizasyon 100 °C\'nin üzerinde uygulanır, tüm mikroorganizmaların inhibisyonu hedeflenir; raf ömrü daha uzundur, soğuk zincir gerekmez. Ticari sterilizasyon mutlak sterilite sağlamaz ama bozulma sebebi vejetatif ve spor formlar inhibe edilir; özellikle Clostridium botulinum ve sporları. UHT: 135-150 °C, 2-4 sn.'),
    op('soguk', 'Yavaş ve hızlı dondurmayı bitki dokusu ve mikroorganizma açısından karşılaştırınız.', [
      'Yavaş: 3-72 saat; hızlı: 30 dk\'da −20 °C altı', 'Yavaş: hücre dışında makro kristal, su dışarı çıkar, duvar zedelenir, damlama kaybı',
      'Hızlı: içte ve dışta mikro kristal, duyusal özellik korunur, az damlama', 'Mikroorganizma: yavaşta büzülme; hızlıda hücre içi donma ve zar delinmesi'
    ], 'Yavaş dondurmada istenen sıcaklığa 3-72 saatte, hızlıda 30 dakikada −20 °C altına inilir.\nBitki dokusu: yavaşta hücre dışında makro kristal oluşur, hücre içi su dışarı geçer, hücre duvarı zedelenir, tekstür bozulur, damlama kaybı olur. Hızlıda hücre içi ve dışında mikro kristaller oluşur, kısmi zedelenme olur, duyusal özellikler korunur, damlama kaybı azalır.\nMikroorganizma: yavaşta hücre dışında makro kristal, su dışarı çıkar, mikroorganizma büzülür, kısmi hasar. Hızlıda su hücre içinde donar (hacim artar) ve hücre zarı delinir.'),
    op('fermantasyon', 'Fermantasyon türlerini mikroorganizma, besin ve ürünleriyle yazınız.', [
      'Laktik asit: Lactobacillus; laktoz-glikoz vb.; yoğurt, turşu, salam', 'Alkol: Saccharomyces cerevisiae; glikoz-fruktoz-sakkaroz; ekmek, bira, şarap',
      'Asetik asit: Acetobacter; şeker, alkol; sirke', 'Propiyonik: Propionibacterium; laktik asit; bazı peynirler', 'Karma: maya + bakteri; kefir, kombucha, ekşi maya, zeytin'
    ], '• Laktik asit: Lactobacillus spp.; laktoz, glikoz, fruktoz, maltoz, sakkaroz → yoğurt, turşu, salam.\n• Alkol (etanol): Saccharomyces cerevisiae; glikoz, fruktoz, sakkaroz → ekmek, bira, şarap.\n• Asetik asit: Acetobacter spp.; şeker, alkol → sirke.\n• Propiyonik asit: Propionibacterium spp.; laktik asit → bazı spesifik peynirler.\n• Karma: maya + bakteri; şekerler ve lifler → kefir, kombucha, ekşi maya ekmeği, zeytin.'),
    op('konserve', 'MAP\'ı tanımlayınız; kullanılan gazları ve aktif/pasif MAP\'ı açıklayınız.', [
      'Depolama atmosferi değiştirilerek sızdırmaz ambalajda depolama', 'Azot: inert, hacim doldurma',
      'CO2: bakteri ve küf baskılama; O2: az, canlı ürün ve et rengi', 'Aktif MAP: vakum + istenen gaz; meyve-sebze dışı',
      'Pasif MAP: gaz değiştirilmez, ürün metabolizmasıyla oluşur; meyve-sebze'
    ], 'MAP, gıdaların depolama atmosferinin bileşimi değiştirilerek sızdırmaz ambalajda depolanmasıdır; mikroorganizma faaliyetlerini ve reaksiyonları yavaşlatır/sonlandırır.\nGazlar: azot (inert, hacmi doldurur, reaksiyona girmez), karbondioksit (bakteri ve küf çoğalmasını önler), oksijen (tamamen uzaklaştırılmaz; canlı gıdalar ve et renginin korunması için az miktarda).\nAktif MAP: genellikle meyve-sebze dışı; gıda ambalaja konur, vakumla gazlar boşaltılır, istenen gaz verilir, sızdırmaz kapatılır. Pasif MAP: genellikle meyve-sebze; gaz bileşimi değiştirilmez, ürünün metabolik aktivitesiyle modifiye atmosfer oluşur (1-2 saatten güne kadar).'),
    op('konserve', 'Gıda ışınlamasını; tanımı, etki mekanizması, doz grupları ve olumsuz etkileriyle açıklayınız.', [
      'Soğuk sterilizasyon; kısa dalga boylu yüksek frekanslı enerji', 'Radyoaktiviteye sebep olmaz; Radura logosu zorunlu',
      'Mikroorganizma, parazit, böcek ölür; zar, enzim, DNA-RNA bozulur; küçük hücre daha dirençli', 'Radurizasyon <1, radisidasyon <10, radapperdizasyon >10 kGy',
      'Yağlıda acılaşma, proteinlide kötü koku-tat'
    ], 'Işınlama (soğuk sterilizasyon): kısa dalga boylu ve yüksek frekanslı elektromanyetik enerjiyle sağlık risklerini gidermek ve raf ömrünü uzatmaktır; gıdada radyoaktiviteye sebep olmaz.\nEtki: mikroorganizma, parazit ve böcekler ölür; hücre zarı bozulur, enzim yapıları ve RNA-DNA değişir. Hücre boyutu küçüldükçe direnç artar (enzim > mikroorganizma; spor > vejetatif; bakteri > maya-küf > parazit-böcek).\nDozlar: radurizasyon <1 kGy (yük azaltma, filizlenme önleme), radisidasyon <10 kGy (spor oluşturmayan patojenler), radapperdizasyon >10 kGy (ticari sterilizasyon; enzim ve spor için 50 kGy).\nOlumsuz etkiler: yağlı gıdalarda acılaşma, yüksek proteinlilerde kötü koku ve tat. Etikette yazı veya Radura logosu ile belirtilmelidir.'),
    op('meyve-sebze', 'Pektin türlerini (HM, LM, LMA) jelleşme mekanizmalarıyla karşılaştırınız.', [
      'Metoksilasyon derecesi (CH3) jelleşmeyi etkiler', 'HM: yüksek şeker (%55-65) + asit; OH grupları H bağı; >80 °C; sert, kırılgan; geleneksel reçel',
      'LM: Ca²⁺ köprüleri, şeker gerekmez; 60-80 °C; yumuşak; diyet reçel', 'LMA: daha az Ca; 70-75 °C; yumuşak, esnek, ısıya dayanıklı; diyet reçel',
      'Ca ile jel = yumurta kutusu (egg-box) modeli'
    ], 'Jelleşmeyi pektin kaynağı ve metoksilasyon derecesi (CH3) etkiler.\n• HM (yüksek metoksilli): yüksek şeker (%55-65) ve asidik ortam gerekir; şekerler suyu bağlar, pektinler arası OH grupları hidrojen bağıyla jel yapar; >80 °C, ısıtmayla başlar soğumayla tamamlanır; sert, kırılgan jel; geleneksel reçel.\n• LM (düşük metoksilli): şeker gerekmez (tat için eklenir); Ca²⁺ köprüleri (yumurta kutusu modeli); 60-80 °C; daha yumuşak jel; diyet reçel.\n• LMA (amide): daha az kalsiyumla Ca²⁺ köprüleri; 70-75 °C; yumuşak, esnek, ısıya dayanıklı jel; diyet reçel.'),
    op('meyve-sebze', 'Turşu üretiminde doğal laktik asit fermantasyonu ile sirke ile asidifikasyonu karşılaştırınız.', [
      'Turşu: salamurada fermente edilerek saklanabilir hale getirilen ürün', 'Laktik: sirke yok, doğal LAB veya starter, 2-4 hafta',
      'Sirke: %4-6 asetik asit, 10-20 gün, fermantasyon yok/sınırlı; >%25 sirke kritik (pH 4.6)', 'Kalite: pH 3.0-4.0, tuz %3-8',
      'Bozulma: bulanık-köpüklü salamura, yumuşama, koku, bombe, küf'
    ], 'Turşu, sebze ve meyvelerin tuzlu-asitli salamurada fermente edilerek uzun süre saklanabilir hale getirilmesidir.\n• Laktik asit fermantasyonu: doğal fermantasyon, sirke kullanılmaz; gıda üzerindeki doğal laktik asit bakterileri ile (starter kültür eklenebilir); 2-4 hafta.\n• Sirke ile asidifikasyon (olgunlaştırma): %4-6 sirke (asetik asit), 10-20 gün; fermantasyon olmaz veya sınırlıdır; toplam sirke %25\'i aşarsa kritik (pH 4.6 sınırı).\nKalite: pH genellikle 3.0-4.0, tuz %3-8. Bozulma belirtileri: bulanık ve köpüklü salamura, yumuşak sebze, kötü koku, kapakta bombe, küf.'),
    op('tahil-urun', 'Un kalite analizlerini (granülometri, gluten, falling number, farinograf, extensograf) açıklayınız.', [
      'Granülometri: partikül boyutu; ince un pastacılık ve ekmeğe uygun', 'Protein (gluten) + asetat: protein içeriği-kalitesi, elastikiyet, hacim, kullanım amacı',
      'Falling number: α-amilaz aktivitesi; yüksek değer = düşük enzim = ekmeğe uygun', 'Farinograf: su absorpsiyonu, karışma süresi, dayanıklılık, viskozite',
      'Extensograf: hamurun uzama ve dayanıklılığı, ekmek performansı'
    ], '• Granülometri: partikül boyutu testi; ince unlar pastacılık ve ekmeğe uygundur.\n• Protein (gluten) + asetat testi: protein içeriği ve kalitesi; elastikiyet ve hacmi etkiler; hangi amaca uygun olduğunu belirler.\n• Falling number: undaki α-amilaz aktivitesinin göstergesi; nişastanın ne düzeyde şekere parçalanacağını gösterir. Yüksek değer düşük enzim aktivitesi ve ekmeğe uygunluk demektir.\n• Farinograf: su absorpsiyon kapasitesi, hamurun karışma özellikleri ve viskozite; karıştırma süresi ve dayanıklılık.\n• Extensograf: un ve glutenin ekmek yapımındaki performansı; hamurun uzama ve dayanıklılığı.'),
    op('tahil-urun', 'Maillard reaksiyonunu açıklayınız ve karamelizasyondan farkını belirtiniz.', [
      'Amino asit + indirgen şeker + yüksek ısı', 'Karamelizasyon değildir: orada sadece şeker + ısı',
      'Kahverengi renk ve karakteristik aroma (ekmek, kavrulmuş et, kahve)', 'Lisin vb. besin kaybı', 'İleri ürünler (heterosiklik aminler) kanserojen olabilir → aşırı pişirmeden kaçın'
    ], 'Maillard reaksiyonu amino asitler ile indirgen şekerlerin yüksek ısıda etkileşmesiyle oluşur. Karamelizasyon değildir; karamelizasyonda sadece şekerler ve ısı vardır. Sonuçları: kahverengi renk oluşumu; ürüne özgü aroma (ekmek, kavrulmuş et, kavrulmuş kahve, tatlılar, yanık dondurma); lisin gibi besin kayıpları. Bazı ileri reaksiyon ürünleri (heterosiklik aminler vb.) kanserojen olabilir; aşırı pişirmeden kaçınılmalıdır.'),

    /* Uzun klasik */
    lg('bozulma', 'Gıdaların bileşimini ve gıdalarda bozulmaları (nedenleri, enzimatik ve enzimatik olmayan değişimler, mikrobiyal bozulma, su aktivitesi, önleme) ayrıntılı anlatınız.', [
      'Bileşim: KH ve protein 4 kcal/g, yağ 9 kcal/g; vitaminler enerji vermez; ADEK ve B-C',
      'Bozulma tanımı; sağlık, kalite, ekonomik kayıp', 'Önleme: ambalaj, ısı, soğuk, aw düşürme, dondurma, katkı',
      'Nedenler: fiziksel → kimyasal → mikrobiyal', 'Enzimatik: PPO, lipaz, proteaz, amilaz, pektinaz, laktaz',
      'Enzimatik olmayan: Maillard, karamelizasyon, oksidasyon, pigment bozulması', 'Mikrobiyal: bakteri, maya, küf etkileri',
      'aw ve minimum değerler: patojen 0.91-0.95, küf 0.80, halofilik 0.75, ozmofilik maya 0.60'
    ], 'Bileşim: karbonhidrat (C, H, O; 4 kcal/g; mono-, di-sakkarit, nişasta-glikojen-selüloz), protein (C, H, O, N; 4 kcal/g; 11 + 9 esansiyel AA; yapım-onarım, enzim-hormon, bağışıklık), yağ (9 kcal/g; ADEK emilimi, hormon, yalıtım; doymuş katı, doymamış sıvı), vitaminler (enerji vermez; ADEK yağda, B ve C suda çözünür ve depolanmaz).\nBozulma: değişiklikler nedeniyle gıdanın tüketilemez hale gelmesi; renk, tat, koku, yapıda istenmeyen değişim; sağlık, kalite ve ekonomik kayıp. Önleme: ambalajlama, ısı, soğukta muhafaza, su aktivitesini düşürme, dondurma, katkı maddesi.\nNedenler: fiziksel (sıcaklık, RH-aw, ışık, darbe) → kimyasal → mikrobiyal.\nEnzimatik: PPO (kararma), lipaz (acılaşma), proteaz (koku-doku bozulması), amilaz (tatlılık değişimi), pektinaz (yumuşama, bulanıklık), laktaz (asitlik artışı).\nEnzimatik olmayan: Maillard (indirgen şeker + amino asit + ısı → kahverengi renk, aroma, lisin kaybı), karamelizasyon (şeker + yüksek sıcaklık), oksidasyon (yağ asidi + O2 → ransidite), pigment bozulması (asitle; konservede yeşilin kahverengileşmesi).\nMikrobiyal: bakteri (asidik tat, gaz, toksin, şişme, koku), maya (alkol, asit, gaz), küf (mikotoksin, renk bozulması).\nSu aktivitesi serbest suyun oranıdır; mikrobiyal faaliyet ve kimyasal reaksiyonları etkiler. Minimum aw: patojen bakteri 0.91-0.95, küf 0.80, halofilik bakteri 0.75, ozmofilik maya 0.60.'),
    lg('isil', 'Isıl işlemi tüm yönleriyle anlatınız: amaç, inaktivasyon mekanizması, pastörizasyon, sterilizasyon, UHT ve önemli mikroorganizmalar.', [
      'Tanım ve amaç: bileşenleri koruyarak mikrobiyal yükü düşürme, patojen eliminasyonu', 'İnaktivasyon: protein denatürasyonu (DNA, RNA, zar), enzim inaktivasyonu; en önemli etki zar bozulması',
      'Pastörizasyon: 60-80 °C; patojenler ölür, tümü ölmez; süt 72 °C 15 sn / 63 °C 30 dk', 'M. tuberculosis ve C. burnetii; termodurik ve termofilik kalanlar',
      'Sterilizasyon: >100 °C, tüm mikroorganizmalar; uzun raf ömrü; soğuk zincir yok', 'Ticari sterilizasyon mutlak değil; vejetatif ve spor bozucular',
      'C. botulinum: anaerob, gaz-şişme, nörotoksin', 'UHT 135-150 °C 2-4 sn, borusal sistem, ani soğutma, aseptik ambalaj'
    ], 'Isıl işlem, sıcaklık etkisiyle bozulma etkeni mikroorganizmaların yok edilmesidir; amaç gıda bileşenlerini koruyarak mikrobiyal yükü düşürmek ve patojenleri elimine etmektir (uygun sıcaklık-süre kombinasyonu).\nİnaktivasyon: yapıdaki proteinlerin denatürasyonu (DNA, RNA, hücre zarı) ve enzimlerin inaktivasyonu. En önemli etki hücre zarının bozulmasıdır: lipitler akışkanlaşır, hücre içeriği dışarı/dış içerik içeri geçer, zar proteinleri denatüre olur.\nPastörizasyon: patojenlerin tümü ve bozucuların büyük bölümü inhibe edilir; bütün mikroorganizmalar yok edilmez, diğerlerinin sayısı düşer; güvenlik sağlanır, raf ömrü uzar. Ilımlı (60-80 °C, 30 dk\'ya kadar); süt, meyve suyu, bira, yumurta. Süt: 72 °C 15 sn (HTST) veya 63 °C 30 dk (LTLT). M. tuberculosis ve Coxiella burnetii tamamen öldürülmelidir. Canlı kalanlar: termodurik (Streptococcus, Lactobacillus) ve termofilik (Bacillus, Clostridium).\nSterilizasyon: 100 °C üstü; tüm mikroorganizmaların inhibisyonu hedeflenir; raf ömrü daha uzun; soğuk zincir şartı yok. Ticari sterilizasyon mutlak sterilite sağlamaz; vejetatif ve spor formdaki bozulma sebebi tüm mikroorganizmalar inhibe edilir. Clostridium botulinum ve sporları: anaerobik ortamda ürer, gazla şişme yapar (kapaktan anlaşılır), botulinum toksini (nörotoksin) üretir.\nUHT (süt, meyve suyu): 135-150 °C, 2-4 sn; borusal sistem, ani soğutma, aseptik ambalaj, uzun raf ömrü.'),
    lg('kurutma', 'Su aktivitesi kavramını ve kurutmayı; muhafaza yöntemleri sınıflandırması ve kurutma tipleriyle birlikte anlatınız.', [
      'Muhafaza: öldürme (sıcaklık, ışınlama), yavaşlatma (soğuk, aw, MAP, asit, katkı), bulaşma önleme (aseptik, ambalaj, dekontaminasyon)',
      'Kurutma tanımı ve esası; en eski yöntemlerden', 'aw = gıda suyu buhar basıncı / aynı sıcaklıkta saf su buhar basıncı',
      'Yüksek aw → reaksiyonlar ve mikrobiyal faaliyet hızlanır; mikroorganizma minimum aw değerleri', 'Gıdaların nem ve aw değerleri (et 0.98, bal 0.55, bisküvi 0.30-0.50)',
      'Güneş, sıcak hava, vakum, tambur', 'Sprey, dondurarak, radyasyon'
    ], 'Muhafaza yöntemleri mikroorganizmaya etkisine göre: öldürme (yüksek sıcaklık, ışınlama), gelişimi yavaşlatma (düşük sıcaklık, aw düşürme, MAP, asitlik, katkı), bulaşmayı önleme (aseptik çalışma, ambalajlama, dekontaminasyon).\nKurutma gıdadaki suyun uzaklaştırılmasıdır; en eski muhafaza yöntemlerindendir. Esası suyu mikroorganizma ve biyokimyasal reaksiyonlar için gerekli seviyenin altına indirmektir. Etki: aw düşer (reaksiyonlar yavaşlar/durur) + ısıl işlem (mikrobiyal yük azalır).\nSu aktivitesi = gıdadaki suyun buhar basıncı / aynı sıcaklıktaki saf suyun buhar basıncı. Yüksek aw biyokimyasal reaksiyonları ve mikrobiyal faaliyeti hızlandırır. Minimum aw: patojen bakteri 0.91-0.95, küf 0.80, halofilik bakteri 0.75, ozmofilik maya 0.60. Örnek: taze et ve süt 0.98, peynir ve ekmek 0.95, bal 0.55, kuru meyve 0.60-0.70, bisküvi 0.30-0.50.\nKurutma tipleri: güneşte (ucuz, uzun, iklime bağlı, hijyen riski); sıcak hava akımı (kısa, iklimden bağımsız, kontrollü, hijyenik; yüksek enerji, besin kaybı); vakumlu (düşük sıcaklık, hızlı); tambur (yüksek sıcaklık, direkt temas, yüksek besin kaybı, ısıya dayanıklı ürün); sprey (sıvı gıda → toz, kurulum maliyeti); dondurarak (üst kalite, ısıya hassas gıda, çok yüksek enerji ve maliyet); radyasyon (infrared/mikrodalga, kısa süre, hassas kontrol, yanma riski).'),
    lg('soguk', 'Soğutma ve dondurmayı; tanımlar, avantajlar, depolama sıcaklıkları, dondurma hızı, soğutma sistemleri ve soğuk zincir ile birlikte anlatınız.', [
      'Soğutma: 0-4 °C, en yaygın; raf ömrü, tat-renk-besin-doku korunur, gıda güvenliği', 'Depolama: et 0-2, süt 0-4, sebze-meyve 4-8, tropik-patates-soğan 8-15, yumurta 4',
      'Dondurma: 0 °C altı; doku genellikle korunmaz; mevsim dışı tüketim; sıvı su kalmaz', 'Yavaş (3-72 saat) – hızlı (30 dk −20 °C)',
      'Kristal ve damlama farkları; mikroorganizmaya etkisi', 'Dondurma hızı: kristal boyutu, adaptasyon, soğuk şoku',
      'Buhar sıkıştırmalı ve absorpsiyonlu sistemler; Carnot', 'Soğuk zincir aşamaları'
    ], 'Soğutma, gıdaların 0-4 °C\'de tutulmasıdır; en yaygın muhafaza yöntemidir (endüstriyel/evsel). Raf ömrünü uzatır; tat, renk, besin ve doku özelliklerini korur (dokuda net fiziksel değişim olmaz); gıda güvenliği sağlar. Depolama: et 0-2, süt 0-4, sebze-meyve 4-8, tropik meyve-patates-soğan 8-15, pişmiş yemek 0-4, deniz ürünleri 0-2, yumurta 4 °C.\nDondurma, gıdaların 0 °C altında buz haline getirilmesidir; raf ömrü uzar; tat, renk ve besin korunur ama doku genellikle korunmaz (hızlı dondur, yavaş çöz); mevsim dışı tüketim sağlar. Mikrobiyal faaliyet için sıvı su gerekir; donunca faaliyet durur.\nYavaş dondurma 3-72 saat; hücre dışında makro kristal, hücre içi su dışarı, duvar zedelenir, tekstür bozulur, damlama kaybı; mikroorganizma büzülür. Hızlı dondurma 30 dk\'da −20 °C altı; içte ve dışta mikro kristal, duyusal özellikler korunur, damlama azalır; mikroorganizmada su hücre içinde donar, zar delinir. Dondurma hızı kristal boyutunu, mikroorganizmanın adaptasyonunu ve soğuk şokunu etkiler.\nSistemler: buhar sıkıştırmalı (kompresör, kondenser, genleşme valfi, evaporatör); absorpsiyonlu (absorber, jeneratör, kondenser, evaporatör). Temel buharlaşma-yoğuşma; Carnot çevrimi; madde kaybı yok. Yeni teknolojiler: adsorpsiyon, güneş destekli, faz değiştiren materyaller, termoelektrik, manyetik, termosonik, elektrokalorik.\nSoğuk zincir: üretim → işleme ve paketleme → depolama ve taşıma → dağıtım/perakende → tüketici.'),
    lg('fermantasyon', 'Fermantasyonu; tanım, mikroorganizmalar, koruma mekanizması, pH ve alkol etkisi, türleri ve konserveden farkıyla birlikte anlatınız.', [
      'Tanım: mikroorganizma faaliyetiyle kimyasal değişim ve yeni bileşik oluşumu', 'Mikroorganizmalar: Lactobacillus, Acetobacter, Propionibacterium; S. cerevisiae, Candida, Zygosaccharomyces; Aspergillus, Penicillium',
      'Koruma: düşük pH, alkol, organik asitler, besin yarışı; geniş spektrum', 'Kritik pH 4.6; pH<4.6 güvenli; bakteri-maya-küf pH aralıkları',
      'Alkol etkisi: <5 önemsiz, 5-10, 10-15, >18 öldürücü', 'Türler: laktik, alkol, asetik, propiyonik, karma (ürünlerle)',
      'Konserveden farkı: amaç, üretim şekli, mikrobiyal faaliyet'
    ], 'Fermantasyon (mayalama), mikroorganizma faaliyetleriyle besin maddelerinin kimyasal değiştiği ve yeni bileşiklerin oluştuğu biyolojik prosestir. Bakteri (Lactobacillus, Acetobacter, Propionibacterium), maya (Saccharomyces cerevisiae, Candida, Zygosaccharomyces) ve küf (Aspergillus, Penicillium) kullanılır.\nKoruma: düşük pH (Clostridium botulinum\'a karşı), alkol üretimi, organik asitler (zar ve hücre içi yapıları bozar), besin için yarışma; organik asit + alkol geniş spektrumlu etki. Düşük asitli gıdalarda kritik pH 4.6, pH<4.6 güvenli. Gelişme pH: bakteri 4.6-9.0 (en iyi 6.5-7.5), maya 3.0-8.5 (4.5-6.5), küf 2.0-11.0 (6.5-7.0).\nAlkol: <%5 önemsiz; %5-10 bazı bakteri ve mayalar yavaşlar; %10-15 çoğu bakteri önlenir; >%18 tümü için öldürücü.\nTürler: laktik asit (Lactobacillus; yoğurt, turşu, salam), alkol (S. cerevisiae; ekmek, bira, şarap), asetik asit (Acetobacter; sirke), propiyonik asit (Propionibacterium, besini laktik asit; bazı peynirler), karma (maya + bakteri; kefir, kombucha, ekşi maya ekmeği, zeytin).\nKonserveden farkı: fermantasyon gıdaya özgün tat ve asidik özellik katar (koruma dolaylı), spesifik mikroorganizmaların çoğaltılmasıyla yapılır, mikrobiyal faaliyet vardır. Konserve bozulmayı önleyip raf ömrünü uzatır, ısıtma ve hermetik kapamayla yapılır, mikrobiyal faaliyet yok ya da çok azdır.'),
    lg('konserve', 'Konserve teknolojisini ve modifiye atmosfer paketlemeyi (MAP) ayrıntılı anlatınız.', [
      'Konserve tanımı: ısıl işlem + hermetik kapama; mikroorganizma ve enzim inhibisyonu', 'Koruma: ısıl işlem, asitli ortam, tuzlama/salamura, şekerleme',
      'Ambalaj: cam, metal, plastik (avantaj/dezavantaj); migrasyon ve lak', 'Botulizm riski; F0: 121.1 °C, dakika, soğuk nokta, sıcaklık düşerse süre uzar',
      'MAP tanımı ve amacı', 'Gazlar: N2, CO2, O2 görevleri', 'Aktif ve pasif MAP', 'Gaz oranları örnekleri (meyve-sebze, kırmızı et, cips)'
    ], 'Konserve: ürünlerdeki bozulma ve zehirlenme etkeni mikroorganizmaların ve enzimlerin ısıl işlemle inhibe edilerek raf ömrünün uzatıldığı prosestir; ısıl işlem + hermetik kapama. Koruma mekanizmaları: ısıl işlem, asitli ortam, tuzlama/salamura, şekerleme.\nAmbalaj: cam (inert, şeffaf; ağır, kırılgan), metal (dayanıklı, hafif, yüksek ısı iletimi; migrasyon, korozyon, oksitlenme), plastik (hafif, şeffaf, esnek, ısıya uygun; migrasyon). Migrasyonu önlemek için lak (epoksi, beyaz, altın) uygulanır.\nBotulizm riski (Clostridium botulinum). F0 değeri: 121.1 °C\'de C. botulinum sporlarını yok etmek için gereken süre; birimi dakika; ürünün soğuk noktasının bu sıcaklıkta tutulma süresidir; sıcaklık düşerse süre uzar.\nMAP: depolama atmosferinin bileşimi değiştirilerek sızdırmaz ambalajda depolama; mikrobiyal faaliyet ve reaksiyonları yavaşlatır. Azot inert, hacmi doldurur; CO2 bakteri ve küf çoğalmasını önler; O2 tamamen uzaklaştırılmaz, canlı gıdalar ve et rengi için az miktarda bırakılır.\nAktif MAP (meyve-sebze dışı): vakumla gazlar boşaltılır, istenen gaz verilir, sızdırmaz kapatılır. Pasif MAP (meyve-sebze): gaz değiştirilmez, ürünün metabolizmasıyla atmosfer oluşur.\nÖrnek oranlar: meyve-sebze N2 80-92, O2 5-10, CO2 3-10; taze kırmızı et O2 70-80, CO2 20-30; cips %100 N2.'),
    lg('meyve-sebze', 'Meyve suyu-nektar ile reçel-marmelat üretimini; tanımlar, işlem basamakları, durultma, pektin ve HMF ile birlikte anlatınız.', [
      'Meyve suyu %100, nektar %25-50, meyveli içecek <%10', 'Presleme (fiziksel) ve ekstraksiyon (mekanik+kimyasal+enzimatik, yüksek verim)',
      'Filtrasyon-durultma: bulanıklık nedenleri; durultma = depektinizasyon + berraklaştırma; pektolitik-amilotik enzim', 'Berraklaştırma: jelatin (+), bentonit (−), kizelzol (−) → flok → süzme',
      'Reçel (iri parça) – marmelat (parça yok)', 'Reçel basamakları; %60-65 şeker, ~105 °C, pH 3.0-3.5',
      'Pektin: HM (şeker+asit, H bağı) – LM/LMA (Ca, egg-box)', 'HMF: şeker + asit + ısı, kanserojen; düşük sıcaklıkta üretim'
    ], 'Meyve suyu %100 meyve suyudur (su-şeker yok; doğrudan meyveden veya konsantrenin sulandırılmasıyla). Nektar %25-50 meyve, su ve şeker ilaveli. Meyveli içecek <%10 meyve; su, şeker, aroma, katkı.\nPresleme-sıkma sadece fiziksel yöntemdir (elma, üzüm, narenciye). Ekstraksiyon mekanik, kimyasal ve enzimatik yöntemleri birleştirir; posa-lif yoğun ürünlerde (şeftali, kayısı) daha yüksek verim sağlar.\nFiltrasyon ve durultma bulanıklığı gidermek için yapılır; pektin, nişasta ve proteinlerin polifenollerle bileşikleri bulanıklık yapar. Durultma = depektinizasyon + berraklaştırma; filtrasyondan ileri seviyede ayırma. Pektolitik ve amilotik enzimler pektin ve amilozu parçalar. Berraklaştırma: jelatin (+), bentonit (−), kizelzol (−) → flok → süzme.\nReçel: bütün, yarım veya küçük meyve parçalarına şeker ilavesiyle; parçalar meyveyi tanıtacak kadar iri. Marmelat: meyve ezmesine şeker ilavesi, parça yok. Basamaklar: hammadde → ön işlem → şeker ilavesi ve pişirme (%60-65 şeker, gerekirse pektin ve sitrik asit; ~105 °C, uygun °Bx) → dolum-kapatma → soğutma-etiketleme. Jel, pektin + şekerin pH 3.0-3.5\'te ısıyla oluşturduğu yapıdır.\nPektin: metoksilasyon derecesi etkiler. HM pektin yüksek şeker ve asitle, OH grupları arasında hidrojen bağıyla sert-kırılgan jel (geleneksel reçel). LM ve LMA pektin Ca²⁺ iyonlarıyla iyonik bağ (yumurta kutusu modeli), daha yumuşak jel (diyet reçel).\nHMF (5-hidroksi metil furfural): basit şeker + asidik ortam + ısı; bal, reçel, karamelize ürün, ekmek kabuğu, meyve suyunda; kanserojen-toksik etkiler; düşük sıcaklıkta reçel üretimi gereklidir.'),
    lg('tahil-urun', 'Tahıl ve ürünleri teknolojisini; tahılın bileşimi ve kalite kriterleri, depolama, nişasta-gluten, un üretimi ve ekmek-makarna üretimiyle anlatınız.', [
      'Bileşim: KH %65-75, protein %8-12, yağ 1-3, lif-kül %1-2', 'Kalite: bin tane, HL ağırlığı, tane sertliği ve kullanım',
      'Depolama nemi %12-14, >%14 küf-mikotoksin; silo takibi', 'Nişasta: amiloz + amilopektin, jelleşme 60-80 °C',
      'Gluten: gliadin + glutenin; gaz tutma, elastikiyet; her tahılda yok; çölyak', 'Un üretim basamakları; taş değirmen vs valsli',
      'Ekmek: T. aestivum, 200-250 °C, CO2 + gluten; mısır ekmeği maya yok', 'Makarna: T. durum, ekstrüzyon, mayalama yok'
    ], 'Tahıl, buğdaygillerden hasat edilen ürünler ve tohumlarıdır. Bileşim: KH %65-75, protein %8-12, yağ %1-3, lif ve kül %1-2. Bin tane ağırlığı ve hektolitre ağırlığı yüksekse tane dolgun ve kalitelidir. Tane sertliği öğütmeye dirençtir; yüksek protein ve düşük nem sertlik verir; sert tane irmik, yumuşak tane ince un verir (sert buğday makarna-irmik; sert ekmeklik ekmek-pide-simit; yumuşak bisküvi-kek).\nDepolama nemi: buğday, mısır, kabuklu pirinç %12-14; arpa, yulaf-çavdar %12-13. %14 üstünde küf ve mikotoksin riski; tohum canlı olduğundan metabolizma ve ısı oluşur. Silolarda nem-sıcaklık takibi ve havalandırma yapılır.\nNişasta: bitkilerin glikoz depolama şekli; amiloz ve amilopektinden oluşur; 60-80 °C\'de su ile jelleşir. Gluten (gliadin + glutenin): bitkisel protein; mayalanma gazlarını tutup kabarmayı sağlar; hamura esneklik ve elastikiyet verir; her tahılda bulunmaz. Çölyakta villuslar tahrip olur; hastalar tamamen glutensiz beslenmelidir.\nUn üretimi: tahıl seçimi ve depolama → temizleme (eleme, hava akımı, mıknatıs) → nem ayarlama ve yumuşatma → öğütme → eleme ve sınıflandırma → zenginleştirme (opsiyonel) → paketleme. Taş değirmen: kepek kısmen una geçer, tam tahıl unu, yüksek besin, düşük kapasite. Valsli değirmen: beyaz un, yüksek verim, düşük besin içeriği.\nEkmek: Triticum aestivum unu; yoğurma → fermantasyon → şekil ve son fermantasyon → 200-250 °C pişirme; CO2 gazı glutenle tutulur. Mısır ekmeği: kabartma ajanı kullanılır, maya yok (buğday unu eklenmedikçe), 180-200 °C. Makarna: Triticum durum; yoğurma → ekstrüzyon → kurutma; mayalama-fermantasyon yoktur.')
  ]
});
})();
