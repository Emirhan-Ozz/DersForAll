"""MBP193 test soruları. cs= Main içi C# kodu: çalıştırılır (tr-TR), çıktı satırları ' / ' ile birleşip doğru şıkla aynı olmalı.
kind='nocompile' → derlenmemeli, 'compile' → derlenmeli. Boşluk sorularında cs, ____ yerine ans[0] konup çalıştırılır; out verilirse karşılaştırılır."""
import random, textwrap
Q = []
CUR = {'t': None}
def topic(t): CUR['t'] = t
def dd(s): return textwrap.dedent(s).strip('\n')

def mc(q, opts, a, exp, code=None, cs=None, inp=None, why=None, kind=None, fixed=False, src=None):
    d = {'type': 'mc', 'topic': CUR['t'], 'q': q, 'opts': list(opts), 'a': a, 'exp': exp}
    if code is True: code = cs
    if code: d['code'] = dd(code)
    if why: d['why'] = why
    if src: d['src'] = src
    d['chk'] = {'cs': dd(cs) if cs else None, 'inp': inp, 'kind': kind, 'fixed': fixed}
    Q.append((CUR['t'], d))

def fill(q, code, ans, exp, cs=None, out=None, inp=None, whyFill=None, cs_=True):
    d = {'type': 'fill', 'topic': CUR['t'], 'q': q, 'code': dd(code), 'ans': list(ans), 'cs': cs_, 'exp': exp}
    if whyFill: d['whyFill'] = whyFill
    d['chk'] = {'cs': dd(cs) if cs else None, 'out': out, 'inp': inp}
    Q.append((CUR['t'], d))

def codeq(title, q, src, blanks, exps, expect=None, inp=None, note=None):
    d = {'type': 'code', 'topic': CUR['t'], 'title': title, 'q': q, 'code': dd(src), 'blanks': [list(b) for b in blanks], 'exps': exps}
    if expect: d['expect'] = expect
    if note: d['note'] = note
    d['chk'] = {'inp': inp}
    Q.append((CUR['t'], d))

def verify(d, run):
    e, c = [], d['chk']
    if d['type'] == 'mc':
        if len(set(d['opts'])) != len(d['opts']): e.append('tekrarlı şık')
        if c.get('cs'):
            st, out = run(c['cs'], c.get('inp'))
            want = d['opts'][d['a']]
            kind = c.get('kind') or ('nocompile' if want.startswith('Derleme hatası') else None)
            if kind == 'nocompile':
                if st != 'DERLEME': e.append('derlenmemeli ama %s %r' % (st, out))
            elif kind == 'compile':
                if st != 'OK': e.append('derlenmeli: %s %s' % (st, out))
            elif st != 'OK': e.append('%s %s' % (st, out))
            else:
                got = ' / '.join(l.rstrip() for l in out.split('\n'))
                if got != want: e.append('çıktı %r ≠ doğru şık %r' % (got, want))
                if any(o == got for i, o in enumerate(d['opts']) if i != d['a']): e.append('yanlış şık da doğru')
    elif d['type'] == 'fill' and c.get('cs'):
        st, out = run(c['cs'].replace('____', d['ans'][0]), c.get('inp'))
        if st != 'OK': e.append('boşluk dolunca %s %s' % (st, out))
        elif c.get('out') is not None and out.replace('\n', ' / ') != c['out']: e.append('çıktı %r ≠ %r' % (out, c['out']))
    elif d['type'] == 'code':
        src = d['code']
        for i, b in enumerate(d['blanks']): src = src.replace('{{%d}}' % (i + 1), b[0])
        st, out = run(src, c.get('inp'))
        if st != 'OK': e.append('kod %s %s' % (st, out))
        elif d.get('expect') and out.replace('\n', ' / ') != d['expect']: e.append('kod çıktısı %r ≠ %r' % (out, d['expect']))
    return e

def shuffled(d, seed):
    if d['type'] != 'mc' or d['chk'].get('fixed'): return d
    r = random.Random(seed); idx = list(range(len(d['opts']))); r.shuffle(idx)
    d = dict(d); d['opts'] = [d['opts'][i] for i in idx]
    if 'why' in d: d['why'] = {str(idx.index(int(k))): v for k, v in d['why'].items()}
    d['a'] = idx.index(d['a'])
    return d

# =================================================================== algoritma
topic('algoritma')
mc('Algoritmanın tanımı hangisidir?', ['Bir problemi çözmek için gerekli sıralı mantıksal adımların tümü', 'Bir programlama dili', 'Kaynak kodu makine diline çeviren yazılım', 'Bir geliştirme ortamı (IDE)', 'Bir değişken türü'], 0, 'Algoritma problemin çözüm yoludur; başı ve sonu vardır.')
mc('Hangisi algoritma için **yanlıştır**?', ['Algoritma bir programlama dilidir', 'Bir başlangıcı ve sonu vardır', 'Adımlar sıralıdır', 'Her adımda yapılacak iş açıkça belirtilir', 'Programlama dillerine yol gösterir'], 0, 'Slayt: "Algoritma programlama dili değildir."')
mc('Akış şemasında **veri girişi** (a, b değişkenlerini almak) hangi şekille gösterilir?', ['Paralelkenar', 'Elips', 'Dikdörtgen', 'Baklava', 'Daire'], 0, 'Elips başla/bitir, paralelkenar giriş, dikdörtgen işlem, baklava karar.')
mc('Akış şemasında `sonuc = a + b` gibi atama ve işlem adımı hangi şekildir?', ['Dikdörtgen', 'Paralelkenar', 'Elips', 'Baklava', 'Ok'], 0, 'İşlem / atama dikdörtgen.')
mc('Lamba örneğinde "Lambanın fişi takılı mı?" sorusu hangi şekille çizilir?', ['Baklava (karar)', 'Dikdörtgen', 'Paralelkenar', 'Elips', 'Altı dalgalı belge'], 0, 'Evet / Hayır çıkışlı karar adımı.')
mc('Akış şemasındaki başla ve bitir adımları hangi şekildir?', ['Elips (oval)', 'Dikdörtgen', 'Baklava', 'Paralelkenar', 'Altıgen'], 0, 'BAŞLA ve BİTİR elips.')
fill('Boşluğu doldurun.', 'Algoritma bir programlama dili ____; programlama dillerine yol gösteren yöntemler dizisidir.', ['değildir', 'degildir'], 'Algoritma dil değil, çözüm yolu.', cs_=False)

# =================================================================== csharp
topic('csharp')
mc('C# için hangisi doğrudur?', ['Microsoft tarafından geliştirilmiş, nesne yönelimli, açık kaynak bir dildir', 'Apple\'ın kapalı kaynak dilidir', 'Sadece web sayfası tasarlamak için kullanılır', 'Bir IDE\'dir', 'Makine dilidir'], 0, 'C ve C++\'tan türemiş, modern, nesne yönelimli.')
mc('Derleyici (compiler) ne yapar?', ['Kaynak kodu makine diline (0 ve 1) çevirir ve hataları bildirir', 'Kodu internete yükler', 'Arayüz tasarlar', 'Değişkenleri siler', 'Programı Excel\'e aktarır'], 0, 'Hoca: iki kişi arasındaki tercüman gibidir.')
mc('Derleyiciler olmasaydı ne olurdu?', ['Yazılımcılar her şeyi makine dilinde yazmak zorunda kalırdı', 'Programlar daha hızlı yazılırdı', 'Değişken tanımlanamazdı ama sorun olmazdı', 'Visual Studio gerekmezdi, başka fark olmazdı', 'Hiçbir şey değişmezdi'], 0, 'Slayt 7.')
mc('Visual Studio nedir?', ['Microsoft\'un entegre geliştirme ortamı (IDE)', 'Bir programlama dili', 'Bir derleyici türü', 'Bir veritabanı', 'Bir işletim sistemi'], 0, 'Hem kod yazıp hem yönetmeyi sağlar.')
mc('IDE kısaltmasının açılımı hangisidir?', ['Integrated Development Environment', 'Internet Data Exchange', 'Internal Debug Editor', 'Interface Design Engine', 'Integrated Data Element'], 0, 'Entegre geliştirme ortamı.')
mc('Hangisi slayttaki "Visual Studio ile neler yapılır?" listesinde **yoktur**?', ['Bilgisayarın donanımını onarmak', 'Kod düzenleme ve hata ayıklama', 'Arayüz tasarlama', 'Diğer dillerle entegre çalışma', 'Eklentilerle genişletme'], 0, 'Liste: kod düzenleme/hata ayıklama, diğer dillerle entegre, arayüz tasarlama, eklentiler.')

# =================================================================== girdi
topic('girdi')
mc('Ekrana ne yazılır?', ['12', '1 / 2', '1 2', '3', 'Derleme hatası'], 0, 'Write satır başı yapmaz.', code=True, cs='Console.Write(1);\nConsole.Write(2);')
mc('Ekrana ne yazılır?', ['1 / 2', '12', '3', '1 2', 'Derleme hatası'], 0, 'WriteLine her yazdıktan sonra alt satıra geçer.', code=True, cs='Console.WriteLine(1);\nConsole.WriteLine(2);')
mc('Ekrana ne yazılır?', ['AB / C', 'A / B / C', 'ABC', 'A / BC', 'AB C'], 0, 'İlk WriteLine B\'den sonra satır atlar, C yeni satırda.', code=True, cs='Console.Write("A");\nConsole.WriteLine("B");\nConsole.Write("C");')
mc('`Console.ReadLine()` hangi türde değer döndürür?', ['string', 'int', 'double', 'char', 'bool'], 0, 'Girilen sayı bile metindir; sayıya çevrilmelidir.')
mc('`Console.Read()` ile `Console.ReadLine()` farkı nedir?', ['Read ilk karakteri, ReadLine satırın tamamını okur', 'İkisi aynıdır', 'Read sayı, ReadLine metin okur', 'Read ekrana yazar', 'ReadLine sadece int okur'], 0, 'Slayt 15.')
mc('Metot için hangisi doğrudur?', ['Bir işlemi yapmak için tasarlanmış kodlar topluluğudur', 'Bir değişken türüdür', 'Sadece yorum satırıdır', 'Bir döngü çeşididir', 'Derleyicinin adıdır'], 0, 'Aynı kodu tekrar tekrar yazmak yerine metot hazırlanır.')
mc('Çok satırlı açıklama (yorum) nasıl yazılır?', ['/* ... */', '// ... //', '<!-- ... -->', '# ... #', "''' ... '''"], 0, 'Tek satır //, çok satır /* */.')
mc('Ekrana ne yazılır?', ['5', '5 / 7', '7', 'Derleme hatası', 'Hiçbir şey'], 0, '// sonrası yorumdur, çalışmaz.', code=True, cs='Console.WriteLine(5); // Console.WriteLine(6);\n/* Console.WriteLine(7); */')
fill('Boşluğu doldurun: yazdıktan sonra alt satıra geçilsin.', 'Console.____("Merhaba");', ['WriteLine'], 'WriteLine satır başı yapar.', cs='Console.____("Merhaba");\nConsole.Write("Dünya");', out='Merhaba / Dünya', whyFill={'write': 'Write satır başı yapmaz.'})
fill('Boşluğu doldurun: kullanıcının girdiği satırı okuyun.', 'string ad = Console.____();', ['ReadLine'], 'ReadLine satırı string olarak okur.', cs='string ad = Console.____();\nConsole.Write(ad);', inp=['Ali'], out='Ali')

# =================================================================== degisken
topic('degisken')
mc('Hangisi geçerli bir değişken adıdır?', ['deneme123', '123deneme', 'sınav notu', 'int', 'ad-soyad'], 0, 'İlk karakter rakam olamaz, boşluk/tire olmaz, anahtar kelime olmaz.', cs='int deneme123 = 1; Console.Write(deneme123);', kind='compile')
mc('`123deneme` adında bir değişken tanımlanırsa ne olur?', ['Derleme hatası', 'Çalışır', 'Uyarı verir ama çalışır', 'Değişken adı otomatik düzeltilir'], 0, 'İlk karakter rakam olamaz.', cs='int 123deneme = 5;', fixed=True)
mc('C# büyük–küçük harf duyarlılığı için hangisi doğrudur?', ['"deneme" ve "Deneme" farklı değişkenlerdir', 'İkisi aynı değişkendir', 'Sadece string\'lerde fark eder', 'Sadece metot adlarında fark eder', 'Büyük harf kullanılamaz'], 0, 'C# büyük–küçük harfe duyarlıdır.')
mc('Birden fazla kelimeden oluşan değişken adı slayttaki öneriye göre nasıl yazılır?', ['sinavNotu (camelCase)', 'SINAVNOTU', 'sinav_notu_', 'Sinav Notu', '1sinavNotu'], 0, 'İlk kelime küçük, sonraki kelimelerin baş harfi büyük.')
mc('Tek bir karakter tutan tür ve atama biçimi hangisidir?', ["char karakter = 'a';", 'char karakter = "a";', "string karakter = 'a';", 'int karakter = a;', 'bool karakter = a;'], 0, "char tek tırnak, string çift tırnak.", cs="char karakter = 'a'; Console.Write(karakter);", kind='compile')
mc('`char c = "a";` satırı ne olur?', ['Derleme hatası', 'c = a olur', 'c = 97 olur', 'Uyarı ile çalışır'], 0, 'char tek tırnak ister; "a" string\'dir.', cs='char c = "a";', fixed=True)
mc('int türü bellekte kaç byte yer tutar?', ['4', '2', '8', '16', '1'], 0, 'int 4, float 4, double 8, decimal 16 byte.')
mc('Hangi türün bellekte kapladığı alan en büyüktür (slayta göre)?', ['decimal (16 byte)', 'double (8 byte)', 'float (4 byte)', 'int (4 byte)', 'bool'], 0, 'decimal en hassas reel sayı türü.')
mc('`float sayi = 5,9;` satırı ne olur?', ['Derleme hatası', 'sayi 5,9 olur', 'sayi 5 olur', 'sayi 9 olur'], 0, 'Kodda ondalık ayırıcı nokta; float için 5.9f yazılır.', cs='float sayi = 5,9;', fixed=True)
mc('Ekrana ne yazılır? (Türkçe Windows)', ['7,5', '7.5', '7', '75', 'Derleme hatası'], 0, 'Kodda nokta, Türkçe sistemde ekranda virgül.', code=True, cs='double d = 7.5;\nConsole.WriteLine(d);')
mc('bool türü hangi değerleri alır?', ['true / false', '0 ile 255 arası', 'Herhangi bir metin', 'Tek karakter', 'Ondalıklı sayılar'], 0, 'Mantıksal tür.')
mc('Ekrana ne yazılır?', ['Ayşe Yılmaz / 20', 'AyşeYılmaz20', 'Ayşe / Yılmaz / 20', 'Ayşe Yılmaz 20', 'Derleme hatası'], 0, 'Ad ve soyad aralarında boşlukla yan yana, yaş alt satırda.', code=True, cs='string ad = "Ayşe", soyad = "Yılmaz";\nint yas = 20;\nConsole.WriteLine(ad + " " + soyad);\nConsole.WriteLine(yas);')
fill('Boşluğu doldurun: tam sayı tutan değişken.', '____ sayi = 5;', ['int'], 'Tam sayı int.', cs='____ sayi = 5;\nConsole.Write(sayi);', out='5')
fill('Boşluğu doldurun: metin tutan değişken.', '____ metin = "Örnek metin girişi";', ['string'], 'Metin string, çift tırnakla.', cs='____ metin = "x";\nConsole.Write(metin);', out='x')

# =================================================================== operator
topic('operator')
mc('`Console.WriteLine(8 + 2 / 4 + 1);` ne yazar?', ['9', '3', '9,5', '3,5', '10'], 0, '2/4 tam sayı bölmede 0; 8 + 0 + 1 = 9.', cs='Console.WriteLine(8 + 2 / 4 + 1);', why={1: '(8+2)/(4+1) değil; önce bölme yapılır.', 2: 'İki int bölünürse ondalık kısım atılır: 2/4 = 0.'}, src='Slayt 29')
mc('`Console.WriteLine((5 + 4) / 3);` ne yazar?', ['3', '6', '5', '1', '9'], 0, 'Önce parantez: 9 / 3 = 3.', cs='Console.WriteLine((5 + 4) / 3);', src='Slayt 29')
mc('`Console.WriteLine(8 % 2 + 1);` ne yazar?', ['1', '0', '5', '9', '4'], 0, '8 % 2 = 0, 0 + 1 = 1.', cs='Console.WriteLine(8 % 2 + 1);', src='Slayt 29')
mc('`Console.WriteLine(8 * 2 % 5);` ne yazar?', ['1', '6', '0', '16', '3'], 0, '* ve % aynı öncelikte, soldan sağa: 16 % 5 = 1.', cs='Console.WriteLine(8 * 2 % 5);', src='Slayt 29')
mc('Ekrana ne yazılır?', ['3', '1', '28', '11', '1,75'], 0, '7 % 4 = 3 (kalan).', code=True, cs='int x = 7;\nint y = 4;\nint sonuc = x % y;\nConsole.WriteLine(sonuc);', src='Slayt 30')
mc('Ekrana ne yazılır?', ['20', '9', '54', '1', '0'], 0, '5 * 4 = 20.', code=True, cs='int a = 5;\nint b = 4;\nint sonuc = a * b;\nConsole.WriteLine(sonuc);', src='Slayt 30')
mc('`Console.WriteLine(7 / 2);` ne yazar?', ['3', '3,5', '4', '1', '3.5'], 0, 'İki tam sayı bölünürse sonuç tam sayı.', cs='Console.WriteLine(7 / 2);')
mc('`Console.WriteLine("Sonuc:" + 4 + 5);` ne yazar?', ['Sonuc:45', 'Sonuc:9', 'Sonuc:4 5', '9Sonuc', 'Derleme hatası'], 0, 'Metinden sonra gelen + birleştirme yapar.', cs='Console.WriteLine("Sonuc:" + 4 + 5);')
mc('`Console.WriteLine(4 + 5 + "Sonuc");` ne yazar?', ['9Sonuc', '45Sonuc', 'Sonuc9', 'Sonuc45', 'Derleme hatası'], 0, 'Soldan sağa: önce 4+5=9, sonra metinle birleşir.', cs='Console.WriteLine(4 + 5 + "Sonuc");')
mc('`Console.WriteLine("Sonuc:" + (4 + 5));` ne yazar?', ['Sonuc:9', 'Sonuc:45', '9', 'Sonuc:4+5', 'Derleme hatası'], 0, 'Parantez önce toplanır.', cs='Console.WriteLine("Sonuc:" + (4 + 5));')
mc('Ekrana ne yazılır?', ['7 / 21', '6 / 18', '8 / 24', '7 / 7', '5 / 15'], 0, '5 → ++ 6 → +=1 7 → +1 8 → -- 7; sonra 7*3 = 21.', code=True, cs='int sayi = 5;\nsayi++;\nsayi += 1;\nsayi = sayi + 1;\nsayi--;\nConsole.WriteLine(sayi);\nsayi *= 3;\nConsole.WriteLine(sayi);')
mc('Hangisi `sayi` değişkenini 1 artırmaz?', ['sayi =+ 1;', 'sayi++;', 'sayi += 1;', 'sayi = sayi + 1;', '++sayi;'], 0, '`=+ 1` aslında `sayi = +1` demektir (sayi 1 olur).', why={0: ''})
mc('`&&` operatörünün sonucu ne zaman true olur?', ['İki şart da doğru olduğunda', 'Şartlardan biri doğru olduğunda', 'İki şart da yanlış olduğunda', 'Her zaman', 'Hiçbir zaman'], 0, '&& ve: ikisi de. || veya: en az biri.')
mc('`||` operatörünün sonucu ne zaman true olur?', ['Şartlardan en az biri doğru olduğunda', 'Sadece ikisi de doğru olduğunda', 'İkisi de yanlış olduğunda', 'Hiçbir zaman', 'Sadece ilk şart doğruysa'], 0, 'Veya: biri yeterli.')
mc('"Eşit değildir" ilişkisel operatörü hangisidir?', ['!=', '<>', '=!', '==!', '=/='], 0, 'C#\'ta eşit değil !=.')
mc('`if (x = 5)` yazılırsa (x int) ne olur?', ['Derleme hatası', 'x 5 ise koşul doğru olur', 'Her zaman true', 'Her zaman false'], 0, 'Tek = atamadır; koşul için == kullanılır.', cs='int x = 3;\nif (x = 5) Console.Write("a");', fixed=True)
fill('Boşluğu doldurun: bölümden kalanı bulun.', 'Console.WriteLine(9 ____ 5);', ['%'], 'Mod operatörü %: 9 % 5 = 4.', cs='Console.WriteLine(9 ____ 5);', out='4')
fill('Boşluğu doldurun: sayi\'yi 1 azaltın.', 'sayi____;', ['--'], 'Azaltma: sayi--, sayi -= 1, sayi = sayi - 1.', cs='int sayi = 3;\nsayi____;\nConsole.Write(sayi);', out='2')
fill('Boşluğu doldurun: iki şart birlikte sağlansın (ve).', 'if (deger >= 0 ____ deger <= 100)', ['&&'], 've: &&.', cs='int deger = 50;\nif (deger >= 0 ____ deger <= 100) Console.Write("Doğru");', out='Doğru')

# =================================================================== donusum
topic('donusum')
mc('Ekrana ne yazılır?', ['12', '3', '1 2', '"1""2"', 'Derleme hatası'], 0, 'İki string + ile yan yana eklenir.', code=True, cs='string a = "1";\nstring b = "2";\nConsole.WriteLine(a + b);', src='Slayt 35')
mc('Ekrana ne yazılır?', ['3', '12', '1', '2', 'Derleme hatası'], 0, 'int.Parse ile sayıya çevrilip toplanır.', code=True, cs='string a = "1";\nstring b = "2";\nint x = int.Parse(a);\nint y = int.Parse(b);\nConsole.WriteLine(x + y);', src='Slayt 35')
mc('Kullanıcıdan alınan değeri int\'e çevirmenin doğru yolu hangisidir?', ['int s = Convert.ToInt32(Console.ReadLine());', 'int s = Console.ReadLine();', 'int s = (string)Console.ReadLine();', 'int s = Console.Read.ToInt();', 'string s = Convert.ToInt32();'], 0, 'ReadLine string verir, Convert ile çevrilir.')
mc('`int s = Console.ReadLine();` satırı ne olur?', ['Derleme hatası', 'Girilen sayı s\'ye atanır', 's = 0 olur', 'Çalışma zamanında uyarı'], 0, 'string, int\'e otomatik dönmez.', cs='int s = Console.ReadLine();', fixed=True)
mc('Ekrana ne yazılır? (girdi: 21)', ['42', '2121', '21', '212', 'Derleme hatası'], 0, 'Girilen değer int\'e çevrilip 2 ile çarpılıyor.', code=True, cs='int sayi = Convert.ToInt32(Console.ReadLine());\nConsole.WriteLine(sayi * 2);', inp=['21'])
mc('Ekrana ne yazılır? (girdi: 5)', ['55', '10', '5', '25', 'Derleme hatası'], 0, 'Çevrilmeden toplanınca string + string = birleştirme.', code=True, cs='string s = Console.ReadLine();\nConsole.WriteLine(s + s);', inp=['5'])
mc('Sayıyı metne çeviren ifade hangisidir?', ['25.ToString()', 'Convert.ToInt32("25")', 'int.Parse(25)', 'Console.ReadLine(25)', 'string(25)'], 0, 'ToString() metne çevirir.')
mc('`Convert.ToInt32("abc")` çalıştırılınca ne olur?', ['Çalışma zamanında hata (FormatException)', '0 döner', 'abc döner', 'Derleme hatası', '-1 döner'], 0, 'Sayıya çevrilemeyen metin hata verir.')
fill('Boşluğu doldurun: string\'i int\'e çevirin.', 'int x = int.____("25");', ['Parse'], 'int.Parse metni sayıya çevirir.', cs='int x = int.____("25");\nConsole.Write(x + 1);', out='26')
fill('Boşluğu doldurun: kullanıcıdan sayı alın.', 'int sayi = Convert.____(Console.ReadLine());', ['ToInt32', 'ToInt16', 'ToInt64'], 'Convert.ToInt32 (slaytta ToInt16 da var).', cs='int sayi = Convert.____(Console.ReadLine());\nConsole.Write(sayi + 1);', inp=['9'], out='10')

# =================================================================== kosul
topic('kosul')
mc('Ekrana ne yazılır?', ['Tek', 'Çift', 'Tek / Çift', 'Hiçbir şey', 'Derleme hatası'], 0, '7 % 2 = 1, koşul yanlış, else çalışır.', code=True, cs='int sayi = 7;\nif (sayi % 2 == 0)\n    Console.WriteLine("Çift");\nelse\n    Console.WriteLine("Tek");')
mc('Ekrana ne yazılır?', ['Negatif', 'Pozitif', 'Sıfır', 'Negatif / Sıfır', 'Hiçbir şey'], 0, 'İlk doğru koşul çalışır: -3 < 0.', code=True, cs='int sayi = -3;\nif (sayi > 0)\n    Console.WriteLine("Pozitif");\nelse if (sayi < 0)\n    Console.WriteLine("Negatif");\nelse\n    Console.WriteLine("Sıfır");')
mc('Ekrana ne yazılır?', ['68 / DD', '68 / CC', '65 / DD', '68 / Kaldınız', '72 / CC'], 0, '50·0,4 + 80·0,6 = 20 + 48 = 68 → DD.', code=True, cs='int vize = 50, final = 80;\ndouble ort = vize * 0.4 + final * 0.6;\nConsole.WriteLine(ort);\nif (ort < 60) Console.WriteLine("Kaldınız");\nelse if (ort < 70) Console.WriteLine("DD");\nelse if (ort < 80) Console.WriteLine("CC");\nelse if (ort < 90) Console.WriteLine("BB");\nelse Console.WriteLine("AA");')
mc('Ekrana ne yazılır?', ['B / C', 'A / C', 'C', 'B', 'A / B / C'], 0, 'if\'ten sonra süslü parantez yok: sadece ilk satır koşula bağlı, C her zaman yazılır.', code=True, cs='int x = 3;\nif (x > 5)\n    Console.WriteLine("A");\nelse\n    Console.WriteLine("B");\nConsole.WriteLine("C");')
mc('Ekrana ne yazılır?', ['Doğru', 'Yanlış', 'Doğru / Yanlış', 'Hiçbir şey', 'Derleme hatası'], 0, '100 >= 0 ve 100 <= 100 → ikisi de doğru (dahil).', code=True, cs='int deger = 100;\nif (deger >= 0 && deger <= 100)\n    Console.WriteLine("Doğru");\nelse\n    Console.WriteLine("Yanlış");')
mc('Ekrana ne yazılır?', ['Kullanıcı adı veya şifre hatalı', 'Doğru Giriş', 'Hiçbir şey', 'Derleme hatası', 'Doğru Giriş / Kullanıcı adı veya şifre hatalı'], 0, '&& için iki şart da doğru olmalı; şifre "123" farklı.', code=True, cs='string kadi = "ekonomi", sifre = "123";\nif (kadi == "ekonomi" && sifre == "1234")\n    Console.WriteLine("Doğru Giriş");\nelse\n    Console.WriteLine("Kullanıcı adı veya şifre hatalı");')
mc('if veya else\'ten sonra **tek satır** yazılacaksa süslü parantez için ne söylenir?', ['Gerek yoktur', 'Zorunludur', 'Sadece else için zorunludur', 'Köşeli parantez kullanılır', 'Noktalı virgül yerine geçer'], 0, 'Slayt 42.')
mc('Ekrana ne yazılır? (girdi: 70)', ["50'den büyük bir değer girişi yaptınız", "50'den küçük bir değer girişi yaptınız", 'Hiçbir şey', 'Derleme hatası', '70'], 0, '70 > 50.', code=True, cs='int sayi = Convert.ToInt32(Console.ReadLine());\nif (sayi > 50)\n    Console.WriteLine("50\'den büyük bir değer girişi yaptınız");\nelse\n    Console.WriteLine("50\'den küçük bir değer girişi yaptınız");', inp=['70'])
fill('Boşluğu doldurun: sayı çift mi?', 'if (sayi ____ 2 == 0)', ['%'], 'Kalan 0 ise çift.', cs='int sayi = 8;\nif (sayi ____ 2 == 0) Console.Write("Çift");', out='Çift')
fill('Boşluğu doldurun: ikinci koşul.', 'if (sayi > 0) Console.Write("Pozitif");\n____ (sayi < 0) Console.Write("Negatif");\nelse Console.Write("Sıfır");', ['else if'], 'Birden çok koşul else if ile.', cs='int sayi = -2;\nif (sayi > 0) Console.Write("Pozitif");\n____ (sayi < 0) Console.Write("Negatif");\nelse Console.Write("Sıfır");', out='Negatif')

# =================================================================== switch
topic('switch')
mc('Ekrana ne yazılır? (girdiler: 12, 4, 3)', ['48', '16', '8', '3', 'Hatalı Giriş'], 0, 'İşlem 3 = çarpma: 12 * 4.', code=True, cs='int sayi1 = Convert.ToInt32(Console.ReadLine());\nint sayi2 = Convert.ToInt32(Console.ReadLine());\nint islem = Convert.ToInt32(Console.ReadLine());\nswitch (islem)\n{\n    case 1: Console.Write(sayi1 + sayi2); break;\n    case 2: Console.Write(sayi1 - sayi2); break;\n    case 3: Console.Write(sayi1 * sayi2); break;\n    case 4: Console.Write(sayi1 / sayi2); break;\n    default: Console.Write("Hatalı Giriş"); break;\n}', inp=['12', '4', '3'])
mc('Ekrana ne yazılır? (girdiler: 12, 4, 9)', ['Hatalı Giriş', '48', '3', 'Hiçbir şey', 'Derleme hatası'], 0, 'İşlem 9: hiçbir case tutmayınca default çalışır.', code=True, cs='int sayi1 = Convert.ToInt32(Console.ReadLine());\nint sayi2 = Convert.ToInt32(Console.ReadLine());\nint islem = Convert.ToInt32(Console.ReadLine());\nswitch (islem)\n{\n    case 1: Console.Write(sayi1 + sayi2); break;\n    case 2: Console.Write(sayi1 - sayi2); break;\n    case 3: Console.Write(sayi1 * sayi2); break;\n    case 4: Console.Write(sayi1 / sayi2); break;\n    default: Console.Write("Hatalı Giriş"); break;\n}', inp=['12', '4', '9'])
mc('switch yapısında `default` ne işe yarar?', ['Hiçbir case tutmazsa çalışır (if\'teki else gibi)', 'İlk case\'i seçer', 'Döngüyü bitirir', 'Değişkeni sıfırlar', 'Her durumda en başta çalışır'], 0, 'Slayt: else ile aynı işlevde.')
mc('switch yapısında `break` ne işe yarar?', ['switch\'ten çıkıp sonraki adıma geçirir', 'Programı kapatır', 'Bir sonraki case\'e geçer', 'Değişken tanımlar', 'Koşulu tersine çevirir'], 0, 'Slayt 3.')
mc('C#\'ta bir case\'in sonunda break unutulursa (case içinde kod varken) ne olur?', ['Derleme hatası', 'Sonraki case de çalışır', 'default çalışır', 'Hiçbir şey olmaz'], 0, 'C# bir case\'ten diğerine düşmeye izin vermez.', cs='int x = 1;\nswitch (x)\n{\n    case 1: Console.Write("a");\n    case 2: Console.Write("b"); break;\n}', fixed=True)
mc('switch genellikle ne zaman tercih edilir?', ['Bir değişkenin değerine göre çok seçenekli durumlarda', 'Döngü gerektiğinde', 'Sadece iki seçenek olduğunda', 'Değişken tanımlamak için', 'Tür dönüşümü için'], 0, 'Slayt 2: daha çok seçimin olacağı durumlar.')
mc('Ekrana ne yazılır?', ['Hafta içi', 'Hafta sonu', 'Geçersiz', 'Hafta içi / Hafta sonu', 'Derleme hatası'], 0, 'Boş case\'ler alt alta yazılabilir; 3 → hafta içi.', code=True, cs='int gun = 3;\nswitch (gun)\n{\n    case 1:\n    case 2:\n    case 3:\n    case 4:\n    case 5:\n        Console.Write("Hafta içi");\n        break;\n    case 6:\n    case 7:\n        Console.Write("Hafta sonu");\n        break;\n    default:\n        Console.Write("Geçersiz");\n        break;\n}')
fill('Boşluğu doldurun: hiçbir case tutmazsa.', 'switch (islem)\n{\n    case 1: Console.Write("Toplama"); break;\n    ____: Console.Write("Hatalı Giriş"); break;\n}', ['default'], 'default.', cs='int islem = 7;\nswitch (islem)\n{\n    case 1: Console.Write("Toplama"); break;\n    ____: Console.Write("Hatalı Giriş"); break;\n}', out='Hatalı Giriş')
fill('Boşluğu doldurun: case\'ten çıkılsın.', 'case 2:\n    Console.Write(sayi1 - sayi2);\n    ____;', ['break'], 'Her case break ile biter.', cs='int sayi1 = 9, sayi2 = 4, islem = 2;\nswitch (islem)\n{\n    case 2:\n        Console.Write(sayi1 - sayi2);\n        ____;\n}', out='5')

# =================================================================== for
topic('for')
mc('Ekrana ne yazılır?', ['55', '45', '10', '56', '0'], 0, '0 + 1 + ... + 10 = 55.', code=True, cs='int toplam = 0;\nfor (int i = 0; i <= 10; i++)\n{\n    toplam = toplam + i;\n}\nConsole.WriteLine(toplam);', src='Slayt PT13-12')
mc('`for (int i = 0; i < 10; i++)` döngüsü kaç kez çalışır?', ['10', '11', '9', '0', 'Sonsuz'], 0, 'i = 0..9.', cs='int n = 0;\nfor (int i = 0; i < 10; i++) n++;\nConsole.Write(n);', why={1: '< 10, 10\'u dahil etmez.'}, code=False) if False else None
mc('`for (int i = 0; i < 10; i++)` döngüsü kaç kez çalışır?', ['10', '11', '9', '0', 'Sonsuz'], 0, 'i = 0, 1, …, 9.', why={1: '< 10, 10\'u dahil etmez; 11 kez çalışan <= 10 olurdu.'})
mc('Ekrana ne yazılır?', ['10 8 6 4 2 0', '10 8 6 4 2', '0 2 4 6 8 10', '10 9 8 7 6 5 4 3 2 1 0', 'Hiçbir şey'], 0, 'i 10\'dan başlar, 2\'şer azalır, 0 dahil.', code=True, cs='for (int i = 10; i >= 0; i -= 2)\n    Console.Write(i + " ");\nConsole.WriteLine();'.replace('Console.WriteLine();', ''))
mc('Ekrana ne yazılır? (girdiler: 4, 2, 7, 10, 12)', ['Tek Adet:1 / Çift Adet:3', 'Tek Adet:3 / Çift Adet:1', 'Tek Adet:2 / Çift Adet:2', 'Tek Adet:1 / Çift Adet:4', 'Tek Adet:0 / Çift Adet:4'], 0, 'İlk girdi adet (4); sayılar 2, 7, 10, 12: 1 tek, 3 çift.', code=True,
   cs='int cift = 0;\nint tek = 0;\nint deger = Convert.ToInt32(Console.ReadLine());\nfor (int i = 1; i <= deger; i++)\n{\n    int sayi = Convert.ToInt32(Console.ReadLine());\n    if (sayi % 2 == 0)\n        cift++;\n    else\n        tek++;\n}\nConsole.WriteLine("Tek Adet:" + tek);\nConsole.Write("Çift Adet:" + cift);', inp=['4', '2', '7', '10', '12'], why={1: 'İlk girdi (4) kaç sayı girileceğidir, sayılmaz.'})
mc('for döngüsünün üç bölümü sırasıyla hangileridir?', ['Başlangıç; koşul; artırma', 'Koşul; başlangıç; artırma', 'Artırma; koşul; başlangıç', 'Başlangıç; artırma; koşul', 'Tür; ad; değer'], 0, 'for (int i = 0; i < 10; i++).', fixed=True)
mc('for döngüsündeki `i` değişkenine slaytta ne ad verilir?', ['Kontrol değişkeni', 'Sabit', 'Metot', 'Parametre', 'Dizi'], 0, 'Sayaç görevi görür.')
mc('Ekrana ne yazılır?', ['0', '55', '10', 'Derleme hatası'], 0, 'toplam döngünün içinde tanımlanınca her turda sıfırlanır; ayrıca dışarıda erişilemez. Burada dışarıdaki toplam hiç değişmez.', code=True, cs='int toplam = 0;\nfor (int i = 0; i <= 10; i++)\n{\n    int t = 0;\n    t = t + i;\n}\nConsole.WriteLine(toplam);')
mc('Ekrana ne yazılır?', ['1 3 5', '1 3 5 7 9', '1 2 3 4 5 6', '2 4 6', '1 3 5 7'], 0, '7\'de break döngüyü bitirir; çiftler continue ile atlanır.', code=True, cs='for (int i = 1; i <= 10; i++)\n{\n    if (i == 7) break;\n    if (i % 2 == 0) continue;\n    Console.Write(i + " ");\n}'.replace('" ");', '" ");'))
fill('Boşluğu doldurun: 0–10 dahil.', 'for (int i = 0; i ____ 10; i++)\n    Console.WriteLine(i);', ['<='], '10 dahil olsun diye <=.', cs='int n = 0;\nfor (int i = 0; i ____ 10; i++) n++;\nConsole.Write(n);', out='11', whyFill={'<': '< 10 son değeri (10) dahil etmez.'})
fill('Boşluğu doldurun: toplama ekleyin.', 'toplam ____ i;', ['+='], 'toplam += i, toplam = toplam + i ile aynı.', cs='int toplam = 0;\nfor (int i = 1; i <= 4; i++) toplam ____ i;\nConsole.Write(toplam);', out='10')
codeq('Kullanıcının belirlediği kadar sayıyı toplama', 'Hocanın slaydındaki programı tamamlayın.',
      '''int toplam = 0;
int deger = Convert.ToInt32(Console.ReadLine());
{{1}} (int i = 1; i {{2}} deger; i++)
{
    int sayi = {{3}}.ToInt32(Console.ReadLine());
    toplam = toplam {{4}} sayi;
}
Console.Write(toplam);''', [['for'], ['<='], ['Convert'], ['+']],
      ['Belli sayıda tekrar: for.', 'deger kadar (dahil) dönmeli.', 'ReadLine string verir, Convert ile çevrilir.', 'Toplama ekleniyor.'], expect='60', inp=['3', '10', '20', '30'],
      note='Girdiler: 3 (adet), 10, 20, 30')

# =================================================================== while
topic('while')
mc('Ekrana ne yazılır?', ['0 1 2 3 4', '0 1 2 3 4 5', '1 2 3 4 5', 'Sonsuz döngü', 'Hiçbir şey'], 0, 'i < 5 iken yazılır; 5 olunca biter.', code=True, cs='int i = 0;\nwhile (i < 5)\n{\n    Console.Write(i + " ");\n    i++;\n}'.replace('i + " "', 'i + " "'))
mc('while döngüsünde sayaç artırılmazsa ne olur?', ['Sonsuz döngü', 'Döngü hiç çalışmaz', 'Derleme hatası', 'Bir kez çalışır', 'Sayaç otomatik artar'], 0, 'Koşul hep doğru kalır.')
mc('Ekrana ne yazılır? (girdi: 5)', ['Sonuç:120', 'Sonuç:15', 'Sonuç:24', 'Sonuç:0', 'Sonuç:5'], 0, '5·4·3·2 = 120.', code=True, cs='int sayi = Convert.ToInt32(Console.ReadLine());\nint sonuc = 1;\nwhile (sayi > 1)\n{\n    sonuc *= sayi;\n    sayi--;\n}\nConsole.WriteLine("Sonuç:" + sonuc);', inp=['5'], src='Slayt PT13-24')
mc('Faktöriyel programında `sonuc` 0 ile başlatılmış. Ekrana ne yazılır? (girdi: 5)', ['Sonuç:0', 'Sonuç:120', 'Sonuç:5', 'Sonsuz döngü', 'Derleme hatası'], 0, '0 ile çarpılan her şey 0; doğrusu `int sonuc = 1;`.', code=True, cs='int sayi = Convert.ToInt32(Console.ReadLine());\nint sonuc = 0;\nwhile (sayi > 1)\n{\n    sonuc *= sayi;\n    sayi--;\n}\nConsole.WriteLine("Sonuç:" + sonuc);', inp=['5'])
mc('while ile for arasındaki farkla ilgili hangisi doğrudur?', ['while\'da başlangıç değeri döngüden önce, artırma döngünün içinde yazılır', 'while\'da koşul yazılmaz', 'for\'da artırma döngünün içinde zorunludur', 'while sadece bir kez çalışır', 'İkisi aynı satırda yazılmak zorundadır'], 0, 'Slayt PT13-20.')
mc('Ekrana ne yazılır?', ['10', 'Hiçbir şey', '10 / 11 / 12 / 13 / 14', '5', 'Sonsuz döngü'], 0, 'do while koşulu sonda kontrol eder, en az bir kez çalışır.', code=True, cs='int i = 10;\ndo\n{\n    Console.WriteLine(i);\n    i++;\n} while (i < 5);')
mc('Ekrana ne yazılır? (do while yerine while kullanılmış)', ['Hiçbir şey', '10', '5', 'Sonsuz döngü', 'Derleme hatası'], 0, 'Koşul baştan yanlış (10 < 5 değil); while hiç çalışmaz. do while olsaydı 10 bir kez yazılırdı.', code='int i = 10;\nwhile (i < 5)\n{\n    Console.WriteLine(i);\n    i++;\n}', cs='int i = 10;\nwhile (i < 5)\n{\n    Console.WriteLine(i);\n    i++;\n}\nConsole.Write("");', kind='compile')
mc('`break` döngüde ne yapar?', ['Döngüyü o anda bitirir, dışına çıkar', 'Sadece o turu atlar', 'Döngüyü baştan başlatır', 'Programı bekletir', 'Sayaç değerini sıfırlar'], 0, 'continue ise turu atlar.', why={1: 'Bu continue.'})
mc('`continue` döngüde ne yapar?', ['Satırın gerisini atlayıp sonraki tura geçer', 'Döngüyü bitirir', 'Programı kapatır', 'Bir önceki tura döner', 'Döngüyü durdurup bekler'], 0, 'Slayt PT13-17.')
mc('`Thread.Sleep(1000);` ne yapar?', ['Programı 1 saniye bekletir', 'Programı 1000 saniye bekletir', 'Döngüyü 1000 kez çalıştırır', 'Ekranı temizler', 'Bilgisayarı uyku moduna alır'], 0, 'Değer milisaniye: 1000 ms = 1 sn.')
mc('0–10 arası sayıları **5 saniye** aralıklarla yazdırmak için döngünün içine ne eklenir?', ['Thread.Sleep(5000);', 'Thread.Sleep(5);', 'Console.Wait(5);', 'Sleep(5000);', 'Thread.Sleep(50);'], 0, '5 sn = 5000 ms.')
mc('Döviz menüsünde (girdiler 1, 5, 3) ekrana kaç kez menü yazdırılır?', ['3', '2', '1', '4', 'Sonsuz'], 0, 'Her turda menü yazılır; 3 girilince koşul (secim != 3) yanlış olur ve biter.',
   cs='int secim = 0, n = 0;\nwhile (secim != 3)\n{\n    n++;\n    secim = int.Parse(Console.ReadLine());\n}\nConsole.Write(n);', inp=['1', '5', '3'], kind=None, fixed=False) if False else None
mc('Döviz menüsünde (girdiler 1, 5, 3) ekrana kaç kez menü yazdırılır?', ['3', '2', '1', '4', 'Sonsuz'], 0, 'Her turda menü yazılır; 3 girilince koşul (secim != 3) yanlış olur ve döngü biter.')
mc('Ekrana ne yazılır? (girdiler: 5, 8, -3, 0)', ['Toplam: 10', 'Toplam: 13', 'Toplam: 16', 'Toplam: 0', 'Sonsuz döngü'], 0, '5 + 8 − 3 + 0 = 10; 0 girilince döngü biter.', code=True, cs='int toplam = 0;\nint sayi = -1;\nwhile (sayi != 0)\n{\n    sayi = Convert.ToInt32(Console.ReadLine());\n    toplam += sayi;\n}\nConsole.WriteLine("Toplam: " + toplam);', inp=['5', '8', '-3', '0'])
fill('Boşluğu doldurun: koşul doğru oldukça dönsün.', 'int i = 0;\n____ (i <= 10)\n{\n    Console.WriteLine(i);\n    i++;\n}', ['while'], 'while (koşul).', cs='int i = 0, n = 0;\n____ (i <= 10)\n{\n    n++;\n    i++;\n}\nConsole.Write(n);', out='11')
fill('Boşluğu doldurun: faktöriyelde çarparak biriktirin.', 'sonuc ____ sayi;', ['*='], 'sonuc = sonuc * sayi.', cs='int sayi = 4, sonuc = 1;\nwhile (sayi > 1) { sonuc ____ sayi; sayi--; }\nConsole.Write(sonuc);', out='24')
fill('Boşluğu doldurun: 0 girilince döngüden çıkılsın.', 'while (true)\n{\n    int sayi = Convert.ToInt32(Console.ReadLine());\n    if (sayi == 0) ____;\n}', ['break'], 'break döngüyü bitirir.', cs='int n = 0;\nwhile (true)\n{\n    int sayi = Convert.ToInt32(Console.ReadLine());\n    if (sayi == 0) ____;\n    n++;\n}\nConsole.Write(n);', inp=['4', '7', '0'], out='2')
codeq('Faktöriyel (while)', 'Hocanın faktöriyel programını tamamlayın.',
      '''int sayi = Convert.ToInt32(Console.ReadLine());
int sonuc = {{1}};
{{2}} (sayi > 1)
{
    sonuc {{3}} sayi;
    sayi{{4}};
}
Console.WriteLine("Sonuç:" + sonuc);''', [['1'], ['while'], ['*='], ['--']],
      ['Çarpımda başlangıç 1.', 'Koşul doğru oldukça: while.', 'Çarparak biriktir.', 'Sayı her turda 1 azalır.'], expect='Sonuç:120', inp=['5'], note='Girdi: 5')
codeq('Döviz menüsü', 'Kullanıcı 3\'e basana kadar dönen menüyü tamamlayın.',
      '''int secim = 0;
while (secim {{1}} 3)
{
    Console.WriteLine("1 - Dolar 2 - Euro 3 - Çıkış");
    secim = int.{{2}}(Console.ReadLine());
    if (secim == 1)
        Console.WriteLine("Dolar kuru: 33.20 TL");
    {{3}} (secim == 2)
        Console.WriteLine("Euro kuru: 36.50 TL");
    else if (secim == 3)
        Console.WriteLine("Programdan çıkılıyor...");
    {{4}}
        Console.WriteLine("Geçersiz seçim yaptınız!");
}''', [['!='], ['Parse'], ['else if'], ['else']],
      ['3 olmadıkça dön.', 'int.Parse ile çevir.', 'İkinci seçenek else if.', 'Diğer her şey else.'],
      expect='1 - Dolar 2 - Euro 3 - Çıkış / Dolar kuru: 33.20 TL / 1 - Dolar 2 - Euro 3 - Çıkış / Programdan çıkılıyor...', inp=['1', '3'], note='Girdiler: 1, 3')

Q[:] = [x for x in Q if x is not None]
