/* MBP193 test soruları. tools/build.py ile üretildi. */
window.EXAMS = [
 {
  "id": "deneme1",
  "title": "Deneme vizesi 1",
  "featured": true,
  "desc": "10 test (50 p) + 4 boşluk (20 p). Kod yazma kısmı (30 p) için Kod yazma sekmesindeki Kod sınavı 1.",
  "questions": [
   {
    "type": "mc",
    "topic": "operator",
    "q": "Ekrana ne yazılır?",
    "opts": [
     "1,75",
     "3",
     "1",
     "28",
     "11"
    ],
    "a": 1,
    "exp": "7 % 4 = 3 (kalan).",
    "code": "int x = 7;\nint y = 4;\nint sonuc = x % y;\nConsole.WriteLine(sonuc);",
    "src": "Slayt 30"
   },
   {
    "type": "mc",
    "topic": "kosul",
    "q": "Ekrana ne yazılır?",
    "opts": [
     "Hiçbir şey",
     "Pozitif",
     "Negatif",
     "Sıfır",
     "Negatif / Sıfır"
    ],
    "a": 2,
    "exp": "İlk doğru koşul çalışır: -3 < 0.",
    "code": "int sayi = -3;\nif (sayi > 0)\n    Console.WriteLine(\"Pozitif\");\nelse if (sayi < 0)\n    Console.WriteLine(\"Negatif\");\nelse\n    Console.WriteLine(\"Sıfır\");"
   },
   {
    "type": "mc",
    "topic": "for",
    "q": "for döngüsünün üç bölümü sırasıyla hangileridir?",
    "opts": [
     "Başlangıç; koşul; artırma",
     "Koşul; başlangıç; artırma",
     "Artırma; koşul; başlangıç",
     "Başlangıç; artırma; koşul",
     "Tür; ad; değer"
    ],
    "a": 0,
    "exp": "for (int i = 0; i < 10; i++)."
   },
   {
    "type": "mc",
    "topic": "while",
    "q": "while döngüsünde sayaç artırılmazsa ne olur?",
    "opts": [
     "Derleme hatası",
     "Sonsuz döngü",
     "Döngü hiç çalışmaz",
     "Sayaç otomatik artar",
     "Bir kez çalışır"
    ],
    "a": 1,
    "exp": "Koşul hep doğru kalır."
   },
   {
    "type": "mc",
    "topic": "donusum",
    "q": "`Convert.ToInt32(\"abc\")` çalıştırılınca ne olur?",
    "opts": [
     "Çalışma zamanında hata (FormatException)",
     "abc döner",
     "0 döner",
     "-1 döner",
     "Derleme hatası"
    ],
    "a": 0,
    "exp": "Sayıya çevrilemeyen metin hata verir."
   },
   {
    "type": "mc",
    "topic": "degisken",
    "q": "Hangi türün bellekte kapladığı alan en büyüktür (slayta göre)?",
    "opts": [
     "float (4 byte)",
     "int (4 byte)",
     "double (8 byte)",
     "decimal (16 byte)",
     "bool"
    ],
    "a": 3,
    "exp": "decimal en hassas reel sayı türü."
   },
   {
    "type": "mc",
    "topic": "switch",
    "q": "switch yapısında `break` ne işe yarar?",
    "opts": [
     "Koşulu tersine çevirir",
     "Programı kapatır",
     "Bir sonraki case'e geçer",
     "switch'ten çıkıp sonraki adıma geçirir",
     "Değişken tanımlar"
    ],
    "a": 3,
    "exp": "Slayt 3."
   },
   {
    "type": "mc",
    "topic": "girdi",
    "q": "Çok satırlı açıklama (yorum) nasıl yazılır?",
    "opts": [
     "# ... #",
     "/* ... */",
     "''' ... '''",
     "<!-- ... -->",
     "// ... //"
    ],
    "a": 1,
    "exp": "Tek satır //, çok satır /* */."
   },
   {
    "type": "mc",
    "topic": "algoritma",
    "q": "Hangisi algoritma için **yanlıştır**?",
    "opts": [
     "Her adımda yapılacak iş açıkça belirtilir",
     "Algoritma bir programlama dilidir",
     "Adımlar sıralıdır",
     "Programlama dillerine yol gösterir",
     "Bir başlangıcı ve sonu vardır"
    ],
    "a": 1,
    "exp": "Slayt: \"Algoritma programlama dili değildir.\""
   },
   {
    "type": "mc",
    "topic": "csharp",
    "q": "C# için hangisi doğrudur?",
    "opts": [
     "Sadece web sayfası tasarlamak için kullanılır",
     "Microsoft tarafından geliştirilmiş, nesne yönelimli, açık kaynak bir dildir",
     "Apple'ın kapalı kaynak dilidir",
     "Bir IDE'dir",
     "Makine dilidir"
    ],
    "a": 1,
    "exp": "C ve C++'tan türemiş, modern, nesne yönelimli."
   },
   {
    "type": "fill",
    "topic": "switch",
    "q": "Boşluğu doldurun: case'ten çıkılsın.",
    "code": "case 2:\n    Console.Write(sayi1 - sayi2);\n    ____;",
    "ans": [
     "break"
    ],
    "cs": true,
    "exp": "Her case break ile biter."
   },
   {
    "type": "fill",
    "topic": "operator",
    "q": "Boşluğu doldurun: bölümden kalanı bulun.",
    "code": "Console.WriteLine(9 ____ 5);",
    "ans": [
     "%"
    ],
    "cs": true,
    "exp": "Mod operatörü %: 9 % 5 = 4."
   },
   {
    "type": "fill",
    "topic": "degisken",
    "q": "Boşluğu doldurun: tam sayı tutan değişken.",
    "code": "____ sayi = 5;",
    "ans": [
     "int"
    ],
    "cs": true,
    "exp": "Tam sayı int."
   },
   {
    "type": "fill",
    "topic": "degisken",
    "q": "Boşluğu doldurun: metin tutan değişken.",
    "code": "____ metin = \"Örnek metin girişi\";",
    "ans": [
     "string"
    ],
    "cs": true,
    "exp": "Metin string, çift tırnakla."
   }
  ]
 },
 {
  "id": "deneme2",
  "title": "Deneme vizesi 2",
  "featured": false,
  "desc": "10 test (50 p) + 4 boşluk (20 p). Kod yazma kısmı (30 p) için Kod yazma sekmesindeki Kod sınavı 2.",
  "questions": [
   {
    "type": "mc",
    "topic": "operator",
    "q": "\"Eşit değildir\" ilişkisel operatörü hangisidir?",
    "opts": [
     "=!",
     "!=",
     "=/=",
     "<>",
     "==!"
    ],
    "a": 1,
    "exp": "C#'ta eşit değil !=."
   },
   {
    "type": "mc",
    "topic": "kosul",
    "q": "Ekrana ne yazılır? (girdi: 70)",
    "opts": [
     "Derleme hatası",
     "70",
     "50'den büyük bir değer girişi yaptınız",
     "50'den küçük bir değer girişi yaptınız",
     "Hiçbir şey"
    ],
    "a": 2,
    "exp": "70 > 50.",
    "code": "int sayi = Convert.ToInt32(Console.ReadLine());\nif (sayi > 50)\n    Console.WriteLine(\"50'den büyük bir değer girişi yaptınız\");\nelse\n    Console.WriteLine(\"50'den küçük bir değer girişi yaptınız\");"
   },
   {
    "type": "mc",
    "topic": "for",
    "q": "Ekrana ne yazılır?",
    "opts": [
     "10",
     "0",
     "55",
     "56",
     "45"
    ],
    "a": 2,
    "exp": "0 + 1 + ... + 10 = 55.",
    "code": "int toplam = 0;\nfor (int i = 0; i <= 10; i++)\n{\n    toplam = toplam + i;\n}\nConsole.WriteLine(toplam);",
    "src": "Slayt PT13-12"
   },
   {
    "type": "mc",
    "topic": "while",
    "q": "Ekrana ne yazılır? (girdi: 5)",
    "opts": [
     "Sonuç:15",
     "Sonuç:120",
     "Sonuç:0",
     "Sonuç:5",
     "Sonuç:24"
    ],
    "a": 1,
    "exp": "5·4·3·2 = 120.",
    "code": "int sayi = Convert.ToInt32(Console.ReadLine());\nint sonuc = 1;\nwhile (sayi > 1)\n{\n    sonuc *= sayi;\n    sayi--;\n}\nConsole.WriteLine(\"Sonuç:\" + sonuc);",
    "src": "Slayt PT13-24"
   },
   {
    "type": "mc",
    "topic": "donusum",
    "q": "Ekrana ne yazılır?",
    "opts": [
     "Derleme hatası",
     "3",
     "1 2",
     "12",
     "\"1\"\"2\""
    ],
    "a": 3,
    "exp": "İki string + ile yan yana eklenir.",
    "code": "string a = \"1\";\nstring b = \"2\";\nConsole.WriteLine(a + b);",
    "src": "Slayt 35"
   },
   {
    "type": "mc",
    "topic": "degisken",
    "q": "`char c = \"a\";` satırı ne olur?",
    "opts": [
     "Derleme hatası",
     "c = a olur",
     "c = 97 olur",
     "Uyarı ile çalışır"
    ],
    "a": 0,
    "exp": "char tek tırnak ister; \"a\" string'dir."
   },
   {
    "type": "mc",
    "topic": "switch",
    "q": "Aynı programda girdiler 12, 4, 9 olursa ne yazılır?",
    "opts": [
     "3",
     "Hiçbir şey",
     "Hatalı Giriş",
     "Derleme hatası",
     "48"
    ],
    "a": 2,
    "exp": "Hiçbir case tutmayınca default."
   },
   {
    "type": "mc",
    "topic": "girdi",
    "q": "Metot için hangisi doğrudur?",
    "opts": [
     "Derleyicinin adıdır",
     "Sadece yorum satırıdır",
     "Bir döngü çeşididir",
     "Bir işlemi yapmak için tasarlanmış kodlar topluluğudur",
     "Bir değişken türüdür"
    ],
    "a": 3,
    "exp": "Aynı kodu tekrar tekrar yazmak yerine metot hazırlanır."
   },
   {
    "type": "mc",
    "topic": "algoritma",
    "q": "Akış şemasında `sonuc = a + b` gibi atama ve işlem adımı hangi şekildir?",
    "opts": [
     "Elips",
     "Baklava",
     "Ok",
     "Dikdörtgen",
     "Paralelkenar"
    ],
    "a": 3,
    "exp": "İşlem / atama dikdörtgen."
   },
   {
    "type": "mc",
    "topic": "csharp",
    "q": "Visual Studio nedir?",
    "opts": [
     "Bir işletim sistemi",
     "Microsoft'un entegre geliştirme ortamı (IDE)",
     "Bir derleyici türü",
     "Bir programlama dili",
     "Bir veritabanı"
    ],
    "a": 1,
    "exp": "Hem kod yazıp hem yönetmeyi sağlar."
   },
   {
    "type": "fill",
    "topic": "donusum",
    "q": "Boşluğu doldurun: string'i int'e çevirin.",
    "code": "int x = int.____(\"25\");",
    "ans": [
     "Parse"
    ],
    "cs": true,
    "exp": "int.Parse metni sayıya çevirir."
   },
   {
    "type": "fill",
    "topic": "kosul",
    "q": "Boşluğu doldurun: ikinci koşul.",
    "code": "if (sayi > 0) Console.Write(\"Pozitif\");\n____ (sayi < 0) Console.Write(\"Negatif\");\nelse Console.Write(\"Sıfır\");",
    "ans": [
     "else if"
    ],
    "cs": true,
    "exp": "Birden çok koşul else if ile."
   },
   {
    "type": "fill",
    "topic": "algoritma",
    "q": "Boşluğu doldurun.",
    "code": "Algoritma bir programlama dili ____; programlama dillerine yol gösteren yöntemler dizisidir.",
    "ans": [
     "değildir",
     "degildir"
    ],
    "cs": false,
    "exp": "Algoritma dil değil, çözüm yolu."
   },
   {
    "type": "fill",
    "topic": "operator",
    "q": "Boşluğu doldurun: sayi'yi 1 azaltın.",
    "code": "sayi____;",
    "ans": [
     "--"
    ],
    "cs": true,
    "exp": "Azaltma: sayi--, sayi -= 1, sayi = sayi - 1."
   }
  ]
 },
 {
  "id": "deneme3",
  "title": "Deneme vizesi 3",
  "featured": false,
  "desc": "10 test (50 p) + 4 boşluk (20 p). Kod yazma kısmı (30 p) için Kod yazma sekmesindeki Kod sınavı 3.",
  "questions": [
   {
    "type": "mc",
    "topic": "operator",
    "q": "`Console.WriteLine(8 * 2 % 5);` ne yazar?",
    "opts": [
     "1",
     "0",
     "3",
     "6",
     "16"
    ],
    "a": 0,
    "exp": "* ve % aynı öncelikte, soldan sağa: 16 % 5 = 1.",
    "src": "Slayt 29"
   },
   {
    "type": "mc",
    "topic": "kosul",
    "q": "Ekrana ne yazılır?",
    "opts": [
     "Derleme hatası",
     "Doğru Giriş / Kullanıcı adı veya şifre hatalı",
     "Doğru Giriş",
     "Kullanıcı adı veya şifre hatalı",
     "Hiçbir şey"
    ],
    "a": 3,
    "exp": "&& için iki şart da doğru olmalı; şifre \"123\" farklı.",
    "code": "string kadi = \"ekonomi\", sifre = \"123\";\nif (kadi == \"ekonomi\" && sifre == \"1234\")\n    Console.WriteLine(\"Doğru Giriş\");\nelse\n    Console.WriteLine(\"Kullanıcı adı veya şifre hatalı\");"
   },
   {
    "type": "mc",
    "topic": "for",
    "q": "Ekrana ne yazılır?",
    "opts": [
     "55",
     "Derleme hatası",
     "0",
     "10"
    ],
    "a": 2,
    "exp": "toplam döngünün içinde tanımlanınca her turda sıfırlanır; ayrıca dışarıda erişilemez. Burada dışarıdaki toplam hiç değişmez.",
    "code": "int toplam = 0;\nfor (int i = 0; i <= 10; i++)\n{\n    int t = 0;\n    t = t + i;\n}\nConsole.WriteLine(toplam);"
   },
   {
    "type": "mc",
    "topic": "while",
    "q": "while ile for arasındaki farkla ilgili hangisi doğrudur?",
    "opts": [
     "while'da koşul yazılmaz",
     "for'da artırma döngünün içinde zorunludur",
     "while'da başlangıç değeri döngüden önce, artırma döngünün içinde yazılır",
     "İkisi aynı satırda yazılmak zorundadır",
     "while sadece bir kez çalışır"
    ],
    "a": 2,
    "exp": "Slayt PT13-20."
   },
   {
    "type": "mc",
    "topic": "donusum",
    "q": "`int s = Console.ReadLine();` satırı ne olur?",
    "opts": [
     "Derleme hatası",
     "Girilen sayı s'ye atanır",
     "s = 0 olur",
     "Çalışma zamanında uyarı"
    ],
    "a": 0,
    "exp": "string, int'e otomatik dönmez."
   },
   {
    "type": "mc",
    "topic": "degisken",
    "q": "Ekrana ne yazılır?",
    "opts": [
     "Ayşe Yılmaz / 20",
     "Ayşe / Yılmaz / 20",
     "AyşeYılmaz20",
     "Derleme hatası",
     "Ayşe Yılmaz 20"
    ],
    "a": 0,
    "exp": "Ad ve soyad aralarında boşlukla yan yana, yaş alt satırda.",
    "code": "string ad = \"Ayşe\", soyad = \"Yılmaz\";\nint yas = 20;\nConsole.WriteLine(ad + \" \" + soyad);\nConsole.WriteLine(yas);"
   },
   {
    "type": "mc",
    "topic": "switch",
    "q": "switch genellikle ne zaman tercih edilir?",
    "opts": [
     "Bir değişkenin değerine göre çok seçenekli durumlarda",
     "Döngü gerektiğinde",
     "Değişken tanımlamak için",
     "Sadece iki seçenek olduğunda",
     "Tür dönüşümü için"
    ],
    "a": 0,
    "exp": "Slayt 2: daha çok seçimin olacağı durumlar."
   },
   {
    "type": "mc",
    "topic": "girdi",
    "q": "Ekrana ne yazılır?",
    "opts": [
     "Hiçbir şey",
     "5",
     "5 / 7",
     "Derleme hatası",
     "7"
    ],
    "a": 1,
    "exp": "// sonrası yorumdur, çalışmaz.",
    "code": "Console.WriteLine(5); // Console.WriteLine(6);\n/* Console.WriteLine(7); */"
   },
   {
    "type": "mc",
    "topic": "algoritma",
    "q": "Algoritmanın tanımı hangisidir?",
    "opts": [
     "Bir geliştirme ortamı (IDE)",
     "Kaynak kodu makine diline çeviren yazılım",
     "Bir programlama dili",
     "Bir problemi çözmek için gerekli sıralı mantıksal adımların tümü",
     "Bir değişken türü"
    ],
    "a": 3,
    "exp": "Algoritma problemin çözüm yoludur; başı ve sonu vardır."
   },
   {
    "type": "mc",
    "topic": "csharp",
    "q": "Derleyici (compiler) ne yapar?",
    "opts": [
     "Arayüz tasarlar",
     "Değişkenleri siler",
     "Programı Excel'e aktarır",
     "Kaynak kodu makine diline (0 ve 1) çevirir ve hataları bildirir",
     "Kodu internete yükler"
    ],
    "a": 3,
    "exp": "Hoca: iki kişi arasındaki tercüman gibidir."
   },
   {
    "type": "fill",
    "topic": "donusum",
    "q": "Boşluğu doldurun: kullanıcıdan sayı alın.",
    "code": "int sayi = Convert.____(Console.ReadLine());",
    "ans": [
     "ToInt32",
     "ToInt16",
     "ToInt64"
    ],
    "cs": true,
    "exp": "Convert.ToInt32 (slaytta ToInt16 da var)."
   },
   {
    "type": "fill",
    "topic": "while",
    "q": "Boşluğu doldurun: koşul doğru oldukça dönsün.",
    "code": "int i = 0;\n____ (i <= 10)\n{\n    Console.WriteLine(i);\n    i++;\n}",
    "ans": [
     "while"
    ],
    "cs": true,
    "exp": "while (koşul)."
   },
   {
    "type": "fill",
    "topic": "switch",
    "q": "Boşluğu doldurun: hiçbir case tutmazsa.",
    "code": "switch (islem)\n{\n    case 1: Console.Write(\"Toplama\"); break;\n    ____: Console.Write(\"Hatalı Giriş\"); break;\n}",
    "ans": [
     "default"
    ],
    "cs": true,
    "exp": "default."
   },
   {
    "type": "fill",
    "topic": "for",
    "q": "Boşluğu doldurun: toplama ekleyin.",
    "code": "toplam ____ i;",
    "ans": [
     "+="
    ],
    "cs": true,
    "exp": "toplam += i, toplam = toplam + i ile aynı."
   }
  ]
 }
];
window.TOPIC_QUESTIONS = {
 "algoritma": [
  {
   "type": "mc",
   "topic": "algoritma",
   "q": "Algoritmanın tanımı hangisidir?",
   "opts": [
    "Bir geliştirme ortamı (IDE)",
    "Kaynak kodu makine diline çeviren yazılım",
    "Bir programlama dili",
    "Bir problemi çözmek için gerekli sıralı mantıksal adımların tümü",
    "Bir değişken türü"
   ],
   "a": 3,
   "exp": "Algoritma problemin çözüm yoludur; başı ve sonu vardır."
  },
  {
   "type": "mc",
   "topic": "algoritma",
   "q": "Hangisi algoritma için **yanlıştır**?",
   "opts": [
    "Her adımda yapılacak iş açıkça belirtilir",
    "Algoritma bir programlama dilidir",
    "Adımlar sıralıdır",
    "Programlama dillerine yol gösterir",
    "Bir başlangıcı ve sonu vardır"
   ],
   "a": 1,
   "exp": "Slayt: \"Algoritma programlama dili değildir.\""
  },
  {
   "type": "mc",
   "topic": "algoritma",
   "q": "Akış şemasında **veri girişi** (a, b değişkenlerini almak) hangi şekille gösterilir?",
   "opts": [
    "Elips",
    "Daire",
    "Dikdörtgen",
    "Paralelkenar",
    "Baklava"
   ],
   "a": 3,
   "exp": "Elips başla/bitir, paralelkenar giriş, dikdörtgen işlem, baklava karar."
  },
  {
   "type": "mc",
   "topic": "algoritma",
   "q": "Akış şemasında `sonuc = a + b` gibi atama ve işlem adımı hangi şekildir?",
   "opts": [
    "Elips",
    "Baklava",
    "Ok",
    "Dikdörtgen",
    "Paralelkenar"
   ],
   "a": 3,
   "exp": "İşlem / atama dikdörtgen."
  },
  {
   "type": "mc",
   "topic": "algoritma",
   "q": "Lamba örneğinde \"Lambanın fişi takılı mı?\" sorusu hangi şekille çizilir?",
   "opts": [
    "Paralelkenar",
    "Baklava (karar)",
    "Dikdörtgen",
    "Elips",
    "Altı dalgalı belge"
   ],
   "a": 1,
   "exp": "Evet / Hayır çıkışlı karar adımı."
  },
  {
   "type": "mc",
   "topic": "algoritma",
   "q": "Akış şemasındaki başla ve bitir adımları hangi şekildir?",
   "opts": [
    "Paralelkenar",
    "Baklava",
    "Elips (oval)",
    "Altıgen",
    "Dikdörtgen"
   ],
   "a": 2,
   "exp": "BAŞLA ve BİTİR elips."
  },
  {
   "type": "fill",
   "topic": "algoritma",
   "q": "Boşluğu doldurun.",
   "code": "Algoritma bir programlama dili ____; programlama dillerine yol gösteren yöntemler dizisidir.",
   "ans": [
    "değildir",
    "degildir"
   ],
   "cs": false,
   "exp": "Algoritma dil değil, çözüm yolu."
  }
 ],
 "csharp": [
  {
   "type": "mc",
   "topic": "csharp",
   "q": "C# için hangisi doğrudur?",
   "opts": [
    "Sadece web sayfası tasarlamak için kullanılır",
    "Microsoft tarafından geliştirilmiş, nesne yönelimli, açık kaynak bir dildir",
    "Apple'ın kapalı kaynak dilidir",
    "Bir IDE'dir",
    "Makine dilidir"
   ],
   "a": 1,
   "exp": "C ve C++'tan türemiş, modern, nesne yönelimli."
  },
  {
   "type": "mc",
   "topic": "csharp",
   "q": "Derleyici (compiler) ne yapar?",
   "opts": [
    "Arayüz tasarlar",
    "Değişkenleri siler",
    "Programı Excel'e aktarır",
    "Kaynak kodu makine diline (0 ve 1) çevirir ve hataları bildirir",
    "Kodu internete yükler"
   ],
   "a": 3,
   "exp": "Hoca: iki kişi arasındaki tercüman gibidir."
  },
  {
   "type": "mc",
   "topic": "csharp",
   "q": "Derleyiciler olmasaydı ne olurdu?",
   "opts": [
    "Programlar daha hızlı yazılırdı",
    "Değişken tanımlanamazdı ama sorun olmazdı",
    "Visual Studio gerekmezdi, başka fark olmazdı",
    "Hiçbir şey değişmezdi",
    "Yazılımcılar her şeyi makine dilinde yazmak zorunda kalırdı"
   ],
   "a": 4,
   "exp": "Slayt 7."
  },
  {
   "type": "mc",
   "topic": "csharp",
   "q": "Visual Studio nedir?",
   "opts": [
    "Bir işletim sistemi",
    "Microsoft'un entegre geliştirme ortamı (IDE)",
    "Bir derleyici türü",
    "Bir programlama dili",
    "Bir veritabanı"
   ],
   "a": 1,
   "exp": "Hem kod yazıp hem yönetmeyi sağlar."
  },
  {
   "type": "mc",
   "topic": "csharp",
   "q": "IDE kısaltmasının açılımı hangisidir?",
   "opts": [
    "Integrated Data Element",
    "Integrated Development Environment",
    "Internet Data Exchange",
    "Internal Debug Editor",
    "Interface Design Engine"
   ],
   "a": 1,
   "exp": "Entegre geliştirme ortamı."
  },
  {
   "type": "mc",
   "topic": "csharp",
   "q": "Hangisi slayttaki \"Visual Studio ile neler yapılır?\" listesinde **yoktur**?",
   "opts": [
    "Kod düzenleme ve hata ayıklama",
    "Eklentilerle genişletme",
    "Bilgisayarın donanımını onarmak",
    "Arayüz tasarlama",
    "Diğer dillerle entegre çalışma"
   ],
   "a": 2,
   "exp": "Liste: kod düzenleme/hata ayıklama, diğer dillerle entegre, arayüz tasarlama, eklentiler."
  }
 ],
 "girdi": [
  {
   "type": "mc",
   "topic": "girdi",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "Derleme hatası",
    "1 2",
    "1 / 2",
    "3",
    "12"
   ],
   "a": 4,
   "exp": "Write satır başı yapmaz.",
   "code": "Console.Write(1);\nConsole.Write(2);"
  },
  {
   "type": "mc",
   "topic": "girdi",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "3",
    "1 2",
    "1 / 2",
    "Derleme hatası",
    "12"
   ],
   "a": 2,
   "exp": "WriteLine her yazdıktan sonra alt satıra geçer.",
   "code": "Console.WriteLine(1);\nConsole.WriteLine(2);"
  },
  {
   "type": "mc",
   "topic": "girdi",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "A / BC",
    "ABC",
    "AB C",
    "AB / C",
    "A / B / C"
   ],
   "a": 3,
   "exp": "İlk WriteLine B'den sonra satır atlar, C yeni satırda.",
   "code": "Console.Write(\"A\");\nConsole.WriteLine(\"B\");\nConsole.Write(\"C\");"
  },
  {
   "type": "mc",
   "topic": "girdi",
   "q": "`Console.ReadLine()` hangi türde değer döndürür?",
   "opts": [
    "bool",
    "double",
    "int",
    "string",
    "char"
   ],
   "a": 3,
   "exp": "Girilen sayı bile metindir; sayıya çevrilmelidir."
  },
  {
   "type": "mc",
   "topic": "girdi",
   "q": "`Console.Read()` ile `Console.ReadLine()` farkı nedir?",
   "opts": [
    "Read sayı, ReadLine metin okur",
    "İkisi aynıdır",
    "Read ilk karakteri, ReadLine satırın tamamını okur",
    "Read ekrana yazar",
    "ReadLine sadece int okur"
   ],
   "a": 2,
   "exp": "Slayt 15."
  },
  {
   "type": "mc",
   "topic": "girdi",
   "q": "Metot için hangisi doğrudur?",
   "opts": [
    "Derleyicinin adıdır",
    "Sadece yorum satırıdır",
    "Bir döngü çeşididir",
    "Bir işlemi yapmak için tasarlanmış kodlar topluluğudur",
    "Bir değişken türüdür"
   ],
   "a": 3,
   "exp": "Aynı kodu tekrar tekrar yazmak yerine metot hazırlanır."
  },
  {
   "type": "mc",
   "topic": "girdi",
   "q": "Çok satırlı açıklama (yorum) nasıl yazılır?",
   "opts": [
    "# ... #",
    "/* ... */",
    "''' ... '''",
    "<!-- ... -->",
    "// ... //"
   ],
   "a": 1,
   "exp": "Tek satır //, çok satır /* */."
  },
  {
   "type": "mc",
   "topic": "girdi",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "Hiçbir şey",
    "5",
    "5 / 7",
    "Derleme hatası",
    "7"
   ],
   "a": 1,
   "exp": "// sonrası yorumdur, çalışmaz.",
   "code": "Console.WriteLine(5); // Console.WriteLine(6);\n/* Console.WriteLine(7); */"
  },
  {
   "type": "fill",
   "topic": "girdi",
   "q": "Boşluğu doldurun: yazdıktan sonra alt satıra geçilsin.",
   "code": "Console.____(\"Merhaba\");",
   "ans": [
    "WriteLine"
   ],
   "cs": true,
   "exp": "WriteLine satır başı yapar.",
   "whyFill": {
    "write": "Write satır başı yapmaz."
   }
  },
  {
   "type": "fill",
   "topic": "girdi",
   "q": "Boşluğu doldurun: kullanıcının girdiği satırı okuyun.",
   "code": "string ad = Console.____();",
   "ans": [
    "ReadLine"
   ],
   "cs": true,
   "exp": "ReadLine satırı string olarak okur."
  }
 ],
 "degisken": [
  {
   "type": "mc",
   "topic": "degisken",
   "q": "Hangisi geçerli bir değişken adıdır?",
   "opts": [
    "int",
    "deneme123",
    "123deneme",
    "sınav notu",
    "ad-soyad"
   ],
   "a": 1,
   "exp": "İlk karakter rakam olamaz, boşluk/tire olmaz, anahtar kelime olmaz."
  },
  {
   "type": "mc",
   "topic": "degisken",
   "q": "`123deneme` adında bir değişken tanımlanırsa ne olur?",
   "opts": [
    "Derleme hatası",
    "Çalışır",
    "Uyarı verir ama çalışır",
    "Değişken adı otomatik düzeltilir"
   ],
   "a": 0,
   "exp": "İlk karakter rakam olamaz."
  },
  {
   "type": "mc",
   "topic": "degisken",
   "q": "C# büyük–küçük harf duyarlılığı için hangisi doğrudur?",
   "opts": [
    "\"deneme\" ve \"Deneme\" farklı değişkenlerdir",
    "İkisi aynı değişkendir",
    "Sadece string'lerde fark eder",
    "Büyük harf kullanılamaz",
    "Sadece metot adlarında fark eder"
   ],
   "a": 0,
   "exp": "C# büyük–küçük harfe duyarlıdır."
  },
  {
   "type": "mc",
   "topic": "degisken",
   "q": "Birden fazla kelimeden oluşan değişken adı slayttaki öneriye göre nasıl yazılır?",
   "opts": [
    "1sinavNotu",
    "sinav_notu_",
    "Sinav Notu",
    "sinavNotu (camelCase)",
    "SINAVNOTU"
   ],
   "a": 3,
   "exp": "İlk kelime küçük, sonraki kelimelerin baş harfi büyük."
  },
  {
   "type": "mc",
   "topic": "degisken",
   "q": "Tek bir karakter tutan tür ve atama biçimi hangisidir?",
   "opts": [
    "char karakter = \"a\";",
    "string karakter = 'a';",
    "int karakter = a;",
    "char karakter = 'a';",
    "bool karakter = a;"
   ],
   "a": 3,
   "exp": "char tek tırnak, string çift tırnak."
  },
  {
   "type": "mc",
   "topic": "degisken",
   "q": "`char c = \"a\";` satırı ne olur?",
   "opts": [
    "Derleme hatası",
    "c = a olur",
    "c = 97 olur",
    "Uyarı ile çalışır"
   ],
   "a": 0,
   "exp": "char tek tırnak ister; \"a\" string'dir."
  },
  {
   "type": "mc",
   "topic": "degisken",
   "q": "int türü bellekte kaç byte yer tutar?",
   "opts": [
    "4",
    "16",
    "8",
    "2",
    "1"
   ],
   "a": 0,
   "exp": "int 4, float 4, double 8, decimal 16 byte."
  },
  {
   "type": "mc",
   "topic": "degisken",
   "q": "Hangi türün bellekte kapladığı alan en büyüktür (slayta göre)?",
   "opts": [
    "float (4 byte)",
    "int (4 byte)",
    "double (8 byte)",
    "decimal (16 byte)",
    "bool"
   ],
   "a": 3,
   "exp": "decimal en hassas reel sayı türü."
  },
  {
   "type": "mc",
   "topic": "degisken",
   "q": "`float sayi = 5,9;` satırı ne olur?",
   "opts": [
    "Derleme hatası",
    "sayi 5,9 olur",
    "sayi 5 olur",
    "sayi 9 olur"
   ],
   "a": 0,
   "exp": "Kodda ondalık ayırıcı nokta; float için 5.9f yazılır."
  },
  {
   "type": "mc",
   "topic": "degisken",
   "q": "Ekrana ne yazılır? (Türkçe Windows)",
   "opts": [
    "75",
    "7",
    "Derleme hatası",
    "7.5",
    "7,5"
   ],
   "a": 4,
   "exp": "Kodda nokta, Türkçe sistemde ekranda virgül.",
   "code": "double d = 7.5;\nConsole.WriteLine(d);"
  },
  {
   "type": "mc",
   "topic": "degisken",
   "q": "bool türü hangi değerleri alır?",
   "opts": [
    "0 ile 255 arası",
    "Tek karakter",
    "true / false",
    "Herhangi bir metin",
    "Ondalıklı sayılar"
   ],
   "a": 2,
   "exp": "Mantıksal tür."
  },
  {
   "type": "mc",
   "topic": "degisken",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "Ayşe Yılmaz / 20",
    "Ayşe / Yılmaz / 20",
    "AyşeYılmaz20",
    "Derleme hatası",
    "Ayşe Yılmaz 20"
   ],
   "a": 0,
   "exp": "Ad ve soyad aralarında boşlukla yan yana, yaş alt satırda.",
   "code": "string ad = \"Ayşe\", soyad = \"Yılmaz\";\nint yas = 20;\nConsole.WriteLine(ad + \" \" + soyad);\nConsole.WriteLine(yas);"
  },
  {
   "type": "fill",
   "topic": "degisken",
   "q": "Boşluğu doldurun: tam sayı tutan değişken.",
   "code": "____ sayi = 5;",
   "ans": [
    "int"
   ],
   "cs": true,
   "exp": "Tam sayı int."
  },
  {
   "type": "fill",
   "topic": "degisken",
   "q": "Boşluğu doldurun: metin tutan değişken.",
   "code": "____ metin = \"Örnek metin girişi\";",
   "ans": [
    "string"
   ],
   "cs": true,
   "exp": "Metin string, çift tırnakla."
  }
 ],
 "operator": [
  {
   "type": "mc",
   "topic": "operator",
   "q": "`Console.WriteLine(8 + 2 / 4 + 1);` ne yazar?",
   "opts": [
    "3,5",
    "10",
    "3",
    "9",
    "9,5"
   ],
   "a": 3,
   "exp": "2/4 tam sayı bölmede 0; 8 + 0 + 1 = 9.",
   "why": {
    "2": "(8+2)/(4+1) değil; önce bölme yapılır.",
    "4": "İki int bölünürse ondalık kısım atılır: 2/4 = 0."
   },
   "src": "Slayt 29"
  },
  {
   "type": "mc",
   "topic": "operator",
   "q": "`Console.WriteLine((5 + 4) / 3);` ne yazar?",
   "opts": [
    "1",
    "5",
    "3",
    "6",
    "9"
   ],
   "a": 2,
   "exp": "Önce parantez: 9 / 3 = 3.",
   "src": "Slayt 29"
  },
  {
   "type": "mc",
   "topic": "operator",
   "q": "`Console.WriteLine(8 % 2 + 1);` ne yazar?",
   "opts": [
    "1",
    "0",
    "9",
    "5",
    "4"
   ],
   "a": 0,
   "exp": "8 % 2 = 0, 0 + 1 = 1.",
   "src": "Slayt 29"
  },
  {
   "type": "mc",
   "topic": "operator",
   "q": "`Console.WriteLine(8 * 2 % 5);` ne yazar?",
   "opts": [
    "1",
    "0",
    "3",
    "6",
    "16"
   ],
   "a": 0,
   "exp": "* ve % aynı öncelikte, soldan sağa: 16 % 5 = 1.",
   "src": "Slayt 29"
  },
  {
   "type": "mc",
   "topic": "operator",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "1,75",
    "3",
    "1",
    "28",
    "11"
   ],
   "a": 1,
   "exp": "7 % 4 = 3 (kalan).",
   "code": "int x = 7;\nint y = 4;\nint sonuc = x % y;\nConsole.WriteLine(sonuc);",
   "src": "Slayt 30"
  },
  {
   "type": "mc",
   "topic": "operator",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "20",
    "1",
    "9",
    "54",
    "0"
   ],
   "a": 0,
   "exp": "5 * 4 = 20.",
   "code": "int a = 5;\nint b = 4;\nint sonuc = a * b;\nConsole.WriteLine(sonuc);",
   "src": "Slayt 30"
  },
  {
   "type": "mc",
   "topic": "operator",
   "q": "`Console.WriteLine(7 / 2);` ne yazar?",
   "opts": [
    "3,5",
    "3",
    "4",
    "3.5",
    "1"
   ],
   "a": 1,
   "exp": "İki tam sayı bölünürse sonuç tam sayı."
  },
  {
   "type": "mc",
   "topic": "operator",
   "q": "`Console.WriteLine(\"Sonuc:\" + 4 + 5);` ne yazar?",
   "opts": [
    "9Sonuc",
    "Sonuc:45",
    "Sonuc:4 5",
    "Derleme hatası",
    "Sonuc:9"
   ],
   "a": 1,
   "exp": "Metinden sonra gelen + birleştirme yapar."
  },
  {
   "type": "mc",
   "topic": "operator",
   "q": "`Console.WriteLine(4 + 5 + \"Sonuc\");` ne yazar?",
   "opts": [
    "9Sonuc",
    "Sonuc9",
    "Derleme hatası",
    "45Sonuc",
    "Sonuc45"
   ],
   "a": 0,
   "exp": "Soldan sağa: önce 4+5=9, sonra metinle birleşir."
  },
  {
   "type": "mc",
   "topic": "operator",
   "q": "`Console.WriteLine(\"Sonuc:\" + (4 + 5));` ne yazar?",
   "opts": [
    "9",
    "Sonuc:45",
    "Sonuc:4+5",
    "Sonuc:9",
    "Derleme hatası"
   ],
   "a": 3,
   "exp": "Parantez önce toplanır."
  },
  {
   "type": "mc",
   "topic": "operator",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "8 / 24",
    "6 / 18",
    "7 / 7",
    "7 / 21",
    "5 / 15"
   ],
   "a": 3,
   "exp": "5 → ++ 6 → +=1 7 → +1 8 → -- 7; sonra 7*3 = 21.",
   "code": "int sayi = 5;\nsayi++;\nsayi += 1;\nsayi = sayi + 1;\nsayi--;\nConsole.WriteLine(sayi);\nsayi *= 3;\nConsole.WriteLine(sayi);"
  },
  {
   "type": "mc",
   "topic": "operator",
   "q": "Hangisi `sayi` değişkenini 1 artırmaz?",
   "opts": [
    "++sayi;",
    "sayi =+ 1;",
    "sayi += 1;",
    "sayi++;",
    "sayi = sayi + 1;"
   ],
   "a": 1,
   "exp": "`=+ 1` aslında `sayi = +1` demektir (sayi 1 olur).",
   "why": {
    "1": ""
   }
  },
  {
   "type": "mc",
   "topic": "operator",
   "q": "`&&` operatörünün sonucu ne zaman true olur?",
   "opts": [
    "Şartlardan biri doğru olduğunda",
    "İki şart da doğru olduğunda",
    "Her zaman",
    "İki şart da yanlış olduğunda",
    "Hiçbir zaman"
   ],
   "a": 1,
   "exp": "&& ve: ikisi de. || veya: en az biri."
  },
  {
   "type": "mc",
   "topic": "operator",
   "q": "`||` operatörünün sonucu ne zaman true olur?",
   "opts": [
    "Şartlardan en az biri doğru olduğunda",
    "Hiçbir zaman",
    "Sadece ikisi de doğru olduğunda",
    "İkisi de yanlış olduğunda",
    "Sadece ilk şart doğruysa"
   ],
   "a": 0,
   "exp": "Veya: biri yeterli."
  },
  {
   "type": "mc",
   "topic": "operator",
   "q": "\"Eşit değildir\" ilişkisel operatörü hangisidir?",
   "opts": [
    "=!",
    "!=",
    "=/=",
    "<>",
    "==!"
   ],
   "a": 1,
   "exp": "C#'ta eşit değil !=."
  },
  {
   "type": "mc",
   "topic": "operator",
   "q": "`if (x = 5)` yazılırsa (x int) ne olur?",
   "opts": [
    "Derleme hatası",
    "x 5 ise koşul doğru olur",
    "Her zaman true",
    "Her zaman false"
   ],
   "a": 0,
   "exp": "Tek = atamadır; koşul için == kullanılır."
  },
  {
   "type": "fill",
   "topic": "operator",
   "q": "Boşluğu doldurun: bölümden kalanı bulun.",
   "code": "Console.WriteLine(9 ____ 5);",
   "ans": [
    "%"
   ],
   "cs": true,
   "exp": "Mod operatörü %: 9 % 5 = 4."
  },
  {
   "type": "fill",
   "topic": "operator",
   "q": "Boşluğu doldurun: sayi'yi 1 azaltın.",
   "code": "sayi____;",
   "ans": [
    "--"
   ],
   "cs": true,
   "exp": "Azaltma: sayi--, sayi -= 1, sayi = sayi - 1."
  },
  {
   "type": "fill",
   "topic": "operator",
   "q": "Boşluğu doldurun: iki şart birlikte sağlansın (ve).",
   "code": "if (deger >= 0 ____ deger <= 100)",
   "ans": [
    "&&"
   ],
   "cs": true,
   "exp": "ve: &&."
  }
 ],
 "donusum": [
  {
   "type": "mc",
   "topic": "donusum",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "Derleme hatası",
    "3",
    "1 2",
    "12",
    "\"1\"\"2\""
   ],
   "a": 3,
   "exp": "İki string + ile yan yana eklenir.",
   "code": "string a = \"1\";\nstring b = \"2\";\nConsole.WriteLine(a + b);",
   "src": "Slayt 35"
  },
  {
   "type": "mc",
   "topic": "donusum",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "12",
    "Derleme hatası",
    "1",
    "3",
    "2"
   ],
   "a": 3,
   "exp": "int.Parse ile sayıya çevrilip toplanır.",
   "code": "string a = \"1\";\nstring b = \"2\";\nint x = int.Parse(a);\nint y = int.Parse(b);\nConsole.WriteLine(x + y);",
   "src": "Slayt 35"
  },
  {
   "type": "mc",
   "topic": "donusum",
   "q": "Kullanıcıdan alınan değeri int'e çevirmenin doğru yolu hangisidir?",
   "opts": [
    "string s = Convert.ToInt32();",
    "int s = (string)Console.ReadLine();",
    "int s = Console.ReadLine();",
    "int s = Convert.ToInt32(Console.ReadLine());",
    "int s = Console.Read.ToInt();"
   ],
   "a": 3,
   "exp": "ReadLine string verir, Convert ile çevrilir."
  },
  {
   "type": "mc",
   "topic": "donusum",
   "q": "`int s = Console.ReadLine();` satırı ne olur?",
   "opts": [
    "Derleme hatası",
    "Girilen sayı s'ye atanır",
    "s = 0 olur",
    "Çalışma zamanında uyarı"
   ],
   "a": 0,
   "exp": "string, int'e otomatik dönmez."
  },
  {
   "type": "mc",
   "topic": "donusum",
   "q": "Ekrana ne yazılır? (girdi: 21)",
   "opts": [
    "21",
    "2121",
    "42",
    "Derleme hatası",
    "212"
   ],
   "a": 2,
   "exp": "Girilen değer int'e çevrilip 2 ile çarpılıyor.",
   "code": "int sayi = Convert.ToInt32(Console.ReadLine());\nConsole.WriteLine(sayi * 2);"
  },
  {
   "type": "mc",
   "topic": "donusum",
   "q": "Ekrana ne yazılır? (girdi: 5)",
   "opts": [
    "Derleme hatası",
    "5",
    "55",
    "25",
    "10"
   ],
   "a": 2,
   "exp": "Çevrilmeden toplanınca string + string = birleştirme.",
   "code": "string s = Console.ReadLine();\nConsole.WriteLine(s + s);"
  },
  {
   "type": "mc",
   "topic": "donusum",
   "q": "Sayıyı metne çeviren ifade hangisidir?",
   "opts": [
    "25.ToString()",
    "Convert.ToInt32(\"25\")",
    "string(25)",
    "Console.ReadLine(25)",
    "int.Parse(25)"
   ],
   "a": 0,
   "exp": "ToString() metne çevirir."
  },
  {
   "type": "mc",
   "topic": "donusum",
   "q": "`Convert.ToInt32(\"abc\")` çalıştırılınca ne olur?",
   "opts": [
    "Çalışma zamanında hata (FormatException)",
    "abc döner",
    "0 döner",
    "-1 döner",
    "Derleme hatası"
   ],
   "a": 0,
   "exp": "Sayıya çevrilemeyen metin hata verir."
  },
  {
   "type": "fill",
   "topic": "donusum",
   "q": "Boşluğu doldurun: string'i int'e çevirin.",
   "code": "int x = int.____(\"25\");",
   "ans": [
    "Parse"
   ],
   "cs": true,
   "exp": "int.Parse metni sayıya çevirir."
  },
  {
   "type": "fill",
   "topic": "donusum",
   "q": "Boşluğu doldurun: kullanıcıdan sayı alın.",
   "code": "int sayi = Convert.____(Console.ReadLine());",
   "ans": [
    "ToInt32",
    "ToInt16",
    "ToInt64"
   ],
   "cs": true,
   "exp": "Convert.ToInt32 (slaytta ToInt16 da var)."
  }
 ],
 "kosul": [
  {
   "type": "mc",
   "topic": "kosul",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "Hiçbir şey",
    "Tek",
    "Tek / Çift",
    "Çift",
    "Derleme hatası"
   ],
   "a": 1,
   "exp": "7 % 2 = 1, koşul yanlış, else çalışır.",
   "code": "int sayi = 7;\nif (sayi % 2 == 0)\n    Console.WriteLine(\"Çift\");\nelse\n    Console.WriteLine(\"Tek\");"
  },
  {
   "type": "mc",
   "topic": "kosul",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "Hiçbir şey",
    "Pozitif",
    "Negatif",
    "Sıfır",
    "Negatif / Sıfır"
   ],
   "a": 2,
   "exp": "İlk doğru koşul çalışır: -3 < 0.",
   "code": "int sayi = -3;\nif (sayi > 0)\n    Console.WriteLine(\"Pozitif\");\nelse if (sayi < 0)\n    Console.WriteLine(\"Negatif\");\nelse\n    Console.WriteLine(\"Sıfır\");"
  },
  {
   "type": "mc",
   "topic": "kosul",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "68 / Kaldınız",
    "65 / DD",
    "68 / DD",
    "68 / CC",
    "72 / CC"
   ],
   "a": 2,
   "exp": "50·0,4 + 80·0,6 = 20 + 48 = 68 → DD.",
   "code": "int vize = 50, final = 80;\ndouble ort = vize * 0.4 + final * 0.6;\nConsole.WriteLine(ort);\nif (ort < 60) Console.WriteLine(\"Kaldınız\");\nelse if (ort < 70) Console.WriteLine(\"DD\");\nelse if (ort < 80) Console.WriteLine(\"CC\");\nelse if (ort < 90) Console.WriteLine(\"BB\");\nelse Console.WriteLine(\"AA\");"
  },
  {
   "type": "mc",
   "topic": "kosul",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "B",
    "B / C",
    "C",
    "A / B / C",
    "A / C"
   ],
   "a": 1,
   "exp": "if'ten sonra süslü parantez yok: sadece ilk satır koşula bağlı, C her zaman yazılır.",
   "code": "int x = 3;\nif (x > 5)\n    Console.WriteLine(\"A\");\nelse\n    Console.WriteLine(\"B\");\nConsole.WriteLine(\"C\");"
  },
  {
   "type": "mc",
   "topic": "kosul",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "Doğru / Yanlış",
    "Doğru",
    "Derleme hatası",
    "Hiçbir şey",
    "Yanlış"
   ],
   "a": 1,
   "exp": "100 >= 0 ve 100 <= 100 → ikisi de doğru (dahil).",
   "code": "int deger = 100;\nif (deger >= 0 && deger <= 100)\n    Console.WriteLine(\"Doğru\");\nelse\n    Console.WriteLine(\"Yanlış\");"
  },
  {
   "type": "mc",
   "topic": "kosul",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "Derleme hatası",
    "Doğru Giriş / Kullanıcı adı veya şifre hatalı",
    "Doğru Giriş",
    "Kullanıcı adı veya şifre hatalı",
    "Hiçbir şey"
   ],
   "a": 3,
   "exp": "&& için iki şart da doğru olmalı; şifre \"123\" farklı.",
   "code": "string kadi = \"ekonomi\", sifre = \"123\";\nif (kadi == \"ekonomi\" && sifre == \"1234\")\n    Console.WriteLine(\"Doğru Giriş\");\nelse\n    Console.WriteLine(\"Kullanıcı adı veya şifre hatalı\");"
  },
  {
   "type": "mc",
   "topic": "kosul",
   "q": "if veya else'ten sonra **tek satır** yazılacaksa süslü parantez için ne söylenir?",
   "opts": [
    "Köşeli parantez kullanılır",
    "Noktalı virgül yerine geçer",
    "Zorunludur",
    "Gerek yoktur",
    "Sadece else için zorunludur"
   ],
   "a": 3,
   "exp": "Slayt 42."
  },
  {
   "type": "mc",
   "topic": "kosul",
   "q": "Ekrana ne yazılır? (girdi: 70)",
   "opts": [
    "Derleme hatası",
    "70",
    "50'den büyük bir değer girişi yaptınız",
    "50'den küçük bir değer girişi yaptınız",
    "Hiçbir şey"
   ],
   "a": 2,
   "exp": "70 > 50.",
   "code": "int sayi = Convert.ToInt32(Console.ReadLine());\nif (sayi > 50)\n    Console.WriteLine(\"50'den büyük bir değer girişi yaptınız\");\nelse\n    Console.WriteLine(\"50'den küçük bir değer girişi yaptınız\");"
  },
  {
   "type": "fill",
   "topic": "kosul",
   "q": "Boşluğu doldurun: sayı çift mi?",
   "code": "if (sayi ____ 2 == 0)",
   "ans": [
    "%"
   ],
   "cs": true,
   "exp": "Kalan 0 ise çift."
  },
  {
   "type": "fill",
   "topic": "kosul",
   "q": "Boşluğu doldurun: ikinci koşul.",
   "code": "if (sayi > 0) Console.Write(\"Pozitif\");\n____ (sayi < 0) Console.Write(\"Negatif\");\nelse Console.Write(\"Sıfır\");",
   "ans": [
    "else if"
   ],
   "cs": true,
   "exp": "Birden çok koşul else if ile."
  }
 ],
 "switch": [
  {
   "type": "mc",
   "topic": "switch",
   "q": "Ekrana ne yazılır? (girdiler: 12, 4, 3)",
   "opts": [
    "8",
    "48",
    "16",
    "3",
    "Hatalı Giriş"
   ],
   "a": 1,
   "exp": "İşlem 3 = çarpma: 12 * 4.",
   "code": "int sayi1 = Convert.ToInt32(Console.ReadLine());\nint sayi2 = Convert.ToInt32(Console.ReadLine());\nint islem = Convert.ToInt32(Console.ReadLine());\nswitch (islem)\n{\n    case 1: Console.Write(sayi1 + sayi2); break;\n    case 2: Console.Write(sayi1 - sayi2); break;\n    case 3: Console.Write(sayi1 * sayi2); break;\n    case 4: Console.Write(sayi1 / sayi2); break;\n    default: Console.Write(\"Hatalı Giriş\"); break;\n}"
  },
  {
   "type": "mc",
   "topic": "switch",
   "q": "Aynı programda girdiler 12, 4, 9 olursa ne yazılır?",
   "opts": [
    "3",
    "Hiçbir şey",
    "Hatalı Giriş",
    "Derleme hatası",
    "48"
   ],
   "a": 2,
   "exp": "Hiçbir case tutmayınca default."
  },
  {
   "type": "mc",
   "topic": "switch",
   "q": "switch yapısında `default` ne işe yarar?",
   "opts": [
    "Hiçbir case tutmazsa çalışır (if'teki else gibi)",
    "Her durumda en başta çalışır",
    "İlk case'i seçer",
    "Döngüyü bitirir",
    "Değişkeni sıfırlar"
   ],
   "a": 0,
   "exp": "Slayt: else ile aynı işlevde."
  },
  {
   "type": "mc",
   "topic": "switch",
   "q": "switch yapısında `break` ne işe yarar?",
   "opts": [
    "Koşulu tersine çevirir",
    "Programı kapatır",
    "Bir sonraki case'e geçer",
    "switch'ten çıkıp sonraki adıma geçirir",
    "Değişken tanımlar"
   ],
   "a": 3,
   "exp": "Slayt 3."
  },
  {
   "type": "mc",
   "topic": "switch",
   "q": "C#'ta bir case'in sonunda break unutulursa (case içinde kod varken) ne olur?",
   "opts": [
    "Derleme hatası",
    "Sonraki case de çalışır",
    "default çalışır",
    "Hiçbir şey olmaz"
   ],
   "a": 0,
   "exp": "C# bir case'ten diğerine düşmeye izin vermez."
  },
  {
   "type": "mc",
   "topic": "switch",
   "q": "switch genellikle ne zaman tercih edilir?",
   "opts": [
    "Bir değişkenin değerine göre çok seçenekli durumlarda",
    "Döngü gerektiğinde",
    "Değişken tanımlamak için",
    "Sadece iki seçenek olduğunda",
    "Tür dönüşümü için"
   ],
   "a": 0,
   "exp": "Slayt 2: daha çok seçimin olacağı durumlar."
  },
  {
   "type": "mc",
   "topic": "switch",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "Derleme hatası",
    "Hafta içi / Hafta sonu",
    "Hafta sonu",
    "Hafta içi",
    "Geçersiz"
   ],
   "a": 3,
   "exp": "Boş case'ler alt alta yazılabilir; 3 → hafta içi.",
   "code": "int gun = 3;\nswitch (gun)\n{\n    case 1:\n    case 2:\n    case 3:\n    case 4:\n    case 5:\n        Console.Write(\"Hafta içi\");\n        break;\n    case 6:\n    case 7:\n        Console.Write(\"Hafta sonu\");\n        break;\n    default:\n        Console.Write(\"Geçersiz\");\n        break;\n}"
  },
  {
   "type": "fill",
   "topic": "switch",
   "q": "Boşluğu doldurun: hiçbir case tutmazsa.",
   "code": "switch (islem)\n{\n    case 1: Console.Write(\"Toplama\"); break;\n    ____: Console.Write(\"Hatalı Giriş\"); break;\n}",
   "ans": [
    "default"
   ],
   "cs": true,
   "exp": "default."
  },
  {
   "type": "fill",
   "topic": "switch",
   "q": "Boşluğu doldurun: case'ten çıkılsın.",
   "code": "case 2:\n    Console.Write(sayi1 - sayi2);\n    ____;",
   "ans": [
    "break"
   ],
   "cs": true,
   "exp": "Her case break ile biter."
  }
 ],
 "for": [
  {
   "type": "mc",
   "topic": "for",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "10",
    "0",
    "55",
    "56",
    "45"
   ],
   "a": 2,
   "exp": "0 + 1 + ... + 10 = 55.",
   "code": "int toplam = 0;\nfor (int i = 0; i <= 10; i++)\n{\n    toplam = toplam + i;\n}\nConsole.WriteLine(toplam);",
   "src": "Slayt PT13-12"
  },
  {
   "type": "mc",
   "topic": "for",
   "q": "`for (int i = 0; i < 10; i++)` döngüsü kaç kez çalışır?",
   "opts": [
    "0",
    "Sonsuz",
    "11",
    "10",
    "9"
   ],
   "a": 3,
   "exp": "i = 0, 1, …, 9.",
   "why": {
    "2": "< 10, 10'u dahil etmez; 11 kez çalışan <= 10 olurdu."
   }
  },
  {
   "type": "mc",
   "topic": "for",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "0 2 4 6 8 10",
    "10 8 6 4 2 0",
    "10 8 6 4 2",
    "10 9 8 7 6 5 4 3 2 1 0",
    "Hiçbir şey"
   ],
   "a": 1,
   "exp": "i 10'dan başlar, 2'şer azalır, 0 dahil.",
   "code": "for (int i = 10; i >= 0; i -= 2)\n    Console.Write(i + \" \");"
  },
  {
   "type": "mc",
   "topic": "for",
   "q": "Ekrana ne yazılır? (girdiler: 4, 2, 7, 10, 12)",
   "opts": [
    "Tek Adet:3 / Çift Adet:1",
    "Tek Adet:0 / Çift Adet:4",
    "Tek Adet:1 / Çift Adet:3",
    "Tek Adet:2 / Çift Adet:2",
    "Tek Adet:1 / Çift Adet:4"
   ],
   "a": 2,
   "exp": "İlk girdi adet (4); sayılar 2, 7, 10, 12: 1 tek, 3 çift.",
   "code": "int cift = 0;\nint tek = 0;\nint deger = Convert.ToInt32(Console.ReadLine());\nfor (int i = 1; i <= deger; i++)\n{\n    int sayi = Convert.ToInt32(Console.ReadLine());\n    if (sayi % 2 == 0)\n        cift++;\n    else\n        tek++;\n}\nConsole.WriteLine(\"Tek Adet:\" + tek);\nConsole.Write(\"Çift Adet:\" + cift);",
   "why": {
    "0": "İlk girdi (4) kaç sayı girileceğidir, sayılmaz."
   }
  },
  {
   "type": "mc",
   "topic": "for",
   "q": "for döngüsünün üç bölümü sırasıyla hangileridir?",
   "opts": [
    "Başlangıç; koşul; artırma",
    "Koşul; başlangıç; artırma",
    "Artırma; koşul; başlangıç",
    "Başlangıç; artırma; koşul",
    "Tür; ad; değer"
   ],
   "a": 0,
   "exp": "for (int i = 0; i < 10; i++)."
  },
  {
   "type": "mc",
   "topic": "for",
   "q": "for döngüsündeki `i` değişkenine slaytta ne ad verilir?",
   "opts": [
    "Sabit",
    "Kontrol değişkeni",
    "Metot",
    "Dizi",
    "Parametre"
   ],
   "a": 1,
   "exp": "Sayaç görevi görür."
  },
  {
   "type": "mc",
   "topic": "for",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "55",
    "Derleme hatası",
    "0",
    "10"
   ],
   "a": 2,
   "exp": "toplam döngünün içinde tanımlanınca her turda sıfırlanır; ayrıca dışarıda erişilemez. Burada dışarıdaki toplam hiç değişmez.",
   "code": "int toplam = 0;\nfor (int i = 0; i <= 10; i++)\n{\n    int t = 0;\n    t = t + i;\n}\nConsole.WriteLine(toplam);"
  },
  {
   "type": "mc",
   "topic": "for",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "1 3 5 7 9",
    "1 3 5",
    "1 2 3 4 5 6",
    "1 3 5 7",
    "2 4 6"
   ],
   "a": 1,
   "exp": "7'de break döngüyü bitirir; çiftler continue ile atlanır.",
   "code": "for (int i = 1; i <= 10; i++)\n{\n    if (i == 7) break;\n    if (i % 2 == 0) continue;\n    Console.Write(i + \" \");\n}"
  },
  {
   "type": "fill",
   "topic": "for",
   "q": "Boşluğu doldurun: 0–10 dahil.",
   "code": "for (int i = 0; i ____ 10; i++)\n    Console.WriteLine(i);",
   "ans": [
    "<="
   ],
   "cs": true,
   "exp": "10 dahil olsun diye <=.",
   "whyFill": {
    "<": "< 10 son değeri (10) dahil etmez."
   }
  },
  {
   "type": "fill",
   "topic": "for",
   "q": "Boşluğu doldurun: toplama ekleyin.",
   "code": "toplam ____ i;",
   "ans": [
    "+="
   ],
   "cs": true,
   "exp": "toplam += i, toplam = toplam + i ile aynı."
  },
  {
   "type": "code",
   "topic": "for",
   "title": "Kullanıcının belirlediği kadar sayıyı toplama",
   "q": "Hocanın slaydındaki programı tamamlayın.",
   "code": "int toplam = 0;\nint deger = Convert.ToInt32(Console.ReadLine());\n{{1}} (int i = 1; i {{2}} deger; i++)\n{\n    int sayi = {{3}}.ToInt32(Console.ReadLine());\n    toplam = toplam {{4}} sayi;\n}\nConsole.Write(toplam);",
   "blanks": [
    {
     "ans": [
      "for"
     ],
     "cs": true
    },
    {
     "ans": [
      "<="
     ],
     "cs": true
    },
    {
     "ans": [
      "Convert"
     ],
     "cs": true
    },
    {
     "ans": [
      "+"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Belli sayıda tekrar: for.",
    "deger kadar (dahil) dönmeli.",
    "ReadLine string verir, Convert ile çevrilir.",
    "Toplama ekleniyor."
   ],
   "expect": "60",
   "note": "Girdiler: 3 (adet), 10, 20, 30"
  }
 ],
 "while": [
  {
   "type": "mc",
   "topic": "while",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "Hiçbir şey",
    "0 1 2 3 4",
    "1 2 3 4 5",
    "0 1 2 3 4 5",
    "Sonsuz döngü"
   ],
   "a": 1,
   "exp": "i < 5 iken yazılır; 5 olunca biter.",
   "code": "int i = 0;\nwhile (i < 5)\n{\n    Console.Write(i + \" \");\n    i++;\n}"
  },
  {
   "type": "mc",
   "topic": "while",
   "q": "while döngüsünde sayaç artırılmazsa ne olur?",
   "opts": [
    "Derleme hatası",
    "Sonsuz döngü",
    "Döngü hiç çalışmaz",
    "Sayaç otomatik artar",
    "Bir kez çalışır"
   ],
   "a": 1,
   "exp": "Koşul hep doğru kalır."
  },
  {
   "type": "mc",
   "topic": "while",
   "q": "Ekrana ne yazılır? (girdi: 5)",
   "opts": [
    "Sonuç:15",
    "Sonuç:120",
    "Sonuç:0",
    "Sonuç:5",
    "Sonuç:24"
   ],
   "a": 1,
   "exp": "5·4·3·2 = 120.",
   "code": "int sayi = Convert.ToInt32(Console.ReadLine());\nint sonuc = 1;\nwhile (sayi > 1)\n{\n    sonuc *= sayi;\n    sayi--;\n}\nConsole.WriteLine(\"Sonuç:\" + sonuc);",
   "src": "Slayt PT13-24"
  },
  {
   "type": "mc",
   "topic": "while",
   "q": "Faktöriyel programında `int sonuc = 0;` yazılırsa (girdi 5) ne yazılır?",
   "opts": [
    "Sonsuz döngü",
    "Sonuç:0",
    "Derleme hatası",
    "Sonuç:120",
    "Sonuç:5"
   ],
   "a": 1,
   "exp": "0 ile çarpılan her şey 0."
  },
  {
   "type": "mc",
   "topic": "while",
   "q": "while ile for arasındaki farkla ilgili hangisi doğrudur?",
   "opts": [
    "while'da koşul yazılmaz",
    "for'da artırma döngünün içinde zorunludur",
    "while'da başlangıç değeri döngüden önce, artırma döngünün içinde yazılır",
    "İkisi aynı satırda yazılmak zorundadır",
    "while sadece bir kez çalışır"
   ],
   "a": 2,
   "exp": "Slayt PT13-20."
  },
  {
   "type": "mc",
   "topic": "while",
   "q": "Ekrana ne yazılır?",
   "opts": [
    "Sonsuz döngü",
    "Hiçbir şey",
    "10 / 11 / 12 / 13 / 14",
    "10",
    "5"
   ],
   "a": 3,
   "exp": "do while koşulu sonda kontrol eder, en az bir kez çalışır.",
   "code": "int i = 10;\ndo\n{\n    Console.WriteLine(i);\n    i++;\n} while (i < 5);"
  },
  {
   "type": "mc",
   "topic": "while",
   "q": "Aynı kodu `while (i < 5) { ... }` ile yazsaydık (i = 10) ne yazılırdı?",
   "opts": [
    "Sonsuz döngü",
    "Hiçbir şey",
    "10",
    "Derleme hatası",
    "5"
   ],
   "a": 1,
   "exp": "Koşul baştan yanlış; while hiç çalışmaz."
  },
  {
   "type": "mc",
   "topic": "while",
   "q": "`break` döngüde ne yapar?",
   "opts": [
    "Programı bekletir",
    "Döngüyü baştan başlatır",
    "Sadece o turu atlar",
    "Döngüyü o anda bitirir, dışına çıkar",
    "Sayaç değerini sıfırlar"
   ],
   "a": 3,
   "exp": "continue ise turu atlar.",
   "why": {
    "2": "Bu continue."
   }
  },
  {
   "type": "mc",
   "topic": "while",
   "q": "`continue` döngüde ne yapar?",
   "opts": [
    "Programı kapatır",
    "Döngüyü durdurup bekler",
    "Döngüyü bitirir",
    "Bir önceki tura döner",
    "Satırın gerisini atlayıp sonraki tura geçer"
   ],
   "a": 4,
   "exp": "Slayt PT13-17."
  },
  {
   "type": "mc",
   "topic": "while",
   "q": "`Thread.Sleep(1000);` ne yapar?",
   "opts": [
    "Döngüyü 1000 kez çalıştırır",
    "Ekranı temizler",
    "Programı 1000 saniye bekletir",
    "Programı 1 saniye bekletir",
    "Bilgisayarı uyku moduna alır"
   ],
   "a": 3,
   "exp": "Değer milisaniye: 1000 ms = 1 sn."
  },
  {
   "type": "mc",
   "topic": "while",
   "q": "0–10 arası sayıları **5 saniye** aralıklarla yazdırmak için döngünün içine ne eklenir?",
   "opts": [
    "Console.Wait(5);",
    "Thread.Sleep(5000);",
    "Thread.Sleep(50);",
    "Sleep(5000);",
    "Thread.Sleep(5);"
   ],
   "a": 1,
   "exp": "5 sn = 5000 ms."
  },
  {
   "type": "mc",
   "topic": "while",
   "q": "Döviz menüsünde (girdiler 1, 5, 3) ekrana kaç kez menü yazdırılır?",
   "opts": [
    "3",
    "Sonsuz",
    "4",
    "2",
    "1"
   ],
   "a": 0,
   "exp": "Her turda menü yazılır; 3 girilince koşul (secim != 3) yanlış olur ve döngü biter."
  },
  {
   "type": "mc",
   "topic": "while",
   "q": "Ekrana ne yazılır? (girdiler: 5, 8, -3, 0)",
   "opts": [
    "Toplam: 0",
    "Toplam: 16",
    "Sonsuz döngü",
    "Toplam: 10",
    "Toplam: 13"
   ],
   "a": 3,
   "exp": "5 + 8 − 3 + 0 = 10; 0 girilince döngü biter.",
   "code": "int toplam = 0;\nint sayi = -1;\nwhile (sayi != 0)\n{\n    sayi = Convert.ToInt32(Console.ReadLine());\n    toplam += sayi;\n}\nConsole.WriteLine(\"Toplam: \" + toplam);"
  },
  {
   "type": "fill",
   "topic": "while",
   "q": "Boşluğu doldurun: koşul doğru oldukça dönsün.",
   "code": "int i = 0;\n____ (i <= 10)\n{\n    Console.WriteLine(i);\n    i++;\n}",
   "ans": [
    "while"
   ],
   "cs": true,
   "exp": "while (koşul)."
  },
  {
   "type": "fill",
   "topic": "while",
   "q": "Boşluğu doldurun: faktöriyelde çarparak biriktirin.",
   "code": "sonuc ____ sayi;",
   "ans": [
    "*="
   ],
   "cs": true,
   "exp": "sonuc = sonuc * sayi."
  },
  {
   "type": "fill",
   "topic": "while",
   "q": "Boşluğu doldurun: 0 girilince döngüden çıkılsın.",
   "code": "while (true)\n{\n    int sayi = Convert.ToInt32(Console.ReadLine());\n    if (sayi == 0) ____;\n}",
   "ans": [
    "break"
   ],
   "cs": true,
   "exp": "break döngüyü bitirir."
  },
  {
   "type": "code",
   "topic": "while",
   "title": "Faktöriyel (while)",
   "q": "Hocanın faktöriyel programını tamamlayın.",
   "code": "int sayi = Convert.ToInt32(Console.ReadLine());\nint sonuc = {{1}};\n{{2}} (sayi > 1)\n{\n    sonuc {{3}} sayi;\n    sayi{{4}};\n}\nConsole.WriteLine(\"Sonuç:\" + sonuc);",
   "blanks": [
    {
     "ans": [
      "1"
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
      "*="
     ],
     "cs": true
    },
    {
     "ans": [
      "--"
     ],
     "cs": true
    }
   ],
   "exps": [
    "Çarpımda başlangıç 1.",
    "Koşul doğru oldukça: while.",
    "Çarparak biriktir.",
    "Sayı her turda 1 azalır."
   ],
   "expect": "Sonuç:120",
   "note": "Girdi: 5"
  },
  {
   "type": "code",
   "topic": "while",
   "title": "Döviz menüsü",
   "q": "Kullanıcı 3'e basana kadar dönen menüyü tamamlayın.",
   "code": "int secim = 0;\nwhile (secim {{1}} 3)\n{\n    Console.WriteLine(\"1 - Dolar 2 - Euro 3 - Çıkış\");\n    secim = int.{{2}}(Console.ReadLine());\n    if (secim == 1)\n        Console.WriteLine(\"Dolar kuru: 33.20 TL\");\n    {{3}} (secim == 2)\n        Console.WriteLine(\"Euro kuru: 36.50 TL\");\n    else if (secim == 3)\n        Console.WriteLine(\"Programdan çıkılıyor...\");\n    {{4}}\n        Console.WriteLine(\"Geçersiz seçim yaptınız!\");\n}",
   "blanks": [
    {
     "ans": [
      "!="
     ],
     "cs": true
    },
    {
     "ans": [
      "Parse"
     ],
     "cs": true
    },
    {
     "ans": [
      "else if"
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
    "3 olmadıkça dön.",
    "int.Parse ile çevir.",
    "İkinci seçenek else if.",
    "Diğer her şey else."
   ],
   "expect": "1 - Dolar 2 - Euro 3 - Çıkış / Dolar kuru: 33.20 TL / 1 - Dolar 2 - Euro 3 - Çıkış / Programdan çıkılıyor...",
   "note": "Girdiler: 1, 3"
  }
 ]
};
window.EXTRA_CODE = [];
