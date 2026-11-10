(function () {
var Q = App.Q, mc = Q.mc, tf = Q.tf, fill = Q.fill, op = Q.op, lg = Q.lg;

App.course({
  id: 'fide', short: 'Fide ve Fidancılık', title: 'Fide ve Fidancılık Tekniği',
  desc: 'Çoğaltma yöntemleri, anaçlar, tohum alma ve muhafaza, çimlenmeyi hızlandırma ve katlama, aşı ile çoğaltma, göz ve kalem aşıları.',
  lead: 'Kaynak: vize notları (Ders 1–5). Daldırma, çelik ve bitki büyüme düzenleyicileri finale kaldığı için burada yok. Aşı tipleri ve farkları, katlama ve anaçlar en çok soru çıkan yerler.',
  traps: [
    { t: 'Tek yıllık (sebze) üretim materyali **fide**; çok yıllık (meyve) **fidan**.', topic: 'temel' },
    { t: 'Yabani tohumdan **çöğür**, kültür çeşidinin tohumundan **yoz**. İkisi de generatif anaç.', topic: 'temel' },
    { t: 'Tohumla çoğaltma: vegetatif üretim zor ise, **anaç eldesinde**, ıslahta yeni çeşit için.', topic: 'temel' },
    { t: 'TTC (tetrazolium) testinde **canlı doku kırmızı**, ölü renksiz; en **çabuk** sonuç veren test.', topic: 'tohum' },
    { t: 'Çimlenmeyi hızlandırma: **mekanik, kimyasal, suda ıslatma, katlama**. Katlama daha çok **sert kabuklu** (şeftali, erik, zeytin); kimyasal daha çok **yumuşak kabuklu** (turunçgil, elma, armut); tohum ucu kesme **avokado**.', topic: 'cimlenme' },
    { t: 'Katlamada tohum erken çimlenirse katlama **karıştırılır** → 7-10 gün gecikme.', topic: 'cimlenme' },
    { t: 'Tohum **çapının 2-3 katı** derinliğe ekilir. Tavada **sıravari ekim** serpmeye tercih edilir.', topic: 'cimlenme' },
    { t: '**Ayva üzerine armut** olur (ayva bodur anaç); **armut üzerine ayva** başarısız. Badem ve kayısı birbirine aşılanamaz.', topic: 'asi-genel' },
    { t: 'Aşı uyuşmazlığının en tipik belirtisi: aşı noktasından **düzgün yüzeyle kırılma**. Armut üzerine elmada şişkinlik yok ama uyuşma kötü.', topic: 'asi-genel' },
    { t: 'Kallus elmada **0 °C altı ve 40 °C üstünde** oluşmaz; **4-32 °C** arasında sıcaklıkla hızlanır.', topic: 'asi-basari' },
    { t: '**Sürgün aşı:** erken ilkbahar ve haziran, aynı sezon sürer. **Durgun aşı:** ağustos-eylül göz aşısı, ertesi ilkbahar sürer.', topic: 'anac-kalem' },
    { t: 'Göz aşısında **macun gerekmez**, tutma **%80-95**, sonuç **15-20 günde** belli, günde **800-1200** aşı.', topic: 'goz' },
    { t: '**Yama** aşı: kalın kabuklu ceviz, pikan. **Yongalı:** kabuk kalkması gerekmez, Amerikan asma anaçları, 6 mm gövde. **Ters T:** yağmurlu bölge.', topic: 'goz' },
    { t: 'Anaç çapı: **T** 0.6-2.5 cm · **İngiliz** ≤ 1.5 cm (anaç = kalem) · **yarma** 2.5-10 cm · **kakma** 7.5-10 cm ve üstü · **çoban** 10-30 cm.', topic: 'kalem' },
    { t: 'Onarma aşıları: **kemer, köprü, yanaştırma**. Makineli aşı: **omega (Ω)** ve V; saatte 500-800 aşı.', topic: 'kalem' }
  ],
  rules: {
    temel: 'Generatif = tohumla; vegetatif = yaprak, dal, sürgün gibi vegetatif dokularla. Meyvede generatif tercih edilmez: heterozigotluk (açılım), çekirdeksizlik, zayıf çimlenme.',
    tohum: 'Sert çekirdekliler yarılarak; yumuşak çekirdekliler (elma, armut, ayva) ezilip suda fermantasyonla; ceviz-badem yeşil kabuk kavlatılarak; turunçgil yarılıp burularak, 52 °C suda 10 dk dezenfekte.',
    cimlenme: 'Katlama: soğuklama ihtiyacı ve dormansiyi gidermek için tohumu belli süre nemli ve soğuk ortamda tutmak. Ortam en çok kum. Gereken: düşük sıcaklık, havalanma, nem emilimi, belli süre.',
    'asi-genel': 'Affinite: anaç ve kalem kambiyumlarının biri diğerinin devamı olacak şekilde kaynaşması. Akrabalık azaldıkça (çeşit → tür → cins → familya) başarı düşer; familyalar arası başarılı kombinasyon yok.',
    'asi-basari': 'Başarıyı etkileyenler: uyuşmazlık, bitki cinsi, sıcaklık ve nem, anacın gelişme durumu, aşı tekniği, hastalık-zararlı; ayrıca aşı yerinden su kaybı (macun, parafin).',
    'anac-kalem': 'Kalem: 1 yaşlı, sağlıklı, tacın dış güneşli kısmından, 8-12 mm çaplı, sürgünün ortasından. 3-4 hafta için 0-4 °C, 1-3 ay için 0 °C nemli ortam.',
    goz: 'Göz aşısı tek gözlü kabuk parçasıyla yapılır; bitkinin kabuk vermesine bağlıdır. Çeşitleri: T, ters T, yama, yongalı. 3 dönemde: erken ilkbahar, haziran, ağustos-eylül.',
    kalem: 'Kalem aşısında anaca 1-3 gözlü, 7-15 cm, 1-2 yaşlı dal parçası takılır. Yarma, kakma, çoban, İngiliz, makineli; onarma: kemer, köprü, yanaştırma.'
  },
  topics: [
    { id: 'temel', title: 'Fide-fidan, çoğaltma yöntemleri ve anaç tipleri', src: 'Ders 1',
      blocks: [
        { t: 'ul', items: [
          '**Fide:** tek yıllık bitkilerde (sebze) üretim materyali. **Fidan:** çok yıllık bitkilerde (meyve) üretim materyali.',
          'Çoğaltma: **generatif** (eşeyli, tohumla) ve **vegetatif** (tohum dışında yaprak, dal, sürgün gibi vegetatif dokularla).'
        ] },
        { t: 'h', text: 'Meyve türlerinde generatif çoğaltma neden her zaman tercih edilmez?' },
        { t: 'ol', items: [
          'Çeşitlerin **heterozigot** yapısı nedeniyle tohumla çoğaltıldıklarında genetik **açılım** göstermeleri.',
          'Bazı tür ve çeşitlerde **çekirdeksizlik** (muz, bazı portakal-mandarin-altıntop, çekirdeksiz üzüm).',
          'Bazı türlerin tohumlarının **çimlenme gücünün zayıf** olması veya hiç olmaması.'
        ] },
        { t: 'p', text: '**Tohumla çoğaltma ne zaman tercih edilir?** Vegetatif üretimin zor olduğu türlerde, **anaç eldesinde** ve ıslahta yeni çeşit elde etmede.' },
        { t: 'ul', items: [
          '**Kalem (çeşit):** bitkinin toprak üstü kısmı (taç). **Anaç:** kök sistemi.',
          '**Çöğür:** yabani tiplerin tohumundan elde edilen bitki. **Yoz:** kültür bitkilerinin tohumundan elde edilen bitki. Üzerlerine istenen çeşit aşılanır.',
          '**Generatif anaç:** tohumdan (çöğür veya yoz). **Vegetatif anaç:** çelik, daldırma, kök sürgünü vb. parçalardan (klon anaç).'
        ] },
        { t: 'table', head: ['', 'Generatif anaç', 'Vegetatif anaç'], rows: [
          ['Avantaj', 'Kolay, çabuk, ekonomik elde edilir; virüsle bulaşık değil; kuvvetli kök sistemi → kuraklık ve soğuğa dayanıklı', 'Homojen, bir örnek bitki; uyuşma, verim, gelişme kuvveti, meyveye başlama, ömür, ekolojik istekler bilinir; şekil, büyüklük, verim-kalite kontrol edilir; birim alandan verim ve kalite artar'],
          ['Dezavantaj', 'Anaç-kalem uyuşma sorunları; ekonomik ömür, fizyoloji, gelişme ve ekolojik istekler tam bilinmez → önlenmesi güç sakıncalar', 'Fazla iş gücü, pahalı altyapı yatırımı ve bilgi birikimi gerekir']
        ] },
        { t: 'table', head: ['Elma anaçları (gelişme)', 'Örnek'], rows: [
          ['Çok bodur', 'M20, M27'], ['Bodur', 'M9, M7, M26'], ['Orta kuvvetli', 'MM106, M2, M4'], ['Kuvvetli', 'M25, MM109'], ['Çok kuvvetli', 'M1, M16'],
          ['Generatif (çok kuvvetli)', 'Ferik, Delicious, R. Beauty, Winesap, Antonovka']
        ] },
        { t: 'note', text: 'Notta MM111 hem orta kuvvetli hem kuvvetli satırında geçiyor; o anaç üzerine soru konmadı.' },
        { t: 'h', text: 'Fidan yetiştiriciliği' },
        { t: 'ul', items: [
          '**Anaç kullanarak:** A. Anaç yetiştiriciliği – a) generatif üretim (çıplak köklü, tüplü), b) vegetatif üretim (daldırma, çelik, doku kültürü, dip sürgünü) · B. Aşılama.',
          '**Anaç kullanmadan:** vegetatif üretim (daldırma, çelik, doku kültürü, dip sürgünü vb.).',
          'Generatif (tohumdan) anaç üretimi: turunçgiller, erik, şeftali, zeytin, kiraz, kayısı. Tohum alma: ezme, kurutma, sıkma, ezme + fermentasyon.'
        ] }
      ] },
    { id: 'tohum', title: 'Tohum temini, çıkarılması, muhafazası ve canlılık testleri', src: 'Ders 1',
      blocks: [
        { t: 'h', text: 'Tohum temini' },
        { t: 'ul', items: [
          'Verim devresindeki, iyi gelişmiş, sağlıklı yabani veya kültür ağaçlarından alınır; zayıf ağaç tohumunda yedek besin az → çimlenme düşük.',
          'Hangi bölgede kullanılacaksa o bölge şartlarındaki ağaçlardan alınır.',
          'Meyveler tam olgunlukta (çeşide özgü renk, irilik) hasat edilir.'
        ] },
        { t: 'table', head: ['Meyve grubu', 'Tohumun çıkarılması'], rows: [
          ['Sert çekirdekli (şeftali, erik, mahlep, kayısı, kiraz)', 'Meyveler **yarılarak**; yıkanıp gölgede kurutulur'],
          ['Yumuşak çekirdekli (elma, armut, ayva)', 'Meyve **ezilir**, suda bekletilir; **fermantasyon** sonrası sağlam çekirdek dibe çöker, et-kabuk-zayıf tohum üstte toplanır; yıkanıp gölgede kurutulur'],
          ['Sert kabuklu (ceviz, badem)', 'Yeşil dış kabuk **kavlatılarak** soyulur; gölgede kurutulur'],
          ['Üzümsü (çilek, ahududu, böğürtlen)', 'Ezilip su dolu kaba konur; dibe toplanan tohum süzgeçle alınır'],
          ['Turunçgil', 'Kabuk yüzeysel yarılıp iki yarı ters yöne **burularak**; yıkanır, **52 °C suda 10 dk** dezenfekte, havadar gölgede kurutulur']
        ] },
        { t: 'h', text: 'İyi bir tohumun özellikleri' },
        { t: 'ul', items: [
          'Taze; çimlenme gücü yüksek (tam olgun meyveden); çeşide özgü renkte.',
          'İyi yıkanmış, temizlenmiş, kurutulmuş.',
          'Isıtılarak veya basınçla ezilerek yapılan meyve suyu, pekmez, pestil artıklarından **çıkarılmamış** olmalı.',
          'Hastalıksız; böcek ve mantar izi taşımamalı.'
        ] },
        { t: 'h', text: 'Tohumların muhafazası' },
        { t: 'p', text: 'Fungisit ve insektisitle ilaçlanıp saklanır. Yöntemler: kurutulmuş, vakumlu torba/kutu, soğukta kuru, soğukta nemli, **ultra soğuk (kriyoprezervasyon: sıvı azotta −196 °C)**.' },
        { t: 'table', head: ['Yöntem', 'Koşul'], rows: [
          ['Adi şartlar', 'Nispi nem **%50 veya az**; ağzı açık varil/torba veya zeminden 10-15 cm yükseğe serilir; oda ve kaplar dezenfekte; nem kontrol edilirse **1 yıl**'],
          ['Soğukta kuru', '**1-10 °C**, nem **%50-60** veya daha az; bodrum, kışın dışarısı; en iyi sonuç soğuk hava deposu'],
          ['Soğukta nemli', '**0-2 °C**; sıkıca kapalı kutular; ceviz, fındık, kestane, turunçgil tohumları']
        ] },
        { t: 'h', text: 'Canlılık testleri' },
        { t: 'ul', items: [
          '**Doğrudan çimlendirme:** laboratuvarda steril çimlendirme tepsisi veya petri; kurutma kağıdı arasında/üstünde, pamuk + havlu kağıt veya 1.5 cm steril kum/toprak.',
          '**Çıplak embriyo:** sadece embriyo çimlendirilir; nemli filtre kağıdında, ışıkta, **+18-23 °C**; 3 gün ya da 3 hafta sonra ölü embriyo **kahverengi ve yumuşak**, canlı sert kalır.',
          '**Tetrazolium (TTC):** kimyasal yöntem; **2,3,5-trifeniltetrazolium klorit** çözeltisi; canlı dokular **kırmızı**, cansızlar renksiz; **en çabuk** sonuç.'
        ] }
      ] },
    { id: 'cimlenme', title: 'Çimlenmeyi hızlandırma, katlama ve tohum ekimi', src: 'Ders 2 ★★★',
      blocks: [
        { t: 'p', text: 'Çimlenmeyi uyarıcı ve hızlandırıcı yöntemler: **mekanik yöntem, kimyasal yöntem, suda ıslatma, katlama**.' },
        { t: 'table', head: ['Yöntem', 'Açıklama'], rows: [
          ['Mekanik', 'Tohum kabuğu çatlatılır veya kırılarak ayrılır; su ve oksijen alımı kolaylaşır. Erik (10 °C) 45 → 25 gün; şeftali (5-10 °C) 60-100 → 35-60 gün; vişne (0 °C) 90 → 60 gün'],
          ['Kimyasal', 'H2SO4 ile aşındırma; büyüme düzenleyiciler (GA3, sitokinin, etilen); potasyum nitrat. Daha çok **yumuşak kabuklu** (turunçgil, elma, armut). Elma, armut, kiraz, fındıkta **5-100 ppm GA3**; diğer türlerde **100-500 ppm etilen**, 1 gün ıslatma. Şeftalide IAA, GA3, 2,4-D, etil alkol, thiourea, etilen'],
          ['Suda ıslatma', 'Sıcak veya soğuk suya daldırma; kabuktaki engelleyici maddeler yıkanır, kabuk yumuşar; kabuk kaynaklı dinlenmeyi kaldırır. Elma **2 gün**, dut ve pikan **4 gün**'],
          ['Katlama', 'Soğuklama ihtiyacını karşılamak, engelleyicileri gidermek (dormansi), su-oksijen alımını kolaylaştırmak için tohumu belli süre **nemli ve soğuk** ortamda tutma']
        ] },
        { t: 'h', text: 'Katlama' },
        { t: 'ul', items: [
          'İyi katlama için: **düşük sıcaklık**, **iyi havalandırma**, ortam neminin tohumca **emilmesi**, tohumun **belli süre** kalması.',
          '**Ortam:** iyi yıkanmış nehir kumu, spagnum yosunu, vermikulit, perlit, volkanik tüf; kolay bulunduğu için en çok **kum**. Kum ne çamurlaşacak kadar ince ne kurutacak kadar iri olmalı.',
          'Sıcaklık ve süre tür ve çeşide göre değişir. **Katlama zamanı** ekim zamanına göre ayarlanır; tohum erken çimlenirse katlama **karıştırılır** (7-10 gün gecikme); nem azalırsa sulanır.',
          '**Yapılışı:** 1) sandıkta, 2) beton yastıklarda (50 cm derin, 70 cm geniş, 3-4 m uzun; delikler fareye karşı kafesli), 3) dışarıda toprak yüzünde (az fidan; gölge yer, koni şeklinde yığın, tepeye saksı).',
          'Sandıkta: alta drenaj deliği ve kaba çakıl, üstüne kum; **sert çekirdekliler birbirine değmeden dizilir**, **yumuşak çekirdekliler serpilir**; tohum tabakasının 2-3 katı kalınlıkta kum; sandık dolana kadar tekrar; en üste kalın kum.'
        ] },
        { t: 'table', head: ['Tür', 'Sıcaklık °C', 'Süre (gün)'], rows: [
          ['Elma', '4.4–5.0', '60–80'], ['Armut', '5', '90'], ['Erik', '0–4', '60–90'], ['Kuş kirazı', '1.5', '100'], ['Mahlep', '2–4', '100'],
          ['Şeftali', '5–10', '60–100'], ['Zerdali', '0–7', '21–28'], ['Ceviz', '0', '55–60'], ['Trabzon hurması', '10', '60–90'], ['Kızılcık', '10', '120'],
          ['Kivi', '2–4', '20'], ['Kayısı-badem', '2–4', '30'], ['Kiraz-vişne', '0–10', '90–120']
        ] },
        { t: 'table', head: ['Uygulama (özet slayt)', 'Daha çok'], rows: [
          ['Katlama', 'Tohum kabuğu **sert**: şeftali, erik, zeytin'], ['Kimyasal (H2SO4, HCl, GA)', 'Tohum kabuğu **yumuşak**: turunçgil, elma, armut'], ['Tohum ucunu kesme', '**Avokado**'], ['Aşındırma', '—']
        ] },
        { t: 'h', text: 'Tohum ekimi' },
        { t: 'ul', items: [
          'Ekim yeri: tava veya sedde; tüpler. Ortam: su tutma ve havalanma kapasitesi, gözeneklilik iyi, organik madde yüksek.',
          '**Zaman:** sonbahar veya ilkbahar. İlkbaharda: soğuklama ihtiyacı olmayan, kabuğu ön işlem görmüş veya kışın katlanmış tohumlar. Katlanmamış tohumlar **kasımda** tavaya ekilip **doğal katlamaya** bırakılır.',
          '**Derinlik:** tohum **çapının 2-3 katı**; nemli tabakaya gelmeli. Çok derin → depo maddesi biter, havalanma kötü. Çok yüzlek → kuruma, kuş zararı.',
          'Tavaya **sıravari** veya serpme; **sıravari tercih edilir** (ot alma, kaymak kırma, sulama ve söküm kolay).'
        ] }
      ] },
    { id: 'asi-genel', title: 'Aşı ile çoğaltma: tanım, amaç, sınırlar, affinite', src: 'Ders 3 ★★★',
      blocks: [
        { t: 'p', text: 'Başlıca vegetatif yöntemler: aşı, daldırma, çelik, kök ve dip sürgünleri, doku kültürü.' },
        { t: 'p', text: '**Aşı:** iki bitki parçasını birleştirip kaynaştırarak tek bitki gibi büyümesini sağlamak. Üst kısım **kalem (çeşit)**, kök kısmı **anaç**. Bu yöntemlerin tümüne **aşılama** denir.' },
        { t: 'h', text: 'Aşılamanın amaçları' },
        { t: 'ul', items: [
          'Çelik, daldırma vb. ile ekonomik çoğaltılamayan türleri çoğaltmak', 'Anaçların üstün özelliklerinden yararlanmak', 'Ara anaçların olumlu etkilerinden yararlanmak',
          'Çeşit değiştirme', 'Zarar gören kısımları onarma', 'Islah bitkilerinde büyümeyi hızlandırma', 'Virüs hastalıklarını inceleme',
          'Aynı çeşitten çok sayıda fidan elde etme', 'Kıymetli materyallerin üretimi, muhafazası, değerinin kısa sürede anlaşılması'
        ] },
        { t: 'h', text: 'Aşının sınırları (akrabalığa göre)' },
        { t: 'table', head: ['Düzey', 'Durum ve örnek'], rows: [
          ['Çeşit içinde', 'Kalem/göz hem alındığı ağaca hem aynı çeşidin tüm bireylerine başarıyla aşılanır (Starkspur Golden Delicious, Ankara armudu)'],
          ['Çeşitler arasında', 'Bir tür içindeki çeşitler birbirine başarıyla aşılanır (Ankara, Akça, Williams, Şeker armut; Vitis vinifera çeşitleri)'],
          ['Türler arasında', 'Bazı türlerde başarılı, bazılarında değil. Citrus türleri arasında başarılı; badem, kayısı, erik şeftaliye anaç; ama **badem ve kayısı birbirine aşılanamaz**. Filokseralı alanda V. vinifera, Amerikan türleri (V. riparia, V. rupestris, V. champini) üzerine'],
          ['Cinsler arasında', 'Başarı şansı çok az. **Ayva üzerine armut** uyuşur (ayva bodur anaç); **tersi başarısız**. Üç yapraklı (Poncirus trifoliata) Citrus türlerine anaç'],
          ['Familyalar arasında', 'Bahçe bitkilerinde başarılı kombinasyon **yok**; kambiyumu olmayan bitkilerde kaynaşma hemen hemen olanaksız']
        ] },
        { t: 'h', text: 'Affinite (uyuşma)' },
        { t: 'ul', items: [
          '**Affinite:** aşı ünitesinde anaç ve kalemin kambiyum dokularının biri diğerinin devamı olacak şekilde gelişip kaynaşması.',
          '**İyi uyuşma:** kambiyum (kabuk) iyi kaynaşır, aşı yeri düzgün, belirgin şişlik yok.',
          '**Kötü uyuşma:** iyi kaynaşma yok; çoğunlukla anaç veya kalem tarafında **şişkinlik**.',
          'Çakışan kambiyumlar meristematik **kallus** oluşturur; birleşme sonrası odun ve soymuk dokuları su, besin ve asimilasyon ürünlerinin geçişine izin verir. Uyuşmazlıkta bu ortak doku oluşmaz.'
        ] },
        { t: 'h', text: 'Kötü uyuşma belirtileri' },
        { t: 'ul', items: [
          'Yüksek oranda aşının tutmaması', 'Ağaçların erken ölmesi', 'Kötü sağlık: sarı yaprak, sonbaharda erken dökülme, zayıf büyüme',
          'Anaç ve kalemin enine büyüme hızlarının eşit olmaması', 'Aşı noktasının altında veya üstünde aşırı büyüme', 'Mevsim başı ve sonunda gelişme zamanı farkları',
          'Örnek: **armut üzerine elma** – şişkinlik yok ama uyuşma kötü.',
          '**En tipik belirti:** ağacın aşı noktasından **düzgün bir yüzeyle kırılması**. Williams armudu ayva üzerinde zayıf gelişir ve aşı yerinden kırılır; Pyrus pyrifolia üzerinde iyi kaynaşır ama meyve ucunda **siyahlaşma** olur → ikisi de uyuşmaz. Kiraz/idris kombinasyonunda belli yaştan sonra uyuşmazlık.',
          'Diğer: gerileme, sararma, erken yaprak dökümü, aşı yerinde nekroz ve çatlak, aşırı şişkinlik.'
        ] }
      ] },
    { id: 'asi-basari', title: 'Aşıda başarıyı etkileyen faktörler', src: 'Ders 3',
      blocks: [
        { t: 'p', text: 'Başarı; anaç-kalemin **botanik akrabalığına**, aşılama ve sonrasında **sıcaklık-nem** koşullarına, **aşı tekniğine** ve gösterilen **özene** bağlıdır.' },
        { t: 'table', head: ['Faktör', 'Açıklama'], rows: [
          ['a) Uyuşmazlık', 'Uyuşmaz olduğu bilinen kombinasyonlardan kaçınılmalı'],
          ['b) Bitki cinsi', 'Uyuşmazlık olmasa da bazılarında kaynaşma zor: elma-armutta onarma/çeşit değiştirme kalem aşısı başarılı, **şeftali ve kayısıda** daha az başarılı, özel dikkat gerekir'],
          ['c) Sıcaklık ve nem', 'Kallus için sıcaklık çok etkili. Elmada **0 °C altı ve 40 °C üstünde** kallus hemen hiç oluşmaz, **40 °C\'de hücreler ölür**; **4-32 °C** arasında sıcaklık arttıkça kallus hızlanır'],
          ['d) Anacın gelişme durumu', 'Özellikle göz aşısında anaç kolay **kabuk veren** aktif büyüme devresinde olmalı; aşıdan önce ve sırasında toprak **nemli** olmalı, yoksa kambiyum sıkışır'],
          ['e) Aşılama tekniği', 'Kambiyumların küçük bir kısmı temas ederse sadece orada kaynaşma olur; kalem sürer ama yaprak artınca terleme artar, iletim yetmez, kalem ölebilir'],
          ['f) Hastalık ve zararlılar', 'Özellikle **virüs** bulaşık materyal başarıyı düşürür; virüssüz ağaçtan kalem, materyali dezenfekte etme']
        ] },
        { t: 'p', text: 'Ayrıca aşı yerinden **su kaybı** önlenmeli; kallus hücreleri ince zarlı ve su kaybına çok duyarlıdır. Aşı yüzeyleri **aşı macunu** veya **reçine, balmumu, vazelin** içeren **parafin** karışımlarıyla kaplanır.' }
      ] },
    { id: 'anac-kalem', title: 'Anaçlar, aşı kalemleri, aşı tipleri ve zamanları', src: 'Ders 4 ★★★',
      blocks: [
        { t: 'ul', items: [
          'Anaçlar çoğaltmaya göre: tohumdan **çöğür veya yoz** (generatif) ve çelik, daldırma, kök sürgünüyle çoğaltılan **klon anaçlar** (vegetatif).',
          'Büyüme kuvvetine göre: kuvvetli, orta kuvvetli, zayıf (**bodur**), çok zayıf (**çok bodur**). Kuvvetli anaç yüksek, zayıf anaç kısa ağaç oluşturur.'
        ] },
        { t: 'h', text: 'Aşı kalemlerinin alınması ve muhafazası' },
        { t: 'ul', items: [
          'Çeşidin damızlık ağaçlarından alınan **bir yaşındaki** dallardır; modern fidanlıkta **kalem damızlıkları** kurulmalı (ismine doğru fidan garantisi).',
          'Kalemle hastalık ve zararlı taşınabilir → **sağlıklı** ağaçtan.',
          'Tacın **dış, güneş gören** kısmından; gölgedeki sürgünler iyi pişkinleşmez, boğum araları uzun, doku gevşek. **Obur dal, zayıf dal, meyve dalcığı** kullanılmaz.',
          'Çap en az **8-12 mm** (kurşun kalem kalınlığı); sürgünün **ortasından**; dip ve uç atılır (uç gözler olgunlaşmamış, dip gözler sürmeyebilir; kirazda çiçek gözü).',
          'Muhafaza: **50 veya 100\'lük demet**, gerekirse uçlar macunlanır, polietilen torbada **nemli perlit** içinde; **3-4 hafta için 0-4 °C**, **1-3 ay için 0 °C** nemli ortam; en iyisi soğuk hava deposu.'
        ] },
        { t: 'table', head: ['', 'Göz aşıları', 'Kalem aşıları'], rows: [
          ['Anaca takılan', 'Tek bir göz', 'Üzerinde 1-3 göz olan, 7-15 cm, 1-2 yaşlı dal parçası (kalem)'],
          ['Çeşitler', 'T göz, ⊥ (ters T) göz, yama, yongalı göz', 'İngiliz, yarma, kakma, çoban, makineli (omega)']
        ] },
        { t: 'table', head: ['Zaman', 'Ne zaman', 'Sürme'], rows: [
          ['**Sürgün aşı**', 'Erken ilkbahar ve haziran', 'Aşının yapıldığı sezon sürer'],
          ['**Durgun aşı**', 'Ağustos veya eylül (göz aşıları)', 'Aynı dönem kaynaşır ve tutar, **bir sonraki ilkbaharda** sürer']
        ] }
      ] },
    { id: 'goz', title: 'Göz aşıları', src: 'Ders 4 ★★★',
      blocks: [
        { t: 'ul', items: [
          'Küçük bir kabuk parçası (bazen biraz odunla) ve üzerindeki **tek gözle** yapılır.',
          'Uygulama, kabuğun odundan kolay ayrılmasına yani bitkinin **kabuk vermesine** bağlıdır.',
          'Kambiyumun aktif olduğu ilkbaharda başlar, sonbaharda büyüme durana kadar sürer. **3 dönemde** yapılır: **erken ilkbahar, haziran, ağustos-eylül**.'
        ] },
        { t: 'h', text: 'Göz aşılarının kalem aşılarına üstünlükleri' },
        { t: 'ol', items: [
          'Kurşun kalem kalınlığındaki (**5-6 mm**) anaçlara bile yapılır; anacın kalınlaşması beklenmez → ağaç **daha erken meyveye** yatar.',
          'Her anaca tek göz → **daha az kalem** kullanılır; yeni ıslah çeşitleri ve az gözlü çeşitler için önemli.',
          'Anaçta **çok az yara** açılır → tutma kolay; tutma oranı **%80-95**.',
          'Tutup tutmadığı **15-20 günde** belli olur → tutmayan aynı yıl yenilenir.',
          'Öğrenmesi ve yapması kolay; usta aşıcı + bağlayıcı günde **800-1200** aşı.',
          'Durgun göz aşıları fidanlıkta işlerin azaldığı dönemde yapılır.',
          'Aşıdan sonra **macun gerekmez**.'
        ] },
        { t: 'table', head: ['Göz aşısı', 'Özellik'], rows: [
          ['**T göz aşısı**', 'Fidanlıkta **0.6-2.5 cm** çaplı, ince, kolay kabuk veren anaçlara; toprak yüzeyinden **5-25 cm** yükseğe, düzgün kabuğa, aynı yönde. Göz T\'ye yerleştirilip yatay kesimler çakışana kadar aşağı itilir; kabuk kanatlarıyla kapatılır, **göz açıkta** kalır. Macun gerekmez; kaynaşana kadar lastik/plastik şeritle sıkıca sarılır'],
          ['**Ters T (⊥) aşısı**', '**Yağmurlu bölgelerde**, yağmur suyunun T\'ye girip enfeksiyon yapmaması için'],
          ['**Yama göz aşısı**', 'Anaçtan gözlü **dikdörtgen** kabuk parçası çıkarılıp yerine aynı boyda çeşide ait gözlü kabuk konur. T\'ye göre **daha yavaş ve zor**, ama **ceviz ve pikan** gibi **kalın kabuklu** türlerde başarılı'],
          ['**Yongalı göz aşısı**', '**Kabuğun kalkmasına gerek yok**; **Amerikan asma anaçlarında** yaygın. 3 dönemde de yapılabilir ama **ağustostaki durgun aşı** tercih edilir. **6 mm** gövdeye bile yapılabilir. Bağda topraktan **8-10 cm** yükseğe; bağlanınca nemli toprakla **kümbet** yapılır, ertesi ilkbahar geç don geçince açılır. Anaçta meyilli kesim, ilk kesimin 2-3 cm üstünden ikinci kesimle yonga çıkarılır; kalemden aynı şekilde gözlü yonga alınıp kabuklar çakışacak şekilde yerleştirilir']
        ] }
      ] },
    { id: 'kalem', title: 'Kalem aşıları, onarma aşıları ve tutmanın anlaşılması', src: 'Ders 5 ★★★',
      blocks: [
        { t: 'table', head: ['Kalem aşısı', 'Ne zaman / nereye', 'Özellik'], rows: [
          ['**Yarma**', 'Dinlenmede yapılabilir; en başarılı **ilkbaharda gözler kabarmadan hemen önce**', 'Küçük ağaç gövdesi veya büyük ağaç dalında **çeşit değiştirme**; filokseralı bağlarda aşısız Amerikan asmalarında. Anaç **2.5-10 cm**; merkezden **5-7.5 cm** derin yarık; kalem **7.5-10 cm**, **2-3 göz**, ucu 4-5 cm **kama**; yarığın iki yanına kambiyuma **iki kalem**; yüzey **macunlanır**'],
          ['**Kakma**', 'İlkbaharda anacın gelişmesinden hemen önce', '**7.5-10 cm veya daha kalın** dallarda çeşit değiştirme; yarmanın yerine; **büyük yara açma sakıncası yok**'],
          ['**Çoban (kabuk altı)**', 'Erken ilkbahar: kabuk kolay kalkar ama güçlü su akışı yok', '**10-30 cm** kalın anaç; testereyle dik kesim, serpetle düzeltme; kabuk 5-6 cm çizilip kaldırılır; kalem tek yöne meyilli kesilir, **ilk göz dışa** bakar; kabuk-odun arasına; kalınlığa göre **2\'den fazla** kalem'],
          ['**İngiliz**', '—', 'Göz aşısı başarısı düşük türler (**ceviz, asma, kiraz, elma**); tutma yüksek; **anaç ve kalem aynı kalınlıkta** olmalı (değilse şişkinlik, uyuşmazlık). **Dilciksiz:** otsu veya ≤ 1.5 cm gövde, 2-2.5 cm meyilli kesim. **Dilcikli:** çaplar eşit ve < 1.5 cm, karşılıklı dilcikler birbirine geçirilir'],
          ['**Makineli**', '—', 'Aşılı asma fidanında elle aşının yerini aldı; en yaygın **omega (Ω)** kesitli; elma, armut, ceviz, kirazda da; otomatik tiplerle **saatte 500-800**; düzgün kesit, yüksek başarı. Tipler: **V** ve **omega**']
        ] },
        { t: 'h', text: 'Onarma aşıları: kemer, köprü, yanaştırma' },
        { t: 'p', text: '**Köprü aşı:** gövdedeki zararları onarmak için; aktif büyümenin başladığı, kolay kabuk verdiği **ilkbahar başında**. Yaralı kabuk sağlam dokuya kadar temizlenir; yaranın altında ve üstünde her kalem için **5-7(.5) cm** kabuk çizilip çıkarılır (1-1.5 cm dil bırakılabilir); kalemin iki ucu 5-7 cm yüzlek ve ters yönde 1-1.5 cm kesilir; yerine sokulur, **küçük çivilerle** sabitlenip **macunlanır**.' },
        { t: 'h', text: 'Aşı tuttu mu?' },
        { t: 'table', head: ['Tutmuş', 'Tutmamış'], rows: [
          ['Gözün kabuğu açık kahverengi; göz yeşil; göz şişkin; gözün altındaki **yaprak sapı kolay kopuyor**', 'Kabuk ve göz **kararmaya** başlamış; **yaprak sapı kopmuyor**']
        ] }
      ] }
  ],

  bank: [
    /* temel */
    mc('temel', 'Çok yıllık bitkilerde (meyve) kullanılan üretim materyaline ne denir?', ['Fidan', 'Fide', 'Çöğür', 'Yoz', 'Kalem'], 'Tek yıllık (sebze) → fide; çok yıllık (meyve) → fidan.'),
    mc('temel', 'Yabani tiplerin tohumlarından elde edilen bitkilere ne denir?', ['Çöğür', 'Yoz', 'Klon anaç', 'Kalem', 'Fide'], 'Kültür çeşitlerinin tohumundan elde edilenler yoz.', { 1: 'Yoz, kültür bitkilerinin tohumlarından elde edilir.' }),
    mc('temel', 'Kültür bitkilerinin tohumlarından elde edilen anaçlara ne denir?', ['Yoz', 'Çöğür', 'Klon', 'Ara anaç', 'Fidan'], ''),
    mc('temel', 'Bitkinin kök sistemini oluşturan kısmına ne ad verilir?', ['Anaç', 'Kalem', 'Çeşit', 'Göz', 'Taç'], 'Toprak üstü (taç) kısım kalem veya çeşittir.'),
    mc('temel', 'Meyve türlerinde generatif çoğaltmanın her zaman tercih edilmeme nedenlerinden biri hangisidir?', ['Heterozigot yapı nedeniyle tohumla genetik açılım göstermeleri', 'Tohumla çoğaltmanın pahalı olması', 'Tohumların virüs taşıması', 'Tohumların çok hızlı çimlenmesi', 'Tohumdan elde edilen bitkilerin çok homojen olması'], 'Diğer nedenler: bazı türlerde çekirdeksizlik ve zayıf çimlenme gücü.'),
    mc('temel', 'Tohumla çoğaltma hangi durumda tercih edilir?', ['Anaç eldesinde', 'Çekirdeksiz çeşitlerin çoğaltılmasında', 'Homojen meyve bahçesi kurmak için', 'Çeşit özelliğini aynen korumak için', 'Virüslü ağaçları çoğaltmak için'], 'Vegetatif üretimin zor olduğu türlerde, anaç eldesinde ve ıslahta.'),
    mc('temel', 'Generatif anaçların avantajı hangisidir?', ['Virüslerle bulaşık olmamaları', 'Homojen bitkiler oluşturmaları', 'Ekolojik isteklerinin tam bilinmesi', 'Meyveye erken yatırmaları', 'Bodur ağaç oluşturmaları'], 'Ayrıca kolay, çabuk, ekonomik ve kuvvetli köklüdürler.', { 1: 'Homojenlik vegetatif anaç avantajıdır.' }),
    mc('temel', 'Vegetatif anaçların dezavantajı hangisidir?', ['Fazla iş gücü, pahalı altyapı ve bilgi birikimi gerektirmeleri', 'Virüslü olmaları', 'Heterojen olmaları', 'Uyuşma durumlarının bilinmemesi', 'Kök sistemlerinin zayıf olması'], ''),
    mc('temel', 'Elmada çok bodur anaç olarak verilen anaçlar hangileridir?', ['M20, M27', 'M1, M16', 'MM106, M2', 'M25, MM109', 'Ferik, Antonovka'], 'Bodur M9, M7, M26; çok kuvvetli M1, M16.'),
    mc('temel', 'Aşağıdakilerden hangisi elmada generatif (çok kuvvetli) anaç örneğidir?', ['Antonovka', 'M9', 'M27', 'MM106', 'M26'], 'Generatif: Ferik, Delicious, R. Beauty, Winesap, Antonovka.'),
    mc('temel', 'Generatif yolla (tohumdan) anaç üretimi yapılan türler arasında hangisi notlarda **yoktur**?', ['Muz', 'Turunçgiller', 'Erik', 'Şeftali', 'Zeytin'], 'Notlarda: turunçgiller, erik, şeftali, zeytin, kiraz, kayısı. Muz çekirdeksizdir.'),
    mc('temel', 'Anaç kullanmadan yapılan fidan yetiştiriciliği hangisidir?', ['Vegetatif üretim (daldırma, çelik, doku kültürü, dip sürgünü)', 'Aşılama', 'Generatif anaç üretimi', 'Tüplü çöğür üretimi', 'Çıplak köklü yoz üretimi'], ''),
    /* tohum */
    mc('tohum', 'Elma, armut ve ayva gibi yumuşak çekirdekli meyvelerde tohum nasıl çıkarılır?', ['Meyve ezilip suda bekletilir, fermantasyon sonrası dibe çöken tohumlar alınır', 'Meyveler yarılarak çekirdek alınır', 'Yeşil dış kabuk kavlatılarak soyulur', 'Meyve yarılıp iki yarı ters yöne burulur', 'Tohumlar dalda kurutulur'], ''),
    mc('tohum', 'Ceviz ve bademde tohum nasıl elde edilir?', ['Yeşil dış kabuk kavlatılarak soyulur, gölgede kurutulur', 'Meyve ezilip fermente edilir', 'Meyve 52 °C suda bekletilir', 'Süzgeçten süzülür', 'Asitle aşındırılır'], ''),
    mc('tohum', 'Turunçgil tohumları hangi işlemle dezenfekte edilir?', ['52 °C sıcak suda 10 dakika', '−196 °C sıvı azot', '0-2 °C nemli ortam', 'H2SO4 ile aşındırma', '100 ppm GA3'], ''),
    mc('tohum', 'Sert çekirdekli meyve türlerinden hangisinde çekirdekler meyveler yarılarak elde edilir?', ['Mahlep', 'Elma', 'Ayva', 'Çilek', 'Böğürtlen'], 'Şeftali, erik, mahlep, kayısı, kiraz.'),
    mc('tohum', 'İyi bir tohumun özellikleri arasında hangisi **yoktur**?', ['Pekmez ve pestil artıklarından elde edilmiş olması', 'Taze olması', 'Çeşide özgü renkte olması', 'Çimlenme gücünün yüksek olması', 'Hastalıksız olması'], 'Isıtılarak veya basınçla yapılan ürün artıklarından çıkarılmamış olmalıdır.'),
    mc('tohum', 'Zayıf ağaçlardan alınan tohumlarda çimlenme oranının düşük olmasının nedeni nedir?', ['Yeterli yedek besin maddesi birikmemesi', 'Fazla nem içermesi', 'Kabuklarının yumuşak olması', 'Virüssüz olmaları', 'Çok iri olmaları'], ''),
    mc('tohum', 'Ultra soğukta muhafaza (kriyoprezervasyon) hangi sıcaklıkta yapılır?', ['−196 °C, sıvı azot', '0-2 °C', '1-10 °C', '−18 °C', '52 °C'], ''),
    mc('tohum', 'Ceviz, fındık, kestane ve turunçgil tohumları için uygun muhafaza şekli hangisidir?', ['Soğukta nemli muhafaza (0-2 °C)', 'Adi şartlarda muhafaza', 'Soğukta kuru muhafaza (%50-60 nem)', 'Güneşte kurutma', 'Açık varilde saklama'], ''),
    mc('tohum', 'Adi şartlarda muhafazada nispi nem ne olmalıdır?', ['%50 veya daha az', '%80-90', '%60-70', '%100', '%30-40 olmak zorunda'], 'Nem kontrol edilirse tohum bir yıl korunabilir.'),
    mc('tohum', 'Soğukta kuru muhafazada sıcaklık hangi aralıktadır?', ['1-10 °C', '0-2 °C', '−196 °C', '18-23 °C', '20-25 °C'], 'Nem %50-60 veya daha düşük.'),
    mc('tohum', 'Tohumlara 2,3,5-trifeniltetrazolium klorit uygulanarak yapılan canlılık testinde canlı dokular hangi rengi alır?', ['Kırmızı', 'Renksiz', 'Kahverengi', 'Mavi', 'Siyah'], 'TTC kimyasal bir testtir ve en çabuk sonuç verir.'),
    mc('tohum', 'Çıplak embriyo testinde ölü embriyolar nasıl görünür?', ['Kahverengine döner ve yumuşar', 'Kırmızı renk alır', 'Sertliğini korur', 'Yeşil kalır', 'Çimlenir'], 'Canlılar sertliğini korur, bazen çimlenir.'),
    mc('tohum', 'Diğerlerine göre daha çabuk sonuç veren canlılık testi hangisidir?', ['Tetrazolium (TTC) testi', 'Doğrudan çimlendirme', 'Çıplak embriyo testi', 'Katlama testi', 'Suda ıslatma testi'], ''),
    mc('tohum', 'Çıplak embriyo testi hangi sıcaklıkta yapılır?', ['+18 / +23 °C', '0-2 °C', '52 °C', '−196 °C', '35-40 °C'], ''),
    /* çimlenme */
    mc('cimlenme', 'Aşağıdakilerden hangisi çimlenmeyi uyarıcı ve hızlandırıcı yöntemlerden biri **değildir**?', ['Kriyoprezervasyon', 'Mekanik yöntem', 'Kimyasal yöntem', 'Suda ıslatma', 'Katlama'], 'Kriyoprezervasyon bir muhafaza yöntemidir.'),
    mc('cimlenme', 'Tohum kabuğunun çatlatılması veya kırılarak ayrılması hangi yöntemdir?', ['Mekanik yöntem', 'Kimyasal yöntem', 'Katlama', 'Suda ıslatma', 'Tohum ucu kesme'], ''),
    mc('cimlenme', 'Mekanik yöntemle şeftali tohumlarının çimlenme süresi nasıl değişmiştir?', ['60-100 günden 35-60 güne', '45 günden 25 güne', '90 günden 60 güne', '20 günden 10 güne', '120 günden 100 güne'], 'Erik 45 → 25 gün; vişne 90 → 60 gün.'),
    mc('cimlenme', 'Kimyasal yöntem daha çok hangi meyvelerde uygulanır?', ['Tohum kabuğu yumuşak olan turunçgil, elma, armut', 'Tohum kabuğu sert olan şeftali, erik, zeytin', 'Avokado', 'Ceviz ve badem', 'Muz'], 'Katlama daha çok sert kabuklularda.', { 1: 'Bu türlerde daha çok katlama uygulanır.' }),
    mc('cimlenme', 'Elma, armut, kiraz ve fındıkta çimlenmeyi hızlandıran GA3 konsantrasyonu hangisidir?', ['5-100 ppm', '100-500 ppm', '1000 ppm', '1-2 ppm', '%5'], '100-500 ppm etilen diğer türlerde 1 gün ıslatılarak.'),
    mc('cimlenme', 'Suda ıslatma süresi elma tohumları için ne kadardır?', ['2 gün', '4 gün', '10 gün', '1 saat', '30 gün'], 'Dut ve pikan 4 gün.'),
    mc('cimlenme', 'Tohumların soğuklama ihtiyacını karşılamak ve dormansiyi gidermek için belli süre nemli ve soğuk ortamda tutulmasına ne denir?', ['Katlama', 'Suda ıslatma', 'Kriyoprezervasyon', 'Aşındırma', 'Kavlatma'], ''),
    mc('cimlenme', 'İyi bir katlama için gerekenler arasında hangisi **yoktur**?', ['Yüksek sıcaklık', 'İyi havalandırma', 'Ortamdaki nemin tohum tarafından emilmesi', 'Tohumun belli süre ortamda kalması', 'Düşük sıcaklık'], ''),
    mc('cimlenme', 'Katlama ortamı olarak en çok kullanılan materyal hangisidir ve neden?', ['Kum, kolay temin edildiği için', 'Perlit, ucuz olduğu için', 'Vermikulit, steril olduğu için', 'Spagnum, su tuttuğu için', 'Volkanik tüf, hafif olduğu için'], ''),
    mc('cimlenme', 'Katlamadaki tohumlar ekim zamanından önce çimlenmeye başlarsa ne yapılır?', ['Katlama karıştırılır (7-10 gün gecikme sağlanır)', 'Tohumlar hemen ekilir', 'Katlama sulanır', 'Sıcaklık artırılır', 'Tohumlar atılır'], ''),
    mc('cimlenme', 'Ceviz için katlama sıcaklığı ve süresi hangisidir?', ['0 °C, 55-60 gün', '10 °C, 120 gün', '5 °C, 90 gün', '2-4 °C, 20 gün', '5-10 °C, 60-100 gün'], ''),
    mc('cimlenme', 'Katlama süresi en kısa olan tür hangisidir?', ['Kivi (20 gün)', 'Kızılcık (120 gün)', 'Armut (90 gün)', 'Mahlep (100 gün)', 'Ceviz (55-60 gün)'], 'Zerdali 21-28 gün de kısadır.'),
    mc('cimlenme', 'Kızılcık için katlama sıcaklığı ve süresi hangisidir?', ['10 °C, 120 gün', '0 °C, 55-60 gün', '2-4 °C, 30 gün', '1.5 °C, 100 gün', '5 °C, 90 gün'], ''),
    mc('cimlenme', 'Sandıkta katlamada sert çekirdekli tohumlar kum üzerine nasıl yerleştirilir?', ['Birbirine değmeyecek şekilde yan yana dizilerek', 'Serpilerek', 'Üst üste yığılarak', 'Kuru torbalarda', 'Suya batırılarak'], 'Yumuşak çekirdekliler serpilir.'),
    mc('cimlenme', 'Büyük fidanlıklarda kullanılan beton yastıkların derinliği ne kadardır?', ['50 cm', '10-15 cm', '1.5 cm', '3-4 m', '2 m'], '50 cm derinlik, 70 cm genişlik, 3-4 m uzunluk.'),
    mc('cimlenme', 'Tohum ucunu kesme uygulaması daha çok hangi türde yapılır?', ['Avokado', 'Şeftali', 'Elma', 'Zeytin', 'Ceviz'], ''),
    mc('cimlenme', 'Genel kural olarak tohumlar hangi derinliğe ekilir?', ['Kendi çapının 2-3 katı', 'Kendi çapı kadar', '10-15 cm', 'Toprak yüzeyine', 'Kendi çapının 10 katı'], ''),
    mc('cimlenme', 'Tavaya ekimde sıravari ekimin serpme ekime tercih edilme nedeni hangisidir?', ['Ot alma, kaymak kırma, sulama ve söküm kolaylığı', 'Daha az tohum gerektirmesi', 'Katlama gerektirmemesi', 'Daha derin ekim yapılabilmesi', 'Gölgeleme sağlaması'], ''),
    mc('cimlenme', 'Katlamaya alınmamış tohumlar ne zaman ve nasıl ekilir?', ['Kasımda doğrudan tavaya ekilip doğal katlamaya bırakılır', 'Haziranda tüplere ekilir', 'Ağustosta beton yastığa', 'İlkbaharda 52 °C suda bekletildikten sonra', 'Ekilmeden önce kriyoprezervasyona alınır'], ''),
    mc('cimlenme', 'Çok derin ekimin olumsuz sonucu hangisidir?', ['Fide toprak yüzüne çıkmadan depo maddeleri biter, havalanma kötüleşir', 'Tohum kuşlardan zarar görür', 'Tohum hızla kurur', 'Çimlenme hızlanır', 'Fide bodur kalır'], 'Kuruma ve kuş zararı yüzlek ekimde görülür.'),
    /* aşı genel */
    mc('asi-genel', 'Aşağıdakilerden hangisi aşılamanın amaçlarından biri **değildir**?', ['Çekirdekli meyve elde etmek', 'Çeşit değiştirme', 'Zarar gören kısımları onarma', 'Anaçların üstün özelliklerinden yararlanma', 'Virüs hastalıklarını inceleme'], ''),
    mc('asi-genel', 'Ayva üzerine armut aşılanması hangi aşılama sınırına örnektir?', ['Cinsler arasında aşılama', 'Çeşit içinde aşılama', 'Çeşitler arasında aşılama', 'Türler arasında aşılama', 'Familyalar arasında aşılama'], 'Ayva Cydonia, armut Pyrus cinsi.'),
    mc('asi-genel', 'Ayva ve armut ile ilgili hangisi doğrudur?', ['Ayva üzerine armut uyuşur, armut üzerine ayva başarısız olur', 'Armut üzerine ayva uyuşur, tersi başarısızdır', 'İkisi de birbirine başarıyla aşılanır', 'Hiçbir şekilde aşılanamazlar', 'Familyalar arası aşılamadır'], 'Ayva uyuşan armut çeşitleri için bodur anaçtır.'),
    mc('asi-genel', 'Aynı cinse ait olmasına rağmen birbirine başarıyla aşılanamayan türler hangileridir?', ['Badem ve kayısı', 'Portakal ve limon', 'Şeftali ve erik', 'Mandarin ve turunç', 'Williams ve Ankara armutları'], 'Badem, kayısı ve erik şeftaliye anaç olabilir ama badem-kayısı birbirine aşılanamaz.'),
    mc('asi-genel', 'Citrus cinsine giren türler için başarıyla anaç olarak kullanılan cins hangisidir?', ['Poncirus trifoliata (üç yapraklı)', 'Cydonia (ayva)', 'Pyrus pyrifolia', 'Vitis rupestris', 'Prunus mahaleb'], ''),
    mc('asi-genel', 'Anaç ve kalem kambiyum dokularının biri diğerinin devamı olacak şekilde kaynaşmasına ne denir?', ['Affinite (uyuşma)', 'Kallus', 'Katlama', 'Dormansi', 'Kabuk verme'], ''),
    mc('asi-genel', 'Aşı uyuşmazlığının en tipik belirtisi hangisidir?', ['Ağacın aşı noktasından düzgün bir yüzeyle kırılması', 'Aşı yerinin düzgün olması', 'Yaprakların koyu yeşil olması', 'Erken meyveye yatma', 'Kuvvetli gelişme'], ''),
    mc('asi-genel', 'Armut üzerine elma aşılandığında görülen durum hangisidir?', ['Şişkinlik olmadığı halde kötü uyuşma vardır', 'İyi uyuşma ve düzgün aşı yeri vardır', 'Aşırı şişkinlik ve iyi uyuşma vardır', 'Familyalar arası başarılı aşıdır', 'Çeşit içi aşılamadır'], ''),
    mc('asi-genel', 'Williams armut çeşidi Pyrus pyrifolia anacı üzerine aşılandığında ne olur?', ['Kuvvetli kaynaşma olur ama meyve ucunda siyahlaşma görülür', 'Zayıf gelişir ve aşı yerinden kırılır', 'Hiç kaynaşmaz', 'Mükemmel uyuşur, sorun yoktur', 'Bodur ağaç oluşur'], 'Ayva üzerinde ise zayıf gelişip aşı yerinden kırılır; iki anaç da uyuşmaz sayılır.'),
    mc('asi-genel', 'Filoksera ile bulaşık alanlarda Vitis vinifera çeşitleri hangi anaçlar üzerine aşılanır?', ['Amerikan asma türleri (V. riparia, V. rupestris, V. champini)', 'Ayva', 'Poncirus trifoliata', 'Mahlep', 'Badem'], 'Türler arası aşılama örneği.'),
    mc('asi-genel', 'Bahçe bitkilerinde başarılı kombinasyonu bulunmayan aşılama hangisidir?', ['Familyalar arası', 'Cinsler arası', 'Türler arası', 'Çeşitler arası', 'Çeşit içi'], ''),
    mc('asi-genel', 'Aşıdan sonra anaç ve kalemin çakışan kambiyumlarının oluşturduğu meristematik doku hangisidir?', ['Kallus', 'Koilin', 'Endosperm', 'Kabuk', 'Embriyo'], ''),
    mc('asi-genel', 'Kötü uyuşmanın belirtileri arasında hangisi **yoktur**?', ['Aşı yerinin düzgün ve şişkinliksiz olması', 'Ağaçların erken ölmesi', 'Yaprakların sarı renkte olup erken dökülmesi', 'Anaç ve kalemin enine büyüme hızlarının farklı olması', 'Aşı noktasının altında veya üstünde aşırı büyüme'], 'Düzgün aşı yeri iyi uyuşma belirtisidir.'),
    /* başarı */
    mc('asi-basari', 'Elmalarda hangi sıcaklıklarda aşı yerinde hemen hemen hiç kallus oluşmaz?', ['0 °C\'nin altında veya 40 °C\'nin üstünde', '4-32 °C arasında', '10-20 °C arasında', '25 °C\'de', '15 °C\'de'], '40 °C\'de hücreler ölür.'),
    mc('asi-basari', 'Meyve türlerinde kallus oluşumu hangi aralıkta sıcaklıkla paralel hızlanır?', ['4-32 °C', '0-4 °C', '40-50 °C', '−5 / 0 °C', '32-45 °C'], ''),
    mc('asi-basari', 'Onarma veya çeşit değiştirme amaçlı kalem aşılarında özel dikkat gerektiren, başarısı daha düşük türler hangileridir?', ['Şeftali ve kayısı', 'Elma ve armut', 'Ayva ve armut', 'Portakal ve limon', 'Ceviz ve pikan'], 'Bu "bitki cinsi" faktörüdür.'),
    mc('asi-basari', 'Göz aşısında anacın durumu için hangisi doğrudur?', ['Kolay kabuk veren aktif büyüme devresinde olmalı, toprak nemli olmalı', 'Dinlenme döneminde olmalı', 'Toprak kuru olmalı', 'Kambiyum sıkışmış olmalı', 'Yapraklar dökülmüş olmalı'], ''),
    mc('asi-basari', 'Aşı yerinden su kaybını önlemek için kullanılan parafin karışımlarında bulunabilen maddeler hangileridir?', ['Reçine, balmumu, vazelin', 'H2SO4, GA3', 'Perlit, vermikulit', 'Kum, çakıl', 'Sıvı azot'], ''),
    mc('asi-basari', 'Anaç ve kalemin kambiyumlarının sadece küçük bir kısmı temas ettiğinde ne olur?', ['Kalem sürer ama yaprak artınca iletim yetmez ve kalem ölebilir', 'Aşı mükemmel tutar', 'Kallus oluşmaz ama ağaç gelişir', 'Anaç ölür', 'Aşı yeri hemen kırılır'], 'Aşılama tekniği faktörü.'),
    mc('asi-basari', 'Hastalık ve zararlılar açısından aşıda başarıyı en çok düşüren etmen notlarda hangisi olarak vurgulanır?', ['Virüsler', 'Böcekler', 'Kuşlar', 'Fareler', 'Yabancı otlar'], 'Virüssüz ağaçlardan kalem alınmalıdır.'),
    /* anaç-kalem */
    mc('anac-kalem', 'Çelik, daldırma veya kök sürgünleri ile çoğaltılan anaçlara ne denir?', ['Klon anaçlar', 'Çöğür anaçlar', 'Yoz anaçlar', 'Generatif anaçlar', 'Tohum anaçları'], ''),
    mc('anac-kalem', 'Aşı kalemleri ağacın neresinden alınmalıdır?', ['Tacın dış tarafındaki güneş gören kısımlarından', 'Tacın içindeki gölge sürgünlerden', 'Obur dallardan', 'Meyve dalcıklarından', 'Kök sürgünlerinden'], 'Gölgedeki sürgünler iyi pişkinleşmez.'),
    mc('anac-kalem', 'Aşı kalemi olarak kesilen sürgünlerin çapı en az ne kadar olmalıdır?', ['8-12 mm', '1-2 mm', '2.5-10 cm', '10-30 cm', '50 mm'], 'Kurşun kalem kalınlığı.'),
    mc('anac-kalem', 'Aşı kalemi sürgünün hangi kısmından alınır?', ['Ortasından', 'Ucundan', 'Dibinden', 'Rastgele', 'Kök boğazından'], 'Uç gözler olgunlaşmamış, dip gözler sürmeyebilir.'),
    mc('anac-kalem', '1-3 ay saklanacak aşı kalemleri hangi koşulda muhafaza edilmelidir?', ['0 °C, nemli ortam', '0-4 °C kuru ortam', '20 °C oda sıcaklığı', '−196 °C', '52 °C sıcak su'], '3-4 hafta için 0-4 °C.'),
    mc('anac-kalem', 'Modern fidanlıklarda "ismine doğru fidan üretimi"nin garantisi nedir?', ['Kalem damızlıklarının kurulması', 'Generatif anaç kullanılması', 'Katlama yapılması', 'Makineli aşı yapılması', 'TTC testi'], ''),
    mc('anac-kalem', 'Kalem aşılarında anaca takılan kalemin özelliği hangisidir?', ['Üzerinde 1-3 göz bulunan 7-15 cm uzunlukta, 1-2 yaşlı dal parçası', 'Tek bir göz', 'Kök parçası', 'Yaprak', 'Tohum'], ''),
    mc('anac-kalem', 'Ağustos veya eylül aylarında yapılan, ertesi ilkbaharda süren göz aşılarına ne denir?', ['Durgun aşı', 'Sürgün aşı', 'Köprü aşı', 'Yarma aşı', 'Makineli aşı'], 'Sürgün aşılar erken ilkbahar ve haziranda yapılır, aynı sezon sürer.', { 1: 'Sürgün aşılar yapıldığı sezon sürer.' }),
    mc('anac-kalem', 'Aşağıdakilerden hangisi göz aşısı değildir?', ['Yarma aşı', 'T göz aşısı', 'Yama aşı', 'Yongalı göz aşısı', 'Ters T aşısı'], 'Yarma bir kalem aşısıdır.'),
    mc('anac-kalem', 'Aşağıdakilerden hangisi kalem aşısıdır?', ['Çoban aşı', 'T göz aşısı', 'Yama aşı', 'Yongalı göz aşısı', 'Ters T aşısı'], ''),
    mc('anac-kalem', 'Zayıf (bodur) anaçların etkisi hangisidir?', ['Küçük, kısa boylu ağaçlar oluştururlar', 'Yüksek boylu ağaç oluştururlar', 'Ağacı virüslü yaparlar', 'Meyveye geç yatırırlar', 'Uyuşmazlık yaparlar'], ''),
    /* göz */
    mc('goz', 'Göz aşılarının uygulanabilmesi neye bağlıdır?', ['Bitkinin kabuk vermesine', 'Tohumun katlanmasına', 'Macun kullanılmasına', 'Anacın 10 cm\'den kalın olmasına', 'Dinlenme dönemine'], ''),
    mc('goz', 'Göz aşılarında tutma oranı genellikle ne kadardır?', ['%80-95', '%20-30', '%50', '%100', '%5-10'], ''),
    mc('goz', 'Göz aşısının tutup tutmadığı kaç gün sonra belli olur?', ['15-20 gün', '1-2 gün', '60-80 gün', '1 yıl', '120 gün'], 'Tutmayanlar aynı yıl yenilenebilir.'),
    mc('goz', 'Usta bir aşıcı ve bağlayıcı günde kaç göz aşısı yapabilir?', ['800-1200', '50-100', '500-800 (saatte)', '10-20', '5000'], 'Saatte 500-800 makineli aşı içindir.'),
    mc('goz', 'Göz aşıları kurşun kalem kalınlığında kaç mm\'lik anaçlara bile uygulanabilir?', ['5-6 mm', '8-12 mm', '2.5-10 cm', '10-30 cm', '1.5 cm'], 'Bu sayede ağaç daha erken meyveye yatar.'),
    mc('goz', 'Göz aşılarının kalem aşılarına üstünlükleri arasında hangisi **yoktur**?', ['Aşıdan sonra mutlaka macun gerekmesi', 'Daha az kalem kullanılması', 'Anaçta az yara açılması', 'Tutup tutmadığının erken anlaşılması', 'Kolay öğrenilmesi'], 'Göz aşısında macun gerekmez.'),
    mc('goz', 'Göz aşıları meyvecilik ve bağcılıkta hangi dönemlerde yapılır?', ['Erken ilkbahar, haziran, ağustos-eylül', 'Sadece kış', 'Sadece ekim-kasım', 'Ocak ve şubat', 'Sadece temmuz'], ''),
    mc('goz', 'T göz aşısı genellikle hangi çaptaki anaçlara uygulanır?', ['0.6-2.5 cm', '10-30 cm', '7.5-10 cm', '2.5-10 cm', '5-6 cm'], ''),
    mc('goz', 'T göz aşısında göz anaçta toprak yüzeyinden ne kadar yükseğe takılır?', ['5-25 cm', '50-100 cm', '1-2 cm', '8-10 cm', '1 m'], '8-10 cm yongalı göz aşısında bağda.'),
    mc('goz', 'Yağmur sularının T içine girip enfeksiyon oluşturmasını önlemek için yağmurlu bölgelerde yapılan aşı hangisidir?', ['Ters T aşısı', 'Yama aşı', 'Yongalı göz aşısı', 'Köprü aşı', 'Yarma aşı'], ''),
    mc('goz', 'Ceviz ve pikan gibi kabukları kalın türlerde başarılı olan göz aşısı hangisidir?', ['Yama göz aşısı', 'T göz aşısı', 'Ters T aşısı', 'İngiliz aşı', 'Makineli aşı'], 'T aşısına göre daha yavaş ve zordur.'),
    mc('goz', 'Kabuğun kalkmasına gerek duyulmayan ve Amerikan asma anaçlarında yaygın kullanılan göz aşısı hangisidir?', ['Yongalı göz aşısı', 'T göz aşısı', 'Yama göz aşısı', 'Ters T aşısı', 'Çoban aşı'], ''),
    mc('goz', 'Bağcılıkta yongalı göz aşısı yapıldıktan sonra aşı yeri nasıl korunur?', ['İnce nemli toprakla kümbet yapılarak kapatılır', 'Macunla kaplanır', 'Çivi ile sabitlenir', 'Açık bırakılır', 'Sıvı azota daldırılır'], 'Örtü ertesi ilkbaharda geç don geçince açılır.'),
    mc('goz', 'Yongalı göz aşısı için en çok tercih edilen dönem hangisidir?', ['Ağustos ayındaki durgun aşı', 'Erken ilkbahar', 'Haziran', 'Kış', 'Ekim'], 'Sıcaklığın daha elverişli olduğu dönem.'),
    /* kalem */
    mc('kalem', 'Çeşit değiştirme amacıyla 2.5-10 cm kalınlığındaki anaç veya dallarda, merkezden 5-7.5 cm yarık açılarak yapılan aşı hangisidir?', ['Yarma aşı', 'Kakma aşı', 'Çoban aşı', 'İngiliz aşı', 'Köprü aşı'], ''),
    mc('kalem', 'Yarma aşı ne zaman yapıldığında daha başarılıdır?', ['İlkbaharda gözlerin kabarmasından hemen önce', 'Ağustos-eylülde', 'Yaz ortasında', 'Sonbaharda yaprak dökümünden sonra', 'Haziranda'], ''),
    mc('kalem', 'Yarma aşıda her yarığa kaç kalem yerleştirilir?', ['İki', 'Bir', 'Dört', 'On', 'Kalem yerleştirilmez'], 'Yarığın iki tarafındaki kambiyuma birer kalem.'),
    mc('kalem', 'Yarma aşıya göre hastalık etmenleri için büyük yara açma sakıncası olmayan kalem aşısı hangisidir?', ['Kakma aşı', 'Çoban aşı', 'İngiliz aşı', 'T göz aşısı', 'Köprü aşı'], '7.5-10 cm veya daha kalın dallarda.'),
    mc('kalem', 'Yarma aşıya göre daha geniş çaplı (10-30 cm) anaçlara uygulanan kabuk altı aşı hangisidir?', ['Çoban aşı', 'Kakma aşı', 'İngiliz aşı', 'Yama aşı', 'Makineli aşı'], ''),
    mc('kalem', 'Çoban aşıda kalem yerleştirilirken dikkat edilecek husus hangisidir?', ['Kalemin ilk gözünün dışa bakması', 'Kalemin ilk gözünün içe bakması', 'Kalemin gözsüz olması', 'Kalemin 30 cm olması', 'Kalemin tohumdan alınması'], ''),
    mc('kalem', 'İngiliz aşının başarılı olması için hangi koşul gereklidir?', ['Anaç ve kalemin aynı kalınlıkta olması', 'Anacın kalemden çok kalın olması', 'Anacın kabuk vermemesi', 'Kalemin gözsüz olması', 'Aşının ağustosta yapılması'], 'Aksi halde şişkinlik ve uyuşmazlık görülür.'),
    mc('kalem', 'İngiliz aşı daha çok hangi türlerde uygulanır?', ['Göz aşısı başarısı düşük ceviz, asma, kiraz, elma', 'Sadece turunçgiller', 'Kalın kabuklu ceviz ve pikan (yama yerine)', 'Avokado', 'Ayva ve armut'], ''),
    mc('kalem', 'Dilcikli İngiliz aşısında anaç ve kalem çapı tercihen ne olmalıdır?', ['Eşit ve 1.5 cm\'den az', '10-30 cm', 'Anaç kalemden iki kat kalın', '7.5-10 cm', '5-6 mm\'den az ve farklı'], ''),
    mc('kalem', 'Makineli aşıda en yaygın kullanılan kesit şekli hangisidir?', ['Omega (Ω)', 'T', 'Ters T', 'Yama', 'Yonga'], 'Makineli aşılar: V aşı ve omega aşı.'),
    mc('kalem', 'Otomatik makineli aşılarla saatte kaç aşı yapılabilir?', ['500-800', '800-1200', '50-100', '10-20', '5000-10000'], '800-1200 günlük el ile göz aşısı sayısıdır.'),
    mc('kalem', 'Aşağıdakilerden hangisi onarma aşısıdır?', ['Köprü aşı', 'Yarma aşı', 'Kakma aşı', 'Çoban aşı', 'Yama aşı'], 'Onarma aşıları: kemer, köprü, yanaştırma.'),
    mc('kalem', 'Köprü aşı ne zaman uygulanır?', ['Aktif büyümenin başladığı, kabuk kolay kalktığı ilkbahar başında', 'Ağustos-eylülde', 'Kış dinlenmesinde', 'Yaz sonunda', 'Hasattan hemen sonra'], ''),
    mc('kalem', 'Köprü aşıda kalemler anaca yerleştirildikten sonra nasıl sabitlenir?', ['Küçük çivilerle sabitlenip macunlanır', 'Toprakla kümbet yapılır', 'Plastik şeritle sarılıp macunsuz bırakılır', 'Tel ile bağlanıp boyanır', 'Sabitlenmez'], ''),
    mc('kalem', 'Aşağıdakilerden hangisi aşının tuttuğunu gösterir?', ['Gözün altındaki yaprak sapının kolay kopması', 'Kabuğun ve gözün kararması', 'Yaprak sapının kopmaması', 'Gözün büzüşmesi', 'Kabuğun siyahlaşması'], 'Göz yeşil, şişkin, kabuk açık kahverengi ise tutmuştur.'),

    /* D/Y */
    tf('temel', 'Tek yıllık bitkilerde kullanılan üretim materyaline fidan denir.', false, 'Tek yıllıkta fide, çok yıllıkta fidan.'),
    tf('temel', 'Generatif anaçlar kuvvetli kök sistemi nedeniyle kuraklığa ve soğuğa dayanıklıdır.', true, ''),
    tf('temel', 'Vegetatif anaçlar homojen, bir örnek bitkiler oluşturur.', true, ''),
    tf('temel', 'Çöğür, kültür bitkilerinin tohumlarından elde edilen bitkidir.', false, 'Çöğür yabani tiplerden; kültür bitkisinden yoz.'),
    tf('temel', 'Bazı portakal, mandarin ve çekirdeksiz üzüm çeşitlerinde çekirdeksizlik generatif çoğaltmayı engeller.', true, ''),
    tf('tohum', 'Tohumlar, kullanılacakları bölgenin şartlarında yetişen ağaçlardan alınmalıdır.', true, ''),
    tf('tohum', 'Yumuşak çekirdekli meyvelerde fermantasyondan sonra sağlam çekirdekler su üstünde toplanır.', false, 'Sağlam çekirdekler dibe çöker; et, kabuk ve zayıf tohumlar üstte toplanır.'),
    tf('tohum', 'TTC testinde cansız dokular renksiz kalır.', true, ''),
    tf('tohum', 'Adi şartlarda nemi iyi kontrol edilen tohumlar bir yıl korunabilir.', true, ''),
    tf('tohum', 'Çıplak embriyo testinde canlı embriyolar kahverengileşir ve yumuşar.', false, 'Bu ölü embriyolar için geçerlidir; canlılar sertliğini korur.'),
    tf('cimlenme', 'Suda ıslatma, tohum kabukları yüzünden meydana gelen dinlenmeyi ortadan kaldırır.', true, ''),
    tf('cimlenme', 'Katlama ortamındaki kum olabildiğince ince olmalıdır.', false, 'Ne çamurlaşacak kadar ince ne kurutacak kadar iri olmalı.'),
    tf('cimlenme', 'Katlama daha çok tohum kabuğu sert olan şeftali, erik, zeytin gibi meyvelerde uygulanır.', true, ''),
    tf('cimlenme', 'Çok yüzlek ekimde tohum kuraklıktan ve kuşlardan zarar görebilir.', true, ''),
    tf('cimlenme', 'Sandıkta katlamada yumuşak çekirdekli tohumlar tek tek dizilerek yerleştirilir.', false, 'Yumuşak çekirdekliler serpilir, sert çekirdekliler dizilir.'),
    tf('cimlenme', 'Kimyasal yöntemde H2SO4 ile aşındırma uygulanabilir.', true, ''),
    tf('asi-genel', 'Familyalar arası aşılamada bahçe bitkilerinde başarılı kombinasyonlar yaygındır.', false, 'Başarılı kombinasyon bulunmamaktadır.'),
    tf('asi-genel', 'Badem, kayısı ve erik şeftali için anaç olarak kullanılabilir.', true, ''),
    tf('asi-genel', 'İyi uyuşmada aşı yerinde belirgin bir şişlik görülür.', false, 'İyi uyuşmada aşı yeri düzgündür, şişlik görülmez.'),
    tf('asi-genel', 'Kiraz/idris kombinasyonlarında belli bir yaştan sonra aşı uyuşmazlığı sıkça görülür.', true, ''),
    tf('asi-basari', 'Elmada 40 °C\'de kallus hücreleri ölür.', true, ''),
    tf('asi-basari', 'Kallus dokusunu oluşturan hücreler kalın zarlı olup su kaybına dayanıklıdır.', false, 'İnce zarlı ve gevrek; su kaybına çok duyarlı.'),
    tf('anac-kalem', 'Obur dallar iyi bir aşı kalemi kaynağıdır.', false, 'Obur, zayıf dallar ve meyve dalcıkları kullanılmaz.'),
    tf('anac-kalem', 'Sürgün aşılar erken ilkbahar ve haziranda yapılır ve aynı sezon sürer.', true, ''),
    tf('anac-kalem', 'Aşı kalemleri 50 veya 100\'lük demetler halinde bağlanarak saklanır.', true, ''),
    tf('goz', 'Göz aşısında macun kullanmaya gerek yoktur.', true, ''),
    tf('goz', 'Yama göz aşısı T aşısına göre daha hızlı ve kolaydır.', false, 'Daha yavaş ve güçtür.'),
    tf('goz', 'T göz aşısında göz kabuk kanatlarıyla tamamen kapatılır.', false, 'Göz açıkta kalmalıdır.'),
    tf('goz', 'Yongalı göz aşısı 6 mm kalınlığındaki gövdelere bile yapılabilir.', true, ''),
    tf('kalem', 'Yarma aşıda aşı yüzeyinin tamamı aşı macunuyla kapatılır.', true, ''),
    tf('kalem', 'Çoban aşıda bir anaca en fazla bir kalem takılabilir.', false, 'Kalınlığa göre 2\'den fazla kalem takılabilir.'),
    tf('kalem', 'Makineli aşılarda daha düzgün kesit açıldığından başarı oranı yüksektir.', true, ''),
    tf('kalem', 'Kabuk ve göz kararmaya başlamışsa aşı tutmamıştır.', true, ''),

    /* Boşluk */
    fill('temel', 'Tek yıllık bitkilerde (sebze) kullanılan üretim materyaline ____ denir.', ['fide'], ''),
    fill('temel', 'Yabani tiplerin tohumlarından elde edilen bitkilere ____ denir.', ['çöğür'], ''),
    fill('temel', 'Kültür bitkilerinin tohumlarından elde edilen bitkilere ____ denir.', ['yoz'], ''),
    fill('temel', 'Bitkinin toprak üstü kısmına kalem veya ____ denir.', ['çeşit'], ''),
    fill('temel', 'Çelik, daldırma, kök sürgünü gibi parçalardan elde edilen anaçlara ____ anaçlar denir.', ['vegetatif', 'klon'], ''),
    fill('tohum', 'Turunçgil tohumları ____ °C\'deki sıcak suda 10 dakika dezenfekte edilir.', ['52'], ''),
    fill('tohum', 'Kriyoprezervasyonda tohumlar sıvı azot içinde ____ °C\'de saklanır.', ['-196', '−196', '196'], ''),
    fill('tohum', 'TTC testinde tohumlar 2,3,5-trifeniltetrazolium ____ çözeltisine batırılır.', ['klorit', 'klorür'], ''),
    fill('tohum', 'Soğukta nemli muhafazada sıcaklık ____ °C olmalıdır.', ['0-2', '0 - 2', '0 2'], ''),
    fill('cimlenme', 'Tohumların belli süre nemli ve soğuk ortamda tutulmasına ____ denir.', ['katlama'], ''),
    fill('cimlenme', 'Katlama ortamı olarak kolay temin edildiği için en çok ____ kullanılır.', ['kum', 'nehir kumu'], ''),
    fill('cimlenme', 'Dut ve pikan tohumları suda ____ gün bekletilir.', ['4'], 'Elma 2 gün.'),
    fill('cimlenme', 'Elma tohumlarının katlama süresi ____ gündür.', ['60-80', '60 - 80', '60 80'], '4.4-5.0 °C.'),
    fill('cimlenme', 'Tohum ucunu kesme uygulaması daha çok ____ ta yapılır.', ['avokado'], ''),
    fill('cimlenme', 'Tohumlar genel kural olarak kendi çapının ____ katı derinliğe ekilir.', ['2-3', '2 - 3', '2 3'], ''),
    fill('cimlenme', 'Tavalara ekimde ____ ekim serpme ekime tercih edilir.', ['sıravari', 'sıra'], ''),
    fill('asi-genel', 'Anaç ve kalem kambiyumlarının biri diğerinin devamı olacak şekilde kaynaşmasına ____ denir.', ['affinite', 'uyuşma'], ''),
    fill('asi-genel', 'Ayva, uyuşan armut çeşitleri için ____ anaç olarak kullanılır.', ['bodur'], ''),
    fill('asi-genel', 'Citrus türleri için anaç olarak kullanılan üç yapraklı, Poncirus ____ dır.', ['trifoliata'], ''),
    fill('asi-basari', 'Meyve türlerinde kallus oluşumu ____ °C arasında sıcaklık artışına paralel olarak hızlanır.', ['4-32', '4 - 32', '4 32'], ''),
    fill('asi-basari', 'Aşı yüzeyleri su kaybını önlemek için aşı ____ ile kaplanır.', ['macunu', 'macun'], ''),
    fill('anac-kalem', 'Aşı kalemleri en az ____ mm çapında olmalıdır.', ['8-12', '8 - 12', '8 12'], ''),
    fill('anac-kalem', 'Ağustos-eylülde yapılıp ertesi ilkbaharda süren göz aşılarına ____ aşı denir.', ['durgun'], ''),
    fill('anac-kalem', 'Aşı kalemleri 3-4 hafta saklanacaksa ____ °C\'de muhafaza edilir.', ['0-4', '0 - 4', '0 4'], ''),
    fill('goz', 'Göz aşılarının uygulanması bitkinin "kabuk ____" sine bağlıdır.', ['vermesi', 'verme'], ''),
    fill('goz', 'Yağmurlu bölgelerde ____ T aşısı yapılır.', ['ters'], ''),
    fill('goz', 'Ceviz ve pikan gibi kalın kabuklu türlerde ____ göz aşısı başarılıdır.', ['yama'], ''),
    fill('kalem', 'Kabuk altı aşı olarak da bilinen ____ aşı 10-30 cm çaplı anaçlara uygulanır.', ['çoban'], ''),
    fill('kalem', 'Makineli aşılarda en yaygın kesit ____ (Ω) şeklindedir.', ['omega'], ''),
    fill('kalem', 'Onarma aşıları kemer, köprü ve ____ aşılarıdır.', ['yanaştırma'], ''),

    /* Klasik */
    op('temel', 'Meyve türlerinde generatif çoğaltmanın neden her zaman tercih edilmediğini ve tohumla çoğaltmanın ne zaman tercih edildiğini açıklayınız.', [
      'Heterozigot yapı → tohumla açılım', 'Çekirdeksizlik (muz, bazı turunçgil, çekirdeksiz üzüm)', 'Zayıf veya hiç çimlenmeyen tohum',
      'Tohum tercih: vegetatif üretim zor ise', 'Anaç eldesinde ve ıslahta yeni çeşit için'
    ], 'Çok yıllık bahçe bitkilerinde generatif çoğaltma her zaman tercih edilmez çünkü: çeşitler heterozigot olduğundan tohumla çoğaltıldıklarında genetik açılım gösterirler; bazı tür ve çeşitlerde çekirdeksizlik vardır (muz, bazı portakal-mandarin-altıntop, çekirdeksiz üzüm); bazı türlerin tohumlarının çimlenme gücü zayıftır veya yoktur.\nTohumla çoğaltma; vegetatif üretimin zor olduğu türlerde, anaç eldesinde ve ıslahta yeni çeşit elde etmede tercih edilir.'),
    op('temel', 'Generatif ve vegetatif anaçların avantaj ve dezavantajlarını karşılaştırınız.', [
      'Generatif avantaj: kolay, çabuk, ekonomik; virüssüz', 'Generatif avantaj: kuvvetli kök → kuraklık ve soğuğa dayanım',
      'Generatif dezavantaj: uyuşma sorunları, özellikleri tam bilinmez', 'Vegetatif avantaj: homojen; uyuşma, verim, gelişme, ömür bilinir; kontrol; verim-kalite artar',
      'Vegetatif dezavantaj: iş gücü, pahalı altyapı, bilgi birikimi'
    ], 'Generatif (tohumdan; çöğür veya yoz) anaçlar kolay, çabuk ve ekonomik elde edilir, virüsle bulaşık değildir, kuvvetli kök sistemiyle kuraklık ve soğuğa dayanıklıdır. Dezavantajı: anaç-kalem uyuşma sorunları; ekonomik ömür, fizyoloji, gelişme ve ekolojik istekler tam bilinmediğinden önlenmesi güç sakıncalar.\nVegetatif (klon) anaçlar homojen, bir örnek bitkiler oluşturur; uyuşma, verimlilik, gelişme kuvveti, meyveye başlama, meyve niteliği, ömür ve ekolojik istekler bilinir; şekil, büyüklük, verim-kalite kontrol edilir; birim alandan verim ve kalite artar. Dezavantajı: fazla iş gücü, pahalı altyapı ve bilgi birikimi gerektirmesi.'),
    op('tohum', 'Tohum canlılık testlerini açıklayınız.', [
      'Doğrudan çimlendirme: laboratuvar, petri/tepsi, kurutma kağıdı, pamuk-havlu veya steril kum', 'Çıplak embriyo: sadece embriyo, nemli filtre kağıdı, ışık, 18-23 °C',
      'Çıplak embriyo: 3 gün-3 hafta sonra ölü kahverengi-yumuşak, canlı sert', 'TTC: 2,3,5-trifeniltetrazolium klorit; canlı kırmızı, cansız renksiz', 'TTC en çabuk sonuç'
    ], '• Doğrudan çimlendirme: laboratuvarda steril tepsi veya petri kaplarında; tohumlar iki kurutma kağıdı arasında veya üstünde (pamuk + 2-3 kat havlu kağıt veya 1.5 cm steril kum/toprak) çimlendirilir.\n• Çıplak embriyo testi: tohumun diğer kısımları ayrılıp yalnız embriyo nemli filtre kağıdında, ışıkta, +18-23 °C\'de bekletilir; 3 gün ya da 3 hafta sonra ölü embriyolar kahverengileşip yumuşar, canlılar sertliğini korur, bazen çimlenir.\n• Tetrazolium (TTC): kimyasal yöntem; tohumlar 2,3,5-trifeniltetrazolium klorit çözeltisine batırılır; canlı dokular kırmızı, cansızlar renksiz kalır; en çabuk sonuç veren testtir.'),
    op('cimlenme', 'Çimlenmeyi uyarıcı ve hızlandırıcı yöntemleri açıklayınız.', [
      'Mekanik: kabuk çatlatma-kırma; su ve O2 alımı; örnekler (erik, şeftali, vişne)', 'Kimyasal: H2SO4, GA3-sitokinin-etilen, KNO3; yumuşak kabuklular',
      'Suda ıslatma: engelleyiciler yıkanır, kabuk yumuşar; elma 2, dut-pikan 4 gün', 'Katlama: nemli ve soğuk ortamda belli süre; soğuklama ve dormansi', 'Tohum ucu kesme: avokado'
    ], '• Mekanik yöntem: tohum kabuğu çatlatılır veya kırılarak ayrılır; su ve oksijen alımı kolaylaşır. Erik 45 yerine 25, şeftali 60-100 yerine 35-60, vişne 90 yerine 60 günde çimlenir.\n• Kimyasal yöntem: sülfürik asitle aşındırma, büyüme düzenleyiciler (GA3, sitokinin, etilen), potasyum nitrat; daha çok yumuşak kabuklu turunçgil, elma, armutta. 5-100 ppm GA3 (elma, armut, kiraz, fındık), 100-500 ppm etilen 1 gün.\n• Suda ıslatma: sıcak/soğuk suya daldırma; engelleyiciler yıkanır, kabuk yumuşar; elma 2, dut ve pikan 4 gün.\n• Katlama: soğuklama ihtiyacını karşılamak, dormansiyi gidermek için tohumları belli süre nemli ve soğuk ortamda tutma; daha çok sert kabuklu şeftali, erik, zeytin.\n• Ayrıca avokadoda tohum ucunu kesme.'),
    op('cimlenme', 'Katlamayı tanımlayıp iyi bir katlamanın koşullarını, katlama ortamını ve katlama zamanını açıklayınız.', [
      'Tanım: soğuklama, dormansi, su-O2 alımı için nemli ve soğuk ortamda tutma', 'Koşullar: düşük sıcaklık, iyi havalanma, nem emilimi, belli süre',
      'Ortam: nehir kumu, spagnum, vermikulit, perlit, volkanik tüf; en çok kum; kum iriliği', 'Zaman: ekim zamanına göre; erken çimlenirse karıştırma (7-10 gün gecikme); nem azalırsa sulama'
    ], 'Katlama, bazı tohumların soğuklama ihtiyacını karşılamak, çimlenmeyi engelleyen maddeleri gidermek (dormansiyi önlemek), embriyonun su ve oksijen alımını kolaylaştırarak çimlenmeyi artırmak için belli süre nemli ortamda ve soğukta muhafaza edilmesidir.\nİyi katlama için düşük sıcaklık, iyi havalandırma, ortam neminin tohum tarafından emilmesi ve tohumun belli süre ortamda kalması gerekir.\nOrtam: iyi yıkanmış nehir kumu, spagnum yosunu, vermikulit, perlit, volkanik tüf; kolay bulunduğu için en çok kum. Kum ne sıkışıp çamurlaşacak kadar ince, ne kurumaya yol açacak kadar iri olmalı.\nKatlama zamanı ekim zamanı ve katlamada kalış süresine göre ayarlanır; aksi halde tohum erken çimlenir veya ekimde kabuk çatlamamış olur. Erken çimlenme başlarsa katlama karıştırılır (7-10 gün gecikme); nem azalırsa sulanır.'),
    op('asi-genel', 'Aşının başarı sınırlarını botanik akrabalık düzeylerine göre örnekleriyle açıklayınız.', [
      'Çeşit içinde: aynı çeşidin tüm bireylerine başarılı (Ankara armudu)', 'Çeşitler arasında: tür içi çeşitler başarılı (armut çeşitleri, V. vinifera)',
      'Türler arasında: Citrus başarılı; badem-kayısı-erik şeftaliye anaç; badem-kayısı birbirine olmaz', 'Cinsler arasında: ayva üzerine armut olur, tersi olmaz; Poncirus Citrus\'a anaç',
      'Familyalar arasında: başarılı kombinasyon yok'
    ], '• Çeşit içinde: kalem veya göz, hem alındığı ağaca hem aynı çeşidin dünyadaki tüm bireylerine başarıyla aşılanır (Ankara armudu, Starkspur Golden Delicious).\n• Çeşitler arasında: bir tür içindeki çeşitler birbirine başarıyla aşılanır (Ankara, Williams, Akça, Şeker armut; Hafızali, Razakı gibi üzüm çeşitleri).\n• Türler arasında: bazıları başarılı, bazıları değil. Citrus türleri arasında başarılı; badem, kayısı, erik şeftaliye anaç olur; ama badem ve kayısı birbirine aşılanamaz. Filokseralı alanlarda V. vinifera Amerikan türlerine aşılanır.\n• Cinsler arasında: başarı şansı çok az; ayva üzerine armut uyuşur (bodur anaç), tersi başarısız; Poncirus trifoliata Citrus türlerine anaç.\n• Familyalar arasında: bahçe bitkilerinde başarılı kombinasyon yoktur; kambiyumu olmayan bitkilerde kaynaşma hemen hemen olanaksızdır.'),
    op('asi-basari', 'Aşıda başarıyı etkileyen faktörleri açıklayınız.', [
      'Uyuşmazlık: bilinen uyuşmaz kombinasyonlardan kaçınmak', 'Bitki cinsi: şeftali ve kayısıda kaynaşma zor',
      'Sıcaklık-nem: elmada 0 altı ve 40 üstü kallus yok, 4-32 °C hızlanır', 'Anacın gelişme durumu: kabuk vermeli, toprak nemli',
      'Aşılama tekniği ve hastalık (virüs)', 'Su kaybının macun/parafinle önlenmesi'
    ], 'a) Uyuşmazlık: uyuşmaz olduğu bilinen kombinasyonlardan kaçınılmalıdır.\nb) Bitki cinsi: uyuşmazlık olmasa da bazı bitkilerde kaynaşma zordur; elma-armutta onarma ve çeşit değiştirme kalem aşıları başarılıyken şeftali ve kayısıda daha az başarılıdır.\nc) Sıcaklık ve nem: kallus oluşumu için uygun olmalı; elmada 0 °C altı ve 40 °C üstünde kallus hemen hiç oluşmaz, 40 °C\'de hücreler ölür; 4-32 °C arasında sıcaklık arttıkça kallus hızlanır.\nd) Anacın gelişme durumu: göz aşısında anaç kolay kabuk veren aktif büyüme devresinde olmalı; toprak nemli olmalı.\ne) Aşılama tekniği: kambiyumların yalnız küçük kısmı temas ederse kalem sürer ama iletim yetmeyip ölebilir.\nf) Hastalık ve zararlılar: özellikle virüs bulaşık materyal başarıyı düşürür.\nAyrıca aşı yerinden su kaybı aşı macunu veya reçine-balmumu-vazelin içeren parafinle önlenmelidir.'),
    op('anac-kalem', 'Aşı kalemlerinin alınması, hazırlanması ve muhafazasında dikkat edilecek noktaları yazınız.', [
      'Damızlık ağaçtan 1 yaşlı dal; kalem damızlıkları (ismine doğru fidan)', 'Sağlıklı ağaç; tacın dış güneş gören kısmı',
      'Obur, zayıf dal ve meyve dalcığı kullanılmaz', 'Çap 8-12 mm; sürgünün ortası; dip ve uç atılır',
      'Muhafaza: 50-100\'lük demet, nemli perlit; 3-4 hafta 0-4 °C, 1-3 ay 0 °C'
    ], 'Aşı kalemleri çeşidin damızlık ağaçlarından alınan bir yaşındaki dallardır; modern fidanlıkta kalem damızlıkları kurulmalıdır (ismine doğru fidan garantisi). Kalemle hastalık taşınabileceğinden sağlıklı ağaçtan alınmalıdır. Tacın dış tarafındaki güneş gören kısımlardan alınır; gölgedeki sürgünler iyi pişkinleşmez, boğum araları uzun ve dokuları gevşektir. Obur dal, zayıf dal ve meyve dalcıkları kullanılmaz.\nÇap en az 8-12 mm (kurşun kalem); kalemler sürgünün ortasından alınır, dip ve uç kısımlar atılır.\nMuhafaza: 50 veya 100\'lük demetler, gerekirse uçlar macunlanır, polietilen torbada nemli perlit içinde; 3-4 hafta için 0-4 °C, 1-3 ay için 0 °C nemli ortam, en iyisi soğuk hava deposu.'),
    op('goz', 'Göz aşılarının kalem aşılarına göre üstünlüklerini yazınız.', [
      '5-6 mm anaçlara bile → erken meyveye yatma', 'Tek göz → az kalem', 'Az yara → tutma %80-95',
      '15-20 günde belli → aynı yıl yenileme', 'Kolay; günde 800-1200 aşı; durgun dönemde iş yükü az; macun gerekmez'
    ], 'Göz aşıları kurşun kalem kalınlığındaki (5-6 mm) anaçlara bile uygulanır; anacın kalınlaşması beklenmez, ağaçlar daha erken meyveye yatar. Her anaca tek göz takıldığı için daha az kalem kullanılır (yeni ıslah çeşitleri için önemli). Anaçta çok az yara açıldığından tutma kolaydır (%80-95). Tutup tutmadığı 15-20 günde anlaşılır, tutmayanlar aynı yıl yenilenir. Öğrenmesi ve yapması kolaydır; usta aşıcı ve bağlayıcı günde 800-1200 aşı yapar. Durgun göz aşıları fidanlıkta işlerin azaldığı dönemde yapılır. Aşıdan sonra macun gerekmez.'),
    op('goz', 'T, ters T, yama ve yongalı göz aşılarını karşılaştırınız.', [
      'T: 0.6-2.5 cm anaç, 5-25 cm yükseklik, göz açıkta, macunsuz, şeritle sarma', 'Ters T: yağmurlu bölge, suyun girmesini önlemek',
      'Yama: dikdörtgen kabuk değişimi; yavaş ve zor; ceviz, pikan', 'Yongalı: kabuk kalkması gerekmez; Amerikan asma anacı; 6 mm; ağustos tercih; kümbet'
    ], '• T göz aşısı: fidanlıkta 0.6-2.5 cm çaplı, kolay kabuk veren anaçlara; topraktan 5-25 cm yükseğe; göz T\'ye yerleştirilip kabuk kanatlarıyla kapatılır ama göz açıkta kalır; macun gerekmez, lastik/plastik şeritle sarılır.\n• Ters T: yağmurlu bölgelerde yağmur suyunun T\'ye girip enfeksiyon yapmaması için.\n• Yama: anaçtan gözlü dikdörtgen kabuk çıkarılıp yerine aynı boyutta çeşide ait gözlü kabuk konur; T\'ye göre yavaş ve zor; ceviz, pikan gibi kalın kabuklu türlerde başarılı.\n• Yongalı: kabuğun kalkmasına gerek yoktur; Amerikan asma anaçlarında yaygın; 6 mm gövdeye bile yapılır; ağustostaki durgun aşı tercih edilir; bağda topraktan 8-10 cm yükseğe yapılıp kümbetle kapatılır.'),

    /* Uzun klasik */
    lg('temel', 'Bitkilerde çoğaltma yöntemlerini, anaç-kalem kavramlarını ve generatif-vegetatif anaçları (avantaj-dezavantaj ve elma anaç örnekleriyle) ayrıntılı anlatınız.', [
      'Fide (tek yıllık) – fidan (çok yıllık)', 'Generatif (tohum) ve vegetatif (yaprak, dal, sürgün) üretim',
      'Meyvede generatif neden tercih edilmez (3 neden)', 'Tohum ne zaman: vegetatif zor, anaç eldesi, ıslah',
      'Kalem/çeşit ve anaç; çöğür ve yoz', 'Generatif anaç avantaj-dezavantaj', 'Vegetatif anaç avantaj-dezavantaj',
      'Elma anaç örnekleri (M20-M27 çok bodur, M9 bodur, MM106 orta, M1-M16 çok kuvvetli; generatif: Ferik, Antonovka...)'
    ], 'Tek yıllık bitkilerde (sebze) üretim materyali fide, çok yıllık bitkilerde (meyve) fidandır. Çoğaltma generatif (eşeyli, tohumla) veya vegetatif (tohum dışında yaprak, dal, sürgün gibi vegetatif dokularla) yapılır.\nMeyve türlerinde generatif çoğaltma her zaman tercih edilmez: heterozigot yapı nedeniyle tohumla açılım; bazı türlerde çekirdeksizlik (muz, bazı portakal-mandarin-altıntop, çekirdeksiz üzüm); bazı tohumların çimlenme gücünün zayıf olması. Tohumla çoğaltma vegetatif üretimin zor olduğu türlerde, anaç eldesinde ve ıslahta tercih edilir.\nAşılı bitkide toprak üstü kısım kalem (çeşit), kök sistemi anaçtır. Yabani tiplerin tohumundan elde edilen bitkiler çöğür, kültür bitkilerininkiler yozdur; üzerlerine istenen çeşit aşılanır. Tohumdan elde edilenler generatif anaç, çelik-daldırma-kök sürgünü ile elde edilenler vegetatif (klon) anaçtır.\nGeneratif anaç: kolay, çabuk, ekonomik; virüssüz; kuvvetli kök, kuraklık ve soğuğa dayanıklı. Dezavantaj: uyuşma sorunları; ömür, fizyoloji, ekolojik istekler bilinmez.\nVegetatif anaç: homojen; uyuşma, verim, gelişme kuvveti, meyveye başlama, ömür bilinir; şekil, büyüklük, verim-kalite kontrol edilir; birim alandan verim ve kalite artar. Dezavantaj: iş gücü, pahalı altyapı, bilgi birikimi.\nElma anaçları: çok bodur M20, M27; bodur M9, M7, M26; orta kuvvetli MM106, M2, M4; kuvvetli M25, MM109; çok kuvvetli M1, M16. Generatif (çok kuvvetli): Ferik, Delicious, R. Beauty, Winesap, Antonovka.'),
    lg('tohum', 'Generatif anaç üretiminde tohumun temini, meyvelerden çıkarılması, iyi tohumun özellikleri, muhafazası ve canlılık testlerini ayrıntılı anlatınız.', [
      'Temin: verim çağında, sağlıklı, bölgeye uygun ağaç; tam olgun meyve; zayıf ağaçta besin az',
      'Sert çekirdekli yarılarak; yumuşak çekirdekli ezme + fermantasyon (dibe çökme)', 'Ceviz-badem kavlatma; üzümsü ezip süzme; turunçgil burma + 52 °C 10 dk',
      'İyi tohum: taze, çimlenme gücü yüksek, çeşide özgü renk, temiz-kuru, artıklardan değil, hastalıksız',
      'Muhafaza yöntemleri ve kriyoprezervasyon −196 °C', 'Adi (%50 nem, 1 yıl), soğukta kuru (1-10 °C, %50-60), soğukta nemli (0-2 °C; ceviz, fındık, kestane, turunçgil)',
      'Canlılık: doğrudan çimlendirme, çıplak embriyo (18-23 °C), TTC (kırmızı, en çabuk)'
    ], 'Tohum temini: tohumlar verim devresindeki, iyi gelişmiş, sağlıklı yabani veya kültür ağaçlarından alınır (zayıf ağaçta yedek besin az, çimlenme düşük); kullanılacağı bölgenin şartlarında yetişen ağaçlardan alınır; meyve tam olgunlukta hasat edilir.\nTohumun çıkarılması: sert çekirdekliler (şeftali, erik, mahlep, kayısı, kiraz) meyve yarılarak, yıkanıp gölgede kurutularak; yumuşak çekirdekliler (elma, armut, ayva) meyve ezilip suda bekletilir, fermantasyon sonrası sağlam çekirdek dibe çöker, et-kabuk-zayıf tohum üstte kalır; ceviz ve badem yeşil dış kabuk kavlatılarak; üzümsüler (çilek, ahududu, böğürtlen) ezilip suda dibe toplanan tohum süzülerek; turunçgiller kabuk yarılıp iki yarı ters yöne burularak, yıkanıp 52 °C suda 10 dk dezenfekte edilir.\nİyi tohum: taze, çimlenme gücü yüksek, çeşide özgü renkte, yıkanmış-temizlenmiş-kurutulmuş, meyve suyu-pekmez-pestil artıklarından çıkarılmamış, hastalıksız.\nMuhafaza: fungisit ve insektisitle ilaçlanır; kurutulmuş, vakumlu, soğukta kuru, soğukta nemli, ultra soğukta (kriyoprezervasyon, sıvı azotta −196 °C). Adi şartlar: nem %50 veya az, zeminden 10-15 cm yükseğe, dezenfeksiyon; nem kontrol edilirse 1 yıl. Soğukta kuru: 1-10 °C, nem %50-60. Soğukta nemli: 0-2 °C, sıkı kapalı kutular (ceviz, fındık, kestane, turunçgil).\nCanlılık testleri: doğrudan çimlendirme (laboratuvarda petri/tepsi); çıplak embriyo (sadece embriyo, ışıkta 18-23 °C, 3 gün-3 hafta sonra ölü embriyo kahverengi ve yumuşak); tetrazolium (TTC, 2,3,5-trifeniltetrazolium klorit; canlı doku kırmızı, cansız renksiz; en çabuk).'),
    lg('cimlenme', 'Çimlenmeyi uyarıcı yöntemleri, katlamanın yapılışını (katlama tablosu örnekleriyle) ve tohum ekimini ayrıntılı anlatınız.', [
      'Dört yöntem: mekanik, kimyasal, suda ıslatma, katlama (+ ayrıntılar)', 'Katlama tanımı ve iyi katlama koşulları', 'Ortam ve kum iriliği; katlama zamanı ve karıştırma',
      'Tablo örnekleri: elma 4.4-5 °C 60-80 gün; ceviz 0 °C 55-60; kızılcık 10 °C 120; kivi 2-4 °C 20', 'Yapılış: sandık, beton yastık (50×70 cm, 3-4 m), toprak yüzü; sert dizilir, yumuşak serpilir',
      'Uygulama özeti: katlama sert kabuklu, kimyasal yumuşak kabuklu, uç kesme avokado', 'Ekim zamanı: sonbahar/ilkbahar; kasımda doğal katlama',
      'Derinlik çapın 2-3 katı; sıravari ekim tercih'
    ], 'Çimlenmeyi uyarıcı yöntemler: mekanik (kabuk çatlatma/kırma; erik 45→25, şeftali 60-100→35-60, vişne 90→60 gün), kimyasal (H2SO4 ile aşındırma, GA3-sitokinin-etilen, potasyum nitrat; daha çok yumuşak kabuklu turunçgil, elma, armut; 5-100 ppm GA3, 100-500 ppm etilen), suda ıslatma (engelleyiciler yıkanır, kabuk yumuşar; elma 2, dut-pikan 4 gün) ve katlama.\nKatlama: soğuklama ihtiyacı, dormansiyi giderme ve su-oksijen alımı için tohumları belli süre nemli ve soğuk ortamda tutma. İyi katlama: düşük sıcaklık, iyi havalandırma, nem emilimi, belli süre. Ortam: nehir kumu, spagnum, vermikulit, perlit, volkanik tüf; en çok kum (ne çok ince ne çok iri). Zaman ekim zamanına göre ayarlanır; tohum erken çimlenirse katlama karıştırılır (7-10 gün gecikme); nem azalırsa sulanır.\nÖrnekler: elma 4.4-5.0 °C 60-80 gün, armut 5 °C 90, erik 0-4 °C 60-90, şeftali 5-10 °C 60-100, ceviz 0 °C 55-60, kızılcık 10 °C 120, kivi 2-4 °C 20, kayısı-badem 2-4 °C 30, kiraz-vişne 0-10 °C 90-120.\nYapılış: sandıkta (drenaj deliği, kaba çakıl, kum; sert çekirdekliler değmeden dizilir, yumuşaklar serpilir; tohum tabakasının 2-3 katı kum; en üste kalın kum), beton yastıkta (50 cm derin, 70 cm geniş, 3-4 m uzun, fareye karşı kafes), toprak yüzünde (az fidan, gölge yer, konik yığın, tepeye saksı).\nÖzet: katlama sert kabuklu şeftali, erik, zeytinde; kimyasal yumuşak kabuklu turunçgil, elma, armutta; tohum ucunu kesme avokadoda.\nEkim: tava/sedde veya tüp; ortam su tutma, havalanma, gözeneklilik ve organik madde bakımından iyi olmalı. Sonbahar veya ilkbahar; katlanmamış tohumlar kasımda tavaya ekilip doğal katlamaya bırakılır. Derinlik çapın 2-3 katı (çok derin: depo biter, havalanma kötü; çok yüzlek: kuruma, kuş). Tavada sıravari ekim serpmeye tercih edilir.'),
    lg('asi-genel', 'Aşı ile çoğaltmayı; tanım, amaçlar, başarı sınırları, affinite ve aşı uyuşmazlığı belirtileriyle ayrıntılı anlatınız.', [
      'Tanım: iki bitki parçasını kaynaştırma; kalem/çeşit ve anaç; aşılama', 'Amaçlar (çoğaltma, anaç ve ara anaç etkisi, çeşit değiştirme, onarma, ıslah, virüs, çok fidan)',
      'Çeşit içi ve çeşitler arası başarılı', 'Türler arası: Citrus, şeftaliye badem-kayısı-erik; badem-kayısı olmaz; filoksera ve Amerikan anacı',
      'Cinsler arası: ayva üzerine armut, tersi olmaz; Poncirus; familyalar arası yok', 'Affinite; iyi ve kötü uyuşma; kallus ve ortak doku',
      'Kötü uyuşma belirtileri; armut üzerine elma', 'En tipik belirti düzgün kırılma; Williams örneği; kiraz/idris'
    ], 'Aşı, iki bitki parçasını birleştirip kaynaştırarak tek bitki gibi büyümesini sağlamaktır; üst kısım kalem (çeşit), kök kısmı anaçtır; bu yöntemlerin tümü aşılamadır.\nAmaçlar: çelik-daldırma ile ekonomik çoğaltılamayan türleri çoğaltmak, anaç ve ara anaçların üstün özelliklerinden yararlanmak, çeşit değiştirmek, zarar gören kısımları onarmak, ıslah bitkilerinde büyümeyi hızlandırmak, virüs hastalıklarını incelemek, aynı çeşitten çok fidan elde etmek, kıymetli materyalleri üretmek ve korumak.\nBaşarı sınırları: çeşit içinde (aynı çeşidin tüm bireylerine) ve çeşitler arasında (Ankara-Williams-Akça armutları, V. vinifera çeşitleri) başarılı. Türler arasında bazıları başarılı: Citrus türleri; badem, kayısı ve erik şeftaliye anaç; fakat badem ve kayısı birbirine aşılanamaz; filokseralı alanda V. vinifera Amerikan türlerine aşılanır. Cinsler arasında başarı az: ayva üzerine armut uyuşur (ayva bodur anaç), tersi başarısız; Poncirus trifoliata Citrus\'a anaç. Familyalar arasında başarılı kombinasyon yoktur.\nAffinite: anaç ve kalem kambiyumlarının biri diğerinin devamı olacak şekilde kaynaşması. İyi uyuşmada aşı yeri düzgün, şişlik yok; kötü uyuşmada şişkinlikler. Çakışan kambiyumlar kallus oluşturur, odun ve soymuk dokuları su ve besin geçişine izin verir; uyuşmazlıkta ortak doku oluşmaz.\nKötü uyuşma belirtileri: yüksek oranda tutmama, erken ölüm, sarı yaprak ve erken dökülme, zayıf büyüme, enine büyüme farkı, aşı noktası altında/üstünde aşırı büyüme, gelişme zamanı farkı; armut üzerine elmada şişkinlik yokken kötü uyuşma. En tipik belirti aşı noktasından düzgün yüzeyle kırılmadır: Williams ayva üzerinde zayıf gelişip kırılır, Pyrus pyrifolia üzerinde meyve ucu siyahlaşır; kiraz/idris kombinasyonunda belli yaştan sonra uyuşmazlık görülür.'),
    lg('goz', 'Göz aşılarını; tanım, uygulama zamanı, kalem aşılarına üstünlükleri ve tüm göz aşısı çeşitleri ile ayrıntılı anlatınız.', [
      'Tek gözlü kabuk parçası; kabuk vermeye bağlı', 'Zaman: erken ilkbahar, haziran, ağustos-eylül; sürgün ve durgun aşı',
      'Üstünlükler: 5-6 mm anaç, erken meyve, az kalem', 'Üstünlükler: az yara %80-95, 15-20 gün, 800-1200/gün, macunsuz',
      'T aşısı: 0.6-2.5 cm, 5-25 cm, göz açıkta, şerit', 'Ters T: yağmurlu bölge', 'Yama: dikdörtgen kabuk, ceviz-pikan, yavaş',
      'Yongalı: kabuk kalkmaz, Amerikan asma anacı, 6 mm, ağustos, 8-10 cm, kümbet'
    ], 'Göz aşıları küçük bir kabuk parçası (bazen biraz odunla) ve üzerindeki tek gözle yapılır; uygulama kabuğun odundan kolay ayrılmasına (kabuk vermeye) bağlıdır. Kambiyumun aktif olduğu ilkbaharda başlar, büyüme durana kadar sürer; meyvecilik ve bağcılıkta erken ilkbahar, haziran ve ağustos-eylül olmak üzere 3 dönemde yapılır. Erken ilkbahar ve haziranda yapılıp aynı sezon sürenler sürgün aşı, ağustos-eylülde yapılıp ertesi ilkbahar sürenler durgun aşıdır.\nÜstünlükleri: 5-6 mm anaçlara bile yapılır, ağaç erken meyveye yatar; her anaca tek göz → az kalem; anaçta az yara → tutma %80-95; sonuç 15-20 günde belli olur, aynı yıl yenilenir; kolaydır, günde 800-1200 aşı; durgun aşı işlerin az olduğu dönemde; macun gerekmez.\nÇeşitler:\n• T göz aşısı: 0.6-2.5 cm çaplı ince, kolay kabuk veren anaçlar; topraktan 5-25 cm yükseğe, aynı yöne; göz T\'ye itilir, kabuk kanatlarıyla kapatılır ama göz açıkta kalır; macunsuz, lastik/plastik şeritle sarılır.\n• Ters T: yağmurlu bölgelerde, suyun girip enfeksiyon yapmasını önlemek için.\n• Yama: anaçtan dikdörtgen gözlü kabuk çıkarılıp aynı boyda çeşit kabuğu konur; T\'den yavaş ve zor; ceviz ve pikan gibi kalın kabuklularda başarılı.\n• Yongalı: kabuk kalkması gerekmez; Amerikan asma anaçlarında yaygın; ağustos durgun aşısı tercih; 6 mm gövdeye bile; bağda topraktan 8-10 cm yükseğe; meyilli kesim ve 2-3 cm yukarıdan ikinci kesimle yonga çıkarılır, gözlü yonga kabuklar çakışacak şekilde konur; nemli toprakla kümbet yapılır, ertesi ilkbahar geç don geçince açılır.'),
    lg('kalem', 'Kalem aşılarını (yarma, kakma, çoban, İngiliz, makineli), onarma aşılarını ve aşının tutup tutmadığının nasıl anlaşıldığını ayrıntılı anlatınız.', [
      'Yarma: çeşit değiştirme; 2.5-10 cm; 5-7.5 cm yarık; 7.5-10 cm kalem, 2-3 göz, kama; iki kalem; macun; gözler kabarmadan önce',
      'Kakma: 7.5-10 cm ve üstü; büyük yara sakıncası yok; ilkbahar', 'Çoban: 10-30 cm; kabuk altı; erken ilkbahar; ilk göz dışa; 2\'den fazla kalem',
      'İngiliz: ceviz, asma, kiraz, elma; anaç = kalem kalınlığı; dilciksiz ≤1.5 cm, dilcikli', 'Makineli: omega ve V; saatte 500-800; düzgün kesit',
      'Onarma: kemer, köprü, yanaştırma', 'Köprü: ilkbahar başı; kabuk çıkarma, kalem uçları, çivi ve macun',
      'Tutma: kabuk açık kahverengi, göz yeşil-şişkin, yaprak sapı kopuyor; tutmamış: kararma, sap kopmuyor'
    ], 'Kalem aşılarında anaca 1-3 gözlü, 7-15 cm, 1-2 yaşlı dal parçası takılır.\n• Yarma: küçük ağaç gövdesi veya büyük ağaç dalında çeşit değiştirme; filokseralı bağlarda aşısız Amerikan asmalarında. Dinlenmede yapılabilir ama ilkbaharda gözler kabarmadan hemen önce daha başarılı. 2.5-10 cm anaç kesilir, merkezden 5-7.5 cm derin yarık açılır; 7.5-10 cm, 2-3 gözlü kalemlerin ucu 4-5 cm kama şeklinde hazırlanır; yarığın iki yanına kambiyuma iki kalem konur; yüzey macunlanır.\n• Kakma: 7.5-10 cm veya daha kalın dallarda yarmanın yerine; büyük yara açma sakıncası yok; ilkbaharda anacın gelişmesinden hemen önce.\n• Çoban (kabuk altı): 10-30 cm anaçlara; erken ilkbaharda kabuk kolay kalkarken ama güçlü su akışı yokken. Anaç testereyle dik kesilip serpetle düzeltilir; kabuk 5-6 cm çizilip kaldırılır; tek yöne meyilli kesilmiş, ilk gözü dışa bakan kalem kabuk ile odun arasına konur; kalınlığa göre 2\'den fazla kalem.\n• İngiliz: göz aşısı başarısı düşük ceviz, asma, kiraz, elmada; tutma yüksek; anaç ve kalem aynı kalınlıkta olmalı (değilse şişkinlik, uyuşmazlık). Dilciksiz: otsu veya ≤1.5 cm gövdede, 2-2.5 cm meyilli kesim. Dilcikli: çaplar eşit ve <1.5 cm, karşılıklı dilcikler birbirine geçirilir.\n• Makineli: aşılı asma fidanında elle aşının yerini aldı; en yaygın omega (Ω) kesit; elma, armut, ceviz, kirazda da; saatte 500-800 aşı, düzgün kesit, yüksek başarı. Tipler: V ve omega.\nOnarma aşıları: kemer, köprü, yanaştırma. Köprü aşı: gövdedeki zararları onarmak için ilkbahar başında; yaralı kabuk sağlam dokuya kadar temizlenir; yaranın üst ve altında her kalem için 5-7 cm kabuk çıkarılır; kalemlerin iki ucu yüzlek ve ters yönde kısa kesilir; yerine sokulup küçük çivilerle sabitlenir ve macunlanır.\nTutma: gözün kabuğu açık kahverengi, göz yeşil ve şişkin, yaprak sapı kolay kopuyorsa tutmuştur; kabuk ve göz kararmışsa, yaprak sapı kopmuyorsa tutmamıştır.'),
    lg('anac-kalem', 'Aşı tiplerini (göz aşıları ve kalem aşıları) karşılaştırınız; her aşının uygulandığı anaç kalınlığını, zamanını ve kullanıldığı türleri belirtiniz.', [
      'Göz aşısı: tek göz, kabuk vermeye bağlı, macunsuz; kalem aşısı: 1-3 gözlü 7-15 cm, 1-2 yaşlı dal',
      'T: 0.6-2.5 cm, fidanlık; ters T: yağmurlu bölge',
      'Yama: ceviz, pikan (kalın kabuk); yongalı: Amerikan asma anacı, 6 mm, ağustos',
      'Göz aşısı dönemleri: erken ilkbahar, haziran, ağustos-eylül; sürgün ve durgun aşı',
      'Yarma: 2.5-10 cm, çeşit değiştirme, gözler kabarmadan önce; kakma: 7.5-10 cm ve üstü',
      'Çoban: 10-30 cm, erken ilkbahar, kabuk altı',
      'İngiliz: ≤1.5 cm, anaç = kalem; ceviz, asma, kiraz, elma',
      'Makineli: omega ve V, asma fidanı (elma, armut, ceviz, kiraz), saatte 500-800'
    ], 'Göz aşılarında anaca tek bir göz (küçük kabuk parçasıyla) takılır; uygulama bitkinin kabuk vermesine bağlıdır, macun gerekmez, tutma %80-95. Kalem aşılarında anaca üzerinde 1-3 göz bulunan 7-15 cm\'lik, 1-2 yaşlı dal parçası takılır.\nGöz aşıları erken ilkbahar, haziran ve ağustos-eylülde yapılır. Erken ilkbahar ve haziranda yapılıp aynı sezon sürenler sürgün aşı; ağustos-eylülde yapılıp ertesi ilkbahar sürenler durgun aşıdır.\n• T göz aşısı: fidanlıkta 0.6-2.5 cm çaplı, kolay kabuk veren anaçlar; topraktan 5-25 cm yükseğe.\n• Ters T: yağmurlu bölgelerde.\n• Yama: ceviz, pikan gibi kalın kabuklu türler; T\'den yavaş ve zor.\n• Yongalı: kabuk kalkması gerekmez; Amerikan asma anaçları; 6 mm gövdeye bile; ağustos durgun aşısı tercih.\n• Yarma: 2.5-10 cm anaç veya dal; çeşit değiştirme; ilkbaharda gözler kabarmadan hemen önce; iki kalem, macun.\n• Kakma: 7.5-10 cm veya daha kalın dallar; büyük yara sakıncası yok; ilkbaharda gelişme öncesi.\n• Çoban (kabuk altı): 10-30 cm; erken ilkbahar, kabuk kalkarken ama güçlü su akışı yokken; 2\'den fazla kalem.\n• İngiliz: anaç ve kalem aynı kalınlıkta, ≤1.5 cm; göz aşısı başarısı düşük ceviz, asma, kiraz, elma; dilcikli ve dilciksiz.\n• Makineli: omega (Ω) ve V; aşılı asma fidanında yaygın, elma, armut, ceviz, kirazda da; saatte 500-800 aşı.'),
    lg('asi-basari', 'Aşıda başarıyı etkileyen faktörleri ve aşı kalemlerinin hazırlanmasını; aşı tipleri ve aşı zamanlarıyla birlikte anlatınız.', [
      'Başarı akrabalık, sıcaklık-nem, teknik ve özene bağlı', 'Uyuşmazlık ve bitki cinsi (şeftali-kayısı zor)',
      'Sıcaklık: elmada 0 altı / 40 üstü kallus yok; 4-32 °C hızlanır', 'Anacın kabuk vermesi ve toprak nemi; teknik; virüs',
      'Su kaybı: macun, parafin (reçine, balmumu, vazelin)', 'Kalem: 1 yaşlı, sağlıklı, dış-güneşli, 8-12 mm, orta kısım; muhafaza',
      'Göz aşıları (tek göz) ve kalem aşıları (1-3 göz, 7-15 cm); çeşitleri', 'Sürgün aşı ve durgun aşı'
    ], 'Aşıda başarı; anaç-kalemin botanik akrabalığına, aşılama ve sonrasında sıcaklık-nem koşullarına, aşı tekniğine ve özene bağlıdır.\nFaktörler: a) uyuşmazlık (uyuşmaz kombinasyonlardan kaçın); b) bitki cinsi (elma-armutta kalem aşıları başarılı, şeftali ve kayısıda daha zor); c) sıcaklık-nem (elmada 0 °C altı ve 40 °C üstünde kallus oluşmaz, 40 °C\'de hücreler ölür; 4-32 °C arasında sıcaklıkla hızlanır); d) anacın gelişme durumu (göz aşısında kolay kabuk veren aktif dönem, toprak nemli); e) aşılama tekniği (kambiyumların az teması → kalem sürer ama ölebilir); f) hastalık-zararlılar (özellikle virüs; virüssüz ağaç, dezenfeksiyon). Aşı yerinden su kaybı aşı macunu veya reçine-balmumu-vazelin içeren parafinle önlenir; kallus hücreleri ince zarlı ve su kaybına duyarlıdır.\nAşı kalemleri: damızlık ağaçtan 1 yaşlı dallar (kalem damızlığı); sağlıklı ağaç; tacın dış ve güneş gören kısmı; obur, zayıf dal ve meyve dalcığı kullanılmaz; çap 8-12 mm; sürgünün ortası. Muhafaza: 50-100\'lük demet, nemli perlit, 3-4 hafta 0-4 °C, 1-3 ay 0 °C.\nAşı tipleri: göz aşılarında anaca tek göz takılır (T, ters T, yama, yongalı); kalem aşılarında 1-3 gözlü, 7-15 cm, 1-2 yaşlı dal parçası (İngiliz, yarma, kakma, çoban, makineli/omega).\nZaman: sürgün aşılar erken ilkbahar ve haziranda yapılır, aynı sezon sürer; durgun aşılar ağustos-eylülde yapılan göz aşılarıdır, aynı dönem kaynaşır ama ertesi ilkbahar sürer.')
  ]
});
})();
