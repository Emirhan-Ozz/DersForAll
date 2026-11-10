from lib import *
topic('degerler')
part(1)
mc('Aşağıdaki kodun çıktısı nedir?', ['510', '15', '5 10', 'TypeError', '"510"'], 0,
   'Tırnak içindeki değerler metindir (str). `+` metinleri **birleştirir**: "5" + "10" = "510".',
   code='print("5" + "10")', run='out', why={1: '15 olması için ikisinin de sayı (int) olması gerekirdi.'})
mc('Aşağıdaki kod çalıştırılınca ne olur?', ['TypeError hatası verir', '510', '15', '"510"', 'Hiçbir şey yazmaz'], 0,
   'Metin (str) ile sayı (int) `+` ile toplanamaz: `TypeError`. Düzeltmek için `"5" + str(10)` ya da `int("5") + 10` yazılır.',
   code='print("5" + 10)', run='err:TypeError')
mc('`type("4")` ne döndürür?', ["<class 'str'>", "<class 'int'>", "<class 'float'>", '4', "<class 'char'>"], 0,
   'Tırnak içindeki 4 bir metindir (karakter dizisi), türü `str`.', code='print(type("4"))', run='out')
mc('Aşağıdaki kodun çıktısı nedir?', ['15', '510', '5 10', 'TypeError', '15.0'], 0,
   '`int("10")` metni tam sayıya çevirir; 5 + 10 = 15.', code='print(5 + int("10"))', run='out')
mc('`int("3.4")` çalıştırılırsa ne olur?', ['ValueError verir', '3', '3.4', '4', 'TypeError verir'], 0,
   '`int()` sadece tam sayı görünümlü metni çevirir. "3.4" geçerli bir tam sayı değildir: `ValueError: invalid literal for int()`.',
   code='int("3.4")', run='err:ValueError', why={1: 'int(3.4) sayıyı keserek 3 verir; ama burada metin "3.4" verilmiş, metin ise doğrudan çevrilemez.'})
mc('Aşağıdaki kodun çıktısı nedir?', ['100 -45 0', '100, -45, 0', '(100, -45, 0)', '100-450', 'Hata verir'], 0,
   'Çoklu atama: soldaki ilk değişken sağdaki ilk değere eşleşir. `print` virgülle ayrılan değerlerin arasına bir boşluk koyar.',
   code='''
   x, y, z = 100, -45, 0
   print(x, y, z)
   ''', run='out')
mc('Kod satır satır çalıştığında son durumda `x` kaçtır?', ['5', '7', '3', '2', 'Hata verir'], 0,
   '`x = y` anında x, y\'nin o andaki değerini (5) alır. Sonra `y = 7` yapılması x\'i etkilemez.',
   code='''
   x = 2
   y = 5
   x = 3
   x = y
   y = 7
   print(x)
   ''', run='out', why={1: 'x = y bir kez atama yapar; y sonradan değişince x değişmez.'})
mc('`round(28.71)` ve `int(28.71)` sırasıyla ne verir?', ['29 28', '28 29', '29 29', '28 28', '28.71 28'], 0,
   '`round` en yakın tam sayıya yuvarlar (29). `int` kesirli kısmı atar, yani keser (28).',
   code='print(round(28.71), int(28.71))', run='out')
mc('Aşağıdakilerden hangisi geçerli bir değişken adı (belirteç) **değildir**?',
   ['4ogrenci', 'Toplam_Brut', '_sayac', 'a2', 'Anahtar_10'], 0,
   'Belirteç sayı ile başlayamaz. İlk karakter harf ya da alt çizgi olmalıdır.',
   why={2: 'Alt çizgi ile başlamak serbesttir.'})
mc('Boşluğa hangisi gelirse çıktı `x = 10` olur?', ['str(x)', 'x', 'int(x)', '"x"', 'float(x)'], 0,
   'Metne sayı eklemek için önce `str()` ile metne çevrilmesi gerekir. `"x = " + x` TypeError verir.',
   code='''
   x = 10
   print("x = " + ____)
   ''', blank='x = 10',
   why={1: 'Metin + int → TypeError.', 3: '"x" sadece x harfini ekler: x = x yazar.'})
fill('Daha önce tanımlanmış `x` değişkenini silen komutu yazın.',
     '''
     x = 2
     ____ x
     print("x" in dir())
     ''', ['del'], '`del` değişken tanımını siler; sonra `x` kullanılırsa NameError alınır.', expect='False')
code('Değişken takası', 'Çoklu atama ile `a` ve `b`\'nin değerlerini tek satırda yer değiştirin, sonra türlerini de yazdırın.',
     '''
     a = 10
     b = "ABC"
     a, b = {{1}}, {{2}}
     print(a, b)
     print({{3}}(a))
     ''', [['b'], ['a'], ['type']],
     ['Sağ taraf önce hesaplanır: önce b\'nin değeri gelir.', 'Sonra a\'nın eski değeri.', 'Türü öğrenmek için `type()` kullanılır.'],
     "ABC 10\n<class 'str'>")
open_('Kullanıcıdan adını alıp `Merhaba <ad>` yazan programı yazınız. (Örnek: Filiz girilirse `Merhaba Filiz`)',
      '- `input()` her zaman metin (str) döndürür.\n- Metinler `+` ile birleştirilir ya da `print`e virgülle verilir.',
      '''
      ad = input("Adınız: ")
      print("Merhaba " + ad)
      ''', stdin='Filiz\n', expect='Adınız: Merhaba Filiz')
part(2)
mc('Aşağıdaki kodun çıktısı nedir?', ['93.35', '93.34', '93.3', '93', '93.348'], 0,
   '`round(x, 2)` virgülden sonra 2 basamak bırakarak yuvarlar: 93.348… → 93.35.', code='print(round(93.34836, 2))', run='out')
mc('`round(65535, -2)` ne verir?', ['65500', '65600', '65535', '66000', '655.35'], 0,
   'Negatif ikinci argüman sola doğru yuvarlar: -2 → yüzler basamağına yuvarlanır. 65535 → 65500.',
   code='print(round(65535, -2))', run='out')
mc('`type(round(93.34836))` ve `type(round(93.34836, 1))` sırasıyla nedir?', ["<class 'int'> <class 'float'>", "<class 'float'> <class 'float'>",
    "<class 'int'> <class 'int'>", "<class 'float'> <class 'int'>", "<class 'str'> <class 'float'>"], 0,
   'Tek argümanlı `round` tam sayı (int), iki argümanlı `round` ondalıklı sayı (float) döndürür. `round(x, 0)` bile float verir (93.0).',
   code='print(type(round(93.34836)), type(round(93.34836, 1)))', run='out')
mc('Python\'da 6.022 × 10²³ sayısı nasıl yazılır?', ['6.022e23', '6.022x10^23', '6,022e23', '6.022*10^23', '6.022E^23'], 0,
   'Bilimsel gösterimde `e` (ya da `E`) kullanılır: soldaki sayı × 10 üzeri sağdaki sayı. `^` Python\'da üs değildir.',
   code='print(6.022e23 == 6.022 * 10**23)', run='err:none')
mc('Aşağıdakilerden hangisi `class` adının değişken olarak kullanılamamasının nedenidir?',
   ['Ayrılmış (reserved) kelime olduğu için', 'Çok kısa olduğu için', 'Büyük harf içermediği için',
    'Sayı içermediği için', 'Türkçe karakter içerdiği için'], 0,
   '`class`, `def`, `if`, `for`, `True`, `False` gibi kelimeler Python\'a ayrılmıştır; belirteç olarak kullanılamaz.',
   code='class = 5', run='err:SyntaxError')
mc('Aşağıdaki kodun çıktısı nedir?', ['<class \'int\'>', "<class 'str'>", "<class 'float'>", '11', '47'], 0,
   'İki tarafı da int\'e çevrildiği için toplam da int olur.', code='print(type(int("3") + int(4)))', run='out')
mc('Boşluğa hangisi gelirse çıktı `47` olur?', ['"4" + "7"', '4 + 7', '"4" * 7', '4 + "7"', 'int("4") + 7'], 0,
   'İki metin `+` ile yan yana birleştirilir: "47".', code='print(____)', blank='47',
   why={1: '4 + 7 sayı toplamıdır: 11.', 3: 'int + str → TypeError.', 4: '4 + 7 = 11.'})
fill('Boşluğu doldurun: `a`\'nın türünü yazdırsın.',
     '''
     a = "ABC"
     print(____(a))
     ''', ['type'], '`type()` bir değerin türünü (sınıfını) verir.', expect="<class 'str'>")
fill('Boşluğu doldurun: metin hâlindeki "45"i tam sayıya çevirip 5 ekleyin.',
     '''
     s = "45"
     print(____(s) + 5)
     ''', ['int'], '`int()` sayı görünümlü metni tam sayıya çevirir.', expect='50',
     whyFill={'str': 'str metne çevirir; "45" + 5 TypeError verir.'})
code('Ondalıklı sayılar', 'Değişkeni yuvarlayıp hem tam sayı hem 1 basamaklı sonuç yazdırın.',
     '''
     x = 28793.54836
     print({{1}}(x))
     print(round(x, {{2}}))
     print({{3}}(x))
     ''', [['round'], ['1'], ['int']],
     ['Tek argümanlı `round` en yakın tam sayıya yuvarlar: 28794.', 'Virgülden sonra 1 basamak: 28793.5.', '`int` keser: 28793.'],
     '28794\n28793.5\n28793')
open_('Kullanıcıdan iki tam sayı alıp toplamını `Toplam: <sonuç>` biçiminde yazan programı yazınız.',
      '- `input()` metin döndürür; toplamak için `int()` ile çevrilmelidir.\n- Çevrilmezse "3" + "4" = "34" olur.',
      '''
      a = int(input())
      b = int(input())
      print("Toplam:", a + b)
      ''', stdin='3\n4\n', expect='Toplam: 7')
open_('`yas = 20` değişkenini kullanarak ekrana `Yaşım 20` yazdırın. **İki farklı yolla** yazınız.',
      '- Yol 1: `print("Yaşım", yas)` → virgül araya boşluk koyar.\n- Yol 2: `print("Yaşım " + str(yas))` → `+` ile birleştirirken sayı `str()` ile metne çevrilmeli.',
      '''
      yas = 20
      print("Yaşım", yas)
      print("Yaşım " + str(yas))
      ''', expect='Yaşım 20\nYaşım 20')
