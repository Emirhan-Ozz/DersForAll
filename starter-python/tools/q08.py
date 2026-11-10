from lib import *
topic('fonk2')
part(1)
mc('Aşağıdaki kodun çıktısı nedir?', ['5', '0', 'Hata', 'None', '10'], 0,
   '`global sonuc` sayesinde fonksiyon içindeki atama dışarıdaki (global) değişkeni değiştirir.', code='''
   sonuc = 0
   def topla(a, b):
       global sonuc
       sonuc = a + b
   topla(2, 3)
   print(sonuc)
   ''', run='out', why={1: '`global` olmasaydı 0 kalırdı; atama yerel bir değişken oluştururdu.'})
mc('Aşağıdaki kodun çıktısı nedir? (global satırı **yok**)', ['0', '5', 'Hata', 'None', '2'], 0,
   'global bildirilmeden yapılan atama yerel bir `sonuc` oluşturur; dıştaki değişmez.', code='''
   sonuc = 0
   def topla(a, b):
       sonuc = a + b
   topla(2, 3)
   print(sonuc)
   ''', run='out')
mc('Aşağıdaki kod çalıştırılırsa ne olur?', ['UnboundLocalError (atama varken yerel sayılır)', '1 yazar', '0 yazar', 'SyntaxError', 'Hiçbir şey'], 0,
   'Fonksiyon içinde değişkene atama varsa Python onu yerel sayar; önce okumaya çalışınca hata verir. Çözüm: `global sayac`.',
   code='''
   sayac = 0
   def artir():
       sayac += 1
   artir()
   ''', run='err:UnboundLocalError')
mc('Aşağıdaki kod kaç sayı yazar?', ['6', '5', '8', '9', '0'], 0,
   'Parametre verilmezse varsayılan n=5 kullanılır: 5, 4, 3, 2, 1, 0 → 6 sayı.', code='''
   def gerisayim(n=5):
       for sayac in range(n, -1, -1):
           print(sayac)
   gerisayim()
   ''', run='err:none')
mc('`def AralikTopla(n=0, m):` tanımı ne olur?', ['SyntaxError: varsayılanlı parametreden sonra varsayılansız gelemez', 'Çalışır, n varsayılan 0 olur',
    'Çalışır, m varsayılan 0 olur', 'TypeError', 'NameError'], 0,
   'Varsayılan değerli parametreler **sona** yazılmalıdır. Kitaptaki bu örnek Python\'da geçersizdir: `def f(m, n=0)` doğrudur.',
   code='''
   def AralikTopla(n=0, m):
       return n + m
   ''', run='err:SyntaxError')
mc('Aşağıdaki kodun çıktısı nedir?', ['5050', '5150', '0', '100', 'Hata'], 0,
   'm verilmediği için 100 alınır: 1..100 toplamı 5050.', code='''
   def AralikTopla(n, m=100):
       toplam = 0
       for deger in range(n, m + 1):
           toplam += deger
       return toplam
   print(AralikTopla(1))
   ''', run='out')
mc('Özyinelemeli faktöriyelde boşluğa ne gelmeli?', ['return n * faktoriyel(n - 1)', 'return faktoriyel(n)', 'return n * faktoriyel(n + 1)', 'return n - 1', 'faktoriyel(n - 1)'], 0,
   'Fonksiyon kendini **küçülen** parametreyle çağırır; n == 0 durma koşuludur.', code='''
   def faktoriyel(n):
       if n == 0:
           return 1
       else:
           ____
   print(faktoriyel(6))
   ''', blank='720', why={1: 'Kendini aynı n ile çağırır: sonsuz özyineleme (RecursionError).', 4: 'return yok: None döner, çarpma hatası.'})
mc('`faktoriyel(0)` kaç döndürür (özyinelemeli tanıma göre)?', ['1', '0', 'None', 'Hata', '-1'], 0,
   'Durma koşulu: `if n == 0: return 1`. 0! = 1.', code='''
   def faktoriyel(n):
       if n == 0:
           return 1
       return n * faktoriyel(n - 1)
   print(faktoriyel(0))
   ''', run='out')
mc('Durma koşulu olmayan özyinelemeli fonksiyon ne olur?', ['RecursionError (sonsuz özyineleme)', '0 döndürür', 'None döndürür', 'SyntaxError', 'Bir kez çalışıp durur'], 0,
   'Her özyinelemeli fonksiyonun bir **durma (temel) koşulu** olmalıdır; yoksa çağrılar sınırı aşar.', code='''
   def f(n):
       return f(n - 1)
   f(3)
   ''', run='err:RecursionError')
fill('Boşluğu doldurun: fonksiyon içinde dışarıdaki değişkene atama yapılabilsin.',
     '''
     sayi1 = 0
     def SayiGir():
         ____ sayi1
         sayi1 = 12
     SayiGir()
     print(sayi1)
     ''', ['global'], '`global` bildirimi olmadan atama yerel değişken oluşturur.', expect='12')
fill('Boşluğu doldurun: renk parametresi verilmezse "black" olsun.',
     '''
     def Cokgen(kenar, renk____):
         return str(kenar) + " " + renk
     print(Cokgen(5))
     ''', ['="black"', "='black'", ' = "black"'], 'Varsayılan değer `parametre=deger` biçiminde tanımda verilir.', expect='5 black')
code('Özyinelemeli Fibonacci', 'n. Fibonacci sayısını özyinelemeyle hesaplayın (fibonacci(10) → 55).',
     '''
     def fibonacci(n):
         if n <= 0:
             return 0
         elif n == {{1}}:
             return 1
         else:
             return fibonacci(n - 2) {{2}} {{3}}(n - 1)
     print(fibonacci(10))
     ''', [['1'], ['+'], ['fibonacci']],
     ['İkinci durma koşulu: fibonacci(1) = 1.', 'Her sayı önceki iki sayının **toplamıdır**.', 'Fonksiyon kendini çağırır.'], '55')
open_('Özyineleme **kullanmadan** (döngüyle) faktöriyel hesaplayan `faktoriyel(n)` fonksiyonunu yazınız. (5 → 120, 0 → 1)',
      '- Sonuç 1\'den başlar.\n- `while n: sonuc *= n; n -= 1` ya da `for i in range(1, n + 1)`.',
      '''
      def faktoriyel(n):
          sonuc = 1
          while n:
              sonuc *= n
              n -= 1
          return sonuc
      ''', tests='''
      assert faktoriyel(5) == 120 and faktoriyel(0) == 1 and faktoriyel(1) == 1
      ''')
part(2)
mc('Yerel değişkenler için hangisi **yanlıştır**?', ['Program boyunca hafızada kalırlar.', 'Fonksiyon bitince silinirler.', 'Aynı ad farklı fonksiyonlarda kullanılabilir.',
    'Fonksiyon içinde tanımlanırlar.', 'Geçicidirler.'], 0,
   'Program boyunca hafızada kalan değişken **global** değişkendir; yereller fonksiyon bitince unutulur.')
mc('Aşağıdaki kodun çıktısı nedir?', ['8 5', '5 8', '8 8', '5 5', 'Hata'], 0,
   'İlk çağrı varsayılan n=5\'i kullanmaz çünkü 8 gönderildi; ikinci çağrıda parametre yok → 5.', code='''
   def f(n=5):
       return n
   print(f(8), f())
   ''', run='out')
mc('Aşağıdaki kodun çıktısı nedir?', ['13', '8', '21', '5', 'Hata'], 0,
   'Fibonacci (0, 1, 1, 2, 3, 5, 8, 13…): fibonacci(7) = 13.', code='''
   def fibonacci(n):
       if n <= 0:
           return 0
       elif n == 1:
           return 1
       return fibonacci(n - 2) + fibonacci(n - 1)
   print(fibonacci(7))
   ''', run='out')
mc('`Kontrol.py` dosyasındaki `AsalKontrol` fonksiyonunu başka programda kullanmanın doğru yolu hangisidir?', ['from Kontrol import AsalKontrol',
    'import AsalKontrol from Kontrol', 'include "Kontrol.py"', 'from AsalKontrol import Kontrol', 'using Kontrol.AsalKontrol'], 0,
   'Kendi dosyamız da bir modüldür: `from <dosya adı (.py olmadan)> import <fonksiyon adı>`. Ya da `import Kontrol` + `Kontrol.AsalKontrol(x)`.')
mc('Boşluğa hangisi gelirse çağrı çalışır? `def Cokgen(kenar, uzunluk, renk="black", dolgu=False)`', ['Cokgen(5, 30, "red", True)', 'Cokgen(5)', 'Cokgen()',
    'Cokgen(renk="red")', 'Cokgen(5, renk="red")'], 0,
   'Varsayılanı olmayan `kenar` ve `uzunluk` mutlaka gönderilmelidir; diğerleri isteğe bağlıdır.', code='''
   def Cokgen(kenar, uzunluk, renk="black", dolgu=False):
       return "ok"
   print(____)
   ''', blank='ok')
mc('Özyinelemeli faktoriyel(4) hesaplanırken fonksiyon toplam kaç kez çağrılır (ilk çağrı dahil)?', ['5', '4', '3', '1', '24'], 0,
   'faktoriyel(4) → (3) → (2) → (1) → (0): 5 çağrı. 0\'da durur.', code='''
   say = 0
   def faktoriyel(n):
       global say
       say += 1
       if n == 0:
           return 1
       return n * faktoriyel(n - 1)
   faktoriyel(4)
   print(say)
   ''', run='out')
mc('Hesap makinesi örneğinde `sayi1`, `sayi2`, `sonuc` neden global tanımlandı?', ['Birden fazla fonksiyon (SayiGir, Topla, Yazdir) aynı değerleri paylaşsın diye',
    'Program daha hızlı çalışsın diye', 'Python zorunlu kıldığı için', 'Yerel değişken tanımlanamadığı için', 'Varsayılan parametre olsun diye'], 0,
   'SayiGir değerleri okur, Topla hesaplar, Yazdir yazar; ortak değerler global olunca hepsi erişebilir.')
fill('Boşluğu doldurun: fonksiyon kendi kendini çağırsın (1\'den n\'e toplam).',
     '''
     def topla(n):
         if n == 0:
             return 0
         return n + ____(n - 1)
     print(topla(4))
     ''', ['topla'], 'Özyineleme: fonksiyon küçülen parametreyle kendini çağırır. 4+3+2+1 = 10.', expect='10')
fill('Boşluğu doldurun: özyinelemenin durma koşulu (n kaç olunca 1 döndürülmeli?).',
     '''
     def faktoriyel(n):
         if n == ____:
             return 1
         return n * faktoriyel(n - 1)
     print(faktoriyel(5))
     ''', ['0', '1'], 'n == 0 (ya da n == 1) olunca 1 döndürülür; yoksa sonsuz özyineleme olur.', expect='120')
code('Global sayaç', 'Her çağrıda global sayacı 1 artıran fonksiyonu tamamlayın.',
     '''
     sayac = 0
     def tikla():
         {{1}} sayac
         sayac {{2}} 1
     for i in range({{3}}):
         tikla()
     print(sayac)
     ''', [['global'], ['+='], ['3']],
     ['Dıştaki değişkene atama için `global`.', 'Bir artır: `+= 1`.', '3 kez çağrılınca sayac 3.'], '3')
open_('İki parametre alan `us(taban, kuvvet=2)` fonksiyonunu yazınız; kuvvet verilmezse karesini alsın. (`us(3)` → 9, `us(2, 5)` → 32)',
      '- Varsayılan parametre sona yazılır: `def us(taban, kuvvet=2):`\n- `return taban ** kuvvet`',
      '''
      def us(taban, kuvvet=2):
          return taban ** kuvvet
      ''', tests='''
      assert us(3) == 9 and us(2, 5) == 32
      ''')
open_('Bir sayının rakamları toplamını **özyinelemeyle** bulan `rakam_topla(n)` fonksiyonunu yazınız. (1234 → 10)',
      '- Durma: `n == 0` ise 0.\n- Son rakam `n % 10`, kalan sayı `n // 10`.\n- `return n % 10 + rakam_topla(n // 10)`',
      '''
      def rakam_topla(n):
          if n == 0:
              return 0
          return n % 10 + rakam_topla(n // 10)
      ''', tests='''
      assert rakam_topla(1234) == 10 and rakam_topla(7) == 7 and rakam_topla(0) == 0
      ''')
