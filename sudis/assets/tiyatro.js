/* Sudis · 5. ders: Drama ve Antik Yunan Tiyatrosu (el yazısı ders notları, 01.10–05.11.26). Vize İngilizce.
   Odak: dramanın kökenine dair kuramlar ve Aristoteles’in trajedi kuramı. */
(function () {
  var S = {
    id: 'tiyatro', no: 5, title: 'Drama ve Tiyatro', author: 'Introduction to Drama (ders notları)',
    src: 'El yazısı ders notları · 01.10 – 05.11.26 · vize İngilizce',
    desc: 'Dramanın kökeni (oyun içgüdüsü, taklit, ritüel), Dionysos kültü, Thespis, Aristoteles’in trajedi kuramı, Aeschylus ve Sophocles.',
    traps: [
      { t: '**Vize İngilizce.** Cevaplarda İngilizce terimleri kullan: play instinct, imitation, ritual, dithyramb, catharsis, pity and fear, tragic flaw.', topic: 'harita' },
      { t: 'Maskeler: **Melpomene = tragedy** (ağlayan maske), **Thalia = comedy** (gülen maske). İkisi de **Dionysus** ile ilişkilendirilir.', topic: 'maske' },
      { t: 'Tiyatronun 3 temel öğesi: **Action, Imitation, Collective participation**.', topic: 'koken' },
      { t: 'Play instinct’in iki biçimi: **adopting a different personality** (anne rolü oynayan kız) ve **changing your appearance** (annesinin elbisesini giyen kız).', topic: 'koken' },
      { t: '**Pagan** Latince paganus: peasant, provincial, kırsalda yaşayan kişi. İki özellik: **nature’s sanctity** ve **polytheism**.', topic: 'ritual' },
      { t: 'Dionysus’un halk arasında popüler olmasının sebebi **dinî değil siyasidir**: tüccarlar soylulara karşı köylülerin desteğini almak için kültü yüceltti.', topic: 'dionysos' },
      { t: '**Thespis** = tarihteki **ilk aktör**; MÖ **535** Dionysia festivalinde birincilik. **Dialogue + conflict** = dramanın başlangıcı.', topic: 'thespis' },
      { t: 'Tragedy = **tragos (goat) + ode (song)** → “goat song”. Koro **keçi postu** giyerdi çünkü Dionysus’u **satyrlar** büyüttü.', topic: 'trajedi' },
      { t: 'Aristoteles: trajedi bir **ahlaki eylemin taklidi**dir (imitation of a moral action); amacı **pity and fear** uyandırıp ruhu arındırmaktır → **catharsis**.', topic: 'trajedi' },
      { t: '**Aeschylus = 2. aktör** (koro önemini kaybeder, diyalog öne çıkar). **Sophocles = 3. aktör** (üçgen sahneler), kısa zaman dilimi, karmaşık karakterler.', topic: 'yazarlar' },
      { t: 'Trajedilerde ölüm **sahne dışında** olur, bu yüzden haberi **messenger** (ulak) getirir.', topic: 'ozellik' },
      { t: 'Atina’da en çok değer verilen erdem: **moderation** (ölçülülük). Aristoteles’e göre drama bir **safety-valve**dir.', topic: 'trajedi' }
    ],
    topics: [
      { id: 'harita', title: 'Kuram haritası ve İngilizce terimler: önce bunu oku', blocks: [
        { t: 'p', text: 'Notlardaki “kuramlar” iki grupta toplanıyor: **dramanın nereden doğduğuna** dair açıklamalar (oyun içgüdüsü, taklit, ritüel) ve **Aristoteles’in trajedi kuramı** (taklit, korku ve acıma, katharsis, kusurlu kahraman). Vize İngilizce olduğu için her kavramın İngilizcesini ezberle.' },
        { t: 'table', head: ['Kuram / açıklama', 'Ana fikir', 'İngilizce anahtar cümle'], rows: [
          ['**Play instinct** (oyun içgüdüsü)', 'Drama, tiyatro sanat olmadan önce insanın günlük hayatında vardı; oyun içgüdüsü insan doğasının vazgeçilmez parçası', '“The play instinct is and has always been an indispensable part of man’s nature.”'],
          ['**Imitation** (taklit)', 'İlkel avcı av hikâyesini anlatırken avı taklit eder, postunu/tüyünü kullanır', '“The hunter imitated the hunting scene, using the fur or feathers of the hunted animal.”'],
          ['**Ritual theory** (ritüel)', 'Pagan ritüelleri zamanla seyircilerin izlediği temsillere dönüşür', '“Rituals later become representations watched by spectators.”'],
          ['**Cult of Dionysus**', 'Yunan tiyatrosu doğum–ölüm–yeniden doğuş döngüsüne bağlı Dionysos kültünden gelişti', '“Theatre in ancient Greece developed from the cult of Dionysus.”'],
          ['**Aristotle: tragedy**', 'Ahlaki bir eylemin taklidi; belirli uzunluk, başlangıç ve son', '“Tragedy is an imitation of a moral action which has a certain length, a beginning and an end.”'],
          ['**Catharsis**', 'Trajedi seyirciyi acıma ve korkuyla doldurup ruhunu arındırır', '“The aim of tragedy is to fill the audience with pity and fear so as to purify his soul.”'],
          ['**Safety-valve**', 'Drama tehlikeli duyguları boşaltır, insanı topluma bağlı biçimde hayata döndürür', '“Drama properly used was a safety-valve which could eliminate dangerous emotions.”']] },
        { t: 'h', text: 'Kronoloji' },
        { t: 'table', head: ['Aşama', 'Ne oldu?'], rows: [
          ['İlkel insan', 'Oyun içgüdüsü, avcı taklidi, pagan ritüelleri'],
          ['Bereketli Hilal / Mezopotamya', 'Tarımın doğuşu; doğa döngüsüne bağlı ritüeller'],
          ['MÖ 7.–6. yüzyıl Yunanistan', 'Dionysos kültü yükselir, festivaller kültürel olaya dönüşür'],
          ['MÖ 535', 'Thespis Dionysia festivalinde birinci: ilk aktör, diyalog ve çatışma'],
          ['Aeschylus → Sophocles', '2. aktör → 3. aktör, koro geri planda'],
          ['Bir yüzyıl sonra: Aristoteles', 'İlk epik ve trajik şiir kuramı (Poetika)']] },
        { t: 'tip', text: 'Sınavda “origin of drama” sorulursa üç basamağı sırayla yaz: **play instinct → imitation → ritual**, sonra **Dionysus → dithyramb → Thespis**.' }
      ] },
      { id: 'maske', title: 'İki maske, roman ve oyun farkı', blocks: [
        { t: 'ul', items: [
          'Tarihsel olarak iki maskenin ayrı adları vardır: **Melpomene** trajedi maskesi ya da trajedi esin perisi (muse of tragedy), **Thalia** komedi maskesi ya da komedi esin perisi (muse of comedy).',
          'Maskeler çoğunlukla **Dionysus** ile ilişkilendirilir: Dionysos Yunanların **şarap tanrısıdır**; maskeler mutlu ve üzgün duyguları gösterir, şarap içmek de derin ve büyük duygular uyandırabilir.']},
        { t: 'h', text: 'Novel ↔ Play' },
        { t: 'table', head: ['', 'Novel (roman)', 'Play (oyun)'], rows: [
          ['Amaç', 'Mainly for **reading**', 'For **performance**'],
          ['Dil', 'Prose: **description, narration, commentary** içerir', '**Spoken language**, mainly conversation; az anlatım ve yorum'],
          ['Yazarı', '**Novelist**', '**Playwright**']] }
      ] },
      { id: 'koken', title: 'Dramanın kökeni: oyun içgüdüsü ve taklit', blocks: [
        { t: 'p', text: 'Drama **insanlık tarihiyle** başlar. Tiyatro bir sanat olarak kurulmadan önce bile insanın **günlük hayatının** bir parçası olarak uygulanıyordu, çünkü **play instinct** (oyun içgüdüsü) her zaman insan doğasının vazgeçilmez bir parçası oldu.' },
        { t: 'h', text: 'Play instinct (oyun içgüdüsü)' },
        { t: 'ul', items: [
          'Fiziksel enerjiyi ve hayal gücünü **boşaltmanın** bir yolunu sunar (releasing physical energy and imagination).',
          'Bir tür **psikoterapi** işlevi görür ve bir anlamda **gerçeklikten kaçış** yoludur (escaping from realities).',
          '“**Ecstasy in pretending**”: -mış gibi yapmanın verdiği coşku.',
          'İki biçimi: **1) adopting a different personality** (anne rolü oynayan kızlar), **2) changing your appearance** (annelerinin elbiselerini giyen kızlar).']},
        { t: 'h', text: 'Imitation (taklit) ve ilkel avcı' },
        { t: 'p', text: 'Dramanın kökeni **ilkel insana** kadar gider. O günlerde hayatta kalmak için en önemli etkinlik **beslenmeydi**; ilkel insan ava gider, dönünce başarılarını birbirine anlatırdı. Avcı av sahnesini **taklit eder**, hikâyeyi daha ilginç ve gerçekçi kılmak için bazen avlanan hayvanın **postunu ya da tüyünü** kullanırdı.' },
        { t: 'h', text: 'Tiyatronun temel öğeleri (Basic elements of theatre)' },
        { t: 'ol', items: ['**Action** (eylem)', '**Imitation** (taklit)', '**Collective participation** (toplu katılım)'] }
      ] },
      { id: 'ritual', title: 'Pagan inançlar ve ritüel kuramı', blocks: [
        { t: 'p', text: 'Bu insanlar (avcılar, ilkel insan) **pagan**dı: güçlü olan her şeye inanırlardı (bir hayvan, büyük bir ağaç, güneş, ay…).' },
        { t: 'h', text: 'Pagan' },
        { t: 'ul', items: [
          'Latince **“paganus”** sözcüğünden gelir: antik Roma’da **peasant** (köylü), **provincial** (taşralı) ya da **kırsalda yaşayan kişi**.',
          '**Nature’s sanctity** (doğanın kutsallığı): evren, doğa ve doğa olayları (güneş, ay, fırtına, toprak) **tanrısal enerjilerin ya da tanrıların görünümleri** sayılır.',
          '**Polytheism** (çoktanrıcılık): genellikle birden fazla tanrı ya da tanrıça.',
          '**Rituals** → bir tür **ibadet** (a kind of worship).']},
        { t: 'h', text: 'Ritüelden temsile: 4 aşama' },
        { t: 'ol', items: [
          'İlkel insan **varlığını kontrol eden güçlerin** farkına varır: (a) doğa güçlerini (yağmur, gök gürültüsü, fırtına, deprem) anlamaz; (b) bunları doğaüstü güçler sanır.',
          'İnsan “doğayı” bir **doğum – üreme – ölüm** süreci olarak yorumlar (**mevsim döngüsü**).',
          'Ritüeller zamanla **seyircilerin izlediği temsillere** dönüşür. Bu temsiller **eski yıl / yeni yıl, kış ve yaz, yaşam ve ölüm** arasındaki **çatışmayı** gösterir; sonunda **iyi kazanır**.',
          'Ritüeller bir toplumun **evreni anlayışını** yansıtır: **gelenekleri ve bilgiyi aktarma** araçlarıdır; doğaüstü bir gücün gönlünü kazanarak **doğa olaylarını kontrol etmeyi** amaçlar. Sonra **kutlama** araçlarına dönüşür (iyi bir av, savaşta zafer). Ritüeller **katılımcıya ve seyirciye haz** verir.']},
        { t: 'h', text: 'Bereketli Hilal (Fertile Crescent)' },
        { t: 'p', text: '**Fırat ve Dicle** nehirleri arasındaki bölge: **Mezopotamya**. Burası **tarımın doğuşu**nun (rise of agriculture) yeridir; doğanın döngüsüne bağlı ritüeller tarımla birlikte önem kazanır.' }
      ] },
      { id: 'yunan', title: 'Antik Yunan: kahramanlık anlayışı ve tanrılar', blocks: [
        { t: 'ul', items: [
          '**Heroic manhood** (kahramanca erkeklik): bu kahramanca bakış **Yunan aristokratik eğitiminin temelidir**.',
          '**Ortak dil** (kolay iletişim), ortak zevkler, eğilimler ve soy sayesinde kültür **bir şehir-devletten ötekine** kolayca yayıldı.',
          'Kendilerini **tanrılara yakın** görürlerdi; **bireyci** (individualistic) insanlardı; **kahramanlık mitlerini efsanelerden** alırlardı.',
          'Tanrılar **Olimpos dağında** yaşardı: **Chronos** (Zeus’un babası), **Zeus**, **Hera** (Zeus’un karısı, bazı tanrıların annesi), **Dionysus** vb.']}
      ] },
      { id: 'dionysos', title: 'Dionysos kültü', blocks: [
        { t: 'p', text: 'Antik Yunan’da tiyatro **Dionysos kültünden** gelişti. Dionysos, **mevsim döngüsü** ve **doğum – ölüm – yeniden doğuş** süreciyle ilgili ritüellere bağlı bir Yunan tanrısıdır.' },
        { t: 'h', text: 'Mit' },
        { t: 'p', text: 'Zeus ile Semele’nin oğludur. **Satyrlar** (keçi ayaklı yaratıklar) tarafından büyütülür. Sonra kıskanç **Hera**’nın emriyle **Titanlar** onu parçalar; Zeus ona yeniden hayat verir (**rebirth**). Bu yüzden hem **acının** (ölüm) hem **sevincin** (yeniden doğuş) tanrısıdır.' },
        { t: 'low', text: 'Notta Semele “ay tanrısı” olarak geçiyor; mitolojide Semele genellikle ölümlü bir prensestir. Sınavda notlardaki bilgiyle yaz.' },
        { t: 'h', text: 'Neden popüler oldu? (Siyasi açıklama)' },
        { t: 'ul', items: [
          'MÖ **7. ve 6. yüzyılda** tüccarlar zenginleşiyor ve yönetimi **soylularla** paylaşmak istiyordu: bir tür **sınıf çatışması** başladı.',
          '**Çiftçileri** yanlarına çekmek için tüccarlar **köylülerin tanrısı** Dionysos kültüne daha yüksek bir statü verdi.',
          'Zeus ve Apollon gibi ana tanrılar **soyluların kontrolündeki** törenlerle onurlandırılıyordu. Dionysos ise **soyluların kontrolü olmadan** kutlanabilen alternatif bir tanrıydı.',
          'Sonuç: Dionysos’un şehir-devletlerinde popüler olmasının sebebi **dinî değil siyasidir**. Dionysos **sıradan halkın tanrısı** olarak sevildi; adına yapılan festivaller giderek **kültürel etkinliklere** dönüştü.']},
        { t: 'h', text: 'Sembol ve koro' },
        { t: 'ul', items: [
          'Dionysos **“acı ve ölüm”** ile **“sevinç ve yaşam”** arasındaki ikilemi temsil eder → **tragedy and comedy** → Melpomene ve Thalia maskeleri.',
          'Gösterideki şarkı ve danslar **koronun** paylaştığı **“collective emotion”**un (toplu duygu) ifadesidir.',
          'Dansçılar **maske** takar ve böylece **bireyselliklerini kaybeder**; ortak bir ritimle dans ederler.',
          'Dionysos **toplu coşku ve duygunun** simgesine dönüşür (collective enthusiasm and emotion).']}
      ] },
      { id: 'toplum', title: 'Antik Yunan’da toplum yapısı', blocks: [
        { t: 'table', head: ['Grup', 'Durumu'], rows: [
          ['1. **Citizens** (yurttaşlar)', 'Oy hakkı vardı, **kalıtsal ayrıcalık**. Yalnızca erkekler: soylular, toprak sahipleri, zengin tüccarlar, sanayiciler (**kadınlar değil**)'],
          ['2. **Women and children**', 'Kamusal hayatta yerleri ve yetkileri yoktu'],
          ['3. **Foreigners**', 'Yalnızca zanaatkâr ve üretici olarak çalışabilirdi; yönetimde payları yoktu'],
          ['4. **Slaves**', 'İşlerin çoğunu yapardı; hiçbir sosyal hakları yoktu']] },
        { t: 'tip', text: 'Yurttaşların (1. grup) **siyasete, kültüre ve saf bilime** ayıracak boş zamanı vardı; tiyatronun seyircisi ve hedefi de onlardı.' }
      ] },
      { id: 'thespis', title: 'Thespis: ilk aktör, diyalog ve çatışma', blocks: [
        { t: 'ul', items: [
          '**Thespis tiyatro tarihindeki ilk aktördür.** Tiyatroyu **dithyramb**dan (Dionysos’a söylenen koro şarkısı) geliştirdi.',
          'Yükseltilmiş bir platforma (belki bir masa) çıkıp **koro başıyla diyalog** başlattı.',
          'Aktör ile koro başı arasındaki diyalog bir **çatışmaya** dayanıyordu: **god versus man, man versus fate, man versus society**.',
          'Böylece bir dithyramb gösterisinde **ilk kez “fikirlerin çatışması”** (a clash of ideas) oldu. **“Dialogue” ve “conflict” dramanın başlangıcını** işaret eder.',
          'MÖ **535** Dionysia festivalinde Thespis yarışmada **birincilik** kazandı (aktör ve oyun yazarı olarak).',
          'Thespis **maske** kullandı ve **birden çok karakteri** canlandırdı. Tiyatro böylece bir politikacının (**Peisistratos**) ve bir aktörün (**Thespis**) taklidiyle kuruldu; bu olay aynı zamanda **devlet ile tiyatro arasındaki ilk ilişkiyi** gösterir.']},
        { t: 'h', text: 'Oyun yazarının görevi' },
        { t: 'p', text: 'Atinalının gazetesi, sineması, radyosu ya da televizyonu yoktu; edebî zevk ve eğlence için **arkadaşlarıyla sohbete** ve **tiyatro gösterilerine** bağlıydı. Oyun yazarı bu çok önemli görevin bilincindeydi: seyirci oyunlara **daha iyi ve dolu bir hayat** sürmek için **öğüt ve cesaret** almaya gelirdi. Sonuç olarak Atinalı oyun yazarının **ulusal zihin ve karakter** üzerinde derin bir etkisi vardı.' },
        { t: 'h', text: 'Maskelerin 3 amacı' },
        { t: 'ol', items: [
          'Karakteri **uzaktan kolayca tanınır** kılar.',
          'Aktörlerin aynı oyunda **birden çok karakter** oynamasını sağlar.',
          'Kalabalık tiyatroda **hoparlör** işlevi görür (ağız kısmı açıktır).']}
      ] },
      { id: 'trajedi', title: 'Trajedi ve Aristoteles’in kuramı', blocks: [
        { t: 'h', text: 'Sözcüğün kökeni' },
        { t: 'p', text: 'Tragedy, **“tragos”** (keçi) ve **“ode”** (şarkı) sözcüklerinden gelir: **“a goat song”**. Dionysos festivalindeki korolar **keçi postu** giyerdi, çünkü Dionysos **satyrlar** tarafından büyütülmüştü. Trajedilerin **dithyramb**lardan evrildiği düşünülür.' },
        { t: 'h', text: 'Aristoteles’in tanımı' },
        { t: 'p', text: 'Bir yüzyıl sonra **epik ve trajik şiirin ilk kuramını** yazan **Aristoteles**’e göre trajedi, **belirli bir uzunluğu, bir başlangıcı ve bir sonu olan ahlaki bir eylemin taklididir** (an imitation of a moral action). Trajedinin amacı seyirciyi **acıma (pity) ve korku (fear)** ile doldurup ruhunu **arındırmaktır**: **catharsis**.' },
        { t: 'h', text: 'Trajik kahraman (the hero)' },
        { t: 'ol', items: [
          '**Erdemli** bir insandır (a man of virtue).',
          'Karakterinde bir **kusur** vardır (a flaw: zayıf bir yan, bir hata). Bu kavram genellikle **tragic flaw / hamartia** olarak bilinir.',
          'Bu kusur yüzünden **hatalar yapar** (ve düşüşü buradan gelir).']},
        { t: 'low', text: '“Hamartia” terimi notlarda geçmiyor; Aristoteles’in bu kavram için kullandığı sözcüktür. Sınavda “tragic flaw” demen yeterli.' },
        { t: 'h', text: 'Drama bir emniyet supabıdır (safety-valve)' },
        { t: 'p', text: 'Aristoteles’e göre doğru kullanılan drama, **tehlikeli duyguları ortadan kaldırabilen** ve insanı hemcinslerine ve hayattaki amacına **daha fazla inançla** günlük hayatına geri gönderen bir **emniyet supabıdır**. Kısacası Atina’da tiyatro **ahlaki değerleri ve toplumsal düzeni** korumada önemli bir etkendi. En çok değer verilen erdem **“moderation”** (ölçülülük) idi.' }
      ] },
      { id: 'yazarlar', title: 'Aeschylus ve Sophocles', blocks: [
        { t: 'h', text: 'Aeschylus' },
        { t: 'ul', items: [
          'Trajediyi **Thespis’in bıraktığı yerden** geliştirdi.',
          '**İkinci aktörü** ekledi (önemli bir teknik gelişme). Böylece aktörlerin rolü önem kazandı, **koro** (aslında dithyramb) sahnedeki önemini kısmen kaybetti. İkinci aktörle **diyalog daha önemli** hâle geldi.',
          'Tema: **insanlar ve tanrılar**; notlara göre insanlar tanrılar karşısındaki zayıflıklarını kaybeder.',
          'Oyunlarında **uzun zaman dilimlerini** ve **aile tarihlerini** (birçok kuşak) işler.']},
        { t: 'h', text: 'Sophocles' },
        { t: 'ol', items: [
          'Sahneye **üçüncü konuşan aktörü** ekledi. Üç aktör **üçgen sahneleri** (triangular scenes) mümkün kıldı; böylece yeni dramatik ilişkiler keşfetti.',
          '**Dramatik ekonomi ve yoğunluk** için çalıştı. Sonuçları: (a) oyunun başındaki **prologda** geçmiş olaylar daha çok **anlatıldı** (exposition); (b) **koro daha az önemli** oldu; (c) oyunda **daha çok dramatik eylem** vardı.',
          'İnsan eylemi ve acısına yeni bir bakış getirdi: Aeschylus uzun dönemleri ve kuşakları anlatırken Sophocles dramatik eylemi **kısa bir zaman dilimine** daralttı.',
          'Karakterlerini **daha karmaşık** ve psikolojik açıdan **daha derin** yaptı.']},
        { t: 'table', head: ['', 'Aeschylus', 'Sophocles'], rows: [
          ['Aktör sayısı', '**2. aktör**ü ekledi', '**3. aktör**ü ekledi'],
          ['Zaman', 'Uzun dönemler, kuşaklar boyu aile tarihleri', 'Kısa zaman dilimi'],
          ['Koro', 'Önemini kısmen kaybeder', 'Daha da az önemli'],
          ['Karakter', '—', 'Karmaşık, psikolojik olarak derin']] }
      ] },
      { id: 'ozellik', title: 'Yunan trajedisinin özellikleri', blocks: [
        { t: 'ol', items: [
          'Hikâye **oyun başlamadan önce** yaşanmıştır; yalnızca **son bölümü** sahnelenir (önceki olayları karakterler anlatır).',
          'Trajedilerin çoğunda **ölüm sahne dışında** olur; bu yüzden karakterlerin ölümünü anlatmak için **“messengers”** (ulaklar) sahneye gelir.',
          'Trajedilerin çoğunda eylem **kesintisizdir** (continuous).',
          'Hemen hemen bütün trajediler **mit ya da tarihe** dayanır. Yazarlar hikâyeleri değiştirdiği için **aynı hikâyenin farklı yorumları** vardı.',
          'Trajediler sahnede işlenen **olay ve karakter özelliklerinin sayısı** bakımından **ekonomikti**.',
          'Yazarlar karakterlerin **fiziksel ya da sosyolojik** özelliklerinden çok **psikolojik ve etik** özelliklerine odaklandı.']}
      ] },
      { id: 'antigone', title: 'Antigone’nin karakteri: toplumsal cinsiyet ve kadın rolü', blocks: [
        { t: 'p', text: '05.11 dersinde başlayan konu: **The character of Antigone → gender, identity and female role.**' },
        { t: 'ul', items: [
          'Atinalı yurttaş kadınlar **korunaklı** (sheltered) tutulurdu; hayatlarının neredeyse her yönü **erkek vasiler** (male guardians) tarafından kontrol edilirdi.',
          '**Cenazelerde** kadınların görevi **ağıt yakmak**tı (lament).',
          'Toplum yapısı tablosunu hatırla: kadınların kamusal hayatta **yeri ve yetkisi yoktu**. Antigone’yi bu arka plana göre oku: kadın bir karakterin kamusal bir eylemi üstlenmesi, dönemin kadın rolüyle çatışır.']},
        { t: 'low', text: 'Notlar bu konuda yarım kalıyor (“At funerals lament”). Ders ilerledikçe yeni notlarını gönderirsen bu bölümü genişletebilirim.' }
      ] }
    ]
  };
  (window.SUBJECTS = window.SUBJECTS || []).push(S);

  var P = [
    { id: 'tA1', q: 'What is the “play instinct”? Explain its functions and its two forms. (Oyun içgüdüsü nedir? İşlevlerini ve iki biçimini açıklayınız.)',
      a: 'Drama began with the history of man; even before theatre was an art form it was part of daily life, because the play instinct has always been an indispensable part of man’s nature. It provides a means of releasing physical energy and imagination, serves as psychotherapy and is a way of escaping from realities (the ecstasy in pretending). Its two forms are adopting a different personality (girls playing mothers) and changing your appearance (girls wearing their mothers’ dresses).',
      keys: [
        { k: 'Part of man’s nature / daily life before theatre', w: 2, any: ['nature', 'daily life', 'indispensable', 'dogasi', 'gunluk'] },
        { k: 'Releasing physical energy and imagination', w: 2, any: ['energy', 'imagination', 'enerji', 'hayal'] },
        { k: 'Psychotherapy / escaping from realities', w: 2, any: ['psychotherap', 'escap', 'psikoterapi', 'kacis', 'pretend'] },
        { k: 'Adopting a different personality', w: 2, any: ['personality', 'kisilik', 'playing mother'] },
        { k: 'Changing your appearance', w: 2, any: ['appearance', 'dress', 'gorunus', 'elbise'] }] },
    { id: 'tA2', q: 'Explain how drama originated from imitation and rituals. (Dramanın taklit ve ritüellerden nasıl doğduğunu açıklayınız.)',
      a: 'The origin of drama goes back to primitive man. Feeding was the most important activity, so primitive men went hunting and told each other about their achievements; the hunter imitated the hunting scene and used the fur or feathers of the hunted animal to make the story more interesting and realistic. Primitive man was pagan and believed in strong things; rituals were a kind of worship. Man interpreted nature as a cycle of birth, reproduction and death, and rituals later became representations watched by spectators, showing the conflict between old year and new year, winter and summer, life and death, where the good wins.',
      keys: [
        { k: 'Primitive man / hunter', w: 2, any: ['primitive', 'hunt', 'avci', 'ilkel'] },
        { k: 'Imitation of the hunt (fur, feathers)', w: 2, any: ['imitat', 'fur', 'feather', 'taklit', 'post'] },
        { k: 'Rituals as worship (pagan)', w: 2, any: ['ritual', 'worship', 'pagan', 'ritue'] },
        { k: 'Birth–reproduction–death / cycle of seasons', w: 2, any: ['birth', 'cycle', 'season', 'dongu', 'mevsim'] },
        { k: 'Representations watched by spectators / conflict', w: 2, any: ['spectator', 'representation', 'conflict', 'seyirci', 'catisma'] }] },
    { id: 'tA3', q: 'What does “pagan” mean and what are the main features of pagan belief? (Pagan ne demektir, temel özellikleri nelerdir?)',
      a: 'Pagan comes from the Latin word “paganus”, meaning peasant, provincial or a person living in the countryside in ancient Rome. Its features are nature’s sanctity, where the universe, nature and natural phenomena such as the sun, moon, storm and earth are seen as manifestations of divine energies or gods, and polytheism, belief in more than one god or goddess. Rituals were a kind of worship.',
      keys: [
        { k: 'Latin “paganus”', w: 2, any: ['paganus', 'latin'] },
        { k: 'Peasant / provincial / countryside', w: 2, any: ['peasant', 'provincial', 'countryside', 'koylu', 'tasra', 'kirsal'] },
        { k: 'Nature’s sanctity (divine energies)', w: 3, any: ['sanctity', 'divine', 'kutsal', 'manifestation'] },
        { k: 'Polytheism', w: 3, any: ['polythe', 'more than one god', 'coktanri'] }] },
    { id: 'tA4', q: 'Why did Dionysus become a popular god in the Greek city-states? (Dionysos neden popüler oldu?)',
      a: 'In the 7th and 6th centuries B.C. merchants were getting rich and wanted to share the rule with the nobles, so a class conflict started. To have the farmers on their side, the merchants gave the cult of Dionysus, a god of peasants, a higher status. Zeus and Apollo were honoured by ceremonies under the control of the nobles, while Dionysus could be celebrated without their control. So the reason was political rather than religious; Dionysus was the god of common people and his festivals turned into cultural events.',
      keys: [
        { k: 'Merchants vs nobles / class conflict', w: 3, any: ['merchant', 'noble', 'class', 'tuccar', 'soylu', 'sinif'] },
        { k: 'Farmers / peasants’ god', w: 2, any: ['farmer', 'peasant', 'ciftci', 'koylu'] },
        { k: 'Political rather than religious', w: 3, any: ['political', 'siyasi', 'politic'] },
        { k: 'God of common people / festivals → cultural events', w: 2, any: ['common people', 'festival', 'cultural', 'halk'] }] },
    { id: 'tA5', q: 'Who was Thespis and why is he important in the history of theatre? (Thespis kimdir, neden önemlidir?)',
      a: 'Thespis is the first actor in the history of theatre. He developed theatre from the dithyramb: he stood on a raised platform and started a dialogue with the chorus leader. The dialogue was based on a conflict such as god versus man, man versus fate or man versus society, so for the first time there was a clash of ideas. Dialogue and conflict mark the beginning of drama. In the Dionysian festival of 535 B.C. he won the first prize; he used masks and impersonated several characters, and his relation with Peisistratus marks the first relation between the state and theatre.',
      keys: [
        { k: 'First actor', w: 2, any: ['first actor', 'ilk aktor', 'ilk oyuncu'] },
        { k: 'Dithyramb / dialogue with chorus leader', w: 2, any: ['dithyramb', 'chorus leader', 'dialogue', 'koro', 'diyalog'] },
        { k: 'Conflict (god / fate / society) / clash of ideas', w: 3, any: ['conflict', 'clash', 'fate', 'society', 'catisma'] },
        { k: '535 B.C. first prize / masks / state relation', w: 3, any: ['535', 'prize', 'mask', 'peisistrat', 'state'] }] },
    { id: 'tA6', q: 'Give Aristotle’s definition of tragedy and explain catharsis. (Aristoteles’in trajedi tanımını verip katharsisi açıklayınız.)',
      a: 'According to Aristotle, who wrote the first theory of epic and tragic poetry, tragedy is an imitation of a moral action which has a certain length, a beginning and an end. The aim of tragedy is to fill the audience with pity and fear so as to purify his soul; this purification is called catharsis. Drama properly used is a safety-valve that eliminates dangerous emotions and sends man back to daily life with greater faith.',
      keys: [
        { k: 'Imitation of a moral action', w: 3, any: ['imitation', 'moral action', 'taklit'] },
        { k: 'Certain length, beginning and end', w: 2, any: ['length', 'beginning', 'end', 'uzunluk'] },
        { k: 'Pity and fear', w: 2, any: ['pity', 'fear', 'acima', 'korku'] },
        { k: 'Purify the soul = catharsis', w: 3, any: ['catharsis', 'purif', 'katharsis', 'arin'] }] },
    { id: 'tA7', q: 'Compare the contributions of Aeschylus and Sophocles. (Aeschylus ve Sophocles’in katkılarını karşılaştırınız.)',
      a: 'Aeschylus developed tragedy from where Thespis had left off and added the second actor, so dialogue became more important and the chorus lost some of its importance; his plays cover long periods of time and family histories over many generations. Sophocles added the third speaking actor, which made triangular scenes possible. He worked towards dramatic economy and intensity: more exposition in the prologue, a less important chorus and more dramatic action. He narrowed the action to a short span of time and made his characters more complex and psychologically complicated.',
      keys: [
        { k: 'Aeschylus: second actor', w: 3, any: ['second actor', 'ikinci aktor', '2nd actor'] },
        { k: 'Sophocles: third actor / triangular scenes', w: 3, any: ['third actor', 'triangular', 'ucuncu', '3rd'] },
        { k: 'Chorus less important / dialogue more important', w: 2, any: ['chorus', 'dialogue', 'koro'] },
        { k: 'Long periods vs short span / complex characters', w: 2, any: ['short', 'generation', 'complex', 'psycholog', 'kisa'] }] },
    { id: 'tA8', q: 'List the characteristics of Greek tragedy. (Yunan trajedisinin özelliklerini sıralayınız.)',
      a: 'The story has taken place before the play starts and only the final part is dramatized. Most tragedies have death off-stage, so messengers tell about the deaths. The action is continuous. Almost all tragedies are based on myth or history and writers altered the stories, so there were different interpretations. Tragedies were economical in the number of events and character traits. Writers concentrated on the psychological and ethical attributes of their characters rather than physical or sociological characteristics.',
      keys: [
        { k: 'Only the final part is dramatized', w: 2, any: ['final part', 'before the play', 'son bolum'] },
        { k: 'Death off-stage / messengers', w: 2, any: ['messenger', 'off stage', 'offstage', 'ulak'] },
        { k: 'Continuous action', w: 1, any: ['continuous', 'kesintisiz'] },
        { k: 'Based on myth or history', w: 2, any: ['myth', 'history', 'mit', 'tarih'] },
        { k: 'Economical / psychological and ethical attributes', w: 3, any: ['economical', 'psycholog', 'ethical', 'etik', 'ekonomik'] }] }
  ];
  var B = [
    { id: 't1', q: 'What are the two masks of drama and what do they represent? (Dramanın iki maskesi nedir?)',
      a: 'Melpomene represents the tragedy mask, the muse of tragedy; Thalia represents the comedy mask, the muse of comedy. People often relate the masks to Dionysus, the Greek god of wine, because the masks depict happy and sad emotions and drinking wine can bring deep and huge emotions.',
      keys: [{ k: 'Melpomene = tragedy', w: 4, any: ['melpomene'] }, { k: 'Thalia = comedy', w: 4, any: ['thalia'] }, { k: 'Dionysus / wine', w: 2, any: ['dionys', 'wine', 'sarap'] }] },
    { id: 't2', q: 'What are the differences between a novel and a play? (Roman ile oyun arasındaki farklar nelerdir?)',
      a: 'A novel is mainly for reading, a play is for performance. A play is based on spoken language, mainly conversation; although both have prose, the prose of a novel includes description, narration and commentary, which a play does not have much of. A person who writes novels is a novelist, a person who writes plays is a playwright.',
      keys: [{ k: 'Reading vs performance', w: 4, any: ['reading', 'performance', 'okuma', 'sahne'] }, { k: 'Spoken language / conversation', w: 3, any: ['spoken', 'conversation', 'konusma'] }, { k: 'Novelist vs playwright', w: 3, any: ['playwright', 'novelist'] }] },
    { id: 't3', q: 'What are the basic elements of theatre? (Tiyatronun temel öğeleri nelerdir?)',
      a: 'The basic elements of theatre are action, imitation and collective participation.',
      keys: [{ k: 'Action', w: 3, any: ['action', 'eylem'] }, { k: 'Imitation', w: 3, any: ['imitat', 'taklit'] }, { k: 'Collective participation', w: 4, any: ['collective', 'participation', 'katilim', 'toplu'] }] },
    { id: 't4', q: 'Explain the four steps by which rituals turned into representations. (Ritüellerin temsile dönüşmesinin 4 aşaması)',
      a: 'First, primitive man becomes aware of forces which control his existence: he does not understand natural forces like rain, thunder, storm and earthquake and thinks they are supernatural. Second, man interprets nature as a process of birth, reproduction and death, the cycle of seasons. Third, rituals later become representations watched by spectators, showing the conflict between old year and new year, winter and summer, life and death, and in the end the good wins. Fourth, rituals reflect a society’s understanding of the universe; they pass on traditions and knowledge, aim at controlling natural events, later become means of celebration and give pleasure to the participant and the spectator.',
      keys: [{ k: 'Forces controlling existence (natural forces)', w: 2, any: ['forces', 'thunder', 'storm', 'guc'] }, { k: 'Birth–reproduction–death cycle', w: 2, any: ['birth', 'reproduction', 'cycle', 'dongu'] }, { k: 'Representations for spectators / conflict, good wins', w: 3, any: ['spectator', 'representation', 'good wins', 'conflict'] }, { k: 'Passing on traditions / celebration / pleasure', w: 3, any: ['tradition', 'celebration', 'pleasure', 'gelenek', 'kutlama'] }] },
    { id: 't5', q: 'Describe the social structure of ancient Greece. (Antik Yunan’da toplum yapısı)',
      a: 'Society was divided into four groups. Citizens had the right to vote as a hereditary privilege; only men, nobles, landowners, rich merchants and industrialists could vote, not women, and they had leisure for politics, culture and pure science. Women and children had no place or authority in public life. Foreigners could only work as craftsmen and manufacturers and had no share in government. Slaves did most of the work and had no social rights.',
      keys: [{ k: 'Citizens: vote, only men', w: 3, any: ['citizen', 'vote', 'yurttas', 'oy'] }, { k: 'Women and children: no public role', w: 2, any: ['women', 'kadin'] }, { k: 'Foreigners: craftsmen, no government', w: 2, any: ['foreign', 'craftsm', 'yabanci'] }, { k: 'Slaves: no social rights', w: 3, any: ['slave', 'kole'] }] },
    { id: 't6', q: 'Why were masks used in Greek theatre? (Maskelerin 3 amacı)',
      a: 'The chorus and the actors were masked. Masks made the character easily recognisable from a distance, enabled actors to play several characters in the same play, and served as a loud speaker, with the mouth part open, in a crowded theatre.',
      keys: [{ k: 'Recognisable from a distance', w: 3, any: ['recogni', 'distance', 'uzaktan', 'tanin'] }, { k: 'Several characters', w: 4, any: ['several', 'birden', 'multiple'] }, { k: 'Loud speaker', w: 3, any: ['speaker', 'loud', 'hoparlor', 'ses'] }] },
    { id: 't7', q: 'Where does the word “tragedy” come from? (Tragedy sözcüğünün kökeni)',
      a: 'Tragedy comes from “tragos” meaning goat and “ode” meaning song, so it means a goat song. The choruses of the Dionysian festival wore goatskins because Dionysus was brought up by satyrs. Tragedies are thought to have evolved from the dithyrambs.',
      keys: [{ k: 'Tragos + ode = goat song', w: 4, any: ['tragos', 'goat', 'keci', 'ode'] }, { k: 'Goatskins / satyrs', w: 3, any: ['goatskin', 'satyr'] }, { k: 'Evolved from dithyrambs', w: 3, any: ['dithyramb'] }] },
    { id: 't8', q: 'Describe the tragic hero according to the lecture notes. (Trajik kahraman)',
      a: 'The tragic hero is a man of virtue, but there is a flaw, a weak part or a fault, in his character, and due to this flaw he makes mistakes that lead to his downfall. The audience feels pity and fear for him, which leads to catharsis.',
      keys: [{ k: 'Man of virtue', w: 3, any: ['virtue', 'erdem'] }, { k: 'Flaw / weak part / fault', w: 4, any: ['flaw', 'fault', 'weak', 'kusur', 'hamartia'] }, { k: 'Makes mistakes', w: 3, any: ['mistake', 'hata'] }] }
  ];
  (window.PRACTICE = window.PRACTICE || {}).tiyatro = P;
  (window.BANK = window.BANK || {}).tiyatro = B;
})();
