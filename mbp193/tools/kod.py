"""Kod yazma görevleri. checks: (etiket, regex, puan, olmamalı?) · JS ve Python'da aynı çalışan basit regex'ler.
model: Main içi C# kodu (mono ile çalıştırılır), girdi: örnek çalıştırma girdileri. Aynı çifte (pair) ait for/while görevlerinde
bir sürümün modeli diğer sürümün döngü kontrolünden geçmemeli (build.py denetler)."""
import textwrap
K = []
def dd(s): return textwrap.dedent(s).strip('\n')

# ortak kontroller
FOR = ('`for` döngüsü kullanıldı', r'\bfor\s*\(', 5, False)
NOFOR = ('`for` kullanılmadı (soru while istiyor)', r'\bfor\s*\(', 3, True)
WHILE = ('`while` döngüsü kullanıldı', r'\bwhile\s*\(', 5, False)
NOWHILE = ('`while` kullanılmadı (soru for istiyor)', r'\bwhile\s*\(', 3, True)
READ = ('Kullanıcıdan sayı alındı ve çevrildi (Convert.ToInt32 / int.Parse)', r'(Convert\.ToInt(16|32|64)|int\.Parse)\s*\(\s*Console\.ReadLine\s*\(\s*\)\s*\)', 2, False)
WRITE = ('Sonuç ekrana yazıldı (Console.Write / WriteLine)', r'Console\.Write(Line)?\s*\(', 1, False)
INC = ('Sayaç döngü içinde artırılıyor (i++ / i += 1)', r'\w+\s*(\+\+|\+=\s*1\b)|\+\+\s*\w+|(\w+)\s*=\s*\2\s*\+\s*1\b', 2, False)

def gorev(id, pair, tur, baslik, soru, checks, model, girdi=None, puan=15, ipucu=None):
    tot = sum(c[2] for c in checks)
    K.append({'id': id, 'pair': pair, 'tur': tur, 'baslik': baslik, 'soru': soru, 'puan': puan,
              'checks': [{'k': c[0], 're': c[1], 'w': round(c[2] * puan / tot, 2), 'neg': c[3]} for c in checks],
              'model': dd(model), 'girdi': girdi or [], 'ipucu': ipucu})

# ------------------------------------------------------------------ 0–10 yazdır
gorev('yaz-for', 'yaz', 'for', '0–10 arası sayılar (for)', '0\'dan 10\'a kadar (10 dahil) sayıları alt alta ekrana yazdıran programı **for döngüsü** ile yazınız.',
      [FOR, NOWHILE, ('Başlangıç 0', r'=\s*0\s*;', 2, False), ('Koşul 10\'u dahil ediyor (<= 10 ya da < 11)', r'<=\s*10\b|<\s*11\b', 3, False), INC, ('WriteLine ile alt alta yazıldı', r'Console\.WriteLine\s*\(', 2, False)],
      '''for (int i = 0; i <= 10; i++)
{
    Console.WriteLine(i);
}''')
gorev('yaz-while', 'yaz', 'while', '0–10 arası sayılar (while)', 'Aynı programı (0–10 arası sayıları alt alta yazdırma) **while döngüsü** ile yazınız.',
      [WHILE, NOFOR, ('Sayaç döngüden önce 0 ile tanımlandı', r'int\s+\w+\s*=\s*0\s*;', 2, False), ('Koşul 10\'u dahil ediyor (<= 10 ya da < 11)', r'<=\s*10\b|<\s*11\b', 3, False), INC, ('WriteLine ile alt alta yazıldı', r'Console\.WriteLine\s*\(', 2, False)],
      '''int i = 0;
while (i <= 10)
{
    Console.WriteLine(i);
    i++;
}''', ipucu='while\'da başlangıç değeri döngüden önce, artırma döngünün içinde.')

# ------------------------------------------------------------------ 1..N toplamı
gorev('topla-for', 'topla', 'for', '1\'den N\'e toplam (for)', 'Kullanıcıdan bir N sayısı alıp 1\'den N\'e kadar (N dahil) sayıların toplamını ekrana yazan programı **for** ile yazınız.',
      [FOR, NOWHILE, READ, ('Toplam değişkeni döngüden önce 0', r'\w+\s*=\s*0\s*;', 2, False), ('Döngüde toplama ekleniyor (+=)', r'\+=\s*\w+|(\w+)\s*=\s*\1\s*\+\s*\w+', 3, False), ('Koşul N\'yi dahil ediyor (<=)', r'<=\s*\w+', 2, False), WRITE],
      '''Console.Write("N: ");
int n = Convert.ToInt32(Console.ReadLine());
int toplam = 0;
for (int i = 1; i <= n; i++)
{
    toplam += i;
}
Console.WriteLine("Toplam: " + toplam);''', ['10'])
gorev('topla-while', 'topla', 'while', '1\'den N\'e toplam (while)', 'Aynı programı (1\'den N\'e kadar toplam) **while** ile yazınız.',
      [WHILE, NOFOR, READ, ('Toplam döngüden önce 0', r'\w+\s*=\s*0\s*;', 2, False), ('Sayaç döngüden önce 1 (ya da 0)', r'int\s+\w+\s*=\s*[01]\s*;', 1, False), ('Döngüde toplama ekleniyor (+=)', r'\+=\s*\w+|(\w+)\s*=\s*\1\s*\+\s*\w+', 3, False), INC, WRITE],
      '''Console.Write("N: ");
int n = Convert.ToInt32(Console.ReadLine());
int toplam = 0;
int i = 1;
while (i <= n)
{
    toplam += i;
    i++;
}
Console.WriteLine("Toplam: " + toplam);''', ['10'])

# ------------------------------------------------------------------ faktöriyel
gorev('fakt-while', 'fakt', 'while', 'Faktöriyel (while)', 'Kullanıcıdan alınan sayının faktöriyelini **while döngüsü** ile hesaplayınız. (Hocanın slaydı)',
      [WHILE, NOFOR, READ, ('Sonuç 1 ile başlıyor', r'\w+\s*=\s*1\s*;', 3, False), ('Çarpma ile birikiyor (*=)', r'\*=\s*\w+|(\w+)\s*=\s*\1\s*\*\s*\w+', 3, False), ('Sayı azaltılıyor ya da sayaç artırılıyor', r'\w+\s*(--|\+\+)|-=\s*1|\+=\s*1', 2, False), WRITE],
      '''Console.Write("Faktöriyeli bulunacak sayıyı giriniz:");
int sayi = Convert.ToInt32(Console.ReadLine());
int sonuc = 1;
while (sayi > 1)
{
    sonuc *= sayi;
    sayi--;
}
Console.WriteLine("Sonuç:" + sonuc);''', ['5'], ipucu='Çarpımda başlangıç 1 olmalı; 0 olursa sonuç hep 0 çıkar.')
gorev('fakt-for', 'fakt', 'for', 'Faktöriyel (for)', 'Aynı faktöriyel programını **for döngüsü** ile yazınız.',
      [FOR, NOWHILE, READ, ('Sonuç 1 ile başlıyor', r'\w+\s*=\s*1\s*;', 3, False), ('Çarpma ile birikiyor (*=)', r'\*=\s*\w+|(\w+)\s*=\s*\1\s*\*\s*\w+', 3, False), WRITE],
      '''Console.Write("Sayı: ");
int sayi = Convert.ToInt32(Console.ReadLine());
int sonuc = 1;
for (int i = 1; i <= sayi; i++)
{
    sonuc *= i;
}
Console.WriteLine("Sonuç:" + sonuc);''', ['5'])

# ------------------------------------------------------------------ kullanıcının belirlediği kadar sayıyı topla
gorev('nsayi-for', 'nsayi', 'for', 'Belirlenen kadar sayıyı toplama (for)', 'Kullanıcının belirlediği adet kadar sayıyı yine kullanıcıdan alarak toplayan programı **for** ile yazınız. (Hocanın slaydı)',
      [FOR, NOWHILE, READ, ('Toplam döngüden önce 0', r'\w+\s*=\s*0\s*;', 2, False), ('Sayı döngünün içinde okunuyor', r'for\s*\([^)]*\)[\s\S]*ReadLine', 3, False), ('Toplama ekleniyor', r'\+=\s*\w+|(\w+)\s*=\s*\1\s*\+\s*\w+', 3, False), WRITE],
      '''int toplam = 0;
Console.WriteLine("Kaç sayıyı Toplayacaksınız");
int deger = Convert.ToInt32(Console.ReadLine());
for (int i = 1; i <= deger; i++)
{
    Console.Write(i + ". Sayıyı Giriniz:");
    int sayi = Convert.ToInt32(Console.ReadLine());
    toplam = toplam + sayi;
}
Console.Write(toplam);''', ['3', '10', '20', '30'])
gorev('nsayi-while', 'nsayi', 'while', 'Belirlenen kadar sayıyı toplama (while)', 'Aynı programı **while** ile yazınız.',
      [WHILE, NOFOR, READ, ('Toplam döngüden önce 0', r'\w+\s*=\s*0\s*;', 2, False), ('Sayı döngünün içinde okunuyor', r'while\s*\([^)]*\)[\s\S]*ReadLine', 3, False), ('Toplama ekleniyor', r'\+=\s*\w+|(\w+)\s*=\s*\1\s*\+\s*\w+', 2, False), INC, WRITE],
      '''int toplam = 0;
Console.WriteLine("Kaç sayıyı Toplayacaksınız");
int deger = Convert.ToInt32(Console.ReadLine());
int i = 1;
while (i <= deger)
{
    Console.Write(i + ". Sayıyı Giriniz:");
    int sayi = Convert.ToInt32(Console.ReadLine());
    toplam += sayi;
    i++;
}
Console.Write(toplam);''', ['3', '10', '20', '30'])

# ------------------------------------------------------------------ tek / çift sayacı
gorev('tekcift-for', 'tekcift', 'for', 'Kaçı tek, kaçı çift (for)', 'Kullanıcının belirlediği adet sayıyı kullanıcıdan alınız. Bu sayıların kaçının tek, kaçının çift olduğunu bulan programı **for** ile yazınız. (Hocanın slaydı)',
      [FOR, NOWHILE, READ, ('Mod 2 ile çiftlik kontrolü', r'%\s*2\s*==\s*0|%\s*2\s*!=\s*0|%\s*2\s*==\s*1', 3, False), ('İki sayaç artırılıyor', r'\w+\s*\+\+[\s\S]*\w+\s*\+\+', 3, False), ('if / else kullanıldı', r'\bif\s*\([\s\S]*\belse\b', 1, False), WRITE],
      '''int cift = 0;
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
Console.Write("Çift Adet:" + cift);''', ['4', '2', '7', '10', '12'])
gorev('tekcift-while', 'tekcift', 'while', 'Kaçı tek, kaçı çift (while)', 'Aynı programı **while** ile yazınız.',
      [WHILE, NOFOR, READ, ('Mod 2 ile çiftlik kontrolü', r'%\s*2\s*==\s*0|%\s*2\s*!=\s*0|%\s*2\s*==\s*1', 3, False), ('Tek ve çift sayaçları + döngü sayacı artırılıyor', r'\+\+[\s\S]*\+\+[\s\S]*\+\+', 3, False), ('if / else kullanıldı', r'\bif\s*\([\s\S]*\belse\b', 1, False), WRITE],
      '''int cift = 0, tek = 0;
Console.WriteLine("Kaç Adet Sayı Gireceksiniz:");
int deger = Convert.ToInt32(Console.ReadLine());
int i = 1;
while (i <= deger)
{
    Console.Write(i + ".sayıyı giriniz:");
    int sayi = Convert.ToInt32(Console.ReadLine());
    if (sayi % 2 == 0)
        cift++;
    else
        tek++;
    i++;
}
Console.WriteLine("Tek Adet:" + tek);
Console.Write("Çift Adet:" + cift);''', ['4', '2', '7', '10', '12'])

# ------------------------------------------------------------------ çarpım tablosu
gorev('carpim-for', 'carpim', 'for', 'Çarpım tablosu (for)', 'Kullanıcıdan alınan sayının 1\'den 10\'a kadar çarpım tablosunu "7 x 3 = 21" biçiminde yazan programı **for** ile yazınız.',
      [FOR, NOWHILE, READ, ('1\'den 10\'a (<= 10)', r'=\s*1\s*;[^;]*<=\s*10|<\s*11', 3, False), ('Çarpım yapılıyor (*)', r'\w+\s*\*\s*\w+', 2, False), ('Çıktıda metin + sayı birleştirme', r'"\s*x\s*"|" x "', 2, False), WRITE],
      '''Console.Write("Sayı: ");
int sayi = Convert.ToInt32(Console.ReadLine());
for (int i = 1; i <= 10; i++)
{
    Console.WriteLine(sayi + " x " + i + " = " + (sayi * i));
}''', ['7'], ipucu='(sayi * i) parantezsiz yazılırsa önce metin birleştirilir: "7 x 3 = 73" gibi hatalı çıktı olur.')
gorev('carpim-while', 'carpim', 'while', 'Çarpım tablosu (while)', 'Aynı çarpım tablosunu **while** ile yazınız.',
      [WHILE, NOFOR, READ, ('Sayaç 1 ile başlıyor', r'int\s+\w+\s*=\s*1\s*;', 2, False), ('Koşul 10\'u dahil ediyor', r'<=\s*10\b|<\s*11\b', 2, False), ('Çarpım yapılıyor (*)', r'\w+\s*\*\s*\w+', 2, False), INC, WRITE],
      '''Console.Write("Sayı: ");
int sayi = Convert.ToInt32(Console.ReadLine());
int i = 1;
while (i <= 10)
{
    Console.WriteLine(sayi + " x " + i + " = " + (sayi * i));
    i++;
}''', ['7'])

# ------------------------------------------------------------------ 0 girilene kadar topla
gorev('sifir-while', 'sifir', 'while', '0 girilene kadar topla (while)', 'Kullanıcı **0 girene kadar** sayı isteyen ve girilen sayıların toplamını en sonda yazan programı **while** ile yazınız.',
      [WHILE, NOFOR, READ, ('Koşul 0 kontrolü (!= 0)', r'!=\s*0|==\s*0', 3, False), ('Toplam döngüden önce 0', r'\w+\s*=\s*0\s*;', 2, False), ('Toplama ekleniyor', r'\+=\s*\w+|(\w+)\s*=\s*\1\s*\+\s*\w+', 2, False), WRITE],
      '''int toplam = 0;
int sayi = -1;
while (sayi != 0)
{
    Console.Write("Sayı (çıkış 0): ");
    sayi = Convert.ToInt32(Console.ReadLine());
    toplam += sayi;
}
Console.WriteLine("Toplam: " + toplam);''', ['5', '8', '-3', '0'], ipucu='Döngüye girebilmek için sayi başta 0\'dan farklı bir değer almalı; tekrar sayısı belli olmadığı için while uygun.')
gorev('sifir-break', 'sifir', 'while', '0 girilene kadar topla (sonsuz döngü + break)', 'Aynı programı `while (true)` ve **break** ile yazınız: 0 girilince döngüden çıkılsın.',
      [('`while (true)` sonsuz döngü', r'while\s*\(\s*true\s*\)', 3, False), ('0 girilince break', r'==\s*0\s*\)[\s\S]{0,40}break\s*;', 4, False), READ, ('Toplama ekleniyor', r'\+=\s*\w+|(\w+)\s*=\s*\1\s*\+\s*\w+', 2, False), WRITE],
      '''int toplam = 0;
while (true)
{
    Console.Write("Sayı (çıkış 0): ");
    int sayi = Convert.ToInt32(Console.ReadLine());
    if (sayi == 0)
        break;
    toplam += sayi;
}
Console.WriteLine("Toplam: " + toplam);''', ['5', '8', '-3', '0'])

# ------------------------------------------------------------------ menü
gorev('doviz', 'doviz', 'while', 'Döviz menüsü (while)', 'Ekrana "1 - Dolar Kuru Göster, 2 - Euro Kuru Göster, 3 - Çıkış" menüsünü yazdırınız. 1\'e basılırsa dolar kurunu, 2\'ye basılırsa euro kurunu göstersin; kullanıcı **3\'e basana kadar** dönmeye devam etsin. (Hocanın slaydı)',
      [WHILE, ('Koşul: seçim 3 olmadıkça (!= 3)', r'!=\s*3', 3, False), ('Seçim döngünün içinde okunuyor', r'while\s*\([^)]*\)[\s\S]*ReadLine', 3, False), ('Seçimlere göre if / else if ya da switch', r'else\s+if|switch\s*\(', 2, False), ('Geçersiz seçim için else / default', r'\belse\b(?!\s+if)|default\s*:', 2, False), WRITE],
      '''int secim = 0;
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
}''', ['1', '5', '3'])

# ------------------------------------------------------------------ switch hesap makinesi
gorev('hesap-switch', 'hesap', 'switch', 'Dört işlem (switch)', 'Kullanıcıdan alınan 2 değerin toplama, çıkarma, çarpma ve bölme işlemlerini, kullanıcının seçtiği işleme göre yapan programı **switch** yapısı ile yazınız. (Hocanın slaydı)',
      [('switch kullanıldı', r'switch\s*\(', 3, False), ('case\'ler', r'case\s+[\w"\']+\s*:[\s\S]*case\s+[\w"\']+\s*:[\s\S]*case\s+[\w"\']+\s*:', 3, False), ('Her case break ile bitiyor', r'break\s*;[\s\S]*break\s*;[\s\S]*break\s*;', 2, False), ('default (hatalı giriş)', r'default\s*:', 2, False), READ, WRITE],
      '''Console.Write("Lütfen 1.sayıyı giriniz:");
int sayi1 = Convert.ToInt32(Console.ReadLine());
Console.Write("Lütfen 2.sayıyı giriniz:");
int sayi2 = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("1.Toplama 2.Cıkarma 3.Carpma 4.Bölme");
Console.Write("Lütfen işlem seçiniz:");
int islem = Convert.ToInt32(Console.ReadLine());
switch (islem)
{
    case 1:
        Console.WriteLine(sayi1 + sayi2);
        break;
    case 2:
        Console.WriteLine(sayi1 - sayi2);
        break;
    case 3:
        Console.WriteLine(sayi1 * sayi2);
        break;
    case 4:
        Console.WriteLine(sayi1 / sayi2);
        break;
    default:
        Console.WriteLine("Hatalı Giriş");
        break;
}''', ['12', '4', '3'])
gorev('hesap-if', 'hesap', 'if', 'Dört işlem (if – else if)', 'Aynı dört işlem programını **if – else if** ile yazınız.',
      [('if / else if zinciri', r'\bif\s*\([\s\S]*else\s+if[\s\S]*else\s+if', 4, False), ('switch kullanılmadı', r'switch\s*\(', 2, True), ('Hatalı seçim için else', r'\belse\b(?!\s+if)', 2, False), READ, WRITE],
      '''Console.Write("1. sayı: ");
int sayi1 = Convert.ToInt32(Console.ReadLine());
Console.Write("2. sayı: ");
int sayi2 = Convert.ToInt32(Console.ReadLine());
Console.Write("İşlem (1-4): ");
int islem = Convert.ToInt32(Console.ReadLine());
if (islem == 1)
    Console.WriteLine(sayi1 + sayi2);
else if (islem == 2)
    Console.WriteLine(sayi1 - sayi2);
else if (islem == 3)
    Console.WriteLine(sayi1 * sayi2);
else if (islem == 4)
    Console.WriteLine(sayi1 / sayi2);
else
    Console.WriteLine("Hatalı Giriş");''', ['12', '4', '3'])

# ------------------------------------------------------------------ if – else
gorev('not', 'not', 'if', 'Vize–final ortalaması ve harf notu', 'Kullanıcıdan vize ve final notu alıp ortalamayı hesaplayın (vize %40, final %60). Ortalama 60\'ın altında ise "Kaldınız", 60–70 "DD", 70–80 "CC", 80–90 "BB", 90 ve üstü "AA" yazsın. (Hocanın slaydı)',
      [READ, ('Ağırlıklı ortalama (0.4 ve 0.6)', r'0[.,]4[\s\S]*0[.,]6|0[.,]6[\s\S]*0[.,]4|\*\s*40[\s\S]*\*\s*60', 4, False), ('if / else if zinciri', r'\bif\s*\([\s\S]*else\s+if[\s\S]*else\s+if', 3, False), ('60 sınırı kontrolü', r'<\s*60|>=\s*60', 2, False), WRITE],
      '''Console.Write("Vize: ");
int vize = Convert.ToInt32(Console.ReadLine());
Console.Write("Final: ");
int final = Convert.ToInt32(Console.ReadLine());
double ort = vize * 0.4 + final * 0.6;
Console.WriteLine("Ortalama: " + ort);
if (ort < 60)
    Console.WriteLine("Kaldınız");
else if (ort < 70)
    Console.WriteLine("DD");
else if (ort < 80)
    Console.WriteLine("CC");
else if (ort < 90)
    Console.WriteLine("BB");
else
    Console.WriteLine("AA");''', ['50', '80'], ipucu='Slaytta 70–80 iki kez yazılmış; aralıkları sırayla ve çakışmadan yaz.')
gorev('pozneg', 'pozneg', 'if', 'Pozitif, negatif ya da sıfır', 'Klavyeden girilen sayının pozitif mi, negatif mi yoksa 0\'a mı eşit olduğunu gösteren programı yazınız. (Hocanın slaydı)',
      [READ, ('> 0 kontrolü', r'>\s*0', 2, False), ('< 0 kontrolü ya da else if', r'<\s*0|else\s+if', 2, False), ('Üç durum: if – else if – else', r'\bif\s*\([\s\S]*else\s+if[\s\S]*\belse\b', 4, False), WRITE],
      '''Console.Write("Sayı: ");
int sayi = Convert.ToInt32(Console.ReadLine());
if (sayi > 0)
    Console.WriteLine("Pozitif");
else if (sayi < 0)
    Console.WriteLine("Negatif");
else
    Console.WriteLine("Sıfır");''', ['-4'])
gorev('giris', 'giris', 'if', 'Kullanıcı adı ve şifre', 'Kullanıcıdan kullanıcı adı ve parola alan; kullanıcı adı "ekonomi", şifre "1234" ise "Doğru Giriş", değilse "Kullanıcı adı veya şifre hatalı" yazan programı yazınız. (Hocanın slaydı)',
      [('İki değer ReadLine ile okunuyor', r'ReadLine[\s\S]*ReadLine', 3, False), ('"ekonomi" ile karşılaştırma (==)', r'==\s*"ekonomi"|"ekonomi"\s*==', 2, False), ('&& ile iki şart birlikte', r'&&', 3, False), ('else ile hata mesajı', r'\belse\b', 1, False), WRITE],
      '''Console.Write("Kullanıcı adı: ");
string kadi = Console.ReadLine();
Console.Write("Şifre: ");
string sifre = Console.ReadLine();
if (kadi == "ekonomi" && sifre == "1234")
    Console.WriteLine("Doğru Giriş");
else
    Console.WriteLine("Kullanıcı adı veya şifre hatalı");''', ['ekonomi', '1234'], ipucu='Şifre metin olarak karşılaştırılır: "1234" tırnak içinde, çevirme gerekmez.')
gorev('aralik', 'aralik', 'if', '0–100 arasında mı?', 'Kullanıcıdan alınan değerin 0–100 arasında (0 ve 100 dahil) olup olmadığını kontrol eden; arasındaysa "Doğru", değilse "Yanlış" yazan programı yazınız. (Hocanın slaydı)',
      [READ, ('>= 0', r'>=\s*0', 2, False), ('<= 100', r'<=\s*100', 2, False), ('&& ile birleştirme', r'&&', 3, False), ('else', r'\belse\b', 1, False), WRITE],
      '''Console.Write("Değer: ");
int deger = Convert.ToInt32(Console.ReadLine());
if (deger >= 0 && deger <= 100)
    Console.WriteLine("Doğru");
else
    Console.WriteLine("Yanlış");''', ['100'], ipucu='"Dahil" dendiği için >= ve <= kullanılır.')

# ------------------------------------------------------------------ hesap (slayt 31)
gorev('dortislem', 'dortislem', 'temel', 'Toplam, fark, çarpım, bölüm', 'Girilen 2 değişkenin toplamını, farkını, çarpımını ve bölümünü hesaplayan programı yazınız. (Hocanın slaydı)',
      [('İki değer okunup çevriliyor', r'(Convert\.To\w+|\w+\.Parse)\s*\(\s*Console\.ReadLine[\s\S]*(Convert\.To\w+|\w+\.Parse)\s*\(\s*Console\.ReadLine', 4, False), ('+ − * / dört işlem', r'\+[\s\S]*-[\s\S]*\*[\s\S]*/', 4, False), WRITE],
      '''Console.Write("1. sayı: ");
int a = Convert.ToInt32(Console.ReadLine());
Console.Write("2. sayı: ");
int b = Convert.ToInt32(Console.ReadLine());
Console.WriteLine("Toplam: " + (a + b));
Console.WriteLine("Fark: " + (a - b));
Console.WriteLine("Çarpım: " + (a * b));
Console.WriteLine("Bölüm: " + (a / b));''', ['20', '6'], ipucu='"Toplam: " + a + b yazarsan sayılar yan yana eklenir (206). Parantez kullan.')
gorev('kar', 'kar', 'temel', 'Kârlı satış fiyatı', 'Alış fiyatı ve kâr oranı (%) kullanıcıdan alınan ürünün satış fiyatını hesaplayınız. (Hocanın slaydı)',
      [('İki değer okunup çevriliyor', r'(Convert\.To\w+|\w+\.Parse)\s*\(\s*Console\.ReadLine[\s\S]*(Convert\.To\w+|\w+\.Parse)\s*\(\s*Console\.ReadLine', 4, False), ('/ 100 ile yüzde hesabı', r'/\s*100', 4, False), WRITE],
      '''Console.Write("Alış fiyatı: ");
double alis = Convert.ToDouble(Console.ReadLine());
Console.Write("Kâr oranı (%): ");
double oran = Convert.ToDouble(Console.ReadLine());
double satis = alis + alis * oran / 100;
Console.WriteLine("Satış fiyatı: " + satis);''', ['200', '15'])
gorev('daire', 'daire', 'temel', 'Daire alanı', 'Yarıçapı girilen dairenin alanını hesaplayınız. (Hocanın slaydı)',
      [('Yarıçap okunup çevriliyor', r'(Convert\.To\w+|\w+\.Parse)\s*\(\s*Console\.ReadLine', 3, False), ('π (3.14 ya da Math.PI)', r'3[.,]14|Math\.PI', 3, False), ('r * r (yarıçapın karesi)', r'(\w+)\s*\*\s*\1\b|Math\.Pow', 3, False), WRITE],
      '''Console.Write("Yarıçap: ");
double r = Convert.ToDouble(Console.ReadLine());
double alan = Math.PI * r * r;
Console.WriteLine("Alan: " + alan);''', ['2'])

DENEMELER = [
    {'id': 'k1', 'title': 'Kod sınavı 1', 'ids': ['topla-for', 'fakt-while']},
    {'id': 'k2', 'title': 'Kod sınavı 2', 'ids': ['tekcift-while', 'carpim-for']},
    {'id': 'k3', 'title': 'Kod sınavı 3', 'ids': ['nsayi-for', 'doviz']},
]
