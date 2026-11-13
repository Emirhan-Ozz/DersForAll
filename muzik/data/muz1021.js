/* MÜZ1021 Antik Uygarlıklar ve Müzik · Uygarlık Tarihi I (Anadolu Üniversitesi AÖF, TAR113U) */
App.course({
  id: 'muz1021', code: 'MÜZ1021', short: 'Antik Uygarlıklar', glyph: '𝄋',
  title: 'Antik Uygarlıklar ve Müzik',
  desc: 'Tarih öncesinden Roma\'ya: Mezopotamya, Mısır, Anadolu, Orta Asya ve İran, Yunan, Roma. Her uygarlıkta müzik kutusu.',
  lead: 'Kaynak kitap **Uygarlık Tarihi I** (Anadolu Üniversitesi Açıköğretim, 7 ünite). Her ünite burada iki konuya ayrılıp ayrıntılı anlatıldı. Kitap müziğe az yer veriyor; kitapta geçen müzik bilgileri **sarı "Müzik açısından" kutularında**, kitapta olmayan ama dersin adına uygun genel bilgiler ise **kesikli "Ek bilgi" kutularında** ayrıca verildi.',
  sources: [
    { g: '𝄋', t: 'Uygarlık Tarihi I (TAR113U)', d: 'Anadolu Üniversitesi AÖF e-kitabı. Üniteler: 1 Dünyanın oluşumu ve tarih öncesi · 2 Mezopotamya · 3 Mısır · 4 Anadolu · 5 Orta Asya ve İran · 6 Yunan · 7 Roma.' }
  ],
  traps: [
    { t: '**Üç Çağ Sistemi**: araç gereç ham maddesine göre **Taş – Tunç – Demir** çağı. Taş çağı: **Paleolitik, Mezolitik, Neolitik**; Neolitik ile Tunç arasına **Kalkolitik (Bakır)** çağ eklenir.', topic: 'tarihoncesi' },
    { t: 'İlk taş aletler **Alt**, ölü gömme **Orta**, ilk sanat ürünleri **Üst Paleolitik**\'te. *Homo sapiens* ~**200 bin** yıl önce.', topic: 'tarihoncesi' },
    { t: 'Uygarlığı hazırlayan sıra: **yerleşik yaşam → tarım (sulu tarım) → artı ürün → tapınak ekonomisi → kent devleti**.', topic: 'tarihoncesi' },
    { t: 'Mezopotamya = **"iki ırmak arası"** (Dicle–Fırat). Yazı **İ.Ö. 3200** Uruk\'ta, **rahipler** ekonomik kayıt tutarken geliştirdi.', topic: 'mezo1' },
    { t: 'Sümer unvanları: **En** (bey), **Ensi** (vali), **Lugal** (kral). İlk kanun **Urukagina**; en ünlüsü Akkadca **Hammurabi**.', topic: 'mezo1' },
    { t: '**Ziggurat**: "tapınak-ev"; ayrıca **yazıcı okulu, kütüphane ve arşiv**. Sümerlerde **60 tabanlı** sayı sistemi, **ay takvimi**, haftada 7 gün.', topic: 'mezo2' },
    { t: 'Mısır: **Menes** iki Mısır\'ı birleştirdi (~İ.Ö. 3000). Tarih **Manetho**\'ya göre **31 sülale**. Hiyeroglifi **1822**\'de **Champollion** çözdü.', topic: 'misir1' },
    { t: 'Mısır yazısı: **hiyeroglif → hiyeratik (kutsal) → demotik**. Ölüler mahkemesine **Osiris** başkanlık eder.', topic: 'misir2' },
    { t: 'Anadolu\'nun en eski Paleolitik yerleşmeleri **Yarımburgaz** ve **Karain** mağaraları; en eski köyü **Hallan Çemi** (Batman).', topic: 'anadolu1' },
    { t: 'Yazıyı Anadolu\'ya **Assur ticaret kolonileri** getirdi (İ.Ö. 2000/1900) → Anadolu\'da **tarihî çağlar** başlar. Assurlu tüccar **kalay** getirirdi; merkez **Kaniş/Neşa**.', topic: 'anadolu2' },
    { t: '**Kadeş Antlaşması** (İ.Ö. 1270, II. Ramses – III. Hattuşili): tarihteki **ilk yazılı antlaşma**.', topic: 'anadolu2' },
    { t: 'Urartu başkenti **Tuşpa** (Van); Frig başkenti **Gordion** (Polatlı); Lidya başkenti **Sardis**. **Sikkeyi Lidyalılar** icat etti (elektron).', topic: 'anadolu3' },
    { t: 'Kitapta: Frigler sonraki kaynaklarda **"müzik ve dansta ünlü"** bir halk olarak anılır.', topic: 'anadolu3' },
    { t: 'Asya Hun Devleti\'ni **Teoman** kurdu, **Mete** zamanında güçlendi. Çin kaynakları **28 çeşit Hun türküsünden** söz eder; en çok kullanılan çalgı **kopuz**.', topic: 'ortaasya' },
    { t: 'Pers İmparatorluğu\'nun gerçek kurucusu **II. Kyros**; **I. Darius**\'un **Kral Yolu** Sardis\'ten başlar. Dinleri Zerdüştçülük (**Ahuramazda**).', topic: 'iran' },
    { t: 'Minos: başkent **Knossos**, **Linear A**; Miken: **Linear B**, Kiklop duvarları. Klasik Çağ: **Perikles**, **Parthenon**, **Sokrates**, **Herodotos**.', topic: 'yunan1' },
    { t: 'Yunan tiyatrosu: **orkestra + theatron + skene**; yamaca kurulur. Amfitiyatroda oturma sıraları **tam daire**dir.', topic: 'yunan2' },
    { t: 'Kitapta: **Apollon** müzik, şiir ve ışık tanrısıdır; sembollerinden biri **lir**.', topic: 'yunan2' },
    { t: 'Roma: Cumhuriyet **İ.Ö. 509**; ilk imparator **Augustus** (İ.Ö. 27); ikiye bölünme **İ.S. 395**; Batı Roma\'nın yıkılışı **İ.S. 476**.', topic: 'roma1' }
  ],
  topics: [
    /* 1 */
    { id: 'tarihoncesi', title: 'Dünyanın oluşumu, tarih öncesi ve uygarlığın doğuşu', short: 'Tarih öncesi', src: 'Ünite 1 · Dünyanın Oluşumu ve Tarih Öncesi Dönemler',
      blocks: [
        { t: 'h', text: 'Evren, Dünya ve canlılar' },
        { t: 'ul', items: [
          'Evren yaklaşık **15 milyar yıl** önce oluştu; bu **Big Bang (Büyük Patlama)** kuramıyla açıklanır.',
          'Dünya yaklaşık **4,5 milyar yıl** önce bir gaz ve toz bulutundan oluştu; **500 milyon yıl** sonra ilk organik moleküller gelişti.',
          'Önce basit **tek hücreli**, sonra **çok hücreli** canlılar evrimleşti.',
          'İnsanın üyesi olduğu **primatlar** takımı günümüzden **55 milyon yıl** önce ortaya çıktı.'
        ] },
        { t: 'h', text: 'Üç Çağ Sistemi' },
        { t: 'p', text: 'Tarih öncesi ve erken tarihî çağlar, eski insanların **araç gereç yapımında kullandığı ham maddeye** göre sınıflandırılır:' },
        { t: 'table', cls: 'k1', head: ['Çağ', 'Alt evreler / özellik'], rows: [
          ['Taş Çağı', '**Paleolitik** (Eski Taş) · **Mezolitik** (Orta Taş, Epipaleolitik) · **Neolitik** (Yeni Taş, Cilalı Taş)'],
          ['Kalkolitik Çağ', '**Bakır Çağı**: Neolitik ile Tunç Çağı arasına eklendi.'],
          ['Tunç Çağı', 'Bakır + kalay (önce arsenik) alaşımı tunç.'],
          ['Demir Çağı', 'Demirin yaygınlaşması.']
        ] },
        { t: 'h', text: 'İnsanın ataları ve Paleolitik Çağ' },
        { t: 'ul', items: [
          '**2,5 milyon** yıl önce ortaya çıkıp **40 bin** yıl öncesine kadar yaşayan birçok tür insanın atalarıdır; anatomileri ve zihinsel düzeyleri bugünkü insandan farklıdır.',
          'Modern insan **Homo sapiens** yaklaşık **200 bin** yıl önce ortaya çıktı.',
          '**Alt Paleolitik**: ilk taş aletler. **Orta Paleolitik**: ölü gömme davranışı. **Üst Paleolitik**: ilk **simgesel ve sanatsal** ürünler.'
        ] },
        { t: 'h', text: 'Göçebelikten yerleşik yaşama' },
        { t: 'p', text: '**Buzul çağlarının bitişi** iklimi ısıttı ve başka ekolojik değişimlere yol açtı. Mezolitik/Epipaleolitik insanlar yeni koşullara uyum sağladı: **Avrupa**\'da sulak alan kıyılarında **balıkçılıkla** geçinen küçük yerleşimler, **Ortadoğu ve Doğu Akdeniz**\'de **yabani tahıl toplayıcılığıyla** geçinen yerleşimler doğdu. Kitaba göre **yerleşik yaşam tarımın keşfinden önce** başladı.' },
        { t: 'h', text: 'Tarım ve hayvanların evcilleştirilmesi' },
        { t: 'p', text: 'Yabani tahıl toplayıcılığı zamanla tahılların **denetim altına alınmasını** sağladı; böylece **ilk tarım** başladı. Ardından bölgedeki uygun yabani hayvanlar **evcilleştirildi**. Besin üretiminin başladığı bu çağa **Neolitik Çağ** denir. Verimli Hilal üzerindeki önemli Neolitik köyler: Jeriko, Jarmo, Mureybet, **Çayönü** (Diyarbakır), **Hallan Çemi** (Batman), **Nevali Çori** ve **Göbekli Tepe** (Urfa). Nevali Çori ve Göbekli Tepe\'de **ilk dinsel yapılar** ortaya çıkar.' },
        { t: 'h', text: 'Köyden kent devletine' },
        { t: 'steps', items: [
          'Mezopotamya\'nın ekolojik koşulları **sulamalı tarıma** geçişi zorunlu kıldı.',
          'Geniş çaplı sulu tarım **artı ürün** doğurdu.',
          'Artı ürünün üretimi, toplanması ve dağıtımı büyük bir **organizasyon** gerektirdi.',
          'Bu organizasyon **tapınak ekonomisi** denen tapınak merkezli sistemi doğurdu.',
          'Tapınak ekonomisi **kent devleti** modeline evrildi.'
        ] },
        { t: 'defs', defs: [['Uygarlığın doğuşu', '**Devletin**, üretim ve iş gücü denetiminin, **toplumsal tabakalaşmanın**, **mesleki uzmanlaşmanın**, **anıtsal yapıların**, **yazının** ve **büyük nüfuslu yerleşimlerin** ortaya çıkması.']] },
        { t: 'ext', label: 'Müzik açısından · ek bilgi', text: 'Bilinen en eski çalgılar **Üst Paleolitik**\'e aittir: Almanya\'daki Geissenklösterle ve Hohle Fels mağaralarında bulunan, **kuş kemiğinden ve fildişinden** yapılmış **flütler** yaklaşık **40 bin** yıllıktır. Bu, kitaptaki "ilk simgesel ve sanatsal ürünler Üst Paleolitik\'te" bilgisiyle örtüşür: müzik, resim ve heykelle aynı dönemde ortaya çıkan sanatlardandır.' }
      ] },

    /* 2 */
    { id: 'mezo1', title: 'Mezopotamya I: coğrafya, tarih, yönetim ve hukuk', short: 'Mezopotamya I', src: 'Ünite 2 · Eski Mezopotamya Tarihi ve Uygarlığı',
      blocks: [
        { t: 'h', text: 'Coğrafya ve tarih öncesi' },
        { t: 'p', text: '**Mezopotamya**, Yunanca *mesos* (ara, orta) ve *potamos* (ırmak) kelimelerinden türetilmiş, **"iki ırmak arası"** anlamında coğrafi bir terimdir. Bölgeye **Dicle (İdiglat)** ve **Fırat (Purattu)** hayat verir.' },
        { t: 'ul', items: [
          'İyi yağış alan **Zagros etekleri** Paleolitik\'ten beri yerleşim yeridir; önemli yaşam alanları **Barda-Balka** kamp alanı ve **Şanidar Mağarası**.',
          '12.000–11.000 yıl önceki çağ **Mezolitik / Epipaleolitik**: Doğu Akdeniz kıyısında **Kebara** ve **Natufiyen** kültürleri.',
          '**İ.Ö. 10.000**\'lerde başlayan **Neolitik**: ilk köyler; buğday, arpa, bezelye, mercimek tarımı; koyun, keçi, sığır, köpek, domuz evcilleştirildi; ticaret başladı.',
          '**İ.Ö. 7000**\'lerde ilk **çanak çömlek**. Önemli kültürler: **Hassuna, Samarra, Halaf, Ubeyd**.',
          '**Uruk Dönemi** (İ.Ö. 4000–3100): **İ.Ö. 3200**\'de **rahipler** ekonomik kayıt tutarken **yazıyı** geliştirdi.'
        ] },
        { t: 'h', text: 'Tarihî dönemler' },
        { t: 'table', cls: 'k1', head: ['Dönem', 'Tarih (İ.Ö.)'], rows: [
          ['Sümerler · Erken Hanedanlar', '2900–2350'],
          ['Akkadlar', '2350–2150'],
          ['Yeni Sümer (III. Ur Sülalesi)', '2112–2000'],
          ['Assurlular, Babilliler, Kassitler', '2. binyıl'],
          ['Yeni Babil Devleti', '625–539'],
          ['Pers egemenliği', '539–331'],
          ['İskender, sonra Selevkoslar', '331 sonrası (İskender\'in ölümü 323)']
        ] },
        { t: 'p', text: 'Sonra Romalılar kuzeybatıyı kısa süre (**İ.S. 115–117**), **Sasaniler** (İ.S. 226–640) ve son olarak **Araplar** (İ.S. 640\'lar) bölgeye hâkim oldu.' },
        { t: 'h', text: 'Devlet yönetimi' },
        { t: 'ul', items: [
          'Erken Sümer kent devletlerinde yönetimin tam nasıl işlediği bilinmez; unvanlar: **En** (bey), **Ensi** (vali), **Lugal** (kral).',
          '**Akkadlar** merkezî krallık yönetimine geçti ve **bütün dünyayı yönetme** düşüncesini geliştirdi.',
          '**Yeni Assur** ve **Pers** kralları **mutlak monarşiyle** yönetti; ülkeyi eyaletlere bölüp başlarına **valiler** atadı.'
        ] },
        { t: 'h', text: 'Hukuk' },
        { t: 'p', text: 'Sümerlerde gelenek hukukundan yazılı hukuka ilk hangi kentte geçildiği bilinmez. Adaletin koruyucusu **güneş tanrısı Utu**\'ydu. Yeryüzündeki temsilcileri **hâkimler**, en büyük hâkim **kral**dı; kral bulunamadığında vekilleri **Sukkaller** davalara bakardı. Mahkemeler **tapınağın ya da şehrin kapısında** kurulurdu. Sümer kanunlarında cezalar çoğunlukla **para cezası**ydı; Sami kanunlarında ise ağır cezalar ve **kısasa kısas** (talion) vardı.' },
        { t: 'table', head: ['Sümerce kanunlar', 'Akkadca kanunlar'], rows: [
          ['Urukagina', 'Eşnunna'],
          ['Ur-Nammu', '**Hammurabi**'],
          ['Ana-İttişu', 'Orta Assur kanunları'],
          ['Lipit-İştar', '']
        ] }
      ] },

    /* 3 */
    { id: 'mezo2', title: 'Mezopotamya II: din, yazı, edebiyat, bilim ve sanat', short: 'Mezopotamya II', src: 'Ünite 2 · Din · Sanat ve Kültür · Bilim',
      blocks: [
        { t: 'h', text: 'Din' },
        { t: 'p', text: 'Çok tanrılı bir din anlayışı vardı; Sümer, Sami, Hurri, Hitit ve Elam tanrıları farklıydı ama **Sümer din anlayışı hep baskındı**. Mezopotamya dini, **kayıtları bilinen en eski dindir**. Her şehrin bir tanrısı vardı:' },
        { t: 'table', head: ['Şehir', 'Uruk', 'Ur', 'Lagaş', 'Nippur', 'Babil', 'Assur'], rows: [['Tanrı', 'İnanna', 'Nanna', 'Ningirsu', 'Enlil', 'Marduk', 'Assur']] },
        { t: 'p', text: 'Tanrıların **"tapınak-ev"** anlamına gelen **zigguratlarda** yaşadığına inanılırdı. Tabanı dikdörtgendir; yüksek tapınağa **dik açıyla birleşen üç merdivenle** çıkılır. Zigguratlar tanrının evi olmanın yanında **yazıcı okulu, kütüphane ve arşiv** işlevi de görürdü.' },
        { t: 'h', text: 'Yazı' },
        { t: 'p', text: 'Uruk Dönemi\'nin sonlarında (**İ.Ö. 3200**, Uruk IV tabakası) ilk yazılı belgeler çıkar: **resim yazısı (piktografik)**. Yazı yaygınlaştıkça işaretler küçüldü, resim özelliğini kaybetti ve **çiviye benzeyen** işaret kümelerine dönüştü: **çivi yazısı**. Müzelerde korunan Sümerce belge sayısı **100.000**\'i bulur.' },
        { t: 'h', text: 'Edebiyat' },
        { t: 'table', cls: 'k1', head: ['Grup', 'İçerik'], rows: [
          ['Liturjik eserler', 'Mitoslar (Adapa, Etana), **kasideler ve ağıtlar**: tanrılara ya da tanrılaşmış krallara ölçülü ve kafiyeli yazılmış metinler.'],
          ['Epik eserler (destanlar)', 'Yaradılış, **Gılgamış**, Lugalbanda, Ninurta. Kitaba göre **destani şiirin mucidi Sümerlerdir**.'],
          ['Didaktik eserler', 'Nesir hâlinde bilimsel eserler: almanak, sözlük vb.']
        ] },
        { t: 'p', text: 'Gılgamış ve Adapa\'da **insanın ölmeye mahkûm** olduğu konusu işlenir. Kitap, Yunanlıların İlyada ve Odysseia\'yı yazmasından **binlerce yıl önce** Sümerlerin mitos, destan, **ilahi** ve kasideleri **manzum** yazdığını vurgular.' },
        { t: 'h', text: 'Bilim, takvim, teknoloji' },
        { t: 'ul', items: [
          '**60 tabanlı** sayı sistemi (60\'ın çok böleni var); bugün **zaman ve açı** ölçümünde hâlâ kullanıyoruz.',
          'İ.Ö. 2. binyıldan itibaren çarpım cetvelleri, kare, karekök, küp, logaritma cetvelleri, 1. ve 2. derece denklemler; Babil matematikçileri π\'yi **3 1/8** olarak hesapladı.',
          '**Ay takvimi** (ay 29 ya da 30 gün), yıl **12 ay**; zamanı **60 dakikalık** saatlerle ölçen ilk insanlar; hafta **7 gün**; **gün** kavramı ilk kez Sümerlerde; gün **12 çift saat**. Güneş saati ve **su saati** kullandılar.',
          'Tıpta hastalıkların kötü ruh ve cinlerden geldiğine inanılır, **sihir** yanında iksir, lapa, merhem ve **cerrahi** müdahale de uygulanırdı.',
          'Ulaşım nehir ve kanallarla; karada katır ve eşek kervanları, İ.Ö. 2000\'lerde at, 1. binyılda deve. **Tekerlekli araç** İ.Ö. 3500\'lerden itibaren.',
          'Çömlekçi çarkı (İ.Ö. 4500\'ler), araba tekerleği, saban, yelkenli tekne, **kemer ve tonoz**: Mezopotamya\'nın uygarlığa katkıları.',
          'Saraylar İ.Ö. 3. binyılın ortasından itibaren: **Kiş**, Eşnunna, **Mari** (Zimrilim), Dur-Kurigalzu, Assur, Ninive ve Babil sarayları.'
        ] },
        { t: 'music', text: 'Kitapta geçen: Sümerler tanrılara **ilahiler, kasideler ve ağıtlar** yazdı; bunlar ölçülü ve kafiyeli metinlerdi. Ziggurat aynı zamanda **yazıcı okulu** ve **arşiv**ti: müzikle ilgili tabletler de bu arşivlerde korundu.' },
        { t: 'ext', label: 'Müzik açısından · ek bilgi', items: [
          '**Ur Kraliyet Mezarlığı** (İ.Ö. ~2500): Leonard Woolley\'nin kazısında **boğa başlı lirler** ve bir **arp** bulundu; dünyanın en eski telli çalgılarından.',
          'Çivi yazılı tabletlerde **lirin telleri ve akort yöntemleri** anlatılır: Mezopotamya\'da bir tür **müzik teorisi** vardı.',
          '**Hurri ilahisi No. 6** (Ugarit, İ.Ö. ~1400): notasıyla birlikte yazılmış, büyük ölçüde okunabilen **bilinen en eski beste**; lir eşliğinde tanrıça Nikkal\'e söylenen bir ilahi.',
          'Akkad kralı Sargon\'un kızı **Enheduanna**, Ur\'da Nanna\'nın başrahibesiydi; yazdığı **ilahiler** nedeniyle adı bilinen **ilk yazar** sayılır.'
        ] }
      ] },

    /* 4 */
    { id: 'misir1', title: 'Mısır I: coğrafya, tarih, yönetim, bilim ve yazı', short: 'Mısır I', src: 'Ünite 3 · Eski Mısır Tarihi ve Uygarlığı',
      blocks: [
        { t: 'h', text: 'Nil Vadisi' },
        { t: 'ul', items: [
          'Mısır kültürü **Nil Vadisi**\'nde gelişti: kuzeyde **Delta**\'dan güneyde **Assuan**\'daki **birinci çağlayana** kadar uzanan dar bir vadi.',
          'Kuzeyde **Aşağı Mısır** (Nil Deltası), güneyde vadi boyunca **Yukarı Mısır**. Batı ve doğu çöllerle çevrili; doğuda sıradağlar Kızıldeniz\'den ayırır; güneyde çağlayanlar, onların güneyinde **Nubya**.',
          '**Nil** dünyanın en uzun nehri (**6695 km**); Viktorya Gölü civarından çıkıp kuzeye akar, Akdeniz\'e dökülür.',
          'Mısır\'da **Paleolitik**\'ten (İ.Ö. 500.000) beri insan yaşar; Neolitik\'te (Cilalı Taş) ilk köyler, tarım ve hayvancılık.'
        ] },
        { t: 'h', text: 'Birleşme ve dönemler' },
        { t: 'p', text: 'Geleneğe göre **İ.Ö. 3000**\'lerde efsanevi kral **Menes**, Aşağı ve Yukarı Mısır\'ı birleştirdi. Devletin kuruluşundan **Büyük İskender\'in İ.Ö. 332**\'de gelişine kadarki tarih **Manetho** tarafından **31 sülaleye** ayrılmıştır.' },
        { t: 'table', cls: 'k1', head: ['Dönem', 'Tarih (İ.Ö.)'], rows: [
          ['Erken Devir', '3000–2650'],
          ['Eski Krallık', '2650–2134'],
          ['Orta Krallık', '2040–1640'],
          ['Yeni Krallık (18–20. sülaleler)', '1550–1070'],
          ['Geç Dönem', '712–332']
        ] },
        { t: 'p', text: 'Firavunların güç kaybettiği zamanlarda **üç ara devir** yaşandı. İkinci Ara Dönem\'de (İ.Ö. 1640–1550) **Hurri kökenli Hiksoslar** Delta\'ya hâkim olup Avaris\'i başkent yaptı. Yeni Krallık\'ta **II. Ramses** Suriye için Hititlerle **Kadeş**\'te savaştı (İ.Ö. 1285); sonra **Kadeş Barış Antlaşması** imzalandı (İ.Ö. 1270).' },
        { t: 'h', text: 'Devlet örgütü' },
        { t: 'ul', items: [
          'Ön Asya krallıkları gibi **mutlak krallık**; başında **kral-firavun**. Krallık babadan oğula ya da kardeşe geçer.',
          'Firavundan sonra en önemli kişi **vezir**; kral adına ülkeyi yönetir. **II. Amenofis**\'ten (İ.Ö. 1427–1401) itibaren kuzey ve güney için **iki vezir**.',
          'Her eyaletin başında firavunun atadığı **vali**; din gücü **rahiplerde**; altta geniş bir **çiftçi** tabakası, zanaatkârlar ve İ.Ö. 2. binyıldan itibaren **köleler**.'
        ] },
        { t: 'h', text: 'Bilim' },
        { t: 'ul', items: [
          'Matematik Mezopotamya\'dan **daha düşük** düzeyde; tayın paylaştırma gibi idari işler için gelişti. Aritmetik basit, **geometri ileri**: taşkınlardan sonra **tarla sınırlarının** yeniden saptanması için.',
          'Tıpta kırıkları ve açık yaraları iyileştirebiliyorlardı; parazit hastalıkları, verem, diş eti iltihabı yaygındı.',
          '**Mısır takvimi** (İ.Ö. 3000\'ler), Nil\'in periyodik taşkınlarına dayanır; Julius Caesar ve **1582**\'de Papa XIII. Gregor\'un düzeltmeleriyle bugünkü **Gregoryen takvim** doğdu.',
          'Basit **güneş saatleri** kullandılar.'
        ] },
        { t: 'h', text: 'Yazı' },
        { t: 'table', cls: 'k1', head: ['Yazı', 'Açıklama'], rows: [
          ['Hiyeroglif', 'İ.Ö. 3000 civarında ortaya çıktı; resim işaretleri.'],
          ['Hiyeratik', '"Kutsal yazı": hiyerogliflerin kısaltılmış biçimi.'],
          ['Demotik', 'Halk yazısı; daha da kısaltılmış.'],
          ['Kopt', 'Daha sonra demotiğin yerini aldı.']
        ] },
        { t: 'p', text: 'Mısır hiyeroglifleri **1822**\'de dilbilimci **Jean-François Champollion** tarafından çözüldü.' }
      ] },

    /* 5 */
    { id: 'misir2', title: 'Mısır II: mimari, din ve ölü gömme', short: 'Mısır II', src: 'Ünite 3 · Mimari · Din ve Ölü Gömme Gelenekleri',
      blocks: [
        { t: 'h', text: 'Mimari' },
        { t: 'p', text: 'Mısır mimarisi anıtsal örnekleriyle **mezarlar ve tapınaklarda** yoğunlaşır; saraylar günümüze korunamamıştır.' },
        { t: 'table', cls: 'k1', head: ['Mezar tipi', ''], rows: [
          ['Mastaba', 'Dikdörtgen, üstü düz erken mezar yapısı.'],
          ['Basamaklı piramit', 'Üst üste konmuş mastabalar gibi.'],
          ['Gerçek piramit', 'Gize\'de **Keops, Kefren, Mikerinos** piramitleri.'],
          ['Kaya mezarları ve lahitler', 'Özellikle Orta ve Yeni Krallık.']
        ] },
        { t: 'ul', items: [
          'Tapınaklarda önce **yuvarlak planlı** örnekler görülür.',
          '**Eski Krallık**: Güneş tapınakları. **Orta Krallık**: ölü kültüyle ilgili kaya tapınakları. **Yeni Krallık**: kaya tapınakları ve **büyük tanrılar** için tapınaklar; en görkemlileri bu dönemde.'
        ] },
        { t: 'h', text: 'Din' },
        { t: 'p', text: 'Din, Mısır kültürünün **tümünü kapsar**. Krallar tanrılara karşı dinsel görevlerin yapılmasını sağlar; tanrılara hayranlık ve saygılarını dile getirir, sunular yapar, niteliklerini överler. Tapınımları **rahipler** yürütür; karşılığında tanrılar krala ve halka iyilik bahşeder. Önemli kült merkezleri: **Heliopolis, Memfis, Abidos, Teb**.' },
        { t: 'h', text: 'Ölü gömme' },
        { t: 'ul', items: [
          'Mısırlılar mezarlarını **daha hayattayken** planlamaya başlardı.',
          'Ölümden sonra tanrılar katında, ölünün öteki dünyadaki yaşamına karar verilen bir **duruşma** yapılırdı; başkanı **Osiris**.',
          'Ölü gömülmeden önce **mumyalanırdı**; işlem toplam **70 gün** sürerdi. İç organlar **kanopik** vazolara konurdu. Tarih boyunca en iyi mumyaları Mısırlılar yaptı; kedi, boğa, timsah gibi kutsal hayvanlar da mumyalanırdı.',
          'Mumyalama ayinine katılanların sayısı ölünün **statüsünü** gösterirdi.'
        ] },
        { t: 'music', items: [
          'Zengin kişiler cenaze ayinleri için para ödeyerek **ilahi okuyan "Kiten" adlı kadınlar** tutardı.',
          'Mezar duvarlarındaki resimlerde tarım işlerinin yanında **oyunlar ve danslar** da betimlenir.',
          'Hiksoslar Mısır\'a savaş arabası ve yeni silahların yanında **lir ve lavtayı** da tanıttı.'
        ] },
        { t: 'ext', label: 'Müzik açısından · ek bilgi', items: [
          'Mısır\'ın en sevilen çalgısı **arp**tır; yay biçiminden büyük açılı arplara kadar birçok türü mezar resimlerinde görülür.',
          '**Sistrum**: tanrıça **Hathor** ve İsis kültünde kullanılan, metal halkalı sallanan çıngırak.',
          'Nefesliler: uzun **ney benzeri flüt** ve **çift obua**; tapınak ve şölen müziğinde.',
          '**Tutankamon**\'un mezarında bulunan biri gümüş, biri bronz iki **trompet**, çalınabilir durumdaki en eski metal nefesliler arasındadır.'
        ] }
      ] },

    /* 6 */
    { id: 'anadolu1', title: 'Anadolu I: tarih öncesi dönemler', short: 'Anadolu I', src: 'Ünite 4 · Eski Anadolu Uygarlıkları · Tarih Öncesi',
      blocks: [
        { t: 'p', text: 'Topoğrafyası gereği farklı coğrafi birimlere ayrılan Anadolu; **zengin akarsuları**, yerleşmeye çok uygun **iklimi** ve **ekonomik değeri yüksek ham maddeleriyle** insanlık tarihinin en zengin bölgelerinden biridir.' },
        { t: 'table', cls: 'k1', head: ['Çağ', 'Tarih', 'Anadolu\'da öne çıkanlar'], rows: [
          ['Paleolitik (Yontma Taş)', 'G.Ö. 600.000 – 11.000/12.000', '"Besin toplayıcılığı" dönemi. Kalabalık nüfus; çoğu Alt ve Orta Paleolitik mağara ve açık hava yerleşmeleri. En eskileri **Yarımburgaz** (İstanbul, Küçükçekmece Gölü\'nün kuzeyi) ve **Karain** (Antalya) mağaraları.'],
          ['Mezolitik (Orta Taş)', 'G.Ö. 11.000–12.000', 'Paleolitik ile Neolitik arasındaki geçiş. Toroslar\'ın güneyi, Marmara ve Orta Karadeniz. **Mikrolitler** (yarım ay, üçgen, yamuk küçük taş aletler); öğütme ve biçme başlar.'],
          ['Neolitik (Cilalı Taş)', 'İ.Ö. 10.000–5500', 'Tüketiciden **üretici** yaşama geçiş: ilk köyler, tarım, hayvancılık, ilk ticaret ve **mühürler**. Anadolu\'nun saptanmış **en eski köyü Hallan Çemi** (Batman, Kozluk). Ayrıca **Çatalhöyük**, Çayönü, Nevali Çori, Göbekli Tepe.'],
          ['Kalkolitik (Bakır)', 'İ.Ö. 5500–3200/3000', 'Taş aletler azalır, **madencilik** gelişir; ilk kullanılan maden **bakır** (düşük ergime ısısı, kolay çıkarılış). Tamamen **tarımcı** topluluklar.']
        ] },
        { t: 'tip', text: 'Kitapta Anadolu Paleolitik araştırmalarının başlangıcı **100 yıl** öncesine gider. Sıralamayı "**Yarımburgaz/Karain → mikrolit → Hallan Çemi → bakır**" diye hatırla.' },
        { t: 'h', text: 'Çatalhöyük (Konya Ovası)' },
        { t: 'ul', items: [
          'Tarım ve hayvancılığa elverişli otlaklar, sulak araziler, **obsidyen** yataklarına yakınlık ve ormanlar, Çatalhöyük\'ün ileri bir kültür yaratmasında etkili oldu.',
          'Yerleşme **dışa kapalı**: avlular çevresinde dikdörtgen konutlardan oluşan mahalleler birbirine eklenir. Konutların **kapısı yoktur**; **damdaki açıklıktan ahşap merdivenle** girilir. Savunma amaçlı, önceden düşünülmüş bir kent planı akla gelir.',
          'Konutlardan ayrı **kutsal yapılar** vardır: duvar resimleri ve kabartmalar, heykelcikler, seki altına gömülen ölülere bırakılmış zengin armağanlar.'
        ] },
        { t: 'music', text: 'Kitapta geçen: Çatalhöyük\'ün kutsal yapılarının duvar resimlerinde **av sahneleri** ve geometrik motiflerin yanında **dans eden insanlar** işlenmiştir: Anadolu\'da müzik ve dansın en eski görsel izlerinden.' },
        { t: 'ext', label: 'Müzik açısından · ek bilgi', text: 'Dans sahneleri, müziğin o dönemde **ritüel** (av, bereket, ölü kültü) içinde yer aldığını düşündürür; davul ya da çıngırak gibi ritim aletleri organik malzemeden yapıldığı için çoğu zaman günümüze ulaşmaz.' }
      ] },

    /* 7 */
    { id: 'anadolu2', title: 'Anadolu II: Tunç çağları ve Hititler', short: 'Anadolu II', src: 'Ünite 4 · Tunç Çağları · Assur Ticaret Kolonileri · Hitit Devleti',
      blocks: [
        { t: 'p', text: 'Üretim ekonomisinde **madencilik** en önemli aşamalardan biridir. Çağa adını veren **tunç**, önce **bakır + arsenik**, sonra **bakır + kalay** karışımıyla elde edilen, bakırdan çok daha sert bir alaşımdır; dövülerek ya da kalıba dökülerek biçimlendirilir. Madencilik **iş bölümüne dayalı kent yaşamını**, belirgin sosyal sınıfları, **ilk beylikleri** ve merkezî devletleri hazırladı.' },
        { t: 'table', cls: 'k1', head: ['Evre', 'Tarih (İ.Ö.)', 'Özellik'], rows: [
          ['İlk Tunç Çağı (I–III)', '3200/3000 – 2000', 'Köy kültürü sürer, sonra güçlü **yönetici sınıf**; Anadolu feodal **beyliklere** bölünür. Troia I–V, Aslantepe (Malatya), Karataş-Semayük (Elmalı), Norşuntepe; saray yapıları. **Alacahöyük** mezarları ve **Troya hazinesi**: altın, gümüş, elektron, tunç, demir.'],
          ['Orta Tunç Çağı', '2000/1900 – 1500/1450', '**Assur ticaret kolonileri**: Assurlu tüccarlar tunç için gerekli **kalayı** getirip sattı; Anadolu **yazıyı** onlardan öğrendi → **tarihî çağlar** başlar. Merkez **Kaniş/Neşa** (Kültepe); İ.Ö. 1750 civarı büyük yangın.'],
          ['Son Tunç Çağı', '1500/1450 – 1200', '**Hitit İmparatorluk Çağı** (Yeni Hitit); göç ve istilalarla yıkılış.']
        ] },
        { t: 'h', text: 'Hitit Devleti' },
        { t: 'steps', items: [
          '**Kuşşara**lı **Pithana oğlu Anitta** (İ.Ö. 1750) Neşa, Zalpa ve **Hattuş**\'u (Boğazköy) aldı, **Büyük Kral** unvanını aldı, **Neşa**\'yı başkent yaptı.',
          'Yaklaşık yüz yıl sonra aynı soydan **Labarna**, Hattuş\'u başkent yapıp kente **Hattuşa**, kendine **Hattuşili** adını verdi (İ.Ö. 1650–1620): **feodal ve teokratik** Hitit Devleti kuruldu.',
          'Hitit krallarından **Muvatalli** Kadeş\'te II. Ramses\'le savaştı (İ.Ö. 1285); **III. Hattuşili** ile Ramses arasında **Kadeş Barış Antlaşması** (İ.Ö. 1270) **tarihteki ilk yazılı antlaşma**dır; Kuzey Suriye Hititlerde kaldı.',
          'İ.Ö. 2. binyılın sonundaki göçler ve istilalar imparatorluğu yıktı; kral ailesi ve yöneticiler **güneye çekilip** sülalelerini bir süre sürdürdü.'
        ] },
        { t: 'p', text: '**Din**: Farklı kültürlerin tanrıları panteona alınıp halk tek bir din çatısında birleştirildi ("bin tanrılı" Hititler). Devletin resmî tanrıları Boğazköy yakınındaki **Yazılıkaya Açık Hava Tapınağı**\'nın kabartmalarındadır; başlarında **Hurri kökenli** gök ve fırtına tanrısı **Teşup**, eşi Arinna\'nın güneş tanrıçası **Hepat** ve oğulları **Şarruma**.' },
        { t: 'ext', label: 'Müzik açısından · ek bilgi', items: [
          '**İnandık vazosu** (Çankırı, Eski Hitit, İ.Ö. 17. yy): kabartmalarında büyük bir **lir**, **uzun saplı lavta**, **zil** ve akrobatlarla bir bayram/kült töreni betimlenir; Anadolu müzik tarihinin en önemli belgelerinden.',
          '**Alacahöyük** ortostatlarında (kapı kabartmaları) **lir ve lavta** çalan müzisyenler görülür.',
          'Hitit tabletlerinde tören sırasında **şarkıcıların** hangi dilde (Hattice, Luvice, Hurrice) ilahi okuyacağı yazılıdır: müzik, devlet dininin parçasıdır.'
        ] }
      ] },

    /* 8 */
    { id: 'anadolu3', title: 'Anadolu III: Demir Çağı uygarlıkları', short: 'Anadolu III', src: 'Ünite 4 · Geç Hitit · Urartu · Frig · Lidya',
      blocks: [
        { t: 'p', text: 'İ.Ö. 12. yüzyılda merkezî Hitit İmparatorluğu yıkılınca Anadolu yine birçok küçük güce bölündü. **Demir** yaygınlaştı; aletler ve özellikle silahlar daha etkili ve dayanıklı demirden yapıldı. Böylece **Demir Çağı** başladı. Başlıca güçler: **Geç Hitit kent devletleri, Urartu, Frig, Lidya**.' },
        { t: 'h', text: 'Geç Hitit kent devletleri' },
        { t: 'p', text: 'Hitit kral ailesinin soyluları Güney ve Güneydoğu Anadolu ile Kuzey Suriye\'ye çekilip yerel halklarla kaynaştı; Hitit, **Luvi**, Arami ve Hurri kökenli küçük kent devletleri kurdu: **Milidia** (Malatya), **Kummuh** (Adıyaman), **Gurgum** ve **Kargamış** (Maraş–Antep), **Sam\'al** (İslahiye), **Que ve Hilakku** (Çukurova), **Pattin** (Amik), **Asitavanda** (Kadirli), **Tabal** (Kayseri–Niğde–Nevşehir). Çoğu **Luvice** konuşup **resim yazısı** kullandı; İ.Ö. 8. yüzyıl sonunda hepsi **Assur eyaleti** oldu. Önemli merkezler: Kargamış, Zincirli, Malatya, Sakçagözü, **Karatepe**.' },
        { t: 'h', text: 'Urartu Krallığı' },
        { t: 'ul', items: [
          'İ.Ö. 13. yüzyılda Doğu Anadolu\'da **Hurri kökenli** feodal beylikler vardı. **Assur** baskısı onları birleştirdi: önce **Uruatri**, sonra **Nairi** konfederasyonu.',
          'İ.Ö. 9. yüzyılın ortasında başkent **Tuşpa** (Van Kalesi) olan merkezî **Urartu Krallığı** kuruldu.',
          'En güçlü dönem baba-oğul krallar: **I. Sarduri, İşpuini, Minua, I. Argişti, II. Sarduri** (İ.Ö. 840–730).',
          'Sınırlar Güney Kafkasya\'dan Urmiye Gölü\'ne, Fırat\'tan Hazar kıyılarına uzandı. **Kale, baraj, gölet ve sulama kanalları**; savunması kolay **sarp kayalıklara** yerleşim. Merkezler: Van Kalesi, Çavuştepe, Ayanis, Toprakkale, Altıntepe.',
          'İ.Ö. 7. yüzyılın sonuna doğru tarih sahnesinden silindi.'
        ] },
        { t: 'h', text: 'Frig Krallığı' },
        { t: 'ul', items: [
          'Antik batı kaynaklarına göre Frigler, Makedonya ve Trakya\'dan **Boğazlar** yoluyla gelen bir **Trak** boyudur; göç İ.Ö. 1200\'lerden 8. yüzyıla kadar **dalgalar** hâlinde sürdü.',
          'İ.Ö. 11. yüzyılda **Gordion**\'a (Yassıhöyük, Polatlı) ulaştılar; 8. yüzyılın başında Gordion anıtsal bir krallık merkezi oldu.',
          'Bilinen ilk kral **Gordios**; ardından oğlu **Midas** (İ.Ö. 8. yy ikinci yarısı). Kafkasya\'dan gelen **Kimmerler** 7. yüzyılın başında Anadolu\'yu yıktı; rivayete göre Midas yenilgiye dayanamayıp **boğa kanı içerek** intihar etti.',
          '**Fenike alfabesinden** alınmış, yaklaşık **20 harfli** bir alfabeleri vardı; dil okunabilir ama tam çözülmemiştir.',
          'Baş tanrıça **Matar** (Ana); Hitit-Luviler **Kubaba**, Yunanlılar **Kybele**, Romalılar **Magna Mater** dedi. **Midas Anıtı** (Yazılıkaya–Midas Şehri) en büyük Frig kaya cephesidir.',
          'İ.Ö. 590\'dan sonra **Lidya**\'ya bağlı prenslikler; 547/546\'da Pers egemenliği.'
        ] },
        { t: 'h', text: 'Lidya Krallığı' },
        { t: 'ul', items: [
          'İç Ege\'de, Gediz ve Küçük Menderes vadileri arasında. Üç sülale: **Atyadlar, Herakleidler, Mermnadlar**. Mermnad **Gyges**\'ten itibaren ülkeye **Lidya**, başkente **Sardis** denildi.',
          'Mermnadlar (İ.Ö. 687–547) **Paktalos** (Sart Çayı) alüvyonlarından elde ettikleri **elektron ve altınla** güçlendi; Sardis antik dünyanın en zengin başkenti oldu.',
          'Son kral **Kroisos** (İ.Ö. 560–547). Pers kralı **Kyros** ile Kızılırmak\'taki savaştan sonra Kroisos kış için çekildi; Kyros gizlice izleyip **14 günlük kuşatmayla** Sardis\'i aldı (İ.Ö. 547).',
          'Lidyalıların uygarlığa en önemli katkısı: İ.Ö. 7. yüzyılın ikinci yarısında **parayı (sikke)** icat etmeleri. İlk sikkeler **elektrondan**, bakla biçiminde; nedeni muhtemelen **paralı askerlerin** ödemesi. Takas yerini **para ekonomisine** bıraktı.'
        ] },
        { t: 'music', text: 'Kitapta geçen: Homeros ve Herodotos Friglerden **savaşçı** bir ulus olarak söz ederken, **çok daha sonraki kaynaklar** Frigleri **"müzik ve dansta ünlü"** bir halk olarak tanımlar.' },
        { t: 'ext', label: 'Müzik açısından · ek bilgi', items: [
          'Yunanlılar müzikteki dizilerden (modlardan) ikisine Anadolu halklarının adını verdi: **Frig modu** ve **Lidya modu**. Bu adlar Orta Çağ kilise modlarında da yaşadı.',
          'Frig mitolojisinde satir **Marsyas**, **aulos** (çift kamışlı nefesli) ile **Apollon**\'un lirine meydan okur ve yenilir; Yunanlılar aulosu Frigya kökenli sayardı.',
          '**Kybele (Matar)** kültünde **tympanon** (çerçeve davul), **zil** ve aulos eşliğinde coşkulu törenler yapılırdı; bu kült sonra Roma\'ya da taşındı.'
        ] }
      ] },

    /* 9 */
    { id: 'ortaasya', title: 'Orta Asya: Hunlar, Göktürkler, Uygurlar', short: 'Orta Asya', src: 'Ünite 5 · Orta Asya Tarihi ve Uygarlığı',
      blocks: [
        { t: 'p', text: '**Orta Asya**: kuzeyde Ural Dağları\'ndan Altay Dağları\'nı geçip **Kingan Dağları**\'na uzanan hat ile güneyde **Himalayalar ve Pamir** üzerinden Hazar Denizi\'ne ulaşan hat arasındaki bölge. Hunlardan önceki kültür merkezleri: **Afanasyevo, Andronovo, Karasuk, Tagar**.' },
        { t: 'h', text: 'Asya Hun Devleti' },
        { t: 'steps', items: [
          'Hunların ilk yurdu **Sarı Nehir**\'in hemen kuzeyi; sonra Orhun–Selenga ve kutlu sayılan **Ötüken** merkezli geniş bir alan.',
          'Devleti **Teoman** kurdu; gerçek devlet kimliğine **Mete Han** zamanında ulaştı.',
          'Mete\'nin oğlu **Ki-ok** döneminde güç korundu.',
          'İ.Ö. 51\'de **Çi-Çi ve Ho-han-yeh** kardeşler döneminde bölünme tehlikesi; İ.S. 48\'de resmî bölünme; İ.S. 216\'da yıkılış.'
        ] },
        { t: 'h', text: 'Hunlardan sonra' },
        { t: 'table', cls: 'k1', head: ['Tarih (İ.S.)', 'Olay'], rows: [
          ['552', '**Göktürk Devleti** kuruldu; bölgede kısa süreli istikrar.'],
          ['582', 'Doğu ve Batı Göktürkleri olarak ikiye ayrıldı.'],
          ['630–680', '"Çin esareti" dönemi.'],
          ['681', '**II. Göktürk Devleti**; Kapgan Kağan (692–716) döneminde büyük güç.'],
          ['744', '**Uygur Devleti** kuruldu.'],
          ['821 sonrası', 'Uygurlar zayıflayıp yıkılma sürecine girdi.']
        ] },
        { t: 'h', text: 'Toplum ve devlet yapısı' },
        { t: 'table', head: ['Birim', 'Açıklama'], rows: [
          ['Aile', 'Toplumun temeli.'],
          ['Urug', 'Ailelerin birleşmesi.'],
          ['Boy', 'Urugların birleşmesi; başında **boy beyi**.'],
          ['Budun', 'Boyların birleşmesi; başında **Şad, Yabgu, İlteber** gibi unvanlı yöneticiler.'],
          ['İl (devlet)', 'En üst aşama; başında **Kağan, Han ya da Hakan**.']
        ] },
        { t: 'ul', items: [
          'Egemenliğin kaynağı **Gök Tanrı**; onun **kut** verdiğine inanılan kişi kağan olur. Kağan **Hatun** ve **Toy** meclisiyle yönetir.',
          'Geçim: **hayvancılık** başta; tarım, avcılık, balıkçılık, madencilik (özellikle **demir işçiliği**), dericilik, ticaret.',
          'Ordu atlılardan oluşur; **sürekli ordu**, paralı askerlik yok.',
          'İnanç: **doğa güçlerine inanma**, **atalar kültü** ve bunların temeli **Gök Tanrı** inancı.',
          'Hükümdarlık sembolleri: **taht, davul, otağ, kotuz ve yay**. Ölenin yeri belli olsun diye **kurganlar** yapılır, çevresine **balballar** dikilirdi.'
        ] },
        { t: 'music', items: [
          'Bizanslı tarihçi **Priskos** (İ.S. 5. yy), **Attila**\'nın verdiği bir ziyafette Hun müzisyenlerinin **halk türküleri** söylediğini yazar.',
          'Çin kaynakları **28 çeşit Hun halk türküsü** olduğunu ve bunların **telli, nefesli ve vurmalı** çalgılarla çalınıp söylendiğini anlatır.',
          'Asya Hunlarından itibaren Türklerde **en çok kullanılan çalgı kopuz**dur.',
          'Eski Türklerde müzik hem **askerî mızıkada** hem **dinsel törenlerde** kullanılırdı. Yas törenlerinin lirik matem şiirleri **sagu**lar, Türk halk edebiyatının önemli bir koludur.',
          '**Davul**, taht ve otağ ile birlikte bir **hükümdarlık sembolüdür**.'
        ] },
        { t: 'ext', label: 'Müzik açısından · ek bilgi', text: 'Hükümdarlık sembolü olan davul ve **tuğ** etrafında çalınan askerî mızıka, Türk müziği tarihinde **mehter** geleneğinin kökü olarak kabul edilir. Şaman (kam) törenlerinde **davul**, ruhlar dünyasıyla bağlantının aracı sayılırdı.' }
      ] },

    /* 10 */
    { id: 'iran', title: 'İran: Elam, Med ve Pers', short: 'İran', src: 'Ünite 5 · İran Tarihi ve Uygarlığı',
      blocks: [
        { t: 'p', text: '**İran**: Dicle\'nin doğusundaki dağlardan Afganistan\'a, kuzeyde Hazar ve Harezm\'e, güneyde Umman Denizi\'ne, güneybatıda Basra Körfezi\'ne uzanan coğrafya. Bu topraklarda sırayla **Elamlar, Medler, Persler** egemen oldu; Persleri yıkan İskender\'den sonra Hellenistik **Selevkos Krallığı** kuruldu.' },
        { t: 'table', cls: 'k1', head: ['Halk', 'Özet'], rows: [
          ['Elamlar', 'İ.Ö. 3. binyılda **Avan** merkezli siyasi birlik; Akkadlarla mücadele, bir süre Akkad egemenliği, sonra bağımsızlık. **İ.Ö. 653**\'te Assurlular yıktı.'],
          ['Medler', 'Tahran, Hemedan, İsfahan\'ın kuzeyi, Zencan çevresi. Assur\'u yıkınca Anadolu\'ya yöneldi; **İ.Ö. 591–585** Lidyalılarla savaştı. **İ.Ö. 550**\'de egemenlik Perslere geçti.'],
          ['Persler', '**Pasargad** boyunun **Akamenid** kolu. Gerçek kurucu **II. Kyros**: Med hanedanına son verdi, Ege kıyılarına ulaştı. **II. Kambyses** Mısır\'ı, **I. Darius** Makedonya kıyılarını aldı, Hindistan\'a sefer. **III. Darius** döneminde **İskender**\'le üç savaş imparatorluğun sonu oldu.']
        ] },
        { t: 'h', text: 'Pers uygarlığı' },
        { t: 'ul', items: [
          'Geniş bir alanda çok sayıda halkı yönetmek için **otoriter ama adaletli**, ayrıntılı **bürokratik ve merkezî** bir sistem; ülke **satraplıklara** bölündü. Persepolis\'teki binlerce tablet bunu gösterir.',
          'Askerî devlet olduklarından yollara önem verdiler: en ünlüsü Herodotos\'un **Kral Yolu** dediği, **Sardis**\'ten başlayıp Frigya, Kızılırmak, Tokat, Sivas, Malatya üzerinden İran\'a uzanan yol (**I. Darius**).',
          'Darius: Nil–Kızıldeniz kanalını tamamlattı, vergi ve maliyeyi düzenledi, **tek para sistemi** kurdu, sanatı teşvik etti.',
          'Ön Asya\'da **çivi yazısını kullanan son ulus**: Pers çivi yazısı **41 hece işaretinden** oluşur. Behistun yazıtı (Pers, Babil, Elam dilinde) çivi yazısının çözülmesini sağladı (**Rawlinson**).',
          'Beş başkent: Ekbatana, Susa, Babil, **Pasargad** ve **Persepolis**.',
          'Din: **Zerdüşt (Zoroaster)** dini; tek tanrı **Ahuramazda** ("bilgeliğin hükümdarı"); herkesi **yalana karşı** savaşmaya çağırır.'
        ] },
        { t: 'ext', label: 'Müzik açısından · ek bilgi', text: 'Zerdüştçülüğün kutsal kitabı Avesta\'nın en eski bölümü **Gatha**lar, Zerdüşt\'e atfedilen ve **ezgiyle okunan ilahilerdir**. Pers saray kültüründe arp türü çalgılar (sonra **çeng** adıyla bilinen) ve törensel nefesliler kullanılırdı.' }
      ] },

    /* 11 */
    { id: 'yunan1', title: 'Yunan I: Minos\'tan Arkaik Çağ\'a', short: 'Yunan I', src: 'Ünite 6 · Eski Yunan Tarihi ve Uygarlığı',
      blocks: [
        { t: 'table', cls: 'k1', head: ['Dönem', 'Tarih (İ.Ö.)', 'Özellikler'], rows: [
          ['Minos uygarlığı', '~3000–1300', 'Merkez **Girit**, başkent **Knossos**. **Teokratik**, kral ve soylular. **Linear A** yazısı, Akalar Girit\'i alınca **Linear B**. Ahşap, tekstil, seramik, **freskolu saraylar**, mühürler. Geniş deniz ticareti. Kutsal semboller: **boğa**, takdis boynuzları, **çift yüzlü balta**, yılan, güneş diski, ağaç.'],
          ['Miken uygarlığı', '1600–1100', 'Homeros\'un İlyada\'sındaki "Yunanlılar" aslında **Akalar**. Feodal krallıklar, **Linear B**. Ticaret yollarına hâkim; zeytinyağı, şarap, parfüm, fildişi, seramik, bronz… Kentler: Mikenai, Tebai, Tiryns, Pilos, Atina; **Kiklop duvarları**. İlk izler **1876**\'da **Schliemann** kazısıyla. Çöküş ~1100, iç savaşlar.'],
          ['Karanlık (Geometrik) Çağ', '1100–900', 'Kuzeyden **Dor istilası**. Kültürel ögeler kaybolur, Anadolu, Ortadoğu ve Mısır\'la ticaret kesilir. Çömleklerde **keskin geometrik desenler**. Sonlara doğru doğu ve batıda **koloniler**. **Polis** (kent devleti) ortaya çıkar: Atina, Sparta, Thebai, Megara, Korinthos.'],
          ['Arkaik Çağ', '650–490/480', 'Yaratıcı dönemin başlangıcı. **Tiranlık**. Atina\'da **Solon** (İ.Ö. 594) sınırsız yetkiyle reform; **Kleisthenes** (508/507) demokrasiye yön verdi. **Miletos** felsefenin beşiği (**Thales**), matematiği bilim yapan **Pythagoras**. Akropolis yapılar ve heykellerle donatıldı (480\'de Persler yaktı). İlk **doğal ölçüde heykeller** (kuros, kore). Vazolarda **siyah figür** ve **kırmızı figür** üslubu.']
        ] },
        { t: 'h', text: 'Homeros' },
        { t: 'p', text: 'Kitaba göre **Homeros** İ.Ö. **8. yüzyılda**, İyonya\'da, büyük olasılıkla **Smyrna** (İzmir)\'da doğdu. Miken uygarlığının kral ve kahramanları onun **İlyada** ve **Odysseia** destanlarında anlatılır. İlyada\'nın konusu, Tunç Çağı sonunda **Akalar ile Troyalılar** arasında geçen **9 yıllık** savaş; neden: Troyalı **Paris**\'in Sparta kralı Menelaos\'un karısı **Helena**\'yı kaçırması.' },
        { t: 'h', text: 'Pythagoras' },
        { t: 'p', text: 'Kitaba göre **Pythagoras (Pisagor)** İ.Ö. yaklaşık **582–500** yıllarında yaşadı, **Samos** (Sisam) adasında doğdu. Öğretisine göre evrendeki **her şey bir sayı** (özellikle tam sayı) ile özdeşleşir.' },
        { t: 'ext', label: 'Müzik açısından · ek bilgi', items: [
          '**Pythagoras ve müzik**: Gerilmiş bir teli ikiye bölmenin **oktavı (2:1)**, 3\'te 2\'sinin **beşliyi (3:2)**, 4\'te 3\'ünün **dörtlüyü (4:3)** verdiğini gösterdiği anlatılır. "Her şey sayıdır" öğretisinin en güzel örneği **müzik aralıklarıdır**; Batı müzik teorisi bu oranlardan doğar (MÜZ1017\'deki "dizinin doğuşu" ile karşılaştır).',
          'Homeros destanları yazılmadan önce **ozanlar (aoidos, rapsodos)** tarafından **lir (phorminks)** eşliğinde ezbere söylenirdi.',
          '**Lirik** şiir adını **lir** çalgısından alır: Lesboslu **Sappho** gibi şairlerin şiirleri lir eşliğinde söylenmek için yazılmıştır.'
        ] }
      ] },

    /* 12 */
    { id: 'yunan2', title: 'Yunan II: Klasik ve Hellenistik Çağ, günlük yaşam, tiyatro', short: 'Yunan II', src: 'Ünite 6 · Klasik Çağ · Hellenistik Çağ · Günlük yaşam ve ölü gömme',
      blocks: [
        { t: 'h', text: 'Klasik Çağ (İ.Ö. 5. ve 4. yüzyıllar)' },
        { t: 'ul', items: [
          'Başında **Yunan–Pers savaşları**; en önemlisi **Maraton Savaşı** (İ.Ö. 490), Yunanlıların lehine.',
          'İ.Ö. 478\'de Sparta dışındaki kentler Atina önderliğinde **Attika–Delos Deniz Birliği**\'ni kurdu.',
          'İ.Ö. 461\'de **Perikles** Atina\'nın yöneticisi oldu: Atina\'nın **altın çağı**; büyük imar, Akropolis\'te **Athena Parthenos Tapınağı** (Parthenon); heykeltıraşı **Pheidias**. Diğer heykeltıraşlar **Myron, Polykleitos**.',
          'En ünlü filozof **Sokrates** (469–399); "tarihin babası" Halikarnassoslu (Bodrum) **Herodotos** (485–425).'
        ] },
        { t: 'h', text: 'Hellenistik Çağ (İ.Ö. 330–30)' },
        { t: 'ul', items: [
          'Makedonya Kralı **Büyük İskender** ile başlar, komutanlarının kurduğu krallıklarla İ.Ö. 31\'e kadar sürer: Mısır\'da **Ptolemaioslar**, Anadolu\'nun güneyinde **Seleukoslar**, Makedonya\'da **Antigonoslar**.',
          'Yunan kültürü Anadolu, Mısır, Pers kültürleriyle kaynaştı: **kozmopolit** bir kültür; Yunan tanrıları Doğu\'nun gizemli tanrılarından etkilendi.',
          'Mimaride Anadolulu **Hermogenes** (Magnesia\'daki Artemis Tapınağı, Teos\'taki Dionysos Tapınağı); taşta **ışık–gölge** oyunları.',
          'Heykelde konu çeşitliliği: **Praksiteles**\'ten itibaren tanrılar insanlar gibi günlük işleri içinde; her sınıftan insan sanata konu oldu.'
        ] },
        { t: 'h', text: 'Kamusal yapılar' },
        { t: 'table', cls: 'k1', head: ['Yapı', 'Açıklama'], rows: [
          ['Agora', 'Ticari, resmî, adli ve dinî işlevleri olan alan; "pazar yeri".'],
          ['Gymnasium / palaistra', 'Spor ve eğitim yapısı; palaistra güreş alanı.'],
          ['Stadyum', '**183 metrelik** uzunluk birimi ve bu uzunlukta koşu yapılan yer.'],
          ['Tiyatro', '**Orkestra**, **theatron** (oturma sıraları) ve **skene** (sahne). **Yamaca** inşa edilir, oturma sıraları yamacın eğimine oturtulur; Anadolu\'dakilerde sıralar **yarım daire** biçimli.'],
          ['Bouleuterion', 'Danışma meclisinin (Boule) toplandığı, bugünkü meclis binasına benzeyen yapı.']
        ] },
        { t: 'trap', text: 'Antik tiyatroya **amfitiyatro** demek yanlıştır: amfitiyatroda oturma sıraları orkestrayı **tam bir daire** hâlinde çevreler (ör. Roma\'daki **Colosseum**).' },
        { t: 'h', text: 'Günlük yaşam ve ölü gömme' },
        { t: 'ul', items: [
          'Güne **kahvaltıyla** başlanır; alt tabaka işine giderken diğerleri **gymnasium** ve **agora**ya gider.',
          'Akşamları evin erkeği ve oğlu misafirlerini **symposium** (şölen) ile ağırlar; evin kadınlarının katılması **yasaktır**.',
          'Giyim: **khiton** ve **himation**.',
          'Evlilik töreni **karanlık çöktükten sonra** başlar; gelin damadın evine arabayla götürülür, takı, ayna, parfüm hediye edilir. Gelin ve damadın arkadaşları **meşalelerle** yolu aydınlatır, kötü ruhları kaçırmak için **müzik çalar**.',
          'Ölümden sonra yaşamın sürdüğüne inanılır; ölüler yeraltı tanrısı **Hades**\'in yanına gider. Mezar üstüne **stel** dikilir; sevdiği eşyalar, yiyecek ve içecekler mezara konur. Gömü: **inhumasyon** (toprağa gömme) ve **kremasyon** (yakma).'
        ] },
        { t: 'h', text: 'Yunan tanrıları (kitaptaki tablodan)' },
        { t: 'table', head: ['Yunanca', 'Alanı', 'Sembolleri', 'Latince'], rows: [
          ['Zeus', 'Tanrıların başı, gök', 'Kartal, asa, şimşek', 'Jüpiter'],
          ['Hera', 'Evlilik ve doğum', 'Tavus kuşu, zambak, nar', 'Juno'],
          ['Athena', 'Akıl, bilgelik, savaş', 'Zeytin dalı, baykuş, kalkan', 'Minerva'],
          ['**Apollon**', '**Müzik, şiir ve ışık**', 'Ok, yay ve **lir**', 'Phoibus'],
          ['Artemis', 'Avcılık, ay', 'Ok, yay, geyik, hilal', 'Diana'],
          ['Ares', 'Savaş', 'Miğfer, mızrak', 'Mars'],
          ['Poseidon', 'Deniz', 'Üç çatallı asa', 'Neptün'],
          ['Hephaistos', 'Ateş, zanaat', 'Çekiç, örs', 'Volkanus'],
          ['Aphrodite', 'Aşk ve güzellik', '', 'Venüs']
        ] },
        { t: 'music', items: [
          '**Apollon** müzik, şiir ve ışık tanrısıdır; sembollerinden biri **lir**dir.',
          'Düğün alayında **müzik çalınarak** kötü ruhlar kaçırılır.',
          'Tiyatronun **orkestra** bölümü tiyatro yapısının temel parçasıdır.'
        ] },
        { t: 'ext', label: 'Müzik açısından · ek bilgi', items: [
          '"Müzik" kelimesi Yunanca **mousike**\'den gelir: **Müz**lerin (Musai) sanatı; şiir, ezgi ve dansı birlikte kapsar.',
          '**Orkestra** kelimesinin asıl anlamı tiyatrodaki **koronun şarkı söyleyip dans ettiği** yuvarlak alandır; bugünkü çalgı topluluğu anlamı sonradan doğmuştur. Trajedi ve komedide koro bölümleri **aulos** eşliğinde söylenirdi.',
          'Başlıca çalgılar: **lyra** ve büyük **kithara** (telli, Apollon\'un çalgıları), **aulos** (çift kamışlı çift borulu nefesli, Dionysos kültü), **syrinx** (Pan flütü), **tympanon** ve **krotala** (ritim).',
          'Symposiumlarda **aulos çalan kadın müzisyenler** ve lir eşliğinde söylenen şarkılar eğlencenin parçasıydı.',
          '**Seikilos yazıtı** (Aydın, Tralleis yakını, İ.S. ~1. yy): üzerinde **notasıyla birlikte** bir şarkı bulunan mezar steli; **eksiksiz günümüze ulaşan en eski beste** sayılır.',
          '**Delfi**\'deki Pythia oyunlarında müzik yarışmaları vardı; Apollon\'a yazılmış **Delfi ilahileri** notalarıyla taşa kazınmıştır.'
        ] }
      ] },

    /* 13 */
    { id: 'roma1', title: 'Roma I: kuruluştan Batı Roma\'nın yıkılışına', short: 'Roma I', src: 'Ünite 7 · Roma Tarihi',
      blocks: [
        { t: 'h', text: 'Krallık ve Cumhuriyet' },
        { t: 'ul', items: [
          'Efsaneye göre Roma\'yı **Remus ve Romulus** kurdu. Halkı Latium\'un yerlisi **Latinler**; kent bir süre **Etrüsk** kökenli kralların yönetimindeydi (yerleşim İ.Ö. 1000\'lerden beri).',
          '**İ.Ö. 509**: Latinler Etrüsk kraliyet ailesini kovup **Roma Cumhuriyeti**\'ni kurdu.',
          'Cumhuriyet ittifaklarla İtalya\'nın tamamını aldı; **Pön Savaşları**\'nda **Kartaca**\'yı yendi (Hannibal Gebze yakınında öldü; 3. Pön Savaşı sonunda Kartaca yıkıldı, İ.Ö. 146): Batı Akdeniz ve Kuzey Afrika. Balkanlar ve Doğu Akdeniz de alındı.',
          'Olağanüstü durumlarda senato bütün yetkileri bir **diktatör**e (genellikle o yılın **konsülü**) devrederdi.',
          'Cumhuriyet, **iç savaşlar** sonucunda yıkıldığında Akdeniz\'in neredeyse tamamına hâkimdi.'
        ] },
        { t: 'h', text: 'İmparatorluk' },
        { t: 'steps', items: [
          'İç savaşlardan galip çıkan **Octavianus**\'a İ.Ö. 27\'de senato **Augustus** ("yüce") unvanını verdi: **ilk Roma imparatoru**. İmparatorlar senato ve halkın gücünü kısıtlayıp **mutlak** yönetime geçti.',
          'İ.S. **1. ve 2. yüzyıllar**: imparatorluk en geniş sınırlarına ulaştı; genel barış (Pax Romana), ekonomik refah, görkemli şehirler.',
          'İ.S. **3. yüzyıl**: imparator seçiminde ordu birliklerinin söz sahibi olma isteği huzuru bozdu; yoğun iç savaşlar, aynı anda birden fazla imparator; **Kavimler Göçü** baskısı. Yüzyıl sonunda **idari reformlar** düzeni getirdi, imparatorun mutlak gücü pekişti.',
          'İ.S. **4–5. yüzyıllar**: **Hristiyanlık** hızla yayılıp **devlet dini** oldu. Germen kökenli halklarla Latince konuşan **Batı** ile Yunanca konuşan **Doğu** arasındaki fark büyüdü; **Constantinopolis** ikinci başkent oldu.',
          '**İ.S. 395**: imparatorluk kesin olarak **ikiye bölündü**.',
          '**İ.S. 476**: **Batı Roma** yıkıldı. **Doğu Roma** Orta Çağ boyunca sürdü; tarihçiler buna **Bizans** der.'
        ] },
        { t: 'tip', text: 'Tarih zinciri: **509 Cumhuriyet → 27 Augustus (İ.Ö.) → 395 bölünme → 476 Batı Roma\'nın sonu (İ.S.)**.' }
      ] },

    /* 14 */
    { id: 'roma2', title: 'Roma II: uygarlık ve günümüze etkileri', short: 'Roma II', src: 'Ünite 7 · Roma Uygarlığı',
      blocks: [
        { t: 'table', cls: 'k1', head: ['Alan', 'Özellik'], rows: [
          ['Din', 'Çok tanrılı; fethedilen yerlerde Roma politikasıyla çelişmedikçe **yerli dinlere karışmazdı**. İ.Ö. 2. yüzyıldan itibaren Doğu dinleri ve Yunan tanrıları Roma panteonuna girdi: ör. Frigya\'nın **Kybele**\'si Roma\'da **Magna Mater** (Büyük Ana) oldu; Pessinus\'taki kült taşı Roma\'ya taşındı. **Hristiyanlık** önce yadırgandı ve yasaklandı, Geç Roma\'da **resmî ve tek izinli din** oldu.'],
          ['Mimarlık', 'Yollar ve ticaret rotaları; stratejik yerlerde yeni şehirler. **Tuğla, çimento** gibi ucuz ve hafif malzemeyi **kemer ve tonozla** birleştirip **çok katlı yüksek yapılar**. Şehirler anıtsal kamu yapılarıyla donatıldı (ör. Flaviuslar döneminde tamamlanan **Colosseum**).'],
          ['Heykel', 'Yunan başyapıtlarının kopyaları; özellikle **portre heykelcilikte** çok üstün eserler; imparatorluk politikası doğrultusunda **politik mesaj** veren eserler.'],
          ['Ordu', '**Lejyonlar**; disiplinli ve iyi eğitimli. Barışta vergi toplama, yol ve kamu yapısı inşaatı: Roma uygarlığının yayılmasının ana aracı. Ama politikaya karışıp imparatorları belirlemesi iç savaşlara yol açtı; Geç dönemde yabancı kökenli askerler ve hantallık Kavimler Göçü\'nde yenilgi getirdi.'],
          ['Hukuk', 'Cumhuriyet\'te **senato kararları**, İmparatorluk\'ta **imparator emirleri** kanun sayılıp yazıya geçirildi; bugün Batılı devletlerin kanunlarının **temeli**.'],
          ['Ekonomi', 'Cumhuriyet çalkantılı; İmparatorluk başında barış ve yollar sayesinde hızlı gelişme, **serbest ticaret**; Çin\'e kadar ulaşan Asya ticareti (Roma sikkeleri). Geç dönemde para değer kaybı, **enflasyon**; azami fiyat sabitleme ve yeni sikkelerle reform denemeleri; sonunda **feodal** ekonomiye geçiş.']
        ] },
        { t: 'p', text: '**Günümüze etkisi**: görsel sanatlar, mimari, edebiyat ve bilimde Roma eserleri günümüz uygarlığının temelini oluşturur; devlet yönetimi, idare, kanunlar ve ekonomide Roma temelleri üzerine kurulu sistemler hâlâ yaşar.' },
        { t: 'music', text: 'Kitapta geçen: Frig tanrıçası **Kybele**\'nin kültü Roma\'ya **Magna Mater** adıyla taşındı (bu kültün davul, zil ve aulos eşliğindeki coşkulu törenleri için Anadolu III\'teki ek bilgiye bak).' },
        { t: 'ext', label: 'Müzik açısından · ek bilgi', items: [
          '**Hydraulis (su orgu)**: İskenderiyeli **Ktesibios**\'un (İ.Ö. 3. yy) icadı; havayı su basıncıyla dengeleyen bir org. Roma\'da **amfitiyatro gösterilerinde** ve şölenlerde çalınırdı; bugünkü **orgun atası**.',
          'Askerî bakır nefesliler: düz **tuba**, büyük daire biçimli **cornu**, ucu kıvrık **lituus**; komut vermek için kullanılırdı. Gladyatör gösterilerini anlatan mozaiklerde **hydraulis ve cornu** birlikte görülür.',
          'İmparator **Nero** kendini **kithara** çalan bir sanatçı olarak gösterir, yarışmalara katılırdı.',
          'Hristiyanlığın devlet dini olması, Orta Çağ **kilise müziğinin** (ilahiler, sonra Gregoryen ilahi) zeminini hazırladı.'
        ] }
      ] },

    /* 15 */
    { id: 'genel', title: 'Antik dünyada müzik: genel bakış', short: 'Müzik: genel bakış', src: 'Kitaptaki müzik bilgileri + ek bilgiler (tek tabloda)',
      blocks: [
        { t: 'p', text: 'Ünitelerdeki müzik bilgilerini bir arada görmek için. **K** = kitapta geçen bilgi, **E** = ek bilgi.' },
        { t: 'table', cls: 'k1', head: ['Uygarlık', 'Çalgılar ve belgeler', 'Müziğin yeri'], rows: [
          ['Tarih öncesi', 'Kemik ve fildişi **flütler** (~40 bin yıl) **E**', 'Üst Paleolitik\'te sanatın doğuşu **K** · Çatalhöyük duvar resimlerinde **dans** **K**'],
          ['Mezopotamya', 'Ur\'un **boğa başlı lirleri**, arp **E** · lir akort tabletleri **E** · Hurri ilahisi No. 6 **E**', 'Tanrılara **ilahi, kaside, ağıt** **K** · Enheduanna **E**'],
          ['Mısır', '**Arp**, sistrum, flüt, çift obua, Tutankamon trompetleri **E** · **lir ve lavta** Hiksoslarla gelir **K**', 'Cenazede ilahi okuyan **Kiten** kadınları **K** · mezar resimlerinde **dans** **K**'],
          ['Anadolu', 'İnandık vazosu: lir, lavta, zil **E** · Frig aulosu, Kybele davulu **E**', 'Frigler "**müzik ve dansta ünlü**" **K** · Frig ve Lidya modları **E**'],
          ['Orta Asya', '**Kopuz** **K** · **davul** (hükümdarlık sembolü) **K** · telli, nefesli, vurmalı çalgılar **K**', '**28 çeşit Hun türküsü** **K** · askerî mızıka ve din törenleri **K** · **sagu** **K**'],
          ['İran', 'Arp türü çalgılar **E**', 'Gatha ilahileri **E**'],
          ['Yunan', 'Lyra, kithara, **aulos**, syrinx **E** · **Apollon\'un lir**i **K**', 'Tiyatroda koro (orkestra) **E** · düğünde müzik **K** · Pythagoras oranları **E** · Seikilos yazıtı **E**'],
          ['Roma', '**Hydraulis**, tuba, cornu, lituus **E**', 'Amfitiyatro gösterileri, ordu **E** · Kybele (Magna Mater) kültü **K**']
        ] },
        { t: 'tip', text: 'Ortak çizgi: antik dünyanın her yerinde müzik **din, devlet ve savaşla** iç içedir. Telli çalgılarda **lir–arp–lavta**, nefeslilerde **flüt–çift kamışlı (aulos)–bakır borular**, ritimde **davul–zil–sistrum** aileleri öne çıkar.' }
      ] }
  ]
});
