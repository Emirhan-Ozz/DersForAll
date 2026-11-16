"""MBP1145 Web Tasarımı I soru bankası. İlk şık (a=0) doğru cevaptır; build sırasında şıklar karıştırılır.
js=…  → build.py kodu (code) Chromium'da açar ve ifadeyi çalıştırır:
   string dönerse doğru şıkla birebir aynı olmalı ve başka hiçbir şıkla aynı olmamalı; true dönerse geçer.
Soruların her biri tek başına çözülebilir (başka soruya atıf yok)."""
import textwrap

Q = []
CUR = {'t': None}
def topic(t): CUR['t'] = t
def dd(s): return textwrap.dedent(s).strip('\n')

def mc(q, opts, exp, code=None, js=None, prev=False, h=None, why=None, vcode=None):
    assert len(opts) == 5, q
    d = {'type': 'mc', 'topic': CUR['t'], 'q': q, 'opts': list(opts), 'a': 0, 'exp': exp}
    if code: d['code'] = dd(code)
    if prev: d['prev'] = True
    if h: d['h'] = h
    if why: d['why'] = why
    d['chk'] = {'js': js, 'vcode': dd(vcode) if vcode else None}
    Q.append(d)
    return d

def fill(q, code, ans, exp, js=None, whyFill=None):
    d = {'type': 'fill', 'topic': CUR['t'], 'q': q, 'code': dd(code), 'ans': list(ans), 'cs': False, 'exp': exp}
    if whyFill: d['whyFill'] = whyFill
    d['chk'] = {'js': js}
    Q.append(d)
    return d

def match(q, pairs, exp):
    d = {'type': 'match', 'topic': CUR['t'], 'q': q, 'pairs': [list(p) for p in pairs], 'exp': exp, 'chk': {}}
    Q.append(d)
    return d

def klasik(q, model, code=None, h=None, js=None, qcode=None):
    """Klasik (açık uçlu) soru: model cevap + model kod; kendini puanlama."""
    d = {'type': 'open', 'topic': CUR['t'], 'q': q, 'model': model}
    if qcode: d['code'] = dd(qcode)
    if code: d['modelCode'] = dd(code)
    if h: d['h'] = h
    d['chk'] = {'js': js}
    Q.append(d)
    return d

# ===================================================================== 1. İnternet
topic('internet')
mc('"Internet" kelimesi hangi ifadenin kısaltmasıdır?', ['International Network', 'Interior Network', 'Integrated Net', 'Internal Network', 'Interactive Network'],
   'Internet = International Network (uluslararası ağ).')
mc('Türkiye internete ilk olarak hangi tarihte bağlanmıştır?', ['12 Nisan 1993', '29 Ekim 1983', '1 Ocak 1990', '12 Nisan 1969', '23 Nisan 1996'],
   'ODTÜ ve TÜBİTAK\'ın ortak çalışmasıyla 12 Nisan 1993.')
mc('Türkiye\'nin internete bağlanmasını sağlayan ortak çalışmayı hangi kurumlar yapmıştır?', ['ODTÜ ve TÜBİTAK', 'İTÜ ve TÜBİTAK', 'Ankara Üniversitesi ve YÖK', 'Boğaziçi Üniversitesi ve Türk Telekom', 'ODTÜ ve PTT'],
   'Orta Doğu Teknik Üniversitesi + TÜBİTAK, 12 Nisan 1993.')
mc('İnternetin temeli sayılan ağ ARPA hangi yıl kurulmuştur?', ['1969', '1962', '1965', '1983', '1993'],
   '1962 MIT notları, 1965 Lawrence Roberts\'ın bağlantısı, 1969 ARPA, 1983 dünya çapında yaygınlaşma.')
mc('İnternetin ortaya çıkışını destekleyen kurum hangisidir?', ['ABD Savunma Bakanlığı', 'Avrupa Birliği', 'Birleşmiş Milletler', 'IBM', 'Microsoft'],
   'İnternet, ABD Savunma Bakanlığı\'nın yürüttüğü araştırmayla (ARPA) ortaya çıktı.')
mc('Yazı, resim, ses, film gibi verilere etkileşimli olarak ulaşmayı sağlayan web sayfaları ağına ne denir?', ['WWW (World Wide Web)', 'FTP', 'SMTP', 'DNS', 'İSS'],
   'WWW, Web ya da W3: web sayfaları ağı.')
mc('E-posta sistemleri hangi protokole dayanır?', ['SMTP', 'FTP', 'HTML', 'URL', 'WWW'],
   'SMTP: Simple Mail Transfer Protocol.')
mc('Bir web sitesine kendi fotoğrafını yüklemek hangi işleme örnektir?', ['Upload', 'Download', 'Hosting', 'Domain', 'Browser'],
   'Upload: kendi bilgisayarındaki veriyi başka bilgisayara yüklemek. Download indirmektir.')
mc('Tarayıcıya bir sitenin adresini yazınca sayfadaki metin ve resimlerin bilgisayara gelmesi hangi işlemdir?', ['Download', 'Upload', 'Hosting', 'Barındırma', 'Domain'],
   'Sayfayı açmak, onu indirmek (download) demektir.')
mc('İnternet ortamında bilgi istendiğinde **cevap veren** bilgisayara ne denir?', ['Sunucu (server)', 'İstemci (client)', 'Tarayıcı', 'Modem', 'Alan adı'],
   'Sunucu cevap verir, istemci bilgiyi ister.')
mc('Bir web sitesinin sayfa, resim ve dokümanlarının internet kullanıcılarının erişebileceği bir bilgisayarda tutulmasına ne denir?', ['Hosting (barındırma)', 'Domain', 'Download', 'Upload', 'Protokol'],
   'Hosting = barındırma; dosyaları tutan bilgisayar web sunucusudur.')
mc('Ev bilgisayarının web sitesi barındırmak için genelde uygun olmamasının sunumda belirtilen nedeni nedir?', ['İnternet bağlantısının upload hızının yetersiz olması', 'HTML\'i açamaması', 'Alan adı alamaması', 'Tarayıcısının olmaması', 'E-posta gönderememesi'],
   'Ev bağlantısının veri yükleme (upload) hızı yüzlerce kullanıcıya hizmet için yetersiz kalır.')
mc('Alan adı (domain name) için hangisi doğrudur?', ['IP adresinin akılda kalması için kelimelerle ifade edilmiş hâlidir', 'Sitenin dosyalarının saklandığı bilgisayardır', 'E-posta gönderme protokolüdür', 'Tarayıcının adıdır', 'Bir kez alınan alan adı herkes tarafından tekrar alınabilir'],
   'Alan adı IP adresinin kelimeli hâlidir; alınmış alan adı tekrar alınamaz.')
mc('Adres çubuğuna `www.google.com` yazıldığında tarayıcı önce ne yapar?', ['Alan adını IP adresine çevirir', 'Sayfayı sunucuya yükler', 'E-posta gönderir', 'Dosyayı FTP ile siler', 'Alan adını satın alır'],
   'Tarayıcı alan adını (DNS ile) IP adresine çevirir, sonra o IP\'deki bilgisayara gider.')
mc('URL\'nin açılımı hangisidir?', ['Uniform Resource Locator', 'Universal Real Link', 'Unique Remote Location', 'User Resource Language', 'Uniform Reference Link'],
   'URL = Uniform Resource Locator (standart kaynak bulucu).')
mc('Bir URL hangi 3 bölümden oluşur?', ['Protokol, alan adı, dizin yolu', 'Protokol, IP, e-posta', 'Kullanıcı adı, şifre, alan adı', 'Uzantı, ülke adı, dosya boyutu', 'Sunucu, istemci, tarayıcı'],
   '`http://` + `www.emyo.ankara.edu.tr` + `/ders1/bolum10.html`.')
mc('`http://www.emyo.ankara.edu.tr/ders1/bolum10.html` adresinde `/ders1/bolum10.html` kısmı neyi gösterir?', ['Dizin yolunu', 'Protokolü', 'Alan adını', 'Ülke adını', 'IP adresini'],
   'Protokol `http://`, alan adı `www.emyo.ankara.edu.tr`, dizin yolu `/ders1/bolum10.html`.')
mc('Alan adı uzantılarından `gov` hangi kurumlar için kullanılır?', ['Devlet kurumları', 'Eğitim kurumları', 'Ticari kuruluşlar', 'Askeri kurumlar', 'Ağ destek kurumları'],
   'gov devlet (tbmm.gov.tr), edu eğitim, com ticari, mil askeri, net ağ destek.')
mc('`www.tsk.mil.tr` adresindeki `mil` uzantısı neyi gösterir?', ['Askeri kurum', 'Devlet kurumu', 'Ticari kuruluş', 'Eğitim kurumu', 'Genel amaçlı site'],
   'mil = askeri kurumlar.')
mc('`ankara.edu.tr` adresindeki `tr` neyi belirtir?', ['Ülke adını', 'Alan adı uzantısını', 'Protokolü', 'Dizin yolunu', 'Sunucu türünü'],
   'edu uzantı (eğitim), tr ülke adı (Türkiye).')
mc('E-posta adresi alırken hangisi kullanılabilir?', ['Alt çizgi ( _ )', 'ş harfi', 'Boşluk', 'ü harfi', '! işareti'],
   'Nokta, tire ve alt çizgi dışında sembol ve Türkçe karakter kullanılmaz.')
mc('Aşağıdakilerden hangisi sunucu çeşitlerinden biri **değildir**?', ['İstemci sunucusu', 'Web sunucusu', 'Veri tabanı sunucusu', 'DNS sunucusu', 'Medya sunucusu'],
   'Sunucu çeşitleri: web, dosya paylaşım, medya, veri tabanı, DNS. İstemci, sunucunun karşı tarafıdır.')
match('Kavramları anlamlarıyla eşleştir.', [
    ['Download', 'İnternetten veri indirmek'],
    ['Upload', 'Bilgisayardaki veriyi başka bilgisayara yüklemek'],
    ['Hosting', 'Site dosyalarını sunucuda barındırmak'],
    ['Domain name', 'Sitenin internetteki adı'],
    ['İstemci', 'Bilgiyi isteyen bilgisayar']],
   'Download indir, upload yükle; hosting barındırma, domain alan adı; istemci isteyen, sunucu cevap veren.')
match('Alan adı uzantılarını eşleştir.', [
    ['edu', 'Eğitim kurumları'], ['com', 'Ticari kuruluşlar'], ['gov', 'Devlet kurumları'], ['mil', 'Askeri kurumlar'], ['net', 'Ağ destek kurumları']],
   'Sunum 1\'deki tablo: edu, com, gov, mil, net, gen.')
klasik('URL nedir? Hangi bölümlerden oluşur? Bir örnek adres üzerinde gösteriniz.',
       '- URL (Uniform Resource Locator, standart kaynak bulucu): internetteki her belgenin kendine ait, tek adresidir.\n'
       '- 3 bölümü vardır: **protokol** (`http://`, `ftp://`), **alan adı** (`www.emyo.ankara.edu.tr`), **dizin yolu** (`/ders1/bolum10.html`).\n'
       '- Alan adında ayrıca **uzantı** (`edu`) ve **ülke adı** (`tr`) bulunur.')
klasik('Sunucu (server) ve istemci (client) kavramlarını açıklayınız; sunucu çeşitlerinden üç tane yazınız.',
       '- **Sunucu**: bilgi istendiğinde cevap veren bilgisayar; e-posta, veri tabanı gibi bilgileri barındırır, güvenlik önlemi alınmış olmalıdır.\n'
       '- **İstemci**: sunucuya ulaşıp bilgiyi isteyen ve alan bilgisayar. Bir siteye giren kullanıcı istemcidir.\n'
       '- Çeşitler: web sunucusu, dosya paylaşım sunucusu, medya sunucusu, veri tabanı sunucusu, DNS (alan adı) sunucusu.')

# ===================================================================== 2. Tasarım ilkeleri
topic('tasarim')
mc('HTML\'nin açılımı hangisidir?', ['Hyper Text Markup Language', 'High Text Machine Language', 'Hyper Transfer Markup Language', 'Home Tool Markup Language', 'Hyperlink Text Making Language'],
   'Hyper Text Markup Language = Hiper Metin İşaretleme Dili.')
mc('HTML\'nin Türkçe karşılığı hangisidir?', ['Hiper Metin İşaretleme Dili', 'Hiper Metin Programlama Dili', 'Yüksek Seviyeli Programlama Dili', 'Hiper Metin Aktarım Protokolü', 'Web Biçimlendirme Sistemi'],
   'Markup = işaretleme. HTML programlama dili değildir.')
mc('Bir HTML dosyasının tarayıcıda yorumlanabilmesi için uzantısı ne olmalıdır?', ['.htm veya .html', '.css', '.txt', '.doc', '.php'],
   'HTML dosyaları .htm ya da .html ile kaydedilir.')
mc('"Hypertext" ifadesinin anlamı hangisidir?', ['Bir şeylere bağ kuran kelimelere sahip sayfalar', 'Çok büyük yazılmış metin', 'Şifrelenmiş metin', 'Sadece resim içeren sayfa', 'Sunucuda çalışan program'],
   'Hiper metin: bağlantılı metin.')
mc('HTML için hangisi doğrudur?', ['Tarayıcıların yorumladığı metin tabanlı bir işaretleme dilidir', 'Derlenerek çalışan bir programlama dilidir', 'Sadece sunucuda çalışır', 'Veri tabanı dilidir', 'Görsel bir resim formatıdır'],
   'HTML metin tabanlıdır, tarayıcı yorumlar; programlama dili değildir.')
mc('Web sitesi planlamasında **ilk** adım hangisidir?', ['Web sitesinin amacının belirlenmesi', 'Ana sayfanın oluşturulması', 'Bilgilerin yazılması', 'Sayfa düzeninin belirlenmesi', 'İçeriğin düzenlenmesi'],
   'Sıra: amaç → içerik kararı → içeriğin düzenlenmesi → sayfa düzeni → ana sayfa → bilgilerin yazılması.')
mc('Sunuma göre web sitesi tasarlarken kullanılan **en önemli** şey hangisidir?', ['İçerik', 'Animasyon', 'Renk', 'Logo', 'Yazı tipi'],
   'İçeriği iyi olan siteye her zaman ziyaretçi gelir; tasarımı güzel ama içeriği boş siteye gelmez.')
mc('Web tasarımının temel ilkelerinden biri **değildir**?', ['Sitenin mutlaka animasyonlu olması', 'İçeriğin belirlenmesi', 'İşlevsellik', 'Kullanılabilirlik', 'Tarayıcılarla uyumluluk'],
   '5 ilke: içerik, tasarım, işlevsellik, kullanılabilirlik, tarayıcı uyumu.')
mc('"Bir alışveriş sitesinde her sayfadan Alışveriş Sepeti\'ne bağlantı verilmeli" ifadesi hangi ilkeyle ilgilidir?', ['İşlevsellik', 'Tarayıcı uyumluluğu', 'İçeriğin belirlenmesi', 'Hosting', 'Domain seçimi'],
   'İşlevsellik: her sayfadan ana sayfaya ve ana bölümlere bağlantı.')
mc('Logo, yazı ve menülerin sayfada nerede duracağının kâğıda çizildiği aşama hangisidir?', ['Tasarımın belirlenmesi', 'İçeriğin belirlenmesi', 'İşlevsellik', 'Tarayıcı uyumluluğu', 'Hosting'],
   'Tasarım aşaması: içeriğin nerede ve nasıl görüneceği planlanır.')
mc('Aşağıdakilerden hangisi kullanılabilirliği **artırmaz**?', ['Sayfanın yavaş yüklenmesi', 'Logodan ana sayfaya bağlantı verilmesi', 'Menünün kolay görülen bir yerde olması', 'İçerik çoksa arama kutusu konması', 'İletişim formu bulunması'],
   'Sayfalar hızlı yüklenmelidir.')
mc('Tarayıcıların desteklemesi gereken minimum web standartlarını belirleyen kuruluş hangisidir?', ['W3C (World Wide Web Consortium)', 'ARPA', 'TÜBİTAK', 'İSS', 'ODTÜ'],
   'W3C, www.w3c.org.')
mc('Web sayfasının yapısını ve içeriğini oluşturan front-end teknolojisi hangisidir?', ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP'],
   'HTML yapı, CSS stil, JavaScript etkileşim.')
mc('Renk, yazı tipi, düzen ve animasyon gibi görsel özellikleri belirleyen teknoloji hangisidir?', ['CSS', 'HTML', 'SQL', 'Python', 'API'],
   'CSS = Cascading Style Sheets, stil ve düzen.')
mc('Butona tıklanınca menü açılması gibi etkileşimleri sağlayan front-end teknolojisi hangisidir?', ['JavaScript', 'HTML', 'CSS', 'MySQL', 'FTP'],
   'JavaScript sayfaya etkileşim ve dinamiklik katar.')
mc('Aşağıdakilerden hangisi bir **back-end** (sunucu tarafı) dilidir?', ['PHP', 'HTML', 'CSS', 'XML', 'SVG'],
   'Back-end: Node.js, Python, Ruby, PHP, Java, Go.')
mc('MongoDB hangi tür veri tabanına örnektir?', ['NoSQL', 'SQL (ilişkisel)', 'Hiyerarşik', 'Tablo tabanlı Excel', 'HTML'],
   'NoSQL: MongoDB, Cassandra. SQL: MySQL, PostgreSQL, MSSQL.')
mc('Front-end ile back-end arasındaki iletişimi sağlayan yapıya ne denir?', ['API', 'CSS', 'URL', 'WYSIWYG', 'Hosting'],
   'API (Application Programming Interface); RESTful ya da GraphQL.')
mc('Sayfanın mobil cihazlara uyumlu olmasına ne ad verilir?', ['Responsive design', 'Hosting', 'Back-end', 'Download', 'Domain'],
   'Responsive (duyarlı) tasarım bir front-end görevidir.')
mc('Hangisi bir **back-end** geliştirici görevidir?', ['Kullanıcı verilerini veri tabanında yönetmek', 'Sayfanın renklerini seçmek', 'Menünün açılma animasyonunu yazmak', 'Butonların yerini belirlemek', 'Yazı tipini değiştirmek'],
   'Back-end: veri yönetimi, güvenlik, API, performans, arka plan işleri.')
match('Teknolojileri görevleriyle eşleştir.', [
    ['HTML', 'Sayfanın yapısı ve içeriği'], ['CSS', 'Renk, yazı tipi, düzen'], ['JavaScript', 'Etkileşim ve dinamiklik'],
    ['MySQL', 'İlişkisel veri tabanı'], ['API', 'Front-end ile back-end iletişimi']],
   'HTML yapı, CSS stil, JS etkileşim; MySQL veri tabanı; API iletişim.')
klasik('Web tasarımında dikkat edilmesi gereken temel ilkeleri yazıp kısaca açıklayınız.',
       '- **İçeriğin belirlenmesi**: en önemli unsur; sade, kullanıcının beklediği içerik.\n'
       '- **Tasarımın belirlenmesi**: logo, yazı, menü yerlerinin çizilmesi.\n'
       '- **İşlevsellik**: her sayfadan ana sayfaya ve önemli sayfalara bağlantı.\n'
       '- **Kullanılabilirlik**: okunur yazı, hızlı yükleme, görünür menü, iletişim, arama kutusu.\n'
       '- **Tarayıcılarla uyumluluk**: farklı tarayıcı ve çözünürlüklerde düzgün görünmesi (W3C standartları).')
klasik('Front-end ve back-end kavramlarını karşılaştırınız; her biri için iki teknoloji örneği veriniz.',
       '- **Front-end** (ön yüz): kullanıcının gördüğü ve etkileşimde bulunduğu kısım. Örnek: HTML, CSS, JavaScript.\n'
       '- **Back-end** (arka yüz): görünmeyen kısım; sunucu, veri tabanı, iş mantığı, güvenlik. Örnek: PHP, Python, Node.js, Java; MySQL, MongoDB.\n'
       '- İkisi arasındaki iletişimi **API** sağlar.')

# ===================================================================== 3. Temel yapı
topic('temel')
mc('Her HTML belgesi hangi etiketle başlar ve biter?', ['`<html>` … `</html>`', '`<head>` … `</head>`', '`<body>` … `</body>`', '`<title>` … `</title>`', '`<page>` … `</page>`'],
   'Tüm kodlar `<html>` ile `</html>` arasındadır.')
mc('Bir HTML belgesinin iki ana kısmı hangileridir?', ['`<head>` ve `<body>`', '`<title>` ve `<meta>`', '`<p>` ve `<br>`', '`<html>` ve `<title>`', '`<style>` ve `<script>`'],
   'Başlık bölümü head, gövde body.')
mc('Sayfanın **tarayıcı sekmesindeki** başlığını belirleyen etiket hangisidir?', ['`<title>`', '`<h1>`', '`<head>`', '`<caption>`', '`<meta>`'],
   '`<title>` `<head>` içine yazılır; `<h1>` sayfanın içindeki başlıktır.')
mc('Aşağıdaki kod tarayıcıda açıldığında sekmede hangi yazı görünür?', ['Anasayfa', 'Merhaba', 'Hoş geldiniz', 'index.html', 'Sekmede yazı görünmez'],
   'Sekme başlığı `<title>`\'dan gelir: Anasayfa. `<h1>` sayfanın içinde görünür.',
   code='''
   <html>
   <head><title>Anasayfa</title></head>
   <body><h1>Merhaba</h1> Hoş geldiniz</body>
   </html>''', js="document.title")
mc('Sayfada görüntülenmek istenen tüm bilgiler (metin, tablo, resim) hangi etiketin içine yazılır?', ['`<body>`', '`<head>`', '`<title>`', '`<meta>`', '`<style>`'],
   'Görünen her şey `<body>` içindedir.')
mc('Aşağıdakilerden hangisi `<head>` etiketinin içinde yer **almaz**?', ['`<h1>`', '`<title>`', '`<meta>`', '`<style>`', '`<script>`'],
   '`<head>` içinde: title, style, link, meta, script, noscript. `<h1>` gövdede görünen başlıktır.')
mc('HTML etiketleri için hangisi doğrudur?', ['Büyük/küçük harfe duyarlı değildir; `<BODY>` ile `<body>` aynıdır', 'Sadece büyük harfle yazılmalıdır', 'Sadece küçük harfle yazılmalıdır', 'Her etiket mutlaka `;` ile biter', 'Etiketler `( )` arasına yazılır'],
   'HTML komutları büyük de küçük de yazılabilir; `< >` arasına yazılır.')
mc('Aşağıdaki iç içe etiket yazımlarından hangisi doğrudur?', ['`<b><u>metin</u></b>`', '`<b><u>metin</b></u>`', '`<u><b>metin</u></b>`', '`<b><u>metin</b>`', '`</b><u>metin<u></b>`'],
   'İlk açılan en son kapatılır.')
mc('Etiket parametreleri (ör. `align`) nereye yazılır?', ['Başlangıç etiketinin içine, değeri tırnak içinde', 'Bitiş etiketinin içine', 'Etiketlerin arasına, metinle birlikte', '`<head>` bölümüne', 'Ayrı bir `.par` dosyasına'],
   'Örnek: `<p align="center">Merhaba Dünya</p>`.')
mc('Aşağıdakilerden hangisinin **kapatma etiketi yoktur**?', ['`<br>`', '`<b>`', '`<p>`', '`<title>`', '`<body>`'],
   '`<br>`, `<hr>`, `<img>` tek etikettir.')
mc('WYSIWYG kısaltmasının anlamı hangisidir?', ['Ne görürsen onu alırsın', 'Web sitesi yayın sistemi', 'Kod yazmayı zorunlu kılan editör', 'Yeni sürüm tarayıcı', 'Web sunucusu'],
   'What You See Is What You Get: görsel, kod gerektirmeyen editörler.')
mc('Aşağıdakilerden hangisi **WYSIWYG** (görsel) editörlere örnektir?', ['Dreamweaver', 'Notepad', 'HotDog', 'HomeSite', 'Notepad++'],
   'WYSIWYG: FrontPage, Dreamweaver, NetObjects Fusion. Metin tabanlı: HomeSite, HotDog, Notepad++.')
mc('Türkçe karakterlerin düzgün görünmesi için `<head>` içine hangi etiket eklenir?', ['`<meta charset="UTF-8">`', '`<title lang="tr">`', '`<body text="tr">`', '`<font face="Türkçe">`', '`<p align="tr">`'],
   'Karakter seti meta ile verilir: UTF-8, iso-8859-9 ya da windows-1254.')
mc('Mobil uyum için kullanılan meta etiketi hangisidir?', ['`<meta name="viewport" ...>`', '`<meta name="author" ...>`', '`<meta name="keywords" ...>`', '`<meta name="description" ...>`', '`<meta charset="UTF-8">`'],
   'viewport mobil uyum, author yazar, keywords anahtar kelimeler, description açıklama.')
mc('`<meta name="keywords" ...>` ne için kullanılır?', ['Sayfanın anahtar kelimelerini belirtmek', 'Sayfanın yazarını belirtmek', 'Mobil uyum sağlamak', 'Türkçe karakter sorununu çözmek', 'Sayfanın arka plan rengini belirlemek'],
   'keywords: arama motorlarına anahtar kelimeler.')
mc('`<body>` etiketinde **ziyaret edilmiş** bağlantıların rengini belirleyen parametre hangisidir?', ['`vlink`', '`alink`', '`link`', '`text`', '`bgcolor`'],
   'vlink = visited link. alink tıklama anı, link normal bağlantı rengi.')
mc('`<body>` etiketinde bağlantıya **tıklandığı anda** oluşacak rengi belirleyen parametre hangisidir?', ['`alink`', '`vlink`', '`link`', '`text`', '`background`'],
   'alink = active link.')
mc('Sayfanın arka planına resim koymak için `<body>` etiketinin hangi parametresi kullanılır?', ['`background`', '`bgcolor`', '`img`', '`src`', '`text`'],
   '`<body background="logo.jpg">`; bgcolor sadece renktir.')
mc('Aşağıdaki sayfada yazıların rengi ne olur?', ['Kırmızı', 'Turuncu', 'Siyah', 'Mavi', 'Beyaz'],
   '`text` metin rengini, `bgcolor` arka plan rengini belirler.',
   code='<body bgcolor="orange" text="red">Merhaba</body>', js="(c=>({'rgb(255, 0, 0)':'Kırmızı','rgb(255, 165, 0)':'Turuncu'})[c]||c)(getComputedStyle(document.body).color)")
fill('Sayfa başlığını (sekmedeki yazı) "Web Dersi" yapan kodu tamamla.', '''
<html>
<head>
<____>Web Dersi</title>
</head>
<body>Merhaba</body>
</html>''', ['title'], 'Sekme başlığı `<title>` ile verilir ve `<head>` içindedir.', js="document.title==='Web Dersi'")
fill('Sayfanın arka plan rengini gri yapan `<body>` parametresini yaz.', '<body ____="gray">Merhaba</body>', ['bgcolor'],
     '`bgcolor` arka plan rengi; `background` arka plan resmi.', js="getComputedStyle(document.body).backgroundColor==='rgb(128, 128, 128)'")
match('`<body>` parametrelerini eşleştir.', [
    ['bgcolor', 'Arka plan rengi'], ['background', 'Arka plan resmi'], ['text', 'Metin rengi'], ['vlink', 'Ziyaret edilmiş bağlantı rengi'], ['alink', 'Tıklama anındaki bağlantı rengi']],
   'link normal bağlantı, vlink ziyaret edilmiş, alink aktif (tıklama anı).')
klasik('Bir HTML belgesinin temel yapısını yazınız; `<html>`, `<head>`, `<title>` ve `<body>` etiketlerinin görevlerini açıklayınız.',
       '- `<html>`: belgenin başı ve sonu; tüm kodlar arasında.\n'
       '- `<head>`: sayfa hakkındaki bilgiler (title, meta, style); sayfada görünmez.\n'
       '- `<title>`: tarayıcı sekmesindeki başlık; head içinde.\n'
       '- `<body>`: sayfada görünen her şey (metin, resim, tablo, bağlantı).',
       code='''
<html>
<head>
<title>İlk Sayfamız</title>
</head>
<body>
Merhaba Dünya....
</body>
</html>''', h=70, js="document.title==='İlk Sayfamız'")
klasik('HTML etiket yazım kurallarından dördünü yazınız.',
       '- Komutlar `< >` işaretleri arasına yazılır.\n'
       '- Büyük/küçük harfe duyarlı değildir.\n'
       '- Açılan etiket `/` ile kapatılır (`<br>`, `<hr>`, `<img>` hariç); iç içe etiketlerde ilk açılan en son kapanır.\n'
       '- Parametreler başlangıç etiketine, değerleri tırnak içine yazılır.\n'
       '- Dosya .htm ya da .html uzantısıyla kaydedilir.')

# ===================================================================== 4. Metin
topic('metin')
mc('En **büyük** başlığı veren etiket hangisidir?', ['`<h1>`', '`<h6>`', '`<h3>`', '`<head>`', '`<big>`'],
   'Sayı azaldıkça yazı büyür: h1 en büyük, h6 en küçük.')
mc('En **küçük** başlığı veren etiket hangisidir?', ['`<h6>`', '`<h1>`', '`<h7>`', '`<h0>`', '`<small1>`'],
   'Başlık etiketleri h1 ile h6 arasındadır.')
mc('Aşağıdaki iki başlıktan hangisi daha büyük görünür?', ['Birinci (`<h2>`) daha büyük', 'İkinci (`<h4>`) daha büyük', 'İkisi aynı boyuttadır', 'Hiçbiri görünmez', 'Boyut tarayıcıya göre rastgele değişir'],
   'h2 > h4. Sayı azaldıkça büyür.',
   code='''
   <h2>Birinci</h2>
   <h4>İkinci</h4>''', prev=True, h=100,
   js="(a=>a[0]>a[1]?'Birinci (`<h2>`) daha büyük':'İkinci (`<h4>`) daha büyük')([...document.querySelectorAll('h2,h4')].map(e=>parseFloat(getComputedStyle(e).fontSize)))")
mc('`<h1>` ile `<p>` etiketlerinde kullanılan `align` parametresi hangi değeri **alamaz**?', ['`middle`', '`left`', '`right`', '`center`', '`justify`'],
   'align: left, right, center, justify. `middle` tablo hücresinde valign değeridir.')
mc('`align="justify"` ne yapar?', ['Metni iki yana yaslar', 'Metni ortalar', 'Metni sağa yaslar', 'Metni sola yaslar', 'Metni kalın yapar'],
   'justify = iki yana yasla (sola ve sağa).')
mc('Yazıyı kesip **bir satır boşluk bırakarak** yeni paragrafa geçen etiket hangisidir?', ['`<p>`', '`<br>`', '`<hr>`', '`<pre>`', '`<b>`'],
   '`<p>` paragraf yapar ve araya boşluk koyar; `<br>` sadece alt satıra geçer.')
mc('Enter tuşu görevini görüp alt satıra geçen ve **kapatılmayan** etiket hangisidir?', ['`<br>`', '`<p>`', '`<hr>`', '`<h1>`', '`<u>`'],
   '`<br>` = break.')
mc('Sayfaya yatay çizgi çizen etiket hangisidir?', ['`<hr>`', '`<br>`', '`<line>`', '`<u>`', '`<s>`'],
   '`<hr>` (horizontal rule); kapatılmaz.')
mc('`<hr>` etiketinde çizginin **kalınlığını** belirleyen parametre hangisidir?', ['`size`', '`width`', '`align`', '`height`', '`color`'],
   'size kalınlık, width uzunluk, align konum.')
mc('`<hr size="6" width="200" align="center">` kodunda `width="200"` neyi belirler?', ['Çizginin uzunluğunu', 'Çizginin kalınlığını', 'Çizginin rengini', 'Çizginin konumunu', 'Çizgi ile yazı arasındaki boşluğu'],
   'width çizginin sayfadaki uzunluğu.')
mc('Metni **altı çizili** yapan etiket hangisidir?', ['`<u>`', '`<i>`', '`<b>`', '`<s>`', '`<em>`'],
   'u = underline. s üstü çizili, i italik, b kalın.')
mc('Metni **eğik (italik)** yapan etiket hangisidir?', ['`<i>`', '`<u>`', '`<b>`', '`<s>`', '`<hr>`'],
   '`<i>` ve `<em>` italik.')
mc('Aşağıdakilerden hangisi metni **kalın** yazar?', ['`<strong>`', '`<em>`', '`<u>`', '`<s>`', '`<pre>`'],
   '`<b>` ve `<strong>` kalın, `<em>` italik.', vcode='<strong>Merhaba</strong>', js="String(parseInt(getComputedStyle(document.querySelector('strong')).fontWeight)>=700?'`<strong>`':'yok')")
mc('Arasındaki metni boşluk ve satırlarıyla **aynen** yazan etiket hangisidir?', ['`<pre>`', '`<p>`', '`<center>`', '`<font>`', '`<br>`'],
   '`<pre>` (preformatted).')
mc('`<font>` etiketinin `size` parametresi hangi aralıkta değer alır?', ['1–7', '1–6', '0–10', '1–100', '8–72'],
   'Slayt: yazının boyu 1-7 arası değer.')
mc('`<font>` etiketinde yazı tipini belirleyen parametre hangisidir?', ['`face`', '`size`', '`color`', '`type`', '`style`'],
   'face yazı tipi, size boyut, color renk.')
mc('`<basefont>` etiketi için hangisi doğrudur?', ['Sayfanın ana yazı tipini belirler ama `<h>` başlıklarını etkilemez', 'Sadece başlıkları etkiler', 'Tablo kenarlığını belirler', 'Sayfa başlığını (sekme) belirler', 'Kapatılması yasaktır'],
   'Slayt: basefont h\'leri etkilemez.')
mc('HTML\'de `<` işaretini sayfada göstermek için ne yazılır?', ['`&lt;`', '`&gt;`', '`&amp;`', '`&nbsp;`', '`&quot;`'],
   'lt = less than (küçüktür), gt = greater than.',
   vcode='<p>&lt;</p>', js="document.querySelector('p').textContent==='<'?'`&lt;`':'?'")
mc('Bölünmeyen boşluk (art arda boşluk) için kullanılan özel karakter hangisidir?', ['`&nbsp;`', '`&amp;`', '`&copy;`', '`&lt;`', '`&reg;`'],
   'HTML art arda boşlukları tek boşluk sayar; fazla boşluk için `&nbsp;`.')
mc('`&copy;` kodu sayfada hangi işareti gösterir?', ['©', '®', '&', '€', '"'],
   '&copy; telif hakkı, &reg; tescilli marka.', code='<p>&copy;</p>', js="document.querySelector('p').textContent")
fill('Metni ortalanmış bir 1. düzey başlık yapan kodu tamamla.', '<h1 ____="center">Metin Etiketleri</h1>', ['align'],
     '`align` parametresi left, right, center, justify değerlerini alır.', js="document.querySelector('h1').getAttribute('align')==='center'")
fill('Kırmızı renkli, 5 boyutunda yazı için boşluğu doldur.', '<font size="5" ____="red">Merhaba</font>', ['color'],
     '`<font>`: size, color, face.', js="getComputedStyle(document.querySelector('font')).color==='rgb(255, 0, 0)'")
match('Etiketleri işlevleriyle eşleştir.', [
    ['<b>', 'Kalın yazı'], ['<i>', 'Eğik (italik) yazı'], ['<u>', 'Altı çizili yazı'], ['<br>', 'Alt satıra geçme'], ['<hr>', 'Yatay çizgi']],
   '`<s>` üstü çizili, `<p>` paragraf, `<pre>` aynen yazma.')
klasik('Aşağıdaki görünümü veren HTML kodunu yazınız: kırmızı arka planlı sayfada ortalanmış "Metin Etiketleri Denemeleri" başlığı önce `<h1>`, sonra `<h3>`, sonra `<h6>` boyutunda alt alta yazılacak.',
       '- `<body bgcolor="red">` arka planı kırmızı yapar.\n- Her başlık `align="center"` ile ortalanır; h1 en büyük, h6 en küçük.',
       code='''
<html>
<head>
<title>Anasayfa</title>
</head>
<body bgcolor="red">
<h1 align="center">Metin Etiketleri Denemeleri</h1>
<h3 align="center">Metin Etiketleri Denemeleri</h3>
<h6 align="center">Metin Etiketleri Denemeleri</h6>
</body>
</html>''', h=130, js="document.querySelectorAll('[align=center]').length===3")
klasik('"Ey Türk Gençliği" kalın yazılacak, altına iki satırlık metin `<br>` ile bölünerek yazılacak, en altta ortalanmış ve italik "Mustafa Kemal Atatürk" `<h5>` boyutunda olacak. Kodu yazınız.',
       '- `<b>` kalın, `<br>` alt satır, `<h5 align="center">` ortalı başlık, `<i>` italik.',
       code='''
<html>
<head>
<title>Anasayfa</title>
</head>
<body>
<b>Ey Türk Gençliği</b><br>
Birinci vazifen, Türk istiklalini, Türk Cumhuriyetini<br>
ilelebet muhafaza ve müdafaa etmektir.
<h5 align="center"><i>Mustafa Kemal Atatürk</i></h5>
</body>
</html>''', h=140, js="document.querySelector('h5 i')!==null")

# ===================================================================== 5. Listeler
topic('liste')
mc('HTML\'de **sıralı** (numaralı) liste hangi etiketle oluşturulur?', ['`<ol>`', '`<ul>`', '`<dl>`', '`<li>`', '`<dt>`'],
   'ol = ordered list.')
mc('HTML\'de **sırasız** (madde imli) liste hangi etiketle oluşturulur?', ['`<ul>`', '`<ol>`', '`<dl>`', '`<dd>`', '`<list>`'],
   'ul = unordered list.')
mc('Liste maddelerini belirten `<li>` etiketinin açılımı nedir?', ['List item', 'Line item', 'Link item', 'List index', 'Long item'],
   '`<li>` = list item.')
mc('Aşağıdaki listenin ikinci maddesi nasıl numaralanır?', ['B.', '2.', 'b.', 'ii.', 'II.'],
   '`type="A"` büyük harf: A, B, C.',
   code='''
   <ol type="A">
     <li>Elma</li>
     <li>Armut</li>
   </ol>''', prev=True, h=80, js="({A:'B.',a:'b.',1:'2.',i:'ii.',I:'II.'})[document.querySelector('ol').type]")
mc('Romen rakamıyla (i, ii, iii) numaralı liste için hangi kod kullanılır?', ['`<ol type="i">`', '`<ol type="r">`', '`<ul type="i">`', '`<ol type="1">`', '`<ol start="i">`'],
   'type: 1, a, A, i, I.')
mc('Aşağıdaki listenin ilk maddesinin numarası nedir?', ['5.', '1.', 'E.', 'v.', '6.'],
   '`start="5"` listeyi 5\'ten başlatır.',
   code='''
   <ol start="5">
     <li>Kimya</li>
     <li>Fizik</li>
   </ol>''', prev=True, h=80, js="document.querySelector('ol').start+'.'")
mc('Aşağıdaki listenin üçüncü maddesi nasıl numaralanır?', ['iv.', 'iii.', 'c.', '3.', 'IV.'],
   'type="i" küçük Romen, start="2" → ii, iii, iv.',
   code='''
   <ol type="i" start="2">
     <li>Türev</li>
     <li>İntegral</li>
     <li>Limit</li>
   </ol>''', prev=True, h=100, js="(['i','ii','iii','iv','v'])[document.querySelector('ol').start+1]+'.'")
mc('`<ul>` etiketinde maddelerin başına **içi boş daire** koyan `type` değeri hangisidir?', ['`circle`', '`disc`', '`square`', '`round`', '`a`'],
   'disc içi dolu daire, circle içi boş daire, square içi dolu kare.')
mc('`<ul type="square">` kullanılınca madde başlarında ne görünür?', ['İçi dolu kare', 'İçi dolu daire', 'İçi boş daire', 'Rakam', 'Harf'],
   'square = kare.')
mc('`<ul>` için varsayılan (type yazılmazsa) madde imi hangisidir?', ['İçi dolu daire (disc)', 'İçi boş daire (circle)', 'Kare (square)', 'Rakam', 'Romen rakamı'],
   'Varsayılan disc.', code='<ul><li>a</li></ul>', js="getComputedStyle(document.querySelector('ul')).listStyleType==='disc'?'İçi dolu daire (disc)':'?'")
mc('Tanımlama listesinde kullanılan etiketler hangileridir?', ['`<dl>`, `<dt>`, `<dd>`', '`<ol>`, `<li>`', '`<ul>`, `<li>`', '`<dl>`, `<li>`', '`<table>`, `<td>`'],
   'dl liste, dt terim, dd açıklama.')
mc('Tanımlama listesinde **açıklama** kısmı hangi etiketle yazılır?', ['`<dd>`', '`<dt>`', '`<dl>`', '`<li>`', '`<p>`'],
   'dt = tanımlanan terim, dd = açıklama (içeriden başlar).')
mc('İç içe liste oluşturmak için yeni liste nereye yazılır?', ['Bir `<li>` maddesinin içine', '`<head>` bölümüne', '`<title>` içine', 'Listenin `type` parametresine', 'Liste kapandıktan sonra `<br>` ile'],
   'Alt liste, üst listenin bir maddesinin içinde açılır.')
mc('Aşağıdaki kodda kaç tane `<li>` maddesi **iç (alt) listede** yer alır?', ['2', '1', '3', '4', '5'],
   'Dış listede 2 madde (Kimya, Fizik), Kimya\'nın altında 2 madde (Organik, İnorganik).',
   code='''
   <ol>
     <li>Kimya
       <ol type="a">
         <li>Organik</li>
         <li>İnorganik</li>
       </ol>
     </li>
     <li>Fizik</li>
   </ol>''', js="String(document.querySelectorAll('ol ol li').length)")
fill('Maddeleri içi dolu kare olan sırasız listeyi tamamla.', '''
<ul type="____">
  <li>Organik</li>
  <li>İnorganik</li>
</ul>''', ['square'], 'ul type: disc, circle, square.', js="getComputedStyle(document.querySelector('ul')).listStyleType==='square'")
fill('Tanımlama listesinde terimi yazan etiketi tamamla.', '''
<dl>
  <____>En sevdiğim çiçekler</dt>
  <dd>Papatyalara bayılırım.</dd>
</dl>''', ['dt'], 'dt terim, dd açıklama.', js="document.querySelectorAll('dt').length===1")
match('Liste türlerini etiketleriyle eşleştir.', [
    ['Sıralı liste', '<ol>'], ['Sırasız liste', '<ul>'], ['Tanımlama listesi', '<dl>'], ['Liste maddesi', '<li>'], ['Tanımlama açıklaması', '<dd>']],
   'dt terim, dd açıklama.')
klasik('Aşağıdaki görünümü veren kodu yazınız:\n1. En sevdiğim yaz meyveleri: (altında içi boş daireli Kayısı, Şeftali)\n2. En sevdiğim kış meyveleri: (altında içi boş daireli Portakal, Mandalina)',
       '- Dış liste sıralı `<ol>`; her maddenin içine `<ul type="circle">` alt liste.',
       code='''
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
</ol>''', h=170, js="document.querySelectorAll('ol>li').length===2&&document.querySelectorAll('ul[type=circle] li').length===4")
klasik('Tanımlama listesi ile "En sevdiğim hayvanlar: Kediler ve kaplumbağalardır." ve "En sevdiğim yemekler: Köfte ve pilav." maddelerini yazınız; terimler kırmızı olsun.',
       '- `<dl>` içinde her terim `<dt>`, açıklaması `<dd>`. Kırmızı için `<font color="red">`.',
       code='''
<dl>
  <dt><font color="red">En sevdiğim hayvanlar</font></dt>
  <dd>Kediler ve kaplumbağalardır.</dd>
  <dt><font color="red">En sevdiğim yemekler</font></dt>
  <dd>Köfte ve pilav.</dd>
</dl>''', h=130, js="document.querySelectorAll('dt').length===2")
klasik('HTML\'deki üç liste türünü yazınız; her birinin etiketlerini ve kullanılabilecek `type` değerlerini belirtiniz.',
       '- **Sıralı liste** `<ol>` + `<li>`: type `1`, `a`, `A`, `i`, `I`; `start` başlangıç.\n'
       '- **Sırasız liste** `<ul>` + `<li>`: type `disc` (dolu daire), `circle` (boş daire), `square` (kare).\n'
       '- **Tanımlama listesi** `<dl>`: `<dt>` terim, `<dd>` açıklama.')

# ===================================================================== 6. Resim
topic('resim')
mc('Sayfaya resim eklemek için kullanılan etiket hangisidir?', ['`<img>`', '`<pic>`', '`<image>`', '`<src>`', '`<a>`'],
   '`<img src="...">`.')
mc('`<img>` etiketinde resmin yerini (yolunu) gösteren parametre hangisidir?', ['`src`', '`href`', '`alt`', '`link`', '`path`'],
   'src = source. href bağlantı adresidir.')
mc('Resim görüntülenemediğinde yerinde yazacak metin hangi parametreyle verilir?', ['`alt`', '`title`', '`src`', '`name`', '`text`'],
   'alt = alternatif metin.')
mc('Fare resmin üzerine gelince ipucu olarak çıkan yazıyı hangi parametre belirler?', ['`title`', '`src`', '`border`', '`align`', '`width`'],
   'title ipucu yazısı; alt resim görünmezse yazar.')
mc('`<img>` etiketinde resmin **enini** belirleyen parametre hangisidir?', ['`width`', '`height`', '`size`', '`border`', '`align`'],
   'width en, height boy.')
mc('HTML dosyası ile `papatya.gif` aynı klasörde ise doğru kod hangisidir?', ['`<img src="papatya.gif">`', '`<img src="../papatya.gif">`', '`<img src="/resim/papatya.gif">`', '`<img href="papatya.gif">`', '`<img alt="papatya.gif">`'],
   'Aynı klasörde sadece dosya adı yazılır.')
mc('HTML dosyasının bulunduğu klasörde `resim` adlı alt klasördeki `papatya.gif` nasıl eklenir?', ['`<img src="resim/papatya.gif">`', '`<img src="../resim/papatya.gif">`', '`<img src="papatya.gif/resim">`', '`<img src="resim:papatya">`', '`<img src="#resim">`'],
   'Alt klasör: klasör adı / dosya adı.')
mc('HTML dosyası `c:\\html_ders\\sayfalarim\\deneme.htm`, resim `c:\\html_ders\\resim\\papatya.gif` ise `src` ne olmalıdır?', ['`../resim/papatya.gif`', '`resim/papatya.gif`', '`papatya.gif`', '`../../papatya.gif`', '`sayfalarim/resim/papatya.gif`'],
   'Önce bir üst klasöre (`../`) çıkılır, sonra resim klasörüne girilir.')
mc('Dosya yolunda **iki üst** klasöre çıkmak için ne yazılır?', ['`../../`', '`../`', '`./`', '`//`', '`..2/`'],
   'Her `../` bir üst klasör.')
mc('Resmi sayfanın sağına hizalamak için hangi kod kullanılır?', ['`<img src="a.gif" align="right">`', '`<img src="a.gif" valign="right">`', '`<img src="a.gif" right>`', '`<img src="a.gif" text="right">`', '`<img src="a.gif" float>`'],
   'align: left, right, center.')
mc('Sayfanın arka planını resimle döşemek için hangi kod kullanılır?', ['`<body background="gokyuzu.jpg">`', '`<body bgcolor="gokyuzu.jpg">`', '`<img background="gokyuzu.jpg">`', '`<body src="gokyuzu.jpg">`', '`<head background="gokyuzu.jpg">`'],
   'background resim, bgcolor renk. Arka plan resmi için en/boy yazılmaz; tüm sayfayı kaplar.')
mc('Sunuma göre sayfaya eklenecek resim hangi formatlarda olmalıdır?', ['gif ya da jpg', 'doc ya da xls', 'zip ya da rar', 'mp3 ya da midi', 'html ya da htm'],
   'Slayt: "gif yada jpg formatında olması zorunluluğu dışında kısıtlama yok".')
mc('Aşağıdaki resim bulunamazsa sayfada ne yazar?', ['happy new year', 'Yeni Yıl', 'resim/2024_3.jpg', '500', 'Hiçbir şey yazmaz'],
   'Resim yüklenmezse `alt` metni görünür; `title` ise fare üstündeyken çıkar.',
   code='<img src="resim/2024_3.jpg" alt="happy new year" title="Yeni Yıl" width="500">', js="document.querySelector('img').alt")
mc('`border="0"` bir resim bağlantısında ne işe yarar?', ['Bağlantı çerçevesini tamamen kaldırır', 'Resmi gizler', 'Resmi siyah yapar', 'Bağlantıyı iptal eder', 'Resmi sola yaslar'],
   'border bağlantı çerçevesinin kalınlığıdır; 0 çerçeveyi yok eder.')
fill('Resim görünmezse "Papatya" yazsın.', '<img src="papatya.gif" ____="Papatya">', ['alt'],
     '`alt` alternatif metin.', js="document.querySelector('img').alt==='Papatya'")
fill('Bir üst klasördeki `resim` klasöründen resmi ekle.', '<img src="____/resim/papatya.gif" alt="papatya">', ['..'],
     '`..` bir üst klasör demektir.', js="document.querySelector('img').getAttribute('src')==='../resim/papatya.gif'")
match('`<img>` parametrelerini eşleştir.', [
    ['src', 'Resmin yolu ve adı'], ['alt', 'Resim görünmezse yazacak metin'], ['title', 'Fare üstündeyken çıkan yazı'], ['width', 'Resmin eni'], ['height', 'Resmin boyu']],
   'align hizalama, border çerçeve.')
klasik('Gökyüzü resmi (`gokyuzu.jpg`) sayfanın arka planı olacak, dünya resmi (`dunya.jpg`) ortada 300 piksel genişliğinde duracak; dünya resmi yüklenmezse "Dünya" yazacak. Kodu yazınız.',
       '- Arka plan resmi `<body background>` ile.\n- Ortalamak için `<center>` (ya da `<p align="center">`).\n- `alt="Dünya"` resim yüklenmezse yazar.',
       code='''
<html>
<head>
<title>Dünya</title>
</head>
<body background="gokyuzu.jpg">
<center>
  <img src="dunya.jpg" width="300" alt="Dünya" title="Dünya">
</center>
</body>
</html>''', h=120, js="document.body.getAttribute('background')==='gokyuzu.jpg'&&document.querySelector('img').alt==='Dünya'")

# ===================================================================== 7. Bağlantılar
topic('link')
mc('HTML\'de bağlantı (link) oluşturan etiket hangisidir?', ['`<a>`', '`<link>`', '`<href>`', '`<url>`', '`<img>`'],
   '`<a href="...">...</a>`. `<link>` head içinde dosya bağlamak içindir.')
mc('`<a>` etiketinde bağlantının adresi hangi parametreye yazılır?', ['`href`', '`src`', '`target`', '`name`', '`alt`'],
   'href = hypertext reference.')
mc('Biçim verilmemiş bir bağlantı yazısı tarayıcıda varsayılan olarak nasıl görünür?', ['Mavi ve altı çizili', 'Kırmızı ve kalın', 'Siyah ve italik', 'Yeşil ve üstü çizili', 'Gri ve küçük'],
   'Bağlantı mavi, altı çizili; imleç el şekline döner.',
   code='<a href="sayfa2.html">Tıkla</a>', js="(s=>s.color==='rgb(0, 0, 238)'&&s.textDecorationLine==='underline'?'Mavi ve altı çizili':s.color+s.textDecorationLine)(getComputedStyle(document.querySelector('a')))")
mc('Bağlantının **yeni bir pencerede** açılması için hangi kod kullanılır?', ['`target="_blank"`', '`target="_self"`', '`target="_top"`', '`target="_new_page"`', '`href="_blank"`'],
   '_blank yeni pencere, _self aynı pencere.')
mc('`target="_self"` ne yapar?', ['Bağlantıyı aynı pencerede açar', 'Bağlantıyı yeni pencerede açar', 'Dosyayı indirir', 'E-posta programını açar', 'Sayfanın en altına gider'],
   '_self aynı pencere (varsayılan davranış).')
mc('Bağlantıyı aynı pencerede **en üstten itibaren** açan target değeri hangisidir?', ['`_top`', '`_parent`', '`_blank`', '`_self`', '`_up`'],
   'Slayt: _top bağlantı aynı pencere içerisinde en üstten itibaren açılır.')
mc('Tıklanınca kullanıcının e-posta programını açan bağlantı hangisidir?', ['`<a href="mailto:ali@mail.com">`', '`<a href="ftp:ali@mail.com">`', '`<a href="http://ali@mail.com">`', '`<a mail="ali@mail.com">`', '`<a href="#ali@mail.com">`'],
   'mailto: e-posta programını açar ve "kime" kısmını doldurur.')
mc('`<a href="midi.zip">` bağlantısına tıklanınca tarayıcı ne yapar?', ['Dosyayı açmak mı kaydetmek mi istediğini sorar', 'Dosyayı tarayıcıda gösterir', 'Sayfayı kapatır', 'E-posta gönderir', 'Hata verir'],
   'Tarayıcı htm, txt, jpg, gif gösterebilir; zip, doc, xls, mp3 gösteremez, aç/kaydet sorar.')
mc('`<a href="meyve.gif">` bağlantısına tıklanınca ne olur?', ['Tarayıcı aynı klasördeki meyve.gif resmini açar', 'Resim otomatik silinir', 'Resim e-postayla gönderilir', 'Tarayıcı aç/kaydet diye sorar', 'Sayfa yenilenir'],
   'gif tarayıcının gösterebildiği bir dosyadır; dosya başka klasördeyse hata alınır.')
mc('Bağlantıya tıklanınca dosyayı açmak yerine **indirmek** için hangi parametre kullanılır?', ['`download`', '`target`', '`href`', '`save`', '`get`'],
   '`<a href="papatya.gif" download="dosyaadi">`; değer indirilen dosyanın adı olur.')
mc('`<a href="papatya.gif" download="cicek">` kodunda `cicek` neyi belirler?', ['İndirilecek dosyanın adını', 'Bağlantı yazısını', 'Açılacak pencereyi', 'Resmin enini', 'Resmin yerini'],
   'download değeri indirilen dosyanın adıdır.')
mc('Bir resme bağlantı vermek için ne yapılır?', ['`<img>` etiketi `<a href>` ile `</a>` arasına yazılır', '`<img>` etiketine `href` yazılır', '`<a>` etiketi `<img>` içine yazılır', '`<img link="...">` kullanılır', 'Resme bağlantı verilemez'],
   '`<a href="sayfa2.html"><img src="..."></a>`.',
   vcode='<a href="sayfa2.html"><img src="papatya.gif" alt="p"></a>', js="document.querySelector('a>img')?'`<img>` etiketi `<a href>` ile `</a>` arasına yazılır':'?'")
mc('Sayfa içi bağlantıda gidilecek yeri işaretlemek için hangi kod kullanılır?', ['`<a name="web">`', '`<a href="#web">`', '`<a target="web">`', '`<a href="web">`', '`<a link="#web">`'],
   'İşaret `name` ile, bağlantı `href="#web"` ile.')
mc('Sayfada `<a name="iletisim">` ile işaretlenmiş bölüme giden bağlantı hangisidir?', ['`<a href="#iletisim">`', '`<a href="iletisim">`', '`<a name="#iletisim">`', '`<a href="iletisim#">`', '`<a target="iletisim">`'],
   'Çapaya gitmek için href\'e # ile işaretin adı yazılır.')
mc('`sayfa2.html` içindeki `web` adlı bölüme başka bir sayfadan bağlantı nasıl verilir?', ['`<a href="sayfa2.html#web">`', '`<a href="#sayfa2.html">`', '`<a href="sayfa2.html" name="web">`', '`<a name="sayfa2.html#web">`', '`<a href="web#sayfa2.html">`'],
   'Önce sayfa, sonra # ve bölüm adı.')
mc('FTP adresine bağlantı veren kod hangisidir?', ['`<a href="ftp://ftp.benimsitem.com/">`', '`<a href="mailto:ftp.benimsitem.com">`', '`<a ftp="benimsitem.com">`', '`<a href="#ftp">`', '`<a download="ftp">`'],
   'Protokol `ftp://` yazılır.')
mc('Aşağıdaki kodda kaç tane tıklanabilir bağlantı vardır?', ['2', '3', '1', '4', '0'],
   'Sadece href\'i olan `<a>`\'lar bağlantıdır; `name` olan çapa işaretidir, tıklanmaz.',
   code='''
   <a href="#web">Web</a>
   <a href="#prog">Programlama</a>
   <a name="web"><b>Web</b></a>''', js="String(document.querySelectorAll('a[href]').length)")
fill('Yaşar Üniversitesi bağlantısı yeni pencerede açılsın.', '<a href="https://www.yasar.edu.tr/" ____="_blank">Yaşar Üniversitesi</a>', ['target'],
     'target="_blank" yeni pencere.', js="document.querySelector('a').target==='_blank'")
fill('Sayfa içindeki "prog" işaretine giden bağlantıyı tamamla.', '<a href="____prog">Programlamanın Temelleri</a>', ['#'],
     'Sayfa içi bağlantıda işaret adının önüne # konur.', js="document.querySelector('a').getAttribute('href')==='#prog'")
match('target değerlerini eşleştir.', [
    ['_blank', 'Yeni pencerede açar'], ['_self', 'Aynı pencerede açar'], ['_top', 'Aynı pencerede en üstten açar'], ['_parent', 'Açan ana sayfanın yerine konur'], ['çerçeve adı', 'Adı verilen çerçevede açar']],
   'Sunum 6, target parametreleri.')
klasik('Sayfanın başında 3 derslik bir menü (Web Tasarımı, Programlama, Sayısal Elektronik) olsun; her menü bağlantısı aynı sayfadaki ilgili paragrafa gitsin. Kodu yazınız.',
       '- Paragraflardaki başlıklar `<a name="...">` ile işaretlenir.\n- Menüde `<a href="#...">` ile o işarete gidilir; `#` sadece href\'te yazılır.',
       code='''
<a href="#web">1. Web Tasarımının Temelleri</a><br>
<a href="#prog">2. Programlamanın Temelleri</a><br>
<a href="#say">3. Sayısal Elektronik</a>

<p><a name="web"><b>1. Web Tasarımının Temelleri</b></a> Ders açıklaması...</p>
<p><a name="prog"><b>2. Programlamanın Temelleri</b></a> Ders açıklaması...</p>
<p><a name="say"><b>3. Sayısal Elektronik</b></a> Ders açıklaması...</p>''', h=170,
       js="[...document.querySelectorAll('a[href]')].every(a=>document.getElementsByName(a.getAttribute('href').slice(1)).length===1)")
klasik('`<a>` etiketiyle yapılabilecek bağlantı türlerini örnek kodlarla yazınız (en az dört).',
       '- Web sitesi: `<a href="http://www.benimsitem.com/">Siteye git</a>`\n'
       '- Başka sayfa / resim: `<a href="meyve.gif">Resmi aç</a>`\n'
       '- İndirme: `<a href="papatya.gif" download="cicek">İndir</a>`\n'
       '- E-posta: `<a href="mailto:mymail@mail.com">Mail at</a>`\n'
       '- FTP: `<a href="ftp://ftp.benimsitem.com/">Dosyalar</a>`\n'
       '- Sayfa içi: `<a name="web">` işaret, `<a href="#web">` bağlantı\n'
       '- Resme bağlantı: `<a href="sayfa2.html"><img src="papatya.gif"></a>`')

# ===================================================================== 8. CSS
topic('css')
mc('`<style>` etiketi (scoped belirtilmemişse) nereye yazılır?', ['`<head>` içine', '`<body>` sonuna', '`<title>` içine', '`<html>` dışına', '`<p>` içine'],
   'Slayt: scoped yoksa head içinde tanımlanmalıdır.')
mc('CSS\'in açılımı hangisidir?', ['Cascading Style Sheets', 'Computer Style Sheets', 'Creative Style System', 'Colorful Style Sheets', 'Cascading Simple Styles'],
   'Basamaklı stil şablonları.')
mc('Aşağıdaki kodda paragrafın yazı rengi ne olur?', ['Mavi', 'Kırmızı', 'Gri', 'Siyah', 'Beyaz'],
   '`p {color: blue;}` tüm paragrafları mavi yapar; h1 kırmızı, arka plan gri.',
   code='''
   <style>
     p {color: blue;}
     h1 {color: red;}
     body {background-color: gray;}
   </style>
   <h1>Başlık</h1>
   <p>Paragraf</p>''', prev=True, h=110,
   js="({'rgb(0, 0, 255)':'Mavi','rgb(255, 0, 0)':'Kırmızı','rgb(128, 128, 128)':'Gri'})[getComputedStyle(document.querySelector('p')).color]")
mc('`p {color: blue;}` ifadesinde `color` nedir?', ['Özellik', 'Seçici', 'Değer', 'Sınıf', 'Etiket parametresi'],
   'p seçici, color özellik, blue değer.')
mc('Yazı rengini belirleyen CSS özelliği hangisidir?', ['`color`', '`background-color`', '`font-color`', '`text-color`', '`bgcolor`'],
   'CSS\'te yazı rengi `color`; arka plan `background-color`.')
mc('Arka plan rengini açık mavi yapan CSS kodu hangisidir?', ['`background-color: lightblue;`', '`color: lightblue;`', '`bgcolor: lightblue;`', '`background = lightblue;`', '`text-align: lightblue;`'],
   'Özellik ve değer arasında iki nokta, sonda noktalı virgül.')
mc('Yazıyı ortalayan CSS kodu hangisidir?', ['`text-align: center;`', '`align: center;`', '`text-decoration: center;`', '`font-style: center;`', '`center: text;`'],
   'text-align: left, right, center, justify.')
mc('`border: 2px solid green;` ne yapar?', ['2px kalınlığında düz, yeşil kenarlık ekler', '2px yeşil gölge ekler', 'Yazıyı 2px yeşil yapar', 'Yeşil arka plan ekler', '2px harf aralığı verir'],
   'border: kalınlık, tür (solid = düz), renk.')
mc('Yazının **üstünü çizen** (ortasından geçen) CSS değeri hangisidir?', ['`text-decoration: line-through;`', '`text-decoration: overline;`', '`text-decoration: underline;`', '`font-style: italic;`', '`text-shadow: 3px;`'],
   'line-through üstü çizili, overline üst çizgi, underline alt çizgi.')
mc('Harfler arasındaki boşluğu ayarlayan CSS özelliği hangisidir?', ['`letter-spacing`', '`word-spacing`', '`text-spacing`', '`font-spacing`', '`line-height`'],
   'letter-spacing harf, word-spacing kelime aralığı.')
mc('Kelimeler arasındaki boşluğu ayarlayan CSS özelliği hangisidir?', ['`word-spacing`', '`letter-spacing`', '`text-indent`', '`font-size`', '`padding`'],
   'word-spacing: 10px; kelime arası.')
mc('`text-shadow: 3px 2px red;` ne yapar?', ['Yazıya kırmızı gölge verir', 'Yazıyı kırmızı yapar', 'Kırmızı kenarlık ekler', 'Arka planı kırmızı yapar', 'Yazının altını kırmızı çizer'],
   'text-shadow: yatay kayma, dikey kayma, renk.')
mc('Yazıyı **kalın** yapan CSS kodu hangisidir?', ['`font-weight: bold;`', '`font-style: bold;`', '`text-decoration: bold;`', '`font-size: bold;`', '`font-family: bold;`'],
   'font-weight kalınlık, font-style italik.')
mc('CSS\'te `.par1 { color: red; }` kuralı hangi etiketleri etkiler?', ['`class="par1"` verilmiş etiketleri', 'Bütün paragrafları', 'Sadece `id="par1"` olanı', 'Sadece başlıkları', 'Hiçbirini; nokta hatalıdır'],
   'Nokta sınıf seçicisidir; sadece o sınıfı alan etiketler etkilenir.',
   code='''
   <style> .par1 { color: red; } </style>
   <p class="par1">Bir</p>
   <p>İki</p>''', js="(()=>{const p=document.querySelectorAll('p');return getComputedStyle(p[0]).color==='rgb(255, 0, 0)'&&getComputedStyle(p[1]).color!=='rgb(255, 0, 0)'?'`class=\"par1\"` verilmiş etiketleri':'?'})()")
mc('Aşağıdaki kodda **ikinci** paragraf nasıl görünür?', ['Solda ve mavi', 'Ortada ve kırmızı', 'Solda ve kırmızı', 'Ortada ve mavi', 'Sağda ve siyah'],
   'İkinci paragraf par2 sınıfını alır: sola yaslı, mavi.',
   code='''
   <style>
     .par1 { text-align: center; color: red; }
     .par2 { text-align: left; color: blue; }
   </style>
   <p class="par1">Bu paragraf</p>
   <p class="par2">Bu paragraf</p>''', prev=True, h=90,
   js="(s=>({left:'Solda',start:'Solda',center:'Ortada'})[s.textAlign]+' ve '+({'rgb(0, 0, 255)':'mavi','rgb(255, 0, 0)':'kırmızı'})[s.color])(getComputedStyle(document.querySelectorAll('p')[1]))")
mc('Bir paragrafa `vurgu` sınıfı atamanın doğru yazımı hangisidir?', ['`<p class="vurgu">`', '`<p class=".vurgu">`', '`<p style="vurgu">`', '`<p .vurgu>`', '`<p id=".vurgu">`'],
   'HTML\'de nokta yazılmaz; nokta sadece CSS\'te.')
mc('Aşağıdaki kuralda paragrafın yazı boyutu kaç pikseldir?', ['40px', '20px', '16px', '4px', '400px'],
   'font-size yazı boyutu.', code='''
   <style> p { font-size: 40px; font-style: italic; } </style>
   <p>Yazı</p>''', js="getComputedStyle(document.querySelector('p')).fontSize")
fill('Bütün `<h1>` başlıkları kırmızı olsun.', '''
<style>
  h1 { ____: red; }
</style>
<h1>Başlık</h1>''', ['color'], 'Yazı rengi `color`.', js="getComputedStyle(document.querySelector('h1')).color==='rgb(255, 0, 0)'")
fill('`par2` sınıfı için CSS seçicisini tamamla.', '''
<style>
  ____par2 { color: blue; }
</style>
<p class="par2">Mavi paragraf</p>''', ['.'], 'Sınıf seçicisi nokta ile başlar.', js="getComputedStyle(document.querySelector('p')).color==='rgb(0, 0, 255)'")
match('CSS özelliklerini eşleştir.', [
    ['color', 'Yazı rengi'], ['background-color', 'Arka plan rengi'], ['text-align', 'Yazı hizalama'], ['letter-spacing', 'Harf aralığı'], ['font-family', 'Yazı tipi']],
   'word-spacing kelime aralığı, font-size boyut, font-weight kalınlık.')
klasik('Üç paragraf için `<style>` ile class tanımlayınız: 1. paragraf arka planı siyah, yazısı beyaz ve italik; 2. paragraf arka planı yeşil, yazı boyutu 50px ve altı çizili; 3. paragraf yazısı mavi, harf aralığı 10px ve sağa yaslı.',
       '- Her paragrafa farklı sınıf (`par1`, `par2`, `par3`).\n- CSS\'te sınıf nokta ile yazılır; `<style>` head içindedir.',
       code='''
<html>
<head>
<style>
  .par1 { background-color: black; color: white; font-style: italic; }
  .par2 { background-color: green; font-size: 50px; text-decoration: underline; }
  .par3 { color: blue; letter-spacing: 10px; text-align: right; }
</style>
</head>
<body>
<p class="par1">Birinci paragraf</p>
<p class="par2">İkinci paragraf</p>
<p class="par3">Üçüncü paragraf</p>
</body>
</html>''', h=200, js="getComputedStyle(document.querySelector('.par3')).textAlign==='right'&&getComputedStyle(document.querySelector('.par2')).fontSize==='50px'")
klasik('`<style>` etiketini açıklayınız; etikete stil vermek ile class atamak arasındaki farkı örnekle yazınız.',
       '- `<style>` HTML etiketlerinin nasıl görüneceğini tanımlar; head içine yazılır.\n'
       '- Etikete stil: `p { color: blue; }` sayfadaki **bütün** paragrafları etkiler.\n'
       '- Class: `.par1 { color: red; }` sadece `class="par1"` verilen etiketleri etkiler; böylece aynı etiketler farklı görünebilir.')

# ===================================================================== 9. Tablolar
topic('tablo')
mc('Tabloda **satır** oluşturan etiket hangisidir?', ['`<tr>`', '`<td>`', '`<th>`', '`<table>`', '`<row>`'],
   'tr = table row.')
mc('`<td>` etiketinin açılımı nedir?', ['Table data', 'Table design', 'Text data', 'Table division', 'Top data'],
   'td = table data, veri hücresi.')
mc('Tabloda **sütun başlığı** hücresi hangi etiketle yazılır?', ['`<th>`', '`<td>`', '`<thead>`', '`<caption>`', '`<head>`'],
   'th = table header; kalın ve ortalı görünür.')
mc('Tabloya açıklama (alt yazı) eklemek için hangi etiket kullanılır?', ['`<caption>`', '`<title>`', '`<th>`', '`<thead>`', '`<tfoot>`'],
   '`<caption align="bottom">` tablonun altına açıklama koyar.')
mc('Aşağıdaki tabloda kaç satır ve kaç hücre vardır?', ['2 satır, 4 hücre', '4 satır, 2 hücre', '2 satır, 2 hücre', '1 satır, 4 hücre', '4 satır, 4 hücre'],
   '2 `<tr>`, her birinde 2 `<td>`.',
   code='''
   <table border="1">
     <tr><td>hücre1</td><td>hücre2</td></tr>
     <tr><td>hücre3</td><td>hücre4</td></tr>
   </table>''', prev=True, h=80,
   js="document.querySelectorAll('tr').length+' satır, '+document.querySelectorAll('td').length+' hücre'")
mc('`border="0"` tabloda ne yapar?', ['Çerçevenin görünmemesini sağlar', 'Tabloyu siler', 'Hücreleri birleştirir', 'Tabloyu sola yaslar', 'Hücre içi boşluğu sıfırlar'],
   'border çerçeve kalınlığıdır; 0 görünmez yapar.')
mc('Hücre **içi** boşluğu (yazı ile hücre kenarı arası) ayarlayan parametre hangisidir?', ['`cellpadding`', '`cellspacing`', '`border`', '`rules`', '`colspan`'],
   'cellpadding iç, cellspacing hücreler arası boşluk.')
mc('Hücreler **arası** boşluğu ayarlayan parametre hangisidir?', ['`cellspacing`', '`cellpadding`', '`valign`', '`rowspan`', '`bgcolor`'],
   'cellspacing = hücre dışı boşluk.')
mc('Hücre içindeki yazıyı **dikey** olarak hizalayan parametre hangisidir?', ['`valign`', '`align`', '`rules`', '`height`', '`rowspan`'],
   'valign: top, middle, bottom. align yatay hizalama.')
mc('`valign` parametresi hangi değeri **alamaz**?', ['`center`', '`top`', '`middle`', '`bottom`', 'Hepsini alabilir'],
   'valign: top, middle, bottom. center align\'ın değeridir.')
mc('Yan yana iki hücreyi (aynı satırda) birleştirmek için hangi kod kullanılır?', ['`<td colspan="2">`', '`<td rowspan="2">`', '`<tr colspan="2">`', '`<td merge="2">`', '`<table colspan="2">`'],
   'colspan sütunları (yan yana) birleştirir; rowspan satırları (alt alta).',
   vcode='''
   <table border="1">
     <tr><td colspan="2">A</td></tr>
     <tr><td>C</td><td>D</td></tr>
   </table>''', js="document.querySelector('td').colSpan===2?'`<td colspan=\"2\">`':'?'")
mc('Alt alta üç hücreyi (aynı sütunda) birleştirmek için hangi kod kullanılır?', ['`<td rowspan="3">`', '`<td colspan="3">`', '`<tr rowspan="3">`', '`<td valign="3">`', '`<td span="3">`'],
   'rowspan = satır birleştirme.')
mc('Aşağıdaki tablonun ilk satırında kaç `<td>` yazılmalıdır? (A ve B birleşik, C ve D ayrı; tablo 4 sütunlu)', ['3', '4', '2', '1', '5'],
   'A ile B tek `<td colspan="2">` olur; B\'nin `<td>`\'si silinir: A, C, D → 3.',
   code='''
   <table border="1" cellpadding="12">
     <tr><td colspan="2">A</td><td>C</td><td>D</td></tr>
     <tr><td>E</td><td>F</td><td>G</td><td>H</td></tr>
   </table>''', prev=True, h=100, js="String(document.querySelector('tr').cells.length)")
mc('Aşağıdaki tabloda 3. satırda neden sadece iki hücre (J ve L) yazılmıştır?', ['Üst satırlardaki rowspan\'li hücreler bu satıra da uzandığı için', 'colspan="2" kullanıldığı için', 'border="1" olduğu için', 'cellpadding="12" olduğu için', 'Tablo hatalı yazıldığı için'],
   'C rowspan="3", E rowspan="2" olduğundan 3. satırda o sütunlar dolu; J ve L kalır.',
   code='''
   <table border="1" cellpadding="12">
     <tr><td>A</td><td>B</td><td rowspan="3">C</td><td>D</td></tr>
     <tr><td rowspan="2">E</td><td>F</td><td>H</td></tr>
     <tr><td>J</td><td>L</td></tr>
   </table>''', prev=True, h=170, js="(r=>r[2].cells.length===2&&r[0].cells[2].rowSpan===3?'Üst satırlardaki rowspan\\'li hücreler bu satıra da uzandığı için':'?')(document.querySelectorAll('tr'))")
mc('`rules="cols"` tabloda ne yapar?', ['Yatay iç kenarlıkları yok eder; sadece sütun çizgileri kalır', 'Dikey iç kenarlıkları yok eder', 'Tüm iç kenarlıkları yok eder', 'Sütunları birleştirir', 'Sütunlara renk verir'],
   'cols: sütunlar arası (dikey) çizgiler kalır, yatay iç kenarlıklar gider. rows tersi, none hepsini kaldırır.')
mc('Tüm iç kenarlıkları yok eden `rules` değeri hangisidir?', ['`none`', '`rows`', '`cols`', '`all`', '`0`'],
   'rules="none".')
mc('Bir hücrenin arka planını kırmızı yapan kod hangisidir?', ['`<td bgcolor="#FF0000">`', '`<td color="#FF0000">`', '`<td background="#FF0000">`', '`<tr text="red">`', '`<td border="red">`'],
   'bgcolor renk; background hücreye resim koyar.',
   vcode='<table><tr><td bgcolor="#FF0000">hücre1</td></tr></table>', js="getComputedStyle(document.querySelector('td')).backgroundColor==='rgb(255, 0, 0)'?'`<td bgcolor=\"#FF0000\">`':'?'")
mc('Hücreye arka plan **resmi** koymak için hangi parametre kullanılır?', ['`background`', '`bgcolor`', '`src`', '`img`', '`rules`'],
   '`<td background="resim1.jpg">`.')
mc('Tabloya verilen `width` ve `height` için sunumda hangisi söylenir?', ['Tablo büyütülebilir ama içeriğinden küçültülemez', 'Tablo küçültülebilir ama büyütülemez', 'width sadece hücrelere verilebilir', 'height yüzde ile verilemez', 'İkisi birlikte kullanılamaz'],
   'Tablonun normal ölçüsünden küçük değerler dikkate alınmaz.')
mc('Tabloyu sayfada ortalamak için `<table>` etiketine ne yazılır?', ['`align="center"`', '`valign="center"`', '`text-align="center"`', '`rules="center"`', '`cellspacing="center"`'],
   'align left/right/center tabloyu hizalar.')
mc('Tablonun başlık bölümünü ve gövde bölümünü ayıran etiketler hangileridir?', ['`<thead>` ve `<tbody>`', '`<head>` ve `<body>`', '`<th>` ve `<td>`', '`<caption>` ve `<col>`', '`<title>` ve `<table>`'],
   'Tablo da head/body gibi ayrılır: thead ve tbody.')
mc('Sütunları gruplayarak arka plan rengi vermek için hangi etiket kullanılır?', ['`<colgroup>`', '`<rowgroup>`', '`<thead>`', '`<caption>`', '`<tbody>`'],
   '`<colgroup><col span="2" style="background-color:red"></colgroup>`.')
fill('İki satırı (alt alta) birleştiren hücreyi tamamla.', '''
<table border="1">
  <tr><td ____="2">E</td><td>F</td></tr>
  <tr><td>J</td></tr>
</table>''', ['rowspan'], 'Alt alta birleştirme rowspan.', js="document.querySelector('td').rowSpan===2")
fill('Hücre içi boşluk 10 olsun.', '''
<table border="1" ____="10">
  <tr><td>hücre</td></tr>
</table>''', ['cellpadding'], 'cellpadding iç boşluk.', js="document.querySelector('table').cellPadding==='10'")
match('Tablo parametrelerini eşleştir.', [
    ['cellpadding', 'Hücre içi boşluk'], ['cellspacing', 'Hücreler arası boşluk'], ['colspan', 'Yan yana hücreleri birleştirme'],
    ['rowspan', 'Alt alta hücreleri birleştirme'], ['valign', 'Hücre içi dikey hizalama']],
   'align yatay, valign dikey; colspan yan yana, rowspan alt alta.')
match('Tablo etiketlerini eşleştir.', [
    ['<table>', 'Tabloyu başlatır'], ['<tr>', 'Satır'], ['<td>', 'Veri hücresi'], ['<th>', 'Başlık hücresi'], ['<caption>', 'Tablo açıklaması']],
   'thead başlık bölümü, tbody gövde bölümü.')
klasik('Kenarlığı yeşil, arka planı `#FFE7C1` olan 2 satır 3 sütunlu bir tablo yazınız: 1. satır Artvin, Rize, Trabzon; 2. satır Adana, Mersin, Hatay.',
       '- `<table border="1" bordercolor="green" bgcolor="#FFE7C1">`\n- 2 `<tr>`, her birinde 3 `<td>`.',
       code='''
<table border="1" bordercolor="green" bgcolor="#FFE7C1">
  <tr>
    <td>Artvin</td>
    <td>Rize</td>
    <td>Trabzon</td>
  </tr>
  <tr>
    <td>Adana</td>
    <td>Mersin</td>
    <td>Hatay</td>
  </tr>
</table>''', h=80, js="document.querySelectorAll('tr').length===2&&document.querySelectorAll('td').length===6")
klasik('4 sütunlu, 3 satırlı tabloda: 1. satır A, B, C, D; 2. satırda E, F, G birleşik ve H; 3. satır I, J, K, L olacak. A ile B de birleşik olacak. Kodu yazınız.',
       '- A–B birleşik: `<td colspan="2">A</td>`, B yazılmaz.\n- E–F–G birleşik: `<td colspan="3">E</td>`, F ve G yazılmaz.\n- `cellpadding="12"` hücreleri genişletir.',
       code='''
<table border="1" cellpadding="12">
  <tr><td colspan="2">A</td><td>C</td><td>D</td></tr>
  <tr><td colspan="3">E</td><td>H</td></tr>
  <tr><td>I</td><td>J</td><td>K</td><td>L</td></tr>
</table>''', h=170, js="[...document.querySelectorAll('tr')].map(r=>r.cells.length).join()==='3,2,4'")
klasik('4 sütunlu, 3 satırlı tabloda: C, G ve K hücreleri alt alta birleşik; E ve I hücreleri alt alta birleşik. Diğer hücreler: A, B, D, F, H, J, L. Kodu yazınız.',
       '- C: `<td rowspan="3">`, G ve K yazılmaz.\n- E: `<td rowspan="2">`, I yazılmaz.\n- 3. satırda sadece J ve L kalır.',
       code='''
<table border="1" cellpadding="12">
  <tr><td>A</td><td>B</td><td rowspan="3">C</td><td>D</td></tr>
  <tr><td rowspan="2">E</td><td>F</td><td>H</td></tr>
  <tr><td>J</td><td>L</td></tr>
</table>''', h=170, js="[...document.querySelectorAll('tr')].map(r=>r.cells.length).join()==='4,3,2'")
klasik('Hücre içi yatay hizalamayı gösteren tablo yazınız: genişliği 100 olan üç satırlık tabloda hücre1 sola, hücre2 ortaya, hücre3 sağa yaslansın.',
       '- `<td>` etiketine `align="left"`, `"center"`, `"right"`.',
       code='''
<table border="1" cellpadding="7">
  <tr><td width="100" align="left">hücre1</td></tr>
  <tr><td width="100" align="center">hücre2</td></tr>
  <tr><td width="100" align="right">hücre3</td></tr>
</table>''', h=130, js="[...document.querySelectorAll('td')].map(t=>t.align).join()==='left,center,right'")
klasik('`cellpadding` ile `cellspacing` arasındaki farkı ve `colspan` ile `rowspan` arasındaki farkı açıklayınız.',
       '- **cellpadding**: hücre **içi** boşluk (yazı ile hücre kenarı arası). 0 ise yazı kenara bitişik.\n'
       '- **cellspacing**: hücre **dışı** boşluk (hücreler arası).\n'
       '- **colspan**: yan yana (aynı satırdaki) hücreleri birleştirir = sütun birleştirme.\n'
       '- **rowspan**: alt alta (aynı sütundaki) hücreleri birleştirir = satır birleştirme.')
