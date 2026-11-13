/* Pİ101 Piyano I · Selmin & Enver Tufan, Piyano Metodu 1 + Carl Czerny, Op. 599 */
App.course({
  id: 'pi101', code: 'Pİ101', short: 'Piyano I', glyph: '𝄞',
  title: 'Piyano I',
  desc: 'Tufan Piyano Metodu 1 ve Czerny Op. 599: oturuş, el pozisyonu, legato–staccato, işaretler, pedal, kadans, repertuvar.',
  lead: 'Bu derste piyanoya sıfırdan başlanıyor. Anlatım, **Selmin & Enver Tufan – Piyano Metodu 1** kitabının konu sırasını izler; her yeni bilgi kitapta hangi parçadan önce geliyorsa o sırayla verildi. Sonda **Czerny Op. 599**\'un bölümleri ve kitabın terim sözlüğü var.',
  sources: [
    { g: '𝄞', t: 'Selmin TUFAN – Enver TUFAN · Piyano Metodu 1', d: 'MEB güzel sanatlar liseleri için yazılan Piyano 1–4 kitaplarının geliştirilmiş hâli. Sonunda Enver Tufan\'ın makamsal parçaları: "Bizden Ezgiler – Piyano İçin 17 Parça".' },
    { g: '𝄢', t: 'Carl CZERNY · Practical Method for Beginners, Op. 599', d: 'Schirmer\'s Library Vol. 146, düzenleyen ve parmak numaralarını yazan Giuseppe Buonamici. 100 kısa alıştırma.' }
  ],
  traps: [
    { t: 'Piyanoyu **1711**\'de **Floransa**\'da **Bartolomeo Cristofori** icat etti. Klavsen yine de **1775**\'lere kadar kullanıldı.', topic: 'tarihce' },
    { t: 'Timpanon (tellere **çubukla vurulur**) → **klavikord**; psalterion (teller **parmakla çekilir**) → **epinet** → büyütülünce **klavsen**.', topic: 'tarihce' },
    { t: 'Sandalyenin **ön yarısına** oturulur; ayaklar **pedalların hemen yanında**, vücut ağırlığını taşır. Üst kol **düşey**, ön kol ve el **yatay**.', topic: 'davranis' },
    { t: 'Başparmak **birinci boğumunun bütünüyle** tuşa değer (bilek kalkmaz). Başparmak ile işaret parmağı arasındaki **"C" harfi** bozulmaz.', topic: 'davranis' },
    { t: 'Do tuşu: **ikili siyah grubun solundaki** beyaz tuş. Orta do: piyanonun ortasında oturunca karşındaki ikili grubun solundaki do.', topic: 'klavye' },
    { t: 'Başparmak her iki elde de **1**. parmaktır; serçe parmak **5**. Orta do konumunda sağ el Do–Sol, sol el Fa–Do tuşlarındadır.', topic: 'parmak' },
    { t: 'Legato: sesin üzerinde **tam süresi kadar** kalıp, sonraki sese geçtikten **hemen sonra** bırakmak. Benzetme: **tahterevalli / enerji aktarımı**.', topic: 'legato' },
    { t: 'Bir ölçüde değiştirici işaret alan nota aynı ölçüde tekrar gelirse işaret **yeniden yazılmaz ama okunur**. Ölçü çizgisi işareti iptal eder.', topic: 'isaretler' },
    { t: 'Puandorg (fermata) genellikle notanın değerini **iki katına** uzatır; esere göre daha uzun ya da kısa tutulabilir.', topic: 'isaretler' },
    { t: '**Cümle (ifade) bağı** farklı notaları gruplar; **uzatma bağı** adı ve sesi aynı iki notayı birleştirir, ikinci nota tekrar çalınmaz.', topic: 'bag' },
    { t: 'Ottava **8** işareti notanın üstündeyse bir oktav **tiz**, altındaysa bir oktav **pes** çalınır.', topic: 'bag' },
    { t: 'Parmak geçişi genellikle başparmağın **3. veya 4. parmaktan sonra** alttan getirilmesiyle yapılır; hazırlık **önceki nota çalınırken** başlar.', topic: 'staccato' },
    { t: 'Sağ pedal **uzatma**, sol pedal **una corda** (susturucu), orta pedal **sostenuto**; duvar piyanosunda orta pedala **gece pedalı** denir.', topic: 'pedal' },
    { t: '**Senkop pedal**: sesten **sonra** pedala basılır; her armoni değişiminde pedal hızla yenilenir.', topic: 'pedal' },
    { t: 'Kadanslar (Do majör): **plagal** IV–I, **otantik** V–I, **tam** I–IV–V–I.', topic: 'pedal' },
    { t: '**Allegretto** allegro ile andante arasındadır; **Lento** ağır; **Allegro** hızlı ve çevik.', topic: 'diziler' },
    { t: '**Non legato**: legato ile staccato arasında, özellikle **barok** eserlerde kullanılan çalış (kitapta Purcell ile).', topic: 'diziler' }
  ],
  topics: [
    /* 1 */
    { id: 'tarihce', title: 'Piyanonun kısa tarihçesi', short: 'Tarihçe', src: 'Piyano Metodu 1 · Piyanonun Kısa Tarihçesi',
      blocks: [
        { t: 'p', text: 'Piyano **1711** yılında İtalya\'nın **Floransa** şehrinde **Bartolomeo Cristofori** tarafından icat edildi. Ama çalgının kökeni çok daha eskiye, **XI. yüzyıldan önce Asya\'da** kullanılan iki tel çalgısına dayanır: **timpanon** ve **psalterion**.' },
        { t: 'table', cls: 'k1', head: ['Çalgı', 'Nasıl ses verir?', 'Neye dönüştü?'], rows: [
          ['Timpanon', 'Dikdörtgen tahta kutuya gerilmiş teller **tahta çubuklarla vurulur**.', 'Mekanizma eklenince **klavikord**'],
          ['Psalterion', 'Üçgen tahta çerçeveye gerilmiş teller **parmakla çekilir**.', 'Mekanizma eklenince **epinet** → büyütülünce **klavsen**']
        ] },
        { t: 'h', text: 'Klavyenin doğuşu' },
        { t: 'p', text: '**XV. yüzyıla** doğru bu çalgılara bir mekanizma eklendi: her tel için bir **tuş** yapıldı. Tuşların hepsine birden **klavye** denildi. Böylece timpanon **klavikord**, psalterion da **epinet** oldu.' },
        { t: 'p', text: '**XVI. yüzyılda** daha kuvvetli ve dolgun ses elde etmek için her nota için **bir tel daha** eklendi. Bu en iyi sonucu epinette verdi; epinet büyütüldü ve **klavsen** adını aldı. Klavsen zamanla **her nota için üç tel** taşıyacak biçimde geliştirildi.' },
        { t: 'h', text: 'Neden piyano icat edildi?' },
        { t: 'p', text: 'Klavsende tel çekilerek (koparılarak) ses çıkar; tuşa ne kadar sert basarsan bas ses gürlüğü pek değişmez. **Hafif ve kuvvetli sesleri art arda** çalabilmek ancak **iki klavyeyle** mümkündü. Tek klavyede hem hafif hem kuvvetli çalabilen bir çalgı arayışı piyanonun icadını getirdi. İlk adı da bunu anlatır: *gravicembalo col piano e forte* (hafif ve kuvvetli çalabilen klavsen).' },
        { t: 'note', label: 'Kitaptaki tarih', text: 'Piyano 1711\'de icat edilmesine rağmen klavsen **1775\'lere kadar** kullanılmaya devam etti.' },
        { t: 'p', text: 'Piyano bugünkü gelişmiş hâline **Silbermann, Frederici, Bachers, Broadwood, Stein ve Erard** gibi birçok yapımcının katkılarıyla ulaştı.' },
        { t: 'h', text: 'Günümüz' },
        { t: 'ul', items: [
          '**XX. yüzyılın son çeyreğinden** itibaren elektronikteki gelişmeler piyano yapımına yansıdı ve **dijital piyanolar** üretildi.',
          'Daha sonra hem akustik hem dijital piyanoya dönüşebilen çalgılar (hibrit / sessiz sistemli piyanolar) yapıldı.',
          'Akustik piyanolar iki çeşittir: **kuyruklu piyano** ve **konsol (duvar) piyanosu**.'
        ] },
        { t: 'table', head: ['', 'Kuyruklu piyano', 'Konsol (duvar) piyanosu'], rows: [
          ['Teller', 'Yatay', 'Dikey'],
          ['Yer', 'Konser salonu, büyük oda', 'Ev, okul, çalışma odası'],
          ['Orta pedal', 'Sostenuto (seçilen sesleri uzatır)', 'Gece pedalı (keçe iner, ses kısılır)'],
          ['Sol pedal', 'Klavye kayar, çekiç tek tele vurur (una corda)', 'Çekiçler tele yaklaşır, ses hafifler']
        ] },
        { t: 'tip', text: 'Sıra: **timpanon/psalterion → (XV. yy) klavikord/epinet → (XVI. yy) klavsen → (1711) piyano → (XX. yy sonu) dijital piyano**.' }
      ] },

    /* 2 */
    { id: 'davranis', title: 'Piyano çalmada temel davranışlar', short: 'Oturuş ve el', src: 'Piyano Metodu 1 · Piyanoda Duruş ve Oturuş, El Pozisyonu',
      blocks: [
        { t: 'p', text: 'Oturuş biçimi ve kolların, ellerin klavyeye doğru yerleştirilmesi **rahat, kolay ve etkili** çalmanın temelidir. Kitap bu davranışları sandalyenin yerleştirilmesinden başlayarak sırayla verir.' },
        { t: 'h', text: 'Sandalye ve oturuş' },
        { t: 'steps', items: [
          'Sandalye piyanonun **tam ortasına** gelecek biçimde konur (orta do karşına gelir).',
          'Sandalyenin piyanoya uzaklığı ve yüksekliği öğrencinin bedenine bağlıdır; bu ayarı **öğretmen** yapar ve öğrencinin bu pozisyonda çalıştığı sürekli gözlenir.',
          'Sandalyenin (arkalıklı, yükseklik ayarlı vb.) yalnız **ön yarısına** oturulur.',
          'Ayaklar **pedalların hemen yanına** gelir ve **vücut ağırlığını taşır**.',
          'Ayakları yere yetişmeyen küçük öğrenciler için yere basılacak bir şey konur: kalın kitaplar, uygun yükseklikte tabure, sert yastık. Ayaklar boşlukta sallanmamalı.',
          'Sırt sürekli **dik ve hafifçe öne eğik**, omuzlar **serbest**.',
          'Parmaklar tuşların üzerindeyken **üst kol düşey ve vücuda yakın**, **ön kol ve eller yatay** olur.'
        ] },
        { t: 'h', text: 'El pozisyonu' },
        { t: 'p', text: 'Doğru oturuştan sonra eller klavyeye **avuç içi yuvarlak** olacak şekilde yerleştirilir. Kitap şu sırayı önerir:' },
        { t: 'ol', items: [
          '**Başparmak**, **birinci boğumu bütünüyle tuşa değecek** şekilde konur. Bu, **bileğin kalkmasını** engeller.',
          'Diğer parmaklar tuşlara **birinci boğumlarından kırılmadan** ve **geriye çekilmeden** basar.',
          'Başparmak ile işaret parmağı arasında oluşan **"C" harfi** bozulmaz.'
        ] },
        { t: 'trap', text: 'Yanlış el pozisyonunun iki tipik görüntüsü: parmak uçlarının içeri kırılması (birinci boğumdan çökme) ve başparmağın yalnız ucuyla basıp bileği yukarı itmesi.' },
        { t: 'tip', text: 'Başlangıçta el konumunu kontrol etmek için kendi elimizden yararlanabiliriz (kitaptaki fotoğraflı çalışmalar): bir elin parmak uçlarını diğer elin avucuna dik bastırarak boğumların çökmemesini hissetmek gibi. Bu davranışlar **alışkanlığa dönüşene kadar sık sık kontrol edilmelidir**.' }
      ] },

    /* 3 */
    { id: 'klavye', title: 'Klavye, anahtarlar ve orta do', short: 'Klavye', src: 'Piyano Metodu 1 · Klavye, Sol ve Fa Anahtarı, Orta Do',
      blocks: [
        { t: 'p', text: 'Piyano, org, klavsen gibi çalgılarda ses düzeneğini çalıştıran **tuş sıralarının bütününe klavye** denir. Klavyede beyaz tuşlar kesintisiz devam eder; siyah tuşlar ise **ikili ve üçlü gruplar** hâlinde sıralanır. Siyah tuşların bu düzeni, klavyede yön bulmanın anahtarıdır.' },
        { t: 'kb', from: 'C3', to: 'B4', labels: 'white', mark: 'C4', caption: 'İki oktav: ikili siyah grubun solundaki beyaz tuş **do**dur. Kırmızı nokta **orta do**.' },
        { t: 'ul', items: [
          'İkili siyah grubun solundaki beyaz tuş **do**, üçlü grubun solundaki beyaz tuş **fa**dır.',
          '**Orta do**: sandalyeyi piyanoyu ortalayacak şekilde yerleştirip oturduğumuzda karşımızdaki ikili siyah grubun solundaki do.',
          'Beyaz tuşlar sırayla **do, re, mi, fa, sol, la, si** diye tekrar eder; her tekrar bir **oktav**dır.'
        ] },
        { t: 'h', text: 'Sol ve fa anahtarı' },
        { t: 'p', text: 'Piyanonun ses alanı çok geniş olduğu için iki farklı anahtarla yazılır: **sol anahtarı** (genellikle sağ el, ince sesler) ve **fa anahtarı** (genellikle sol el, kalın sesler). Sol anahtarı portenin **2. çizgisine**, fa anahtarı **4. çizgisine** konur ve konduğu çizgiye kendi adını verir.' },
        { t: 'staff', clef: 'grand', notes: [{ n: 'F3', st: 'bass' }, { n: 'G3', st: 'bass' }, { n: 'A3', st: 'bass' }, { n: 'B3', st: 'bass' }, { n: 'C4', st: 'bass', cls: 'hi' }, { n: 'C4', st: 'treble', cls: 'hi' }, { n: 'D4' }, { n: 'E4' }, { n: 'F4' }, { n: 'G4' }], spacing: 36, caption: 'Orta do konumundaki notalar: sol el Fa–Do (fa anahtarı), sağ el Do–Sol (sol anahtarı). Orta do iki portenin arasında, kendi ek çizgisi üzerindedir.' },
        { t: 'p', text: 'Bu iki porte piyano notasında soldan bir **yan çizgi (parantez / akolat)** ile birleştirilir. **Ölçü çizgileri ve bitiş çizgisi** de iki porteyi birlikte keser. Kitaptaki şekilde bu parçalar şöyle adlandırılır: *Parantez – Ölçü sayısı – Ölçü çizgisi – Bitiş çizgisi*.' },
        { t: 'h', text: 'Orta do konumu' },
        { t: 'p', text: 'İki elin başparmağının **orta do tuşuna** yerleştirilmesiyle oluşan konuma **orta do konumu** denir. Kitaptaki ilk 20 alıştırma bu konumda çalınır.' },
        { t: 'kb', from: 'F3', to: 'G4', labels: 'white', mark: 'C4', nums: { F3: '5', G3: '4', A3: '3', B3: '2', C4: '1', D4: '2', E4: '3', F4: '4', G4: '5' }, caption: 'Orta do konumu: soldan sağa sol el 5–4–3–2–1, orta do\'da iki başparmak, sağ el 1–2–3–4–5.' }
      ] },

    /* 4 */
    { id: 'parmak', title: 'Parmak numaraları ve ilk 20 alıştırma', short: 'Parmaklar', src: 'Piyano Metodu 1 · Alıştırma 1–20 (Enver Tufan)',
      blocks: [
        { t: 'p', text: 'Piyano çalarken **iki elde de başparmak 1. parmak** kabul edilir; diğerleri sırasıyla **2, 3, 4 ve 5**. Yani işaret 2, orta 3, yüzük 4, serçe 5.' },
        { t: 'p', text: 'Kitaptaki **ilk 20 alıştırma** (hepsi Enver Tufan\'ın) parmak numaralarını ve parmak–tuş ilişkisini **simetrik** öğretmek için hazırlanmıştır. Her yeni parmak için parmağın nereye konacağı ayrıca anlatılır:' },
        { t: 'table', cls: 'k1', head: ['Parmak', 'Sol el', 'Sağ el', 'Nasıl konur?'], rows: [
          ['1 (başparmak)', 'Do (orta do)', 'Do (orta do)', 'Birinci boğumu bütünüyle tuşa değecek şekilde'],
          ['2 (işaret)', 'Si', 'Re', 'Birinci boğumdan kırılmadan, **yarım daire** olacak şekilde'],
          ['3 (orta)', 'La', 'Mi', 'Birinci boğumdan kırılmadan, yarım daire'],
          ['4 (yüzük)', 'Sol', 'Fa', 'Birinci boğumdan kırılmadan, yarım daire'],
          ['5 (serçe)', 'Fa', 'Sol', 'Birinci boğumdan kırılmadan, **olabildiğince dik**']
        ] },
        { t: 'h', text: 'İlk alıştırmalarda kullanılan nota ve sus değerleri' },
        { t: 'sym', items: [
          ['𝅝', 'Birlik nota', '4 vuruş (4/4\'te bütün ölçü)'],
          ['𝅗𝅥', 'İkilik nota', '2 vuruş'],
          ['𝅘𝅥', 'Dörtlük nota', '1 vuruş'],
          ['𝄻', 'Birlik sus', '4 vuruş susulur'],
          ['𝄼', 'İkilik sus', '2 vuruş susulur'],
          ['𝄽', 'Dörtlük sus', '1 vuruş susulur']
        ] },
        { t: 'note', label: 'Kitabın uyarısı', text: 'Tüm alıştırmaları **ağır bir tempoda** ve **bir sonraki notayı önceden okumaya çalışarak** çalın. Kesinlikle acele etmeyin.' },
        { t: 'tip', text: 'Notayı okurken önce **hangi parmak** olduğunu düşün, sonra tuşa bak. Orta do konumunda nota adı ile parmak numarası birebir eşleşir; bu eşleşmeyi ezberlemek ilk haftaların asıl işidir.' }
      ] },

    /* 5 */
    { id: 'legato', title: 'Legato çalma tekniği', short: 'Legato', src: 'Piyano Metodu 1 · Legato Çalma Tekniği (Küçük Balerin)',
      blocks: [
        { t: 'p', text: 'Piyano çalarken farklı sesler üretiriz. Bu farklar bazen tuşlara uygulanan **şiddetten**, bazen de parmağın tuş üzerinde **kalma süresinden** gelir.' },
        { t: 'defs', defs: [
          ['Legato çalma (bağlı çalma)', 'Seslerin üzerinde **tam süreleri kadar** kalıp, bir sonraki sese geçtikten **hemen sonra** bırakılmasıyla elde edilen çalma biçimi.'],
          ['Legato tekniği', 'İki nota arasında **boşluk bırakmadan** çalma tekniği.']
        ] },
        { t: 'h', text: 'Tahterevalli ve enerji aktarımı' },
        { t: 'p', text: 'Kitap iyi bir legato için iki benzetme kullanır: iki nota arasında boşluk bırakmadan çalmayı **bir parmaktan diğerine enerji aktarımı** gibi düşünmek ve işi bir **tahterevalliye** benzetmek. Bir parmak inerken diğeri kalkar; ağırlık bir parmaktan ötekine geçer.' },
        { t: 'p', text: 'Enerji aktarımı, **işi bittiği hâlde tuşun basılı kalmasını engeller**. Çünkü enerjisi alınmış parmağı tuş **kendi ağırlığıyla** yukarı kaldırır. Böylece iki ses ne birbirine karışır ne de arada boşluk kalır.' },
        { t: 'ul', items: [
          'Kaslar **gevşek** olmalıdır.',
          'Vücut ve kol ağırlığı **parmak uçlarında** hissedilerek klavyeye aktarılır.',
          'Bu yolla elde edilen sesler **şiddet, ritim ve ton** bakımından kolayca kontrol edilir.'
        ] },
        { t: 'note', label: 'Kitabın notu', text: '"Cümle Bağı" konusuna kadar olan tüm parçalar legato tekniğine uygun çalınır. İlk legato parçası **Küçük Balerin**.' },
        { t: 'trap', text: 'Legato "tuşa basılı tutmak" değildir: önceki parmak, sonraki nota **çalındıktan hemen sonra** bırakılır. Geç bırakırsan sesler üst üste biner, erken bırakırsan arada boşluk olur.' }
      ] },

    /* 6 */
    { id: 'isaretler', title: 'Değiştirici işaretler, gürlük, puandorg ve sekizlik', short: 'İşaretler', src: 'Piyano Metodu 1 · Diyez, Bemol, Natürel · Gürlük · Puandorg · Sekizlik nota',
      blocks: [
        { t: 'h', text: 'Değiştirici işaretler' },
        { t: 'sym', items: [
          ['♯', 'Diyez', 'Önüne geldiği notayı **yarım ses tizleştirir** (inceltir).'],
          ['♭', 'Bemol', 'Önüne geldiği notayı **yarım ses pesleştirir** (kalınlaştırır).'],
          ['♮', 'Natürel', 'Diyez ya da bemolle değişmiş notayı **eski hâline** getirir.']
        ] },
        { t: 'staff', clef: 'treble', notes: [{ n: 'F4', label: 'Fa' }, { n: 'F#4', label: 'Fa♯', cls: 'hi' }, { n: 'B4', label: 'Si' }, { n: 'Bb4', label: 'Si♭', cls: 'hi' }], spacing: 46, caption: 'Fa♯ fa\'nın sağındaki siyah tuştur; Si♭ si\'nin solundaki siyah tuştur.' },
        { t: 'kb', from: 'C4', to: 'B4', labels: 'all', hi: ['F#4', 'Bb4'], caption: 'Her siyah tuşun iki adı vardır: Fa♯ = Sol♭, La♯ = Si♭ …' },
        { t: 'trap', text: 'Aynı ölçü içinde değiştirici işaret almış bir nota **tekrar gelirse** işaret yeniden yazılmaz ama **yazılmış gibi okunur ve çalınır**. Ölçü çizgisi geçince işaretin etkisi biter.' },
        { t: 'h', text: 'Gürlük' },
        { t: 'p', text: 'Konuşurken anlatmak istediğimizi daha etkili kılmak için cümlelere, kelimelere, hatta hecelere farklı şiddetler veririz. Müzikte de öyle. Çalarak ya da söyleyerek elde edilen sesin şiddetine **gürlük** denir. Gürlük, sesi oluşturan **titreşim dalgasının yüksekliğine** (genliğine) bağlıdır. En hafif ile en kuvvetli arasındaki bölge **gürlük terimleriyle** ifade edilir; bu terimler **gürlük işaretleriyle** gösterilir.' },
        { t: 'table', head: ['İşaret', 'Terim', 'Anlamı'], rows: [
          ['[[𝆏𝆏]] pp', 'Pianissimo', 'Çok hafif'],
          ['[[𝆏]] p', 'Piano', 'Hafif'],
          ['[[𝆐𝆏]] mp', 'Mezzo piano', 'Orta yumuşaklıkta'],
          ['[[𝆐𝆑]] mf', 'Mezzoforte', 'Orta kuvvette'],
          ['[[𝆑]] f', 'Forte', 'Kuvvetli']
        ] },
        { t: 'note', text: 'Kitapta bu bölümde **f, mf, p** tanıtılır; **pp** ve **mp** kitabın sonundaki sözlükte yer alır.' },
        { t: 'h', text: 'Puandorg (fermata, durgu)' },
        { t: 'sym', items: [['𝄐', 'Puandorg / Fermata / Durgu', 'Üzerine konan nota ya da sus genellikle **değerinin iki katı** uzatılır; esere göre daha uzun ya da kısa da tutulabilir.']] },
        { t: 'p', text: 'İlk puandorglu parça **Dalgaların Şarkısı**.' },
        { t: 'h', text: 'Sekizlik nota ve sus' },
        { t: 'p', text: 'Dörtlük değerdeki bir nota **iki eşit parçaya** bölünürse her parçaya **sekizlik** denir. Yani bir vuruşa iki sekizlik sığar. Yan yana sekizlikler çoğu zaman bir **kiriş** (çizgi) ile birleştirilerek yazılır.' },
        { t: 'sym', items: [['𝅘𝅥𝅮', 'Sekizlik nota', '½ vuruş'], ['𝄾', 'Sekizlik sus', '½ vuruş susulur']] },
        { t: 'tip', text: 'Sekizlikleri sayarken "**bir-ve iki-ve**" diye say: sayı vuruşun başına, "ve" ikinci yarısına düşer.' }
      ] },

    /* 7 */
    { id: 'desifre', title: 'Deşifre çalışması', short: 'Deşifre', src: 'Piyano Metodu 1 · Deşifre Çalışması (parçalar Enver Tufan\'ın)',
      blocks: [
        { t: 'p', text: '**Deşifre**, daha önce görmediğin bir notayı **ilk görüşte** çalmaktır. Kitapta birkaç bölümün sonunda deşifre parçaları vardır; hepsi Enver Tufan\'a aittir. Yönerge her seferinde aynıdır:' },
        { t: 'steps', items: [
          'Parçayı **kısa bir süre incele**: anahtar, ölçü rakamı, değiştirici işaretler, başlangıç pozisyonu ve parmak numaraları.',
          '**Sabit ve sakin** bir tempo seç (zor yere göre ayarla).',
          '**Nota ve ritim hatası yapmamaya** dikkat ederek **ilk seferde doğru** çalmaya çalış.',
          '**Takılma**: hata yapsan da tempoyu bozmadan devam et.',
          'Çaldığın notadan **sonraki notayı (notaları) önceden oku**: göz her zaman elden biraz öndedir.'
        ] },
        { t: 'tip', text: 'Deşifrede en büyük hata durup düzeltmektir. Ritmi korumak, tek tek doğru notalardan daha önemlidir; çünkü toplu çalarken ya da eşlikte durma şansı yoktur.' }
      ] },

    /* 8 */
    { id: 'bag', title: 'Cümle bağı, oktav ve uzatma bağı', short: 'Bağlar', src: 'Piyano Metodu 1 · Cümle Bağı · Oktav/Ottava · Ritardando · Uzatma Bağı (Elele)',
      blocks: [
        { t: 'h', text: 'Cümle bağı (ifade bağı)' },
        { t: 'p', text: 'Konuşurken düşüncelerimizi doğru ve etkili anlatmak için cümlelerde **başlangıç ve bitiş hissi** yaratırız; iki cümle arasında küçük bir **nefes** alırız, bazen bunu cümle içinde de yaparak daha küçük anlatımlar oluştururuz. Müzikte de farklı anlam taşıyan ses kümeleri birbirinden ayrılır. Bunu sağlayan işarete **cümle bağı** ya da **ifade bağı** denir.' },
        { t: 'ul', items: [
          'İfade bağı **iki ya da daha çok farklı notanın** üzerinden ya da altından çekilir.',
          'Doğru uygulama: el, bağlı grubun **ilk notasına düşürülür**, iyi bir legatoyla devam edilir ve bağ sonunda el **yavaşça kaldırılır**.'
        ] },
        { t: 'h', text: 'Oktav ve ottava' },
        { t: 'defs', defs: [
          ['Oktav', 'Sekiz perdeden oluşan diatonik dizinin **ilk ve son perdesi** arasındaki aralık (do–do).'],
          ['Ottava 8 (notanın üstünde)', 'Notada gösterilenden **bir oktav üstten** (tiz) çalınır.'],
          ['Ottava 8 (notanın altında)', 'Notada gösterilenden **bir oktav alttan** (pes) çalınır.'],
          ['Ritardando (rit.)', 'Temponun **giderek yavaşlatılması**.'],
          ['Sempre legato', '**Sürekli bağlı** çal.']
        ] },
        { t: 'h', text: 'Uzatma bağı' },
        { t: 'p', text: 'İki notanın **bağlanarak tek bir nota gibi** okunmasını ve çalınmasını sağlayan eğri çizgiye **uzatma bağı** denir. Uzatma bağı yalnız **adları ve sesleri aynı olan, birbirini izleyen** notalar arasında kullanılır. İkinci notanın değeri birinciye **eklenir**; ikinci nota **tekrar çalınmaz**.' },
        { t: 'staff', clef: 'treble', notes: [{ n: 'G4', kind: 'h', label: '2 vuruş' }, { n: 'G4', label: '+ 1 vuruş' }, { n: 'E4', label: '' }, { n: 'C4', kind: 'w', label: '4 vuruş' }], spacing: 52, caption: 'Bağlı iki Sol (ikilik + dörtlük) tek ses olarak 3 vuruş tutulur.' },
        { t: 'p', text: 'Noktalı dörtlük, kitapta uzatma bağıyla açıklanır: **dörtlük + sekizlik** bağlanırsa **bir buçuk vuruş** eder ve bu, noktalı dörtlüğe eşittir.' },
        { t: 'note', label: 'Kitaptaki çalışma', text: '**Elele** parçası önce **uzatma bağı olmadan** (yalnız birinci dizek verilir) çalınır, sonra orijinal hâli **uzatma bağlarına dikkat ederek** çalışılır. Böylece bağın ritmi nasıl değiştirdiği duyulur.' },
        { t: 'trap', text: 'Cümle bağı **farklı** notaları kapsar ve çalış biçimini (legato, nefes) gösterir. Uzatma bağı **aynı** iki notayı birleştirir ve **süreyi** uzatır. Görünüşleri benzer, işlevleri farklı.' }
      ] },

    /* 9 */
    { id: 'pozisyon', title: 'Yeni pozisyon: do pozisyonları', short: 'Yeni pozisyon', src: 'Piyano Metodu 1 · Yeni Pozisyon (Alman Halk Şarkısı) · dim.',
      blocks: [
        { t: 'p', text: 'Orta do konumundan sonra eller **dışarı doğru** açılır ve her el kendi **do pozisyonuna** yerleşir:' },
        { t: 'table', cls: 'k1', head: ['El', '5. parmak', 'Parmaklar sırasıyla', 'Yeni öğrenilen notalar'], rows: [
          ['Sol el', 'Orta do\'dan **bir oktav aşağıdaki do**', '5 do – 4 re – 3 mi – 2 fa – 1 sol', '**mi, re, do** (küçük oktav)'],
          ['Sağ el', 'Orta do\'dan **bir oktav yukarıdaki do**', '1 fa – 2 sol – 3 la – 4 si – 5 do', '**la, si, do** (birinci oktav)']
        ] },
        { t: 'kb', from: 'C3', to: 'C5', labels: 'white', mark: 'C4', nums: { C3: '5', D3: '4', E3: '3', F3: '2', G3: '1', F4: '1', G4: '2', A4: '3', B4: '4', C5: '5' }, caption: 'Yeni pozisyon: sol el Do–Sol (küçük oktav), sağ el Fa–Do. Orta do boşta kalır.' },
        { t: 'staff', clef: 'grand', notes: [{ n: 'C3', st: 'bass', cls: 'hi' }, { n: 'D3', st: 'bass', cls: 'hi' }, { n: 'E3', st: 'bass', cls: 'hi' }, { n: 'F3', st: 'bass' }, { n: 'G3', st: 'bass' }, { n: 'F4' }, { n: 'G4' }, { n: 'A4', cls: 'hi' }, { n: 'B4', cls: 'hi' }, { n: 'C5', cls: 'hi' }], spacing: 36, caption: 'Sarı notalar bu pozisyonda yeni öğrenilenler.' },
        { t: 'defs', defs: [['dim. (diminuendo)', 'Sesin **giderek hafiflemesi**.']] },
        { t: 'tip', text: 'Elleri yeni pozisyona taşırken parmak numarası–nota eşleşmesi değişir: artık **sağ el 1 = fa**, **sol el 1 = sol**. Parçaya başlamadan önce ilk notanın hangi parmakla çalındığına mutlaka bak.' }
      ] },

    /* 10 */
    { id: 'staccato', title: 'Staccato, dolap, parmak geçişi ve D.C. al Fine', short: 'Staccato', src: 'Piyano Metodu 1 · Staccato · Dolap · Parmak Değişimi · Vurgu, Crescendo · Parmak Numaraları · D.C. al Fine',
      blocks: [
        { t: 'h', text: 'Staccato' },
        { t: 'p', text: 'Notaların üstüne ya da altına konan **noktalar**, o notaların **kısa ve kesik** çalınacağını gösterir; böyle yazılan notalara **staccato** denir. Piyanoda notaları kısa ve kesik çalma biçimine **staccato çalma tekniği** denir. Staccato da legato gibi **temel çalma tekniklerinden** biridir.' },
        { t: 'h', text: 'Dolap' },
        { t: 'p', text: 'Tekrarlanan bir bölümün sonu iki seferde farklıysa **dolap** işareti kullanılır. Parça çalınırken önce **1. dolaptaki** notalar çalınır; tekrarda **1. dolap bütünüyle atlanır** ve **2. dolaptaki** notalar çalınır.' },
        { t: 'h', text: 'Parmak değişimi (parmak geçişi)' },
        { t: 'p', text: 'Tonal müzikte **tonikten (temel sesten) toniğe** sıralanan ses grubuna **dizi** denir. Beş parmak yetmeyeceği için dizi çalarken **parmak değişikliği** gerekir:' },
        { t: 'ul', items: [
          'Çıkarken (sağ el): **başparmak, 3. veya 4. parmaktan sonra avuç içinden (alttan) getirilir**.',
          'İnerken: tersi; **3. veya 4. parmak başparmağın üzerinden** kaydırılır.',
          'Piyano çalmanın temel ilkesi: bir notayı çalarken **bir sonrakine önceden hazır** olmak. Bu yüzden geçiş, **geçişten önceki nota çalınırken başlar**.',
          'Örnek: sağ elin 3. parmağı **mi**yi çalarken başparmak avuç içinden kaydırılır ve **fa** tuşunun üzerinde hazır bekler.'
        ] },
        { t: 'kb', from: 'C4', to: 'C5', labels: 'white', nums: { C4: '1', D4: '2', E4: '3', F4: '1', G4: '2', A4: '3', B4: '4', C5: '5' }, caption: 'Do majör dizi, sağ el: 1-2-3, başparmak altından geçer, 1-2-3-4-5.' },
        { t: 'h', text: 'Vurgu ve gürlük değişimi' },
        { t: 'table', head: ['İşaret', 'Ad', 'Anlamı'], rows: [
          ['>', 'Vurgu (aksan)', 'Üstüne ya da altına geldiği nota **vurgulu** çalınır.'],
          ['[[𝆒]] cresc.', 'Crescendo', 'Gürlük **giderek artar**.'],
          ['[[𝆓]] decresc.', 'Decrescendo', 'Gürlük **giderek azalır** (dim. ile aynı anlam).']
        ] },
        { t: 'h', text: 'Parmak numaraları neden önemli?' },
        { t: 'p', text: 'Parmak numaralarına dikkat ederek çalışmak piyanonun **her düzeyinde** vazgeçilmezdir. Parmak numaraları bir parçanın:' },
        { t: 'ul', items: ['**cümlelerinin** doğru ifade edilmesinde,', 'karşılaşılan **teknik zorlukların** aşılmasında,', 'kendi **temposunda** doğal ve estetik çalınmasında çok önemli görev yapar.'] },
        { t: 'p', text: 'Bu yüzden besteci ya da editörün yazdığı, ya da öğretmenin sonradan değiştirdiği parmak numaralarına özen gösterilir.' },
        { t: 'h', text: 'D.C. al Fine' },
        { t: 'p', text: '**D.C. al Fine** (Da Capo al Fine): eserin **başına dönülür**, varsa **tekrar işaretlerine uyulmadan** çalınır ve **Fine** yazan yerde bitirilir. Kitapta bu işaret **Dolaptaki Sır** parçasında öğretilir. (**Dal Segno al Fine**\'da başa değil **segno [[𝄋]]** işaretine dönülür.)' },
        { t: 'trap', text: 'D.C. al Fine\'da dönüşte tekrar işaretleri **yok sayılır**; dolaplı bir bölüm varsa doğrudan 2. dolap (ya da Fine) yolu izlenir.' }
      ] },

    /* 11 */
    { id: 'diziler', title: 'İki oktav diziler, tempo terimleri, onaltılık ve non legato', short: 'Diziler ve tempo', src: 'Piyano Metodu 1 · İki Oktav İçerisinde Ters ve Koşut Hareketli Diziler · Allegro · Onaltılık · Lento · Allegretto · Non legato',
      blocks: [
        { t: 'h', text: 'İki oktavlık diziler' },
        { t: 'p', text: 'Orta do\'dan başlanarak klavyedeki seslerin **iki oktavlık çıkıcı ve inici** dizilişleri parmak numaralarıyla çalışılır. Kitapta iki hareket biçimi vardır:' },
        { t: 'defs', defs: [
          ['Ters hareket', 'Eller orta do\'dan **zıt yönlere** gider: sağ el çıkarken sol el iner. Parmak numaraları iki elde **aynıdır**, bu yüzden başlangıç için kolaydır.'],
          ['Koşut (paralel) hareket', 'İki el **aynı yöne** gider. Parmak geçişleri iki elde farklı yerlere düştüğü için daha zordur.']
        ] },
        { t: 'p', text: 'Do majör iki oktav için yaygın parmak düzeni: **sağ el çıkıcı 1-2-3 / 1-2-3-4 / 1-2-3 / 1-2-3-4-5**; **sol el çıkıcı 5-4-3-2-1 / 3-2-1 / 4-3-2-1 / 3-2-1**. Başparmak geçişleri hep 3. ve 4. parmaklardan sonra gelir.' },
        { t: 'h', text: 'Tempo terimleri' },
        { t: 'table', head: ['Terim', 'Anlamı', 'Kitapta'], rows: [
          ['Lento', 'Ağır', '—'],
          ['Andante', 'Yürür adımla, orta ağır', 'Dolaptaki Sır'],
          ['Andantino', 'Andante\'den biraz hızlıca (MM ≈ 72)', 'Purcell'],
          ['Moderato', 'Orta hızda, ılımlı', 'Deşifre parçaları'],
          ['Allegretto', 'Allegro ile andante arası, çabukça', '—'],
          ['Allegro', 'Hızlı ve çevik', 'Suzuki parçası'],
          ['Vivace', 'Hızlı, canlı (allegro\'dan canlı)', 'Sözlük']
        ] },
        { t: 'tip', text: 'Ağırdan hızlıya: **Lento → Andante → Andantino → Moderato → Allegretto → Allegro → Vivace**. *Allegro moderato* "allegro kadar hızlı değil", *Andante moderato* "andante kadar ağır değil" demektir.' },
        { t: 'h', text: 'Onaltılık nota' },
        { t: 'p', text: 'Dörtlük değerdeki bir nota **dört eşit parçaya** bölünürse her parçaya **onaltılık** denir. Bir vuruşa dört onaltılık sığar ("**1-e-ve-a**" diye sayılır). İlk onaltılıklı parça Richard Krentzlin\'in **Neşeli Yürüyüş**ü (marş temposunda).' },
        { t: 'sym', items: [['𝅘𝅥𝅯', 'Onaltılık nota', '¼ vuruş'], ['𝄿', 'Onaltılık sus', '¼ vuruş susulur']] },
        { t: 'h', text: 'Non legato' },
        { t: 'p', text: '**Non legato** "legato değil" demektir: **legato ile staccato arasında** bir çalış. Notalar birbirinden hafifçe ayrılır ama staccato kadar kısa değildir. Yazımda notaların üstüne kısa yatay çizgiler (tenuto) konarak gösterilebilir. Özellikle **barok dönem** eserlerinde kullanılır; kitapta Henry Purcell\'in **Andantino**\'sunda bağlı olmayan notalara uygulanır.' }
      ] },

    /* 12 */
    { id: 'pedal', title: 'Pedallar, senkop pedal, kadanslar ve mordan', short: 'Pedal ve kadans', src: 'Piyano Metodu 1 · Piyanoda Pedallar · Senkop Pedal ve Kadanslar · Una corda · Mordan',
      blocks: [
        { t: 'p', text: 'Piyanoda seslerin özelliklerini değiştirmek ve ses üretimine katkıda bulunmak için **pedal** denen mekanizma geliştirilmiştir. Piyanolarda genellikle **üç pedal** vardır:' },
        { t: 'table', cls: 'k1', head: ['Pedal', 'Adı', 'Ne yapar?'], rows: [
          ['Sağ', 'Uzatma pedalı (*sustaining*)', 'Bütün susturucuları tellerden kaldırır; basılan sesler parmak kalksa da çınlamaya devam eder.'],
          ['Sol', 'Susturucu pedal (*una corda*)', 'Sesi hafifletir ve rengini matlaştırır (aşağıda).'],
          ['Orta', 'Sostenuto pedalı', 'Kuyruklu piyanoda yalnız **pedala basıldığı anda basılı olan** sesleri uzatır. Duvar piyanosunda çekiçlerle teller arasına **keçe** indirip sesi kısar; bu yüzden **gece pedalı** da denir.']
        ] },
        { t: 'h', text: 'Pedal kullanırken' },
        { t: 'ul', items: ['**Topuk yerden ayrılmaz.**', 'Ayak tabanı, **başparmağa yakın noktasıyla** pedalı sürekli hisseder.', 'Pedal hareketi **bilekten** yapılır.'] },
        { t: 'sym', items: [['𝆮', 'Pedal', 'Sağ pedala bas.'], ['𝆯', 'Pedal bırak', 'Sağ pedalı kaldır.']] },
        { t: 'h', text: 'Senkop pedal' },
        { t: 'p', text: '**Sesten sonra pedal** kullanımı, uzatma pedalının en çok kullanılan biçimidir; buna **senkop pedal** denir:' },
        { t: 'steps', items: [
          'Tuşa (akora) bas.',
          'Ses duyulduktan **hemen sonra** pedala bas.',
          'Yeni akora geçerken: yeni tuşa basarken pedalı **kaldır**, ses gelince pedala **yeniden bas**.'
        ] },
        { t: 'ul', items: [
          'Sesi **uzatır** ve uzayan sesin **armoniklerinin** birlikte tınlamasını sağlar; sesin **hacmi genişler**.',
          'Elle bağlanması **olanaksız** sesleri bağlı çalmaya yardım eder.',
          'Seslerin birbirine karışmaması için pedal **her armoni değişiminden sonra hızlı ve dikkatli** yenilenir.'
        ] },
        { t: 'h', text: 'Kadanslar (Do majör)' },
        { t: 'p', text: 'Kitap senkop pedali Do majör kadanslar üzerinde çalıştırır (ağır tempoda, parmak numaralarına dikkat ederek). Akorlar: **I = Do–Mi–Sol**, **IV = Fa–La–Do**, **V = Sol–Si–Re**.' },
        { t: 'table', cls: 'k1', head: ['Kadans', 'Akorlar', 'Karakter'], rows: [
          ['Plagal kadans', 'IV – I', '"Amin" kadansı; yumuşak bitiş'],
          ['Otantik kadans', 'V – I', 'Güçlü, kesin bitiş'],
          ['Tam kadans', 'I – IV – V – I', 'Tonu tam olarak kurar']
        ] },
        { t: 'staff', clef: 'treble', notes: [{ n: 'C4', label: 'I' }, { n: 'F4', label: 'IV' }, { n: 'G4', label: 'V' }, { n: 'C5', label: 'I' }], spacing: 54, caption: 'Tam kadansın temel sesleri: Do – Fa – Sol – Do (tonik, alt dominant, dominant, tonik).' },
        { t: 'h', text: 'Sol pedal: una corda / tre corde' },
        { t: 'p', text: '**Konsol (duvar) piyanosunda** sol pedal çekiçleri **ileri** getirir; çekiç tele daha yakından vurur. **Kuyruklu piyanoda** klavye **soldan sağa kayar** ve çekiçlerin karşısına (üç tel yerine) **yalnız bir tel** (*una corda*) gelir. Duvar piyanosunda çekiç yeterince hızlanamadığı, kuyrukluda tek tele vurduğu için ses **hafif ve mat** olur.' },
        { t: 'defs', defs: [['una corda', '"Tek tel": sol pedala bas.'], ['tre corde', '"Üç tel": sol pedalı bırak.']] },
        { t: 'p', text: 'Kitapta bu bölüm Cornelius Gurlitt\'in bir *Moderato*\'su ile çalışılır.' },
        { t: 'h', text: 'Mordan' },
        { t: 'p', text: '**Mordan**, asıl sesin **üst ya da alt komşu sesle** yapılan ve asıl sesi önemlendirmeyi (belirginleştirmeyi) amaçlayan süslemedir.' },
        { t: 'table', head: ['Tür', 'Çalınışı (asıl ses Do ise)'], rows: [['Üst mordan', 'Do – **Re** – Do (hızla)'], ['Alt mordan', 'Do – **Si** – Do (hızla)']] },
        { t: 'p', text: 'Kitapta mordan Johann Heinrich Buttstedt\'in bir parçasıyla uygulanır.' }
      ] },

    /* 13 */
    { id: 'repertuvar', title: 'Kitaptaki repertuvar ve Bizden Ezgiler', short: 'Repertuvar', src: 'Piyano Metodu 1 · İçindekiler · Bizden Ezgiler – Piyano İçin 17 Parça',
      blocks: [
        { t: 'p', text: 'Kitaptaki eserler piyano literatüründen, **basamak sistemi (level–grade)** dikkate alınarak seçilmiştir. Farklı dönemlerden, birbirine yakın zorlukta eserler yan yana konmuş ve **etütlerle** desteklenmiştir. Sonatinler tanınsın diye **bütün bölümleriyle** verilmiştir; zor bölümün hangi düzeyde çaldırılacağı öğretmene bırakılmıştır. **Dizi ve arpej** çalışmaları ayrı bir fasikül olarak sunulmuştur.' },
        { t: 'h', text: 'Konulara göre parçalar' },
        { t: 'table', head: ['Bölüm (yaklaşık)', 'Parçalar'], rows: [
          ['Legato', 'Küçük Balerin · Misafir – Şikâyet · Dönme Dolap – Gezinti · Dalgaların Şarkısı · Yarım Elma – Haydi Oyuna'],
          ['Cümle bağı, uzatma bağı', 'Göçmen Kuşlar · Elele · Alman Halk Şarkısı – Kuş Uçar · Ayna – Yürüyüş · İlkbahar – Diyalog'],
          ['Staccato, parmak geçişi', 'Yağmur – Gölge · Çekirge – Haydi Oyuna · Merdiven · Eko – Yansıma · Dolaptaki Sır – Dans · Gün Ağarırken'],
          ['Diziler, tempo', 'Açılım · Kuklanın Dansı · Neşeli Yürüyüş · Sessiz Değişim'],
          ['Pedal ve repertuvar', 'Saraydan Kız Kaçırma Operası\'ndan (Mozart) · Bez Bebeğin Şikâyeti · Tema ve Varyasyon · Orda Bir Köy Var Uzakta · Eski Fransız Şarkısı (Çaykovski) · Eski Güzel Günler · İskoç Halk Şarkısı']
        ] },
        { t: 'h', text: 'Besteciler' },
        { t: 'table', head: ['Dönem', 'Besteciler'], rows: [
          ['Barok', 'Henry Purcell · Johann Krieger · Johann Heinrich Buttstedt · Johann Sebastian Bach'],
          ['Klasik', 'Wolfgang Amadeus Mozart · Anton Diabelli'],
          ['Pedagojik (XIX.–XX. yy)', 'Ferdinand Beyer · Friedrich Burgmüller · Jean Baptiste Duvernoy · Cornelius Gurlitt · Henry Lemoine · Oscar Beringer · Richard Krentzlin · Alexander Burkard'],
          ['Romantik', 'Pyotr İlyiç Çaykovski'],
          ['XX. yüzyıl', 'Dmitri Kabalevsky · Shinichi Suzuki · Maxwell Eckstein']
        ] },
        { t: 'h', text: 'Bizden Ezgiler – Piyano İçin 17 Parça' },
        { t: 'p', text: 'Kitabın sonunda **Enver Tufan**\'ın makamsal parçaları yer alır. Amaç hem kitaptaki davranışları desteklemek hem de **geleneksel müziğimizin yapı taşı olan makam ve ritimleri** kullanarak Türk müziğini çağdaş anlamda tanıtmaktır. Parçalardan bazıları: **Altın Hızma** (Mülayim), **Göksu\'da Gezinti**, **Kına Eğlencesi**, **Bahar Yağmuru**, **Kerkük Türküsü** (düzenleme).' },
        { t: 'tip', text: 'Bu parçalarda *dim. e poco rit.* (hafifleyerek ve biraz yavaşlayarak), *Canlı ve kararlı*, *Sakin ve hüzünlü* gibi Türkçe ve İtalyanca terimler birlikte kullanılır.' }
      ] },

    /* 14 */
    { id: 'czerny', title: 'Czerny Op. 599: Başlangıç için pratik metot', short: 'Czerny 599', src: 'Carl Czerny · Practical Method for Beginners on the Pianoforte, Op. 599 (Schirmer, ed. G. Buonamici)',
      blocks: [
        { t: 'p', text: '**Carl Czerny** (1791–1857), Beethoven\'ın öğrencisi ve Liszt\'in öğretmeni olan Avusturyalı piyanist ve pedagogdur; binlerce etüt yazmıştır. **Op. 599**, sıfırdan başlayan öğrenci için yazılmış **100 kısa alıştırmalık** bir metottur. Ders kitabı olarak Schirmer baskısı kullanılıyor: düzenleme ve parmak numaraları **Giuseppe Buonamici**\'nin.' },
        { t: 'table', cls: 'k1', head: ['No.', 'Bölüm', 'Ne kazandırır?'], rows: [
          ['1–10', 'First Lessons in learning the Notes', 'Notaları öğrenme: iki el, beş parmak konumunda tek tek ve birlikte.'],
          ['11–26', 'Five-finger Exercises with quiet Hand', 'El **sakin** dururken parmak bağımsızlığı (el kaymadan beş parmak).'],
          ['27–35', 'Exceeding the Compass of an Octave, only on white Keys', 'Oktavı aşan alıştırmalar; yalnız beyaz tuşlar, parmak geçişi.'],
          ['36–38', 'With Sharps and Flats', 'Diyez ve bemollü alıştırmalar.'],
          ['39–57', 'In other easy Keys', 'Kolay tonlarda (Sol, Fa, Re majör vb.) alıştırmalar.'],
          ['58–80', 'For the Attainment of Freedom and Agility', 'Serbestlik ve çeviklik: hız, onaltılıklar, el değiştirme.'],
          ['81–100', 'With Appoggiaturas and other useful Embellishments', 'Apojiyatür, tril ve diğer süslemeler.']
        ] },
        { t: 'h', text: 'Kitaptaki çalışma notları' },
        { t: 'ul', items: [
          'Birçok alıştırmanın altında "**Also practice a semitone higher / lower**" notu vardır: alıştırmayı **aynı parmak numarasıyla yarım ses yukarı ya da aşağı aktararak** (transpoze) da çal.',
          'Beş parmak alıştırmalarında: "Ölçünün **ilk notasını tut**" uyarısı vardır: bir parmak sesi tutarken diğerleri çalar; bu, parmak bağımsızlığını geliştirir.',
          'Tril yazılan yerlerde nasıl çalınacağı (hangi notadan başlanıp kaç vuruş) dipnotta açılır.'
        ] },
        { t: 'h', text: 'Czerny nasıl çalışılır?' },
        { t: 'steps', items: [
          'Önce **eller ayrı**, ağır tempoda, parmak numaralarına harfiyen uyarak.',
          'Sonra **eller birlikte**, yine ağır; metronomla.',
          'Sağ elde (genellikle melodi/teknik) **eşit ses ve eşit ritim** hedeflenir: her nota aynı gürlükte.',
          'Sol el eşlik ediyorsa sağ elden **daha hafif** çalınır.',
          'Temiz çıktıktan sonra tempo **küçük adımlarla** artırılır; dipnot varsa transpoze edilir.'
        ] },
        { t: 'tip', text: 'Tufan kitabıyla birlikte düşün: Tufan müzikal parçalar ve konu bilgisi verir, Czerny **teknik** yükü taşır. İkisi aynı haftada paralel ilerler.' }
      ] },

    /* 15 */
    { id: 'sozluk', title: 'Terimler sözlüğü', short: 'Sözlük', src: 'Piyano Metodu 1 · Kitap İçerisinde Geçen Terimlere İlişkin Açıklamalı Sözlük',
      blocks: [
        { t: 'p', text: 'Kitabın sonundaki açıklamalı sözlük. Sınavda terim sorusu gelirse buradan gelir.' },
        { t: 'h', text: 'Tempo ve karakter' },
        { t: 'defs', defs: [
          ['Agitato', 'Atılgan, tez canlı bir deyişle.'],
          ['Allegro assai', 'Canlı ve kıvrak bir çabuklukla.'],
          ['Andante con moto', 'Andante\'ye göre biraz daha canlı.'],
          ['Andante moderato', 'Ilımlı, orta derecede ağır.'],
          ['Andantino', 'Andante\'den biraz hızlıca tempo (metronom ≈ 72).'],
          ['Animato', 'Canlı, hareketli.'],
          ['Burlesca', 'Alaycı ve şakacı karakterde.'],
          ['Cantabile', 'Şarkı söyler gibi.'],
          ['Cantando', 'Şarkı gibi, belirterek.'],
          ['Con brio', 'Parlaklıkla.'],
          ['Dolce', 'Tatlı, yumuşak.'],
          ['Espressivo', 'Duygulu, etkili, dokunaklı.'],
          ['Leggiero', 'Hafif ve çabuk.'],
          ['Misterioso', 'Gizemli.'],
          ['Moderato', 'Orta hızda, ılımlı. *Allegro moderato*: allegro kadar hızlı değil; *andante moderato*: andante kadar ağır değil.'],
          ['Pesante', 'Ağırbaşlı, ciddi; eserin duygusal ağırlığını vurgulayarak.'],
          ['Risoluto', 'Kararlı, ısrarlı.'],
          ['Scherzando', 'Şakacı bir deyişle.'],
          ['Tranquillo', 'Sakin, dinlendirici.'],
          ['Vivace', 'Hızlı, canlı (allegro\'dan daha canlı).']
        ] },
        { t: 'h', text: 'Tempo değişimi ve gürlük' },
        { t: 'defs', defs: [
          ['Ritardando (rit.)', 'Temponun giderek ağırlaşması, hızının azalması.'],
          ['Rallentando (rall.)', 'Seslendirme sırasında geçici olarak ağırlaşma.'],
          ['Ritenuto', 'Ağırlaşarak, tutarak.'],
          ['Crescendo (cresc.)', 'Sesin gürlüğünün giderek arttığını belirtir.'],
          ['Decrescendo (decresc.)', 'Sesin gürlüğünün giderek hafiflediğini belirtir.'],
          ['Diminuendo (dim.)', 'Sesin giderek hafiflemesi.'],
          ['Forte (f)', 'Güçlü, gür ses.'],
          ['Mezzo forte (mf)', 'Orta gürlükte.'],
          ['Mezzo piano (mp)', 'Orta yumuşaklıkta.'],
          ['Piano (p)', 'Hafif sesle, yumuşatarak.'],
          ['Pianissimo (pp)', 'Çok hafif sesle, olabildiğince yumuşatarak.'],
          ['Sforzando (sf)', 'Ses gürlüğünü bir anda artırma.'],
          ['Subito', 'Birden, aniden.'],
          ['Aksan (>)', 'Bir sesin ya da akorun vurgulanması.']
        ] },
        { t: 'h', text: 'Çalış biçimi, yapı ve işaretler' },
        { t: 'defs', defs: [
          ['Legato', 'Notaların birbirine bağlanarak seslendirilmesi.'],
          ['Sempre legato', 'Sürekli bağlı.'],
          ['Staccato', 'Seslerin kısa ve kesik çalınması.'],
          ['Uzatma bağı', 'Adları ve sesleri aynı, birbirini izleyen notaları tek nota gibi okutan eğri çizgi.'],
          ['Diyez / Bemol / Natürel', 'Yarım ses tizleştirir / pesleştirir / eski hâline getirir.'],
          ['Puandorg / fermata', 'Durgu; genellikle değerin iki katı uzatma.'],
          ['Ottava (8)', 'Üstte: bir oktav tiz; altta: bir oktav pes çal.'],
          ['Da Capo al Fine', 'Başa dön, tekrarsız çal, Fine\'da bitir. *Dal Segno al Fine*: segno işaretine dön.'],
          ['Coda', 'Eserin sonunda yer alan özet parça.'],
          ['Grupetto', 'Ana notanın üstündeki ve altındaki notalarla yapılan süsleme.'],
          ['Mordan', 'Asıl sesin üst ya da alt komşu sesle yapılan, belirginleştirme amaçlı süslemesi.'],
          ['Varyasyon (çeşitleme)', 'Bir müzik fikrinin (temanın) melodik, armonik, ritmik ya da kontrpuantal değişikliklerle art arda sunulduğu form.'],
          ['Ped. simile', 'Pedal aynı şekilde kullanılmaya devam edilir.'],
          ['Sopra / Sotto', 'Çapraz el kullanımında hangi elin **üstten** / **alttan** geçeceği.'],
          ['Una corda / Tre corde', 'Sol pedala bas (tek tel, sürdin) / sol pedalı bırak (üç tel).']
        ] }
      ] }
  ]
});
