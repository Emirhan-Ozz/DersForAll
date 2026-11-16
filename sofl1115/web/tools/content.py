"""MBP1145 Web Tasarımı I · konu özetleri.
Kaynak: Doç. Dr. Necla Kırcalı Gürsoy'un "Web Tasarımının Temelleri" sunumları (1, 3, 4_1, 5_1, 6, 6_2, 7, 8).
Sunum 2 (protokoller) verilmedi; sunum 1'in konu listesinde geçtiği için kısa ve "genel bilgi" diye işaretli.
'prev': True olan kod blokları sitede tarayıcı görünümüyle gösterilir; build.py hepsini Chromium'da açıp kontrol eder."""

T = []
def topic(id, title, src, *blocks):
    T.append({'id': id, 'title': title, 'src': src, 'blocks': list(blocks)})
P = lambda s: {'t': 'p', 'text': s}
UL = lambda *a: {'t': 'ul', 'items': list(a)}
TB = lambda head, rows: {'t': 'table', 'head': head, 'rows': rows}
TRAP = lambda s: {'t': 'trap', 'text': s}
TIP = lambda s: {'t': 'tip', 'text': s}
LOW = lambda s: {'t': 'low', 'text': s}
def CODE(code, prev=True, h=None, check=None):
    d = {'t': 'code', 'code': code.strip('\n')}
    if prev: d['prev'] = True
    if h: d['h'] = h
    if check: d['check'] = check          # build.py: Chromium'da çalışan JS ifadesi, true dönmeli
    return d

# ----------------------------------------------------------------------- 1
topic('internet', 'İnternet ve Web kavramları', 'Sunum 1',
    P('**İnternet** (International Network, uluslararası ağ): dünyadaki bilgisayar ağlarını ve kurumsal sistemleri birbirine bağlayan elektronik iletişim ağıdır. Çok protokollüdür; bilgi bilgisayarlar arasında protokollere göre **paketler** halinde taşınır.'),
    TB(['Tarih', 'Olay'], [
        ['1960\'lar', 'ABD hükümeti hataya dayanıklı, sağlam bir ağ için araştırma başlatır (askeri ve bilimsel amaç).'],
        ['1962', 'MIT\'den araştırmacılar bilgisayarların küresel ağını öneren "kısa notlar serisi"ni yayınlar.'],
        ['1965', 'MIT\'den Lawrence Roberts çevirmeli telefon hattıyla Kaliforniya ile Massachusetts\'teki iki bilgisayarı bağlar.'],
        ['1969', '**ARPA** (ARPANET) kurulur; ABD Savunma Bakanlığı destekli. Dosya transferi ve e-posta ile kullanıcı hızla artar.'],
        ['1983', 'Dünya çapında hızla yaygınlaşmaya başlar.'],
        ['**12 Nisan 1993**', 'Türkiye internete bağlanır: **ODTÜ ve TÜBİTAK** ortak çalışması.']]),
    P('Ağlar telefon hatları, **fiber optik** kablolar ve **uydular** üzerinden veri taşır. Ağları devlet kurumları, üniversiteler, gönüllü kuruluşlar ve **İSS (İnternet Servis Sağlayıcı)** gibi ticari kuruluşlar işletir.'),
    P('**Temel internet kavramları**'),
    TB(['Kavram', 'Anlamı'], [
        ['**WWW** (World Wide Web, Web, W3)', 'Yazı, resim, ses, film gibi verilere **etkileşimli** ulaşmayı sağlayan web sayfaları ağı. Siteler çoğunlukla `www` ile başlar.'],
        ['**E-posta**', 'En yaygın internet uygulaması. **SMTP** (Simple Mail Transfer Protocol) ile çalışır, istemci/sunucu prensibiyle.'],
        ['**Download**', 'İnternetten veri **indirmek**. Bir sayfayı açmak bile onu indirmektir.'],
        ['**Upload**', 'Kendi bilgisayarındaki veriyi başka bilgisayara **yüklemek** (siteye fotoğraf yüklemek).'],
        ['**Sunucu (server)**', 'Bilgi istendiğinde **cevap veren** bilgisayar.'],
        ['**İstemci (client)**', 'Bilgiyi **isteyen** bilgisayar. Siteye giren sen istemcisin.'],
        ['**Hosting** (barındırma)', 'Site dosyalarının internete hızlı bağlı bir **web sunucusunda** tutulması; alan kiralamak.'],
        ['**Domain name** (alan adı)', 'Sitenin internetteki adı. IP adresinin akılda kalan, kelimeli hâli. Alınmış alan adı tekrar alınamaz.'],
        ['**Tarayıcı (browser)**', 'Web sayfalarını indirip HTML\'i yorumlayarak gösteren program (Chrome, Firefox, Edge, Safari).']]),
    P('**Sunucu çeşitleri**: web sunucuları, dosya paylaşım sunucuları, medya sunucuları, veri tabanı sunucuları, **DNS** (alan adı) sunucuları.'),
    P('Ev bilgisayarı site barındırmaya uygun değildir: **upload hızı** genelde yetersizdir. Site, yüzlerce kullanıcıya aynı anda hizmet veren bir sunucuda durmalıdır.'),
    P('**E-posta adresi kuralları**: nokta `.`, tire `-`, alt çizgi `_` dışında sembol ve **Türkçe karakter** (ğ, ş, ü, ç, ö, ı, İ) kullanılmaz. Ücretsiz (`@gmail.com`, `@hotmail.com`) ve kurumsal (`@ankara.edu.tr`) adresler vardır.'),
    P('**URL** (Uniform Resource Locator, standart kaynak bulucu): internetteki her belgenin kendine özgü, tek adresi. **3 bölümden** oluşur:'),
    TB(['Bölüm', 'Örnek'], [
        ['1. Protokol', '`http://`, `ftp://`, `news://`'],
        ['2. Domain (alan) adı', '`www.emyo.ankara.edu.tr`'],
        ['3. Dizin yolu', '`/ders1/bolum10.html`']]),
    P('Alan adının içinde ayrıca **uzantı** ve **ülke adı** bölümleri vardır: `ankara.edu.tr` → `edu` uzantı, `tr` ülke.'),
    TB(['Uzantı', 'Anlamı', 'Örnek'], [
        ['`edu`', 'Eğitim kurumları', 'ankara.edu.tr'],
        ['`com`', 'Ticari kuruluşlar', 'hmyazilim.com'],
        ['`gov`', 'Devlet kurumları', 'tbmm.gov.tr'],
        ['`mil`', 'Askeri kurumlar', 'tsk.mil.tr'],
        ['`net`', 'Ağ destek kurumları', 'tr.net'],
        ['`gen`', 'Genel amaçlı siteler', 'okey.gen.tr']]),
    P('Ülke adları: `tr` Türkiye, `de` Almanya, `fr` Fransa, `jp` Japonya, `ca` Kanada, `uk` Birleşik Krallık, `it` İtalya, `ru` Rusya.'),
    P('**Protokoller** (sunum 2 verilmedi; konu listesinde geçtiği için genel bilgi):'),
    TB(['Protokol', 'Görevi'], [
        ['**HTTP** / HTTPS', 'Web sayfalarının tarayıcı ile sunucu arasında aktarılması. HTTPS şifrelidir.'],
        ['**TCP/IP**', 'İnternetin temel protokol ailesi; veriyi paketlere böler ve adresler.'],
        ['**FTP**', 'Dosya aktarımı (File Transfer Protocol).'],
        ['**SMTP**', 'E-posta gönderimi.'],
        ['**IP adresi**', 'Ağdaki her bilgisayarın sayısal adresi (ör. `192.168.1.10`).'],
        ['**DNS**', 'Alan adını IP adresine çevirir.']]),
    TRAP('Alan adı yazınca tarayıcı önce onu **IP adresine çevirir** (DNS), sonra o IP\'deki sunucuya gider. **Sunucu** cevap veren, **istemci** isteyen taraftır.'),
    TIP('Türkiye\'nin internete bağlanma tarihi (**12 Nisan 1993**, ODTÜ + TÜBİTAK), **ARPA 1969**, URL\'nin **3 bölümü** ve alan adı uzantıları sık sorulur.'),
)

# ----------------------------------------------------------------------- 2
topic('tasarim', 'HTML\'e giriş ve web tasarım ilkeleri', 'Sunum 3',
    P('**HTML** (Hyper Text Markup Language) = **Hiper Metin İşaretleme Dili**. Tarayıcıların yorumladığı **metin tabanlı** bir dildir; yorumlanan metinden web sayfası oluşur. Dosya uzantısı **`.htm` ya da `.html`** olmalıdır.'),
    P('**Hypertext**: "bir şeylere bağ kuran kelimelere sahip sayfalar", yani bağlantılı metin.'),
    TRAP('HTML bir **programlama dili değil, işaretleme dilidir**. Döngü, değişken yoktur; etiketlerle içerik işaretlenir.'),
    P('**Web sitesine neden ihtiyaç var?** Dünya çapında tanınmak, reklam ve satış, eğlence ve kültür tanıtımı, haber, bilgi paylaşmak, iletişim.'),
    P('**Web sitesinin planlanması** (sırasıyla):'),
    {'t': 'ul', 'items': ['1. Sitenin **amacının** belirlenmesi', '2. Sitenin **içeriğine** karar verilmesi', '3. İçeriğin **düzenlenmesi**',
                           '4. **Sayfa düzeninin** (tasarımın) belirlenmesi', '5. **Ana sayfanın** oluşturulması', '6. Bilgilerin yazılması']},
    P('**Web tasarımında 5 temel ilke**'),
    TB(['İlke', 'Ne demek?'], [
        ['**İçeriğin belirlenmesi**', 'En önemli şey içeriktir. Tasarımı güzel ama içeriği boş siteye kimse gelmez; tasarımı zayıf ama içeriği iyi siteye ziyaretçi gelir. Uzun cümle yerine sade anlatım.'],
        ['**Tasarımın belirlenmesi**', 'Logo, yazılar, menüler nerede olacak; kâğıda ya da bilgisayara çizilir.'],
        ['**İşlevsellik**', 'Ana sayfadan her sayfaya, iç sayfalardan da diğer sayfalara ve ana sayfaya bağlantı olmalı (alışveriş sitesinde her sayfadan sepete).'],
        ['**Kullanılabilirlik**', 'Kolay kullanım: okunur yazı tipi/renk/boyut, hızlı yüklenme, görünür menü, logodan ana sayfaya bağlantı, iletişim formu, çok içerikte arama kutusu.'],
        ['**Tarayıcılarla uyumluluk**', 'Farklı tarayıcı, sürüm ve ekran çözünürlüklerinde düzgün görünmeli. Standartları **W3C** (World Wide Web Consortium, w3c.org) belirler.']]),
    P('**Kullanılabilirlik maddeleri**: sayfa hızlı yüklenmeli; menü (navigasyon) kolay görülen yerde olmalı (genelde sayfa başı, sol ya da sağ); **logodan ana sayfaya** bağlantı verilmeli; her sayfada **"Anasayfa"** yazısı olmalı; iletişim bilgisi ve formu bulunmalı; önemli kelimeler kalın ya da renkli vurgulanmalı; içerik çoksa **arama kutusu** olmalı. Yazı renkleri yazıcıdan çıkınca da okunacak şekilde seçilmeli.'),
    P('**Front-end ve Back-end**'),
    TB(['', 'Front-end (ön yüz)', 'Back-end (arka yüz)'], [
        ['Ne?', 'Kullanıcının **gördüğü** ve etkileşimde bulunduğu kısım', 'Görünmeyen kısım: sunucu, veri tabanı, API, iş mantığı'],
        ['Teknolojiler', '**HTML** (yapı/içerik), **CSS** (stil, renk, düzen, animasyon), **JavaScript** (etkileşim, dinamiklik)', 'Node.js, Python (Django, Flask), Ruby (Rails), PHP, Java (Spring), Go; SQL (MySQL, PostgreSQL, MSSQL) ve NoSQL (MongoDB, Cassandra)'],
        ['Görevler', 'Tasarım, **responsive** (mobil uyum), tıklama/form etkileşimi, hızlı yükleme, hata düzeltme', 'Veri yönetimi, güvenlik (şifreleme, kimlik doğrulama), API ve web servisleri, performans, arka plan işleri']]),
    P('**API** (Application Programming Interface): front-end ile back-end arasındaki iletişimi sağlar; RESTful ya da GraphQL ile çalışır.'),
    TRAP('**CSS** görünümü (stil), **HTML** yapıyı, **JavaScript** etkileşimi sağlar. PHP, Python, Node.js **back-end** dilleridir.'),
)

# ----------------------------------------------------------------------- 3
topic('temel', 'HTML temel yapısı ve etiket kuralları', 'Sunum 4_1 · Sunum 5_1',
    P('HTML\'de her şey metindir; yazmak için bir **editör** yeterlidir, Windows **Not Defteri** (Notepad) bile olur. Derste **Notepad++** kullanıldı.'),
    TB(['Editör tipi', 'Örnekler'], [
        ['**Metin tabanlı** (kod yazılır, rutin işleri kolaylaştırır)', 'HomeSite, HotDog, Notepad++'],
        ['**WYSIWYG** (What You See Is What You Get, "ne görürsen onu alırsın"; görsel, kod gerektirmez)', 'FrontPage, Dreamweaver, NetObjects Fusion']]),
    P('**Etiket (tag)**: `<` ve `>` arasına yazılan komut. Çoğu etiketin **başlangıç** ve **bitiş** etiketi vardır (`<b>` … `</b>`). Bazıları **tek** etikettir, kapatılmaz: `<br>`, `<hr>`, `<img>`.'),
    P('**Yazım kuralları**'),
    UL('Komutlar `< >` işaretleri arasına yazılır.',
       'HTML **büyük/küçük harfe duyarlı değildir**: `<BODY>` ile `<body>` aynıdır.',
       'Açılan etiket kapatılır; kapatırken `/` kullanılır.',
       'Dosya **.htm** ya da **.html** uzantısıyla kaydedilir.',
       '**Parametre** (nitelik) her zaman **başlangıç etiketine** yazılır, değeri **tırnak** içindedir: `<p align="center">`.',
       'Etiketler iç içe olabilir; **ilk açılan en son kapatılır**.'),
    TB(['Yanlış', 'Doğru'], [['`<b><u>metin</b></u>`', '`<b><u>metin</u></b>`']]),
    P('**Temel yapı**: her belge `<html>` ile başlar, `</html>` ile biter. İki ana kısım vardır: `<head>` (başlık bölümü) ve `<body>` (gövde).'),
    CODE('''
<html>
<head>
<title>İlk Sayfamız</title>
</head>
<body>
<h1>Merhaba</h1>
Bu bizim ilk web sayfamız.
</body>
</html>''', h=110),
    TB(['Etiket', 'Görevi'], [
        ['`<html>`', 'Tüm HTML kodları bunun arasındadır; genelde parametresiz kullanılır.'],
        ['`<head>`', 'Sayfa hakkındaki bilgiler: `<title>`, `<style>`, `<link>`, `<meta>`, `<script>`, `<noscript>`. Görünmez.'],
        ['`<title>`', 'Sayfanın **tarayıcı sekmesindeki** başlığı. `<head>` içine yazılır.'],
        ['`<body>`', 'Sayfada **görünen** her şey: metin, tablo, resim, video, bağlantı.']]),
    P('**Meta etiketleri** (`<head>` içinde): Türkçe karakterlerin (ç, ğ, ı, ş, ö, ü) düzgün görünmesi için karakter seti yazılır.'),
    CODE('''
<head>
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-9">
<meta http-equiv="Content-Type" content="text/html; charset=windows-1254">
<meta name="description" content="HTML ile Web Tasarımı">
<meta name="keywords" content="HTML, Web, Tasarım, CSS, Js">
<meta name="author" content="Zafer BAŞAR">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>''', prev=False),
    TB(['Meta', 'Anlamı'], [
        ['`charset`', 'Karakter seti (Türkçe için **UTF-8**, **iso-8859-9** ya da **windows-1254**)'],
        ['`description`', 'Sayfanın açıklaması (arama motorları için)'],
        ['`keywords`', 'Anahtar kelimeler'],
        ['`author`', 'Yazar'],
        ['`viewport`', 'Mobil uyum']]),
    P('**`<body>` parametreleri**'),
    TB(['Parametre', 'Değer', 'Tanımı'], [
        ['`bgcolor`', 'renk', 'Arka plan **rengi**: `<body bgcolor="orange">`, `bgcolor="#CCCC33"`'],
        ['`background`', 'URL', 'Arka plan **resmi**: `<body background="logo.jpg">`'],
        ['`text`', 'renk', 'Belgedeki **metin** rengi'],
        ['`link`', 'renk', 'Bağlantıların rengi'],
        ['`vlink`', 'renk', '**Ziyaret edilmiş** bağlantıların rengi'],
        ['`alink`', 'renk', 'Bağlantıya **tıklandığı anda** oluşacak renk (aktif)']]),
    P('Renkler adla (`red`) ya da onaltılık kodla (`#FF0000`) yazılır: `#FF0000` kırmızı, `#00FF00` yeşil, `#0000FF` mavi, `#FFFFFF` beyaz, `#000000` siyah.'),
    TRAP('`link` = bağlantı rengi, `vlink` = ziyaret edilmiş (visited), `alink` = tıklama anı (active). `text` normal yazı rengidir.'),
)

# ----------------------------------------------------------------------- 4
topic('metin', 'Metin biçimlendirme etiketleri', 'Sunum 4_1 · Sunum 5_1',
    TB(['Etiket', 'Adı', 'İşlevi'], [
        ['`<h1>` … `<h6>`', 'Heading', 'Başlık. **Sayı azaldıkça yazı büyür**: `<h1>` en büyük, `<h6>` en küçük.'],
        ['`<p>`', 'Paragraf', 'Yazıyı kesip **bir satır boşluk** bırakır, satır başından devam eder.'],
        ['`<br>`', 'Break', 'Alt satıra geçer (Enter). **Kapatılmaz.**'],
        ['`<hr>`', 'Horizontal rule', 'Yatay çizgi. **Kapatılmaz.**'],
        ['`<b>`, `<strong>`', 'Bold', 'Kalın yazı'],
        ['`<i>`, `<em>`', 'Italic', 'Eğik (italik) yazı'],
        ['`<u>`', 'Underline', 'Altı çizili yazı'],
        ['`<s>`', 'Strike', 'Üstü çizili yazı'],
        ['`<center>`', '', 'Ortalar'],
        ['`<pre>`', 'Preformatted', 'Arasındaki metni **aynen** (boşluk ve satırlarıyla) yazar'],
        ['`<font>`', 'Font', 'Yazı tipi, boyutu, rengi']]),
    P('**`align` parametresi** (`<h1>`…`<h6>` ve `<p>`): `left` sola, `right` sağa, `center` ortala, `justify` iki yana yasla.'),
    CODE('''
<body bgcolor="red">
<h1 align="center">Metin Etiketleri Denemeleri</h1>
<h3 align="center">Metin Etiketleri Denemeleri</h3>
<h6 align="center">Metin Etiketleri Denemeleri</h6>
</body>''', h=130),
    P('**`<font>` parametreleri**: `size` yazı boyu (**1–7** arası), `color` renk, `face` yazı tipi. `<basefont>` sayfanın ana yazı tipini belirler ama **`<h>` başlıklarını etkilemez**.'),
    CODE('''
<font face="Algerian" size="7" color="blue">Merhaba</font>
<font face="Algerian" size="5" color="red">Merhaba</font>
<font face="Algerian" size="3" color="purple">Merhaba</font>''', h=80),
    P('**`<hr>` parametreleri**: `size` çizginin **kalınlığı**, `width` çizginin **uzunluğu**, `align` konumu (left, right, center).'),
    CODE('''
<b>Ey Türk Gençliği</b><br>
Birinci vazifen, Türk istiklalini, Türk Cumhuriyetini<br>
ilelebet muhafaza ve müdafaa etmektir.
<hr size="6" width="200" align="center">
<h5 align="center"><i>Mustafa Kemal Atatürk</i></h5>''', h=160),
    P('**Özel karakterler**: HTML\'de anlamı olan ya da klavyede olmayan işaretler kodla yazılır.'),
    TB(['Kod', 'Karakter', 'Anlamı'], [
        ['`&nbsp;`', '(boşluk)', 'Bölünmeyen boşluk; HTML\'de art arda boşluklar tek boşluk sayılır'],
        ['`&lt;`', '<', 'Küçüktür'],
        ['`&gt;`', '>', 'Büyüktür'],
        ['`&amp;`', '&', 've işareti'],
        ['`&quot;`', '"', 'Çift tırnak'],
        ['`&copy;`', '©', 'Telif hakkı'],
        ['`&reg;`', '®', 'Tescilli marka'],
        ['`&euro;`', '€', 'Euro']]),
    CODE('''
<p>a &lt; b ve b &gt; c</p>
<p>Ali&nbsp;&nbsp;&nbsp;Veli</p>
<p>&copy; 2026 Yaşar Üniversitesi</p>''', h=110),
    TRAP('`<br>` ve `<hr>` **kapatılmaz**. `<p>` paragraf yapar (araya boşluk koyar), `<br>` sadece alt satıra geçer. `<h1>` **en büyük** başlıktır.'),
    TIP('"Aşağıdaki görünümü elde ediniz" tipi sorularda `<h1 align="center">`, `<font size color face>`, `<hr size width align>` ve `<br>` birlikte kullanılır.'),
)

# ----------------------------------------------------------------------- 5
topic('liste', 'Listeler', 'Sunum 5_1',
    P('HTML\'de **3 tip liste** vardır:'),
    TB(['Liste', 'Etiketler', 'Madde başı'], [
        ['**Sıralı** (ordered list)', '`<ol>` … `</ol>`, maddeler `<li>`', 'Rakam, harf ya da Romen rakamı'],
        ['**Sırasız** (unordered list)', '`<ul>` … `</ul>`, maddeler `<li>`', 'Madde imi: daire, kare, çember'],
        ['**Tanımlama** (definition list)', '`<dl>` … `</dl>`, `<dt>` terim, `<dd>` açıklama', 'İmi yok; açıklama içeriden başlar']]),
    P('`<li>` = **list item** (liste maddesi).'),
    P('**`<ol>` parametreleri**: `type` (numara türü) ve `start` (hangi rakam/harften başlayacağı).'),
    TB(['`type`', 'Görünüm'], [['`1` (varsayılan)', '1. 2. 3.'], ['`a`', 'a. b. c.'], ['`A`', 'A. B. C.'], ['`i`', 'i. ii. iii.'], ['`I`', 'I. II. III.']]),
    CODE('''
<ol type="A">
  <li>Elma</li>
  <li>Armut</li>
  <li>Kavun</li>
</ol>
<ol type="i" start="3">
  <li>Kimya</li>
  <li>Fizik</li>
</ol>''', h=170, check="[...document.querySelectorAll('ol')].map(o=>o.type+o.start).join(',')==='A1,i3'"),
    P('**`<ul>` parametresi** `type`: `disc` (içi dolu daire, varsayılan), `circle` (içi boş daire), `square` (içi dolu kare).'),
    CODE('''
<ul type="disc">
  <li>Kimya
    <ul type="square">
      <li>Organik</li>
      <li>İnorganik</li>
    </ul>
  </li>
  <li>Matematik
    <ul type="circle">
      <li>Türev</li>
    </ul>
  </li>
</ul>''', h=170),
    P('**İç içe liste**: bir `<li>`\'nin içine yeni bir `<ol>` ya da `<ul>` yazılır. Sıralı ve sırasız liste birlikte kullanılabilir.'),
    CODE('''
<ol>
  <li>En sevdiğim yaz meyveleri:
    <ul type="circle">
      <li>Kayısı</li>
      <li>Şeftali</li>
    </ul>
  </li>
  <li>En sevdiğim kış meyveleri:
    <ul type="circle">
      <li>Portakal</li>
      <li>Mandalina</li>
    </ul>
  </li>
</ol>''', h=180),
    P('**Tanımlama listesi**: `<li>` yerine `<dt>` (tanımlanan terim) ve `<dd>` (açıklama) kullanılır; liste `<dl>` arasına yazılır.'),
    CODE('''
<dl>
  <dt><font color="red">En sevdiğim hayvanlar</font></dt>
  <dd>Kediler ve kaplumbağalardır.</dd>
  <dt><font color="red">En sevdiğim çiçekler</font></dt>
  <dd>Papatyalara bayılırım.</dd>
</dl>''', h=140, check="document.querySelectorAll('dt').length===2&&document.querySelectorAll('dd').length===2"),
    TRAP('Sırasız listede `type` değerleri **disc, circle, square**; sıralı listede **1, a, A, i, I**. Slaytta "`<ol>` için disc/circle/square" yazıyor; doğrusu `<ul>`.'),
    TIP('`<dl>` tanımlama listesinde `<li>` **yoktur**: `<dt>` terim, `<dd>` açıklama.'),
)

# ----------------------------------------------------------------------- 6
topic('resim', 'Resim ekleme', 'Sunum 5_1',
    P('Resim `<img>` etiketiyle eklenir; kapatılmaz. Resmin yeri `src` parametresiyle verilir. Slayta göre resim **gif** ya da **jpg** formatında olmalıdır.'),
    CODE('<img src="papatya.gif" width="150" height="65" alt="Papatya resmi">', h=90),
    TB(['Parametre', 'Görevi'], [
        ['`src`', 'Resmin **yolu ve adı** (zorunlu)'],
        ['`width`', 'Resmin **eni** (piksel)'],
        ['`height`', 'Resmin **boyu** (piksel)'],
        ['`align`', 'Hizalama: `left`, `right`, `center`; metinle kullanılınca resim metne göre hizalanır'],
        ['`alt`', '**Alternatif metin**: resim görüntülenmezse yerinde yazar'],
        ['`title`', 'Fare resmin üstüne gelince çıkan **ipucu** yazısı'],
        ['`border`', 'Çerçeve kalınlığı; `0` çerçeveyi kaldırır']]),
    P('**Dosya yolu** (tarayıcı, açık olan HTML dosyasının klasörünü **kök** kabul eder):'),
    TB(['Durum', 'Yazım'], [
        ['Resim HTML ile **aynı klasörde**', '`src="papatya.gif"`'],
        ['Resim **alt klasörde** (resim/)', '`src="resim/papatya.gif"`'],
        ['Resim **bir üst** klasörün içinde', '`src="../resim/papatya.gif"`'],
        ['**İki üst** klasör', '`src="../../resim/papatya.gif"`']]),
    P('Örnek: HTML `c:\\html_ders\\sayfalarim\\deneme.htm`, resim `c:\\html_ders\\resim\\papatya.gif` ise önce bir üste çıkılır, sonra resim klasörüne girilir: `../resim/papatya.gif`.'),
    P('**Arka plana resim**: `<body background="gokyuzu.jpg">`. Resim tüm sayfayı kaplayacak şekilde döşenir; en/boy yazmaya gerek yoktur. `bgcolor` ile birlikte de yazılabilir.'),
    CODE('''
<body bgcolor="red">
<h1>RESİM EKLEME</h1>
<img src="resim/2024_3.jpg" alt="happy new year" title="happy new year" width="500">
</body>''', h=130),
    TRAP('`alt` resim **görünmediğinde** yerine yazılan metindir; fare üstüne gelince çıkan yazı `title`\'dır (slayt alt\'ın eski tarayıcılarda bunu da yaptığını söyler). Üst klasör `../` ile gösterilir.'),
    TIP('`width` = **en** (genişlik), `height` = **boy** (yükseklik). İkisini yazmak zorunlu değil ama faydalıdır.'),
)

# ----------------------------------------------------------------------- 7
topic('link', 'Bağlantılar (link)', 'Sunum 6',
    P('Bağlantı **`<a>` … `</a>`** etiketiyle yapılır, adres `href` parametresine yazılır. Arasındaki yazı ya da resim tıklanabilir olur; aksi belirtilmezse yazı **mavi ve altı çizili** görünür, imleç **el** şekline döner.'),
    CODE('''
<a href="https://www.yasar.edu.tr/">Yaşar Üniversitesi</a><br>
<a href="https://myo.yasar.edu.tr/">Meslek Yüksekokulu</a><br>
<a href="sayfa2.html">İkinci sayfa</a>''', h=90),
    TB(['Parametre', 'Değer', 'Görevi'], [
        ['`href`', 'URL', 'Bağlantının adresi'],
        ['`target`', '`_blank`, `_self`, `_parent`, `_top`, çerçeve adı', 'Bağlantının açılacağı pencere'],
        ['`download`', 'dosya adı', 'Dosyayı açmak yerine **indirir**; değer indirilen dosyanın adı olur'],
        ['`name`', 'ad', 'Sayfa içi bağlantı için **çapa** (işaret) koyar']]),
    TB(['`target`', 'Anlamı'], [
        ['`_blank`', '**Yeni** bir pencerede açar'],
        ['`_self`', '**Aynı** pencerede açar (varsayılan)'],
        ['`_top`', 'Aynı pencerede, **en üstten** itibaren açar (çerçeveleri kaldırır)'],
        ['`_parent`', 'Açılan bağlantı, açık sayfayı oluşturmuş bir **ana sayfa** varsa onun yerine konur'],
        ['çerçeve adı', 'Adı verilen **çerçevede** açar']]),
    P('**Bağlantı türleri**'),
    TB(['Tür', 'Örnek', 'Ne olur?'], [
        ['Web sitesi', '`<a href="http://www.benimsitem.com/">`', 'Siteye gider'],
        ['Resim / sayfa', '`<a href="meyve.gif">`', 'Tarayıcı resmi açar (htm, txt, jpg, gif gösterilebilir)'],
        ['Dosya', '`<a href="midi.zip">`', 'Tarayıcı zip, doc, xls, mp3\'ü gösteremez; **aç ya da kaydet** diye sorar'],
        ['İndirme', '`<a href="papatya.gif" download="cicek">`', 'Açmadan indirir'],
        ['FTP', '`<a href="ftp://ftp.benimsitem.com/">`', 'FTP adresine gider'],
        ['E-posta', '`<a href="mailto:mymail@mail.com">`', 'E-posta programı açılır, **kime** kısmı dolar']]),
    P('**Resme bağlantı**: `<img>` etiketi `<a href>` … `</a>` arasına alınır. `border` resmin bağlantı çerçevesidir; `0` çerçeveyi yok eder.'),
    CODE('''
<a href="sayfa2.html">
  <img src="resim/papatya.gif" width="150" height="65" border="1" alt="papatya">
</a>''', h=100, check="document.querySelector('a>img')!==null"),
    P('**Sayfa içi bağlantı (çapa)**: iki adım. 1) Gidilecek yer işaretlenir: `<a name="web">`. 2) Menüdeki bağlantı `#` ile o işarete gider: `<a href="#web">`.'),
    CODE('''
<a href="#web">1. Web Tasarımının Temelleri</a><br>
<a href="#prog">2. Programlamanın Temelleri</a>

<p><a name="web"><b>1. Web Tasarımının Temelleri</b></a> ...</p>
<p><a name="prog"><b>2. Programlamanın Temelleri</b></a> ...</p>''', h=150),
    TRAP('Çapada `href`\'e **`#` konur** (`href="#web"`), `name`\'e **konmaz** (`name="web"`). Slayt örneğinde `name=#"web"` yazıyor; bu yanlış yazımdır. Başka sayfadaki çapaya: `href="sayfa2.html#web"`.'),
    TIP('Yeni pencerede açmak: `target="_blank"`. E-posta bağlantısı: `mailto:`. Açmadan indirmek: `download`.'),
)

# ----------------------------------------------------------------------- 8
topic('css', '<style> etiketi ve CSS', 'Sunum 6_2',
    P('`<style>` etiketi HTML etiketlerinin nasıl görüneceğini (biçimlendirme) tanımlar. Bir belgede birden çok `<style>` olabilir. `scoped` özelliği yoksa **`<head>` içine** yazılır. **CSS** = Cascading Style Sheets.'),
    P('Yazım: `seçici { özellik: değer; }`. Her özellik **iki nokta** ile değer alır, **noktalı virgülle** biter.'),
    CODE('''
<html>
<head>
<style>
  p {color: blue;}
  h1 {color: red;}
  body {background-color: gray;}
</style>
</head>
<body>
<h1>Bu bir başlıktır.</h1>
<p>Bu bir paragraftır.</p>
</body>
</html>''', h=130, check="getComputedStyle(document.querySelector('p')).color==='rgb(0, 0, 255)'"),
    TB(['Özellik', 'Örnek', 'Ne yapar?'], [
        ['`color`', '`color: red;`', 'Yazı rengi'],
        ['`background-color`', '`background-color: lightblue;`', 'Arka plan rengi'],
        ['`text-align`', '`text-align: center;`', 'Yazı hizalama (left, right, center, justify)'],
        ['`width` / `height`', '`width: 200px;`', 'Genişlik / yükseklik'],
        ['`border`', '`border: 2px solid green;`', 'Kenarlık: kalınlık, tür (solid = düz), renk'],
        ['`text-decoration`', '`underline` / `overline` / `line-through`', 'Alt çizgi / üst çizgi / üstü çizili'],
        ['`letter-spacing`', '`letter-spacing: 3px;`', '**Harf** aralığı'],
        ['`word-spacing`', '`word-spacing: 10px;`', '**Kelime** aralığı'],
        ['`text-shadow`', '`text-shadow: 3px 2px red;`', 'Yazı gölgesi (yatay, dikey, renk)'],
        ['`font-style`', '`normal` / `italic`', 'Yazı stili (italik)'],
        ['`font-size`', '`font-size: 40px;`', 'Yazı boyutu'],
        ['`font-weight`', '`font-weight: bold;`', 'Kalın yazı'],
        ['`font-family`', '`font-family: Times New Roman;`', 'Yazı tipi']]),
    P('**Class (sınıf) ataması**: `p { }` yazınca **bütün** paragraflar etkilenir. Paragraflar farklı görünecekse her birine `class` verilir; CSS\'te sınıf adının önüne **nokta** konur. Sınıf adını biz seçeriz.'),
    CODE('''
<style>
  .par1 { text-align: center; color: red; }
  .par2 { text-align: left; color: blue; }
</style>
<p class="par1">Bu paragraf ortada ve rengi kırmızı</p>
<p class="par2">Bu paragraf solda ve rengi mavi</p>''', h=100, check="getComputedStyle(document.querySelector('.par1')).textAlign==='center'"),
    CODE('''
<style>
  .par1 { background-color: black; color: white; font-style: italic; }
  .par2 { background-color: green; font-size: 50px; text-decoration: underline; }
  .par3 { color: blue; letter-spacing: 10px; text-align: right; }
</style>
<p class="par1">Arka plan siyah, yazı beyaz ve italik</p>
<p class="par2">Arka plan yeşil, 50px, altı çizili</p>
<p class="par3">Mavi, harf aralığı 10px, sağa yaslı</p>''', h=200),
    TRAP('CSS\'te sınıf **nokta** ile yazılır (`.par1`), HTML\'de noktasız (`class="par1"`). `letter-spacing` **harf**, `word-spacing` **kelime** aralığıdır. `line-through` üstü çizili, `overline` üst çizgi.'),
    TIP('Bilmen gereken üç parça: **seçici**, **özellik**, **değer**. `p {color: blue;}` → seçici `p`, özellik `color`, değer `blue`.'),
)

# ----------------------------------------------------------------------- 9
topic('tablo', 'Tablolar', 'Sunum 7 · Sunum 8',
    P('Tablo `<table>` ile başlar. `<tr>` (table row) **satır**, `<td>` (table data) **hücre** (sütun) açar. Hücreye metin, resim, liste, paragraf, form, yatay çizgi, hatta başka tablo konabilir.'),
    CODE('''
<table border="1">
  <tr>
    <td>satır 1, hücre 1</td>
    <td>satır 1, hücre 2</td>
  </tr>
  <tr>
    <td>satır 2, hücre 1</td>
    <td>satır 2, hücre 2</td>
  </tr>
</table>''', h=90, check="document.querySelectorAll('tr').length===2&&document.querySelectorAll('td').length===4"),
    TB(['Etiket', 'Görevi'], [
        ['`<th>`', '**Sütun başlığı** hücresi (kalın ve ortalı görünür); `<td>` gibi `<tr>` içine yazılır'],
        ['`<thead>`', 'Tablonun **başlık** bölümü'],
        ['`<tbody>`', 'Tablonun **gövde** bölümü; `<tr>` ve `<td>`\'ler burada'],
        ['`<caption>`', 'Tabloya **açıklama** (alt yazı); `align="bottom"` ile tablonun altına alınır'],
        ['`<colgroup>` + `<col>`', 'Sütunları gruplayıp arka plan rengi verir; `<col span="2">` iki sütunu birden etkiler']]),
    CODE('''
<table border="1">
  <caption align="bottom">alt-yazı (caption)</caption>
  <thead><tr><th>1.Sütun</th><th>2.Sütun</th><th>3.Sütun</th></tr></thead>
  <tbody>
    <tr><td>hücre1</td><td>hücre2</td><td>hücre3</td></tr>
    <tr><td>hücre4</td><td>hücre5</td><td>hücre6</td></tr>
  </tbody>
</table>''', h=130),
    P('**`<table>` parametreleri**'),
    TB(['Parametre', 'Görevi'], [
        ['`border`', 'Kenarlık kalınlığı. `border="0"` çerçeveyi gizler'],
        ['`bordercolor`', 'Kenarlık rengi'],
        ['`cellpadding`', 'Hücre **içi** boşluk (yazı ile kenar arası). `0` → yazı kenara bitişik'],
        ['`cellspacing`', 'Hücre **dışı** boşluk (hücreler arası)'],
        ['`align`', 'Tabloyu sayfada hizalar: left, right, center'],
        ['`width` / `height`', 'Tablonun eni / boyu. Tablo **büyütülebilir ama küçültülemez** (içeriğinden küçük değer dikkate alınmaz)'],
        ['`bgcolor`', 'Arka plan rengi'],
        ['`rules`', 'İç kenarlıkların görünürlüğü']]),
    TB(['`rules`', 'Sonuç'], [
        ['`none`', 'Tüm iç kenarlıklar yok'],
        ['`rows`', 'Sadece satırlar arası (yatay) çizgiler kalır; **dikey** iç kenarlıklar yok'],
        ['`cols`', 'Sadece sütunlar arası (dikey) çizgiler kalır; **yatay** iç kenarlıklar yok']]),
    CODE('''
<table border="1" bordercolor="green" bgcolor="#FFE7C1">
  <tr><td>Artvin</td><td>Rize</td><td>Trabzon</td></tr>
  <tr><td>Adana</td><td>Mersin</td><td>Hatay</td></tr>
</table>''', h=80),
    P('**`<td>` parametreleri**'),
    TB(['Parametre', 'Görevi'], [
        ['`bgcolor`', 'Hücrenin arka plan rengi: `<td bgcolor="#FF0000">`'],
        ['`background`', 'Hücreye arka plan **resmi**'],
        ['`align`', 'Hücre içi **yatay** hizalama: left, center, right'],
        ['`valign`', 'Hücre içi **dikey** hizalama: top, middle, bottom'],
        ['`width` / `height`', 'Hücrenin eni / boyu (`<td width="30%">`)'],
        ['`colspan`', '**Sütun birleştirme**: yan yana hücreleri birleştirir'],
        ['`rowspan`', '**Satır birleştirme**: alt alta hücreleri birleştirir']]),
    CODE('''
<table border="1" cellpadding="7">
  <tr><td width="100" align="left">hücre1</td></tr>
  <tr><td width="100" align="center">hücre2</td></tr>
  <tr><td width="100" align="right">hücre3</td></tr>
</table>''', h=130),
    P('**Hücre birleştirme**: birleşen hücre `colspan` / `rowspan` alır, **yutulan hücrelerin `<td>`\'si silinir**.'),
    CODE('''
<table border="1" cellpadding="12">
  <tr><td colspan="2">A</td><td>C</td><td>D</td></tr>
  <tr><td colspan="3">E</td><td>H</td></tr>
  <tr><td>I</td><td>J</td><td>K</td><td>L</td></tr>
</table>''', h=170, check="[...document.querySelectorAll('tr')].map(r=>r.cells.length).join()==='3,2,4'"),
    P('Yukarıda: A ile B birleşti (`colspan="2"`, B silindi); E, F, G birleşti (`colspan="3"`, F ve G silindi).'),
    CODE('''
<table border="1" cellpadding="12">
  <tr><td>A</td><td>B</td><td rowspan="3">C</td><td>D</td></tr>
  <tr><td rowspan="2">E</td><td>F</td><td>H</td></tr>
  <tr><td>J</td><td>L</td></tr>
</table>''', h=170, check="[...document.querySelectorAll('tr')].map(r=>r.cells.length).join()==='4,3,2'"),
    P('Yukarıda: C, G ve K alt alta birleşti (`rowspan="3"`); E ile I birleşti (`rowspan="2"`). 3. satırda yalnız J ve L kaldı.'),
    TRAP('Slayt "aynı sütundaki hücreler için colspan, aynı satırdakiler için rowspan" diyor; bu cümle **ters**. Doğrusu: **colspan yan yana** (aynı satırda, sütunları birleştirir), **rowspan alt alta** (aynı sütunda, satırları birleştirir). Slaytın kendi örnekleri de böyle.'),
    TRAP('`cellpadding` **içeri** (hücre içi), `cellspacing` **dışarı** (hücreler arası) boşluktur. `align` yatay, `valign` dikey hizalar.'),
    TIP('Sık klasik soru: "Aşağıdaki tablonun kodunu yazınız." Önce satır sayısını say (`<tr>`), sonra her satırdaki hücreleri; birleşen hücreye colspan/rowspan yaz, yutulanları yazma.'),
)

TRAPS = [
    {'t': 'Türkiye internete **12 Nisan 1993**\'te **ODTÜ ve TÜBİTAK** ile bağlandı. ARPA **1969**.', 'topic': 'internet'},
    {'t': 'URL\'nin **3 bölümü**: protokol (`http://`), alan adı (`www.ornek.edu.tr`), dizin yolu (`/ders/1.html`).', 'topic': 'internet'},
    {'t': '`edu` eğitim, `com` ticari, `gov` devlet, `mil` askeri, `net` ağ destek, `gen` genel amaçlı.', 'topic': 'internet'},
    {'t': 'HTML **işaretleme** dilidir, programlama dili değil. Dosya `.htm` ya da `.html`.', 'topic': 'tasarim'},
    {'t': 'Front-end: HTML, CSS, JavaScript. Back-end: PHP, Python, Node.js, Java, veri tabanı.', 'topic': 'tasarim'},
    {'t': 'HTML büyük/küçük harfe **duyarlı değildir**. Parametre **başlangıç** etiketine, değeri **tırnak** içine yazılır.', 'topic': 'temel'},
    {'t': 'İç içe etiketlerde **ilk açılan en son kapatılır**: `<b><u>…</u></b>`.', 'topic': 'temel'},
    {'t': '`<title>` sekmedeki başlıktır ve `<head>` içindedir; sayfada görünenler `<body>` içindedir.', 'topic': 'temel'},
    {'t': '`vlink` ziyaret edilmiş, `alink` tıklama anındaki bağlantı rengi.', 'topic': 'temel'},
    {'t': '`<h1>` en büyük, `<h6>` en küçük başlık. `<br>` ve `<hr>` kapatılmaz.', 'topic': 'metin'},
    {'t': '`<font size>` 1–7 arası. `<basefont>` başlıkları (`<h>`) etkilemez. `<hr size>` kalınlık, `width` uzunluk.', 'topic': 'metin'},
    {'t': '`<ul>` type: disc, circle, square. `<ol>` type: 1, a, A, i, I; başlangıç `start`.', 'topic': 'liste'},
    {'t': 'Tanımlama listesi: `<dl>`, `<dt>` terim, `<dd>` açıklama; `<li>` kullanılmaz.', 'topic': 'liste'},
    {'t': 'Bir üst klasör `../`, iki üst `../../`. `alt` resim görünmeyince, `title` fare üstündeyken yazar.', 'topic': 'resim'},
    {'t': 'Yeni pencere `target="_blank"`. Çapa: `<a name="x">` ile işaretle, `<a href="#x">` ile git.', 'topic': 'link'},
    {'t': 'CSS sınıfı nokta ile: `.par1 { }`; HTML\'de `class="par1"`. `<style>` `<head>` içine yazılır.', 'topic': 'css'},
    {'t': '`<tr>` satır, `<td>` hücre, `<th>` başlık hücresi. `cellpadding` iç, `cellspacing` dış boşluk.', 'topic': 'tablo'},
    {'t': '`colspan` yan yana (sütun), `rowspan` alt alta (satır) birleştirir; yutulan hücreler yazılmaz.', 'topic': 'tablo'},
]

TOPIC_RULES = {
    'internet': 'İnternet ağların ağıdır; WWW etkileşimli web sayfaları ağıdır. Sunucu cevap verir, istemci ister. URL = protokol + alan adı + dizin yolu. Alan adı, IP adresinin akılda kalan hâlidir.',
    'tasarim': 'HTML = Hiper Metin İşaretleme Dili, uzantı .htm/.html. 5 ilke: içerik, tasarım, işlevsellik, kullanılabilirlik, tarayıcı uyumu. Front-end görünen kısım (HTML/CSS/JS), back-end görünmeyen kısım (sunucu, veri tabanı).',
    'temel': 'Belge <html> ile başlar; <head> (title, meta, style) ve <body> (görünen her şey) bölümleri vardır. Etiketler büyük/küçük harfe duyarsız; parametre başlangıç etiketinde, değer tırnakta; ilk açılan en son kapanır.',
    'metin': '<h1> en büyük, <h6> en küçük başlık. <p> paragraf, <br> alt satır (kapatılmaz), <hr> yatay çizgi (kapatılmaz; size kalınlık, width uzunluk). <font size="1-7" color face>.',
    'liste': '<ol> sıralı (type 1/a/A/i/I, start), <ul> sırasız (type disc/circle/square), maddeler <li>. <dl> tanımlama listesi: <dt> terim, <dd> açıklama.',
    'resim': '<img src="yol" width="en" height="boy" alt="metin">. Aynı klasör: ad; alt klasör: klasor/ad; üst klasör: ../ad. alt resim yoksa yazar, title fare üstündeyken.',
    'link': '<a href="adres">yazı</a>. target="_blank" yeni pencere. mailto: e-posta, download indirme. Sayfa içi: <a name="x"> işaret, <a href="#x"> bağlantı.',
    'css': '<style> head içinde: seçici { özellik: değer; }. Sınıf: .ad { } ve class="ad". color yazı rengi, background-color arka plan, text-align hizalama, letter-spacing harf aralığı.',
    'tablo': '<table> → <tr> satır → <td> hücre (<th> başlık). border kenarlık, cellpadding iç, cellspacing dış boşluk. colspan yan yana, rowspan alt alta birleştirir; yutulan <td> silinir.',
}
