(function () {
var Q = App.Q, mc = Q.mc, tf = Q.tf, fill = Q.fill, op = Q.op, lg = Q.lg;

/* Notlardaki boşluk doldurma (1–52) — birebir, cevap anahtarıyla */
var HOCA = [
  ['temel', 'KALİTATİF KARAKTERLER\n__________; bakmak suretiyle tespit edilen ve sözle ifade edilen özelliklerdir.', ['Kalitatif Karakterler', 'kalitatif']],
  ['temel', 'KANTİTATİF KARAKTERLER\n__________; ölçmek, tartmak veya analiz sonucunda tespit edilebilen ve rakamlarla ifade edilen özelliklerdir.', ['Kantitatif Karakterler', 'kantitatif']],
  ['temel', 'Kölreuter 1760 Bitkilerde (tütün) ilk kez yapay hibritleme. Melezlerin entermedier __________', ['olduğunu saptamış']],
  ['temel', 'Naudin 1862 Hibridler iki ebeveynin yeteneklerinin karışımıdır, daha sonra bunlar ayrılır (Mendelin segregasyon kuralına en __________)', ['yakın görüş']],
  ['temel', 'Mendel 1865 Segregasyon ve Bağımsızlık (Genetik __________)', ['biliminin miladı']],
  ['temel', 'Her deneyde yalnız bir veya bir-iki alternatif __________, bu da sonuçların daha az karmaşık olmasını sağlamıştır.', ['karakteri kullanmış']],
  ['temel', 'Deney sonuçlarının kayıtlarını mükemmel bir __________.', ['şekilde tutmuştur']],
  ['temel', 'Birbirinden bağımsız olarak aktarılan (taşınan) yedi karakter __________.', ['ile çalışmıştır']],
  ['temel', 'Bu üniteleri oluşturan kalıtım __________ denilmektedir.', ['faktörlerine GEN', 'faktörlerine gen']],
  ['cevre', 'Aynı yumurtadan ikizlerin ayrı ayrı __________ büyümeleri, en azından ölçülebilen özellikler bakımından farklar göstermelerine sebep olur.', ['çevre şartlarında']],
  ['cevre', 'Hem erkek hem dişi organa sahip olan ve hem erkek hem dişi eşey hücreleri meydana getirebilen __________ tir.', ['bireyler hermafrodit']],
  ['cevre', 'Herhangi bir karakter bakımından __________ fenotipler göstermelerinde çevresel şartlarla genotipin rolü vardır.', ['canlıların farklı']],
  ['cevre', 'Modifikasyonlar, meydana gelmelerine sebep olan çevre şartları ortadan __________,', ['kalktığında kaybolurlar']],
  ['cevre', 'Çekirge larvaları 16 derecede gelişirse benekli, 25 derecede gelişirse __________.', ['beneksiz olur', 'beneksiz']],
  ['cevre', 'Herhangi bir karakterin değil, bu karakter bakımından bireyler arasındaki farkın kalıtsal olup olmadığından veya bunun derecesinden __________.', ['söz edilebilir']],
  ['mendel', 'Kontrol Çiftleştirmesi (Test-crossing)\nDominant fenotipli bireylerin homozigot veya heterozigot olup olmadığını anlamak için, __________ birey ile çiftleştirilmesidir.', ['ressesif fenotipli', 'resesif fenotipli']],
  ['mendel', 'Mendelin Trihibrit Çaprazı\nHerhangi bir karakterin farklı hallerini __________.', ['belirleyen genlerdir']],
  ['mendel', 'Bu gene __________ , meydana getirdiği hale de Dominant Hal denir.', ['Dominat Gen', 'dominant gen']],
  ['mendel', 'Resesif gen genellikle etkisini hiç gösteremez bu durum __________ olarak tanımlanır.', ['Tam Dominantlık']],
  ['mendel', 'Ana ve babaya ait gametler, bir karakterin aynı halini oluşturan genleri taşıyorlarsa bunlardan meydana gelen zigot, o karakterin mevcut hali __________ denir.', ['bakımından Homozigottur']],
  ['mendel', 'Birleşen gametler, üzerinde durulan karakterin farklı hallerini belirten genleri taşıyorlarsa da __________.', ['Heterozigottur denir']],
  ['etkilesim', 'Etkileyen gen epistatik gen, etki altında kalan gen hipostatik gen __________.', ['olarak tanımlanır']],
  ['etkilesim', 'Resesif epistazis\nBir genin çekinik allellerinin diğer bir genin allellerinin etkisini maskelemesidir. aa BB __________', ['Bb bb']],
  ['etkilesim', 'Mevcut örnekte tüylerde koyu renk pigmenti (-) sarı labrador ve pigmentin (+) olduğu siyah ve kahverengi labrador görünmektedir. ‘ee’ varlığında diğer __________.', ['gen maskelenir']],
  ['etkilesim', 'Dominant epistazis\nBir genin dominant allelinin diğer bir genin allellerinin etkisini maskelemesi Aa/AA BB __________', ['Bb bb']],
  ['etkilesim', 'Mutant bir genotipin en azından belirli bir derecede ifade edilmesini gösteren bireylerin yüzdesi __________ olarak tanımlanır.', ['mutasyonun penetransı']],
  ['etkilesim', 'Bu özellik bakımından taşıyıcı kadınların __________’ü renk körü olmaktadır.', ['%3', '3']],
  ['etkilesim', 'Pleitropizm\nSiyam Kedisi: Bacaklar koyu renk, Gövde beyaz, __________', ['Gözlerde şaşılık']],
  ['polimorfizm', 'GENETİK; canlılarda kalıtım ve __________ ilgili olayları, bunların sebeplerini ve bağlı oldukları kanunları araştıran bir bilimdir.', ['varyasyon ile']],
  ['polimorfizm', 'Populasyon genetikçileri, bir gen lokusu için, nadir alleller en az __________ frekansına sahip ve bu alleller için heterozigotlar en az %2 oranında görülürlerse polimorfik olarak tanımlarlar.', ['%1', '1']],
  ['polimorfizm', 'Genel populasyonda bir allel %1’den __________ gözleniyor ise genetik polimorfizm olarak adlandırılır.', ['daha sık']],
  ['polimorfizm', 'Bunun aksine %1’den __________ sıklıkta gözleniyor ise bunlar genetik hastalığa neden olan zararlı mutasyonlardır.', ['daha az']],
  ['hucre', 'Prokaryot hücreler bakterilerin, mavi yeşil alglerin, riketsiyalar, aktinomiset ve mikroplazma gruplarının dahil olduğu üst alem kategorisinde __________.', ['yer almaktadır']],
  ['hucre', 'Prokaryot hücrelerinin gerçek anlamda çekirdek __________, sitoplazmalarının içerisinde zarla çevrili bir organele sahip değildirler.', ['zarları yoktur']],
  ['hucre', 'Ökaryot hücreler kısaca tanımı sitoplazmasında çekirdek ve zarlı organeller bulunduran kompleks ve __________.', ['gelişmiş hücredir']],
  ['hucre', 'Ökaryot hücrelerde __________ gerçekleştiği sırada DNA (deoksiriboz nükleik asit) ile birlikte sıkılaşabilen proteinler bulunmaktadır (Histon).', ['mitoz bölünmenin']],
  ['hucre', 'Prokaryot hücrelerde __________ dışında farklı bir organel bulunmamaktadır.', ['ise ribozom', 'ribozom']],
  ['hucre', 'Ökaryot hücrelerde endositoz __________ olarak adlandırılan, hücre zarıyla kese oluşturulup sıvı ve katı maddeleri hücre içine alma yeteneğine sahip mekanizmalar bulunmaktadır.', ['ve fagositoz']],
  ['hucre', 'Ökaryot bitkilerin hücrelerinin yapısında selüloz içeren __________ bulunmaktadır.', ['hücre duvarları']],
  ['dna', 'Genetik materyal dört özellik göstermelidir;\nProtein miktarı farklı olmakla birlikte, hücrelerin kuru ağırlığının __________’sini proteinler oluşturmaktadır.', ['%50', '50']],
  ['dna', 'Avery, Macleod ve McCarty, transformasyon yapan maddeyi saf olarak elde ettiklerini ve transformasyondan sorumlu molekülün DNA __________.', ['olduğunu kanıtladılar']],
  ['dna', 'Nükleik asitler NÜKLEOTİD olarak adlandırılan alt birimlerin bir araya gelmesiyle oluşan ve bu nedenle __________ olarak adlandırılan bir makromoleküldür.', ['de POLİNÜKLEOTİD', 'polinükleotid']],
  ['dna', 'Pürinler: Adenin (A) ve Guanin (G). Pirimidinler: Timin (T), Sitozin (S __________) ve Urasil (U)', ['veya C']],
  ['dna', 'Yani pürin bazı olan adenin pirimidin bazı olan timinle, pürin bazı olan guanin ise pirimidin bazı olan __________.', ['sitozinle eşleşir']],
  ['dna', 'NÜKLEOSİD: Azotlu organik bir baza __________ ile bir beş karbonlu pentoz şekerinin bağlanmasıyla oluşan yapıya denir.', ['glikozit bağı']],
  ['dna', 'NÜKLEOTİD: Nükleozitin yapısına ester (__________) bağı ile bir fosfatın bağlanmasıyla oluşan yapıya denir.', ['fosfoester bağı', 'fosfoester']],
  ['dna', 'A+G / T+C = 1 şeklinde formüle edilebilen bu eşitlik __________ olarak bilinmektedir.', ['CHARGAFF KURALI']],
  ['dna', 'DNA molekülünün içe bakan kısımlarında yer alan azotlu organik bazlar, birbirlerine hidrojen bağları __________ karşılıklı olacak şekilde dizilir.', ['ile bağlanarak']],
  ['dna', 'DNA molekülünün dışa bakan kısımları ise birbirlerine fosfat grupları aracılığı ile bağlanmış deoksiriboz __________.', ['zincirinden oluşur']],
  ['dna', 'Karyotip, bir hücredeki kromozomların özdeş çift kromozomlar halinde eşlendikten __________ sonra belli bir düzene göre sıralanmasıdır. (Kromozom sayısı listesinde: Erik 48)', ['Orangutan 48']],
  ['dna', 'Her bireyin kromozom sayısı, şekli ve büyüklüğü onun karyotipini ifade eder. (Kromozom sayısı listesinde: Keçi 60 ve __________)', ['Koyun 54']],
  ['dna', 'RNA: Sentezlenmesini sağlayan enzim __________ , hidrolizini sağlayan enzim Ribonükleaz (RNAaz) dır.', ['RNA Polimeraz']]
];

var hocaQs = HOCA.map(function (h, i) {
  var q = fill(h[0], h[1], h[2], 'Cevap anahtarı: ' + (i + 1) + '. ' + h[2][0]);
  q.src = 'Notlar ' + (i + 1);
  return q;
});

App.course({
  id: 'genetik', short: 'Moleküler Genetik', title: 'Hayvancılıkta Moleküler Genetik',
  desc: 'Varyasyon, kalitatif/kantitatif karakterler, Mendel kuralları, gen etkileşimleri, polimorfizm, hücre ve DNA-RNA yapısı.',
  lead: 'Kaynak: yıldızlı notlar ve notların sonundaki 52 soruluk boşluk doldurma. O 52 soru **Test** sekmesinde birebir duruyor (cevap anahtarıyla). Tanımları kelimesi kelimesine bilmek gerekiyor.',
  traps: [
    { t: 'Kalitatif: **bakarak**, sözle; az gen, çevre etkisi önemsiz, kesikli varyasyon. Kantitatif: **ölçerek**, rakamla; çok gen, çevre önemli, sürekli varyasyon, ekonomik önemli.', topic: 'temel' },
    { t: 'Tarih: Hook **1665** hücre · Camerarius **1694** · Kölreuter **1760** tütün, ilk yapay hibrit · Naudin **1862** · Mendel **1865** (genetiğin miladı).', topic: 'temel' },
    { t: 'Modifikasyon çevre şartı kalkınca **kaybolur**. Çekirge larvası 16 °C **benekli**, 25 °C **beneksiz**.', topic: 'cevre' },
    { t: 'Kalıtım derecesi h² = **VG / VP** (genotipik / fenotipik varyasyon).', topic: 'cevre' },
    { t: 'Test-cross: dominant fenotipli birey **resesif fenotipli** bireyle çiftleştirilir.', topic: 'mendel' },
    { t: 'Eksik dominans = **entermediyerlik**. Epistatik gen etkileyen, **hipostatik** gen etkilenen.', topic: 'etkilesim' },
    { t: 'Siyam kedisi = **pleiotropi** (bacaklar koyu, gövde beyaz, gözlerde şaşılık). Labrador "ee" = **resesif epistazis**.', topic: 'etkilesim' },
    { t: 'Allel **%1\'den sık** → polimorfizm; **%1\'den az** → zararlı mutasyon. Polimorfik lokus: nadir allel ≥ %1, heterozigot ≥ **%2**.', topic: 'polimorfizm' },
    { t: 'Prokaryotta çekirdek zarı **yok**, organel olarak sadece **ribozom**, DNA **dairesel**, mayoz ve eşeyli üreme **yok**.', topic: 'hucre' },
    { t: 'Nükleozit = baz + şeker (**glikozit** bağı). Nükleotid = nükleozit + fosfat (**fosfoester** bağı).', topic: 'dna' },
    { t: 'Chargaff: **A+G / T+C = 1**. Hershey-Chase: **32P** DNA, **35S** protein.', topic: 'dna' },
    { t: 'Kromozom sayıları: insan **46**, tavuk **78**, at **64**, koyun **54**, keçi ve inek **60**, kedi **38**, sirke sineği **8**.', topic: 'dna' }
  ],
  rules: {
    temel: 'Popülasyon: belli yer ve zamanda, birbiriyle çiftleşip üreyebilen, aynı türden bireyler topluluğu. Kalitatif = bakarak/sözle; kantitatif = ölçerek/rakamla.',
    cevre: 'Fenotipik farklar çevre + genotipten gelir. Modifikasyon: aynı genotipte sadece çevre kaynaklı fark, çevre kalkınca kaybolur. Kalıtım derecesi = VG/VP.',
    mendel: 'Segregasyon: allel genler gamet oluşurken ayrılır, her gamette biri bulunur. Bağımsızlık: birden fazla özellik birbirine bağlı olmadan ayrılır.',
    etkilesim: 'Epistazis: allel olmayan genler arası etkileşim. Penetrans: mutant genotipi ifade eden bireylerin yüzdesi. Ekspresivite: dominant halin farklı derecede görünmesi. Pleiotropi: bir genin birden fazla fenotipik etkisi.',
    polimorfizm: 'Polimorfizm: çok şekillilik. Nadir allel ≥ %1 ve heterozigot ≥ %2 ise lokus polimorfik.',
    hucre: 'Prokaryot: zarlı organel ve çekirdek zarı yok, dairesel DNA, sadece ribozom. Ökaryot: çekirdek + zarlı organel, histon, endositoz/fagositoz, bitkide selülozlu duvar.',
    dna: 'Pürin: A, G. Pirimidin: T, C, U. A–T, G–C eşleşir. RNA tek zincirli, U içerir; RNA polimeraz sentezler, RNaz hidrolize eder; transkripsiyonla oluşur.'
  },
  topics: [
    { id: 'temel', title: 'Temel kavramlar, karakterler ve genetiğin tarihçesi', src: 'Notlar: Irk, varyasyon, kalitatif/kantitatif, kalıtım, tarihçe, Mendel ★★★',
      blocks: [
        { t: 'ul', items: [
          '**Popülasyon:** belli bir yerde, belli bir zamanda bulunan, birbirleriyle çiftleşip üreyebilen ve aynı tür içinde yer alan bireyler topluluğu.',
          '**Varyasyon:** değişim, farklılık, çeşitlilik.',
          '**Genetik:** canlılarda kalıtım ve varyasyon ile ilgili olayları, sebeplerini ve bağlı oldukları kanunları araştıran bilim.',
          '**Kalıtım (heredity):** canlıların kendilerine benzer yavrular meydana getirmesi veya ortak atalara sahip canlıların birbirine benzemesi. "Her canlı kendi benzerini meydana getirir."',
          '**Kalitatif karakterler:** bakmak suretiyle tespit edilen ve sözle ifade edilen özellikler.',
          '**Kantitatif karakterler:** ölçmek, tartmak veya analizle tespit edilen ve rakamla ifade edilen özellikler.'
        ] },
        { t: 'table', head: ['', 'Kalitatif', 'Kantitatif'], rows: [
          ['Ekonomik açıdan', 'Önemsiz', 'Önemli'], ['Etkileyen gen çifti', 'Bir', 'Çok'], ['Çevre etkisi', 'Önemsiz', 'Önemli'],
          ['Kalıtım derecesi', 'Çok yüksek', 'Düşük–yüksek'], ['Belirlenme şekli', 'Gözlem', 'Ölçme'], ['Varyasyon şekli', 'Kesikli', 'Sürekli']
        ] },
        { t: 'table', head: ['Kim', 'Yıl', 'Katkı'], rows: [
          ['Hook', '1665', 'Hücrenin keşfi'],
          ['Camerarius', '1694', 'Çiçek tozları erkeklik, yumurta kesesi dişilik'],
          ['Kölreuter', '1760', 'Bitkilerde (tütün) ilk kez yapay hibritleme; melezlerin entermedier olduğunu saptamış'],
          ['Naudin', '1862', 'Hibritler iki ebeveynin karışımıdır, sonra ayrılır (segregasyon kuralına en yakın görüş)'],
          ['Mendel', '1865', 'Segregasyon ve bağımsızlık (genetik biliminin miladı)']
        ] },
        { t: 'h', text: 'Mendel neden başarılı oldu?' },
        { t: 'ul', items: [
          'Şans eseri seçtiği bitki onu başarıya götürdü.',
          'Kolay gelişen ve kolay çaprazlanabilen bir deney organizması seçti: **bezelye**.',
          'Her deneyde yalnız bir veya bir-iki alternatif karakter kullandı → sonuçlar daha az karmaşık.',
          'Deney kayıtlarını mükemmel tuttu.',
          'Birbirinden bağımsız aktarılan **yedi karakter** ile çalıştı.',
          'Bu üniteleri oluşturan kalıtım faktörlerine **GEN** denir.'
        ] }
      ] },
    { id: 'cevre', title: 'Fenotip, genotip ve çevre', src: 'Notlar: Genetik olayların etkenleri, çevre şartları ile genotipin etki dereceleri',
      blocks: [
        { t: 'ul', items: [
          '**Fenotipik varyasyon (P):** gözlenebilen herhangi bir özellikteki farklılık.',
          '**Genotipik varyasyon (G):** bireyin genlerinden ileri gelen genotipteki farklılık.',
          'Aynı yumurtadan ikizlerin ayrı **çevre şartlarında** büyümesi ölçülebilen özelliklerde farka yol açar; bu değişiklik **fenokopya** olarak tanımlanır.',
          '**Hermafrodit:** hem erkek hem dişi organa sahip, iki tip eşey hücresi de yapabilen birey (ör. tavuklarda kuyruk çıkıntısı örneği notta geçer).',
          'Bazı hayvanlar (tatlı su sümüklü böcekleri) ve birçok bitkide hermafroditlerin kendi kendine döl vermesine **kendileme**, döllere **saf hat** denir; bunlara **klon** denir.',
          'Canlıların farklı fenotipler göstermesinde çevre şartları ile genotipin rolü vardır.',
          '**Modifikasyon:** aynı genotipli bireylerde sadece çevrenin yarattığı farklılık; çevre şartı ortadan kalkınca **kaybolur**. Ör. çekirge larvaları 16 °C\'de benekli, 25 °C\'de beneksiz.',
          'Bir karakterin değil, o karakter bakımından bireyler arasındaki **farkın** kalıtsal olup olmadığından veya derecesinden söz edilebilir.',
          '**Kalıtım derecesi:** fenotipik farklılığın genotipik farklılıktan ileri gelen kısmı: **h² = VG / VP**.'
        ] }
      ] },
    { id: 'mendel', title: 'Mendel kuralları ve dominanslık', src: 'Notlar: Mendel kuralları ★★★',
      blocks: [
        { t: 'ul', items: [
          '**1. kural – Segregasyon:** zigotlara ana ve babadan gelen allel genler (A, a) gamet oluşurken birbirinden ayrılır; her gamette allel genlerin sadece biri bulunur. P → F1 (Aa) → gametler A ve a.',
          '**Kontrol çiftleştirmesi (test-cross):** dominant fenotipli bireyin homozigot mu heterozigot mu olduğunu anlamak için **resesif fenotipli** bireyle çiftleştirilmesi.',
          '**2. kural – Bağımsızlık:** gamet oluşumunda birden fazla özellik söz konusuysa biri diğerine bağlı olmadan ayrılır. F1 AaBb → gametler AB, Ab, aB, ab.',
          '**Trihibrit çapraz:** P: AABBCC × aabbcc → F1: AaBbCc → 8 tip gamet (ABC, ABc, AbC, Abc, aBC, aBc, abC, abc).',
          '**Allel genler:** bir karakterin farklı hallerini belirleyen genler.',
          '**Homozigot:** gametler bir karakterin aynı halini oluşturan genleri taşıyorsa. **Heterozigot:** farklı hallerini taşıyorsa.',
          'Etkisini gösteren gen **dominant gen** (oluşturduğu hal dominant hal); gösteremeyen **resesif**. Resesif genin etkisini hiç gösterememesi **tam dominantlık**.',
          '**Eksik (kısmi) dominanslık:** eksik dominans etki; buna **entermediyerlik** denir.'
        ] }
      ] },
    { id: 'etkilesim', title: 'Gen etkileşimleri: epistazis, penetrans, pleiotropi', src: 'Notlar: Genlerin etkilerine göre sınıflandırılması ★★★',
      blocks: [
        { t: 'ul', items: [
          'Bazı karakterlerin oluşumunda birden fazla gen etkilidir. **Allel olmayan** genler arasındaki etkileşime **epistazis** denir. Etkileyen gen **epistatik**, etki altında kalan **hipostatik**.',
          '**Resesif epistazis:** bir genin çekinik allellerinin (aa) diğer genin (BB, Bb, bb) etkisini maskelemesi. Labrador: **ee** varlığında pigment yok → sarı; pigment varken siyah ve kahverengi.',
          '**Dominant epistazis:** bir genin dominant allelinin (AA/Aa) diğer genin etkisini maskelemesi.',
          '**Penetrans (geçiş kabiliyeti):** belli bir özelliğin ifade edilme derecesi; dominant genin nüfuz kabiliyeti. Mutant genotipi en az belli derecede ifade eden bireylerin yüzdesi **mutasyonun penetransı**. Ör. taşıyıcı kadınların **%3**\'ü renk körü.',
          '**Ekspresivite (ifade edilebilirlik):** dominant bir halin daima aynı seviyede görünmemesi; genin etki derecesi değişiktir.',
          '**Pleiotropi:** bir genin birden fazla fenotipik görüntüsü; bu genlere pleyotropik gen. **Siyam kedisi:** bacaklar koyu, gövde beyaz, gözlerde şaşılık.',
          '**Pozisyon etkisi (komşu genler):** genler kromozomdaki yerlerine göre farklı fenotip oluşturabilir.'
        ] },
        { t: 'h', text: 'Etkileri cinsiyetle değişen genler' },
        { t: 'table', head: ['Koyunda boynuz genotipi', 'Erkek', 'Dişi'], rows: [
          ['H1H1', 'Boynuzlu', 'Boynuzlu'], ['H1H2', 'Boynuzlu', 'Boynuzsuz'], ['H2H2', 'Boynuzsuz', 'Boynuzsuz']
        ] },
        { t: 'p', text: 'Erkeklerde H1 > H2 (dominant), dişilerde H1 < H2. Benzer şekilde sakallılık (Bb) erkeklerde dominant, dişilerde resesif davranır.' }
      ] },
    { id: 'polimorfizm', title: 'Polimorfizm', src: 'Notlar: Polimorfizm ★★★',
      blocks: [
        { t: 'ul', items: [
          '**Polimorfizm:** çok şekillilik.',
          'Popülasyon genetikçileri bir lokusu, nadir alleller en az **%1** frekansta ve bu allellerin heterozigotları en az **%2** oranında görülürse **polimorfik** sayar.',
          'Bir allel genel popülasyonda **%1\'den sık** gözleniyorsa **genetik polimorfizm**; **%1\'den az** ise genetik hastalığa neden olan **zararlı mutasyon**.',
          'Nokta mutasyonlarının dört farklı etkisi görülür.'
        ] },
        { t: 'h', text: 'Polimorfizmin yararları' },
        { t: 'ul', items: [
          'Pedigrinin saptanması, soy testi, babalığın belirlenmesi',
          'Verim ve hastalıklara dayanıklılıkla ilgili **işaret gen** olarak kullanım',
          'Tek yumurta ikizliğinin belirlenmesi',
          'Irkların kökenlerinin belirlenmesi',
          'Popülasyon genetiği ve hayvan ıslahı çalışmaları'
        ] }
      ] },
    { id: 'hucre', title: 'Prokaryot ve ökaryot hücre', src: 'Notlar: Prokaryot / ökaryot ★★★',
      blocks: [
        { t: 'table', head: ['', 'Prokaryot', 'Ökaryot'], rows: [
          ['Örnek', 'Bakteriler, mavi-yeşil algler, riketsiyalar, aktinomisetler, mikoplazmalar', 'Hayvan ve bitki hücreleri'],
          ['Çekirdek zarı', 'Gerçek anlamda yok', 'Var'],
          ['Zarlı organel', 'Yok; ribozom dışında organel yok', 'Var (kompleks ve gelişmiş hücre)'],
          ['DNA', 'Dairesel', 'Mitozda DNA ile sıkılaşan proteinler (histon)'],
          ['Madde alımı', '—', 'Endositoz ve fagositoz'],
          ['Hücre duvarı', '—', 'Bitkilerde selülozlu'],
          ['Mayoz / eşeyli üreme', 'Yok', 'Var']
        ] },
        { t: 'p', text: 'Hücrelerin kuru ağırlığının **%50**\'sini proteinler oluşturur.' }
      ] },
    { id: 'dna', title: 'Genetik materyal, DNA ve RNA', src: 'Notlar: Griffith, Avery, Hershey-Chase, nükleik asitler, Chargaff, kromozom sayıları, RNA ★★★',
      blocks: [
        { t: 'h', text: 'Genetik materyalin DNA olduğunun ispatı' },
        { t: 'ul', items: [
          '**Griffith\'in transformasyon deneyi.**',
          '**Avery, MacLeod ve McCarty:** transformasyon yapan maddeyi saf elde ettiler; sorumlu molekülün **DNA** olduğunu kanıtladılar.',
          '**Hershey-Chase:** DNA **32P** ile, protein **35S** ile işaretlendi.'
        ] },
        { t: 'h', text: 'Nükleik asitlerin yapısı' },
        { t: 'ul', items: [
          'Nükleik asitler **nükleotid** alt birimlerinden oluşan **polinükleotid** makromoleküllerdir.',
          '**Pürinler:** adenin (A), guanin (G). **Pirimidinler:** timin (T), sitozin (S veya C), urasil (U).',
          'Adenin timinle, guanin sitozinle eşleşir.',
          '**Nükleozit:** azotlu baz + beş karbonlu pentoz şekeri, **glikozit bağı** ile.',
          '**Nükleotid:** nükleozit + fosfat, **ester (fosfoester) bağı** ile.',
          '**Chargaff kuralı:** A+G / T+C = 1.',
          'DNA\'nın içe bakan bazları **hidrojen bağlarıyla** karşılıklı dizilir; dışta fosfat gruplarıyla bağlı **deoksiriboz** zinciri vardır. Sarmalın açılması için ters yönde rotasyon gerekir.',
          'Çekirdekteki DNA bölünme evresinde kompleks katlanmalarla **kromozom** haline gelir.',
          '**Karyotip:** kromozomların özdeş çiftler halinde eşlendikten sonra belli düzene göre sıralanması; her bireyin kromozom sayısı, şekli ve büyüklüğü karyotipini ifade eder. Karyotipten türlerin kromozom haritalarında yararlanılır.'
        ] },
        { t: 'table', head: ['Canlı', '2n', 'Canlı', '2n'], rows: [
          ['Solucan', '2', 'Kedi', '38'], ['Sirke sineği', '8', 'Maymun', '42'], ['Çekirge', '14', 'İnsan', '46'],
          ['Soğan', '16', 'Orangutan', '48'], ['Güvercin', '16', 'Erik', '48'], ['Domates', '24', 'Koyun', '54'],
          ['Tavus kuşu', '28', 'Keçi', '60'], ['İnek', '60', 'At', '64'], ['Tavuk', '78', 'Eğrelti otu', '500']
        ] },
        { t: 'h', text: 'RNA (ribonükleik asit)' },
        { t: 'ul', items: [
          'Tek zincirli olduğu için A = U ve G = S eşitliği **yoktur**.',
          'Ribonükleotidlerden oluşur; bazları **A, G, S (C) ve U**.',
          'Sentezleyen enzim **RNA polimeraz**, hidrolize eden enzim **ribonükleaz (RNaz)**.',
          'DNA üzerinden **transkripsiyon** ile sentezlenir.'
        ] }
      ] }
  ],

  extra: [
    { id: 'notlar52', title: 'Notlardaki boşluk doldurma (52 soru)', desc: 'Notların sonundaki 52 soru, birebir. Cevaplar anahtardaki ifadeler; Türkçe karakter ve büyük/küçük harf fark etmez.', mode: 'practice', featured: true, questions: hocaQs }
  ],

  bank: [
    /* temel */
    mc('temel', 'Belli bir yerde ve zamanda bulunan, birbiriyle çiftleşip üreyebilen ve aynı tür içinde yer alan bireyler topluluğuna ne denir?', ['Popülasyon', 'Irk', 'Klon', 'Saf hat', 'Varyasyon'], 'Popülasyon tanımı.'),
    mc('temel', 'Bakmak suretiyle tespit edilen ve sözle ifade edilen özelliklere ne denir?', ['Kalitatif karakterler', 'Kantitatif karakterler', 'Modifikasyon', 'Fenokopi', 'Pleiotropi'], 'Kantitatif: ölçerek, rakamla.'),
    mc('temel', 'Kantitatif karakterler için hangisi **yanlıştır**?', ['Varyasyon şekli kesiklidir', 'Ekonomik açıdan önemlidir', 'Birçok gen çifti etkiler', 'Çevre etkisi önemlidir', 'Ölçme ile belirlenir'], 'Kantitatif karakterlerde varyasyon süreklidir; kesikli olan kalitatiftir.'),
    mc('temel', 'Kalitatif karakterlerde kalıtım derecesi nasıldır?', ['Çok yüksek', 'Düşük', 'Düşük–yüksek arası', 'Sıfır', 'Çevreye göre değişken'], 'Kalitatif: çok yüksek; kantitatif: düşük-yüksek.'),
    mc('temel', 'Hücreyi 1665 yılında keşfeden bilim insanı kimdir?', ['Hook', 'Mendel', 'Camerarius', 'Kölreuter', 'Naudin'], ''),
    mc('temel', 'Bitkilerde (tütün) ilk kez yapay hibritleme yapan ve melezlerin entermedier olduğunu saptayan kimdir?', ['Kölreuter (1760)', 'Naudin (1862)', 'Camerarius (1694)', 'Mendel (1865)', 'Hook (1665)'], ''),
    mc('temel', 'Görüşü Mendel\'in segregasyon kuralına en yakın olan bilim insanı kimdir?', ['Naudin', 'Kölreuter', 'Camerarius', 'Hook', 'Griffith'], 'Naudin 1862: hibritler iki ebeveynin karışımıdır, sonra ayrılır.'),
    mc('temel', 'Çiçek tozlarının erkeklik, yumurta kesesinin dişilik organı olduğunu ortaya koyan kimdir?', ['Camerarius (1694)', 'Kölreuter (1760)', 'Hook (1665)', 'Naudin (1862)', 'Chargaff'], ''),
    mc('temel', 'Genetik biliminin miladı kabul edilen çalışma hangisidir?', ['Mendel 1865 – segregasyon ve bağımsızlık', 'Hook 1665 – hücrenin keşfi', 'Kölreuter 1760 – yapay hibritleme', 'Griffith – transformasyon', 'Chargaff – baz kuralı'], ''),
    mc('temel', 'Mendel\'in başarı nedenleri arasında hangisi **yoktur**?', ['Çok sayıda karakteri aynı anda incelemesi', 'Kolay çaprazlanan bezelyeyi seçmesi', 'Kayıtları mükemmel tutması', 'Bağımsız aktarılan yedi karakterle çalışması', 'Şans eseri uygun bitkiyi seçmesi'], 'Mendel her deneyde yalnız bir veya bir-iki alternatif karakter kullandı.'),
    mc('temel', 'Mendel kaç karakter ile çalışmıştır?', ['7', '3', '2', '12', '46'], 'Birbirinden bağımsız aktarılan yedi karakter.'),
    mc('temel', 'Canlıların kendilerine benzer yavrular meydana getirmesine ne denir?', ['Kalıtım (heredity)', 'Varyasyon', 'Modifikasyon', 'Mutasyon', 'Transformasyon'], '"Her canlı kendi benzerini meydana getirir."'),
    mc('temel', 'Canlılarda kalıtım ve varyasyonla ilgili olayları, sebeplerini ve kanunlarını araştıran bilim hangisidir?', ['Genetik', 'Sitoloji', 'Ekoloji', 'Embriyoloji', 'Fizyoloji'], ''),
    /* çevre */
    mc('cevre', 'Aynı genotipli bireylerde sadece çevre şartlarının meydana getirdiği farklılıklara ne denir?', ['Modifikasyon', 'Mutasyon', 'Epistazis', 'Pleiotropi', 'Polimorfizm'], 'Modifikasyonlar çevre şartı kalkınca kaybolur.'),
    mc('cevre', 'Çekirge larvaları 16 °C\'de benekli, 25 °C\'de beneksiz gelişir. Bu hangi olaya örnektir?', ['Modifikasyon', 'Pleiotropi', 'Dominant epistazis', 'Penetrans', 'Polimorfizm'], 'Çevre kaynaklı, kalıtsal olmayan fark.'),
    mc('cevre', 'Kalıtım derecesi (h²) nasıl ifade edilir?', ['Genotipik varyasyon / fenotipik varyasyon', 'Fenotipik varyasyon / genotipik varyasyon', 'Çevre varyasyonu / genotipik varyasyon', 'Genotipik varyasyon × fenotipik varyasyon', 'Dominant / resesif'], 'h² = VG / VP.'),
    mc('cevre', 'Aynı yumurta ikizlerinin ayrı çevre şartlarında büyüyüp ölçülebilir özelliklerde farklılaşması notlarda nasıl tanımlanmıştır?', ['Fenokopya', 'Hermafroditlik', 'Klon', 'Pleiotropi', 'Polimorfizm'], 'Notta: "Bu değişiklik fenokopya olarak tanımlanmaktadır."'),
    mc('cevre', 'Hem erkek hem dişi organa sahip olan ve iki tip eşey hücresi oluşturabilen bireylere ne denir?', ['Hermafrodit', 'Klon', 'Heterozigot', 'Hipostatik', 'Saf hat'], ''),
    mc('cevre', 'Hermafroditlerin kendi kendilerine yeni birey meydana getirmesiyle elde edilen döllere ne denir?', ['Saf hat', 'F1 melezi', 'Heterozigot', 'Popülasyon', 'Mutant'], 'Bu olaya kendileme denir; döllere saf hat (klon) denir.'),
    mc('cevre', 'Bireyin genlerinden ileri gelen genotipteki farklılığa ne denir?', ['Genotipik varyasyon (G)', 'Fenotipik varyasyon (P)', 'Modifikasyon', 'Fenokopya', 'Ekspresivite'], ''),
    /* mendel */
    mc('mendel', 'Allel genlerin gamet oluşumu sırasında birbirinden ayrılması ve her gamette sadece birinin bulunması hangi kuraldır?', ['Segregasyon kuralı', 'Bağımsızlık kuralı', 'Chargaff kuralı', 'Dominantlık kuralı', 'Epistazis'], 'Mendel\'in birinci kuralı.'),
    mc('mendel', 'Dominant fenotipli bir bireyin homozigot mu heterozigot mu olduğunu anlamak için yapılan çiftleştirme hangisidir?', ['Resesif fenotipli bireyle test-cross (kontrol çiftleştirmesi)', 'Dominant homozigotla çiftleştirme', 'Heterozigotla çiftleştirme', 'Kendileme', 'Trihibrit çapraz'], ''),
    mc('mendel', 'AaBb genotipli bir birey bağımsızlık kuralına göre kaç tip gamet oluşturur?', ['4', '2', '8', '1', '16'], 'AB, Ab, aB, ab.'),
    mc('mendel', 'Mendel\'in trihibrit çaprazında F1 (AaBbCc) bireyleri kaç farklı gamet oluşturur?', ['8', '4', '6', '3', '16'], 'ABC, ABc, AbC, Abc, aBC, aBc, abC, abc.'),
    mc('mendel', 'Herhangi bir karakterin farklı hallerini belirleyen genlere ne denir?', ['Allel genler', 'Epistatik genler', 'Pleyotropik genler', 'Hipostatik genler', 'Komşu genler'], ''),
    mc('mendel', 'Birleşen gametler bir karakterin farklı hallerini belirten genleri taşıyorsa oluşan zigot nasıldır?', ['Heterozigot', 'Homozigot', 'Hermafrodit', 'Hipostatik', 'Saf hat'], ''),
    mc('mendel', 'Resesif genin etkisini hiç gösterememesi hangi durumdur?', ['Tam dominantlık', 'Eksik dominantlık', 'Entermediyerlik', 'Epistazis', 'Penetrans'], ''),
    mc('mendel', 'Eksik (kısmi) dominanslığa verilen diğer ad hangisidir?', ['Entermediyerlik', 'Pleiotropi', 'Epistazis', 'Ekspresivite', 'Modifikasyon'], ''),
    mc('mendel', 'Gamet oluşumunda birden fazla özelliğin biri diğerine bağlı olmadan ayrılması Mendel\'in hangi kuralıdır?', ['Bağımsızlık (ikinci kural)', 'Segregasyon (birinci kural)', 'Test-cross', 'Dominantlık', 'Chargaff'], ''),
    /* etkileşim */
    mc('etkilesim', 'Allel olmayan genler arasındaki etkileşime ne denir?', ['Epistazis', 'Dominantlık', 'Segregasyon', 'Pleiotropi', 'Penetrans'], ''),
    mc('etkilesim', 'Epistaziste etki altında kalan gene ne denir?', ['Hipostatik gen', 'Epistatik gen', 'Pleyotropik gen', 'Dominant gen', 'Allel gen'], 'Etkileyen epistatik, etkilenen hipostatik.'),
    mc('etkilesim', 'Labradorlarda "ee" genotipinin pigment genini maskelemesi hangi olaya örnektir?', ['Resesif epistazis', 'Dominant epistazis', 'Pleiotropi', 'Eksik dominantlık', 'Penetrans'], 'Çekinik allel diğer genin etkisini maskeler → sarı labrador.'),
    mc('etkilesim', 'Bir genin dominant allelinin diğer bir genin allellerinin etkisini maskelemesi hangisidir?', ['Dominant epistazis', 'Resesif epistazis', 'Tam dominantlık', 'Modifikasyon', 'Ekspresivite'], ''),
    mc('etkilesim', 'Mutant bir genotipin en azından belli derecede ifade edilmesini gösteren bireylerin yüzdesine ne denir?', ['Mutasyonun penetransı', 'Ekspresivite', 'Kalıtım derecesi', 'Polimorfizm', 'Pleiotropi'], 'Penetrans = geçiş kabiliyeti.'),
    mc('etkilesim', 'Notlara göre renk körlüğü bakımından taşıyıcı kadınların yüzde kaçı renk körü olur?', ['%3', '%1', '%2', '%50', '%25'], 'Penetrans örneği.'),
    mc('etkilesim', 'Siyam kedisinde bacakların koyu, gövdenin beyaz ve gözlerde şaşılık olması hangi olaya örnektir?', ['Pleiotropi', 'Epistazis', 'Pozisyon etkisi', 'Modifikasyon', 'Eksik dominantlık'], 'Bir genin birden fazla fenotipik görüntüsü.'),
    mc('etkilesim', 'Dominant bir halin daima aynı seviyede görünmemesi hangi kavramla açıklanır?', ['Ekspresivite (ifade edilebilirlik)', 'Penetrans', 'Pleiotropi', 'Epistazis', 'Segregasyon'], ''),
    mc('etkilesim', 'Genlerin kromozom üzerinde bulundukları yere göre farklı fenotipler oluşturmasına ne denir?', ['Pozisyon etkisi', 'Pleiotropi', 'Penetrans', 'Epistazis', 'Bağımsızlık'], 'Komşu genler.'),
    mc('etkilesim', 'Koyunlarda H1H2 genotipli bireyler için hangisi doğrudur?', ['Erkekler boynuzlu, dişiler boynuzsuz', 'Her iki cinsiyet de boynuzlu', 'Her iki cinsiyet de boynuzsuz', 'Erkekler boynuzsuz, dişiler boynuzlu', 'Boynuz cinsiyetten bağımsızdır'], 'Erkekte H1 > H2, dişide H1 < H2 (etkisi cinsiyetle değişen gen).'),
    /* polimorfizm */
    mc('polimorfizm', 'Polimorfizm ne demektir?', ['Çok şekillilik', 'Tek şekillilik', 'Kalıtsal hastalık', 'Çevre etkisi', 'Gen kaybı'], ''),
    mc('polimorfizm', 'Bir allel genel popülasyonda %1\'den daha az sıklıkta gözleniyorsa ne olarak değerlendirilir?', ['Genetik hastalığa neden olan zararlı mutasyon', 'Genetik polimorfizm', 'Modifikasyon', 'Pleiotropi', 'Dominant allel'], '%1\'den sık → polimorfizm.'),
    mc('polimorfizm', 'Bir lokusun polimorfik sayılması için heterozigotların en az hangi oranda görülmesi gerekir?', ['%2', '%1', '%3', '%50', '%10'], 'Nadir alleller en az %1, heterozigotlar en az %2.'),
    mc('polimorfizm', 'Aşağıdakilerden hangisi polimorfizmin yararları arasında **sayılmaz**?', ['Kromozom sayısının artırılması', 'Babalığın belirlenmesi', 'Tek yumurta ikizliğinin belirlenmesi', 'Irkların kökeninin belirlenmesi', 'İşaret gen olarak kullanılması'], ''),
    mc('polimorfizm', 'Polimorfik genlerden verim ve hastalıklara dayanıklılık için hangi amaçla yararlanılır?', ['İşaret gen olarak', 'Klon üretmek için', 'Modifikasyon yaratmak için', 'Transkripsiyonu durdurmak için', 'Kromozom haritasını silmek için'], ''),
    /* hücre */
    mc('hucre', 'Aşağıdakilerden hangisi prokaryot hücreye sahip değildir?', ['Bitkiler', 'Bakteriler', 'Mavi-yeşil algler', 'Riketsiyalar', 'Aktinomisetler'], 'Bitki hücreleri ökaryottur.'),
    mc('hucre', 'Prokaryot hücrelerde bulunan tek organel hangisidir?', ['Ribozom', 'Mitokondri', 'Çekirdek', 'Golgi', 'Kloroplast'], ''),
    mc('hucre', 'Prokaryot hücreler için hangisi **yanlıştır**?', ['Mayoz bölünme ve eşeyli üreme görülür', 'Gerçek çekirdek zarı yoktur', 'Kalıtsal materyal dairesel yapıdadır', 'Zarla çevrili organelleri yoktur', 'Ribozom bulunur'], 'Prokaryotlarda mayoz ve eşeyli üreme yoktur.'),
    mc('hucre', 'Ökaryot hücrelerde mitoz sırasında DNA ile birlikte sıkılaşabilen proteinler hangileridir?', ['Histonlar', 'Ribozomlar', 'Enzimler', 'Lipidler', 'Selüloz'], ''),
    mc('hucre', 'Hücre zarıyla kese oluşturup sıvı ve katı maddeleri içeri alma mekanizmaları hangileridir?', ['Endositoz ve fagositoz', 'Transkripsiyon ve translasyon', 'Mitoz ve mayoz', 'Difüzyon ve osmoz', 'Segregasyon ve bağımsızlık'], 'Ökaryot hücrelerde bulunur.'),
    mc('hucre', 'Hücrelerin kuru ağırlığının yaklaşık ne kadarını proteinler oluşturur?', ['%50', '%10', '%25', '%75', '%90'], ''),
    /* dna */
    mc('dna', 'Transformasyondan sorumlu molekülün DNA olduğunu kanıtlayan bilim insanları kimlerdir?', ['Avery, MacLeod ve McCarty', 'Hershey ve Chase', 'Griffith', 'Watson ve Crick', 'Chargaff'], ''),
    mc('dna', 'Hershey-Chase deneyinde DNA hangi izotopla işaretlenmiştir?', ['32P', '35S', '14C', '15N', '3H'], 'DNA 32P, protein 35S.'),
    mc('dna', 'Aşağıdakilerden hangisi pürin bazıdır?', ['Guanin', 'Timin', 'Sitozin', 'Urasil', 'Deoksiriboz'], 'Pürin: A, G. Pirimidin: T, C, U.'),
    mc('dna', 'Azotlu bir baz ile pentoz şekerinin glikozit bağı ile bağlanmasından oluşan yapı hangisidir?', ['Nükleozit', 'Nükleotid', 'Polinükleotid', 'Histon', 'Kromozom'], 'Nükleozite fosfat eklenince nükleotid olur.'),
    mc('dna', 'Nükleozite fosfatın bağlanmasını sağlayan bağ hangisidir?', ['Fosfoester bağı', 'Glikozit bağı', 'Hidrojen bağı', 'Peptit bağı', 'Disülfit bağı'], ''),
    mc('dna', 'A+G / T+C = 1 eşitliği hangi kural olarak bilinir?', ['Chargaff kuralı', 'Segregasyon kuralı', 'Bağımsızlık kuralı', 'Mendel kuralı', 'Hardy kuralı'], ''),
    mc('dna', 'DNA\'da karşılıklı bazlar birbirine hangi bağla bağlanır?', ['Hidrojen bağı', 'Fosfoester bağı', 'Glikozit bağı', 'Peptit bağı', 'İyonik bağ'], 'Dışta şeker-fosfat zinciri vardır.'),
    mc('dna', 'Tavuğun kromozom sayısı (2n) kaçtır?', ['78', '46', '60', '64', '54'], 'İnsan 46, inek ve keçi 60, at 64, koyun 54.'),
    mc('dna', 'Koyunun kromozom sayısı (2n) kaçtır?', ['54', '60', '64', '78', '38'], ''),
    mc('dna', 'Kromozomların özdeş çiftler halinde eşlendikten sonra belli bir düzene göre sıralanmasına ne denir?', ['Karyotip', 'Genotip', 'Fenotip', 'Pedigri', 'Klon'], ''),
    mc('dna', 'RNA\'yı sentezleyen enzim hangisidir?', ['RNA polimeraz', 'Ribonükleaz (RNaz)', 'DNA ligaz', 'Pepsin', 'Fitaz'], 'RNaz hidroliz eden enzimdir.'),
    mc('dna', 'RNA için hangisi **yanlıştır**?', ['A = U ve G = C eşitliği vardır', 'Tek zincirlidir', 'Urasil içerir', 'Transkripsiyonla sentezlenir', 'Ribonükleotidlerden oluşur'], 'Tek zincirli olduğundan bu eşitlikler yoktur.'),
    mc('dna', 'Nükleotidlerin bir araya gelmesiyle oluşan nükleik asitlere bu nedenle ne denir?', ['Polinükleotid', 'Polipeptit', 'Polisakkarit', 'Nükleozit', 'Histon'], ''),

    /* D/Y */
    tf('temel', 'Kantitatif karakterler ekonomik açıdan önemsizdir.', false, 'Kantitatif önemli, kalitatif önemsiz.'),
    tf('temel', 'Kalitatif karakterlerde varyasyon kesiklidir.', true, ''),
    tf('temel', 'Mendel deney organizması olarak bezelyeyi seçmiştir.', true, ''),
    tf('temel', 'Kölreuter 1862\'de hibritlerin iki ebeveynin karışımı olduğunu ileri sürmüştür.', false, 'Bu Naudin\'dir (1862). Kölreuter 1760, tütün.'),
    tf('cevre', 'Modifikasyonlar, kendilerine sebep olan çevre şartı ortadan kalktığında kaybolur.', true, ''),
    tf('cevre', 'Kalıtım derecesi fenotipik varyasyonun genotipik varyasyona oranıdır.', false, 'h² = VG / VP.'),
    tf('cevre', 'Bir karakterin kendisinin değil, o karakter bakımından bireyler arasındaki farkın kalıtsal olup olmadığından söz edilebilir.', true, ''),
    tf('mendel', 'Test-cross\'ta dominant fenotipli birey dominant homozigot bireyle çiftleştirilir.', false, 'Resesif fenotipli bireyle.'),
    tf('mendel', 'Segregasyon kuralına göre her gamette allel genlerden sadece biri bulunur.', true, ''),
    tf('mendel', 'Eksik dominanslığa entermediyerlik de denir.', true, ''),
    tf('etkilesim', 'Epistaziste etki altında kalan gene epistatik gen denir.', false, 'Etkilenen hipostatik, etkileyen epistatik.'),
    tf('etkilesim', 'Siyam kedisi pleiotropiye örnektir.', true, ''),
    tf('etkilesim', 'Penetrans, belli bir özelliğin ifade edilme derecesidir.', true, ''),
    tf('etkilesim', 'Koyunlarda H2H2 genotipli erkekler boynuzludur.', false, 'H2H2 her iki cinsiyette boynuzsuz.'),
    tf('polimorfizm', 'Popülasyonda %1\'den sık görülen allel genetik polimorfizm olarak adlandırılır.', true, ''),
    tf('polimorfizm', 'Polimorfizm babalık tespiti ve soy testinde kullanılır.', true, ''),
    tf('polimorfizm', 'Popülasyonda %1\'den az görülen alleller genellikle zararsız varyasyonlardır.', false, 'Genetik hastalığa neden olan zararlı mutasyonlardır.'),
    tf('hucre', 'Prokaryot hücrelerde kalıtsal materyal dairesel yapıdadır.', true, ''),
    tf('hucre', 'Prokaryot hücrelerde zarla çevrili organeller bulunur.', false, 'Ribozom dışında organel yok.'),
    tf('hucre', 'Ökaryot bitki hücrelerinde selüloz içeren hücre duvarı bulunur.', true, ''),
    tf('dna', 'Hershey-Chase deneyinde proteinler 35S ile işaretlenmiştir.', true, ''),
    tf('dna', 'Timin bir pürin bazıdır.', false, 'Timin pirimidindir; pürinler A ve G.'),
    tf('dna', 'DNA\'nın dışa bakan kısmında deoksiriboz-fosfat zinciri bulunur.', true, ''),
    tf('dna', 'İnsanın kromozom sayısı 2n = 46\'dır.', true, ''),
    tf('dna', 'RNA\'nın hidrolizini RNA polimeraz enzimi sağlar.', false, 'Hidroliz: ribonükleaz (RNaz). RNA polimeraz sentezler.'),
    tf('dna', 'Atın kromozom sayısı 2n = 60\'tır.', false, 'At 64; inek ve keçi 60.'),

    /* Boşluk (bankaya ayrıca kısa boşluklar) */
    fill('temel', 'Kalitatif karakterler ____ suretiyle tespit edilen ve sözle ifade edilen özelliklerdir.', ['bakmak', 'bakma'], ''),
    fill('temel', 'Kantitatif karakterlerde varyasyon şekli ____ dir.', ['sürekli'], ''),
    fill('temel', 'Mendel\'in deney organizması ____ dir.', ['bezelye'], ''),
    fill('temel', 'Hücre ____ yılında Hook tarafından keşfedilmiştir.', ['1665'], ''),
    fill('temel', 'Mendel\'in kalıtım faktörlerine ____ denir.', ['gen'], ''),
    fill('cevre', 'Aynı genotipli bireylerde sadece çevre şartlarının meydana getirdiği farklılıklara ____ denir.', ['modifikasyon'], ''),
    fill('cevre', 'Kalıtım derecesi = genotipik varyasyon / ____ varyasyon.', ['fenotipik'], ''),
    fill('cevre', 'Hermafroditlerin kendi kendilerine yeni birey meydana getirmesine ____ denir.', ['kendileme'], 'Döllere saf hat denir.'),
    fill('mendel', 'Mendel\'in birinci kuralı ____ kuralıdır.', ['segregasyon'], 'İkinci kural bağımsızlık.'),
    fill('mendel', 'Dominant fenotipli bireyin genotipini anlamak için resesif fenotipli bireyle yapılan çiftleştirmeye kontrol çiftleştirmesi veya ____ denir.', ['test-cross', 'test cross', 'testcross'], ''),
    fill('mendel', 'Eksik dominanslığa ____ denir.', ['entermediyerlik', 'intermediyerlik'], ''),
    fill('etkilesim', 'Allel olmayan genler arasındaki etkileşime ____ denir.', ['epistazis', 'epistazi'], ''),
    fill('etkilesim', 'Bir genin birden fazla fenotipik görüntüsü olmasına ____ denir.', ['pleiotropi', 'pleiotropizm', 'pleiotrophism', 'pleyotropi'], ''),
    fill('etkilesim', 'Dominant bir halin daima aynı seviyede görünmemesine ____ (ifade edilebilirlik) denir.', ['ekspresivite', 'expressivity'], ''),
    fill('etkilesim', 'Genlerin kromozomdaki yerine göre farklı fenotip oluşturmasına ____ etkisi denir.', ['pozisyon'], ''),
    fill('polimorfizm', 'Polimorfizm, ____ şekillilik demektir.', ['çok'], ''),
    fill('polimorfizm', 'Polimorfik lokusta heterozigotlar en az %____ oranında görülmelidir.', ['2'], ''),
    fill('hucre', 'Prokaryot hücrelerde ____ dışında organel yoktur.', ['ribozom'], ''),
    fill('hucre', 'Ökaryot hücrelerde DNA ile birlikte sıkılaşan proteinlere ____ denir.', ['histon'], ''),
    fill('dna', 'Hershey-Chase deneyinde proteinler ____ ile işaretlenmiştir.', ['35S', 'S35', '35 S'], 'DNA 32P.'),
    fill('dna', 'Nükleozitte baz ile şeker ____ bağı ile bağlanır.', ['glikozit'], ''),
    fill('dna', 'Pürin bazı olan adenin, pirimidin bazı olan ____ ile eşleşir.', ['timin'], ''),
    fill('dna', 'Tavuğun kromozom sayısı 2n = ____ dir.', ['78'], ''),
    fill('dna', 'RNA, DNA üzerinden ____ ile sentezlenir.', ['transkripsiyon'], ''),
    fill('dna', 'RNA\'nın hidrolizini sağlayan enzim ____ dır.', ['ribonükleaz', 'RNaz', 'RNAaz'], ''),

    /* Klasik */
    op('temel', 'Kalitatif ve kantitatif karakterleri tanımlayıp karşılaştırınız.', [
      'Kalitatif: bakarak tespit, sözle ifade', 'Kantitatif: ölçme, tartma, analiz; rakamla ifade',
      'Ekonomik önem: kalitatif önemsiz, kantitatif önemli; gen: bir – çok', 'Çevre etkisi: önemsiz – önemli; kalıtım derecesi: çok yüksek – düşük-yüksek',
      'Belirlenme: gözlem – ölçme; varyasyon: kesikli – sürekli'
    ], 'Kalitatif karakterler bakmak suretiyle tespit edilen ve sözle ifade edilen; kantitatif karakterler ölçmek, tartmak veya analiz sonucunda tespit edilen ve rakamla ifade edilen özelliklerdir.\nKalitatif / kantitatif: ekonomik açıdan önemsiz / önemli; etkileyen gen çifti bir / çok; çevre etkisi önemsiz / önemli; kalıtım derecesi çok yüksek / düşük-yüksek; belirlenme gözlem / ölçme; varyasyon kesikli / sürekli.'),
    op('temel', 'Mendel\'in başarılı olmasının nedenlerini yazınız.', [
      'Şans eseri uygun bitkiyi seçmesi', 'Kolay gelişen, kolay çaprazlanan bezelyeyi seçmesi',
      'Her deneyde bir veya bir-iki alternatif karakter kullanması', 'Kayıtları mükemmel tutması', 'Bağımsız aktarılan yedi karakterle çalışması'
    ], 'Şans eseri seçtiği bitki onu başarıya götürmüştür. Kolay gelişen ve kolay çaprazlanabilen bir organizma (bezelye) seçmiştir. Her deneyde yalnız bir veya bir-iki alternatif karakter kullanmış, bu da sonuçları daha az karmaşık yapmıştır. Deney kayıtlarını mükemmel tutmuştur. Birbirinden bağımsız aktarılan yedi karakter ile çalışmıştır. Bu kalıtım faktörlerine gen denir.'),
    op('cevre', 'Modifikasyonu tanımlayıp örnek veriniz; kalıtım derecesini açıklayınız.', [
      'Aynı genotipli bireylerde sadece çevre kaynaklı farklılık', 'Çevre şartı kalkınca kaybolur',
      'Örnek: çekirge larvası 16 °C benekli, 25 °C beneksiz', 'Kalıtım derecesi: fenotipik farkın genotipten gelen kısmı, h² = VG/VP'
    ], 'Modifikasyon, aynı genotipli bireylerde sadece çevre şartlarının meydana getirdiği farklılıklardır; sebep olan çevre şartları ortadan kalkınca kaybolur. Örnek: çekirge larvaları 16 °C\'de gelişirse benekli, 25 °C\'de gelişirse beneksiz olur.\nBir karakterin değil, o karakter bakımından bireyler arasındaki farkın kalıtsal olup olmadığından söz edilir. Fenotipik farklılığın genotipik farklılıktan ileri gelen kısmı kalıtım derecesidir: h² = genotipik varyasyon (VG) / fenotipik varyasyon (VP).'),
    op('mendel', 'Mendel\'in segregasyon ve bağımsızlık kurallarını açıklayınız.', [
      'Segregasyon: ana-babadan gelen allel genler gamet oluşurken ayrılır', 'Her gamette allel genlerden sadece biri bulunur (Aa → A, a)',
      'Bağımsızlık: birden fazla özellik birbirine bağlı olmadan ayrılır', 'AaBb → AB, Ab, aB, ab'
    ], 'Birinci kural (segregasyon): zigotlara ana ve babalarından gelen allel genler (A, a) gamet oluşurken birbirinden ayrılır ve her gamette allel genlerin sadece biri bulunur (F1 Aa → gametler A ve a).\nİkinci kural (bağımsızlık): gamet oluşumunda birden fazla özellik söz konusu olduğunda biri diğerine bağlı olmadan ayrılır (F1 AaBb → AB, Ab, aB, ab). Trihibritte (AaBbCc) 8 gamet oluşur.'),
    op('mendel', 'Allel gen, homozigot, heterozigot, dominant, resesif, tam ve eksik dominantlık kavramlarını açıklayınız.', [
      'Allel: bir karakterin farklı hallerini belirleyen genler', 'Homozigot: gametler aynı hali taşır; heterozigot: farklı halleri taşır',
      'Dominant gen etkisini gösterir, oluşan hal dominant hal; resesif gösteremez', 'Tam dominantlık: resesif etki hiç görülmez',
      'Eksik dominantlık = entermediyerlik'
    ], 'Allel genler bir karakterin farklı hallerini belirleyen genlerdir. Gametler aynı hali oluşturan genleri taşıyorsa zigot homozigot, farklı halleri taşıyorsa heterozigottur. Etkisini gösteren gen dominant gen (oluşturduğu hal dominant hal), gösteremeyen resesiftir. Resesif genin etkisini hiç gösterememesi tam dominantlıktır. Dominant genin etkisinin eksik kalmasına eksik dominans etki, yani entermediyerlik denir.'),
    op('etkilesim', 'Epistaziyi tanımlayıp resesif ve dominant epistaziyi örnekle açıklayınız.', [
      'Allel olmayan genler arası etkileşim', 'Etkileyen epistatik, etkilenen hipostatik',
      'Resesif epistazis: çekinik allel (aa) diğer geni maskeler', 'Örnek: labradorda ee → sarı (pigment yok)',
      'Dominant epistazis: dominant allel (AA/Aa) diğer geni maskeler'
    ], 'Bazı karakterlerde birden fazla gen etkilidir; allel olmayan genler arasındaki bu etkileşime epistazis denir. Etkileyen gen epistatik, etki altında kalan gen hipostatik gendir.\nResesif epistazis: bir genin çekinik allellerinin (aa) diğer genin allellerinin (BB, Bb, bb) etkisini maskelemesidir. Labradorda ee varlığında pigment oluşmaz ve sarı labrador görülür; pigment varken siyah ve kahverengi görülür.\nDominant epistazis: bir genin dominant allelinin (AA/Aa) diğer genin allellerinin etkisini maskelemesidir.'),
    op('etkilesim', 'Penetrans, ekspresivite, pleiotropi ve pozisyon etkisini açıklayınız.', [
      'Penetrans: özelliğin ifade edilme derecesi; mutant genotipi ifade eden bireylerin yüzdesi (renk körü taşıyıcı kadınların %3\'ü)',
      'Ekspresivite: dominant halin her zaman aynı seviyede görünmemesi',
      'Pleiotropi: bir genin birden fazla fenotipik etkisi; Siyam kedisi',
      'Pozisyon etkisi: gen yerine göre farklı fenotip'
    ], 'Penetrans (geçiş kabiliyeti): belli bir özelliğin ifade edilme derecesi, dominant genin nüfuz kabiliyeti; mutant genotipi en az belli derecede ifade eden bireylerin yüzdesi mutasyonun penetransıdır (ör. taşıyıcı kadınların %3\'ü renk körü).\nEkspresivite: dominant bir halin daima aynı seviyede görünmemesi; genin etki derecesi değişiktir.\nPleiotropi: bir genin birden fazla fenotipik görüntüsü; Siyam kedisinde bacaklar koyu, gövde beyaz, gözlerde şaşılık.\nPozisyon etkisi: genlerin kromozomdaki yerlerine göre farklı fenotip oluşturması.'),
    op('polimorfizm', 'Polimorfizmi tanımlayınız; polimorfik lokus ölçütlerini ve polimorfizmin yararlarını yazınız.', [
      'Çok şekillilik', 'Nadir allel ≥ %1, heterozigot ≥ %2 → polimorfik', '%1\'den sık polimorfizm, %1\'den az zararlı mutasyon',
      'Yararlar: pedigri, soy testi, babalık; işaret gen', 'Tek yumurta ikizliği, ırk kökeni, popülasyon genetiği ve ıslah'
    ], 'Polimorfizm çok şekillilik demektir. Popülasyon genetikçileri bir lokusu, nadir alleller en az %1 frekansa sahip ve heterozigotlar en az %2 oranında görülürse polimorfik sayar. Bir allel %1\'den sık görülüyorsa genetik polimorfizm, %1\'den az görülüyorsa genetik hastalığa yol açan zararlı mutasyondur.\nYararları: pedigrinin saptanması, soy testi, babalığın belirlenmesi; verim ve hastalık dayanıklılığı için işaret gen; tek yumurta ikizliğinin belirlenmesi; ırk kökenlerinin belirlenmesi; popülasyon genetiği ve hayvan ıslahı.'),
    op('hucre', 'Prokaryot ve ökaryot hücreleri karşılaştırınız.', [
      'Prokaryot: bakteri, mavi-yeşil alg, riketsiya, aktinomiset, mikoplazma', 'Prokaryot: çekirdek zarı ve zarlı organel yok, sadece ribozom, DNA dairesel',
      'Prokaryot: mayoz ve eşeyli üreme yok', 'Ökaryot: çekirdek ve zarlı organel, kompleks; mitozda histon',
      'Ökaryot: endositoz-fagositoz; bitkide selülozlu hücre duvarı'
    ], 'Prokaryot hücreler bakteriler, mavi-yeşil algler, riketsiyalar, aktinomisetler ve mikoplazmaları kapsar. Gerçek çekirdek zarları ve zarla çevrili organelleri yoktur; ribozom dışında organel bulunmaz; kalıtsal materyal dairesel yapıdadır; mayoz ve eşeyli üreme yoktur.\nÖkaryot hücreler sitoplazmasında çekirdek ve zarlı organeller bulunduran kompleks ve gelişmiş hücrelerdir. Mitozda DNA ile birlikte sıkılaşan proteinler (histon) vardır; endositoz ve fagositoz mekanizmaları bulunur; bitki hücrelerinde selüloz içeren hücre duvarı vardır.'),
    op('dna', 'Nükleozit ve nükleotid oluşumunu, baz eşleşmesini ve Chargaff kuralını açıklayınız.', [
      'Nükleozit: baz + pentoz şeker, glikozit bağı', 'Nükleotid: nükleozit + fosfat, fosfoester bağı',
      'Pürin A, G; pirimidin T, C, U; A–T, G–C', 'Chargaff: A+G / T+C = 1', 'İçte H bağlı bazlar, dışta deoksiriboz-fosfat zinciri'
    ], 'Nükleozit: azotlu organik bir baza glikozit bağı ile beş karbonlu pentoz şekerinin bağlanmasıdır (baz + şeker). Nükleotid: nükleozite ester (fosfoester) bağı ile fosfat bağlanmasıdır. Nükleotidler birleşerek polinükleotidleri oluşturur.\nPürinler adenin ve guanin; pirimidinler timin, sitozin ve urasil. Adenin timinle, guanin sitozinle eşleşir. Chargaff kuralı: A+G / T+C = 1. DNA\'nın içe bakan bazları hidrojen bağlarıyla karşılıklı dizilir; dışta fosfat gruplarıyla bağlı deoksiriboz zinciri bulunur.'),

    /* Uzun klasik */
    lg('temel', 'Genetiğin temel kavramlarını (popülasyon, varyasyon, kalıtım, karakter tipleri) ve genetik biliminin tarihsel gelişimini Mendel\'in başarı nedenleriyle birlikte anlatınız.', [
      'Popülasyon tanımı; varyasyon = değişim, farklılık, çeşitlilik', 'Genetik ve kalıtım tanımı ("her canlı kendi benzerini...")',
      'Kalitatif / kantitatif tanım', 'Kalitatif-kantitatif tablo (ekonomi, gen, çevre, kalıtım derecesi, belirlenme, varyasyon)',
      'Hook 1665, Camerarius 1694, Kölreuter 1760, Naudin 1862', 'Mendel 1865 segregasyon ve bağımsızlık, genetiğin miladı',
      'Mendel\'in başarı nedenleri (bezelye, 1-2 karakter, kayıt, 7 karakter, şans); gen kavramı'
    ], 'Popülasyon: belli yer ve zamanda bulunan, birbiriyle çiftleşip üreyebilen, aynı türden bireyler topluluğu. Varyasyon: değişim, farklılık, çeşitlilik. Genetik: kalıtım ve varyasyonla ilgili olayları, sebeplerini ve kanunlarını araştıran bilim. Kalıtım (heredity): canlıların kendilerine benzer yavrular meydana getirmesi ("her canlı kendi benzerini meydana getirir").\nKalitatif karakterler bakarak tespit edilir ve sözle ifade edilir; kantitatif karakterler ölçme, tartma ve analizle tespit edilip rakamla ifade edilir. Kalitatif/kantitatif: ekonomik önem önemsiz/önemli; gen çifti bir/çok; çevre etkisi önemsiz/önemli; kalıtım derecesi çok yüksek/düşük-yüksek; belirlenme gözlem/ölçme; varyasyon kesikli/sürekli.\nTarihçe: Hook 1665 hücrenin keşfi; Camerarius 1694 çiçek tozu erkeklik, yumurta kesesi dişilik; Kölreuter 1760 tütünde ilk yapay hibritleme, melezlerin entermedier olduğu; Naudin 1862 hibritlerin ebeveyn karışımı olup sonra ayrıldığı (segregasyona en yakın görüş); Mendel 1865 segregasyon ve bağımsızlık (genetik biliminin miladı).\nMendel\'in başarısı: şans eseri uygun bitki; kolay gelişen ve çaprazlanan bezelye; her deneyde bir veya bir-iki alternatif karakter; mükemmel kayıt; bağımsız aktarılan yedi karakter. Bu kalıtım faktörlerine gen denir.'),
    lg('mendel', 'Mendel kurallarını, test-cross\'u, trihibrit çaprazı ve dominanslık çeşitlerini ayrıntılı anlatınız.', [
      'Segregasyon: allel genler gamette ayrılır, her gamette biri', 'P → F1 Aa → A ve a gametleri',
      'Test-cross: dominant fenotipli × resesif fenotipli; homozigot/heterozigot ayrımı', 'Bağımsızlık: özellikler birbirine bağlı olmadan ayrılır; AaBb → 4 gamet',
      'Trihibrit: AABBCC × aabbcc → AaBbCc → 8 gamet', 'Allel gen, homozigot, heterozigot tanımları',
      'Dominant/resesif, tam dominantlık', 'Eksik dominanslık = entermediyerlik'
    ], '1. kural – Segregasyon: zigotlara ana ve babadan gelen allel genler gamet oluşurken birbirinden ayrılır; her gamette allel genlerin sadece biri bulunur (P → F1 Aa → gametler A, a).\nKontrol çiftleştirmesi (test-cross): dominant fenotipli bireyin homozigot mu heterozigot mu olduğunu anlamak için resesif fenotipli bireyle çiftleştirilmesi.\n2. kural – Bağımsızlık: birden fazla özellik söz konusu olduğunda gamet oluşumunda biri diğerine bağlı olmadan ayrılır (F1 AaBb → AB, Ab, aB, ab).\nTrihibrit çapraz: AABBCC × aabbcc → F1 AaBbCc → 8 tip gamet (ABC, ABc, AbC, Abc, aBC, aBc, abC, abc).\nAllel genler bir karakterin farklı hallerini belirleyen genlerdir. Gametler aynı hali taşıyorsa zigot homozigot, farklı halleri taşıyorsa heterozigot.\nDominanslık: etkisini gösteren gen dominant (oluşan hal dominant hal), gösteremeyen resesif. Resesif genin etkisini hiç gösterememesi tam dominantlık. Dominantlığın eksik kalması eksik (kısmi) dominanslık = entermediyerlik.'),
    lg('etkilesim', 'Genlerin etkilerine göre sınıflandırılmasını (epistazis, penetrans, ekspresivite, pleiotropi, pozisyon etkisi, cinsiyetle değişen genler) örnekleriyle anlatınız.', [
      'Epistazis: allel olmayan genler arası etkileşim; epistatik / hipostatik',
      'Resesif epistazis (aa; labrador ee → sarı)', 'Dominant epistazis (AA/Aa maskeler)',
      'Penetrans: ifade edilme derecesi; mutasyonun penetransı; renk körlüğü %3', 'Ekspresivite: dominant halin değişen seviyede görünmesi',
      'Pleiotropi: Siyam kedisi (bacak koyu, gövde beyaz, şaşılık)', 'Pozisyon etkisi',
      'Cinsiyetle değişen genler: koyunda boynuz H1H1/H1H2/H2H2; sakal'
    ], 'Bazı karakterlerde birden fazla gen etkilidir. Allel olmayan genler arasındaki etkileşime epistazis denir; etkileyen gen epistatik, etkilenen gen hipostatiktir.\n• Resesif epistazis: bir genin çekinik allellerinin (aa) diğer genin etkisini maskelemesi. Labradorda ee varlığında pigment yoktur → sarı; pigment varken siyah ve kahverengi.\n• Dominant epistazis: bir genin dominant allelinin (AA/Aa) diğer genin etkisini maskelemesi.\n• Penetrans (geçiş kabiliyeti): özelliğin ifade edilme derecesi, dominant genin nüfuz kabiliyeti. Mutant genotipi en az belli derecede ifade eden bireylerin yüzdesi mutasyonun penetransıdır; renk körlüğünde taşıyıcı kadınların %3\'ü renk körü olur.\n• Ekspresivite: dominant halin daima aynı seviyede görünmemesi; genin etki derecesi değişiktir.\n• Pleiotropi: bir genin birden fazla fenotipik görüntüsü; Siyam kedisinde bacaklar koyu, gövde beyaz, gözlerde şaşılık.\n• Pozisyon etkisi (komşu genler): genlerin kromozomdaki yerlerine göre farklı fenotip oluşturması.\n• Cinsiyetle değişen genler: koyunda H1H1 erkek-dişi boynuzlu; H1H2 erkek boynuzlu, dişi boynuzsuz (erkekte H1 > H2, dişide H1 < H2); H2H2 ikisi de boynuzsuz. Sakallılık (Bb) erkeklerde dominant, dişilerde resesif.'),
    lg('cevre', 'Fenotip-genotip-çevre ilişkisini; fenotipik/genotipik varyasyon, fenokopya, hermafrodit, saf hat-klon, modifikasyon ve kalıtım derecesi kavramlarıyla anlatınız.', [
      'Fenotipik varyasyon (P) ve genotipik varyasyon (G) tanımı', 'Aynı yumurta ikizleri farklı çevrede → farklılık = fenokopya',
      'Hermafrodit tanımı', 'Kendileme → saf hat → klon', 'Farklı fenotiplerde çevre + genotipin rolü',
      'Modifikasyon: aynı genotipte çevre kaynaklı fark, çevre kalkınca kaybolur; çekirge 16/25 °C',
      'Farkın kalıtsallığından söz edilir; kalıtım derecesi h² = VG/VP'
    ], 'Gözlenebilen herhangi bir özellikteki farklılık fenotipik varyasyon (P), bireyin genlerinden ileri gelen farklılık genotipik varyasyondur (G).\nAynı yumurtadan ikizlerin ayrı çevre şartlarında büyümesi ölçülebilen özelliklerde farka yol açar; bu değişiklik fenokopya olarak tanımlanır.\nHem erkek hem dişi organa sahip, iki tip eşey hücresi yapabilen bireyler hermafrodittir. Bazı hayvanlarda (tatlı su sümüklü böcekleri) ve birçok bitkide hermafroditlerin kendi kendine yeni birey oluşturmasına kendileme, döllere saf hat denir; bunlar klondur.\nCanlıların farklı fenotip göstermesinde çevre şartları ile genotipin rolü vardır. Aynı genotipli bireylerde sadece çevrenin oluşturduğu farklılıklara modifikasyon denir; çevre şartı kalkınca kaybolur (çekirge larvaları 16 °C\'de benekli, 25 °C\'de beneksiz).\nBir karakterin değil, o karakter bakımından bireyler arasındaki farkın kalıtsal olup olmadığından söz edilir. Fenotipik farkın genotipik farktan ileri gelen kısmı kalıtım derecesidir: h² = VG / VP.'),
    lg('dna', 'Genetik materyalin DNA olduğunun ispatını ve nükleik asitlerin (DNA ve RNA) yapısını ayrıntılı anlatınız.', [
      'Griffith transformasyon deneyi', 'Avery-MacLeod-McCarty: transformasyondan sorumlu molekül DNA',
      'Hershey-Chase: 32P DNA, 35S protein', 'Nükleotid → polinükleotid; pürin A, G; pirimidin T, C, U',
      'Nükleozit (glikozit bağı) ve nükleotid (fosfoester bağı)', 'A–T, G–C; Chargaff A+G/T+C = 1; içte H bağları, dışta deoksiriboz-fosfat',
      'RNA: tek zincir, A=U yok, A-G-C-U, RNA polimeraz sentez, RNaz hidroliz, transkripsiyon'
    ], 'Genetik materyalin ispatı: Griffith\'in transformasyon deneyi; Avery, MacLeod ve McCarty transformasyon yapan maddeyi saf elde edip sorumlu molekülün DNA olduğunu kanıtladılar; Hershey-Chase deneyinde DNA 32P, protein 35S ile işaretlendi. (Hücre kuru ağırlığının %50\'si proteindir.)\nNükleik asitler nükleotid alt birimlerinden oluşan polinükleotidlerdir. Pürinler adenin ve guanin; pirimidinler timin, sitozin (S veya C) ve urasil. Nükleozit: azotlu baza glikozit bağı ile pentoz şeker bağlanması. Nükleotid: nükleozite fosfoester bağı ile fosfat bağlanması.\nAdenin timinle, guanin sitozinle eşleşir; Chargaff kuralı A+G / T+C = 1. DNA\'nın içe bakan bazları hidrojen bağlarıyla karşılıklı dizilir; dışa bakan kısım fosfat gruplarıyla bağlı deoksiriboz zinciridir; sarmalın açılması için ters yönde rotasyon gerekir. Bölünmede DNA katlanarak kromozom olur; kromozomların özdeş çiftler halinde düzenli sıralanması karyotiptir.\nRNA: ribonükleotidlerden oluşur; bazları A, G, S (C), U; tek zincirli olduğu için A=U ve G=S eşitliği yoktur. RNA polimeraz sentezler, ribonükleaz (RNaz) hidrolize eder; DNA üzerinden transkripsiyon ile sentezlenir.'),
    lg('hucre', 'Prokaryot ve ökaryot hücreleri tüm özellikleriyle karşılaştırınız; kromozom ve karyotip kavramlarını kromozom sayısı örnekleriyle açıklayınız.', [
      'Prokaryot örnekleri: bakteri, mavi-yeşil alg, riketsiya, aktinomiset, mikoplazma', 'Prokaryot: çekirdek zarı yok, zarlı organel yok, sadece ribozom',
      'Prokaryot: DNA dairesel; mayoz ve eşeyli üreme yok', 'Ökaryot: çekirdek ve zarlı organel, kompleks; mitozda histon',
      'Ökaryot: endositoz/fagositoz; bitkide selülozlu duvar', 'DNA bölünmede kromozom olur; karyotip tanımı',
      'Örnek sayılar: insan 46, tavuk 78, at 64, koyun 54, keçi-inek 60, kedi 38, sirke sineği 8'
    ], 'Prokaryot hücreler bakteri, mavi-yeşil alg, riketsiya, aktinomiset ve mikoplazma gruplarını kapsayan üst alem kategorisindedir. Gerçek çekirdek zarları ve zarla çevrili organelleri yoktur; ribozom dışında organel bulunmaz; kalıtsal materyal daireseldir; mayoz bölünme ve eşeyli üreme yoktur.\nÖkaryot hücreler sitoplazmasında çekirdek ve zarlı organeller bulunduran kompleks ve gelişmiş hücrelerdir. Mitozda DNA ile birlikte sıkılaşan histon proteinleri vardır; endositoz ve fagositoz ile madde alabilirler; bitkilerde selüloz içeren hücre duvarı bulunur.\nÇekirdekteki DNA molekülleri bölünme evresinde kompleks katlanmalarla kromozom haline gelir. Karyotip, kromozomların özdeş çiftler halinde eşlendikten sonra belli düzene göre sıralanmasıdır; her bireyin kromozom sayısı, şekli ve büyüklüğü karyotipini ifade eder ve türlerin kromozom haritalarında kullanılır.\nKromozom sayıları (2n): solucan 2, sirke sineği 8, çekirge 14, soğan 16, güvercin 16, domates 24, kedi 38, maymun 42, insan 46, orangutan 48, koyun 54, keçi 60, inek 60, at 64, tavuk 78, eğrelti otu 500.'),
    lg('polimorfizm', 'Genetik polimorfizmi; tanımı, ölçütleri, mutasyonla ilişkisi ve hayvancılıktaki kullanım alanlarıyla birlikte anlatınız.', [
      'Polimorfizm: çok şekillilik', 'Polimorfik lokus: nadir allel ≥ %1, heterozigot ≥ %2',
      'Allel > %1 → polimorfizm', 'Allel < %1 → genetik hastalığa yol açan zararlı mutasyon', 'Nokta mutasyonlarının 4 farklı etkisi',
      'Pedigri, soy testi, babalık tespiti', 'Verim ve hastalık direnci için işaret gen',
      'Tek yumurta ikizliği, ırk kökeni, popülasyon genetiği, hayvan ıslahı'
    ], 'Polimorfizm çok şekillilik demektir. Popülasyon genetikçileri bir gen lokusunu, nadir alleller en az %1 frekansa sahip ve bu alleller için heterozigotlar en az %2 oranında görülürse polimorfik olarak tanımlar. Genel popülasyonda bir allel %1\'den sık gözleniyorsa genetik polimorfizm; %1\'den az sıklıkta gözleniyorsa genetik hastalığa neden olan zararlı mutasyondur. Nokta mutasyonlarının dört farklı etkisi görülür.\nYararları: pedigrinin saptanması, soy testi, babalığın belirlenmesi; polimorfik genlerden verim ve hastalıklara dayanıklılıkla ilgili işaret gen olarak yararlanılması; tek yumurta ikizliğinin belirlenmesi; ırkların kökenlerinin belirlenmesi; popülasyon genetiği ve hayvan ıslahı çalışmaları.'),
    lg('dna', 'Nükleik asitlerin kimyasal yapısını (bazlar, nükleozit, nükleotid, bağlar, Chargaff) ve RNA\'yı DNA ile karşılaştırarak anlatınız.', [
      'Polinükleotid yapı', 'Pürin A, G; pirimidin T, C, U', 'Nükleozit = baz + şeker (glikozit)', 'Nükleotid = nükleozit + fosfat (fosfoester)',
      'Baz eşleşmesi ve Chargaff', 'DNA iç-dış yapısı (H bağı, deoksiriboz-fosfat)', 'RNA tek zincir, U içerir, eşitlik yok', 'RNA polimeraz, RNaz, transkripsiyon'
    ], 'Nükleik asitler nükleotid alt birimlerinden oluşan polinükleotid makromoleküllerdir.\nBazlar: pürinler adenin (A) ve guanin (G); pirimidinler timin (T), sitozin (S/C) ve urasil (U).\nNükleozit: azotlu organik baza glikozit bağı ile beş karbonlu pentoz şekerinin bağlanması (baz + şeker). Nükleotid: nükleozite ester (fosfoester) bağı ile fosfat bağlanması (nükleozit + fosfat).\nDNA\'da adenin timinle, guanin sitozinle eşleşir; Chargaff kuralı A+G / T+C = 1. İçe bakan bazlar hidrojen bağlarıyla karşılıklı dizilir; dışta fosfat gruplarıyla bağlanmış deoksiriboz zinciri bulunur.\nRNA ribonükleotidlerden oluşur; bazları A, G, S ve U\'dur (timin yerine urasil). Tek zincirli olduğu için A=U, G=S eşitliği yoktur. Sentezleyen enzim RNA polimeraz, hidrolize eden ribonükleaz (RNaz); DNA üzerinden transkripsiyon ile sentezlenir.')
  ]
});
})();
