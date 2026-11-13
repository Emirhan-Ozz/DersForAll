/* MBP193 Programlama Temelleri · konu özetleri. tools/build.py ile üretildi. */
window.COURSE = {
 "id": "mbp193",
 "lang": "cs",
 "storeKey": "mbp193-best",
 "themeKey": "mbp193-theme",
 "points": {
  "mc": 5,
  "fill": 5,
  "code": 20
 },
 "randomMix": [
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "fill",
  "fill",
  "fill",
  "fill"
 ],
 "randomTitle": "Rastgele vize (10 test + 4 boşluk)",
 "randomDesc": "Bütün konulardan 10 test ve 4 boşluk doldurma (70 puan). Az gördüğün sorular önce gelir.",
 "reviewTitle": "Programlama Temelleri (C#)",
 "reviewLead": "Hocanın 12. ve 13. sunumlarındaki konular sırasıyla: algoritma, C#, girdi–çıktı, değişkenler, operatörler, tür dönüşümü, if–else, switch, **for** ve **while**. Bütün kod örnekleri Türkçe Windows ayarıyla (ondalık virgül) gerçek C# derleyicisinde çalıştırıldı; çıktılar birebir.",
 "testLead": "Konu testleri (114 soru) ve 3 deneme vizesi. Çıktı soran her sorunun cevabı C# ile çalıştırılarak doğrulandı. Kod yazma kısmı için **Kod yazma** sekmesi.",
 "formatTitle": "Vize formatı",
 "formatNote": "Bilinen: **test 50 puan**, **boşluk doldurma 20 puan**, kalan **30 puan kod yazma** (\"şunu for ile, bunu while ile yazın\"). Soru sayıları varsayım: 10 test × 5, 4 boşluk × 5, 2 kod sorusu × 15.",
 "hocaLink": {
  "href": "#kod",
  "text": "Kod yazma alıştırmalarına geç →"
 },
 "codeDesc": "for, while, switch ve Convert kalıplarını boşluk doldurarak tekrar et.",
 "trapsLead": "Testlerde ve kod yazarken en çok yapılan hatalar."
};
window.EXAM_FORMAT = [
 {
  "range": "10 soru",
  "what": "Test",
  "big": "50",
  "small": "puan"
 },
 {
  "range": "4 soru (varsayım)",
  "what": "Boşluk doldurma",
  "big": "20",
  "small": "puan"
 },
 {
  "range": "2 soru (varsayım)",
  "what": "Kod yazma: for / while ile",
  "big": "30",
  "small": "puan"
 }
];
window.TRAPS = [
 {
  "t": "Write satır başı yapmaz, WriteLine yapar. ReadLine her zaman **string** döndürür.",
  "topic": "girdi"
 },
 {
  "t": "Sayı almak için `Convert.ToInt32(Console.ReadLine())` ya da `int.Parse(...)`. Çevirmezsen \"1\" + \"2\" = \"12\".",
  "topic": "donusum"
 },
 {
  "t": "İki int bölününce sonuç tam sayı: `7/2` = 3, `2/4` = 0. `%` kalanı verir: `9%5` = 4.",
  "topic": "operator"
 },
 {
  "t": "Öncelik: parantez → `* / %` → `+ -`. `8 + 2 / 4 + 1` = 9.",
  "topic": "operator"
 },
 {
  "t": "`\"Sonuc:\" + 4 + 5` → Sonuc:45 · `4 + 5 + \"Sonuc\"` → 9Sonuc.",
  "topic": "operator"
 },
 {
  "t": "`=` atama, `==` karşılaştırma. `&&` ikisi de, `||` en az biri.",
  "topic": "operator"
 },
 {
  "t": "Kodda ondalık nokta (`5.9f`), Türkçe Windows ekranında virgül (5,9). `float x = 5,9;` hatalı.",
  "topic": "degisken"
 },
 {
  "t": "Değişken adı rakamla başlayamaz; C# büyük–küçük harfe duyarlı (`sayi` ≠ `Sayi`).",
  "topic": "degisken"
 },
 {
  "t": "if/else sonrasında tek satır varsa `{}` gerekmez; birden çok satırda şart.",
  "topic": "kosul"
 },
 {
  "t": "switch'te her case `break` ile biter; hiçbiri tutmazsa `default`.",
  "topic": "switch"
 },
 {
  "t": "Toplam döngüden önce 0, çarpım/faktöriyel 1 ile başlar.",
  "topic": "for"
 },
 {
  "t": "while'da sayaç döngüden önce tanımlanır, artırma içeride; unutulursa sonsuz döngü.",
  "topic": "while"
 },
 {
  "t": "break döngüyü bitirir, continue sadece o turu atlar. do while en az bir kez çalışır.",
  "topic": "while"
 },
 {
  "t": "Algoritma programlama dili değildir. Derleyici kaynak kodu makine diline çevirir.",
  "topic": "algoritma"
 }
];
window.TOPICS = [
 {
  "id": "algoritma",
  "title": "Algoritma ve akış şeması",
  "src": "PT12 · s.2–5",
  "blocks": [
   {
    "t": "p",
    "text": "**Algoritma:** bir problemi çözebilmek için gerekli olan **sıralı mantıksal adımların** tümü. Problemin çözüm yolunun adım adım yazılmasıdır; bir **başlangıcı ve sonu** vardır, her adımda yapılacak iş açıkça belirtilir."
   },
   {
    "t": "trap",
    "text": "Algoritma bir **programlama dili değildir**; programlama dillerine yol gösteren bir yöntemler dizisidir."
   },
   {
    "t": "svg",
    "svg": "<svg viewBox=\"0 0 560 330\" role=\"img\" aria-label=\"Toplama algoritmasının akış şeması\"><g class=\"fl\"><ellipse class=\"s1\" cx=\"150\" cy=\"28\" rx=\"62\" ry=\"20\"/><text x=\"150\" y=\"33\">BAŞLA</text><polygon class=\"s2\" points=\"112,72 222,72 188,112 78,112\"/><text x=\"150\" y=\"97\">a, b</text><rect class=\"s3\" x=\"88\" y=\"140\" width=\"124\" height=\"38\"/><text x=\"150\" y=\"164\">sonuc = a + b</text><path class=\"s4\" d=\"M88,206 H212 V240 Q181,228 150,240 T88,240 Z\"/><text x=\"150\" y=\"228\">sonuc</text><ellipse class=\"s1\" cx=\"150\" cy=\"292\" rx=\"62\" ry=\"20\"/><text x=\"150\" y=\"297\">BİTİR</text><line x1=\"150\" y1=\"48\" x2=\"150\" y2=\"70\"/><line x1=\"150\" y1=\"112\" x2=\"150\" y2=\"138\"/><line x1=\"150\" y1=\"178\" x2=\"150\" y2=\"204\"/><line x1=\"150\" y1=\"242\" x2=\"150\" y2=\"270\"/></g><g class=\"lg\"><text x=\"250\" y=\"33\">Başlamak ve bitirmek için (elips)</text><text x=\"250\" y=\"97\">Değişkenleri belirlemek / veri girişi (paralelkenar)</text><text x=\"250\" y=\"164\">Atama ve işlemler (dikdörtgen)</text><text x=\"250\" y=\"228\">Ekran çıktısı (alt kenarı dalgalı)</text><text x=\"250\" y=\"297\">Bitiş (elips)</text></g></svg>",
    "cap": "Hocanın örneği: iki sayıyı toplayıp ekrana yazan algoritma."
   },
   {
    "t": "p",
    "text": "Lamba örneği (karar adımları baklava ile): Lamba çalışmıyor → \"Lambanın fişi takılı mı?\" Hayır → fişi tak; Evet → \"Ampul patlak mı?\" Evet → ampulü değiştir; Hayır → yeni bir lamba al."
   },
   {
    "t": "tip",
    "text": "Karar (koşul) adımı **baklava (eşkenar dörtgen)** ile çizilir ve iki çıkışı vardır: Evet / Hayır. C#'ta karşılığı `if` / `else`."
   }
  ]
 },
 {
  "id": "csharp",
  "title": "C#, derleyici ve Visual Studio",
  "src": "PT12 · s.6–11",
  "blocks": [
   {
    "t": "p",
    "text": "**C#:** basit, modern, **nesne yönelimli**, C ve C++ dillerinden türetilmiş bir dil. **Microsoft** geliştirdi, **açık kaynak** kodludur."
   },
   {
    "t": "p",
    "text": "**Derleyici (compiler):** yazdığımız kaynak kodu bilgisayarın anlayacağı **makine diline (0 ve 1)** çeviren aracı yazılım. İki kişi arasındaki **tercüman** gibidir; çeviri sırasında kaynak koddaki **hataları bulur** ve yazılımcıya bildirir. Derleyici olmasaydı her şey makine dilinde yazılmak zorunda kalırdı."
   },
   {
    "t": "p",
    "text": "**Visual Studio:** Microsoft'un **IDE**'si (entegre geliştirme ortamı). Hem kod yazıp hem yönetmeyi sağlar."
   },
   {
    "t": "ul",
    "items": [
     "Kod düzenleme ve hata ayıklama",
     "Diğer programlama dilleri ile entegre çalışma",
     "Arayüz tasarlama",
     "Kullanım alanını eklentiler ile genişletme"
    ]
   },
   {
    "t": "trap",
    "text": "IDE = **Integrated Development Environment** (entegre geliştirme ortamı). Visual Studio bir **programlama dili değil**, geliştirme ortamıdır; C# ise dildir."
   }
  ]
 },
 {
  "id": "girdi",
  "title": "Girdi–çıktı metotları ve yorum satırı",
  "src": "PT12 · s.12–15, 32–33, 37–38",
  "blocks": [
   {
    "t": "p",
    "text": "**Metot:** bir işlem yapmak için tasarlanmış kodlar topluluğu. Aynı kodu sürekli yazmak yerine metot olarak hazırlayıp gerektiğinde çağırırız."
   },
   {
    "t": "table",
    "head": [
     "Metot",
     "Ne yapar?"
    ],
    "rows": [
     [
      "`Console.Write()`",
      "Konsola yazar, **satır başı yapmaz**"
     ],
     [
      "`Console.WriteLine()`",
      "Konsola yazar, sonra **alt satıra geçer**"
     ],
     [
      "`Console.Read()`",
      "Klavyeden girilen **ilk karakteri** okur"
     ],
     [
      "`Console.ReadLine()`",
      "Girilen **satırın tamamını** okur, **string** döndürür"
     ]
    ]
   },
   {
    "t": "code",
    "code": "Console.Write(1);\nConsole.Write(2);\nConsole.WriteLine();\nConsole.WriteLine(1);\nConsole.WriteLine(2);",
    "out": "12\n1\n2"
   },
   {
    "t": "p",
    "text": "Kullanıcıdan değer almak: `ReadLine()` her zaman **string** verir; sayı lazımsa çevrilir."
   },
   {
    "t": "code",
    "code": "string ad;\nConsole.Write(\"Adınızı Giriniz:\");\nad = Console.ReadLine();\nConsole.WriteLine(\"Merhaba \" + ad);",
    "out": "Adınızı Giriniz:Merhaba Ayşe"
   },
   {
    "t": "code",
    "code": "Console.WriteLine(\"Lütfen Sınav Notunu Giriniz:\");\nint say = Convert.ToInt16(Console.ReadLine());\nConsole.WriteLine(say + 10);",
    "out": "Lütfen Sınav Notunu Giriniz:\n85"
   },
   {
    "t": "p",
    "text": "**Yorum (açıklama) satırı:** kodun neden ve nasıl yazıldığını açıklar, derleyici çalıştırmaz. Tek satır `//`, çok satır `/* ... */`."
   },
   {
    "t": "code",
    "code": "// tek satırlık açıklama\n/* birden fazla\n   satırlık açıklama */\nConsole.WriteLine(\"Yorumlar çalışmaz\");",
    "out": "Yorumlar çalışmaz"
   },
   {
    "t": "tip",
    "text": "Hocanın notu: temiz kod yazan yazılımcı çok fazla yoruma ihtiyaç duymaz."
   }
  ]
 },
 {
  "id": "degisken",
  "title": "Değişkenler ve veri türleri",
  "src": "PT12 · s.16–23",
  "blocks": [
   {
    "t": "p",
    "text": "**Değişken:** bellekte geçici olarak değer tutan **kutu**. Önce **türü**, sonra **benzersiz adı** yazılır, `=` ile değer atanır. Aynı türden birden çok değişken virgülle tanımlanır: `int ad1, ad2, ad3;`"
   },
   {
    "t": "table",
    "head": [
     "Tür",
     "Ne tutar?",
     "Boyut",
     "Örnek"
    ],
    "rows": [
     [
      "string",
      "Metin, çift tırnak `\" \"`",
      "sınırsız",
      "`string metin = \"Örnek\";`"
     ],
     [
      "char",
      "Tek karakter, tek tırnak `' '`",
      "2 byte",
      "`char karakter = 'a';`"
     ],
     [
      "int",
      "Tam sayı (−2.147.483.648 … 2.147.483.647)",
      "4 byte",
      "`int sayi = 5;`"
     ],
     [
      "float",
      "Reel (ondalıklı) sayı",
      "4 byte",
      "`float f = 5.9f;`"
     ],
     [
      "double",
      "Reel sayı",
      "8 byte",
      "`double d = 5.4546;`"
     ],
     [
      "decimal",
      "Reel sayı, en hassas (para)",
      "16 byte",
      "`decimal m = 5.8798m;`"
     ],
     [
      "bool",
      "true / false",
      "1 byte",
      "`bool deger = false;`"
     ]
    ]
   },
   {
    "t": "trap",
    "text": "Kodda ondalık ayırıcı **nokta**dır: `5.9`. Slayttaki `float sayi = 5,9;` derleme hatası verir. float için sonuna **f**, decimal için **m** eklenir: `5.9f`, `5.87m`."
   },
   {
    "t": "p",
    "text": "**Adlandırma kuralları:**"
   },
   {
    "t": "ul",
    "items": [
     "C# **büyük–küçük harfe duyarlıdır**: `deneme` ve `Deneme` farklı değişkenlerdir.",
     "Küçük harfle başla; çok kelimede **camelCase**: `sinavNotu`, `kullaniciAdi`.",
     "**İlk karakter rakam olamaz**: `deneme123` doğru, `123deneme` yanlış.",
     "Türkçe karakter önerilmez; ad işlevini anlatmalı."
    ]
   },
   {
    "t": "code",
    "code": "int a = 4, b = 5, c = 6;\ndouble d = 7.5;\nConsole.WriteLine(a);\nConsole.WriteLine(b);\nConsole.WriteLine(c);\nConsole.WriteLine(d);",
    "out": "4\n5\n6\n7,5"
   },
   {
    "t": "trap",
    "text": "Türkçe Windows'ta ondalıklı sayı ekrana **virgülle** yazılır: `7.5` → `7,5`. Kodda nokta, ekranda virgül."
   },
   {
    "t": "code",
    "code": "string ad = \"Ayşe\", soyad = \"Yılmaz\";\nint yas = 20;\nConsole.WriteLine(ad + \" \" + soyad);\nConsole.WriteLine(yas);",
    "out": "Ayşe Yılmaz\n20"
   }
  ]
 },
 {
  "id": "operator",
  "title": "Operatörler ve işlem önceliği",
  "src": "PT12 · s.24–31, 39–40 · PT13 · s.6",
  "blocks": [
   {
    "t": "table",
    "head": [
     "Operatör",
     "İşlev",
     "Örnek → sonuç"
    ],
    "rows": [
     [
      "+",
      "Sayıda toplama, metinde **birleştirme**",
      "`4+5` → 9, `\"Sonuc:\" + 25` → Sonuc:25"
     ],
     [
      "-",
      "Çıkarma",
      "`8-4` → 4"
     ],
     [
      "*",
      "Çarpma",
      "`4*5` → 20"
     ],
     [
      "/",
      "Bölme (iki int ise **tam sayı bölme**)",
      "`9/3` → 3, `7/2` → 3"
     ],
     [
      "%",
      "Mod: bölümden **kalan**",
      "`9%5` → 4"
     ]
    ]
   },
   {
    "t": "p",
    "text": "**İşlem önceliği** matematikteki gibidir: önce **parantez**, sonra `* / %` (aynı seviye, soldan sağa), en son `+ -`."
   },
   {
    "t": "code",
    "code": "Console.WriteLine(8 + 2 / 4 + 1);\nConsole.WriteLine((5 + 4) / 3);\nConsole.WriteLine(8 % 2 + 1);\nConsole.WriteLine(8 * 2 % 5);",
    "out": "9\n3\n1\n1"
   },
   {
    "t": "trap",
    "text": "`2 / 4` iki tam sayı olduğu için **0** olur (ondalık kısım atılır). Bu yüzden `8 + 2 / 4 + 1` = 8 + 0 + 1 = **9**."
   },
   {
    "t": "code",
    "code": "int x = 7;\nint y = 4;\nint sonuc = x % y;\nConsole.WriteLine(sonuc);\nConsole.WriteLine(\"Sonuc:\" + 4 + 5);\nConsole.WriteLine(4 + 5 + \"Sonuc\");",
    "out": "3\nSonuc:45\n9Sonuc"
   },
   {
    "t": "trap",
    "text": "`+` soldan sağa çalışır: metinden sonra gelen sayılar **yan yana eklenir** (\"Sonuc:45\"); metinden önceki sayılar **toplanır** (\"9Sonuc\")."
   },
   {
    "t": "table",
    "head": [
     "İlişkisel",
     "Anlam"
    ],
    "rows": [
     [
      "==",
      "Eşittir"
     ],
     [
      "!=",
      "Eşit değildir"
     ],
     [
      "<  >",
      "Küçüktür, büyüktür"
     ],
     [
      "<=  >=",
      "Küçük eşit, büyük eşit"
     ]
    ]
   },
   {
    "t": "table",
    "head": [
     "Mantıksal",
     "Doğru olması için"
    ],
    "rows": [
     [
      "&& (ve)",
      "**İki şart da** sağlanmalı"
     ],
     [
      "|| (veya)",
      "Şartlardan **en az biri** yeterli"
     ],
     [
      "! (değil)",
      "Sonucu tersine çevirir"
     ]
    ]
   },
   {
    "t": "trap",
    "text": "`=` atama, `==` karşılaştırmadır. `if (x = 5)` C#'ta derleme hatası verir."
   },
   {
    "t": "p",
    "text": "**Artırma ve azaltma** (3'er yol): `sayi = sayi + 1;` · `sayi += 1;` · `sayi++;` ve `sayi = sayi - 1;` · `sayi -= 1;` · `sayi--;`"
   },
   {
    "t": "code",
    "code": "int sayi = 5;\nsayi++;\nsayi += 1;\nsayi = sayi + 1;\nsayi--;\nConsole.WriteLine(sayi);\nsayi *= 3;\nConsole.WriteLine(sayi);",
    "out": "7\n21"
   }
  ]
 },
 {
  "id": "donusum",
  "title": "Tür dönüşümleri",
  "src": "PT12 · s.34–38",
  "blocks": [
   {
    "t": "p",
    "text": "Klavyeden gelen her şey **string**tir. Hesap yapmak için sayıya çevrilir: `Convert.ToInt32()`, `int.Parse()`, `Convert.ToDouble()`. Diğerleri: `Convert.ToChar`, `Convert.ToBoolean`, `Convert.ToByte`, `Convert.ToInt16`, sayıdan metne `.ToString()`."
   },
   {
    "t": "code",
    "code": "string a = \"1\";\nstring b = \"2\";\nConsole.WriteLine(a + b);\nint x = int.Parse(a);\nint y = int.Parse(b);\nConsole.WriteLine(x + y);\nint m = Convert.ToInt32(a);\nint n = Convert.ToInt32(b);\nConsole.WriteLine(m + n);",
    "out": "12\n3\n3"
   },
   {
    "t": "trap",
    "text": "Çevirmeden toplarsan metinler **yan yana** eklenir: \"1\" + \"2\" = \"12\". Hocanın slaydındaki örnek tam bu."
   },
   {
    "t": "code",
    "code": "Console.Write(\"Sayı: \");\nint sayi = Convert.ToInt32(Console.ReadLine());\nConsole.WriteLine(sayi * 2);",
    "out": "Sayı: 42"
   },
   {
    "t": "table",
    "head": [
     "Dönüşüm",
     "Sonuç"
    ],
    "rows": [
     [
      "`Convert.ToInt32(\"25\")`",
      "25 (int)"
     ],
     [
      "`int.Parse(\"25\")`",
      "25 (int)"
     ],
     [
      "`Convert.ToDouble(\"2,5\")` (Türkçe Windows)",
      "2,5 (double)"
     ],
     [
      "`25.ToString()`",
      "\"25\" (string)"
     ],
     [
      "`Convert.ToInt32(\"abc\")`",
      "Hata (FormatException)"
     ]
    ]
   },
   {
    "t": "low",
    "text": "Türkçe Windows'ta kullanıcı ondalıklı sayıyı **virgülle** girer (2,5). Nokta ile girerse `Convert.ToDouble(\"2.5\")` 25 olur."
   }
  ]
 },
 {
  "id": "kosul",
  "title": "if – else (koşullu ifadeler)",
  "src": "PT12 · s.41–50",
  "blocks": [
   {
    "t": "p",
    "text": "`if` koşul **doğru** ise kendi bloğunu, değilse `else` bloğunu çalıştırır. `else if` ile birden çok koşul sırayla denenir; ilk doğru olan çalışır."
   },
   {
    "t": "code",
    "code": "Console.Write(\"Sayı giriniz: \");\nint sayi = Convert.ToInt32(Console.ReadLine());\nif (sayi > 50)\n{\n    Console.WriteLine(\"50'den büyük bir değer girişi yaptınız\");\n}\nelse\n{\n    Console.WriteLine(\"50'den küçük bir değer girişi yaptınız\");\n}",
    "out": "Sayı giriniz: 50'den büyük bir değer girişi yaptınız"
   },
   {
    "t": "trap",
    "text": "`if` ya da `else`'ten sonra **tek satır** varsa `{ }` gerekmez; birden çok satırda süslü parantez şart, yoksa sadece ilk satır koşula bağlı olur."
   },
   {
    "t": "code",
    "code": "int sayi = 7;\nif (sayi % 2 == 0)\n    Console.WriteLine(\"Çift\");\nelse\n    Console.WriteLine(\"Tek\");",
    "out": "Tek"
   },
   {
    "t": "code",
    "code": "int deger = 100;\nif (deger >= 0 && deger <= 100)\n    Console.WriteLine(\"Doğru\");\nelse\n    Console.WriteLine(\"Yanlış\");",
    "out": "Doğru"
   },
   {
    "t": "code",
    "code": "string kadi = \"ekonomi\", sifre = \"1234\";\nif (kadi == \"ekonomi\" && sifre == \"1234\")\n    Console.WriteLine(\"Doğru Giriş\");\nelse\n    Console.WriteLine(\"Kullanıcı adı veya şifre hatalı\");",
    "out": "Doğru Giriş"
   },
   {
    "t": "p",
    "text": "**İç içe if / else if:** pozitif–negatif–sıfır örneği."
   },
   {
    "t": "code",
    "code": "int sayi = -3;\nif (sayi > 0)\n    Console.WriteLine(\"Pozitif\");\nelse if (sayi < 0)\n    Console.WriteLine(\"Negatif\");\nelse\n    Console.WriteLine(\"Sıfır\");",
    "out": "Negatif"
   },
   {
    "t": "p",
    "text": "Hocanın not örneği: vize %40, final %60. Ortalama 60'ın altı **kaldınız**, sonra harf notları."
   },
   {
    "t": "code",
    "code": "int vize = 50, final = 80;\ndouble ort = vize * 0.4 + final * 0.6;\nConsole.WriteLine(ort);\nif (ort < 60) Console.WriteLine(\"Kaldınız\");\nelse if (ort < 70) Console.WriteLine(\"DD\");\nelse if (ort < 80) Console.WriteLine(\"CC\");\nelse if (ort < 90) Console.WriteLine(\"BB\");\nelse Console.WriteLine(\"AA\");",
    "out": "68\nDD"
   },
   {
    "t": "trap",
    "text": "Slaytta \"70–80 arasında CC\" iki kez yazılmış (yazım hatası). Sınavda aralıkları sırayla ve **çakışmadan** yaz; `else if` zinciri küçükten büyüğe ilerler."
   }
  ]
 },
 {
  "id": "switch",
  "title": "switch – case",
  "src": "PT13 · s.2–5",
  "blocks": [
   {
    "t": "p",
    "text": "`switch` bir değişkenin değerine göre **çok seçenekli** durumlarda if yerine kullanılır."
   },
   {
    "t": "table",
    "head": [
     "Anahtar kelime",
     "Görevi"
    ],
    "rows": [
     [
      "case",
      "Seçili durumu belirler; eşleşen case'in bloğu çalışır"
     ],
     [
      "break",
      "switch'ten çıkar; C#'ta her case **break** ile bitmeli"
     ],
     [
      "default",
      "Hiçbir case tutmazsa çalışır (if'teki else gibi)"
     ]
    ]
   },
   {
    "t": "code",
    "code": "Console.Write(\"Lütfen 1.sayıyı giriniz:\");\nint sayi1 = Convert.ToInt32(Console.ReadLine());\nConsole.Write(\"Lütfen 2.sayıyı giriniz:\");\nint sayi2 = Convert.ToInt32(Console.ReadLine());\nConsole.WriteLine(\"\\n1.Toplama \\n2.Cıkarma \\n3.Carpma \\n4.Bölme\");\nConsole.Write(\"Lütfen işlem seçiniz:\");\nint islem = Convert.ToInt32(Console.ReadLine());\nswitch (islem)\n{\n    case 1:\n        int toplam = sayi1 + sayi2;\n        Console.Write(toplam);\n        break;\n    case 2:\n        int fark = sayi1 - sayi2;\n        Console.Write(fark);\n        break;\n    case 3:\n        int carpim = sayi1 * sayi2;\n        Console.Write(carpim);\n        break;\n    case 4:\n        int bolum = sayi1 / sayi2;\n        Console.Write(bolum);\n        break;\n    default:\n        Console.Write(\"Hatalı Giriş\");\n        break;\n}",
    "out": "Lütfen 1.sayıyı giriniz:Lütfen 2.sayıyı giriniz:\n1.Toplama \n2.Cıkarma \n3.Carpma \n4.Bölme\nLütfen işlem seçiniz:3"
   },
   {
    "t": "trap",
    "text": "C#'ta bir case'in sonunda `break` unutulursa **derleme hatası** verir (bir case'ten diğerine geçilemez). Sadece boş case'ler alt alta yazılabilir: `case 1: case 2: ...`"
   }
  ]
 },
 {
  "id": "for",
  "title": "for döngüsü",
  "src": "PT13 · s.7–16",
  "blocks": [
   {
    "t": "p",
    "text": "Tekrar eden işler **döngülerle** yapılır: `for`, `while`, `do while`, `foreach`. `for` üç bölümden oluşur:"
   },
   {
    "t": "code",
    "code": "for (int i = 0; i <= 10; i++)\n{\n    Console.WriteLine(i);\n}",
    "out": "0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10"
   },
   {
    "t": "table",
    "head": [
     "Bölüm",
     "Örnek",
     "Görevi"
    ],
    "rows": [
     [
      "Başlangıç",
      "`int i = 0`",
      "**Kontrol değişkeni** (sayaç) oluşturulur, bir kez çalışır"
     ],
     [
      "Koşul",
      "`i <= 10`",
      "Her turdan önce kontrol edilir; yanlışsa döngü biter"
     ],
     [
      "Artırma",
      "`i++`",
      "Her tur sonunda sayaca uygulanır"
     ]
    ]
   },
   {
    "t": "p",
    "text": "**0–10 toplamı:**"
   },
   {
    "t": "code",
    "code": "int toplam = 0;\nfor (int i = 0; i <= 10; i++)\n{\n    toplam = toplam + i;\n}\nConsole.WriteLine(toplam);",
    "out": "55"
   },
   {
    "t": "trap",
    "text": "Toplam değişkeni döngüden **önce** ve `0` ile başlatılır. Döngünün içinde tanımlanırsa her turda sıfırlanır."
   },
   {
    "t": "p",
    "text": "**Kullanıcının belirlediği kadar sayıyı toplama:**"
   },
   {
    "t": "code",
    "code": "int toplam = 0;\nConsole.WriteLine(\"Kaç sayıyı Toplayacaksınız\");\nint deger = Convert.ToInt32(Console.ReadLine());\nfor (int i = 1; i <= deger; i++)\n{\n    Console.Write(i + \". Sayıyı Giriniz:\");\n    int sayi = Convert.ToInt32(Console.ReadLine());\n    toplam = toplam + sayi;\n}\nConsole.Write(toplam);",
    "out": "Kaç sayıyı Toplayacaksınız\n1. Sayıyı Giriniz:2. Sayıyı Giriniz:3. Sayıyı Giriniz:60"
   },
   {
    "t": "p",
    "text": "**Kaçı tek, kaçı çift (sayaç):**"
   },
   {
    "t": "code",
    "code": "int cift = 0;\nint tek = 0;\nConsole.WriteLine(\"Kaç Adet Sayı Gireceksiniz:\");\nint deger = Convert.ToInt32(Console.ReadLine());\nfor (int i = 1; i <= deger; i++)\n{\n    Console.Write(i + \".sayıyı giriniz:\");\n    int sayi = Convert.ToInt32(Console.ReadLine());\n    if (sayi % 2 == 0)\n        cift++;\n    else\n        tek++;\n}\nConsole.WriteLine(\"Tek Adet:\" + tek);\nConsole.Write(\"Çift Adet:\" + cift);",
    "out": "Kaç Adet Sayı Gireceksiniz:\n1.sayıyı giriniz:2.sayıyı giriniz:3.sayıyı giriniz:4.sayıyı giriniz:Tek Adet:1\nÇift Adet:3"
   },
   {
    "t": "tip",
    "text": "Sayaç kalıbı: döngüden önce `int sayac = 0;`, koşul sağlanınca `sayac++;`. Toplam kalıbı: `toplam += sayi;`."
   },
   {
    "t": "p",
    "text": "Geriye saymak ve 2'şer artmak da mümkün:"
   },
   {
    "t": "code",
    "code": "for (int i = 10; i >= 0; i -= 2)\n    Console.Write(i + \" \");",
    "out": "10 8 6 4 2 0 "
   }
  ]
 },
 {
  "id": "while",
  "title": "while, do while, break, continue",
  "src": "PT13 · s.17–24",
  "blocks": [
   {
    "t": "p",
    "text": "`while` **koşul doğru olduğu sürece** döner, yanlış olunca biter. for'dan farkı: başlangıç değeri döngüden **önce** tanımlanır, artırma döngünün **içinde** yapılır."
   },
   {
    "t": "code",
    "code": "int i = 0;\nwhile (i <= 10)\n{\n    Console.WriteLine(i);\n    i++;\n}",
    "out": "0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10"
   },
   {
    "t": "trap",
    "text": "while içinde `i++` unutulursa koşul hep doğru kalır: **sonsuz döngü**."
   },
   {
    "t": "table",
    "head": [
     "for ile",
     "while ile"
    ],
    "rows": [
     [
      "`for (int i = 0; i <= 10; i++) { ... }`",
      "`int i = 0;` → `while (i <= 10) { ...; i++; }`"
     ],
     [
      "Sayaç, koşul ve artırma tek satırda",
      "Başlangıç önce, koşul while'da, artırma içeride"
     ],
     [
      "Tekrar sayısı **belli** ise rahat",
      "Tekrar sayısı **belli değilse** (menü, kullanıcı 3'e basana kadar) rahat"
     ]
    ]
   },
   {
    "t": "p",
    "text": "**Faktöriyel (while):**"
   },
   {
    "t": "code",
    "code": "Console.Write(\"Faktöriyeli bulunacak sayıyı giriniz:\");\nint sayi = Convert.ToInt32(Console.ReadLine());\nint sonuc = 1;\nwhile (sayi > 1)\n{\n    sonuc *= sayi;\n    sayi--;\n}\nConsole.WriteLine(\"Sonuç:\" + sonuc);",
    "out": "Faktöriyeli bulunacak sayıyı giriniz:Sonuç:120"
   },
   {
    "t": "trap",
    "text": "Çarpım/faktöriyelde başlangıç **1** olur (0 ile çarpınca sonuç hep 0). Toplamda başlangıç 0."
   },
   {
    "t": "p",
    "text": "**Menü (kullanıcı 3'e basana kadar):** hocanın döviz örneği."
   },
   {
    "t": "code",
    "code": "int secim = 0;\nwhile (secim != 3)\n{\n    Console.WriteLine(\"====== DÖVİZ MENÜSÜ ======\");\n    Console.WriteLine(\"1 - Dolar Kuru Göster\");\n    Console.WriteLine(\"2 - Euro Kuru Göster\");\n    Console.WriteLine(\"3 - Çıkış\");\n    Console.Write(\"Seçiminiz: \");\n    secim = int.Parse(Console.ReadLine());\n    if (secim == 1)\n        Console.WriteLine(\"Dolar kuru: 33.20 TL\");\n    else if (secim == 2)\n        Console.WriteLine(\"Euro kuru: 36.50 TL\");\n    else if (secim == 3)\n        Console.WriteLine(\"Programdan çıkılıyor...\");\n    else\n        Console.WriteLine(\"Geçersiz seçim yaptınız!\");\n}"
   },
   {
    "t": "table",
    "head": [
     "Komut",
     "Görevi"
    ],
    "rows": [
     [
      "break",
      "Döngüyü **o anda bitirir**, döngünün dışına çıkar"
     ],
     [
      "continue",
      "Satırın gerisini atlar, döngünün **sonraki turuna** geçer"
     ],
     [
      "Thread.Sleep(1000)",
      "Programı **milisaniye** cinsinden bekletir (1000 ms = 1 sn); `using System.Threading;` gerekir"
     ]
    ]
   },
   {
    "t": "code",
    "code": "for (int i = 1; i <= 10; i++)\n{\n    if (i == 7) break;\n    if (i % 2 == 0) continue;\n    Console.Write(i + \" \");\n}",
    "out": "1 3 5 "
   },
   {
    "t": "p",
    "text": "**do while:** koşulu sonda kontrol eder, bu yüzden **en az bir kez** çalışır."
   },
   {
    "t": "code",
    "code": "int i = 10;\ndo\n{\n    Console.WriteLine(i);\n    i++;\n} while (i < 5);",
    "out": "10"
   },
   {
    "t": "tip",
    "text": "Slayttaki ödev: 0–10 arası sayıları **5 saniye** aralıklarla yazdırmak için döngünün içine `Thread.Sleep(5000);` eklenir."
   },
   {
    "t": "low",
    "text": "foreach slaytta sadece adı geçiyor (dizilerle kullanılır); vizede ayrıntı beklenmez."
   }
  ]
 }
];
window.TOPIC_RULES = {
 "algoritma": "Algoritma: problemi çözmek için sıralı mantıksal adımlar; başı ve sonu var, programlama dili değil. Akış şemasında elips başla/bitir, paralelkenar giriş, dikdörtgen işlem, baklava karar.",
 "csharp": "C#: Microsoft'un açık kaynak, nesne yönelimli, C/C++'tan türeyen dili. Derleyici kaynak kodu makine diline (0-1) çevirip hataları bildirir. Visual Studio bir IDE'dir.",
 "girdi": "Write satır başı yapmaz, WriteLine yapar. ReadLine satırı string olarak okur, Read ilk karakteri okur. Yorum: // tek satır, /* */ çok satır.",
 "degisken": "Değişken: tür + ad (+ değer). string \"\", char '', int tam sayı 4 byte, float 4, double 8, decimal 16 byte, bool true/false. Ad rakamla başlamaz, büyük-küçük harf duyarlı, camelCase.",
 "operator": "Önce parantez, sonra * / %, sonra + -. int/int tam sayı bölme yapar, % kalanı verir. + metinde birleştirir. == karşılaştırma, && ve, || veya. sayi++, sayi += 1, sayi = sayi + 1 aynı.",
 "donusum": "Klavyeden gelen değer string'tir; Convert.ToInt32 ya da int.Parse ile sayıya çevrilir. Çevrilmeden toplanan metinler yan yana eklenir.",
 "kosul": "if koşul doğruysa bloğunu, değilse else bloğunu çalıştırır; else if zincirinde ilk doğru olan çalışır. Tek satırlık blokta süslü parantez şart değildir.",
 "switch": "switch değere göre case seçer; her case break ile biter, hiçbiri tutmazsa default çalışır (if'teki else gibi).",
 "for": "for (başlangıç; koşul; artırma). Toplam için döngüden önce 0, sayaç için 0 ve koşulda sayac++. i <= n son değeri dahil eder.",
 "while": "while koşul doğru oldukça döner; sayaç önce tanımlanır, içeride artırılır. break döngüyü bitirir, continue turu atlar. do while en az bir kez çalışır. Faktöriyelde sonuc = 1 ile başla."
};
