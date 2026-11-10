/* Sudiş'in sordukları — sağ alttaki menü. Biçim: content.js blokları.
   link: ilgili özet başlığı (#ders/konu). Kaynak: üç ders PDF'i. */
window.SUDIS_ASKS = [
  {
    id: 'neden',
    q: 'Almanya\'ya neden göç yapıldı?',
    links: [['#goc/evre1', 'Göç Tarihi: 1. evre'], ['#siyaset/italya', '1955 İtalya anlaşması']],
    blocks: [
      { t: 'p', text: 'Kısaca: **Almanya\'nın işçiye**, işçi gönderen ülkelerin de **işe ve dövize** ihtiyacı vardı.' },
      { t: 'h', text: 'Almanya tarafı' },
      { t: 'ul', items: [
        '1950\'lerdeki hızlı ekonomik büyümeyle işsizlik bitti, yerini **işgücü açığına** bıraktı.',
        'Tarım ve sanayide **işgücü rezervinin tükeneceğinden** korkuldu. Ekonomi Bakanı Erhard 1965\'te işgücü piyasasının ›tükendiğini‹ söylüyordu.',
        'Yerli işgücünü (kadınlar, kırsal kesim) çalıştırmak **ücret maliyetini artırırdı**. Bu yüzden ulusal işgücü piyasası yabancılara **açıldı**.',
        'Yabancı işçiler Almanların **istemediği** işleri (ağır, tekdüze, tehlikeli, kötü ücretli) doldurdu, Almanlar daha iyi işlere yükseldi.'
      ] },
      { t: 'h', text: 'Gönderen ülkeler tarafı' },
      { t: 'ul', items: [
        'Anlaşmaları **gönderen ülkeler başlattı**: kendi ülkelerinde **eksik istihdam ve işsizlik** vardı, **döviz** gerekiyordu.',
        'Örneğin İtalya, ödemeler dengesi ve dış ticaret açığını Almanya\'da işçi çalıştırarak kapatmak istedi.'
      ] },
      { t: 'h', text: 'Göçmenlerin kendisi' },
      { t: 'p', text: 'Çoğu **maddi sıkıntıdan çok**, meslek ve aile geleceğini planlamak için, olumlu beklentilerle geldi. Hedef genelde birkaç yıl çalışıp para biriktirip dönmekti.' }
    ]
  },
  {
    id: 'ulkeler',
    q: 'Hangi ülkelerden işçi geldi?',
    links: [['#goc/evre1', 'Anlaşmalar tablosu'], ['#goc/dusmanlik', '1998 nüfus tablosu']],
    blocks: [
      { t: 'table', head: ['Yıl', 'İşçi alım anlaşması'], rows: [
        ['1955', 'İtalya'], ['1960', 'Yunanistan, İspanya'], ['1961', '**Türkiye**'],
        ['1963', 'Fas'], ['1964', 'Portekiz'], ['1965', 'Tunus'], ['1968', 'Yugoslavya']
      ] },
      { t: 'ul', items: [
        '**1969**\'da en büyük grup **İtalyanlar (%23)** idi. 1970\'te Yugoslavlar onları geçti, **1972**\'de en kalabalık yabancı çalışan grubu **Türkler** oldu.',
        '1998 sonunda 7,32 milyon yabancının **%28,8**\'i Türk (2,11 milyon), %15,3\'ü eski Yugoslav, %8,4\'ü İtalyan, %5\'i Yunandı.'
      ] },
      { t: 'tip', text: 'Soruda ›göç **alan** ülke‹ Almanya\'dır; listedekiler göç **veren** (işçi gönderen) ülkelerdir. Sınavda bu ayrımı doğru kullan.' }
    ]
  },
  {
    id: 'sonuc',
    q: 'Bu göç işçi gönderen ülkeler için nasıl sonuçlandı?',
    links: [['#goc/yasam', 'Geri dönüş'], ['#goc/evre25', '2. evre']],
    blocks: [
      { t: 'p', text: 'PDF\'ler bu konuyu ayrı bir başlıkta değil, dağınık olarak anlatıyor. Öne çıkanlar:' },
      { t: 'ul', items: [
        '**Beklenen kazanç:** işsizliğin azalması ve işçilerin gönderdiği paralarla **döviz** girişi (anlaşmalarda ücret transferi güvenceye alınmıştı).',
        '**Türkiye:** başvuran sayısı gidebileceklerin **4 katıydı**. Bu yoğunluk aracılık sürecinde **usulsüzlük, rüşvet ve kayırmacılığa** yol açtı. İstanbul\'daki Alman bürosu 1971\'de günde 700\'den fazla kişiyi muayene ediyordu.',
        '**İspanya ve Yunanistan:** 70\'lerin ortasında **demokrasiye dönüş** ve ekonomik gelişme, işçilerin geri dönmesini sağladı; bu ülkelerden gelenlerin sayısı azaldı.',
        '**İtalya:** AET\'deki serbest dolaşım sayesinde İtalyanlar gidip gelmekte en özgür, geri dönmeye **en hazır** gruptu; Almanya\'daki payları 70\'lerden itibaren sürekli düştü.',
        '**Geri dönenler:** dönüş bir **›olumsuz seçilim‹**di. Hedefine ulaşıp dönen azdı; çoğu işsizlik, aile sorunları ya da memleket hasreti yüzünden döndü.',
        '**Kalıcılaşma:** 1973\'ten sonra pek çok aile Almanya\'ya yerleşti; göçmenler geçici işçi olmaktan çıkıp **kalıcı azınlıklara** dönüştü.'
      ] },
      { t: 'low', text: 'Gönderen ülkelerin ekonomisine uzun vadeli etkisi (kalkınma, köylere etkisi vb.) PDF\'lerde ayrıntılı anlatılmıyor.' }
    ]
  },
  {
    id: 'karsilanma',
    q: 'Misafir işçiler nasıl ve hangi şartlarla geldi, nasıl karşılandılar?',
    links: [['#goc/evre1', '1. evre'], ['#goc/yasam', 'Konut'], ['#siyaset/italya', 'İtalya anlaşması']],
    blocks: [
      { t: 'h', text: 'Geliş süreci' },
      { t: 'ol', items: [
        'Alman işveren işçi talebini **iş ve işçi bulma kurumuna** bildirdi.',
        'Talep, gönderen ülkedeki Alman **işçi alım komisyonuna** iletildi.',
        'Komisyon adayları **mesleki nitelik** ve **sağlık muayenesiyle** seçti.',
        'Şirketler aracılıkla gelen her işçi için **300 DM** (sonra **1000 DM**) ödedi.'
      ] },
      { t: 'p', text: 'Bir de turist vizesiyle gelip iş bulan **›ikinci yol‹** vardı: 1956–1973 arasında gelenlerin **%54**\'ü komisyon olmadan geldi (**zincirleme göç**).' },
      { t: 'h', text: 'Şartlar' },
      { t: 'ul', items: [
        'Anlaşmalarda **eşit haklar**, toplu sözleşme ücreti, barınma, **ücret transferi** gibi koruma hükümleri vardı. Sendikalar yerlilerle **eşit ücrette** ısrar etti.',
        'Mantık **rotasyon**du: işçi bir süre çalışıp dönecek, yerine yenisi gelecekti.',
        '**Türkiye anlaşması** daha sıkıydı: kalış **2 yılla** sınırlıydı (1964\'te kaldırıldı), **sağlık denetimi** vardı, **aile birleşimi** bölümü yoktu.',
        'Hukuken 1965 Yabancılar Kanunu geçerliydi: oturma izni **›kamu yararına‹** ve makamların takdirine bağlıydı.'
      ] },
      { t: 'h', text: 'Karşılanma ve yaşam' },
      { t: 'ul', items: [
        'İlk yıllarda **yatakhanelerde** ya da **barakalarda** kaldılar: sıkı kurallar, çoğu zaman banyosuz ve tuvaletsiz tek oda. Zamanla çoğu özel daireye geçti (1968 %60+, 1980 %90+), ama genellikle ihmal edilmiş mahallelerde ve Almanlardan **daha yüksek kirayla**.',
        'Almanlardan kaçınılan **ağır, tekdüze, tehlikeli, kötü ücretli** işlerde çalıştılar.',
        'Toplumla temas azdı: 70\'lerin ortasında Türklerin **%40**\'ının Almanlarla hiç teması yoktu. Yalnızlığa karşı **›göçmen kolonileri‹** dayanışma sağladı.',
        'Ev sahibi toplumun gözünde en iyi ihtimalle **egzotiktiler**. 1966/67 krizinde ilk kez olumsuz gündeme geldiler; yabancı çocuk sayısı artınca **›yabancılaşma‹ (Überfremdung)** korkusu yayıldı.'
      ] }
    ]
  },
  {
    id: 'donus',
    q: 'Dönüşleri nasıl oldu?',
    links: [['#goc/yasam', 'Geri dönüş'], ['#goc/evre25', '4. evre: geri dönüş primi']],
    blocks: [
      { t: 'ul', items: [
        'Başta neredeyse herkes **kısa sürede dönmeyi** planlıyordu. 1956–1983 arasında gelenlerin **en az dörtte üçü** gerçekten döndü.',
        'Almanya dönüşü **zorlamadı**, ama 70\'lerde (özellikle işsizler) baskı hissetti.',
        'Dönüş bir **olumsuz seçilim**di: hedefine ulaşan az, çoğu işsizlik, aile sorunu ya da memleket hasreti yüzünden döndü.',
        '**1973 alım durdurmasından** sonra seçim keskinleşti: ya **kesin dönüş** ya da **kalıp aileyi getirmek**. Çıkıp yeniden girmek artık mümkün olmadığı için çoğu kaldı.',
        '**1982–1983:** geri dönüş primi, emeklilik primlerinin iadesi, Geri Dönüşü Teşvik Kanunu. **Amacına ulaşmadı**: aile getirmeler sürdü, yabancı nüfus 4,5 milyondan 4,8 milyona çıktı.',
        '**1985**\'te göçmenlerin **%63,2**\'si planladığından uzun kalıyordu; çoğu dönüşü ertelemişti. 1995\'te **%47**\'si kalıcı kalmaya karar vermişti, dönmeyi düşünenler de en fazla **emeklilikte** dönmeyi düşünüyordu.'
      ] },
      { t: 'tip', text: 'Gerçekleşmese bile **›geri dönüş hayali‹** önemliydi: göçmenler arasında **sadakati** ve **etnik kimliği** korudu, göçün zorluklarıyla başa çıkma stratejisiydi.' }
    ]
  },
  {
    id: 'kadinlar',
    q: 'Eş olarak gelen kadınlar günlerini nasıl geçirdi?',
    links: [['#goc/yasam', 'Yabancı kadınlar'], ['#edebiyat/turk80', 'Kadın yazarlar']],
    blocks: [
      { t: 'p', text: 'Metin yabancı kadınları **iki gruba** ayırır: işçi **eşi** olarak gelenler ve **doğrudan çalışmak** için gelenler.' },
      { t: 'h', text: 'Eş olarak gelenler' },
      { t: 'ul', items: [
        'AT dışından (ör. **Türkiye**) gelen eşler **çalışma izni** alana kadar belli bir süre **beklemek** zorundaydı (1974\'ten itibaren aile birleşimiyle gelenlere bekleme süreleri kondu).',
        'Bu yüzden çoğu **ev kadını** olarak, evde ve çoğu zaman **yalıtılmış** yaşadı.',
        '**Dil güçlükleri** nedeniyle Almanlarla erkeklerden **daha az** temasları vardı (yabancı kadınların yalnızca **%48**\'i iyi Almanca biliyordu).',
        'Metne göre özellikle **Türk eşler** için Alman koşullarına uyum en büyük sorundu ve **yalnızlık duygusunu** güçlendiriyordu.'
      ] },
      { t: 'h', text: 'Çalışmak için gelenler' },
      { t: 'ul', items: [
        'Ortalamanın üstünde **vasıfsız/yarı vasıflı** işlerde, erkeklerden **belirgin biçimde düşük ücretle** çalıştılar.',
        'Özellikle 60\'larda **yalnız gelenler**: ekonomik bağımsızlık ve daha az toplumsal denetim yaşam tarzlarını değiştirdi, ama geleneksel normlarla **çatışmaya** da yol açtı.'
      ] },
      { t: 'p', text: 'Sayılar: kadınların oranı **%28,5 (1967) → %41 (1979)**. Türk kadınlar **%22 → %41** (70\'lerde aile birleşimiyle hızla arttı).' },
      { t: 'low', text: 'Edebiyatta da işlendi: Saliha Scheinhardt ›Frauen, die sterben, ohne daß sie gelebt hätten‹ (1983) ve Aysel Özakın\'ın romanları.' }
    ]
  },
  {
    id: 'petrol',
    q: 'Petrol krizi misafir işçileri nasıl etkiledi?',
    links: [['#goc/evre25', '2. ve 3. evre'], ['#siyaset/ekonomi2', 'İşsizlik zaman çizelgesi']],
    blocks: [
      { t: 'h', text: 'Birinci petrol krizi (1973)' },
      { t: 'ul', items: [
        'OPEC ambargosunun ardından **işçi alımı durduruldu** (Anwerbestopp): Göç Tarihi metnine göre **23 Kasım 1973**, Siyasi-Hukuki Koşullar metnine göre **Ekim 1973**\'te ilan edildi.',
        'Dikkat: hükümet sınırlamayı petrol krizinden **önce, 1972**\'de planlamıştı; kriz kararı hızlandırdı.',
        '**Çalışma izinleri** kısıtlayıcı uygulandı (1974\'ten itibaren tek tek inceleme, **yerlilerin önceliği**), işsizlik parasında **ayrımcılık** yapıldı.',
        '1974\'e kadar ortalamanın altında olan yabancı **işsizliği ortalamanın üstüne çıktı**. İşsiz kalanların çoğu dönmedi: **›sessiz işgücü yedeği‹** oldu.',
        '**Çelişkili sonuç:** yabancı istihdamı **2,6 → 2,1 milyon** düşerken yabancı **nüfusu 3,5 → 4,5 milyon** arttı. Çünkü dönen yerine **kalıp ailesini getirdi**.',
        'Böylece yabancı işçilerin **›tampon‹ (konjonktür dengeleme) işlevi** ortadan kalktı; geçici işçilik kalıcı göçe dönüştü.',
        '1975: çocuk parası azaltıldı, büyük şehirlere **yerleşme yasakları** kondu.'
      ] },
      { t: 'h', text: 'İkinci petrol krizi (1979)' },
      { t: 'ul', items: [
        '**›Türk sorunu‹** kampanyası başladı (1982/83\'e kadar sürdü); popüler basın sertleşti, yabancılara **saldırılar** oldu.',
        'Ardından **1981 sınırlamaları** (eş ve çocuk getirmeye kısıtlama) ve **1982/83 geri dönüş primleri** geldi.'
      ] }
    ]
  }
];
