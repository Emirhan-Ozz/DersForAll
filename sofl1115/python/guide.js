// "Konu özeti" sekmesi (hocanın slaytlarından)
window.PYGUIDE = `
<h1>Konu özeti</h1>
<p class="lead">Hocanın 4 slayt dosyasından (Algoritma, Değişkenler, Koşul ifadeleri, For döngüsü) ve while döngüsünden sınav için gerekenler.</p>

<h2>1. Algoritma ve akış diyagramı</h2>
<p>Algoritma: bir problemi çözmek için adım adım uygulanan, başı ve sonu olan <b>sonlu işlemler kümesi</b>.</p>
<table class="format">
  <tr><th>Kriter</th><th>Anlamı</th></tr>
  <tr><td>Girdi</td><td>Sıfır veya daha fazla değer dışarıdan verilir</td></tr>
  <tr><td>Çıktı</td><td>En az bir değer üretir</td></tr>
  <tr><td>Açıklık</td><td>Her işlem açık olmalı</td></tr>
  <tr><td>Sonluluk</td><td>Her olasılıkta sonlu adımda bitmeli</td></tr>
  <tr><td>Etkinlik</td><td>Kalem-kâğıtla yapılabilecek kadar basit</td></tr>
</table>
<h3>Şekiller (özet)</h3>
<p>Akış diyagramında şeklin <b>biçimi</b> adımın türünü, <b>içindeki yazı</b> ne yapıldığını söyler. Sınavda en çok kutu doldurma soruluyor: önce şekle bak, sonra içine uygun şeyi yaz.</p>
<div class="shapes">
  <div class="shape"><svg viewBox="0 0 76 48" aria-hidden="true"><ellipse cx="38" cy="24" rx="34" ry="15"/><text x="38" y="28" text-anchor="middle">Başla</text></svg><b>Elips (oval)</b><div class="ne">Başlangıç ve bitiş. Her diyagramda bir Başla, bir Bitir olur. · İçine: <code>Başla</code> / <code>Bitir</code></div><div class="py">Python: programın ilk ve son satırı</div></div>
  <div class="shape"><svg viewBox="0 0 76 48" aria-hidden="true"><polygon points="16,9 74,9 60,39 2,39"/><text x="38" y="28" text-anchor="middle">A,B</text></svg><b>Paralelkenar</b><div class="ne">Veri girişi: kullanıcıdan değer alınır. · İçine: değişken adları, virgülle</div><div class="py">Python: <code>a = int(input())</code></div></div>
  <div class="shape"><svg viewBox="0 0 76 48" aria-hidden="true"><rect x="4" y="9" width="68" height="30"/><text x="38" y="28" text-anchor="middle">T=X+Y</text></svg><b>Dikdörtgen</b><div class="ne">İşlem: atama, hesaplama, sayaç artırma. · İçine: <code>=</code> ile bir atama</div><div class="py">Python: <code>t = x + y</code>, <code>sayac += 1</code></div></div>
  <div class="shape"><svg viewBox="0 0 76 48" aria-hidden="true"><polygon points="38,3 74,24 38,45 2,24"/><text x="38" y="28" text-anchor="middle">A&gt;B</text></svg><b>Eşkenar dörtgen (baklava)</b><div class="ne">Karar: koşul doğruysa E, yanlışsa H okundan devam edilir. İki çıkışı olan tek şekil. · İçine: karşılaştırma (<code>&gt; &lt; == &gt;= !=</code>)</div><div class="py">Python: <code>if</code> / <code>else</code>; geri dönen okla <code>while</code></div></div>
  <div class="shape"><svg viewBox="0 0 76 48" aria-hidden="true"><path d="M4,8 H72 V38 Q55,31 38,38 T4,38 Z"/><text x="38" y="26" text-anchor="middle">T</text></svg><b>Alt kenarı dalgalı (belge)</b><div class="ne">Yazdırma: sonuç ekrana çıkar. · İçine: yazdırılacak değişken ya da "metin"</div><div class="py">Python: <code>print(t)</code></div></div>
  <div class="shape"><svg viewBox="0 0 76 48" aria-hidden="true"><polygon points="14,9 62,9 74,24 62,39 14,39 2,24"/><text x="38" y="28" text-anchor="middle">i=1,10</text></svg><b>Altıgen</b><div class="ne">Döngü (slaytta geçiyor). Hoca döngüyü genelde baklava ve geri dönen okla çiziyor. · İçine: sayaç ve sınırları</div><div class="py">Python: <code>for i in range(1, 11)</code></div></div>
  <div class="shape"><svg viewBox="0 0 76 48" aria-hidden="true"><path d="M6,24 H66" fill="none"/><path d="M60,18 L70,24 L60,30 Z" style="fill:currentColor"/></svg><b>Ok</b><div class="ne">Akış yönü: adımların sırasını gösterir. Şeklin ortasına bağlanır. · İçine: karar oklarının yanına E / H</div><div class="py">Python: satır sırası</div></div>
  <div class="shape"><svg viewBox="0 0 76 48" aria-hidden="true"><circle cx="38" cy="24" r="9"/></svg><b>Küçük daire</b><div class="ne">Birleştirici: ayrılan E/H dalları burada tekrar birleşir. · İçine: boş bırakılır</div><div class="py">Python: <code>if</code> bloğu bitince devam eden satır</div></div>
</div>
<div class="ruleset"><b>Hızlı kurallar</b>
<ul>
  <li>Hep <b>Başla</b> ile başlar, <b>Bitir</b> ile biter. Oklar yukarıdan aşağı akar.</li>
  <li>Giriş kutusuna hesap yazılmaz (<code>A,B</code>), işlem kutusuna giriş yazılmaz (<code>T=A+B</code>).</li>
  <li>Baklavadan iki ok çıkar: <b>E</b> (evet, koşul doğru) ve <b>H</b> (hayır). Dikdörtgenden tek ok çıkar.</li>
  <li>Döngü = baklava + yukarı geri dönen ok. Ok, giriş kutusuna değil tekrar edilecek işleme döner.</li>
  <li>Başlangıç değerleri ayrı dikdörtgenlerde: toplam/sayaç için <code>0</code>, çarpım/faktöriyel için <code>1</code>.</li>
</ul></div>
<p class="small muted">Şekillerin büyük çizimi ve hocanın örnek diyagramları: <a href="#/notlar/algoritma">Ders notları → Algoritma</a>.</p>
<ul>
  <li>Türleri: <b>doğrusal</b> (giriş → işlem → çıkış), <b>mantıksal</b> (karar ile dallanır), <b>döngüsel</b> (bazı adımlar tekrar eder).</li>
  <li>Döngüde sayaç önce ilk değerini alır (<code>sayac=0</code>), işlem yapılır, sayaç artar (<code>sayac=sayac+1</code>), karar kutusunda koşul doğruysa (E) geri dönülür, yanlışsa (H) devam edilir.</li>
  <li>Toplam için başlangıç <code>0</code>, çarpım/faktöriyel için başlangıç <code>1</code>.</li>
</ul>

<h2>2. Değişkenler ve veri tipleri</h2>
<ul>
  <li>Değişken, ilk değer atandığında tanımlanır: <code>x = 10</code>. Tipi sonradan değişebilir: <code>x = "metin"</code>.</li>
  <li>Ad <b>harf veya _</b> ile başlar, <b>rakamla başlayamaz</b>, sadece harf, rakam ve _ içerir. Büyük/küçük harf duyarlıdır: <code>yas</code>, <code>Yas</code>, <code>YAS</code> farklıdır.</li>
  <li>Tipler: <code>str</code> ("metin"), <code>int</code> (20), <code>float</code> (20.5), <code>bool</code> (True/False), <code>list</code>, <code>tuple</code>, <code>dict</code>, <code>set</code>, <code>range</code>. Tipi öğrenmek için <code>type(x)</code>.</li>
  <li><code>input()</code> her zaman <b>metin</b> döndürür. Sayı için: <code>int(input())</code> ya da <code>float(input())</code>.</li>
  <li>Kurallara uymayan yazım: <b>Syntax Error</b>.</li>
</ul>

<h2>3. Operatörler</h2>
<table class="format">
  <tr><th>Operatör</th><th>Anlamı</th><th>Örnek</th></tr>
  <tr><td><code>/</code></td><td>Bölme (her zaman float)</td><td><code>17/5</code> → 3.4, <code>10/5</code> → 2.0</td></tr>
  <tr><td><code>//</code></td><td>Bölümün tam kısmı</td><td><code>17//5</code> → 3</td></tr>
  <tr><td><code>%</code></td><td>Kalan (mod)</td><td><code>17%5</code> → 2</td></tr>
  <tr><td><code>**</code></td><td>Üs</td><td><code>5**4</code> → 625</td></tr>
  <tr><td><code>== != &gt; &lt; &gt;= &lt;=</code></td><td>Karşılaştırma (sonuç True/False)</td><td><code>7 == 7</code> → True</td></tr>
  <tr><td><code>and</code></td><td>İkisi de doğruysa doğru</td><td><code>(8&lt;10) and (6&gt;5)</code> → True</td></tr>
  <tr><td><code>or</code></td><td>Biri doğruysa doğru</td><td><code>(5==5) or (6==5)</code> → True</td></tr>
  <tr><td><code>not</code></td><td>Tersi</td><td><code>not(5==5)</code> → False</td></tr>
</table>
<div class="box trap"><b>Tuzak:</b> <code>=</code> atama, <code>==</code> karşılaştırma. İşlem sırası: <code>**</code> → <code>* / // %</code> → <code>+ -</code>. Çift sayı: <code>x % 2 == 0</code>.</div>

<h2>4. if / elif / else</h2>
<pre class="code">sayi = int(input())
if sayi &gt; 0:
    print("Pozitif")
elif sayi &lt; 0:
    print("Negatif")
else:
    print("Sıfır")</pre>
<ul>
  <li>Koşuldan sonra <b>iki nokta</b> (<code>:</code>), bloğun içi <b>4 boşluk girintili</b>.</li>
  <li>İlk doğru koşulun bloğu çalışır, gerisine bakılmaz.</li>
  <li><code>else</code> koşul almaz ve en fazla bir kez kullanılır. Ara koşullar <code>elif</code>.</li>
  <li>Aralık kontrolü: <code>if x &gt;= 0 and x &lt;= 10:</code> ya da iç içe iki if.</li>
</ul>

<h2>5. for döngüsü ve range</h2>
<pre class="code">for i in range(1, 6):
    print(i)        # 1 2 3 4 5</pre>
<p><code>range(başlangıç, bitiş, artış)</code>: <b>bitiş dahil değil</b>. Başlangıç yazılmazsa 0, artış yazılmazsa 1.</p>
<table class="format">
  <tr><th>Yazım</th><th>Değerler</th></tr>
  <tr><td><code>range(5)</code></td><td>0 1 2 3 4</td></tr>
  <tr><td><code>range(1, 6)</code></td><td>1 2 3 4 5</td></tr>
  <tr><td><code>range(1, 10, 2)</code></td><td>1 3 5 7 9</td></tr>
  <tr><td><code>range(2, 11, 2)</code></td><td>2 4 6 8 10</td></tr>
  <tr><td><code>range(10, 0, -1)</code></td><td>10 9 … 1</td></tr>
  <tr><td><code>range(1, n+1)</code></td><td>1'den n'e (n dahil)</td></tr>
  <tr><td><code>range(1, 1)</code></td><td>boş (hiç çalışmaz)</td></tr>
</table>
<pre class="code">toplam = 0
for i in range(1, sayi + 1):
    toplam += i      # toplam = toplam + i
print(toplam)        # döngünün DIŞINDA: bir kez yazdırır</pre>
<p><code>print(x, end=" ")</code> alt satıra geçmeden yan yana yazar.</p>

<h2>6. while döngüsü</h2>
<pre class="code">i = 1            # 1) sayacı başlat
while i &lt;= 5:     # 2) koşul doğru oldukça
    print(i)
    i += 1       # 3) sayacı değiştir</pre>
<div class="box trap"><b>Sonsuz döngü:</b> while içinde sayacı artırmayı/azaltmayı unutursan koşul hep True kalır ve program bitmez. Tekrar sayısı belliyse for, "şu olana kadar" ise while kullanılır (ör. 0 girilene kadar sayı iste: <code>while sayi != 0:</code>).</div>

<h2>Sık yapılan hatalar</h2>
<table class="format">
  <tr><th>Yanlış</th><th>Doğru</th></tr>
  <tr><td><code>if x &gt; 5</code></td><td><code>if x &gt; 5:</code></td></tr>
  <tr><td><code>if x = 5:</code></td><td><code>if x == 5:</code></td></tr>
  <tr><td><code>else x &lt; 5:</code></td><td><code>elif x &lt; 5:</code> ya da sadece <code>else:</code></td></tr>
  <tr><td><code>sayi = input()</code> sonra <code>sayi + 1</code></td><td><code>sayi = int(input())</code></td></tr>
  <tr><td><code>for i in range(1, 10)</code> (10 dahil sanmak)</td><td><code>range(1, 11)</code></td></tr>
  <tr><td><code>print(...)</code> döngü içinde (toplam her turda yazılır)</td><td>girintiyi kaldır, döngüden sonra yazdır</td></tr>
  <tr><td><code>(a + b + c / 3)</code></td><td><code>(a + b + c) / 3</code></td></tr>
</table>
`;
