(function () {
var Q = App.Q, mc = Q.mc, tf = Q.tf, fill = Q.fill, op = Q.op, lg = Q.lg;

App.course({
  id: 'tahil', short: 'Tahıl–Baklagil', title: 'Tahıl – Baklagil – Yem Bitkileri',
  desc: 'Sınıflandırma, Türkiye tarım alanları, tarım sistemleri, serin ve sıcak iklim tahılları.',
  lead: 'Kaynak: yıldızlı notlar. ★★★ işaretli (slaytta renkli/altı çizili) yerler özellikle soruldu. Sayılara (milyon ha, %) ve Latince adlara dikkat.',
  traps: [
    { t: 'Tarla bitkileri **4** ana grup: tahıllar, yemeklik baklagiller, endüstri bitkileri, yem bitkileri.', topic: 'siniflandirma' },
    { t: 'İşlenen tarım alanı **23.7** milyon ha; her yıl tarla bitkisi ekilen **15.8** milyon ha; nadas **3.7** milyon ha. Tarla bitkisi + nadas = **19.5** milyon ha.', topic: 'turkiye' },
    { t: 'Tarla alanının **%70** tahıl, **%14** endüstri, **%11** yem bitkisi, **%5** yemeklik baklagil.', topic: 'turkiye' },
    { t: 'Dünyada en çok: buğday, **çeltik**, mısır. Türkiye\'de: buğday, **arpa**, mısır. Karıştırma.', topic: 'turkiye' },
    { t: 'Kuru tarım ≤ **500 mm** sulamasız; sulu tarım < **750 mm** + sulama (nadas gerekmez); nemli tarım > **750 mm**, sorun suyun fazlalığı (Doğu Karadeniz).', topic: 'sistemler' },
    { t: 'Kavuzlu: **arpa, yulaf, çeltik**. Çıplak: **buğday, çavdar, tritikale, mısır**.', topic: 'tahil-genel' },
    { t: 'Dona en dayanıklı **çavdar**, en hassas **yulaf**. Toprak isteği en fazla **arpa**. Su isteği en fazla **çeltik**.', topic: 'serin-sicak' },
    { t: 'Protein ve yağ en fazla **yulaf**, en az **çeltik**; karbonhidrat en fazla **çeltik** (%80), en az yulaf.', topic: 'serin-sicak' },
    { t: 'İki sıralı arpa (H. distichum) → **malt/bira**; altı sıralı (H. vulgare) → **yemlik**.', topic: 'bugday-arpa' },
    { t: 'Arpa **açık** rastığı (U. nuda): ilaçlı mücadelesi **yok**. **Kapalı** rastık (U. hordei): ekimden önce **tohum ilaçlanır**.', topic: 'bugday-arpa' },
    { t: 'Buğdayda çavdar oranı **%20**\'yi geçerse "**mahlut**". Ergot **%0.5** üstüyse beslenmede kullanılmaz.', topic: 'yulaf-cavdar' },
    { t: 'Hekzaploid tritikale **2n=42** (AABBRR, tane için); oktaploid **2n=56** (AABBDDRR, çayır tipi).', topic: 'yulaf-cavdar' },
    { t: 'Sert mısır en çok **Karadeniz**, atdişi mısır en çok **Akdeniz**. Silaj hasadı kuru madde **%32-35** (hamur olum).', topic: 'misir-celtik' }
  ],
  rules: {
    siniflandirma: 'Tahıl: serin/sıcak iklim. Baklagil: serin mevsim (mercimek, nohut, bakla, bezelye) / sıcak mevsim (fasulye, börülce). Endüstri: yağ, lif, nişasta-şeker, tıbbi-aromatik. Yem: baklagil ve buğdaygil yem bitkileri, çayır-mera.',
    turkiye: 'Toplam arazi >80, işlenen 23.7, tarla 15.8 (%67), nadas 3.7 (%16), bahçe 4.2 (%17), çayır-mera 14.6, orman 21.5 milyon ha. Tarla alanı: tahıl 11 (%70), endüstri 2.2 (%14), yem 1.8 (%11), baklagil 0.8 (%5).',
    sistemler: 'Kuru ≤500 mm sulamasız, nadas yaygın; sulu: <750 mm bölgede sulama, nadas yok; nemli >750 mm düzenli yağış, sulama yok, sorun su fazlalığı.',
    'tahil-genel': 'Tahıllar Gramineae familyası; ekonomik organ tohum (karyopsis: meyve ve tohum kabuğu yapışık). Çıplak tane: kabuk %12, endosperm %85, embriyo %3.',
    'serin-sicak': 'Serin iklim tahılları (buğday, arpa, yulaf, çavdar, tritikale) 1-5 °C\'de 5-60 gün vernalize olur, uzun gün bitkisidir. Sıcak iklim: mısır, çeltik, darılar.',
    'bugday-arpa': 'T. aestivum ekmeklik (unsu, protein düşük), T. durum makarnalık (camsı, protein yüksek). H. distichum 2 sıralı malt, H. vulgare 6 sıralı yemlik.',
    'yulaf-cavdar': 'Yulaf: protein ve yağ en yüksek, avenin, iklim isteği en fazla. Çavdar: soğuk/kurağa en dayanıklı, ergot, yabancı döllenir, mahlut. Tritikale: buğday × çavdar.',
    'misir-celtik': 'Mısır C4, Nisan-Mayıs ekim, 4-6 cm derinlik. Sorgum kurağa dayanıklı, HCN 50-60 cm\'ye kadar artar. Çeltik: KH %80, su 1100-1300 mm.'
  },
  topics: [
    { id: 'siniflandirma', title: 'Tarla bitkilerinin sınıflandırılması ve ürün grupları', src: 'Notlar: Tarla bitkileri, sınıflandırma, ürün grupları, kullanım alanları ★★★',
      blocks: [
        { t: 'p', text: 'Bitkisel üretimin en önemli kaynaklarının başında tarla bitkileri gelir. **4 ana grup:** tahıllar, yemeklik baklagiller, endüstri bitkileri ve yem bitkileri. Hayvan beslenmesinde değerlendirilen **çayır ve meralar** da tarla bitkileri içindedir.' },
        { t: 'table', head: ['Ana grup', 'Alt grup', 'Ürünler'], rows: [
          ['Tahıllar', 'Serin iklim tahılları', 'Buğday, arpa, yulaf, çavdar, tritikale'],
          ['', 'Sıcak iklim tahılları', 'Mısır, çeltik, sorgum, darılar, kuşyemi'],
          ['Yemeklik baklagiller', 'Serin mevsim', 'Mercimek, nohut, bakla, bezelye'],
          ['', 'Sıcak mevsim', 'Fasulye, börülce'],
          ['Endüstri bitkileri', 'Yağ bitkileri', 'Soya, kolza/kanola, ayçiçeği, yerfıstığı, susam, aspir'],
          ['', 'Lif bitkileri', 'Pamuk, keten, kenevir, kapok, jüt, rami'],
          ['', 'Nişasta bitkileri', 'Patates, tatlı patates, yerelması, kassava, taro'],
          ['', 'Şeker bitkileri', 'Şekerpancarı, şekerkamışı, şeker darısı'],
          ['', 'Tıbbi ve aromatik', 'Adaçayı, anason, çay, haşhaş, kekik, tütün'],
          ['Çayır-mera ve yem bitkileri', 'Baklagil yem bitkileri', 'Yonca, korunga, fiğ, burçak, üçgül, yem bezelyesi'],
          ['', 'Buğdaygil yem bitkileri', 'Mısır ve diğer tahıl hasılları, sorgum, sudan otu, ayrıklar, yumaklar'],
          ['', 'Çayır ve meralar', '']
        ] },
        { t: 'h', text: 'Kullanım alanları' },
        { t: 'table', head: ['Grup', 'Kullanım'], rows: [
          ['Tahıllar (hububat)', 'Un, ekmek, makarna, bulgur, pirinç, malt, bira, yem'],
          ['Baklagiller (bakliyat)', 'Bakliyat, konserve, bakliyat proteinleri, leblebi, yem'],
          ['Yağ bitkileri', 'Yemeklik ve sanayi yağları, margarin, küspe, biyodizel'],
          ['Nişasta-şeker bitkileri', 'Nişasta, şeker, alkol, biyoetanol, melas, yem'],
          ['Lif bitkileri', 'İplik, tekstil, halat, kağıt, çuval, selüloz'],
          ['Tıbbi, aromatik, keyf, boya', 'İlaç, parfüm, kozmetik, baharat, herbal çay, doğal boya'],
          ['Yem bitkileri', 'Tane yem, kuru ot, yeşil ot, silaj, hasıl']
        ] },
        { t: 'trap', text: 'Mısır hem sıcak iklim tahılı hem de (hasıl olarak) buğdaygil yem bitkisi listesinde geçer. Şeker darısı şeker bitkisidir.' }
      ] },
    { id: 'turkiye', title: 'Türkiye\'de tarım alanları ve üretim', src: 'Notlar: Tarım alanlarının dağılımı, Türk tarımında tarla bitkileri, dünyada ve Türkiye\'de üretim ★★★',
      blocks: [
        { t: 'table', head: ['Alan', 'Büyüklük'], rows: [
          ['Toplam arazi varlığı', '> 80 milyon ha'], ['İşlenen tarım alanı', '23.7 milyon ha'],
          ['Tarla bitkileri', '15.8 milyon ha (%67)'], ['Nadas', '3.7 milyon ha (%16)'], ['Bahçe bitkileri', '4.2 milyon ha (%17)'],
          ['Çayır-mera', '14.6 milyon ha'], ['Orman', '21.5 milyon ha']
        ] },
        { t: 'table', head: ['Tarla alanında (15.8 milyon ha)', 'Alan', 'Pay'], rows: [
          ['Tahıllar (hububat)', '11 milyon ha', '%70'], ['Endüstri bitkileri', '2.2 milyon ha', '%14'],
          ['Yem bitkileri', '1.8 milyon ha', '%11'], ['Yemeklik baklagiller', '0.8 milyon ha', '%5']
        ] },
        { t: 'ul', items: [
          '23.7 milyon ha tarım alanının **19.5** milyon hektarında tarla bitkisi yetiştirilir (nadas dahil). Tarım alanlarının **%83**\'ünde (nadas dahil) tarla bitkileri vardır.',
          'Kurak ve yarı kurak bölgelerde her yıl **3.7** milyon ha nadas nedeniyle boş bırakılır; her yıl ekilen alan **15.8** milyon ha.',
          '14.6 milyon ha çayır-mera çiftlik hayvanlarının doğal otlatma alanıdır.',
          'Önemli ürünler: tahıl – buğday, arpa, mısır, çeltik; baklagil – nohut, mercimek, fasulye; endüstri – pamuk, ayçiçeği, şekerpancarı, patates; tıbbi/keyf – çay, tütün, haşhaş, kimyon, anason, kekik; yem – fiğ, yonca, korunga, hasıl mısır, darılar.'
        ] },
        { t: 'table', head: ['Grup', 'Dünyada en fazla', 'Türkiye\'de en fazla'], rows: [
          ['Tahıl', 'Buğday, çeltik, mısır', 'Buğday, arpa, mısır'],
          ['Baklagil', 'Fasulye, bezelye', 'Nohut, mercimek'],
          ['Yağ bitkisi', 'Soya, kolza', 'Ayçiçeği, zeytin'],
          ['Şeker bitkisi', 'Şekerkamışı (%80), şekerpancarı (%20)', 'Sadece şekerpancarı (%100)'],
          ['Lif bitkisi', 'Pamuk', 'Pamuk (%99.9)'],
          ['Nişasta bitkisi', 'Patates, kassava, tatlı patates, taro', 'Patates (%99), biraz tatlı patates'],
          ['Yem bitkisi', '—', 'Fiğ, yonca, korunga, hasıl ve silajlık mısır, sorgum']
        ] }
      ] },
    { id: 'sistemler', title: 'Tarla tarım sistemleri', src: 'Notlar: Tarla tarım sistemleri',
      blocks: [
        { t: 'table', head: ['Sistem', 'Yağış', 'Özellik'], rows: [
          ['Kuru tarım', '≤ 500 mm, dağılışı düzensiz', 'Sulamasız. Türkiye tarla alanlarının %75\'ten fazlası; yaygın nadas. Ürünler: buğday, arpa, yulaf, çavdar, tritikale, nohut, mercimek, fiğ, korunga'],
          ['Sulu tarım', '< 750 mm (kuru tarım bölgeleri)', 'Sulama yapılır; nadasa gerek kalmaz'],
          ['Nemli tarım', '> 750 mm, düzenli', 'Sulama yapılmaz; sorun suyun fazlalığı. En uygun bölge: Doğu Karadeniz']
        ] }
      ] },
    { id: 'tahil-genel', title: 'Tahıllar: genel özellikler, Latince adlar, orijinler', src: 'Notlar: Tahıllar ★★★, orijinler, morfoloji',
      blocks: [
        { t: 'ul', items: [
          'Tahıllar **Gramineae (Buğdaygiller)** familyasındadır; hububat = tahıl. "Tahıllar dünyayı doyururlar" – en önemli insan gıdası.',
          'Ekonomik olarak en önemli organ **tohum**. Meyve ve tohum kabuğu birbirine yapışık → **karyopsis**.',
          '**Çıplak tohumlu:** buğday, çavdar, tritikale, mısır. **Kavuzlu:** arpa, yulaf, çeltik, bazı darılar.',
          'Çıplak tane: kabuk %12, endosperm %85, embriyo %3. Değirmende kabuk + embriyo → **kepek**, endosperm → **un**.',
          'İstisna: kavuzlu tane veren buğday çeşitleri ve çıplak taneli arpa/yulaf çeşitleri de vardır.'
        ] },
        { t: 'h', text: 'Buğday tanesinin kısımları' },
        { t: 'ul', items: [
          'Tane = kabuk + besi doku (endosperm) + embriyo.',
          'Kabuk (meyve kabuğu, tohum kabuğu, hialin tabaka) + **aleuron** tabakası = kepek; tanenin %12-13\'ü.',
          'Endosperm: tanenin %80-85\'i, una dönüşür; un randımanı ortalama **%70**.',
          'Embriyo (ruşeym): skutellum (kalkancık) + asıl embriyo; %2-3; yüksek protein ve yağ yüzünden **una karıştırılmaz**.',
          'Meyve kabuğu (pericarp) dıştan içe **4 tabaka**: üst epidermis (exocarp), orta epidermis (mesocarp), enlem hücreler (transversal), iç epidermis (endocarp).'
        ] },
        { t: 'table', head: ['Tahıl', 'Latince / tipler'], rows: [
          ['Buğday', 'Triticum aestivum (ekmeklik), Triticum durum (makarnalık)'],
          ['Arpa', 'Hordeum distichum (2 sıralı), Hordeum vulgare (6 sıralı)'],
          ['Yulaf', 'Avena byzantina (kırmızı), Avena sativa (beyaz)'],
          ['Çavdar', 'Secale cereale'],
          ['Tritikale', 'Triticosecale (buğday × çavdar)'],
          ['Mısır', 'Zea mays: indendata (atdişi), indurata (sert), everta (cin), saccharata (şeker)'],
          ['Çeltik', 'Oryza sativa ssp. indica, japonica, javonica'],
          ['Darılar', 'Sorgum bicolor (koca darı), Panicum miliaceum (kum darı), Seteria italica (cin darı), Sorgum × Sudan otu (melez darı), S. bicolor ssp. saccharatum (şeker darısı)'],
          ['Kuşyemi', 'Phalaris canariensis (2n = 12)']
        ] },
        { t: 'table', head: ['Tahıl', 'Orijin'], rows: [
          ['Buğday', '**Anadolu**, İran, Irak, Suriye, Filistin, Mısır, K. Hindistan (MÖ 7000-6500)'],
          ['Arpa', 'Batı Çin, Tibet, KD Hindistan, D. Asya, Anadolu, Eritre (MÖ 8000)'],
          ['Çavdar', '**Doğu Anadolu**, Kafkasya (MÖ 4000-2000)'],
          ['Yulaf', 'Hazar Denizi civarı, **Karadeniz Bölgesi** (MÖ 2000)'],
          ['Çeltik', 'Hindistan, Çin (MÖ 3100)'],
          ['Mısır', 'Orta ve Güney Amerika (MÖ 3000-2000)'],
          ['Darılar', 'Yakın Doğu, Orta Asya, Çin, Doğu Hindistan (MÖ 6000)']
        ] }
      ] },
    { id: 'serin-sicak', title: 'Serin ve sıcak iklim tahılları', src: 'Notlar: Serin ve sıcak iklim tahılları, Türkiye\'de hangi tahıl nerede ★★★',
      blocks: [
        { t: 'ul', items: [
          '**Sıcak iklim tahılları** (çeltik, mısır, darılar, kuşyemi): vejetatif ve generatif dönemlerini sıcak mevsimde tamamlar.',
          '**Serin iklim tahılları** (buğday, arpa, yulaf, çavdar, tritikale): kışlık, yazlık ve geçit olarak 3 gruba ayrılır. 5-60 gün 1-5 °C\'de vernalize olmaları gerektiği için **kışlık tahıllar** da denir.',
          '**Vernalizasyon:** kışlık çeşitlerin başak, çiçek ve tane oluşturması için **1-5 °C**\'de kalmaları.',
          'Serin iklim tahılları en serin ve en kurak bölgelerde bile yetişir; toprak seçiciliği en az olan kültür bitkileridir; hepsi **uzun gün** bitkisidir.',
          'Kışlık ekim **Ekim-Kasım**, yazlık ekim **Şubat-Mart**.'
        ] },
        { t: 'table', head: ['', 'Serin iklim', 'Sıcak iklim'], rows: [
          ['Çimlenme minimum', '1-4 °C', '8-12 °C'], ['Çimlenme optimum', '20-25 °C', '30-35 °C']
        ] },
        { t: 'ul', items: [
          'Minimum çimlenme: çavdar ve tritikale 1-2 °C, buğday ve arpa 3-4 °C, yulaf 4-5 °C.',
          'Dona en dayanıklı **çavdar**, en hassas **yulaf**. Arpa çavdar ve buğdaydan daha az dayanıklı; -10 °C\'nin üzerinde zarar görür.',
          'Ekmeklik buğday -35 °C\'ye kadar kısa süreli soğuğa dayanır; makarnalık -15 °C\'den sonra zarar görür.',
          'Toprak istekleri en fazla olan tahıl **arpa** (besin maddeleri üst katlarda bol ve hazır olmalı).',
          'Karbonhidrat en fazla çeltik (%80), en az yulaf (%66). Protein en fazla yulaf (%13.3), en az çeltik (%7). Yağ en fazla yulaf (%8), en az çeltik (%0.5).',
          'Mısır ve çeltik çok sıcak ister; günlük ortalama 20 °C üstü. Çeltik su isteği en fazla tahıl (**1100-1300 mm**); mısır 400-750 mm.'
        ] },
        { t: 'h', text: 'Türkiye\'de hangi tahıl nerede?' },
        { t: 'ul', items: [
          '11 milyon ha tahıl alanı: buğday %70, arpa %22, mısır %6, diğer %2.',
          'Buğday ve arpa: Orta, Batı ve Güneydoğu Anadolu. Yulaf: Marmara ve Geçit. Çavdar: Orta ve Doğu Anadolu.',
          'Mısır: Akdeniz, Güneydoğu, Ege. Çeltik: Marmara (%70) ve Karadeniz (%25).'
        ] }
      ] },
    { id: 'bugday-arpa', title: 'Buğday ve arpa', src: 'Notlar: Buğday ★★★, Arpa ★★★',
      blocks: [
        { t: 'table', head: ['', 'Makarnalık (T. durum)', 'Ekmeklik (T. aestivum)'], rows: [
          ['Tane', 'Camsı', 'Unsu'], ['Protein', 'Yüksek', 'Düşük (nişasta yüksek)'],
          ['Un', 'İrmik iriliğinde', 'Un'], ['Kullanım', 'Makarna, bulgur', 'Un ve unlu mamuller'], ['Türkiye üretimindeki payı', '%15', '%85']
        ] },
        { t: 'ul', items: [
          'Türkiye ~20 milyon ton buğday üretir. Dünyada en fazla buğday üreten ülke **Çin**.',
          'Ekim: sonbaharda ekim derinliğindeki toprak sıcaklığı **5-8 °C** iken.',
          'Orta Anadolu\'da m²\'de 400-500 bitki; 300 kg/da verim için 13-14 kg diamonyum fosfat + 6 kg saf azot.',
          'Hastalıklar: sürme, rastık, sarı pas, külleme, kahverengi pas, kara pas.'
        ] },
        { t: 'h', text: 'Arpa' },
        { t: 'ul', items: [
          '**İki sıralı** (Hordeum distichum): homojen, iri taneli → **malt** üretimine çok uygun.',
          '**Altı sıralı** (Hordeum vulgare): heterojen, nişasta düşük, protein yüksek → **yemlik**.',
          'Çıplak taneli arpa → kümes hayvanları; kavuzlu arpa → büyükbaş ve küçükbaş.',
          'Düz kılçıklı arpalarla yem değeri arttı; pürüzlü-testere dişli kılçıklar yemek borusuna zarar verir.',
          'Bira yapımı 2 aşama: **malt üretimi** ve **mayalama**.',
          'Dünyada ve Türkiye\'de buğdaydan sonra en çok ekilen serin iklim tahılı **arpa**.',
          'Hordeum spontaneum: Doğu Akdeniz. Hordeum agriocritron: Tibet, Afganistan, Kafkasya, Doğu Anadolu.'
        ] },
        { t: 'table', head: ['', 'Biralık arpa', 'Yemlik arpa'], rows: [
          ['Protein', '%8-12', '> %12 (yüksek)'],
          ['Diğer', 'Hektolitre ağırlığı en az 65 kg (maltlıkta 66-68 kg\'dan az olmamalı), 1000 tane ağırlığı en az 35 g, kavuzlu, unlu kesitli, iriliği homojen', 'Düşük kavuz oranı, kılçıkların dipten kırılmış olması'],
          ['En önemli unsur', 'Nişasta (kuru maddede %55-60)', '—']
        ] },
        { t: 'table', head: ['Arpa hastalığı', 'Etmen', 'Not'], rows: [
          ['Yaprak çizgi hastalığı', 'Helminthosporium gramineum', 'En önemli hastalıklardan'],
          ['Arpa yaprak lekesi', 'Helminthosporium sativum', ''],
          ['Kapalı rastık', 'Ustilago hordei', 'Ekimden önce **tohum ilaçlanmalı**'],
          ['Açık rastık', 'Ustilago nuda', 'İlaçlı mücadelesi **yok**; dayanıklı çeşit + ekim nöbeti'],
          ['Külleme', 'Erysipse graminis', '']
        ] }
      ] },
    { id: 'yulaf-cavdar', title: 'Yulaf, çavdar ve tritikale', src: 'Notlar: Yulaf ★★★, Çavdar ★★★, Tritikale ★★★',
      blocks: [
        { t: 'h', text: 'Yulaf (Avena sativa)' },
        { t: 'ul', items: [
          'Kırmızı yulaf (A. byzantina) ve beyaz yulaf (A. sativa); Türkiye\'de en çok **beyaz** yulaf.',
          'Karbonhidratı en az, protein (%13) ve yağı (%8) en fazla tahıl; çiftlik hayvanları için çok besleyici.',
          'Tohumdaki **avenin** nedeniyle koşu ve çeki hayvanları için tercih edilir.',
          'İklim istekleri en fazla serin iklim tahılı.',
          'Hasat: kuru ot için **hamur** kıvamında, silaj için **süt olum**, tohum için taneler **%40** olgunlaştığında.'
        ] },
        { t: 'h', text: 'Çavdar (Secale cereale)' },
        { t: 'ul', items: [
          'Soğuğa ve kurağa **en dayanıklı** tahıl.',
          'Tane: %75 karbonhidrat, %12.4 protein, %2 yağ; hayvan yemi, koyu ve kepekli ekmek.',
          'Zehirli **ergot** alkaloitleri bulunabilir; **%0.5** üzerinde ergot içeren tohum beslenmede kullanılmaz.',
          'Kendine uyuşmazlık nedeniyle yüksek oranda **yabancı döllenir**.',
          'Buğday ürününde çavdar oranı **%20**\'yi geçerse ürüne **mahlut** denir.'
        ] },
        { t: 'h', text: 'Tritikale (Triticum + Secale)' },
        { t: 'ul', items: [
          'Buğday × çavdar melezlemesiyle elde edilmiş **sentetik** tahıl.',
          'Buğdaya göre tohum daha iri, protein daha yüksek; lisin ve kükürtlü aminoasitlerce zengin.',
          'En önemli sorunu **tane kırışıklığı** ve **düşük un kalitesi** → daha çok hayvan yemi.'
        ] },
        { t: 'table', head: ['Tip', 'Melezleme', 'Kısır melez', 'Katlanınca', 'Kullanım'], rows: [
          ['Hekzaploid', 'T. durum (2n=28, AABB) × S. cereale (2n=14, RR)', 'ABR, 21 kromozom', 'AABBRR, **2n=42**', 'Tanesi için'],
          ['Oktaploid', 'T. aestivum (2n=42, AABBDD) × S. cereale (2n=14, RR)', 'ABDR, 28 kromozom', 'AABBDDRR, **2n=56**', 'Çayır tipi']
        ] }
      ] },
    { id: 'misir-celtik', title: 'Mısır, sorgum, çeltik ve kuşyemi', src: 'Notlar: Sıcak iklim tahılları ★★★',
      blocks: [
        { t: 'h', text: 'Mısır (Zea mays)' },
        { t: 'ul', items: [
          'Türkiye\'de ekonomik olarak: atdişi, sert, cin ve şeker mısır.',
          'Atdişi ve sert mısır: nişasta, şeker şurubu, mısırözü yağı, biyoetanol, hayvan yemi. Cin mısır → patlak mısır (çerez); şeker mısır → haşlanmış süt mısır, konserve.',
          'Sert mısır en fazla **Karadeniz**, atdişi en fazla **Akdeniz** Bölgesi\'nde.',
          'Tane mısırın **%75**\'i yem olarak tüketilir.',
          'Silaj veya hasıl için en uygun hasat: kuru madde **%32-35**, **hamur olum** dönemi.',
          'Mısır **C4** bitkisi; güneş enerjisini en etkili kullanan, birim alandan en fazla kuru madde üreten tahıl.',
          'Çimlenme minimumu 9-10 °C, en uygun büyüme 25-30 °C.',
          'Mısır ve sorgum **Nisan-Mayıs**ta, **4-6 cm** derinliğe ekilir; sıra arası 70-75 cm, sıra üzeri 20-25 cm; dekarda 6000-8000 bitki.'
        ] },
        { t: 'h', text: 'Sorgum ve darılar' },
        { t: 'ul', items: [
          'Darılar: kumdarı, sorgum, cindarı.',
          'Sorgum dünyada buğday, çeltik, mısır ve arpadan sonra en çok üretilen tahıl; mısıra göre kurağa ve kötü topraklara daha dayanıklı.',
          'Alt türler: kocadarı (ssp. bicolor), şeker darısı (ssp. saccharatum), süpürge darısı (ssp. technicus), sudan otu (ssp. sudanensis).',
          'Sorgum ve sudan otunda **HCN** oranı bitki **50-60 cm** boylanana kadar artar, sonra azalır.'
        ] },
        { t: 'h', text: 'Çeltik (Oryza sativa)' },
        { t: 'ul', items: [
          'Pirincin hammaddesi; karbonhidratı en yüksek (%80), yağı (%0.5) ve proteini (%7) en düşük tahıl.',
          'Su sıcaklığı minimum 12 °C, optimum 25-30 °C; 30 °C üstü zarar verir.',
          'Kavuzları soyulmuş, parlatılmamış tane: **kargo (brown rice)**.',
          'Uzun ve ekstra uzun taneli çeşitler: **lüks pirinç**. Tane boyu: kısa ≤ 5.5 mm, orta 5.51-6.60 mm, ekstra uzun > 7.50 mm.'
        ] },
        { t: 'h', text: 'Kuşyemi (Phalaris canariensis, 2n = 12)' },
        { t: 'ul', items: ['Yıllık yağışı 400-500 mm olan yerlerde yazlık yetişir, ekim nöbetine rahat girer.', 'Kök sistemi oldukça yüzlek (5-35 cm).'] }
      ] }
  ],

  bank: [
    /* ---- sınıflandırma ---- */
    mc('siniflandirma', 'Tarla bitkileri kaç ana grupta toplanır?', ['4', '2', '3', '5', '6'], 'Tahıllar, yemeklik baklagiller, endüstri bitkileri ve yem bitkileri.'),
    mc('siniflandirma', 'Aşağıdakilerden hangisi serin iklim tahılıdır?', ['Tritikale', 'Mısır', 'Çeltik', 'Sorgum', 'Kuşyemi'], 'Serin iklim tahılları: buğday, arpa, yulaf, çavdar, tritikale.'),
    mc('siniflandirma', 'Aşağıdakilerden hangisi sıcak iklim tahılı **değildir**?', ['Arpa', 'Mısır', 'Çeltik', 'Sorgum', 'Darılar'], 'Arpa serin iklim tahılıdır.'),
    mc('siniflandirma', 'Sıcak mevsim yemeklik baklagilleri hangi seçenekte birlikte verilmiştir?', ['Fasulye – Börülce', 'Mercimek – Nohut', 'Bakla – Bezelye', 'Nohut – Fasulye', 'Yonca – Korunga'], 'Serin mevsim: mercimek, nohut, bakla, bezelye. Sıcak mevsim: fasulye, börülce.', { 4: 'Yonca ve korunga baklagil yem bitkisidir, yemeklik baklagil değildir.' }),
    mc('siniflandirma', 'Aşağıdakilerden hangisi lif bitkisidir?', ['Jüt', 'Aspir', 'Taro', 'Anason', 'Korunga'], 'Lif bitkileri: pamuk, keten, kenevir, kapok, jüt, rami.'),
    mc('siniflandirma', 'Aşağıdakilerden hangisi nişasta bitkisidir?', ['Kassava', 'Kolza', 'Kenevir', 'Fiğ', 'Haşhaş'], 'Nişasta bitkileri: patates, tatlı patates, yerelması, kassava, taro.'),
    mc('siniflandirma', 'Aşağıdakilerden hangisi baklagil yem bitkisidir?', ['Korunga', 'Sudan otu', 'Sorgum', 'Ayrık', 'Yumak'], 'Baklagil yem bitkileri: yonca, korunga, fiğ, burçak, üçgül, yem bezelyesi. Diğerleri buğdaygil yem bitkisi.'),
    mc('siniflandirma', 'Endüstri bitkilerinin alt grupları arasında hangisi **yer almaz**?', ['Baklagil yem bitkileri', 'Yağ bitkileri', 'Lif bitkileri', 'Nişasta-şeker bitkileri', 'Tıbbi ve aromatik bitkiler'], 'Baklagil yem bitkileri "çayır-mera ve yem bitkileri" grubundadır.'),
    mc('siniflandirma', 'Melas ve biyoetanol hangi bitki grubunun kullanım alanındadır?', ['Nişasta-şeker bitkileri', 'Yağ bitkileri', 'Lif bitkileri', 'Yemeklik baklagiller', 'Tıbbi ve aromatik bitkiler'], 'Nişasta-şeker bitkileri: nişasta, şeker, alkol, biyoetanol, melas, yem.', { 1: 'Yağ bitkilerinden biyodizel elde edilir, biyoetanol değil.' }),
    mc('siniflandirma', 'Küspe ve biyodizel hangi grubun ürünüdür?', ['Yağ bitkileri', 'Nişasta-şeker bitkileri', 'Tahıllar', 'Lif bitkileri', 'Yem bitkileri'], 'Yağ bitkileri: yemeklik ve sanayi yağları, margarin, küspe, biyodizel.'),
    /* ---- Türkiye ---- */
    mc('turkiye', 'Türkiye\'de işlenen tarım alanı yaklaşık kaç milyon hektardır?', ['23.7', '15.8', '19.5', '14.6', '80'], 'Toplam arazi >80, işlenen tarım alanı 23.7 milyon ha.'),
    mc('turkiye', 'Türkiye\'de her yıl tarla bitkisi yetiştirilen alan yaklaşık kaç milyon hektardır?', ['15.8', '23.7', '11', '3.7', '21.5'], '15.8 milyon ha (%67). Nadas (3.7) eklenince 19.5 milyon ha.'),
    mc('turkiye', 'Türkiye\'de tarla tarımına ayrılan alanın yaklaşık %70\'inde hangi grup yetiştirilir?', ['Tahıllar', 'Endüstri bitkileri', 'Yem bitkileri', 'Yemeklik baklagiller', 'Tıbbi bitkiler'], 'Tahıl %70, endüstri %14, yem %11, baklagil %5.'),
    mc('turkiye', 'Türkiye\'de nadas uygulaması nedeniyle her yıl boş bırakılan alan kaç milyon hektardır?', ['3.7', '4.2', '1.8', '2.2', '14.6'], 'Nadas 3.7 milyon ha (%16).'),
    mc('turkiye', 'Türkiye\'de yemeklik baklagil ekim alanı yaklaşık ne kadardır?', ['0.8 milyon ha (%5)', '1.8 milyon ha (%11)', '2.2 milyon ha (%14)', '11 milyon ha (%70)', '3.7 milyon ha (%16)'], 'Yemeklik baklagiller (bakliyat) 0.8 milyon ha, %5.'),
    mc('turkiye', 'Türkiye\'de çayır-mera arazisi kaç milyon hektardır?', ['14.6', '21.5', '23.7', '4.2', '15.8'], 'Çayır-mera 14.6, orman 21.5 milyon ha.', { 1: '21.5 milyon ha orman arazisidir.' }),
    mc('turkiye', 'Türkiye\'de en fazla üretilen tahıllar hangileridir?', ['Buğday, arpa, mısır', 'Buğday, çeltik, mısır', 'Arpa, yulaf, çavdar', 'Mısır, çeltik, sorgum', 'Buğday, yulaf, tritikale'], 'Türkiye: buğday, arpa, mısır. Dünya: buğday, çeltik, mısır.', { 1: 'Bu sıralama dünya için geçerlidir.' }),
    mc('turkiye', 'Dünyada en fazla üretilen baklagiller hangileridir?', ['Fasulye ve bezelye', 'Nohut ve mercimek', 'Bakla ve börülce', 'Soya ve yerfıstığı', 'Mercimek ve fasulye'], 'Dünya: fasulye, bezelye. Türkiye: nohut, mercimek.', { 1: 'Nohut ve mercimek Türkiye\'de en çok üretilen baklagillerdir.' }),
    mc('turkiye', 'Türkiye\'de en fazla üretilen yağ bitkileri hangileridir?', ['Ayçiçeği ve zeytin', 'Soya ve kolza', 'Aspir ve susam', 'Yerfıstığı ve soya', 'Pamuk ve keten'], 'Türkiye: ayçiçeği ve zeytin. Dünya: soya ve kolza.'),
    mc('turkiye', 'Şeker bitkisi üretimi için hangisi doğrudur?', ['Türkiye\'de şeker bitkisi üretiminin tamamı şekerpancarıdır', 'Türkiye\'de şekerkamışı %80 paya sahiptir', 'Dünyada şekerpancarı %80 paya sahiptir', 'Dünyada sadece şekerkamışı üretilir', 'Türkiye\'de şeker darısı en çok üretilen şeker bitkisidir'], 'Dünyada şekerkamışı %80, şekerpancarı %20; Türkiye\'de sadece şekerpancarı (%100).'),
    mc('turkiye', 'Türkiye\'de tarım alanlarının yüzde kaçında (nadas dahil) tarla bitkileri yetiştirilir?', ['%83', '%67', '%70', '%75', '%16'], 'Nadas dahil %83.'),
    /* ---- sistemler ---- */
    mc('sistemler', 'Yıllık yağışı 500 mm\'ye kadar olan, yağışın düzensiz dağıldığı bölgelerde sulamasız yapılan tarım sistemi hangisidir?', ['Kuru tarım', 'Sulu tarım', 'Nemli tarım', 'Nadas tarımı', 'Organik tarım'], 'Kuru tarım: ≤500 mm, sulamasız, yaygın nadas.'),
    mc('sistemler', 'Ülkemizde nemli tarıma en uygun bölge hangisidir?', ['Doğu Karadeniz', 'İç Anadolu', 'Güneydoğu Anadolu', 'Akdeniz', 'Trakya'], 'Nemli tarım >750 mm düzenli yağış ister; en uygun bölge Doğu Karadeniz.'),
    mc('sistemler', 'Hangi tarım sisteminde temel sorun suyun fazlalığıdır?', ['Nemli tarım', 'Kuru tarım', 'Sulu tarım', 'Nadaslı kuru tarım', 'Hiçbiri'], 'Nemli tarımda yağış >750 mm ve düzenlidir; sulama yapılmaz.'),
    mc('sistemler', 'Sulu tarım için hangisi doğrudur?', ['Yağışı 750 mm\'nin altındaki kuru tarım bölgelerinde sulama ile yapılır ve nadasa gerek kalmaz', 'Yağışı 750 mm\'nin üzerindeki bölgelerde uygulanır', 'Sulamasız yapılır ve nadas yaygındır', 'Sorunu suyun fazlalığıdır', 'Sadece Doğu Karadeniz\'de uygulanır'], 'Sulu tarım: <750 mm bölgelerde sulama; nadas gerekmez.'),
    /* ---- tahıl genel ---- */
    mc('tahil-genel', 'Tahıllar hangi familyada yer alır?', ['Gramineae (Buğdaygiller)', 'Fabaceae', 'Rosaceae', 'Solanaceae', 'Brassicaceae'], 'Tahıllar adı altında Gramineae familyasına giren cinsler incelenir.'),
    mc('tahil-genel', 'Tahıl tanesine "karyopsis" denmesinin nedeni nedir?', ['Meyve kabuğu ile tohum kabuğunun birbirine yapışık olması', 'Tanenin kavuzlu olması', 'Embriyonun una karışması', 'Endospermin camsı olması', 'Tanenin kılçıklı olması'], 'Tohum kabuğu ile meyve kabuğu yapışık olduğu için tahıl tanelerine karyopsis denir.'),
    mc('tahil-genel', 'Aşağıdakilerden hangisi kavuzlu tohumlu bir tahıldır?', ['Yulaf', 'Buğday', 'Çavdar', 'Tritikale', 'Mısır'], 'Kavuzlu: arpa, yulaf, çeltik, bazı darılar.'),
    mc('tahil-genel', 'Değirmende tahıl tanesinin hangi kısmı una dönüşür?', ['Endosperm', 'Kabuk', 'Embriyo', 'Aleuron tabakası', 'Skutellum'], 'Kabuk ve embriyo kepek, endosperm un olur.'),
    mc('tahil-genel', 'Makarnalık buğdayın Latince adı hangisidir?', ['Triticum durum', 'Triticum aestivum', 'Hordeum distichum', 'Secale cereale', 'Avena sativa'], 'T. aestivum ekmeklik, T. durum makarnalık.'),
    mc('tahil-genel', 'Altı sıralı arpanın Latince adı hangisidir?', ['Hordeum vulgare', 'Hordeum distichum', 'Hordeum spontaneum', 'Avena byzantina', 'Oryza sativa'], 'H. distichum iki sıralı, H. vulgare altı sıralı.'),
    mc('tahil-genel', 'Kırmızı yulafın Latince adı hangisidir?', ['Avena byzantina', 'Avena sativa', 'Secale cereale', 'Phalaris canariensis', 'Panicum miliaceum'], 'Kırmızı yulaf A. byzantina, beyaz yulaf A. sativa.'),
    mc('tahil-genel', 'Cin mısır hangi alt grupla gösterilir?', ['Zea mays everta', 'Zea mays indendata', 'Zea mays indurata', 'Zea mays saccharata', 'Zea mays sativa'], 'indendata atdişi, indurata sert, everta cin, saccharata şeker mısır.'),
    mc('tahil-genel', '"Koca darı" hangisidir?', ['Sorgum bicolor', 'Panicum miliaceum', 'Seteria italica', 'Phalaris canariensis', 'S. bicolor ssp. saccharatum'], 'Panicum miliaceum kum darı, Seteria italica cin darı, ssp. saccharatum şeker darısı.'),
    mc('tahil-genel', 'Çavdarın orijini (anavatanı) aşağıdakilerden hangisidir?', ['Doğu Anadolu, Kafkasya', 'Hazar Denizi civarı, Karadeniz Bölgesi', 'Orta ve Güney Amerika', 'Hindistan, Çin', 'Batı Çin, Tibet'], 'Çavdar: Doğu Anadolu ve Kafkasya (MÖ 4000-2000).', { 1: 'Bu yulafın orijinidir.' }),
    mc('tahil-genel', 'Orijini Hazar Denizi civarı ve Karadeniz Bölgesi olan tahıl hangisidir?', ['Yulaf', 'Çavdar', 'Buğday', 'Çeltik', 'Mısır'], 'Yulaf: Hazar Denizi civarı, Karadeniz Bölgesi (MÖ 2000).'),
    mc('tahil-genel', 'Çıplak tohumlu bir tahıl tanesinde endospermin payı yaklaşık ne kadardır?', ['%85', '%12', '%3', '%50', '%70'], 'Kabuk %12, endosperm %85, embriyo %3.'),
    mc('tahil-genel', 'Buğday tanesinde kepeği oluşturan kısımlar hangileridir?', ['Kabuk ve aleuron tabakası', 'Endosperm ve embriyo', 'Skutellum ve endosperm', 'Yalnız embriyo', 'Yalnız endosperm'], 'Kabuk (meyve kabuğu, tohum kabuğu, hialin tabaka) + aleuron = kepek, tanenin %12-13\'ü.'),
    mc('tahil-genel', 'Embriyonun una karıştırılmamasının nedeni nedir?', ['Yüksek protein ve yağ içermesi', 'Nişastasının çok yüksek olması', 'Camsı yapıda olması', 'Tanenin %50\'sini oluşturması', 'Kavuzla kaplı olması'], 'Embriyo (ruşeym) tane ağırlığının %2-3\'ü; yüksek protein ve yağ nedeniyle una karıştırılmaz.'),
    mc('tahil-genel', 'Meyve kabuğunun (pericarp) en dış tabakası hangisidir?', ['Üst epidermis (exocarp)', 'Orta epidermis (mesocarp)', 'Enlem hücreler', 'İç epidermis (endocarp)', 'Aleuron'], 'Dıştan içe: exocarp, mesocarp, enlem (transversal) hücreler, endocarp.'),
    /* ---- serin/sıcak ---- */
    mc('serin-sicak', 'Kışlık çeşitlerin başak, çiçek ve tane oluşturabilmesi için 1-5 °C\'de kalması gerekir. Bu olaya ne ad verilir?', ['Vernalizasyon', 'Nadas', 'Karyopsis', 'Dormansi', 'Fotoperiyot'], 'Vernalizasyon: 5-60 gün 1-5 °C.'),
    mc('serin-sicak', 'Serin iklim tahıllarında minimum çimlenme sıcaklığı hangi aralıktadır?', ['1-4 °C', '8-12 °C', '20-25 °C', '30-35 °C', '9-10 °C'], 'Serin 1-4 °C, sıcak iklim tahılları 8-12 °C.'),
    mc('serin-sicak', 'Sıcak iklim tahıllarında optimum çimlenme sıcaklığı hangisidir?', ['30-35 °C', '20-25 °C', '8-12 °C', '1-4 °C', '40-45 °C'], 'Serin iklim 20-25 °C, sıcak iklim 30-35 °C.'),
    mc('serin-sicak', 'Düşük sıcaklığa ve dona en dayanıklı tahıl hangisidir?', ['Çavdar', 'Yulaf', 'Arpa', 'Makarnalık buğday', 'Mısır'], 'En dayanıklı çavdar, en hassas yulaf.', { 1: 'Yulaf dona en hassas olandır.' }),
    mc('serin-sicak', 'Tahıllar içinde toprak istekleri en fazla olan hangisidir?', ['Arpa', 'Çavdar', 'Yulaf', 'Buğday', 'Tritikale'], 'Arpa, besin maddelerinin toprağın üst katlarında bol ve hazır olmasını ister.'),
    mc('serin-sicak', 'Tahıllar içinde protein ve yağ oranı en yüksek olan hangisidir?', ['Yulaf', 'Çeltik', 'Mısır', 'Arpa', 'Çavdar'], 'Protein en fazla yulaf (%13.3), yağ en fazla yulaf (%8); ikisinde de en az çeltik.', { 1: 'Çeltik tam tersine protein ve yağı en düşük tahıldır.' }),
    mc('serin-sicak', 'Ekmeklik buğdaylar kısa süreli olarak kaç dereceye kadar soğuğa dayanabilir?', ['-35 °C', '-15 °C', '-10 °C', '-5 °C', '-50 °C'], 'Ekmeklik -35 °C\'ye kadar; makarnalık -15 °C\'den sonra zarar görür.'),
    mc('serin-sicak', 'Türkiye\'de 11 milyon ha tahıl alanının dağılımı hangisinde doğru verilmiştir?', ['Buğday %70, arpa %22, mısır %6', 'Buğday %50, arpa %30, mısır %20', 'Buğday %85, arpa %15', 'Arpa %70, buğday %22, mısır %6', 'Buğday %70, mısır %22, arpa %6'], 'Buğday %70, arpa %22, mısır %6, diğerleri %2.'),
    mc('serin-sicak', 'Türkiye\'de çeltik üretiminin yaklaşık %70\'i hangi bölgede yapılır?', ['Marmara', 'Karadeniz', 'Akdeniz', 'Ege', 'Güneydoğu Anadolu'], 'Çeltik: %70 Marmara, %25 Karadeniz.'),
    mc('serin-sicak', 'Tahıllar içinde su isteği en fazla olan hangisidir?', ['Çeltik', 'Mısır', 'Kuşyemi', 'Arpa', 'Sorgum'], 'Çeltik 1100-1300 mm; mısır 400-750 mm.'),
    mc('serin-sicak', 'Serin iklim tahılları içinde minimum çimlenme sıcaklığı en düşük olanlar hangileridir?', ['Çavdar ve tritikale (1-2 °C)', 'Buğday ve arpa (3-4 °C)', 'Yulaf (4-5 °C)', 'Mısır (9-10 °C)', 'Arpa ve yulaf (4-5 °C)'], 'Çavdar ve tritikale 1-2, buğday ve arpa 3-4, yulaf 4-5 °C.'),
    mc('serin-sicak', 'Serin iklim tahılları için hangisi **yanlıştır**?', ['Kısa gün bitkisidirler', 'Vernalizasyon isterler', 'Toprak seçiciliği en az olan kültür bitkileridir', 'En serin ve kurak bölgelerde bile yetişirler', 'Kışlık ekimleri Ekim-Kasım aylarındadır'], 'Tüm serin iklim tahılları uzun gün bitkisidir.'),
    /* ---- buğday-arpa ---- */
    mc('bugday-arpa', 'Buğday ekimi sonbaharda ekim derinliğindeki toprak sıcaklığı kaç derece iken yapılır?', ['5-8 °C', '1-2 °C', '12-15 °C', '20-25 °C', '0 °C'], 'Toprak sıcaklığı 5-8 °C iken.'),
    mc('bugday-arpa', 'Türkiye\'de üretilen buğdayın yaklaşık ne kadarı makarnalıktır?', ['%15', '%85', '%50', '%30', '%5'], '~20 milyon tonun %15\'i makarnalık, %85\'i ekmeklik.'),
    mc('bugday-arpa', 'Taneleri camsı, protein oranı yüksek olan ve irmik iriliğinde un veren buğday hangisidir?', ['Triticum durum', 'Triticum aestivum', 'Hordeum vulgare', 'Triticosecale', 'Secale cereale'], 'Makarnalık buğday (T. durum): makarna ve bulgur.'),
    mc('bugday-arpa', 'Malt üretimine en uygun arpa hangisidir?', ['İki sıralı arpa (Hordeum distichum)', 'Altı sıralı arpa (Hordeum vulgare)', 'Çıplak taneli arpa', 'Hordeum spontaneum', 'Pürüzlü kılçıklı arpa'], 'İki sıralı arpa homojen ve iri tanelidir; malta çok uygundur.', { 1: 'Altı sıralı arpa protein yüksek, nişasta düşük olduğu için yemlik değerlendirilir.' }),
    mc('bugday-arpa', 'Biralık arpada protein oranı ne olmalıdır?', ['%8-12', '> %12', '%2-4', '%20 üzeri', '%55-60'], 'Biralık arpa: protein %8-12; yemlik arpa: >%12. %55-60 nişasta oranıdır.'),
    mc('bugday-arpa', 'İlaçlı mücadelesi olmayan, dayanıklı çeşit ve ekim nöbeti uygulanan arpa hastalığı hangisidir?', ['Arpa açık rastığı (Ustilago nuda)', 'Arpa kapalı rastığı (Ustilago hordei)', 'Külleme (Erysipse graminis)', 'Arpa yaprak lekesi (Helminthosporium sativum)', 'Yaprak çizgi hastalığı'], 'Açık rastığın ilaçlı mücadelesi yoktur. Kapalı rastıkta ekimden önce tohum ilaçlanır.', { 1: 'Kapalı rastıkta ekimden önce tohum ilaçlanır.' }),
    mc('bugday-arpa', 'Arpanın en önemli hastalıklarından "yaprak çizgi hastalığı"nın etmeni hangisidir?', ['Helminthosporium gramineum', 'Helminthosporium sativum', 'Ustilago hordei', 'Ustilago nuda', 'Erysipse graminis'], 'Yaprak çizgi: H. gramineum; yaprak lekesi: H. sativum.'),
    mc('bugday-arpa', 'Biralık arpanın en önemli unsuru hangisidir?', ['Nişasta', 'Protein', 'Yağ', 'Kavuz', 'Kılçık'], 'Arpa kuru maddede %55-60 nişasta içerir; nişasta biralık arpanın en önemli unsurudur.'),
    mc('bugday-arpa', 'Çıplak taneli arpalar daha çok hangi hayvanların beslenmesinde kullanılır?', ['Kümes hayvanları', 'Büyükbaş hayvanlar', 'Küçükbaş hayvanlar', 'Koşu atları', 'Balıklar'], 'Çıplak taneli → kümes hayvanları; kavuzlu → büyükbaş ve küçükbaş.'),
    mc('bugday-arpa', 'Dünyada en fazla buğday üreten ülke hangisidir?', ['Çin', 'Türkiye', 'ABD', 'Hindistan', 'Rusya'], 'Notlara göre Çin.'),
    mc('bugday-arpa', 'Biralık arpa için hangisi **yanlıştır**?', ['Kavuz oranının düşük ve kılçıklarının dipten kırılmış olması istenir', 'Hektolitre ağırlığı en az 65 kg olmalıdır', '1000 tane ağırlığı en az 35 g olmalıdır', 'Kavuzlu ve unlu kesitli olmalıdır', 'Tane iriliklerinin homojen olması istenir'], 'Düşük kavuz ve dipten kırılmış kılçık yemlik arpa özelliğidir.'),
    mc('bugday-arpa', 'Tibet, Afganistan, Kafkasya ve Doğu Anadolu\'da yaygın olan arpa türü hangisidir?', ['Hordeum agriocritron', 'Hordeum spontaneum', 'Hordeum vulgare', 'Hordeum distichum', 'Hordeum sativum'], 'H. spontaneum Doğu Akdeniz çevresinde yaygındır.'),
    /* ---- yulaf-çavdar-tritikale ---- */
    mc('yulaf-cavdar', 'Tohumundaki "avenin" maddesi nedeniyle koşu ve çeki hayvanları için tercih edilen tahıl hangisidir?', ['Yulaf', 'Arpa', 'Çavdar', 'Mısır', 'Tritikale'], 'Avenin yulafta bulunur.'),
    mc('yulaf-cavdar', 'Yulafı silaj amaçlı hasat etmek için en uygun dönem hangisidir?', ['Süt olum', 'Hamur olum', 'Taneler %40 olgunlaştığında', 'Tam olum', 'Çiçeklenme öncesi'], 'Kuru ot için hamur, silaj için süt olum, tohum için %40 olgunluk.'),
    mc('yulaf-cavdar', 'Buğday ürününde çavdar oranı %20\'yi geçerse bu ürüne ne ad verilir?', ['Mahlut', 'Ergot', 'Kargo', 'Hasıl', 'Kepek'], 'Mahlut. Ergot ise çavdarda bulunabilen zehirli alkaloittir.'),
    mc('yulaf-cavdar', 'Çavdar tohumunda ergot oranı yüzde kaçı geçerse tohum beslenmede kullanılmaz?', ['%0.5', '%5', '%20', '%2', '%12.4'], '%0.5\'in üzerinde ergot içeren tohumlar kullanılmaz.'),
    mc('yulaf-cavdar', 'Çavdarın yüksek oranda yabancı döllenmesinin nedeni nedir?', ['Kendine uyuşmazlık', 'Kavuzlu olması', 'Ergot içermesi', 'Kısa gün bitkisi olması', 'Vernalizasyon istememesi'], 'Kendine uyuşmazlık nedeniyle yabancı döllenir.'),
    mc('yulaf-cavdar', 'Tritikalenin en önemli sorunu nedir?', ['Tane kırışıklığı ve düşük un kalitesi', 'Soğuğa dayanıksızlık', 'Düşük protein', 'Kavuz oranının yüksekliği', 'Ergot birikimi'], 'Bu yüzden daha çok hayvan yemi olarak değerlendirilir.'),
    mc('yulaf-cavdar', 'Hekzaploid tritikalenin kromozom sayısı ve genomu hangisidir?', ['2n=42, AABBRR', '2n=56, AABBDDRR', '2n=28, AABB', '2n=21, ABR', '2n=14, RR'], 'T. durum × S. cereale → ABR (21, kısır) → katlanınca AABBRR, 2n=42.', { 1: '2n=56 oktaploid tritikaledir.', 3: '21 kromozomlu ABR kısır melezdir; katlanmadan önceki hâli.' }),
    mc('yulaf-cavdar', 'Çayır tipi olarak kullanılan tritikale hangisidir?', ['Oktaploid tritikale (2n=56)', 'Hekzaploid tritikale (2n=42)', 'Tetraploid tritikale', 'Diploid tritikale', 'Hiçbiri'], 'Oktaploid çayır tipi, hekzaploid tanesi için yetiştirilir.'),
    mc('yulaf-cavdar', 'İklim istekleri en fazla olan serin iklim tahılı hangisidir?', ['Yulaf', 'Çavdar', 'Buğday', 'Arpa', 'Tritikale'], 'Notlarda: iklim istekleri en fazla olan serin iklim tahılı yulaftır.'),
    mc('yulaf-cavdar', 'Türkiye\'de en fazla yetiştirilen yulaf hangisidir?', ['Beyaz yulaf (Avena sativa)', 'Kırmızı yulaf (Avena byzantina)', 'Çıplak yulaf', 'Yabani yulaf', 'Kış yulafı'], 'Türkiye\'de en fazla beyaz yulaf yetiştirilir.'),
    /* ---- mısır-çeltik ---- */
    mc('misir-celtik', 'Sert mısır Türkiye\'de en fazla hangi bölgede yetiştirilir?', ['Karadeniz', 'Akdeniz', 'Ege', 'Marmara', 'İç Anadolu'], 'Sert mısır Karadeniz, atdişi mısır Akdeniz.', { 1: 'Akdeniz atdişi mısırın en çok yetiştiği bölgedir.' }),
    mc('misir-celtik', 'Silaj veya hasıl için mısırın en uygun hasat zamanı hangisidir?', ['Kuru maddenin %32-35 olduğu hamur olum dönemi', 'Süt olum dönemi', 'Tam olum dönemi', 'Çiçeklenme dönemi', 'Kuru maddenin %15 olduğu dönem'], 'Hamur olum, KM %32-35.'),
    mc('misir-celtik', 'Tane mısırın yaklaşık ne kadarı yem olarak tüketilir?', ['%75', '%25', '%50', '%90', '%15'], 'Tane mısırın %75\'i yem.'),
    mc('misir-celtik', 'Sorgum ve sudan otunda HCN oranı için hangisi doğrudur?', ['Bitki 50-60 cm boylanana kadar artar, sonra azalır', 'Bitki boylandıkça sürekli artar', 'Çimlenmeden itibaren sürekli azalır', 'Sadece tanede bulunur', 'Hasattan sonra oluşur'], 'HCN 50-60 cm boya kadar artar, sonra azalır.'),
    mc('misir-celtik', 'Mısır ve sorgumun ekim zamanı ve derinliği hangisidir?', ['Nisan-Mayıs, 4-6 cm', 'Ekim-Kasım, 4-6 cm', 'Şubat-Mart, 10-12 cm', 'Nisan-Mayıs, 15-20 cm', 'Haziran, 1-2 cm'], 'Nisan-Mayıs, 4-6 cm; sıra arası 70-75 cm.'),
    mc('misir-celtik', 'Güneş enerjisini en etkili kullanan ve birim alandan en fazla kuru madde üreten C4 bitkisi tahıl hangisidir?', ['Mısır', 'Buğday', 'Çeltik', 'Arpa', 'Yulaf'], 'Mısır C4 bitkisidir.'),
    mc('misir-celtik', 'Dünyada buğday, çeltik, mısır ve arpadan sonra en fazla üretilen tahıl hangisidir?', ['Sorgum', 'Yulaf', 'Çavdar', 'Kuşyemi', 'Tritikale'], 'Sorgum; kurağa ve kötü topraklara mısırdan dayanıklı.'),
    mc('misir-celtik', 'Çiçek kavuzları soyulmuş, parlatılmamış çeltik tanesine ne denir?', ['Kargo (brown rice)', 'Lüks pirinç', 'Mahlut', 'Hasıl', 'Kepek'], 'Kargo. Uzun ve ekstra uzun taneli çeşitlere ticarette lüks pirinç denir.'),
    mc('misir-celtik', 'Çeltik için optimum su sıcaklığı hangisidir?', ['25-30 °C', '12-15 °C', '5-8 °C', '35-40 °C', '18-20 °C'], 'Minimum 12 °C, optimum 25-30 °C; 30 °C üstü zarar verir.'),
    mc('misir-celtik', 'Süpürge darısı hangi alt türdür?', ['Sorgum bicolor ssp. technicus', 'ssp. saccharatum', 'ssp. sudanensis', 'ssp. bicolor', 'Panicum miliaceum'], 'Kocadarı bicolor, şeker darısı saccharatum, süpürge darısı technicus, sudan otu sudanensis.'),
    mc('misir-celtik', 'Kuşyemi (Phalaris canariensis) için hangisi doğrudur?', ['Kök sistemi yüzlektir (5-35 cm)', 'Kışlık ekilir ve vernalizasyon ister', 'Yıllık 1100 mm yağış ister', 'Kromozom sayısı 2n=42\'dir', 'Kazık köklüdür, 2 m derine iner'], 'Yüzlek kök (5-35 cm), 2n=12, 400-500 mm yağışta yazlık yetişir.'),

    /* ---- Doğru / Yanlış ---- */
    tf('siniflandirma', 'Hayvan beslenmesinde değerlendirilen çayır ve meralar da tarla bitkileri içinde yer alır.', true, 'Notlarda açıkça belirtilir.'),
    tf('siniflandirma', 'Bakla ve bezelye sıcak mevsim baklagilleridir.', false, 'Bakla ve bezelye serin mevsim baklagilleridir; sıcak mevsim: fasulye, börülce.'),
    tf('siniflandirma', 'Kenevir ve rami lif bitkileridir.', true, 'Lif bitkileri: pamuk, keten, kenevir, kapok, jüt, rami.'),
    tf('siniflandirma', 'Sudan otu baklagil yem bitkisidir.', false, 'Sudan otu buğdaygil yem bitkisidir.'),
    tf('turkiye', 'Türkiye\'de tarla tarımına ayrılan alanın %14\'ünde endüstri bitkileri yetiştirilir.', true, 'Endüstri bitkileri 2.2 milyon ha, %14.'),
    tf('turkiye', 'Dünyada en fazla üretilen yağ bitkileri ayçiçeği ve zeytindir.', false, 'Dünyada soya ve kolza; ayçiçeği ve zeytin Türkiye\'de.'),
    tf('turkiye', 'Türkiye\'de nişasta bitkisi üretiminin yaklaşık %99\'u patatestir.', true, 'Patates %99, bir miktar tatlı patates.'),
    tf('turkiye', 'Türkiye\'de orman arazisi 14.6 milyon hektardır.', false, 'Orman 21.5 milyon ha; 14.6 milyon ha çayır-mera.'),
    tf('sistemler', 'Kuru tarım alanları Türkiye tarla alanlarının %75\'ten fazlasını oluşturur.', true, 'Yaygın olarak nadas uygulanır.'),
    tf('sistemler', 'Sulu tarımda nadas uygulaması zorunludur.', false, 'Sulu tarımda nadasa gerek kalmaz.'),
    tf('tahil-genel', 'Mısır çıplak tohumlu bir tahıldır.', true, 'Çıplak: buğday, çavdar, tritikale, mısır.'),
    tf('tahil-genel', 'Çeltik çıplak tohumlu bir tahıldır.', false, 'Çeltik kavuzludur (arpa, yulaf, çeltik, bazı darılar).'),
    tf('tahil-genel', 'Buğdayın orijin merkezlerinden biri Anadolu\'dur.', true, 'Buğday: Anadolu, İran, Irak, Suriye, Filistin, Mısır, K. Hindistan.'),
    tf('tahil-genel', 'Ortalama un randımanı %70\'tir.', true, 'Endosperm tanenin %80-85\'i, un randımanı ortalama %70.'),
    tf('serin-sicak', 'Dona en hassas serin iklim tahılı yulaftır.', true, 'En dayanıklı çavdar, en hassas yulaf.'),
    tf('serin-sicak', 'Karbonhidrat oranı en yüksek tahıl yulaftır.', false, 'Karbonhidrat en fazla çeltikte (%80), en az yulafta (%66).'),
    tf('serin-sicak', 'Yazlık ekim Şubat-Mart aylarında yapılır.', true, 'Kışlık Ekim-Kasım, yazlık Şubat-Mart.'),
    tf('serin-sicak', 'Mısır en fazla Akdeniz, Güneydoğu ve Ege bölgelerinde yetiştirilir.', true, 'Çeltik ise Marmara ve Karadeniz\'de.'),
    tf('bugday-arpa', 'Ekmeklik buğdayın taneleri camsı ve protein oranı yüksektir.', false, 'Bu makarnalık buğday özelliğidir; ekmeklik buğday unsu, protein düşük, nişasta yüksek.'),
    tf('bugday-arpa', 'Bira yapımı malt üretimi ve mayalama olmak üzere iki aşamalıdır.', true, 'Notlarda bu iki aşama verilmiştir.'),
    tf('bugday-arpa', 'Arpa kapalı rastığına karşı ekimden önce tohum ilaçlanmalıdır.', true, 'Kapalı rastık (Ustilago hordei).'),
    tf('bugday-arpa', 'Pürüzlü-testere dişli kılçıklar arpanın yem değerini artırır.', false, 'Yemek borusuna zarar verir; düz kılçıklı arpalarla yem değeri artmıştır.'),
    tf('yulaf-cavdar', 'Tritikale, buğdaya göre lisin ve kükürtlü aminoasitler bakımından daha zengindir.', true, 'Tohum daha iri, protein daha yüksek.'),
    tf('yulaf-cavdar', 'Çavdar tahıllar içinde soğuğa ve kurağa en dayanıklı türdür.', true, 'Notlarda böyle geçer.'),
    tf('yulaf-cavdar', 'Oktaploid tritikale Triticum durum ile Secale cereale melezidir.', false, 'Oktaploid: T. aestivum × S. cereale. T. durum ile hekzaploid elde edilir.'),
    tf('misir-celtik', 'Mısırda çimlenme minimumu 9-10 °C\'dir.', true, 'En uygun büyüme sıcaklığı 25-30 °C.'),
    tf('misir-celtik', 'Sorgum mısıra göre kurağa ve kötü topraklara daha az dayanıklıdır.', false, 'Sorgum mısıra göre daha dayanıklıdır.'),
    tf('misir-celtik', 'Uzun ve ekstra uzun taneli pirinç çeşitlerine ticarette "lüks pirinç" denir.', true, 'Ekstra uzun > 7.50 mm.'),

    /* ---- Boşluk doldurma ---- */
    fill('siniflandirma', 'Serin iklim tahılları: buğday, arpa, yulaf, çavdar ve ____.', ['tritikale'], 'Tritikale buğday × çavdar melezidir.'),
    fill('siniflandirma', 'Sıcak mevsim yemeklik baklagilleri fasulye ve ____ dir.', ['börülce'], 'Serin mevsim: mercimek, nohut, bakla, bezelye.'),
    fill('turkiye', 'Türkiye\'de işlenen tarım alanı ____ milyon hektardır.', ['23.7', '23,7'], ''),
    fill('turkiye', 'Türkiye\'de her yıl ____ milyon hektar alan nadas nedeniyle boş bırakılır.', ['3.7', '3,7'], 'Nadas %16.'),
    fill('turkiye', 'Türkiye\'de tarla alanının %11\'inde ____ bitkileri yetiştirilir.', ['yem'], 'Yem bitkileri 1.8 milyon ha.'),
    fill('turkiye', 'Dünyada şeker bitkisi üretiminin %80\'i ____ dır.', ['şekerkamışı', 'şeker kamışı'], 'Türkiye\'de ise sadece şekerpancarı.'),
    fill('sistemler', 'Kuru tarım, yıllık yağışı ____ mm\'ye kadar olan bölgelerde sulamasız yapılır.', ['500'], ''),
    fill('sistemler', 'Nemli tarım yıllık yağışı ____ mm\'nin üzerinde olan bölgelerde uygulanır.', ['750'], ''),
    fill('tahil-genel', 'Tohum kabuğu ile meyve kabuğu yapışık olduğu için tahıl tanelerine ____ denir.', ['karyopsis'], ''),
    fill('tahil-genel', 'Tahıllar ____ (Buğdaygiller) familyasında incelenir.', ['Gramineae', 'graminae'], ''),
    fill('tahil-genel', 'Değirmende kabuk ve embriyo "____", endosperm "un" olur.', ['kepek'], ''),
    fill('tahil-genel', 'Ekmeklik buğdayın Latince adı Triticum ____ dur.', ['aestivum'], 'Makarnalık: Triticum durum.'),
    fill('tahil-genel', 'Şeker mısır, Zea mays ____ olarak gösterilir.', ['saccharata'], 'everta cin, indurata sert, indendata atdişi.'),
    fill('serin-sicak', 'Kışlık çeşitlerin başak, çiçek ve tane oluşturması için 1-5 °C\'de kalmalarına ____ denir.', ['vernalizasyon'], ''),
    fill('serin-sicak', 'Tahıllar içinde toprak istekleri en fazla olan ____ dır.', ['arpa'], ''),
    fill('serin-sicak', 'Çeltik, tahıllar içinde su isteği en fazla olan cinstir: ____ mm.', ['1100-1300', '1100 - 1300', '1100 1300'], 'Mısır 400-750 mm.'),
    fill('serin-sicak', 'Tüm serin iklim tahılları ____ gün bitkisidir.', ['uzun'], ''),
    fill('bugday-arpa', 'Biralık arpada 1000 tane ağırlığı en az ____ g olmalıdır.', ['35'], 'Hektolitre en az 65 kg, protein %8-12.'),
    fill('bugday-arpa', 'Arpa açık rastığının etmeni Ustilago ____ dır.', ['nuda'], 'Kapalı rastık: Ustilago hordei.'),
    fill('bugday-arpa', 'Buğday ekimi, ekim derinliğindeki toprak sıcaklığı ____ °C iken yapılır.', ['5-8', '5 - 8', '5 8'], ''),
    fill('bugday-arpa', 'Malt üretimine çok uygun olan arpa ____ sıralı arpadır.', ['iki', '2'], 'Hordeum distichum.'),
    fill('yulaf-cavdar', 'Yulaf tohumlarındaki ____ maddesi nedeniyle koşu ve çeki hayvanları için tercih edilir.', ['avenin'], ''),
    fill('yulaf-cavdar', 'Buğday ürününde çavdar oranı %20\'yi geçerse bu ürüne ____ denir.', ['mahlut'], ''),
    fill('yulaf-cavdar', 'Oktaploid tritikalenin kromozom sayısı 2n = ____ dir.', ['56'], 'Hekzaploid 2n=42.'),
    fill('misir-celtik', 'Mısır ____ bitkisidir; güneş enerjisini en etkili kullanan tahıldır.', ['C4'], ''),
    fill('misir-celtik', 'Çiçek kavuzları soyulmuş, parlatılmamış taneye "____" (brown rice) denir.', ['kargo'], ''),
    fill('misir-celtik', 'Atdişi mısır en fazla ____ Bölgesi\'nde yetiştirilir.', ['Akdeniz'], 'Sert mısır en fazla Karadeniz.'),

    /* ---- Klasik ---- */
    op('siniflandirma', 'Tarla bitkilerini ana gruplarına ve alt gruplarına ayırarak sınıflandırınız.', [
      'Tahıllar: serin iklim ve sıcak iklim tahılları',
      'Yemeklik baklagiller: serin mevsim ve sıcak mevsim baklagiller',
      'Endüstri bitkileri: yağ, lif, nişasta-şeker, tıbbi ve aromatik bitkiler',
      'Çayır-mera ve yem bitkileri: baklagil ve buğdaygil yem bitkileri, çayır ve meralar'
    ], 'Tarla bitkileri 4 ana grupta toplanır:\n• Tahıllar → serin iklim (buğday, arpa, yulaf, çavdar, tritikale) ve sıcak iklim (mısır, çeltik, sorgum, darılar, kuşyemi)\n• Yemeklik baklagiller → serin mevsim (mercimek, nohut, bakla, bezelye) ve sıcak mevsim (fasulye, börülce)\n• Endüstri bitkileri → yağ, lif, nişasta-şeker, tıbbi ve aromatik\n• Çayır-mera ve yem bitkileri → baklagil ve buğdaygil yem bitkileri, çayır ve meralar'),
    op('sistemler', 'Kuru, sulu ve nemli tarım sistemlerini yağış ve uygulama açısından karşılaştırınız.', [
      'Kuru tarım: yağış ≤ 500 mm, düzensiz; sulamasız',
      'Kuru tarımda nadas yaygın; tarla alanlarının %75\'ten fazlası',
      'Sulu tarım: < 750 mm bölgelerde sulama yapılır, nadasa gerek yok',
      'Nemli tarım: > 750 mm düzenli yağış, sulama yok, sorun su fazlalığı',
      'Nemli tarıma en uygun bölge Doğu Karadeniz'
    ], '• Kuru tarım: yıllık yağış 500 mm\'ye kadar ve düzensiz; sulamasız. Türkiye tarla alanlarının %75\'ten fazlası; nadas yaygın. Ürünler: buğday, arpa, yulaf, çavdar, tritikale, nohut, mercimek, fiğ, korunga.\n• Sulu tarım: yağışı 750 mm\'nin altındaki kuru tarım bölgelerinde sulama yapılır; nadasa gerek kalmaz.\n• Nemli tarım: yağışı 750 mm\'nin üzerinde ve düzenli bölgeler; sulama yapılmaz, sorun suyun fazlalığıdır. En uygun bölge Doğu Karadeniz.'),
    op('serin-sicak', 'Vernalizasyonu tanımlayınız ve serin iklim tahıllarının neden "kışlık tahıllar" olarak adlandırıldığını açıklayınız.', [
      'Kışlık çeşitlerin başak, çiçek, tane oluşturması için düşük sıcaklıkta kalması',
      'Sıcaklık 1-5 °C',
      'Süre 5-60 gün',
      'Buğday, arpa, yulaf, çavdar, tritikale vernalize olmalıdır → kışlık tahıl'
    ], 'Vernalizasyon: kışlık çeşitlerin başak, çiçek ve tane oluşturabilmesi için belli bir süre (5-60 gün) düşük sıcaklıkta (1-5 °C) kalmasıdır. Buğday, arpa, yulaf, çavdar ve tritikale vernalize olmak zorunda olduğu için serin iklim tahılları "kışlık tahıllar" olarak adlandırılır. Bunlar kışlık, yazlık ve geçit olmak üzere 3 gruba ayrılır.'),
    op('bugday-arpa', 'Ekmeklik ve makarnalık buğdayı karşılaştırınız.', [
      'Ekmeklik: Triticum aestivum; makarnalık: Triticum durum',
      'Makarnalık: tane camsı, protein yüksek, irmik iriliğinde un',
      'Ekmeklik: tane unsu, protein düşük, nişasta yüksek',
      'Makarnalık → makarna, bulgur; ekmeklik → un ve unlu mamuller',
      'Türkiye üretiminin %85\'i ekmeklik, %15\'i makarnalık',
      'Soğuğa dayanım: ekmeklik -35 °C, makarnalık -15 °C'
    ], '• Ekmeklik buğday (Triticum aestivum): taneler unsu, protein düşük, nişasta yüksek; un ve unlu mamullerde kullanılır. Türkiye üretiminin %85\'i. -35 °C\'ye kadar kısa süreli soğuğa dayanır.\n• Makarnalık buğday (Triticum durum): protein yüksek, taneler camsı, irmik iriliğinde un verir; makarna ve bulgurda kullanılır. Üretimin %15\'i. -15 °C\'den sonra zarar görür.'),
    op('bugday-arpa', 'İki sıralı ve altı sıralı arpayı; biralık ve yemlik arpa kriterlerini açıklayınız.', [
      'İki sıralı (H. distichum): homojen, iri tane → malt',
      'Altı sıralı (H. vulgare): heterojen, nişasta düşük, protein yüksek → yemlik',
      'Biralık: hektolitre ≥ 65 kg, 1000 tane ≥ 35 g',
      'Biralık: protein %8-12, kavuzlu, unlu kesitli; en önemli unsur nişasta (%55-60)',
      'Yemlik: protein > %12, düşük kavuz, kılçık dipten kırılmış'
    ], '• İki sıralı arpa (Hordeum distichum): homojen ve iri tanelidir, malt üretimine çok uygundur.\n• Altı sıralı arpa (Hordeum vulgare): daha heterojen ürün, nişasta daha düşük, protein daha yüksek → yemlik.\n• Biralık arpa: hektolitre ağırlığı en az 65 kg (maltlıkta 66-68 kg\'dan az olmamalı), 1000 tane ağırlığı en az 35 g, protein %8-12, kavuzlu ve unlu kesitli, iriliği homojen. En önemli unsur nişasta (kuru maddede %55-60).\n• Yemlik arpa: yüksek protein (>%12), düşük kavuz oranı, kılçıkların dipten kırılmış olması.'),
    op('tahil-genel', 'Tahılları tane yapısına göre (çıplak/kavuzlu) gruplandırınız ve çıplak tahıl tanesinin kısımlarını oranlarıyla yazınız.', [
      'Çıplak: buğday, çavdar, tritikale, mısır',
      'Kavuzlu: arpa, yulaf, çeltik, bazı darılar',
      'Kabuk %12, endosperm %85, embriyo %3',
      'Kabuk + embriyo → kepek; endosperm → un'
    ], 'Çıplak tohumlu tahıllar: buğday, çavdar, tritikale, mısır. Kavuzlu: arpa, yulaf, çeltik ve bazı darılar.\nÇıplak tane: kabuk (%12), endosperm (%85), embriyo (%3). Değirmende kabuk ve embriyo "kepek", endosperm "un" olur.'),
    op('yulaf-cavdar', 'Tritikaleyi tanımlayınız; özelliklerini ve hekzaploid/oktaploid tiplerin elde edilişini yazınız.', [
      'Buğday × çavdar melezi, sentetik tahıl',
      'Tohum iri, protein yüksek, lisin ve kükürtlü aa zengin',
      'Sorun: tane kırışıklığı, düşük un kalitesi → hayvan yemi',
      'Hekzaploid: T. durum × S. cereale → ABR (21) → AABBRR 2n=42, tane için',
      'Oktaploid: T. aestivum × S. cereale → ABDR (28) → AABBDDRR 2n=56, çayır tipi'
    ], 'Tritikale buğday ve çavdarın melezlenmesiyle elde edilmiş sentetik bir tahıldır. Buğdaya göre tohumları daha iri, protein daha yüksek; lisin ve kükürtlü aminoasitlerce zengindir. En önemli sorunu tane kırışıklığı ve düşük un kalitesidir; bu yüzden daha çok hayvan yemi olur.\n• Hekzaploid: T. durum (2n=28, AABB) × S. cereale (2n=14, RR) → ABR genomlu, 21 kromozomlu kısır melez; kromozom sayısı katlanınca AABBRR, 2n=42. Tanesi için.\n• Oktaploid: T. aestivum (2n=42, AABBDD) × S. cereale → ABDR, 28 kromozomlu kısır melez; katlanınca AABBDDRR, 2n=56. Çayır tipi.'),
    op('misir-celtik', 'Türkiye\'de ekonomik olarak yetiştirilen mısır gruplarını ve kullanım alanlarını yazınız.', [
      'Atdişi (indendata), sert (indurata), cin (everta), şeker (saccharata)',
      'Atdişi ve sert: nişasta, şeker şurubu, mısırözü yağı, biyoetanol, yem',
      'Cin mısır: patlak mısır (çerez); şeker mısır: haşlanmış süt mısır, konserve',
      'Sert mısır Karadeniz, atdişi Akdeniz; tane mısırın %75\'i yem'
    ], 'Türkiye\'de atdişi, sert, cin ve şeker mısır yetiştirilir.\n• Atdişi ve sert mısır: nişasta, şeker şurubu, mısırözü yağı, biyoetanol ve hayvan yemi. Sert mısır en fazla Karadeniz, atdişi en fazla Akdeniz.\n• Cin mısır: patlak mısır olarak çerezlik.\n• Şeker mısır: haşlanmış süt mısır ve konserve.\nTane mısırın %75\'i yem olarak tüketilir.'),
    op('misir-celtik', 'Çeltiğin besin bileşimi, sıcaklık ve su istekleri ile ticari tanımlarını (kargo, lüks pirinç) açıklayınız.', [
      'Karbonhidrat en yüksek (%80), yağ (%0.5) ve protein (%7) en düşük',
      'Su isteği en fazla tahıl: 1100-1300 mm',
      'Su sıcaklığı min 12 °C, opt 25-30 °C, 30 °C üstü zararlı',
      'Kargo: kavuzu soyulmuş, parlatılmamış tane',
      'Lüks pirinç: uzun ve ekstra uzun taneli (> 7.50 mm)'
    ], 'Çeltik pirincin temel hammaddesidir; tahıllar içinde karbonhidratı en yüksek (%80), yağı (%0.5) ve proteini (%7) en düşük olandır. Su isteği en fazla tahıldır (1100-1300 mm). Su sıcaklığı minimum 12 °C, optimum 25-30 °C; 30 °C üstü ürüne zarar verir. Kavuzları soyulmuş, parlatılmamış taneye kargo (brown rice), uzun ve ekstra uzun taneli çeşitlere lüks pirinç denir (kısa ≤5.5 mm, orta 5.51-6.60 mm, ekstra uzun >7.50 mm).'),
    op('turkiye', 'Dünyada ve Türkiye\'de en fazla üretilen tahıl, baklagil, yağ ve şeker bitkilerini karşılaştırınız.', [
      'Tahıl: dünya buğday-çeltik-mısır; Türkiye buğday-arpa-mısır',
      'Baklagil: dünya fasulye-bezelye; Türkiye nohut-mercimek',
      'Yağ: dünya soya-kolza; Türkiye ayçiçeği-zeytin',
      'Şeker: dünya kamış %80, pancar %20; Türkiye sadece şekerpancarı'
    ], '• Tahıl: dünyada buğday, çeltik, mısır; Türkiye\'de buğday, arpa, mısır.\n• Baklagil: dünyada fasulye ve bezelye; Türkiye\'de nohut ve mercimek.\n• Yağ bitkisi: dünyada soya ve kolza; Türkiye\'de ayçiçeği ve zeytin.\n• Şeker bitkisi: dünyada şekerkamışı (%80) ve şekerpancarı (%20); Türkiye\'de sadece şekerpancarı (%100).\n(Lif: her ikisinde pamuk; nişasta: Türkiye\'de %99 patates.)'),

    /* ---- Uzun klasik ---- */
    lg('turkiye', 'Türkiye\'de tarım alanlarının dağılımını ve tarla bitkilerinin Türk tarımındaki yerini tüm sayısal değerleriyle açıklayınız.', [
      'Toplam arazi > 80 milyon ha, işlenen tarım alanı 23.7 milyon ha',
      'Tarla bitkileri 15.8 (%67), nadas 3.7 (%16), bahçe 4.2 (%17) milyon ha',
      'Çayır-mera 14.6, orman 21.5 milyon ha',
      'Tarla alanında tahıl 11 (%70), endüstri 2.2 (%14), yem 1.8 (%11), baklagil 0.8 (%5)',
      'Nadas dahil 19.5 milyon ha; tarım alanlarının %83\'ü',
      'Önemli ürünler: buğday-arpa-mısır-çeltik, nohut-mercimek-fasulye, pamuk-ayçiçeği-şekerpancarı-patates',
      'Tıbbi/keyf: çay, tütün, haşhaş, kimyon, anason, kekik; yem: fiğ, yonca, korunga, hasıl mısır'
    ], 'Türkiye\'nin toplam arazi varlığı 80 milyon hektarın üzerindedir. İşlenen tarım alanı 23.7 milyon ha\'dır: tarla bitkileri 15.8 milyon ha (%67), nadas 3.7 milyon ha (%16), bahçe bitkileri 4.2 milyon ha (%17). Ayrıca 14.6 milyon ha çayır-mera (çiftlik hayvanlarının doğal otlatma alanı) ve 21.5 milyon ha orman vardır.\nKurak ve yarı kurak bölgelerde her yıl 3.7 milyon ha nadas nedeniyle boş kalır; tarla bitkisi + nadas = 19.5 milyon ha, yani tarım alanlarının %83\'ü.\nHer yıl ekilen 15.8 milyon ha tarla alanının %70\'inde (11 milyon ha) tahıllar, %14\'ünde (2.2) endüstri bitkileri, %11\'inde (1.8) yem bitkileri, %5\'inde (0.8) yemeklik baklagiller yetiştirilir.\nÖnemli ürünler: tahıllardan buğday, arpa, mısır, çeltik; baklagillerden nohut, mercimek, fasulye; endüstri bitkilerinden pamuk, ayçiçeği, şekerpancarı, patates; tıbbi-aromatik-keyf bitkilerinden çay, tütün, haşhaş, kimyon, anason, kekik; yem bitkilerinden fiğ, yonca, korunga, hasıl mısır ve darılar.'),
    lg('serin-sicak', 'Serin iklim tahıllarını tüm özellikleriyle (türler, vernalizasyon, sıcaklık istekleri, dayanıklılık, tane yapısı, ekim zamanı) anlatınız.', [
      'Türler: buğday, arpa, yulaf, çavdar, tritikale; kışlık, yazlık, geçit grupları',
      'Vernalizasyon: 5-60 gün 1-5 °C → kışlık tahıllar',
      'Çimlenme min 1-4 °C (çavdar-tritikale 1-2, buğday-arpa 3-4, yulaf 4-5), optimum 20-25 °C',
      'Dona en dayanıklı çavdar, en hassas yulaf; arpa -10 °C üzerinde zarar görür',
      'En serin ve kurak bölgelerde yetişir; toprak seçiciliği en az; uzun gün bitkisi',
      'Kavuzlu: arpa, yulaf; çıplak: buğday, çavdar',
      'Kışlık ekim Ekim-Kasım, yazlık Şubat-Mart'
    ], 'Serin iklim tahılları buğday, arpa, yulaf, çavdar ve tritikaledir. Fizyolojik olarak kışlık, yazlık ve geçit olmak üzere 3 gruba ayrılır. 5-60 gün 1-5 °C\'de vernalize olmaları gerektiği için kışlık tahıllar olarak da adlandırılırlar (vernalizasyon: başak, çiçek ve tane oluşturmak için düşük sıcaklıkta kalma).\nÇimlenme minimum sıcaklığı 1-4 °C (çavdar ve tritikale 1-2, buğday ve arpa 3-4, yulaf 4-5 °C), optimumu 20-25 °C\'dir.\nDünyanın en serin ve en kurak bölgelerinde bile yetişirler; toprak seçiciliği en az kültür bitkileridir; hepsi uzun gün bitkisidir. Dona en dayanıklı çavdar, en hassas yulaftır; arpa çavdar ve buğdaydan daha az dayanıklı olup -10 °C\'nin üzerinde zarar görür. Ekmeklik buğday -35 °C\'ye kadar dayanır, makarnalık -15 °C\'den sonra zarar görür.\nKavuzlu taneliler arpa ve yulaf, çıplak taneliler buğday ve çavdardır. Kışlık ekim Ekim-Kasım, yazlık ekim Şubat-Mart aylarında yapılır.'),
    lg('misir-celtik', 'Sıcak iklim tahıllarını (mısır, sorgum-darılar, çeltik, kuşyemi) tüm özellikleriyle anlatınız.', [
      'Vejetatif ve generatif dönemi sıcak mevsimde; günlük ort. 20 °C üstü; çimlenme min 8-12, opt 30-35 °C',
      'Mısır: C4, en fazla kuru madde; çeşit grupları ve kullanım; tane mısırın %75\'i yem',
      'Mısır tarımı: Nisan-Mayıs, 4-6 cm, sıra arası 70-75, dekarda 6000-8000 bitki; silaj hasadı KM %32-35',
      'Sorgum: dünyada 5. tahıl, kurak ve kötü toprağa dayanıklı; alt türler',
      'Sorgum/sudan otu HCN 50-60 cm boya kadar artar',
      'Çeltik: KH %80, protein %7, yağ %0.5; su 1100-1300 mm; su sıcaklığı 12 / 25-30 °C',
      'Kargo ve lüks pirinç; çeltik %70 Marmara, %25 Karadeniz',
      'Kuşyemi: 400-500 mm, yazlık, yüzlek kök 5-35 cm, 2n=12'
    ], 'Sıcak iklim tahılları (çeltik, mısır, sorgum-darılar, kuşyemi) vejetatif ve generatif dönemlerini sıcak mevsimde tamamlar. Çimlenme minimumu 8-12 °C, optimumu 30-35 °C; mısır ve çeltik yetişme süresinde günlük ortalama 20 °C üstü ister.\nMısır (Zea mays): C4 bitkisi; güneş enerjisini en etkili kullanır, birim alandan en fazla kuru madde üretir. Çimlenme minimumu 9-10 °C, en uygun büyüme 25-30 °C; su tüketimi 400-750 mm. Gruplar: atdişi ve sert (nişasta, şeker şurubu, mısırözü yağı, biyoetanol, yem), cin (patlak mısır), şeker (haşlanmış, konserve). Sert mısır Karadeniz, atdişi Akdeniz. Tane mısırın %75\'i yem. Nisan-Mayıs, 4-6 cm derinlik, sıra arası 70-75 cm, sıra üzeri 20-25 cm, dekarda 6000-8000 bitki. Silaj/hasıl hasadı hamur olum, KM %32-35.\nSorgum: dünyada buğday, çeltik, mısır, arpadan sonra en çok üretilen tahıl; mısıra göre kurak ve kötü topraklara dayanıklı. Alt türler: kocadarı, şeker darısı, süpürge darısı, sudan otu. Sorgum ve sudan otunda HCN bitki 50-60 cm olana kadar artar, sonra azalır.\nÇeltik: KH en yüksek (%80), protein (%7) ve yağ (%0.5) en düşük; su isteği en fazla (1100-1300 mm); su sıcaklığı min 12, opt 25-30 °C. Kargo = kavuzu soyulmuş parlatılmamış tane; lüks pirinç = uzun/ekstra uzun taneli. Üretimin %70\'i Marmara, %25\'i Karadeniz.\nKuşyemi (Phalaris canariensis, 2n=12): 400-500 mm yağışta yazlık; kök sistemi yüzlek (5-35 cm).'),
    lg('bugday-arpa', 'Buğdayı tüm yönleriyle (türler, tane yapısı, üretim, ekim, gübreleme, hastalıklar) anlatınız.', [
      'T. aestivum ekmeklik (unsu, protein düşük) – T. durum makarnalık (camsı, protein yüksek)',
      'Türkiye ~20 milyon ton; %85 ekmeklik, %15 makarnalık; dünyada en fazla Çin',
      'Orijin: Anadolu ve çevresi, MÖ 7000-6500',
      'Tane: kabuk+aleuron (kepek %12-13), endosperm %80-85 (un, randıman %70), embriyo %2-3',
      'Ekim: toprak sıcaklığı 5-8 °C; Orta Anadolu m²\'de 400-500 bitki',
      '300 kg/da için 13-14 kg DAP + 6 kg saf azot',
      'Hastalıklar: sürme, rastık, sarı pas, külleme, kahverengi pas, kara pas'
    ], 'Buğday serin iklim tahılıdır. Ekmeklik buğday (Triticum aestivum): taneler unsu, protein düşük, nişasta yüksek; un ve unlu mamuller. Makarnalık buğday (T. durum): protein yüksek, camsı tane, irmik iriliğinde un; makarna ve bulgur. Türkiye\'de üretilen ~20 milyon ton buğdayın %15\'i makarnalık, %85\'i ekmekliktir; dünyada en çok Çin üretir. Orijini Anadolu, İran, Irak, Suriye, Filistin, Mısır, K. Hindistan (MÖ 7000-6500).\nTane: kabuk (meyve kabuğu, tohum kabuğu, hialin) ve aleuron tabakası kepeği oluşturur (%12-13); endosperm %80-85, una dönüşür (randıman ~%70); embriyo (skutellum + asıl embriyo) %2-3, yüksek protein ve yağ nedeniyle una karıştırılmaz. Harmandan sonra karyopsis şeklinde (çıplak taneli) elde edilir.\nEkim: sonbaharda ekim derinliğindeki toprak sıcaklığı 5-8 °C iken. Orta Anadolu\'da m²\'de 400-500 bitki; 300 kg/da verim için 13-14 kg diamonyum fosfat ve 6 kg saf azot.\nEkmeklik -35 °C\'ye kadar, makarnalık -15 °C\'ye kadar soğuğa dayanır.\nHastalıklar: sürme, rastık, sarı pas, külleme, kahverengi pas, kara pas.'),
    lg('bugday-arpa', 'Arpayı tüm yönleriyle (tipler, kullanım, biralık/yemlik kriterler, türler, hastalıklar) anlatınız.', [
      'İki sıralı (H. distichum) malt; altı sıralı (H. vulgare) yemlik',
      'Çıplak taneli → kümes; kavuzlu → büyükbaş-küçükbaş; düz kılçık yem değerini artırır',
      'Bira yapımı: malt üretimi + mayalama',
      'Biralık: HL ≥ 65 kg (66-68), 1000 tane ≥ 35 g, protein %8-12, nişasta %55-60',
      'Yemlik: protein > %12, düşük kavuz, kılçık dipten kırılmış',
      'H. spontaneum Doğu Akdeniz; H. agriocritron Tibet-Afganistan-Kafkasya-Doğu Anadolu',
      'Hastalıklar: yaprak çizgi (H. gramineum), yaprak lekesi (H. sativum), kapalı rastık (tohum ilaçlama), açık rastık (ilaçlı mücadele yok), külleme',
      'Buğdaydan sonra en çok üretilen serin iklim tahılı; toprak isteği en fazla tahıl'
    ], 'Arpa buğdaydan sonra dünyada ve ülkemizde en fazla ekilen serin iklim tahılıdır; tahıllar içinde toprak istekleri en fazla olandır. Kavuzlu tohumludur.\n• İki sıralı arpa (Hordeum distichum): homojen, iri taneli; malt üretimine çok uygun.\n• Altı sıralı arpa (Hordeum vulgare): heterojen, nişasta düşük, protein yüksek; yemlik.\nÇıplak taneli arpalar kümes hayvanlarında, kavuzlu arpalar büyükbaş ve küçükbaşlarda kullanılır. Düz kılçıklı arpalarla yem değeri artmıştır; pürüzlü-testere dişli kılçıklar yemek borusuna zarar verir.\nBira yapımı iki aşamalıdır: malt üretimi ve mayalama. Biralık arpa: hektolitre ağırlığı en az 65 kg (maltlıkta 66-68 kg\'dan az olmamalı), 1000 tane ağırlığı en az 35 g, protein %8-12, kavuzlu ve unlu kesitli, iriliği homojen; en önemli unsur nişasta (KM\'de %55-60). Yemlik arpa: yüksek protein (>%12), düşük kavuz, kılçıkları dipten kırılmış.\nTürler: H. spontaneum Doğu Akdeniz; H. agriocritron Tibet, Afganistan, Kafkasya ve Doğu Anadolu.\nHastalıklar: yaprak çizgi (Helminthosporium gramineum), yaprak lekesi (H. sativum), kapalı rastık (Ustilago hordei – ekimden önce tohum ilaçlanır), açık rastık (Ustilago nuda – ilaçlı mücadelesi yok, dayanıklı çeşit ve ekim nöbeti), külleme (Erysipse graminis).'),
    lg('yulaf-cavdar', 'Yulaf ve çavdarı tüm özellikleriyle anlatıp karşılaştırınız.', [
      'Yulaf: A. sativa (beyaz, Türkiye\'de en çok) ve A. byzantina (kırmızı)',
      'Yulaf: KH en az, protein %13 ve yağ %8 en fazla; avenin → koşu ve çeki hayvanları',
      'Yulaf: dona en hassas, iklim isteği en fazla; Marmara ve Geçit; orijin Hazar-Karadeniz',
      'Yulaf hasat: kuru ot hamur, silaj süt olum, tohum %40 olgunluk',
      'Çavdar: Secale cereale; soğuk ve kurağa en dayanıklı; orijin Doğu Anadolu-Kafkasya',
      'Çavdar: %75 KH, %12.4 protein, %2 yağ; yem, koyu ve kepekli ekmek',
      'Ergot > %0.5 kullanılmaz; kendine uyuşmazlık → yabancı döllenme; mahlut > %20'
    ], 'YULAF (Avena sativa): Önemli türleri kırmızı yulaf (A. byzantina) ve beyaz yulaf (A. sativa); Türkiye\'de en çok beyaz yulaf. Karbonhidratı en az, proteini (%13) ve yağı (%8) en fazla tahıldır; çiftlik hayvanları için çok besleyicidir. Avenin maddesi nedeniyle koşu ve çeki hayvanlarında tercih edilir. İklim istekleri en fazla serin iklim tahılıdır ve dona en hassas olandır; minimum çimlenme 4-5 °C. Orijini Hazar Denizi civarı ve Karadeniz Bölgesi; Türkiye\'de Marmara ve Geçit bölgelerinde yetişir. Hasat: kuru ot için hamur kıvamı, silaj için süt olum, tohum için taneler %40 olgunlaştığında.\nÇAVDAR (Secale cereale): Tahıllar içinde soğuğa ve kurağa en dayanıklı tür; minimum çimlenme 1-2 °C. Orijini Doğu Anadolu ve Kafkasya; Orta ve Doğu Anadolu\'da yetişir. Taneleri %75 KH, %12.4 protein, %2 yağ; hayvan yemi ile koyu ve kepekli ekmekte kullanılır. Tohumlarda zehirli ergot alkaloitleri bulunabilir; %0.5\'in üzerinde ergot içerenler beslenmede kullanılmaz. Kendine uyuşmazlık nedeniyle yüksek oranda yabancı döllenir. Buğdayda çavdar oranı %20\'yi geçerse ürüne mahlut denir. Çıplak tanelidir.'),
    lg('tahil-genel', 'Tahılların genel özelliklerini; familya, tane yapısı (karyopsis), Latince adlar ve orijinleriyle birlikte anlatınız.', [
      'Gramineae (Buğdaygiller); hububat; en önemli insan gıdası, "dünyayı doyururlar"',
      'Ekonomik organ tohum; meyve ve tohum kabuğu yapışık → karyopsis',
      'Çıplak: buğday, çavdar, tritikale, mısır; kavuzlu: arpa, yulaf, çeltik, bazı darılar',
      'Tane: kabuk %12, endosperm %85, embriyo %3; kepek ve un',
      'Meyve kabuğu 4 tabaka: exocarp, mesocarp, enlem hücreler, endocarp',
      'Latince: Triticum aestivum/durum, Hordeum distichum/vulgare, Avena byzantina/sativa, Secale cereale, Zea mays, Oryza sativa',
      'Orijinler: buğday Anadolu, çavdar Doğu Anadolu, yulaf Karadeniz, mısır Amerika, çeltik Hindistan-Çin'
    ], 'Tahıllar adı altında Gramineae (Buğdaygiller) familyasına giren cinsler incelenir; hububat da aynı anlamdadır. Dünyada ve Türkiye\'de en önemli insan gıdasıdır ("tahıllar dünyayı doyururlar").\nEkonomik olarak en önemli organ tohumdur; tohumda meyve ve tohum kabuğu birbirine yapışıktır (karyopsis). Çıplak tohumlu: buğday, çavdar, tritikale, mısır. Kavuzlu: arpa, yulaf, çeltik, bazı darılar. Çıplak tane: kabuk %12, endosperm %85, embriyo %3; değirmende kabuk ve embriyo kepek, endosperm un olur. Meyve kabuğu dıştan içe üst epidermis (exocarp), orta epidermis (mesocarp), enlem hücreler ve iç epidermis (endocarp) olmak üzere 4 tabakadır.\nLatince adlar: buğday Triticum aestivum (ekmeklik), T. durum (makarnalık); arpa Hordeum distichum (2 sıralı), H. vulgare (6 sıralı); yulaf Avena byzantina (kırmızı), A. sativa (beyaz); çavdar Secale cereale; tritikale Triticosecale; mısır Zea mays (indendata, indurata, everta, saccharata); çeltik Oryza sativa (indica, japonica, javonica); darılar Sorgum bicolor, Panicum miliaceum, Seteria italica; kuşyemi Phalaris canariensis.\nOrijinler: buğday Anadolu ve çevresi (MÖ 7000-6500), arpa Batı Çin-Tibet-Anadolu (MÖ 8000), çavdar Doğu Anadolu-Kafkasya, yulaf Hazar-Karadeniz, çeltik Hindistan-Çin, mısır Orta-Güney Amerika, darılar Yakın Doğu-Orta Asya.'),
    lg('siniflandirma', 'Tarla bitkilerinin ürün gruplarını örnek ürünleriyle ve kullanım alanlarıyla birlikte anlatınız.', [
      'Serin iklim tahılları (buğday, arpa, yulaf, çavdar, tritikale), sıcak iklim (mısır, çeltik, sorgum, darılar, kuşyemi)',
      'Baklagiller: serin mevsim (mercimek, nohut, bakla, bezelye), sıcak mevsim (fasulye, börülce)',
      'Yağ (soya, kolza, ayçiçeği, yerfıstığı, susam, aspir) ve lif (pamuk, keten, kenevir, kapok, jüt, rami)',
      'Nişasta (patates, kassava, taro…) ve şeker (pancar, kamış, şeker darısı); tıbbi-aromatik (adaçayı, anason, çay, haşhaş, kekik, tütün)',
      'Yem: baklagil (yonca, korunga, fiğ, burçak, üçgül) ve buğdaygil (hasıllar, sorgum, sudan otu, ayrık, yumak)',
      'Kullanım: tahıl → un, ekmek, makarna, bulgur, malt, bira; baklagil → bakliyat, konserve, leblebi',
      'Kullanım: yağ → margarin, küspe, biyodizel; nişasta-şeker → alkol, biyoetanol, melas; lif → iplik, kağıt, çuval',
      'Kullanım: tıbbi → ilaç, parfüm, kozmetik, boya; yem → tane yem, kuru ot, yeşil ot, silaj, hasıl'
    ], 'Ürün grupları:\n• Serin iklim tahılları: buğday, arpa, yulaf, çavdar, tritikale. Sıcak iklim tahılları: mısır, çeltik, sorgum, darılar, kuşyemi.\n• Serin mevsim baklagiller: mercimek, nohut, bakla, bezelye. Sıcak mevsim: fasulye, börülce.\n• Yağ bitkileri: soya, kolza/kanola, ayçiçeği, yerfıstığı, susam, aspir. Lif bitkileri: pamuk, keten, kenevir, kapok, jüt, rami.\n• Nişasta bitkileri: patates, tatlı patates, yerelması, kassava, taro. Şeker bitkileri: şekerpancarı, şekerkamışı, şeker darısı.\n• Tıbbi ve aromatik: adaçayı, anason, çay, haşhaş, kekik, tütün.\n• Baklagil yem bitkileri: yonca, korunga, fiğ, burçak, üçgül, yem bezelyesi. Buğdaygil yem bitkileri: mısır ve diğer tahıl hasılları, sorgum, sudan otu, ayrıklar, yumaklar.\nKullanım alanları: tahıllar → un, ekmek, makarna, bulgur, pirinç, malt, bira, yem; baklagiller → bakliyat, konserve, bakliyat proteinleri, leblebi, yem; yağ bitkileri → yemeklik/sanayi yağları, margarin, küspe, biyodizel; nişasta-şeker → nişasta, şeker, alkol, biyoetanol, melas, yem; lif → iplik, tekstil, halat, kağıt, çuval, selüloz; tıbbi-aromatik-keyf-boya → ilaç, parfüm, kozmetik, baharat, herbal çay, doğal boya; yem bitkileri → tane yem, kuru ot, yeşil ot, silaj, hasıl.')
  ]
});
})();
