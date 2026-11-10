from lib import dd
def p(t): return {'t': 'p', 'text': t}
def ul(*items): return {'t': 'ul', 'items': list(items)}
def c(code, out=None):
    d = {'t': 'code', 'code': dd(code)}
    if out is not None: d['out'] = dd(out)
    return d
def table(head, *rows): return {'t': 'table', 'head': head, 'rows': [list(r) for r in rows]}
def trap(t): return {'t': 'trap', 'text': t}
def tip(t): return {'t': 'tip', 'text': t}
def low(t): return {'t': 'low', 'text': t}

TOPICS = [
{'id': 'temeller', 'title': 'Python ile programlamanın temelleri', 'src': 'Bölüm 1', 'blocks': [
  p('Program, bilgisayara ne yapacağını söyleyen komutlar dizisidir. En alt düzeyde her şey **0 ve 1** (ikilik) dizileridir; üst düzey diller (Python, C, Java…) bunu insanın okuyabileceği hâle getirir.'),
  p('**Yazılım geliştirme süreci:** kod yazılır → hata ayıklayıcı ile denetlenir → derleyici/yorumlayıcı ile makine diline çevrilir. Yanaylaç ile hızlandırılır.'),
  table(['Araç', 'Ne yapar'],
        ['Editör', 'Kaynak kodu yazmayı, kaydetmeyi sağlar; söz dizimini renklendirir'],
        ['Derleyici (compiler)', 'Kaynak kodu **bir kez** hedef koda çevirir; tekrar tekrar çalıştırılabilir dosya üretir (C, C++, Java, C#)'],
        ['Yorumlayıcı (interpreter)', 'Program **her çalıştırıldığında** satır satır çevirir (Python, Ruby, Perl, JavaScript)'],
        ['Hata ayıklayıcı (debugger)', 'Hatanın hangi satırda olduğunu bulur, değişken değerlerini gösterir'],
        ['Yanaylaç (profiler)', 'Hangi parça kaç kez çalıştı, ne kadar sürdü; kullanılmayan parçaları bulma = **kaplam (coverage)**'],
        ['IDE', 'Hepsini tek pakette sunar: IDLE, Wing IDE (101 ücretsiz), Canopy']),
  ul('**Kaynak kod:** programcının yazdığı üst düzey kod. **Hedef kod:** ona karşılık gelen makine dili.',
     '**Söz dizimi (syntax):** kelime ve sembollerin kurallara uygun dizilişi.',
     'Derlenen programlar genelde **daha hızlı** (çeviri bir kez yapılır); yorumlananlar ise yeniden derlemeden her platformda çalışır.',
     'Python: ücretsiz, okunabilir, nesne yönelimli, tüm işletim sistemlerinde çalışır, çok kütüphanesi var.'),
  c('print("Merhaba, Dünya!")', 'Merhaba, Dünya!'),
  trap('Kitapta ilk örnek `print "Merhaba, Dünya!"` diye yazılmış. Bu **Python 2** yazımıdır; Python 3\'te `SyntaxError` verir. Python 3\'te `print` bir fonksiyondur: parantez şart.'),
  tip('Derleyici ↔ yorumlayıcı farkı ve araçların (debugger / profiler / IDE) görevleri klasik teori sorusudur.')]},
{'id': 'degerler', 'title': 'Değerler ve değişkenler', 'src': 'Bölüm 2', 'blocks': [
  p('Her değerin bir **türü** vardır: `int` (tam sayı), `float` (ondalıklı), `str` (metin, tırnak içinde). Türü `type()` söyler.'),
  c('''
    print(type(4), type("4"), type(4.5))
    print(5 + 10, "5" + "10")
    print(5 + int("10"), "5" + str(10))
    ''', '''
    <class 'int'> <class 'str'> <class 'float'>
    15 510
    15 510
    '''),
  ul('`+` sayılarda **toplar**, metinlerde **birleştirir**. Karıştırılırsa (`"5" + 10`) → `TypeError`.',
     '`int("3.4")` ve `int("sus")` → `ValueError`. `int()` sadece tam sayı görünümlü metni çevirir.',
     'Tek ya da çift tırnak kullanılabilir ama başlangıç ve bitiş aynı olmalı.',
     'Sayılarda binlik ayırıcı yazılmaz: dört bin altı yüz elli sekiz = `4658`.'),
  p('**Atama:** `x = 10` → 10 değeri x\'e atanır. Matematikteki eşitlik değildir; `5 = x` hatalıdır. Değişkenin türü atanan değere göre değişebilir.'),
  c('''
    x, y, z = 100, -45, 0     # çoklu atama
    print("x =", x, " y =", y)
    a = 2
    b = a
    a = 7                     # b etkilenmez
    print(a, b)
    ''', '''
    x = 100  y = -45
    7 2
    '''),
  ul('`print` virgülle ayrılan değerlerin arasına **bir boşluk** koyar.', '`del x` değişkeni siler; sonra x kullanılırsa `NameError`.'),
  p('**Reel sayılar (float):** `6.022e23` = 6.022 × 10²³. `int()` **keser**, `round()` **yuvarlar**.'),
  c('''
    x = 93.34836
    print(int(28.71), round(28.71))
    print(round(x), round(x, 2), round(x, 0))
    print(round(65535, -2), round(65535, -3))
    ''', '''
    28 29
    93 93.35 93.0
    65500 66000
    '''),
  trap('Tek argümanlı `round(x)` → **int**; iki argümanlı `round(x, n)` → **float** (`round(x, 0)` bile 93.0 verir).'),
  p('**Belirteç (değişken adı) kuralları:** en az 1 karakter; harf ya da `_` ile başlar; devamında harf, rakam, `_` olabilir; boşluk ve özel karakter (`-`, `*`) olmaz; ayrılmış kelimeler (`class`, `def`, `if`, `for`, `True`…) kullanılamaz. Python **büyük/küçük harf duyarlıdır**.'),
  table(['Ad', 'Geçerli mi', 'Neden'], ['Toplam_Brut', 'Evet', ''], ['_sayac', 'Evet', '_ ile başlayabilir'],
        ['4ogrenci', 'Hayır', 'rakamla başlar'], ['ara-toplam', 'Hayır', '- kullanılamaz'], ['ilk değer', 'Hayır', 'boşluk'], ['class', 'Hayır', 'ayrılmış kelime']),
  low('Kitap "Türkçe karakter kullanılamaz" diyor; Python 3 aslında izin verir ama kitabın/hocanın kuralı olarak kullanmayın.')]},
{'id': 'ifadeler', 'title': 'İfadeler ve aritmetik işlemler', 'src': 'Bölüm 3', 'blocks': [
  table(['İfade', 'Anlamı', 'Örnek'],
        ['x + y', 'toplama / metin birleştirme', '`5 + 3` → 8'], ['x - y', 'çıkarma', ''],
        ['x * y', 'çarpma / metni tekrar etme', '`3 * "ab"` → ababab'],
        ['x / y', 'bölme, **her zaman float**', '`25 / 4` → 6.25, `10 / 2` → 5.0'],
        ['x // y', 'tam sayı bölmesi (bölüm)', '`25 // 4` → 6, `4 // 25` → 0'],
        ['x % y', 'kalan (mod)', '`25 % 4` → 1, `4 % 25` → 4'],
        ['x ** y', 'üs alma', '`2 ** 10` → 1024']),
  ul('Sadece int ile yapılan işlemler int verir (`/` hariç). İçinde float olan her işlem float verir: `4 + 10.2` → 14.2.',
     'Python\'da **örtülü çarpma yoktur**: `3x` yerine `3*x` yazılır. Boşluklar önceliği etkilemez.'),
  table(['Öncelik (yüksekten alçağa)', 'Birleşim'], ['`**`', 'Sağdan'], ['tekli `+ -`', ''], ['`* / // %`', 'Soldan'], ['`+ -`', 'Soldan'], ['`=`', 'Sağdan']),
  c('''
    print(2 + 3 * 4, (2 + 3) * 4)
    print(2 ** 3 ** 2, -2 ** 2)
    ''', '''
    14 20
    512 -4
    '''),
  trap('`2 ** 3 ** 2` = 2 ** 9 = **512** (üs sağdan birleşir). `-2 ** 2` = **-4** (üs, tekli eksiden önce).'),
  p('**Kısaltılmış atama:** `x += 5` ↔ `x = x + 5`; `x *= y + z` ↔ `x = x * (y + z)`.'),
  p('**Yorum:** `#` ile başlar, satır sonuna kadar çalışmaz.'),
  table(['Hata türü', 'Ne zaman', 'Örnek'],
        ['Söz dizimi (SyntaxError)', 'Çalışmadan **önce** yakalanır', '`y + 2 = x`, `(3 + 4))`, eşleşmeyen tırnak, hatalı girinti'],
        ['Çalışma zamanı (istisna)', 'Program çalışırken', 'NameError (tanımsız değişken), ZeroDivisionError, TypeError'],
        ['Mantık hatası', 'Hata vermez, **yanlış sonuç** üretir', 'bölünen/bölen ters yazılmış; bulması en zor olan']),
  c('''
    saniye = 10000
    saat = saniye // 3600
    saniye = saniye % 3600
    dakika = saniye // 60
    saniye = saniye % 60
    print(saat, "sa", dakika, "dk", saniye, "sn")
    ''', '2 sa 46 dk 40 sn'),
  tip('`//` ve `%` ile saniye → saat/dakika/saniye dönüşümü kitabın ana örneğidir.')]},
{'id': 'kosullar', 'title': 'Koşullu durumlar', 'src': 'Bölüm 4', 'blocks': [
  p('**bool** türünün iki değeri vardır: `True` (1) ve `False` (0). Büyük harfle başlamaları zorunludur (adını George Boole\'dan alır).'),
  table(['Operatör', 'Anlamı'], ['==', 'eşit'], ['!=', 'eşit değil'], ['<  <=', 'küçük / küçük eşit'], ['>  >=', 'büyük / büyük eşit']),
  trap('`=` atama, `==` karşılaştırmadır. `if x = 5:` SyntaxError verir.'),
  c('''
    bolen = 0
    if bolen != 0:
        print(32 / bolen)
    else:
        print("Sıfıra bölme işlemi yapılamaz.")
    ''', 'Sıfıra bölme işlemi yapılamaz.'),
  table(['e1', 'e2', 'e1 and e2', 'e1 or e2', 'not e1'],
        ['False', 'False', 'False', 'False', 'True'], ['False', 'True', 'False', 'True', 'True'],
        ['True', 'False', 'False', 'True', 'False'], ['True', 'True', 'True', 'True', 'False']),
  ul('`and`: ikisi de True olmalı. `or`: biri True yeter. `not`: tersine çevirir.',
     'Aritmetik önce yapılır: `x != y - 2` → önce y - 2.',
     '**De Morgan:** `not (A and B)` = `not A or not B`.', '`pass`: "hiçbir şey yapma" — boş blok yerine.'),
  p('**elif zinciri ↔ ayrı if\'ler:** `if/elif/else` yapısında **ilk doğru dal** çalışır, kalanı atlanır. Ayrı ayrı `if` yazılırsa her koşul tek tek kontrol edilir ve doğru olan her biri çalışır.'),
  c('''
    value = 1
    if value == 1:
        print("A")
    elif value >= 1:
        print("B")      # atlanır
    if value >= 1:
        print("C")      # ayrı if: çalışır
    ''', '''
    A
    C
    '''),
  p('**Koşullu ifade (tek satır):** `A if koşul else B`.'),
  c('''
    n = -34
    print("|", n, "| = ", (-n if n < 0 else n), sep="")
    print("T", "C", sep=".")
    ''', '''
    |-34| = 34
    T.C
    '''),
  trap('Ondalıklı sayılarda `==` güvenilmez: `1.11 - 1.10 == 2.11 - 2.10` → **False** (0.010000000000000009 ≠ 0.009999999999999787).'),
  tip('İç içe if: iki koşulun birlikte sağlanması gerekir; `if a: if b:` ↔ `if a and b:`.')]},
{'id': 'donguler', 'title': 'Döngüler', 'src': 'Bölüm 5', 'blocks': [
  p('**for** belirli sayıda tekrar için, **while** koşul doğru olduğu sürece tekrar için kullanılır.'),
  p('`range(başlangıç, bitiş, artış)` — başlangıç verilmezse 0, artış verilmezse 1. **Bitiş değeri dahil değildir.** Hepsi tam sayı olmalıdır.'),
  table(['İfade', 'Değerler'], ['range(10)', '0…9'], ['range(1, 10, 2)', '1, 3, 5, 7, 9'], ['range(10, 0, -2)', '10, 8, 6, 4, 2'],
        ['range(-5, 5)', '-5 … 4'], ['range(1, 1)', '(boş)'], ['range(1, -1, -1)', '1, 0']),
  c('''
    top = 0
    for i in range(1, 100):
        top += i
    print(top)
    for n in range(21, 0, -3):
        print(n, end=" ")
    ''', '''
    4950
    21 18 15 12 9 6 3
    '''),
  ul('`end=" "` satır sonu yerine boşluk koyar (varsayılan `\\n`).', '`"{0:4}".format(x)` x\'i 4 karakterlik alana yazar (sayılar sağa yaslanır).',
     '`for harf in "Python":` metnin harflerini tek tek gezer.',
     '**İç içe döngü:** içteki döngü dıştakinin **her turunda** baştan sona çalışır (3 × 4 = 12 tur).'),
  c('''
    sayac = 1
    while sayac <= 5:
        print(sayac, end=" ")
        sayac += 1
    ''', '1 2 3 4 5'),
  trap('while\'da sayacı artırmayı unutursan döngü **sonsuza** kadar döner.'),
  ul('**Belirli döngü:** kaç kez döneceği bilinir. **Belirsiz döngü:** kullanıcı girişine bağlıdır (ör. 999 girilene kadar).',
     '`break` döngüyü **tamamen bitirir**. `continue` o turun geri kalanını atlayıp **sonraki tura** geçer.',
     '`while True:` + `break` → sonsuz döngüden kontrollü çıkış.',
     'Döngünün `else` bloğu döngü **break ile kesilmeden** bittiğinde çalışır.'),
  c('''
    for i in range(1, 6):
        if i == 3:
            continue
        print(i, end=" ")
    print()
    for i in range(1, 6):
        if i == 3:
            break
        print(i, end=" ")
    ''', '''
    1 2 4 5
    1 2
    '''),
  c('''
    faktoriyel, sayac, sayi = 1, 1, 5
    while sayac <= sayi:
        faktoriyel *= sayac
        sayac += 1
    print(faktoriyel)
    ''', '120'),
  trap('`range(1, 100)` 1…99 üretir, toplamı 4950\'dir (kitaptaki "range(1000)" ifadesi baskı hatası). for içinde döngü değişkenini değiştirmek (`i = 20`) sonraki turu etkilemez.'),
  tip('Faktöriyel, çarpım tablosu, asal sayı, Fibonacci ve yıldızdan ağaç çizimi kitabın tipik döngü örnekleridir.')]},
{'id': 'hazir', 'title': 'Fonksiyonlar 1: hazır fonksiyonlar ve modüller', 'src': 'Bölüm 6', 'blocks': [
  p('Fonksiyon, tekrar kullanılabilen kod parçasıdır. Kapalı kutu gibidir: **nasıl** yaptığını değil **ne** yaptığını bilmek yeter. Üç parçası: **ismi, parametreleri, sonuç türü**.'),
  table(['Yazım', 'Kullanım'], ['`from math import sqrt`', '`sqrt(16)`'], ['`from math import sqrt, log10, cos`', 'birden fazla fonksiyon'],
        ['`import math`', '`math.sqrt(16)` (modül.fonksiyon)']),
  c('''
    import math
    from math import sqrt
    print(sqrt(16), math.sqrt(2 * 16 - 7))
    print(math.pow(2, 8), math.pow(8, 2))
    print(math.fabs(-5), math.log(8, 2), math.log10(100))
    ''', '''
    4.0 5.0
    256.0 64.0
    5.0 3.0 2.0
    '''),
  ul('`sqrt` her zaman float döndürür; `sqrt("16")` → TypeError; `sqrt()` ya da `sqrt(1, 2)` → TypeError (parametre sayısı yanlış).',
     'Parametre **sırası** önemlidir: `pow(2, 8)` ≠ `pow(8, 2)`.', '`math.pi` ve `math.e` sabittir, parantez almaz.',
     '`math.cos(x)` açıyı **radyan** ister; `radians()` dereceden radyana, `degrees()` radyandan dereceye çevirir.',
     '`print`, `input`, `int`, `float`, `str`, `type` → `__builtins__` modülünde; **import gerekmez**.',
     '`dir(math)` modüldeki adları listeler; `id(x)` nesnenin bellek adresini; `help()` açıklama verir.'),
  c('print(print(4))', '''
    4
    None
    '''),
  p('`print` değer döndürmeyen bir fonksiyondur: **None** döndürür.'),
  table(['random modülü', 'Ne yapar'], ['random()', '0 ≤ x < 1 ondalıklı; **parametre almaz**'],
        ['randrange(a, b)', 'a ≤ x < b tam sayı (b dahil değil)'], ['choice(liste)', 'listeden rastgele eleman'], ['seed(n)', 'aynı rastgele diziyi tekrar üretmek için başlangıç']),
  ul('Rastgele sayılar **sözde** rastgeledir (Mersenne Twister algoritması).', '`time.sleep(1)` programı 1 saniye bekletir.'),
  trap('Kitaptaki `from time import clock` güncel Python\'da **ImportError** verir (3.8\'de kaldırıldı). Süre ölçmek için `time.perf_counter()` kullan.')]},
{'id': 'fonkyazma', 'title': 'Fonksiyon yazma', 'src': 'Bölüm 7', 'blocks': [
  p('Programı alt problemlere bölmek yönetimi, hata ayıklamayı ve değiştirmeyi kolaylaştırır. Fonksiyon **bir kez tanımlanır**, istenildiği kadar **çağrılır**.'),
  p('Tanımın 4 parçası: `def` + **isim** + (**parametre listesi**) + `:` ve girintili **gövde**.'),
  c('''
    def double(n):
        return 2 * n
    def Alan(a):
        return a * a
    print(double(3), Alan(5))
    ''', '6 25'),
  ul('`return` değeri çağıran yere gönderir ve fonksiyonu bitirir. `return` yoksa fonksiyon **None** döndürür.',
     'Fonksiyon içinde `print` etmek ile `return` etmek farklıdır: print ekrana yazar, return değeri geri verir.',
     'Parametre eksik/fazla gönderilirse → **TypeError**. `range`e ondalıklı sayı gidiyorsa → TypeError.',
     'Fonksiyon **çağrılmadan önce tanımlanmalıdır**; yoksa NameError.'),
  p('**Yerel değişken:** fonksiyon içinde tanımlanır, fonksiyon bitince silinir; dışarıdaki aynı adlı değişkeni etkilemez.'),
  c('''
    x = 2
    def fun1():
        x = 10
        print("içeride", x)
    fun1()
    print("dışarıda", x)
    ''', '''
    içeride 10
    dışarıda 2
    '''),
  c('''
    def artir(x):
        x += 1
        return x
    x = 5
    artir(x)
    print(x)          # 5: dönen değer atanmadı
    x = artir(x)
    print(x)          # 6
    ''', '''
    5
    6
    '''),
  c('''
    def gcd(s1, s2):
        kucuk = s1 if s1 < s2 else s2
        ebob = 1
        for i in range(1, kucuk + 1):
            if s1 % i == 0 and s2 % i == 0:
                ebob = i
        return ebob
    def main():
        print("gcd(36, 24) =", gcd(36, 24))
    main()
    ''', 'gcd(36, 24) = 12'),
  tip('main() ana akışı içerir ve yardımcı fonksiyonları çağırır. Fonksiyonun başına amaç, parametre ve dönüş değerini anlatan yorumlar eklemek iyi alışkanlıktır.')]},
{'id': 'fonk2', 'title': 'Fonksiyonlar 2: global, varsayılan parametre, özyineleme', 'src': 'Bölüm 8', 'blocks': [
  p('**Global değişken** program boyunca hafızada kalır ve her yerden okunabilir. Fonksiyon içinde ona **atama** yapılacaksa `global` ile bildirilmelidir.'),
  c('''
    sonuc = 0
    def Topla(a, b):
        global sonuc
        sonuc = a + b
    Topla(12, 43)
    print(sonuc)
    ''', '55'),
  trap('`global` yazmadan fonksiyonda `sayac += 1` yazarsan **UnboundLocalError** alırsın: atama olduğu için Python onu yerel sayar.'),
  p('**Varsayılan (default) parametre:** değer gönderilmezse kullanılır.'),
  c('''
    def gerisayim(n=5):
        for sayac in range(n, -1, -1):
            print(sayac, end=" ")
        print()
    gerisayim()
    gerisayim(3)
    ''', '''
    5 4 3 2 1 0
    3 2 1 0
    '''),
  trap('Varsayılanlı parametreler **sona** yazılır. Kitaptaki `def AralikTopla(n=0, m):` aslında **SyntaxError** verir; doğrusu `def AralikTopla(m, n=0):` ya da `def AralikTopla(n=0, m=100):`.'),
  p('**Özyineleme (recursion):** fonksiyonun kendini daha küçük bir problemle çağırması. Mutlaka bir **durma koşulu** olmalı; yoksa RecursionError.'),
  c('''
    def faktoriyel(n):
        if n == 0:
            return 1
        return n * faktoriyel(n - 1)
    def fibonacci(n):
        if n <= 0:
            return 0
        elif n == 1:
            return 1
        return fibonacci(n - 2) + fibonacci(n - 1)
    print(faktoriyel(6), fibonacci(10))
    ''', '720 55'),
  p('faktoriyel(6) = 6 · faktoriyel(5) = 6 · 5 · faktoriyel(4) … = 6·5·4·3·2·1·1 = 720. Aynı işi döngüyle de yapabilirsin (`while n: sonuc *= n; n -= 1`).'),
  p('**Fonksiyonu başka programda kullanma:** fonksiyonu `Kontrol.py` olarak kaydet; aynı klasördeki programda `from Kontrol import AsalKontrol` ya da `import Kontrol` + `Kontrol.AsalKontrol(x)`.'),
  tip('Hesap makinesi örneği: SayiGir, Topla, FarkAl, Yazdir fonksiyonları ortak değerleri global değişkenlerle paylaşır.')]},
{'id': 'nesneler', 'title': 'Nesneler: metin, dosya, grafik', 'src': 'Bölüm 9', 'blocks': [
  p('Python\'da her şey **nesne**dir (int, str, fonksiyon…). Nesne = **veri + metotlar**. Metot çağırma: `nesne.metot(parametreler)`.'),
  table(['str metodu', 'Ne yapar'], ['upper / lower', 'tümü büyük / küçük harf'], ['rjust / ljust / center', 'sağa / sola / ortaya yaslar: `"ABCD".rjust(10, "*")`'],
        ['strip', 'baştaki ve sondaki boşlukları siler'], ['startswith / endswith', 'önek / sonek sorgular (True/False)'],
        ['count', 'alt metnin kaç kez geçtiği'], ['find', 'ilk konum; yoksa -1'], ['format', '`"{0} {1}".format(23, 9)`']),
  c('''
    s = "ABCEFGHI"
    print(s[0], s[2], len(s))
    print("ABCD".rjust(10, "*"), "ABCD".rjust(3, "*"))
    print(" ABCDBCD ".strip().count("BCD"))
    ''', '''
    A C 8
    ******ABCD ABCD
    2
    '''),
  ul('İndeks **0**\'dan başlar. `s[i]` ↔ `s.__getitem__(i)`, `len(s)` ↔ `s.__len__()` (kullanılması gereken `len`).'),
  trap('Metinler **değişmezdir**: `s[3] = "S"` → TypeError. `s.strip()` s\'yi değiştirmez; `s = s.strip()` yazmak gerekir.'),
  trap('Python Türkçe büyük/küçük harf kurallarını bilmez: `"Filiz".upper()` → **FILIZ** (FİLİZ değil).'),
  p('**Dosyalar:** `open(ad, mod)` bir dosya nesnesi döndürür.'),
  table(['Mod', 'Anlamı'], ['"r"', 'okuma (varsayılan)'], ['"w"', 'yazma — dosya varsa içeriği **silinir**'], ['"a"', 'ekleme — eski içerik korunur']),
  c('''
    with open("veri.txt", "w") as f:
        f.write("kaynak\\n")
        f.write("dosya\\n")
    with open("veri.txt") as f:
        for satir in f:
            print(satir.strip())
    ''', '''
    kaynak
    dosya
    '''),
  ul('`write` kendiliğinden satır sonu koymaz; `\\n` eklenmeli.', 'İşi biten dosya `close()` ile kapatılır; **with/as** bloğu bitince dosya otomatik kapanır.',
     '`read()` tüm içeriği tek metin olarak okur.'),
  p('**Turtle / tkinter:** `t = Turtle()` kalem nesnesi (`forward`, `left`, `pencolor`). tkinter\'da `root = Tk()` pencere, `Button(root, text=..., command=fonk)` buton, `pack()` yerleştirir, `root.mainloop()` programı başlatır. Canvas\'ta (0, 0) sol üst köşedir, y aşağı doğru artar.'),
  p('**Örtüşme (aliasing):** `==` değer eşitliğine, `is` **aynı nesne** olup olmadığına bakar. `f3 = f1` yeni nesne oluşturmaz.'),
  c('''
    from fractions import Fraction
    f1 = Fraction(1, 2)
    f2 = Fraction(1, 2)
    f3 = f1
    print(f1 == f2, f1 is f2, f1 is f3)
    ''', 'True False True'),
  low('Turtle/tkinter grafik örnekleri pencere açtığı için çıktısı ekranda görülür; sınavda genelde kavram olarak sorulur.')]},
{'id': 'listeler', 'title': 'Listeler', 'src': 'Bölüm 10', 'blocks': [
  p('Liste, birden çok değeri tek değişkende tutar: `a = [10, 20, 30]`. Farklı türleri, hatta başka listeleri içerebilir. **Değiştirilebilir** (mutable) bir nesnedir.'),
  c('''
    data = [10, 20, 30, 40, 50, 60]
    print(data[0], data[-1], data[-2], len(data))
    a = [2, 4] + [6]
    a += [8]
    print(a, [0] * 3, 2 * ["ab"])
    print(list(range(0, 100, 10)))
    ''', '''
    10 60 50 6
    [2, 4, 6, 8] [0, 0, 0] ['ab', 'ab']
    [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
    '''),
  ul('Negatif indeks sondan sayar: `a[-1]` son eleman.', 'Sınır dışı indeks → **IndexError**.', '`a += 20` → TypeError; doğrusu `a += [20]`.',
     '`in` / `not in` üyelik sorgular: `5 in liste`.'),
  p('**Dilimleme:** `liste[başlangıç:bitiş:artış]` — bitiş **dahil değil**. Dilim **yeni bir liste** döndürür.'),
  c('''
    Lst = [10, 20, 30, 40, 50, 60, 70, 80]
    print(Lst[0:3], Lst[-5:-3], Lst[:2], Lst[6:])
    print(Lst[2:-2:2], Lst[::-1][:3])
    lst = [10, 20, 30, 40, 50]
    lst[1:3] = ["a"]
    del lst[0]
    print(lst)
    ''', '''
    [10, 20, 30] [40, 50] [10, 20] [70, 80]
    [30, 50] [80, 70, 60]
    ['a', 40, 50]
    '''),
  table(['Metot', 'Ne yapar', 'Listeyi değiştirir mi'], ['append(x)', 'sonuna ekler', 'Evet'], ['insert(i, x)', 'i. konuma ekler', 'Evet'],
        ['remove(x)', 'ilk x\'i siler (yoksa hata)', 'Evet'], ['index(x)', 'x\'in ilk konumu (yoksa hata)', 'Hayır'],
        ['count(x)', 'x kaç tane', 'Hayır'], ['sort()', 'artan sıralar', 'Evet'], ['reverse()', 'ters çevirir', 'Evet']),
  p('**Atama ve eşitlik:** `b = a` yeni liste oluşturmaz; ikisi **aynı listeyi** gösterir.'),
  c('''
    a = [10, 20, 30, 40]
    b = a
    b[2] = 35
    print(a)
    c = [10, 20, 30, 40]
    print(a == c, a is c, a is b)
    ''', '''
    [10, 20, 35, 40]
    False False True
    '''),
  trap('Kitapta `b = a; b[2] = 35` örneğinin çıktısı a = [10, 20, 30, 40] diye verilmiş; bu **yanlış**. b ile a aynı liste olduğu için a da değişir. Ayrı kopya için `b = a[:]` ya da `ListeKopyala`.'),
  p('Liste fonksiyona gönderilince **aynı nesne** gider: fonksiyon elemanları değiştirirse (ör. `SifirAta`) dıştaki liste de değişir.'),
  p('**Çok boyutlu liste (matris):** `matrix[satır][sütun]`.'),
  c('''
    yanlis = [[0] * 3] * 2
    yanlis[1][2] = 5
    dogru = [[0] * 3 for _ in range(2)]
    dogru[1][2] = 5
    print(yanlis)
    print(dogru)
    ''', '''
    [[0, 0, 5], [0, 0, 5]]
    [[0, 0, 0], [0, 0, 5]]
    '''),
  trap('`[[0]*4]*3` üç satırı **aynı listeye** bağlar; birini değiştirmek hepsini değiştirir.'),
  p('**Liste oluşturma yolları:** sıralı yazma `[2, 4, 6]`; döngüyle `L += [i]`; `list(range(2, 21, 2))`; liste kavrama `[x for x in range(1, 21) if x % 2 == 0]`.')]},
]

TRAPS = [
  {'t': 'Python 3\'te `print("...")` parantezli yazılır; `print "..."` SyntaxError.', 'topic': 'temeller'},
  {'t': '`"5" + "10"` = "510", `"5" + 10` = TypeError, `int("3.4")` = ValueError.', 'topic': 'degerler'},
  {'t': '`round(x)` int, `round(x, n)` float döndürür; `int()` keser, `round()` yuvarlar.', 'topic': 'degerler'},
  {'t': '`/` her zaman float: `10 / 2` = 5.0. Tam bölüm `//`, kalan `%`.', 'topic': 'ifadeler'},
  {'t': '`2 ** 3 ** 2` = 512 (sağdan), `-2 ** 2` = -4.', 'topic': 'ifadeler'},
  {'t': '`=` atama, `==` karşılaştırma. `True`/`False` büyük harfle.', 'topic': 'kosullar'},
  {'t': 'elif zincirinde ilk doğru dal çalışır; ayrı if\'lerde hepsi kontrol edilir.', 'topic': 'kosullar'},
  {'t': '`range` bitiş değerini **dahil etmez**: `range(1, 100)` 1…99.', 'topic': 'donguler'},
  {'t': '`break` döngüyü bitirir, `continue` sadece o turu atlar; döngünün `else`i break olmazsa çalışır.', 'topic': 'donguler'},
  {'t': '`sqrt` float döndürür; `random()` parametre almaz; `time.clock` artık yok.', 'topic': 'hazir'},
  {'t': '`return` yoksa fonksiyon None döndürür; `artir(x)` sonucu atanmazsa x değişmez.', 'topic': 'fonkyazma'},
  {'t': 'Fonksiyonda dış değişkene atama için `global`; varsayılanlı parametreler sona yazılır.', 'topic': 'fonk2'},
  {'t': 'Metinler değişmez: `s.strip()` tek başına s\'yi değiştirmez; `"Filiz".upper()` = FILIZ.', 'topic': 'nesneler'},
  {'t': '"w" modu dosyayı siler, "a" ekler; `write` satır sonu koymaz.', 'topic': 'nesneler'},
  {'t': '`b = a` listeyi kopyalamaz (aynı liste); `[[0]*4]*3` satırları paylaştırır.', 'topic': 'listeler'},
]

TOPIC_RULES = {
  'temeller': 'Derleyici kodu bir kez çevirir ve çalıştırılabilir dosya üretir; yorumlayıcı her çalıştırmada satır satır çevirir. Debugger hata bulur, profiler performans ölçer, IDE hepsini bir araya getirir.',
  'degerler': 'Tırnak içi = str. `+` sayıda toplar, metinde birleştirir; karıştırılamaz. `int()`/`str()` ile dönüştür. Değişken adı harf ya da _ ile başlar, ayrılmış kelime olamaz.',
  'ifadeler': '`/` float, `//` bölüm, `%` kalan, `**` üs (sağdan birleşir). Çarpımsallar toplamsallardan önce. Söz dizimi hatası çalışmadan, çalışma zamanı hatası çalışırken çıkar; mantık hatası hata vermez.',
  'kosullar': 'Koşul `:` ile biter, blok girintiyle belirlenir. `and` ikisi de, `or` biri yeter. elif zincirinde ilk doğru dal çalışır.',
  'donguler': '`range(baş, bitiş, artış)` bitişi dahil etmez. while\'da sayaç artırılmalı. `break` çıkar, `continue` sonraki tura geçer.',
  'hazir': '`from modül import fonk` → `fonk()`; `import modül` → `modül.fonk()`. Parametre sayısı ve türü doğru olmalı. Yerleşik işlevler import istemez.',
  'fonkyazma': '`def ad(parametreler):` + girintili gövde. Değer döndürmek için `return`; yoksa None. Fonksiyon kullanılmadan önce tanımlanmalı. İçerideki değişkenler yereldir.',
  'fonk2': 'Dış değişkene atama `global` ister. Varsayılanlı parametreler sona. Özyinelemede durma koşulu şart ve parametre her çağrıda küçülmeli.',
  'nesneler': 'Metot çağrısı `nesne.metot()`. str değişmezdir; sonucu yeniden ata. Dosya modları: r oku, w sil-yaz, a ekle. `is` aynı nesne, `==` aynı değer.',
  'listeler': 'İndeks 0\'dan, -1 son eleman. Dilim `[baş:bitiş:artış]` bitişi dahil etmez ve yeni liste verir. `b = a` aynı listeyi gösterir; değişiklik ikisine de yansır.',
}
