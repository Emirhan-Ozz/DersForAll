from lib import *
topic('donguler')
part(1)
mc('`list(range(1, 10, 2))` hangi değerleri üretir?', ['[1, 3, 5, 7, 9]', '[1, 3, 5, 7, 9, 11]', '[2, 4, 6, 8]', '[1, 2, 3, 4, 5, 6, 7, 8, 9]', '[1, 10, 2]'], 0,
   'range(başlangıç, bitiş, artış): 1\'den başla, 2\'şer art, **10 dahil değil**.', code='print(list(range(1, 10, 2)))', run='out')
mc('Aşağıdaki kodun çıktısı nedir?', ['21 18 15 12 9 6 3', '21 18 15 12 9 6 3 0', '0 3 6 9 12 15 18 21', '21 20 19 18', '3 6 9 12 15 18 21'], 0,
   'Negatif artış geriye sayar; bitiş (0) dahil değildir.', code='''
   for n in range(21, 0, -3):
       print(n, end=" ")
   ''', run='out')
mc('Aşağıdaki kodun çıktısı nedir?', ['4950', '5050', '4851', '100', '99'], 0,
   'range(1, 100) 1\'den **99**\'a kadardır (100 dahil değil): 99·100/2 = 4950.', code='''
   top = 0
   for i in range(1, 100):
       top += i
   print(top)
   ''', run='out', why={1: '5050 için range(1, 101) gerekirdi.'})
mc('`range(1, 1)` kaç değer üretir?', ['0', '1', '2', 'Sonsuz', 'Hata verir'], 0,
   'Başlangıç bitişe eşitse (ve artış pozitifse) hiç değer üretmez: boş aralık.', code='print(len(range(1, 1)))', run='out')
mc('Aşağıdaki kod kaç kez "Merhaba" yazar?', ['5', '4', '6', '0', 'Sonsuz'], 0,
   'sayac 1, 2, 3, 4, 5 için koşul doğru; 6 olunca döngü biter.', code='''
   sayac = 1
   while sayac <= 5:
       print("Merhaba")
       sayac += 1
   ''', run='err:none')
mc('Aşağıdaki kodun çıktısı nedir?', ['1 2', '1 2 3', '1 2 4 5', '1 2 3 4 5', '3'], 0,
   '`break` döngüyü **tamamen** bitirir. i = 3 olunca çıkılır.', code='''
   for i in range(1, 6):
       if i == 3:
           break
       print(i, end=" ")
   ''', run='out', why={2: 'Bu `continue` olsaydı olurdu: sadece 3 atlanırdı.'})
mc('Aşağıdaki kodun çıktısı nedir?', ['1 2 4 5', '1 2', '1 2 3 4 5', '3', '1 2 3'], 0,
   '`continue` o turun geri kalanını atlar ve döngünün başına döner; döngü devam eder.', code='''
   for i in range(1, 6):
       if i == 3:
           continue
       print(i, end=" ")
   ''', run='out')
mc('Boşluğa hangisi gelirse 1\'den 10\'a kadar (10 dahil) sayılar yazılır?', ['range(1, 11)', 'range(1, 10)', 'range(10)', 'range(0, 10)', 'range(1, 10, 1)'], 0,
   'Bitiş değeri dahil olmadığı için 10\'u dahil etmek için 11 yazılır.', code='''
   for n in ____:
       print(n, end=" ")
   ''', blank='1 2 3 4 5 6 7 8 9 10')
mc('İç içe döngüde "*" kaç kez yazılır?', ['12', '7', '3', '4', '16'], 0,
   'İçteki döngü, dıştaki döngünün **her turunda** baştan çalışır: 3 × 4 = 12.', code='''
   for i in range(3):
       for j in range(4):
           print("*", end="")
   ''', run='err:none')
fill('Boşluğu doldurun: değerleri yan yana, aralarında boşlukla yazsın.',
     '''
     for i in range(1, 4):
         print(i, ____=" ")
     ''', ['end'], '`end` yazdırılan değerin sonuna ne geleceğini belirler; varsayılan `\\n` (alt satır).', expect='1 2 3')
fill('Boşluğu doldurun: döngüyü hemen bitiren komut.',
     '''
     toplam = 0
     for x in [4, 6, -1, 8]:
         if x < 0:
             ____
         toplam += x
     print(toplam)
     ''', ['break'], 'Negatif sayı gelince döngüden çıkılır; 4 + 6 = 10.', expect='10',
     whyFill={'continue': 'continue sadece -1\'i atlardı, 8 de eklenirdi: 18.'})
code('Faktöriyel', 'Girilen sayının faktöriyelini while döngüsüyle hesaplayın (5 → 120).',
     '''
     faktoriyel = 1
     sayac = 1
     sayi = int(input())
     while sayac {{1}} sayi:
         faktoriyel {{2}} sayac
         sayac += {{3}}
     print(faktoriyel)
     ''', [['<='], ['*='], ['1']],
     ['Sayının kendisi de dahil: `<=`.', 'Her turda çarp: `faktoriyel *= sayac`.', 'Sayaç birer artar.'],
     '120', stdin='5\n')
open_('1\'den 100\'e kadar (100 dahil) olan sayıların toplamını **for döngüsüyle** hesaplayıp yazan programı yazınız.',
      '- Toplam değişkeni döngüden önce 0 yapılır.\n- `range(1, 101)` 100\'ü de içerir.\n- Sonuç: 5050',
      '''
      toplam = 0
      for i in range(1, 101):
          toplam += i
      print(toplam)
      ''', expect='5050')
part(2)
mc('Aşağıdaki kodun çıktısı nedir?', ['0 (0) 1 (1) 2 (2) 3 (20) 4 (4)', '0 (0) 1 (1) 2 (2) 3 (20)', '0 (0) 1 (1) 2 (2) 3 (3) 4 (4)', '0 1 2 20', 'Hata'], 0,
   'Döngü içinde `i`yi değiştirmek sadece o turu etkiler; for bir sonraki turda range\'deki sıradaki değeri verir.',
   code='''
   for i in range(5):
       print(i, end=" ")
       if i == 3:
           i = 20
       print("({})".format(i), end=" ")
   ''', run='out')
mc('`"{0:3}".format(5)` ne üretir?', ["'  5'", "'5  '", "'005'", "'5'", "'3'"], 0,
   'Sayılar varsayılan olarak **sağa** yaslanır; 3 karakterlik alan: iki boşluk + 5.', code='print(repr("{0:3}".format(5)))', run='out')
mc('Aşağıdaki while/else kodunun çıktısı nedir?', ['Ortalama = 3.0', 'Ortalama = 0', 'Hiçbir şey', 'Hata', 'Ortalama = 15'], 0,
   'Döngü `break` ile kesilmediği için normal bittiğinde `else` bloğu çalışır: (1+2+3+4+5)/5 = 3.0.', code='''
   sayac = toplam = 0
   for sayi in [1, 2, 3, 4, 5]:
       if sayi < 0:
           break
       sayac += 1
       toplam += sayi
   else:
       print("Ortalama =", toplam / sayac)
   ''', run='out')
mc('Aşağıdaki kodun çıktısı nedir?', ['Negatif', 'Negatif\nbitti', 'bitti', 'Hiçbir şey', 'Hata'], 0,
   'Döngü `break` ile terk edilirse döngünün `else` bloğu **çalışmaz**.', code='''
   for sayi in [4, -1, 6]:
       if sayi < 0:
           print("Negatif")
           break
   else:
       print("bitti")
   ''', run='out')
mc('Aşağıdaki kod ne yazar?', ['P y t h o n', 'Python', '6', 'P', 'Hata'], 0,
   '`for` bir metnin harflerini tek tek gezer.', code='''
   for harf in "Python":
       print(harf, end=" ")
   ''', run='out')
mc('Kaç kez döneceği **önceden bilinmeyen**, kullanıcı girişine bağlı döngüye ne denir?', ['Belirsiz döngü', 'Belirli döngü', 'İç içe döngü', 'Sonsuz değer döngüsü', 'For döngüsü'], 0,
   'Kullanıcının 999 girmesini bekleyen while gibi döngüler belirsizdir. Tekrar sayısı tahmin edilebilenler belirlidir.')
mc('Boşluğa hangisi gelirse kod, girilen negatif sayılara kadar olan toplamı yazar?', ['while True:', 'while False:', 'for True:', 'while x < 0:', 'loop:'], 0,
   '`while True` sonsuz döngüdür; çıkış `break` ile yapılır.', code='''
   toplam = 0
   ____
       giris = int(input())
       if giris < 0:
           break
       toplam += giris
   print(toplam)
   ''', stdin='3\n4\n-1\n', blank='7', why={1: 'while False hiç çalışmaz: 0 yazar.'})
fill('Boşluğu doldurun: 10\'dan 0\'a kadar (0 dahil) geri saysın.',
     '''
     for i in range(10, -1, ____):
         print(i, end=" ")
     ''', ['-1'], 'Geri saymak için artış negatif olmalı; bitiş -1 olduğu için 0 da dahil olur.', expect='10 9 8 7 6 5 4 3 2 1 0')
fill('Boşluğu doldurun: o turu atlayıp döngüye devam etsin (sadece tek sayılar yazılsın).',
     '''
     for i in range(1, 8):
         if i % 2 == 0:
             ____
         print(i, end=" ")
     ''', ['continue'], 'Çift sayılarda `continue` ile print atlanır.', expect='1 3 5 7',
     whyFill={'break': 'break 2 gelince döngüyü bitirirdi: sadece 1 yazardı.', 'pass': 'pass hiçbir şey yapmaz; çiftler de yazılırdı.'})
code('Çarpım tablosu', '1–3 arası çarpım tablosunu satır satır yazdırın.',
     '''
     for satir in range(1, {{1}}):
         for sutun in range(1, 4):
             print(satir {{2}} sutun, end=" ")
         {{3}}()
     ''', [['4'], ['*'], ['print']],
     ['3 dahil olsun diye bitiş 4.', 'Çarpım: `satir * sutun`.', 'Satır bitince alt satıra geç: boş `print()`.'],
     '1 2 3\n2 4 6\n3 6 9')
open_('1\'den 20\'ye kadar olan **çift** sayıları yan yana yazan programı yazınız.',
      '- `range(2, 21, 2)` doğrudan çiftleri verir.\n- Ya da `if i % 2 == 0` ile kontrol edilir.',
      '''
      for i in range(2, 21, 2):
          print(i, end=" ")
      ''', expect='2 4 6 8 10 12 14 16 18 20')
open_('Kullanıcı **0** girene kadar sayı alıp, girilen sayıların toplamını yazan programı **while** ile yazınız.',
      '- Kaç sayı girileceği bilinmiyor → belirsiz döngü (`while`).\n- 0 gelince `break` ile çık.',
      '''
      toplam = 0
      while True:
          sayi = int(input())
          if sayi == 0:
              break
          toplam += sayi
      print(toplam)
      ''', stdin='5\n10\n2\n0\n', expect='17')
