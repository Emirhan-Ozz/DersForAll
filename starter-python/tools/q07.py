from lib import *
topic('fonkyazma')
part(1)
mc('Python\'da fonksiyon tanımlamaya başlayan ayrılmış kelime hangisidir?', ['def', 'function', 'func', 'define', 'void'], 0,
   'Fonksiyon tanımı: `def isim(parametreler):` ve girintili gövde.', code='''
   ____ double(n):
       return 2 * n
   print(double(3))
   ''', blank='6', why={1: '`function` PHP/JavaScript yazımıdır.'})
mc('Aşağıdaki kodun çıktısı nedir?', ['6', '3', '2', 'None', 'Hata'], 0,
   '`double(3)` → 2 * 3 = 6 döndürülür, x\'e atanır ve yazdırılır.', code='''
   def double(n):
       return 2 * n
   x = double(3)
   print(x)
   ''', run='out')
mc('Aşağıdaki kodun çıktısı nedir?', ['None', '10', '0', 'Hata', 'Hiçbir şey'], 0,
   'Fonksiyonda `return` yok; hesaplanan değer geri döndürülmez. return\'süz fonksiyon **None** döndürür.',
   code='''
   def topla(a, b):
       sonuc = a + b
   print(topla(4, 6))
   ''', run='out', why={1: 'Değer fonksiyon içinde hesaplandı ama `return` ile dışarı gönderilmedi.'})
mc('`def say_n(n):` tanımlıyken `say_n()` çağrılırsa ne olur?', ['TypeError: eksik parametre', 'n = 0 kabul edilir', 'None döner', 'SyntaxError', 'Hiçbir şey olmaz'], 0,
   'Parametre bekleyen fonksiyona değer göndermemek TypeError (missing 1 required positional argument) verir.',
   code='''
   def say_n(n):
       print(n)
   say_n()
   ''', run='err:TypeError')
mc('`say_n(3, 5)` çağrısı (fonksiyon tek parametreli) ne olur?', ['TypeError: fazla parametre', 'Sadece 3 kullanılır', '3 ve 5 toplanır', 'SyntaxError', '5 kullanılır'], 0,
   'Fazla parametre de TypeError verir (takes 1 positional argument but 2 were given).', code='''
   def say_n(n):
       print(n)
   say_n(3, 5)
   ''', run='err:TypeError')
mc('Aşağıdaki kodun çıktısı nedir?', ['1. x = 2\n2. x = 10\n3. x = 2', '1. x = 2\n2. x = 10\n3. x = 10', '1. x = 10\n2. x = 10\n3. x = 10', '1. x = 2\n2. x = 2\n3. x = 2', 'Hata'], 0,
   'Fonksiyon içindeki `x = 10` **yerel** bir değişkendir; dışarıdaki x\'i değiştirmez.', code='''
   x = 2
   print("1. x =", x)
   def fun1():
       x = 10
       print("2. x =", x)
   fun1()
   print("3. x =", x)
   ''', run='out')
mc('Aşağıdaki kod çalıştırılırsa ne olur?', ['NameError: fonksiyon tanımından önce çağrılmış', '8 yazar', 'None yazar', 'SyntaxError', 'Hiçbir şey'], 0,
   'Python kodu yukarıdan aşağı çalıştırır; fonksiyon tanımı **çağrılmadan önce** yapılmalıdır.', code='''
   print(kare(4))
   def kare(a):
       return a * a
   ''', run='err:NameError')
mc('Aşağıdaki kodun çıktısı nedir?', ['Artırma sonrası, x = 5', 'Artırma sonrası, x = 6', 'Hata', 'Artırma sonrası, x = None', '6'], 0,
   'Fonksiyona x\'in **değeri** gönderilir; içerideki x += 1 dıştaki x\'i değiştirmez. Dönen değer atanmadığı için x 5 kalır.',
   code='''
   def artir(x):
       x += 1
       return x
   x = 5
   artir(x)
   print("Artırma sonrası, x =", x)
   ''', run='out', why={1: 'x = artir(x) yazılsaydı 6 olurdu.'})
mc('Boşluğa ne gelirse fonksiyon karenin alanını döndürür?', ['return a * a', 'print(a * a)', 'a * a', 'return a + a', 'return Alan'], 0,
   'Değeri çağıran yere göndermek için `return` kullanılır.', code='''
   def Alan(a):
       ____
   hesapla = Alan(5)
   print(hesapla)
   ''', blank='25', why={1: 'print ekrana yazar ama None döndürür: çıktı "25" ve "None" olur.', 2: 'Hesaplar ama döndürmez: None.'})
fill('Boşluğu doldurun: fonksiyon iki sayının büyüğünü geri göndersin.',
     '''
     def buyuk(a, b):
         if a > b:
             ____ a
         return b
     print(buyuk(7, 3))
     ''', ['return'], '`return` değeri döndürür ve fonksiyonu orada bitirir.', expect='7')
fill('Boşluğu doldurun: 1\'den n\'e kadar sayan fonksiyonu 3 ile çağırın.',
     '''
     def say_n(n):
         for i in range(1, n + 1):
             print(i, end=" ")
     ____(3)
     ''', ['say_n'], 'Fonksiyon adıyla ve parantez içinde değerle çağrılır.', expect='1 2 3')
code('EBOB fonksiyonu', 'İki sayının en büyük ortak bölenini bulan fonksiyonu tamamlayın (36, 24 → 12).',
     '''
     def gcd(s1, s2):
         kucuk = s1 if s1 < s2 else s2
         ebob = 1
         for i in range(1, kucuk {{1}} 1):
             if s1 % i == 0 {{2}} s2 % i == 0:
                 ebob = i
         {{3}} ebob
     print(gcd(36, 24))
     ''', [['+'], ['and'], ['return']],
     ['Küçük sayı da denensin: `kucuk + 1`.', 'İki sayıya **birlikte** bölünmeli: `and`.', 'Sonucu döndür: `return`.'], '12')
open_('İki sayının **toplamını döndüren** `topla(a, b)` fonksiyonunu yazınız ve `topla(3, 4)` sonucunu yazdırınız.',
      '- `def` ile tanımla, `return a + b` ile döndür.\n- print fonksiyonun içinde değil, çağırırken kullanılır.',
      '''
      def topla(a, b):
          return a + b
      print(topla(3, 4))
      ''', tests='''
      assert topla(3, 4) == 7 and topla(-1, 1) == 0
      ''', expect='7')
part(2)
mc('Fonksiyon tanımında parantez içindeki değişkene ne ad verilir?', ['Parametre', 'Gövde', 'Dönüş değeri', 'Modül', 'Sınıf'], 0,
   'Fonksiyon tanımı 4 parçadan oluşur: `def`, isim, parametre listesi, gövde.')
mc('Aşağıdaki kod kaç satır yazar?', ['2', '1', '3', '0', 'Hata'], 0,
   'Fonksiyon iki kez çağrıldığı için gövdesi iki kez çalışır.', code='''
   def selam():
       print("Merhaba")
   selam()
   selam()
   ''', run='err:none')
mc('Aşağıdaki kodun çıktısı nedir?', ['1\n1 2\n1 2 3', '1 2 3', '3\n3\n3', '1\n2\n3', 'Hata'], 0,
   'Fonksiyon döngü içinde i = 1, 2, 3 ile çağrılır; her çağrıda 1\'den i\'ye kadar yazar.', code='''
   def say_n(n):
       for i in range(1, n + 1):
           print(i, end=" ")
       print()
   for i in range(1, 4):
       say_n(i)
   ''', run='out')
mc('`main()` fonksiyonunun görevi kitapta nasıl anlatılır?', ['Programın ana akışını içerir; diğer fonksiyonları çağırır.', 'Python\'un zorunlu yerleşik fonksiyonudur.',
    'Programı sonlandırır.', 'Hata ayıklama yapar.', 'Sadece değişken tanımlar.'], 0,
   'main ana fonksiyondur; SayiGir, gcd gibi yardımcı fonksiyonları sırayla çağırır. Python\'da zorunlu değildir, düzen için kullanılır.')
mc('Asal sayı fonksiyonunda boşluğa hangisi gelmeli?', ['return False', 'return True', 'break', 'continue', 'pass'], 0,
   'Bir bölen bulunursa sayı asal değildir; hemen False döndürülür. Döngü bölen bulamadan biterse True.',
   code='''
   def asal(n):
       for d in range(2, n):
           if n % d == 0:
               ____
       return True
   print([x for x in range(2, 20) if asal(x)])
   ''', blank='[2, 3, 5, 7, 11, 13, 17, 19]')
mc('Aşağıdaki kodun çıktısı nedir?', ['15', '10', '5', 'None', 'Hata'], 0,
   'Fonksiyonlar iç içe çağrılabilir: kare(3) = 9, topla(9, 6) = 15.', code='''
   def kare(a):
       return a * a
   def topla(a, b):
       return a + b
   print(topla(kare(3), 6))
   ''', run='out')
mc('`def say_n(n)` fonksiyonu `say_n(3.2)` ile çağrılırsa (içinde `range(1, n + 1)` var) ne olur?', ['TypeError (range tam sayı ister)', '1 2 3 yazar', '1 2 3 4 yazar', 'SyntaxError', 'Hiçbir şey yazmaz'], 0,
   'range\'e ondalıklı sayı verilemez; çalışma zamanında TypeError alınır.', code='''
   def say_n(n):
       for i in range(1, n + 1):
           print(i)
   say_n(3.2)
   ''', run='err:TypeError')
fill('Boşluğu doldurun: `return` içermeyen fonksiyon hangi değeri döndürür?',
     '''
     def f():
         x = 5
     print(f() is ____)
     ''', ['None'], 'return yazılmayan (ya da boş return olan) fonksiyon `None` döndürür.', expect='True')
fill('Boşluğu doldurun: parametresiz fonksiyon tanımı.',
     '''
     def menu____:
         return "T)opla F)ark"
     print(menu())
     ''', ['()'], 'Parametre yoksa da parantezler yazılır: `def menu():`', expect='T)opla F)ark')
code('Kısıtlı veri girişi', 'Değer aralık dışındaysa tekrar soran fonksiyonu tamamlayın.',
     '''
     def arasindami(ilk, son):
         if ilk > son:
             ilk, son = {{1}}, ilk
         deger = int(input())
         {{2}} deger < ilk or deger > son:
             deger = int(input())
         return deger
     print(arasindami(20, {{3}}))
     ''', [['son'], ['while'], ['10']],
     ['İlk büyükse yer değiştir: `ilk, son = son, ilk`.', 'Geçerli değer girilene kadar tekrar: `while`.', '20 ve 10 verildi; fonksiyon sırayı kendisi düzeltir.'],
     '16', stdin='4\n21\n16\n')
open_('Bir sayının **çift olup olmadığını** True/False döndüren `cift_mi(n)` fonksiyonunu yazınız.',
      '- `return n % 2 == 0` karşılaştırmanın sonucu zaten True/False\'tur.',
      '''
      def cift_mi(n):
          return n % 2 == 0
      ''', tests='''
      assert cift_mi(4) is True and cift_mi(7) is False and cift_mi(0) is True
      ''')
open_('Verilen yükseklikte `*` karakterinden **dik üçgen** çizen `ucgen(n)` fonksiyonunu yazınız. (`ucgen(3)` → `*`, `**`, `***` alt alta)',
      '- `for i in range(1, n + 1): print("*" * i)`\n- Metin × sayı metni tekrarlar.',
      '''
      def ucgen(n):
          for i in range(1, n + 1):
              print("*" * i)
      ucgen(3)
      ''', expect='*\n**\n***')
