from lib import *
topic('listeler')
part(1)
mc('`data = [10, 20, 30, 40, 50, 60]` iken `print(data[-1], data[-6])` çıktısı nedir?', ['60 10', '10 60', '50 10', '60 20', 'IndexError'], 0,
   'Negatif indeks sondan sayar: -1 son eleman, -6 bu listede ilk eleman.', code='''
   data = [10, 20, 30, 40, 50, 60]
   print(data[-1], data[-6])
   ''', run='out')
mc('Aşağıdaki kodun çıktısı nedir?', ['[10, 20, 35, 40] [10, 20, 35, 40]', '[10, 20, 30, 40] [10, 20, 35, 40]', '[10, 20, 35, 40] [10, 20, 30, 40]',
    '[10, 20, 30, 40] [10, 20, 30, 40]', 'Hata'], 0,
   '`b = a` yeni liste oluşturmaz; ikisi **aynı listeyi** gösterir (örtüşme). b değişince a da değişir. (Kitaptaki çıktı burada hatalıdır!)',
   code='''
   a = [10, 20, 30, 40]
   b = a
   b[2] = 35
   print(a, b)
   ''', run='out', why={1: 'Bu, b ayrı bir liste olsaydı (b = a[:] ya da kopya) doğru olurdu.'})
mc('Aşağıdaki kodun çıktısı nedir?', ['True False', 'True True', 'False False', 'False True', 'Hata'], 0,
   'a ve b değerce eşit (`==` True) ama ayrı ayrı oluşturuldukları için farklı nesneler (`is` False).', code='''
   a = [10, 20, 30, 40]
   b = [10, 20, 30, 40]
   print(a == b, a is b)
   ''', run='out')
mc('`print([0] * 3 + [1])` çıktısı nedir?', ['[0, 0, 0, 1]', '[1, 1, 1]', '[0, 1, 0, 1, 0, 1]', '[3, 1]', 'Hata'], 0,
   '`*` listeyi tekrarlar, `+` listeleri birleştirir.', code='print([0] * 3 + [1])', run='out')
mc('`a = [2, 4]` iken `a += 20` çalıştırılırsa ne olur?', ['TypeError (int liste değil)', '[2, 4, 20]', '[22, 24]', '[2, 4] (değişmez)', 'SyntaxError'], 0,
   'Listeye `+=` ile ancak liste eklenebilir: `a += [20]`. Tam sayı tek başına eklenemez.', code='''
   a = [2, 4]
   a += 20
   ''', run='err:TypeError')
mc('`Lst = [10, 20, 30, 40, 50, 60, 70, 80]` iken `Lst[2:5]` nedir?', ['[30, 40, 50]', '[20, 30, 40, 50]', '[30, 40, 50, 60]', '[20, 30, 40]', '[30, 50]'], 0,
   'Dilimleme `[başlangıç:bitiş]`: başlangıç dahil, bitiş **hariç** → indeks 2, 3, 4.', code='''
   Lst = [10, 20, 30, 40, 50, 60, 70, 80]
   print(Lst[2:5])
   ''', run='out')
mc('`Lst = [10, 20, 30, 40, 50]` iken `Lst[::-1]` nedir?', ['[50, 40, 30, 20, 10]', '[10, 20, 30, 40, 50]', '[50]', '[10]', 'Hata'], 0,
   'Artış -1 ile liste **ters** çevrilmiş olarak dilimlenir.', code='''
   Lst = [10, 20, 30, 40, 50]
   print(Lst[::-1])
   ''', run='out')
mc('Aşağıdaki kodun çıktısı nedir?', ["[[0, 0, 5], [0, 0, 5]]", "[[0, 0, 5], [0, 0, 0]]", "[[0, 0, 0], [0, 0, 5]]", "[[0, 5, 0], [0, 5, 0]]", 'Hata'], 0,
   '`[[0]*3]*2` aynı iç listeyi 2 kez **paylaştırır**; birini değiştirmek hepsini değiştirir. Doğrusu: `[[0]*3 for _ in range(2)]`.',
   code='''
   a = [[0] * 3] * 2
   a[1][2] = 5
   print(a)
   ''', run='out', why={2: 'Bu, satırlar ayrı oluşturulsaydı (list comprehension ile) doğru olurdu.'})
mc('Boşluğa hangisi gelirse listenin sonuna eleman eklenir?', ['lst.append("four")', 'lst.add("four")', 'lst.push("four")', 'lst.insert("four")', 'lst + "four"'], 0,
   '`append` sonuna ekler ve listeyi değiştirir. `lst += ["four"]` de aynı işi yapar.', code='''
   lst = ["one", "two", "three"]
   ____
   print(lst)
   ''', blank="['one', 'two', 'three', 'four']", why={1: 'add set (küme) metodudur.', 2: 'push Python listesinde yoktur.'})
fill('Boşluğu doldurun: 5 listede var mı?',
     '''
     liste = list(range(0, 21, 2))
     print(5 ____ liste)
     ''', ['in'], '`in` üyelik sorgular; True/False döner. 5 tek sayı olduğu için listede yok.', expect='False')
fill('Boşluğu doldurun: listenin 2. indeksindeki elemanı silsin.',
     '''
     a = list(range(10, 51, 10))
     ____ a[2]
     print(a)
     ''', ['del'], '`del a[2]` 30\'u siler.', expect='[10, 20, 40, 50]')
code('Kullanıcıdan liste', '-1 girilene kadar alınan sayılardan liste oluşturun.',
     '''
     sonuc = {{1}}
     sayi = 0
     while sayi >= 0:
         sayi = int(input())
         if sayi >= 0:
             sonuc {{2}} [sayi]
     print(sonuc, {{3}}(sonuc))
     ''', [['[]', 'list()'], ['+='], ['len']],
     ['Boş liste: `[]`.', 'Listeye liste eklenir: `+= [sayi]`.', 'Eleman sayısı: `len`.'],
     '[2, 3, 55] 3', stdin='2\n3\n55\n-1\n')
open_('Bir listedeki sayıların **toplamını ve ortalamasını** (hazır `sum` kullanmadan, döngüyle) yazan programı yazınız. `[12, 23, 43, 54, 55]` → 187 ve 37.4',
      '- Toplam 0\'dan başlar, `for sayi in liste: toplam += sayi`.\n- Ortalama = toplam / len(liste).',
      '''
      liste = [12, 23, 43, 54, 55]
      toplam = 0
      for sayi in liste:
          toplam += sayi
      print(toplam, toplam / len(liste))
      ''', expect='187 37.4')
part(2)
mc('`a = [10, 20, 30, 40]` iken `print(a[4])` ne olur?', ['IndexError', '40', 'None', '0', '10'], 0,
   'Geçerli indeksler 0–3\'tür; listenin sınırı dışına erişim IndexError verir.', code='''
   a = [10, 20, 30, 40]
   print(a[4])
   ''', run='err:IndexError')
mc('`list(range(10, -1, -1))` kaç elemanlıdır?', ['11', '10', '9', '0', '12'], 0,
   '10\'dan 0\'a kadar (0 dahil): 10, 9, …, 0 → 11 eleman.', code='print(len(list(range(10, -1, -1))))', run='out')
mc('Aşağıdaki kodun çıktısı nedir?', ["[10, 20, 'a', 'b', 70, 80]", "[10, 20, 'a', 'b', 50, 60, 70, 80]", "[10, 'a', 'b', 60, 70, 80]",
    "['a', 'b', 30, 40, 50, 60, 70, 80]", 'Hata'], 0,
   'Dilime atama: indeks 2–5 (30, 40, 50, 60) yerine iki eleman konur; liste kısalır.', code='''
   lst = [10, 20, 30, 40, 50, 60, 70, 80]
   lst[2:6] = ["a", "b"]
   print(lst)
   ''', run='out')
mc('`b = [[2, 5], 7, [11, 4]]` iken `b[0]` ile `b[0:1]` farkı nedir?', ['b[0] = [2, 5]; b[0:1] = [[2, 5]]', 'İkisi de [2, 5]', 'b[0] = 2; b[0:1] = [2]',
    'b[0] = [[2, 5]]; b[0:1] = [2, 5]', 'İkisi de hata'], 0,
   'İndeks elemanın **kendisini**, dilim ise o elemanı içeren **yeni listeyi** döndürür.', code='''
   b = [[2, 5], 7, [11, 4]]
   print(b[0], b[0:1])
   ''', run='err:none')
mc('`matrix = [[100, 14, 8], [0, 243, 68], [90, 21, 7]]` iken `matrix[2][1]` nedir?', ['21', '243', '14', '68', '90'], 0,
   'İlk indeks satır, ikinci indeks sütun: 3. satır ([90, 21, 7]) içindeki 2. eleman → 21.', code='''
   matrix = [[100, 14, 8], [0, 243, 68], [90, 21, 7]]
   print(matrix[2][1])
   ''', run='out')
mc('Boşluğa hangisi gelirse 1–20 arası çift sayıların listesi oluşur?', ['[x for x in range(1, 21) if x % 2 == 0]', '[x for x in range(1, 20) if x % 2 == 1]',
    '[x if x % 2 == 0 for x in range(21)]', '[range(2, 21, 2)]', 'list(1, 20, 2)'], 0,
   'Liste oluşturma (comprehension): `[ifade for değişken in aralık if koşul]`.', code='print(____)', blank='[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]',
   why={3: 'Liste içinde tek eleman olarak range nesnesi olur: [range(2, 21, 2)].'})
mc('Aşağıdaki kodun çıktısı nedir?', ['[0, 0, 0, 0]', '[2, 4, 6, 8]', '[]', 'None', 'Hata'], 0,
   'Liste fonksiyona gönderildiğinde **aynı nesne** gider; fonksiyon içinde elemanlarını değiştirmek dıştaki listeyi de değiştirir.',
   code='''
   def SifirAta(lst):
       for i in range(len(lst)):
           lst[i] = 0
   a = [2, 4, 6, 8]
   SifirAta(a)
   print(a)
   ''', run='out')
fill('Boşluğu doldurun: listeyi küçükten büyüğe sıralasın.',
     '''
     a = [34, -19, 20, 8, 12]
     a.____()
     print(a)
     ''', ['sort'], '`sort()` listeyi artan sırada yerinde sıralar. `reverse()` ise ters çevirir.', expect='[-19, 8, 12, 20, 34]')
fill('Boşluğu doldurun: 0\'dan 9\'a tam sayı listesi.',
     '''
     a = ____(range(0, 10))
     print(a)
     ''', ['list'], '`list()` range\'in ürettiği değerlerden liste oluşturur.', expect='[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]')
code('Liste kopyalama', 'Listenin **ayrı bir kopyasını** oluşturan fonksiyonu tamamlayın; kopya değişince asıl liste değişmesin.',
     '''
     def ListeKopyala(lst):
         result = []
         for item {{1}} lst:
             result += [{{2}}]
         return result
     a = [10, 20, 30, 40]
     b = ListeKopyala(a)
     b[2] = 35
     print(a, b, a {{3}} b)
     ''', [['in'], ['item'], ['is']],
     ['Listeyi gezmek: `for item in lst`.', 'Her elemanı yeni listeye ekle.', 'Ayrı nesneler mi? `a is b` → False.'],
     '[10, 20, 30, 40] [10, 20, 35, 40] False')
open_('Bir listedeki **en büyük sayıyı** hazır `max` kullanmadan bulan `en_buyuk(lst)` fonksiyonunu yazınız.',
      '- İlk elemanı en büyük kabul et.\n- Listeyi gez; daha büyüğünü görünce güncelle.',
      '''
      def en_buyuk(lst):
          eb = lst[0]
          for x in lst:
              if x > eb:
                  eb = x
          return eb
      ''', tests='''
      assert en_buyuk([3, 9, 2]) == 9 and en_buyuk([-5, -2, -9]) == -2 and en_buyuk([7]) == 7
      ''')
open_('3 satır 4 sütunluk, tüm elemanları 0 olan bir matrisi **doğru şekilde** oluşturup `[1][2]` elemanını 5 yapan ve yazdıran programı yazınız (sadece bir eleman değişmeli).',
      '- `[[0] * 4] * 3` YANLIŞ: üç satır aynı listeyi paylaşır.\n- Doğru: `[[0] * 4 for _ in range(3)]` ya da döngüyle `append([0] * 4)`.',
      '''
      a = [[0] * 4 for _ in range(3)]
      a[1][2] = 5
      print(a)
      ''', expect='[[0, 0, 0, 0], [0, 0, 5, 0], [0, 0, 0, 0]]')
