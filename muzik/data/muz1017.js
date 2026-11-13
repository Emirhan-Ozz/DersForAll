/* MÜZ1017 Teori Dersi · Bona Müzik Teorisi Notları + Pasquale Bona ritmik solfej + Solfège des Solfèges 1A (Lavignac) */
App.course({
  id: 'muz1017', code: 'MÜZ1017', short: 'Teori', glyph: '𝄡',
  title: 'Müzik Teorisi',
  desc: 'Porte, anahtar, süre, ölçü, aralık, gam ve ton; süslemeler, akor ve kadans; Türk müziğinde koma, usul ve makam; solfej çalışması.',
  lead: 'Ana kaynak **Bona kitabının "Müzik Teorisi" bölümü** (Vicdan Tabakoğlu): önce Batı müziği teorisi, sonra **Türk Musikisi** özet notları (perde, koma, usul, makam). Kitabın geri kalanı **Pasquale Bona ritmik solfej** alıştırmaları; ikinci kaynak **Solfège des Solfèges 1A** (Lavignac) ise ezgisel solfej dersleri. Bu iki kitabın nasıl çalışılacağı son konularda.',
  sources: [
    { g: '𝄡', t: 'Bona · Müzik Teorisi + Ritmik Solfej', d: 'Vicdan Tabakoğlu\'nun teori notları (Batı ve Türk müziği), Pasquale Bona ritmik okuma alıştırmaları ve sonda müzik terimleri sözlüğü.' },
    { g: '𝄞', t: 'Solfège des Solfèges · Cilt 1A', d: 'Henry Lemoine yayını, Albert Lavignac düzenlemesi. Eski ve yeni bestecilerden ilerleyen solfej dersleri (Fransızca başlıklar).' }
  ],
  traps: [
    { t: 'Porte **5 çizgi, 4 aralık**; aşağıdan yukarı sayılır. Porteye ek çizgisiz **9**, altı ve üstüyle **11** nota sığar.', topic: 'temel' },
    { t: 'Anahtar yalnız **çizgiye** konur. Sol: **1. ve 2.** çizgi; Fa: **3. ve 4.** çizgi; Do: **1, 2, 3, 4.** çizgi.', topic: 'anahtar' },
    { t: 'Piyano, org, arp **iki porteye** yazılır (4. çizgide fa + 2. çizgide sol); iki porteyi bağlayan çizgi **akolat**.', topic: 'anahtar' },
    { t: 'Sesin nitelikleri: **tını** (renk), **yükseklik** (ince–kalın), **gürlük** (kuvvetli–kısık).', topic: 'ses' },
    { t: 'En uzun değer **birlik**, en kısa **altmışdörtlük**. Her değer bir sonrakinin **iki katı**.', topic: 'sure' },
    { t: 'Birlik sus **4. çizginin altına asılır**, ikilik sus **3. çizginin üstüne oturur**.', topic: 'sure' },
    { t: 'Nokta değeri **yarısı kadar** uzatır; çift noktada ikinci nokta **birincinin yarısı** kadardır.', topic: 'sure' },
    { t: 'Do majör: **3–4 ve 7–8** arası yarım, diğerleri tam: **5 tam + 2 yarım**. Minörde yarım sesler **2–3 ve 5–6**.', topic: 'gam' },
    { t: 'Ölçü rakamlarında **alttaki** değer parçasını, **üstteki** ölçüdeki sayısını gösterir. Basit vuruş **ikiye**, bileşik vuruş **üçe** bölünür.', topic: 'olcu' },
    { t: 'Dört vuruşlu ölçü: **kuvvetli – hafif – yarı kuvvetli – daha hafif**.', topic: 'olcu' },
    { t: 'Diyez sırası **çıkıcı beşlilerle**: Fa–Do–Sol–Re–La–Mi–Si. Bemol sırası **inici beşlilerle**: Si–Mi–La–Re–Sol–Do–Fa.', topic: 'degistirme' },
    { t: 'Diyezli tonda **son diyezin yarım ses üstü** tonik; bemollü tonda **sondan bir önceki bemol** tonun adı. **Tek bemol = Fa majör.**', topic: 'ton' },
    { t: 'Konsonan: üçlü, dörtlü, beşli, altılı, sekizli. Disonan: **ikili, yedili, dokuzlu**.', topic: 'aralik' },
    { t: 'Çevrimde **büyük ↔ küçük**, **artık ↔ eksik**; tam aralık tam kalır.', topic: 'aralik' },
    { t: 'Tonal sesler **I, IV, V** (Do–Fa–Sol); modal sesler **3, 6, 7**.', topic: 'dogus' },
    { t: 'Kadans: **yumuşak IV–I**, **sert V–I**, **mükemmel I–IV–V–I**.', topic: 'akor' },
    { t: 'Türk müziğinde tam ses **9 koma**: koma 1, **bakiye 4**, **küçük mücennep 5**, **büyük mücennep 8**, **tanini 9**.', topic: 'koma' },
    { t: 'Usul kelimeleri: **düm** (kuvvetli, sağ el), **tek** (hafif, sol el), **teke**, **teka**, **tahek**. Usullere **sağ elle** başlanır.', topic: 'usul' },
    { t: '**Nim sofyan 2**, **semai 3**, sofyan 4, **Türk aksağı 5**, yürük semai 6, **devr-i hindi 7**, düyek 8, **aksak 9**, curcuna 10.', topic: 'usul' },
    { t: 'Tam dörtlü **22 koma** (2 tanini + bakiye), tam beşli **31 koma** (3 tanini + bakiye). Basit makam **13**, şed makam **15**, bileşik makamlar **8 grup**.', topic: 'makam' },
    { t: 'Şarkı: **zemin** (1. mısra, güçlüde asma kalış) → **nakarat** → **meyan** → **nakarat** (tam karar).', topic: 'makam' }
  ],
  topics: [
    /* 1 */
    { id: 'temel', title: 'Temel kavramlar: müzik, nota, porte', short: 'Temel kavramlar', src: 'Bona · Müzik Teorisi s. 1',
      blocks: [
        { t: 'defs', defs: [
          ['Müzik', 'Kelimelerle anlatamadığımız **duygu ve düşüncelerimizi seslerle** anlatma sanatı.'],
          ['Müzik teorisi', 'Müziğin uyduğu **kuralları** inceleyen bilim dalı.'],
          ['Nota', 'Müzik **seslerini gösteren işaretler**. **Yedi** nota vardır: Do, Re, Mi, Fa, Sol, La, Si.'],
          ['Porte', '**Beş paralel düz çizgi** ve **dört eşit aralıktan** oluşan şekil.'],
          ['Aralık (porte aralığı)', 'Portenin iki çizgisi arasında kalan boşluk.'],
          ['Ek (ilave) çizgi', 'Porteye sığmayan notaları yazmak için portenin altına ve üstüne konan küçük çizgiler.']
        ] },
        { t: 'h', text: 'Porte nasıl sayılır?' },
        { t: 'ul', items: [
          'Portenin çizgileri ve aralıkları **aşağıdan yukarıya** sayılır: 1. çizgi en alttadır.',
          'Portenin çizgi ve aralıklarına ancak **dokuz** nota yazılabilir (5 çizgi + 4 aralık).',
          '1. çizginin **altına** bir, 5. çizginin **üstüne** bir nota daha yazılırsa sayı **on bire** çıkar.',
          'Müzikte bundan çok daha fazla ses vardır; onlar için **ek çizgiler** kullanılır.',
          'Portenin **üstündeki** ek çizgiler **aşağıdan yukarıya**, **altındaki** ek çizgiler **yukarıdan aşağıya** sayılır.'
        ] },
        { t: 'staff', clef: 'treble', notes: [{ n: 'D4', label: 'altı' }, { n: 'E4', label: '1. ç.' }, { n: 'F4', label: '1. a.' }, { n: 'G4', label: '2. ç.' }, { n: 'A4', label: '2. a.' }, { n: 'B4', label: '3. ç.' }, { n: 'C5', label: '3. a.' }, { n: 'D5', label: '4. ç.' }, { n: 'E5', label: '4. a.' }, { n: 'F5', label: '5. ç.' }, { n: 'G5', label: 'üstü' }], spacing: 34, caption: 'Ek çizgisiz 11 yer: 1. çizginin altı, 5 çizgi, 4 aralık ve 5. çizginin üstü (ç. = çizgi, a. = aralık).' },
        { t: 'staff', clef: 'treble', notes: [{ n: 'A3', label: '2 ek alt' }, { n: 'C4', label: '1 ek alt' }, { n: 'A5', label: '1 ek üst' }, { n: 'C6', label: '2 ek üst' }], spacing: 56, caption: 'Ek çizgiler: üsttekiler aşağıdan yukarı, alttakiler yukarıdan aşağı sayılır.' },
        { t: 'tip', text: 'Sol anahtarında **çizgilerdeki** notalar alttan üste **Mi – Sol – Si – Re – Fa**, **aralıklardaki** notalar **Fa – La – Do – Mi**. Bu iki diziyi ezberlemek okuma hızını en çok artıran şeydir.' }
      ] },

    /* 2 */
    { id: 'anahtar', title: 'Anahtarlar', short: 'Anahtarlar', src: 'Bona · Anahtar Nedir? · İnsan sesleri ve enstrümanlar için anahtarlar · Akolat',
      blocks: [
        { t: 'p', text: '**Anahtar**, portenin sol baş tarafına konan ve **konduğu çizgiye kendi adını veren** işarettir. Anahtarlar **yalnız çizgilere** konur, aralıklara konmaz; **konduğu çizginin adıyla** birlikte söylenir ("ikinci çizgide sol anahtarı" gibi).' },
        { t: 'sym', items: [
          ['𝄞', 'Sol anahtarı', '**1. ve 2.** çizgiye konur; o çizgideki notaya **Sol** adını verir.'],
          ['𝄢', 'Fa anahtarı', '**3. ve 4.** çizgiye konur; o çizgideki notaya **Fa** adını verir.'],
          ['𝄡', 'Do anahtarı', '**1, 2, 3 ve 4.** çizgilere konur; o çizgideki notaya **Do** adını verir.']
        ] },
        { t: 'table', head: ['Anahtar', 'Konduğu çizgi', 'Bugün kullanımı'], rows: [
          ['Sol', '2. çizgi', 'En yaygın: keman, flüt, sağ el, kadın ve çocuk sesleri'],
          ['Sol', '1. çizgi', 'Eski Fransız anahtarı'],
          ['Fa', '4. çizgi', 'Bas, bariton, viyolonsel, kontrbas, fagot, tuba, sol el'],
          ['Fa', '3. çizgi', 'Bariton anahtarı (eski)'],
          ['Do', '1., 2., 3., 4. çizgi', 'Soprano, mezzo, alto (3. çizgi: **viyola**), tenor (4. çizgi)']
        ] },
        { t: 'note', label: 'Kitaptaki not', text: '**1. çizgideki sol anahtarı** ile **4. çizgideki fa anahtarında** notalar **aynı yerde aynı adla** okunur (ikisinde de 1. çizgi Sol\'dür); yalnız notaların **yükseklik dereceleri** aynı değildir (iki oktav fark).' },
        { t: 'staff', clef: 'treble', notes: ['E4', 'G4', 'B4', 'D5', 'F5', { n: 'F4', cls: 'alt' }, { n: 'A4', cls: 'alt' }, { n: 'C5', cls: 'alt' }, { n: 'E5', cls: 'alt' }], spacing: 34, caption: '2. çizgide sol anahtarı: çizgiler Mi-Sol-Si-Re-Fa, aralıklar (mavi) Fa-La-Do-Mi.' },
        { t: 'staff', clef: 'bass', notes: ['G2', 'B2', 'D3', 'F3', 'A3', { n: 'A2', cls: 'alt' }, { n: 'C3', cls: 'alt' }, { n: 'E3', cls: 'alt' }, { n: 'G3', cls: 'alt' }], spacing: 34, caption: '4. çizgide fa anahtarı: çizgiler Sol-Si-Re-Fa-La, aralıklar (mavi) La-Do-Mi-Sol.' },
        { t: 'h', text: 'İnsan sesleri ve çalgılar için anahtarlar (kitaptaki liste)' },
        { t: 'table', cls: 'k1', head: ['Anahtar', 'İnsan sesi', 'Çalgılar'], rows: [
          ['4. çizgide fa', 'Bas, bariton', 'Fagot (bason), korno (kalın seslerde birkaç nota için), trombon, bariton, euphonium, viyolonsel, tuba, kontrbas'],
          ['4. çizgide do', '1. ve 2. tenor', 'Kitapta viyola, viyolonsel, flüt, obua, klarinet, trompet, kornet, büğlü, saksofon, korno, korangle sayılmış']
        ] },
        { t: 'ext', text: 'Bugünkü pratikte: viyola **3. çizgide do** anahtarıyla, viyolonsel ve fagot yüksek pasajlarda **4. çizgide do** (tenor) anahtarıyla yazılır; flüt, obua, klarinet, trompet ve saksofon ise **sol anahtarı** kullanır.' },
        { t: 'h', text: 'Piyano notası ve akolat' },
        { t: 'p', text: 'Piyano, org ve arp için notalar **iki porteye** yazılır: kalın sesler **4. çizgide fa anahtarı** ile ve **sol elle**, ince sesler **2. çizgide sol anahtarı** ile ve **sağ elle** çalınır. İki porteye yazılan notalar **akolat** denen çizgiyle birbirine bağlanır.' },
        { t: 'staff', clef: 'grand', notes: [{ n: 'C3', st: 'bass' }, { n: 'G3', st: 'bass' }, { n: 'C4', st: 'bass', cls: 'hi' }, { n: 'C4', cls: 'hi' }, { n: 'G4' }, { n: 'C5' }], spacing: 40, caption: 'Akolatla bağlı iki porte. Orta do (sarı) iki portenin tam ortasında, birer ek çizgide.' }
      ] },

    /* 3 */
    { id: 'ses', title: 'Ses ve nitelikleri, insan sesleri', short: 'Ses', src: 'Bona · Ses Nedir? · İnsan Sesi',
      blocks: [
        { t: 'p', text: '**Ses**, cisimlerin titreşiminden doğan ses dalgalarının **hava aracılığıyla** kulağımıza gelmesidir. **Müziğin temeli sestir.** Sesler birbirinden üç nitelikle ayrılır:' },
        { t: 'table', cls: 'k1', head: ['Nitelik', 'Anlamı', 'Örnek'], rows: [
          ['Tını (ses rengi)', 'Her sesin kendine özgü özelliği; sesleri bununla ayırt ederiz.', 'Klarnet ile flüt, kornet ile fagot, kadın ile erkek sesi'],
          ['Yükseklik', 'Sesin **kalın veya ince** olması.', 'Do ile bir oktav üstündeki Do'],
          ['Gürlük', 'Sesin **kuvvetli veya kısık** olması.', 'f ile p']
        ] },
        { t: 'ext', text: 'Fizik karşılıkları: yükseklik **titreşim sayısına (frekans)**, gürlük **dalganın genliğine**, tını ise sesin içindeki **doğal seslerin (harmoniklerin)** dağılımına bağlıdır. Doğal sesler konusu "Dizinin doğuşu"nda geçiyor.' },
        { t: 'h', text: 'İnsan sesleri' },
        { t: 'table', head: ['', 'İnce', 'Orta', 'Kalın'], rows: [
          ['Kadın sesi', '**Soprano** (ince kadın ve ince çocuk sesleri)', '**Mezzo soprano** (orta kalınlıkta kadın ve çocuk sesleri)', '**Alto / kontralto** (kalın kadın sesi)'],
          ['Erkek sesi', '**Tenor**', '**Bariton**', '**Bas**']
        ] },
        { t: 'tip', text: 'İnceden kalına altı ses: **Soprano – Mezzo – Alto | Tenor – Bariton – Bas**. Dört sesli koro (SATB) bunların dördünü kullanır: soprano, alto, tenor, bas.' }
      ] },

    /* 4 */
    { id: 'sure', title: 'Süreler: nota ve sus değerleri, nokta ve bağ', short: 'Süreler', src: 'Bona · Süre Nedir? · Nota Değer Tablosu · Sus · Baton · Çoğaltma Noktası · Çoğaltma Bağı',
      blocks: [
        { t: 'p', text: '**Süre**, seslerin (notaların) ve susların uzadıkları zaman bütünlüğüdür. İki türlü süre vardır: **sesli süre** (notalar) ve **sessiz süre** (suslar).' },
        { t: 'h', text: 'Sesli süreler: notalar' },
        { t: 'table', head: ['Nota', 'Adı', 'Dörtlük = 1 vuruş iken', 'Neye eşit?'], rows: [
          ['[[𝅝]]', 'Birlik', '4 vuruş', '2 ikilik'],
          ['[[𝅗𝅥]]', 'İkilik', '2 vuruş', '2 dörtlük'],
          ['[[𝅘𝅥]]', 'Dörtlük', '1 vuruş', '2 sekizlik'],
          ['[[𝅘𝅥𝅮]]', 'Sekizlik', '½ vuruş', '2 onaltılık'],
          ['[[𝅘𝅥𝅯]]', 'Onaltılık', '¼ vuruş', '2 otuzikilik'],
          ['[[𝅘𝅥𝅰]]', 'Otuzikilik', '⅛ vuruş', '2 altmışdörtlük'],
          ['[[𝅘𝅥𝅱]]', 'Altmışdörtlük', '1/16 vuruş', 'En küçük değer']
        ] },
        { t: 'p', text: 'Müzik yazısında **en uzun değer birlik**, **en küçük değer altmışdörtlük** notadır. Bu sırada her nota kendisinden sonra gelenin **iki katı** değerindedir.' },
        { t: 'h', text: 'Sessiz süreler: suslar' },
        { t: 'p', text: '**Sus**, bir müzik parçasında **susulması gereken yerleri** gösteren işarettir. Her nota değerinin bir susu vardır.' },
        { t: 'sym', items: [
          ['𝄻', 'Birlik sus', 'Daima **4. çizginin altına** asılır.'],
          ['𝄼', 'İkilik sus', 'Daima **3. çizginin üstüne** oturur.'],
          ['𝄽', 'Dörtlük sus', '1 vuruş'],
          ['𝄾', 'Sekizlik sus', '½ vuruş'],
          ['𝄿', 'Onaltılık sus', '¼ vuruş'],
          ['𝅀', 'Otuzikilik sus', '⅛ vuruş'],
          ['𝅁', 'Altmışdörtlük sus', '1/16 vuruş']
        ] },
        { t: 'trap', text: 'Birlik sus ile ikilik sus aynı dikdörtgen biçimdedir: **birlik sus çizgiden aşağı sarkar** (ağır olduğu için "asılı"), **ikilik sus çizginin üstüne oturur**.' },
        { t: 'h', text: 'Baton (çok ölçülük sus)' },
        { t: 'ul', items: [
          'Bir ölçüden daha uzun susulacaksa **baton** kullanılır.',
          'Portenin **3. ve 4.** çizgileri arasını dolduran baton üzerine **2** yazılırsa **iki ölçü**; **2. ve 4.** çizgiler arasını dolduran baton üzerine **4** yazılırsa **dört ölçü** susulur.',
          'Birlik, iki ölçülük ve dört ölçülük suslar birleştirilerek 3, 5, 8 ölçülük suslar yazılabilir.',
          'Bugün genellikle dört ölçüden uzun batonlar kullanılmaz; porte içine **eğik kalın bir ya da iki çizgi** konur ve üstüne **susulacak ölçü sayısı** yazılır.'
        ] },
        { t: 'h', text: 'Çoğaltma (uzatma) noktası' },
        { t: 'p', text: 'Sesli ve sessiz sürelerin **sağına** konan nokta, sürenin değerini **yarı değeri kadar** çoğaltır. Örnek: dörtlüğün yarısı sekizliktir; noktalı dörtlük = dörtlük + sekizlik = **3 sekizlik** (1½ vuruş).' },
        { t: 'table', head: ['Değer', 'Hesap', 'Sonuç'], rows: [
          ['Noktalı ikilik', '2 + 1', '**3 vuruş** (3 dörtlük ya da 6 sekizlik)'],
          ['Noktalı dörtlük', '1 + ½', '**1½ vuruş** (3 sekizlik)'],
          ['Noktalı sekizlik', '½ + ¼', '**¾ vuruş** (3 onaltılık)'],
          ['Çift noktalı ikilik', '2 + 1 + ½', '**3½ vuruş**'],
          ['Çift noktalı dörtlük', '1 + ½ + ¼', '**1¾ vuruş** (dörtlük + sekizlik + onaltılık = 7 onaltılık)']
        ] },
        { t: 'p', text: '**Çift nokta**: bir sürenin sağına iki nokta konabilir; **ikinci nokta, birinci noktanın yarı değerine** eşittir.' },
        { t: 'h', text: 'Çoğaltma bağı' },
        { t: 'p', text: 'Değeri çoğaltmanın ikinci yolu **çoğaltma (uzatma) bağıdır**: **isimleri ve sesleri aynı** notalar eğri bir çizgiyle bağlanır. Bağlı notalar **kesintisiz ve tek bir değermiş gibi** okunur.' },
        { t: 'tip', text: 'Nokta bir ölçü çizgisini **aşamaz**; ölçü çizgisini aşan uzun sesler mutlaka **bağla** yazılır. Senkop konusunda bu yüzden bağ zorunludur.' }
      ] },

    /* 5 */
    { id: 'gam', title: 'Gam, oktav, derece, tam ve yarım ses', short: 'Gam ve derece', src: 'Bona · Gam Nedir? · Oktav · Oktav Çizgisi · Derece · Tam Ses / Yarım Ses',
      blocks: [
        { t: 'defs', defs: [
          ['Gam (dizi)', '**Sekiz bitişik ve komşu notanın** meydana getirdiği şekil. Gamın **8. notası 1. notanın tekrarıdır**. Gam herhangi bir notayla başlayabilir ve **başladığı notanın adını** alır (Do gamı, Mi gamı…).'],
          ['Çıkıcı gam', '**Kalından inceye** doğru sıralanan gam.'],
          ['İnici gam', '**İnceden kalına** doğru sıralanan gam.'],
          ['Oktav (sekizli)', '**Aynı ismi taşıyan** iki ses arasındaki sekiz notalık aralık. İsimleri bir, yükseklikleri ayrıdır.'],
          ['Oktav çizgisi (8va)', 'Bir oktav kalından ya da inceden okunacak notaların altına/üstüne konan **8 - - -** işareti; noktalar nerede biterse oraya kadar geçerlidir.'],
          ['Derece', 'Öz dizinin (gamın) her bir notası. 1. nota 1. derece, 2. nota 2. derece… 8. nota 8. derece.'],
          ['Komşu / uzak dereceler', 'Yan yana gelen dereceler komşu; arada başka derece olanlar uzak derecedir.']
        ] },
        { t: 'h', text: 'Tam ses ve yarım ses' },
        { t: 'p', text: 'Dizinin dereceleri arasındaki uzaklıklar **eşit değildir**. İki bitişik derecenin gösterdiği **büyük** açıklığa **tam ses**, **küçük** açıklığa **yarım ses** denir. Piyanoda yarım ses, arada başka tuş olmayan iki komşu tuştur.' },
        { t: 'kb', from: 'C4', to: 'C5', labels: 'white', hi: ['E4', 'F4', 'B4', 'C5'], caption: 'Do dizisinde Mi–Fa ve Si–Do arasında siyah tuş yok: bunlar yarım ses. Diğer komşu beyaz tuşlar arası tam ses.' },
        { t: 'table', head: ['Dereceler', '1–2', '2–3', '3–4', '4–5', '5–6', '6–7', '7–8'], rows: [
          ['Do dizisi', 'Do–Re', 'Re–Mi', 'Mi–Fa', 'Fa–Sol', 'Sol–La', 'La–Si', 'Si–Do'],
          ['Uzaklık', 'Tam', 'Tam', '**Yarım**', 'Tam', 'Tam', 'Tam', '**Yarım**']
        ] },
        { t: 'p', text: 'Doğal dizide **3–4 ve 7–8** arası **yarım**, diğerleri **tam** sestir: dizi **5 tam + 2 yarım** sesten oluşur. Bu **Do dizisi**, **diatonik majör gamın değişmez kalıbıdır**. 5 tam ve 2 yarım sesten oluşan gamlara **diatonik gam** denir. Kitaba göre bu oluşum bir tesadüf ya da hayal ürünü değil, **doğanın verdiği değişmez bir esastır** (bkz. Dizinin doğuşu).' },
        { t: 'tip', text: 'Majör kalıbı kısaca: **T – T – Y – T – T – T – Y**. Hangi notadan başlarsan başla bu kalıbı korumak için diyez ya da bemol eklersin; tonların donanımı buradan çıkar.' }
      ] },

    /* 6 */
    { id: 'olcu', title: 'Ölçü, vuruş ve ölçü vurma', short: 'Ölçü ve vuruş', src: 'Bona · Ölçü · Ölçü Çizgisi · Ölçü Rakamları · Vuruş · Ölçü Vurmak · Kuvvetli–Hafif Vuruşlar',
      blocks: [
        { t: 'defs', defs: [
          ['Ölçü', 'Bir müzik parçasının **eşit süreli** bölümleri.'],
          ['Ölçü çizgisi', 'Bu eşit bölümleri ayıran, porteyi **dikey** kesen çizgi.'],
          ['Ölçü rakamları', 'Anahtardan sonra konan rakamlar. **Alttaki** rakam **değer parçasını** (vuruş birimini), **üstteki** rakam **her ölçüde o değerden kaç tane** olduğunu gösterir.'],
          ['Vuruş', 'Bir ölçünün **eşit süreli değerlere** bölünmesi.'],
          ['Zaman', 'Basit ya da bileşik vuruşların **her bir bölümü**.']
        ] },
        { t: 'p', text: 'Örnek: **4/4** ölçüde her ölçü bir birlik değerindedir; her ölçüde **dört vuruş** vardır ve her vuruş **dörtlük** değerindedir.' },
        { t: 'h', text: 'Basit ve bileşik' },
        { t: 'table', cls: 'k1', head: ['', 'Basit', 'Bileşik'], rows: [
          ['Vuruş', '**İkiye** bölünen süre değerlerinden oluşur (dörtlük = 2 sekizlik).', '**Üçe** bölünen süre değerlerinden oluşur (noktalı dörtlük = 3 sekizlik).'],
          ['Ölçü', 'Vuruşları iki eşit değere bölünebilen ölçü: 2/4, 3/4, 4/4, 2/2 (¢)', 'Vuruşları üç eşit değere bölünebilen ölçü: 6/8, 9/8, 12/8'],
          ['Karşılık', '2/4 · 3/4 · 4/4', '6/8 · 9/8 · 12/8 (aynı vuruş sayısı, vuruşlar üçe bölünür)']
        ] },
        { t: 'h', text: 'Ölçü vurmak' },
        { t: 'p', text: 'Bir ölçünün vuruşlarındaki süre değerlerini **eşit zamanlarda** okuyabilmek için **elin düzenli hareketleriyle** göstermeye **ölçü vurmak** (usul) denir.' },
        { t: 'table', cls: 'k1', head: ['Ölçü', '1. vuruş', '2. vuruş', '3. vuruş', '4. vuruş'], rows: [
          ['İki vuruşlu', 'Yere – yukarı', 'Sola – yukarı', '', ''],
          ['Üç vuruşlu', 'Yere – yukarı', 'Sağa – yukarı', 'Ortaya – yukarı', ''],
          ['Dört vuruşlu', 'Yere – yukarı', 'Sola – yukarı', 'Sağa – yukarı', 'Ortaya – yukarı']
        ] },
        { t: 'p', text: 'Bu hareketler hem basit hem bileşik ölçülerde aynıdır; bileşik ölçülerde her vuruşun içinde **üç zaman** hissedilir.' },
        { t: 'h', text: 'Kuvvetli ve hafif vuruşlar' },
        { t: 'p', text: 'Bir ölçünün vuruşları aynı kuvvette değildir:' },
        { t: 'table', head: ['Ölçü', '1.', '2.', '3.', '4.'], rows: [
          ['İki vuruşlu', '**Kuvvetli**', 'Hafif', '', ''],
          ['Üç vuruşlu', '**Kuvvetli**', 'Hafif', 'Daha hafif', ''],
          ['Dört vuruşlu', '**Kuvvetli**', 'Hafif', '**Yarı kuvvetli**', 'Daha hafif']
        ] },
        { t: 'p', text: 'Zamanlar da vuruşlar gibi kuvvetli ve hafif olur: **ikiye** bölünen vuruşta 1. zaman kuvvetli, 2. zaman hafif; **üçe** bölünen vuruşta 1. kuvvetli, 2. hafif, 3. daha hafiftir. Zamanların da ikiye bölünmesiyle **zaman bölümleri** oluşur.' },
        { t: 'note', text: 'Bir ölçü her zaman kuvvetli bir vuruşla başlamayabilir (eksik ölçü / anakruz).' }
      ] },

    /* 7 */
    { id: 'degistirme', title: 'Değiştirme işaretleri ve türler', short: 'Değiştirme işaretleri', src: 'Bona · Değiştirme (Alterasyon) İşaretleri · Tür (diatonik, kromatik, anarmonik)',
      blocks: [
        { t: 'p', text: '**Değiştirme (alterasyon) işaretleri**, önüne konduğu notanın **ses yüksekliğini değiştiren** işaretlerdir. Notanın **sol önüne** konur ve **bir ölçü içinde**, oktav farkı olsa da **aynı isimdeki bütün notaları** etkiler.' },
        { t: 'sym', items: [
          ['♯', 'Diyez', 'Yarım ses **inceltir**.'],
          ['♭', 'Bemol', 'Yarım ses **kalınlaştırır**.'],
          ['♮', 'Natürel', 'Değişime uğramış notayı **tabii hâline** getirir.'],
          ['𝄪', 'Çift diyez', 'Bir **tam ses** inceltir.'],
          ['𝄫', 'Çift bemol', 'Bir **tam ses** kalınlaştırır.']
        ] },
        { t: 'h', text: 'Sıralanış' },
        { t: 'table', cls: 'k1', head: ['', 'Sıra', 'Kural'], rows: [
          ['Diyezler (7)', 'Fa – Do – Sol – Re – La – Mi – Si', '**Çıkıcı beşliler**'],
          ['Bemoller (7)', 'Si – Mi – La – Re – Sol – Do – Fa', '**İnici beşliler** (diyez sırasının tersi)']
        ] },
        { t: 'p', text: 'Değiştirme işareti almış notanın **adı değişmez**; işaret notanın adından **sonra** söylenir: Do diyez, Fa diyez, Re bemol, Si bemol, Mi çift bemol, La natürel…' },
        { t: 'h', text: 'Tür: derecelerin diziliş şekli' },
        { t: 'table', cls: 'k1', head: ['Tür', 'Tanım', 'Örnek'], rows: [
          ['Diatonik tür', 'Sesler **tam ve yarım** seslerle sırayla derecelenir. **Diatonik yarım ses**: **isimleri ayrı** iki nota arasındaki yarım ses.', 'Mi–Fa, Si–Do, Do♯–Re'],
          ['Kromatik tür', 'Sesler **kromatik ve diatonik yarım** seslerle derecelenir. **Kromatik yarım ses**: **isimleri aynı** iki nota arasındaki yarım ses.', 'Do–Do♯–Re–Re♯–Mi'],
          ['Anarmonik tür', '**İsimleri ayrı, sesleri aynı** iki notanın birinden ötekine geçmek. Böyle notalara **anarmonik nota** denir.', 'Do♯ = Re♭, Mi♯ = Fa']
        ] },
        { t: 'staff', clef: 'treble', notes: [{ n: 'C4', label: 'Do' }, { n: 'C#4', label: 'Do♯', cls: 'hi' }, { n: 'D4', label: 'Re' }, { n: 'C#4', label: 'Do♯' }, { n: 'Db4', label: 'Re♭', cls: 'hi' }], spacing: 46, caption: 'Do–Do♯: kromatik yarım ses (aynı isim). Do♯–Re: diatonik yarım ses (ayrı isim). Do♯ = Re♭: anarmonik.' }
      ] },

    /* 8 */
    { id: 'kisaltma', title: 'Müzik yazısında kısaltmalar ve durak işareti', short: 'Kısaltmalar', src: 'Bona · Tekrar İşareti · Bitirme Çizgisi · Ölçü Tekrarı · Dolap · Da Capo · Segno · Coda · Durak İşareti',
      blocks: [
        { t: 'p', text: 'Bir parçanın bir bölümü ya da bütünü tekrar edilecekse o kısımlar yeniden yazılmaz; **işaretlerle** gösterilir.' },
        { t: 'table', cls: 'k1', head: ['İşaret', 'Adı', 'Ne yapılır?'], rows: [
          ['[[𝄆]] … [[𝄇]]', 'Tekrar işareti', 'Ölçü çizgisinin yanına **kalın bir çizgi** çekilip portenin **2. ve 3. aralıklarına birer nokta** konur. Arada kalan bölüm tekrarlanır.'],
          ['[[𝄂]]', 'Bitirme çizgisi', 'Parçanın bittiğini gösterir: son ölçü çizgisinden sonra **kalın bir çizgi**.'],
          ['[[𝄎]] ( ./. )', 'Ölçü tekrarı', 'Bir ölçünün içeriği aynen tekrar edilecekse ikinci ölçüye yazılmaz, bu işaret konur.'],
          ['1. ┐ 2. ┐', 'Dolap (1. ve 2. dolap)', 'Tekrarlanan bölümün sonu iki seferde farklıysa: önce **1** yazılı bölüm çalınır; tekrarda **1 atlanır**, **2** yazılı bölüm çalınır.'],
          ['D.C. [[𝄊]]', 'Da Capo', 'İtalyanca "**baştan**". Genellikle sona konur: eser **baştan** tekrar çalınır, **Fine** kelimesinde bitirilir.'],
          ['[[𝄋]]', 'Segno (senyo)', 'Eserde **ikinci kez konduğu yerden birinci kez konduğu yere** dönülür ve **Fine**\'da bitirilir (D.S. = Dal Segno).'],
          ['[[𝄌]]', 'Coda', 'Eser bir yere kadar tekrarlanıp bir bölüm **atlanarak** başka yerde bitirilecekse kullanılır. Tekrarda coda işareti gelince aradaki bölüm atlanır, **ikinci coda işaretinden sonrası** çalınıp bitirilir.']
        ] },
        { t: 'h', text: 'Durak işareti (puandorg, puandare)' },
        { t: 'p', text: 'İstenen bir etkiyi elde etmek için bazen ölçünün düzenli hareketi **durdurulur**. Bu, **durak işareti** [[𝄐]] ile gösterilir.' },
        { t: 'table', cls: 'k1', head: ['Nereye konur?', 'Fransızca adı', 'Anlamı'], rows: [
          ['**Nota** üzerine', '*Point d\'orgue* → **puandorg**', 'Nota eşit zamanda kesilmez, **daha çok uzatılır**. Ne kadar uzatılacağı **çalıcının ya da şefin** isteğine bağlıdır. İşaret daima notanın **baş kısmına** konur.'],
          ['**Sus** üzerine', '*Point d\'arrêt* → **puandare**', 'Sus uzatılır, sessizlik beklenir.']
        ] },
        { t: 'tip', text: 'Takip etme sırası örneği: **A [[𝄆]] B [[𝄇]] C D.C. al Fine** → A B B C, sonra baştan A … Fine. D.C. ile dönüşte tekrar işaretleri genellikle uygulanmaz.' }
      ] },

    /* 9 */
    { id: 'ritim', title: 'Düzensiz gruplar, senkop ve kontrtan', short: 'Senkop ve üçleme', src: 'Bona · Üçleme (Triole) · Altılama, İkileme… · Senkop · Kontrtan',
      blocks: [
        { t: 'h', text: 'Üçleme (triole)' },
        { t: 'p', text: '**İki notaya eşit** süre değeri içinde **üç nota** yapmaya **üçleme** denir. Örnek: 2/4\'lük bir ölçünün **bir vuruşuna** eşit iki sekizlik yerine, yine bir vuruşa eşit **üç sekizlik** yazılır. Üçleme her türlü süre değeriyle yapılabilir; üçlü notaların üstüne bir **bağ** (ya da köşeli parantez) ve altına **3** yazılır.' },
        { t: 'table', cls: 'k1', head: ['Tür', 'Tanım'], rows: [
          ['Basit üçleme', 'Üç **eşit** değerden oluşur (üç sekizlik).'],
          ['Bileşik üçleme', 'Üç **eşit olmayan** değerden oluşur (dörtlük + sekizlik gibi).']
        ] },
        { t: 'p', text: 'Sus işaretleri de üçlemenin içinde yer alabilir; yerine geçtiği notanın değerine eşittir.' },
        { t: 'h', text: 'Diğer düzensiz gruplar' },
        { t: 'p', text: 'Kitap aynı mantıkla oluşan grupları da sayar: **çift üçleme, altılama, ikileme, dörtleme, beşleme, yedileme, sekizleme, dokuzlama**. Hepsinde normalde oraya sığmayacak sayıda nota bir vuruşa (ya da vuruş grubuna) eşit dağıtılır ve üstüne sayısı yazılır.' },
        { t: 'h', text: 'Senkop' },
        { t: 'p', text: '**Hafif** bir vuruş ya da zaman üzerinde başlayan sesli sürenin **kuvvetli** bir vuruş ya da zaman üzerinde **devam etmesine** senkop denir. Vurgu beklenmeyen yere kayar.' },
        { t: 'ul', items: [
          'Hafif ve kuvvetli süre **bağ** ile bağlanır; bağlı notalara **senkoplu notalar** denir.',
          'Bağ, **bitişik iki ölçü arasındaki** senkoplu notalar için **zorunludur**.',
          'Bir ölçü içindeki senkopta iki notayı ayrı yazıp bağlamak **gereksizdir** (tek nota yazılır).'
        ] },
        { t: 'table', cls: 'k1', head: ['Senkop türü', 'İki değerin ilişkisi'], rows: [
          ['Eşit senkop', 'İki değer **eşit**.'],
          ['Eşit olmayan senkop', 'İki değer eşit değil; **ikinci değer birinciden küçük**.'],
          ['Aksak senkop', 'İki değer eşit değil; **ikinci değer birinciden büyük**.']
        ] },
        { t: 'staff', clef: 'treble', notes: [{ n: 'G4', label: 'ka' }, { n: 'A4', kind: 'h', label: 'hafif → kuvvetli', cls: 'hi' }, { n: 'G4', label: 'ka' }], spacing: 70, caption: '2/4 ölçüde sekizlik – dörtlük – sekizlik: ortadaki ses hafif zamanda başlayıp kuvvetli zamana taşar (aynı ölçü içinde, bağsız yazılır).' },
        { t: 'h', text: 'Kontrtan (contretemps, karşı zaman)' },
        { t: 'p', text: '**Kuvvetli** vuruş ya da zamanların **suslarla**, **hafif** vuruş ya da zamanların **notalarla** oluşmasına **kontrtan** denir. Örnek: her vuruşta "sekizlik sus + sekizlik nota". Vuruş üzerinde ve zamanlar üzerinde kontrtan olabilir.' },
        { t: 'trap', text: 'Senkopta hafif zamandaki ses **kuvvetliye uzar**; kontrtanda kuvvetli zaman **boştur** (sus), ses yalnız hafif zamandadır.' }
      ] },

    /* 10 */
    { id: 'vurgu', title: 'Vurgu, çalış biçimleri ve nüans', short: 'Vurgu ve nüans', src: 'Bona · Vurgu (Accent) · Legato · Staccato · Spiccato · Nüans',
      blocks: [
        { t: 'p', text: '**Vurgu (accent)**: bir müzik cümlesindeki sürelerin **kuvvetli, hafif, bağlı, bağsız, uzun, kısa** olarak belirtilmesidir. Özel işaretlerle gösterilir.' },
        { t: 'table', cls: 'k1', head: ['Çalış', 'Yazılışı', 'Nasıl çalınır?'], rows: [
          ['Bağlı çalış (legato)', 'Notalar üstünde bağ', 'Notalar **birbirine bağlanarak** çalınır.'],
          ['Noktalı çalış (staccato)', 'Nota başı üstünde **nokta**', 'Notalar **yarı değerine yakın**, kesik kesik çalınır.'],
          ['Yatık çizgili (tenuto)', 'Nota başı üstünde **yatık çizgi**', 'Notalar **süre değerleri kadar**, **gür ve belirtilerek** çalınır.'],
          ['Bağlı kesik çalış (portato)', '**Nokta + bağ** birlikte', 'Belirsiz dil vuruşlarıyla, **hafif dokunuşlarla** çalınır.'],
          ['Kopuk çalış (spiccato)', 'Üstü geniş, altı sivri **uzunca nokta** (damla)', 'Notalar **kesik ve kopuk** çalınır.'],
          ['Aksanlı notalar', '**>** işareti', 'Nota diğerlerinden **daha kuvvetli** çalınır.']
        ] },
        { t: 'h', text: 'Nüans' },
        { t: 'p', text: 'Bir parçada seslerin **kuvvetli, hafif, çabuk, ağır, canlı** gibi çeşitli derecelerine **nüans** denir. Yaratıcının (bestecinin) tarzına ve düşüncesine çalıcı tarafından **canlılık ve renk** verilmezse eser **sönük** kalır. Kitabın benzetmesiyle: **resimde ışık ve gölge ne ise, müzikte nüans odur.**' },
        { t: 'table', head: ['Gürlük', 'Anlamı', 'Hız', 'Anlamı'], rows: [
          ['pp', 'Çok hafif', 'Largo / Lento', 'Ağır'],
          ['p', 'Hafif', 'Adagio', 'Yavaş'],
          ['mp / mf', 'Orta hafif / orta kuvvetli', 'Andante / Moderato', 'Orta'],
          ['f', 'Kuvvetli', 'Allegro', 'Çabuk, neşeli'],
          ['ff', 'Çok kuvvetli', 'Presto', 'Çok çabuk'],
          ['cresc. / dim.', 'Giderek kuvvetlenerek / hafifleyerek', 'accel. / rit.', 'Hızlanarak / yavaşlayarak']
        ] },
        { t: 'note', text: 'Hız ve gürlük terimlerinin geniş listesi bu dersin sonundaki **terimler sözlüğünde**.' }
      ] },

    /* 11 */
    { id: 'mod', title: 'Mod: majör ve minör', short: 'Majör–minör', src: 'Bona · Mod · Majör · Minör',
      blocks: [
        { t: 'p', text: '**Mod**, dizilerin **majör** ya da **minör** olarak kurulması anlamında kullanılır: majör mod, minör mod.' },
        { t: 'h', text: 'Majör (maggiore = büyük)' },
        { t: 'p', text: 'Minör aralıktan **bir kromatik yarım ses daha büyük** aralığa **majör aralık** denir. Öz dizide (Do dizisi) 1. dereceden 3., 6. ve 7. dereceye olan aralıklar **büyük** olduğu için bu diziye majör denir:' },
        { t: 'table', head: ['Aralık', 'İçindeki sesler', 'Adı'], rows: [
          ['1 → 3', 'Tam + tam = **2 tam**', '**Büyük üçlü**'],
          ['1 → 6', '**4 tam + 1 yarım**', '**Büyük altılı**'],
          ['1 → 7', '**5 tam + 1 yarım**', '**Büyük yedili**']
        ] },
        { t: 'h', text: 'Minör (minore = küçük)' },
        { t: 'p', text: 'Majör aralıktan **bir kromatik yarım ses daha küçük** aralığa **minör aralık** denir. Majör dizinin **3., 6. ve 7. dereceleri** birer kromatik yarım ses kalınlaştırılırsa (Mi→Mi♭, La→La♭, Si→Si♭) **minör dizi** elde edilir:' },
        { t: 'table', head: ['Aralık', 'İçindeki sesler', 'Adı'], rows: [
          ['1 → 3', 'Tam + yarım = **1 tam 1 yarım**', '**Küçük üçlü**'],
          ['1 → 6', '**3 tam + 2 yarım**', '**Küçük altılı**'],
          ['1 → 7', '**4 tam + 2 yarım**', '**Küçük yedili**']
        ] },
        { t: 'staff', clef: 'treble', notes: ['C4', 'D4', 'Eb4', 'F4', 'G4', 'Ab4', 'Bb4', 'C5'], spacing: 34, caption: 'Do minör (doğal): yarım sesler 2–3 (Re–Mi♭) ve 5–6 (Sol–La♭) arasında.' },
        { t: 'table', head: ['Dizi', 'Yarım seslerin yeri', 'Kalıp'], rows: [
          ['Majör', '**3–4 ve 7–8**', 'T T Y T T T Y'],
          ['Minör', '**2–3 ve 5–6**', 'T Y T T Y T T']
        ] },
        { t: 'tip', text: 'Kitabın özeti: bir dizinin majör ya da minör olduğunu **baştaki ilk üçlü** gösterir. **Üçlü büyükse majör, küçükse minör.**' },
        { t: 'ext', text: 'Kitaptaki minör **doğal minördür**. Uygulamada sıkça **armonik minör** (7. derece yarım ses tizleştirilir: Do minörde Si♮) ve **melodik minör** (çıkarken 6. ve 7. tizleşir) de kullanılır.' }
      ] },

    /* 12 */
    { id: 'aralik', title: 'Aralıklar', short: 'Aralıklar', src: 'Bona · Aralık · Katlı Aralıklar · Çıkıcı/İnici/Armonik · Çevirme · Konsonan–Disonan · Ton',
      blocks: [
        { t: 'p', text: '**Aralık**, iki nota arasındaki **ses açıklığıdır**. Aralıklar adlarını **içindeki derece sayısından** alır: iki bitişik derece **ikili**, üç bitişik derece **üçlü**… sekiz bitişik derece **sekizli**. Bir sekizliyi aşan aralıklara **katlı aralık** denir: dokuzlu, onlu, on birli, on üçlü…' },
        { t: 'h', text: 'Değişim: büyük, küçük, tam, artık, eksik' },
        { t: 'p', text: 'Her aralık, **içindeki tam ve yarım ses sayısıyla** ölçülür; bu sayıya göre **büyük, küçük, tam, artık, eksik** adlarını alır.' },
        { t: 'table', cls: 'k1', head: ['Aralık', 'Ses sayısı', 'Örnek (Do\'dan)'], rows: [
          ['Küçük ikili', '½', 'Do – Re♭'],
          ['Büyük ikili', '1', 'Do – Re'],
          ['Küçük üçlü', '1½', 'Do – Mi♭'],
          ['Büyük üçlü', '2', 'Do – Mi'],
          ['Tam dörtlü', '2½', 'Do – Fa'],
          ['Artık dörtlü', '3', 'Do – Fa♯'],
          ['Eksik beşli', '3', 'Do – Sol♭'],
          ['Tam beşli', '3½', 'Do – Sol'],
          ['Küçük altılı', '4', 'Do – La♭'],
          ['Büyük altılı', '4½', 'Do – La'],
          ['Küçük yedili', '5', 'Do – Si♭'],
          ['Büyük yedili', '5½', 'Do – Si'],
          ['Tam sekizli', '6', 'Do – Do']
        ] },
        { t: 'note', label: 'Tablo hakkında', text: 'Kitap büyük üçlü (2 tam), büyük altılı (4 tam 1 yarım) ve büyük yedili (5 tam 1 yarım) örneklerini verir; diğer satırlar aynı ölçüyle hesaplandı.' },
        { t: 'h', text: 'Yönüne göre' },
        { t: 'defs', defs: [
          ['Çıkıcı aralık', 'Dereceler **kalından inceye** dizilir.'],
          ['İnici aralık', 'Dereceler **inceden kalına** dizilir.'],
          ['Armonik aralık', 'Notaları **aynı anda** çalınır.']
        ] },
        { t: 'h', text: 'Çevirme (çevrim)' },
        { t: 'p', text: 'Aralığı oluşturan notalardan **alttakini üste** ya da **üsttekini alta** almaya **çevirme** denir. Alttaki nota üste alınırsa **üst çevrim**, üstteki alta alınırsa **alt çevrim**dir.' },
        { t: 'table', head: ['Önce', 'Çevrilince'], rows: [['Büyük', '**Küçük**'], ['Küçük', '**Büyük**'], ['Artık', '**Eksik**'], ['Eksik', '**Artık**'], ['Tam', 'Tam']] },
        { t: 'ext', text: 'Pratik kural: bir aralık ile çevriminin numaraları toplamı **9** eder: ikili ↔ yedili, üçlü ↔ altılı, dörtlü ↔ beşli. Örnek: Do–Mi büyük üçlü → Mi–Do küçük altılı.' },
        { t: 'h', text: 'Uyumlu ve uyumsuz aralıklar' },
        { t: 'table', cls: 'k1', head: ['', 'Tanım', 'Aralıklar'], rows: [
          ['Uyumlu (konsonan)', 'İki ses **kaynaşmış** olarak etki uyandırır, **karara ihtiyaç göstermez**.', 'Üçlü, dörtlü, beşli, altılı, sekizli'],
          ['Uyumsuz (disonan)', 'Kulakta kaynaşmış etki uyandırmaz, **bir karara ihtiyaç gösterir**.', 'İkili, yedili, dokuzlu']
        ] },
        { t: 'h', text: '"Ton" kelimesinin üç anlamı' },
        { t: 'ol', items: ['Çeşitli yükseklik dereceleri gösteren müzik seslerinin **her biri**.', 'İki bitişik derece arasındaki **tam ses** açıklığı.', '**Dizi** anlamında: "Do dizisi" yerine **Do tonu**.'] }
      ] },

    /* 13 */
    { id: 'dogus', title: 'Dizinin doğuşu ve derece adları', short: 'Dizinin doğuşu', src: 'Bona · Dizinin Doğuşu · Tonal Sesler · Derece Adları · Modal Sesler',
      blocks: [
        { t: 'p', text: 'Piyanoda bir tuşa dokunursak kulağımıza önce bir ses gelir; dikkatle dinlersek **başka sesler de** duyulur. İlk titreştirdiğimiz sese **ana ses**, sonradan duyulan seslere **doğal sesler** denir. Bu sıra hiç bozulmaz ve hangi sesi ana ses alırsak alalım aralıklar değişmez.' },
        { t: 'staff', clef: 'grand', notes: [{ n: 'C2', st: 'bass', label: '1' }, { n: 'C3', st: 'bass', label: '2' }, { n: 'G3', st: 'bass', label: '3', cls: 'hi' }, { n: 'C4', label: '4' }, { n: 'E4', label: '5', cls: 'hi' }, { n: 'G4', label: '6' }], spacing: 40, caption: 'Do ana sesinin ilk doğal sesleri: Do – Do – Sol – Do – Mi – Sol.' },
        { t: 'p', text: 'Sekizlileri atınca Do ana sesinden üç farklı ses kalır: **Do** (ana ses), **Sol** (ana sesin **tam onikilisi**) ve **Mi** (ana sesin **büyük onyedilisi**). Bunlar birbirine yaklaştırılınca **Do – Mi – Sol** akoru çıkar.' },
        { t: 'steps', items: [
          '**Do** ana ses → doğal sesleri **Do – Mi – Sol**.',
          'Do\'nun tam onikilisi **Sol**\'u ana ses al → **Sol – Si – Re**.',
          'Do, tam onikili aşağısındaki **Fa**\'nın doğal sesidir; Fa\'yı ana ses al → **Fa – La – Do**.',
          'Üç akoru Do\'dan başlayarak bitişik sıraya diz → **Do Re Mi Fa Sol La Si**: **öz dizi** kurulur. Bu dizi bütün dizilerin kuruluşuna örnektir.'
        ] },
        { t: 'defs', defs: [
          ['Tonal sesler', 'Öz diziyi oluşturan üç ana ses (**Do – Fa – Sol**). Her dizinin **I., IV. ve V.** dereceleridir.'],
          ['Modal sesler', 'Dizinin **modunu** (majör/minör) gösteren sesler: her dizinin **3., 6. ve 7.** dereceleri.']
        ] },
        { t: 'h', text: 'Derece adları' },
        { t: 'table', cls: 'k1', head: ['Derece', 'Adı', 'Do majörde'], rows: [
          ['I', '**Tonik**', 'Do'],
          ['II', 'Tonik üstü', 'Re'],
          ['III', 'Mediyant (orta ses)', 'Mi'],
          ['IV', 'Dominant altı (alt dominant)', 'Fa'],
          ['V', '**Dominant**', 'Sol'],
          ['VI', 'Dominant üstü', 'La'],
          ['VII', '**Sansibl** (yeden, duyarlı ses)', 'Si'],
          ['VIII', 'Tonik ya da sekizli', 'Do']
        ] },
        { t: 'tip', text: 'Sansibl (7. derece) toniğe **yarım ses** uzaklıktadır ve kulak onun toniğe gitmesini bekler; adı da bundan gelir (*sensible* = duyarlı).' }
      ] },

    /* 14 */
    { id: 'ton', title: 'Majör tonlar, ton bulma ve aktarma', short: 'Tonlar', src: 'Bona · Majör Diziler · Anarmonik Diziler · Bir Müzik Parçasının Tonunun Bulunuşu · Aktarma (Transpoze)',
      blocks: [
        { t: 'p', text: 'Müzikte **yedi diyezli** ve **yedi bemollü** majör dizi vardır. Diyezli majör diziler Do majörün toniğinden başlayarak **çıkıcı tam beşlilerle**, bemollü majör diziler **inici tam beşlilerle** sıralanır.' },
        { t: 'table', cls: 'k1', head: ['Diyez', 'Ton', 'Bemol', 'Ton'], rows: [
          ['1 (Fa♯)', '**Sol** majör', '1 (Si♭)', '**Fa** majör'],
          ['2 (+Do♯)', '**Re** majör', '2 (+Mi♭)', '**Si♭** majör'],
          ['3 (+Sol♯)', '**La** majör', '3 (+La♭)', '**Mi♭** majör'],
          ['4 (+Re♯)', '**Mi** majör', '4 (+Re♭)', '**La♭** majör'],
          ['5 (+La♯)', '**Si** majör', '5 (+Sol♭)', '**Re♭** majör'],
          ['6 (+Mi♯)', '**Fa♯** majör', '6 (+Do♭)', '**Sol♭** majör'],
          ['7 (+Si♯)', '**Do♯** majör', '7 (+Fa♭)', '**Do♭** majör']
        ] },
        { t: 'h', text: 'Bir parçanın tonunu bulma' },
        { t: 'p', text: 'Ton, portenin başındaki **donanımdan (başlıktan)** bulunur. Kurallar **yalnız majör tonlar** içindir:' },
        { t: 'table', cls: 'k1', head: ['Başlıkta', 'Kural', 'Örnek'], rows: [
          ['Diyezler', '**Son diyezden bir yarım ses yukarı** çık; bulunan nota toniktir.', 'Fa♯ Do♯ → son diyez Do♯ → yarım ses üstü **Re** → **Re majör**'],
          ['Bemoller', '**Son bemolden bir önceki bemol** tonun adıdır.', 'Si♭ Mi♭ → sondan bir önceki **Si♭** → **Si♭ majör**'],
          ['Tek bemol', 'Kuralın dışında: **Fa majör**.', 'Si♭ → Fa majör']
        ] },
        { t: 'staff', clef: 'treble', notes: [{ n: 'F#5', label: 'Fa♯', cls: 'alt' }, { n: 'C#5', label: 'Do♯', cls: 'alt' }, { n: 'D5', label: '→ Re', cls: 'hi' }], spacing: 56, caption: 'İki diyezli başlık: son diyez Do♯, yarım ses üstü Re → Re majör.' },
        { t: 'h', text: 'Anarmonik diziler' },
        { t: 'p', text: '**İsimleri ayrı, sesleri aynı** dizilere **anarmonik diziler** denir. Kitaptaki örnek: **Sol♯ majör = La♭ majör**. (Aynı şekilde Fa♯ majör = Sol♭ majör, Do♯ majör = Re♭ majör, Si majör = Do♭ majör.)' },
        { t: 'h', text: 'Aktarma (transpoze)' },
        { t: 'p', text: 'Bir parçanın yazılı olduğu tondan **başka bir tonda** tekrar edilmesine **aktarma (transpoze)** denir. Bir çalgının tonu eşlik edeceği çalgının tonundan **yukarıdaysa**, aradaki aralık kadar **aşağıdan**; **aşağıdaysa** aralık kadar **yukarıdan** çalar.' },
        { t: 'ext', text: 'Örnek: Si♭ klarnet yazılandan **büyük ikili pes** ses verir. Piyanoyla aynı sesi çıkarması için klarnet partisi **büyük ikili yukarı** aktarılarak yazılır (piyano Do majör çalıyorsa klarnet Re majör okur).' },
        { t: 'tip', text: 'Diyez sırası Fa-Do-Sol-Re-La-Mi-Si, tonlar Sol-Re-La-Mi-Si-Fa♯-Do♯; ikisi de **beşli** adımlarla ilerler. Bemollerde ikisi de **ters** yönde: Si-Mi-La-Re-Sol-Do-Fa ve Fa-Si♭-Mi♭-La♭-Re♭-Sol♭-Do♭.' }
      ] },

    /* 15 */
    { id: 'susleme', title: 'Süslemeler, kadans ve arpej', short: 'Süslemeler', src: 'Bona · Süsleme · Basamak (Apojiyatür) · Çarpma · Geçiş Notaları · Küme (Grupetto) · Tril · Kadans · Arpej',
      blocks: [
        { t: 'p', text: '**Süsleme**, bir parçada **deyiş ve anlam gücünü artırmak** için kullanılan **küçük notalardır**.' },
        { t: 'h', text: 'Basamak (apojiyatür)' },
        { t: 'p', text: '*Appoggiatura*: çarpma, yaslanma, basamak anlamına gelir. Esas notanın **bir tam ya da yarım ses yukarısında veya aşağısında** bulunur ve **bağlandığı notadan, gösterdiği süre değeri kadar alır**.' },
        { t: 'table', cls: 'k1', head: ['Tür', 'Özellik'], rows: [
          ['Üst basamak', 'Esas notanın tam ya da yarım ses **yukarısına** yazılan küçük nota; her türlü sesli süreden önce gelebilir.'],
          ['Alt basamak', 'Esas notanın tam ya da yarım ses **aşağısına** yazılan küçük nota.'],
          ['İkiz basamak (çift çarpma)', '**Alt ve üst** iki basamağın birleşmesi. Değerini esas notadan alır, **daha çabuk** çalınır.'],
          ['Kısa basamak', 'Tam ya da yarım ses aşağı/yukarıdaki nota; ama değer çizgisine **eğri (çapraz) bir çizgi** konur. Basamak notasına **çabukça dokunulup** esas notaya geçilir.'],
          ['Çarpma', 'Kısa basamak notaları esas notaya **bir tam sesten uzak** bulunursa.']
        ] },
        { t: 'h', text: 'Geçiş notaları' },
        { t: 'p', text: 'İki esas nota **arasına** konan küçük notalardır. Değerlerini **kendilerinden önceki** esas notadan alırlar.' },
        { t: 'h', text: 'Küme (grupetto)' },
        { t: 'p', text: 'Küme şu dört sesten oluşur: **1)** esas notanın bir üst derecesi, **2)** esas nota, **3)** esas notanın bir alt derecesi, **4)** yine esas nota. Küçük notalarla yazılabildiği gibi **[[𝆗]]** işaretiyle de gösterilir.' },
        { t: 'staff', clef: 'treble', notes: [{ n: 'D5', label: 'üst' }, { n: 'C5', label: 'esas', cls: 'hi' }, { n: 'B4', label: 'alt' }, { n: 'C5', label: 'esas', cls: 'hi' }], spacing: 46, caption: 'Do üzerinde küme: Re – Do – Si – Do.' },
        { t: 'ul', items: [
          'İşaret esas notanın **tam üstünde değil biraz solunda** ise ya da **iki esas notanın arasına** konursa farklı (gecikmeli) okunur.',
          'İşaretin **altına** konan değiştirme işareti esas notanın **bir alt derecesini**, **üstüne** konan ise **bir üst derecesini** değiştirir.'
        ] },
        { t: 'h', text: 'Tril' },
        { t: 'p', text: 'Birbirine **tam ya da yarım ses** aralıklı iki bitişik notanın **sırayla ve süratle** tekrarıdır. Esas sesin üstüne **tr** [[𝆖]] yazılır. Tril uzun sürelere konduğunda, trilin süreceği yere kadar **tr** harflerinin yanına **kırık (dalgalı) çizgi** çekilir.' },
        { t: 'h', text: 'Kadans (durgu)' },
        { t: 'p', text: 'Bir parçanın belli bir yerinde **ölçü zamanları uygulanmadan** yazılan küçük notalara **durgu (kadans)** denir; solo olarak okunur ve çalınır. Bugün iki anlamda kullanılır:' },
        { t: 'ol', items: ['Bir müzik parçasının **bitişi** (armonik kapanış).', 'Çalıcının ya da şarkıcının **sanat gücünü göstermek** için çaldığı/okuduğu **gösterişli melodik süslemeler** (konçertolardaki solo kadans).'] },
        { t: 'h', text: 'Arpej' },
        { t: 'p', text: 'Bir akorun notalarının **melodik olarak arka arkaya** çalınmasına **arpej** denir (akor aynı anda değil, bozulmuş olarak).' }
      ] },

    /* 16 */
    { id: 'akor', title: 'Akorlar ve kadanslar', short: 'Akor ve kadans', src: 'Bona · Akor · Temel Üç Sesli Akor · Ana Akorlar · Kadans türleri',
      blocks: [
        { t: 'p', text: '**Akor**, en az üç sesin **bir anda** çalınması ya da seslerin bir düzen içinde **üst üste** getirilmesidir. Üç sesten oluşan akora **üç sesli akor** denir. Akoru oluşturan aralıkların niteliğine göre akorlar **majör, minör, eksik** gibi adlar alır.' },
        { t: 'table', cls: 'k1', head: ['Akor', 'Yapısı', 'Do üzerinde'], rows: [
          ['Majör', 'Büyük üçlü + tam beşli', 'Do – Mi – Sol'],
          ['Minör', 'Küçük üçlü + tam beşli', 'Do – Mi♭ – Sol'],
          ['Eksik', 'Küçük üçlü + **eksik beşli**', 'Do – Mi♭ – Sol♭']
        ] },
        { t: 'defs', defs: [
          ['Temel üç sesli akor', 'Bir tonun **temel sesi, üçlüsü ve beşlisinden** oluşan akor.'],
          ['Dört sesli temel akor', 'Temel üç sesli akorda temel ses **bir oktav inceden tekrar** duyulursa.']
        ] },
        { t: 'p', text: 'Tonun her notası üzerine üç ve dört sesli akorlar kurulabilir. Bunlardan **IV. derece (dominant altı)** ve **V. derece (dominant)** üzerine kurulan akorlar, **temel akorla (I)** birlikte bir tonun **ana akorlarını** oluşturur. Bu üç ana akorun birbirine bağlanışına **karar (kadans)** denir.' },
        { t: 'table', cls: 'k1', head: ['Kadans', 'Akorlar', 'Do majörde'], rows: [
          ['Yumuşak kadans', '**IV – I**', 'Fa-La-Do → Do-Mi-Sol'],
          ['Sert kadans', '**V – I**', 'Sol-Si-Re → Do-Mi-Sol'],
          ['Mükemmel kadans', '**I – IV – V – I**', 'Do → Fa → Sol → Do']
        ] },
        { t: 'staff', clef: 'grand', notes: [{ n: 'C3', st: 'bass', label: 'I' }, { n: 'F3', st: 'bass', label: 'IV' }, { n: 'G3', st: 'bass', label: 'V' }, { n: 'C3', st: 'bass', label: 'I' }], spacing: 54, caption: 'Mükemmel kadansın bas sesleri: Do – Fa – Sol – Do.' },
        { t: 'tip', text: 'Piyano dersindeki adlarla karşılaştır: **yumuşak = plagal** (IV–I), **sert = otantik** (V–I), **mükemmel = tam kadans** (I–IV–V–I).' }
      ] },

    /* 17 */
    { id: 'tm-derece', title: 'Türk müziği: perdeler, yeden ve karar', short: 'TM perde ve karar', src: 'Bona · Türk Musikisi Müzik Teorisi Özet Notları · Derece · Yeden · Karar',
      blocks: [
        { t: 'p', text: 'Kitabın bu bölümü yalnız **Türk musikisine özgü** konuları ele alır. Dereceye karşılık **perde** kelimesi de kullanılır. Do dizisinin dereceleri Türk musikisinde şöyle adlandırılır:' },
        { t: 'table', cls: 'k1', head: ['Derece', 'Do dizisinde', 'Türk musikisindeki adı'], rows: [
          ['1', 'Do', '**Durak** (dizilerin ilk derecesine **karar** da denir)'],
          ['2', 'Re', 'Durak üstü'],
          ['3', 'Mi', 'Orta ses'],
          ['4', 'Fa', 'Güçlü ya da güçlü altı'],
          ['5', 'Sol', 'Güçlü üstü ya da güçlü'],
          ['6', 'La', 'Güçlü üstü ya da altıncı derece'],
          ['7', 'Si', '**Yeden** (sansibl)']
        ] },
        { t: 'h', text: 'Güçlü' },
        { t: 'p', text: 'Makam dizileri dört ya da beş sesin (dörtlü ve beşlilerin) birleşmesinden oluşur. Bu dörtlü ile beşlinin **birleştiği nokta** **güçlü**dür. Dizinin alt kısmı **dörtlüden** oluşursa güçlü **4. derece**, **beşliden** oluşursa **5. derece** olur.' },
        { t: 'h', text: 'Yeden' },
        { t: 'p', text: '*Yedmek*: bir şeyi bir yerden alıp başka yere götürmek. Yedinci derece melodiyi sekizinci dereceye götürür. Ama **Türk müziğinde hiçbir eser sekizinci derecede bitmez**; bütün makamlar **durak**ta biter. Bu yüzden Türk müziğinde yeden 7. derece değil, **durağın altındaki** sestir (7. derecenin bir sekizli aşağısı).' },
        { t: 'table', cls: 'k1', head: ['Yeden türü', 'Etkisi', 'Not'], rows: [
          ['Tam sesli yeden', '**Ağırbaşlı**, fakat **gevşek**', 'Yalnız Türk müziğinde bulunur.'],
          ['Yarım sesli yeden', '**Neşeli ve keskin**', 'Yarım ses **bakiye** ya da **küçük mücennep** olabilir.']
        ] },
        { t: 'h', text: 'Karar türleri' },
        { t: 'table', cls: 'k1', head: ['Karar', 'Nerede yapılır?', 'Şarkıda yeri'], rows: [
          ['Tam karar', 'Daima **durak** sesi üzerinde (birçok makamda **yedenli**).', '**Nakarat sonlarında**; çift nakaratlı şarkıda **ikinci nakaratın sonunda**.'],
          ['Eğreti (yarım) karar', 'Makamın **güçlü** perdesi üzerinde duruş.', '**Birinci mısranın sonunda**.'],
          ['Asma karar', 'Yeri makamın karakterine göre değişir.', 'Çift nakaratlıda **birinci nakaratın sonunda**; tek nakaratlıda **tam karara yakın** bir yerde.']
        ] }
      ] },

    /* 18 */
    { id: 'koma', title: 'Türk müziği: koma sistemi ve işaretler', short: 'Koma', src: 'Bona · Türk Müziği İşaretleri · Koma · Perde İsimleri',
      blocks: [
        { t: 'p', text: 'Türk müziğinde **bir tam ses dokuz eşit parçaya** bölünür; her parçaya **koma** denir. Batı müziğinde tam ses iki yarım sese bölünürken burada aradaki ince perdeler de kullanılır.' },
        { t: 'table', cls: 'k1', head: ['Adı', 'Koma değeri', 'Rumuz'], rows: [
          ['Koma', '**1**', 'F'],
          ['Bakiye', '**4**', 'B'],
          ['Küçük mücennep', '**5**', 'S'],
          ['Büyük mücennep', '**8**', 'K'],
          ['Tanini (tam ses)', '**9**', 'T']
        ] },
        { t: 'p', text: 'Bu yüzden diyez ve bemoller **birden fazladır**: koma diyezi/bemolü, bakiye diyezi/bemolü, küçük mücennep diyezi/bemolü, büyük mücennep diyezi/bemolü… **Her işaret ayrı bir değeri** ifade eder (şekilleri birbirinden farklıdır).' },
        { t: 'svg', svg: '<svg viewBox="0 0 560 120" width="560" role="img" aria-label="Bir tam sesin 9 komaya bölünmesi"><g font-family="system-ui,sans-serif" font-size="13" fill="currentColor"><line x1="30" y1="60" x2="530" y2="60" stroke="currentColor" stroke-width="2"/>' +
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) { var x = 30 + i * 500 / 9; return '<line x1="' + x + '" y1="52" x2="' + x + '" y2="68" stroke="currentColor" stroke-width="' + ([0, 4, 5, 8, 9].indexOf(i) >= 0 ? 3 : 1) + '"/><text x="' + x + '" y="88" text-anchor="middle" opacity=".75">' + i + '</text>'; }).join('') +
          '<text x="30" y="40" text-anchor="middle" font-weight="700">Do</text><text x="530" y="40" text-anchor="middle" font-weight="700">Re</text>' +
          '<text x="' + (30 + 4 * 500 / 9) + '" y="40" text-anchor="middle" fill="#c99a2e" font-weight="700">B</text><text x="' + (30 + 5 * 500 / 9) + '" y="40" text-anchor="middle" fill="#c99a2e" font-weight="700">S</text><text x="' + (30 + 8 * 500 / 9) + '" y="40" text-anchor="middle" fill="#c99a2e" font-weight="700">K</text>' +
          '<text x="280" y="112" text-anchor="middle" opacity=".75">1 tanini = 9 koma: bakiye (4) · küçük mücennep (5) · büyük mücennep (8)</text></g></svg>', caption: 'Bir tanini içinde aşağıdan yukarı perdelerin sırası: **B – S – K – T**.' },
        { t: 'h', text: 'Perde isimleri' },
        { t: 'p', text: 'Bir tanini içinde aşağıdan yukarıya sıralanış **B – S – K – T**\'dir. Bazı yerlerde **S**\'ye rastlayan perdenin tek bir adı vardır. Bu perdenin **tiz** tarafında bulunana **Dik**, **pes** tarafında bulunana **Nim** sözü eklenir.' },
        { t: 'ext', text: 'Örnek (genel bilgi): Dügah (La) ile Neva (Re) arasında **nim hicaz**, **hicaz**, **dik hicaz** perdeleri vardır; çargah (Do) ile neva arası da benzer şekilde **nim zirgüle – zirgüle – dik zirgüle** olarak adlandırılır.' },
        { t: 'tip', text: 'Sayıları ezberle: **1 – 4 – 5 – 8 – 9**. 4 + 5 = 9 (bakiye + küçük mücennep = tanini), 1 + 8 = 9 (koma + büyük mücennep = tanini).' }
      ] },

    /* 19 */
    { id: 'usul', title: 'Türk müziği: usuller', short: 'Usuller', src: 'Bona · Usul · Düm–Tek–Teke–Teka–Tahek · Küçük usuller',
      blocks: [
        { t: 'p', text: '**Usul**, eşit sayıda çeşitli vuruşlardan oluşan **kalıplar**dır. Türk musikisinde usuller **el hareketleriyle** yapılan vuruşlarla belirtilir; bu vuruşlar düzenli bir tempoyla, aksamadan, **eser bitene kadar** devam eder.' },
        { t: 'p', text: 'Usullerin değişmez yapılış şekli: **sağ el sağ diz**, **sol el sol diz** üzerine vurulur. Usullere **daima sağ elle** başlanır.' },
        { t: 'table', cls: 'k1', head: ['Kelime', 'Anlamı', 'Vuruluşu'], rows: [
          ['Düm', '**Kuvvetli** zaman', 'Sağ elle sağ diz üzerine'],
          ['Tek', '**Hafif** zaman', 'Sol elle sol diz üzerine'],
          ['Teke', 'Birbirine **eşit iki kısa** zaman', 'Sağ ve sol el, sağ ve sol dizlere'],
          ['Teka', 'Bir **uzun** ve bir **kısa** zaman', 'Sağ ve sol el, sağ ve sol dizlere'],
          ['Tahek', '—', 'İki el **birlikte havaya** kaldırılıp dizlere vurulur']
        ] },
        { t: 'h', text: 'Basit ve bileşik usuller' },
        { t: 'ul', items: [
          '**Bir zamanlı usul olmaz.**',
          '**Basit usuller iki tanedir**: iki zamanlı **nim sofyan** ve üç zamanlı **semai**. Diğerleri bunların birleşmesinden oluşan **bileşik** usullerdir.',
          '**On beş zamanlıya kadar** olanlara **küçük usul**, daha uzunlara **büyük usul** denir.'
        ] },
        { t: 'h', text: 'Küçük usuller' },
        { t: 'table', cls: 'k1', head: ['Usul', 'Zaman', 'Nasıl oluşur? / not'], rows: [
          ['Nim sofyan', '**2**', 'Basit usul. Oyun havaları, türküler, marşlar.'],
          ['Semai', '**3**', 'Basit usul. Oyun havaları ve şarkılar.'],
          ['Sofyan', '**4**', 'İki nim sofyan.'],
          ['Türk aksağı', '**5**', 'Bir nim sofyan + bir semai.'],
          ['Yürük semai', '**6**', 'İki semai ya da üç nim sofyan. Ağır vurulursa **sengin semai** (6/2).'],
          ['Devr-i hindi', '**7**', 'Bir semai + bir sofyan (7/8, 7/4).'],
          ['Devr-i turan', '**7**', 'Bir sofyan + bir semai.'],
          ['Düyek', '**8**', 'İki sofyan (8/8, 8/4).'],
          ['Müsemmen', '**8**', 'Bir semai + bir nim sofyan + bir semai.'],
          ['Aksak', '**9**', 'Bir sofyan + bir Türk aksağı. **9/8** aksak, **9/4** ağır (orta) aksak.'],
          ['Evfer', '9', 'Aksağın değişik vuruluşu (düüm–tek–teek).'],
          ['Oynak', '9', 'Aksağın değişik çalınışı: bir semai + üç nim sofyan.'],
          ['Raks aksağı', '9', 'Aksağın değişik çalınışı: bir Türk aksağı + bir sofyan.'],
          ['Curcuna', '**10**', 'İki Türk aksağı.'],
          ['Aksak semai', '10', 'Curcunanın aynı, daha ağır: **10/8** aksak semai, **10/4** ağır aksak semai.'],
          ['Lenk fahte (nim fahte)', '10', 'Bir yürük semai + bir sofyan (önce 6/4, noktalı ölçü çizgisi, sonra 4/4).'],
          ['Çengi harbi', '10', 'İki nim sofyan + iki semai.'],
          ['Tek vuruş', '**11**', 'Bir Türk aksağı + bir yürük semai.'],
          ['Frenkçin', '**12**', 'İki semai + üç nim sofyan.'],
          ['Şarkı devr-i revanı', '**13**', 'Bir semai + iki sofyan + bir nim sofyan.'],
          ['Nim evsat', '13', 'Bir Türk aksağı + iki sofyan.'],
          ['Devr-i revan', '**14**', 'On dört zamanlı.']
        ] },
        { t: 'tip', text: 'Hesap tutar: Türk aksağı 2+3 = 5, devr-i hindi 3+4 = 7, aksak 4+5 = 9, curcuna 5+5 = 10, frenkçin 3+3+2+2+2 = 12. Zaman sayısını unutursan parçaları topla.' }
      ] },

    /* 20 */
    { id: 'makam', title: 'Türk müziği: makam, seyir ve şarkı formu', short: 'Makam', src: 'Bona · Türk Musikisinde Makamlar ve Seyir',
      blocks: [
        { t: 'p', text: 'Türk musikisinde dinlediğimiz bütün sazlı ve sözlü eserlerin **birer makamı** vardır. Makam dizilerini **dörtlüler ve beşliler** oluşturur.' },
        { t: 'h', text: 'Dörtlü ve beşliler' },
        { t: 'table', cls: 'k1', head: ['Aralık', 'Yapısı', 'Koma'], rows: [
          ['Tam dörtlü', '**2 tanini + 1 bakiye**', '**22**'],
          ['Artık dörtlü', 'İki tanini + bir bakiyeden **fazla** (üç tanini)', '27'],
          ['Eksik dörtlü', 'İki tanini + bir bakiyeden **az** (bakiye + tanini + bakiye)', '17'],
          ['Tam beşli', '**3 tanini + 1 bakiye**', '**31**'],
          ['Artık beşli', '**4 tanini**', '36'],
          ['Eksik beşli', '**2 tanini + 2 bakiye**', '26']
        ] },
        { t: 'p', text: 'Türk müziğinde kullanılan **tam dörtlü ve tam beşliler altışar** tanedir (çargah, buselik, kürdi, rast, uşşak, hicaz… dörtlü ve beşlileri).' },
        { t: 'h', text: 'Seyir' },
        { t: 'p', text: 'Makamı oluşturmak, seslendirmek için dizinin seslerinde **dolaşılır**; **güçlü**de durulduktan sonra karışık seslerle **durak** perdesinde **karar** verilir. Makamın seslerinde dolaşmaya **seyir** denir. Üç türlü seyir vardır:' },
        { t: 'table', cls: 'k1', head: ['Seyir', 'Başlangıç ve yön'], rows: [
          ['Çıkıcı', 'Durak ya da durak civarından başlar, güçlüye doğru **yükselir**.'],
          ['İnici', 'Tiz bölgeden başlar, durağa doğru **iner**.'],
          ['İnici–çıkıcı', 'Güçlü ya da güçlü civarından başlar; önce iner, sonra çıkar.']
        ] },
        { t: 'h', text: 'Makam türleri' },
        { t: 'table', cls: 'k1', head: ['Tür', 'Tanım', 'Örnekler'], rows: [
          ['Basit makam (13)', '**Bir tam dörtlü + bir tam beşli**', 'Çargah, buselik, rast, uşşak, hicaz, neva, karcığar, kürdi…'],
          ['Şed makam (15)', '"Göçürülmüş makam": bir makamın **başka bir perde üzerinde** gösterilmesi.', 'Acemaşiran, mahur, sultaniyegah, nihavent, kürdilihicazkâr, suzidil…'],
          ['Bileşik makam (8 grup)', 'Yapısında **birden fazla basit makam** bulunan makamlar. Durak perdesine göre gruplanır.', 'Yegah, hüseyniaşiran, acemaşiran, ırak, rast, dügah, segah ve buselik perdesinde duranlar']
        ] },
        { t: 'p', text: 'Kitap, Türk musikisinde bestelenen eserlerin **birçok makamın birleşmesinden** oluştuğunu, **tek bir ana diziyle** yapılan eserlerin **daima renksiz** kaldığını belirtir.' },
        { t: 'h', text: 'Şarkının bölümleri' },
        { t: 'p', text: 'Dört mısralık bir şarkı örneği:' },
        { t: 'table', cls: 'k1', head: ['Mısra', 'Bölüm', 'Ne olur?'], rows: [
          ['1.', '**Zemin**', 'Makamın karakterine göre durak, güçlü ya da başka bir perdeden seyre başlanır; makamın sesleri gösterilir. Sonunda çoğunlukla **güçlüde asma kalış**.'],
          ['2.', '**Nakarat**', 'Güçlüde durularak nakarata geçilir.'],
          ['3.', '**Meyan**', 'Çeşitli değişik seslerde **dolaşılır** (geçki yapılır).'],
          ['4.', '**Nakarat** ve bitiş', 'Makamın ana dizisi belirtilerek **tam karar** yapılır; bazı makamlar **yedenli** tam karar yapar.']
        ] },
        { t: 'h', text: 'Basit makam incelerken bakılacaklar' },
        { t: 'ol', items: ['Durak', 'Seyir', 'Dizi', 'Güçlü', 'Yeden', 'Donanım', 'Dizinin seyri', 'Makamın özelliği'] },
        { t: 'ext', text: 'Örnek (genel bilgi): **Rast makamı** = rast perdesinde (Sol) **rast dörtlüsü + rast beşlisi**; durak **rast**, güçlü **neva** (Re), seyri **çıkıcı**, donanımda si için **koma bemolü** ve fa için **bakiye diyezi** bulunur.' }
      ] },

    /* 21 */
    { id: 'solfej', title: 'Ritmik solfej: Bona çalışması', short: 'Ritmik solfej', src: 'Bona · Pasquale Bona ritmik okuma alıştırmaları (kitabın ikinci bölümü)',
      blocks: [
        { t: 'p', text: 'Kitabın teori bölümünden sonrası **Pasquale Bona**\'nın ritmik okuma (solfej) alıştırmalarıdır. Her bölümün başında kısa bir açıklama ve çalışma yönergesi vardır. Amaç **doğru tartımla** (ritimle) ve **ölçü vurarak** nota okumaktır.' },
        { t: 'h', text: 'Kitaptaki ilerleyiş' },
        { t: 'table', cls: 'k1', head: ['Bölüm', 'Ne öğrenilir?'], rows: [
          ['Basit ölçüler', '2/4, 3/4, 4/4 içinde birlik–ikilik–dörtlük–sekizlik değerler; ölçü vurarak okuma.'],
          ['Noktalı değerler', '**Noktalı ikilik** (3 dörtlük = 6 sekizlik), **noktalı dörtlük** ("bir buçuk vuruş, üç zaman"), **çift noktalı dörtlük** (dörtlük + sekizlik + onaltılık), **noktalı sekizlik** (3 onaltılık uzatılır, 4. onaltılığın yeri bilinçle verilir).'],
          ['Çoğaltma bağı', 'Bağlı değerleri kesintisiz, tek değer gibi okuma.'],
          ['Aralıklı okuma', 'Onaltılık değerlerle **2, 3, 4, 5, 6, 7, 8\'li** aralıkları doğru tartımla ve **ezbere** okuma.'],
          ['Senkop', 'Eşit ve eşit olmayan senkopları vuruş içindeki yerine oturtma.'],
          ['Okuma etüdü', 'Şimdiye kadarki bütün değerleri içeren uzun etüt: kitap bunu ileride nota okumada "**maymuncuk anahtar**" olarak görür; okuyabildiğin tempoda doğru tartımla oku.'],
          ['Üçleme', 'Bir vuruşta üç eşit sekizlik; sonra iki vuruşa **altı onaltılık** yerleştirme (her vuruşu üçe böl, her bölümde iki onaltılık düşün).'],
          ['Sebare (alla breve)', '[[𝄵]] işareti: notalar **yarı değer süresiyle** düşünülür; ikilik vuruş birimi olur (2/2).'],
          ['Bileşik ölçüler', '**6/8, 9/8, 12/8**: her vuruş üç eşit sekizliğe bölünür. 6/8 ↔ 2/4\'ün, 9/8 ↔ 3/4\'ün, 12/8 ↔ 4/4\'ün **bileşik karşılığıdır**.']
        ] },
        { t: 'h', text: 'Nasıl çalışılır?' },
        { t: 'steps', items: [
          'Önce **ölçü rakamına** bak, kaç vuruşlu olduğunu ve vuruş birimini söyle.',
          'Eli **ölçü vurma** şekline göre hareket ettir (2: yere–sola, 3: yere–sağa–ortaya, 4: yere–sola–sağa–ortaya).',
          'Ritmi önce yalnız **"ta"** heceleriyle, sonra **nota isimleriyle** oku.',
          'Uzun değerlerde sesi **vuruş bitene kadar** sürdür; susta el yine vurur, ses durur.',
          'Bileşik ölçüde her vuruşu **üç zamana** bölerek say ("bir-ve-a").',
          'Hata yaptığın ölçüyü **ağır** tekrarla, sonra baştan **kesintisiz** oku.'
        ] },
        { t: 'tip', text: 'Noktalı dörtlük + sekizlik kalıbını kitabın önerisiyle düşün: dörtlüğü "**bir buçuk vuruş, üç zaman**" uzat; sekizlik vuruşun **ikinci yarısına** düşer.' }
      ] },

    /* 22 */
    { id: 'lavignac', title: 'Ezgisel solfej: Solfège des Solfèges 1A', short: 'Solfège des Solfèges', src: 'Solfège des Solfèges, Volume 1A (Henry Lemoine · A. Lavignac)',
      blocks: [
        { t: 'p', text: '**Solfège des Solfèges**, eski ve yeni bestecilerden seçilmiş **bir, iki, üç ve dört sesli** solfej derslerinden oluşan 34 ciltlik Fransız külliyatıdır; ders kitabı **Cilt 1A** (Henry Lemoine yayını, Albert Lavignac düzenlemesi). Ritmik solfejden farkı: notalar **ses yüksekliğiyle**, şarkı söyler gibi okunur (entonasyon).' },
        { t: 'h', text: 'Kitaptaki ilerleyiş (Fransızca başlıklarla)' },
        { t: 'table', cls: 'k1', head: ['Başlık', 'Türkçesi', 'İçerik'], rows: [
          ['Exercices préparatoires', 'Hazırlık alıştırmaları', 'Öğrenciyi **Do majör dizinin** sesleriyle ve aralıklarla tanıştırır.'],
          ['Gamme du ton d\'Ut, mode majeur', 'Do majör dizisi', 'Dizi çıkıcı/inici; ardından aralık alıştırmaları.'],
          ['Intervalles de Quintes… de Quartes / de Sixtes…', 'Beşli–dörtlü, altılı–beşli aralıkları', 'Çıkarken/inerken beşli, dörtlü, altılı sıçramalar.'],
          ['Mesure à quatre temps (C)', 'Dört vuruşlu ölçü', '4/4 ölçüde ilk dersler.'],
          ['Leçons avec des Blanches et des Demi-Pauses', 'İkilik ve ikilik suslu dersler', ''],
          ['Leçons avec des Noires et des Soupirs', 'Dörtlük ve dörtlük suslu dersler', ''],
          ['Leçons avec des Croches et des Demi-Soupirs', 'Sekizlik ve sekizlik suslu dersler', ''],
          ['Leçons avec des Rondes, des Blanches, des Noires et des Croches', 'Karışık değerler', 'Birlik, ikilik, dörtlük, sekizlik birlikte.'],
          ['Leçons pour la mesure à deux-deux (¢)', '2/2 (alla breve) ölçü', 'İkilik vuruş birimi.'],
          ['Mesure à trois temps / à deux temps', 'Üç ve iki vuruşlu ölçü', '3/4, 2/4.'],
          ['Leçons pour l\'emploi des notes pointées', 'Noktalı notalar', '4/4, ¢ ve 3/4 ölçülerinde.'],
          ['Mesure à trois-huit / six-huit', '3/8 ve 6/8 ölçü', 'Bileşik ölçüye giriş.'],
          ['Leçons avec des Double-croches', 'Onaltılıklı dersler', ''],
          ['Leçon pour la Syncope régulière', 'Düzenli senkop', 'İkiliklerle ve sekizliklerle senkop.'],
          ['Gamme du ton de Sol / Ré, mode majeur', 'Sol majör, Re majör', 'Fa♯ ve Do♯ seslerinin **entonasyonu** için dizi alıştırmaları.'],
          ['Exercice pour l\'intonation des bémols', 'Bemollerin entonasyonu', 'Si♭, Mi♭, La♭, Re♭ sesleri.'],
          ['Leçons en La / Mi / Ré / Si / Sol, mode mineur', 'La, Mi, Re, Si, Sol minör', 'Minör tonlarda dersler.'],
          ['Leçons pour l\'étude de la clé de Fa 4e ligne', '4. çizgide fa anahtarı', 'Fa anahtarında okuma.'],
          ['Leçons en clé de Sol et en clé de Fa', 'İki anahtar birlikte', 'Anahtar değiştirerek okuma.'],
          ['Leçons ajoutées à l\'ancienne édition', 'Eski baskıya eklenen dersler', 'Ek dersler.']
        ] },
        { t: 'h', text: 'Fransızca nota ve sus adları' },
        { t: 'table', head: ['Fransızca', 'Türkçe', 'Fransızca', 'Türkçe'], rows: [
          ['Ronde', 'Birlik', 'Pause', 'Birlik sus'],
          ['Blanche', 'İkilik', 'Demi-pause', 'İkilik sus'],
          ['Noire', 'Dörtlük', 'Soupir', 'Dörtlük sus'],
          ['Croche', 'Sekizlik', 'Demi-soupir', 'Sekizlik sus'],
          ['Double-croche', 'Onaltılık', 'Quart de soupir', 'Onaltılık sus']
        ] },
        { t: 'defs', defs: [
          ['Ut', 'Do (Fransızcada Do\'nun eski adı).'],
          ['Gamme · Ton · Mode majeur / mineur', 'Dizi · ton · majör / minör mod.'],
          ['Mesure · Temps', 'Ölçü · vuruş (zaman).'],
          ['Dièse · Bémol · Bécarre', 'Diyez · bemol · natürel.'],
          ['Clé de Sol · Clé de Fa 4e ligne', 'Sol anahtarı · 4. çizgide fa anahtarı.'],
          ['Leçon · Exercice', 'Ders · alıştırma.'],
          ['Notes pointées · Syncope', 'Noktalı notalar · senkop.']
        ] },
        { t: 'h', text: 'Nasıl çalışılır?' },
        { t: 'steps', items: [
          'Tonun **dizisini** ve **tonik akorunu** (ör. Do–Mi–Sol–Do) piyanodan al, söyle.',
          'Dersi önce **ritmik** oku (Bona gibi, ölçü vurarak, isimlerle).',
          'Sonra **seslerle** oku: her sıçramada önce iç kulakta duy, sonra söyle.',
          'Zor sıçramaları **tonik akorunun seslerine** bağlayarak bul (ör. Sol\'den Si\'ye: Sol–La–Si diye içinden geç).',
          'Arada piyanodan **kontrol et**; son notada tonikle karşılaştır.'
        ] }
      ] },

    /* 23 */
    { id: 'sozluk', title: 'Müzik terimleri sözlüğü', short: 'Sözlük', src: 'Bona · Müzik Terimleri (kitabın sonu)',
      blocks: [
        { t: 'p', text: 'Kitabın sonundaki **Müzik Terimleri** sözlüğünden seçmeler. Dil kısaltmaları: İtal. İtalyanca, Fr. Fransızca, Alm. Almanca, İng. İngilizce, Lat. Latince.' },
        { t: 'h', text: 'Hız ve karakter' },
        { t: 'defs', defs: [
          ['Accelerando (İtal.)', 'Hızlanacak.'],
          ['Adagio (İtal.)', 'Yavaş tempo. **Adagietto**: adagio\'dan biraz hızlı; **Adagissimo**: adagio\'dan biraz ağır.'],
          ['Agile (İtal.)', 'Çabuk, çevik.'],
          ['Agitato (İtal.)', 'Heyecanlı, hareketli.'],
          ['Alla marcia (İtal.)', 'Marş temposunda.'],
          ['Alla turca (İtal.)', 'Türk müziği tarzında.'],
          ['Allegretto (İtal.)', 'Hızlı tempoda (allegro\'dan biraz az).'],
          ['Allegro (İtal.)', 'Mutlu, sevinçli bir çabuklukta. **Allegro assai**: daha canlı ve şen; **Allegro maestoso**: gösterişli, tantanalı; **Allegro moderato**: orta çabuklukta; **Allegro vivace**: canlı, çevik.'],
          ['Amabile (İtal.)', 'Sevimli, okşayıcı.'],
          ['A tempo (İtal.)', 'Önceki, ilk tempoda.'],
          ['Espressivo (İtal.)', 'Hisli, duygulu.'],
          ['Facile (İtal.)', 'Kolay.'],
          ['Feroce (İtal.)', 'Hiddetli, kızgın.'],
          ['Focoso (İtal.)', 'Ateşli, ihtiraslı.'],
          ['Largo (İtal.)', 'Ağır. **Larghetto**: largo\'dan az daha hızlı; **Largo di molto**: çok ağır.'],
          ['Leggiero (İtal.) / Leicht (Alm.)', 'Hafif.'],
          ['Lento (İtal.)', 'Yavaş.'],
          ['Lieto (İtal.)', 'Neşeli, şen.'],
          ['Maestoso (İtal.)', 'Azametli, ihtişamlı.'],
          ['Marcato (İtal.)', 'Ayrı ayrı belirterek.'],
          ['Marciale (İtal.)', 'Marş tarzında.'],
          ['Scherzo (İtal.)', 'Şakacı bir tarzda.'],
          ['Serio (İtal.)', 'Ciddi.'],
          ['Slow (İng.)', 'Ağır, yavaş.'],
          ['Subito (İtal.)', 'Birdenbire.'],
          ['Tranquillo (İtal.)', 'Sakin, rahat.'],
          ['Troppo (İtal.)', 'Çok.']
        ] },
        { t: 'h', text: 'Gürlük, çalış ve işaretler' },
        { t: 'defs', defs: [
          ['Accent (Fr.)', 'Vurgu.'],
          ['Ad libitum (Lat.)', 'Arzuya göre.'],
          ['Attacca (İtal.)', 'Giriş, hamle (ara vermeden geç).'],
          ['Ben legato (İtal.)', 'İyice bağlayarak.'],
          ['Bis (Lat.)', 'İki kez, tekrar.'],
          ['Fine (İtal.)', 'Son.'],
          ['Forte (İtal.)', 'Kuvvetli, güçlü. **Forte possibile**: mümkün olduğu kadar kuvvetli.'],
          ['Legato (İtal.)', 'Bağlı.'],
          ['Sforzando (İtal.)', 'Kuvvetli (ani vurgu).'],
          ['Sostenuto (İtal.)', 'Belirterek (tutarak).'],
          ['Tacet (Lat.)', 'Susar.'],
          ['Tenuto (İtal.)', 'Tutarak (değeri kadar tam).'],
          ['Tremolo (İtal.)', 'Bir veya iki sesin çok çabuk tekrar edilişi.'],
          ['Tutti (İtal.)', 'Bütün, hep birlikte. **Alle** (Alm.): hep birlikte.']
        ] },
        { t: 'h', text: 'Ses, çalgı, form ve genel terimler' },
        { t: 'defs', defs: [
          ['A / B / F (harf adları)', 'Harflerle adlandırılan dizide **La / Si / Fa**. Almancada **As** = La♭ (kitapta "La diyez" diye geçer), **B-Dur** = Si♭ majör, **F-Dur / F-Moll** = Fa majör / minör.'],
          ['A cappella (İtal.)', 'Çalgı eşliği olmayan koro, yalnız koro için.'],
          ['Akor (Fr. accord, İng. chord)', 'Aynı anda tınlayan ikiden fazla ses.'],
          ['Akustik', 'Sesle, sesin doğuşu, özellikleri, ulaşımı ve alımıyla uğraşan bilim.'],
          ['Alto (İtal.)', 'Kalın kadın sesi; viyolanın karşılığı; Mi♭ nefesli bir çalgı.'],
          ['Bariton', 'Tenor ile bas arasındaki erkek sesi; Si♭ tonunda nefesli bir çalgı.'],
          ['Baguette (Fr.)', 'Vurmalı çalgıların sopası; şefin yönetme çubuğu.'],
          ['Barre (Fr.)', 'Ölçü çizgisi.'],
          ['Batterie (Fr.)', 'Orkestranın vurmalı çalgılar topluluğu.'],
          ['Bel canto (İtal.)', 'Güzel şarkı, güzel söyleyiş.'],
          ['Berceuse (Fr.)', 'Ninni.'],
          ['Bolero', 'Üç vuruşlu, kastanyet eşliğinde oynanan İspanyol dansı.'],
          ['Etude (Fr.)', 'Çalışma (etüt) parçası.'],
          ['Ezgi', 'Melodi.'],
          ['Falsetto (İtal.)', 'Erkek sesinin normal alanı dışında, kadın sesine benzer tiz sesler çıkarma yöntemi.'],
          ['Fanfar (Fr. fanfare)', 'Madeni (bakır) çalgılardan oluşan topluluk.'],
          ['Filarmoni', 'Müzik sevgisi.'],
          ['Finale (İtal.)', 'Çok bölümlü bir bestenin son bölümü.'],
          ['Fonomimi', 'Solfejde ses yüksekliklerini **el işaretleriyle** belirtme.'],
          ['Kuartet', 'Dört ses ya da çalgı için yazılmış beste. **Trio** 3, **sekstet** 6, **septet** 7.'],
          ['Leitmotiv (Alm.)', 'Ana motif, kılavuz motif.'],
          ['Libretto (İtal.)', 'Opera metni.'],
          ['Lied (Alm.)', 'Şarkı.'],
          ['Lir', 'Çok eskiden kullanılan, sol elde tutulan, 4–10 telli çalgı.'],
          ['Makam', 'Batı müziğindeki dizilerin alaturka müzikteki karşıtları.'],
          ['Metronom', 'Bir parçanın tempo hızını belirten araç.'],
          ['Serenad (İtal.)', 'Akşam ya da gece açık havada söylenen/çalınan parça.'],
          ['Solfej', 'Ses terbiyesi.'],
          ['Solo (İtal.)', 'Tek çalgı ya da tek ses için yazılmış beste.'],
          ['Surdin', 'Çalgılarda gürlüğü azaltmak için kullanılan tıkaç.'],
          ['Takt (Alm.)', 'Ölçü.'],
          ['Tarantella (İtal.)', 'Hızlı ve canlı bir Napoli dansı.'],
          ['Tema', 'Ana fikir.'],
          ['Tempo (İtal.)', 'Hız derecesi.'],
          ['Toccata (İtal.)', 'Tuşlu çalgılar için tek bölümlü beste.']
        ] }
      ] }
  ]
});
