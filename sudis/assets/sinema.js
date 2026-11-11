/* Sudis · 4. ders: Edebiyat ve Sinema I (Doç. Dr. Alper Keleş), Ders 1–4 sunumları.
   Odak: sinema kuramları ve kuramcılar. Biçim: content.js blokları + questions.js soru yapısı. */
(function () {
  var S = {
    id: 'sinema', no: 4, title: 'Edebiyat ve Sinema', author: 'Doç. Dr. Alper Keleş',
    src: 'Edebiyat ve Sinema I · Ders 1–4 sunumları',
    desc: 'Sinemanın doğuşu, Benjamin ve sinema kuramları: biçimcilik, gerçekçilik, Mitry, Metz ve auteur.',
    traps: [
      { t: 'İlk gösterim **1895**, Lumière kardeşler (Fransa). İstanbul’da ilk gösterim **1896**.', topic: 'dogus' },
      { t: 'Méliès’in **Aya Seyahat (1902)**: hem bilinen **ilk bilim kurgu** hem **ilk uyarlama** (Jules Verne ve H. G. Wells).', topic: 'dogus' },
      { t: 'Lumière = **gerçeklik/gözlem/belgesel** çizgisi · Méliès = **hayal gücü/biçim/öykülü film** çizgisi. Bu ikilik sonradan **gerçekçi** ve **biçimci** kuramlara dönüşür.', topic: 'dogus' },
      { t: 'Benjamin: teknik yeniden üretimle sanat eseri **aurasını kaybeder**. Kolektif estetik özgürleşme imkânı verir ama **faşizm gibi siyasi araçsallaştırma** tehlikesi de taşır.', topic: 'benjamin' },
      { t: '**Kuleshov** yönetmen olarak değil, **atölye yöneticisi / hoca** olarak geçer (Eisenstein ve Pudovkin’in hocası). Kavramı: **yaratıcı coğrafya**.', topic: 'bicimcilik' },
      { t: '**Münsterberg** = akademik çalışan **ilk** kuramcı (1916, The Photoplay). Münsterberg ve **Arnheim** sinemayı **Gestalt psikolojisi** ile açıklar.', topic: 'bicimciler' },
      { t: 'Eisenstein: iki görüntü yan yana gelince **üçüncü bir anlam** doğar. Montajı **propaganda** aracı olarak kullanır, Pavlov’un **çağrışım** fikrinden yararlanır.', topic: 'bicimciler' },
      { t: 'Bazin kurguya **tamamen** karşı değildir: **gerçeklikle oynayan** kurguya karşıdır. Doğal bağlayıcı kurguyu kabul eder; tercihi **uzun plan + alan derinliği**.', topic: 'bazin' },
      { t: 'Gerçekçilere göre yönetmen gerçeği **dönüştürmez**, gerçeklikten **seçim yapar**. Biçimcilere göre bu seçim **özneldir** ve montajla gerçeklik **yeniden düzenlenir**.', topic: 'gercekcilik' },
      { t: 'Kracauer Frankfurt Okulu’ndan **sayılmaz** ama ona **yakındır** (Horkheimer, Adorno, Benjamin). Film = **toplumun** yansıması, bireyin değil.', topic: 'kracauer' },
      { t: 'Mitry: görüntüde **gösteren ile gösterilen aynıdır**, sözlü dilde sözcük kavramın yerini tutar (sandalye örneği).', topic: 'mitry' },
      { t: 'Mitry’nin özdeyişi: **Roman kendisini dünyada kuran bir anlatıdır; sinema kendini bir anlatıda kuran bir dünyadır.**', topic: 'mitry' },
      { t: 'Metz, Mitry’yi **ilk dönem kuramlarının finali** sayar. Kavramları: **temel anlam / yan anlam**; anlam **film türüne** göre değişir (rıhtım: gangster filmi ↔ müzikal).', topic: 'metz' }
    ],
    topics: [
      { id: 'harita', title: 'Kuram haritası: önce bunu oku', blocks: [
        { t: 'p', text: 'Dört dersin omurgası: sinema doğduğu andan itibaren **iki eğilim** taşır (Lumière ↔ Méliès). Kuramlar bu ikiliği tartışır: **biçimciler** sinemanın gerçeği **dönüştürme** gücünü, **gerçekçiler** gerçeği **ortaya çıkarma** gücünü öne çıkarır. **Çağdaş kuramcılar** (Mitry, Metz) ikisini **sentezler**.' },
        { t: 'table', head: ['Akım', 'Kuramcılar', 'Temel fikir', 'Anahtar kavram'], rows: [
          ['**Biçimcilik** (Rus biçimciliği)', 'Münsterberg, Arnheim, Eisenstein, Balázs (+ Kuleshov)', 'Sanat eseri gerçekliği yansıtmakla yükümlü değil; gerçekliği **farklı algılatır**', '**Montaj (kurgu)**, yaratıcı coğrafya, üçüncü anlam, Gestalt'],
          ['**Gerçekçilik**', 'Bazin, Kracauer', 'Sinema gerçeği **müdahalesiz** sunmalı; yönetmen **seçer**, dönüştürmez', '**Uzun plan, alan derinliği**, plan-sekans, varlıkbilim, maddi süreklilik'],
          ['**Çağdaş kuramlar**', 'Mitry, Metz', 'Biçimci + gerçekçi **sentez**, diyalektik düşünce; **göstergebilim** (Saussure)', 'Kadraj, gösteren/gösterilen, temel anlam / yan anlam'],
          ['**Auteur**', '—', 'Yönetmenin kendine has **stili** ve bireysel yaratıcılığı', 'Net bir çözümleme yöntemi yok']] },
        { t: 'h', text: 'Tek tabloda biçimci ↔ gerçekçi' },
        { t: 'table', head: ['Soru', 'Biçimciler', 'Gerçekçiler'], rows: [
          ['Sinemanın gücü nerede?', 'Gerçekliği **dönüştürmede**, kameranın ve montajın olanaklarında', 'Gerçeği **ortaya çıkarmada**; gerçeklik çok katmanlı, kamera katmanları açar'],
          ['Yönetmen ne yapar?', 'Montajla gerçekliği **yeniden düzenler**; seçimi **özneldir**', 'Gerçeği dönüştürmez, gerçeklikten **seçim yapar**'],
          ['Temel teknik', '**Montaj** (kurgu)', '**Uzun plan** ve **alan derinliği**'],
          ['Dramatik yapı', 'Görüntülerin **birbiriyle etkileşimi**', 'Doğadaki **bütünlük ve sürekliliğin** perdeye aktarılması'],
          ['İzleyici', 'Kurgu izleyiciyi **yönlendirir** (psikolojik rehberlik, tek anlam)', 'İzleyici **aktif**, anlamı kendisi kurar, **seçme şansı** vardır'],
          ['Kökü', 'Méliès: hayal gücü, öykülü film', 'Lumière, Flaherty: gözlem, belgesel']] },
        { t: 'tip', text: 'Sınavda bir kuramcı adı görünce önce **hangi akımda** olduğunu, sonra **hangi kavramla** anıldığını yaz: “Bazin → gerçekçi → uzun plan, alan derinliği, Sinema Nedir?”.' }
      ] },
      { id: 'kimkim', title: 'Kim kimdir? Kuramcı kartları', blocks: [
        { t: 'table', head: ['Kuramcı', 'Akım', 'Eser (sunumdaki tarih)', 'Akılda kalacak fikir'], rows: [
          ['Walter Benjamin', 'Sanat kuramı (sinema öncesi tartışma)', 'Das Kunstwerk im Zeitalter seiner technischen Reproduzierbarkeit', 'Teknik yeniden üretim, **aura kaybı**, kolektif algı'],
          ['Lev Kuleshov', 'Biçimci (Rus)', 'Atölye deneyleri', '**Yaratıcı coğrafya**; montaj izleyicinin psikolojik rehberliğini kontrol eder'],
          ['Hugo Münsterberg', 'Biçimci', 'The Photoplay: A Psychologic Study (1916)', '**İlk akademik** kuramcı, **Gestalt**'],
          ['Rudolf Arnheim', 'Biçimci', 'Film as Art (1957)', 'İnsanlık ilk kez bir sanatın **doğuşuna tanık**; yönetmen kameranın niteliklerini kullanmalı'],
          ['Sergei Eisenstein', 'Biçimci (Rus)', 'Grev (1924), Potemkin Zırhlısı', '**Montaj sinemasının temel taşı**, **üçüncü terim**, propaganda, Pavlov çağrışımları'],
          ['Béla Balázs', 'Biçimci', 'Theory of the Film (1930)', 'Sinema tiyatrodan ayrılıp **kendi diline** kavuşan bağımsız sanat'],
          ['André Bazin', 'Gerçekçi', 'Sinema Nedir?; Fotoğraf Görüntüsünün Varlıkbilimi', '**Varlıkbilim**, fotoğrafın **nesnelliği**, uzun plan, alan derinliği; Fransız Yeni Dalga’nın kurucusu'],
          ['Siegfried Kracauer', 'Gerçekçi', 'Theory of Film (1960); Caligari’den Hitler’e', 'Film = **toplumun** yansıması; film **maddi**, roman **zihinsel** süreklilik'],
          ['Jean Mitry', 'Çağdaş (sentez)', 'Esthétique et psychologie du cinéma (60’lar)', 'İmgeler arası ve imge–söz ilişkileri; **kadraj**; gösteren = gösterilen'],
          ['Christian Metz', 'Çağdaş (göstergebilim)', 'Language and Cinema (1964)', '**Temel anlam / yan anlam**, film türüne göre anlam']] },
        { t: 'low', text: 'Tarih notu: sunumdaki yıllar sınav için esastır. Gerçek yayın tarihleri bazen farklıdır: Potemkin Zırhlısı 1925’te gösterildi; Arnheim’ın kitabı Almanca 1932’de (Film als Kunst) çıktı, 1957 İngilizce baskısıdır; Metz’in Langage et cinéma kitabı 1971, ünlü makalesi 1964’tür.' }
      ] },
      { id: 'dogus', title: 'Sinemanın doğuşu ve iki eğilim', blocks: [
        { t: 'ul', items: [
          '**1895:** Fransız **Lumière kardeşler** ilk gösterimi yapar: Trenin La Ciotat Garına Gelişi, Fabrikadan Çıkan İşçiler, Mama Yiyen Bebek. İstanbul’da ilk gösterim **1896**.',
          'Öncü aygıtlar: **kamera obscura**, **zoetrop** ve Lumière’lerin **sinematograf**ı.',
          '**Georges Méliès, Le Voyage dans la Lune (Aya Seyahat, 1902):** bilinen ilk **bilim kurgu** filmi; gündelik yaşam görüntülerinden farklı olarak **kurmaca** anlatım katar. Aynı zamanda **ilk uyarlama** (Jules Verne ve H. G. Wells romanlarından).']},
        { t: 'h', text: 'Gerçeklik ve kurgu: iki eğilim' },
        { t: 'table', head: ['Eğilim', 'Temsilci', 'Ne yapar?'], rows: [
          ['1. Gerçekliğin aktarılması', 'Lumière, **Flaherty** (Nanook of the North, 1922)', 'Sinemayı **gözlemciliğe**, dış dünyayı olduğu gibi aktaran **belgesellere** yönlendirir'],
          ['2. Biçimci, hayal gücüne yönelik', '**Méliès**', 'Sinemayı sanatçının **hayal gücüne** dayandırır, **öykülü filmlerin** önünü açar']] },
        { t: 'tip', text: 'Bu ikilik dersin geri kalanının anahtarı: 1. eğilim → **gerçekçi kuram** (Bazin, Kracauer), 2. eğilim → **biçimci kuram** (Eisenstein, Arnheim…).' }
      ] },
      { id: 'benjamin', title: 'Sanat ve sinema: Walter Benjamin', blocks: [
        { t: 'p', text: 'Sinemanın doğuşuyla iki tartışma başlar: sinema **sanat eseri mi**, ve sinema **bilimsel açıdan** nasıl eleştirilip nitelenmeli?' },
        { t: 'p', text: '**Walter Benjamin**, Das Kunstwerk im Zeitalter seiner technischen Reproduzierbarkeit (Tekniğin Olanaklarıyla Yeniden Üretilebildiği Çağda Sanat Yapıtı, 1935/36) makalesinde sanat eserinin teknik üretim çağında **yeniden üretilebilir** hâle gelmesini inceler.' },
        { t: 'ul', items: [
          'Sanat ve sanatın **alımlanması**, özellikle **fotoğraf ve film** sayesinde değişime uğrar.',
          'Bu değişimin iki kaynağı: **kitlesel yeniden üretim** imkânı ve gerçekliğin farklı yansıtılmasıyla değişen **kolektif algı**.',
          'Bu süreçte sanat eseri **aurasını kaybeder** (biricikliği, “burada ve şimdi” oluşu); bu da medyanın **toplumsal işlevini** değiştirir.',
          'Yeniden üretilebilirlikle doğan **kolektif estetik**, toplumsal **özgürleşme** imkânı sunar ama **siyasi araçsallaştırma** tehlikesi de taşır; o dönemde **faşizmin yükselişi** bunu gösterir.',
          'Benjamin metnini “adını hak eden **ilk materyalist sanat kuramı**” olarak niteler. Sağlığında az okunur, **1960–70’lerde yeniden keşfedilir**, **1980’lerin ortasından** beri modern **kültür ve medya kuramının kurucu metinlerinden** sayılır.']},
        { t: 'trap', text: 'Aura **kaybı** bir “kayıp” olarak yalnızca olumsuz değildir: Benjamin hem özgürleşme imkânını hem siyasi tehlikeyi birlikte görür.' }
      ] },
      { id: 'kuram', title: 'Neden kuram? Kuramların doğuşu', blocks: [
        { t: 'ul', items: [
          'İlk ciddi makaleler sinemanın **modern kültür içindeki yerini** bulmak ve ona **özel bir işlev** biçmek için yazılır. Bunlar adeta sinemanın **doğum bildirimi** ve **selamlama** girişimleridir.',
          'Başka **hiçbir sanat dalı** için bu kadar **hızlı** kuram oluşturma çabasına girilmemiştir.',
          'Dönemin genel yöntemi sinemayı diğer sanatlarla **karşılaştırmaktır**: Fransa’da **müzikle**, Amerika’da **resimle**.',
          '**1912–1915** arası makaleler sinemayı **tiyatrodan ayrıştırmayı** hedefler ve sinemadaki **şiir ve müzik** niteliklerini vurgular.',
          'Teknik ilerlemeler (özellikle **sesin** kullanılmaya başlanması) sinemanın sanatsal etkisini tartışmaya açar: **biçimsel eğilim** böyle güçlenir.',
          'Kuramın ve kuramcıların doğuşu: Eisenstein, Kracauer, Bazin, Arnheim vb.']}
      ] },
      { id: 'bicimcilik', title: 'Biçimcilik geleneği ve Rus biçimciliği', blocks: [
        { t: 'ul', items: [
          'Sinemanın **teknik olanakları** ön plandadır.',
          'Entelektüel sınıf için (özellikle **sessiz sinema**) sinema yalnızca sıra dışı bir **sosyolojik fenomen** değil, diğer sanatlarla **aynı hak ve sorumluluklara** sahip güçlü bir **sanatsal biçimdir**.',
          'Bu görüşe göre sanat eseri **gerçekliği yansıtmakla yükümlü değildir**; aksine gerçekliği **farklı biçimde algılatmayı** benimser.']},
        { t: 'h', text: 'Kuleshov ve montajın keşfi' },
        { t: 'p', text: '**Lev Kuleshov** bir sinema atölyesinin yönetimine getirilir (**Eisenstein ve Pudovkin’in hocası**). Yeterli **ham film** bulamadıkları için önceden çekilmiş filmleri **yeniden kurgularlar** ve bu süreçte kurgu tekniği üzerine bir dizi gerçeği keşfederler.' },
        { t: 'ul', items: [
          'Kuleshov farklı **mekân ve zamanlarda** çekilmiş görüntüleri birleştirir; ortaya çıkan filmsel anlatıma **“yaratıcı coğrafya”** der.',
          'Böylece **montaj (kurgu)** önem kazanır: “Kurgu, **izleyicinin psikolojik rehberliğini kontrol eden** bir yöntemdir.”']}
      ] },
      { id: 'bicimciler', title: 'Biçimci kuramcılar: Münsterberg, Arnheim, Eisenstein, Balázs', blocks: [
        { t: 'h', text: 'Hugo Münsterberg' },
        { t: 'ul', items: ['**1916**, The Photoplay: A Psychologic Study (Sinema: Psikolojik Bir Çalışma).', '**Akademik olarak çalışan ilk kuramcı.**', 'Sinemayı **Gestalt psikolojisi** üzerinden değerlendirir.'] },
        { t: 'h', text: 'Rudolf Arnheim' },
        { t: 'ul', items: [
          'Film as Art (Sanat Olarak Film, **1957**).',
          'Sinemanın sanat olarak kabulündeki sıkıntıyı, insanlığın **tarihte ilk kez bir sanatın doğuşuna tanıklık** etmesine bağlar: diğer sanatların kökenleri insanlık kadar karanlıktır, sinema ise bunlardan tamamen farklıdır.',
          '**Gestalt psikolojisi**: algı, görüş, temsil meselesi.',
          'Yönetmen yalnızca görüntü **kaydetmekle** değil, **sanat eseri yaratmakla** yükümlüdür; bu yüzden kameranın niteliklerini **kullanmalı, güçlendirmeli ve yorumlamalıdır**.']},
        { t: 'h', text: 'Sergei Eisenstein' },
        { t: 'ul', items: [
          'Tek uğraşı sinema olan yönetmen; dünya sinema tarihinin **en etkili** isimlerinden.',
          'Kuramlarını kendi filmlerinde uygular: **sanat, kuram ve uygulama** arasında köprü kurar; kuram ve sanatın **ayrılmaz bir bütün** olduğunu savunur.',
          'Sinemayı **propaganda aracı** olarak kullanır. **Montaj (kurgu) sinemasının temel taşıdır.**',
          'Filmleri: Grev (1924), Potemkin Zırhlısı (sunumda 1927).',
          '**Üçüncü terim:** yan yana getirilen iki film parçasının tek tek anlattıklarından çok, **birlikte algılanmaları** önemlidir; iki görüntünün içeriğinden çok yarattığı **üçüncü anlam** ilgilendirir.',
          '**Pavlov**’un **çağrışımlarını** kullanma taraftarıdır.']},
        { t: 'h', text: 'Béla Balázs' },
        { t: 'ul', items: [
          'Theory of the Film (**1930**).',
          'Sorduğu soru: Sinematografi ne zaman ve nasıl, **tiyatronun** özelliklerinden farklılaşan yöntemlerle **bağımsız bir sanata** dönüştü ve **kendi diline** kavuştu? İkisi de perdeye hareketli resim yansıtırken neden birine **“fotoğraflanmış tiyatro”** (teknik reprodüksiyon), ötekine **yaratıcı sanat** diyoruz?']},
        { t: 'tip', text: 'Film önerisi: Fritz Lang, **Metropolis** (1927).' }
      ] },
      { id: 'gercekcilik', title: 'Gerçekçilik kuramı', blocks: [
        { t: 'ul', items: [
          'Sanatta gerçeklik ↔ sinemada gerçeklik: bir eserin **gerçeklikle ilişkisi** onun niteliğini doğrudan belirler.',
          'Filmin öyküsünün ve diğer unsurlarının gerçeklikle ilişkisini inceleyen gerçekçi kuram, gerçeğin **olabildiğince müdahalesiz** sunulmasını savunur.',
          'Okur ya da izleyici anlamı **daha aktif** biçimde kendisi oluşturmalıdır.',
          'Önemli olan sinemanın **gerçeği ortaya çıkarma gücüdür**. Gerçeklik **çok katmanlıdır**; yönetmen **kamera** sayesinde bu katmanları açarak gerçekliği sergiler. Perdedeki görüntü, duyularımızla algılayamadığımız **nesnel gerçeklik** hakkında bilgi verir.',
          '**Bazin** ve **Kracauer**: yönetmen gerçeği **dönüştürmez**, gerçeklikten **seçim yapar** (Özarslan). Sinema dünyayı **olduğu gibi** görmemiz, görsel dokusunu keşfetmemiz ve insanın onun içindeki yerini anlamamız için vardır (Andrew).',
          'Merkezde sanatçının hayal gücü değil, insanları, nesneleri, kısacası **hayatın kendisini müdahalesiz yansıtabilme** yeteneği vardır (Yılmaz).']},
        { t: 'h', text: 'Nanook ve av sahnesi' },
        { t: 'p', text: '**Flaherty, Nanook of the North (Kuzeyli Nanook, 1922):** Nanook’un av sahnesi **kesilmeden** gösterilir. Bazin’e göre önemli olan, izleyicinin avın **süresini deneyimlemesidir**.' },
        { t: 'trap', text: 'Bazin **doğal** (çekimleri birbirine bağlayan) kurguya karşı değildir; **gerçeklikle oynayan** kurguya karşıdır, çünkü o montaj gerçekliği **kurmacaya** dönüştürür.' },
        { t: 'p', text: 'Özarslan’a göre gerçekçilik, **biçimci akımın karşısında** bir akımdır. Biçimcilerde dramatik yapı görüntülerin **etkileşimine** dayanır; gerçekçilerde ise **uzun planlar ve alan derinliği** doğadaki bütünlüğü ve sürekliliği perdeye aktarır, böylece hayatın akışı yakalanır. **Alan derinliğinde** izleyici gerçekle yakın ilişki kurar ve **seçme şansına** sahiptir.' }
      ] },
      { id: 'bazin', title: 'André Bazin', blocks: [
        { t: 'ul', items: [
          'Gerçekçi film kuramının ve **Fransız Yeni Dalga**’nın kurucusu.',
          'Önemli makalelerini **Sinema Nedir?** başlıklı kitabında toplar.',
          'Sunumda öğrencileri olarak anılanlar: Jean Renoir, Jean-Luc Godard, François Truffaut.',
          'Kuramı **felsefi** bir altyapıya dayanır, **varlıkbilimsel** (ontolojik) sorunlara gider. İlk çalışması: **Fotoğraf Görüntüsünün Varlıkbilimi**.']},
        { t: 'h', text: 'Varlıkbilim: mumyadan fotoğrafa' },
        { t: 'ol', items: [
          'İnsan ilk çağlardan beri **varlığını sürdürme** kaygısı taşır: önce **mumyalama**, sonra **heykel** ve **resim**.',
          'Resim, varlığı görünüş yoluyla kurtarma çabasında bir **bunalım** yaratır: nesne ile anlatımı arasına **sanatçı girer**.',
          'Bunalım **fotoğrafla** sona erer: fotoğrafın yeniliği **temel nesnelliğidir**. İlk kez nesne ile görüntüsü arasına başka bir nesne dışında hiçbir şey girmez; dış dünyanın görüntüsü **insan yaratıcılığı karışmadan**, kendiliğinden oluşur.',
          'Hammadde meselesinden sonra Bazin sinemanın **kendine has diline** geçer: filmi basit bir canlı fotoğraftan ayıran şey **dildir**.']},
        { t: 'h', text: 'Bazin’e göre izleyici ve kurgu' },
        { t: 'ul', items: [
          'Amaç izleyiciyi anlam üretim sürecine **dahil etmek**, filmin anlamlandırılmasına **ortak etmektir**.',
          '**Alan derinliği** ve **plan-sekanslarla** izleyicinin deneyimini yüceltir.',
          'Bu nedenle **kurgunun karşısındadır**; kurgu yalnızca **gerekli hâllerde** kullanılmalıdır.',
          'Biçimcilerin kurgu yoluyla **dikte** ve **tek anlam** yaratma güdüsüne tamamen karşıdır: yönetmen seçtiği görüntülerle gerçekliği kaydeder, anlam kurmayı **izleyiciye bırakır**.']}
      ] },
      { id: 'kracauer', title: 'Siegfried Kracauer', blocks: [
        { t: 'ul', items: [
          'Yalnız film kuramcısı değil; **filozof** ve **gazeteci**.',
          '**Sosyal davranışların** ve toplumsal yaklaşımların betimlenmesini filmin temel unsuru sayar: filmler **bireylerin değil toplumun** yansımasıdır (Roterberg).',
          '**Theory of Film (1960)** ile büyük yankı uyandırır.',
          '**Frankfurt Okulu**’ndan sayılmaz ama Horkheimer, Adorno ve Benjamin ile yakın ilişkisi vardır; düşünsel olarak bu ekole yakındır.',
          'Erken dönem Alman sinemasını inceler; bu filmlerin yapısında **nazizmin** izlerini **Caligari’den Hitler’e: Alman Sinemasının Psikolojik Tarihi** ile sürer.',
          'Das Cabinet des Dr. Caligari (Dr. Caligari’nin Muayenehanesi, Robert Wiene, **1920**): kült film, **ilk korku** filmi, **Alman ekspresyonizminin ilk örneği**.']},
        { t: 'h', text: 'Roman ve film' },
        { t: 'table', head: ['', 'Roman', 'Film'], rows: [
          ['Ortak eğilim', 'Yaşamı bütünüyle canlandırmak, **sonsuzluğu** yakalamak', 'Yaşamı bütünüyle canlandırmak, **sonsuzluğu** yakalamak'],
          ['Süreklilik', '**Zihinsel** devamlılık; fiziksel karşılığı olmayan dünya', '**Maddi** süreklilik; öykünün çevresindeki **fizik gerçekliği** de sergiler']] },
        { t: 'ul', items: [
          'Edebî biçimler içinde sinemaya **en yakın olan romandır**.',
          'Uyarlama, romanda görünenlerin **nesnel** biçimde yansıtılmasıdır; ama uyarlama her zaman **edebî olana** da sahip olmalıdır.',
          'Uygun materyal: **gerçekçi ve doğalcı** romanlar, örneğin Steinbeck’in **Gazap Üzümleri** ve Zola’nın **Meyhane**’si.',
          'Örnek: **Bresson**, Bernanos’un **Bir Taşra Papazının Güncesi**’ni (1951) uyarlarken kamera papazın yüzündeki kederi keşfeder; ama ruhani dramı aktarmak için **kadraj dışı sese** başvurmak zorunda kalır.']}
      ] },
      { id: 'cagdas', title: 'Çağdaş sinema kuramları', blocks: [
        { t: 'ul', items: [
          'Avrupa sineması Bazin ve Kracauer gibi kuramcıların etkisiyle **güçlü kuramsal temellere** dayanır.',
          '**İkinci Dünya Savaşı sonrası Fransa**’da büyük sıçrama: **ulusal sinema okulu**, **Fransız sinemateği**, **sinema yüksek enstitüsü** ve **Cahiers du Cinéma**.',
          'Bu görüşler zamanla gelenekselleşir ve **akademik** düzeye taşınır; eskiden yeniye bir çizgide **çağdaş kuramlar** oluşur: **Jean Mitry** ve **Christian Metz**.',
          'Biçimci ve gerçekçi kuramları birlikte ele alıp **sentez** yaparlar ve **diyalektik** düşüncenin gelişmesine öncülük ederler. Özellikle **Bazin**’den etkilenen Mitry ve ardından Metz, sinemayı yeniden yorumlamak yerine var olan kuramlardan **kapsayıcı bir sentez** kurar.']},
        { t: 'h', text: 'Göstergebilim' },
        { t: 'ul', items: [
          'Göstergebilimin **yapısalcı** bakışı, **Saussure**’ün dilbiliminden gelen köklerle bir **yönteme** dönüşür; dili temel araç olarak kullanan bir dünya görüşüdür.',
          'Gelişim: ilk göstergebilimciler **üretim** sürecini (metinlerin oluşumu) merkeze alır → sonra **tüketime**, metnin **algılanışına** kayar → oradan **Lacan**’ın Freudçu psikolojisine kadar uzanır (Monaco).']}
      ] },
      { id: 'mitry', title: 'Jean Mitry', blocks: [
        { t: 'ul', items: [
          '60’larda yazdığı **Esthétique et psychologie du cinéma** ile çağdaş kuramlarda **öncü**.',
          'Akademide **sinema biliminin ilk profesörlerinden**; tarih bilgisi ve kuram hâkimiyeti sentez kurmasını sağlar.']},
        { t: 'h', text: 'Sinema anlayışı' },
        { t: 'ul', items: [
          'Sinemanın temeli **imgeler arası ilişkiler** ve **imge–söz ilişkileridir**; sinema kendini ancak bunlarla anlatabilir.',
          'Kamerayı **konuşan insanların** karşısına koyup seyirciye izletmek **sinema yapmak değildir**; bu, fotoğraflar aracılığıyla yapılmış yazınsal bir anlatıma benzer.']},
        { t: 'h', text: 'Sandalye örneği: sözcük ↔ görüntü' },
        { t: 'table', head: ['Sözlü dil', 'Sinema dili'], rows: [
          ['“Sandalye” deyince herkes farklı bir sandalye düşünür ama üzerine oturulan nesne olduğunda anlaşır; **sözcük kavramın yerini tutar**, bütün sandalyeleri kapsar.', 'Görüntü doğrudan **gerçeğe** dayanır, zihinsel çağrışım yapmaz.'],
          ['Gösterileni gösterme görevi **sözcüğündür**.', 'Görüntüde **gösteren ile gösterilen aynıdır**.']] },
        { t: 'h', text: 'Kadraj ve kurgu' },
        { t: 'ul', items: [
          '**Kadraj** (perdenin çerçevesi) seyircinin gerçekle ilişkisini **sınırlar**, ama aynı zamanda kadraj **dışında** olup bitenin doğrudan bir **gerçeklik hissi** uyandırmasını sağlar.',
          'Görünmemesi gereken bir noktanın gösterilmesi inanılırlığı bozar; kadrajın bu gerilimi koruması **Bazin** ve **Arnheim**’ı hatırlatır. Kadraj hem **temsil edilen dünyanın** hem **gerçekliğin** savunucusudur.',
          '**Kurgu**: hem gerçekçi hem biçimci yaklaşımın **sentezi**. Kurguyu gerekli görür ama ne **Bazin** kadar mesafeli ne de **Eisenstein**’ın **entelektüel kurgusu** kadar işin içindedir.']},
        { t: 'h', text: 'Roman ↔ sinema' },
        { t: 'ul', items: [
          'Roman insanla insan, insanla dünya arasındaki bağı **sözcükler ve hareketler** aracılığıyla oldukça **soyut** biçimde hissettirir; sinema aynı işi **kaba algının** olağan işleyişiyle yapar.',
          'Sonuç: **tam bir uyarlama mümkün değildir**. Romanın yapısı korunabilir ama romana ve okuma deneyimine **yabancı araçlarla**.',
          'Özdeyiş: **“Roman kendisini dünyada kuran bir anlatıdır; sinema ise kendini bir anlatıda kuran bir dünyadır.”**',
          'Kadraj kaotik algı dünyasını estetik anlam kalıplarına uydurur; ekranda kurulan dünya, ötesindeki **kurulmamış dünyayı** da gösterir. Mitry roman ve sinema dilini **iki ayrı dil** olarak görür: sinema kurulu dünyayı aktarır, roman baştan bir dünya kurar.']}
      ] },
      { id: 'metz', title: 'Christian Metz', blocks: [
        { t: 'ul', items: [
          '**Language and Cinema** (sunumda 1964).',
          'Mitry’nin yaklaşımını **ilk dönem sinema kuramlarının finali** olarak adlandırır.',
          'Sinema **göstergebilimsel** bakışla incelenmelidir; bu yüzden **dilbilim kavramlarına** başvurur. Kuramında **Saussure**’ün yapısalcılığı görülür; **Bazin**’den de etkilenmiştir.',
          'Sinemadaki **anlam ve anlamlandırma** süreçlerini betimlemeye ve açıklamaya çalışır; ona göre sinemada **gösteren ile gösterilen birliktedir**.']},
        { t: 'h', text: 'Temel anlam ve yan anlam' },
        { t: 'p', text: 'Metz **temel anlam** ve **yan anlam** kavramlarını ortaya koyar. Anlamlandırma, filmin **türüne** göre belirlenir.' },
        { t: 'table', head: ['Aynı mekân: rıhtım', 'Yan anlam'], rows: [
          ['**Gangster filminde** yakın çekim ve açı', '**Kasvet, korku**'],
          ['**Müzikalde**', 'Neşeyle çalışan **işçilerin mekânı**']] },
        { t: 'tip', text: 'Mitry ve Metz’i karıştırma: **Mitry** = kadraj, sandalye örneği, roman/sinema özdeyişi. **Metz** = dilbilim, Saussure, temel/yan anlam, tür.' }
      ] },
      { id: 'auteur', title: 'Auteur sineması', blocks: [
        { t: 'ul', items: [
          'Yönetmenlerin **kendilerine has stil ve anlatım yöntemleriyle** birbirinden ayrılmasına işaret eder.',
          'Daha çok **bireysel yaratıcılık** kuramı olarak dikkat çeker; anlamda bireyselliğin ifade edildiği noktada **model bir teori**dir.',
          'Ama inceleme ve çözümleme için **net bir yöntem sunmaz**: bir yönetmeni auteur olan/olmayan diye ayırmak için ne kesin bir yöntem ne de kesin bir biçim vardır.']}
      ] },
      { id: 'filmler', title: 'Derste geçen filmler', blocks: [
        { t: 'table', head: ['Film', 'Yıl', 'Yönetmen', 'Neden geçiyor?'], rows: [
          ['Trenin La Ciotat Garına Gelişi', '1895', 'Lumière kardeşler', 'İlk gösterim, gerçeklik eğilimi'],
          ['Aya Seyahat (Le Voyage dans la Lune)', '1902', 'Georges Méliès', 'İlk bilim kurgu, ilk uyarlama, hayal gücü eğilimi'],
          ['Dr. Caligari’nin Muayenehanesi', '1920', 'Robert Wiene', 'İlk korku, Alman ekspresyonizmi; Kracauer'],
          ['Kuzeyli Nanook (Nanook of the North)', '1922', 'Robert Flaherty', 'Gerçekçilik; av sahnesi (Bazin)'],
          ['Grev', '1924', 'Sergei Eisenstein', 'Montaj sineması'],
          ['Potemkin Zırhlısı', '1927 (sunumda)', 'Sergei Eisenstein', 'Montaj, üçüncü terim'],
          ['Metropolis', '1927', 'Fritz Lang', 'Film önerisi'],
          ['Bir Taşra Papazının Güncesi', '1951', 'Robert Bresson (öykü: Bernanos)', 'Kracauer, uyarlama, kadraj dışı ses'],
          ['Yedinci Mühür', '1957', 'Ingmar Bergman', 'Film önerisi'],
          ['Yedinci Kıta (Der siebente Kontinent)', '1989', 'Michael Haneke', 'Film önerisi'],
          ['Dekalog (10 bölümlük mini dizi)', '1989–1990', 'Krzysztof Kieślowski', 'Film önerisi'],
          ['Benny’nin Videosu', '1992', 'Michael Haneke', 'Film önerisi'],
          ['Tesadüfi Bir Kronolojinin 71 Parçası', '1994', 'Michael Haneke', 'Film önerisi']] }
      ] }
    ]
  };
  (window.SUBJECTS = window.SUBJECTS || []).push(S);

  var P = [
    { id: 'sA1', q: 'Sinemanın doğuşundaki iki eğilimi temsilcileriyle açıklayınız.',
      a: 'Birinci eğilim gerçekliğin aktarılmasıdır: Lumière kardeşler ve Flaherty (Nanook) sinemayı gözlemciliğe, dış dünyayı olduğu gibi aktaran belgesellere yönlendirir. İkinci eğilim biçimci, hayal gücüne dayanan eğilimdir: Méliès sinemayı sanatçının hayal gücüne dayandırır, öykülü filmlerin önünü açar.',
      keys: [
        { k: 'Gerçekliğin aktarılması', w: 2, any: ['gerceklik', 'gercegin aktar', 'gozlem', 'belgesel'] },
        { k: 'Lumière / Flaherty', w: 3, any: ['lumiere', 'flaherty', 'nanook'] },
        { k: 'Hayal gücü / biçimci eğilim', w: 2, any: ['hayal gucu', 'bicimci', 'kurmaca', 'oykulu'] },
        { k: 'Méliès', w: 3, any: ['melies', 'aya seyahat'] }] },
    { id: 'sA2', q: 'Walter Benjamin’e göre teknik yeniden üretim çağında sanat eserine ne olur?',
      a: 'Fotoğraf ve filmle sanat ve sanatın alımlanması değişir: kitlesel yeniden üretim mümkün olur, gerçekliğin farklı yansıtılmasıyla kolektif algı değişir. Sanat eseri aurasını kaybeder, medyanın toplumsal işlevi değişir. Kolektif estetik özgürleşme imkânı verir ama faşizm gibi siyasi araçsallaştırma tehlikesi de taşır.',
      keys: [
        { k: 'Aura kaybı', w: 3, any: ['aura'] },
        { k: 'Kitlesel yeniden üretim', w: 2, any: ['kitlesel', 'yeniden uret', 'cogalt', 'reproduk'] },
        { k: 'Kolektif algı / alımlama değişir', w: 2, any: ['kolektif', 'algi', 'alimla'] },
        { k: 'Özgürleşme ama faşizm / siyasi tehlike', w: 3, any: ['fasizm', 'siyasi', 'politik', 'ozgurles'] }] },
    { id: 'sA3', q: 'Kuleshov’un deneyleri ve “yaratıcı coğrafya” kavramı biçimci kuram için neden önemlidir?',
      a: 'Kuleshov ham film bulamadığı için eski filmleri yeniden kurgular; farklı mekân ve zamanlarda çekilmiş görüntüleri birleştirerek yeni bir filmsel mekân, yani yaratıcı coğrafya elde eder. Böylece montajın önemi ortaya çıkar: kurgu izleyicinin psikolojik rehberliğini kontrol eden bir yöntemdir. Eisenstein ve Pudovkin’in hocasıdır.',
      keys: [
        { k: 'Eski filmleri yeniden kurgular (ham film eksikliği)', w: 2, any: ['ham film', 'yeniden kurgu', 'eski film', 'onceden cekil'] },
        { k: 'Farklı mekân ve zamanlar birleşir', w: 2, any: ['farkli mekan', 'mekan', 'zaman'] },
        { k: 'Montaj / kurgu önem kazanır', w: 3, any: ['montaj', 'kurgu'] },
        { k: 'İzleyicinin psikolojik rehberliği', w: 3, any: ['psikolojik', 'izleyici', 'rehber', 'yonlendir'] }] },
    { id: 'sA4', q: 'Eisenstein’ın montaj anlayışını açıklayınız.',
      a: 'Eisenstein montaj sinemasının temel taşıdır. Yan yana getirilen iki film parçasının tek tek anlattıklarından çok birlikte algılanmaları önemlidir; iki görüntü bir araya gelince üçüncü bir anlam (üçüncü terim) doğar. Pavlov’un çağrışımlarını kullanır ve sinemayı propaganda aracı olarak görür. Kuram, sanat ve uygulama arasında köprü kurar (Grev, Potemkin Zırhlısı).',
      keys: [
        { k: 'Montaj sinemasının temel taşı', w: 2, any: ['montaj', 'kurgu'] },
        { k: 'İki görüntü → üçüncü anlam', w: 4, any: ['ucuncu', 'birlikte algi', 'yan yana'] },
        { k: 'Pavlov / çağrışım', w: 2, any: ['pavlov', 'cagrisim'] },
        { k: 'Propaganda', w: 2, any: ['propaganda'] }] },
    { id: 'sA5', q: 'Biçimci ve gerçekçi kuramları montaj, yönetmen ve izleyici açısından karşılaştırınız.',
      a: 'Biçimcilere göre sanat eseri gerçekliği yansıtmakla yükümlü değildir; yönetmen montajla gerçekliği yeniden düzenler ve seçimi özneldir, kurgu izleyiciyi yönlendirir, tek anlam yaratır. Gerçekçilere göre sinema gerçeği müdahalesiz sunmalıdır; yönetmen gerçeği dönüştürmez, seçer; montaj yerine uzun plan ve alan derinliği önemlidir; izleyici aktiftir ve anlamı kendisi kurar.',
      keys: [
        { k: 'Biçimci: montajla gerçekliği yeniden düzenler', w: 3, any: ['montaj', 'kurgu', 'yeniden duzen'] },
        { k: 'Gerçekçi: uzun plan / alan derinliği', w: 3, any: ['uzun plan', 'alan derinli', 'plan sekans'] },
        { k: 'Gerçekçi: yönetmen seçer, dönüştürmez / müdahalesiz', w: 2, any: ['secim', 'seçer', 'mudahalesiz', 'donustur'] },
        { k: 'İzleyici: yönlendirilen ↔ aktif', w: 2, any: ['aktif', 'izleyici', 'yonlendir'] }] },
    { id: 'sA6', q: 'Bazin’in “Fotoğraf Görüntüsünün Varlıkbilimi” düşüncesini açıklayınız.',
      a: 'İnsan varlığını sürdürme kaygısıyla önce mumyalamaya, sonra heykel ve resme yönelir. Resimde nesne ile anlatımı arasına sanatçı girdiği için bir bunalım doğar. Fotoğraf bu bunalımı bitirir: temel nesnelliği sayesinde dış dünyanın görüntüsü insan yaratıcılığı karışmadan kendiliğinden oluşur. Ardından Bazin sinemayı canlı fotoğraftan ayıran dil meselesine geçer.',
      keys: [
        { k: 'Varlığını sürdürme kaygısı / mumya', w: 2, any: ['mumya', 'varligini surdur', 'surdurme'] },
        { k: 'Resimde sanatçı araya girer (bunalım)', w: 3, any: ['sanatci', 'bunalim', 'resim'] },
        { k: 'Fotoğrafın nesnelliği', w: 3, any: ['nesnel'] },
        { k: 'İnsan müdahalesi olmadan / kendiliğinden', w: 2, any: ['kendiliginden', 'mudahale', 'karismadan'] }] },
    { id: 'sA7', q: 'Kracauer’e göre roman ile film arasındaki benzerlik ve fark nedir?',
      a: 'İkisi de yaşamı bütünüyle canlandırma ve sonsuzluğu yakalama eğilimindedir; edebî biçimler içinde sinemaya en yakın olan romandır. Fark süreklilikte: film maddi bir sürekliliğe, öykünün çevresindeki fizik gerçekliğe bağlıdır; roman ise fiziksel karşılığı olmayan zihinsel bir devamlılık kurar. Uygun uyarlama malzemesi gerçekçi/doğalcı romanlardır (Gazap Üzümleri, Meyhane).',
      keys: [
        { k: 'Yaşamı canlandırma / sonsuzluk', w: 2, any: ['sonsuz', 'yasami', 'canlandir'] },
        { k: 'En yakın edebî biçim roman', w: 2, any: ['en yakin', 'roman'] },
        { k: 'Film: maddi süreklilik', w: 3, any: ['maddi', 'fiziksel gerceklik', 'fizik'] },
        { k: 'Roman: zihinsel süreklilik', w: 3, any: ['zihinsel'] }] },
    { id: 'sA8', q: 'Mitry’nin sözcük ile görüntü arasındaki farkı (sandalye örneği) ve roman–sinema özdeyişini açıklayınız.',
      a: 'Sözlü dilde “sandalye” sözcüğü kavramın yerini tutar ve bütün sandalyeleri kapsar; gösterileni gösterme görevi sözcüğündür. Görüntü ise doğrudan gerçeğe dayanır, zihinsel çağrışım yapmaz; görüntüde gösteren ile gösterilen aynıdır. Özdeyiş: Roman kendisini dünyada kuran bir anlatıdır, sinema kendini bir anlatıda kuran bir dünyadır; bu yüzden tam uyarlama mümkün değildir.',
      keys: [
        { k: 'Sözcük kavramın yerini tutar', w: 2, any: ['sozcuk', 'kavram', 'kelime'] },
        { k: 'Görüntüde gösteren = gösterilen', w: 3, any: ['gosteren', 'gosterilen'] },
        { k: 'Roman dünyada kurulan anlatı', w: 2, any: ['dunyada kuran', 'anlati'] },
        { k: 'Sinema anlatıda kurulan dünya / tam uyarlama yok', w: 3, any: ['anlatida kuran', 'tam uyarlama', 'uyarlama mumkun'] }] },
    { id: 'sA9', q: 'Christian Metz’in temel anlam ve yan anlam kavramlarını örnekle açıklayınız.',
      a: 'Metz sinemayı göstergebilimsel bakışla, Saussure’ün dilbilim kavramlarıyla inceler; sinemada gösteren ile gösterilen birliktedir. Temel anlam ve yan anlam kavramlarını ortaya koyar; anlamlandırma film türüne göre değişir. Örneğin bir rıhtımın yakın çekimi gangster filminde kasvet ve korku çağrıştırırken, müzikalde neşeyle çalışan işçilerin mekânı olur.',
      keys: [
        { k: 'Göstergebilim / Saussure / dilbilim', w: 2, any: ['gostergebilim', 'saussure', 'dilbilim'] },
        { k: 'Temel anlam / yan anlam', w: 3, any: ['temel anlam', 'yan anlam'] },
        { k: 'Film türüne göre değişir', w: 2, any: ['turu', 'film tur', 'turler'] },
        { k: 'Rıhtım örneği (gangster ↔ müzikal)', w: 3, any: ['rihtim', 'gangster', 'muzikal'] }] },
    { id: 'sA10', q: 'Çağdaş sinema kuramlarının (Mitry, Metz) önceki kuramlardan farkı nedir?',
      a: 'Çağdaş kuramlar biçimci ve gerçekçi kuramları birlikte ele alıp sentez yapar, diyalektik düşünceye öncülük eder. Sinemayı yeniden yorumlamak yerine var olan kuramlardan kapsayıcı bir sentez kurarlar; özellikle Bazin’den etkilenirler. Saussure kökenli göstergebilim ve yapısalcılığı yöntem olarak kullanırlar. Arka planda İkinci Dünya Savaşı sonrası Fransa’daki kurumlar (sinematek, Cahiers du Cinéma) vardır.',
      keys: [
        { k: 'Biçimci + gerçekçi sentez', w: 4, any: ['sentez', 'birlikte ele'] },
        { k: 'Diyalektik', w: 2, any: ['diyalektik'] },
        { k: 'Göstergebilim / yapısalcılık', w: 2, any: ['gostergebilim', 'yapisalci', 'saussure'] },
        { k: 'Bazin etkisi / Fransa kurumları', w: 2, any: ['bazin', 'cahiers', 'sinematek', 'fransa'] }] }
  ];
  var B = [
    { id: 's1', q: 'Méliès’in Aya Seyahat (1902) filmi sinema tarihinde neden önemlidir?',
      a: 'Bilinen ilk bilim kurgu filmidir; gündelik yaşam görüntülerinden farklı olarak kurmaca bir anlatım getirir. Jules Verne ve H. G. Wells romanlarından yapıldığı için ilk uyarlamadır. Hayal gücüne dayanan biçimci eğilimin başlangıcıdır.',
      keys: [{ k: 'İlk bilim kurgu', w: 3, any: ['bilim kurgu'] }, { k: 'İlk uyarlama (Verne, Wells)', w: 4, any: ['uyarlama', 'verne', 'wells'] }, { k: 'Kurmaca / hayal gücü', w: 3, any: ['kurmaca', 'hayal'] }] },
    { id: 's2', q: 'Sinema kuramlarının ilk dönemindeki makaleler hangi amaçla yazılmıştır ve sinema hangi sanatlarla karşılaştırılmıştır?',
      a: 'Sinemanın modern kültürdeki yerini bulmak ve ona özel bir işlev biçmek için; adeta doğum bildirimi ve selamlama girişimleridir. Başka hiçbir sanat için bu kadar hızlı kuram üretilmemiştir. Fransa’da müzikle, Amerika’da resimle karşılaştırılmış; 1912–1915 makaleleri sinemayı tiyatrodan ayırıp şiir ve müzik niteliklerini vurgulamıştır.',
      keys: [{ k: 'Kültürdeki yerini bulmak / doğum bildirimi', w: 3, any: ['dogum bildirim', 'selamlama', 'yerini', 'islev'] }, { k: 'Fransa: müzik, Amerika: resim', w: 4, any: ['muzik', 'resim'] }, { k: 'Tiyatrodan ayırma', w: 3, any: ['tiyatro'] }] },
    { id: 's3', q: 'Münsterberg ve Arnheim’ı biçimci kuram içinde tanıtınız.',
      a: 'Münsterberg 1916’da The Photoplay ile akademik olarak çalışan ilk kuramcıdır ve sinemayı Gestalt psikolojisiyle değerlendirir. Arnheim Film as Art’ta insanlığın ilk kez bir sanatın doğuşuna tanık olduğunu söyler, Gestalt psikolojisiyle algı ve temsil üzerinde durur; yönetmen kameranın niteliklerini kullanarak sanat eseri yaratmakla yükümlüdür.',
      keys: [{ k: 'Münsterberg: ilk akademik kuramcı', w: 3, any: ['ilk akademik', 'akademik', 'photoplay'] }, { k: 'Gestalt psikolojisi', w: 3, any: ['gestalt'] }, { k: 'Arnheim: sanatın doğuşuna tanıklık / kamera nitelikleri', w: 4, any: ['dogusuna', 'tanik', 'kamera', 'film as art'] }] },
    { id: 's4', q: 'Béla Balázs’ın sinema ile tiyatro arasındaki ayrıma dair sorusu nedir?',
      a: 'Sinematografi ne zaman ve nasıl tiyatrodan farklılaşan yöntemlerle bağımsız bir sanata dönüşüp kendi diline kavuştu? İkisi de perdeye hareketli resim yansıtırken neden birine fotoğraflanmış tiyatro, yani teknik reprodüksiyon; ötekine yaratıcı bağımsız sanat diyoruz?',
      keys: [{ k: 'Tiyatrodan farklılaşma', w: 3, any: ['tiyatro'] }, { k: 'Kendi dili / bağımsız sanat', w: 4, any: ['kendi dil', 'dil', 'bagimsiz'] }, { k: 'Fotoğraflanmış tiyatro ↔ yaratıcı sanat', w: 3, any: ['fotograflanmis', 'reproduk', 'yaratici'] }] },
    { id: 's5', q: 'Gerçekçi kurama göre sinemanın gücü nerededir ve yönetmenin rolü nedir?',
      a: 'Sinemanın gücü gerçeği ortaya çıkarmasındadır. Gerçeklik çok katmanlıdır; yönetmen kamerayla bu katmanları açar, perdedeki görüntü duyularla algılayamadığımız nesnel gerçeklik hakkında bilgi verir. Yönetmen gerçeği dönüştürmez, gerçeklikten seçim yapar; gerçeği olabildiğince müdahalesiz sunar ve izleyici anlamı aktif biçimde kurar.',
      keys: [{ k: 'Gerçeği ortaya çıkarma / katmanlar', w: 3, any: ['ortaya cikar', 'katman'] }, { k: 'Dönüştürmez, seçer', w: 4, any: ['secim', 'secer', 'donusturmez'] }, { k: 'Müdahalesiz / izleyici aktif', w: 3, any: ['mudahalesiz', 'aktif'] }] },
    { id: 's6', q: 'Nanook of the North’taki av sahnesi Bazin’in kurgu anlayışı hakkında ne söyler?',
      a: 'Av sahnesi kesilmeden gösterilir; Bazin’e göre önemli olan izleyicinin avın süresini deneyimlemesidir. Bazin çekimleri bağlayan doğal kurguya karşı değildir, gerçeklikle oynayan ve gerçekliği kurmacaya dönüştüren kurguya karşıdır. Uzun plan ve alan derinliğini tercih eder.',
      keys: [{ k: 'Sürenin deneyimlenmesi', w: 3, any: ['sure', 'deneyim'] }, { k: 'Gerçeklikle oynayan kurguya karşı (doğal kurguya değil)', w: 4, any: ['gerceklikle oynayan', 'dogal kurgu', 'kurmacaya'] }, { k: 'Uzun plan / alan derinliği', w: 3, any: ['uzun plan', 'alan derinli', 'kesilmeden'] }] },
    { id: 's7', q: 'Bazin’e göre izleyici ile anlam arasındaki ilişki nasıldır?',
      a: 'Bazin izleyiciyi anlam üretim sürecine dahil eder, filmin anlamlandırılmasına ortak eder. Alan derinliği ve plan-sekanslarla izleyicinin deneyimini yüceltir; kurguyu yalnızca gerekli hâllerde kullanır. Biçimcilerin kurguyla dikte ve tek anlam yaratmasına karşıdır; yönetmen gerçekliği kaydeder, anlamı izleyiciye bırakır.',
      keys: [{ k: 'İzleyici anlam sürecine ortak', w: 3, any: ['ortak', 'dahil', 'izleyiciye birak'] }, { k: 'Alan derinliği / plan-sekans', w: 3, any: ['alan derinli', 'plan sekans', 'uzun plan'] }, { k: 'Dikte / tek anlam karşıtlığı', w: 4, any: ['dikte', 'tek anlam'] }] },
    { id: 's8', q: 'Kracauer’i ve “Caligari’den Hitler’e” çalışmasını tanıtınız.',
      a: 'Kracauer filozof, gazeteci ve film kuramcısıdır; filmleri bireylerin değil toplumun yansıması sayar. Theory of Film (1960) ile tanınır, Frankfurt Okulu’na yakındır (Horkheimer, Adorno, Benjamin). Caligari’den Hitler’e: Alman Sinemasının Psikolojik Tarihi’nde erken dönem Alman filmlerinde nazizmin izlerini sürer; Dr. Caligari’nin Muayenehanesi (1920) Alman ekspresyonizminin ilk örneğidir.',
      keys: [{ k: 'Film toplumun yansıması', w: 3, any: ['toplum'] }, { k: 'Nazizmin izleri / Alman sineması', w: 4, any: ['nazi', 'hitler', 'alman sinema'] }, { k: 'Frankfurt Okulu yakınlığı / Theory of Film', w: 3, any: ['frankfurt', 'theory of film', 'adorno'] }] },
    { id: 's9', q: 'Mitry’ye göre kadrajın işlevi nedir ve kurgu konusunda nerede durur?',
      a: 'Kadraj seyircinin gerçekle ilişkisini sınırlar ama kadraj dışında olup bitenin gerçeklik hissini de uyandırır; hem temsil edilen dünyanın hem gerçekliğin savunucusudur. Kurguda gerçekçi ve biçimci yaklaşımı sentezler: kurguyu gerekli görür, ama ne Bazin kadar mesafeli ne de Eisenstein’ın entelektüel kurgusu kadar içindedir.',
      keys: [{ k: 'Kadraj gerçekle ilişkiyi sınırlar / dışarısı gerçeklik hissi', w: 4, any: ['sinirla', 'kadraj disi', 'disinda', 'gerceklik hissi'] }, { k: 'Kurguda sentez', w: 3, any: ['sentez'] }, { k: 'Bazin kadar mesafeli değil, Eisenstein kadar içinde değil', w: 3, any: ['bazin', 'eisenstein'] }] },
    { id: 's10', q: 'Auteur sineması nedir? Bu yaklaşımın zayıf yanı nedir?',
      a: 'Auteur sineması yönetmenlerin kendilerine has stil ve anlatım yöntemleriyle birbirinden ayrılmasına işaret eder; bireysel yaratıcılık kuramıdır. Zayıf yanı inceleme ve çözümleme için net bir yöntem sunmamasıdır: bir yönetmeni auteur olan ya da olmayan diye ayırmak için kesin bir yöntem ya da biçim yoktur.',
      keys: [{ k: 'Yönetmene has stil', w: 4, any: ['stil', 'uslup', 'kendine has'] }, { k: 'Bireysel yaratıcılık', w: 3, any: ['bireysel', 'yaraticilik'] }, { k: 'Net yöntem yok', w: 3, any: ['yontem', 'net'] }] }
  ];
  (window.PRACTICE = window.PRACTICE || {}).sinema = P;
  (window.BANK = window.BANK || {}).sinema = B;
})();
