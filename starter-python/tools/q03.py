from lib import *
topic('ifadeler')
part(1)
mc('`print(25 // 4, 25 % 4)` çıktısı nedir?', ['6 1', '6.25 1', '6 0', '1 6', '6.25 0'], 0,
   '`//` tam sayı bölmesi (bölüm): 6. `%` kalan: 25 = 4·6 + 1 → 1.', code='print(25 // 4, 25 % 4)', run='out')
mc('`print(4 // 25, 4 % 25)` çıktısı nedir?', ['0 4', '0 0', '4 0', '0.16 4', '6 1'], 0,
   'Küçük sayı büyüğe tam bölünemez: bölüm 0, kalan sayının kendisi (4).', code='print(4 // 25, 4 % 25)', run='out')
mc('`print(25 / 4)` çıktısı nedir?', ['6.25', '6', '6.0', '1', '6,25'], 0,
   '`/` her zaman ondalıklı (float) sonuç verir.', code='print(25 / 4)', run='out')
mc('`print(10 / 2)` çıktısı nedir?', ['5.0', '5', '5.00', '2', 'TypeError'], 0,
   '`/` iki tam sayıya uygulansa bile sonuç **float**tur: 5.0. Tam sayı istersen `//` kullan.',
   code='print(10 / 2)', run='out', why={1: '5 için `10 // 2` yazılmalı.'})
mc('`print(2 ** 3 ** 2)` çıktısı nedir?', ['512', '64', '36', '18', '12'], 0,
   '`**` **sağdan** birleşir: önce 3 ** 2 = 9, sonra 2 ** 9 = 512.', code='print(2 ** 3 ** 2)', run='out',
   why={1: '(2 ** 3) ** 2 = 64 olurdu; ama ** sağdan sola işlenir.'})
mc('`print(2 + 3 * 4)` çıktısı nedir?', ['14', '20', '24', '9', '234'], 0,
   'Çarpımsal operatörler (`*`, `/`, `//`, `%`) toplamsaldan önce gelir: 3 * 4 = 12, 2 + 12 = 14.', code='print(2 + 3 * 4)', run='out')
mc('`print(-2 ** 2)` çıktısı nedir?', ['-4', '4', '-2', '2', 'Hata'], 0,
   'Öncelik tablosunda `**`, tekli eksiden (-) önce gelir: -(2 ** 2) = -4.', code='print(-2 ** 2)', run='out')
mc('Kullanıcı 10000 saniye girdi. Boşluğa ne gelmeli ki dakika doğru hesaplansın?', ['saniye // 60', 'saniye / 60', 'saniye % 60', 'saniye * 60', 'saniye // 3600'], 0,
   'Önce saat çıkarıldı, kalan saniyeden dakika `// 60` ile tam olarak bulunur: 10000 sn = 2 sa 46 dk 40 sn.',
   code='''
   saniye = 10000
   saat = saniye // 3600
   saniye = saniye % 3600
   dakika = ____
   saniye = saniye % 60
   print(saat, dakika, saniye)
   ''', blank='2 46 40', why={1: '`/` ondalık verir: 46.666…'})
mc('`print(3 * "ab")` çıktısı nedir?', ['ababab', 'ab3', '3ab', 'TypeError', 'ab ab ab'], 0,
   'Metin × sayı → metin o kadar tekrar edilir.', code='print(3 * "ab")', run='out')
fill('Boşluğu doldurun: `x = x * (y + z)` ifadesinin kısa yazımı.',
     '''
     x, y, z = 2, 3, 4
     x ____ y + z
     print(x)
     ''', ['*='], '`x *= y + z` ifadesi `x = x * (y + z)` ile aynıdır; sağ taraf önce hesaplanır.', expect='14')
fill('Python\'da tek satırlık yorum hangi karakterle başlar?',
     '''
     ____ Bu satır yorumdur, çalışmaz
     print("tamam")
     ''', ['#'], '`#` ile başlayan kısım satır sonuna kadar yorumdur; yorumlayıcı onu yok sayar.', expect='tamam')
code('Saniyeyi parçalara ayırma', 'Girilen saniyeyi saat, dakika, saniyeye ayıran programı tamamlayın.',
     '''
     saniye = int(input())
     saat = saniye {{1}} 3600
     saniye = saniye {{2}} 3600
     dakika = saniye // 60
     saniye = saniye % {{3}}
     print(saat, "sa", dakika, "dk", saniye, "sn")
     ''', [['//'], ['%'], ['60']],
     ['1 saat = 3600 saniye; tam saat sayısı `//` ile.', 'Kalan saniye `%` ile.', 'Dakikadan arta kalan saniye: `% 60`.'],
     '2 sa 46 dk 40 sn', stdin='10000\n')
open_('Kullanıcıdan iki tam sayı alıp `deger1 + deger2 = toplam` biçiminde yazan programı yazınız. (3 ve 4 girilirse: `3 + 4 = 7`)',
      '- Kitaptaki ilk örnek: `int(input(...))` ile iki sayı alınır.\n- `print(deger1, "+", deger2, "=", toplam)` virgüllerle aralara boşluk koyar.',
      '''
      deger1 = int(input("Bir sayı giriniz: "))
      deger2 = int(input("Lütfen diğer sayıyı giriniz: "))
      toplam = deger1 + deger2
      print(deger1, "+", deger2, "=", toplam)
      ''', stdin='3\n4\n', expect='Bir sayı giriniz: Lütfen diğer sayıyı giriniz: 3 + 4 = 7')
part(2)
mc('Aşağıdaki kod hangi tür hataya neden olur?', ['Söz dizimi hatası (SyntaxError)', 'Çalışma zamanı hatası (NameError)',
    'Mantık hatası', 'ZeroDivisionError', 'Hata vermez'], 0,
   'Sol tarafta işlem olan atama (`y + 2 = x`) geçersizdir. Söz dizimi hataları program çalışmadan önce yakalanır.',
   code='''
   y = 5
   x = y + 2
   y + 2 = x
   ''', run='err:SyntaxError')
mc('`print(32 / 0)` çalıştırılırsa hangi hata alınır?', ['ZeroDivisionError', 'SyntaxError', 'NameError', 'ValueError', 'Hata vermez, 0 yazar'], 0,
   'Sıfıra bölme bir **çalışma zamanı** hatasıdır: `ZeroDivisionError: division by zero`.', code='print(32 / 0)', run='err:ZeroDivisionError')
mc('Program çalışıyor, hata vermiyor ama **yanlış sonuç** üretiyor. Bu hangi hata türüdür?',
   ['Mantık hatası', 'Söz dizimi hatası', 'Çalışma zamanı hatası', 'İsim hatası (NameError)', 'Tür hatası (TypeError)'], 0,
   'Mantık hatasında yorumlayıcı uyarı vermez (ör. bölünen/bölen yer değiştirmiş). Bulması en zor hata türüdür.')
mc('Aşağıdakilerden hangisi **söz dizimi hatası** örneği değildir?',
   ['Tanımlanmamış değişkeni kullanmak', 'Eşleşmeyen parantez: `(3 + 4))`', 'Eşleşmeyen tırnak: `("hello\')`',
    'Hatalı girinti', '`y + 2 = x` ataması'], 0,
   'Tanımlanmamış değişken (`NameError`) çalışma zamanında ortaya çıkar; kod söz dizimi olarak doğrudur.')
mc('Aşağıdaki kodun çıktısı nedir?', ['14.2', '14', '14.0', '4 10.2', 'TypeError'], 0,
   'int ile float karışık işlemde sonuç float olur.', code='''
   x = 4
   y = 10.2
   print(x + y)
   ''', run='out')
mc('Cebirdeki `3x + 2y - 5` Python\'da nasıl yazılır?', ['3*x + 2*y - 5', '3x + 2y - 5', '3(x) + 2(y) - 5', '3.x + 2.y - 5', '3 x + 2 y - 5'], 0,
   'Python\'da örtülü çarpma yoktur; `3x` yerine `3*x` yazılır. Boşluklar önceliği etkilemez.',
   code='''
   x, y = 2, 3
   print(____)
   ''', blank='7', why={1: '`3x` geçersizdir (SyntaxError).', 2: '`3(x)` sayıyı fonksiyon gibi çağırmaya çalışır: TypeError.'})
mc('Aşağıdaki kodun çıktısı nedir?', ['x--> 20  y--> 20', 'x--> 5  y--> 20', 'x--> 20  y--> 5', 'x--> 15  y--> 15', 'Hata'], 0,
   '`x += 15` ile `x = x + 15` aynıdır; iki değişken de 20 olur.', code='''
   y = 5
   y = y + 15
   x = 5
   x += 15
   print("x-->", x, " y-->", y)
   ''', run='out')
fill('Boşluğu doldurun: 17\'nin 5\'e bölümünden kalanı yazdırsın.',
     'print(17 ____ 5)', ['%'], 'Kalan (mod) operatörü `%`: 17 = 5·3 + 2.', expect='2',
     whyFill={'//': '`//` bölümü verir (3), kalanı değil.'})
fill('Boşluğu doldurun: 2\'nin 10. kuvvetini yazdırsın.',
     'print(2 ____ 10)', ['**'], 'Üs alma operatörü `**`. `^` Python\'da üs değildir.', expect='1024',
     whyFill={'^': '`^` Python\'da bit düzeyinde XOR\'dur: 2 ^ 10 = 8.'})
code('Dijital saat', '125 dakikayı `2:05` biçiminde yazdıran kodu tamamlayın (dakika tek haneliyse başına 0 gelsin).',
     '''
     toplam = 125
     saat = toplam // 60
     dakika = toplam {{1}} 60
     onlar = dakika {{2}} 10
     birler = dakika % 10
     print(saat, ":", onlar, birler, {{3}}="")
     ''', [['%'], ['//'], ['sep']],
     ['Dakika = kalan: 125 % 60 = 5.', 'Onlar basamağı: 5 // 10 = 0.', '`sep=""` değerler arasına boşluk koymaz.'],
     '2:05')
open_('Kullanıcıdan bir dairenin yarıçapını (ondalıklı) alıp alanını `pi * r * r` ile hesaplayıp **2 basamağa yuvarlayarak** yazan programı yazınız. (pi = 3.14159, r = 2 → 12.57)',
      '- Ondalıklı giriş için `float(input())`.\n- Yuvarlama `round(sayi, 2)`.',
      '''
      r = float(input())
      alan = 3.14159 * r * r
      print(round(alan, 2))
      ''', stdin='2\n', expect='12.57')
open_('Kullanıcıdan alınan **dakika** değerini saat ve dakikaya çeviren programı yazınız. (135 → `2 saat 15 dakika`)',
      '- Saat: `dakika // 60`\n- Kalan dakika: `dakika % 60`',
      '''
      dakika = int(input())
      print(dakika // 60, "saat", dakika % 60, "dakika")
      ''', stdin='135\n', expect='2 saat 15 dakika')
