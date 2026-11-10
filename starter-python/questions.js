/* 250 soruluk havuz, her konudan 25 (Test 1: 13, Test 2: 12). Cevaplar Python 3 ile doğrulandı. gen/build.py ile üretildi. */
window.EXAMS = [];
window.TOPIC_QUESTIONS = {
 "temeller": [
  {
   "type": "mc",
   "q": "Yazılım geliştirme sürecinde yazılan kodu **hatalara karşı denetleyen** araç hangisidir?",
   "opts": [
    "Derleyici (compiler)",
    "Hata ayıklayıcı (debugger)",
    "Editör",
    "Yorumlayıcı",
    "Yanaylaç (profiler)"
   ],
   "a": 1,
   "exp": "Hata ayıklayıcı (debugger) hatanın hangi satırda olduğunu bulmaya ve değişken değerlerine bakmaya yarar.",
   "why": {
    "0": "Derleyici kaynak kodu hedef koda (makine koduna) çevirir; hata aramak için kullanılmaz.",
    "4": "Yanaylaç performans istatistiği toplar (kaç kez çalıştı, ne kadar sürdü)."
   },
   "topic": "temeller"
  },
  {
   "type": "mc",
   "q": "Programın parçalarının **kaç kez çalıştığını ve ne kadar sürdüğünü** ölçerek hızlandırmaya yardım eden araç hangisidir?",
   "opts": [
    "IDE",
    "Derleyici (compiler)",
    "Editör",
    "Yanaylaç (profiler)",
    "Hata ayıklayıcı (debugger)"
   ],
   "a": 3,
   "exp": "Yanaylaç (profiler) çalışma istatistiği toplar; programın hangi bölümünün yavaş olduğunu gösterir.",
   "topic": "temeller"
  },
  {
   "type": "mc",
   "q": "Yanaylacın, programın **tüm parçalarının gerçekten kullanılıp kullanılmadığını** belirlemesine ne ad verilir?",
   "opts": [
    "Yorumlama",
    "Söz dizimi (syntax)",
    "Kaplam (coverage)",
    "Derleme",
    "Hata ayıklama"
   ],
   "a": 2,
   "exp": "Kitapta bu işleme **kaplam (coverage)** deniyor.",
   "topic": "temeller"
  },
  {
   "type": "mc",
   "q": "Derleyici ile yorumlayıcı arasındaki temel fark hangisidir?",
   "opts": [
    "Yorumlayıcı kodu bir kez çevirir; derleyici her çalıştırmada satır satır çevirir.",
    "Derleyici kodu bir kez çevirip tekrar çalıştırılabilir dosya üretir; yorumlayıcı her çalıştırmada satır satır çevirir.",
    "Derleyici sadece Python için, yorumlayıcı sadece C için kullanılır.",
    "Yorumlanan programlar her zaman derlenenlerden hızlıdır.",
    "İkisi de kaynak kodu çevirmez, sadece hata arar."
   ],
   "a": 1,
   "exp": "Derlenmiş program değişmedikçe tekrar derlenmez. Yorumlanan program her çalıştırmada yeniden çevrilir; bu yüzden derlenenler genelde daha hızlıdır.",
   "why": {
    "3": "Tam tersi: derleme bir kez yapıldığı için derlenen programlar genelde daha hızlı çalışır."
   },
   "topic": "temeller"
  },
  {
   "type": "mc",
   "q": "Aşağıdakilerden hangisi kitapta **senaryo dili (scripting language)** örneği olarak verilmez?",
   "opts": [
    "C++",
    "Ruby",
    "Python",
    "Perl",
    "JavaScript"
   ],
   "a": 0,
   "exp": "Senaryo (yorumlanan) dillere örnek: Python, Ruby, Perl, JavaScript. C, C++, Java, C# **derlenen** dillere örnektir.",
   "topic": "temeller"
  },
  {
   "type": "mc",
   "q": "Üst düzey dilde yazılmış programın derlenmeden / yorumlanmadan önceki hâline ne denir?",
   "opts": [
    "Makine kodu",
    "İkilik kod",
    "Bayt kodu",
    "Hedef kod (target code)",
    "Kaynak kod (source code)"
   ],
   "a": 4,
   "exp": "Programcının yazdığı kod **kaynak kod**, ona karşılık gelen makine dili **hedef kod**dur. Yorumlayıcı kaynak kodu hedef koda dönüştürür.",
   "topic": "temeller"
  },
  {
   "type": "mc",
   "q": "Python 3'te ekrana `Merhaba, Dünya!` yazdıran satırı tamamlayın:",
   "opts": [
    "printf",
    "write",
    "print",
    "echo",
    "Print"
   ],
   "a": 2,
   "exp": "Python'da ekrana yazdırma fonksiyonu `print`tir. Python büyük/küçük harf duyarlı olduğu için `Print` hata verir.",
   "code": "____(\"Merhaba, Dünya!\")",
   "why": {
    "3": "`echo` PHP'de kullanılır, Python'da yoktur.",
    "4": "Python büyük-küçük harf duyarlıdır: `Print` tanımsızdır (NameError)."
   },
   "topic": "temeller"
  },
  {
   "type": "mc",
   "q": "Kitaptaki `print \"Merhaba, Dünya!\"` satırı Python 3'te çalıştırılırsa ne olur?",
   "opts": [
    "SyntaxError verir; Python 3'te print bir fonksiyondur, parantez gerekir.",
    "\"Merhaba, Dünya!\" tırnaklarıyla yazar.",
    "Merhaba, Dünya! yazar.",
    "Hiçbir şey yazmaz ama hata da vermez.",
    "NameError verir."
   ],
   "a": 0,
   "exp": "Bu yazım Python 2'ye aittir. Python 3'te `print(\"Merhaba, Dünya!\")` yazılmalıdır.",
   "code": "print \"Merhaba, Dünya!\"",
   "topic": "temeller"
  },
  {
   "type": "fill",
   "q": "Python bir **yorumlanan** dildir. Kaynak kodu satır satır makine diline çeviren programa ne denir? (tek kelime, Türkçe)",
   "code": "# Python kodunu satır satır çeviren program: ____",
   "ans": [
    "yorumlayıcı",
    "yorumlayici",
    "interpreter"
   ],
   "cs": false,
   "exp": "Python kodunu çalıştıran program **yorumlayıcı**dır (interpreter).",
   "topic": "temeller"
  },
  {
   "type": "fill",
   "q": "Editör, hata ayıklayıcı ve diğer araçları tek pakette sunan ortamın kısaltması nedir?",
   "code": "# Bütünleştirilmiş geliştirme ortamı = ____",
   "ans": [
    "IDE"
   ],
   "cs": false,
   "exp": "IDE = Integrated Development Environment (bütünleştirilmiş geliştirme ortamı). Örnek: IDLE, Wing IDE, Canopy.",
   "topic": "temeller"
  },
  {
   "type": "code",
   "title": "Değişkenlerle hesap",
   "q": "Kitaptaki ders saati örneğini tamamlayın: haftada 3 saat, 14 hafta. Toplam ders saatini yazdırsın.",
   "code": "DersSaati = 3\nHafta = {{1}}\nToplam = DersSaati {{2}} Hafta\n{{3}}(Toplam)",
   "blanks": [
    {
     "ans": [
      "14"
     ],
     "cs": true
    },
    {
     "ans": [
      "*"
     ],
     "cs": true
    },
    {
     "ans": [
      "print"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Hafta sayısı 14.",
    "Toplam saat = ders saati × hafta, çarpma operatörü `*`.",
    "Sonucu ekrana `print` yazar."
   ],
   "expect": "42",
   "topic": "temeller"
  },
  {
   "type": "open",
   "q": "Ekrana alt alta **Merhaba, Dünya!** ve **Python öğreniyorum** yazan Python 3 programını yazınız.",
   "model": "- Her `print` ayrı satıra yazar.\n- Python 3'te `print` parantezle çağrılır.",
   "modelCode": "print(\"Merhaba, Dünya!\")\nprint(\"Python öğreniyorum\")",
   "topic": "temeller"
  },
  {
   "type": "open",
   "q": "Derleyici ile yorumlayıcının **bir benzerliğini** ve **bir farkını** yazınız.",
   "model": "- Benzerlik: İkisi de üst düzey kaynak kodu hedef koda (genellikle makine koduna) çevirir.\n- Fark: Derleyici bir kez çevirip tekrar çalıştırılabilir dosya üretir; yorumlayıcı program her çalıştırıldığında satır satır yeniden çevirir.\n- Sonuç: Derlenen programlar genelde daha hızlı, yorumlananlar ise platformdan bağımsız hemen çalışır.",
   "topic": "temeller"
  },
  {
   "type": "mc",
   "q": "Yazılım geliştirme sürecinin doğru sırası hangisidir?",
   "opts": [
    "Yanaylaç çalıştırılır → kod yazılır → derlenir",
    "Hata ayıklanır → kod yazılır → derlenir",
    "Kod yazılır → hata ayıklayıcı ile denetlenir → derleyici ile makine diline çevrilir",
    "Kod yazılır → derlenir → hiç denetlenmez",
    "Derleyici ile çevrilir → kod yazılır → hata ayıklanır"
   ],
   "a": 2,
   "exp": "Kitaptaki süreç: programcı kodu yazar, debugger ile hatalara karşı denetler, compiler ile makinenin anlayacağı sinyallere çevirir.",
   "topic": "temeller"
  },
  {
   "type": "mc",
   "q": "Aşağıdakilerden hangisi kitapta anlatılan bir **Python IDE**'si değildir?",
   "opts": [
    "IDLE",
    "Photoshop",
    "Wing IDE 101",
    "Canopy",
    "Wing IDE Personal"
   ],
   "a": 1,
   "exp": "Kitapta geçen Python geliştirme ortamları: IDLE (python.org, ücretsiz), Wing IDE (Professional, Personal, 101) ve Canopy.",
   "topic": "temeller"
  },
  {
   "type": "mc",
   "q": "Dili oluşturan parçaların kurallara uygun biçimde dizilmesine ne denir?",
   "opts": [
    "Taşınabilirlik",
    "Söz dizimi (syntax)",
    "Kaplam (coverage)",
    "Algoritma",
    "Hedef kod"
   ],
   "a": 1,
   "exp": "Söz dizimi (syntax), kelime ve sembollerin kurallara uygun dizilişidir. Editörler söz dizimi hatalarını renklerle gösterebilir.",
   "topic": "temeller"
  },
  {
   "type": "mc",
   "q": "Üst düzey dillerin en önemli avantajı hangisidir?",
   "opts": [
    "Kodlama donanımdan bağımsız yapılabilir; yorumlayıcı kurulu her platformda çalışır.",
    "Hiç hata içermez.",
    "Doğrudan 0 ve 1 ile yazılır.",
    "Sadece tek bir işletim sisteminde çalışır.",
    "Derleyiciye ya da yorumlayıcıya ihtiyaç duymaz."
   ],
   "a": 0,
   "exp": "Üst düzey dillerin güzelliği donanımdan bağımsızlıktır: Python yorumlayıcısı kurulu ise program tüm platformlarda çalışır.",
   "topic": "temeller"
  },
  {
   "type": "mc",
   "q": "Bilgisayardaki programlar en alt düzeyde hangi sayı sistemiyle saklanır?",
   "opts": [
    "On altılık",
    "Sekizlik",
    "Onluk",
    "Romen rakamları",
    "İkilik (0 ve 1)"
   ],
   "a": 4,
   "exp": "Yazılım, sıfır ve birlerden oluşan ikilik (binary) dizilerdir. İşlemci bu sinyalleri çözümleyerek işlem yapar.",
   "topic": "temeller"
  },
  {
   "type": "mc",
   "q": "Aşağıdakilerden hangisi Python için **doğru** değildir?",
   "opts": [
    "Ücretsiz ve özgürdür.",
    "Birçok hazır kütüphane içerir.",
    "Nesnelere dayalı bir dildir.",
    "Okunabilirliği yüksektir.",
    "Sadece Windows'ta çalışır."
   ],
   "a": 4,
   "exp": "Python bütün işletim sistemleriyle uyumludur; masaüstü, web ve Raspberry Pi gibi donanımlar için de kullanılır.",
   "topic": "temeller"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kod çalıştırılınca ekranda ne görünür?",
   "opts": [
    "Hata verir",
    "'Python'",
    "print(\"Python\")",
    "\"Python\"",
    "Python"
   ],
   "a": 4,
   "exp": "Tırnak işaretleri metnin başını ve sonunu gösterir, ekranda görünmez.",
   "code": "print(\"Python\")",
   "topic": "temeller"
  },
  {
   "type": "fill",
   "q": "Kitaba göre Python'da yazılan geleneksel ilk programın adı nedir? (iki kelime)",
   "code": "# İlk program: \"____\"",
   "ans": [
    "Merhaba, Dünya!",
    "Merhaba Dünya",
    "Merhaba, Dünya",
    "Hello World",
    "Hello, World!"
   ],
   "cs": false,
   "exp": "Yeni bir dilde yazılan ilk program geleneksel olarak \"Merhaba, Dünya!\" (Hello, World!) programıdır.",
   "topic": "temeller"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: `SayiA` ile `SayiB`'nin toplamını yazdırsın.",
   "code": "SayiA = 7\nSayiB = 5\nprint(SayiA ____ SayiB)",
   "ans": [
    "+"
   ],
   "cs": true,
   "exp": "Toplama operatörü `+`.",
   "topic": "temeller"
  },
  {
   "type": "code",
   "title": "Kaynak koddan çıktı",
   "q": "Aşağıdaki program alt alta `Kaynak kod` ve `Hedef kod` yazsın.",
   "code": "{{1}}(\"Kaynak kod\")\nprint({{2}})",
   "blanks": [
    {
     "ans": [
      "print"
     ],
     "cs": true
    },
    {
     "ans": [
      "\"Hedef kod\"",
      "'Hedef kod'"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Ekrana yazdırma: `print`.",
    "Metin tırnak içinde yazılır; tek ya da çift tırnak olabilir."
   ],
   "expect": "Kaynak kod\nHedef kod",
   "topic": "temeller"
  },
  {
   "type": "open",
   "q": "Ekrana **3 + 4** işleminin sonucunu yazdıran tek satırlık Python programını yazınız.",
   "model": "- `print` içine doğrudan işlem yazılabilir: sonuç hesaplanıp yazılır.\n- Tırnak içine yazarsan (`\"3 + 4\"`) işlem yapılmaz, metin yazılır.",
   "modelCode": "print(3 + 4)",
   "topic": "temeller"
  },
  {
   "type": "open",
   "q": "Hata ayıklayıcı (debugger) ve yanaylaç (profiler) ne işe yarar? Kısaca yazınız.",
   "model": "- **Debugger:** Programdaki hataların hangi satırda olduğunu bulur; değişken değerlerine bakarak neyin yanlış gittiği anlaşılır.\n- **Profiler:** Program çalışırken istatistik toplar (hangi parça kaç kez çalıştı, ne kadar sürdü). Programı hızlandırmak için kullanılır; kullanılmayan parçaları bulmaya **kaplam (coverage)** denir.",
   "topic": "temeller"
  }
 ],
 "degerler": [
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "5 10",
    "\"510\"",
    "TypeError",
    "510",
    "15"
   ],
   "a": 3,
   "exp": "Tırnak içindeki değerler metindir (str). `+` metinleri **birleştirir**: \"5\" + \"10\" = \"510\".",
   "code": "print(\"5\" + \"10\")",
   "why": {
    "4": "15 olması için ikisinin de sayı (int) olması gerekirdi."
   },
   "topic": "degerler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kod çalıştırılınca ne olur?",
   "opts": [
    "Hiçbir şey yazmaz",
    "510",
    "TypeError hatası verir",
    "\"510\"",
    "15"
   ],
   "a": 2,
   "exp": "Metin (str) ile sayı (int) `+` ile toplanamaz: `TypeError`. Düzeltmek için `\"5\" + str(10)` ya da `int(\"5\") + 10` yazılır.",
   "code": "print(\"5\" + 10)",
   "topic": "degerler"
  },
  {
   "type": "mc",
   "q": "`type(\"4\")` ne döndürür?",
   "opts": [
    "<class 'char'>",
    "4",
    "<class 'float'>",
    "<class 'int'>",
    "<class 'str'>"
   ],
   "a": 4,
   "exp": "Tırnak içindeki 4 bir metindir (karakter dizisi), türü `str`.",
   "code": "print(type(\"4\"))",
   "topic": "degerler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "15",
    "510",
    "15.0",
    "TypeError",
    "5 10"
   ],
   "a": 0,
   "exp": "`int(\"10\")` metni tam sayıya çevirir; 5 + 10 = 15.",
   "code": "print(5 + int(\"10\"))",
   "topic": "degerler"
  },
  {
   "type": "mc",
   "q": "`int(\"3.4\")` çalıştırılırsa ne olur?",
   "opts": [
    "ValueError verir",
    "TypeError verir",
    "3",
    "4",
    "3.4"
   ],
   "a": 0,
   "exp": "`int()` sadece tam sayı görünümlü metni çevirir. \"3.4\" geçerli bir tam sayı değildir: `ValueError: invalid literal for int()`.",
   "code": "int(\"3.4\")",
   "why": {
    "2": "int(3.4) sayıyı keserek 3 verir; ama burada metin \"3.4\" verilmiş, metin ise doğrudan çevrilemez."
   },
   "topic": "degerler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "100, -45, 0",
    "100-450",
    "100 -45 0",
    "Hata verir",
    "(100, -45, 0)"
   ],
   "a": 2,
   "exp": "Çoklu atama: soldaki ilk değişken sağdaki ilk değere eşleşir. `print` virgülle ayrılan değerlerin arasına bir boşluk koyar.",
   "code": "x, y, z = 100, -45, 0\nprint(x, y, z)",
   "topic": "degerler"
  },
  {
   "type": "mc",
   "q": "Kod satır satır çalıştığında son durumda `x` kaçtır?",
   "opts": [
    "Hata verir",
    "5",
    "3",
    "7",
    "2"
   ],
   "a": 1,
   "exp": "`x = y` anında x, y'nin o andaki değerini (5) alır. Sonra `y = 7` yapılması x'i etkilemez.",
   "code": "x = 2\ny = 5\nx = 3\nx = y\ny = 7\nprint(x)",
   "why": {
    "3": "x = y bir kez atama yapar; y sonradan değişince x değişmez."
   },
   "topic": "degerler"
  },
  {
   "type": "mc",
   "q": "`round(28.71)` ve `int(28.71)` sırasıyla ne verir?",
   "opts": [
    "28 28",
    "28.71 28",
    "29 29",
    "28 29",
    "29 28"
   ],
   "a": 4,
   "exp": "`round` en yakın tam sayıya yuvarlar (29). `int` kesirli kısmı atar, yani keser (28).",
   "code": "print(round(28.71), int(28.71))",
   "topic": "degerler"
  },
  {
   "type": "mc",
   "q": "Aşağıdakilerden hangisi geçerli bir değişken adı (belirteç) **değildir**?",
   "opts": [
    "Anahtar_10",
    "Toplam_Brut",
    "a2",
    "4ogrenci",
    "_sayac"
   ],
   "a": 3,
   "exp": "Belirteç sayı ile başlayamaz. İlk karakter harf ya da alt çizgi olmalıdır.",
   "why": {
    "4": "Alt çizgi ile başlamak serbesttir."
   },
   "topic": "degerler"
  },
  {
   "type": "mc",
   "q": "Boşluğa hangisi gelirse çıktı `x = 10` olur?",
   "opts": [
    "float(x)",
    "x",
    "str(x)",
    "int(x)",
    "\"x\""
   ],
   "a": 2,
   "exp": "Metne sayı eklemek için önce `str()` ile metne çevrilmesi gerekir. `\"x = \" + x` TypeError verir.",
   "code": "x = 10\nprint(\"x = \" + ____)",
   "why": {
    "1": "Metin + int → TypeError.",
    "4": "\"x\" sadece x harfini ekler: x = x yazar."
   },
   "topic": "degerler"
  },
  {
   "type": "fill",
   "q": "Daha önce tanımlanmış `x` değişkenini silen komutu yazın.",
   "code": "x = 2\n____ x\nprint(\"x\" in dir())",
   "ans": [
    "del"
   ],
   "cs": true,
   "exp": "`del` değişken tanımını siler; sonra `x` kullanılırsa NameError alınır.",
   "topic": "degerler"
  },
  {
   "type": "code",
   "title": "Değişken takası",
   "q": "Çoklu atama ile `a` ve `b`'nin değerlerini tek satırda yer değiştirin, sonra türlerini de yazdırın.",
   "code": "a = 10\nb = \"ABC\"\na, b = {{1}}, {{2}}\nprint(a, b)\nprint({{3}}(a))",
   "blanks": [
    {
     "ans": [
      "b"
     ],
     "cs": true
    },
    {
     "ans": [
      "a"
     ],
     "cs": true
    },
    {
     "ans": [
      "type"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Sağ taraf önce hesaplanır: önce b'nin değeri gelir.",
    "Sonra a'nın eski değeri.",
    "Türü öğrenmek için `type()` kullanılır."
   ],
   "expect": "ABC 10\n<class 'str'>",
   "topic": "degerler"
  },
  {
   "type": "open",
   "q": "Kullanıcıdan adını alıp `Merhaba <ad>` yazan programı yazınız. (Örnek: Filiz girilirse `Merhaba Filiz`)",
   "model": "- `input()` her zaman metin (str) döndürür.\n- Metinler `+` ile birleştirilir ya da `print`e virgülle verilir.",
   "modelCode": "ad = input(\"Adınız: \")\nprint(\"Merhaba \" + ad)",
   "topic": "degerler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "93.348",
    "93.35",
    "93.34",
    "93.3",
    "93"
   ],
   "a": 1,
   "exp": "`round(x, 2)` virgülden sonra 2 basamak bırakarak yuvarlar: 93.348… → 93.35.",
   "code": "print(round(93.34836, 2))",
   "topic": "degerler"
  },
  {
   "type": "mc",
   "q": "`round(65535, -2)` ne verir?",
   "opts": [
    "655.35",
    "66000",
    "65535",
    "65600",
    "65500"
   ],
   "a": 4,
   "exp": "Negatif ikinci argüman sola doğru yuvarlar: -2 → yüzler basamağına yuvarlanır. 65535 → 65500.",
   "code": "print(round(65535, -2))",
   "topic": "degerler"
  },
  {
   "type": "mc",
   "q": "`type(round(93.34836))` ve `type(round(93.34836, 1))` sırasıyla nedir?",
   "opts": [
    "<class 'int'> <class 'float'>",
    "<class 'int'> <class 'int'>",
    "<class 'float'> <class 'float'>",
    "<class 'float'> <class 'int'>",
    "<class 'str'> <class 'float'>"
   ],
   "a": 0,
   "exp": "Tek argümanlı `round` tam sayı (int), iki argümanlı `round` ondalıklı sayı (float) döndürür. `round(x, 0)` bile float verir (93.0).",
   "code": "print(type(round(93.34836)), type(round(93.34836, 1)))",
   "topic": "degerler"
  },
  {
   "type": "mc",
   "q": "Python'da 6.022 × 10²³ sayısı nasıl yazılır?",
   "opts": [
    "6.022e23",
    "6,022e23",
    "6.022*10^23",
    "6.022x10^23",
    "6.022E^23"
   ],
   "a": 0,
   "exp": "Bilimsel gösterimde `e` (ya da `E`) kullanılır: soldaki sayı × 10 üzeri sağdaki sayı. `^` Python'da üs değildir.",
   "code": "print(6.022e23 == 6.022 * 10**23)",
   "topic": "degerler"
  },
  {
   "type": "mc",
   "q": "Aşağıdakilerden hangisi `class` adının değişken olarak kullanılamamasının nedenidir?",
   "opts": [
    "Ayrılmış (reserved) kelime olduğu için",
    "Sayı içermediği için",
    "Türkçe karakter içerdiği için",
    "Büyük harf içermediği için",
    "Çok kısa olduğu için"
   ],
   "a": 0,
   "exp": "`class`, `def`, `if`, `for`, `True`, `False` gibi kelimeler Python'a ayrılmıştır; belirteç olarak kullanılamaz.",
   "code": "class = 5",
   "topic": "degerler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "<class 'int'>",
    "47",
    "<class 'float'>",
    "<class 'str'>",
    "11"
   ],
   "a": 0,
   "exp": "İki tarafı da int'e çevrildiği için toplam da int olur.",
   "code": "print(type(int(\"3\") + int(4)))",
   "topic": "degerler"
  },
  {
   "type": "mc",
   "q": "Boşluğa hangisi gelirse çıktı `47` olur?",
   "opts": [
    "int(\"4\") + 7",
    "\"4\" + \"7\"",
    "\"4\" * 7",
    "4 + 7",
    "4 + \"7\""
   ],
   "a": 1,
   "exp": "İki metin `+` ile yan yana birleştirilir: \"47\".",
   "code": "print(____)",
   "why": {
    "3": "4 + 7 sayı toplamıdır: 11.",
    "4": "int + str → TypeError.",
    "0": "4 + 7 = 11."
   },
   "topic": "degerler"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: `a`'nın türünü yazdırsın.",
   "code": "a = \"ABC\"\nprint(____(a))",
   "ans": [
    "type"
   ],
   "cs": true,
   "exp": "`type()` bir değerin türünü (sınıfını) verir.",
   "topic": "degerler"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: metin hâlindeki \"45\"i tam sayıya çevirip 5 ekleyin.",
   "code": "s = \"45\"\nprint(____(s) + 5)",
   "ans": [
    "int"
   ],
   "cs": true,
   "exp": "`int()` sayı görünümlü metni tam sayıya çevirir.",
   "whyFill": {
    "str": "str metne çevirir; \"45\" + 5 TypeError verir."
   },
   "topic": "degerler"
  },
  {
   "type": "code",
   "title": "Ondalıklı sayılar",
   "q": "Değişkeni yuvarlayıp hem tam sayı hem 1 basamaklı sonuç yazdırın.",
   "code": "x = 28793.54836\nprint({{1}}(x))\nprint(round(x, {{2}}))\nprint({{3}}(x))",
   "blanks": [
    {
     "ans": [
      "round"
     ],
     "cs": true
    },
    {
     "ans": [
      "1"
     ],
     "cs": true
    },
    {
     "ans": [
      "int"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Tek argümanlı `round` en yakın tam sayıya yuvarlar: 28794.",
    "Virgülden sonra 1 basamak: 28793.5.",
    "`int` keser: 28793."
   ],
   "expect": "28794\n28793.5\n28793",
   "topic": "degerler"
  },
  {
   "type": "open",
   "q": "Kullanıcıdan iki tam sayı alıp toplamını `Toplam: <sonuç>` biçiminde yazan programı yazınız.",
   "model": "- `input()` metin döndürür; toplamak için `int()` ile çevrilmelidir.\n- Çevrilmezse \"3\" + \"4\" = \"34\" olur.",
   "modelCode": "a = int(input())\nb = int(input())\nprint(\"Toplam:\", a + b)",
   "topic": "degerler"
  },
  {
   "type": "open",
   "q": "`yas = 20` değişkenini kullanarak ekrana `Yaşım 20` yazdırın. **İki farklı yolla** yazınız.",
   "model": "- Yol 1: `print(\"Yaşım\", yas)` → virgül araya boşluk koyar.\n- Yol 2: `print(\"Yaşım \" + str(yas))` → `+` ile birleştirirken sayı `str()` ile metne çevrilmeli.",
   "modelCode": "yas = 20\nprint(\"Yaşım\", yas)\nprint(\"Yaşım \" + str(yas))",
   "topic": "degerler"
  }
 ],
 "ifadeler": [
  {
   "type": "mc",
   "q": "`print(25 // 4, 25 % 4)` çıktısı nedir?",
   "opts": [
    "6 0",
    "1 6",
    "6.25 1",
    "6 1",
    "6.25 0"
   ],
   "a": 3,
   "exp": "`//` tam sayı bölmesi (bölüm): 6. `%` kalan: 25 = 4·6 + 1 → 1.",
   "code": "print(25 // 4, 25 % 4)",
   "topic": "ifadeler"
  },
  {
   "type": "mc",
   "q": "`print(4 // 25, 4 % 25)` çıktısı nedir?",
   "opts": [
    "0 0",
    "4 0",
    "0.16 4",
    "6 1",
    "0 4"
   ],
   "a": 4,
   "exp": "Küçük sayı büyüğe tam bölünemez: bölüm 0, kalan sayının kendisi (4).",
   "code": "print(4 // 25, 4 % 25)",
   "topic": "ifadeler"
  },
  {
   "type": "mc",
   "q": "`print(25 / 4)` çıktısı nedir?",
   "opts": [
    "6.0",
    "6,25",
    "6",
    "1",
    "6.25"
   ],
   "a": 4,
   "exp": "`/` her zaman ondalıklı (float) sonuç verir.",
   "code": "print(25 / 4)",
   "topic": "ifadeler"
  },
  {
   "type": "mc",
   "q": "`print(10 / 2)` çıktısı nedir?",
   "opts": [
    "5.0",
    "2",
    "5",
    "TypeError",
    "5.00"
   ],
   "a": 0,
   "exp": "`/` iki tam sayıya uygulansa bile sonuç **float**tur: 5.0. Tam sayı istersen `//` kullan.",
   "code": "print(10 / 2)",
   "why": {
    "2": "5 için `10 // 2` yazılmalı."
   },
   "topic": "ifadeler"
  },
  {
   "type": "mc",
   "q": "`print(2 ** 3 ** 2)` çıktısı nedir?",
   "opts": [
    "36",
    "12",
    "512",
    "64",
    "18"
   ],
   "a": 2,
   "exp": "`**` **sağdan** birleşir: önce 3 ** 2 = 9, sonra 2 ** 9 = 512.",
   "code": "print(2 ** 3 ** 2)",
   "why": {
    "3": "(2 ** 3) ** 2 = 64 olurdu; ama ** sağdan sola işlenir."
   },
   "topic": "ifadeler"
  },
  {
   "type": "mc",
   "q": "`print(2 + 3 * 4)` çıktısı nedir?",
   "opts": [
    "24",
    "20",
    "234",
    "14",
    "9"
   ],
   "a": 3,
   "exp": "Çarpımsal operatörler (`*`, `/`, `//`, `%`) toplamsaldan önce gelir: 3 * 4 = 12, 2 + 12 = 14.",
   "code": "print(2 + 3 * 4)",
   "topic": "ifadeler"
  },
  {
   "type": "mc",
   "q": "`print(-2 ** 2)` çıktısı nedir?",
   "opts": [
    "Hata",
    "-4",
    "-2",
    "4",
    "2"
   ],
   "a": 1,
   "exp": "Öncelik tablosunda `**`, tekli eksiden (-) önce gelir: -(2 ** 2) = -4.",
   "code": "print(-2 ** 2)",
   "topic": "ifadeler"
  },
  {
   "type": "mc",
   "q": "Kullanıcı 10000 saniye girdi. Boşluğa ne gelmeli ki dakika doğru hesaplansın?",
   "opts": [
    "saniye // 60",
    "saniye / 60",
    "saniye * 60",
    "saniye // 3600",
    "saniye % 60"
   ],
   "a": 0,
   "exp": "Önce saat çıkarıldı, kalan saniyeden dakika `// 60` ile tam olarak bulunur: 10000 sn = 2 sa 46 dk 40 sn.",
   "code": "saniye = 10000\nsaat = saniye // 3600\nsaniye = saniye % 3600\ndakika = ____\nsaniye = saniye % 60\nprint(saat, dakika, saniye)",
   "why": {
    "1": "`/` ondalık verir: 46.666…"
   },
   "topic": "ifadeler"
  },
  {
   "type": "mc",
   "q": "`print(3 * \"ab\")` çıktısı nedir?",
   "opts": [
    "ababab",
    "ab ab ab",
    "TypeError",
    "ab3",
    "3ab"
   ],
   "a": 0,
   "exp": "Metin × sayı → metin o kadar tekrar edilir.",
   "code": "print(3 * \"ab\")",
   "topic": "ifadeler"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: `x = x * (y + z)` ifadesinin kısa yazımı.",
   "code": "x, y, z = 2, 3, 4\nx ____ y + z\nprint(x)",
   "ans": [
    "*="
   ],
   "cs": true,
   "exp": "`x *= y + z` ifadesi `x = x * (y + z)` ile aynıdır; sağ taraf önce hesaplanır.",
   "topic": "ifadeler"
  },
  {
   "type": "fill",
   "q": "Python'da tek satırlık yorum hangi karakterle başlar?",
   "code": "____ Bu satır yorumdur, çalışmaz\nprint(\"tamam\")",
   "ans": [
    "#"
   ],
   "cs": true,
   "exp": "`#` ile başlayan kısım satır sonuna kadar yorumdur; yorumlayıcı onu yok sayar.",
   "topic": "ifadeler"
  },
  {
   "type": "code",
   "title": "Saniyeyi parçalara ayırma",
   "q": "Girilen saniyeyi saat, dakika, saniyeye ayıran programı tamamlayın.",
   "code": "saniye = int(input())\nsaat = saniye {{1}} 3600\nsaniye = saniye {{2}} 3600\ndakika = saniye // 60\nsaniye = saniye % {{3}}\nprint(saat, \"sa\", dakika, \"dk\", saniye, \"sn\")",
   "blanks": [
    {
     "ans": [
      "//"
     ],
     "cs": true
    },
    {
     "ans": [
      "%"
     ],
     "cs": true
    },
    {
     "ans": [
      "60"
     ],
     "cs": true
    }
   ],
   "exps": [
    "1 saat = 3600 saniye; tam saat sayısı `//` ile.",
    "Kalan saniye `%` ile.",
    "Dakikadan arta kalan saniye: `% 60`."
   ],
   "expect": "2 sa 46 dk 40 sn",
   "topic": "ifadeler"
  },
  {
   "type": "open",
   "q": "Kullanıcıdan iki tam sayı alıp `deger1 + deger2 = toplam` biçiminde yazan programı yazınız. (3 ve 4 girilirse: `3 + 4 = 7`)",
   "model": "- Kitaptaki ilk örnek: `int(input(...))` ile iki sayı alınır.\n- `print(deger1, \"+\", deger2, \"=\", toplam)` virgüllerle aralara boşluk koyar.",
   "modelCode": "deger1 = int(input(\"Bir sayı giriniz: \"))\ndeger2 = int(input(\"Lütfen diğer sayıyı giriniz: \"))\ntoplam = deger1 + deger2\nprint(deger1, \"+\", deger2, \"=\", toplam)",
   "topic": "ifadeler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kod hangi tür hataya neden olur?",
   "opts": [
    "Hata vermez",
    "Mantık hatası",
    "ZeroDivisionError",
    "Çalışma zamanı hatası (NameError)",
    "Söz dizimi hatası (SyntaxError)"
   ],
   "a": 4,
   "exp": "Sol tarafta işlem olan atama (`y + 2 = x`) geçersizdir. Söz dizimi hataları program çalışmadan önce yakalanır.",
   "code": "y = 5\nx = y + 2\ny + 2 = x",
   "topic": "ifadeler"
  },
  {
   "type": "mc",
   "q": "`print(32 / 0)` çalıştırılırsa hangi hata alınır?",
   "opts": [
    "ZeroDivisionError",
    "SyntaxError",
    "NameError",
    "Hata vermez, 0 yazar",
    "ValueError"
   ],
   "a": 0,
   "exp": "Sıfıra bölme bir **çalışma zamanı** hatasıdır: `ZeroDivisionError: division by zero`.",
   "code": "print(32 / 0)",
   "topic": "ifadeler"
  },
  {
   "type": "mc",
   "q": "Program çalışıyor, hata vermiyor ama **yanlış sonuç** üretiyor. Bu hangi hata türüdür?",
   "opts": [
    "İsim hatası (NameError)",
    "Tür hatası (TypeError)",
    "Çalışma zamanı hatası",
    "Mantık hatası",
    "Söz dizimi hatası"
   ],
   "a": 3,
   "exp": "Mantık hatasında yorumlayıcı uyarı vermez (ör. bölünen/bölen yer değiştirmiş). Bulması en zor hata türüdür.",
   "topic": "ifadeler"
  },
  {
   "type": "mc",
   "q": "Aşağıdakilerden hangisi **söz dizimi hatası** örneği değildir?",
   "opts": [
    "Eşleşmeyen tırnak: `(\"hello')`",
    "Hatalı girinti",
    "`y + 2 = x` ataması",
    "Tanımlanmamış değişkeni kullanmak",
    "Eşleşmeyen parantez: `(3 + 4))`"
   ],
   "a": 3,
   "exp": "Tanımlanmamış değişken (`NameError`) çalışma zamanında ortaya çıkar; kod söz dizimi olarak doğrudur.",
   "topic": "ifadeler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "14.0",
    "4 10.2",
    "14.2",
    "14",
    "TypeError"
   ],
   "a": 2,
   "exp": "int ile float karışık işlemde sonuç float olur.",
   "code": "x = 4\ny = 10.2\nprint(x + y)",
   "topic": "ifadeler"
  },
  {
   "type": "mc",
   "q": "Cebirdeki `3x + 2y - 5` Python'da nasıl yazılır?",
   "opts": [
    "3x + 2y - 5",
    "3*x + 2*y - 5",
    "3(x) + 2(y) - 5",
    "3.x + 2.y - 5",
    "3 x + 2 y - 5"
   ],
   "a": 1,
   "exp": "Python'da örtülü çarpma yoktur; `3x` yerine `3*x` yazılır. Boşluklar önceliği etkilemez.",
   "code": "x, y = 2, 3\nprint(____)",
   "why": {
    "0": "`3x` geçersizdir (SyntaxError).",
    "2": "`3(x)` sayıyı fonksiyon gibi çağırmaya çalışır: TypeError."
   },
   "topic": "ifadeler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "x--> 20  y--> 5",
    "x--> 20  y--> 20",
    "x--> 5  y--> 20",
    "Hata",
    "x--> 15  y--> 15"
   ],
   "a": 1,
   "exp": "`x += 15` ile `x = x + 15` aynıdır; iki değişken de 20 olur.",
   "code": "y = 5\ny = y + 15\nx = 5\nx += 15\nprint(\"x-->\", x, \" y-->\", y)",
   "topic": "ifadeler"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: 17'nin 5'e bölümünden kalanı yazdırsın.",
   "code": "print(17 ____ 5)",
   "ans": [
    "%"
   ],
   "cs": true,
   "exp": "Kalan (mod) operatörü `%`: 17 = 5·3 + 2.",
   "whyFill": {
    "//": "`//` bölümü verir (3), kalanı değil."
   },
   "topic": "ifadeler"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: 2'nin 10. kuvvetini yazdırsın.",
   "code": "print(2 ____ 10)",
   "ans": [
    "**"
   ],
   "cs": true,
   "exp": "Üs alma operatörü `**`. `^` Python'da üs değildir.",
   "whyFill": {
    "^": "`^` Python'da bit düzeyinde XOR'dur: 2 ^ 10 = 8."
   },
   "topic": "ifadeler"
  },
  {
   "type": "code",
   "title": "Dijital saat",
   "q": "125 dakikayı `2:05` biçiminde yazdıran kodu tamamlayın (dakika tek haneliyse başına 0 gelsin).",
   "code": "toplam = 125\nsaat = toplam // 60\ndakika = toplam {{1}} 60\nonlar = dakika {{2}} 10\nbirler = dakika % 10\nprint(saat, \":\", onlar, birler, {{3}}=\"\")",
   "blanks": [
    {
     "ans": [
      "%"
     ],
     "cs": true
    },
    {
     "ans": [
      "//"
     ],
     "cs": true
    },
    {
     "ans": [
      "sep"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Dakika = kalan: 125 % 60 = 5.",
    "Onlar basamağı: 5 // 10 = 0.",
    "`sep=\"\"` değerler arasına boşluk koymaz."
   ],
   "expect": "2:05",
   "topic": "ifadeler"
  },
  {
   "type": "open",
   "q": "Kullanıcıdan bir dairenin yarıçapını (ondalıklı) alıp alanını `pi * r * r` ile hesaplayıp **2 basamağa yuvarlayarak** yazan programı yazınız. (pi = 3.14159, r = 2 → 12.57)",
   "model": "- Ondalıklı giriş için `float(input())`.\n- Yuvarlama `round(sayi, 2)`.",
   "modelCode": "r = float(input())\nalan = 3.14159 * r * r\nprint(round(alan, 2))",
   "topic": "ifadeler"
  },
  {
   "type": "open",
   "q": "Kullanıcıdan alınan **dakika** değerini saat ve dakikaya çeviren programı yazınız. (135 → `2 saat 15 dakika`)",
   "model": "- Saat: `dakika // 60`\n- Kalan dakika: `dakika % 60`",
   "modelCode": "dakika = int(input())\nprint(dakika // 60, \"saat\", dakika % 60, \"dakika\")",
   "topic": "ifadeler"
  }
 ],
 "kosullar": [
  {
   "type": "mc",
   "q": "`x, y, z = 3, 5, 7` iken `x >= 0 and x < 2` ifadesinin değeri nedir?",
   "opts": [
    "True",
    "0",
    "False",
    "Hata",
    "3"
   ],
   "a": 2,
   "exp": "`x >= 0` True ama `x < 2` False. `and` için ikisi de True olmalı → False.",
   "code": "x, y, z = 3, 5, 7\nprint(x >= 0 and x < 2)",
   "topic": "kosullar"
  },
  {
   "type": "mc",
   "q": "`x, y, z = 3, 5, 7` iken `x != y - 2` ifadesinin değeri nedir?",
   "opts": [
    "Hata",
    "False",
    "True",
    "3",
    "1"
   ],
   "a": 1,
   "exp": "Aritmetik önce yapılır: y - 2 = 3. `3 != 3` → False.",
   "code": "x, y, z = 3, 5, 7\nprint(x != y - 2)",
   "topic": "kosullar"
  },
  {
   "type": "mc",
   "q": "`x, y, z = 3, 5, 7` iken `x < 0 or x > 10` ifadesinin değeri nedir?",
   "opts": [
    "0",
    "False",
    "Hata",
    "True",
    "10"
   ],
   "a": 1,
   "exp": "`or` için en az biri True olmalı; 3 < 0 da 3 > 10 da yanlış → False.",
   "code": "x, y, z = 3, 5, 7\nprint(x < 0 or x > 10)",
   "topic": "kosullar"
  },
  {
   "type": "mc",
   "q": "Python'da `True` ve `False` hangi tam sayılara denk gelir?",
   "opts": [
    "Tam sayı karşılıkları yoktur",
    "True = 1, False = -1",
    "True = 0, False = 1",
    "True = 1, False = 0",
    "True = -1, False = 0"
   ],
   "a": 3,
   "exp": "Boolean değerler 1 (True) ve 0 (False) üzerine kuruludur.",
   "code": "print(True + True, False * 5)",
   "topic": "kosullar"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "Hata",
    "0.01",
    "Farklı",
    "Aynı",
    "True"
   ],
   "a": 2,
   "exp": "Ondalıklı sayılar ikilik tabanda tam saklanamaz: d1 = 0.010000000000000009, d2 = 0.009999999999999787. `==` bu yüzden False verir.",
   "code": "d1 = 1.11 - 1.10\nd2 = 2.11 - 2.10\nif d1 == d2:\n    print(\"Aynı\")\nelse:\n    print(\"Farklı\")",
   "why": {
    "3": "Matematikte ikisi de 0.01 ama bilgisayarda küçük yuvarlama farkı vardır."
   },
   "topic": "kosullar"
  },
  {
   "type": "mc",
   "q": "`value = 1` iken aşağıdaki kod kaç satır yazar?",
   "opts": [
    "0",
    "3",
    "1 (bir)",
    "5",
    "2 (bir, Tamamlandı)"
   ],
   "a": 4,
   "exp": "`elif` zincirinde ilk doğru dal çalışır, kalan kontroller **atlanır**. Sonra \"Tamamlandı\" yazılır.",
   "code": "value = 1\nif value == 0:\n    print(\"sıfır\")\nelif value == 1:\n    print(\"bir\")\nelif value >= 1:\n    print(\"bir ya da büyük\")\nelse:\n    print(\"çok büyük\")\nprint(\"Tamamlandı\")",
   "why": {
    "1": "`value >= 1` de doğru ama elif zincirinde ilk doğru daldan sonra diğerlerine bakılmaz."
   },
   "topic": "kosullar"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kod (elif değil ayrı if'ler) `value = 1` iken ne yazar?",
   "opts": [
    "bir\nbir ya da büyük",
    "sıfır",
    "bir",
    "bir ya da büyük",
    "Hiçbir şey"
   ],
   "a": 0,
   "exp": "Ayrı `if`lerde (zincirleme) **her koşul** tek tek kontrol edilir; doğru olan her biri çalışır.",
   "code": "value = 1\nif value == 0:\n    print(\"sıfır\")\nif value == 1:\n    print(\"bir\")\nif value >= 1:\n    print(\"bir ya da büyük\")",
   "topic": "kosullar"
  },
  {
   "type": "mc",
   "q": "Boşluğa hangisi gelirse `n` sayısının mutlak değeri yazılır?",
   "opts": [
    "-n if n > 0 else n",
    "-n if n < 0 else n",
    "n if n < 0 else -n",
    "n < 0 ? -n : n",
    "if n < 0: -n"
   ],
   "a": 1,
   "exp": "Koşullu ifade: `A if koşul else B`. Koşul doğruysa A, değilse B.",
   "code": "n = -34\nprint(____)",
   "why": {
    "3": "`?:` C/Java/PHP yazımıdır; Python'da yoktur."
   },
   "topic": "kosullar"
  },
  {
   "type": "mc",
   "q": "`print(\"T\", \"C\", sep=\".\")` çıktısı nedir?",
   "opts": [
    "T.C",
    "TC",
    ".T.C",
    "T C",
    "T.C."
   ],
   "a": 0,
   "exp": "`sep` değerlerin **arasına** konacak karakteri belirler.",
   "code": "print(\"T\", \"C\", sep=\".\")",
   "topic": "kosullar"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: hiçbir şey yapmadan devam eden ifade.",
   "code": "x = 5\nif x == 2:\n    print(x)\nelse:\n    ____\nprint(\"bitti\")",
   "ans": [
    "pass"
   ],
   "cs": true,
   "exp": "`pass` \"hiçbir şey yapma, devam et\" demektir; boş blok bırakılamadığı için kullanılır.",
   "topic": "kosullar"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: \"eşit değil\" operatörü.",
   "code": "bolen = 8\nif bolen ____ 0:\n    print(32 / bolen)",
   "ans": [
    "!="
   ],
   "cs": true,
   "exp": "`!=` eşit değilse True verir. Sıfıra bölmeyi önlemek için kullanılır.",
   "whyFill": {
    "<>": "`<>` Python 3'te yoktur."
   },
   "topic": "kosullar"
  },
  {
   "type": "code",
   "title": "Not harfi",
   "q": "Puana göre harf notu veren kodu tamamlayın (85 → B).",
   "code": "puan = 85\nif puan >= 90:\n    print(\"A\")\n{{1}} puan >= 80:\n    print(\"B\")\nelif puan >= 70:\n    print(\"C\")\n{{2}}:\n    print(\"F\")",
   "blanks": [
    {
     "ans": [
      "elif"
     ],
     "cs": true
    },
    {
     "ans": [
      "else"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Ek koşul için `elif` (else if).",
    "Hiçbiri tutmazsa `else` (koşul yazılmaz)."
   ],
   "expect": "B",
   "topic": "kosullar"
  },
  {
   "type": "open",
   "q": "Kullanıcıdan bir tam sayı alıp **çift** ise `Çift`, **tek** ise `Tek` yazan programı yazınız.",
   "model": "- Çift sayının 2'ye bölümünden kalan 0'dır: `sayi % 2 == 0`.",
   "modelCode": "sayi = int(input())\nif sayi % 2 == 0:\n    print(\"Çift\")\nelse:\n    print(\"Tek\")",
   "topic": "kosullar"
  },
  {
   "type": "mc",
   "q": "`not (10 == 4) and 9 > 5` ifadesinin değeri nedir?",
   "opts": [
    "1",
    "Hata",
    "True",
    "9",
    "False"
   ],
   "a": 2,
   "exp": "10 == 4 False → not False = True. 9 > 5 True. True and True = True.",
   "code": "print(not (10 == 4) and 9 > 5)",
   "topic": "kosullar"
  },
  {
   "type": "mc",
   "q": "`True` yerine `true` yazılırsa ne olur?",
   "opts": [
    "False olarak çalışır",
    "NameError",
    "SyntaxError",
    "1 olarak çalışır",
    "True olarak çalışır"
   ],
   "a": 1,
   "exp": "Python büyük-küçük harf duyarlıdır; Boolean değerler büyük harfle başlar: `True`, `False`.",
   "code": "x = true",
   "topic": "kosullar"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki ifadelerden hangisi `not (a == b and c != d)` ile **aynı sonucu vermez**?",
   "opts": [
    "a != b and c == d",
    "a != b or c == d",
    "not (a == b) or c == d",
    "not (a == b and not (c == d))",
    "not (a == b) or not (c != d)"
   ],
   "a": 0,
   "exp": "De Morgan: not (A and B) = (not A) or (not B). Yani `a != b or c == d`. `and` ile yazılan şık farklıdır.",
   "topic": "kosullar"
  },
  {
   "type": "mc",
   "q": "Kullanıcı 5 girerse çıktı nedir?",
   "opts": [
    "Hiçbir şey",
    "aralıkta",
    "Hata",
    "aralıkta\ntamamlandı",
    "tamamlandı"
   ],
   "a": 3,
   "exp": "İç içe if: iki koşul da sağlandığı için \"aralıkta\" yazılır. \"tamamlandı\" if'lerin dışında olduğu için her durumda yazılır.",
   "code": "deger = int(input())\nif deger >= 0:\n    if deger <= 10:\n        print(\"aralıkta\")\nprint(\"tamamlandı\")",
   "topic": "kosullar"
  },
  {
   "type": "mc",
   "q": "Kullanıcı 8 girerse çıktı nedir?",
   "opts": [
    "Hata verir",
    "Hiçbir şey yazmaz",
    "Girdiğiniz sayı sekiz",
    "Girdiğiniz sayı aralıkta değil",
    "Girdiğiniz sayı"
   ],
   "a": 3,
   "exp": "Varsayılan cevap baştan atanmış; hiçbir koşul tutmazsa o değer kalır.",
   "code": "deger = int(input())\ncevap = \"aralıkta değil\"\nif deger == 0:\n    cevap = \"sıfır\"\nelif deger == 1:\n    cevap = \"bir\"\nprint(\"Girdiğiniz sayı\", cevap)",
   "topic": "kosullar"
  },
  {
   "type": "mc",
   "q": "Boşluğa hangisi gelirse sadece 0 ile 10 arasındaki (dahil) sayılarda \"aralıkta\" yazılır?",
   "opts": [
    "not deger >= 0",
    "deger >= 0 and deger <= 10",
    "deger > 0 and deger < 10",
    "deger >= 10 and deger <= 0",
    "deger >= 0 or deger <= 10"
   ],
   "a": 1,
   "exp": "İki koşulun **birlikte** sağlanması için `and`. `or` olsaydı her sayı en az bir koşulu sağlardı.",
   "code": "for deger in [-1, 0, 10, 11]:\n    if ____:\n        print(deger, \"aralıkta\")",
   "why": {
    "4": "`or` ile -1 ve 11 de \"aralıkta\" olur.",
    "2": "0 ve 10 dahil değil olur."
   },
   "topic": "kosullar"
  },
  {
   "type": "mc",
   "q": "`if` bloğunun içindeki satırları if'e bağlayan nedir?",
   "opts": [
    "end if",
    "begin/end",
    "Noktalı virgül",
    "Süslü parantez { }",
    "Girinti (boşluk)"
   ],
   "a": 4,
   "exp": "Python'da bloklar girinti ile belirlenir; `if koşul:` satırı iki nokta ile biter.",
   "topic": "kosullar"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: büyük ya da eşit operatörü.",
   "code": "boy = 160\nif boy ____ 150:\n    print(\"Ağacın boyu uzun\")\nelse:\n    print(\"Ağacın boyu kısa\")",
   "ans": [
    ">=",
    ">"
   ],
   "cs": true,
   "exp": "`>=` büyük ya da eşit; `>` büyük.",
   "topic": "kosullar"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: x 2 değilse \"değil\" yazsın (mantıksal tersleme).",
   "code": "x = 5\nif ____ x == 2:\n    print(\"değil\")",
   "ans": [
    "not"
   ],
   "cs": true,
   "exp": "`not` Boolean değeri tersine çevirir.",
   "topic": "kosullar"
  },
  {
   "type": "code",
   "title": "Sayının işareti",
   "q": "Sayının pozitif, negatif ya da sıfır olduğunu yazan kodu tamamlayın.",
   "code": "sayi = int(input())\nif sayi {{1}} 0:\n    print(\"pozitif\")\nelif sayi {{2}} 0:\n    print(\"sıfır\")\n{{3}}\n    print(\"negatif\")",
   "blanks": [
    {
     "ans": [
      ">"
     ],
     "cs": true
    },
    {
     "ans": [
      "=="
     ],
     "cs": true
    },
    {
     "ans": [
      "else:"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Pozitif: `> 0`.",
    "Eşitlik karşılaştırması `==` (tek `=` atamadır).",
    "Diğer tüm durumlar: `else:`"
   ],
   "expect": "negatif",
   "topic": "kosullar"
  },
  {
   "type": "open",
   "q": "Kullanıcıdan iki sayı alıp **büyük olanı** yazan programı yazınız. (Eşitse herhangi biri yazılabilir.)",
   "model": "- `if a > b: print(a) else: print(b)`\n- Kısa yol: `print(a if a > b else b)`",
   "modelCode": "a = int(input())\nb = int(input())\nif a > b:\n    print(a)\nelse:\n    print(b)",
   "topic": "kosullar"
  },
  {
   "type": "open",
   "q": "Kullanıcıdan 0–3 arası bir sayı alıp yazıyla (`sıfır`, `bir`, `iki`, `üç`) yazan; aralık dışındaysa `çok büyük` yazan programı **if/elif/else** ile yazınız.",
   "model": "- `elif` zinciri ilk doğru dalı çalıştırır, gerisini atlar.\n- Son `else` kalan tüm durumları kapsar.",
   "modelCode": "value = int(input())\nif value == 0:\n    print(\"sıfır\")\nelif value == 1:\n    print(\"bir\")\nelif value == 2:\n    print(\"iki\")\nelif value == 3:\n    print(\"üç\")\nelse:\n    print(\"çok büyük\")",
   "topic": "kosullar"
  }
 ],
 "donguler": [
  {
   "type": "mc",
   "q": "`list(range(1, 10, 2))` hangi değerleri üretir?",
   "opts": [
    "[2, 4, 6, 8]",
    "[1, 3, 5, 7, 9, 11]",
    "[1, 2, 3, 4, 5, 6, 7, 8, 9]",
    "[1, 10, 2]",
    "[1, 3, 5, 7, 9]"
   ],
   "a": 4,
   "exp": "range(başlangıç, bitiş, artış): 1'den başla, 2'şer art, **10 dahil değil**.",
   "code": "print(list(range(1, 10, 2)))",
   "topic": "donguler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "21 18 15 12 9 6 3 0",
    "21 20 19 18",
    "0 3 6 9 12 15 18 21",
    "21 18 15 12 9 6 3",
    "3 6 9 12 15 18 21"
   ],
   "a": 3,
   "exp": "Negatif artış geriye sayar; bitiş (0) dahil değildir.",
   "code": "for n in range(21, 0, -3):\n    print(n, end=\" \")",
   "topic": "donguler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "4950",
    "4851",
    "100",
    "5050",
    "99"
   ],
   "a": 0,
   "exp": "range(1, 100) 1'den **99**'a kadardır (100 dahil değil): 99·100/2 = 4950.",
   "code": "top = 0\nfor i in range(1, 100):\n    top += i\nprint(top)",
   "why": {
    "3": "5050 için range(1, 101) gerekirdi."
   },
   "topic": "donguler"
  },
  {
   "type": "mc",
   "q": "`range(1, 1)` kaç değer üretir?",
   "opts": [
    "1",
    "Sonsuz",
    "0",
    "Hata verir",
    "2"
   ],
   "a": 2,
   "exp": "Başlangıç bitişe eşitse (ve artış pozitifse) hiç değer üretmez: boş aralık.",
   "code": "print(len(range(1, 1)))",
   "topic": "donguler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kod kaç kez \"Merhaba\" yazar?",
   "opts": [
    "0",
    "4",
    "6",
    "Sonsuz",
    "5"
   ],
   "a": 4,
   "exp": "sayac 1, 2, 3, 4, 5 için koşul doğru; 6 olunca döngü biter.",
   "code": "sayac = 1\nwhile sayac <= 5:\n    print(\"Merhaba\")\n    sayac += 1",
   "topic": "donguler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "1 2",
    "3",
    "1 2 3 4 5",
    "1 2 3",
    "1 2 4 5"
   ],
   "a": 0,
   "exp": "`break` döngüyü **tamamen** bitirir. i = 3 olunca çıkılır.",
   "code": "for i in range(1, 6):\n    if i == 3:\n        break\n    print(i, end=\" \")",
   "why": {
    "4": "Bu `continue` olsaydı olurdu: sadece 3 atlanırdı."
   },
   "topic": "donguler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "1 2 4 5",
    "3",
    "1 2 3",
    "1 2",
    "1 2 3 4 5"
   ],
   "a": 0,
   "exp": "`continue` o turun geri kalanını atlar ve döngünün başına döner; döngü devam eder.",
   "code": "for i in range(1, 6):\n    if i == 3:\n        continue\n    print(i, end=\" \")",
   "topic": "donguler"
  },
  {
   "type": "mc",
   "q": "Boşluğa hangisi gelirse 1'den 10'a kadar (10 dahil) sayılar yazılır?",
   "opts": [
    "range(10)",
    "range(1, 10)",
    "range(1, 11)",
    "range(0, 10)",
    "range(1, 10, 1)"
   ],
   "a": 2,
   "exp": "Bitiş değeri dahil olmadığı için 10'u dahil etmek için 11 yazılır.",
   "code": "for n in ____:\n    print(n, end=\" \")",
   "topic": "donguler"
  },
  {
   "type": "mc",
   "q": "İç içe döngüde \"*\" kaç kez yazılır?",
   "opts": [
    "3",
    "12",
    "7",
    "4",
    "16"
   ],
   "a": 1,
   "exp": "İçteki döngü, dıştaki döngünün **her turunda** baştan çalışır: 3 × 4 = 12.",
   "code": "for i in range(3):\n    for j in range(4):\n        print(\"*\", end=\"\")",
   "topic": "donguler"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: değerleri yan yana, aralarında boşlukla yazsın.",
   "code": "for i in range(1, 4):\n    print(i, ____=\" \")",
   "ans": [
    "end"
   ],
   "cs": true,
   "exp": "`end` yazdırılan değerin sonuna ne geleceğini belirler; varsayılan `\\n` (alt satır).",
   "topic": "donguler"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: döngüyü hemen bitiren komut.",
   "code": "toplam = 0\nfor x in [4, 6, -1, 8]:\n    if x < 0:\n        ____\n    toplam += x\nprint(toplam)",
   "ans": [
    "break"
   ],
   "cs": true,
   "exp": "Negatif sayı gelince döngüden çıkılır; 4 + 6 = 10.",
   "whyFill": {
    "continue": "continue sadece -1'i atlardı, 8 de eklenirdi: 18."
   },
   "topic": "donguler"
  },
  {
   "type": "code",
   "title": "Faktöriyel",
   "q": "Girilen sayının faktöriyelini while döngüsüyle hesaplayın (5 → 120).",
   "code": "faktoriyel = 1\nsayac = 1\nsayi = int(input())\nwhile sayac {{1}} sayi:\n    faktoriyel {{2}} sayac\n    sayac += {{3}}\nprint(faktoriyel)",
   "blanks": [
    {
     "ans": [
      "<="
     ],
     "cs": true
    },
    {
     "ans": [
      "*="
     ],
     "cs": true
    },
    {
     "ans": [
      "1"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Sayının kendisi de dahil: `<=`.",
    "Her turda çarp: `faktoriyel *= sayac`.",
    "Sayaç birer artar."
   ],
   "expect": "120",
   "topic": "donguler"
  },
  {
   "type": "open",
   "q": "1'den 100'e kadar (100 dahil) olan sayıların toplamını **for döngüsüyle** hesaplayıp yazan programı yazınız.",
   "model": "- Toplam değişkeni döngüden önce 0 yapılır.\n- `range(1, 101)` 100'ü de içerir.\n- Sonuç: 5050",
   "modelCode": "toplam = 0\nfor i in range(1, 101):\n    toplam += i\nprint(toplam)",
   "topic": "donguler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "0 1 2 20",
    "0 (0) 1 (1) 2 (2) 3 (20)",
    "Hata",
    "0 (0) 1 (1) 2 (2) 3 (3) 4 (4)",
    "0 (0) 1 (1) 2 (2) 3 (20) 4 (4)"
   ],
   "a": 4,
   "exp": "Döngü içinde `i`yi değiştirmek sadece o turu etkiler; for bir sonraki turda range'deki sıradaki değeri verir.",
   "code": "for i in range(5):\n    print(i, end=\" \")\n    if i == 3:\n        i = 20\n    print(\"({})\".format(i), end=\" \")",
   "topic": "donguler"
  },
  {
   "type": "mc",
   "q": "`\"{0:3}\".format(5)` ne üretir?",
   "opts": [
    "'5'",
    "'005'",
    "'5  '",
    "'  5'",
    "'3'"
   ],
   "a": 3,
   "exp": "Sayılar varsayılan olarak **sağa** yaslanır; 3 karakterlik alan: iki boşluk + 5.",
   "code": "print(repr(\"{0:3}\".format(5)))",
   "topic": "donguler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki while/else kodunun çıktısı nedir?",
   "opts": [
    "Hiçbir şey",
    "Ortalama = 0",
    "Hata",
    "Ortalama = 3.0",
    "Ortalama = 15"
   ],
   "a": 3,
   "exp": "Döngü `break` ile kesilmediği için normal bittiğinde `else` bloğu çalışır: (1+2+3+4+5)/5 = 3.0.",
   "code": "sayac = toplam = 0\nfor sayi in [1, 2, 3, 4, 5]:\n    if sayi < 0:\n        break\n    sayac += 1\n    toplam += sayi\nelse:\n    print(\"Ortalama =\", toplam / sayac)",
   "topic": "donguler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "bitti",
    "Negatif",
    "Negatif\nbitti",
    "Hiçbir şey",
    "Hata"
   ],
   "a": 1,
   "exp": "Döngü `break` ile terk edilirse döngünün `else` bloğu **çalışmaz**.",
   "code": "for sayi in [4, -1, 6]:\n    if sayi < 0:\n        print(\"Negatif\")\n        break\nelse:\n    print(\"bitti\")",
   "topic": "donguler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kod ne yazar?",
   "opts": [
    "Hata",
    "P",
    "P y t h o n",
    "Python",
    "6"
   ],
   "a": 2,
   "exp": "`for` bir metnin harflerini tek tek gezer.",
   "code": "for harf in \"Python\":\n    print(harf, end=\" \")",
   "topic": "donguler"
  },
  {
   "type": "mc",
   "q": "Kaç kez döneceği **önceden bilinmeyen**, kullanıcı girişine bağlı döngüye ne denir?",
   "opts": [
    "Sonsuz değer döngüsü",
    "Belirli döngü",
    "Belirsiz döngü",
    "İç içe döngü",
    "For döngüsü"
   ],
   "a": 2,
   "exp": "Kullanıcının 999 girmesini bekleyen while gibi döngüler belirsizdir. Tekrar sayısı tahmin edilebilenler belirlidir.",
   "topic": "donguler"
  },
  {
   "type": "mc",
   "q": "Boşluğa hangisi gelirse kod, girilen negatif sayılara kadar olan toplamı yazar?",
   "opts": [
    "loop:",
    "while x < 0:",
    "while False:",
    "while True:",
    "for True:"
   ],
   "a": 3,
   "exp": "`while True` sonsuz döngüdür; çıkış `break` ile yapılır.",
   "code": "toplam = 0\n____\n    giris = int(input())\n    if giris < 0:\n        break\n    toplam += giris\nprint(toplam)",
   "why": {
    "2": "while False hiç çalışmaz: 0 yazar."
   },
   "topic": "donguler"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: 10'dan 0'a kadar (0 dahil) geri saysın.",
   "code": "for i in range(10, -1, ____):\n    print(i, end=\" \")",
   "ans": [
    "-1"
   ],
   "cs": true,
   "exp": "Geri saymak için artış negatif olmalı; bitiş -1 olduğu için 0 da dahil olur.",
   "topic": "donguler"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: o turu atlayıp döngüye devam etsin (sadece tek sayılar yazılsın).",
   "code": "for i in range(1, 8):\n    if i % 2 == 0:\n        ____\n    print(i, end=\" \")",
   "ans": [
    "continue"
   ],
   "cs": true,
   "exp": "Çift sayılarda `continue` ile print atlanır.",
   "whyFill": {
    "break": "break 2 gelince döngüyü bitirirdi: sadece 1 yazardı.",
    "pass": "pass hiçbir şey yapmaz; çiftler de yazılırdı."
   },
   "topic": "donguler"
  },
  {
   "type": "code",
   "title": "Çarpım tablosu",
   "q": "1–3 arası çarpım tablosunu satır satır yazdırın.",
   "code": "for satir in range(1, {{1}}):\n    for sutun in range(1, 4):\n        print(satir {{2}} sutun, end=\" \")\n    {{3}}()",
   "blanks": [
    {
     "ans": [
      "4"
     ],
     "cs": true
    },
    {
     "ans": [
      "*"
     ],
     "cs": true
    },
    {
     "ans": [
      "print"
     ],
     "cs": true
    }
   ],
   "exps": [
    "3 dahil olsun diye bitiş 4.",
    "Çarpım: `satir * sutun`.",
    "Satır bitince alt satıra geç: boş `print()`."
   ],
   "expect": "1 2 3\n2 4 6\n3 6 9",
   "topic": "donguler"
  },
  {
   "type": "open",
   "q": "1'den 20'ye kadar olan **çift** sayıları yan yana yazan programı yazınız.",
   "model": "- `range(2, 21, 2)` doğrudan çiftleri verir.\n- Ya da `if i % 2 == 0` ile kontrol edilir.",
   "modelCode": "for i in range(2, 21, 2):\n    print(i, end=\" \")",
   "topic": "donguler"
  },
  {
   "type": "open",
   "q": "Kullanıcı **0** girene kadar sayı alıp, girilen sayıların toplamını yazan programı **while** ile yazınız.",
   "model": "- Kaç sayı girileceği bilinmiyor → belirsiz döngü (`while`).\n- 0 gelince `break` ile çık.",
   "modelCode": "toplam = 0\nwhile True:\n    sayi = int(input())\n    if sayi == 0:\n        break\n    toplam += sayi\nprint(toplam)",
   "topic": "donguler"
  }
 ],
 "hazir": [
  {
   "type": "mc",
   "q": "`sqrt` fonksiyonunu kullanmak için doğru satır hangisidir?",
   "opts": [
    "include math.sqrt",
    "using math.sqrt",
    "from math import sqrt",
    "from sqrt import math",
    "import sqrt from math"
   ],
   "a": 2,
   "exp": "Söz dizimi: `from modül_adı import fonksiyon_adı`. sqrt, standart kütüphanedeki `math` modülündedir.",
   "code": "____\nprint(sqrt(16))",
   "topic": "hazir"
  },
  {
   "type": "mc",
   "q": "`from math import sqrt` sonrası `print(sqrt(16))` ne yazar?",
   "opts": [
    "256",
    "4",
    "Hata",
    "16",
    "4.0"
   ],
   "a": 4,
   "exp": "sqrt her zaman **float** döndürür.",
   "code": "from math import sqrt\nprint(sqrt(16))",
   "topic": "hazir"
  },
  {
   "type": "mc",
   "q": "`import math` yazıldıktan sonra karekök nasıl çağrılır?",
   "opts": [
    "math:sqrt(x)",
    "math->sqrt(x)",
    "math.sqrt(x)",
    "sqrt.math(x)",
    "sqrt(x)"
   ],
   "a": 2,
   "exp": "Modülün tamamı import edilince fonksiyon `modül.fonksiyon` biçiminde çağrılır (birleşik yapı).",
   "code": "import math\nx = 25\nprint(____)",
   "why": {
    "4": "Sadece `import math` yapıldığında `sqrt` doğrudan tanınmaz: NameError."
   },
   "topic": "hazir"
  },
  {
   "type": "mc",
   "q": "`sqrt(\"16\")` çağrılırsa ne olur?",
   "opts": [
    "4.0",
    "16",
    "\"4\"",
    "TypeError",
    "ValueError"
   ],
   "a": 3,
   "exp": "sqrt sadece sayı kabul eder; metin gönderilirse TypeError alınır.",
   "code": "from math import sqrt\nsqrt(\"16\")",
   "topic": "hazir"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "Hata",
    "4",
    "4\nNone",
    "4\n4",
    "None\n4"
   ],
   "a": 2,
   "exp": "İçteki print 4 yazar ve **None** döndürür (değer döndürmeyen fonksiyon). Dıştaki print o None'u yazar.",
   "code": "print(print(4))",
   "topic": "hazir"
  },
  {
   "type": "mc",
   "q": "`math.pow(2, 8)` ne döndürür?",
   "opts": [
    "256",
    "10",
    "256.0",
    "64.0",
    "16"
   ],
   "a": 2,
   "exp": "pow(x, y) = x üzeri y. Parametre sırası önemlidir: pow(8, 2) = 64.0. math.pow float döndürür.",
   "code": "import math\nprint(math.pow(2, 8))",
   "why": {
    "3": "Bu pow(8, 2) olurdu.",
    "0": "math.pow sonucu float'tır: 256.0."
   },
   "topic": "hazir"
  },
  {
   "type": "mc",
   "q": "`math.fabs(-5)` ne döndürür?",
   "opts": [
    "-5",
    "-5.0",
    "25",
    "5.0",
    "5"
   ],
   "a": 3,
   "exp": "fabs mutlak değeri **float** olarak verir.",
   "code": "import math\nprint(math.fabs(-5))",
   "topic": "hazir"
  },
  {
   "type": "mc",
   "q": "`math.log(8, 2)` ne döndürür?",
   "opts": [
    "3.0",
    "4.0",
    "2.0",
    "0.333",
    "16.0"
   ],
   "a": 0,
   "exp": "log(x, y): x'in y tabanında logaritması. 2³ = 8 → 3.0.",
   "code": "import math\nprint(math.log(8, 2))",
   "topic": "hazir"
  },
  {
   "type": "mc",
   "q": "`random()` fonksiyonu hangi aralıkta değer döndürür?",
   "opts": [
    "1 ile 100 arası tam sayı",
    "-1 ile 1 arası",
    "0 <= x < 1 ondalıklı sayı",
    "0 ile 1 dahil tam sayı",
    "Her zaman 0.5"
   ],
   "a": 2,
   "exp": "`random()` parametresizdir; 0 dahil, 1 hariç ondalıklı sözde rastgele sayı üretir.",
   "code": "from random import random\nx = random()\nassert 0 <= x < 1",
   "topic": "hazir"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: 1 ile 6 arasında (6 dahil) zar atsın.",
   "code": "from random import randrange\nzar = randrange(1, ____)\nprint(1 <= zar <= 6)",
   "ans": [
    "7"
   ],
   "cs": true,
   "exp": "`randrange(a, b)` b'yi dahil etmez; 6 dahil olsun diye 7 yazılır.",
   "topic": "hazir"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: programı 1 saniye bekletsin.",
   "code": "from time import ____\nsleep(0)\nprint(\"ok\")",
   "ans": [
    "sleep"
   ],
   "cs": true,
   "exp": "`time.sleep(saniye)` programı verilen süre kadar durdurur.",
   "topic": "hazir"
  },
  {
   "type": "code",
   "title": "Hipotenüs",
   "q": "Dik kenarları 3 ve 4 olan üçgenin hipotenüsünü hesaplayın.",
   "code": "{{1}} math import sqrt\na, b = 3, 4\nc = {{2}}(a {{3}} 2 + b ** 2)\nprint(c)",
   "blanks": [
    {
     "ans": [
      "from"
     ],
     "cs": true
    },
    {
     "ans": [
      "sqrt"
     ],
     "cs": true
    },
    {
     "ans": [
      "**"
     ],
     "cs": true
    }
   ],
   "exps": [
    "`from modül import fonksiyon`.",
    "Karekök: sqrt.",
    "Kare almak için `**`."
   ],
   "expect": "5.0",
   "topic": "hazir"
  },
  {
   "type": "open",
   "q": "Kullanıcıdan bir sayı alıp **karekökünü** `math` modülüyle hesaplayan ve yazan programı yazınız. (16 → 4.0)",
   "model": "- `from math import sqrt` ya da `import math` + `math.sqrt()`.\n- Sayı `float(input())` ile alınır.",
   "modelCode": "from math import sqrt\nsayi = float(input())\nprint(sqrt(sayi))",
   "topic": "hazir"
  },
  {
   "type": "mc",
   "q": "`from random import random` sonrası `random(20)` çağrılırsa ne olur?",
   "opts": [
    "0.2 döner",
    "0–20 arası sayı döner",
    "20 döner",
    "NameError",
    "TypeError (parametre almaz)"
   ],
   "a": 4,
   "exp": "`random()` parametresiz bir fonksiyondur; parametre gönderilirse TypeError alınır.",
   "code": "from random import random\nrandom(20)",
   "topic": "hazir"
  },
  {
   "type": "mc",
   "q": "`sqrt()` parametresiz çağrılırsa ne olur?",
   "opts": [
    "1.0 döner",
    "0.0 döner",
    "None döner",
    "TypeError",
    "SyntaxError"
   ],
   "a": 3,
   "exp": "Fonksiyona beklenenden az ya da çok parametre göndermek TypeError verir.",
   "code": "from math import sqrt\nsqrt()",
   "topic": "hazir"
  },
  {
   "type": "mc",
   "q": "`print`, `input`, `int`, `type` gibi fonksiyonlar neden import edilmeden kullanılabilir?",
   "opts": [
    "Fonksiyon olmadıkları için",
    "math modülünde oldukları için",
    "`__builtins__` (yerleşik işlevler) modülünde oldukları için",
    "Sadece IDLE'da çalıştıkları için",
    "Python'a sonradan yüklendikleri için"
   ],
   "a": 2,
   "exp": "Yerleşik işlevler `__builtins__` modülündedir ve import gerekmez. Diğer modüllerdeki fonksiyonlar için import şarttır.",
   "topic": "hazir"
  },
  {
   "type": "mc",
   "q": "Bir modüldeki tüm fonksiyonları listeleyen fonksiyon hangisidir?",
   "opts": [
    "dir()",
    "id()",
    "help()",
    "list()",
    "type()"
   ],
   "a": 0,
   "exp": "`dir(math)` math modülündeki tüm adları listeler. `id()` nesnenin adresini, `help()` açıklamayı verir.",
   "topic": "hazir"
  },
  {
   "type": "mc",
   "q": "Kitaptaki `from time import clock` satırı güncel Python 3'te ne yapar?",
   "opts": [
    "ImportError verir; clock kaldırılmıştır, yerine perf_counter kullanılır.",
    "Programı 1 saniye bekletir.",
    "SyntaxError verir.",
    "Saati ekrana yazar.",
    "Süreyi saniye olarak ölçer."
   ],
   "a": 0,
   "exp": "`time.clock()` Python 3.8'de kaldırıldı. Süre ölçmek için `time.perf_counter()` (ya da `time.time()`) kullanılır.",
   "code": "from time import clock",
   "topic": "hazir"
  },
  {
   "type": "mc",
   "q": "Boşluğa hangisi gelirse kod 2 basamaklı yuvarlanmış pi yazar?",
   "opts": [
    "pi",
    "math.pi()",
    "math.PI",
    "math.pi",
    "math.e"
   ],
   "a": 3,
   "exp": "`pi` math modülünde bir **sabittir**, fonksiyon değildir; parantez almaz.",
   "code": "import math\nprint(round(____, 2))",
   "why": {
    "1": "pi bir sayıdır; çağrılamaz (TypeError).",
    "2": "Büyük-küçük harf duyarlı: PI yoktur.",
    "4": "e = 2.718…"
   },
   "topic": "hazir"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "256.0",
    "1.414",
    "4.0",
    "16.0",
    "2.0"
   ],
   "a": 4,
   "exp": "İç içe çağrı: sqrt(16) = 4.0, sqrt(4.0) = 2.0.",
   "code": "from math import sqrt\nprint(sqrt(sqrt(16)))",
   "topic": "hazir"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: verilen listeden rastgele bir eleman seçsin.",
   "code": "from random import ____\nrenk = choice([\"kırmızı\", \"mavi\", \"yeşil\"])\nprint(renk in [\"kırmızı\", \"mavi\", \"yeşil\"])",
   "ans": [
    "choice"
   ],
   "cs": true,
   "exp": "`choice()` değerler arasından rastgele birini seçer.",
   "topic": "hazir"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: aynı rastgele diziyi tekrar üretmek için başlangıç değeri verilsin.",
   "code": "import random\nrandom.____(42)\na = random.randrange(100)\nrandom.seed(42)\nprint(a == random.randrange(100))",
   "ans": [
    "seed"
   ],
   "cs": true,
   "exp": "`seed` rastgele dizinin başlangıç değerini belirler; aynı seed aynı diziyi verir.",
   "topic": "hazir"
  },
  {
   "type": "code",
   "title": "Geri sayım",
   "q": "5'ten 0'a geri sayan, her sayıdan sonra bekleyen kodu tamamlayın (testte 0 saniye beklenir).",
   "code": "from time import {{1}}\nfor sayac in range(5, {{2}}, -1):\n    print(sayac, end=\" \")\n    sleep({{3}})",
   "blanks": [
    {
     "ans": [
      "sleep"
     ],
     "cs": true
    },
    {
     "ans": [
      "-1"
     ],
     "cs": true
    },
    {
     "ans": [
      "0"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Bekletme fonksiyonu: `sleep`.",
    "0 dahil olsun diye bitiş -1.",
    "Normalde 1 yazılır; burada test için 0."
   ],
   "expect": "5 4 3 2 1 0",
   "topic": "hazir"
  },
  {
   "type": "open",
   "q": "1–100 arasında (ikisi de dahil) **5 tane** rastgele tam sayı üretip yan yana yazan programı yazınız.",
   "model": "- `from random import randrange` ya da `randint`.\n- `randrange(1, 101)` 100'ü dahil eder.",
   "modelCode": "from random import randrange\nfor i in range(5):\n    print(randrange(1, 101), end=\" \")",
   "topic": "hazir"
  },
  {
   "type": "open",
   "q": "`math` modülünü kullanarak 45 derecenin **radyan** karşılığını ve 100'ün **10 tabanında** logaritmasını yazdırınız.",
   "model": "- `math.radians(45)` → 0.785…\n- `math.log10(100)` → 2.0\n- Not: `math.cos(x)` gibi trigonometrik fonksiyonlar açıyı **radyan** cinsinden ister.",
   "modelCode": "import math\nprint(math.radians(45))\nprint(math.log10(100))",
   "topic": "hazir"
  }
 ],
 "fonkyazma": [
  {
   "type": "mc",
   "q": "Python'da fonksiyon tanımlamaya başlayan ayrılmış kelime hangisidir?",
   "opts": [
    "define",
    "func",
    "function",
    "def",
    "void"
   ],
   "a": 3,
   "exp": "Fonksiyon tanımı: `def isim(parametreler):` ve girintili gövde.",
   "code": "____ double(n):\n    return 2 * n\nprint(double(3))",
   "why": {
    "2": "`function` PHP/JavaScript yazımıdır."
   },
   "topic": "fonkyazma"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "2",
    "6",
    "Hata",
    "3",
    "None"
   ],
   "a": 1,
   "exp": "`double(3)` → 2 * 3 = 6 döndürülür, x'e atanır ve yazdırılır.",
   "code": "def double(n):\n    return 2 * n\nx = double(3)\nprint(x)",
   "topic": "fonkyazma"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "0",
    "None",
    "Hiçbir şey",
    "Hata",
    "10"
   ],
   "a": 1,
   "exp": "Fonksiyonda `return` yok; hesaplanan değer geri döndürülmez. return'süz fonksiyon **None** döndürür.",
   "code": "def topla(a, b):\n    sonuc = a + b\nprint(topla(4, 6))",
   "why": {
    "4": "Değer fonksiyon içinde hesaplandı ama `return` ile dışarı gönderilmedi."
   },
   "topic": "fonkyazma"
  },
  {
   "type": "mc",
   "q": "`def say_n(n):` tanımlıyken `say_n()` çağrılırsa ne olur?",
   "opts": [
    "None döner",
    "SyntaxError",
    "TypeError: eksik parametre",
    "n = 0 kabul edilir",
    "Hiçbir şey olmaz"
   ],
   "a": 2,
   "exp": "Parametre bekleyen fonksiyona değer göndermemek TypeError (missing 1 required positional argument) verir.",
   "code": "def say_n(n):\n    print(n)\nsay_n()",
   "topic": "fonkyazma"
  },
  {
   "type": "mc",
   "q": "`say_n(3, 5)` çağrısı (fonksiyon tek parametreli) ne olur?",
   "opts": [
    "TypeError: fazla parametre",
    "5 kullanılır",
    "Sadece 3 kullanılır",
    "3 ve 5 toplanır",
    "SyntaxError"
   ],
   "a": 0,
   "exp": "Fazla parametre de TypeError verir (takes 1 positional argument but 2 were given).",
   "code": "def say_n(n):\n    print(n)\nsay_n(3, 5)",
   "topic": "fonkyazma"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "1. x = 2\n2. x = 10\n3. x = 10",
    "1. x = 2\n2. x = 10\n3. x = 2",
    "Hata",
    "1. x = 2\n2. x = 2\n3. x = 2",
    "1. x = 10\n2. x = 10\n3. x = 10"
   ],
   "a": 1,
   "exp": "Fonksiyon içindeki `x = 10` **yerel** bir değişkendir; dışarıdaki x'i değiştirmez.",
   "code": "x = 2\nprint(\"1. x =\", x)\ndef fun1():\n    x = 10\n    print(\"2. x =\", x)\nfun1()\nprint(\"3. x =\", x)",
   "topic": "fonkyazma"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kod çalıştırılırsa ne olur?",
   "opts": [
    "NameError: fonksiyon tanımından önce çağrılmış",
    "SyntaxError",
    "None yazar",
    "8 yazar",
    "Hiçbir şey"
   ],
   "a": 0,
   "exp": "Python kodu yukarıdan aşağı çalıştırır; fonksiyon tanımı **çağrılmadan önce** yapılmalıdır.",
   "code": "print(kare(4))\ndef kare(a):\n    return a * a",
   "topic": "fonkyazma"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "Artırma sonrası, x = 5",
    "Artırma sonrası, x = 6",
    "6",
    "Artırma sonrası, x = None",
    "Hata"
   ],
   "a": 0,
   "exp": "Fonksiyona x'in **değeri** gönderilir; içerideki x += 1 dıştaki x'i değiştirmez. Dönen değer atanmadığı için x 5 kalır.",
   "code": "def artir(x):\n    x += 1\n    return x\nx = 5\nartir(x)\nprint(\"Artırma sonrası, x =\", x)",
   "why": {
    "1": "x = artir(x) yazılsaydı 6 olurdu."
   },
   "topic": "fonkyazma"
  },
  {
   "type": "mc",
   "q": "Boşluğa ne gelirse fonksiyon karenin alanını döndürür?",
   "opts": [
    "return a * a",
    "return Alan",
    "a * a",
    "return a + a",
    "print(a * a)"
   ],
   "a": 0,
   "exp": "Değeri çağıran yere göndermek için `return` kullanılır.",
   "code": "def Alan(a):\n    ____\nhesapla = Alan(5)\nprint(hesapla)",
   "why": {
    "4": "print ekrana yazar ama None döndürür: çıktı \"25\" ve \"None\" olur.",
    "2": "Hesaplar ama döndürmez: None."
   },
   "topic": "fonkyazma"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: fonksiyon iki sayının büyüğünü geri göndersin.",
   "code": "def buyuk(a, b):\n    if a > b:\n        ____ a\n    return b\nprint(buyuk(7, 3))",
   "ans": [
    "return"
   ],
   "cs": true,
   "exp": "`return` değeri döndürür ve fonksiyonu orada bitirir.",
   "topic": "fonkyazma"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: 1'den n'e kadar sayan fonksiyonu 3 ile çağırın.",
   "code": "def say_n(n):\n    for i in range(1, n + 1):\n        print(i, end=\" \")\n____(3)",
   "ans": [
    "say_n"
   ],
   "cs": true,
   "exp": "Fonksiyon adıyla ve parantez içinde değerle çağrılır.",
   "topic": "fonkyazma"
  },
  {
   "type": "code",
   "title": "EBOB fonksiyonu",
   "q": "İki sayının en büyük ortak bölenini bulan fonksiyonu tamamlayın (36, 24 → 12).",
   "code": "def gcd(s1, s2):\n    kucuk = s1 if s1 < s2 else s2\n    ebob = 1\n    for i in range(1, kucuk {{1}} 1):\n        if s1 % i == 0 {{2}} s2 % i == 0:\n            ebob = i\n    {{3}} ebob\nprint(gcd(36, 24))",
   "blanks": [
    {
     "ans": [
      "+"
     ],
     "cs": true
    },
    {
     "ans": [
      "and"
     ],
     "cs": true
    },
    {
     "ans": [
      "return"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Küçük sayı da denensin: `kucuk + 1`.",
    "İki sayıya **birlikte** bölünmeli: `and`.",
    "Sonucu döndür: `return`."
   ],
   "expect": "12",
   "topic": "fonkyazma"
  },
  {
   "type": "open",
   "q": "İki sayının **toplamını döndüren** `topla(a, b)` fonksiyonunu yazınız ve `topla(3, 4)` sonucunu yazdırınız.",
   "model": "- `def` ile tanımla, `return a + b` ile döndür.\n- print fonksiyonun içinde değil, çağırırken kullanılır.",
   "modelCode": "def topla(a, b):\n    return a + b\nprint(topla(3, 4))",
   "topic": "fonkyazma"
  },
  {
   "type": "mc",
   "q": "Fonksiyon tanımında parantez içindeki değişkene ne ad verilir?",
   "opts": [
    "Modül",
    "Dönüş değeri",
    "Parametre",
    "Gövde",
    "Sınıf"
   ],
   "a": 2,
   "exp": "Fonksiyon tanımı 4 parçadan oluşur: `def`, isim, parametre listesi, gövde.",
   "topic": "fonkyazma"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kod kaç satır yazar?",
   "opts": [
    "3",
    "1",
    "Hata",
    "0",
    "2"
   ],
   "a": 4,
   "exp": "Fonksiyon iki kez çağrıldığı için gövdesi iki kez çalışır.",
   "code": "def selam():\n    print(\"Merhaba\")\nselam()\nselam()",
   "topic": "fonkyazma"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "1\n1 2\n1 2 3",
    "3\n3\n3",
    "1 2 3",
    "Hata",
    "1\n2\n3"
   ],
   "a": 0,
   "exp": "Fonksiyon döngü içinde i = 1, 2, 3 ile çağrılır; her çağrıda 1'den i'ye kadar yazar.",
   "code": "def say_n(n):\n    for i in range(1, n + 1):\n        print(i, end=\" \")\n    print()\nfor i in range(1, 4):\n    say_n(i)",
   "topic": "fonkyazma"
  },
  {
   "type": "mc",
   "q": "`main()` fonksiyonunun görevi kitapta nasıl anlatılır?",
   "opts": [
    "Programı sonlandırır.",
    "Programın ana akışını içerir; diğer fonksiyonları çağırır.",
    "Hata ayıklama yapar.",
    "Python'un zorunlu yerleşik fonksiyonudur.",
    "Sadece değişken tanımlar."
   ],
   "a": 1,
   "exp": "main ana fonksiyondur; SayiGir, gcd gibi yardımcı fonksiyonları sırayla çağırır. Python'da zorunlu değildir, düzen için kullanılır.",
   "topic": "fonkyazma"
  },
  {
   "type": "mc",
   "q": "Asal sayı fonksiyonunda boşluğa hangisi gelmeli?",
   "opts": [
    "pass",
    "break",
    "continue",
    "return True",
    "return False"
   ],
   "a": 4,
   "exp": "Bir bölen bulunursa sayı asal değildir; hemen False döndürülür. Döngü bölen bulamadan biterse True.",
   "code": "def asal(n):\n    for d in range(2, n):\n        if n % d == 0:\n            ____\n    return True\nprint([x for x in range(2, 20) if asal(x)])",
   "topic": "fonkyazma"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "15",
    "Hata",
    "None",
    "10",
    "5"
   ],
   "a": 0,
   "exp": "Fonksiyonlar iç içe çağrılabilir: kare(3) = 9, topla(9, 6) = 15.",
   "code": "def kare(a):\n    return a * a\ndef topla(a, b):\n    return a + b\nprint(topla(kare(3), 6))",
   "topic": "fonkyazma"
  },
  {
   "type": "mc",
   "q": "`def say_n(n)` fonksiyonu `say_n(3.2)` ile çağrılırsa (içinde `range(1, n + 1)` var) ne olur?",
   "opts": [
    "1 2 3 4 yazar",
    "1 2 3 yazar",
    "TypeError (range tam sayı ister)",
    "Hiçbir şey yazmaz",
    "SyntaxError"
   ],
   "a": 2,
   "exp": "range'e ondalıklı sayı verilemez; çalışma zamanında TypeError alınır.",
   "code": "def say_n(n):\n    for i in range(1, n + 1):\n        print(i)\nsay_n(3.2)",
   "topic": "fonkyazma"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: `return` içermeyen fonksiyon hangi değeri döndürür?",
   "code": "def f():\n    x = 5\nprint(f() is ____)",
   "ans": [
    "None"
   ],
   "cs": true,
   "exp": "return yazılmayan (ya da boş return olan) fonksiyon `None` döndürür.",
   "topic": "fonkyazma"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: parametresiz fonksiyon tanımı.",
   "code": "def menu____:\n    return \"T)opla F)ark\"\nprint(menu())",
   "ans": [
    "()"
   ],
   "cs": true,
   "exp": "Parametre yoksa da parantezler yazılır: `def menu():`",
   "topic": "fonkyazma"
  },
  {
   "type": "code",
   "title": "Kısıtlı veri girişi",
   "q": "Değer aralık dışındaysa tekrar soran fonksiyonu tamamlayın.",
   "code": "def arasindami(ilk, son):\n    if ilk > son:\n        ilk, son = {{1}}, ilk\n    deger = int(input())\n    {{2}} deger < ilk or deger > son:\n        deger = int(input())\n    return deger\nprint(arasindami(20, {{3}}))",
   "blanks": [
    {
     "ans": [
      "son"
     ],
     "cs": true
    },
    {
     "ans": [
      "while"
     ],
     "cs": true
    },
    {
     "ans": [
      "10"
     ],
     "cs": true
    }
   ],
   "exps": [
    "İlk büyükse yer değiştir: `ilk, son = son, ilk`.",
    "Geçerli değer girilene kadar tekrar: `while`.",
    "20 ve 10 verildi; fonksiyon sırayı kendisi düzeltir."
   ],
   "expect": "16",
   "topic": "fonkyazma"
  },
  {
   "type": "open",
   "q": "Bir sayının **çift olup olmadığını** True/False döndüren `cift_mi(n)` fonksiyonunu yazınız.",
   "model": "- `return n % 2 == 0` karşılaştırmanın sonucu zaten True/False'tur.",
   "modelCode": "def cift_mi(n):\n    return n % 2 == 0",
   "topic": "fonkyazma"
  },
  {
   "type": "open",
   "q": "Verilen yükseklikte `*` karakterinden **dik üçgen** çizen `ucgen(n)` fonksiyonunu yazınız. (`ucgen(3)` → `*`, `**`, `***` alt alta)",
   "model": "- `for i in range(1, n + 1): print(\"*\" * i)`\n- Metin × sayı metni tekrarlar.",
   "modelCode": "def ucgen(n):\n    for i in range(1, n + 1):\n        print(\"*\" * i)\nucgen(3)",
   "topic": "fonkyazma"
  }
 ],
 "fonk2": [
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "Hata",
    "None",
    "5",
    "10",
    "0"
   ],
   "a": 2,
   "exp": "`global sonuc` sayesinde fonksiyon içindeki atama dışarıdaki (global) değişkeni değiştirir.",
   "code": "sonuc = 0\ndef topla(a, b):\n    global sonuc\n    sonuc = a + b\ntopla(2, 3)\nprint(sonuc)",
   "why": {
    "4": "`global` olmasaydı 0 kalırdı; atama yerel bir değişken oluştururdu."
   },
   "topic": "fonk2"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir? (global satırı **yok**)",
   "opts": [
    "None",
    "0",
    "Hata",
    "5",
    "2"
   ],
   "a": 1,
   "exp": "global bildirilmeden yapılan atama yerel bir `sonuc` oluşturur; dıştaki değişmez.",
   "code": "sonuc = 0\ndef topla(a, b):\n    sonuc = a + b\ntopla(2, 3)\nprint(sonuc)",
   "topic": "fonk2"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kod çalıştırılırsa ne olur?",
   "opts": [
    "1 yazar",
    "Hiçbir şey",
    "UnboundLocalError (atama varken yerel sayılır)",
    "SyntaxError",
    "0 yazar"
   ],
   "a": 2,
   "exp": "Fonksiyon içinde değişkene atama varsa Python onu yerel sayar; önce okumaya çalışınca hata verir. Çözüm: `global sayac`.",
   "code": "sayac = 0\ndef artir():\n    sayac += 1\nartir()",
   "topic": "fonk2"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kod kaç sayı yazar?",
   "opts": [
    "5",
    "0",
    "6",
    "8",
    "9"
   ],
   "a": 2,
   "exp": "Parametre verilmezse varsayılan n=5 kullanılır: 5, 4, 3, 2, 1, 0 → 6 sayı.",
   "code": "def gerisayim(n=5):\n    for sayac in range(n, -1, -1):\n        print(sayac)\ngerisayim()",
   "topic": "fonk2"
  },
  {
   "type": "mc",
   "q": "`def AralikTopla(n=0, m):` tanımı ne olur?",
   "opts": [
    "SyntaxError: varsayılanlı parametreden sonra varsayılansız gelemez",
    "Çalışır, n varsayılan 0 olur",
    "NameError",
    "Çalışır, m varsayılan 0 olur",
    "TypeError"
   ],
   "a": 0,
   "exp": "Varsayılan değerli parametreler **sona** yazılmalıdır. Kitaptaki bu örnek Python'da geçersizdir: `def f(m, n=0)` doğrudur.",
   "code": "def AralikTopla(n=0, m):\n    return n + m",
   "topic": "fonk2"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "5050",
    "0",
    "5150",
    "100",
    "Hata"
   ],
   "a": 0,
   "exp": "m verilmediği için 100 alınır: 1..100 toplamı 5050.",
   "code": "def AralikTopla(n, m=100):\n    toplam = 0\n    for deger in range(n, m + 1):\n        toplam += deger\n    return toplam\nprint(AralikTopla(1))",
   "topic": "fonk2"
  },
  {
   "type": "mc",
   "q": "Özyinelemeli faktöriyelde boşluğa ne gelmeli?",
   "opts": [
    "faktoriyel(n - 1)",
    "return faktoriyel(n)",
    "return n - 1",
    "return n * faktoriyel(n + 1)",
    "return n * faktoriyel(n - 1)"
   ],
   "a": 4,
   "exp": "Fonksiyon kendini **küçülen** parametreyle çağırır; n == 0 durma koşuludur.",
   "code": "def faktoriyel(n):\n    if n == 0:\n        return 1\n    else:\n        ____\nprint(faktoriyel(6))",
   "why": {
    "1": "Kendini aynı n ile çağırır: sonsuz özyineleme (RecursionError).",
    "0": "return yok: None döner, çarpma hatası."
   },
   "topic": "fonk2"
  },
  {
   "type": "mc",
   "q": "`faktoriyel(0)` kaç döndürür (özyinelemeli tanıma göre)?",
   "opts": [
    "0",
    "1",
    "None",
    "-1",
    "Hata"
   ],
   "a": 1,
   "exp": "Durma koşulu: `if n == 0: return 1`. 0! = 1.",
   "code": "def faktoriyel(n):\n    if n == 0:\n        return 1\n    return n * faktoriyel(n - 1)\nprint(faktoriyel(0))",
   "topic": "fonk2"
  },
  {
   "type": "mc",
   "q": "Durma koşulu olmayan özyinelemeli fonksiyon ne olur?",
   "opts": [
    "None döndürür",
    "Bir kez çalışıp durur",
    "RecursionError (sonsuz özyineleme)",
    "0 döndürür",
    "SyntaxError"
   ],
   "a": 2,
   "exp": "Her özyinelemeli fonksiyonun bir **durma (temel) koşulu** olmalıdır; yoksa çağrılar sınırı aşar.",
   "code": "def f(n):\n    return f(n - 1)\nf(3)",
   "topic": "fonk2"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: fonksiyon içinde dışarıdaki değişkene atama yapılabilsin.",
   "code": "sayi1 = 0\ndef SayiGir():\n    ____ sayi1\n    sayi1 = 12\nSayiGir()\nprint(sayi1)",
   "ans": [
    "global"
   ],
   "cs": true,
   "exp": "`global` bildirimi olmadan atama yerel değişken oluşturur.",
   "topic": "fonk2"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: renk parametresi verilmezse \"black\" olsun.",
   "code": "def Cokgen(kenar, renk____):\n    return str(kenar) + \" \" + renk\nprint(Cokgen(5))",
   "ans": [
    "=\"black\"",
    "='black'",
    " = \"black\""
   ],
   "cs": true,
   "exp": "Varsayılan değer `parametre=deger` biçiminde tanımda verilir.",
   "topic": "fonk2"
  },
  {
   "type": "code",
   "title": "Özyinelemeli Fibonacci",
   "q": "n. Fibonacci sayısını özyinelemeyle hesaplayın (fibonacci(10) → 55).",
   "code": "def fibonacci(n):\n    if n <= 0:\n        return 0\n    elif n == {{1}}:\n        return 1\n    else:\n        return fibonacci(n - 2) {{2}} {{3}}(n - 1)\nprint(fibonacci(10))",
   "blanks": [
    {
     "ans": [
      "1"
     ],
     "cs": true
    },
    {
     "ans": [
      "+"
     ],
     "cs": true
    },
    {
     "ans": [
      "fibonacci"
     ],
     "cs": true
    }
   ],
   "exps": [
    "İkinci durma koşulu: fibonacci(1) = 1.",
    "Her sayı önceki iki sayının **toplamıdır**.",
    "Fonksiyon kendini çağırır."
   ],
   "expect": "55",
   "topic": "fonk2"
  },
  {
   "type": "open",
   "q": "Özyineleme **kullanmadan** (döngüyle) faktöriyel hesaplayan `faktoriyel(n)` fonksiyonunu yazınız. (5 → 120, 0 → 1)",
   "model": "- Sonuç 1'den başlar.\n- `while n: sonuc *= n; n -= 1` ya da `for i in range(1, n + 1)`.",
   "modelCode": "def faktoriyel(n):\n    sonuc = 1\n    while n:\n        sonuc *= n\n        n -= 1\n    return sonuc",
   "topic": "fonk2"
  },
  {
   "type": "mc",
   "q": "Yerel değişkenler için hangisi **yanlıştır**?",
   "opts": [
    "Fonksiyon bitince silinirler.",
    "Aynı ad farklı fonksiyonlarda kullanılabilir.",
    "Fonksiyon içinde tanımlanırlar.",
    "Geçicidirler.",
    "Program boyunca hafızada kalırlar."
   ],
   "a": 4,
   "exp": "Program boyunca hafızada kalan değişken **global** değişkendir; yereller fonksiyon bitince unutulur.",
   "topic": "fonk2"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "5 5",
    "8 8",
    "5 8",
    "Hata",
    "8 5"
   ],
   "a": 4,
   "exp": "İlk çağrı varsayılan n=5'i kullanmaz çünkü 8 gönderildi; ikinci çağrıda parametre yok → 5.",
   "code": "def f(n=5):\n    return n\nprint(f(8), f())",
   "topic": "fonk2"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "21",
    "5",
    "Hata",
    "13",
    "8"
   ],
   "a": 3,
   "exp": "Fibonacci (0, 1, 1, 2, 3, 5, 8, 13…): fibonacci(7) = 13.",
   "code": "def fibonacci(n):\n    if n <= 0:\n        return 0\n    elif n == 1:\n        return 1\n    return fibonacci(n - 2) + fibonacci(n - 1)\nprint(fibonacci(7))",
   "topic": "fonk2"
  },
  {
   "type": "mc",
   "q": "`Kontrol.py` dosyasındaki `AsalKontrol` fonksiyonunu başka programda kullanmanın doğru yolu hangisidir?",
   "opts": [
    "include \"Kontrol.py\"",
    "from AsalKontrol import Kontrol",
    "using Kontrol.AsalKontrol",
    "from Kontrol import AsalKontrol",
    "import AsalKontrol from Kontrol"
   ],
   "a": 3,
   "exp": "Kendi dosyamız da bir modüldür: `from <dosya adı (.py olmadan)> import <fonksiyon adı>`. Ya da `import Kontrol` + `Kontrol.AsalKontrol(x)`.",
   "topic": "fonk2"
  },
  {
   "type": "mc",
   "q": "Boşluğa hangisi gelirse çağrı çalışır? `def Cokgen(kenar, uzunluk, renk=\"black\", dolgu=False)`",
   "opts": [
    "Cokgen(5, 30, \"red\", True)",
    "Cokgen(renk=\"red\")",
    "Cokgen(5, renk=\"red\")",
    "Cokgen()",
    "Cokgen(5)"
   ],
   "a": 0,
   "exp": "Varsayılanı olmayan `kenar` ve `uzunluk` mutlaka gönderilmelidir; diğerleri isteğe bağlıdır.",
   "code": "def Cokgen(kenar, uzunluk, renk=\"black\", dolgu=False):\n    return \"ok\"\nprint(____)",
   "topic": "fonk2"
  },
  {
   "type": "mc",
   "q": "Özyinelemeli faktoriyel(4) hesaplanırken fonksiyon toplam kaç kez çağrılır (ilk çağrı dahil)?",
   "opts": [
    "5",
    "3",
    "24",
    "4",
    "1"
   ],
   "a": 0,
   "exp": "faktoriyel(4) → (3) → (2) → (1) → (0): 5 çağrı. 0'da durur.",
   "code": "say = 0\ndef faktoriyel(n):\n    global say\n    say += 1\n    if n == 0:\n        return 1\n    return n * faktoriyel(n - 1)\nfaktoriyel(4)\nprint(say)",
   "topic": "fonk2"
  },
  {
   "type": "mc",
   "q": "Hesap makinesi örneğinde `sayi1`, `sayi2`, `sonuc` neden global tanımlandı?",
   "opts": [
    "Birden fazla fonksiyon (SayiGir, Topla, Yazdir) aynı değerleri paylaşsın diye",
    "Program daha hızlı çalışsın diye",
    "Varsayılan parametre olsun diye",
    "Python zorunlu kıldığı için",
    "Yerel değişken tanımlanamadığı için"
   ],
   "a": 0,
   "exp": "SayiGir değerleri okur, Topla hesaplar, Yazdir yazar; ortak değerler global olunca hepsi erişebilir.",
   "topic": "fonk2"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: fonksiyon kendi kendini çağırsın (1'den n'e toplam).",
   "code": "def topla(n):\n    if n == 0:\n        return 0\n    return n + ____(n - 1)\nprint(topla(4))",
   "ans": [
    "topla"
   ],
   "cs": true,
   "exp": "Özyineleme: fonksiyon küçülen parametreyle kendini çağırır. 4+3+2+1 = 10.",
   "topic": "fonk2"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: özyinelemenin durma koşulu (n kaç olunca 1 döndürülmeli?).",
   "code": "def faktoriyel(n):\n    if n == ____:\n        return 1\n    return n * faktoriyel(n - 1)\nprint(faktoriyel(5))",
   "ans": [
    "0",
    "1"
   ],
   "cs": true,
   "exp": "n == 0 (ya da n == 1) olunca 1 döndürülür; yoksa sonsuz özyineleme olur.",
   "topic": "fonk2"
  },
  {
   "type": "code",
   "title": "Global sayaç",
   "q": "Her çağrıda global sayacı 1 artıran fonksiyonu tamamlayın.",
   "code": "sayac = 0\ndef tikla():\n    {{1}} sayac\n    sayac {{2}} 1\nfor i in range({{3}}):\n    tikla()\nprint(sayac)",
   "blanks": [
    {
     "ans": [
      "global"
     ],
     "cs": true
    },
    {
     "ans": [
      "+="
     ],
     "cs": true
    },
    {
     "ans": [
      "3"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Dıştaki değişkene atama için `global`.",
    "Bir artır: `+= 1`.",
    "3 kez çağrılınca sayac 3."
   ],
   "expect": "3",
   "topic": "fonk2"
  },
  {
   "type": "open",
   "q": "İki parametre alan `us(taban, kuvvet=2)` fonksiyonunu yazınız; kuvvet verilmezse karesini alsın. (`us(3)` → 9, `us(2, 5)` → 32)",
   "model": "- Varsayılan parametre sona yazılır: `def us(taban, kuvvet=2):`\n- `return taban ** kuvvet`",
   "modelCode": "def us(taban, kuvvet=2):\n    return taban ** kuvvet",
   "topic": "fonk2"
  },
  {
   "type": "open",
   "q": "Bir sayının rakamları toplamını **özyinelemeyle** bulan `rakam_topla(n)` fonksiyonunu yazınız. (1234 → 10)",
   "model": "- Durma: `n == 0` ise 0.\n- Son rakam `n % 10`, kalan sayı `n // 10`.\n- `return n % 10 + rakam_topla(n // 10)`",
   "modelCode": "def rakam_topla(n):\n    if n == 0:\n        return 0\n    return n % 10 + rakam_topla(n // 10)",
   "topic": "fonk2"
  }
 ],
 "nesneler": [
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "ABCD",
    "**********ABCD",
    "ABCD******",
    "******ABCD",
    "***ABCD***"
   ],
   "a": 3,
   "exp": "`rjust(10, \"*\")` metni 10 karakterlik alanda **sağa** yaslar, boşlukları * ile doldurur.",
   "code": "print(\"ABCD\".rjust(10, \"*\"))",
   "topic": "nesneler"
  },
  {
   "type": "mc",
   "q": "`\"ABCD\".rjust(3, \"*\")` ne üretir?",
   "opts": [
    "*ABCD",
    "***ABCD",
    "ABC",
    "ABCD",
    "Hata"
   ],
   "a": 3,
   "exp": "İstenen genişlik metin uzunluğundan küçükse bir şey yapılmaz; metin aynen döner.",
   "code": "print(\"ABCD\".rjust(3, \"*\"))",
   "topic": "nesneler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "0",
    "4",
    "2",
    "3",
    "1"
   ],
   "a": 3,
   "exp": "`count` alt metnin kaç kez geçtiğini sayar: \"BCD\" üç kez geçiyor.",
   "code": "s = \" ABCDEFGHBCDIJKLMNOPQRSBCDTUVWXYZ \"\ns = s.strip()\nprint(s.count(\"BCD\"))",
   "topic": "nesneler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "< ABC >",
    "Hata",
    "<ABC>",
    "<ABC >",
    "< ABC>"
   ],
   "a": 0,
   "exp": "Metinler **değişmezdir** (immutable). `s.strip()` yeni bir metin döndürür ama s'ye atanmadığı için s değişmez.",
   "code": "s = \" ABC \"\ns.strip()\nprint(\"<\" + s + \">\")",
   "why": {
    "2": "<ABC> için `s = s.strip()` yazılmalıydı."
   },
   "topic": "nesneler"
  },
  {
   "type": "mc",
   "q": "`s = \"ABCDEF\"` iken `s[3] = \"S\"` çalıştırılırsa ne olur?",
   "opts": [
    "TypeError: str değiştirilemez",
    "ABCSEF olur",
    "Hiçbir şey olmaz",
    "SBCDEF olur",
    "IndexError"
   ],
   "a": 0,
   "exp": "str nesneleri değişmezdir; tek bir karakteri değiştirmeye izin verilmez.",
   "code": "s = \"ABCDEF\"\ns[3] = \"S\"",
   "topic": "nesneler"
  },
  {
   "type": "mc",
   "q": "`s = \"ABCEFGHI\"` iken `print(s[0], s[2], len(s))` çıktısı nedir?",
   "opts": [
    "B C 8",
    "A C 8",
    "A C 9",
    "A C 7",
    "A B 8"
   ],
   "a": 1,
   "exp": "İndeks **0**'dan başlar: s[0] = A, s[2] = C. len 8 karakter.",
   "code": "s = \"ABCEFGHI\"\nprint(s[0], s[2], len(s))",
   "topic": "nesneler"
  },
  {
   "type": "mc",
   "q": "Boşluğa hangisi gelirse çıktı `Merhaba FILIZ` olur?",
   "opts": [
    "ad.capitalize()",
    "upper(ad)",
    "ad.upper",
    "ad.lower()",
    "ad.upper()"
   ],
   "a": 4,
   "exp": "Metot çağırma: `nesne.metot(parametreler)`. upper tüm harfleri büyütür. **Tuzak:** Python Türkçe kurallarını bilmez; `i` → `I` olur, `İ` değil. Kitaptaki `FİLİZ` çıktısı gerçekte `FILIZ`dir.",
   "code": "ad = \"Filiz\"\nprint(\"Merhaba \" + ____)",
   "why": {
    "1": "upper bir metottur, bağımsız fonksiyon değildir: NameError.",
    "2": "Parantezsiz yazılırsa metodu çağırmaz, metot nesnesinin kendisi olur: TypeError."
   },
   "topic": "nesneler"
  },
  {
   "type": "mc",
   "q": "Dosyayı **ekleme** (eski içerik korunarak sonuna yazma) modunda açan satır hangisidir?",
   "opts": [
    "open(\"dosyam.txt\", \"a\")",
    "open(\"dosyam.txt\", \"x+\")",
    "open(\"dosyam.txt\")",
    "open(\"dosyam.txt\", \"r\")",
    "open(\"dosyam.txt\", \"w\")"
   ],
   "a": 0,
   "exp": "\"w\": yaz (eski içerik **silinir**), \"a\": ekle (korunur), \"r\": oku (varsayılan).",
   "topic": "nesneler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kod sonrası dosyada ne yazar?",
   "opts": [
    "veri",
    "kaynak\\ndosya\\nveri",
    "Hata",
    "kaynak dosya veri",
    "kaynakdosyaveri"
   ],
   "a": 4,
   "exp": "`write` kendiliğinden satır sonu ya da boşluk eklemez; ayırmak için `\\n` yazılmalıdır.",
   "code": "f = open(\"_t9.txt\", \"w\")\nf.write(\"kaynak\")\nf.write(\"dosya\")\nf.write(\"veri\")\nf.close()\nprint(open(\"_t9.txt\").read())",
   "topic": "nesneler"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: metnin başındaki ve sonundaki boşlukları silen metot.",
   "code": "s = \"   Python   \"\ns = s.____()\nprint(\"[\" + s + \"]\")",
   "ans": [
    "strip"
   ],
   "cs": true,
   "exp": "`strip()` baş ve sondaki boşlukları siler. Sonucu tekrar s'ye atamak gerekir.",
   "topic": "nesneler"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: f1 ile f3 **aynı nesne** mi?",
   "code": "from fractions import Fraction\nf1 = Fraction(1, 2)\nf3 = f1\nprint(f1 ____ f3)",
   "ans": [
    "is"
   ],
   "cs": true,
   "exp": "`is` iki değişkenin aynı nesneyi gösterip göstermediğini (örtüşme) kontrol eder.",
   "whyFill": {
    "==": "== değer eşitliğine bakar; burada da True verir ama soru **aynı nesne** mi diye soruyor: `is`."
   },
   "topic": "nesneler"
  },
  {
   "type": "code",
   "title": "Dosyaya yaz, oku",
   "q": "Üç sayıyı dosyaya ayrı satırlara yazıp geri okuyan kodu tamamlayın.",
   "code": "with open(\"_t9b.txt\", {{1}}) as f:\n    for sayi in [1, 54, 66]:\n        f.write(str(sayi) + {{2}})\nwith open(\"_t9b.txt\") as f:\n    for satir in f:\n        print(int(satir.{{3}}()))",
   "blanks": [
    {
     "ans": [
      "\"w\"",
      "'w'"
     ],
     "cs": true
    },
    {
     "ans": [
      "\"\\n\"",
      "'\\n'"
     ],
     "cs": true
    },
    {
     "ans": [
      "strip"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Yazma modu: \"w\".",
    "Her sayı ayrı satıra: \"\\n\".",
    "Satır sonundaki \\n'yi silmek için `strip()` (int() de tolere eder ama strip doğru yoldur)."
   ],
   "expect": "1\n54\n66",
   "topic": "nesneler"
  },
  {
   "type": "open",
   "q": "Kullanıcıdan alınan bir cümlede **\"a\" harfinin kaç kez geçtiğini** `count` metoduyla yazan programı yazınız.",
   "model": "- `cumle.count(\"a\")` alt metnin kaç kez geçtiğini döndürür.\n- Büyük-küçük harf duyarlıdır: \"Ankara bahar\" için büyük `A` sayılmaz → 4. Hepsini saymak için `cumle.lower().count(\"a\")`.",
   "modelCode": "cumle = input()\nprint(cumle.count(\"a\"))",
   "topic": "nesneler"
  },
  {
   "type": "mc",
   "q": "`\"PYTHON\".lower()` ne döndürür?",
   "opts": [
    "pYTHON",
    "python",
    "PYTHON",
    "Hata",
    "Python"
   ],
   "a": 1,
   "exp": "`lower` tüm harfleri küçültür.",
   "code": "print(\"PYTHON\".lower())",
   "topic": "nesneler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "False\nFalse",
    "True\nTrue",
    "Hata",
    "True\nFalse",
    "False\nTrue"
   ],
   "a": 3,
   "exp": "f1 ve f2 değerce eşit (`==` True) ama **farklı nesneler** (`is` False).",
   "code": "from fractions import Fraction\nf1 = Fraction(1, 2)\nf2 = Fraction(1, 2)\nprint(f1 == f2)\nprint(f1 is f2)",
   "topic": "nesneler"
  },
  {
   "type": "mc",
   "q": "`\"Python\".startswith(\"Py\")` ne döndürür?",
   "opts": [
    "False",
    "Py",
    "True",
    "Hata",
    "0"
   ],
   "a": 2,
   "exp": "`startswith` metnin verilen önekle başlayıp başlamadığını sorgular.",
   "code": "print(\"Python\".startswith(\"Py\"))",
   "topic": "nesneler"
  },
  {
   "type": "mc",
   "q": "`\"Merhaba\".find(\"h\")` ne döndürür?",
   "opts": [
    "True",
    "4",
    "5",
    "-1",
    "3"
   ],
   "a": 4,
   "exp": "`find` aranan karakterin ilk konumunu verir; indeks 0'dan başlar: M0 e1 r2 **h3**. Bulamazsa -1 döner.",
   "code": "print(\"Merhaba\".find(\"h\"))",
   "topic": "nesneler"
  },
  {
   "type": "mc",
   "q": "`open(\"dosyam.txt\")` ikinci parametre verilmeden açılırsa hangi modda açılır?",
   "opts": [
    "\"w\" (yazma)",
    "\"r\" (okuma)",
    "Hata verir",
    "\"rw\"",
    "\"a\" (ekleme)"
   ],
   "a": 1,
   "exp": "Mod verilmezse varsayılan \"r\"dir: `open(\"x\")` ile `open(\"x\", \"r\")` aynıdır.",
   "topic": "nesneler"
  },
  {
   "type": "mc",
   "q": "`with open(...) as f:` kullanmanın avantajı nedir?",
   "opts": [
    "Dosya şifrelenir",
    "Dosya daha hızlı okunur",
    "Sadece yazma modunda çalışır",
    "Dosya hiç kapanmaz",
    "Blok bitince dosya otomatik kapanır"
   ],
   "a": 4,
   "exp": "with/as bloğu bitince `__exit__` çağrılır ve dosya kendiliğinden kapanır; ayrıca `close()` gerekmez.",
   "topic": "nesneler"
  },
  {
   "type": "mc",
   "q": "tkinter'da pencereyi gösterip programı başlatan (olay döngüsü) çağrı hangisidir?",
   "opts": [
    "Tk.open()",
    "root.start()",
    "root.pack()",
    "root.run()",
    "root.mainloop()"
   ],
   "a": 4,
   "exp": "`root = Tk()` ana pencereyi oluşturur, `root.mainloop()` grafik programı başlatır. `pack()` bileşeni pencereye yerleştirir.",
   "topic": "nesneler"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: metnin uzunluğunu veren yerleşik fonksiyon.",
   "code": "s = \"Hayatta En Hakiki\"\nprint(____(s))",
   "ans": [
    "len"
   ],
   "cs": true,
   "exp": "`len(s)` ile `s.__len__()` aynı işi yapar; kullanılması gereken `len`dir.",
   "topic": "nesneler"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: metni 10 karakterlik alanda **sola** yaslasın.",
   "code": "print(\"[\" + \"ABC\".____(10, \"-\") + \"]\")",
   "ans": [
    "ljust"
   ],
   "cs": true,
   "exp": "ljust sola, rjust sağa, center ortaya yaslar.",
   "topic": "nesneler"
  },
  {
   "type": "code",
   "title": "Harfleri köşeli parantezle yaz",
   "q": "Metnin her harfini `[H][a]...` biçiminde yan yana yazın.",
   "code": "s = \"Hayat\"\nfor i in range({{1}}(s)):\n    print(\"[\", s[{{2}}], \"]\", sep={{3}}, end=\"\")",
   "blanks": [
    {
     "ans": [
      "len"
     ],
     "cs": true
    },
    {
     "ans": [
      "i"
     ],
     "cs": true
    },
    {
     "ans": [
      "\"\"",
      "''"
     ],
     "cs": true
    }
   ],
   "exps": [
    "İndekslerle gezmek için `range(len(s))`.",
    "O anki harf `s[i]`.",
    "Aralara boşluk girmesin: `sep=\"\"`."
   ],
   "expect": "[H][a][y][a][t]",
   "topic": "nesneler"
  },
  {
   "type": "open",
   "q": "Kullanıcıdan alınan bir kelimeyi **tamamen büyük harfle** ve **10 karakterlik alanda ortalanmış** (boşluk `*`) olarak yazan programı yazınız. (\"ali\" → `***ALI****`)",
   "model": "- `kelime.upper()` büyütür.\n- `center(10, \"*\")` ortalar.\n- Metotlar zincirlenebilir: `kelime.upper().center(10, \"*\")`",
   "modelCode": "kelime = input()\nprint(kelime.upper().center(10, \"*\"))",
   "topic": "nesneler"
  },
  {
   "type": "open",
   "q": "Bir dosyaya `\"w\"` ile 3 isim yazıp (her biri ayrı satırda), sonra dosyayı okuyup isimleri ekrana yazan programı **with** kullanarak yazınız.",
   "model": "- Yazarken `f.write(isim + \"\\n\")`.\n- Okurken `for satir in f: print(satir.strip())`.",
   "modelCode": "with open(\"isimler.txt\", \"w\") as f:\n    for isim in [\"Ali\", \"Ayşe\", \"Can\"]:\n        f.write(isim + \"\\n\")\nwith open(\"isimler.txt\") as f:\n    for satir in f:\n        print(satir.strip())",
   "topic": "nesneler"
  }
 ],
 "listeler": [
  {
   "type": "mc",
   "q": "`data = [10, 20, 30, 40, 50, 60]` iken `print(data[-1], data[-6])` çıktısı nedir?",
   "opts": [
    "50 10",
    "60 20",
    "60 10",
    "IndexError",
    "10 60"
   ],
   "a": 2,
   "exp": "Negatif indeks sondan sayar: -1 son eleman, -6 bu listede ilk eleman.",
   "code": "data = [10, 20, 30, 40, 50, 60]\nprint(data[-1], data[-6])",
   "topic": "listeler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "[10, 20, 30, 40] [10, 20, 30, 40]",
    "Hata",
    "[10, 20, 30, 40] [10, 20, 35, 40]",
    "[10, 20, 35, 40] [10, 20, 30, 40]",
    "[10, 20, 35, 40] [10, 20, 35, 40]"
   ],
   "a": 4,
   "exp": "`b = a` yeni liste oluşturmaz; ikisi **aynı listeyi** gösterir (örtüşme). b değişince a da değişir. (Kitaptaki çıktı burada hatalıdır!)",
   "code": "a = [10, 20, 30, 40]\nb = a\nb[2] = 35\nprint(a, b)",
   "why": {
    "2": "Bu, b ayrı bir liste olsaydı (b = a[:] ya da kopya) doğru olurdu."
   },
   "topic": "listeler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "True False",
    "False False",
    "True True",
    "Hata",
    "False True"
   ],
   "a": 0,
   "exp": "a ve b değerce eşit (`==` True) ama ayrı ayrı oluşturuldukları için farklı nesneler (`is` False).",
   "code": "a = [10, 20, 30, 40]\nb = [10, 20, 30, 40]\nprint(a == b, a is b)",
   "topic": "listeler"
  },
  {
   "type": "mc",
   "q": "`print([0] * 3 + [1])` çıktısı nedir?",
   "opts": [
    "Hata",
    "[1, 1, 1]",
    "[0, 1, 0, 1, 0, 1]",
    "[3, 1]",
    "[0, 0, 0, 1]"
   ],
   "a": 4,
   "exp": "`*` listeyi tekrarlar, `+` listeleri birleştirir.",
   "code": "print([0] * 3 + [1])",
   "topic": "listeler"
  },
  {
   "type": "mc",
   "q": "`a = [2, 4]` iken `a += 20` çalıştırılırsa ne olur?",
   "opts": [
    "[22, 24]",
    "[2, 4, 20]",
    "SyntaxError",
    "TypeError (int liste değil)",
    "[2, 4] (değişmez)"
   ],
   "a": 3,
   "exp": "Listeye `+=` ile ancak liste eklenebilir: `a += [20]`. Tam sayı tek başına eklenemez.",
   "code": "a = [2, 4]\na += 20",
   "topic": "listeler"
  },
  {
   "type": "mc",
   "q": "`Lst = [10, 20, 30, 40, 50, 60, 70, 80]` iken `Lst[2:5]` nedir?",
   "opts": [
    "[30, 40, 50]",
    "[20, 30, 40, 50]",
    "[20, 30, 40]",
    "[30, 50]",
    "[30, 40, 50, 60]"
   ],
   "a": 0,
   "exp": "Dilimleme `[başlangıç:bitiş]`: başlangıç dahil, bitiş **hariç** → indeks 2, 3, 4.",
   "code": "Lst = [10, 20, 30, 40, 50, 60, 70, 80]\nprint(Lst[2:5])",
   "topic": "listeler"
  },
  {
   "type": "mc",
   "q": "`Lst = [10, 20, 30, 40, 50]` iken `Lst[::-1]` nedir?",
   "opts": [
    "[50, 40, 30, 20, 10]",
    "Hata",
    "[50]",
    "[10, 20, 30, 40, 50]",
    "[10]"
   ],
   "a": 0,
   "exp": "Artış -1 ile liste **ters** çevrilmiş olarak dilimlenir.",
   "code": "Lst = [10, 20, 30, 40, 50]\nprint(Lst[::-1])",
   "topic": "listeler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "[[0, 0, 5], [0, 0, 5]]",
    "Hata",
    "[[0, 0, 5], [0, 0, 0]]",
    "[[0, 0, 0], [0, 0, 5]]",
    "[[0, 5, 0], [0, 5, 0]]"
   ],
   "a": 0,
   "exp": "`[[0]*3]*2` aynı iç listeyi 2 kez **paylaştırır**; birini değiştirmek hepsini değiştirir. Doğrusu: `[[0]*3 for _ in range(2)]`.",
   "code": "a = [[0] * 3] * 2\na[1][2] = 5\nprint(a)",
   "why": {
    "3": "Bu, satırlar ayrı oluşturulsaydı (list comprehension ile) doğru olurdu."
   },
   "topic": "listeler"
  },
  {
   "type": "mc",
   "q": "Boşluğa hangisi gelirse listenin sonuna eleman eklenir?",
   "opts": [
    "lst + \"four\"",
    "lst.push(\"four\")",
    "lst.add(\"four\")",
    "lst.append(\"four\")",
    "lst.insert(\"four\")"
   ],
   "a": 3,
   "exp": "`append` sonuna ekler ve listeyi değiştirir. `lst += [\"four\"]` de aynı işi yapar.",
   "code": "lst = [\"one\", \"two\", \"three\"]\n____\nprint(lst)",
   "why": {
    "2": "add set (küme) metodudur.",
    "1": "push Python listesinde yoktur."
   },
   "topic": "listeler"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: 5 listede var mı?",
   "code": "liste = list(range(0, 21, 2))\nprint(5 ____ liste)",
   "ans": [
    "in"
   ],
   "cs": true,
   "exp": "`in` üyelik sorgular; True/False döner. 5 tek sayı olduğu için listede yok.",
   "topic": "listeler"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: listenin 2. indeksindeki elemanı silsin.",
   "code": "a = list(range(10, 51, 10))\n____ a[2]\nprint(a)",
   "ans": [
    "del"
   ],
   "cs": true,
   "exp": "`del a[2]` 30'u siler.",
   "topic": "listeler"
  },
  {
   "type": "code",
   "title": "Kullanıcıdan liste",
   "q": "-1 girilene kadar alınan sayılardan liste oluşturun.",
   "code": "sonuc = {{1}}\nsayi = 0\nwhile sayi >= 0:\n    sayi = int(input())\n    if sayi >= 0:\n        sonuc {{2}} [sayi]\nprint(sonuc, {{3}}(sonuc))",
   "blanks": [
    {
     "ans": [
      "[]",
      "list()"
     ],
     "cs": true
    },
    {
     "ans": [
      "+="
     ],
     "cs": true
    },
    {
     "ans": [
      "len"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Boş liste: `[]`.",
    "Listeye liste eklenir: `+= [sayi]`.",
    "Eleman sayısı: `len`."
   ],
   "expect": "[2, 3, 55] 3",
   "topic": "listeler"
  },
  {
   "type": "open",
   "q": "Bir listedeki sayıların **toplamını ve ortalamasını** (hazır `sum` kullanmadan, döngüyle) yazan programı yazınız. `[12, 23, 43, 54, 55]` → 187 ve 37.4",
   "model": "- Toplam 0'dan başlar, `for sayi in liste: toplam += sayi`.\n- Ortalama = toplam / len(liste).",
   "modelCode": "liste = [12, 23, 43, 54, 55]\ntoplam = 0\nfor sayi in liste:\n    toplam += sayi\nprint(toplam, toplam / len(liste))",
   "topic": "listeler"
  },
  {
   "type": "mc",
   "q": "`a = [10, 20, 30, 40]` iken `print(a[4])` ne olur?",
   "opts": [
    "40",
    "10",
    "0",
    "IndexError",
    "None"
   ],
   "a": 3,
   "exp": "Geçerli indeksler 0–3'tür; listenin sınırı dışına erişim IndexError verir.",
   "code": "a = [10, 20, 30, 40]\nprint(a[4])",
   "topic": "listeler"
  },
  {
   "type": "mc",
   "q": "`list(range(10, -1, -1))` kaç elemanlıdır?",
   "opts": [
    "12",
    "11",
    "10",
    "9",
    "0"
   ],
   "a": 1,
   "exp": "10'dan 0'a kadar (0 dahil): 10, 9, …, 0 → 11 eleman.",
   "code": "print(len(list(range(10, -1, -1))))",
   "topic": "listeler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "['a', 'b', 30, 40, 50, 60, 70, 80]",
    "[10, 20, 'a', 'b', 50, 60, 70, 80]",
    "Hata",
    "[10, 'a', 'b', 60, 70, 80]",
    "[10, 20, 'a', 'b', 70, 80]"
   ],
   "a": 4,
   "exp": "Dilime atama: indeks 2–5 (30, 40, 50, 60) yerine iki eleman konur; liste kısalır.",
   "code": "lst = [10, 20, 30, 40, 50, 60, 70, 80]\nlst[2:6] = [\"a\", \"b\"]\nprint(lst)",
   "topic": "listeler"
  },
  {
   "type": "mc",
   "q": "`b = [[2, 5], 7, [11, 4]]` iken `b[0]` ile `b[0:1]` farkı nedir?",
   "opts": [
    "b[0] = [[2, 5]]; b[0:1] = [2, 5]",
    "İkisi de [2, 5]",
    "b[0] = [2, 5]; b[0:1] = [[2, 5]]",
    "b[0] = 2; b[0:1] = [2]",
    "İkisi de hata"
   ],
   "a": 2,
   "exp": "İndeks elemanın **kendisini**, dilim ise o elemanı içeren **yeni listeyi** döndürür.",
   "code": "b = [[2, 5], 7, [11, 4]]\nprint(b[0], b[0:1])",
   "topic": "listeler"
  },
  {
   "type": "mc",
   "q": "`matrix = [[100, 14, 8], [0, 243, 68], [90, 21, 7]]` iken `matrix[2][1]` nedir?",
   "opts": [
    "21",
    "90",
    "243",
    "14",
    "68"
   ],
   "a": 0,
   "exp": "İlk indeks satır, ikinci indeks sütun: 3. satır ([90, 21, 7]) içindeki 2. eleman → 21.",
   "code": "matrix = [[100, 14, 8], [0, 243, 68], [90, 21, 7]]\nprint(matrix[2][1])",
   "topic": "listeler"
  },
  {
   "type": "mc",
   "q": "Boşluğa hangisi gelirse 1–20 arası çift sayıların listesi oluşur?",
   "opts": [
    "[x for x in range(1, 21) if x % 2 == 0]",
    "[x if x % 2 == 0 for x in range(21)]",
    "[x for x in range(1, 20) if x % 2 == 1]",
    "list(1, 20, 2)",
    "[range(2, 21, 2)]"
   ],
   "a": 0,
   "exp": "Liste oluşturma (comprehension): `[ifade for değişken in aralık if koşul]`.",
   "code": "print(____)",
   "why": {
    "4": "Liste içinde tek eleman olarak range nesnesi olur: [range(2, 21, 2)]."
   },
   "topic": "listeler"
  },
  {
   "type": "mc",
   "q": "Aşağıdaki kodun çıktısı nedir?",
   "opts": [
    "[2, 4, 6, 8]",
    "Hata",
    "[]",
    "None",
    "[0, 0, 0, 0]"
   ],
   "a": 4,
   "exp": "Liste fonksiyona gönderildiğinde **aynı nesne** gider; fonksiyon içinde elemanlarını değiştirmek dıştaki listeyi de değiştirir.",
   "code": "def SifirAta(lst):\n    for i in range(len(lst)):\n        lst[i] = 0\na = [2, 4, 6, 8]\nSifirAta(a)\nprint(a)",
   "topic": "listeler"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: listeyi küçükten büyüğe sıralasın.",
   "code": "a = [34, -19, 20, 8, 12]\na.____()\nprint(a)",
   "ans": [
    "sort"
   ],
   "cs": true,
   "exp": "`sort()` listeyi artan sırada yerinde sıralar. `reverse()` ise ters çevirir.",
   "topic": "listeler"
  },
  {
   "type": "fill",
   "q": "Boşluğu doldurun: 0'dan 9'a tam sayı listesi.",
   "code": "a = ____(range(0, 10))\nprint(a)",
   "ans": [
    "list"
   ],
   "cs": true,
   "exp": "`list()` range'in ürettiği değerlerden liste oluşturur.",
   "topic": "listeler"
  },
  {
   "type": "code",
   "title": "Liste kopyalama",
   "q": "Listenin **ayrı bir kopyasını** oluşturan fonksiyonu tamamlayın; kopya değişince asıl liste değişmesin.",
   "code": "def ListeKopyala(lst):\n    result = []\n    for item {{1}} lst:\n        result += [{{2}}]\n    return result\na = [10, 20, 30, 40]\nb = ListeKopyala(a)\nb[2] = 35\nprint(a, b, a {{3}} b)",
   "blanks": [
    {
     "ans": [
      "in"
     ],
     "cs": true
    },
    {
     "ans": [
      "item"
     ],
     "cs": true
    },
    {
     "ans": [
      "is"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Listeyi gezmek: `for item in lst`.",
    "Her elemanı yeni listeye ekle.",
    "Ayrı nesneler mi? `a is b` → False."
   ],
   "expect": "[10, 20, 30, 40] [10, 20, 35, 40] False",
   "topic": "listeler"
  },
  {
   "type": "open",
   "q": "Bir listedeki **en büyük sayıyı** hazır `max` kullanmadan bulan `en_buyuk(lst)` fonksiyonunu yazınız.",
   "model": "- İlk elemanı en büyük kabul et.\n- Listeyi gez; daha büyüğünü görünce güncelle.",
   "modelCode": "def en_buyuk(lst):\n    eb = lst[0]\n    for x in lst:\n        if x > eb:\n            eb = x\n    return eb",
   "topic": "listeler"
  },
  {
   "type": "open",
   "q": "3 satır 4 sütunluk, tüm elemanları 0 olan bir matrisi **doğru şekilde** oluşturup `[1][2]` elemanını 5 yapan ve yazdıran programı yazınız (sadece bir eleman değişmeli).",
   "model": "- `[[0] * 4] * 3` YANLIŞ: üç satır aynı listeyi paylaşır.\n- Doğru: `[[0] * 4 for _ in range(3)]` ya da döngüyle `append([0] * 4)`.",
   "modelCode": "a = [[0] * 4 for _ in range(3)]\na[1][2] = 5\nprint(a)",
   "topic": "listeler"
  }
 ]
};
window.EXTRA_CODE = [];
