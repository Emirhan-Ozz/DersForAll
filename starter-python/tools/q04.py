from lib import *
topic('kosullar')
part(1)
mc('`x, y, z = 3, 5, 7` iken `x >= 0 and x < 2` ifadesinin değeri nedir?', ['False', 'True', '0', '3', 'Hata'], 0,
   '`x >= 0` True ama `x < 2` False. `and` için ikisi de True olmalı → False.', code='''
   x, y, z = 3, 5, 7
   print(x >= 0 and x < 2)
   ''', run='out')
mc('`x, y, z = 3, 5, 7` iken `x != y - 2` ifadesinin değeri nedir?', ['False', 'True', '1', '3', 'Hata'], 0,
   'Aritmetik önce yapılır: y - 2 = 3. `3 != 3` → False.', code='''
   x, y, z = 3, 5, 7
   print(x != y - 2)
   ''', run='out')
mc('`x, y, z = 3, 5, 7` iken `x < 0 or x > 10` ifadesinin değeri nedir?', ['False', 'True', '0', '10', 'Hata'], 0,
   '`or` için en az biri True olmalı; 3 < 0 da 3 > 10 da yanlış → False.', code='''
   x, y, z = 3, 5, 7
   print(x < 0 or x > 10)
   ''', run='out')
mc('Python\'da `True` ve `False` hangi tam sayılara denk gelir?', ['True = 1, False = 0', 'True = 0, False = 1', 'True = -1, False = 0',
    'True = 1, False = -1', 'Tam sayı karşılıkları yoktur'], 0,
   'Boolean değerler 1 (True) ve 0 (False) üzerine kuruludur.', code='print(True + True, False * 5)', run='err:none')
mc('Aşağıdaki kodun çıktısı nedir?', ['Farklı', 'Aynı', 'Hata', '0.01', 'True'], 0,
   'Ondalıklı sayılar ikilik tabanda tam saklanamaz: d1 = 0.010000000000000009, d2 = 0.009999999999999787. `==` bu yüzden False verir.',
   code='''
   d1 = 1.11 - 1.10
   d2 = 2.11 - 2.10
   if d1 == d2:
       print("Aynı")
   else:
       print("Farklı")
   ''', run='out', why={1: 'Matematikte ikisi de 0.01 ama bilgisayarda küçük yuvarlama farkı vardır.'})
mc('`value = 1` iken aşağıdaki kod kaç satır yazar?', ['2 (bir, Tamamlandı)', '1 (bir)', '3', '5', '0'], 0,
   '`elif` zincirinde ilk doğru dal çalışır, kalan kontroller **atlanır**. Sonra "Tamamlandı" yazılır.',
   code='''
   value = 1
   if value == 0:
       print("sıfır")
   elif value == 1:
       print("bir")
   elif value >= 1:
       print("bir ya da büyük")
   else:
       print("çok büyük")
   print("Tamamlandı")
   ''', run='err:none', why={2: '`value >= 1` de doğru ama elif zincirinde ilk doğru daldan sonra diğerlerine bakılmaz.'})
mc('Aşağıdaki kod (elif değil ayrı if\'ler) `value = 1` iken ne yazar?', ['bir\nbir ya da büyük', 'bir', 'bir ya da büyük', 'sıfır', 'Hiçbir şey'], 0,
   'Ayrı `if`lerde (zincirleme) **her koşul** tek tek kontrol edilir; doğru olan her biri çalışır.',
   code='''
   value = 1
   if value == 0:
       print("sıfır")
   if value == 1:
       print("bir")
   if value >= 1:
       print("bir ya da büyük")
   ''', run='out')
mc('Boşluğa hangisi gelirse `n` sayısının mutlak değeri yazılır?', ['-n if n < 0 else n', 'n if n < 0 else -n', '-n if n > 0 else n',
    'if n < 0: -n', 'n < 0 ? -n : n'], 0,
   'Koşullu ifade: `A if koşul else B`. Koşul doğruysa A, değilse B.',
   code='''
   n = -34
   print(____)
   ''', blank='34', why={4: '`?:` C/Java/PHP yazımıdır; Python\'da yoktur.'})
mc('`print("T", "C", sep=".")` çıktısı nedir?', ['T.C', 'T C', 'T.C.', '.T.C', 'TC'], 0,
   '`sep` değerlerin **arasına** konacak karakteri belirler.', code='print("T", "C", sep=".")', run='out')
fill('Boşluğu doldurun: hiçbir şey yapmadan devam eden ifade.',
     '''
     x = 5
     if x == 2:
         print(x)
     else:
         ____
     print("bitti")
     ''', ['pass'], '`pass` "hiçbir şey yapma, devam et" demektir; boş blok bırakılamadığı için kullanılır.', expect='bitti')
fill('Boşluğu doldurun: "eşit değil" operatörü.',
     '''
     bolen = 8
     if bolen ____ 0:
         print(32 / bolen)
     ''', ['!='], '`!=` eşit değilse True verir. Sıfıra bölmeyi önlemek için kullanılır.', expect='4.0',
     whyFill={'<>': '`<>` Python 3\'te yoktur.'})
code('Not harfi', 'Puana göre harf notu veren kodu tamamlayın (85 → B).',
     '''
     puan = 85
     if puan >= 90:
         print("A")
     {{1}} puan >= 80:
         print("B")
     elif puan >= 70:
         print("C")
     {{2}}:
         print("F")
     ''', [['elif'], ['else']],
     ['Ek koşul için `elif` (else if).', 'Hiçbiri tutmazsa `else` (koşul yazılmaz).'], 'B')
open_('Kullanıcıdan bir tam sayı alıp **çift** ise `Çift`, **tek** ise `Tek` yazan programı yazınız.',
      '- Çift sayının 2\'ye bölümünden kalan 0\'dır: `sayi % 2 == 0`.',
      '''
      sayi = int(input())
      if sayi % 2 == 0:
          print("Çift")
      else:
          print("Tek")
      ''', stdin='7\n', expect='Tek')
part(2)
mc('`not (10 == 4) and 9 > 5` ifadesinin değeri nedir?', ['True', 'False', '9', '1', 'Hata'], 0,
   '10 == 4 False → not False = True. 9 > 5 True. True and True = True.', code='print(not (10 == 4) and 9 > 5)', run='out')
mc('`True` yerine `true` yazılırsa ne olur?', ['NameError', 'True olarak çalışır', 'False olarak çalışır', 'SyntaxError', '1 olarak çalışır'], 0,
   'Python büyük-küçük harf duyarlıdır; Boolean değerler büyük harfle başlar: `True`, `False`.', code='x = true', run='err:NameError')
mc('Aşağıdaki ifadelerden hangisi `not (a == b and c != d)` ile **aynı sonucu vermez**?',
   ['a != b and c == d', 'a != b or c == d', 'not (a == b) or not (c != d)', 'not (a == b and not (c == d))', 'not (a == b) or c == d'], 0,
   'De Morgan: not (A and B) = (not A) or (not B). Yani `a != b or c == d`. `and` ile yazılan şık farklıdır.')
mc('Kullanıcı 5 girerse çıktı nedir?', ['aralıkta\ntamamlandı', 'aralıkta', 'tamamlandı', 'Hiçbir şey', 'Hata'], 0,
   'İç içe if: iki koşul da sağlandığı için "aralıkta" yazılır. "tamamlandı" if\'lerin dışında olduğu için her durumda yazılır.',
   code='''
   deger = int(input())
   if deger >= 0:
       if deger <= 10:
           print("aralıkta")
   print("tamamlandı")
   ''', run='out', stdin='5\n')
mc('Kullanıcı 8 girerse çıktı nedir?', ['Girdiğiniz sayı aralıkta değil', 'Girdiğiniz sayı sekiz', 'Hiçbir şey yazmaz', 'Hata verir', 'Girdiğiniz sayı'], 0,
   'Varsayılan cevap baştan atanmış; hiçbir koşul tutmazsa o değer kalır.', code='''
   deger = int(input())
   cevap = "aralıkta değil"
   if deger == 0:
       cevap = "sıfır"
   elif deger == 1:
       cevap = "bir"
   print("Girdiğiniz sayı", cevap)
   ''', run='out', stdin='8\n')
mc('Boşluğa hangisi gelirse sadece 0 ile 10 arasındaki (dahil) sayılarda "aralıkta" yazılır?', ['deger >= 0 and deger <= 10', 'deger >= 0 or deger <= 10',
    'deger > 0 and deger < 10', 'not deger >= 0', 'deger >= 10 and deger <= 0'], 0,
   'İki koşulun **birlikte** sağlanması için `and`. `or` olsaydı her sayı en az bir koşulu sağlardı.',
   code='''
   for deger in [-1, 0, 10, 11]:
       if ____:
           print(deger, "aralıkta")
   ''', blank='0 aralıkta\n10 aralıkta', why={1: '`or` ile -1 ve 11 de "aralıkta" olur.', 2: '0 ve 10 dahil değil olur.'})
mc('`if` bloğunun içindeki satırları if\'e bağlayan nedir?', ['Girinti (boşluk)', 'Süslü parantez { }', 'Noktalı virgül', 'end if', 'begin/end'], 0,
   'Python\'da bloklar girinti ile belirlenir; `if koşul:` satırı iki nokta ile biter.')
fill('Boşluğu doldurun: büyük ya da eşit operatörü.',
     '''
     boy = 160
     if boy ____ 150:
         print("Ağacın boyu uzun")
     else:
         print("Ağacın boyu kısa")
     ''', ['>=', '>'], '`>=` büyük ya da eşit; `>` büyük.', expect='Ağacın boyu uzun')
fill('Boşluğu doldurun: x 2 değilse "değil" yazsın (mantıksal tersleme).',
     '''
     x = 5
     if ____ x == 2:
         print("değil")
     ''', ['not'], '`not` Boolean değeri tersine çevirir.', expect='değil')
code('Sayının işareti', 'Sayının pozitif, negatif ya da sıfır olduğunu yazan kodu tamamlayın.',
     '''
     sayi = int(input())
     if sayi {{1}} 0:
         print("pozitif")
     elif sayi {{2}} 0:
         print("sıfır")
     {{3}}
         print("negatif")
     ''', [['>'], ['=='], ['else:']],
     ['Pozitif: `> 0`.', 'Eşitlik karşılaştırması `==` (tek `=` atamadır).', 'Diğer tüm durumlar: `else:`'],
     'negatif', stdin='-3\n')
open_('Kullanıcıdan iki sayı alıp **büyük olanı** yazan programı yazınız. (Eşitse herhangi biri yazılabilir.)',
      '- `if a > b: print(a) else: print(b)`\n- Kısa yol: `print(a if a > b else b)`',
      '''
      a = int(input())
      b = int(input())
      if a > b:
          print(a)
      else:
          print(b)
      ''', stdin='4\n9\n', expect='9')
open_('Kullanıcıdan 0–3 arası bir sayı alıp yazıyla (`sıfır`, `bir`, `iki`, `üç`) yazan; aralık dışındaysa `çok büyük` yazan programı **if/elif/else** ile yazınız.',
      '- `elif` zinciri ilk doğru dalı çalıştırır, gerisini atlar.\n- Son `else` kalan tüm durumları kapsar.',
      '''
      value = int(input())
      if value == 0:
          print("sıfır")
      elif value == 1:
          print("bir")
      elif value == 2:
          print("iki")
      elif value == 3:
          print("üç")
      else:
          print("çok büyük")
      ''', stdin='2\n', expect='iki')
