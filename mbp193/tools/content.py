"""MBP193 Programlama Temelleri (C#) · konu özetleri. Kaynak: Programlama Temelleri 12 ve 13 (Öğr. Gör. Turgay Zülam).
'run' olan kod blokları build.py'de mono ile tr-TR kültüründe çalıştırılır; 'out' birebir karşılaştırılır ('inp' varsa girdi verilir)."""

AKIS = ('<svg viewBox="0 0 560 330" role="img" aria-label="Toplama algoritmasının akış şeması">'
        '<g class="fl">'
        '<ellipse class="s1" cx="150" cy="28" rx="62" ry="20"/><text x="150" y="33">BAŞLA</text>'
        '<polygon class="s2" points="112,72 222,72 188,112 78,112"/><text x="150" y="97">a, b</text>'
        '<rect class="s3" x="88" y="140" width="124" height="38"/><text x="150" y="164">sonuc = a + b</text>'
        '<path class="s4" d="M88,206 H212 V240 Q181,228 150,240 T88,240 Z"/><text x="150" y="228">sonuc</text>'
        '<ellipse class="s1" cx="150" cy="292" rx="62" ry="20"/><text x="150" y="297">BİTİR</text>'
        '<line x1="150" y1="48" x2="150" y2="70"/><line x1="150" y1="112" x2="150" y2="138"/><line x1="150" y1="178" x2="150" y2="204"/><line x1="150" y1="242" x2="150" y2="270"/>'
        '</g><g class="lg">'
        '<text x="250" y="33">Başlamak ve bitirmek için (elips)</text>'
        '<text x="250" y="97">Değişkenleri belirlemek / veri girişi (paralelkenar)</text>'
        '<text x="250" y="164">Atama ve işlemler (dikdörtgen)</text>'
        '<text x="250" y="228">Ekran çıktısı (alt kenarı dalgalı)</text>'
        '<text x="250" y="297">Bitiş (elips)</text></g></svg>')

T = []
def add(id, title, src, *blocks): T.append({'id': id, 'title': title, 'src': src, 'blocks': list(blocks)})
def p(s): return {'t': 'p', 'text': s}
def ul(*a): return {'t': 'ul', 'items': list(a)}
def code(s, out=None, run=True, inp=None):
    d = {'t': 'code', 'code': s.strip('\n')}
    if out is not None: d['out'] = out
    if run: d['run'] = True
    if inp: d['inp'] = inp
    return d
def table(head, *rows): return {'t': 'table', 'head': list(head), 'rows': [list(r) for r in rows]}
def trap(s): return {'t': 'trap', 'text': s}
def tip(s): return {'t': 'tip', 'text': s}
def low(s): return {'t': 'low', 'text': s}
def fig(svg, cap): return {'t': 'svg', 'svg': svg, 'cap': cap}

add('algoritma', 'Algoritma ve akış şeması', 'PT12 · s.2–5',
    p('**Algoritma:** bir problemi çözebilmek için gerekli olan **sıralı mantıksal adımların** tümü. Problemin çözüm yolunun adım adım yazılmasıdır; bir **başlangıcı ve sonu** vardır, her adımda yapılacak iş açıkça belirtilir.'),
    trap('Algoritma bir **programlama dili değildir**; programlama dillerine yol gösteren bir yöntemler dizisidir.'),
    fig(AKIS, 'Hocanın örneği: iki sayıyı toplayıp ekrana yazan algoritma.'),
    p('Lamba örneği (karar adımları baklava ile): Lamba çalışmıyor → "Lambanın fişi takılı mı?" Hayır → fişi tak; Evet → "Ampul patlak mı?" Evet → ampulü değiştir; Hayır → yeni bir lamba al.'),
    tip('Karar (koşul) adımı **baklava (eşkenar dörtgen)** ile çizilir ve iki çıkışı vardır: Evet / Hayır. C#\'ta karşılığı `if` / `else`.'))

add('csharp', 'C#, derleyici ve Visual Studio', 'PT12 · s.6–11',
    p('**C#:** basit, modern, **nesne yönelimli**, C ve C++ dillerinden türetilmiş bir dil. **Microsoft** geliştirdi, **açık kaynak** kodludur.'),
    p('**Derleyici (compiler):** yazdığımız kaynak kodu bilgisayarın anlayacağı **makine diline (0 ve 1)** çeviren aracı yazılım. İki kişi arasındaki **tercüman** gibidir; çeviri sırasında kaynak koddaki **hataları bulur** ve yazılımcıya bildirir. Derleyici olmasaydı her şey makine dilinde yazılmak zorunda kalırdı.'),
    p('**Visual Studio:** Microsoft\'un **IDE**\'si (entegre geliştirme ortamı). Hem kod yazıp hem yönetmeyi sağlar.'),
    ul('Kod düzenleme ve hata ayıklama', 'Diğer programlama dilleri ile entegre çalışma', 'Arayüz tasarlama', 'Kullanım alanını eklentiler ile genişletme'),
    trap('IDE = **Integrated Development Environment** (entegre geliştirme ortamı). Visual Studio bir **programlama dili değil**, geliştirme ortamıdır; C# ise dildir.'))

add('girdi', 'Girdi–çıktı metotları ve yorum satırı', 'PT12 · s.12–15, 32–33, 37–38',
    p('**Metot:** bir işlem yapmak için tasarlanmış kodlar topluluğu. Aynı kodu sürekli yazmak yerine metot olarak hazırlayıp gerektiğinde çağırırız.'),
    table(['Metot', 'Ne yapar?'],
          ['`Console.Write()`', 'Konsola yazar, **satır başı yapmaz**'],
          ['`Console.WriteLine()`', 'Konsola yazar, sonra **alt satıra geçer**'],
          ['`Console.Read()`', 'Klavyeden girilen **ilk karakteri** okur'],
          ['`Console.ReadLine()`', 'Girilen **satırın tamamını** okur, **string** döndürür']),
    code('''Console.Write(1);
Console.Write(2);
Console.WriteLine();
Console.WriteLine(1);
Console.WriteLine(2);''', '12\n1\n2'),
    p('Kullanıcıdan değer almak: `ReadLine()` her zaman **string** verir; sayı lazımsa çevrilir.'),
    code('''string ad;
Console.Write("Adınızı Giriniz:");
ad = Console.ReadLine();
Console.WriteLine("Merhaba " + ad);''', 'Adınızı Giriniz:Merhaba Ayşe', inp=['Ayşe']),
    code('''Console.WriteLine("Lütfen Sınav Notunu Giriniz:");
int say = Convert.ToInt16(Console.ReadLine());
Console.WriteLine(say + 10);''', 'Lütfen Sınav Notunu Giriniz:\n85', inp=['75']),
    p('**Yorum (açıklama) satırı:** kodun neden ve nasıl yazıldığını açıklar, derleyici çalıştırmaz. Tek satır `//`, çok satır `/* ... */`.'),
    code('''// tek satırlık açıklama
/* birden fazla
   satırlık açıklama */
Console.WriteLine("Yorumlar çalışmaz");''', 'Yorumlar çalışmaz'),
    tip('Hocanın notu: temiz kod yazan yazılımcı çok fazla yoruma ihtiyaç duymaz.'))

add('degisken', 'Değişkenler ve veri türleri', 'PT12 · s.16–23',
    p('**Değişken:** bellekte geçici olarak değer tutan **kutu**. Önce **türü**, sonra **benzersiz adı** yazılır, `=` ile değer atanır. Aynı türden birden çok değişken virgülle tanımlanır: `int ad1, ad2, ad3;`'),
    table(['Tür', 'Ne tutar?', 'Boyut', 'Örnek'],
          ['string', 'Metin, çift tırnak `" "`', 'sınırsız', '`string metin = "Örnek";`'],
          ['char', 'Tek karakter, tek tırnak `\' \'`', '2 byte', "`char karakter = 'a';`"],
          ['int', 'Tam sayı (−2.147.483.648 … 2.147.483.647)', '4 byte', '`int sayi = 5;`'],
          ['float', 'Reel (ondalıklı) sayı', '4 byte', '`float f = 5.9f;`'],
          ['double', 'Reel sayı', '8 byte', '`double d = 5.4546;`'],
          ['decimal', 'Reel sayı, en hassas (para)', '16 byte', '`decimal m = 5.8798m;`'],
          ['bool', 'true / false', '1 byte', '`bool deger = false;`']),
    trap('Kodda ondalık ayırıcı **nokta**dır: `5.9`. Slayttaki `float sayi = 5,9;` derleme hatası verir. float için sonuna **f**, decimal için **m** eklenir: `5.9f`, `5.87m`.'),
    p('**Adlandırma kuralları:**'),
    ul('C# **büyük–küçük harfe duyarlıdır**: `deneme` ve `Deneme` farklı değişkenlerdir.',
       'Küçük harfle başla; çok kelimede **camelCase**: `sinavNotu`, `kullaniciAdi`.',
       '**İlk karakter rakam olamaz**: `deneme123` doğru, `123deneme` yanlış.',
       'Türkçe karakter önerilmez; ad işlevini anlatmalı.'),
    code('''int a = 4, b = 5, c = 6;
double d = 7.5;
Console.WriteLine(a);
Console.WriteLine(b);
Console.WriteLine(c);
Console.WriteLine(d);''', '4\n5\n6\n7,5'),
    trap('Türkçe Windows\'ta ondalıklı sayı ekrana **virgülle** yazılır: `7.5` → `7,5`. Kodda nokta, ekranda virgül.'),
    code('''string ad = "Ayşe", soyad = "Yılmaz";
int yas = 20;
Console.WriteLine(ad + " " + soyad);
Console.WriteLine(yas);''', 'Ayşe Yılmaz\n20'))

add('operator', 'Operatörler ve işlem önceliği', 'PT12 · s.24–31, 39–40 · PT13 · s.6',
    table(['Operatör', 'İşlev', 'Örnek → sonuç'],
          ['+', 'Sayıda toplama, metinde **birleştirme**', '`4+5` → 9, `"Sonuc:" + 25` → Sonuc:25'],
          ['-', 'Çıkarma', '`8-4` → 4'],
          ['*', 'Çarpma', '`4*5` → 20'],
          ['/', 'Bölme (iki int ise **tam sayı bölme**)', '`9/3` → 3, `7/2` → 3'],
          ['%', 'Mod: bölümden **kalan**', '`9%5` → 4']),
    p('**İşlem önceliği** matematikteki gibidir: önce **parantez**, sonra `* / %` (aynı seviye, soldan sağa), en son `+ -`.'),
    code('''Console.WriteLine(8 + 2 / 4 + 1);
Console.WriteLine((5 + 4) / 3);
Console.WriteLine(8 % 2 + 1);
Console.WriteLine(8 * 2 % 5);''', '9\n3\n1\n1'),
    trap('`2 / 4` iki tam sayı olduğu için **0** olur (ondalık kısım atılır). Bu yüzden `8 + 2 / 4 + 1` = 8 + 0 + 1 = **9**.'),
    code('''int x = 7;
int y = 4;
int sonuc = x % y;
Console.WriteLine(sonuc);
Console.WriteLine("Sonuc:" + 4 + 5);
Console.WriteLine(4 + 5 + "Sonuc");''', '3\nSonuc:45\n9Sonuc'),
    trap('`+` soldan sağa çalışır: metinden sonra gelen sayılar **yan yana eklenir** ("Sonuc:45"); metinden önceki sayılar **toplanır** ("9Sonuc").'),
    table(['İlişkisel', 'Anlam'], ['==', 'Eşittir'], ['!=', 'Eşit değildir'], ['<  >', 'Küçüktür, büyüktür'], ['<=  >=', 'Küçük eşit, büyük eşit']),
    table(['Mantıksal', 'Doğru olması için'], ['&& (ve)', '**İki şart da** sağlanmalı'], ['|| (veya)', 'Şartlardan **en az biri** yeterli'], ['! (değil)', 'Sonucu tersine çevirir']),
    trap('`=` atama, `==` karşılaştırmadır. `if (x = 5)` C#\'ta derleme hatası verir.'),
    p('**Artırma ve azaltma** (3\'er yol): `sayi = sayi + 1;` · `sayi += 1;` · `sayi++;` ve `sayi = sayi - 1;` · `sayi -= 1;` · `sayi--;`'),
    code('''int sayi = 5;
sayi++;
sayi += 1;
sayi = sayi + 1;
sayi--;
Console.WriteLine(sayi);
sayi *= 3;
Console.WriteLine(sayi);''', '7\n21'))

add('donusum', 'Tür dönüşümleri', 'PT12 · s.34–38',
    p('Klavyeden gelen her şey **string**tir. Hesap yapmak için sayıya çevrilir: `Convert.ToInt32()`, `int.Parse()`, `Convert.ToDouble()`. Diğerleri: `Convert.ToChar`, `Convert.ToBoolean`, `Convert.ToByte`, `Convert.ToInt16`, sayıdan metne `.ToString()`.'),
    code('''string a = "1";
string b = "2";
Console.WriteLine(a + b);
int x = int.Parse(a);
int y = int.Parse(b);
Console.WriteLine(x + y);
int m = Convert.ToInt32(a);
int n = Convert.ToInt32(b);
Console.WriteLine(m + n);''', '12\n3\n3'),
    trap('Çevirmeden toplarsan metinler **yan yana** eklenir: "1" + "2" = "12". Hocanın slaydındaki örnek tam bu.'),
    code('''Console.Write("Sayı: ");
int sayi = Convert.ToInt32(Console.ReadLine());
Console.WriteLine(sayi * 2);''', 'Sayı: 42', inp=['21']),
    table(['Dönüşüm', 'Sonuç'], ['`Convert.ToInt32("25")`', '25 (int)'], ['`int.Parse("25")`', '25 (int)'], ['`Convert.ToDouble("2,5")` (Türkçe Windows)', '2,5 (double)'], ['`25.ToString()`', '"25" (string)'], ['`Convert.ToInt32("abc")`', 'Hata (FormatException)']),
    low('Türkçe Windows\'ta kullanıcı ondalıklı sayıyı **virgülle** girer (2,5). Nokta ile girerse `Convert.ToDouble("2.5")` 25 olur.'))

add('kosul', 'if – else (koşullu ifadeler)', 'PT12 · s.41–50',
    p('`if` koşul **doğru** ise kendi bloğunu, değilse `else` bloğunu çalıştırır. `else if` ile birden çok koşul sırayla denenir; ilk doğru olan çalışır.'),
    code('''Console.Write("Sayı giriniz: ");
int sayi = Convert.ToInt32(Console.ReadLine());
if (sayi > 50)
{
    Console.WriteLine("50'den büyük bir değer girişi yaptınız");
}
else
{
    Console.WriteLine("50'den küçük bir değer girişi yaptınız");
}''', "Sayı giriniz: 50'den büyük bir değer girişi yaptınız", inp=['70']),
    trap('`if` ya da `else`\'ten sonra **tek satır** varsa `{ }` gerekmez; birden çok satırda süslü parantez şart, yoksa sadece ilk satır koşula bağlı olur.'),
    code('''int sayi = 7;
if (sayi % 2 == 0)
    Console.WriteLine("Çift");
else
    Console.WriteLine("Tek");''', 'Tek'),
    code('''int deger = 100;
if (deger >= 0 && deger <= 100)
    Console.WriteLine("Doğru");
else
    Console.WriteLine("Yanlış");''', 'Doğru'),
    code('''string kadi = "ekonomi", sifre = "1234";
if (kadi == "ekonomi" && sifre == "1234")
    Console.WriteLine("Doğru Giriş");
else
    Console.WriteLine("Kullanıcı adı veya şifre hatalı");''', 'Doğru Giriş'),
    p('**İç içe if / else if:** pozitif–negatif–sıfır örneği.'),
    code('''int sayi = -3;
if (sayi > 0)
    Console.WriteLine("Pozitif");
else if (sayi < 0)
    Console.WriteLine("Negatif");
else
    Console.WriteLine("Sıfır");''', 'Negatif'),
    p('Hocanın not örneği: vize %40, final %60. Ortalama 60\'ın altı **kaldınız**, sonra harf notları.'),
    code('''int vize = 50, final = 80;
double ort = vize * 0.4 + final * 0.6;
Console.WriteLine(ort);
if (ort < 60) Console.WriteLine("Kaldınız");
else if (ort < 70) Console.WriteLine("DD");
else if (ort < 80) Console.WriteLine("CC");
else if (ort < 90) Console.WriteLine("BB");
else Console.WriteLine("AA");''', '68\nDD'),
    trap('Slaytta "70–80 arasında CC" iki kez yazılmış (yazım hatası). Sınavda aralıkları sırayla ve **çakışmadan** yaz; `else if` zinciri küçükten büyüğe ilerler.'))

add('switch', 'switch – case', 'PT13 · s.2–5',
    p('`switch` bir değişkenin değerine göre **çok seçenekli** durumlarda if yerine kullanılır.'),
    table(['Anahtar kelime', 'Görevi'], ['case', 'Seçili durumu belirler; eşleşen case\'in bloğu çalışır'], ['break', 'switch\'ten çıkar; C#\'ta her case **break** ile bitmeli'], ['default', 'Hiçbir case tutmazsa çalışır (if\'teki else gibi)']),
    code('''Console.Write("Lütfen 1.sayıyı giriniz:");
int sayi1 = Convert.ToInt32(Console.ReadLine());
Console.Write("Lütfen 2.sayıyı giriniz:");
int sayi2 = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("\\n1.Toplama \\n2.Cıkarma \\n3.Carpma \\n4.Bölme");
Console.Write("Lütfen işlem seçiniz:");
int islem = Convert.ToInt32(Console.ReadLine());
switch (islem)
{
    case 1:
        int toplam = sayi1 + sayi2;
        Console.Write(toplam);
        break;
    case 2:
        int fark = sayi1 - sayi2;
        Console.Write(fark);
        break;
    case 3:
        int carpim = sayi1 * sayi2;
        Console.Write(carpim);
        break;
    case 4:
        int bolum = sayi1 / sayi2;
        Console.Write(bolum);
        break;
    default:
        Console.Write("Hatalı Giriş");
        break;
}''', 'Lütfen 1.sayıyı giriniz:Lütfen 2.sayıyı giriniz:\n1.Toplama \n2.Cıkarma \n3.Carpma \n4.Bölme\nLütfen işlem seçiniz:3', inp=['12', '4', '4']),
    trap('C#\'ta bir case\'in sonunda `break` unutulursa **derleme hatası** verir (bir case\'ten diğerine geçilemez). Sadece boş case\'ler alt alta yazılabilir: `case 1: case 2: ...`'))

add('for', 'for döngüsü', 'PT13 · s.7–16',
    p('Tekrar eden işler **döngülerle** yapılır: `for`, `while`, `do while`, `foreach`. `for` üç bölümden oluşur:'),
    code('''for (int i = 0; i <= 10; i++)
{
    Console.WriteLine(i);
}''', '0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10'),
    table(['Bölüm', 'Örnek', 'Görevi'], ['Başlangıç', '`int i = 0`', '**Kontrol değişkeni** (sayaç) oluşturulur, bir kez çalışır'], ['Koşul', '`i <= 10`', 'Her turdan önce kontrol edilir; yanlışsa döngü biter'], ['Artırma', '`i++`', 'Her tur sonunda sayaca uygulanır']),
    p('**0–10 toplamı:**'),
    code('''int toplam = 0;
for (int i = 0; i <= 10; i++)
{
    toplam = toplam + i;
}
Console.WriteLine(toplam);''', '55'),
    trap('Toplam değişkeni döngüden **önce** ve `0` ile başlatılır. Döngünün içinde tanımlanırsa her turda sıfırlanır.'),
    p('**Kullanıcının belirlediği kadar sayıyı toplama:**'),
    code('''int toplam = 0;
Console.WriteLine("Kaç sayıyı Toplayacaksınız");
int deger = Convert.ToInt32(Console.ReadLine());
for (int i = 1; i <= deger; i++)
{
    Console.Write(i + ". Sayıyı Giriniz:");
    int sayi = Convert.ToInt32(Console.ReadLine());
    toplam = toplam + sayi;
}
Console.Write(toplam);''', 'Kaç sayıyı Toplayacaksınız\n1. Sayıyı Giriniz:2. Sayıyı Giriniz:3. Sayıyı Giriniz:60', inp=['3', '10', '20', '30']),
    p('**Kaçı tek, kaçı çift (sayaç):**'),
    code('''int cift = 0;
int tek = 0;
Console.WriteLine("Kaç Adet Sayı Gireceksiniz:");
int deger = Convert.ToInt32(Console.ReadLine());
for (int i = 1; i <= deger; i++)
{
    Console.Write(i + ".sayıyı giriniz:");
    int sayi = Convert.ToInt32(Console.ReadLine());
    if (sayi % 2 == 0)
        cift++;
    else
        tek++;
}
Console.WriteLine("Tek Adet:" + tek);
Console.Write("Çift Adet:" + cift);''', 'Kaç Adet Sayı Gireceksiniz:\n1.sayıyı giriniz:2.sayıyı giriniz:3.sayıyı giriniz:4.sayıyı giriniz:Tek Adet:1\nÇift Adet:3', inp=['4', '2', '7', '10', '12']),
    tip('Sayaç kalıbı: döngüden önce `int sayac = 0;`, koşul sağlanınca `sayac++;`. Toplam kalıbı: `toplam += sayi;`.'),
    p('Geriye saymak ve 2\'şer artmak da mümkün:'),
    code('''for (int i = 10; i >= 0; i -= 2)
    Console.Write(i + " ");''', '10 8 6 4 2 0 '))

add('while', 'while, do while, break, continue', 'PT13 · s.17–24',
    p('`while` **koşul doğru olduğu sürece** döner, yanlış olunca biter. for\'dan farkı: başlangıç değeri döngüden **önce** tanımlanır, artırma döngünün **içinde** yapılır.'),
    code('''int i = 0;
while (i <= 10)
{
    Console.WriteLine(i);
    i++;
}''', '0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10'),
    trap('while içinde `i++` unutulursa koşul hep doğru kalır: **sonsuz döngü**.'),
    table(['for ile', 'while ile'],
          ['`for (int i = 0; i <= 10; i++) { ... }`', '`int i = 0;` → `while (i <= 10) { ...; i++; }`'],
          ['Sayaç, koşul ve artırma tek satırda', 'Başlangıç önce, koşul while\'da, artırma içeride'],
          ['Tekrar sayısı **belli** ise rahat', 'Tekrar sayısı **belli değilse** (menü, kullanıcı 3\'e basana kadar) rahat']),
    p('**Faktöriyel (while):**'),
    code('''Console.Write("Faktöriyeli bulunacak sayıyı giriniz:");
int sayi = Convert.ToInt32(Console.ReadLine());
int sonuc = 1;
while (sayi > 1)
{
    sonuc *= sayi;
    sayi--;
}
Console.WriteLine("Sonuç:" + sonuc);''', 'Faktöriyeli bulunacak sayıyı giriniz:Sonuç:120', inp=['5']),
    trap('Çarpım/faktöriyelde başlangıç **1** olur (0 ile çarpınca sonuç hep 0). Toplamda başlangıç 0.'),
    p('**Menü (kullanıcı 3\'e basana kadar):** hocanın döviz örneği.'),
    code('''int secim = 0;
while (secim != 3)
{
    Console.WriteLine("====== DÖVİZ MENÜSÜ ======");
    Console.WriteLine("1 - Dolar Kuru Göster");
    Console.WriteLine("2 - Euro Kuru Göster");
    Console.WriteLine("3 - Çıkış");
    Console.Write("Seçiminiz: ");
    secim = int.Parse(Console.ReadLine());
    if (secim == 1)
        Console.WriteLine("Dolar kuru: 33.20 TL");
    else if (secim == 2)
        Console.WriteLine("Euro kuru: 36.50 TL");
    else if (secim == 3)
        Console.WriteLine("Programdan çıkılıyor...");
    else
        Console.WriteLine("Geçersiz seçim yaptınız!");
}''', None, inp=['1', '3']),
    table(['Komut', 'Görevi'], ['break', 'Döngüyü **o anda bitirir**, döngünün dışına çıkar'], ['continue', 'Satırın gerisini atlar, döngünün **sonraki turuna** geçer'], ['Thread.Sleep(1000)', 'Programı **milisaniye** cinsinden bekletir (1000 ms = 1 sn); `using System.Threading;` gerekir']),
    code('''for (int i = 1; i <= 10; i++)
{
    if (i == 7) break;
    if (i % 2 == 0) continue;
    Console.Write(i + " ");
}''', '1 3 5 '),
    p('**do while:** koşulu sonda kontrol eder, bu yüzden **en az bir kez** çalışır.'),
    code('''int i = 10;
do
{
    Console.WriteLine(i);
    i++;
} while (i < 5);''', '10'),
    tip('Slayttaki ödev: 0–10 arası sayıları **5 saniye** aralıklarla yazdırmak için döngünün içine `Thread.Sleep(5000);` eklenir.'),
    low('foreach slaytta sadece adı geçiyor (dizilerle kullanılır); vizede ayrıntı beklenmez.'))

TRAPS = [
    {'t': 'Write satır başı yapmaz, WriteLine yapar. ReadLine her zaman **string** döndürür.', 'topic': 'girdi'},
    {'t': 'Sayı almak için `Convert.ToInt32(Console.ReadLine())` ya da `int.Parse(...)`. Çevirmezsen "1" + "2" = "12".', 'topic': 'donusum'},
    {'t': 'İki int bölününce sonuç tam sayı: `7/2` = 3, `2/4` = 0. `%` kalanı verir: `9%5` = 4.', 'topic': 'operator'},
    {'t': 'Öncelik: parantez → `* / %` → `+ -`. `8 + 2 / 4 + 1` = 9.', 'topic': 'operator'},
    {'t': '`"Sonuc:" + 4 + 5` → Sonuc:45 · `4 + 5 + "Sonuc"` → 9Sonuc.', 'topic': 'operator'},
    {'t': '`=` atama, `==` karşılaştırma. `&&` ikisi de, `||` en az biri.', 'topic': 'operator'},
    {'t': 'Kodda ondalık nokta (`5.9f`), Türkçe Windows ekranında virgül (5,9). `float x = 5,9;` hatalı.', 'topic': 'degisken'},
    {'t': 'Değişken adı rakamla başlayamaz; C# büyük–küçük harfe duyarlı (`sayi` ≠ `Sayi`).', 'topic': 'degisken'},
    {'t': 'if/else sonrasında tek satır varsa `{}` gerekmez; birden çok satırda şart.', 'topic': 'kosul'},
    {'t': 'switch\'te her case `break` ile biter; hiçbiri tutmazsa `default`.', 'topic': 'switch'},
    {'t': 'Toplam döngüden önce 0, çarpım/faktöriyel 1 ile başlar.', 'topic': 'for'},
    {'t': 'while\'da sayaç döngüden önce tanımlanır, artırma içeride; unutulursa sonsuz döngü.', 'topic': 'while'},
    {'t': 'break döngüyü bitirir, continue sadece o turu atlar. do while en az bir kez çalışır.', 'topic': 'while'},
    {'t': 'Algoritma programlama dili değildir. Derleyici kaynak kodu makine diline çevirir.', 'topic': 'algoritma'},
]

TOPIC_RULES = {
    'algoritma': 'Algoritma: problemi çözmek için sıralı mantıksal adımlar; başı ve sonu var, programlama dili değil. Akış şemasında elips başla/bitir, paralelkenar giriş, dikdörtgen işlem, baklava karar.',
    'csharp': 'C#: Microsoft\'un açık kaynak, nesne yönelimli, C/C++\'tan türeyen dili. Derleyici kaynak kodu makine diline (0-1) çevirip hataları bildirir. Visual Studio bir IDE\'dir.',
    'girdi': 'Write satır başı yapmaz, WriteLine yapar. ReadLine satırı string olarak okur, Read ilk karakteri okur. Yorum: // tek satır, /* */ çok satır.',
    'degisken': 'Değişken: tür + ad (+ değer). string "", char \'\', int tam sayı 4 byte, float 4, double 8, decimal 16 byte, bool true/false. Ad rakamla başlamaz, büyük-küçük harf duyarlı, camelCase.',
    'operator': 'Önce parantez, sonra * / %, sonra + -. int/int tam sayı bölme yapar, % kalanı verir. + metinde birleştirir. == karşılaştırma, && ve, || veya. sayi++, sayi += 1, sayi = sayi + 1 aynı.',
    'donusum': 'Klavyeden gelen değer string\'tir; Convert.ToInt32 ya da int.Parse ile sayıya çevrilir. Çevrilmeden toplanan metinler yan yana eklenir.',
    'kosul': 'if koşul doğruysa bloğunu, değilse else bloğunu çalıştırır; else if zincirinde ilk doğru olan çalışır. Tek satırlık blokta süslü parantez şart değildir.',
    'switch': 'switch değere göre case seçer; her case break ile biter, hiçbiri tutmazsa default çalışır (if\'teki else gibi).',
    'for': 'for (başlangıç; koşul; artırma). Toplam için döngüden önce 0, sayaç için 0 ve koşulda sayac++. i <= n son değeri dahil eder.',
    'while': 'while koşul doğru oldukça döner; sayaç önce tanımlanır, içeride artırılır. break döngüyü bitirir, continue turu atlar. do while en az bir kez çalışır. Faktöriyelde sonuc = 1 ile başla.',
}
