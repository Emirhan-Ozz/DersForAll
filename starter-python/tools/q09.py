from lib import *
topic('nesneler')
part(1)
mc('Aşağıdaki kodun çıktısı nedir?', ['******ABCD', 'ABCD******', '***ABCD***', 'ABCD', '**********ABCD'], 0,
   '`rjust(10, "*")` metni 10 karakterlik alanda **sağa** yaslar, boşlukları * ile doldurur.', code='print("ABCD".rjust(10, "*"))', run='out')
mc('`"ABCD".rjust(3, "*")` ne üretir?', ['ABCD', '***ABCD', 'ABC', '*ABCD', 'Hata'], 0,
   'İstenen genişlik metin uzunluğundan küçükse bir şey yapılmaz; metin aynen döner.', code='print("ABCD".rjust(3, "*"))', run='out')
mc('Aşağıdaki kodun çıktısı nedir?', ['3', '1', '0', '2', '4'], 0,
   '`count` alt metnin kaç kez geçtiğini sayar: "BCD" üç kez geçiyor.', code='''
   s = " ABCDEFGHBCDIJKLMNOPQRSBCDTUVWXYZ "
   s = s.strip()
   print(s.count("BCD"))
   ''', run='out')
mc('Aşağıdaki kodun çıktısı nedir?', ['< ABC >', '<ABC>', '<ABC >', '< ABC>', 'Hata'], 0,
   'Metinler **değişmezdir** (immutable). `s.strip()` yeni bir metin döndürür ama s\'ye atanmadığı için s değişmez.',
   code='''
   s = " ABC "
   s.strip()
   print("<" + s + ">")
   ''', run='out', why={1: '<ABC> için `s = s.strip()` yazılmalıydı.'})
mc('`s = "ABCDEF"` iken `s[3] = "S"` çalıştırılırsa ne olur?', ['TypeError: str değiştirilemez', 'ABCSEF olur', 'SBCDEF olur', 'IndexError', 'Hiçbir şey olmaz'], 0,
   'str nesneleri değişmezdir; tek bir karakteri değiştirmeye izin verilmez.', code='''
   s = "ABCDEF"
   s[3] = "S"
   ''', run='err:TypeError')
mc('`s = "ABCEFGHI"` iken `print(s[0], s[2], len(s))` çıktısı nedir?', ['A C 8', 'A B 8', 'B C 8', 'A C 7', 'A C 9'], 0,
   'İndeks **0**\'dan başlar: s[0] = A, s[2] = C. len 8 karakter.', code='''
   s = "ABCEFGHI"
   print(s[0], s[2], len(s))
   ''', run='out')
mc('Boşluğa hangisi gelirse çıktı `Merhaba FILIZ` olur?', ['ad.upper()', 'ad.lower()', 'upper(ad)', 'ad.upper', 'ad.capitalize()'], 0,
   'Metot çağırma: `nesne.metot(parametreler)`. upper tüm harfleri büyütür. **Tuzak:** Python Türkçe kurallarını bilmez; `i` → `I` olur, `İ` değil. Kitaptaki `FİLİZ` çıktısı gerçekte `FILIZ`dir.', code='''
   ad = "Filiz"
   print("Merhaba " + ____)
   ''', blank='Merhaba FILIZ', why={2: 'upper bir metottur, bağımsız fonksiyon değildir: NameError.', 3: 'Parantezsiz yazılırsa metodu çağırmaz, metot nesnesinin kendisi olur: TypeError.'})
mc('Dosyayı **ekleme** (eski içerik korunarak sonuna yazma) modunda açan satır hangisidir?', ['open("dosyam.txt", "a")', 'open("dosyam.txt", "w")', 'open("dosyam.txt", "r")',
    'open("dosyam.txt")', 'open("dosyam.txt", "x+")'], 0,
   '"w": yaz (eski içerik **silinir**), "a": ekle (korunur), "r": oku (varsayılan).')
mc('Aşağıdaki kod sonrası dosyada ne yazar?', ['kaynakdosyaveri', 'kaynak dosya veri', 'kaynak\\ndosya\\nveri', 'veri', 'Hata'], 0,
   '`write` kendiliğinden satır sonu ya da boşluk eklemez; ayırmak için `\\n` yazılmalıdır.', code='''
   f = open("_t9.txt", "w")
   f.write("kaynak")
   f.write("dosya")
   f.write("veri")
   f.close()
   print(open("_t9.txt").read())
   ''', run='out')
fill('Boşluğu doldurun: metnin başındaki ve sonundaki boşlukları silen metot.',
     '''
     s = "   Python   "
     s = s.____()
     print("[" + s + "]")
     ''', ['strip'], '`strip()` baş ve sondaki boşlukları siler. Sonucu tekrar s\'ye atamak gerekir.', expect='[Python]')
fill('Boşluğu doldurun: f1 ile f3 **aynı nesne** mi?',
     '''
     from fractions import Fraction
     f1 = Fraction(1, 2)
     f3 = f1
     print(f1 ____ f3)
     ''', ['is'], '`is` iki değişkenin aynı nesneyi gösterip göstermediğini (örtüşme) kontrol eder.', expect='True',
     whyFill={'==': '== değer eşitliğine bakar; burada da True verir ama soru **aynı nesne** mi diye soruyor: `is`.'})
code('Dosyaya yaz, oku', 'Üç sayıyı dosyaya ayrı satırlara yazıp geri okuyan kodu tamamlayın.',
     '''
     with open("_t9b.txt", {{1}}) as f:
         for sayi in [1, 54, 66]:
             f.write(str(sayi) + {{2}})
     with open("_t9b.txt") as f:
         for satir in f:
             print(int(satir.{{3}}()))
     ''', [['"w"', "'w'"], ['"\\n"', "'\\n'"], ['strip']],
     ['Yazma modu: "w".', 'Her sayı ayrı satıra: "\\n".', 'Satır sonundaki \\n\'yi silmek için `strip()` (int() de tolere eder ama strip doğru yoldur).'],
     '1\n54\n66')
open_('Kullanıcıdan alınan bir cümlede **"a" harfinin kaç kez geçtiğini** `count` metoduyla yazan programı yazınız.',
      '- `cumle.count("a")` alt metnin kaç kez geçtiğini döndürür.\n- Büyük-küçük harf duyarlıdır: "Ankara bahar" için büyük `A` sayılmaz → 4. Hepsini saymak için `cumle.lower().count("a")`.',
      '''
      cumle = input()
      print(cumle.count("a"))
      ''', stdin='Ankara bahar\n', expect='4')
part(2)
mc('`"PYTHON".lower()` ne döndürür?', ['python', 'PYTHON', 'Python', 'pYTHON', 'Hata'], 0,
   '`lower` tüm harfleri küçültür.', code='print("PYTHON".lower())', run='out')
mc('Aşağıdaki kodun çıktısı nedir?', ['True\nFalse', 'True\nTrue', 'False\nFalse', 'False\nTrue', 'Hata'], 0,
   'f1 ve f2 değerce eşit (`==` True) ama **farklı nesneler** (`is` False).', code='''
   from fractions import Fraction
   f1 = Fraction(1, 2)
   f2 = Fraction(1, 2)
   print(f1 == f2)
   print(f1 is f2)
   ''', run='out')
mc('`"Python".startswith("Py")` ne döndürür?', ['True', 'False', 'Py', '0', 'Hata'], 0,
   '`startswith` metnin verilen önekle başlayıp başlamadığını sorgular.', code='print("Python".startswith("Py"))', run='out')
mc('`"Merhaba".find("h")` ne döndürür?', ['3', '4', '5', '-1', 'True'], 0,
   '`find` aranan karakterin ilk konumunu verir; indeks 0\'dan başlar: M0 e1 r2 **h3**. Bulamazsa -1 döner.',
   code='print("Merhaba".find("h"))', run='out')
mc('`open("dosyam.txt")` ikinci parametre verilmeden açılırsa hangi modda açılır?', ['"r" (okuma)', '"w" (yazma)', '"a" (ekleme)', 'Hata verir', '"rw"'], 0,
   'Mod verilmezse varsayılan "r"dir: `open("x")` ile `open("x", "r")` aynıdır.')
mc('`with open(...) as f:` kullanmanın avantajı nedir?', ['Blok bitince dosya otomatik kapanır', 'Dosya daha hızlı okunur', 'Dosya hiç kapanmaz',
    'Sadece yazma modunda çalışır', 'Dosya şifrelenir'], 0,
   'with/as bloğu bitince `__exit__` çağrılır ve dosya kendiliğinden kapanır; ayrıca `close()` gerekmez.')
mc('tkinter\'da pencereyi gösterip programı başlatan (olay döngüsü) çağrı hangisidir?', ['root.mainloop()', 'root.start()', 'root.pack()', 'root.run()', 'Tk.open()'], 0,
   '`root = Tk()` ana pencereyi oluşturur, `root.mainloop()` grafik programı başlatır. `pack()` bileşeni pencereye yerleştirir.')
fill('Boşluğu doldurun: metnin uzunluğunu veren yerleşik fonksiyon.',
     '''
     s = "Hayatta En Hakiki"
     print(____(s))
     ''', ['len'], '`len(s)` ile `s.__len__()` aynı işi yapar; kullanılması gereken `len`dir.', expect='17')
fill('Boşluğu doldurun: metni 10 karakterlik alanda **sola** yaslasın.',
     '''
     print("[" + "ABC".____(10, "-") + "]")
     ''', ['ljust'], 'ljust sola, rjust sağa, center ortaya yaslar.', expect='[ABC-------]')
code('Harfleri köşeli parantezle yaz', 'Metnin her harfini `[H][a]...` biçiminde yan yana yazın.',
     '''
     s = "Hayat"
     for i in range({{1}}(s)):
         print("[", s[{{2}}], "]", sep={{3}}, end="")
     ''', [['len'], ['i'], ['""', "''"]],
     ['İndekslerle gezmek için `range(len(s))`.', 'O anki harf `s[i]`.', 'Aralara boşluk girmesin: `sep=""`.'],
     '[H][a][y][a][t]')
open_('Kullanıcıdan alınan bir kelimeyi **tamamen büyük harfle** ve **10 karakterlik alanda ortalanmış** (boşluk `*`) olarak yazan programı yazınız. ("ali" → `***ALI****`)',
      '- `kelime.upper()` büyütür.\n- `center(10, "*")` ortalar.\n- Metotlar zincirlenebilir: `kelime.upper().center(10, "*")`',
      '''
      kelime = input()
      print(kelime.upper().center(10, "*"))
      ''', stdin='ali\n', expect='***ALI****')
open_('Bir dosyaya `"w"` ile 3 isim yazıp (her biri ayrı satırda), sonra dosyayı okuyup isimleri ekrana yazan programı **with** kullanarak yazınız.',
      '- Yazarken `f.write(isim + "\\n")`.\n- Okurken `for satir in f: print(satir.strip())`.',
      '''
      with open("isimler.txt", "w") as f:
          for isim in ["Ali", "Ayşe", "Can"]:
              f.write(isim + "\\n")
      with open("isimler.txt") as f:
          for satir in f:
              print(satir.strip())
      ''', expect='Ali\nAyşe\nCan')
