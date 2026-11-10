from lib import *
topic('temeller')
# ---------------- Test 1 ----------------
part(1)
mc('Yazılım geliştirme sürecinde yazılan kodu **hatalara karşı denetleyen** araç hangisidir?',
   ['Hata ayıklayıcı (debugger)', 'Derleyici (compiler)', 'Yanaylaç (profiler)', 'Editör', 'Yorumlayıcı'], 0,
   'Hata ayıklayıcı (debugger) hatanın hangi satırda olduğunu bulmaya ve değişken değerlerine bakmaya yarar.',
   why={1: 'Derleyici kaynak kodu hedef koda (makine koduna) çevirir; hata aramak için kullanılmaz.',
        2: 'Yanaylaç performans istatistiği toplar (kaç kez çalıştı, ne kadar sürdü).'})
mc('Programın parçalarının **kaç kez çalıştığını ve ne kadar sürdüğünü** ölçerek hızlandırmaya yardım eden araç hangisidir?',
   ['Yanaylaç (profiler)', 'Hata ayıklayıcı (debugger)', 'Derleyici (compiler)', 'IDE', 'Editör'], 0,
   'Yanaylaç (profiler) çalışma istatistiği toplar; programın hangi bölümünün yavaş olduğunu gösterir.')
mc('Yanaylacın, programın **tüm parçalarının gerçekten kullanılıp kullanılmadığını** belirlemesine ne ad verilir?',
   ['Kaplam (coverage)', 'Söz dizimi (syntax)', 'Derleme', 'Hata ayıklama', 'Yorumlama'], 0,
   'Kitapta bu işleme **kaplam (coverage)** deniyor.')
mc('Derleyici ile yorumlayıcı arasındaki temel fark hangisidir?',
   ['Derleyici kodu bir kez çevirip tekrar çalıştırılabilir dosya üretir; yorumlayıcı her çalıştırmada satır satır çevirir.',
    'Yorumlayıcı kodu bir kez çevirir; derleyici her çalıştırmada satır satır çevirir.',
    'Derleyici sadece Python için, yorumlayıcı sadece C için kullanılır.',
    'İkisi de kaynak kodu çevirmez, sadece hata arar.',
    'Yorumlanan programlar her zaman derlenenlerden hızlıdır.'], 0,
   'Derlenmiş program değişmedikçe tekrar derlenmez. Yorumlanan program her çalıştırmada yeniden çevrilir; bu yüzden derlenenler genelde daha hızlıdır.',
   why={4: 'Tam tersi: derleme bir kez yapıldığı için derlenen programlar genelde daha hızlı çalışır.'})
mc('Aşağıdakilerden hangisi kitapta **senaryo dili (scripting language)** örneği olarak verilmez?',
   ['C++', 'Python', 'Ruby', 'Perl', 'JavaScript'], 0,
   'Senaryo (yorumlanan) dillere örnek: Python, Ruby, Perl, JavaScript. C, C++, Java, C# **derlenen** dillere örnektir.')
mc('Üst düzey dilde yazılmış programın derlenmeden / yorumlanmadan önceki hâline ne denir?',
   ['Kaynak kod (source code)', 'Hedef kod (target code)', 'Makine kodu', 'İkilik kod', 'Bayt kodu'], 0,
   'Programcının yazdığı kod **kaynak kod**, ona karşılık gelen makine dili **hedef kod**dur. Yorumlayıcı kaynak kodu hedef koda dönüştürür.')
mc('Python 3\'te ekrana `Merhaba, Dünya!` yazdıran satırı tamamlayın:',
   ['print', 'echo', 'write', 'printf', 'Print'], 0,
   'Python\'da ekrana yazdırma fonksiyonu `print`tir. Python büyük/küçük harf duyarlı olduğu için `Print` hata verir.',
   code='____("Merhaba, Dünya!")', blank='Merhaba, Dünya!',
   why={1: '`echo` PHP\'de kullanılır, Python\'da yoktur.', 4: 'Python büyük-küçük harf duyarlıdır: `Print` tanımsızdır (NameError).'})
mc('Kitaptaki `print "Merhaba, Dünya!"` satırı Python 3\'te çalıştırılırsa ne olur?',
   ['SyntaxError verir; Python 3\'te print bir fonksiyondur, parantez gerekir.', 'Merhaba, Dünya! yazar.',
    '"Merhaba, Dünya!" tırnaklarıyla yazar.', 'Hiçbir şey yazmaz ama hata da vermez.', 'NameError verir.'], 0,
   'Bu yazım Python 2\'ye aittir. Python 3\'te `print("Merhaba, Dünya!")` yazılmalıdır.',
   code='print "Merhaba, Dünya!"', run='err:SyntaxError')
fill('Python bir **yorumlanan** dildir. Kaynak kodu satır satır makine diline çeviren programa ne denir? (tek kelime, Türkçe)',
     '# Python kodunu satır satır çeviren program: ____', ['yorumlayıcı', 'yorumlayici', 'interpreter'],
     'Python kodunu çalıştıran program **yorumlayıcı**dır (interpreter).', cs=False, nocheck=True)
fill('Editör, hata ayıklayıcı ve diğer araçları tek pakette sunan ortamın kısaltması nedir?',
     '# Bütünleştirilmiş geliştirme ortamı = ____', ['IDE'],
     'IDE = Integrated Development Environment (bütünleştirilmiş geliştirme ortamı). Örnek: IDLE, Wing IDE, Canopy.', cs=False, nocheck=True)
code('Değişkenlerle hesap', 'Kitaptaki ders saati örneğini tamamlayın: haftada 3 saat, 14 hafta. Toplam ders saatini yazdırsın.',
     '''
     DersSaati = 3
     Hafta = {{1}}
     Toplam = DersSaati {{2}} Hafta
     {{3}}(Toplam)
     ''', [['14'], ['*'], ['print']],
     ['Hafta sayısı 14.', 'Toplam saat = ders saati × hafta, çarpma operatörü `*`.', 'Sonucu ekrana `print` yazar.'],
     '42')
open_('Ekrana alt alta **Merhaba, Dünya!** ve **Python öğreniyorum** yazan Python 3 programını yazınız.',
      '- Her `print` ayrı satıra yazar.\n- Python 3\'te `print` parantezle çağrılır.',
      '''
      print("Merhaba, Dünya!")
      print("Python öğreniyorum")
      ''', expect='Merhaba, Dünya!\nPython öğreniyorum')
open_('Derleyici ile yorumlayıcının **bir benzerliğini** ve **bir farkını** yazınız.',
      '- Benzerlik: İkisi de üst düzey kaynak kodu hedef koda (genellikle makine koduna) çevirir.\n'
      '- Fark: Derleyici bir kez çevirip tekrar çalıştırılabilir dosya üretir; yorumlayıcı program her çalıştırıldığında satır satır yeniden çevirir.\n'
      '- Sonuç: Derlenen programlar genelde daha hızlı, yorumlananlar ise platformdan bağımsız hemen çalışır.', None)
# ---------------- Test 2 ----------------
part(2)
mc('Yazılım geliştirme sürecinin doğru sırası hangisidir?',
   ['Kod yazılır → hata ayıklayıcı ile denetlenir → derleyici ile makine diline çevrilir',
    'Derleyici ile çevrilir → kod yazılır → hata ayıklanır',
    'Hata ayıklanır → kod yazılır → derlenir',
    'Kod yazılır → derlenir → hiç denetlenmez',
    'Yanaylaç çalıştırılır → kod yazılır → derlenir'], 0,
   'Kitaptaki süreç: programcı kodu yazar, debugger ile hatalara karşı denetler, compiler ile makinenin anlayacağı sinyallere çevirir.')
mc('Aşağıdakilerden hangisi kitapta anlatılan bir **Python IDE**\'si değildir?',
   ['Photoshop', 'IDLE', 'Wing IDE 101', 'Canopy', 'Wing IDE Personal'], 0,
   'Kitapta geçen Python geliştirme ortamları: IDLE (python.org, ücretsiz), Wing IDE (Professional, Personal, 101) ve Canopy.')
mc('Dili oluşturan parçaların kurallara uygun biçimde dizilmesine ne denir?',
   ['Söz dizimi (syntax)', 'Kaplam (coverage)', 'Hedef kod', 'Algoritma', 'Taşınabilirlik'], 0,
   'Söz dizimi (syntax), kelime ve sembollerin kurallara uygun dizilişidir. Editörler söz dizimi hatalarını renklerle gösterebilir.')
mc('Üst düzey dillerin en önemli avantajı hangisidir?',
   ['Kodlama donanımdan bağımsız yapılabilir; yorumlayıcı kurulu her platformda çalışır.',
    'Doğrudan 0 ve 1 ile yazılır.', 'Hiç hata içermez.', 'Derleyiciye ya da yorumlayıcıya ihtiyaç duymaz.',
    'Sadece tek bir işletim sisteminde çalışır.'], 0,
   'Üst düzey dillerin güzelliği donanımdan bağımsızlıktır: Python yorumlayıcısı kurulu ise program tüm platformlarda çalışır.')
mc('Bilgisayardaki programlar en alt düzeyde hangi sayı sistemiyle saklanır?',
   ['İkilik (0 ve 1)', 'Onluk', 'Sekizlik', 'On altılık', 'Romen rakamları'], 0,
   'Yazılım, sıfır ve birlerden oluşan ikilik (binary) dizilerdir. İşlemci bu sinyalleri çözümleyerek işlem yapar.')
mc('Aşağıdakilerden hangisi Python için **doğru** değildir?',
   ['Sadece Windows\'ta çalışır.', 'Ücretsiz ve özgürdür.', 'Okunabilirliği yüksektir.',
    'Nesnelere dayalı bir dildir.', 'Birçok hazır kütüphane içerir.'], 0,
   'Python bütün işletim sistemleriyle uyumludur; masaüstü, web ve Raspberry Pi gibi donanımlar için de kullanılır.')
mc('Aşağıdaki kod çalıştırılınca ekranda ne görünür?',
   ['Python', '"Python"', "'Python'", 'print("Python")', 'Hata verir'], 0,
   'Tırnak işaretleri metnin başını ve sonunu gösterir, ekranda görünmez.',
   code='print("Python")', run='out')
fill('Kitaba göre Python\'da yazılan geleneksel ilk programın adı nedir? (iki kelime)',
     '# İlk program: "____"', ['Merhaba, Dünya!', 'Merhaba Dünya', 'Merhaba, Dünya', 'Hello World', 'Hello, World!'],
     'Yeni bir dilde yazılan ilk program geleneksel olarak "Merhaba, Dünya!" (Hello, World!) programıdır.', cs=False, nocheck=True)
fill('Boşluğu doldurun: `SayiA` ile `SayiB`\'nin toplamını yazdırsın.',
     '''
     SayiA = 7
     SayiB = 5
     print(SayiA ____ SayiB)
     ''', ['+'], 'Toplama operatörü `+`.', expect='12')
code('Kaynak koddan çıktı', 'Aşağıdaki program alt alta `Kaynak kod` ve `Hedef kod` yazsın.',
     '''
     {{1}}("Kaynak kod")
     print({{2}})
     ''', [['print'], ['"Hedef kod"', "'Hedef kod'"]],
     ['Ekrana yazdırma: `print`.', 'Metin tırnak içinde yazılır; tek ya da çift tırnak olabilir.'],
     'Kaynak kod\nHedef kod')
open_('Ekrana **3 + 4** işleminin sonucunu yazdıran tek satırlık Python programını yazınız.',
      '- `print` içine doğrudan işlem yazılabilir: sonuç hesaplanıp yazılır.\n- Tırnak içine yazarsan (`"3 + 4"`) işlem yapılmaz, metin yazılır.',
      'print(3 + 4)', expect='7')
open_('Hata ayıklayıcı (debugger) ve yanaylaç (profiler) ne işe yarar? Kısaca yazınız.',
      '- **Debugger:** Programdaki hataların hangi satırda olduğunu bulur; değişken değerlerine bakarak neyin yanlış gittiği anlaşılır.\n'
      '- **Profiler:** Program çalışırken istatistik toplar (hangi parça kaç kez çalıştı, ne kadar sürdü). Programı hızlandırmak için kullanılır; kullanılmayan parçaları bulmaya **kaplam (coverage)** denir.', None)
