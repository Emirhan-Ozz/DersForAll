from lib import *
topic('hazir')
part(1)
mc('`sqrt` fonksiyonunu kullanmak için doğru satır hangisidir?', ['from math import sqrt', 'import sqrt from math', 'include math.sqrt',
    'using math.sqrt', 'from sqrt import math'], 0,
   'Söz dizimi: `from modül_adı import fonksiyon_adı`. sqrt, standart kütüphanedeki `math` modülündedir.',
   code='''
   ____
   print(sqrt(16))
   ''', blank='4.0')
mc('`from math import sqrt` sonrası `print(sqrt(16))` ne yazar?', ['4.0', '4', '16', '256', 'Hata'], 0,
   'sqrt her zaman **float** döndürür.', code='''
   from math import sqrt
   print(sqrt(16))
   ''', run='out')
mc('`import math` yazıldıktan sonra karekök nasıl çağrılır?', ['math.sqrt(x)', 'sqrt(x)', 'math->sqrt(x)', 'math:sqrt(x)', 'sqrt.math(x)'], 0,
   'Modülün tamamı import edilince fonksiyon `modül.fonksiyon` biçiminde çağrılır (birleşik yapı).',
   code='''
   import math
   x = 25
   print(____)
   ''', blank='5.0', why={1: 'Sadece `import math` yapıldığında `sqrt` doğrudan tanınmaz: NameError.'})
mc('`sqrt("16")` çağrılırsa ne olur?', ['TypeError', '4.0', '"4"', 'ValueError', '16'], 0,
   'sqrt sadece sayı kabul eder; metin gönderilirse TypeError alınır.', code='''
   from math import sqrt
   sqrt("16")
   ''', run='err:TypeError')
mc('Aşağıdaki kodun çıktısı nedir?', ['4\nNone', '4\n4', 'None\n4', '4', 'Hata'], 0,
   'İçteki print 4 yazar ve **None** döndürür (değer döndürmeyen fonksiyon). Dıştaki print o None\'u yazar.',
   code='print(print(4))', run='out')
mc('`math.pow(2, 8)` ne döndürür?', ['256.0', '64.0', '16', '10', '256'], 0,
   'pow(x, y) = x üzeri y. Parametre sırası önemlidir: pow(8, 2) = 64.0. math.pow float döndürür.',
   code='''
   import math
   print(math.pow(2, 8))
   ''', run='out', why={1: 'Bu pow(8, 2) olurdu.', 4: 'math.pow sonucu float\'tır: 256.0.'})
mc('`math.fabs(-5)` ne döndürür?', ['5.0', '-5', '5', '-5.0', '25'], 0,
   'fabs mutlak değeri **float** olarak verir.', code='''
   import math
   print(math.fabs(-5))
   ''', run='out')
mc('`math.log(8, 2)` ne döndürür?', ['3.0', '2.0', '4.0', '16.0', '0.333'], 0,
   'log(x, y): x\'in y tabanında logaritması. 2³ = 8 → 3.0.', code='''
   import math
   print(math.log(8, 2))
   ''', run='out')
mc('`random()` fonksiyonu hangi aralıkta değer döndürür?', ['0 <= x < 1 ondalıklı sayı', '1 ile 100 arası tam sayı', '0 ile 1 dahil tam sayı',
    'Her zaman 0.5', '-1 ile 1 arası'], 0,
   '`random()` parametresizdir; 0 dahil, 1 hariç ondalıklı sözde rastgele sayı üretir.',
   code='''
   from random import random
   x = random()
   assert 0 <= x < 1
   ''', run='err:none')
fill('Boşluğu doldurun: 1 ile 6 arasında (6 dahil) zar atsın.',
     '''
     from random import randrange
     zar = randrange(1, ____)
     print(1 <= zar <= 6)
     ''', ['7'], '`randrange(a, b)` b\'yi dahil etmez; 6 dahil olsun diye 7 yazılır.', expect='True')
fill('Boşluğu doldurun: programı 1 saniye bekletsin.',
     '''
     from time import ____
     sleep(0)
     print("ok")
     ''', ['sleep'], '`time.sleep(saniye)` programı verilen süre kadar durdurur.', expect='ok')
code('Hipotenüs', 'Dik kenarları 3 ve 4 olan üçgenin hipotenüsünü hesaplayın.',
     '''
     {{1}} math import sqrt
     a, b = 3, 4
     c = {{2}}(a {{3}} 2 + b ** 2)
     print(c)
     ''', [['from'], ['sqrt'], ['**']],
     ['`from modül import fonksiyon`.', 'Karekök: sqrt.', 'Kare almak için `**`.'], '5.0')
open_('Kullanıcıdan bir sayı alıp **karekökünü** `math` modülüyle hesaplayan ve yazan programı yazınız. (16 → 4.0)',
      '- `from math import sqrt` ya da `import math` + `math.sqrt()`.\n- Sayı `float(input())` ile alınır.',
      '''
      from math import sqrt
      sayi = float(input())
      print(sqrt(sayi))
      ''', stdin='16\n', expect='4.0')
part(2)
mc('`from random import random` sonrası `random(20)` çağrılırsa ne olur?', ['TypeError (parametre almaz)', '0–20 arası sayı döner', '20 döner',
    'NameError', '0.2 döner'], 0,
   '`random()` parametresiz bir fonksiyondur; parametre gönderilirse TypeError alınır.', code='''
   from random import random
   random(20)
   ''', run='err:TypeError')
mc('`sqrt()` parametresiz çağrılırsa ne olur?', ['TypeError', '0.0 döner', 'None döner', 'SyntaxError', '1.0 döner'], 0,
   'Fonksiyona beklenenden az ya da çok parametre göndermek TypeError verir.', code='''
   from math import sqrt
   sqrt()
   ''', run='err:TypeError')
mc('`print`, `input`, `int`, `type` gibi fonksiyonlar neden import edilmeden kullanılabilir?', ['`__builtins__` (yerleşik işlevler) modülünde oldukları için',
    'Python\'a sonradan yüklendikleri için', 'math modülünde oldukları için', 'Fonksiyon olmadıkları için', 'Sadece IDLE\'da çalıştıkları için'], 0,
   'Yerleşik işlevler `__builtins__` modülündedir ve import gerekmez. Diğer modüllerdeki fonksiyonlar için import şarttır.')
mc('Bir modüldeki tüm fonksiyonları listeleyen fonksiyon hangisidir?', ['dir()', 'id()', 'help()', 'list()', 'type()'], 0,
   '`dir(math)` math modülündeki tüm adları listeler. `id()` nesnenin adresini, `help()` açıklamayı verir.')
mc('Kitaptaki `from time import clock` satırı güncel Python 3\'te ne yapar?', ['ImportError verir; clock kaldırılmıştır, yerine perf_counter kullanılır.',
    'Süreyi saniye olarak ölçer.', 'Saati ekrana yazar.', 'SyntaxError verir.', 'Programı 1 saniye bekletir.'], 0,
   '`time.clock()` Python 3.8\'de kaldırıldı. Süre ölçmek için `time.perf_counter()` (ya da `time.time()`) kullanılır.',
   code='from time import clock', run='err:ImportError')
mc('Boşluğa hangisi gelirse kod 2 basamaklı yuvarlanmış pi yazar?', ['math.pi', 'math.pi()', 'pi', 'math.PI', 'math.e'], 0,
   '`pi` math modülünde bir **sabittir**, fonksiyon değildir; parantez almaz.', code='''
   import math
   print(round(____, 2))
   ''', blank='3.14', why={1: 'pi bir sayıdır; çağrılamaz (TypeError).', 3: 'Büyük-küçük harf duyarlı: PI yoktur.', 4: 'e = 2.718…'})
mc('Aşağıdaki kodun çıktısı nedir?', ['2.0', '4.0', '16.0', '256.0', '1.414'], 0,
   'İç içe çağrı: sqrt(16) = 4.0, sqrt(4.0) = 2.0.', code='''
   from math import sqrt
   print(sqrt(sqrt(16)))
   ''', run='out')
fill('Boşluğu doldurun: verilen listeden rastgele bir eleman seçsin.',
     '''
     from random import ____
     renk = choice(["kırmızı", "mavi", "yeşil"])
     print(renk in ["kırmızı", "mavi", "yeşil"])
     ''', ['choice'], '`choice()` değerler arasından rastgele birini seçer.', expect='True')
fill('Boşluğu doldurun: aynı rastgele diziyi tekrar üretmek için başlangıç değeri verilsin.',
     '''
     import random
     random.____(42)
     a = random.randrange(100)
     random.seed(42)
     print(a == random.randrange(100))
     ''', ['seed'], '`seed` rastgele dizinin başlangıç değerini belirler; aynı seed aynı diziyi verir.', expect='True')
code('Geri sayım', '5\'ten 0\'a geri sayan, her sayıdan sonra bekleyen kodu tamamlayın (testte 0 saniye beklenir).',
     '''
     from time import {{1}}
     for sayac in range(5, {{2}}, -1):
         print(sayac, end=" ")
         sleep({{3}})
     ''', [['sleep'], ['-1'], ['0']],
     ['Bekletme fonksiyonu: `sleep`.', '0 dahil olsun diye bitiş -1.', 'Normalde 1 yazılır; burada test için 0.'],
     '5 4 3 2 1 0')
open_('1–100 arasında (ikisi de dahil) **5 tane** rastgele tam sayı üretip yan yana yazan programı yazınız.',
      '- `from random import randrange` ya da `randint`.\n- `randrange(1, 101)` 100\'ü dahil eder.',
      '''
      from random import randrange
      for i in range(5):
          print(randrange(1, 101), end=" ")
      ''', tests='''
      import random
      assert all(1 <= random.randrange(1, 101) <= 100 for _ in range(500))
      ''')
open_('`math` modülünü kullanarak 45 derecenin **radyan** karşılığını ve 100\'ün **10 tabanında** logaritmasını yazdırınız.',
      '- `math.radians(45)` → 0.785…\n- `math.log10(100)` → 2.0\n- Not: `math.cos(x)` gibi trigonometrik fonksiyonlar açıyı **radyan** cinsinden ister.',
      '''
      import math
      print(math.radians(45))
      print(math.log10(100))
      ''', expect='0.7853981633974483\n2.0')
