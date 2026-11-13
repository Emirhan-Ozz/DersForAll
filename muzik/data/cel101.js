/* ÇEL101 Viyolonsel I · Marian Międlar, Szkoła na wiolonczelę I (PWM) — Lehçe metinden çeviri */
App.course({
  id: 'cel101', code: 'ÇEL101', short: 'Viyolonsel I', glyph: '𝄢',
  title: 'Viyolonsel I',
  desc: 'Międlar\'ın viyolonsel metodu (Lehçe) Türkçeye çevrildi: yapı, tarih, duruş, sol el, yay tutuşu, yay türleri, akort, işaretler.',
  lead: 'Kaynak kitap **Marian Międlar – Szkoła na wiolonczelę, cilt I** (Polskie Wydawnictwo Muzyczne). Kitap **Lehçe**; giriş bölümündeki bütün açıklamalar burada **Türkçeye çevrilip** konu konu anlatıldı. Kitabın geri kalanı alıştırma ve halk ezgilerinden oluşur; onların sırası ve amacı son konularda.',
  sources: [
    { g: '𝄢', t: 'Marian MIĘDLAR · Szkoła na wiolonczelę I', d: 'Viyolonsel okulu, 1. cilt. 345 alıştırma ve parça; piyano eşlikleri ayrı kitapta (*Akompaniament fortepianowy*). PWM, Kraków.' }
  ],
  traps: [
    { t: '*Violoncello*, İtalyanca **violone**\'nin (kontrabas) **küçültme** biçimidir: "küçük violone". Anavatanı **İtalya**.', topic: 'tarihce' },
    { t: 'Viyolonselin son ölçüsünü ve büyüklüğünü **A. Stradivari** belirledi. Viyolonsel **viola da gamba**\'nın yerini aldı.', topic: 'tarihce' },
    { t: 'Gamba\'ya karşı kazanmasının iki nedeni: **perdesiz** sapta temiz entonasyon ve daha **yuvarlak köprü** (komşu tellere çarpmadan rahat çalış).', topic: 'tarihce' },
    { t: 'Yöntem **Sapożnikow**\'a dayanır: öğrenci önce yaysız, **sol el + sağ el pizzicato** ile başlar. Alıştırmalar **halk ezgilerine** dayanır.', topic: 'yontem' },
    { t: 'Sandalyenin **ön kısmına**, sırtı yaslamadan oturulur. **Do teli burgusu göz (ya da kulak) hizasında**; çalgı yere **60–70°** eğik.', topic: 'durus' },
    { t: 'Üç dayanak noktası: **iğne** yerde, alt kapak kenarı **sol dizin iç yüzünde**, sırtın üst kenarı **göğüs** hizasında.', topic: 'durus' },
    { t: 'Dar pozisyonda parmaklar arası **yarım ses**, 1. ile 4. parmak arası **küçük üçlü**. Başparmak hep **2. parmağın karşısında**.', topic: 'solel' },
    { t: '4. parmağın yerini kontrol: sesi, **bir alttaki boş telden bir oktav tiz** olmalı.', topic: 'solel' },
    { t: 'Geniş pozisyon: 1. parmak **geri** → **bemollü** tonlar; 2-3-4 **ileri** → **diyezli** tonlar. 1–4 arası **büyük üçlü** olur.', topic: 'genis' },
    { t: 'Yay tutuşunda **başparmak + orta parmağın orta boğumu = "çalış ekseni"**. İşaret parmağı kolun **gücünü aktarır**, serçe **karşı ağırlık**tır.', topic: 'yaytutus' },
    { t: 'Yay tele **köprüden 3–5 cm** uzakta ve **tele dik** çekilir. Öğretim **Re teli**nde, yayın **ortasında** başlar.', topic: 'yaycekme' },
    { t: '**⊓ aşağı yay** = topuktan uca; **V yukarı yay** = uçtan topuğa. **La** telinde dirsek yüksek, **Do** telinde alçak.', topic: 'yaycekme' },
    { t: 'Eşit ses için **uca yakın baskı artırılır**, **topuğa yakın azaltılır**.', topic: 'yaycekme' },
    { t: '**Détaché**: yön değişimi duyulmaz, her nota ayrı yay. **Legato**: birçok nota tek yayda. **Portato**: tek yayda, tel bırakılmadan yumuşakça ayrılmış notalar.', topic: 'yayturleri' },
    { t: 'Viyolonsel **tam beşlilerle** akort edilir: **La – Re – Sol – Do**; akorda **La** telinden başlanır.', topic: 'akort' }
  ],
  topics: [
    /* 1 */
    { id: 'yapi', title: 'Viyolonselin ve yayın yapısı', short: 'Yapı', src: 'Budowa instrumentu · Smyczek (s. 4)',
      blocks: [
        { t: 'p', text: 'Viyolonsel **büyük boyutlu bir yaylı çalgı**dır ve **keman örneğine göre** yapılmıştır. Kitabın ilk sayfası çalgının ve yayın parçalarını adlandırır. Lehçe adları da yazdık; derste ve partisyonda bu adlarla karşılaşabilirsin.' },
        { t: 'table', cls: 'k1', head: ['Parça (Türkçe)', 'Kitaptaki adı', 'Görevi'], rows: [
          ['Salyangoz (kıvrım)', 'ślimak', 'Sapın en üstündeki kıvrık süs.'],
          ['Burgu kutusu (baş)', 'główka', 'Burguların takıldığı kısım.'],
          ['Burgular', 'kołki', 'Telleri gerip gevşeterek akort yapılır.'],
          ['Üst eşik', 'prożek', 'Tellerin sapa geçtiği yerdeki küçük eşik; titreşen boyun başlangıcı.'],
          ['Sap', 'szyjka', 'Sol elin tuttuğu kısım.'],
          ['Teller', 'struny', 'Kalından inceye: **Do – Sol – Re – La** (C – G – D – A).'],
          ['Tuşe (klavye)', 'podstrunnica (chwytnia)', 'Parmakların teli bastığı uzun siyah tahta.'],
          ['Gövde (ses kutusu)', 'pudło rezonansowe', 'Sesi büyüten tınlama kutusu: üst kapak, alt kapak (sırt) ve yanlar.'],
          ['f delikleri', 'otwór rezonansowy', 'Üst kapaktaki ses delikleri.'],
          ['Köprü (eşik)', 'podstawek', 'Telleri taşır, titreşimi gövdeye aktarır.'],
          ['Kuyruk takozu (tel tablası)', 'strunnik', 'Tellerin alt uçlarının bağlandığı parça.'],
          ['İğne (ayak)', 'nóżka', 'Çalgıyı yere dayayan, boyu ayarlanabilen çubuk.']
        ] },
        { t: 'h', text: 'Yay (smyczek)' },
        { t: 'table', cls: 'k1', head: ['Parça / bölge', 'Kitaptaki adı', 'Açıklama'], rows: [
          ['Uç (baş)', 'główka', 'Yayın ince ucu.'],
          ['Topuk (kurbağa)', 'żabka', 'Elin tuttuğu, kılları geren parça (vidayla ayarlanır).'],
          ['Çubuk', 'pręt', 'Ahşap gövde.'],
          ['Kıllar', 'włosie', 'Tele sürtünen at kılı.'],
          ['Uç bölgesi', 'koniec smyczka', 'Uca yakın üçte bir (ya da dörtte bir).'],
          ['Orta', 'środek smyczka', 'Ortadaki üçte bir (ya da dörtte bir).'],
          ['Topuk bölgesi', 'przy żabce', 'Topuğa yakın üçte bir (ya da dörtte bir).'],
          ['Üst yarı', 'górna połowa', 'Şekilde: uçtan ortaya kadar.'],
          ['Alt yarı', 'dolna połowa', 'Şekilde: ortadan topuğa kadar.'],
          ['Bütün yay', 'cały smyczek', 'Topuktan uca.']
        ] },
        { t: 'tip', text: 'Yayı "uç – orta – topuk" diye üçe bölmek çok önemli: kitaptaki işaretler (k., śr., ż.) hep bu bölgeleri gösterir. İlk derslerden itibaren yayın **hangi bölgesinde** çaldığını bilmeye çalış.' }
      ] },

    /* 2 */
    { id: 'tarihce', title: 'Tarihçe', short: 'Tarihçe', src: 'Zarys wiadomości historycznych (s. 5)',
      blocks: [
        { t: 'p', text: '**Violoncello** (Lehçe *wiolonczela*) adı, **violone** (kontrabas) kelimesinin **küçültme** biçimidir. Viyolonsel keman örneğine göre yapılmış büyük bir yaylıdır; **anavatanı İtalya**\'dır.' },
        { t: 'h', text: 'Doğuşu ve gelişimi' },
        { t: 'ul', items: [
          '**XVI. yüzyılın sonu – XVII. yüzyılın başı**: İtalyan çalgı yapımcıları **Gasparo da Salò, A. Amati, Maggini** ve başkaları bu tip çalgılar yapmaya başladı. İlk örneklerin büyüklükleri farklıydı ve **beş ya da altı teli** vardı.',
          'Başlangıçta görevi **bas eşlik çalgısı** olmaktı.',
          '**XVII–XVIII. yüzyıllarda** önemi arttı: önce **orkestra çalgısı**, sonra **solo çalgı** oldu. Orkestrada üstünlük o zaman akrabası **viola da gamba**\'daydı; viyolonsel onunla yarıştı.',
          'Kesin yapısını ve büyüklüğünü **A. Stradivari** belirledi.'
        ] },
        { t: 'table', head: ['Ülke', 'Çalgıyı geliştiren ustalar'], rows: [
          ['İtalya', 'N. Amati, A. ve G. Guarneri, C. Bergonzi, F. ve V. Ruggieri'],
          ['Almanya (Tirol)', 'J. Stainer'],
          ['Fransa', 'J. B. Vuillaume'],
          ['Polonya', 'M. Groblicz, B. Dankwart']
        ] },
        { t: 'h', text: 'Viola da gamba\'ya karşı zafer' },
        { t: 'p', text: '**XVIII. yüzyılın ikinci yarısında** viyolonsel yaylılar arasında **tenor ve basın tek temsilcisi** oldu. Kitap gamba karşısındaki üstünlüğünü iki nedene bağlar:' },
        { t: 'ol', items: [
          'Gambanın sapında **perde (bağ)** vardı; viyolonselde yok. Bu yüzden **kesin ve temiz entonasyon** daha kolay elde edildi.',
          'Viyolonselin **köprüsü daha yuvarlak**tır: rahat ve dolgun sesli çalışa izin verir, **komşu tellere istemeden çarpma** tehlikesini ortadan kaldırır.'
        ] },
        { t: 'h', text: 'İğnenin (nóżka) gelişi' },
        { t: 'p', text: '**XIX. yüzyılın sonuna kadar** viyolonsel doğrudan **yere ya da alçak bir tabureye** konup **dizlerle sarılarak** çalınırdı; çalıcının duruşu kısıtlanıyordu. **İğnenin** kullanılması sağ ve sol ele daha çok serbestlik, dolayısıyla **daha çok teknik olanak** verdi ve **tınlama koşullarını** iyileştirdi.' },
        { t: 'h', text: 'Polonya\'da viyolonsel' },
        { t: 'p', text: 'Kitap, viyolonsel edebiyatını zenginleştiren Polonyalı çalıcılardan birkaçını sayar: Mikołaj Zygmuntowski, Antoni Radziwiłł, Adam Herman, Ignacy Komorowski, Bolesław Moniuszko (Stanisław Moniuszko\'nun oğlu), Józef Szabliński, Stanisław Szczepanowski, Józef Adamowski, Karol Skarżyński, Ely Kochański. Yazara göre viyolonsel Polonya\'da yakın zamana kadar, özellikle solo çalgı olarak **pek popüler değildi**; bu yüzden pedagojik kaynak da azdı. Kitap bu boşluğu doldurmak için yazıldı.' },
        { t: 'tip', text: 'Sıra: **violone\'nin küçüğü → İtalya, XVI–XVII. yy (da Salò, Amati, Maggini) → bas eşlik → orkestra → solo → Stradivari son ölçü → XVIII. yy ikinci yarı gamba\'yı yener → XIX. yy sonu iğne**.' }
      ] },

    /* 3 */
    { id: 'yontem', title: 'Kitabın yaklaşımı ve öğretim ilkeleri', short: 'Yöntem', src: 'Uwagi wstępne · Wskazówki dydaktyczno-metodyczne (s. 5–6)',
      blocks: [
        { t: 'h', text: 'Neden bu kitap?' },
        { t: 'p', text: 'Yazar, müzik okullarının hızla geliştiği ve birçok amatör/profesyonel topluluğun kurulduğu bir dönemde **başlangıç düzeyinde** bir viyolonsel kitabına acil ihtiyaç olduğunu söyler. Kitabı kendi uzun öğretmenlik deneyimine ve yabancı kaynaklara, özellikle Sovyet pedagog **R. Sapożnikow**\'un *Viyolonsel Çalma Eğitimi* (Moskova, 1951) kitabındaki yönteme dayanarak hazırlamıştır.' },
        { t: 'h', text: 'Alıştırmalar neden halk ezgisi?' },
        { t: 'ul', items: [
          'Alıştırmalar mümkün olduğunca **halk melodilerine** dayanır; **kuru, aşırı mekanik**, müzikal içeriği olmayan, yorucu ve öğrenciyi soğutan malzeme ayıklanmıştır.',
          'Amaç öğrencinin **ilk andan itibaren** parçanın müzikal yanına ilgi duyması, küçük yaştakilere **sevinç veren, anlaşılır** bir repertuvar sunmak ve halk şarkısındaki **sanatsal değeri** hissettirmektir.',
          'Malzeme **zorluk derecesine göre ilerleyen** bir sırayla dizilmiş, yeni teorik konular **sistemli** olarak eklenmiştir.'
        ] },
        { t: 'h', text: 'Öğretim ilkeleri (Wskazówki)' },
        { t: 'steps', items: [
          '**Fizyolojiye uygunluk**: teknik istekler anatominin ve fizyolojinin temel yasalarıyla uyumlu olmalı. Bu, duruşta ve hareketlerde **yapaylığı ve kasılmayı bırakmak**, **doğallığı ve serbestliği** korumak demektir. Kasılı hareket zor yapılır, gereksiz çaba ister ve çabuk yorar; doğal hareket rahatlık ve kolaylık hissi verir.',
          '**Sürekli denetim**: öğretmen; duruşu, çalgının tutuluşunu, el-kol ve parmakların yerini, yay tutuşunu özellikle ilk dönemde **sürekli kontrol** eder; çünkü yeni başlayanın hareketleri aşırı sert ve kasılıdır.',
          '**İşitmenin önceliği**: notadan mekanik çalmak, yani sesini kafada canlandırmadan çalmak, işitme ile çalma aygıtının birlikte çalışmasını engeller. Bu yüzden **müzikal hayal gücü** (ör. **solfej**) özenle geliştirilir; öğrenci çıkardığı sesin **entonasyonunu, dolgunluğunu ve şarkı söyler gibi tınısını** kendisi denetlemeye erken alıştırılır.',
          '**Sorunları ayırmak**: başlangıçta sorunları tek tek öğretmek, dikkati birine toplayıp diğerlerini ikinci plana almak. Bu yüzden kitap Sapożnikow\'un yolunu izler: **önce yaysız, sol elle; sağ elle pizzicato**. Böylece öğrenci iki elin farklı sorunlarıyla aynı anda boğuşmaz.',
          '**Sıra ve hız**: malzeme kitaptaki sırayla verilir; ek malzeme müzikal değer ve zorluk bakımından dikkatle seçilir. Temel malzeme, öğrenci çok yetenekli olsa bile **çok yavaş** işlenir.',
          '**Ergenlik**: bu dönemde bazı öğrenciler ilerlemez; zaman zaman geri dönüp boşlukları kapatmak gerekir.',
          '**Entonasyon**: viyolonselin en önemli ve en zor konusu. Yanlış çalınan ses **doğru çalınanla karşılaştırılarak** düzeltilir, sonra o sesi içeren tanıdık bir ezgi parçası birkaç kez **hatasız** çalınır; bu **işitsel belleği** ve entonasyon duygusunu geliştirir.'
        ] },
        { t: 'h', text: 'İki telde birlikte çalma' },
        { t: 'p', text: 'Kitaptaki **iki tel birlikte** çalma, kulağı ve aralık duyarlılığını inceltmek içindir: önce **boş tellerle beşliler**, sonra dar bir alanda **üçlü, dörtlü, altılı, yedili ve sekizliler**. Bu çalışmalar uzun süre **öğretmenin yanında** yapılmalıdır; çünkü evdeki çalgı akortsuz olabilir. Başlangıçta evde, derste iyi hazırlanmış **tek sesli ezgiler** çalışılır.' },
        { t: 'h', text: 'Öğretmenin rolü ve çalgı seçimi' },
        { t: 'ul', items: [
          'Kitap ne kadar ayrıntılı olursa olsun öğretmen **kendi girişimini** bırakmamalı; her öğrencinin kendine özgü yapısına uygun yöntem seçmelidir. Öğrencide **irade gücü** ve **estetik duyarlılık** geliştirmek de öğretmenin görevidir.',
          'Öğrenciye **uygun boyda ve kalitede** viyolonsel seçilmeli; **yay da uzunluk ve ağırlık** bakımından öğrenciye uygun olmalı.',
          '**Üst eşik ve köprü yüksekliği** ile **burguların** düzgün çalışmasına dikkat edilmeli. Teller tuşeden **çok yüksekte** olursa parmaklar büyük direnç hisseder.'
        ] }
      ] },

    /* 4 */
    { id: 'durus', title: 'Doğru duruş', short: 'Duruş', src: 'Prawidłowa postawa grającego (s. 7)',
      blocks: [
        { t: 'p', text: 'Viyolonsel **oturarak** çalınır. Doğru duruş hem **teknik sonuç** için gerekli hem de **estetik** bir gerekliliktir; temel özelliği **doğallık ve (disiplinli) serbestlik**tir.' },
        { t: 'h', text: 'Oturuş' },
        { t: 'steps', items: [
          'Sandalyenin **ön kısmına** oturulur; **sırt arkalığa değmez**.',
          'Sandalye yüksekliği boya göre seçilir; uygun değilse ayakların altına uygun kalınlıkta **tahta parçaları** konabilir.',
          'Çalgı **iğnesiyle yere** dayanır ve **dizlerle sarılır**, ama **fazla sıkmadan**.',
          'Bacaklar çalgının genişliğine göre açılır; **ayaklar tüm tabanıyla** yere basar, uçlar biraz dışa döner.',
          'Gövdenin üst kısmı omuzlarla birlikte **hafifçe ve doğal olarak öne** eğilir; ama abartılmaz: **göğüs çökmez, sırt kamburlaşmaz**.',
          '**Omurga ve baş kesinlikle düz bir çizgi** oluşturur; herhangi bir yana dönme ya da yatma olmaz.'
        ] },
        { t: 'h', text: 'Çalgının konumu' },
        { t: 'table', cls: 'k1', head: ['Ayar', 'Doğrusu'], rows: [
          ['Yükseklik', 'İğneyle ayarlanır: **Do telinin burgusu göz (ya da kulak) hizasında**.'],
          ['Sap', '**Kulağın biraz soluna** yatık.'],
          ['Eğim', 'Yere **dar açıyla**, **60°–70°** arası.'],
          ['Dönüş', '**Sağ ele doğru hafifçe** döndürülür: üst kapağın kenarı **sağ dize**, alt kapağın kenarı **sol dize** değer.']
        ] },
        { t: 'trap', text: 'Denetlenmeyen öğrenci çoğu zaman burgu kutusunu **sol kulağın arkasındaki elmacık kemiğine** dayar. Çalgının sürekli titreşimi bu durumda **işitmeyi köreltir**.' },
        { t: 'h', text: 'Üç dayanak noktası' },
        { t: 'p', text: 'Çalgıyı her zaman **aynı konumda** tutabilmek için öğrencinin şu **sabit dayanak noktalarını** iyice yerleştirmesi gerekir:' },
        { t: 'ol', items: [
          '**İğne** → yerde.',
          '**Alt kapağın kenarı** → **sol dizin iç yüzünde** (sağ diz üst kapağın kenarına değer).',
          '**Sırtın (alt kapağın) üst kenarı**, sapın sağında → **göğüs kemiği çukuru** civarında.'
        ] },
        { t: 'h', text: 'Boş tellerde yay çalışırken sol el' },
        { t: 'p', text: 'Yay boş tellerde çalışılırken **sol el**, **sapın solunda gövdenin üzerine** dayanır. Denetlenmeyen öğrenciler eli özensizce **sapın üzerine** koyar (parmaklar telde olmasa bile); bu, sol el duruşunda **istenmeyen bir alışkanlık** yaratır.' }
      ] },

    /* 5 */
    { id: 'solel', title: 'Sol el: birinci pozisyon, dar düzen', short: 'Sol el', src: 'Układ lewej ręki (s. 7–8)',
      blocks: [
        { t: 'p', text: 'Sol el düzeninde ilk zorlukların kaynağı **aşırı sertlik ve kasların gereğinden çok gerilmesi**dir. Özellikle **başparmak** ve **3. parmak** zorlar: 3. parmak anatomik olarak orta ve küçük parmağa çok bağlıdır, bağımsızlık ve hareket serbestliği kazanması uzun çalışma ister. **4. parmak** da başta pek aktif değildir. Bu yüzden ilk dönemde öğrenci **kaskatı elle çalmasın** diye sürekli denetlenir.' },
        { t: 'h', text: 'Birinci pozisyon, dar düzen' },
        { t: 'ul', items: [
          '**Başparmak** sapa **uç boğumuyla**, baskı yapmadan, serbestçe ve hafif bükük değer.',
          'Parmaklar tuşede **Re teli** üzerine yerleştirilir.',
          'Komşu parmaklar arası **yarım ses**; **1. ile 4. parmak arası küçük üçlü**.',
          'Parmaklar **yuvarlak**; uç boğumlar avuca doğru **aşırı kıvrılmaz**, yalnız **üst eşiğe doğru hafifçe eğiktir**.',
          'Parmaklar fazla yatık olursa ileride **elin açılması**, **üst pozisyonlara geçiş** ve **vibrato** zorlaşır.',
          '**Başparmak her zaman 2. parmağın karşısında** kalır; diğer parmaklar için bir **"yön noktası"**dır.',
          'Bütün el **serbest ve esnek**; parmaklar tele **enerjik, emin ve kesin** düşer, parmak ucuyla **yeterince** bastırır (aşırı baskıdan ve parmakları çok yükseğe kaldırmaktan kaçınılır).',
          'El ile önkol **neredeyse düz bir çizgi**; bilek dışa doğru çok hafif çıkıktır.',
          '**Dirsek**: çok yüksek olursa eli yorar, çok alçak (sarkık) olursa çalışı zorlaştırır.'
        ] },
        { t: 'table', cls: 'k1', head: ['Tel', '0 (boş)', '1', '2', '3', '4'], rows: [
          ['La (A)', 'La', 'Si', 'Do', 'Do♯', 'Re'],
          ['Re (D)', 'Re', 'Mi', 'Fa', 'Fa♯', 'Sol'],
          ['Sol (G)', 'Sol', 'La', 'Si♭', 'Si', 'Do'],
          ['Do (C)', 'Do', 'Re', 'Mi♭', 'Mi', 'Fa']
        ] },
        { t: 'note', label: 'Tablo hakkında', text: 'Tablo dar düzenin kuralından (1. parmak boş telden tam ses yukarıda, sonra yarım ses aralıklar) çıkarıldı; kitaptaki ilk alıştırmalar **Re teli** ve **Sol teli** ("Na strunie G", "Półnuty") üzerindedir.' },
        { t: 'staff', clef: 'bass', notes: [{ n: 'D3', label: '0' }, { n: 'E3', label: '1' }, { n: 'F3', label: '2' }, { n: 'F#3', label: '3' }, { n: 'G3', label: '4' }], spacing: 46, caption: 'Re telinde dar düzen: Re – Mi – Fa – Fa♯ – Sol. Rakamlar parmak numarası.' },
        { t: 'h', text: 'Doğru yeri bulmak ve kontrol etmek' },
        { t: 'ul', items: [
          '**1. parmağın üst eşiğe uzaklığı** ilk derslerden itibaren hem **gözle** hem **kulakla** öğrenilir.',
          'İşitsel kontrol: **4. parmakla** çıkan ses, **bir alttaki boş telin** sesinden **bir oktav tiz** olmalıdır (Re telinde 4 = Sol, alttaki boş tel Sol).',
          'Elin yerini otomatikleştirmek için: eli tuşeden çek, **aşağı sarkıt**, sonra **enerjik bir hareketle** tekrar tuşeye koy ve doğru yerde olup olmadığını kontrol et.',
          'Parmak bağımsızlığı için: **iki, üç ve dört parmağın birlikte** tele düşmesi çalışılır; bu alıştırmalar **bütün tellerde** yapılır.'
        ] },
        { t: 'h', text: 'Pizzicato dönemi' },
        { t: 'p', text: 'Başlangıçta öğrenci bütün alıştırmaları **sağ el pizzicato** (teli parmakla çekerek) ile yapar; dikkatini yalnız **sol elin düzenine ve hareketine** verir. Bu sırada ayrı alıştırmalarla **boş tellerde yay çekmeyi** öğrenir. İkisi oturunca yavaş yavaş **iki elin koordinasyonu**nu isteyen alıştırmalara geçilir. Öğrenci **dar düzende birkaç ay** kalır; bu sürede parmaklarında biraz **çeviklik, güç ve bağımsızlık** kazanır.' },
        { t: 'tip', text: 'Kitabın 1–23. alıştırmaları sol el içindir (pizzicato). Sağ el ilk yay alıştırmalarını öğrendikten sonra (24–32), aynı 1–23 alıştırmaları **yayla** da çalınabilir.' }
      ] },

    /* 6 */
    { id: 'genis', title: 'Sol el: geniş düzen', short: 'Geniş düzen', src: 'Układ szeroki (s. 9) · Szeroki układ palców (232–261)',
      blocks: [
        { t: 'p', text: 'Dar düzende birkaç ay çalıştıktan sonra **geniş düzene** geçilir. Kitap **iki yol** ayırır; ikisinde de **1. ile 2. parmak arası tam ses** olur ve **1. ile 4. parmak arası büyük üçlüye** genişler.' },
        { t: 'table', cls: 'k1', head: ['', '1. yol: 1. parmak geri', '2. yol: 2-3-4 ileri'], rows: [
          ['Ne olur?', '1. parmak diğerlerinden **yarım ses üst eşiğe doğru** (geri) açılır; oldukça uzanır (küçük elde düzleşebilir). Diğer parmaklar eski yerinde kalır.', '1. parmak yerinde kalır; **2, 3 ve 4** yarım ses **köprüye doğru** (ileri) kayar.'],
          ['Başparmak', 'Yerinde, en fazla 1. parmağa doğru çok az kayar.', '2-3-4\'ü izleyerek biraz kayar; yine **2. parmağın karşısında** kalır.'],
          ['En uygun tonlar', '**Bemollü** tonlar', '**Diyezli** tonlar'],
          ['Re telinde', 'Mi♭ – Fa – Fa♯ – Sol', 'Mi – Fa♯ – Sol – Sol♯']
        ] },
        { t: 'staff', clef: 'bass', notes: [{ n: 'Eb3', label: '1' }, { n: 'F3', label: '2' }, { n: 'F#3', label: '3' }, { n: 'G3', label: '4' }, { n: 'E3', label: '1', cls: 'alt' }, { n: 'F#3', label: '2', cls: 'alt' }, { n: 'G3', label: '3', cls: 'alt' }, { n: 'G#3', label: '4', cls: 'alt' }], spacing: 40, caption: 'Re telinde geniş düzen: solda 1. yol (geri), sağda (mavi) 2. yol (ileri).' },
        { t: 'ul', items: [
          'Geniş düzende **dirsek ve el biraz öne** alınır; böylece elin sola kırılması önlenir ve **kas gerginliği azalır**.',
          'Dirsek ve elin sırtının konumu, parmakların hangi **tel** üzerinde olduğuna göre değişir.',
          'Bu kurallardan sapma ancak öğrencinin elinin **anatomik özelliği** gerektiriyorsa kabul edilir.'
        ] },
        { t: 'h', text: 'Pozisyonlar hakkında (kitabın sonu)' },
        { t: 'p', text: 'Kitap geniş düzenden sonra **triole, arpej, onaltılık** gibi konularla ilerler ve son iki bölümde iki yeni el konumu tanıtır: **yarım pozisyon** (*półpozycja*, 328–340) ve **yükseltilmiş birinci pozisyon** (*I pozycja podwyższona*, 341–345).' },
        { t: 'ext', text: 'Kitabın bu iki bölümünde yalnız alıştırmalar var; genel bilgi olarak: **yarım pozisyonda** el birinci pozisyondan **yarım ses geriye** (üst eşiğe doğru) kayar; örneğin La telinde 1. parmak Si♭\'ye düşer. **Yükseltilmiş birinci pozisyonda** el yarım ses **ileri** kayar; birinci ile ikinci pozisyon arasında bir konumdur.' }
      ] },

    /* 7 */
    { id: 'yaytutus', title: 'Sağ el: gevşeme ve yay tutuşu', short: 'Yay tutuşu', src: 'Układ prawej ręki, trzymanie i prowadzenie smyczka (s. 10–11)',
      blocks: [
        { t: 'p', text: 'Öğrencinin yayı ilk tutuşu genellikle **sert ve kasılıdır**. Bu aşırı gerilim büyük çaba ister ve hareket serbestliğini çok azaltır. Bu yüzden yayı doğru kullanmayı öğrenmeden **önce** sağ kolu gevşeten alıştırmalar yapılır.' },
        { t: 'h', text: 'Gevşetme alıştırmaları' },
        { t: 'ul', items: [
          'Bilekten elin düşüp kalkmasıyla oluşan **yumuşak, esnek dairesel hareketler**; önkol da birlikte hareket eder.',
          'Bu hareketler, bir **fırçayı dikey bir yüzeyde** aşağı yukarı çeken elin hareketine benzetilebilir.',
          'Öğretmen kontrolü: öğrencinin önkolunu **beklenmedik anda kaldırıp** yine beklenmedik anda **bırakır**. Kol serbestse düşer.',
          'Hedef duygu: **"elin esnek ağırlığı"** (kolun kendi ağırlığıyla, gevşek ama canlı olması).'
        ] },
        { t: 'h', text: 'Yay tutuşu adım adım' },
        { t: 'steps', items: [
          'Parmakları doğal ve hafif yuvarlak eli öne uzat; **avuç içi yere** baksın. Başparmak, elin doğal düzenine uygun olarak **orta parmağın karşısında**dır. Yay bu hazır ele yerleştirilir.',
          '**Orta parmak**: **orta boğumuyla çubuğa** dayanır; parmak ucu kısmen **topuğun metal halkasına**, kısmen **kıllara** değer ve topuğun alt kenarından çok az taşar.',
          '**Başparmak**: hafif yuvarlak; ucu kısmen **çubuğa**, kısmen **topuğun çıkıntısına** dayanır. Başparmağın yuvarlaklığı elin **esnekliğini** sağlar, diğer parmaklardaki gerilimi en aza indirir.',
          '**İşaret parmağı**: görevi **kolun kas gücünü yaya aktarmak**. Hafif bükük, diğerlerinden biraz sola açık; çubuğa **uç boğum ile orta boğum arasındaki kıvrımla** değer ve çubuğu hafifçe sarar.',
          '**Yüzük parmağı**: yaya **yön verir**; orta boğumuyla çubuğa dayanır, ucu topuğa alt kenarın biraz üstünden değer.',
          '**Serçe parmak**: **uç boğumuyla** çubuğun üzerinde durur, aşağı yukarı topuğun çubuğa birleştiği yere uzanır. **Karşı ağırlık** görevi görür; özellikle **topuk bölgesinde** baskı yapar.'
        ] },
        { t: 'defs', defs: [['Çalış ekseni (oś gry)', 'Başparmak ile onun karşısındaki **orta parmağın orta boğumu**. Yay yönü değişirken bu iki parmak, elin ve diğer parmakların aksine **konumunu pek değiştirmez**.']] },
        { t: 'note', text: 'Parmakların bu yerleşiminden küçük sapmalar, ancak öğrencinin elinin bireysel anatomik koşulları gerektiriyorsa kabul edilir.' },
        { t: 'h', text: 'İşaret parmağı baskı alıştırması' },
        { t: 'p', text: 'Özellikle elini sertleştirmeye eğilimli öğrenci için kitap, yayla tel üzerinde çekmeye başlamadan önce şu alıştırmayı önerir:' },
        { t: 'steps', items: [
          'Doğru tutulmuş yayı **Re teline**, **ortasından** koy. **Sol elle** çubuğu uca yakın yerden tut.',
          'Sağ el yayı yalnız **hafif yuvarlak başparmak ve orta parmakla** tutar; işaret ve yüzük parmağı hafifçe dayanır, serçe parmak **dayanmadan sarkar**.',
          '**İşaret parmağıyla** çubuğa sırayla **bastır ve bırak**. Yay yerinde durur, telde kaymaz.',
          'Baskı, kılların tele daha yoğun değmesinden doğan bir **hışırtı duyulacak** kadar güçlü olmalı.',
          'Dikkat: yay yerinden oynamamalı, bilek çok derin kırılmamalı, dirsek yanlış kas gruplarıyla **kalkmamalı**. Elin serçe parmak yönüne geri dönüşü, işaret parmağının baskısını **azaltarak** olur.',
          'Bu alıştırma yay çekme çalışmalarını aksatmadan **birkaç ders boyunca** tekrarlanır.'
        ] },
        { t: 'ext', text: 'Kitaptaki şekillerde bu hareket **pronasyon** (önkolun içe dönüp işaret parmağına ağırlık vermesi) ve **supinasyon** (dışa dönüp serçe parmak yönüne dönmesi) diye adlandırılır.' }
      ] },

    /* 8 */
    { id: 'yaycekme', title: 'Sağ el: yay çekme', short: 'Yay çekme', src: 'Prowadzenie smyczka (s. 10–12)',
      blocks: [
        { t: 'h', text: 'Başlangıç' },
        { t: 'ul', items: [
          'Yay tellerde **köprüden sabit bir uzaklıkta**, yaklaşık **3–5 cm** çekilir.',
          'Öğretim **Re telinde** başlar (sağ el için en rahat konum).',
          'Yay telin üzerine **ortasından** konur. Bu konumda el ve serbestçe yuvarlak parmaklar **aşağı sarkar**, bilekte yana kırılma olmaz. Üst kol gövdeden **hafifçe açık** ve **biraz önde**dir.',
          'İlk hareketler **önkolun serbest hareketiyle**, yayın **orta bölümüyle** yapılır.'
        ] },
        { t: 'h', text: 'Aşağı yay ⊓ ve yukarı yay V' },
        { t: 'table', cls: 'k1', head: ['Hareket', 'Kol ve el ne yapar?'], rows: [
          ['⊓ ortadan uca (aşağı)', '**Önkol** açılır, dirsek **düzleşip** kol ile düz çizgi oluşturana kadar. Bilek giderek düzleşir; sonra el **yükselir ve yayın yönünün tersine (sola) eğilir**. İşaret parmağı çubuğu biraz daha derin sarar. Çubuk **tuşeye doğru** eğilir; uca yakın kıllar tele **tam genişlikleriyle değmez**.'],
          ['V uçtan ortaya (yukarı)', 'Bilek dışa **çıkar**, el **düşer**. Yay esas olarak **önkolla** çekilir; parmaklar edilgendir.'],
          ['V ortadan topuğa (yukarı)', '**Bütün kol** (omuz) çalışır; parmaklar ve bilek de katılır. Topukta el aşağıdadır, bilek sola hafif çıkık; önkol üst kapağın kenarına yakın, üst kol gövdeye yakındır.'],
          ['⊓ topuktan ortaya (aşağı)', '**Omuz ekleminde** hareket; bilek ve elde hareket, parmaklarda küçük yer değişimi ile başlangıç noktasına dönülür.']
        ] },
        { t: 'h', text: 'Dirseğin yüksekliği tele göre' },
        { t: 'table', head: ['Tel', 'Dirsek'], rows: [['La (A)', '**Belirgin biçimde yüksek**'], ['Re (D) ve Sol (G)', '**Temel (orta)** konum'], ['Do (C)', 'Temel konumdan **alçak**']] },
        { t: 'h', text: 'İyi ses için' },
        { t: 'ul', items: [
          'Dolgun ses çıkarmanın şartı yayın **tele dik**, yani **köprüye paralel** çekilmesidir.',
          'Bazı el konumlarında eğim gerekirse **az** olmalı ki mümkün olan **en geniş kıl** yüzeyiyle çalınsın. Yayı tuşeye doğru **aşırı eğmek**, çubuğun tellere sürtünmesine, **vızıltı ve gıcırtıya** yol açar.',
          'Yayın tüm boyunca **eşit ses** için: **üst bölümde (uca doğru) baskı artırılır**, **topuğa yakın azaltılır**.',
          '**Legato bütün yayla** çalarken yay **eşit hızda** çekilmeli. Öğrenciler sık sık elini **hızlandırır**; yay biter ve o yaya düşen notaların hepsi çalınamaz.',
          'Bu temel öğeler, sol elin işiyle birleştirilmeden önce **boş tellerde** uzun süre çalışılmalıdır.'
        ] },
        { t: 'h', text: 'Tel geçişi' },
        { t: 'p', text: 'Yayın bir telden ötekine **akıcı** geçmesi ayrı bir sorundur. Hazırlık alıştırmaları, yayın **geçilecek tele olabildiğince yakın** çekilmesini sağlayan el hareketleri içerir.' },
        { t: 'table', head: ['Yay uzunluğu', 'Geçiş hareketi'], rows: [
          ['Uzun yay (bütün yay)', '**Bütün kol**, omuz ekleminden; bilek ve parmakların katkısı az.'],
          ['Kısa yay', 'Omuz hareketi **azalır**, **bilek** hareketi biraz **artar**.']
        ] },
        { t: 'tip', text: 'Kitabın önerdiği sıra: **komşu alt tele aşağı yayla (⊓)** geç, önceki tele **yukarı yayla (V)** dön; sonra tersini çalış. İkinci yol başlangıçta ölçülü ve dikkatli uygulanmalı.' }
      ] },

    /* 9 */
    { id: 'yayturleri', title: 'Yay türleri: détaché, legato, portato, arpeggio', short: 'Yay türleri', src: 'Smyczkowanie (s. 13) · Legato (69–75) · Portato (112–114) · Arpeggio (287–292)',
      blocks: [
        { t: 'p', text: 'Kitapta iki **temel** yay türü kullanılır: **détaché** ve **legato**. Ayrıca iki tür daha anlatılır: **portato** ve **arpeggio**.' },
        { t: 'h', text: 'Détaché' },
        { t: 'ul', items: [
          'Temel özelliği **yay yönü değişiminin akıcı, mümkün olduğunca duyulmayan** biçimde olmasıdır.',
          'Buna **yumuşaklık**, **eşit ses gürlüğü** ve yayın **sabit, eşit baskı** altında, **kesintisiz** çekilmesi eşlik eder.',
          'Telden tele geçişte yayın akıcılığına çok dikkat edilir.',
          'Détaché yayın **bütün uzunluğuyla** ya da **herhangi bir bölümüyle** yapılabilir.'
        ] },
        { t: 'table', head: ['Öğrenme sırası (1. yıl)', 'Nasıl?'], rows: [
          ['1', '**Önkol** hareketiyle, yayın **orta ve üst** bölümünde **kısa** yaylar.'],
          ['2', 'Yayın **alt bölümünde** (topuk tarafı) **üst kol ve bilekle**.'],
          ['3', 'Bu artikülasyonu **dörtlük, sekizlik ve onaltılık** değerlerde uygulamak.'],
          ['4', '**Bütün yayla détaché**: bütün kol çalışır; yön değişiminde **bilek aktif**.']
        ] },
        { t: 'h', text: 'Legato' },
        { t: 'p', text: 'Legato, art arda gelen birçok sesin **tek bir yay çekişinde**, birbirinden ayrılmadan, **kesintisiz** çalınmasıdır. Bu yay türü de **dolgun ve eşit gürlükte** ses ister. Notada sözle (*legato*) ya da notaların üzerine **bağ** çizilerek gösterilir.' },
        { t: 'note', label: 'Kitabın legato notu', text: 'Legatonun akıcılığı ve yumuşaklığı, **sol el parmaklarının hareketiyle yayın koordinasyonuna** bağlıdır. Parmak tele düştüğü anda **sağ el yayı hızlandırmamalıdır**.' },
        { t: 'h', text: 'Portato' },
        { t: 'p', text: 'Portatoda notalar **aynı yay yönünde**, birbirinden **yumuşakça ayrılarak** çalınır; ama yay **telle temasını hiç kesmez**. Her sesin sonunda yay telden kalkmaz, yalnız temas **en aza indirilir**. Portato yayın herhangi bir bölümüyle ya da bütün yayla yapılabilir. Notada **bağın altında noktalar** (ya da çizgiler) ile gösterilir.' },
        { t: 'h', text: 'Arpeggio' },
        { t: 'p', text: 'Arpeggio, bir **akorun seslerinin art arda gelen tellere dağıtılıp** tek yay yönünde ve geri dönüşte çalınmasıyla oluşur. Burada yayı **telden tele çevik** geçirebilmek çok önemlidir.' },
        { t: 'ul', items: [
          'Ritmik vurgu her zaman **ilk notaya** düşer (genellikle ölçünün kuvvetli yerindedir).',
          'Legato ya da ayrık yayla çalınabilir.',
          '**Bütün kolun** hareketiyle, bilek ve elin görece **az** katkısıyla yapılır.',
          'Kitapta bölüm başlığı: *Arpeggio na czterech strunach* (dört telde arpej).'
        ] },
        { t: 'trap', text: 'Legato ile portatoyu karıştırma: ikisinde de notalar tek yayda; ama legatoda sesler **hiç ayrılmaz**, portatoda **yumuşakça ayrılır** (yay telden kalkmadan).' }
      ] },

    /* 10 */
    { id: 'akort', title: 'Akort ve boş teller', short: 'Akort', src: 'Strojenie wiolonczeli (s. 14)',
      blocks: [
        { t: 'p', text: 'Viyolonsel **tam beşlilerle** akort edilir. Akorda **La telinden** başlanır, sonra diğer teller sırayla akort edilir. Her alt tel bir öncekinden **tam beşli pes**tir.' },
        { t: 'staff', clef: 'bass', notes: [{ n: 'A3', label: 'La (A)', kind: 'w' }, { n: 'D3', label: 'Re (D)', kind: 'w' }, { n: 'G2', label: 'Sol (G)', kind: 'w' }, { n: 'C2', label: 'Do (C)', kind: 'w' }], spacing: 60, caption: 'Dört boş tel, fa anahtarında: La üst (5.) çizgide, Re orta (3.) çizgide, Sol 1. çizgide, Do iki ek çizgi altında.' },
        { t: 'steps', items: [
          '**La** telini diyapazon ya da piyanodaki La ile akort et (viyolonselin La teli **220 Hz**: orkestranın La 440\'ının **bir oktav pesi**, küçük oktav La\'sı).',
          '**Re** telini La ile birlikte çal: aralarındaki **tam beşli** dalgalanmadan, temiz tınlamalı.',
          '**Sol** telini Re ile, **Do** telini Sol ile aynı şekilde.',
          'Kitapta akort sırası iki tel birlikte, **tam beşli** (*kwinta czysta*) olarak notaya yazılmıştır.'
        ] },
        { t: 'tip', text: 'Telleri kalından inceye ezberlemek için: **Do – Sol – Re – La** (C – G – D – A). Viyolanın telleriyle aynı adlar, ama bir oktav pes.' },
        { t: 'ext', text: 'Kitapta yazmaz ama pratikte: büyük ayarlar **burgularla**, küçük ayarlar kuyruk takozundaki **ince akort vidalarıyla** yapılır. Burguyu çevirirken içeri doğru hafifçe bastırmak burgunun kaymasını önler.' }
      ] },

    /* 11 */
    { id: 'isaretler', title: 'İşaretlerin açıklaması', short: 'İşaretler', src: 'Objaśnienie znaków (s. 14)',
      blocks: [
        { t: 'p', text: 'Kitaptaki alıştırmalarda kullanılan yay ve parmak işaretleri:' },
        { t: 'table', cls: 'k1', head: ['İşaret', 'Lehçesi', 'Anlamı'], rows: [
          ['⊓', 'na dół smyczkiem', '**Aşağı yay**: yayın herhangi bir bölümüyle, **topuktan uca** doğru.'],
          ['V', 'w górę smyczkiem', '**Yukarı yay**: yayın herhangi bir bölümüyle, **uçtan topuğa** doğru.'],
          ['c.', 'całym smyczkiem', '**Bütün yayla**: topuktan uca ve tersi.'],
          ['g.p.', 'górną połową smyczka', '**Yayın yarısıyla** (kitap: "topuktan ortaya ve tersi").'],
          ['k.', 'końcem smyczka', '**Uçla**: yayın uca yakın üçte ya da dörtte biri.'],
          ['śr.', 'środkiem smyczka', '**Ortayla**: ortadaki üçte ya da dörtte bir.'],
          ['ż.', 'przy żabce', '**Topukta**: topuğa yakın üçte ya da dörtte bir.'],
          ['⌐ (köşeli çizgi)', 'zatrzymać palec na strunie', '**Parmağı telde tut** (kaldırma).']
        ] },
        { t: 'trap', text: 'Kitabın işaret sayfasında *g.p.* (üst yarı) "topuktan ortaya" diye açıklanmış; oysa kitabın ilk sayfasındaki yay şeklinde **üst yarı (górna połowa) uçtan ortaya**, **alt yarı (dolna połowa) ortadan topuğa** gösterilir. Öğretmenine hangisini kastettiğini sor.' },
        { t: 'h', text: 'Ritim ve yazım terimleri (alıştırma başlıklarından)' },
        { t: 'defs', defs: [
          ['Pizzicato (pizz.)', 'Teli sağ elin parmağıyla çekerek çalmak.'],
          ['Półnuty', 'İkilik notalar.'],
          ['Ósemki', 'Sekizlikler.'],
          ['Szesnastki', 'Onaltılıklar.'],
          ['Triole', 'Üçlemeler.'],
          ['Rytm punktowany', 'Noktalı ritim.'],
          ['Przedtakt', 'Eksik ölçü (anakruz): parça ölçünün kuvvetli zamanından önce başlar.'],
          ['Synkopy', 'Senkoplar.'],
          ['Dwudźwięki / Podwójne dźwięki', 'İki ses birlikte (çift ses).'],
          ['Kwarty / Kwinty / Seksty / Oktawy', 'Dörtlüler / beşliler / altılılar / sekizliler.'],
          ['Gama G-dur', 'Sol majör dizi.'],
          ['Trójdźwięk', 'Üç sesli akor (arpej hâlinde).'],
          ['Etiuda / Wprawka', 'Etüt / alıştırma parçası.'],
          ['Mel. ludowa', 'Halk ezgisi.']
        ] }
      ] },

    /* 12 */
    { id: 'plan', title: 'Kitabın planı: 345 alıştırma', short: 'Kitabın planı', src: 'Spis treści (s. 3)',
      blocks: [
        { t: 'p', text: 'Kitabın içindekiler bölümü, yeni öğrenilen her becerinin hangi alıştırma numaralarında çalışıldığını gösterir. Derste "şu numaraya kadar gel" denirse bu tablodan neyi çalıştığını bulabilirsin.' },
        { t: 'table', cls: 'k1', head: ['No.', 'Bölüm (Lehçe)', 'Türkçesi ve amacı'], rows: [
          ['1–23', 'Ćwiczenia na lewą rękę', '**Sol el** alıştırmaları, sağ el pizzicato (Re ve Sol telinde).'],
          ['24–36', 'Pierwsze ćwiczenia z użyciem smyczka', '**İlk yay** alıştırmaları (boş teller).'],
          ['37–39', 'Układ lewej ręki na strunie A i C', 'Sol elin **La ve Do** tellerinde yerleşimi.'],
          ['40–52', 'Ćwiczenia całym smyczkiem', '**Bütün yayla** alıştırmalar.'],
          ['53–55', 'Ćwiczenia smyczkowe na gamie', '**Dizi** üzerinde yay alıştırmaları.'],
          ['56–68', 'Równomierny podział smyczka, rytmy mieszane', 'Yayın **eşit bölünmesi**, karışık ritimler.'],
          ['69–75', 'Legato', '**Legato**.'],
          ['76–92', 'Przechodzenie smyczka z jednej struny na drugą', 'Yayın bir **telden ötekine** geçişi.'],
          ['93–97', 'Prowadzenie smyczka na dwóch strunach równocześnie', '**İki telde birlikte** yay çekme.'],
          ['98–111', 'Przechodzenie smyczka legato ze struny na strunę', '**Legato** tel geçişi.'],
          ['112–114', 'Portato', '**Portato**.'],
          ['115–119 / 120–123', 'Kwarty / Kwinty', '**Dörtlüler** / **beşliler**.'],
          ['124–148', 'Nierównomierny smyczek', '**Eşit olmayan yay** (uzun–kısa notalara farklı yay); içinde **altılılar** (138–142).'],
          ['149–171', 'Ósemki. Krótki smyczek', '**Sekizlikler**, kısa yay.'],
          ['172–181', 'Przechodzenie smyczka przez jedną strunę', 'Arada **bir tel atlayarak** geçiş; içinde **sekizliler** (177–181).'],
          ['182–190', 'Przechodzenie smyczka ze struny na strunę', 'Tel geçişi (devam).'],
          ['191–198', 'Dwudźwięki', '**Çift sesler**.'],
          ['199–212', 'Rytm punktowany. Smyczki nierównomierne. Przedtakt', '**Noktalı ritim**, eşit olmayan yaylar, **eksik ölçü**.'],
          ['213–225', 'Ćwiczenia na podział smyczka. Synkopy', 'Yay **bölüşümü**, **senkop**.'],
          ['226–231', 'Podwójne dźwięki', 'Çift sesler (devam).'],
          ['232–261', 'Szeroki układ palców', '**Geniş parmak düzeni**.'],
          ['262–270', 'Triole', '**Üçlemeler**.'],
          ['274–280', 'Legato całym smyczkiem', '**Bütün yayla legato**.'],
          ['281–286', 'Synkopy', 'Senkoplar.'],
          ['287–292', 'Arpeggio', '**Arpej** (dört telde).'],
          ['293–305', 'Ćwiczenia palcowe i smyczkowe', '**Parmak ve yay** alıştırmaları.'],
          ['306–310', 'Szesnastki', '**Onaltılıklar**.'],
          ['316–322', 'Rytm punktowany. Staccato', 'Noktalı ritim, **staccato**.'],
          ['323–326', 'Ćwiczenia w dwudźwiękach', 'Çift ses alıştırmaları.'],
          ['328–340', 'Półpozycja', '**Yarım pozisyon**.'],
          ['341–345', 'I pozycja podwyższona', '**Yükseltilmiş 1. pozisyon**.']
        ] },
        { t: 'note', label: 'Kitabın notu (1–23)', text: 'Öğrenmenin başından itibaren **yayın doğru bölüşümüne** dikkat edilir. İlk sağ el alıştırmaları öğrenildikten sonra 1–23. alıştırmalar, 24–32\'de öğrenilen yay türleri uygulanarak **yayla** da çalınabilir.' },
        { t: 'h', text: 'Kitaptaki ezgiler' },
        { t: 'p', text: 'Alıştırmaların çoğu Polonya **halk ezgileri** (*mel. ludowa*) üzerine kuruludur; aralarında bestecilerden kısa parçalar da var:' },
        { t: 'table', head: ['Tür', 'Örnekler'], rows: [
          ['Halk ezgileri', 'Karolinka · Taniec z Opoczna · Pod borem · Słoneczko · W ciemnym lasku ptaszek śpiewa · Dożynki · Mazur · Matulu moja · Prędzej, koniku · Leć, głosie, po rosie (Krakowiak, düz. Z. Noskowski) · Bandoska · Czarna kura pieje · Zachodzi słoneczko · Wyszła na wieżę · Zielony mosteczek · Göralska (dağ ezgisi)'],
          ['Besteciler', 'J. B. Lully – *Piosenka* · J. Haydn – *Menuet* · A. Caporale – *Allegro* · F. Chopin – *Hulanka* ve *Życzenie* · J. Ph. Rameau']
        ] },
        { t: 'tip', text: 'Bölümlerin sırası, sol ve sağ elin sorunlarını **ayrı ayrı** çözüp sonra birleştirme ilkesini izler: önce sol el (pizzicato), sonra boş tellerde yay, sonra ikisi birlikte; her yeni yay türü önce tek telde, sonra tel geçişleriyle.' }
      ] }
  ]
});
