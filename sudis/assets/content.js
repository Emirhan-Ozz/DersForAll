/* Sudis — özet verisi
   Biçim: BRIEF.md'deki TOPICS blokları (p, ul, ol, table, trap, tip, low) + h (ara başlık), quote.
   Satır içi: `kod` ve **kalın**. Soru bankası sonra eklenecek (questions.js). */

window.SITE = {
  storeKey: 'sudis-okundu',
  greeting: 'Hoşgeldin güzelim, ne çalışmak istersin? :3'
};

window.SUBJECTS = [
/* =====================================================================
   1) GÖÇ TARİHİ — Hisashi Yano
   ===================================================================== */
{
  id: 'goc',
  no: 1,
  title: 'Göç Tarihi',
  author: 'Hisashi Yano',
  src: 'Chiellino (Ed.), I. Genel Bölüm, 1. Göç Tarihi',
  desc: 'Konuk işçiler, yabancılar politikasının beş evresi, sığınma, Aussiedler ve yabancı düşmanlığı.',
  traps: [
    { t: 'İşçi alım anlaşmalarını **Almanya değil, işçi gönderen ülkeler** başlattı (işsizlik + döviz ihtiyacı).', topic: 'evre1' },
    { t: 'Türkiye anlaşması **1961**. İki yıllık kalış sınırı **1964**\'te kaldırıldı: rotasyon ilkesinden ilk kopuş.', topic: 'evre1' },
    { t: 'En büyük yabancı grup: **1969 İtalyanlar (%23)** → 1970 Yugoslavlar → **1972 Türkler**.', topic: 'evre1' },
    { t: 'İşçi alımının durdurulması (Anwerbestopp): **23 Kasım 1973**. Kısıtlama petrol krizinden önce, **1972**\'de planlanmıştı.', topic: 'evre1' },
    { t: '**Kühn Memorandumu (1979)** fiilî göç ülkesi tanınmasını önerdi ama **doğrudan etkisi olmadı**.', topic: 'evre25' },
    { t: '**1990 Yabancılar Kanunu** gençlere vatandaşlığı kolaylaştırsa da özünde bir **göç sınırlama kanunu**dur.', topic: 'evre25' },
    { t: 'Sığınma hakkı: Anayasa **md. 16**. Aussiedler\'lerin vatandaşlık hakkı: Anayasa **md. 116**. Aussiedler yabancı sayılmaz.', topic: 'siginma' },
    { t: 'Hoyerswerda (1991 sonbaharı): şiddet ilk kez halkın bir kesiminde açık onay buldu **ama** geniş bir dayanışma dalgası da başlattı.', topic: 'dusmanlik' }
  ],
  topics: [
    {
      id: 'kavramlar', title: 'Giriş ve kavramlar',
      blocks: [
        { t: 'p', text: 'Federal Almanya\'nın göç tarihi öncelikle **konuk işçiler** (Gastarbeiter), ayrıca diğer yabancı grupları ve son dönemde **Aussiedler**\'lerle (Doğu Avrupa\'dan gelen Almanlar) ilgilenir. Sıra: önce yabancı işçiler, sonra mülteciler/sığınmacılar, en son Aussiedler.' },
        { t: 'tip', text: 'Yazarın bakışı: göçmenler yalnızca göçün **kurbanı** değil, aynı zamanda **bağımsız aktörler** olarak ele alınmalı.' },
        { t: 'h', text: 'Adlandırmanın değişimi' },
        { t: 'table', head: ['Kavram', 'Dönem', 'Not'], rows: [
          ['Gastarbeitnehmer (konuk çalışan)', '1950\'ler', 'Mesleki ve dilsel gelişim için **sınırlı süre** çalışan kişi'],
          ['Gastarbeiter (konuk işçi)', '1960–70\'ler', 'Gündelik dilden; aile birleşimiyle kalış uzayınca uygunsuz bulundu'],
          ['Ausländische Arbeitnehmer (yabancı işçiler)', '70\'lerden itibaren', '**Resmî** olarak onaylanan kavram'],
          ['Ausländer (yabancılar)', '80\'ler başı', '›Yabancılar dışarı‹ sloganları ve ›yabancı sorunu‹ polemikleriyle **olumsuz** anlam kazandı'],
          ['Einwanderer / Migranten (göçmenler)', 'Sonra', 'Siyasi ve hukuki açıdan **doğru değil**: FA kendini göç ülkesi görmüyor'],
          ['Etnik, kültürel, dilsel azınlıklar', 'Son dönem', 'Çoğu zaman **en uygun** kavram sayıldı']
        ] }
      ]
    },
    {
      id: 'evreler', title: 'Yabancılar politikasının 5 evresi',
      blocks: [
        { t: 'p', text: 'Metnin omurgası bu beş evredir. Tarihleri ve adlarını ezberle; ayrıntılar sonraki başlıklarda.' },
        { t: 'table', head: ['Evre', 'Yıllar', 'Adı / ana özellik'], rows: [
          ['1', '1955–1973', '**İşçi alımı evresi** / ›konuk işçi dönemi‹. Yalnızca işgücü piyasası politikası, istihdam **geçici** sayılıyor.'],
          ['2', '1973–1979', '**Yabancı istihdamının konsolidasyonu**: göçün sınırlandırılması, geri dönüşün teşviki, **süreli** entegrasyon.'],
          ['3', '1979–1981', '**Entegrasyon kavramları evresi**: ›Türk sorunu‹ kampanyası, Kühn Memorandumu.'],
          ['4', '1981–1990', '**Yabancılar politikasında dönüşüm**; sığınma sorunu da eklendi.'],
          ['5', '1990–2000', '**Yoğunlaşan göç ve yeni göç durumu**; 1990 Yabancılar Kanunu, sığınma uzlaşması.']
        ] },
        { t: 'tip', text: 'Kısa yol: **55 alım → 73 durdurma → 79 entegrasyon → 81 dönüşüm → 90 yeni göç.**' }
      ]
    },
    {
      id: 'evre1', title: '1. evre: İşçi alımı (1955–1973)',
      blocks: [
        { t: 'p', text: '50\'lerde ekonomik büyümeyle işsizlik **işgücü açığına** dönüştü. Federal hükümet denetimli yabancı işgücü için işçi alım anlaşmaları imzaladı.' },
        { t: 'table', head: ['Yıl', 'Ülke'], rows: [
          ['1955', 'İtalya (20.12.1955, Çalışma Bakanı Storch)'],
          ['1960', 'Yunanistan, İspanya'],
          ['1961', '**Türkiye**'],
          ['1963', 'Fas'],
          ['1964', 'Portekiz'],
          ['1965', 'Tunus'],
          ['1968', 'Yugoslavya']
        ] },
        { t: 'ul', items: [
          'Müzakereler **işçi gönderen ülkelerin girişimiyle** başladı: eksik istihdam, işsizlik, **döviz temini**. Almanya ancak şirketlerin çıkarı gerektirince kabul etti.',
          'Sendikalar temelden karşı çıkmadı; yalnızca yabancı işçilerin ücret ve koşullarda **yerlilerle eşit** tutulmasında ısrar etti.',
          'Alım süreci: işveren → iş ve işçi bulma kurumu → **işçi alım komisyonu** (mesleki nitelik + tıbbi seçim). Ayrıca vizeyle **›ikinci yol‹**.',
          'Hukuk: **1938 Yabancılar Polisi Yönetmeliği** (ölçüt: kişisel ›layıklık‹) → **1965 Yabancılar Kanunu** (ölçüt: ›kamu yararı‹, makamların takdiri).'
        ] },
        { t: 'h', text: 'Anlaşmalar arasındaki farklar' },
        { t: 'ul', items: [
          'Kalışı **2 yılla sınırlayan** yalnızca **Türkiye ve Fas** anlaşmaları.',
          '**Sağlık denetimi** öngören yalnızca **Türk ve Tunus** anlaşmaları.',
          '**Aile birleşimi** bölümü yok: Türkiye, Fas, Tunus, Yugoslavya (İtalya, İspanya, Yunanistan, Portekiz\'de var).',
          '**1964**: Türkiye ile 2 yıl sınırı kaldırıldı → rotasyon ilkesinden uzaklaşma, fiilî göçe ilk adım.'
        ] },
        { t: 'h', text: 'Sayılar ve gelişmeler' },
        { t: 'ul', items: [
          '**1966/67 resesyonu**: yabancı istihdamında ~400.000 azalma; konjonktürel **dengeleme (tampon) işlevi** ilk kez fark edildi.',
          '1973\'e kadar yüksek konjonktür: yabancı çalışan **991.300 → 2.595.000**.',
          '**1968** AET içinde serbest dolaşım. **1969**\'da en büyük grup **İtalyanlar (%23)**; ama gönüllü geri dönüş onlarda yüksek.',
          '1970 ortası Yugoslavlar İtalyanları geçti, Ocak 1971 Türkler ikinci, **1972\'de en fazla yabancı çalışan Türkler**. Göç **1973 dolaylarında** doruğa ulaştı.',
          'İstanbul\'daki Alman İrtibat Bürosu Temmuz 1971\'de günde **700+** Türk başvurucuyu muayene ediyordu. Türkiye\'de başvuran sayısı gidenlerin **4 katı** → usulsüzlük, rüşvet, kayırmacılık.',
          '**1971**: 5 yıldan uzun kesintisiz çalışan yabancıya işletme/meslekten bağımsız **özel çalışma izni**.',
          '1956–1973 arası gelen ~**5,1 milyon** kişinin **%54**\'ü komisyon olmadan geldi → **zincirleme göç**.',
          'Okullarda yabancı öğrenci **35.000 (1965/66) → 159.000 (1970/71)** → ›yabancılaşma‹ (**Überfremdung**) korkusu.'
        ] },
        { t: 'h', text: 'Evrenin sonu' },
        { t: 'ul', items: [
          'Hükümet **1972**\'de (petrol krizinden önce) yabancı sayısını sınırlamayı öngördü → **Haziran 1973 ›Yabancı İstihdamı Eylem Programı‹**.',
          '**1973 Köln Ford** fabrikasında Türk işçilerin sendika onaysız grevleri; başka fabrikalarda **80+** grev eylemi. Gözetim sıkılaştı.',
          '**23 Kasım 1973**: **işçi alımının durdurulması (Anwerbestopp)**.'
        ] },
        { t: 'trap', text: 'Siyasi-Hukuki Koşullar metni durdurmanın **Ekim 1973**\'te ilan edildiğini yazar. Bu metinde (Yano) tarih **23 Kasım 1973**. Sınavda hangi metinden sorulduğuna dikkat et.' }
      ]
    },
    {
      id: 'evre25', title: '2.–5. evreler (1973–2000)',
      blocks: [
        { t: 'h', text: '2. evre: Konsolidasyon (1973–1979)' },
        { t: 'ul', items: [
          'Üç temel düşünce: **göçün sınırlandırılması, geri dönüşün teşviki, süreli toplumsal entegrasyon**.',
          'Eylül 1973 – Eylül 1980: yabancı **istihdamı ~%20 düştü** (2,6 → 2,1 milyon) ama yabancı **nüfus arttı** (3,5 → 4,5 milyon).',
          '1974/76 petrol krizi: çalışma izni kısıtlayıcı uygulandı, işsizlik parasında ayrımcılık. 1974\'e kadar yabancı işsizliği ortalamanın (%4,7) **altındaydı**, sonra yükseldi. İşsizlerin çoğu gitmedi: **sessiz işgücü yedeği**.',
          '**1975**: yabancı oranı **%12**\'nin üzerindeki şehirlere (Frankfurt, Münih, Köln) **bölgesel yönlendirme** → başarısız, **1977**\'de terk edildi.',
          'İspanyollar ve Yunanlar azaldı (70\'ler ortasında **demokrasiye dönüş** + ekonomik gelişme). Türkler tersine: **1977**\'den itibaren yine arttı; Türk nüfusu **1.118.000 (1973) → 1.462.000 (1980)**, çoğunlukla **aile birleşimi**.',
          '10 yıldan uzun yaşayanlar **%16 → %38** (1973–80). Almanya artık **fiilen bir göç ülkesi**; yabancı istihdamının **tampon işlevi ortadan kalktı**.'
        ] },
        { t: 'h', text: '3. evre: Entegrasyon kavramları (1979–1981)' },
        { t: 'ul', items: [
          '1979 **ikinci petrol krizi** ile ›**Türk sorunu**‹ kampanyası (1982/83\'e kadar). Popüler basın sertleşti, Türklerin ve Asyalı-Afrikalı mültecilerin kaldığı yerlere saldırılar.',
          'İlk kez göçün önkoşulları ve etkileri gerçekçi teşhis edildi; **entegrasyon politikası** tartışmanın merkezine yerleşti.',
          '**Kühn Memorandumu (Eylül 1979)**: FA\'nın fiilî göç ülkesi olarak tanınması, ›süreli entegrasyon‹dan vazgeçilmesi; okul öncesi/okul entegrasyonu, gençlere iş ve eğitime engelsiz erişim, **gençlere vatandaşlık seçeneği**, **yerel seçimlerde oy hakkı**.',
          'Memorandumun **doğrudan etkisi olmadı** (SPD/FDP hükümeti işgücü piyasası önceliğinde ısrar etti).',
          '1980\'de vatandaşlığa geçiş oranı: 10+ yıllık yabancıların **%0,9**\'u, Türklerde yalnızca **%0,1**. Ailelerde ebeveyn-çocuk **kültür çatışmaları**.'
        ] },
        { t: 'h', text: '4. evre: Dönüşüm (1981–1990)' },
        { t: 'ul', items: [
          '**Aralık 1981** sınırlamaları (AT dışı yabancılar): ikinci kuşağın **eş birleşimi kısıtlandı**, çocuklar için birleşme yaşı **16**\'ya indi. Yetki **işgücü piyasası** mercilerinden **kamu düzeni** mercilerine kaydı.',
          '**Temmuz 1982**: **geri dönüş primi**, emeklilik primlerinin beklemesiz iadesi, danışmanlık. **Kasım 1983**: CDU/CSU-FDP **Geri Dönüş İstekliliğini Teşvik Kanunu**.',
          'Primler **amacına ulaşmadı**: Türk, Yugoslav, Yunan işçiler aile getirmeye devam etti. Yabancı nüfus 1983–89: **4,5 → 4,8 milyon**.',
          '1988: %16\'sı 20+ yıldır, 1991: **%56,7**\'si 10+ yıldır Almanya\'da → çoktan fiilî göçmen.',
          'Politika siyasi iktidar mücadelesine **araçsallaştırıldı**. 1986 mültecilere saldırılar, **1987** sığınma seçim kampanyasında öne çıktı. **1990** yeni Yabancılar Kanunu.'
        ] },
        { t: 'h', text: '5. evre: Yeni göç durumu (1990–2000)' },
        { t: 'ul', items: [
          '**1990 Yabancılar Kanunu**: gençlere vatandaşlığı kolaylaştırmayı amaçladı **ama** idarenin takdir alanını genişletti, **yeterli konut kanıtı** şart koştu, sınır dışı etmeyi sertleştirdi → **göç sınırlama kanunu**.',
          'Kanun rotasyon ilkesine göre süreli sözleşmeyle yeni bir **›konuk işçi statüsü‹** yarattı.',
          '**1992 sığınma uzlaşması** süreli yabancı işçilerin **3 kategorisini** tanımladı (aşağıdaki tablo).',
          '**1992**\'de ~**312.000** yeni yabancı işgücü geldi (1973\'ten fazla); eski işçi gönderen ülkeler dışından gelenlerin oranı arttı.',
          '90\'lardan sonra yarı vasıflı/vasıflı işlerde görece güvence. Ama **Kasım 1993** yabancı işsizliği **%16,8** = Almanların **iki katı**. Büro çalışanı ve serbest meslek artışı: göçmenler yalnızca kurban değil.',
          'Vatandaşlığa geçiş **24.744 (1974) → 199.433 (1993)**; 1994 anketinde yabancıların **%52**\'si ilgili.',
          '1998 sonbaharı hükümet değişikliği → **7 Mayıs 1999** vatandaşlık hukuku değişikliği: **1 Ocak 2000**\'den itibaren Almanya\'da doğan yabancı çocuklar **iki pasaportla** büyüyebilir, **23 yaşına** kadar karar verir.'
        ] },
        { t: 'table', head: ['1992 kategorisi', 'Süre', 'Sayı ve not'], rows: [
          ['Eser sözleşmeli işçiler', '2 yıla kadar', '1995 başı ~56.000 (~36.000\'i inşaatta); yabancı taşeron, Alman genel yükleniciyle sözleşme'],
          ['Konuk çalışanlar', '1 yıl', 'Mesleki/dilsel gelişim; kontenjan ~12.000, 1994\'te ancak yarısı kullanıldı'],
          ['Mevsimlik işçiler', '3 aya kadar', '1995: ~177.000, çoğu Polonya; tarım, ormancılık, bağcılık (Eylül 1993\'e kadar inşaat da)']
        ] }
      ]
    },
    {
      id: 'yasam', title: 'Konut, geri dönüş, farklılaşma',
      blocks: [
        { t: 'h', text: 'Konut' },
        { t: 'ul', items: [
          'Göçmenler çoğunlukla **maddi sıkıntıdan çok** meslek ve aile geleceğini planlamak için, olumlu beklentilerle geldi.',
          'Başta **yatakhaneler** ve **baraka** konutlar; kurallı yaşam, çoğu zaman banyosuz tek oda.',
          'Özel dairede oturanlar: **1968 %60+**, **1980 %90+**. Ama altyapısı ihmal edilmiş mahallelerde yoğunlaştılar (konut piyasasında **ayrımcılık**).',
          'Ev/daire sahibi yabancılar: **%2,3 (1980) → %7 (1995)**. Yine de kira Almanlardan **yüksek**, koşullar daha kötü.',
          '70\'ler ortası Almanlarla **hiç teması olmayan**: Türklerin **%40**\'ı, İtalyanların **%33**\'ü, İspanyol/Yunan/Yugoslavların dörtte biri → **›göçmen kolonisi‹** güvensizliğe karşı dayanışma işlevi görür.'
        ] },
        { t: 'h', text: 'Geri dönüş' },
        { t: 'ul', items: [
          'Başta neredeyse herkes yakında dönmeyi planlıyordu. 1956–1983 arasında gelenlerin **en az ~dörtte üçü** döndü.',
          'Alman tarafı **zorlamadı**, ama 70\'lerde (özellikle işsizler) baskı hissetti; 80\'lerde geri dönüş primi, ~1985\'ten sığınma tartışmasıyla arttı.',
          'İspanya ve Yunanistan\'da demokratikleşme geri göçü sağladı; **İtalyanlar** serbest dolaşım sayesinde dönmeye **en hazır** gruptu.',
          'Geri göç bir **olumsuz seçilim**di: hedefine ulaşan az; işsizlik, aile, memleket hasreti belirleyici.',
          '**1985**: göçmenlerin **%63,2**\'si planladığından uzun kalıyordu; çoğu kararsız, planı ertelemiş.',
          'Geri dönüş yönelimi **sadakati** ve **etnik kimliği** istikrara kavuşturdu: gerçekdışı hâle gelse de göçün sorunlarını aşma **stratejisi** olarak anlamlı, hatta yaşamsal.'
        ] },
        { t: 'h', text: 'Farklılaşma' },
        { t: 'ul', items: [
          'Toplumsal yükselme: vasıfsız → yarı vasıflı → kalifiye → en üstte **serbest meslek**. İşletme kurma: 60\'lar İtalyan ve Yugoslav, 70\'ler Yunan, sonra Türk.',
          '90\'lar sonu ~**269.000** yabancı serbest meslek sahibi, ~**750.000** iş yeri. **İtalyanlar 45.000** ile birinci, **Türkler 42.000** işletmeyle ikinci (gastronomi, perakende, hizmet, zanaat).',
          '~525.000 Türk hanesinin **54.000+**\'ı ev sahibi; ~130.000 konut tasarruf sözleşmesi.',
          'Öte yanda **etno-sosyal alt tabaka**: tekdüze, ağır, tehlikeli, kötü ücretli ›tipik yabancı iş yerleri‹.'
        ] },
        { t: 'h', text: 'Yabancı kadınlar' },
        { t: 'ul', items: [
          'İki kategori: **eş olarak gelenler** ve **doğrudan çalışmak için gelen/iş bulanlar**.',
          'Kadın oranı **%28,5 (1967) → %41 (1979)**. Yunan kadınlar %37 → %48 (ortalamanın üstü); Türk kadınlar %22 → %41 (70\'lerde ortalamaya yaklaştı).',
          'AT dışından gelen eşler çalışma izni için **beklemek** zorundaydı; ev kadınları yalıtılmış, dil güçlüğü.',
          'Çalışanlar içinde kadın payı istikrarlı: **%29,3 (1967), %31,1 (1974), %31,4 (1989)**. Ücretleri erkeklerden düşük; 70\'lerde **Yunan, Yugoslav, İspanyol** kadınlar **İtalyan ve Türk** kadınlardan iyi kazanıyordu.',
          'Yalnız gelip çalışan kadınlarda ekonomik bağımsızlık → yaşam tarzı değişimi ama geleneksel normlarla **çatışma**.'
        ] }
      ]
    },
    {
      id: 'siginma', title: 'Sığınma ve Aussiedler',
      blocks: [
        { t: 'h', text: 'Sığınma (Anayasa md. 16)' },
        { t: 'ul', items: [
          '70\'ler başına kadar başvuruların çoğu **Doğu Orta Avrupa**\'dan. 70\'lerde **Üçüncü Dünya** ve **Türkiye**\'den (işçi alımı durunca potansiyel işgücü göçmenleri sığınmaya yöneldi).',
          'Başvuru: **1973 ~5.600 → 1978 33.000+ → 1980 100.000+**. 80\'ler başına kadar çoğu siyasi mülteci olarak tanındı.',
          '›Sığınma hakkının kötüye kullanılması‹ tartışması → girişi zorlaştırma, hızlı süreç, etkili sınır dışı: FA **kabul eden toplumdan savunmacı topluma** dönüştü.',
          '80\'ler ortası başvuruların ~dörtte üçü Üçüncü Dünya\'dan; **1988**\'den itibaren sosyalizmin çöküşüyle yine Avrupa\'dan.',
          '**1989 120.000+**, **1992 ~440.000** (üçte ikisi Doğu ve Güneydoğu Avrupa; 1991\'den itibaren dağılan Yugoslavya\'dan iç savaş mültecileri).',
          '1990\'da başvuruların **%10**\'u bile olumlu sonuçlanmadı; reddedilenlerin çoğu **hoşgörülen fiilî mülteci** olarak kaldı.'
        ] },
        { t: 'h', text: 'Sığınma uzlaşması (Aralık 1992)' },
        { t: 'ul', items: [
          'CDU/CSU + FDP iktidarı, **SPD** ile anlaştı.',
          'Öz: **›zulüm olmayan‹** menşe ülkelerden ya da **›güvenli üçüncü ülkeler‹** üzerinden gelenlere sığınma yok. Yardımlar kısıldı.',
          'Savaş/iç savaş mültecileri için **ayrı süreç**: süreli oturma hakkı, ama sonra sığınma başvurusu yok.',
          'Anayasa değişikliği **26 Mayıs 1993** kabul, **1 Temmuz 1993** yürürlük → kara yoluyla neredeyse ulaşılamaz oldu.',
          'Sığınmacı: **440.000 (1992) → 320.000 (1993)**; 1995 yalnızca **128.000**. Sınır dışı: **8.300 (1991) → 44.000+ (1994)**. Düzensiz göç muhtemelen arttı.',
          '1996 sonu toplam ~**1,6 milyon** mülteci ve sığınmacı (en büyük kalem: **500.000 fiilî mülteci**, 350.000 sığınmacı, Bosna\'dan 320.000 iç savaş mültecisi, 103.000 kontenjan mültecisi / Vietnam boat people).'
        ] },
        { t: 'h', text: 'Aussiedler (Anayasa md. 116)' },
        { t: 'ul', items: [
          'Doğu ve Güneydoğu Avrupa\'dan gelen, **soyları** nedeniyle Alman vatandaşlığına anayasal hakkı olan kişiler: **yabancı değiller** ama gerçek bir göç durumu yaşıyorlar.',
          '80\'ler ortasına kadar yılda **<30.000**. Sosyalist sistem çökünce **1990 ~397.000** (SSCB, Polonya, Romanya).',
          '**1990 Aussiedler Kabul Kanunu**: kabul işlemi **menşe ülkede** → 1991/92\'de ~222.000/230.000.',
          'Aralık 1992 **Savaş Sonuçlarını Düzenleme Kanunu**: yılda ~**220.000** sınır, bölgesel kontenjan; **31.12.1992**\'den sonra gelenlere **Spätaussiedler** denir.',
          '1995 ~218.000 Spätaussiedler, çoğu eski SSCB. Sorun: **az Almanca**, eğitim düzeyi uymuyor. Hava tersine döndü; kendilerini **›yabancı Almanlar‹** olarak dışlanmış hissettiler.',
          'Yardımları kısılsa da diğer göçmen gruplarına göre **ayrıcalıklı** kaldılar.'
        ] }
      ]
    },
    {
      id: 'dusmanlik', title: 'Yabancı düşmanlığı ve bugünkü tablo',
      blocks: [
        { t: 'ul', items: [
          'Yabancılar ilk kez olumsuz gündeme **1966/67 ekonomik kriziyle** geldi.',
          'İkinci dalga **1979**\'dan itibaren ikinci petrol kriziyle: ›Türk sorunu‹ 1982/83\'e kadar siyasetin egemen konusu.',
          '90\'lar başı (özellikle Aussiedler göçü) birleşmiş Almanya\'da korku, saldırganlık, gerilim. 1990 Yabancılar Kanunu, kamuoyu birleşmeye odaklıyken **ilgi görmeden** kabul edildi.',
          'Yabancı düşmanı suçlar: 80\'ler sonu ~**250 → 1991 2.400+**.',
          '**Hoyerswerda (1991 sonbaharı)**: şiddet ilk kez halkın bir kesiminde **açık onay** buldu; kundaklamalar Türk ailelerin evlerini de hedef aldı. Ama **geniş bir dayanışma dalgası** da başlattı.',
          'Bulvar basını çatışmayı körükledi, **etnosentrik** bakışı güçlendirdi.',
          'Asıl neden: sosyoekonomik kriz karşısında nüfusun **yönelim kaybı**. ›Yabancı düşmanlığının yabancılardan çok **yerlilerle** ilgisi vardır.‹',
          'Azınlıklar arası yeni sorunlar: genç konuk işçi nüfusu ile **genç Aussiedler**\'ler arasında çatışmalar.'
        ] },
        { t: 'h', text: '1998 sonu yabancı nüfus: 7.320.000 (%8,9)' },
        { t: 'table', head: ['Grup', 'Sayı', 'Pay'], rows: [
          ['Türkler', '2,11 milyon', '%28,8'],
          ['Eski Yugoslavya', '1,12 milyon', '%15,3'],
          ['İtalyanlar', '612.048', '%8,4'],
          ['Yunanlar', '363.514', '%5,0'],
          ['Polonyalılar', '283.604', '%3,9'],
          ['Portekizliler / İspanyollar', '~132.000 / ~131.000', '%1,8 / %1,8']
        ] },
        { t: 'p', text: '1990\'da (birleşme arifesi) ~5,2 milyon yabancı vardı. Tahmin: nüfus gelecek yüzyılda azalacak, Almanlar büyük kentlerde azınlığa düşecek.' },
        { t: 'tip', text: 'Sonuç cümlesi: FA hem fiilen göç ülkesidir hem de demografik olarak **başka seçeneği yoktur**. Gerekli olan yeni ilkeye dayanan bir göç politikası: **›Almanya bir göç ülkesidir.‹**' }
      ]
    }
  ]
},

/* =====================================================================
   2) KÜLTÜRLERARASI EDEBİYAT + TÜRK AZINLIĞIN EDEBİYATI
   ===================================================================== */
{
  id: 'edebiyat',
  no: 2,
  title: 'Kültürlerarası Edebiyat ve Türk Azınlığın Edebiyatı',
  author: 'Giriş (Chiellino) · Sargut Şölçün',
  src: 'Chiellino (Ed.), II. Edebiyat: Giriş + 6. Türk Azınlığın Edebiyatı',
  desc: 'Seslerin topografyası, dokuz ses, temalar; Türk göçmen edebiyatının 70\'ler, 80\'ler ve 90\'lar evreleri.',
  traps: [
    { t: 'Kültürlerarası edebiyat **yeni değil**: dilsel özü bakımından Alman edebiyatının kendisi kadar eski. Yeni olan **dil tercihinin ötesinde** aranmalı.', topic: 'giris' },
    { t: 'Hareketi **anadilde yazanlar kurdu**, Almanca yazanlar değil. 80\'lerin Germanistiği Almancalığı temel tetikleyici sayıyordu; bu cilt buna karşı.', topic: 'giris' },
    { t: 'Kabul eden toplum: **mekânın önceliği**. Gelenler: **zamanın önceliği** (ön tarihlerinin sürekliliği).', topic: 'giris' },
    { t: '**2. ses**: azınlıktan gelip Almancayı **seçenler**. **3. ses**: Almancayı okulda/toplumda anadil gibi konuşan ama **ailede konuşmayan** gençler.', topic: 'sesler' },
    { t: '**Aras Ören**: gerçekliğe dayalı dil, Berlin Üçlemesi. **Güney Dal**: **ironik mesafe**, Europastraße 5.', topic: 'turk70' },
    { t: '**Pazarkaya** işçi değil, **angaje entelektüel**; Irrwege/Koca Sapmalar\'daki şiirler göç üzerine **ilk edebî ifadeler**.', topic: 'turk70' },
    { t: '**›Hexenzauber‹** = **Haldun Taner** (Die ZEIT, 1982): ayı postuna giren yasa dışı konuk işçi, dönüm noktası.', topic: 'turk80' },
    { t: '**PoLiKunst** (1980–1987): ilk yıllık ›Ein Gastarbeiter ist ein Türke‹ (1983). **Şinasi Dikmen dışında** Türk yazarların çoğu uzak kaldı.', topic: 'turk80' }
  ],
  topics: [
    {
      id: 'giris', title: 'Giriş: Uzlaşının ve özerkliğin edebiyatı',
      blocks: [
        { t: 'p', text: 'Alman edebiyatı hiçbir zaman saf bir **›monokültür‹** olmadı. Başka kökenden gelip Almanca yazanların uzun bir geçmişi var.' },
        { t: 'table', head: ['Yazar', 'Neden örnek?'], rows: [
          ['Thomasin von Circlaria (1185–1238?)', 'Kendini Alman dilinin **welsch (İtalyan) konuğu** olarak tanımladı'],
          ['Elias Canetti (1905–1994)', '1969\'da: ›**8 yaşında öğrendiğim** Alman dilinde yalnızca bir konuğum‹'],
          ['Adelbert von Chamisso (1781–1838)', 'Doğuştan **Fransız**; Peter Schlemihl ve baladlarıyla Alman ulusal şairi'],
          ['Theodor Fontane (1819–1898)', '›Meine Kinderjahre‹: Brandenburg **Huguenotlarında** iki dillilik → iki kültürlü bellek'],
          ['20. yüzyıl', 'Kafka, Paul Celan (Paul Anczel), Rose Ausländer, Jurek Becker\'in dil tercihi']
        ] },
        { t: 'p', text: 'Bu kültürlerarası edebiyat **Alman edebiyatı kadar eski**. Yeni olan, dil tercihinin ötesinde: **kültürleri aşan, çok dilli** bir edebiyat hareketi.' },
        { t: 'h', text: 'Hareketi doğuran göç dalgaları' },
        { t: 'table', head: ['Kaynak', 'Başlangıç'], rows: [
          ['Akdeniz bölgesinden göç', '1955\'ten itibaren'],
          ['Doğu Avrupa', '1968\'den itibaren'],
          ['Latin Amerika', '1973\'ten itibaren'],
          ['Yakın Doğu\'dan siyasi sürgün (Lübnan, Suriye, İran)', '70\'ler boyunca'],
          ['Doğu/Güneydoğu Avrupa\'dan Alman kökenli ailelerin geri dönüşü (**repatriasyon**)', '80\'lerin 2. yarısı'],
          ['Uzak Doğu ve Kara Afrika', 'Farklı nedenler']
        ] },
        { t: 'h', text: 'Anadilin önemi' },
        { t: 'ul', items: [
          'İlgi hep **Almanca kısma** yöneldi; bu bakışı daraltır, yanlış değerlendirmeye yol açar.',
          'Her azınlıktaki **iki dil düzlemi** birlikte ele alınmalı.',
          '**Anadildeki edebiyat merkezîdir**: Federal Cumhuriyet\'teki kültürlerarası edebiyatı **o kurdu**; ilk eserleriyle anadilde yazanlar temel eğilimi belirledi.'
        ] },
        { t: 'h', text: 'Üç yol, temel uyuşmazlık' },
        { t: 'ul', items: [
          'Üç yol: **işgücü göçü, sürgün, repatriasyon**. Kabul eden ülke için üçü de aynı hedefe (varlıklı, koruyucu bir toplumda yerleşme) giden yollar.',
          'Gelenlerin bakışından ise geçmiş ile gelecek arasında **çok katmanlı bir gerilim alanı**.',
          'Kabul eden toplum **mekânın önceliğini** vurgular ve gelenlerin geçmişini yadsır; gelenler **zamanın önceliğini** (ön tarihin sürekliliğini) öne koyar.',
          'Bu **temel uyuşmazlığı** tanımak eserleri yorumlamanın **önkoşulu**.'
        ] },
        { t: 'low', text: 'Fotoğraf altyazısı: PoLiKunst toplantısı ›Ziele der Betroffenheit‹, 25/26 Eylül 1982, Frankfurt, Theater am Turm. Kürsüde Rafik Schami, Gino Chiellino, Şinasi Dikmen, Suleman Taufiq.' }
      ]
    },
    {
      id: 'sesler', title: 'Seslerin topografyası: dokuz ses',
      blocks: [
        { t: 'p', text: '**Seslerin topografyası** modeli kültürlerarası edebiyatın **mekânsal ve zamansal** boyutunu birleştirir; salt kronolojiden ileri gider. Tam bir topografya için **sınır aşan referans sistemleri** gerekir: Almanya deneyimini Almanya dışında yazanlar da dahil edilir.' },
        { t: 'ul', items: [
          'Ülkede geçici çalışıp sonra yazanlar: **Bekir Yıldız** ›Türkler Almanya\'da‹ (İstanbul 1966), Antonio Mura ›Lingua e Dialetto‹ (1971), Giorgos Matzouranis ›Man nennt uns Gastarbeiter‹ (Atina 1977).',
          '**Göçmen olmayan** yazarlar da uç sonuç olarak dahil: Stefano Vilardo (Milano 1975), Lili Sografou ›Theodula, leb wohl‹ (1976), Dragi Bugarčić ›Gost‹ (Belgrad 1979).',
          'Eserler **biyografiden bağımsız** ele alınmalı: göç/sürgün bağlamında yazarda tematik süreklilik doğurmayan eserler çıkar (ör. Akif Pirinçci\'nin ilk eseri ›Tränen sind immer das Ende‹ 1980, Vera Kamenko ›Unter uns war Krieg‹ 1978).',
          'Sesler **monofon** (tek dilli) ya da **polifon** (çok dilli) gelişebilir. Hareket **başlangıçta polifondu**.'
        ] },
        { t: 'table', head: ['Ses', 'Kim?', 'Örnekler'], rows: [
          ['1', '1955\'ten beri gelen azınlıklardan **köken dilinde** yazanlar (polifon)', 'Türk: **Aras Ören, Güney Dal, Aysel Özakın, Habib Bektaş**; İtalyan: Fiorenza Dill\'Elba, Marisa Fenoglio; İspanyol Antonio Hernando, Yunan Kostas Karaoulis, Yugoslav Irena Vrkljan'],
          ['2', 'Azınlıklardan gelip **Almancayı seçenler**', 'Türk: **Yüksel Pazarkaya, Emine Sevgi Özdamar, Şinasi Dikmen, Kemal Kurt**; İtalyan: Franco Biondi, Gino Chiellino; Vera Kamenko; Luisa Costa Hölzl'],
          ['3', 'Almancayı **okulda ve toplumda anadil** gibi konuşan ama **ailede konuşmayan** genç yazarlar', 'Türk: **Zehra Çırak, Zafer Şenocak, Feridun Zaimoğlu**; José F. A. Oliver (Endülüs), Aglaia Bliouni'],
          ['4', 'Almanya\'dan **zor duyulan**, başka ulusal edebiyatlarda yaşayan ses', 'Geri dönenler: Fiorenza Dill\'Elba, Napoleon Lasanis; uç örnek **Bekir Yıldız**; Aysel Özakın\'ın İngilizce romanı; hiç Almanya\'da bulunmamış Romano Perticarini (›Via Diaz‹, Montréal 1989)'],
          ['5–6', '**Siyasi sığınma** arayanlar: polifon ses + **Almanca** ses', 'Almanca ses daha kolay duyuldu: Ota Filip (Çekya), Antonio Skármeta (Şili), Said (İran), György Dalos (Macaristan), Adel Karasholi (Suriye, DDR)'],
          ['7', '**Ne mülteci ne klasik göçmen**: eşsiz ses; hepsi ev sahibi ülkenin dilini seçti', 'Cyrus Atabay (İran), **Yoko Tawada**, Libuše Moníková, Galsan Tschinag, Rajvinder Singh, John Linthicum'],
          ['8', '**Kara Afrika**: doğası gereği çok dilli', 'Svahili: Ebrahim Hussein; Fransızca: Zinsou; Almanca: El Loko, Chima Oji; Paul Oyema Onovoh (İbo, İngilizce, Fransızca, Almanca)'],
          ['9', '**Rusya Almanları** (repatriasyon): Almanca ve Rusça', 'Lia Frank, Viktor Heinz (Almanca); Agnes Giesbrecht (Rusça); Waldemar Weber: **işlevsel iki dillilik** (Almanca şiir, Rusça aracılık)']
        ] },
        { t: 'low', text: '5., 6. ve 7. sesler metinde numarasız geçer; sıra ›sekizinci ses‹ ve ›dokuzuncu ses‹ ifadelerinden çıkarıldı.' },
        { t: 'h', text: 'Sürgün sesinin zorlukları' },
        { t: 'ul', items: [
          'Sürgün eserleri yazarın bulunduğu ülkede olmayan yayınevlerinde çıkar.',
          'Menşe ülkedeki muhalefetle **iç hesaplaşma** olarak yazılır, bu yüzden **nadiren çevrilir** (ör. Almanya\'da Rusça yazan Rus yazarlar).'
        ] },
        { t: 'h', text: 'Göç ile sürgünün kesiştiği yer' },
        { t: 'p', text: 'Yunanistan, İspanya, Portekiz ve Türkiye\'deki siyasi gelişmeler yüzünden göç ve sürgün kesişti: Chrisafis Lolakas (›Soweit der Himmel reicht‹ 1985), Antonio Hernando (›Emigration/Emigración‹ 1989), Lübnanlı **Jusuf Naoum** (›Der Scharfschütze‹ 1983: konuk işçi yaşamı + Lübnan iç savaşı), Zaza-Kürtçe yazan **Kemal Astare**; Türkçe yazan **Fakir Baykurt**.' }
      ]
    },
    {
      id: 'tezler', title: 'Kitabın yapısı, temel soru ve temalar',
      blocks: [
        { t: 'ul', items: [
          'Topografyadan okunan: hareket **Akdeniz göçüyle başladı**, konuk işçilerin gündeliğinden dil, içerik ve türlere **dalga dalga** genişledi.',
          'Bu edebiyatta birleştirici bir **homojenlik aramak yanlış**: analitik yönteme dönüştürülemeyen **harici bir yardımcı yapı**.',
          'Cilt, Almancalığı hareketin temel tetikleyicisi yapan **80\'lerin Germanistiğinden farklı** yol izler.'
        ] },
        { t: 'table', head: ['Bölümler', 'İçerik'], rows: [
          ['İlk 6 bölüm', 'İşgücü göçüyle oluşan 6 azınlık, kronolojik: **İtalyan, Yunan, İspanyol, Türk, Portekiz, eski Yugoslavya**'],
          ['Sonraki 6 bölüm', '**Sürgün ve repatriasyon**: Doğu Avrupa, İran, Latin Amerika, Arap kültür alanı, eski SSCB'],
          ['Son 3 bölüm', '**Kara Afrika, Arap, Asya**. ›Asya‹ başlığı yalnızca coğrafi yön gösterici; Kara Afrika\'da ortak deneyim var (**sömürgeleştirme, dil seçeneği**)']
        ] },
        { t: 'h', text: 'Temel soru' },
        { t: 'p', text: '80\'lerin ikinci yarısına kadar farklı azınlıklardan yazarlar **aynı temalara** yöneldi. Bu tematik yakınlık **azınlıkların içsel ihtiyacından** mı, yoksa **Federal Alman edebiyatına katılma isteğinden** mi kaynaklanıyor?' },
        { t: 'h', text: 'Tezler' },
        { t: 'ol', items: [
          'Temalar',
          'Kültürel-edebî proje',
          'Yakınlık ve uzaklıktan oluşan bir gerilim alanı',
          'Sohbet ortağı olarak okur ya da özdeşleşme figürü olarak yazar',
          'Provokasyonun dili',
          'Zamana ve mekâna karşı benliğin çeşitliliği'
        ] },
        { t: 'h', text: 'Tercih edilen temalar' },
        { t: 'ul', items: [
          'Göçe, sürgüne ya da repatriasyona yol açan **kişisel ön tarihle** hesaplaşma',
          '**Yabancı diyara yolculuk**',
          'Yabancı kültür, toplum ve dille **karşılaşma**',
          'Yerliler ile yabancılar arasında **eşit haklara dayalı yeni kimlik projesi**',
          'Çalışma yaşamına ve gündelik yaşama **katılım**',
          '**Menşe ülkedeki siyasi gelişmeyle** hesaplaşma',
          'Kendi varlığının **cinsiyete özgü** algılanması'
        ] }
      ]
    },
    {
      id: 'turkgenel', title: 'Türk azınlığın edebiyatı: genel çerçeve',
      blocks: [
        { t: 'p', text: '(Sargut Şölçün) Türk göçmenlerin edebiyatı **göçün şiirsel yansımasıdır**: farklı yaşam biçimlerinin karşılaşması, çatışması, iç içe geçmesi. Terk edilen yurda **geri bakışlar** da içerir.' },
        { t: 'ul', items: [
          'Her evresi **Türkiye\'deki toplumsal ve siyasi olaylarla** bağlantılı.',
          '**Kimlik sorunu**, Türk toplumunun o zamana dek bilinmeyen **parçalanmışlığıyla** da ilgili.',
          'Siyasi baskıyla gelen **sürgünler** bağımsız, **yurt odaklı** bir perspektif getirdi.',
          '›Türk göçmen edebiyatı‹ adını **herkes kabul etmez**.',
          'Ne yurttaki edebiyatın uzantısı ne Alman edebiyatının parçası: iki edebî kültür arasında bir **›sırat köprüsü‹**.'
        ] },
        { t: 'h', text: 'Çelişen üç bileşen (80\'lerden itibaren)' },
        { t: 'ol', items: [
          'Yazarlar her şeyden önce **sanatçı** olarak tanınmak ister.',
          'Çok kültürlü sanayi toplumu onlarda **sahici kültür aracıları** görür.',
          'Yazarlar eski ›konuk işçiler‹den **özgürleşmek** ister; onlar da ne entegrasyon önerilerine katılır ne de gitmek ister.'
        ] }
      ]
    },
    {
      id: 'turk70', title: 'İlk evre: Bir arada yaşamın ›yara izleri‹',
      blocks: [
        { t: 'p', text: 'Başlangıç hep **kendi kimliğini sorgulamak**; yazar çoğu zaman bizzat işçiydi. Bu evrede **çeviriler** egemen, yabancı diyarın dili hâlâ yabancı. Anadilde yazmak **kolektif kimlik** ihtiyacıyla örtüşüyordu.' },
        { t: 'table', head: ['Yazar', 'Eser', 'Akılda kalacak nokta'], rows: [
          ['**Bekir Yıldız** (d. 1933)', '›Alman Ekmeği‹ (1974)', '1962–66 Heidelberg yakınında işçi. **Olumsuz** Almanya: Avrupa yozlaşmış, Türk işçi **Asya/saflık** ve devrimci. **Siyah-beyaz** tablo, rahatsız edici çifte bakış'],
          ['**Fethi Savaşçı** (1930–1989)', '›Bei laufenden Maschinen‹ (1983, iki dilli), ›München im Frühlingsregen‹ (1987)', '1965\'ten Münih\'te sanayi işçisi, 1970\'ten neredeyse **her yıl bir kitap**. Üretken **işçi şair**, yalın ve **ahlak verici**'],
          ['**Yüksel Pazarkaya**', '›Irrwege / Koca Sapmalar‹ (1985)', 'İşçi değil, **angaje entelektüel**. 1960–68 şiirleri: Anadolu köylüsünün saflığı, fabrikadaki beceriksizliği, dilsizliği. **Göç üzerine ilk edebî ifadeler**'],
          ['**Aras Ören**', '**Berlin Üçlemesi**: ›Was will Niyazi in der Naunynstraße?‹ (1973), ›Der kurze Traum aus Kagithane‹ (1974), ›Die Fremde ist auch ein Haus‹ (1980)', '**Gerçekliğe dayalı bir dil** aradı; Pazarkaya\'nın tiplerini **sentetik** bir düzeye yükseltti'],
          ['**Güney Dal**', '›Wenn Ali die Glocken läuten hört‹ (Türkçesi ›**İş Sürgünleri**‹ 1976, Almanca 1979); ›**Europastraße 5**‹ (1981)', '**İronik mesafe**. İlkinde Köln ve Berlin; ne grev ne ortak iş yeri Alman ve Türk işçileri yakınlaştırır. İkincisinde bir **ölünün/tabutun** taşınması: birleştiren şey uçurumu belirginleştirir']
        ] },
        { t: 'ul', items: [
          'Yazarlar zamanlarının **vakanüvisleri ve eleştirmenleri** oldu; kırılmalar göç gerçekliğinin kendisinden doğdu.',
          'İlk evrenin sonunda: Türkler yabancı kompleksini aşmaya çalışırken ev sahiplerinin gözünde en iyi ihtimalle **egzotik**tiler.',
          '70\'lerde göçmenler bir **protesto potansiyeli** oldu: **Lenz, Böll, Max von der Grün, Wallraff** yabancıyı **muhalefet figürü** olarak işledi. Bu figürlere sonra **›Chamisso\'nun torunları‹** denildi (Ackermann/Weinrich 1986).',
          'Türkiye\'de daha önce **olumlu** olan Almanya imgesi, ›Almanya\'daki Türkler‹ temasıyla **eleştirel** biçimde genişledi.'
        ] }
      ]
    },
    {
      id: 'turk80', title: '80\'ler: Edebî etkinliklerin genişlemesi',
      blocks: [
        { t: 'p', text: 'Göçmen edebiyatına **siyasi sürgünler** (bakışları eski yurtta) ve **genç Türkler** (kimlik arayışı) katıldı. Yön: göç sorunsalından → çağdaş tarihle siyasi hesaplaşma → **kişisel hesaplaşma**.' },
        { t: 'ul', items: [
          '**Gültekin Emre** (d. 1951, 1980\'den Berlin), ›Yabancı İşçinin Yabancılığı‹: **anılara** sığınan insan. **Bavullar** geçici yolculuğu değil, göçmeni şimdiye bağlayan aksesuar: yaban ellerde durmak = **sürekli yolda olmak**.'
        ] },
        { t: 'h', text: 'Sürgündeki köy edebiyatçıları (Eylül 1980 darbesi)' },
        { t: 'table', head: ['Yazar', 'Eser', 'Yankı'], rows: [
          ['**Fakir Baykurt** (1929–1999)', '›Die Friedenstorte‹ (1980), ›Nachtschicht‹ (1984), öykü', 'İlgi gördü'],
          ['**Dursun Akçam** (d. 1930)', '›Deutsches Heim, Glück allein‹ (1982), **röportaj**', 'İlgi gördü'],
          ['**Yusuf Ziya Bahadınlı** (d. 1927)', '›Zwischen zwei Welten‹ (1980), ›In der Dunkelheit des Flures‹ (1984)', '**Az yankı**']
        ] },
        { t: 'ul', items: [
          'Bakışlarını tanıdıkları **Anadolu insanına** yönelttiler ama **Alman toplumunun gerçekliğini** yapılarına katmayı unuttular.',
          'İlgi nedeni: sahici Anadolu hâli, Alman okura dış perspektifin yerini tuttu.',
          'Ders: göçmenleri **potansiyel sınıf savaşçısı** olarak idealleştirmek kendi toplumunu yanlış tanımaktı; 1973 durdurmasından sonra kalanlar küçük burjuva ya da geleneksel yaşamı seçti.'
        ] },
        { t: 'h', text: 'Yasa dışılık teması ve hiciv' },
        { t: 'ul', items: [
          '**Haldun Taner** (1915–1985), DAAD konuğu: **›Hexenzauber‹** (Die ZEIT, 26.2.1982), mektup biçiminde **hiciv**. Yasa dışı konuk işçi **ayı postuna girip** Kurfürstendamm\'da atraksiyon olur; maske hem çevrenin hem kendi karakterinin maskesini düşürür. **Dönüm noktası.**',
          'Özdemir Başargan ›Teoman, der Ungültige‹ (1984): patlayıcı malzeme, **yüzeysel** işleniş.',
          'Pazarkaya ›Heimat in der Fremde?‹ (1979, iki dilli): baskında **çöp konteynerine** saklanan yasa dışı göçmen.',
          'Ören ›Bitte nix Polizei‹ (1981, ilk düzyazı): kahraman yasallığı ve kişiliği için mücadele eder.',
          'Ören 80\'lerde çok üretken; ilk romanı ›Eine verspätete Abrechnung oder Der Aufstieg der Gündogdus‹ (1988). Güney Dal ›Die Vögel des falschen Paradieses‹ (1985), ›Der enthaarte Affe‹ (1988).',
          '**Şinasi Dikmen** (›Wir werden das Knoblauchkind schon schaukeln‹ 1983, ›Der andere Türke‹ 1986) ve **Osman Engin** (›Deutschling‹ 1985): **hicvi ilk kez işlevsel tür** olarak kullandılar. Tür bilinci = yeni göçmen bilinci.'
        ] },
        { t: 'h', text: 'Genç kuşak (Almanca, lirik şiir)' },
        { t: 'ul', items: [
          'Almanya\'da doğup büyüdüler, **Almanca** yazdılar, tercih **lirik şiir** (Türk edebiyat geleneğine bağ).',
          'Temalar: **kimlik kaybı, yurtsuzluk, parçalanmışlık, kararsızlık**.',
          'Atılımı Alman yayınevlerine değil **derneklere** borçlu: ›Förderzentrum Jugend schreibt‹ (antoloji 1980).',
          'Eserler: Zafer Şenocak ›Flammentropfen‹ (1985), Levent Aktoprak (1985), Kemal Kurt ›Scheingedichte‹ (1986), Zehra Çırak ›Flugfänger‹ (1987), **Alev Tekinay ›Die Deutschprüfung‹ (1989)**. Grubun dışında **Habib Bektaş** ›Belagerung des Lebens‹ (1981).'
        ] },
        { t: 'h', text: 'Kadın yazarlar' },
        { t: 'table', head: ['Yazar', 'Eserler', 'Özellik'], rows: [
          ['**Aysel Özakın** (d. 1942)', '›Soll ich hier alt werden?‹ (1982), ›Die Leidenschaft der Anderen‹ (1983)', 'Türkiye\'de yazarlık geçmişi; **sürgünün ikircikli** perspektifi; ›feminist tutumu‹ ilgi çekti'],
          ['**Saliha Scheinhardt** (d. 1950)', '›Frauen, die sterben, ohne daß sie gelebt hätten‹ (1983), ›Drei Zypressen‹ (1984)', 'Almanya\'da öğrenimden sonra yazdı; güçlü **röportaj eğilimi**; değişken biyografi']
        ] },
        { t: 'p', text: 'İkisi de Almanya\'da **şehir yazarı** oldu.' },
        { t: 'h', text: 'Örgütlenme ve yayın' },
        { t: 'ul', items: [
          '80\'lerde ırkçılık ve **Türk düşmanlığı** arttı → Türk yazarlar artan üretkenlikle karşılık verdi.',
          '**PoLiKunst** = Çok Uluslu Edebiyat ve Sanat Derneği (**1980–1987**): Alman vesayeti olmadan haklar. İlk yıllık: **›Ein Gastarbeiter ist ein Türke‹ (1983)**. **Dikmen dışında** Türk yazarlar uzak kaldı.',
          '**Ararat Verlag** (1980 Stuttgart → Berlin, ödüllü ›Texte in zwei Sprachen‹ dizisi), **Dağyeli Verlag** (Frankfurt, 80\'ler ortasından Türk yazarlar).',
          'Dergiler: **Anadil** (Aralık 1980 – Aralık 1982, Pazarkaya), **Forum** (1985 Dağyeli, 3 ayda bir), **dergi/die Zeitschrift** (1986, Duisburger Initiative, 2 ayda bir).',
          '90\'lar başına kadar durdular: Türk nüfusunun düşük okuma ilgisi, ayrışan yollar, tanınan yazarların **Alman yayınevlerine** geçmesi.'
        ] }
      ]
    },
    {
      id: 'turk90', title: '90\'lar: Yeni bir yerlilik olarak kendiyle karşılaşma',
      blocks: [
        { t: 'p', text: 'Son evrede **›Ben-genişlemesi‹**, benmerkezci perspektif. Dönüş: **yabanla karşılaşmadan → yaban ellerde kendiyle karşılaşmaya**. Örnek yazarlar: **Ören, Kurt, Şenocak**. Bu, **kültürel aracılık** beklentisini daha da sorunlu hâle getirir.' },
        { t: 'ul', items: [
          '**Özgen Ergin** (d. 1947, Köln), ›Charlie Kemal‹ (1992), ›**Zigeuner**‹ öyküsü: lokantada bir kadın sorar: ›Siz Çingene misiniz?‹, cevap: ›Maalesef hayır. Ben Türk\'üm.‹ → **kültürlerarası pedagojinin açmazı**.',
          'Dikmen ›Hurra, ich lebe in Deutschland‹ (1995): asimilasyon/entegrasyon ile bireysel varoluş arayışı çelişkisi, ironik.',
          'Ortak motif: ne **azınlığın sözcüsü** ne de kültür dünyasının **entegre yabancısı** olmak istemek.',
          '1991 eserleri: Şenocak ›Das senkrechte Meer‹, Ören ile **Peter Schneider** ›Wie die Spree in den Bosporus fließt‹, Aktoprak ›Das Meer noch im Kopf‹, Gültekin Emre ›Liebe und Miniaturen‹ (Emre **yalnızca Türkçe** yazar).',
          'Geleceğin kimliği + dil arayışı: Şenocak ›Fernwehanstalten‹ (1994), Çırak ›Fremde Flügel auf eigener Schulter‹ (1994), Bektaş ›Zaghaft meine Sehnsucht‹ (1997); **çocuk ve gençlere** de hitap.',
          'Çocuk edebiyatı: Pazarkaya ›**Kemal und sein Widder**‹ (1993), Bektaş\'ın çocuk şiirleri.'
        ] },
        { t: 'low', text: 'PDF bu bölümün ortasında (s. 142) bitiyor; sonrası özetlenemedi.' }
      ]
    }
  ]
},

/* =====================================================================
   3) SİYASİ-HUKUKİ KOŞULLAR + EKONOMİK VE SOSYAL DURUM
   ===================================================================== */
{
  id: 'siyaset',
  no: 3,
  title: 'Siyasi-Hukuki Koşullar ve Ekonomik-Sosyal Durum',
  author: 'Gianni D\'Amato · Werner Sesselmeier',
  src: 'Almanya\'da Kültürlerarası Edebiyat, 2. ve 3. bölüm (Türkçe çeviri)',
  desc: 'İşçi alım anlaşmaları, Yabancılar Kanunu, oy hakkı ve vatandaşlık tartışması; yabancıların işgücü piyasası, gelir ve sosyal durumu.',
  traps: [
    { t: '1955 anlaşmasında istekli olan **İtalya**ydı (ödemeler dengesi). Almanya 1954 başında gerek görmüyordu; Eylül 1954\'te **Ekonomi Bakanı Erhard** Milano\'da hazır olduğunu açıkladı.', topic: 'italya' },
    { t: '**1977** temel tutum: ›Almanya **göç ülkesi değil**‹ ama yabancılar kalıcı yerleşti → çözülemez çelişki, **›süreli entegrasyon‹**.', topic: 'kisitlama' },
    { t: '**Almanlara özgü** haklar: md. 8 toplanma, md. 9 örgütlenme, md. 11 serbest dolaşım, md. 12 meslek, md. 33 kamu görevi. **Yabancılara da**: md. 2/1 genel hareket özgürlüğü, md. 3 eşitlik.', topic: 'kanun1990' },
    { t: '**Hamburg**: 8 yıl, ilçe düzeyi, tüm yabancılar. **Schleswig-Holstein**: 5 yıl, **mütekabiliyet**, 6 ülke. İkisini de Anayasa Mahkemesi durdurdu.', topic: 'oyhakki' },
    { t: 'Anayasa Mahkemesi (1990): egemenliğin tek sahibi **devlet halkı (Staatsvolk)**, oy hakkı Alman olmayı gerektirir; çözüm **vatandaşlığa geçiş**.', topic: 'oyhakki' },
    { t: '§85: **16–23 yaş**, ikamet **10 → 8 yıl** (6 yıl okul). §86: birinci kuşak **15 yıl**. Harç **5000 DM\'ye varan → 100 DM**.', topic: 'vatandaslik' },
    { t: '**Yabancı ≠ göçmen**: Almanya\'da doğan 2./3. kuşak yabancıdır ama göçmen değildir; vatandaşlığa geçen göçmen yabancı değildir.', topic: 'ekonomi' },
    { t: 'İşgücü piyasası iyiyken yabancılar **tamamlayıcı**, işsizlik artınca **ikame edici** rol oynar.', topic: 'ekonomi' }
  ],
  topics: [
    {
      id: 'amac', title: 'Giriş: Marshall ve ›görünmez‹ vatandaşlar',
      blocks: [
        { t: 'p', text: '(Gianni D\'Amato) Amaç: İkinci Dünya Savaşı\'ndan sonra göçmenlerin Almanya\'da **kamusal alana katılımını** incelemek.' },
        { t: 'ul', items: [
          'Dayanak: İngiliz sosyolog **Thomas Marshall** (1893–1981): **vatandaşlığın (citizenship) genişletilmesi yoluyla entegrasyon**.',
          '**›Avrupa ikilemi‹**: Avrupa\'nın inşasına işçi olarak katkıda bulunan sakinlerin vatandaşlık bakımından **›görünmezliği‹**.',
          'Bu grup, açıkça formüle edilmemiş bir göç ve entegrasyon politikası yüzünden **demokratik haklardan yoksun**.',
          '**Medeni haklar**: ikili/çok taraflı anlaşmalar ve **Yabancılar Kanunu** ile belirlenir ve sınırlanır.',
          '**Siyasi haklar**: mevcut **siyasi fırsat yapıları** (Kriesi 1991) içinde hangi stratejiler başarılı?',
          'Yazarın ifadesi: **›vatandaş statüsü olmayan vatandaşlar‹**.'
        ] }
      ]
    },
    {
      id: 'italya', title: '1955 İtalya ile işçi alım anlaşması',
      blocks: [
        { t: 'ul', items: [
          '50\'ler ortası: tarım ve sanayide işgücü rezervi tükenecek korkusu. Yerli işgücünü genişletmek (kadınlar, kırsal kesim) **ücret maliyetini artırırdı** → çözüm ulusal işgücü piyasasını **açmak**.',
          'Alman sanayisinin çıkarı belirleyici, ama **göç veren ülkenin çıkarı** da önemli: İtalya göçmenlerine Avrupa\'da **yeni işgücü piyasaları** arıyordu.',
          '**1953**: İtalya ödemeler dengesi ve dış ticaret açığını Almanya\'da **mevsimlik işçi** çalıştırarak kapatmak istedi; Almanya\'nın **yeniden silahlanması** hâlinde işgücü gerekeceğini varsaydı.',
          '**1954 başı** Almanya gerek görmedi. **Eylül 1954**: Ekonomi Bakanı **Ludwig Erhard** Milano\'da hazır olduğunu açıkladı → **sendikalar** ve Ekonomi dışındaki **tüm bakanlıklar** karşı; Meclis\'te de direnç.',
          '**Ocak 1955** Roma\'da müzakere. Almanya, alımın Federal İş Kurumu\'na bağlı bir **işçi alım komisyonu** ile yapılmasını istedi (devlet dışı alımı önlemek, **tekel** Almanya\'da). İtalya destekledi (eşit muamele için).',
          'Koruma hükümleri: **eşit haklar, toplu sözleşme ücreti**, uygun **barınma**, **ücret transferi**, **aile birleşimi**. İtalya işçileri **her zaman geri almayı** taahhüt etti.',
          '**20 Aralık 1955 Roma**\'da imza. Almanya için **yalnızca hükümetin meselesi**: Meclis karar sürecinin dışında tutuldu, esaslı tartışma yok.',
          'Hız nedeni: diğer Avrupa ülkelerinin İtalyan işçileri **önce kapması** endişesi.',
          'Şirketler aracılıkla gelen her işçi için **300 DM (sonra 1000 DM)** ödedi. 1973\'e kadar işçilerin büyük kısmı bu sistemle geldi → federal yönetime **denetim** imkânı.'
        ] },
        { t: 'tip', text: 'Önemi: Sonraki anlaşmalar (Yunanistan, İspanya, Türkiye, Fas, Portekiz, Tunus) göç davranışını daha güçlü etkiledi; ama İtalya anlaşması işgücü piyasasının açılmasını **sıradanlaştırdı**, yabancı kabulünü **istisna olmaktan çıkardı** ve **emsal** oldu.' }
      ]
    },
    {
      id: 'roma', title: 'Çok taraflı Roma Anlaşması (AET)',
      blocks: [
        { t: 'ul', items: [
          'AET\'nin **1958**\'de yürürlüğe koyduğu Roma Anlaşması, İtalyan işçilerin **serbest dolaşımı** için bir adım daha.',
          'Öncüller: **18 Nisan 1951** Avrupa Kömür ve Çelik Topluluğu antlaşması, **2 Kasım 1953** Avrupa Ekonomik Konseyi kararı. Başta yalnızca **nitelikli işçiler** serbest.',
          'AET Antlaşması **md. 48 ve 49**: işgücü fazlası/eksikliğini dengeleme. **En çok İtalyanların** işine yaradı.',
          'Uzun bir geçiş süreciyle tam serbest dolaşım; istihdam ve ücrette **uyrukluğa dayalı farklı muamele yasak** (kamu düzeni, güvenlik, sağlık kısıtlamaları saklı).',
          '**1961** ve **1964**\'te daha liberal hükümler, **1968**\'de AET vatandaşlarına **tam serbest dolaşım** → emek göçünü yalnızca boş iş yeriyle ilişkilendiren **merkantilist** anlayış geçersiz.',
          'AET vatandaşları yerli işçilerle eşit, **›ulusal sınıf uzlaşmasının‹** (Dohse) parçası oldu.'
        ] },
        { t: 'trap', text: 'Liberal düzenlemeye rağmen İtalyanların payı **1970\'lerden itibaren sürekli azaldı** (yabancılar daireleri yine kısıtlayıcıydı, 1966/67 krizinde sendikalar geri dönüşü önlemedi).' }
      ]
    },
    {
      id: 'kisitlama', title: '1973 sonrası kısıtlamalar ve ›süreli entegrasyon‹',
      blocks: [
        { t: 'ul', items: [
          '**1973** işçi alımının durdurulması → istenen kabul politikası bitti, yabancı nüfus **istikrara** kavuştu.',
          '**1974**\'ten itibaren çalışma izni: sıkı **tek tek vaka incelemesi** + **›yerlilerin önceliği‹**; aile birleşimiyle gelenlere **bekleme süreleri**.',
          '**1975**: çocuk parasında **ülkesellik ilkesi** (menşe ülkedeki çocuklara ödeme azaltıldı); **geri dönüş primleri**; büyükşehirlere **yerleşme yasakları**.',
          'Sosyal-liberal koalisyonun **Eylem Programı**: ilk kez entegrasyon gereklilikleri, ama azalan nüfusa yönelik **geçici** önlemler.',
          '**1977** temel tutum: Almanya **göç ülkesi değil** + yabancı işçiler **kalıcı yerleşti** → **çözülemez çelişki**. İlkeler: yeni göçü sınırlamak + entegrasyon. İfadesi: **›süreli entegrasyon‹**.',
          '›**Yabancı İşçiler ve Ailelerinin Entegrasyonundan Sorumlu Federal Hükümet Temsilciliği**‹ kuruldu. Makam sahipleri: **Heinz Kühn, Liselotte Funcke, Cornelia Schmalz-Jacobsen**. Talepleri: fiilî göç durumunun kabulü, gerçek entegrasyon politikası.',
          '80\'ler, Hıristiyan-liberal koalisyon: **1983 ›Yabancıların Geri Dönüşünü Teşvik Kanunu‹**. Treibel: öncelikle ›entegre olamaz‹ sayılan **Türk işçilere** yönelik.',
          'Kanun tutarlı sürdürülmedi (koalisyon içi ve eyaletler arası çekişme). Hükümet yasa değişikliği yerine **idari düzenleme** aracına başvurdu: kısıtlayıcı önlemleri **kamusal tartışmayı atlayarak** hızlı uygulamak için.'
        ] }
      ]
    },
    {
      id: 'kanun1990', title: '1990 (1993) Yeni Yabancılar Kanunu',
      blocks: [
        { t: 'ul', items: [
          'Neden: 1980\'lerde göçmenleri **hukuki belirsizlikte** bırakan idari **takdir yetkisine** eleştiriler → **1965** kanunu yeniden düzenlendi.',
          '**26 Nisan 1990** kabul, **1 Ocak 1991** yürürlük. Amaç: özellikle alınan işçiler ve ailelerinin **entegrasyonu**. Liberal tasarı **acele usulüyle** kanunlaştı.',
          'Eleştiriler: **muhafazakârlar** → azaltma önlemleri yetersiz. **SPD, sendikalar, Yeşiller, kiliseler, yardım kuruluşları** → köklü reform fırsatı kaçırıldı; belirleyici hâlâ FA\'nın **›çıkarları‹**; **azınlık politikası yerine yabancılar politikası**.'
        ] },
        { t: 'h', text: 'Kanunun üç özelliği' },
        { t: 'table', head: ['Özellik', 'İçerik'], rows: [
          ['1. Kısıtlayıcı göç politikası', '§3: giriş ve ikamet için **oturma izni** gerekir. AB vatandaşı: **beyan niteliğinde** izin. AB dışı: yalnızca istisna (aile birleşimi, öğrenim, mesleki eğitim, insani neden). Temel ilke: **göçün sınırlandırılması**'],
          ['2. Seçici işgücü erişimi', 'Çalışma izni için **oturma izni** önkoşul. Genel çalışma izni, **1973 durdurma kuralına** bağlı: yerli/AB\'li işgücü yoksa (İş Teşvik Kanunu §19)'],
          ['3. Eşit olmayan siyasi haklar', 'İfade ve örgütlenme özgürlüğü, parti ve sendika üyeliği var; ama siyasi faaliyet **kısıtlanabilir/yasaklanabilir** (§37)']
        ] },
        { t: 'h', text: 'Anayasa maddeleri' },
        { t: 'table', head: ['Kime?', 'Hak', 'Madde'], rows: [
          ['Yalnız Almanlar', 'Toplanma özgürlüğü', 'md. 8'],
          ['Yalnız Almanlar', 'Örgütlenme / sendikalaşma', 'md. 9'],
          ['Yalnız Almanlar', 'Serbest dolaşım', 'md. 11'],
          ['Yalnız Almanlar', 'Meslek özgürlüğü', 'md. 12'],
          ['Yalnız Almanlar', 'Kamu görevlerine erişim', 'md. 33'],
          ['Yabancılar da', 'Genel hareket özgürlüğü', 'md. 2 f. 1'],
          ['Yabancılar da', 'Kanun önünde eşitlik', 'md. 3']
        ] }
      ]
    },
    {
      id: 'oyhakki', title: 'Yabancıların oy hakkı tartışması',
      blocks: [
        { t: 'ul', items: [
          'Soru (1970\'lerden beri): temel siyasi haklar **insan hakkı** mı, yalnızca **vatandaşlara** mı ait?',
          '**AİHS** pek işe yaramaz: md. 16 önemli hakları **ulusal egemenliğe** tabi kılar.',
          'Partilere üyelik mümkün ama **ilgi düşük** (oy hakkı yokken azınlık çıkarını parti çıkarına dönüştürmek zor). 70\'lerde partilerdeki yabancı çalışma grupları **başarısız**.',
          '70\'lerde yardım kuruluşlarının yabancılar çalışması **apolitik, yatıştırıcı** bulundu → 70\'ler sonunda **kültürlerarası dernekler**; genç kuşak bunlarla ilk kez FA gerçekliğine katıldı.',
          'Kalıcı yerleşim **›temsilsiz vergilendirme‹** (taxation without representation) durumu yarattı.'
        ] },
        { t: 'h', text: 'Yerel temsil denemeleri' },
        { t: 'table', head: ['Kurum', 'Özellik', 'Sonuç'], rows: [
          ['**Yabancılar parlamentoları**', 'Yalnızca **danışma**, kararlar bağlayıcı değil; ›karar vericilerin demokratik vicdanını rahatlatma‹', 'Yüksek katılım ilgiyi gösterdi ama **başarısız** → yerini kurullar aldı'],
          ['**Yabancılar danışma kurulları**', 'Okul, kreş, dil kursu, resmî bilgilendirme; üyeler çoğunlukla **belediyece belirlenir** (80\'lerden seçim eğilimi)', '**Meşruiyet eksik**, yine yalnız danışma']
        ] },
        { t: 'p', text: 'Başarısızlığın nedeni: karar vericiler ›yabancılar sorununu‹ uzun süre **siyasi değil, salt sosyoekonomik** gördü.' },
        { t: 'ul', items: [
          'Yerel oy hakkı **1976 İsveç**\'te başladı; Almanya\'da önce tamamen **akademik** tartışıldı.',
          'Avrupa birleşmesi (Hollanda, Danimarka cömert) reddi **anakronizm** gibi gösterdi.',
          'İki yol: **yerel seçimlerde oy hakkı** ya da **vatandaşlığa geçişin kolaylaştırılması**.'
        ] },
        { t: 'h', text: 'Hamburg ve Schleswig-Holstein (1989)' },
        { t: 'table', head: ['', 'Hamburg', 'Schleswig-Holstein'], rows: [
          ['Tarih', '**1 Şubat 1989**', '**14 Şubat 1989**'],
          ['Koşul', '**8 yıl**+ ikamet, oturma hakkı', '**5 yıl** ikamet, **mütekabiliyet**'],
          ['Kapsam', 'İlçe düzeyinde seçme ve seçilme; 180.000 yabancıdan **90.000** (1991 seçimi)', 'Danimarka, İsveç, Hollanda, İrlanda, Norveç, İsviçre vatandaşları; ~**10.000** kişi (1990 yerel seçimi)'],
          ['Siyaset', 'SPD+FDP önerdi, Yeşiller destekledi, **CDU karşı**; İçişleri Bakanı **Zimmermann** Karlsruhe\'ye gitti', 'CDU sert muhalefet']
        ] },
        { t: 'ul', items: [
          '**15 Mart 1989** Avrupa Parlamentosu kararı: AT vatandaşları 5 yıl sonra belediye seçimlerinde seçme-seçilme (menşe belediyesinde oy kullanmamak şartıyla).',
          'Federal Anayasa Mahkemesi **İkinci Senato**, **224 Federal Meclis üyesinin** (Birlik partileri) başvurusuyla **ihtiyati tedbir**: Schleswig-Holstein\'da **25 Mart** seçimlerine yabancı katılımı yasak.',
          '**31 Ekim (1990)** oybirliği kararı: egemenliğin tek sahibi **devlet halkı (Staatsvolk)**; oy hakkı **Alman olmayı** gerektirir. Önerilen çözüm: **vatandaşlığa geçiş**.',
          '**Maastricht (1992)**: AB vatandaşlarına **1997**\'ye kadar yerel oy hakkı → Anayasa **md. 28 f. 1 cümle 3** eklendi.',
          'Sonuç: AB\'liler yerlilere yaklaşırken **AB dışı** (özellikle **Türkler**) **göreli yoksunluk** yaşıyor.'
        ] }
      ]
    },
    {
      id: 'vatandaslik', title: 'Kolaylaştırılmış vatandaşlığa geçiş',
      blocks: [
        { t: 'ul', items: [
          'Oy hakkı tartışması göçmenlerde **vatandaşlık tartışmasının ilk adımı** oldu. Zimmermann vatandaşlığı kolaylaştırma sözü verdi (SZ, 8.2.1989).',
          'Tasarılar: **SPD 23.3.1989**, **Yeşiller 3.5.1989** → vatandaşlığa geçiş **hakkı**, **jus soli**, **çifte vatandaşlık**.'
        ] },
        { t: 'h', text: 'Eski hukuk: RuStaG (1913)' },
        { t: 'ul', items: [
          '**1913 Reich ve Devlet Vatandaşlığı Kanunu** §8 ve §9 + **1977** vatandaşlığa kabul yönergeleri.',
          '§8 asgari koşullar: **sınırsız fiil ehliyeti, lekesiz yaşam, sabit ikametgâh, kendi geçimini sağlama**.',
          '**Takdire dayalı** karar, bölge valisi (**Regierungspräsident**) düzeyinde; genellikle **10 yıl** ikamet.',
          'İlke: **çoklu vatandaşlığın önlenmesi** → önceki vatandaşlıktan vazgeçme şartı.',
          'Kültür çevresine tutum, Anayasa bilgisi, Almanca denetlenir; yabancı siyasi örgütlerde etkinlik **uyumsuzluk** işareti.',
          'Karşıt: **etnik Almanlar** (md. 116) girişte **otomatik** vatandaş; ama Almanya\'da büyümüş 2./3. kuşak gençlere bu kolaylık **yok**.',
          'Sonuç: devletin **etno-kültürel** tanımı entegrasyonu engelledi; **cumhuriyet öncesi** Alman kimliği yorumu en büyük engel.',
          'Mayıs 1989 Meclis: Spranger jus soli\'yi ›tarihsel olarak gelişmiş sisteme‹ aykırı buldu; vatandaşlık **›entegre olmaya istekli olanlarla‹** sınırlı kalmalı (Gerster). Çifte vatandaşlık CDU için söz konusu değildi.'
        ] },
        { t: 'h', text: '1990 Yabancılar Kanunu ile kolaylıklar' },
        { t: 'table', head: ['Hüküm', 'Kime', 'Kolaylık'], rows: [
          ['§85', '**16–23 yaş** gençler', 'İkamet **10 → 8 yıl** (6 yıl okul); aile içinde tek tip vatandaşlıktan vazgeçme'],
          ['§86', '**Birinci kuşak**', '**15 yıl** sonra kolaylaştırılmış geçiş'],
          ['Harç', 'Herkes', '**5000 DM\'ye varan → 100 DM**']
        ] },
        { t: 'ul', items: [
          'Başta yalnızca **kural olarak hak (Regelanspruch)**; **1 Temmuz 1993**\'te (sığınma uzlaşması değişikliği) **kesin yasal hak**.',
          '**Sınır**: önceki vatandaşlıktan **vazgeçme zorunluluğu** etkinliği kısıtladı (Hailbronner öngörmüştü). Gerekçe: uluslararası hukuki güvenlik, **konsolosluk koruması**, devlete bağlılık. Bedel: yıllarca bekleme, **miras** kısıtlaması, **taşınmaz** satma zorunluluğu.'
        ] }
      ]
    },
    {
      id: 'jussoli', title: 'Jus soli ve çifte vatandaşlık (1993–1999)',
      blocks: [
        { t: 'ul', items: [
          '**1993 Mölln ve Solingen** saldırılarından sonra tam siyasi katılım için baskı arttı.',
          'KRV Başbakanı **Johannes Rau**: Almanya göç ülkesi olduğunu kabul etmeli; İtalyan ya da Türk kökenli ebeveynlerin burada doğan çocuklarına **›eşitler arasında eşit‹** davranılmalı.',
          'Tartışma: **soy bağı (jus sanguinis) → doğum yeri (jus soli)** ve çifte vatandaşlık. Vazgeçme zorunluluğu menşe ulusa karşı **kabul edilemez kopuş** sayılmalı.',
          'Avrupa\'da çifte vatandaşlığa hoşgörü artıyor; savaş artık pratikte tasavvur edilemediği için ikili sadakat çatışması önemini yitiriyor.',
          'Almanya zaten iki uluslu evlilik çocuklarında, Nazi mağdurlarında ve **Aussiedler**\'de çifte vatandaşlığı kabul ediyor: **1,8 milyon** çifte vatandaş.',
          'Karşıtların dayanağı: **1963 Avrupa Konseyi sözleşmesi** + **1974 Anayasa Mahkemesi** kararı (devletin vatandaşı üzerindeki münhasır hakkı). Çifte vatandaşlık ›**kaçınılması gereken kötülük**‹ sayıldı.'
        ] },
        { t: 'h', text: '13. Federal Meclis (1994–1998)' },
        { t: 'ul', items: [
          '**›Deneme vatandaşlığı‹ (Schnupperstaatsbürgerschaft)** ile jus soli unsurları: salt jus sanguinis\'ten önemli kopuş.',
          'Reform vaadine rağmen değişiklik yok: aşırı sağa **oy kaybı** korkusu; CDU/CSU çoğunluğuna göre göçmen çocukları **›arkalarındaki tüm köprüleri yakmalı‹**.',
          'SPD, Yeşiller ve Bundesrat tasarıları; Yeşiller otomatik vatandaşlığı **ikinci kuşaktan** itibaren istedi.',
          '1997 sonbaharı çifte vatandaşlığı kolaylaştıran **yeni Avrupa Konseyi sözleşmesi** → karşıtların argümanı zayıfladı.',
          'Ekim 1997: reform **316\'ya karşı 338** oyla **reddedildi**. Cem **Özdemir**: RuStaG ›tarihin hurdalığına‹.'
        ] },
        { t: 'h', text: '1999 vatandaşlık reformu' },
        { t: 'ul', items: [
          '**1998** Schröder\'in **kırmızı-yeşil** koalisyonu hızla uzlaştı.',
          'Plan: çifte vatandaşlık hoşgörülecek (Fransa, ABD, İsviçre gibi); jus soli iki grup için: (1) ebeveynlerinden biri **Almanya doğumlu** (3. kuşak), (2) ebeveynlerinden biri **14 yaşından önce** göç etmiş.',
          'Yeşiller 2. kuşak için yasal hak istedi, **SPD elitine kabul ettiremedi**.',
          '**7 Mayıs 1999**: SPD, Yeşiller ve **FDP** önergesi büyük çoğunlukla kabul.',
          '**1 Ocak 2000**\'den itibaren Almanya\'da doğan yabancı çocuklar **otomatik** Alman vatandaşı, **iki pasaport**, **23 yaşına** kadar karar.',
          '**Genel çifte vatandaşlık**, CDU/CSU protestoları üzerine **kanundan çıkarıldı**.'
        ] }
      ]
    },
    {
      id: 'ekonomi', title: 'Ekonomik durum: kavramlar ve kuram',
      blocks: [
        { t: 'p', text: '(Werner Sesselmeier) **Çalışma hipotezi**: yabancıların ekonomik ve sosyal durumu belirleyici ölçüde **işgücü piyasasındaki konumlarıyla** belirlenir. Nüfus ve çalışanlar içinde payları ~**%9**, ama FA resmen göç ülkesi değil.' },
        { t: 'h', text: 'Yabancı mı, göçmen mi?' },
        { t: 'ul', items: [
          '**Yabancı**: Almanya\'da yaşayan, Alman vatandaşı olmayan herkes.',
          'Göç edenlerin **2. ve 3. kuşağı yabancıdır ama göçmen değildir**.',
          'Vatandaşlığa geçen göçmenler bu grubun **dışında**. Aussiedler, sığınmacılar ve iç savaş mültecileri de **dahil değil**.',
          'Bu metinde **›yabancı‹ = misafir işçiler ve torunları**.'
        ] },
        { t: 'table', head: ['1998 başı: 7,37 milyon yabancı', 'Pay'], rows: [
          ['Türkler (AB\'lilerin toplamından fazla)', '%28'],
          ['AB\'li yabancılar', '%25\'in biraz üstü'],
          ['Eski Yugoslavya', '%10\'un biraz üstü'],
          ['İtalyanlar', '%8\'in biraz üstü'],
          ['Yunanlar', '%5']
        ] },
        { t: 'h', text: 'Kuram' },
        { t: 'ul', items: [
          '**Sınırsız göç** → yerli işsizlik **artar**, ücret **düşer** (göç ancak yurt içi ücret dünya düzeyine inince durur). **Sınırlandırma** → daha az işsizlik, daha küçük ücret düşüşü.',
          'Ama göçle artan üretim **işgücü talebini** de artırır; yerlilerin ücret ve istihdamı yükselebilir.',
          '**Segmentasyon**: piyasa birbirine az geçirgen iki bölüm. **Birincil**: yüksek ücret, iyi koşul, yükselme, istikrar. **İkincil**: kötü koşul, düşük ücret, düşük istikrar, yüksek devir, **›herkesin yapabileceği işler‹**. Göçmenler beşeri sermayeden bağımsız ikincile girer.'
        ] },
        { t: 'table', head: ['Tez', 'İddia'], rows: [
          ['**Tamamlayıcılık**', 'Yabancılar yerlilerin istemediği/üstlenemediği işleri doldurur; **yerli işgücüne ihtiyacı artırır**'],
          ['**İkame**', 'Yabancılar yerlilerin **işini elinden alır**; yerlilere talep azalır'],
          ['Ampirik sonuç', '**İkisi de** görülür. Piyasa iyiyken **tamamlayıcı**, işsizlik artınca **ikame edici**']
        ] },
        { t: 'ul', items: [
          'Büyüme: ikame varsa büyüme yavaşlar; uyumsuzlukları (talep fazlası) dengelerse büyüme artar.',
          'Göçmenler tüketim, altyapı, konut ihtiyacıyla yatırım ve iş yaratır: **çarpan etkisi**. **Ailece göçte** etki daha büyük; kapasite atılsa (tam kullanılmıyorsa) yeni işe alım olmaz.'
        ] }
      ]
    },
    {
      id: 'ekonomi2', title: 'Ekonomik durum: sektör, işsizlik, serbest çalışma',
      blocks: [
        { t: 'h', text: 'Sektörler' },
        { t: 'ul', items: [
          '**1960**: yabancıların **%45**\'i imalat sanayisinde, **%26**\'sı inşaatta.',
          'İmalat payı 80\'ler ortası **%63**, 1995 **%50** (Almanların yalnızca **üçte biri** bu sektörde).',
          'İnşaat önemini yitirdi (80\'ler başı 60\'ların yarısı). Ticaret, ulaştırma, hizmetlerde yabancı payı **%35**\'e çıktı (Almanların **%60**\'ı burada).',
          'Az sayıda meslekte, çoğunlukla **vasıfsız/yarı vasıflı**. Erhard 1965\'te işgücü piyasasının **tükenmesinden** söz etmişti.',
          'Yabancılar sayesinde Alman işçiler daha iyi sektörlere yükseldi → **tamamlayıcı** ilişki.'
        ] },
        { t: 'table', head: ['Haftalık çalışma', 'Saat'], rows: [
          ['Yabancı işçiler (ort.)', '**38,0**'],
          ['Almanlar (ort.)', '**35,2**'],
          ['Vasıfsız yabancı', '39'],
          ['Vasıfsız Alman (çoğu hanenin **ikinci geliri**)', '31']
        ] },
        { t: 'h', text: 'Göç ve işsizlik zaman çizelgesi' },
        { t: 'table', head: ['Dönem', 'Olay'], rows: [
          ['1960\'lar', 'Misafir işçi işsizliği **yok** (işsiz kalan ülkesine döner)'],
          ['1966 / 1967', 'Net göç **+97.000** / **−198.000**'],
          ['1968–1973', 'Yılda ort. **+387.000**; nüfus **1,9 → 4,0 milyon**; işçi **1,1 → 2,6 milyon** (zirve)'],
          ['1971', 'Kanunla oturma izinlerinin **uzatılması** → aile birleşimi yolu'],
          ['1973', 'Alım ücreti **3 katına**; OPEC ambargosu sonrası **Ekim 1973** alım sonu'],
          ['1974–1977', 'İşgücü piyasası **706.000** rahatladı (1977: 1,9 milyon); negatif göç dengesi yalnız bu yıllarda'],
          ['1980', '**4,5 milyon** yabancı (%7), 2,1 milyonu çalışıyor'],
          ['1990', 'İlk kez **400.000+** işsiz yabancı'],
          ['1996 sonu', 'Yabancı işsizlik **%20,5** (rekor), Türkler **%24,4**, eski Yugoslavlar **%11,1**']
        ] },
        { t: 'ul', items: [
          '**Rotasyon ilkesi** 60\'ların sonunda sorgulandı: (1) işçiler **birikim hedefine** ulaşamıyordu, (2) işverene **kârsız** (her yeni işçiye eğitim, verimlilik kaybı).',
          'Alım durdurma **geri dönüş isteğini artırmadı**: seçim ›ya kesin dön ya yerleş ve aileni getir‹ oldu → nüfusun **yapısı** değişti.',
          'AB\'liler neden daha az işsiz? Göçleri **daha eski**, **daha nitelikli**, **serbest dolaşımla** konjonktüre göre hareket edebiliyorlar.',
          'Yüksek işsizliğin nedenleri: rasyonalizasyondan en çok etkilenen **imalat** payı, düşük **nitelik**, hizmette **müşteri teması** engeli, serbest meslekte **sermaye** eksikliği.'
        ] },
        { t: 'h', text: 'Serbest çalışma' },
        { t: 'ol', items: [
          '**Alım durdurma** → konsolidasyon; kalıp aile getirdiler.',
          '**Kötü konjonktür** → işsizlikten kaçmak için iş kurma.',
          'Alman çalışanlara göre **daha düşük gelire razı** olmak.',
          '**Hukuki koşullar**: oturma izni, yabancılar dairesi kısıtlamalarının kalkması.'
        ] },
        { t: 'ul', items: [
          'Sayı **~40.000 (1970 başı) → ~240.000 (1995)**; oran **%3 → %8,7** (Almanlar %10).',
          '1972–1992: ~dörtte üçü **ticaret, ulaştırma, hizmet**; **tarımda** yok denecek kadar az (Almanların dörtte biri tarımda).',
          'En büyük gruplar: İtalyan, Türk, eski Yugoslav, Yunan (aynı zamanda en yüksek işsizlik).',
          '**İtalyanlar 1994 %12,1** (1980 %4,9); **Türkler 1994 %4,1** (1980 %1,2). Türklerde 80\'ler ortası piyasa iyileşince geçiş azaldı.',
          'Neredeyse her iki yabancıdan biri **tek kişilik** işletme. **Zanaate benzer** işler (terzilik, dondurma) ve **gıda perakendesi** (etnik talep, Almanların terk ettiği nişler) → ilişki yine **tamamlayıcı**.'
        ] }
      ]
    },
    {
      id: 'sosyal', title: 'Sosyal durum: gelir, yoksulluk, ayrışma',
      blocks: [
        { t: 'h', text: 'Gelir' },
        { t: 'table', head: ['Gösterge', 'Almanlar', 'Yabancılar'], rows: [
          ['Brüt gelir 1984 → 1995', '2760 → **4290 DM** (%55 artış)', '%42 artış → **3430 DM**'],
          ['Çocuksuz hane', '**%67**', '**%47**'],
          ['En yaygın hane', '**Tek kişilik**', '**4+ kişilik**'],
          ['2 çocuklu hane (çocuklu haneler içinde)', '%36,9', '%34,8 (en küçük fark)'],
          ['4+ çocuklu hane', '%2,6', '%6,2 (en büyük fark)'],
          ['Ortalama hane büyüklüğü', 'Sürekli küçülüyor', 'Sabit **3,3**'],
          ['Eşdeğer hane geliri', '**1665 DM**', '**1264 DM**']
        ] },
        { t: 'ul', items: [
          '**Eşdeğer hane geliri**: hane gelirini kişi sayısına bölmek yerine, hane reisine 1, diğer üyelere **yaşa göre küçük ağırlıklar** verilir.',
          'Brütte yakınlaşma en çok **kalifiye işçi** mesleklerinde.',
          'Çok kuşaklı aile yabancılarda daha sık; asimilasyonla hane yapısının ve gelir farkının **yakınsaması** beklenir.'
        ] },
        { t: 'h', text: 'Eşitsizlik ve yoksulluk' },
        { t: 'ul', items: [
          '**Gini katsayısı**: 0–1 arası, **büyüdükçe daha eşitsiz**. Batı Almanya **0,272 (1985) → 0,277 (1995)**; göçmenlerle **0,281**.',
          '**Göreli yoksulluk**: ortalamanın **%50**\'sinin altı = orta yoksulluk, **%40**\'ının altı = **ağır yoksulluk**.',
          '1985 standart yoksulluk oranı **%11,9**; göçmenler hariç 1995\'te pratikte aynı. Göçmenler dahil üç gösterge de ~**1 puan** artar.',
          'Göçmenlerde: yoksulluk ~**%30**, ağır yoksul **%17**, neredeyse **yarısı** düşük gelir alanında.',
          '**Sosyal yardım** 1995: Almanlar **%2,7** (1980\'in iki katı); yabancılar 1980\'de Almanların altındaydı, 1995\'te **beş katına** çıkarak **%5,5**.'
        ] },
        { t: 'h', text: 'Dil ve sosyal ayrışma' },
        { t: 'table', head: ['Almancayı iyi bilenler', 'Oran'], rows: [
          ['Eski alım ülkelerinden tüm yabancılar', '**%55**'],
          ['Türkler', '%49'],
          ['Yabancı kadınlar', '%48'],
          ['Almanya doğumlu yabancılar', '**%93**']
        ] },
        { t: 'ul', items: [
          'Dil ve uzun kalış ilişkiyi artırmalıydı, ama 90\'lar başında **ayrışma arttı**.',
          'Yabancıların **%58**\'inin en yakın üç kişisinde **hiç Alman yok**. Almanlarla yoğun ilişki **%48 (1992) → %42 (1994)**.',
          'İkinci kuşakta en az bir Alman arkadaş **%67 (1992) → %59 (1994)**. Türklerde yalnız **üçte biri** (1992 %37).'
        ] },
        { t: 'h', text: 'Kalma niyeti ve aidiyet (1995)' },
        { t: 'ul', items: [
          'Kalıcı kalmaya karar veren: **%47**. Kalmayacaklarda da somut dönüş niyeti yok denecek kadar az (en fazla **emeklilikte**).',
          'İkinci kuşakta kalma kararı ortalamanın üstünde ama **%59 (1991) → %52 (1995)** düştü.',
          'Kendini ağırlıklı **Alman hisseden**: **%11**, Türkler **%7**, ikinci kuşak **%30 (1991) → %21 (1995)**.',
          'Neden düşüş? **Dışlanmaya tepki** + artan **etnik özgüven**; ayrıca **Aussiedler** ile yeni rekabet.'
        ] }
      ]
    },
    {
      id: 'gelecek', title: 'Geleceğe bakış',
      blocks: [
        { t: 'ul', items: [
          'Yabancıların işsizliği Almanlarınkinin neredeyse **iki katı**; neden konjonktürden çok **sektör ve nitelik**.',
          'İşsiz yabancıların **%78**\'inin, işsiz Almanların yalnız **%38**\'inin tamamlanmış mesleki eğitimi yok. Eğitim düzeyindeki yükseliş durgunlaştı, hatta geriledi.'
        ] },
        { t: 'table', head: ['Demografi', 'Bugün', '2020', '2030'], rows: [
          ['20 yaş altı / 20–59 yaş', '%38', '~%30', '–'],
          ['60 yaş üstü / 20–59 yaş', '%35', '~%55', '%70'],
          ['Ortalama yaş', '40', '–', '48'],
          ['Nüfus', '2005\'ten itibaren küçülme', '–', '**14 milyona** varan azalma']
        ] },
        { t: 'tip', text: 'Sonuç: mesele yeni yabancı getirmek değil, **burada olanların eğitimini iyileştirmek**. Bunun için Almanya fiilî göç ülkesi olduğunu kabul etmeli; Federal Devlet ile eyaletlerin dağınık yetkilerini uyumlaştıran bir **göç yasası** doğru yönde ilk adım olur.' }
      ]
    }
  ]
}
];
