/* MBP193 kod yazma görevleri. tools/build.py ile üretildi. */
window.KOD = {
 "gorevler": [
  {
   "id": "yaz-for",
   "pair": "yaz",
   "tur": "for",
   "baslik": "0–10 arası sayılar (for)",
   "soru": "0'dan 10'a kadar (10 dahil) sayıları alt alta ekrana yazdıran programı **for döngüsü** ile yazınız.",
   "puan": 15,
   "checks": [
    {
     "k": "`for` döngüsü kullanıldı",
     "re": "\\bfor\\s*\\(",
     "w": 4.41,
     "neg": false
    },
    {
     "k": "`while` kullanılmadı (soru for istiyor)",
     "re": "\\bwhile\\s*\\(",
     "w": 2.65,
     "neg": true
    },
    {
     "k": "Başlangıç 0",
     "re": "=\\s*0\\s*;",
     "w": 1.76,
     "neg": false
    },
    {
     "k": "Koşul 10'u dahil ediyor (<= 10 ya da < 11)",
     "re": "<=\\s*10\\b|<\\s*11\\b",
     "w": 2.65,
     "neg": false
    },
    {
     "k": "Sayaç döngü içinde artırılıyor (i++ / i += 1)",
     "re": "\\w+\\s*(\\+\\+|\\+=\\s*1\\b)|\\+\\+\\s*\\w+|(\\w+)\\s*=\\s*\\2\\s*\\+\\s*1\\b",
     "w": 1.76,
     "neg": false
    },
    {
     "k": "WriteLine ile alt alta yazıldı",
     "re": "Console\\.WriteLine\\s*\\(",
     "w": 1.76,
     "neg": false
    }
   ],
   "model": "for (int i = 0; i <= 10; i++)\n{\n    Console.WriteLine(i);\n}",
   "girdi": [],
   "ipucu": null,
   "cikti": "0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
   "esId": "yaz-while"
  },
  {
   "id": "yaz-while",
   "pair": "yaz",
   "tur": "while",
   "baslik": "0–10 arası sayılar (while)",
   "soru": "Aynı programı (0–10 arası sayıları alt alta yazdırma) **while döngüsü** ile yazınız.",
   "puan": 15,
   "checks": [
    {
     "k": "`while` döngüsü kullanıldı",
     "re": "\\bwhile\\s*\\(",
     "w": 4.41,
     "neg": false
    },
    {
     "k": "`for` kullanılmadı (soru while istiyor)",
     "re": "\\bfor\\s*\\(",
     "w": 2.65,
     "neg": true
    },
    {
     "k": "Sayaç döngüden önce 0 ile tanımlandı",
     "re": "int\\s+\\w+\\s*=\\s*0\\s*;",
     "w": 1.76,
     "neg": false
    },
    {
     "k": "Koşul 10'u dahil ediyor (<= 10 ya da < 11)",
     "re": "<=\\s*10\\b|<\\s*11\\b",
     "w": 2.65,
     "neg": false
    },
    {
     "k": "Sayaç döngü içinde artırılıyor (i++ / i += 1)",
     "re": "\\w+\\s*(\\+\\+|\\+=\\s*1\\b)|\\+\\+\\s*\\w+|(\\w+)\\s*=\\s*\\2\\s*\\+\\s*1\\b",
     "w": 1.76,
     "neg": false
    },
    {
     "k": "WriteLine ile alt alta yazıldı",
     "re": "Console\\.WriteLine\\s*\\(",
     "w": 1.76,
     "neg": false
    }
   ],
   "model": "int i = 0;\nwhile (i <= 10)\n{\n    Console.WriteLine(i);\n    i++;\n}",
   "girdi": [],
   "ipucu": "while'da başlangıç değeri döngüden önce, artırma döngünün içinde.",
   "cikti": "0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
   "esId": "yaz-for"
  },
  {
   "id": "topla-for",
   "pair": "topla",
   "tur": "for",
   "baslik": "1'den N'e toplam (for)",
   "soru": "Kullanıcıdan bir N sayısı alıp 1'den N'e kadar (N dahil) sayıların toplamını ekrana yazan programı **for** ile yazınız.",
   "puan": 15,
   "checks": [
    {
     "k": "`for` döngüsü kullanıldı",
     "re": "\\bfor\\s*\\(",
     "w": 4.17,
     "neg": false
    },
    {
     "k": "`while` kullanılmadı (soru for istiyor)",
     "re": "\\bwhile\\s*\\(",
     "w": 2.5,
     "neg": true
    },
    {
     "k": "Kullanıcıdan sayı alındı ve çevrildi (Convert.ToInt32 / int.Parse)",
     "re": "(Convert\\.ToInt(16|32|64)|int\\.Parse)\\s*\\(\\s*Console\\.ReadLine\\s*\\(\\s*\\)\\s*\\)",
     "w": 1.67,
     "neg": false
    },
    {
     "k": "Toplam değişkeni döngüden önce 0",
     "re": "\\w+\\s*=\\s*0\\s*;",
     "w": 1.67,
     "neg": false
    },
    {
     "k": "Döngüde toplama ekleniyor (+=)",
     "re": "\\+=\\s*\\w+|(\\w+)\\s*=\\s*\\1\\s*\\+\\s*\\w+",
     "w": 2.5,
     "neg": false
    },
    {
     "k": "Koşul N'yi dahil ediyor (<=)",
     "re": "<=\\s*\\w+",
     "w": 1.67,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 0.83,
     "neg": false
    }
   ],
   "model": "Console.Write(\"N: \");\nint n = Convert.ToInt32(Console.ReadLine());\nint toplam = 0;\nfor (int i = 1; i <= n; i++)\n{\n    toplam += i;\n}\nConsole.WriteLine(\"Toplam: \" + toplam);",
   "girdi": [
    "10"
   ],
   "ipucu": null,
   "cikti": "N: Toplam: 55",
   "esId": "topla-while"
  },
  {
   "id": "topla-while",
   "pair": "topla",
   "tur": "while",
   "baslik": "1'den N'e toplam (while)",
   "soru": "Aynı programı (1'den N'e kadar toplam) **while** ile yazınız.",
   "puan": 15,
   "checks": [
    {
     "k": "`while` döngüsü kullanıldı",
     "re": "\\bwhile\\s*\\(",
     "w": 3.95,
     "neg": false
    },
    {
     "k": "`for` kullanılmadı (soru while istiyor)",
     "re": "\\bfor\\s*\\(",
     "w": 2.37,
     "neg": true
    },
    {
     "k": "Kullanıcıdan sayı alındı ve çevrildi (Convert.ToInt32 / int.Parse)",
     "re": "(Convert\\.ToInt(16|32|64)|int\\.Parse)\\s*\\(\\s*Console\\.ReadLine\\s*\\(\\s*\\)\\s*\\)",
     "w": 1.58,
     "neg": false
    },
    {
     "k": "Toplam döngüden önce 0",
     "re": "\\w+\\s*=\\s*0\\s*;",
     "w": 1.58,
     "neg": false
    },
    {
     "k": "Sayaç döngüden önce 1 (ya da 0)",
     "re": "int\\s+\\w+\\s*=\\s*[01]\\s*;",
     "w": 0.79,
     "neg": false
    },
    {
     "k": "Döngüde toplama ekleniyor (+=)",
     "re": "\\+=\\s*\\w+|(\\w+)\\s*=\\s*\\1\\s*\\+\\s*\\w+",
     "w": 2.37,
     "neg": false
    },
    {
     "k": "Sayaç döngü içinde artırılıyor (i++ / i += 1)",
     "re": "\\w+\\s*(\\+\\+|\\+=\\s*1\\b)|\\+\\+\\s*\\w+|(\\w+)\\s*=\\s*\\2\\s*\\+\\s*1\\b",
     "w": 1.58,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 0.79,
     "neg": false
    }
   ],
   "model": "Console.Write(\"N: \");\nint n = Convert.ToInt32(Console.ReadLine());\nint toplam = 0;\nint i = 1;\nwhile (i <= n)\n{\n    toplam += i;\n    i++;\n}\nConsole.WriteLine(\"Toplam: \" + toplam);",
   "girdi": [
    "10"
   ],
   "ipucu": null,
   "cikti": "N: Toplam: 55",
   "esId": "topla-for"
  },
  {
   "id": "fakt-while",
   "pair": "fakt",
   "tur": "while",
   "baslik": "Faktöriyel (while)",
   "soru": "Kullanıcıdan alınan sayının faktöriyelini **while döngüsü** ile hesaplayınız. (Hocanın slaydı)",
   "puan": 15,
   "checks": [
    {
     "k": "`while` döngüsü kullanıldı",
     "re": "\\bwhile\\s*\\(",
     "w": 3.95,
     "neg": false
    },
    {
     "k": "`for` kullanılmadı (soru while istiyor)",
     "re": "\\bfor\\s*\\(",
     "w": 2.37,
     "neg": true
    },
    {
     "k": "Kullanıcıdan sayı alındı ve çevrildi (Convert.ToInt32 / int.Parse)",
     "re": "(Convert\\.ToInt(16|32|64)|int\\.Parse)\\s*\\(\\s*Console\\.ReadLine\\s*\\(\\s*\\)\\s*\\)",
     "w": 1.58,
     "neg": false
    },
    {
     "k": "Sonuç 1 ile başlıyor",
     "re": "\\w+\\s*=\\s*1\\s*;",
     "w": 2.37,
     "neg": false
    },
    {
     "k": "Çarpma ile birikiyor (*=)",
     "re": "\\*=\\s*\\w+|(\\w+)\\s*=\\s*\\1\\s*\\*\\s*\\w+",
     "w": 2.37,
     "neg": false
    },
    {
     "k": "Sayı azaltılıyor ya da sayaç artırılıyor",
     "re": "\\w+\\s*(--|\\+\\+)|-=\\s*1|\\+=\\s*1",
     "w": 1.58,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 0.79,
     "neg": false
    }
   ],
   "model": "Console.Write(\"Faktöriyeli bulunacak sayıyı giriniz:\");\nint sayi = Convert.ToInt32(Console.ReadLine());\nint sonuc = 1;\nwhile (sayi > 1)\n{\n    sonuc *= sayi;\n    sayi--;\n}\nConsole.WriteLine(\"Sonuç:\" + sonuc);",
   "girdi": [
    "5"
   ],
   "ipucu": "Çarpımda başlangıç 1 olmalı; 0 olursa sonuç hep 0 çıkar.",
   "cikti": "Faktöriyeli bulunacak sayıyı giriniz:Sonuç:120",
   "esId": "fakt-for"
  },
  {
   "id": "fakt-for",
   "pair": "fakt",
   "tur": "for",
   "baslik": "Faktöriyel (for)",
   "soru": "Aynı faktöriyel programını **for döngüsü** ile yazınız.",
   "puan": 15,
   "checks": [
    {
     "k": "`for` döngüsü kullanıldı",
     "re": "\\bfor\\s*\\(",
     "w": 4.41,
     "neg": false
    },
    {
     "k": "`while` kullanılmadı (soru for istiyor)",
     "re": "\\bwhile\\s*\\(",
     "w": 2.65,
     "neg": true
    },
    {
     "k": "Kullanıcıdan sayı alındı ve çevrildi (Convert.ToInt32 / int.Parse)",
     "re": "(Convert\\.ToInt(16|32|64)|int\\.Parse)\\s*\\(\\s*Console\\.ReadLine\\s*\\(\\s*\\)\\s*\\)",
     "w": 1.76,
     "neg": false
    },
    {
     "k": "Sonuç 1 ile başlıyor",
     "re": "\\w+\\s*=\\s*1\\s*;",
     "w": 2.65,
     "neg": false
    },
    {
     "k": "Çarpma ile birikiyor (*=)",
     "re": "\\*=\\s*\\w+|(\\w+)\\s*=\\s*\\1\\s*\\*\\s*\\w+",
     "w": 2.65,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 0.88,
     "neg": false
    }
   ],
   "model": "Console.Write(\"Sayı: \");\nint sayi = Convert.ToInt32(Console.ReadLine());\nint sonuc = 1;\nfor (int i = 1; i <= sayi; i++)\n{\n    sonuc *= i;\n}\nConsole.WriteLine(\"Sonuç:\" + sonuc);",
   "girdi": [
    "5"
   ],
   "ipucu": null,
   "cikti": "Sayı: Sonuç:120",
   "esId": "fakt-while"
  },
  {
   "id": "nsayi-for",
   "pair": "nsayi",
   "tur": "for",
   "baslik": "Belirlenen kadar sayıyı toplama (for)",
   "soru": "Kullanıcının belirlediği adet kadar sayıyı yine kullanıcıdan alarak toplayan programı **for** ile yazınız. (Hocanın slaydı)",
   "puan": 15,
   "checks": [
    {
     "k": "`for` döngüsü kullanıldı",
     "re": "\\bfor\\s*\\(",
     "w": 3.95,
     "neg": false
    },
    {
     "k": "`while` kullanılmadı (soru for istiyor)",
     "re": "\\bwhile\\s*\\(",
     "w": 2.37,
     "neg": true
    },
    {
     "k": "Kullanıcıdan sayı alındı ve çevrildi (Convert.ToInt32 / int.Parse)",
     "re": "(Convert\\.ToInt(16|32|64)|int\\.Parse)\\s*\\(\\s*Console\\.ReadLine\\s*\\(\\s*\\)\\s*\\)",
     "w": 1.58,
     "neg": false
    },
    {
     "k": "Toplam döngüden önce 0",
     "re": "\\w+\\s*=\\s*0\\s*;",
     "w": 1.58,
     "neg": false
    },
    {
     "k": "Sayı döngünün içinde okunuyor",
     "re": "for\\s*\\([^)]*\\)[\\s\\S]*ReadLine",
     "w": 2.37,
     "neg": false
    },
    {
     "k": "Toplama ekleniyor",
     "re": "\\+=\\s*\\w+|(\\w+)\\s*=\\s*\\1\\s*\\+\\s*\\w+",
     "w": 2.37,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 0.79,
     "neg": false
    }
   ],
   "model": "int toplam = 0;\nConsole.WriteLine(\"Kaç sayıyı Toplayacaksınız\");\nint deger = Convert.ToInt32(Console.ReadLine());\nfor (int i = 1; i <= deger; i++)\n{\n    Console.Write(i + \". Sayıyı Giriniz:\");\n    int sayi = Convert.ToInt32(Console.ReadLine());\n    toplam = toplam + sayi;\n}\nConsole.Write(toplam);",
   "girdi": [
    "3",
    "10",
    "20",
    "30"
   ],
   "ipucu": null,
   "cikti": "Kaç sayıyı Toplayacaksınız\n1. Sayıyı Giriniz:2. Sayıyı Giriniz:3. Sayıyı Giriniz:60",
   "esId": "nsayi-while"
  },
  {
   "id": "nsayi-while",
   "pair": "nsayi",
   "tur": "while",
   "baslik": "Belirlenen kadar sayıyı toplama (while)",
   "soru": "Aynı programı **while** ile yazınız.",
   "puan": 15,
   "checks": [
    {
     "k": "`while` döngüsü kullanıldı",
     "re": "\\bwhile\\s*\\(",
     "w": 3.75,
     "neg": false
    },
    {
     "k": "`for` kullanılmadı (soru while istiyor)",
     "re": "\\bfor\\s*\\(",
     "w": 2.25,
     "neg": true
    },
    {
     "k": "Kullanıcıdan sayı alındı ve çevrildi (Convert.ToInt32 / int.Parse)",
     "re": "(Convert\\.ToInt(16|32|64)|int\\.Parse)\\s*\\(\\s*Console\\.ReadLine\\s*\\(\\s*\\)\\s*\\)",
     "w": 1.5,
     "neg": false
    },
    {
     "k": "Toplam döngüden önce 0",
     "re": "\\w+\\s*=\\s*0\\s*;",
     "w": 1.5,
     "neg": false
    },
    {
     "k": "Sayı döngünün içinde okunuyor",
     "re": "while\\s*\\([^)]*\\)[\\s\\S]*ReadLine",
     "w": 2.25,
     "neg": false
    },
    {
     "k": "Toplama ekleniyor",
     "re": "\\+=\\s*\\w+|(\\w+)\\s*=\\s*\\1\\s*\\+\\s*\\w+",
     "w": 1.5,
     "neg": false
    },
    {
     "k": "Sayaç döngü içinde artırılıyor (i++ / i += 1)",
     "re": "\\w+\\s*(\\+\\+|\\+=\\s*1\\b)|\\+\\+\\s*\\w+|(\\w+)\\s*=\\s*\\2\\s*\\+\\s*1\\b",
     "w": 1.5,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 0.75,
     "neg": false
    }
   ],
   "model": "int toplam = 0;\nConsole.WriteLine(\"Kaç sayıyı Toplayacaksınız\");\nint deger = Convert.ToInt32(Console.ReadLine());\nint i = 1;\nwhile (i <= deger)\n{\n    Console.Write(i + \". Sayıyı Giriniz:\");\n    int sayi = Convert.ToInt32(Console.ReadLine());\n    toplam += sayi;\n    i++;\n}\nConsole.Write(toplam);",
   "girdi": [
    "3",
    "10",
    "20",
    "30"
   ],
   "ipucu": null,
   "cikti": "Kaç sayıyı Toplayacaksınız\n1. Sayıyı Giriniz:2. Sayıyı Giriniz:3. Sayıyı Giriniz:60",
   "esId": "nsayi-for"
  },
  {
   "id": "tekcift-for",
   "pair": "tekcift",
   "tur": "for",
   "baslik": "Kaçı tek, kaçı çift (for)",
   "soru": "Kullanıcının belirlediği adet sayıyı kullanıcıdan alınız. Bu sayıların kaçının tek, kaçının çift olduğunu bulan programı **for** ile yazınız. (Hocanın slaydı)",
   "puan": 15,
   "checks": [
    {
     "k": "`for` döngüsü kullanıldı",
     "re": "\\bfor\\s*\\(",
     "w": 4.17,
     "neg": false
    },
    {
     "k": "`while` kullanılmadı (soru for istiyor)",
     "re": "\\bwhile\\s*\\(",
     "w": 2.5,
     "neg": true
    },
    {
     "k": "Kullanıcıdan sayı alındı ve çevrildi (Convert.ToInt32 / int.Parse)",
     "re": "(Convert\\.ToInt(16|32|64)|int\\.Parse)\\s*\\(\\s*Console\\.ReadLine\\s*\\(\\s*\\)\\s*\\)",
     "w": 1.67,
     "neg": false
    },
    {
     "k": "Mod 2 ile çiftlik kontrolü",
     "re": "%\\s*2\\s*==\\s*0|%\\s*2\\s*!=\\s*0|%\\s*2\\s*==\\s*1",
     "w": 2.5,
     "neg": false
    },
    {
     "k": "İki sayaç artırılıyor",
     "re": "\\w+\\s*\\+\\+[\\s\\S]*\\w+\\s*\\+\\+",
     "w": 2.5,
     "neg": false
    },
    {
     "k": "if / else kullanıldı",
     "re": "\\bif\\s*\\([\\s\\S]*\\belse\\b",
     "w": 0.83,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 0.83,
     "neg": false
    }
   ],
   "model": "int cift = 0;\nint tek = 0;\nConsole.WriteLine(\"Kaç Adet Sayı Gireceksiniz:\");\nint deger = Convert.ToInt32(Console.ReadLine());\nfor (int i = 1; i <= deger; i++)\n{\n    Console.Write(i + \".sayıyı giriniz:\");\n    int sayi = Convert.ToInt32(Console.ReadLine());\n    if (sayi % 2 == 0)\n        cift++;\n    else\n        tek++;\n}\nConsole.WriteLine(\"Tek Adet:\" + tek);\nConsole.Write(\"Çift Adet:\" + cift);",
   "girdi": [
    "4",
    "2",
    "7",
    "10",
    "12"
   ],
   "ipucu": null,
   "cikti": "Kaç Adet Sayı Gireceksiniz:\n1.sayıyı giriniz:2.sayıyı giriniz:3.sayıyı giriniz:4.sayıyı giriniz:Tek Adet:1\nÇift Adet:3",
   "esId": "tekcift-while"
  },
  {
   "id": "tekcift-while",
   "pair": "tekcift",
   "tur": "while",
   "baslik": "Kaçı tek, kaçı çift (while)",
   "soru": "Aynı programı **while** ile yazınız.",
   "puan": 15,
   "checks": [
    {
     "k": "`while` döngüsü kullanıldı",
     "re": "\\bwhile\\s*\\(",
     "w": 4.17,
     "neg": false
    },
    {
     "k": "`for` kullanılmadı (soru while istiyor)",
     "re": "\\bfor\\s*\\(",
     "w": 2.5,
     "neg": true
    },
    {
     "k": "Kullanıcıdan sayı alındı ve çevrildi (Convert.ToInt32 / int.Parse)",
     "re": "(Convert\\.ToInt(16|32|64)|int\\.Parse)\\s*\\(\\s*Console\\.ReadLine\\s*\\(\\s*\\)\\s*\\)",
     "w": 1.67,
     "neg": false
    },
    {
     "k": "Mod 2 ile çiftlik kontrolü",
     "re": "%\\s*2\\s*==\\s*0|%\\s*2\\s*!=\\s*0|%\\s*2\\s*==\\s*1",
     "w": 2.5,
     "neg": false
    },
    {
     "k": "Tek ve çift sayaçları + döngü sayacı artırılıyor",
     "re": "\\+\\+[\\s\\S]*\\+\\+[\\s\\S]*\\+\\+",
     "w": 2.5,
     "neg": false
    },
    {
     "k": "if / else kullanıldı",
     "re": "\\bif\\s*\\([\\s\\S]*\\belse\\b",
     "w": 0.83,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 0.83,
     "neg": false
    }
   ],
   "model": "int cift = 0, tek = 0;\nConsole.WriteLine(\"Kaç Adet Sayı Gireceksiniz:\");\nint deger = Convert.ToInt32(Console.ReadLine());\nint i = 1;\nwhile (i <= deger)\n{\n    Console.Write(i + \".sayıyı giriniz:\");\n    int sayi = Convert.ToInt32(Console.ReadLine());\n    if (sayi % 2 == 0)\n        cift++;\n    else\n        tek++;\n    i++;\n}\nConsole.WriteLine(\"Tek Adet:\" + tek);\nConsole.Write(\"Çift Adet:\" + cift);",
   "girdi": [
    "4",
    "2",
    "7",
    "10",
    "12"
   ],
   "ipucu": null,
   "cikti": "Kaç Adet Sayı Gireceksiniz:\n1.sayıyı giriniz:2.sayıyı giriniz:3.sayıyı giriniz:4.sayıyı giriniz:Tek Adet:1\nÇift Adet:3",
   "esId": "tekcift-for"
  },
  {
   "id": "carpim-for",
   "pair": "carpim",
   "tur": "for",
   "baslik": "Çarpım tablosu (for)",
   "soru": "Kullanıcıdan alınan sayının 1'den 10'a kadar çarpım tablosunu \"7 x 3 = 21\" biçiminde yazan programı **for** ile yazınız.",
   "puan": 15,
   "checks": [
    {
     "k": "`for` döngüsü kullanıldı",
     "re": "\\bfor\\s*\\(",
     "w": 4.17,
     "neg": false
    },
    {
     "k": "`while` kullanılmadı (soru for istiyor)",
     "re": "\\bwhile\\s*\\(",
     "w": 2.5,
     "neg": true
    },
    {
     "k": "Kullanıcıdan sayı alındı ve çevrildi (Convert.ToInt32 / int.Parse)",
     "re": "(Convert\\.ToInt(16|32|64)|int\\.Parse)\\s*\\(\\s*Console\\.ReadLine\\s*\\(\\s*\\)\\s*\\)",
     "w": 1.67,
     "neg": false
    },
    {
     "k": "1'den 10'a (<= 10)",
     "re": "=\\s*1\\s*;[^;]*<=\\s*10|<\\s*11",
     "w": 2.5,
     "neg": false
    },
    {
     "k": "Çarpım yapılıyor (*)",
     "re": "\\w+\\s*\\*\\s*\\w+",
     "w": 1.67,
     "neg": false
    },
    {
     "k": "Çıktıda metin + sayı birleştirme",
     "re": "\"\\s*x\\s*\"|\" x \"",
     "w": 1.67,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 0.83,
     "neg": false
    }
   ],
   "model": "Console.Write(\"Sayı: \");\nint sayi = Convert.ToInt32(Console.ReadLine());\nfor (int i = 1; i <= 10; i++)\n{\n    Console.WriteLine(sayi + \" x \" + i + \" = \" + (sayi * i));\n}",
   "girdi": [
    "7"
   ],
   "ipucu": "(sayi * i) parantezsiz yazılırsa önce metin birleştirilir: \"7 x 3 = 73\" gibi hatalı çıktı olur.",
   "cikti": "Sayı: 7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70",
   "esId": "carpim-while"
  },
  {
   "id": "carpim-while",
   "pair": "carpim",
   "tur": "while",
   "baslik": "Çarpım tablosu (while)",
   "soru": "Aynı çarpım tablosunu **while** ile yazınız.",
   "puan": 15,
   "checks": [
    {
     "k": "`while` döngüsü kullanıldı",
     "re": "\\bwhile\\s*\\(",
     "w": 3.95,
     "neg": false
    },
    {
     "k": "`for` kullanılmadı (soru while istiyor)",
     "re": "\\bfor\\s*\\(",
     "w": 2.37,
     "neg": true
    },
    {
     "k": "Kullanıcıdan sayı alındı ve çevrildi (Convert.ToInt32 / int.Parse)",
     "re": "(Convert\\.ToInt(16|32|64)|int\\.Parse)\\s*\\(\\s*Console\\.ReadLine\\s*\\(\\s*\\)\\s*\\)",
     "w": 1.58,
     "neg": false
    },
    {
     "k": "Sayaç 1 ile başlıyor",
     "re": "int\\s+\\w+\\s*=\\s*1\\s*;",
     "w": 1.58,
     "neg": false
    },
    {
     "k": "Koşul 10'u dahil ediyor",
     "re": "<=\\s*10\\b|<\\s*11\\b",
     "w": 1.58,
     "neg": false
    },
    {
     "k": "Çarpım yapılıyor (*)",
     "re": "\\w+\\s*\\*\\s*\\w+",
     "w": 1.58,
     "neg": false
    },
    {
     "k": "Sayaç döngü içinde artırılıyor (i++ / i += 1)",
     "re": "\\w+\\s*(\\+\\+|\\+=\\s*1\\b)|\\+\\+\\s*\\w+|(\\w+)\\s*=\\s*\\2\\s*\\+\\s*1\\b",
     "w": 1.58,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 0.79,
     "neg": false
    }
   ],
   "model": "Console.Write(\"Sayı: \");\nint sayi = Convert.ToInt32(Console.ReadLine());\nint i = 1;\nwhile (i <= 10)\n{\n    Console.WriteLine(sayi + \" x \" + i + \" = \" + (sayi * i));\n    i++;\n}",
   "girdi": [
    "7"
   ],
   "ipucu": null,
   "cikti": "Sayı: 7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70",
   "esId": "carpim-for"
  },
  {
   "id": "sifir-while",
   "pair": "sifir",
   "tur": "while",
   "baslik": "0 girilene kadar topla (while)",
   "soru": "Kullanıcı **0 girene kadar** sayı isteyen ve girilen sayıların toplamını en sonda yazan programı **while** ile yazınız.",
   "puan": 15,
   "checks": [
    {
     "k": "`while` döngüsü kullanıldı",
     "re": "\\bwhile\\s*\\(",
     "w": 4.17,
     "neg": false
    },
    {
     "k": "`for` kullanılmadı (soru while istiyor)",
     "re": "\\bfor\\s*\\(",
     "w": 2.5,
     "neg": true
    },
    {
     "k": "Kullanıcıdan sayı alındı ve çevrildi (Convert.ToInt32 / int.Parse)",
     "re": "(Convert\\.ToInt(16|32|64)|int\\.Parse)\\s*\\(\\s*Console\\.ReadLine\\s*\\(\\s*\\)\\s*\\)",
     "w": 1.67,
     "neg": false
    },
    {
     "k": "Koşul 0 kontrolü (!= 0)",
     "re": "!=\\s*0|==\\s*0",
     "w": 2.5,
     "neg": false
    },
    {
     "k": "Toplam döngüden önce 0",
     "re": "\\w+\\s*=\\s*0\\s*;",
     "w": 1.67,
     "neg": false
    },
    {
     "k": "Toplama ekleniyor",
     "re": "\\+=\\s*\\w+|(\\w+)\\s*=\\s*\\1\\s*\\+\\s*\\w+",
     "w": 1.67,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 0.83,
     "neg": false
    }
   ],
   "model": "int toplam = 0;\nint sayi = -1;\nwhile (sayi != 0)\n{\n    Console.Write(\"Sayı (çıkış 0): \");\n    sayi = Convert.ToInt32(Console.ReadLine());\n    toplam += sayi;\n}\nConsole.WriteLine(\"Toplam: \" + toplam);",
   "girdi": [
    "5",
    "8",
    "-3",
    "0"
   ],
   "ipucu": "Döngüye girebilmek için sayi başta 0'dan farklı bir değer almalı; tekrar sayısı belli olmadığı için while uygun.",
   "cikti": "Sayı (çıkış 0): Sayı (çıkış 0): Sayı (çıkış 0): Sayı (çıkış 0): Toplam: 10",
   "esId": "sifir-break"
  },
  {
   "id": "sifir-break",
   "pair": "sifir",
   "tur": "while",
   "baslik": "0 girilene kadar topla (sonsuz döngü + break)",
   "soru": "Aynı programı `while (true)` ve **break** ile yazınız: 0 girilince döngüden çıkılsın.",
   "puan": 15,
   "checks": [
    {
     "k": "`while (true)` sonsuz döngü",
     "re": "while\\s*\\(\\s*true\\s*\\)",
     "w": 3.75,
     "neg": false
    },
    {
     "k": "0 girilince break",
     "re": "==\\s*0\\s*\\)[\\s\\S]{0,40}break\\s*;",
     "w": 5.0,
     "neg": false
    },
    {
     "k": "Kullanıcıdan sayı alındı ve çevrildi (Convert.ToInt32 / int.Parse)",
     "re": "(Convert\\.ToInt(16|32|64)|int\\.Parse)\\s*\\(\\s*Console\\.ReadLine\\s*\\(\\s*\\)\\s*\\)",
     "w": 2.5,
     "neg": false
    },
    {
     "k": "Toplama ekleniyor",
     "re": "\\+=\\s*\\w+|(\\w+)\\s*=\\s*\\1\\s*\\+\\s*\\w+",
     "w": 2.5,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 1.25,
     "neg": false
    }
   ],
   "model": "int toplam = 0;\nwhile (true)\n{\n    Console.Write(\"Sayı (çıkış 0): \");\n    int sayi = Convert.ToInt32(Console.ReadLine());\n    if (sayi == 0)\n        break;\n    toplam += sayi;\n}\nConsole.WriteLine(\"Toplam: \" + toplam);",
   "girdi": [
    "5",
    "8",
    "-3",
    "0"
   ],
   "ipucu": null,
   "cikti": "Sayı (çıkış 0): Sayı (çıkış 0): Sayı (çıkış 0): Sayı (çıkış 0): Toplam: 10",
   "esId": "sifir-while"
  },
  {
   "id": "doviz",
   "pair": "doviz",
   "tur": "while",
   "baslik": "Döviz menüsü (while)",
   "soru": "Ekrana \"1 - Dolar Kuru Göster, 2 - Euro Kuru Göster, 3 - Çıkış\" menüsünü yazdırınız. 1'e basılırsa dolar kurunu, 2'ye basılırsa euro kurunu göstersin; kullanıcı **3'e basana kadar** dönmeye devam etsin. (Hocanın slaydı)",
   "puan": 15,
   "checks": [
    {
     "k": "`while` döngüsü kullanıldı",
     "re": "\\bwhile\\s*\\(",
     "w": 4.69,
     "neg": false
    },
    {
     "k": "Koşul: seçim 3 olmadıkça (!= 3)",
     "re": "!=\\s*3",
     "w": 2.81,
     "neg": false
    },
    {
     "k": "Seçim döngünün içinde okunuyor",
     "re": "while\\s*\\([^)]*\\)[\\s\\S]*ReadLine",
     "w": 2.81,
     "neg": false
    },
    {
     "k": "Seçimlere göre if / else if ya da switch",
     "re": "else\\s+if|switch\\s*\\(",
     "w": 1.88,
     "neg": false
    },
    {
     "k": "Geçersiz seçim için else / default",
     "re": "\\belse\\b(?!\\s+if)|default\\s*:",
     "w": 1.88,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 0.94,
     "neg": false
    }
   ],
   "model": "int secim = 0;\nwhile (secim != 3)\n{\n    Console.WriteLine(\"====== DÖVİZ MENÜSÜ ======\");\n    Console.WriteLine(\"1 - Dolar Kuru Göster\");\n    Console.WriteLine(\"2 - Euro Kuru Göster\");\n    Console.WriteLine(\"3 - Çıkış\");\n    Console.Write(\"Seçiminiz: \");\n    secim = int.Parse(Console.ReadLine());\n    if (secim == 1)\n        Console.WriteLine(\"Dolar kuru: 33.20 TL\");\n    else if (secim == 2)\n        Console.WriteLine(\"Euro kuru: 36.50 TL\");\n    else if (secim == 3)\n        Console.WriteLine(\"Programdan çıkılıyor...\");\n    else\n        Console.WriteLine(\"Geçersiz seçim yaptınız!\");\n}",
   "girdi": [
    "1",
    "5",
    "3"
   ],
   "ipucu": null,
   "cikti": "====== DÖVİZ MENÜSÜ ======\n1 - Dolar Kuru Göster\n2 - Euro Kuru Göster\n3 - Çıkış\nSeçiminiz: Dolar kuru: 33.20 TL\n====== DÖVİZ MENÜSÜ ======\n1 - Dolar Kuru Göster\n2 - Euro Kuru Göster\n3 - Çıkış\nSeçiminiz: Geçersiz seçim yaptınız!\n====== DÖVİZ MENÜSÜ ======\n1 - Dolar Kuru Göster\n2 - Euro Kuru Göster\n3 - Çıkış\nSeçiminiz: Programdan çıkılıyor..."
  },
  {
   "id": "hesap-switch",
   "pair": "hesap",
   "tur": "switch",
   "baslik": "Dört işlem (switch)",
   "soru": "Kullanıcıdan alınan 2 değerin toplama, çıkarma, çarpma ve bölme işlemlerini, kullanıcının seçtiği işleme göre yapan programı **switch** yapısı ile yazınız. (Hocanın slaydı)",
   "puan": 15,
   "checks": [
    {
     "k": "switch kullanıldı",
     "re": "switch\\s*\\(",
     "w": 3.46,
     "neg": false
    },
    {
     "k": "case'ler",
     "re": "case\\s+[\\w\"\\']+\\s*:[\\s\\S]*case\\s+[\\w\"\\']+\\s*:[\\s\\S]*case\\s+[\\w\"\\']+\\s*:",
     "w": 3.46,
     "neg": false
    },
    {
     "k": "Her case break ile bitiyor",
     "re": "break\\s*;[\\s\\S]*break\\s*;[\\s\\S]*break\\s*;",
     "w": 2.31,
     "neg": false
    },
    {
     "k": "default (hatalı giriş)",
     "re": "default\\s*:",
     "w": 2.31,
     "neg": false
    },
    {
     "k": "Kullanıcıdan sayı alındı ve çevrildi (Convert.ToInt32 / int.Parse)",
     "re": "(Convert\\.ToInt(16|32|64)|int\\.Parse)\\s*\\(\\s*Console\\.ReadLine\\s*\\(\\s*\\)\\s*\\)",
     "w": 2.31,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 1.15,
     "neg": false
    }
   ],
   "model": "Console.Write(\"Lütfen 1.sayıyı giriniz:\");\nint sayi1 = Convert.ToInt32(Console.ReadLine());\nConsole.Write(\"Lütfen 2.sayıyı giriniz:\");\nint sayi2 = Convert.ToInt32(Console.ReadLine());\nConsole.WriteLine(\"1.Toplama 2.Cıkarma 3.Carpma 4.Bölme\");\nConsole.Write(\"Lütfen işlem seçiniz:\");\nint islem = Convert.ToInt32(Console.ReadLine());\nswitch (islem)\n{\n    case 1:\n        Console.WriteLine(sayi1 + sayi2);\n        break;\n    case 2:\n        Console.WriteLine(sayi1 - sayi2);\n        break;\n    case 3:\n        Console.WriteLine(sayi1 * sayi2);\n        break;\n    case 4:\n        Console.WriteLine(sayi1 / sayi2);\n        break;\n    default:\n        Console.WriteLine(\"Hatalı Giriş\");\n        break;\n}",
   "girdi": [
    "12",
    "4",
    "3"
   ],
   "ipucu": null,
   "cikti": "Lütfen 1.sayıyı giriniz:Lütfen 2.sayıyı giriniz:1.Toplama 2.Cıkarma 3.Carpma 4.Bölme\nLütfen işlem seçiniz:48",
   "esId": "hesap-if"
  },
  {
   "id": "hesap-if",
   "pair": "hesap",
   "tur": "if",
   "baslik": "Dört işlem (if – else if)",
   "soru": "Aynı dört işlem programını **if – else if** ile yazınız.",
   "puan": 15,
   "checks": [
    {
     "k": "if / else if zinciri",
     "re": "\\bif\\s*\\([\\s\\S]*else\\s+if[\\s\\S]*else\\s+if",
     "w": 5.45,
     "neg": false
    },
    {
     "k": "switch kullanılmadı",
     "re": "switch\\s*\\(",
     "w": 2.73,
     "neg": true
    },
    {
     "k": "Hatalı seçim için else",
     "re": "\\belse\\b(?!\\s+if)",
     "w": 2.73,
     "neg": false
    },
    {
     "k": "Kullanıcıdan sayı alındı ve çevrildi (Convert.ToInt32 / int.Parse)",
     "re": "(Convert\\.ToInt(16|32|64)|int\\.Parse)\\s*\\(\\s*Console\\.ReadLine\\s*\\(\\s*\\)\\s*\\)",
     "w": 2.73,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 1.36,
     "neg": false
    }
   ],
   "model": "Console.Write(\"1. sayı: \");\nint sayi1 = Convert.ToInt32(Console.ReadLine());\nConsole.Write(\"2. sayı: \");\nint sayi2 = Convert.ToInt32(Console.ReadLine());\nConsole.Write(\"İşlem (1-4): \");\nint islem = Convert.ToInt32(Console.ReadLine());\nif (islem == 1)\n    Console.WriteLine(sayi1 + sayi2);\nelse if (islem == 2)\n    Console.WriteLine(sayi1 - sayi2);\nelse if (islem == 3)\n    Console.WriteLine(sayi1 * sayi2);\nelse if (islem == 4)\n    Console.WriteLine(sayi1 / sayi2);\nelse\n    Console.WriteLine(\"Hatalı Giriş\");",
   "girdi": [
    "12",
    "4",
    "3"
   ],
   "ipucu": null,
   "cikti": "1. sayı: 2. sayı: İşlem (1-4): 48",
   "esId": "hesap-switch"
  },
  {
   "id": "not",
   "pair": "not",
   "tur": "if",
   "baslik": "Vize–final ortalaması ve harf notu",
   "soru": "Kullanıcıdan vize ve final notu alıp ortalamayı hesaplayın (vize %40, final %60). Ortalama 60'ın altında ise \"Kaldınız\", 60–70 \"DD\", 70–80 \"CC\", 80–90 \"BB\", 90 ve üstü \"AA\" yazsın. (Hocanın slaydı)",
   "puan": 15,
   "checks": [
    {
     "k": "Kullanıcıdan sayı alındı ve çevrildi (Convert.ToInt32 / int.Parse)",
     "re": "(Convert\\.ToInt(16|32|64)|int\\.Parse)\\s*\\(\\s*Console\\.ReadLine\\s*\\(\\s*\\)\\s*\\)",
     "w": 2.5,
     "neg": false
    },
    {
     "k": "Ağırlıklı ortalama (0.4 ve 0.6)",
     "re": "0[.,]4[\\s\\S]*0[.,]6|0[.,]6[\\s\\S]*0[.,]4|\\*\\s*40[\\s\\S]*\\*\\s*60",
     "w": 5.0,
     "neg": false
    },
    {
     "k": "if / else if zinciri",
     "re": "\\bif\\s*\\([\\s\\S]*else\\s+if[\\s\\S]*else\\s+if",
     "w": 3.75,
     "neg": false
    },
    {
     "k": "60 sınırı kontrolü",
     "re": "<\\s*60|>=\\s*60",
     "w": 2.5,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 1.25,
     "neg": false
    }
   ],
   "model": "Console.Write(\"Vize: \");\nint vize = Convert.ToInt32(Console.ReadLine());\nConsole.Write(\"Final: \");\nint final = Convert.ToInt32(Console.ReadLine());\ndouble ort = vize * 0.4 + final * 0.6;\nConsole.WriteLine(\"Ortalama: \" + ort);\nif (ort < 60)\n    Console.WriteLine(\"Kaldınız\");\nelse if (ort < 70)\n    Console.WriteLine(\"DD\");\nelse if (ort < 80)\n    Console.WriteLine(\"CC\");\nelse if (ort < 90)\n    Console.WriteLine(\"BB\");\nelse\n    Console.WriteLine(\"AA\");",
   "girdi": [
    "50",
    "80"
   ],
   "ipucu": "Slaytta 70–80 iki kez yazılmış; aralıkları sırayla ve çakışmadan yaz.",
   "cikti": "Vize: Final: Ortalama: 68\nDD"
  },
  {
   "id": "pozneg",
   "pair": "pozneg",
   "tur": "if",
   "baslik": "Pozitif, negatif ya da sıfır",
   "soru": "Klavyeden girilen sayının pozitif mi, negatif mi yoksa 0'a mı eşit olduğunu gösteren programı yazınız. (Hocanın slaydı)",
   "puan": 15,
   "checks": [
    {
     "k": "Kullanıcıdan sayı alındı ve çevrildi (Convert.ToInt32 / int.Parse)",
     "re": "(Convert\\.ToInt(16|32|64)|int\\.Parse)\\s*\\(\\s*Console\\.ReadLine\\s*\\(\\s*\\)\\s*\\)",
     "w": 2.73,
     "neg": false
    },
    {
     "k": "> 0 kontrolü",
     "re": ">\\s*0",
     "w": 2.73,
     "neg": false
    },
    {
     "k": "< 0 kontrolü ya da else if",
     "re": "<\\s*0|else\\s+if",
     "w": 2.73,
     "neg": false
    },
    {
     "k": "Üç durum: if – else if – else",
     "re": "\\bif\\s*\\([\\s\\S]*else\\s+if[\\s\\S]*\\belse\\b",
     "w": 5.45,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 1.36,
     "neg": false
    }
   ],
   "model": "Console.Write(\"Sayı: \");\nint sayi = Convert.ToInt32(Console.ReadLine());\nif (sayi > 0)\n    Console.WriteLine(\"Pozitif\");\nelse if (sayi < 0)\n    Console.WriteLine(\"Negatif\");\nelse\n    Console.WriteLine(\"Sıfır\");",
   "girdi": [
    "-4"
   ],
   "ipucu": null,
   "cikti": "Sayı: Negatif"
  },
  {
   "id": "giris",
   "pair": "giris",
   "tur": "if",
   "baslik": "Kullanıcı adı ve şifre",
   "soru": "Kullanıcıdan kullanıcı adı ve parola alan; kullanıcı adı \"ekonomi\", şifre \"1234\" ise \"Doğru Giriş\", değilse \"Kullanıcı adı veya şifre hatalı\" yazan programı yazınız. (Hocanın slaydı)",
   "puan": 15,
   "checks": [
    {
     "k": "İki değer ReadLine ile okunuyor",
     "re": "ReadLine[\\s\\S]*ReadLine",
     "w": 4.5,
     "neg": false
    },
    {
     "k": "\"ekonomi\" ile karşılaştırma (==)",
     "re": "==\\s*\"ekonomi\"|\"ekonomi\"\\s*==",
     "w": 3.0,
     "neg": false
    },
    {
     "k": "&& ile iki şart birlikte",
     "re": "&&",
     "w": 4.5,
     "neg": false
    },
    {
     "k": "else ile hata mesajı",
     "re": "\\belse\\b",
     "w": 1.5,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 1.5,
     "neg": false
    }
   ],
   "model": "Console.Write(\"Kullanıcı adı: \");\nstring kadi = Console.ReadLine();\nConsole.Write(\"Şifre: \");\nstring sifre = Console.ReadLine();\nif (kadi == \"ekonomi\" && sifre == \"1234\")\n    Console.WriteLine(\"Doğru Giriş\");\nelse\n    Console.WriteLine(\"Kullanıcı adı veya şifre hatalı\");",
   "girdi": [
    "ekonomi",
    "1234"
   ],
   "ipucu": "Şifre metin olarak karşılaştırılır: \"1234\" tırnak içinde, çevirme gerekmez.",
   "cikti": "Kullanıcı adı: Şifre: Doğru Giriş"
  },
  {
   "id": "aralik",
   "pair": "aralik",
   "tur": "if",
   "baslik": "0–100 arasında mı?",
   "soru": "Kullanıcıdan alınan değerin 0–100 arasında (0 ve 100 dahil) olup olmadığını kontrol eden; arasındaysa \"Doğru\", değilse \"Yanlış\" yazan programı yazınız. (Hocanın slaydı)",
   "puan": 15,
   "checks": [
    {
     "k": "Kullanıcıdan sayı alındı ve çevrildi (Convert.ToInt32 / int.Parse)",
     "re": "(Convert\\.ToInt(16|32|64)|int\\.Parse)\\s*\\(\\s*Console\\.ReadLine\\s*\\(\\s*\\)\\s*\\)",
     "w": 2.73,
     "neg": false
    },
    {
     "k": ">= 0",
     "re": ">=\\s*0",
     "w": 2.73,
     "neg": false
    },
    {
     "k": "<= 100",
     "re": "<=\\s*100",
     "w": 2.73,
     "neg": false
    },
    {
     "k": "&& ile birleştirme",
     "re": "&&",
     "w": 4.09,
     "neg": false
    },
    {
     "k": "else",
     "re": "\\belse\\b",
     "w": 1.36,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 1.36,
     "neg": false
    }
   ],
   "model": "Console.Write(\"Değer: \");\nint deger = Convert.ToInt32(Console.ReadLine());\nif (deger >= 0 && deger <= 100)\n    Console.WriteLine(\"Doğru\");\nelse\n    Console.WriteLine(\"Yanlış\");",
   "girdi": [
    "100"
   ],
   "ipucu": "\"Dahil\" dendiği için >= ve <= kullanılır.",
   "cikti": "Değer: Doğru"
  },
  {
   "id": "dortislem",
   "pair": "dortislem",
   "tur": "temel",
   "baslik": "Toplam, fark, çarpım, bölüm",
   "soru": "Girilen 2 değişkenin toplamını, farkını, çarpımını ve bölümünü hesaplayan programı yazınız. (Hocanın slaydı)",
   "puan": 15,
   "checks": [
    {
     "k": "İki değer okunup çevriliyor",
     "re": "(Convert\\.To\\w+|\\w+\\.Parse)\\s*\\(\\s*Console\\.ReadLine[\\s\\S]*(Convert\\.To\\w+|\\w+\\.Parse)\\s*\\(\\s*Console\\.ReadLine",
     "w": 6.67,
     "neg": false
    },
    {
     "k": "+ − * / dört işlem",
     "re": "\\+[\\s\\S]*-[\\s\\S]*\\*[\\s\\S]*/",
     "w": 6.67,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 1.67,
     "neg": false
    }
   ],
   "model": "Console.Write(\"1. sayı: \");\nint a = Convert.ToInt32(Console.ReadLine());\nConsole.Write(\"2. sayı: \");\nint b = Convert.ToInt32(Console.ReadLine());\nConsole.WriteLine(\"Toplam: \" + (a + b));\nConsole.WriteLine(\"Fark: \" + (a - b));\nConsole.WriteLine(\"Çarpım: \" + (a * b));\nConsole.WriteLine(\"Bölüm: \" + (a / b));",
   "girdi": [
    "20",
    "6"
   ],
   "ipucu": "\"Toplam: \" + a + b yazarsan sayılar yan yana eklenir (206). Parantez kullan.",
   "cikti": "1. sayı: 2. sayı: Toplam: 26\nFark: 14\nÇarpım: 120\nBölüm: 3"
  },
  {
   "id": "kar",
   "pair": "kar",
   "tur": "temel",
   "baslik": "Kârlı satış fiyatı",
   "soru": "Alış fiyatı ve kâr oranı (%) kullanıcıdan alınan ürünün satış fiyatını hesaplayınız. (Hocanın slaydı)",
   "puan": 15,
   "checks": [
    {
     "k": "İki değer okunup çevriliyor",
     "re": "(Convert\\.To\\w+|\\w+\\.Parse)\\s*\\(\\s*Console\\.ReadLine[\\s\\S]*(Convert\\.To\\w+|\\w+\\.Parse)\\s*\\(\\s*Console\\.ReadLine",
     "w": 6.67,
     "neg": false
    },
    {
     "k": "/ 100 ile yüzde hesabı",
     "re": "/\\s*100",
     "w": 6.67,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 1.67,
     "neg": false
    }
   ],
   "model": "Console.Write(\"Alış fiyatı: \");\ndouble alis = Convert.ToDouble(Console.ReadLine());\nConsole.Write(\"Kâr oranı (%): \");\ndouble oran = Convert.ToDouble(Console.ReadLine());\ndouble satis = alis + alis * oran / 100;\nConsole.WriteLine(\"Satış fiyatı: \" + satis);",
   "girdi": [
    "200",
    "15"
   ],
   "ipucu": null,
   "cikti": "Alış fiyatı: Kâr oranı (%): Satış fiyatı: 230"
  },
  {
   "id": "daire",
   "pair": "daire",
   "tur": "temel",
   "baslik": "Daire alanı",
   "soru": "Yarıçapı girilen dairenin alanını hesaplayınız. (Hocanın slaydı)",
   "puan": 15,
   "checks": [
    {
     "k": "Yarıçap okunup çevriliyor",
     "re": "(Convert\\.To\\w+|\\w+\\.Parse)\\s*\\(\\s*Console\\.ReadLine",
     "w": 4.5,
     "neg": false
    },
    {
     "k": "π (3.14 ya da Math.PI)",
     "re": "3[.,]14|Math\\.PI",
     "w": 4.5,
     "neg": false
    },
    {
     "k": "r * r (yarıçapın karesi)",
     "re": "(\\w+)\\s*\\*\\s*\\1\\b|Math\\.Pow",
     "w": 4.5,
     "neg": false
    },
    {
     "k": "Sonuç ekrana yazıldı (Console.Write / WriteLine)",
     "re": "Console\\.Write(Line)?\\s*\\(",
     "w": 1.5,
     "neg": false
    }
   ],
   "model": "Console.Write(\"Yarıçap: \");\ndouble r = Convert.ToDouble(Console.ReadLine());\ndouble alan = Math.PI * r * r;\nConsole.WriteLine(\"Alan: \" + alan);",
   "girdi": [
    "2"
   ],
   "ipucu": null,
   "cikti": "Yarıçap: Alan: 12,5663706143592"
  }
 ],
 "sinavlar": [
  {
   "id": "k1",
   "title": "Kod sınavı 1",
   "ids": [
    "topla-for",
    "fakt-while"
   ]
  },
  {
   "id": "k2",
   "title": "Kod sınavı 2",
   "ids": [
    "tekcift-while",
    "carpim-for"
   ]
  },
  {
   "id": "k3",
   "title": "Kod sınavı 3",
   "ids": [
    "nsayi-for",
    "doviz"
   ]
  }
 ]
};
