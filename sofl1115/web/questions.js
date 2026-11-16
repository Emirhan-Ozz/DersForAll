/* MBP1145 test soruları. tools/build.py ile üretildi. */
window.EXAMS = [
 {
  "id": "deneme1",
  "title": "Deneme sınavı 1",
  "desc": "30 soru: 29 test + 1 klasik (kod yazma). 9 konunun hepsinden; diğer denemelerle ortak soru yok.",
  "featured": true,
  "questions": [
   {
    "type": "mc",
    "topic": "internet",
    "q": "E-posta sistemleri hangi protokole dayanır?",
    "opts": [
     "WWW",
     "FTP",
     "SMTP",
     "URL",
     "HTML"
    ],
    "a": 2,
    "exp": "SMTP: Simple Mail Transfer Protocol."
   },
   {
    "type": "mc",
    "topic": "internet",
    "q": "`www.tsk.mil.tr` adresindeki `mil` uzantısı neyi gösterir?",
    "opts": [
     "Askeri kurum",
     "Eğitim kurumu",
     "Devlet kurumu",
     "Genel amaçlı site",
     "Ticari kuruluş"
    ],
    "a": 0,
    "exp": "mil = askeri kurumlar."
   },
   {
    "type": "mc",
    "topic": "internet",
    "q": "İnternet ortamında bilgi istendiğinde **cevap veren** bilgisayara ne denir?",
    "opts": [
     "Tarayıcı",
     "Sunucu (server)",
     "İstemci (client)",
     "Modem",
     "Alan adı"
    ],
    "a": 1,
    "exp": "Sunucu cevap verir, istemci bilgiyi ister."
   },
   {
    "type": "mc",
    "topic": "tasarim",
    "q": "Butona tıklanınca menü açılması gibi etkileşimleri sağlayan front-end teknolojisi hangisidir?",
    "opts": [
     "FTP",
     "HTML",
     "MySQL",
     "CSS",
     "JavaScript"
    ],
    "a": 4,
    "exp": "JavaScript sayfaya etkileşim ve dinamiklik katar."
   },
   {
    "type": "mc",
    "topic": "tasarim",
    "q": "Front-end ile back-end arasındaki iletişimi sağlayan yapıya ne denir?",
    "opts": [
     "WYSIWYG",
     "Hosting",
     "API",
     "CSS",
     "URL"
    ],
    "a": 2,
    "exp": "API (Application Programming Interface); RESTful ya da GraphQL."
   },
   {
    "type": "mc",
    "topic": "tasarim",
    "q": "Bir HTML dosyasının tarayıcıda yorumlanabilmesi için uzantısı ne olmalıdır?",
    "opts": [
     ".doc",
     ".htm veya .html",
     ".txt",
     ".php",
     ".css"
    ],
    "a": 1,
    "exp": "HTML dosyaları .htm ya da .html ile kaydedilir."
   },
   {
    "type": "mc",
    "topic": "temel",
    "q": "Aşağıdaki kod tarayıcıda açıldığında sekmede hangi yazı görünür?",
    "opts": [
     "Merhaba",
     "Sekmede yazı görünmez",
     "index.html",
     "Anasayfa",
     "Hoş geldiniz"
    ],
    "a": 3,
    "exp": "Sekme başlığı `<title>`'dan gelir: Anasayfa. `<h1>` sayfanın içinde görünür.",
    "code": "<html>\n<head><title>Anasayfa</title></head>\n<body><h1>Merhaba</h1> Hoş geldiniz</body>\n</html>"
   },
   {
    "type": "mc",
    "topic": "temel",
    "q": "Türkçe karakterlerin düzgün görünmesi için `<head>` içine hangi etiket eklenir?",
    "opts": [
     "`<meta charset=\"UTF-8\">`",
     "`<title lang=\"tr\">`",
     "`<font face=\"Türkçe\">`",
     "`<p align=\"tr\">`",
     "`<body text=\"tr\">`"
    ],
    "a": 0,
    "exp": "Karakter seti meta ile verilir: UTF-8, iso-8859-9 ya da windows-1254."
   },
   {
    "type": "mc",
    "topic": "temel",
    "q": "`<meta name=\"keywords\" ...>` ne için kullanılır?",
    "opts": [
     "Mobil uyum sağlamak",
     "Sayfanın anahtar kelimelerini belirtmek",
     "Sayfanın yazarını belirtmek",
     "Türkçe karakter sorununu çözmek",
     "Sayfanın arka plan rengini belirlemek"
    ],
    "a": 1,
    "exp": "keywords: arama motorlarına anahtar kelimeler."
   },
   {
    "type": "mc",
    "topic": "metin",
    "q": "`<hr size=\"6\" width=\"200\" align=\"center\">` kodunda `width=\"200\"` neyi belirler?",
    "opts": [
     "Çizgi ile yazı arasındaki boşluğu",
     "Çizginin rengini",
     "Çizginin kalınlığını",
     "Çizginin uzunluğunu",
     "Çizginin konumunu"
    ],
    "a": 3,
    "exp": "width çizginin sayfadaki uzunluğu."
   },
   {
    "type": "mc",
    "topic": "metin",
    "q": "Aşağıdakilerden hangisi metni **kalın** yazar?",
    "opts": [
     "`<u>`",
     "`<em>`",
     "`<s>`",
     "`<strong>`",
     "`<pre>`"
    ],
    "a": 3,
    "exp": "`<b>` ve `<strong>` kalın, `<em>` italik."
   },
   {
    "type": "mc",
    "topic": "metin",
    "q": "Enter tuşu görevini görüp alt satıra geçen ve **kapatılmayan** etiket hangisidir?",
    "opts": [
     "`<u>`",
     "`<br>`",
     "`<p>`",
     "`<h1>`",
     "`<hr>`"
    ],
    "a": 1,
    "exp": "`<br>` = break."
   },
   {
    "type": "mc",
    "topic": "metin",
    "q": "`<h1>` ile `<p>` etiketlerinde kullanılan `align` parametresi hangi değeri **alamaz**?",
    "opts": [
     "`justify`",
     "`middle`",
     "`center`",
     "`right`",
     "`left`"
    ],
    "a": 1,
    "exp": "align: left, right, center, justify. `middle` tablo hücresinde valign değeridir."
   },
   {
    "type": "mc",
    "topic": "liste",
    "q": "Aşağıdaki listenin üçüncü maddesi nasıl numaralanır?",
    "opts": [
     "3.",
     "c.",
     "iv.",
     "IV.",
     "iii."
    ],
    "a": 2,
    "exp": "type=\"i\" küçük Romen, start=\"2\" → ii, iii, iv.",
    "code": "<ol type=\"i\" start=\"2\">\n  <li>Türev</li>\n  <li>İntegral</li>\n  <li>Limit</li>\n</ol>",
    "prev": true,
    "h": 100
   },
   {
    "type": "mc",
    "topic": "liste",
    "q": "İç içe liste oluşturmak için yeni liste nereye yazılır?",
    "opts": [
     "Bir `<li>` maddesinin içine",
     "`<head>` bölümüne",
     "Liste kapandıktan sonra `<br>` ile",
     "`<title>` içine",
     "Listenin `type` parametresine"
    ],
    "a": 0,
    "exp": "Alt liste, üst listenin bir maddesinin içinde açılır."
   },
   {
    "type": "mc",
    "topic": "liste",
    "q": "Aşağıdaki listenin ilk maddesinin numarası nedir?",
    "opts": [
     "5.",
     "1.",
     "E.",
     "6.",
     "v."
    ],
    "a": 0,
    "exp": "`start=\"5\"` listeyi 5'ten başlatır.",
    "code": "<ol start=\"5\">\n  <li>Kimya</li>\n  <li>Fizik</li>\n</ol>",
    "prev": true,
    "h": 80
   },
   {
    "type": "mc",
    "topic": "resim",
    "q": "Fare resmin üzerine gelince ipucu olarak çıkan yazıyı hangi parametre belirler?",
    "opts": [
     "`align`",
     "`width`",
     "`border`",
     "`title`",
     "`src`"
    ],
    "a": 3,
    "exp": "title ipucu yazısı; alt resim görünmezse yazar."
   },
   {
    "type": "mc",
    "topic": "resim",
    "q": "Dosya yolunda **iki üst** klasöre çıkmak için ne yazılır?",
    "opts": [
     "`//`",
     "`../`",
     "`..2/`",
     "`./`",
     "`../../`"
    ],
    "a": 4,
    "exp": "Her `../` bir üst klasör."
   },
   {
    "type": "mc",
    "topic": "resim",
    "q": "Sayfaya resim eklemek için kullanılan etiket hangisidir?",
    "opts": [
     "`<a>`",
     "`<pic>`",
     "`<img>`",
     "`<image>`",
     "`<src>`"
    ],
    "a": 2,
    "exp": "`<img src=\"...\">`."
   },
   {
    "type": "mc",
    "topic": "link",
    "q": "FTP adresine bağlantı veren kod hangisidir?",
    "opts": [
     "`<a href=\"#ftp\">`",
     "`<a href=\"mailto:ftp.benimsitem.com\">`",
     "`<a ftp=\"benimsitem.com\">`",
     "`<a href=\"ftp://ftp.benimsitem.com/\">`",
     "`<a download=\"ftp\">`"
    ],
    "a": 3,
    "exp": "Protokol `ftp://` yazılır."
   },
   {
    "type": "mc",
    "topic": "link",
    "q": "Aşağıdaki kodda kaç tane tıklanabilir bağlantı vardır?",
    "opts": [
     "3",
     "1",
     "4",
     "2",
     "0"
    ],
    "a": 3,
    "exp": "Sadece href'i olan `<a>`'lar bağlantıdır; `name` olan çapa işaretidir, tıklanmaz.",
    "code": "<a href=\"#web\">Web</a>\n<a href=\"#prog\">Programlama</a>\n<a name=\"web\"><b>Web</b></a>"
   },
   {
    "type": "mc",
    "topic": "link",
    "q": "Sayfada `<a name=\"iletisim\">` ile işaretlenmiş bölüme giden bağlantı hangisidir?",
    "opts": [
     "`<a href=\"iletisim#\">`",
     "`<a href=\"iletisim\">`",
     "`<a name=\"#iletisim\">`",
     "`<a target=\"iletisim\">`",
     "`<a href=\"#iletisim\">`"
    ],
    "a": 4,
    "exp": "Çapaya gitmek için href'e # ile işaretin adı yazılır."
   },
   {
    "type": "mc",
    "topic": "link",
    "q": "Bağlantıya tıklanınca dosyayı açmak yerine **indirmek** için hangi parametre kullanılır?",
    "opts": [
     "`get`",
     "`save`",
     "`download`",
     "`target`",
     "`href`"
    ],
    "a": 2,
    "exp": "`<a href=\"papatya.gif\" download=\"dosyaadi\">`; değer indirilen dosyanın adı olur."
   },
   {
    "type": "mc",
    "topic": "css",
    "q": "`border: 2px solid green;` ne yapar?",
    "opts": [
     "2px kalınlığında düz, yeşil kenarlık ekler",
     "2px harf aralığı verir",
     "2px yeşil gölge ekler",
     "Yeşil arka plan ekler",
     "Yazıyı 2px yeşil yapar"
    ],
    "a": 0,
    "exp": "border: kalınlık, tür (solid = düz), renk."
   },
   {
    "type": "mc",
    "topic": "css",
    "q": "CSS'te `.par1 { color: red; }` kuralı hangi etiketleri etkiler?",
    "opts": [
     "Bütün paragrafları",
     "Sadece `id=\"par1\"` olanı",
     "Hiçbirini; nokta hatalıdır",
     "`class=\"par1\"` verilmiş etiketleri",
     "Sadece başlıkları"
    ],
    "a": 3,
    "exp": "Nokta sınıf seçicisidir; sadece o sınıfı alan etiketler etkilenir.",
    "code": "<style> .par1 { color: red; } </style>\n<p class=\"par1\">Bir</p>\n<p>İki</p>"
   },
   {
    "type": "mc",
    "topic": "css",
    "q": "`<style>` etiketi (scoped belirtilmemişse) nereye yazılır?",
    "opts": [
     "`<p>` içine",
     "`<head>` içine",
     "`<html>` dışına",
     "`<body>` sonuna",
     "`<title>` içine"
    ],
    "a": 1,
    "exp": "Slayt: scoped yoksa head içinde tanımlanmalıdır."
   },
   {
    "type": "mc",
    "topic": "tablo",
    "q": "Bir hücrenin arka planını kırmızı yapan kod hangisidir?",
    "opts": [
     "`<td color=\"#FF0000\">`",
     "`<tr text=\"red\">`",
     "`<td bgcolor=\"#FF0000\">`",
     "`<td border=\"red\">`",
     "`<td background=\"#FF0000\">`"
    ],
    "a": 2,
    "exp": "bgcolor renk; background hücreye resim koyar."
   },
   {
    "type": "mc",
    "topic": "tablo",
    "q": "Hücreye arka plan **resmi** koymak için hangi parametre kullanılır?",
    "opts": [
     "`bgcolor`",
     "`rules`",
     "`src`",
     "`background`",
     "`img`"
    ],
    "a": 3,
    "exp": "`<td background=\"resim1.jpg\">`."
   },
   {
    "type": "mc",
    "topic": "tablo",
    "q": "Yan yana iki hücreyi (aynı satırda) birleştirmek için hangi kod kullanılır?",
    "opts": [
     "`<td merge=\"2\">`",
     "`<td colspan=\"2\">`",
     "`<table colspan=\"2\">`",
     "`<td rowspan=\"2\">`",
     "`<tr colspan=\"2\">`"
    ],
    "a": 1,
    "exp": "colspan sütunları (yan yana) birleştirir; rowspan satırları (alt alta)."
   },
   {
    "type": "open",
    "topic": "tablo",
    "q": "Kenarlığı yeşil, arka planı `#FFE7C1` olan 2 satır 3 sütunlu bir tablo yazınız: 1. satır Artvin, Rize, Trabzon; 2. satır Adana, Mersin, Hatay.",
    "model": "- `<table border=\"1\" bordercolor=\"green\" bgcolor=\"#FFE7C1\">`\n- 2 `<tr>`, her birinde 3 `<td>`.",
    "modelCode": "<table border=\"1\" bordercolor=\"green\" bgcolor=\"#FFE7C1\">\n  <tr>\n    <td>Artvin</td>\n    <td>Rize</td>\n    <td>Trabzon</td>\n  </tr>\n  <tr>\n    <td>Adana</td>\n    <td>Mersin</td>\n    <td>Hatay</td>\n  </tr>\n</table>",
    "h": 80
   }
  ]
 },
 {
  "id": "deneme2",
  "title": "Deneme sınavı 2",
  "desc": "30 soru: 29 test + 1 klasik (kod yazma). 9 konunun hepsinden; diğer denemelerle ortak soru yok.",
  "featured": false,
  "questions": [
   {
    "type": "mc",
    "topic": "internet",
    "q": "E-posta adresi alırken hangisi kullanılabilir?",
    "opts": [
     "ü harfi",
     "! işareti",
     "Boşluk",
     "Alt çizgi ( _ )",
     "ş harfi"
    ],
    "a": 3,
    "exp": "Nokta, tire ve alt çizgi dışında sembol ve Türkçe karakter kullanılmaz."
   },
   {
    "type": "mc",
    "topic": "internet",
    "q": "Bir web sitesinin sayfa, resim ve dokümanlarının internet kullanıcılarının erişebileceği bir bilgisayarda tutulmasına ne denir?",
    "opts": [
     "Upload",
     "Domain",
     "Protokol",
     "Hosting (barındırma)",
     "Download"
    ],
    "a": 3,
    "exp": "Hosting = barındırma; dosyaları tutan bilgisayar web sunucusudur."
   },
   {
    "type": "mc",
    "topic": "internet",
    "q": "Yazı, resim, ses, film gibi verilere etkileşimli olarak ulaşmayı sağlayan web sayfaları ağına ne denir?",
    "opts": [
     "WWW (World Wide Web)",
     "İSS",
     "DNS",
     "SMTP",
     "FTP"
    ],
    "a": 0,
    "exp": "WWW, Web ya da W3: web sayfaları ağı."
   },
   {
    "type": "mc",
    "topic": "tasarim",
    "q": "Aşağıdakilerden hangisi bir **back-end** (sunucu tarafı) dilidir?",
    "opts": [
     "PHP",
     "XML",
     "SVG",
     "CSS",
     "HTML"
    ],
    "a": 0,
    "exp": "Back-end: Node.js, Python, Ruby, PHP, Java, Go."
   },
   {
    "type": "mc",
    "topic": "tasarim",
    "q": "Aşağıdakilerden hangisi kullanılabilirliği **artırmaz**?",
    "opts": [
     "İçerik çoksa arama kutusu konması",
     "Sayfanın yavaş yüklenmesi",
     "İletişim formu bulunması",
     "Logodan ana sayfaya bağlantı verilmesi",
     "Menünün kolay görülen bir yerde olması"
    ],
    "a": 1,
    "exp": "Sayfalar hızlı yüklenmelidir."
   },
   {
    "type": "mc",
    "topic": "tasarim",
    "q": "Renk, yazı tipi, düzen ve animasyon gibi görsel özellikleri belirleyen teknoloji hangisidir?",
    "opts": [
     "API",
     "HTML",
     "SQL",
     "Python",
     "CSS"
    ],
    "a": 4,
    "exp": "CSS = Cascading Style Sheets, stil ve düzen."
   },
   {
    "type": "mc",
    "topic": "temel",
    "q": "`<body>` etiketinde **ziyaret edilmiş** bağlantıların rengini belirleyen parametre hangisidir?",
    "opts": [
     "`bgcolor`",
     "`text`",
     "`vlink`",
     "`link`",
     "`alink`"
    ],
    "a": 2,
    "exp": "vlink = visited link. alink tıklama anı, link normal bağlantı rengi."
   },
   {
    "type": "mc",
    "topic": "temel",
    "q": "`<body>` etiketinde bağlantıya **tıklandığı anda** oluşacak rengi belirleyen parametre hangisidir?",
    "opts": [
     "`vlink`",
     "`text`",
     "`background`",
     "`alink`",
     "`link`"
    ],
    "a": 3,
    "exp": "alink = active link."
   },
   {
    "type": "mc",
    "topic": "temel",
    "q": "Mobil uyum için kullanılan meta etiketi hangisidir?",
    "opts": [
     "`<meta name=\"author\" ...>`",
     "`<meta name=\"viewport\" ...>`",
     "`<meta name=\"keywords\" ...>`",
     "`<meta name=\"description\" ...>`",
     "`<meta charset=\"UTF-8\">`"
    ],
    "a": 1,
    "exp": "viewport mobil uyum, author yazar, keywords anahtar kelimeler, description açıklama."
   },
   {
    "type": "mc",
    "topic": "metin",
    "q": "Metni **altı çizili** yapan etiket hangisidir?",
    "opts": [
     "`<u>`",
     "`<em>`",
     "`<b>`",
     "`<s>`",
     "`<i>`"
    ],
    "a": 0,
    "exp": "u = underline. s üstü çizili, i italik, b kalın."
   },
   {
    "type": "mc",
    "topic": "metin",
    "q": "Bölünmeyen boşluk (art arda boşluk) için kullanılan özel karakter hangisidir?",
    "opts": [
     "`&amp;`",
     "`&reg;`",
     "`&lt;`",
     "`&nbsp;`",
     "`&copy;`"
    ],
    "a": 3,
    "exp": "HTML art arda boşlukları tek boşluk sayar; fazla boşluk için `&nbsp;`."
   },
   {
    "type": "mc",
    "topic": "metin",
    "q": "Sayfaya yatay çizgi çizen etiket hangisidir?",
    "opts": [
     "`<hr>`",
     "`<u>`",
     "`<br>`",
     "`<s>`",
     "`<line>`"
    ],
    "a": 0,
    "exp": "`<hr>` (horizontal rule); kapatılmaz."
   },
   {
    "type": "mc",
    "topic": "metin",
    "q": "`align=\"justify\"` ne yapar?",
    "opts": [
     "Metni sola yaslar",
     "Metni ortalar",
     "Metni sağa yaslar",
     "Metni kalın yapar",
     "Metni iki yana yaslar"
    ],
    "a": 4,
    "exp": "justify = iki yana yasla (sola ve sağa)."
   },
   {
    "type": "mc",
    "topic": "liste",
    "q": "`<ul>` için varsayılan (type yazılmazsa) madde imi hangisidir?",
    "opts": [
     "Kare (square)",
     "İçi boş daire (circle)",
     "İçi dolu daire (disc)",
     "Romen rakamı",
     "Rakam"
    ],
    "a": 2,
    "exp": "Varsayılan disc.",
    "code": "<ul><li>a</li></ul>"
   },
   {
    "type": "mc",
    "topic": "liste",
    "q": "Aşağıdaki listenin ikinci maddesi nasıl numaralanır?",
    "opts": [
     "B.",
     "b.",
     "2.",
     "II.",
     "ii."
    ],
    "a": 0,
    "exp": "`type=\"A\"` büyük harf: A, B, C.",
    "code": "<ol type=\"A\">\n  <li>Elma</li>\n  <li>Armut</li>\n</ol>",
    "prev": true,
    "h": 80
   },
   {
    "type": "mc",
    "topic": "liste",
    "q": "HTML'de **sıralı** (numaralı) liste hangi etiketle oluşturulur?",
    "opts": [
     "`<ol>`",
     "`<ul>`",
     "`<li>`",
     "`<dl>`",
     "`<dt>`"
    ],
    "a": 0,
    "exp": "ol = ordered list."
   },
   {
    "type": "mc",
    "topic": "resim",
    "q": "HTML dosyasının bulunduğu klasörde `resim` adlı alt klasördeki `papatya.gif` nasıl eklenir?",
    "opts": [
     "`<img src=\"../resim/papatya.gif\">`",
     "`<img src=\"resim/papatya.gif\">`",
     "`<img src=\"resim:papatya\">`",
     "`<img src=\"#resim\">`",
     "`<img src=\"papatya.gif/resim\">`"
    ],
    "a": 1,
    "exp": "Alt klasör: klasör adı / dosya adı."
   },
   {
    "type": "mc",
    "topic": "resim",
    "q": "`border=\"0\"` bir resim bağlantısında ne işe yarar?",
    "opts": [
     "Resmi siyah yapar",
     "Bağlantı çerçevesini tamamen kaldırır",
     "Resmi sola yaslar",
     "Bağlantıyı iptal eder",
     "Resmi gizler"
    ],
    "a": 1,
    "exp": "border bağlantı çerçevesinin kalınlığıdır; 0 çerçeveyi yok eder."
   },
   {
    "type": "mc",
    "topic": "resim",
    "q": "Sunuma göre sayfaya eklenecek resim hangi formatlarda olmalıdır?",
    "opts": [
     "gif ya da jpg",
     "html ya da htm",
     "mp3 ya da midi",
     "doc ya da xls",
     "zip ya da rar"
    ],
    "a": 0,
    "exp": "Slayt: \"gif yada jpg formatında olması zorunluluğu dışında kısıtlama yok\"."
   },
   {
    "type": "mc",
    "topic": "link",
    "q": "Bir resme bağlantı vermek için ne yapılır?",
    "opts": [
     "`<img>` etiketine `href` yazılır",
     "`<a>` etiketi `<img>` içine yazılır",
     "`<img link=\"...\">` kullanılır",
     "Resme bağlantı verilemez",
     "`<img>` etiketi `<a href>` ile `</a>` arasına yazılır"
    ],
    "a": 4,
    "exp": "`<a href=\"sayfa2.html\"><img src=\"...\"></a>`."
   },
   {
    "type": "mc",
    "topic": "link",
    "q": "`<a>` etiketinde bağlantının adresi hangi parametreye yazılır?",
    "opts": [
     "`src`",
     "`target`",
     "`name`",
     "`href`",
     "`alt`"
    ],
    "a": 3,
    "exp": "href = hypertext reference."
   },
   {
    "type": "mc",
    "topic": "link",
    "q": "`<a href=\"midi.zip\">` bağlantısına tıklanınca tarayıcı ne yapar?",
    "opts": [
     "Dosyayı açmak mı kaydetmek mi istediğini sorar",
     "E-posta gönderir",
     "Sayfayı kapatır",
     "Dosyayı tarayıcıda gösterir",
     "Hata verir"
    ],
    "a": 0,
    "exp": "Tarayıcı htm, txt, jpg, gif gösterebilir; zip, doc, xls, mp3 gösteremez, aç/kaydet sorar."
   },
   {
    "type": "mc",
    "topic": "link",
    "q": "HTML'de bağlantı (link) oluşturan etiket hangisidir?",
    "opts": [
     "`<url>`",
     "`<img>`",
     "`<href>`",
     "`<link>`",
     "`<a>`"
    ],
    "a": 4,
    "exp": "`<a href=\"...\">...</a>`. `<link>` head içinde dosya bağlamak içindir."
   },
   {
    "type": "mc",
    "topic": "css",
    "q": "Aşağıdaki kodda **ikinci** paragraf nasıl görünür?",
    "opts": [
     "Sağda ve siyah",
     "Solda ve kırmızı",
     "Ortada ve mavi",
     "Solda ve mavi",
     "Ortada ve kırmızı"
    ],
    "a": 3,
    "exp": "İkinci paragraf par2 sınıfını alır: sola yaslı, mavi.",
    "code": "<style>\n  .par1 { text-align: center; color: red; }\n  .par2 { text-align: left; color: blue; }\n</style>\n<p class=\"par1\">Bu paragraf</p>\n<p class=\"par2\">Bu paragraf</p>",
    "prev": true,
    "h": 90
   },
   {
    "type": "mc",
    "topic": "css",
    "q": "Bir paragrafa `vurgu` sınıfı atamanın doğru yazımı hangisidir?",
    "opts": [
     "`<p .vurgu>`",
     "`<p style=\"vurgu\">`",
     "`<p class=\"vurgu\">`",
     "`<p id=\".vurgu\">`",
     "`<p class=\".vurgu\">`"
    ],
    "a": 2,
    "exp": "HTML'de nokta yazılmaz; nokta sadece CSS'te."
   },
   {
    "type": "mc",
    "topic": "css",
    "q": "Yazıyı ortalayan CSS kodu hangisidir?",
    "opts": [
     "`align: center;`",
     "`text-decoration: center;`",
     "`center: text;`",
     "`font-style: center;`",
     "`text-align: center;`"
    ],
    "a": 4,
    "exp": "text-align: left, right, center, justify."
   },
   {
    "type": "mc",
    "topic": "tablo",
    "q": "Alt alta üç hücreyi (aynı sütunda) birleştirmek için hangi kod kullanılır?",
    "opts": [
     "`<td colspan=\"3\">`",
     "`<tr rowspan=\"3\">`",
     "`<td span=\"3\">`",
     "`<td rowspan=\"3\">`",
     "`<td valign=\"3\">`"
    ],
    "a": 3,
    "exp": "rowspan = satır birleştirme."
   },
   {
    "type": "mc",
    "topic": "tablo",
    "q": "`border=\"0\"` tabloda ne yapar?",
    "opts": [
     "Çerçevenin görünmemesini sağlar",
     "Hücre içi boşluğu sıfırlar",
     "Tabloyu siler",
     "Tabloyu sola yaslar",
     "Hücreleri birleştirir"
    ],
    "a": 0,
    "exp": "border çerçeve kalınlığıdır; 0 görünmez yapar."
   },
   {
    "type": "mc",
    "topic": "tablo",
    "q": "Hücre **içi** boşluğu (yazı ile hücre kenarı arası) ayarlayan parametre hangisidir?",
    "opts": [
     "`rules`",
     "`border`",
     "`cellspacing`",
     "`colspan`",
     "`cellpadding`"
    ],
    "a": 4,
    "exp": "cellpadding iç, cellspacing hücreler arası boşluk."
   },
   {
    "type": "open",
    "topic": "liste",
    "q": "Aşağıdaki görünümü veren kodu yazınız:\n1. En sevdiğim yaz meyveleri: (altında içi boş daireli Kayısı, Şeftali)\n2. En sevdiğim kış meyveleri: (altında içi boş daireli Portakal, Mandalina)",
    "model": "- Dış liste sıralı `<ol>`; her maddenin içine `<ul type=\"circle\">` alt liste.",
    "modelCode": "<ol>\n  <li>En sevdiğim yaz meyveleri:\n    <ul type=\"circle\">\n      <li>Kayısı</li>\n      <li>Şeftali</li>\n    </ul>\n  </li>\n  <li>En sevdiğim kış meyveleri:\n    <ul type=\"circle\">\n      <li>Portakal</li>\n      <li>Mandalina</li>\n    </ul>\n  </li>\n</ol>",
    "h": 170
   }
  ]
 },
 {
  "id": "deneme3",
  "title": "Deneme sınavı 3",
  "desc": "30 soru: 29 test + 1 klasik (kod yazma). 9 konunun hepsinden; diğer denemelerle ortak soru yok.",
  "featured": false,
  "questions": [
   {
    "type": "mc",
    "topic": "internet",
    "q": "Alan adı uzantılarından `gov` hangi kurumlar için kullanılır?",
    "opts": [
     "Devlet kurumları",
     "Ticari kuruluşlar",
     "Eğitim kurumları",
     "Ağ destek kurumları",
     "Askeri kurumlar"
    ],
    "a": 0,
    "exp": "gov devlet (tbmm.gov.tr), edu eğitim, com ticari, mil askeri, net ağ destek."
   },
   {
    "type": "mc",
    "topic": "internet",
    "q": "İnternetin ortaya çıkışını destekleyen kurum hangisidir?",
    "opts": [
     "IBM",
     "ABD Savunma Bakanlığı",
     "Birleşmiş Milletler",
     "Avrupa Birliği",
     "Microsoft"
    ],
    "a": 1,
    "exp": "İnternet, ABD Savunma Bakanlığı'nın yürüttüğü araştırmayla (ARPA) ortaya çıktı."
   },
   {
    "type": "mc",
    "topic": "internet",
    "q": "Bir URL hangi 3 bölümden oluşur?",
    "opts": [
     "Kullanıcı adı, şifre, alan adı",
     "Sunucu, istemci, tarayıcı",
     "Protokol, IP, e-posta",
     "Uzantı, ülke adı, dosya boyutu",
     "Protokol, alan adı, dizin yolu"
    ],
    "a": 4,
    "exp": "`http://` + `www.emyo.ankara.edu.tr` + `/ders1/bolum10.html`."
   },
   {
    "type": "mc",
    "topic": "tasarim",
    "q": "Hangisi bir **back-end** geliştirici görevidir?",
    "opts": [
     "Butonların yerini belirlemek",
     "Yazı tipini değiştirmek",
     "Menünün açılma animasyonunu yazmak",
     "Kullanıcı verilerini veri tabanında yönetmek",
     "Sayfanın renklerini seçmek"
    ],
    "a": 3,
    "exp": "Back-end: veri yönetimi, güvenlik, API, performans, arka plan işleri."
   },
   {
    "type": "mc",
    "topic": "tasarim",
    "q": "HTML için hangisi doğrudur?",
    "opts": [
     "Tarayıcıların yorumladığı metin tabanlı bir işaretleme dilidir",
     "Derlenerek çalışan bir programlama dilidir",
     "Görsel bir resim formatıdır",
     "Veri tabanı dilidir",
     "Sadece sunucuda çalışır"
    ],
    "a": 0,
    "exp": "HTML metin tabanlıdır, tarayıcı yorumlar; programlama dili değildir."
   },
   {
    "type": "mc",
    "topic": "tasarim",
    "q": "HTML'nin Türkçe karşılığı hangisidir?",
    "opts": [
     "Yüksek Seviyeli Programlama Dili",
     "Hiper Metin Programlama Dili",
     "Web Biçimlendirme Sistemi",
     "Hiper Metin İşaretleme Dili",
     "Hiper Metin Aktarım Protokolü"
    ],
    "a": 3,
    "exp": "Markup = işaretleme. HTML programlama dili değildir."
   },
   {
    "type": "mc",
    "topic": "temel",
    "q": "Aşağıdakilerden hangisi `<head>` etiketinin içinde yer **almaz**?",
    "opts": [
     "`<title>`",
     "`<meta>`",
     "`<h1>`",
     "`<script>`",
     "`<style>`"
    ],
    "a": 2,
    "exp": "`<head>` içinde: title, style, link, meta, script, noscript. `<h1>` gövdede görünen başlıktır."
   },
   {
    "type": "mc",
    "topic": "temel",
    "q": "Etiket parametreleri (ör. `align`) nereye yazılır?",
    "opts": [
     "Ayrı bir `.par` dosyasına",
     "Başlangıç etiketinin içine, değeri tırnak içinde",
     "`<head>` bölümüne",
     "Bitiş etiketinin içine",
     "Etiketlerin arasına, metinle birlikte"
    ],
    "a": 1,
    "exp": "Örnek: `<p align=\"center\">Merhaba Dünya</p>`."
   },
   {
    "type": "mc",
    "topic": "temel",
    "q": "Sayfada görüntülenmek istenen tüm bilgiler (metin, tablo, resim) hangi etiketin içine yazılır?",
    "opts": [
     "`<body>`",
     "`<style>`",
     "`<title>`",
     "`<meta>`",
     "`<head>`"
    ],
    "a": 0,
    "exp": "Görünen her şey `<body>` içindedir."
   },
   {
    "type": "mc",
    "topic": "metin",
    "q": "`<font>` etiketinde yazı tipini belirleyen parametre hangisidir?",
    "opts": [
     "`face`",
     "`type`",
     "`color`",
     "`size`",
     "`style`"
    ],
    "a": 0,
    "exp": "face yazı tipi, size boyut, color renk."
   },
   {
    "type": "mc",
    "topic": "metin",
    "q": "`&copy;` kodu sayfada hangi işareti gösterir?",
    "opts": [
     "\"",
     "&",
     "€",
     "®",
     "©"
    ],
    "a": 4,
    "exp": "&copy; telif hakkı, &reg; tescilli marka.",
    "code": "<p>&copy;</p>"
   },
   {
    "type": "mc",
    "topic": "metin",
    "q": "En **büyük** başlığı veren etiket hangisidir?",
    "opts": [
     "`<big>`",
     "`<h1>`",
     "`<h6>`",
     "`<head>`",
     "`<h3>`"
    ],
    "a": 1,
    "exp": "Sayı azaldıkça yazı büyür: h1 en büyük, h6 en küçük."
   },
   {
    "type": "mc",
    "topic": "metin",
    "q": "`<hr>` etiketinde çizginin **kalınlığını** belirleyen parametre hangisidir?",
    "opts": [
     "`color`",
     "`width`",
     "`align`",
     "`size`",
     "`height`"
    ],
    "a": 3,
    "exp": "size kalınlık, width uzunluk, align konum."
   },
   {
    "type": "mc",
    "topic": "liste",
    "q": "`<ul>` etiketinde maddelerin başına **içi boş daire** koyan `type` değeri hangisidir?",
    "opts": [
     "`circle`",
     "`round`",
     "`square`",
     "`a`",
     "`disc`"
    ],
    "a": 0,
    "exp": "disc içi dolu daire, circle içi boş daire, square içi dolu kare."
   },
   {
    "type": "mc",
    "topic": "liste",
    "q": "Tanımlama listesinde **açıklama** kısmı hangi etiketle yazılır?",
    "opts": [
     "`<dl>`",
     "`<dd>`",
     "`<li>`",
     "`<dt>`",
     "`<p>`"
    ],
    "a": 1,
    "exp": "dt = tanımlanan terim, dd = açıklama (içeriden başlar)."
   },
   {
    "type": "mc",
    "topic": "liste",
    "q": "Romen rakamıyla (i, ii, iii) numaralı liste için hangi kod kullanılır?",
    "opts": [
     "`<ol type=\"i\">`",
     "`<ol start=\"i\">`",
     "`<ol type=\"1\">`",
     "`<ul type=\"i\">`",
     "`<ol type=\"r\">`"
    ],
    "a": 0,
    "exp": "type: 1, a, A, i, I."
   },
   {
    "type": "mc",
    "topic": "resim",
    "q": "Aşağıdaki resim bulunamazsa sayfada ne yazar?",
    "opts": [
     "happy new year",
     "Yeni Yıl",
     "resim/2024_3.jpg",
     "500",
     "Hiçbir şey yazmaz"
    ],
    "a": 0,
    "exp": "Resim yüklenmezse `alt` metni görünür; `title` ise fare üstündeyken çıkar.",
    "code": "<img src=\"resim/2024_3.jpg\" alt=\"happy new year\" title=\"Yeni Yıl\" width=\"500\">"
   },
   {
    "type": "mc",
    "topic": "resim",
    "q": "HTML dosyası ile `papatya.gif` aynı klasörde ise doğru kod hangisidir?",
    "opts": [
     "`<img src=\"/resim/papatya.gif\">`",
     "`<img src=\"papatya.gif\">`",
     "`<img href=\"papatya.gif\">`",
     "`<img src=\"../papatya.gif\">`",
     "`<img alt=\"papatya.gif\">`"
    ],
    "a": 1,
    "exp": "Aynı klasörde sadece dosya adı yazılır."
   },
   {
    "type": "mc",
    "topic": "resim",
    "q": "HTML dosyası `c:\\html_ders\\sayfalarim\\deneme.htm`, resim `c:\\html_ders\\resim\\papatya.gif` ise `src` ne olmalıdır?",
    "opts": [
     "`../resim/papatya.gif`",
     "`sayfalarim/resim/papatya.gif`",
     "`../../papatya.gif`",
     "`resim/papatya.gif`",
     "`papatya.gif`"
    ],
    "a": 0,
    "exp": "Önce bir üst klasöre (`../`) çıkılır, sonra resim klasörüne girilir."
   },
   {
    "type": "mc",
    "topic": "link",
    "q": "`sayfa2.html` içindeki `web` adlı bölüme başka bir sayfadan bağlantı nasıl verilir?",
    "opts": [
     "`<a name=\"sayfa2.html#web\">`",
     "`<a href=\"sayfa2.html\" name=\"web\">`",
     "`<a href=\"web#sayfa2.html\">`",
     "`<a href=\"#sayfa2.html\">`",
     "`<a href=\"sayfa2.html#web\">`"
    ],
    "a": 4,
    "exp": "Önce sayfa, sonra # ve bölüm adı."
   },
   {
    "type": "mc",
    "topic": "link",
    "q": "Tıklanınca kullanıcının e-posta programını açan bağlantı hangisidir?",
    "opts": [
     "`<a mail=\"ali@mail.com\">`",
     "`<a href=\"ftp:ali@mail.com\">`",
     "`<a href=\"http://ali@mail.com\">`",
     "`<a href=\"mailto:ali@mail.com\">`",
     "`<a href=\"#ali@mail.com\">`"
    ],
    "a": 3,
    "exp": "mailto: e-posta programını açar ve \"kime\" kısmını doldurur."
   },
   {
    "type": "mc",
    "topic": "link",
    "q": "Sayfa içi bağlantıda gidilecek yeri işaretlemek için hangi kod kullanılır?",
    "opts": [
     "`<a href=\"web\">`",
     "`<a target=\"web\">`",
     "`<a name=\"web\">`",
     "`<a link=\"#web\">`",
     "`<a href=\"#web\">`"
    ],
    "a": 2,
    "exp": "İşaret `name` ile, bağlantı `href=\"#web\"` ile."
   },
   {
    "type": "mc",
    "topic": "link",
    "q": "Biçim verilmemiş bir bağlantı yazısı tarayıcıda varsayılan olarak nasıl görünür?",
    "opts": [
     "Gri ve küçük",
     "Kırmızı ve kalın",
     "Yeşil ve üstü çizili",
     "Mavi ve altı çizili",
     "Siyah ve italik"
    ],
    "a": 3,
    "exp": "Bağlantı mavi, altı çizili; imleç el şekline döner.",
    "code": "<a href=\"sayfa2.html\">Tıkla</a>"
   },
   {
    "type": "mc",
    "topic": "css",
    "q": "Arka plan rengini açık mavi yapan CSS kodu hangisidir?",
    "opts": [
     "`background-color: lightblue;`",
     "`bgcolor: lightblue;`",
     "`background = lightblue;`",
     "`text-align: lightblue;`",
     "`color: lightblue;`"
    ],
    "a": 0,
    "exp": "Özellik ve değer arasında iki nokta, sonda noktalı virgül."
   },
   {
    "type": "mc",
    "topic": "css",
    "q": "`text-shadow: 3px 2px red;` ne yapar?",
    "opts": [
     "Yazıyı kırmızı yapar",
     "Yazıya kırmızı gölge verir",
     "Kırmızı kenarlık ekler",
     "Arka planı kırmızı yapar",
     "Yazının altını kırmızı çizer"
    ],
    "a": 1,
    "exp": "text-shadow: yatay kayma, dikey kayma, renk."
   },
   {
    "type": "mc",
    "topic": "css",
    "q": "Aşağıdaki kuralda paragrafın yazı boyutu kaç pikseldir?",
    "opts": [
     "20px",
     "400px",
     "4px",
     "40px",
     "16px"
    ],
    "a": 3,
    "exp": "font-size yazı boyutu.",
    "code": "<style> p { font-size: 40px; font-style: italic; } </style>\n<p>Yazı</p>"
   },
   {
    "type": "mc",
    "topic": "tablo",
    "q": "Aşağıdaki tabloda kaç satır ve kaç hücre vardır?",
    "opts": [
     "2 satır, 4 hücre",
     "4 satır, 4 hücre",
     "1 satır, 4 hücre",
     "2 satır, 2 hücre",
     "4 satır, 2 hücre"
    ],
    "a": 0,
    "exp": "2 `<tr>`, her birinde 2 `<td>`.",
    "code": "<table border=\"1\">\n  <tr><td>hücre1</td><td>hücre2</td></tr>\n  <tr><td>hücre3</td><td>hücre4</td></tr>\n</table>",
    "prev": true,
    "h": 80
   },
   {
    "type": "mc",
    "topic": "tablo",
    "q": "`rules=\"cols\"` tabloda ne yapar?",
    "opts": [
     "Dikey iç kenarlıkları yok eder",
     "Yatay iç kenarlıkları yok eder; sadece sütun çizgileri kalır",
     "Sütunlara renk verir",
     "Sütunları birleştirir",
     "Tüm iç kenarlıkları yok eder"
    ],
    "a": 1,
    "exp": "cols: sütunlar arası (dikey) çizgiler kalır, yatay iç kenarlıklar gider. rows tersi, none hepsini kaldırır."
   },
   {
    "type": "mc",
    "topic": "tablo",
    "q": "Sütunları gruplayarak arka plan rengi vermek için hangi etiket kullanılır?",
    "opts": [
     "`<thead>`",
     "`<rowgroup>`",
     "`<tbody>`",
     "`<caption>`",
     "`<colgroup>`"
    ],
    "a": 4,
    "exp": "`<colgroup><col span=\"2\" style=\"background-color:red\"></colgroup>`."
   },
   {
    "type": "open",
    "topic": "css",
    "q": "Üç paragraf için `<style>` ile class tanımlayınız: 1. paragraf arka planı siyah, yazısı beyaz ve italik; 2. paragraf arka planı yeşil, yazı boyutu 50px ve altı çizili; 3. paragraf yazısı mavi, harf aralığı 10px ve sağa yaslı.",
    "model": "- Her paragrafa farklı sınıf (`par1`, `par2`, `par3`).\n- CSS'te sınıf nokta ile yazılır; `<style>` head içindedir.",
    "modelCode": "<html>\n<head>\n<style>\n  .par1 { background-color: black; color: white; font-style: italic; }\n  .par2 { background-color: green; font-size: 50px; text-decoration: underline; }\n  .par3 { color: blue; letter-spacing: 10px; text-align: right; }\n</style>\n</head>\n<body>\n<p class=\"par1\">Birinci paragraf</p>\n<p class=\"par2\">İkinci paragraf</p>\n<p class=\"par3\">Üçüncü paragraf</p>\n</body>\n</html>",
    "h": 200
   }
  ]
 },
 {
  "id": "deneme4",
  "title": "Deneme sınavı 4",
  "desc": "30 soru: 29 test + 1 klasik (kod yazma). 9 konunun hepsinden; diğer denemelerle ortak soru yok.",
  "featured": false,
  "questions": [
   {
    "type": "mc",
    "topic": "internet",
    "q": "Ev bilgisayarının web sitesi barındırmak için genelde uygun olmamasının sunumda belirtilen nedeni nedir?",
    "opts": [
     "Alan adı alamaması",
     "HTML'i açamaması",
     "İnternet bağlantısının upload hızının yetersiz olması",
     "Tarayıcısının olmaması",
     "E-posta gönderememesi"
    ],
    "a": 2,
    "exp": "Ev bağlantısının veri yükleme (upload) hızı yüzlerce kullanıcıya hizmet için yetersiz kalır."
   },
   {
    "type": "mc",
    "topic": "internet",
    "q": "Türkiye'nin internete bağlanmasını sağlayan ortak çalışmayı hangi kurumlar yapmıştır?",
    "opts": [
     "ODTÜ ve PTT",
     "Ankara Üniversitesi ve YÖK",
     "İTÜ ve TÜBİTAK",
     "Boğaziçi Üniversitesi ve Türk Telekom",
     "ODTÜ ve TÜBİTAK"
    ],
    "a": 4,
    "exp": "Orta Doğu Teknik Üniversitesi + TÜBİTAK, 12 Nisan 1993."
   },
   {
    "type": "mc",
    "topic": "internet",
    "q": "Tarayıcıya bir sitenin adresini yazınca sayfadaki metin ve resimlerin bilgisayara gelmesi hangi işlemdir?",
    "opts": [
     "Upload",
     "Download",
     "Barındırma",
     "Hosting",
     "Domain"
    ],
    "a": 1,
    "exp": "Sayfayı açmak, onu indirmek (download) demektir."
   },
   {
    "type": "mc",
    "topic": "tasarim",
    "q": "\"Bir alışveriş sitesinde her sayfadan Alışveriş Sepeti'ne bağlantı verilmeli\" ifadesi hangi ilkeyle ilgilidir?",
    "opts": [
     "İçeriğin belirlenmesi",
     "Hosting",
     "İşlevsellik",
     "Tarayıcı uyumluluğu",
     "Domain seçimi"
    ],
    "a": 2,
    "exp": "İşlevsellik: her sayfadan ana sayfaya ve ana bölümlere bağlantı."
   },
   {
    "type": "mc",
    "topic": "tasarim",
    "q": "MongoDB hangi tür veri tabanına örnektir?",
    "opts": [
     "HTML",
     "NoSQL",
     "Tablo tabanlı Excel",
     "Hiyerarşik",
     "SQL (ilişkisel)"
    ],
    "a": 1,
    "exp": "NoSQL: MongoDB, Cassandra. SQL: MySQL, PostgreSQL, MSSQL."
   },
   {
    "type": "mc",
    "topic": "tasarim",
    "q": "Web sayfasının yapısını ve içeriğini oluşturan front-end teknolojisi hangisidir?",
    "opts": [
     "JavaScript",
     "MySQL",
     "CSS",
     "HTML",
     "PHP"
    ],
    "a": 3,
    "exp": "HTML yapı, CSS stil, JavaScript etkileşim."
   },
   {
    "type": "mc",
    "topic": "temel",
    "q": "Her HTML belgesi hangi etiketle başlar ve biter?",
    "opts": [
     "`<page>` … `</page>`",
     "`<head>` … `</head>`",
     "`<title>` … `</title>`",
     "`<body>` … `</body>`",
     "`<html>` … `</html>`"
    ],
    "a": 4,
    "exp": "Tüm kodlar `<html>` ile `</html>` arasındadır."
   },
   {
    "type": "mc",
    "topic": "temel",
    "q": "WYSIWYG kısaltmasının anlamı hangisidir?",
    "opts": [
     "Kod yazmayı zorunlu kılan editör",
     "Web sitesi yayın sistemi",
     "Web sunucusu",
     "Ne görürsen onu alırsın",
     "Yeni sürüm tarayıcı"
    ],
    "a": 3,
    "exp": "What You See Is What You Get: görsel, kod gerektirmeyen editörler."
   },
   {
    "type": "mc",
    "topic": "temel",
    "q": "Aşağıdakilerden hangisinin **kapatma etiketi yoktur**?",
    "opts": [
     "`<b>`",
     "`<p>`",
     "`<body>`",
     "`<br>`",
     "`<title>`"
    ],
    "a": 3,
    "exp": "`<br>`, `<hr>`, `<img>` tek etikettir."
   },
   {
    "type": "mc",
    "topic": "metin",
    "q": "HTML'de `<` işaretini sayfada göstermek için ne yazılır?",
    "opts": [
     "`&nbsp;`",
     "`&quot;`",
     "`&gt;`",
     "`&amp;`",
     "`&lt;`"
    ],
    "a": 4,
    "exp": "lt = less than (küçüktür), gt = greater than."
   },
   {
    "type": "mc",
    "topic": "metin",
    "q": "Yazıyı kesip **bir satır boşluk bırakarak** yeni paragrafa geçen etiket hangisidir?",
    "opts": [
     "`<br>`",
     "`<p>`",
     "`<hr>`",
     "`<pre>`",
     "`<b>`"
    ],
    "a": 1,
    "exp": "`<p>` paragraf yapar ve araya boşluk koyar; `<br>` sadece alt satıra geçer."
   },
   {
    "type": "mc",
    "topic": "metin",
    "q": "Arasındaki metni boşluk ve satırlarıyla **aynen** yazan etiket hangisidir?",
    "opts": [
     "`<br>`",
     "`<font>`",
     "`<p>`",
     "`<pre>`",
     "`<center>`"
    ],
    "a": 3,
    "exp": "`<pre>` (preformatted)."
   },
   {
    "type": "mc",
    "topic": "metin",
    "q": "Metni **eğik (italik)** yapan etiket hangisidir?",
    "opts": [
     "`<hr>`",
     "`<u>`",
     "`<b>`",
     "`<i>`",
     "`<s>`"
    ],
    "a": 3,
    "exp": "`<i>` ve `<em>` italik."
   },
   {
    "type": "mc",
    "topic": "liste",
    "q": "Liste maddelerini belirten `<li>` etiketinin açılımı nedir?",
    "opts": [
     "Link item",
     "Long item",
     "Line item",
     "List item",
     "List index"
    ],
    "a": 3,
    "exp": "`<li>` = list item."
   },
   {
    "type": "mc",
    "topic": "liste",
    "q": "Aşağıdaki kodda kaç tane `<li>` maddesi **iç (alt) listede** yer alır?",
    "opts": [
     "4",
     "5",
     "2",
     "1",
     "3"
    ],
    "a": 2,
    "exp": "Dış listede 2 madde (Kimya, Fizik), Kimya'nın altında 2 madde (Organik, İnorganik).",
    "code": "<ol>\n  <li>Kimya\n    <ol type=\"a\">\n      <li>Organik</li>\n      <li>İnorganik</li>\n    </ol>\n  </li>\n  <li>Fizik</li>\n</ol>"
   },
   {
    "type": "mc",
    "topic": "liste",
    "q": "HTML'de **sırasız** (madde imli) liste hangi etiketle oluşturulur?",
    "opts": [
     "`<dd>`",
     "`<ul>`",
     "`<ol>`",
     "`<list>`",
     "`<dl>`"
    ],
    "a": 1,
    "exp": "ul = unordered list."
   },
   {
    "type": "mc",
    "topic": "resim",
    "q": "`<img>` etiketinde resmin yerini (yolunu) gösteren parametre hangisidir?",
    "opts": [
     "`src`",
     "`path`",
     "`alt`",
     "`href`",
     "`link`"
    ],
    "a": 0,
    "exp": "src = source. href bağlantı adresidir."
   },
   {
    "type": "mc",
    "topic": "resim",
    "q": "Resmi sayfanın sağına hizalamak için hangi kod kullanılır?",
    "opts": [
     "`<img src=\"a.gif\" float>`",
     "`<img src=\"a.gif\" align=\"right\">`",
     "`<img src=\"a.gif\" valign=\"right\">`",
     "`<img src=\"a.gif\" right>`",
     "`<img src=\"a.gif\" text=\"right\">`"
    ],
    "a": 1,
    "exp": "align: left, right, center."
   },
   {
    "type": "mc",
    "topic": "resim",
    "q": "Sayfanın arka planını resimle döşemek için hangi kod kullanılır?",
    "opts": [
     "`<body src=\"gokyuzu.jpg\">`",
     "`<img background=\"gokyuzu.jpg\">`",
     "`<head background=\"gokyuzu.jpg\">`",
     "`<body background=\"gokyuzu.jpg\">`",
     "`<body bgcolor=\"gokyuzu.jpg\">`"
    ],
    "a": 3,
    "exp": "background resim, bgcolor renk. Arka plan resmi için en/boy yazılmaz; tüm sayfayı kaplar."
   },
   {
    "type": "mc",
    "topic": "link",
    "q": "`<a href=\"papatya.gif\" download=\"cicek\">` kodunda `cicek` neyi belirler?",
    "opts": [
     "Resmin enini",
     "Açılacak pencereyi",
     "Resmin yerini",
     "İndirilecek dosyanın adını",
     "Bağlantı yazısını"
    ],
    "a": 3,
    "exp": "download değeri indirilen dosyanın adıdır."
   },
   {
    "type": "mc",
    "topic": "link",
    "q": "`<a href=\"meyve.gif\">` bağlantısına tıklanınca ne olur?",
    "opts": [
     "Sayfa yenilenir",
     "Resim e-postayla gönderilir",
     "Tarayıcı aynı klasördeki meyve.gif resmini açar",
     "Resim otomatik silinir",
     "Tarayıcı aç/kaydet diye sorar"
    ],
    "a": 2,
    "exp": "gif tarayıcının gösterebildiği bir dosyadır; dosya başka klasördeyse hata alınır."
   },
   {
    "type": "mc",
    "topic": "link",
    "q": "Bağlantının **yeni bir pencerede** açılması için hangi kod kullanılır?",
    "opts": [
     "`target=\"_self\"`",
     "`target=\"_top\"`",
     "`target=\"_new_page\"`",
     "`href=\"_blank\"`",
     "`target=\"_blank\"`"
    ],
    "a": 4,
    "exp": "_blank yeni pencere, _self aynı pencere."
   },
   {
    "type": "mc",
    "topic": "link",
    "q": "Bağlantıyı aynı pencerede **en üstten itibaren** açan target değeri hangisidir?",
    "opts": [
     "`_parent`",
     "`_top`",
     "`_up`",
     "`_blank`",
     "`_self`"
    ],
    "a": 1,
    "exp": "Slayt: _top bağlantı aynı pencere içerisinde en üstten itibaren açılır."
   },
   {
    "type": "mc",
    "topic": "css",
    "q": "`p {color: blue;}` ifadesinde `color` nedir?",
    "opts": [
     "Değer",
     "Özellik",
     "Seçici",
     "Etiket parametresi",
     "Sınıf"
    ],
    "a": 1,
    "exp": "p seçici, color özellik, blue değer."
   },
   {
    "type": "mc",
    "topic": "css",
    "q": "Aşağıdaki kodda paragrafın yazı rengi ne olur?",
    "opts": [
     "Siyah",
     "Gri",
     "Kırmızı",
     "Beyaz",
     "Mavi"
    ],
    "a": 4,
    "exp": "`p {color: blue;}` tüm paragrafları mavi yapar; h1 kırmızı, arka plan gri.",
    "code": "<style>\n  p {color: blue;}\n  h1 {color: red;}\n  body {background-color: gray;}\n</style>\n<h1>Başlık</h1>\n<p>Paragraf</p>",
    "prev": true,
    "h": 110
   },
   {
    "type": "mc",
    "topic": "css",
    "q": "Yazıyı **kalın** yapan CSS kodu hangisidir?",
    "opts": [
     "`font-style: bold;`",
     "`font-size: bold;`",
     "`font-family: bold;`",
     "`font-weight: bold;`",
     "`text-decoration: bold;`"
    ],
    "a": 3,
    "exp": "font-weight kalınlık, font-style italik."
   },
   {
    "type": "mc",
    "topic": "tablo",
    "q": "`valign` parametresi hangi değeri **alamaz**?",
    "opts": [
     "`middle`",
     "`center`",
     "`top`",
     "Hepsini alabilir",
     "`bottom`"
    ],
    "a": 1,
    "exp": "valign: top, middle, bottom. center align'ın değeridir."
   },
   {
    "type": "mc",
    "topic": "tablo",
    "q": "Hücre içindeki yazıyı **dikey** olarak hizalayan parametre hangisidir?",
    "opts": [
     "`align`",
     "`valign`",
     "`rules`",
     "`height`",
     "`rowspan`"
    ],
    "a": 1,
    "exp": "valign: top, middle, bottom. align yatay hizalama."
   },
   {
    "type": "mc",
    "topic": "tablo",
    "q": "Aşağıdaki tabloda 3. satırda neden sadece iki hücre (J ve L) yazılmıştır?",
    "opts": [
     "colspan=\"2\" kullanıldığı için",
     "Üst satırlardaki rowspan'li hücreler bu satıra da uzandığı için",
     "border=\"1\" olduğu için",
     "Tablo hatalı yazıldığı için",
     "cellpadding=\"12\" olduğu için"
    ],
    "a": 1,
    "exp": "C rowspan=\"3\", E rowspan=\"2\" olduğundan 3. satırda o sütunlar dolu; J ve L kalır.",
    "code": "<table border=\"1\" cellpadding=\"12\">\n  <tr><td>A</td><td>B</td><td rowspan=\"3\">C</td><td>D</td></tr>\n  <tr><td rowspan=\"2\">E</td><td>F</td><td>H</td></tr>\n  <tr><td>J</td><td>L</td></tr>\n</table>",
    "prev": true,
    "h": 170
   },
   {
    "type": "open",
    "topic": "link",
    "q": "Sayfanın başında 3 derslik bir menü (Web Tasarımı, Programlama, Sayısal Elektronik) olsun; her menü bağlantısı aynı sayfadaki ilgili paragrafa gitsin. Kodu yazınız.",
    "model": "- Paragraflardaki başlıklar `<a name=\"...\">` ile işaretlenir.\n- Menüde `<a href=\"#...\">` ile o işarete gidilir; `#` sadece href'te yazılır.",
    "modelCode": "<a href=\"#web\">1. Web Tasarımının Temelleri</a><br>\n<a href=\"#prog\">2. Programlamanın Temelleri</a><br>\n<a href=\"#say\">3. Sayısal Elektronik</a>\n\n<p><a name=\"web\"><b>1. Web Tasarımının Temelleri</b></a> Ders açıklaması...</p>\n<p><a name=\"prog\"><b>2. Programlamanın Temelleri</b></a> Ders açıklaması...</p>\n<p><a name=\"say\"><b>3. Sayısal Elektronik</b></a> Ders açıklaması...</p>",
    "h": 170
   }
  ]
 },
 {
  "id": "klasik",
  "title": "Klasik soru provası",
  "group": "ek",
  "mode": "practice",
  "desc": "21 klasik soru: kodu yaz, model cevapla karşılaştır, kendini puanla. Tarayıcı görünümü de var.",
  "questions": [
   {
    "type": "open",
    "topic": "internet",
    "q": "URL nedir? Hangi bölümlerden oluşur? Bir örnek adres üzerinde gösteriniz.",
    "model": "- URL (Uniform Resource Locator, standart kaynak bulucu): internetteki her belgenin kendine ait, tek adresidir.\n- 3 bölümü vardır: **protokol** (`http://`, `ftp://`), **alan adı** (`www.emyo.ankara.edu.tr`), **dizin yolu** (`/ders1/bolum10.html`).\n- Alan adında ayrıca **uzantı** (`edu`) ve **ülke adı** (`tr`) bulunur."
   },
   {
    "type": "open",
    "topic": "internet",
    "q": "Sunucu (server) ve istemci (client) kavramlarını açıklayınız; sunucu çeşitlerinden üç tane yazınız.",
    "model": "- **Sunucu**: bilgi istendiğinde cevap veren bilgisayar; e-posta, veri tabanı gibi bilgileri barındırır, güvenlik önlemi alınmış olmalıdır.\n- **İstemci**: sunucuya ulaşıp bilgiyi isteyen ve alan bilgisayar. Bir siteye giren kullanıcı istemcidir.\n- Çeşitler: web sunucusu, dosya paylaşım sunucusu, medya sunucusu, veri tabanı sunucusu, DNS (alan adı) sunucusu."
   },
   {
    "type": "open",
    "topic": "tasarim",
    "q": "Web tasarımında dikkat edilmesi gereken temel ilkeleri yazıp kısaca açıklayınız.",
    "model": "- **İçeriğin belirlenmesi**: en önemli unsur; sade, kullanıcının beklediği içerik.\n- **Tasarımın belirlenmesi**: logo, yazı, menü yerlerinin çizilmesi.\n- **İşlevsellik**: her sayfadan ana sayfaya ve önemli sayfalara bağlantı.\n- **Kullanılabilirlik**: okunur yazı, hızlı yükleme, görünür menü, iletişim, arama kutusu.\n- **Tarayıcılarla uyumluluk**: farklı tarayıcı ve çözünürlüklerde düzgün görünmesi (W3C standartları)."
   },
   {
    "type": "open",
    "topic": "tasarim",
    "q": "Front-end ve back-end kavramlarını karşılaştırınız; her biri için iki teknoloji örneği veriniz.",
    "model": "- **Front-end** (ön yüz): kullanıcının gördüğü ve etkileşimde bulunduğu kısım. Örnek: HTML, CSS, JavaScript.\n- **Back-end** (arka yüz): görünmeyen kısım; sunucu, veri tabanı, iş mantığı, güvenlik. Örnek: PHP, Python, Node.js, Java; MySQL, MongoDB.\n- İkisi arasındaki iletişimi **API** sağlar."
   },
   {
    "type": "open",
    "topic": "temel",
    "q": "Bir HTML belgesinin temel yapısını yazınız; `<html>`, `<head>`, `<title>` ve `<body>` etiketlerinin görevlerini açıklayınız.",
    "model": "- `<html>`: belgenin başı ve sonu; tüm kodlar arasında.\n- `<head>`: sayfa hakkındaki bilgiler (title, meta, style); sayfada görünmez.\n- `<title>`: tarayıcı sekmesindeki başlık; head içinde.\n- `<body>`: sayfada görünen her şey (metin, resim, tablo, bağlantı).",
    "modelCode": "<html>\n<head>\n<title>İlk Sayfamız</title>\n</head>\n<body>\nMerhaba Dünya....\n</body>\n</html>",
    "h": 70
   },
   {
    "type": "open",
    "topic": "temel",
    "q": "HTML etiket yazım kurallarından dördünü yazınız.",
    "model": "- Komutlar `< >` işaretleri arasına yazılır.\n- Büyük/küçük harfe duyarlı değildir.\n- Açılan etiket `/` ile kapatılır (`<br>`, `<hr>`, `<img>` hariç); iç içe etiketlerde ilk açılan en son kapanır.\n- Parametreler başlangıç etiketine, değerleri tırnak içine yazılır.\n- Dosya .htm ya da .html uzantısıyla kaydedilir."
   },
   {
    "type": "open",
    "topic": "metin",
    "q": "Aşağıdaki görünümü veren HTML kodunu yazınız: kırmızı arka planlı sayfada ortalanmış \"Metin Etiketleri Denemeleri\" başlığı önce `<h1>`, sonra `<h3>`, sonra `<h6>` boyutunda alt alta yazılacak.",
    "model": "- `<body bgcolor=\"red\">` arka planı kırmızı yapar.\n- Her başlık `align=\"center\"` ile ortalanır; h1 en büyük, h6 en küçük.",
    "modelCode": "<html>\n<head>\n<title>Anasayfa</title>\n</head>\n<body bgcolor=\"red\">\n<h1 align=\"center\">Metin Etiketleri Denemeleri</h1>\n<h3 align=\"center\">Metin Etiketleri Denemeleri</h3>\n<h6 align=\"center\">Metin Etiketleri Denemeleri</h6>\n</body>\n</html>",
    "h": 130
   },
   {
    "type": "open",
    "topic": "metin",
    "q": "\"Ey Türk Gençliği\" kalın yazılacak, altına iki satırlık metin `<br>` ile bölünerek yazılacak, en altta ortalanmış ve italik \"Mustafa Kemal Atatürk\" `<h5>` boyutunda olacak. Kodu yazınız.",
    "model": "- `<b>` kalın, `<br>` alt satır, `<h5 align=\"center\">` ortalı başlık, `<i>` italik.",
    "modelCode": "<html>\n<head>\n<title>Anasayfa</title>\n</head>\n<body>\n<b>Ey Türk Gençliği</b><br>\nBirinci vazifen, Türk istiklalini, Türk Cumhuriyetini<br>\nilelebet muhafaza ve müdafaa etmektir.\n<h5 align=\"center\"><i>Mustafa Kemal Atatürk</i></h5>\n</body>\n</html>",
    "h": 140
   },
   {
    "type": "open",
    "topic": "liste",
    "q": "Aşağıdaki görünümü veren kodu yazınız:\n1. En sevdiğim yaz meyveleri: (altında içi boş daireli Kayısı, Şeftali)\n2. En sevdiğim kış meyveleri: (altında içi boş daireli Portakal, Mandalina)",
    "model": "- Dış liste sıralı `<ol>`; her maddenin içine `<ul type=\"circle\">` alt liste.",
    "modelCode": "<ol>\n  <li>En sevdiğim yaz meyveleri:\n    <ul type=\"circle\">\n      <li>Kayısı</li>\n      <li>Şeftali</li>\n    </ul>\n  </li>\n  <li>En sevdiğim kış meyveleri:\n    <ul type=\"circle\">\n      <li>Portakal</li>\n      <li>Mandalina</li>\n    </ul>\n  </li>\n</ol>",
    "h": 170
   },
   {
    "type": "open",
    "topic": "liste",
    "q": "Tanımlama listesi ile \"En sevdiğim hayvanlar: Kediler ve kaplumbağalardır.\" ve \"En sevdiğim yemekler: Köfte ve pilav.\" maddelerini yazınız; terimler kırmızı olsun.",
    "model": "- `<dl>` içinde her terim `<dt>`, açıklaması `<dd>`. Kırmızı için `<font color=\"red\">`.",
    "modelCode": "<dl>\n  <dt><font color=\"red\">En sevdiğim hayvanlar</font></dt>\n  <dd>Kediler ve kaplumbağalardır.</dd>\n  <dt><font color=\"red\">En sevdiğim yemekler</font></dt>\n  <dd>Köfte ve pilav.</dd>\n</dl>",
    "h": 130
   },
   {
    "type": "open",
    "topic": "liste",
    "q": "HTML'deki üç liste türünü yazınız; her birinin etiketlerini ve kullanılabilecek `type` değerlerini belirtiniz.",
    "model": "- **Sıralı liste** `<ol>` + `<li>`: type `1`, `a`, `A`, `i`, `I`; `start` başlangıç.\n- **Sırasız liste** `<ul>` + `<li>`: type `disc` (dolu daire), `circle` (boş daire), `square` (kare).\n- **Tanımlama listesi** `<dl>`: `<dt>` terim, `<dd>` açıklama."
   },
   {
    "type": "open",
    "topic": "resim",
    "q": "Gökyüzü resmi (`gokyuzu.jpg`) sayfanın arka planı olacak, dünya resmi (`dunya.jpg`) ortada 300 piksel genişliğinde duracak; dünya resmi yüklenmezse \"Dünya\" yazacak. Kodu yazınız.",
    "model": "- Arka plan resmi `<body background>` ile.\n- Ortalamak için `<center>` (ya da `<p align=\"center\">`).\n- `alt=\"Dünya\"` resim yüklenmezse yazar.",
    "modelCode": "<html>\n<head>\n<title>Dünya</title>\n</head>\n<body background=\"gokyuzu.jpg\">\n<center>\n  <img src=\"dunya.jpg\" width=\"300\" alt=\"Dünya\" title=\"Dünya\">\n</center>\n</body>\n</html>",
    "h": 120
   },
   {
    "type": "open",
    "topic": "link",
    "q": "Sayfanın başında 3 derslik bir menü (Web Tasarımı, Programlama, Sayısal Elektronik) olsun; her menü bağlantısı aynı sayfadaki ilgili paragrafa gitsin. Kodu yazınız.",
    "model": "- Paragraflardaki başlıklar `<a name=\"...\">` ile işaretlenir.\n- Menüde `<a href=\"#...\">` ile o işarete gidilir; `#` sadece href'te yazılır.",
    "modelCode": "<a href=\"#web\">1. Web Tasarımının Temelleri</a><br>\n<a href=\"#prog\">2. Programlamanın Temelleri</a><br>\n<a href=\"#say\">3. Sayısal Elektronik</a>\n\n<p><a name=\"web\"><b>1. Web Tasarımının Temelleri</b></a> Ders açıklaması...</p>\n<p><a name=\"prog\"><b>2. Programlamanın Temelleri</b></a> Ders açıklaması...</p>\n<p><a name=\"say\"><b>3. Sayısal Elektronik</b></a> Ders açıklaması...</p>",
    "h": 170
   },
   {
    "type": "open",
    "topic": "link",
    "q": "`<a>` etiketiyle yapılabilecek bağlantı türlerini örnek kodlarla yazınız (en az dört).",
    "model": "- Web sitesi: `<a href=\"http://www.benimsitem.com/\">Siteye git</a>`\n- Başka sayfa / resim: `<a href=\"meyve.gif\">Resmi aç</a>`\n- İndirme: `<a href=\"papatya.gif\" download=\"cicek\">İndir</a>`\n- E-posta: `<a href=\"mailto:mymail@mail.com\">Mail at</a>`\n- FTP: `<a href=\"ftp://ftp.benimsitem.com/\">Dosyalar</a>`\n- Sayfa içi: `<a name=\"web\">` işaret, `<a href=\"#web\">` bağlantı\n- Resme bağlantı: `<a href=\"sayfa2.html\"><img src=\"papatya.gif\"></a>`"
   },
   {
    "type": "open",
    "topic": "css",
    "q": "Üç paragraf için `<style>` ile class tanımlayınız: 1. paragraf arka planı siyah, yazısı beyaz ve italik; 2. paragraf arka planı yeşil, yazı boyutu 50px ve altı çizili; 3. paragraf yazısı mavi, harf aralığı 10px ve sağa yaslı.",
    "model": "- Her paragrafa farklı sınıf (`par1`, `par2`, `par3`).\n- CSS'te sınıf nokta ile yazılır; `<style>` head içindedir.",
    "modelCode": "<html>\n<head>\n<style>\n  .par1 { background-color: black; color: white; font-style: italic; }\n  .par2 { background-color: green; font-size: 50px; text-decoration: underline; }\n  .par3 { color: blue; letter-spacing: 10px; text-align: right; }\n</style>\n</head>\n<body>\n<p class=\"par1\">Birinci paragraf</p>\n<p class=\"par2\">İkinci paragraf</p>\n<p class=\"par3\">Üçüncü paragraf</p>\n</body>\n</html>",
    "h": 200
   },
   {
    "type": "open",
    "topic": "css",
    "q": "`<style>` etiketini açıklayınız; etikete stil vermek ile class atamak arasındaki farkı örnekle yazınız.",
    "model": "- `<style>` HTML etiketlerinin nasıl görüneceğini tanımlar; head içine yazılır.\n- Etikete stil: `p { color: blue; }` sayfadaki **bütün** paragrafları etkiler.\n- Class: `.par1 { color: red; }` sadece `class=\"par1\"` verilen etiketleri etkiler; böylece aynı etiketler farklı görünebilir."
   },
   {
    "type": "open",
    "topic": "tablo",
    "q": "Kenarlığı yeşil, arka planı `#FFE7C1` olan 2 satır 3 sütunlu bir tablo yazınız: 1. satır Artvin, Rize, Trabzon; 2. satır Adana, Mersin, Hatay.",
    "model": "- `<table border=\"1\" bordercolor=\"green\" bgcolor=\"#FFE7C1\">`\n- 2 `<tr>`, her birinde 3 `<td>`.",
    "modelCode": "<table border=\"1\" bordercolor=\"green\" bgcolor=\"#FFE7C1\">\n  <tr>\n    <td>Artvin</td>\n    <td>Rize</td>\n    <td>Trabzon</td>\n  </tr>\n  <tr>\n    <td>Adana</td>\n    <td>Mersin</td>\n    <td>Hatay</td>\n  </tr>\n</table>",
    "h": 80
   },
   {
    "type": "open",
    "topic": "tablo",
    "q": "4 sütunlu, 3 satırlı tabloda: 1. satır A, B, C, D; 2. satırda E, F, G birleşik ve H; 3. satır I, J, K, L olacak. A ile B de birleşik olacak. Kodu yazınız.",
    "model": "- A–B birleşik: `<td colspan=\"2\">A</td>`, B yazılmaz.\n- E–F–G birleşik: `<td colspan=\"3\">E</td>`, F ve G yazılmaz.\n- `cellpadding=\"12\"` hücreleri genişletir.",
    "modelCode": "<table border=\"1\" cellpadding=\"12\">\n  <tr><td colspan=\"2\">A</td><td>C</td><td>D</td></tr>\n  <tr><td colspan=\"3\">E</td><td>H</td></tr>\n  <tr><td>I</td><td>J</td><td>K</td><td>L</td></tr>\n</table>",
    "h": 170
   },
   {
    "type": "open",
    "topic": "tablo",
    "q": "4 sütunlu, 3 satırlı tabloda: C, G ve K hücreleri alt alta birleşik; E ve I hücreleri alt alta birleşik. Diğer hücreler: A, B, D, F, H, J, L. Kodu yazınız.",
    "model": "- C: `<td rowspan=\"3\">`, G ve K yazılmaz.\n- E: `<td rowspan=\"2\">`, I yazılmaz.\n- 3. satırda sadece J ve L kalır.",
    "modelCode": "<table border=\"1\" cellpadding=\"12\">\n  <tr><td>A</td><td>B</td><td rowspan=\"3\">C</td><td>D</td></tr>\n  <tr><td rowspan=\"2\">E</td><td>F</td><td>H</td></tr>\n  <tr><td>J</td><td>L</td></tr>\n</table>",
    "h": 170
   },
   {
    "type": "open",
    "topic": "tablo",
    "q": "Hücre içi yatay hizalamayı gösteren tablo yazınız: genişliği 100 olan üç satırlık tabloda hücre1 sola, hücre2 ortaya, hücre3 sağa yaslansın.",
    "model": "- `<td>` etiketine `align=\"left\"`, `\"center\"`, `\"right\"`.",
    "modelCode": "<table border=\"1\" cellpadding=\"7\">\n  <tr><td width=\"100\" align=\"left\">hücre1</td></tr>\n  <tr><td width=\"100\" align=\"center\">hücre2</td></tr>\n  <tr><td width=\"100\" align=\"right\">hücre3</td></tr>\n</table>",
    "h": 130
   },
   {
    "type": "open",
    "topic": "tablo",
    "q": "`cellpadding` ile `cellspacing` arasındaki farkı ve `colspan` ile `rowspan` arasındaki farkı açıklayınız.",
    "model": "- **cellpadding**: hücre **içi** boşluk (yazı ile hücre kenarı arası). 0 ise yazı kenara bitişik.\n- **cellspacing**: hücre **dışı** boşluk (hücreler arası).\n- **colspan**: yan yana (aynı satırdaki) hücreleri birleştirir = sütun birleştirme.\n- **rowspan**: alt alta (aynı sütundaki) hücreleri birleştirir = satır birleştirme."
   }
  ]
 }
];
window.TOPIC_QUESTIONS = {
 "internet": [
  {
   "type": "mc",
   "topic": "internet",
   "q": "\"Internet\" kelimesi hangi ifadenin kısaltmasıdır?",
   "opts": [
    "International Network",
    "Interactive Network",
    "Internal Network",
    "Integrated Net",
    "Interior Network"
   ],
   "a": 0,
   "exp": "Internet = International Network (uluslararası ağ)."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "Türkiye internete ilk olarak hangi tarihte bağlanmıştır?",
   "opts": [
    "1 Ocak 1990",
    "23 Nisan 1996",
    "12 Nisan 1993",
    "29 Ekim 1983",
    "12 Nisan 1969"
   ],
   "a": 2,
   "exp": "ODTÜ ve TÜBİTAK'ın ortak çalışmasıyla 12 Nisan 1993."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "Türkiye'nin internete bağlanmasını sağlayan ortak çalışmayı hangi kurumlar yapmıştır?",
   "opts": [
    "ODTÜ ve PTT",
    "Ankara Üniversitesi ve YÖK",
    "İTÜ ve TÜBİTAK",
    "Boğaziçi Üniversitesi ve Türk Telekom",
    "ODTÜ ve TÜBİTAK"
   ],
   "a": 4,
   "exp": "Orta Doğu Teknik Üniversitesi + TÜBİTAK, 12 Nisan 1993."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "İnternetin temeli sayılan ağ ARPA hangi yıl kurulmuştur?",
   "opts": [
    "1983",
    "1969",
    "1993",
    "1965",
    "1962"
   ],
   "a": 1,
   "exp": "1962 MIT notları, 1965 Lawrence Roberts'ın bağlantısı, 1969 ARPA, 1983 dünya çapında yaygınlaşma."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "İnternetin ortaya çıkışını destekleyen kurum hangisidir?",
   "opts": [
    "IBM",
    "ABD Savunma Bakanlığı",
    "Birleşmiş Milletler",
    "Avrupa Birliği",
    "Microsoft"
   ],
   "a": 1,
   "exp": "İnternet, ABD Savunma Bakanlığı'nın yürüttüğü araştırmayla (ARPA) ortaya çıktı."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "Yazı, resim, ses, film gibi verilere etkileşimli olarak ulaşmayı sağlayan web sayfaları ağına ne denir?",
   "opts": [
    "WWW (World Wide Web)",
    "İSS",
    "DNS",
    "SMTP",
    "FTP"
   ],
   "a": 0,
   "exp": "WWW, Web ya da W3: web sayfaları ağı."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "E-posta sistemleri hangi protokole dayanır?",
   "opts": [
    "WWW",
    "FTP",
    "SMTP",
    "URL",
    "HTML"
   ],
   "a": 2,
   "exp": "SMTP: Simple Mail Transfer Protocol."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "Bir web sitesine kendi fotoğrafını yüklemek hangi işleme örnektir?",
   "opts": [
    "Domain",
    "Upload",
    "Download",
    "Hosting",
    "Browser"
   ],
   "a": 1,
   "exp": "Upload: kendi bilgisayarındaki veriyi başka bilgisayara yüklemek. Download indirmektir."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "Tarayıcıya bir sitenin adresini yazınca sayfadaki metin ve resimlerin bilgisayara gelmesi hangi işlemdir?",
   "opts": [
    "Upload",
    "Download",
    "Barındırma",
    "Hosting",
    "Domain"
   ],
   "a": 1,
   "exp": "Sayfayı açmak, onu indirmek (download) demektir."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "İnternet ortamında bilgi istendiğinde **cevap veren** bilgisayara ne denir?",
   "opts": [
    "Tarayıcı",
    "Sunucu (server)",
    "İstemci (client)",
    "Modem",
    "Alan adı"
   ],
   "a": 1,
   "exp": "Sunucu cevap verir, istemci bilgiyi ister."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "Bir web sitesinin sayfa, resim ve dokümanlarının internet kullanıcılarının erişebileceği bir bilgisayarda tutulmasına ne denir?",
   "opts": [
    "Upload",
    "Domain",
    "Protokol",
    "Hosting (barındırma)",
    "Download"
   ],
   "a": 3,
   "exp": "Hosting = barındırma; dosyaları tutan bilgisayar web sunucusudur."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "Ev bilgisayarının web sitesi barındırmak için genelde uygun olmamasının sunumda belirtilen nedeni nedir?",
   "opts": [
    "Alan adı alamaması",
    "HTML'i açamaması",
    "İnternet bağlantısının upload hızının yetersiz olması",
    "Tarayıcısının olmaması",
    "E-posta gönderememesi"
   ],
   "a": 2,
   "exp": "Ev bağlantısının veri yükleme (upload) hızı yüzlerce kullanıcıya hizmet için yetersiz kalır."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "Alan adı (domain name) için hangisi doğrudur?",
   "opts": [
    "E-posta gönderme protokolüdür",
    "Sitenin dosyalarının saklandığı bilgisayardır",
    "IP adresinin akılda kalması için kelimelerle ifade edilmiş hâlidir",
    "Tarayıcının adıdır",
    "Bir kez alınan alan adı herkes tarafından tekrar alınabilir"
   ],
   "a": 2,
   "exp": "Alan adı IP adresinin kelimeli hâlidir; alınmış alan adı tekrar alınamaz."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "Adres çubuğuna `www.google.com` yazıldığında tarayıcı önce ne yapar?",
   "opts": [
    "Sayfayı sunucuya yükler",
    "Dosyayı FTP ile siler",
    "E-posta gönderir",
    "Alan adını satın alır",
    "Alan adını IP adresine çevirir"
   ],
   "a": 4,
   "exp": "Tarayıcı alan adını (DNS ile) IP adresine çevirir, sonra o IP'deki bilgisayara gider."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "URL'nin açılımı hangisidir?",
   "opts": [
    "Universal Real Link",
    "Uniform Reference Link",
    "Uniform Resource Locator",
    "User Resource Language",
    "Unique Remote Location"
   ],
   "a": 2,
   "exp": "URL = Uniform Resource Locator (standart kaynak bulucu)."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "Bir URL hangi 3 bölümden oluşur?",
   "opts": [
    "Kullanıcı adı, şifre, alan adı",
    "Sunucu, istemci, tarayıcı",
    "Protokol, IP, e-posta",
    "Uzantı, ülke adı, dosya boyutu",
    "Protokol, alan adı, dizin yolu"
   ],
   "a": 4,
   "exp": "`http://` + `www.emyo.ankara.edu.tr` + `/ders1/bolum10.html`."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "`http://www.emyo.ankara.edu.tr/ders1/bolum10.html` adresinde `/ders1/bolum10.html` kısmı neyi gösterir?",
   "opts": [
    "Protokolü",
    "Ülke adını",
    "IP adresini",
    "Dizin yolunu",
    "Alan adını"
   ],
   "a": 3,
   "exp": "Protokol `http://`, alan adı `www.emyo.ankara.edu.tr`, dizin yolu `/ders1/bolum10.html`."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "Alan adı uzantılarından `gov` hangi kurumlar için kullanılır?",
   "opts": [
    "Devlet kurumları",
    "Ticari kuruluşlar",
    "Eğitim kurumları",
    "Ağ destek kurumları",
    "Askeri kurumlar"
   ],
   "a": 0,
   "exp": "gov devlet (tbmm.gov.tr), edu eğitim, com ticari, mil askeri, net ağ destek."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "`www.tsk.mil.tr` adresindeki `mil` uzantısı neyi gösterir?",
   "opts": [
    "Askeri kurum",
    "Eğitim kurumu",
    "Devlet kurumu",
    "Genel amaçlı site",
    "Ticari kuruluş"
   ],
   "a": 0,
   "exp": "mil = askeri kurumlar."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "`ankara.edu.tr` adresindeki `tr` neyi belirtir?",
   "opts": [
    "Alan adı uzantısını",
    "Dizin yolunu",
    "Ülke adını",
    "Sunucu türünü",
    "Protokolü"
   ],
   "a": 2,
   "exp": "edu uzantı (eğitim), tr ülke adı (Türkiye)."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "E-posta adresi alırken hangisi kullanılabilir?",
   "opts": [
    "ü harfi",
    "! işareti",
    "Boşluk",
    "Alt çizgi ( _ )",
    "ş harfi"
   ],
   "a": 3,
   "exp": "Nokta, tire ve alt çizgi dışında sembol ve Türkçe karakter kullanılmaz."
  },
  {
   "type": "mc",
   "topic": "internet",
   "q": "Aşağıdakilerden hangisi sunucu çeşitlerinden biri **değildir**?",
   "opts": [
    "DNS sunucusu",
    "Veri tabanı sunucusu",
    "Medya sunucusu",
    "Web sunucusu",
    "İstemci sunucusu"
   ],
   "a": 4,
   "exp": "Sunucu çeşitleri: web, dosya paylaşım, medya, veri tabanı, DNS. İstemci, sunucunun karşı tarafıdır."
  },
  {
   "type": "match",
   "topic": "internet",
   "q": "Kavramları anlamlarıyla eşleştir.",
   "pairs": [
    [
     "Download",
     "İnternetten veri indirmek"
    ],
    [
     "Upload",
     "Bilgisayardaki veriyi başka bilgisayara yüklemek"
    ],
    [
     "Hosting",
     "Site dosyalarını sunucuda barındırmak"
    ],
    [
     "Domain name",
     "Sitenin internetteki adı"
    ],
    [
     "İstemci",
     "Bilgiyi isteyen bilgisayar"
    ]
   ],
   "exp": "Download indir, upload yükle; hosting barındırma, domain alan adı; istemci isteyen, sunucu cevap veren.",
   "choices": [
    "Sitenin internetteki adı",
    "İnternetten veri indirmek",
    "Bilgisayardaki veriyi başka bilgisayara yüklemek",
    "Site dosyalarını sunucuda barındırmak",
    "Bilgiyi isteyen bilgisayar"
   ]
  },
  {
   "type": "match",
   "topic": "internet",
   "q": "Alan adı uzantılarını eşleştir.",
   "pairs": [
    [
     "edu",
     "Eğitim kurumları"
    ],
    [
     "com",
     "Ticari kuruluşlar"
    ],
    [
     "gov",
     "Devlet kurumları"
    ],
    [
     "mil",
     "Askeri kurumlar"
    ],
    [
     "net",
     "Ağ destek kurumları"
    ]
   ],
   "exp": "Sunum 1'deki tablo: edu, com, gov, mil, net, gen.",
   "choices": [
    "Ağ destek kurumları",
    "Askeri kurumlar",
    "Ticari kuruluşlar",
    "Eğitim kurumları",
    "Devlet kurumları"
   ]
  },
  {
   "type": "open",
   "topic": "internet",
   "q": "URL nedir? Hangi bölümlerden oluşur? Bir örnek adres üzerinde gösteriniz.",
   "model": "- URL (Uniform Resource Locator, standart kaynak bulucu): internetteki her belgenin kendine ait, tek adresidir.\n- 3 bölümü vardır: **protokol** (`http://`, `ftp://`), **alan adı** (`www.emyo.ankara.edu.tr`), **dizin yolu** (`/ders1/bolum10.html`).\n- Alan adında ayrıca **uzantı** (`edu`) ve **ülke adı** (`tr`) bulunur."
  },
  {
   "type": "open",
   "topic": "internet",
   "q": "Sunucu (server) ve istemci (client) kavramlarını açıklayınız; sunucu çeşitlerinden üç tane yazınız.",
   "model": "- **Sunucu**: bilgi istendiğinde cevap veren bilgisayar; e-posta, veri tabanı gibi bilgileri barındırır, güvenlik önlemi alınmış olmalıdır.\n- **İstemci**: sunucuya ulaşıp bilgiyi isteyen ve alan bilgisayar. Bir siteye giren kullanıcı istemcidir.\n- Çeşitler: web sunucusu, dosya paylaşım sunucusu, medya sunucusu, veri tabanı sunucusu, DNS (alan adı) sunucusu."
  }
 ],
 "tasarim": [
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "HTML'nin açılımı hangisidir?",
   "opts": [
    "Hyperlink Text Making Language",
    "High Text Machine Language",
    "Home Tool Markup Language",
    "Hyper Transfer Markup Language",
    "Hyper Text Markup Language"
   ],
   "a": 4,
   "exp": "Hyper Text Markup Language = Hiper Metin İşaretleme Dili."
  },
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "HTML'nin Türkçe karşılığı hangisidir?",
   "opts": [
    "Yüksek Seviyeli Programlama Dili",
    "Hiper Metin Programlama Dili",
    "Web Biçimlendirme Sistemi",
    "Hiper Metin İşaretleme Dili",
    "Hiper Metin Aktarım Protokolü"
   ],
   "a": 3,
   "exp": "Markup = işaretleme. HTML programlama dili değildir."
  },
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "Bir HTML dosyasının tarayıcıda yorumlanabilmesi için uzantısı ne olmalıdır?",
   "opts": [
    ".doc",
    ".htm veya .html",
    ".txt",
    ".php",
    ".css"
   ],
   "a": 1,
   "exp": "HTML dosyaları .htm ya da .html ile kaydedilir."
  },
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "\"Hypertext\" ifadesinin anlamı hangisidir?",
   "opts": [
    "Çok büyük yazılmış metin",
    "Sadece resim içeren sayfa",
    "Bir şeylere bağ kuran kelimelere sahip sayfalar",
    "Şifrelenmiş metin",
    "Sunucuda çalışan program"
   ],
   "a": 2,
   "exp": "Hiper metin: bağlantılı metin."
  },
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "HTML için hangisi doğrudur?",
   "opts": [
    "Tarayıcıların yorumladığı metin tabanlı bir işaretleme dilidir",
    "Derlenerek çalışan bir programlama dilidir",
    "Görsel bir resim formatıdır",
    "Veri tabanı dilidir",
    "Sadece sunucuda çalışır"
   ],
   "a": 0,
   "exp": "HTML metin tabanlıdır, tarayıcı yorumlar; programlama dili değildir."
  },
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "Web sitesi planlamasında **ilk** adım hangisidir?",
   "opts": [
    "Ana sayfanın oluşturulması",
    "Web sitesinin amacının belirlenmesi",
    "Sayfa düzeninin belirlenmesi",
    "Bilgilerin yazılması",
    "İçeriğin düzenlenmesi"
   ],
   "a": 1,
   "exp": "Sıra: amaç → içerik kararı → içeriğin düzenlenmesi → sayfa düzeni → ana sayfa → bilgilerin yazılması."
  },
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "Sunuma göre web sitesi tasarlarken kullanılan **en önemli** şey hangisidir?",
   "opts": [
    "İçerik",
    "Yazı tipi",
    "Renk",
    "Logo",
    "Animasyon"
   ],
   "a": 0,
   "exp": "İçeriği iyi olan siteye her zaman ziyaretçi gelir; tasarımı güzel ama içeriği boş siteye gelmez."
  },
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "Web tasarımının temel ilkelerinden biri **değildir**?",
   "opts": [
    "Sitenin mutlaka animasyonlu olması",
    "İçeriğin belirlenmesi",
    "Kullanılabilirlik",
    "İşlevsellik",
    "Tarayıcılarla uyumluluk"
   ],
   "a": 0,
   "exp": "5 ilke: içerik, tasarım, işlevsellik, kullanılabilirlik, tarayıcı uyumu."
  },
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "\"Bir alışveriş sitesinde her sayfadan Alışveriş Sepeti'ne bağlantı verilmeli\" ifadesi hangi ilkeyle ilgilidir?",
   "opts": [
    "İçeriğin belirlenmesi",
    "Hosting",
    "İşlevsellik",
    "Tarayıcı uyumluluğu",
    "Domain seçimi"
   ],
   "a": 2,
   "exp": "İşlevsellik: her sayfadan ana sayfaya ve ana bölümlere bağlantı."
  },
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "Logo, yazı ve menülerin sayfada nerede duracağının kâğıda çizildiği aşama hangisidir?",
   "opts": [
    "İşlevsellik",
    "İçeriğin belirlenmesi",
    "Tasarımın belirlenmesi",
    "Hosting",
    "Tarayıcı uyumluluğu"
   ],
   "a": 2,
   "exp": "Tasarım aşaması: içeriğin nerede ve nasıl görüneceği planlanır."
  },
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "Aşağıdakilerden hangisi kullanılabilirliği **artırmaz**?",
   "opts": [
    "İçerik çoksa arama kutusu konması",
    "Sayfanın yavaş yüklenmesi",
    "İletişim formu bulunması",
    "Logodan ana sayfaya bağlantı verilmesi",
    "Menünün kolay görülen bir yerde olması"
   ],
   "a": 1,
   "exp": "Sayfalar hızlı yüklenmelidir."
  },
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "Tarayıcıların desteklemesi gereken minimum web standartlarını belirleyen kuruluş hangisidir?",
   "opts": [
    "İSS",
    "W3C (World Wide Web Consortium)",
    "ARPA",
    "ODTÜ",
    "TÜBİTAK"
   ],
   "a": 1,
   "exp": "W3C, www.w3c.org."
  },
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "Web sayfasının yapısını ve içeriğini oluşturan front-end teknolojisi hangisidir?",
   "opts": [
    "JavaScript",
    "MySQL",
    "CSS",
    "HTML",
    "PHP"
   ],
   "a": 3,
   "exp": "HTML yapı, CSS stil, JavaScript etkileşim."
  },
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "Renk, yazı tipi, düzen ve animasyon gibi görsel özellikleri belirleyen teknoloji hangisidir?",
   "opts": [
    "API",
    "HTML",
    "SQL",
    "Python",
    "CSS"
   ],
   "a": 4,
   "exp": "CSS = Cascading Style Sheets, stil ve düzen."
  },
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "Butona tıklanınca menü açılması gibi etkileşimleri sağlayan front-end teknolojisi hangisidir?",
   "opts": [
    "FTP",
    "HTML",
    "MySQL",
    "CSS",
    "JavaScript"
   ],
   "a": 4,
   "exp": "JavaScript sayfaya etkileşim ve dinamiklik katar."
  },
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "Aşağıdakilerden hangisi bir **back-end** (sunucu tarafı) dilidir?",
   "opts": [
    "PHP",
    "XML",
    "SVG",
    "CSS",
    "HTML"
   ],
   "a": 0,
   "exp": "Back-end: Node.js, Python, Ruby, PHP, Java, Go."
  },
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "MongoDB hangi tür veri tabanına örnektir?",
   "opts": [
    "HTML",
    "NoSQL",
    "Tablo tabanlı Excel",
    "Hiyerarşik",
    "SQL (ilişkisel)"
   ],
   "a": 1,
   "exp": "NoSQL: MongoDB, Cassandra. SQL: MySQL, PostgreSQL, MSSQL."
  },
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "Front-end ile back-end arasındaki iletişimi sağlayan yapıya ne denir?",
   "opts": [
    "WYSIWYG",
    "Hosting",
    "API",
    "CSS",
    "URL"
   ],
   "a": 2,
   "exp": "API (Application Programming Interface); RESTful ya da GraphQL."
  },
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "Sayfanın mobil cihazlara uyumlu olmasına ne ad verilir?",
   "opts": [
    "Download",
    "Back-end",
    "Hosting",
    "Responsive design",
    "Domain"
   ],
   "a": 3,
   "exp": "Responsive (duyarlı) tasarım bir front-end görevidir."
  },
  {
   "type": "mc",
   "topic": "tasarim",
   "q": "Hangisi bir **back-end** geliştirici görevidir?",
   "opts": [
    "Butonların yerini belirlemek",
    "Yazı tipini değiştirmek",
    "Menünün açılma animasyonunu yazmak",
    "Kullanıcı verilerini veri tabanında yönetmek",
    "Sayfanın renklerini seçmek"
   ],
   "a": 3,
   "exp": "Back-end: veri yönetimi, güvenlik, API, performans, arka plan işleri."
  },
  {
   "type": "match",
   "topic": "tasarim",
   "q": "Teknolojileri görevleriyle eşleştir.",
   "pairs": [
    [
     "HTML",
     "Sayfanın yapısı ve içeriği"
    ],
    [
     "CSS",
     "Renk, yazı tipi, düzen"
    ],
    [
     "JavaScript",
     "Etkileşim ve dinamiklik"
    ],
    [
     "MySQL",
     "İlişkisel veri tabanı"
    ],
    [
     "API",
     "Front-end ile back-end iletişimi"
    ]
   ],
   "exp": "HTML yapı, CSS stil, JS etkileşim; MySQL veri tabanı; API iletişim.",
   "choices": [
    "Front-end ile back-end iletişimi",
    "Etkileşim ve dinamiklik",
    "İlişkisel veri tabanı",
    "Renk, yazı tipi, düzen",
    "Sayfanın yapısı ve içeriği"
   ]
  },
  {
   "type": "open",
   "topic": "tasarim",
   "q": "Web tasarımında dikkat edilmesi gereken temel ilkeleri yazıp kısaca açıklayınız.",
   "model": "- **İçeriğin belirlenmesi**: en önemli unsur; sade, kullanıcının beklediği içerik.\n- **Tasarımın belirlenmesi**: logo, yazı, menü yerlerinin çizilmesi.\n- **İşlevsellik**: her sayfadan ana sayfaya ve önemli sayfalara bağlantı.\n- **Kullanılabilirlik**: okunur yazı, hızlı yükleme, görünür menü, iletişim, arama kutusu.\n- **Tarayıcılarla uyumluluk**: farklı tarayıcı ve çözünürlüklerde düzgün görünmesi (W3C standartları)."
  },
  {
   "type": "open",
   "topic": "tasarim",
   "q": "Front-end ve back-end kavramlarını karşılaştırınız; her biri için iki teknoloji örneği veriniz.",
   "model": "- **Front-end** (ön yüz): kullanıcının gördüğü ve etkileşimde bulunduğu kısım. Örnek: HTML, CSS, JavaScript.\n- **Back-end** (arka yüz): görünmeyen kısım; sunucu, veri tabanı, iş mantığı, güvenlik. Örnek: PHP, Python, Node.js, Java; MySQL, MongoDB.\n- İkisi arasındaki iletişimi **API** sağlar."
  }
 ],
 "temel": [
  {
   "type": "mc",
   "topic": "temel",
   "q": "Her HTML belgesi hangi etiketle başlar ve biter?",
   "opts": [
    "`<page>` … `</page>`",
    "`<head>` … `</head>`",
    "`<title>` … `</title>`",
    "`<body>` … `</body>`",
    "`<html>` … `</html>`"
   ],
   "a": 4,
   "exp": "Tüm kodlar `<html>` ile `</html>` arasındadır."
  },
  {
   "type": "mc",
   "topic": "temel",
   "q": "Bir HTML belgesinin iki ana kısmı hangileridir?",
   "opts": [
    "`<style>` ve `<script>`",
    "`<p>` ve `<br>`",
    "`<title>` ve `<meta>`",
    "`<head>` ve `<body>`",
    "`<html>` ve `<title>`"
   ],
   "a": 3,
   "exp": "Başlık bölümü head, gövde body."
  },
  {
   "type": "mc",
   "topic": "temel",
   "q": "Sayfanın **tarayıcı sekmesindeki** başlığını belirleyen etiket hangisidir?",
   "opts": [
    "`<head>`",
    "`<title>`",
    "`<h1>`",
    "`<meta>`",
    "`<caption>`"
   ],
   "a": 1,
   "exp": "`<title>` `<head>` içine yazılır; `<h1>` sayfanın içindeki başlıktır."
  },
  {
   "type": "mc",
   "topic": "temel",
   "q": "Aşağıdaki kod tarayıcıda açıldığında sekmede hangi yazı görünür?",
   "opts": [
    "Merhaba",
    "Sekmede yazı görünmez",
    "index.html",
    "Anasayfa",
    "Hoş geldiniz"
   ],
   "a": 3,
   "exp": "Sekme başlığı `<title>`'dan gelir: Anasayfa. `<h1>` sayfanın içinde görünür.",
   "code": "<html>\n<head><title>Anasayfa</title></head>\n<body><h1>Merhaba</h1> Hoş geldiniz</body>\n</html>"
  },
  {
   "type": "mc",
   "topic": "temel",
   "q": "Sayfada görüntülenmek istenen tüm bilgiler (metin, tablo, resim) hangi etiketin içine yazılır?",
   "opts": [
    "`<body>`",
    "`<style>`",
    "`<title>`",
    "`<meta>`",
    "`<head>`"
   ],
   "a": 0,
   "exp": "Görünen her şey `<body>` içindedir."
  },
  {
   "type": "mc",
   "topic": "temel",
   "q": "Aşağıdakilerden hangisi `<head>` etiketinin içinde yer **almaz**?",
   "opts": [
    "`<title>`",
    "`<meta>`",
    "`<h1>`",
    "`<script>`",
    "`<style>`"
   ],
   "a": 2,
   "exp": "`<head>` içinde: title, style, link, meta, script, noscript. `<h1>` gövdede görünen başlıktır."
  },
  {
   "type": "mc",
   "topic": "temel",
   "q": "HTML etiketleri için hangisi doğrudur?",
   "opts": [
    "Etiketler `( )` arasına yazılır",
    "Sadece büyük harfle yazılmalıdır",
    "Her etiket mutlaka `;` ile biter",
    "Büyük/küçük harfe duyarlı değildir; `<BODY>` ile `<body>` aynıdır",
    "Sadece küçük harfle yazılmalıdır"
   ],
   "a": 3,
   "exp": "HTML komutları büyük de küçük de yazılabilir; `< >` arasına yazılır."
  },
  {
   "type": "mc",
   "topic": "temel",
   "q": "Aşağıdaki iç içe etiket yazımlarından hangisi doğrudur?",
   "opts": [
    "`<b><u>metin</b>`",
    "`<b><u>metin</u></b>`",
    "`</b><u>metin<u></b>`",
    "`<u><b>metin</u></b>`",
    "`<b><u>metin</b></u>`"
   ],
   "a": 1,
   "exp": "İlk açılan en son kapatılır."
  },
  {
   "type": "mc",
   "topic": "temel",
   "q": "Etiket parametreleri (ör. `align`) nereye yazılır?",
   "opts": [
    "Ayrı bir `.par` dosyasına",
    "Başlangıç etiketinin içine, değeri tırnak içinde",
    "`<head>` bölümüne",
    "Bitiş etiketinin içine",
    "Etiketlerin arasına, metinle birlikte"
   ],
   "a": 1,
   "exp": "Örnek: `<p align=\"center\">Merhaba Dünya</p>`."
  },
  {
   "type": "mc",
   "topic": "temel",
   "q": "Aşağıdakilerden hangisinin **kapatma etiketi yoktur**?",
   "opts": [
    "`<b>`",
    "`<p>`",
    "`<body>`",
    "`<br>`",
    "`<title>`"
   ],
   "a": 3,
   "exp": "`<br>`, `<hr>`, `<img>` tek etikettir."
  },
  {
   "type": "mc",
   "topic": "temel",
   "q": "WYSIWYG kısaltmasının anlamı hangisidir?",
   "opts": [
    "Kod yazmayı zorunlu kılan editör",
    "Web sitesi yayın sistemi",
    "Web sunucusu",
    "Ne görürsen onu alırsın",
    "Yeni sürüm tarayıcı"
   ],
   "a": 3,
   "exp": "What You See Is What You Get: görsel, kod gerektirmeyen editörler."
  },
  {
   "type": "mc",
   "topic": "temel",
   "q": "Aşağıdakilerden hangisi **WYSIWYG** (görsel) editörlere örnektir?",
   "opts": [
    "HotDog",
    "Notepad",
    "Notepad++",
    "Dreamweaver",
    "HomeSite"
   ],
   "a": 3,
   "exp": "WYSIWYG: FrontPage, Dreamweaver, NetObjects Fusion. Metin tabanlı: HomeSite, HotDog, Notepad++."
  },
  {
   "type": "mc",
   "topic": "temel",
   "q": "Türkçe karakterlerin düzgün görünmesi için `<head>` içine hangi etiket eklenir?",
   "opts": [
    "`<meta charset=\"UTF-8\">`",
    "`<title lang=\"tr\">`",
    "`<font face=\"Türkçe\">`",
    "`<p align=\"tr\">`",
    "`<body text=\"tr\">`"
   ],
   "a": 0,
   "exp": "Karakter seti meta ile verilir: UTF-8, iso-8859-9 ya da windows-1254."
  },
  {
   "type": "mc",
   "topic": "temel",
   "q": "Mobil uyum için kullanılan meta etiketi hangisidir?",
   "opts": [
    "`<meta name=\"author\" ...>`",
    "`<meta name=\"viewport\" ...>`",
    "`<meta name=\"keywords\" ...>`",
    "`<meta name=\"description\" ...>`",
    "`<meta charset=\"UTF-8\">`"
   ],
   "a": 1,
   "exp": "viewport mobil uyum, author yazar, keywords anahtar kelimeler, description açıklama."
  },
  {
   "type": "mc",
   "topic": "temel",
   "q": "`<meta name=\"keywords\" ...>` ne için kullanılır?",
   "opts": [
    "Mobil uyum sağlamak",
    "Sayfanın anahtar kelimelerini belirtmek",
    "Sayfanın yazarını belirtmek",
    "Türkçe karakter sorununu çözmek",
    "Sayfanın arka plan rengini belirlemek"
   ],
   "a": 1,
   "exp": "keywords: arama motorlarına anahtar kelimeler."
  },
  {
   "type": "mc",
   "topic": "temel",
   "q": "`<body>` etiketinde **ziyaret edilmiş** bağlantıların rengini belirleyen parametre hangisidir?",
   "opts": [
    "`bgcolor`",
    "`text`",
    "`vlink`",
    "`link`",
    "`alink`"
   ],
   "a": 2,
   "exp": "vlink = visited link. alink tıklama anı, link normal bağlantı rengi."
  },
  {
   "type": "mc",
   "topic": "temel",
   "q": "`<body>` etiketinde bağlantıya **tıklandığı anda** oluşacak rengi belirleyen parametre hangisidir?",
   "opts": [
    "`vlink`",
    "`text`",
    "`background`",
    "`alink`",
    "`link`"
   ],
   "a": 3,
   "exp": "alink = active link."
  },
  {
   "type": "mc",
   "topic": "temel",
   "q": "Sayfanın arka planına resim koymak için `<body>` etiketinin hangi parametresi kullanılır?",
   "opts": [
    "`src`",
    "`img`",
    "`text`",
    "`bgcolor`",
    "`background`"
   ],
   "a": 4,
   "exp": "`<body background=\"logo.jpg\">`; bgcolor sadece renktir."
  },
  {
   "type": "mc",
   "topic": "temel",
   "q": "Aşağıdaki sayfada yazıların rengi ne olur?",
   "opts": [
    "Siyah",
    "Mavi",
    "Kırmızı",
    "Beyaz",
    "Turuncu"
   ],
   "a": 2,
   "exp": "`text` metin rengini, `bgcolor` arka plan rengini belirler.",
   "code": "<body bgcolor=\"orange\" text=\"red\">Merhaba</body>"
  },
  {
   "type": "fill",
   "topic": "temel",
   "q": "Sayfa başlığını (sekmedeki yazı) \"Web Dersi\" yapan kodu tamamla.",
   "code": "<html>\n<head>\n<____>Web Dersi</title>\n</head>\n<body>Merhaba</body>\n</html>",
   "ans": [
    "title"
   ],
   "cs": false,
   "exp": "Sekme başlığı `<title>` ile verilir ve `<head>` içindedir."
  },
  {
   "type": "fill",
   "topic": "temel",
   "q": "Sayfanın arka plan rengini gri yapan `<body>` parametresini yaz.",
   "code": "<body ____=\"gray\">Merhaba</body>",
   "ans": [
    "bgcolor"
   ],
   "cs": false,
   "exp": "`bgcolor` arka plan rengi; `background` arka plan resmi."
  },
  {
   "type": "match",
   "topic": "temel",
   "q": "`<body>` parametrelerini eşleştir.",
   "pairs": [
    [
     "bgcolor",
     "Arka plan rengi"
    ],
    [
     "background",
     "Arka plan resmi"
    ],
    [
     "text",
     "Metin rengi"
    ],
    [
     "vlink",
     "Ziyaret edilmiş bağlantı rengi"
    ],
    [
     "alink",
     "Tıklama anındaki bağlantı rengi"
    ]
   ],
   "exp": "link normal bağlantı, vlink ziyaret edilmiş, alink aktif (tıklama anı).",
   "choices": [
    "Ziyaret edilmiş bağlantı rengi",
    "Arka plan resmi",
    "Arka plan rengi",
    "Tıklama anındaki bağlantı rengi",
    "Metin rengi"
   ]
  },
  {
   "type": "open",
   "topic": "temel",
   "q": "Bir HTML belgesinin temel yapısını yazınız; `<html>`, `<head>`, `<title>` ve `<body>` etiketlerinin görevlerini açıklayınız.",
   "model": "- `<html>`: belgenin başı ve sonu; tüm kodlar arasında.\n- `<head>`: sayfa hakkındaki bilgiler (title, meta, style); sayfada görünmez.\n- `<title>`: tarayıcı sekmesindeki başlık; head içinde.\n- `<body>`: sayfada görünen her şey (metin, resim, tablo, bağlantı).",
   "modelCode": "<html>\n<head>\n<title>İlk Sayfamız</title>\n</head>\n<body>\nMerhaba Dünya....\n</body>\n</html>",
   "h": 70
  },
  {
   "type": "open",
   "topic": "temel",
   "q": "HTML etiket yazım kurallarından dördünü yazınız.",
   "model": "- Komutlar `< >` işaretleri arasına yazılır.\n- Büyük/küçük harfe duyarlı değildir.\n- Açılan etiket `/` ile kapatılır (`<br>`, `<hr>`, `<img>` hariç); iç içe etiketlerde ilk açılan en son kapanır.\n- Parametreler başlangıç etiketine, değerleri tırnak içine yazılır.\n- Dosya .htm ya da .html uzantısıyla kaydedilir."
  }
 ],
 "metin": [
  {
   "type": "mc",
   "topic": "metin",
   "q": "En **büyük** başlığı veren etiket hangisidir?",
   "opts": [
    "`<big>`",
    "`<h1>`",
    "`<h6>`",
    "`<head>`",
    "`<h3>`"
   ],
   "a": 1,
   "exp": "Sayı azaldıkça yazı büyür: h1 en büyük, h6 en küçük."
  },
  {
   "type": "mc",
   "topic": "metin",
   "q": "En **küçük** başlığı veren etiket hangisidir?",
   "opts": [
    "`<h1>`",
    "`<h6>`",
    "`<h7>`",
    "`<small1>`",
    "`<h0>`"
   ],
   "a": 1,
   "exp": "Başlık etiketleri h1 ile h6 arasındadır."
  },
  {
   "type": "mc",
   "topic": "metin",
   "q": "Aşağıdaki iki başlıktan hangisi daha büyük görünür?",
   "opts": [
    "Birinci (`<h2>`) daha büyük",
    "Boyut tarayıcıya göre rastgele değişir",
    "Hiçbiri görünmez",
    "İkisi aynı boyuttadır",
    "İkinci (`<h4>`) daha büyük"
   ],
   "a": 0,
   "exp": "h2 > h4. Sayı azaldıkça büyür.",
   "code": "<h2>Birinci</h2>\n<h4>İkinci</h4>",
   "prev": true,
   "h": 100
  },
  {
   "type": "mc",
   "topic": "metin",
   "q": "`<h1>` ile `<p>` etiketlerinde kullanılan `align` parametresi hangi değeri **alamaz**?",
   "opts": [
    "`justify`",
    "`middle`",
    "`center`",
    "`right`",
    "`left`"
   ],
   "a": 1,
   "exp": "align: left, right, center, justify. `middle` tablo hücresinde valign değeridir."
  },
  {
   "type": "mc",
   "topic": "metin",
   "q": "`align=\"justify\"` ne yapar?",
   "opts": [
    "Metni sola yaslar",
    "Metni ortalar",
    "Metni sağa yaslar",
    "Metni kalın yapar",
    "Metni iki yana yaslar"
   ],
   "a": 4,
   "exp": "justify = iki yana yasla (sola ve sağa)."
  },
  {
   "type": "mc",
   "topic": "metin",
   "q": "Yazıyı kesip **bir satır boşluk bırakarak** yeni paragrafa geçen etiket hangisidir?",
   "opts": [
    "`<br>`",
    "`<p>`",
    "`<hr>`",
    "`<pre>`",
    "`<b>`"
   ],
   "a": 1,
   "exp": "`<p>` paragraf yapar ve araya boşluk koyar; `<br>` sadece alt satıra geçer."
  },
  {
   "type": "mc",
   "topic": "metin",
   "q": "Enter tuşu görevini görüp alt satıra geçen ve **kapatılmayan** etiket hangisidir?",
   "opts": [
    "`<u>`",
    "`<br>`",
    "`<p>`",
    "`<h1>`",
    "`<hr>`"
   ],
   "a": 1,
   "exp": "`<br>` = break."
  },
  {
   "type": "mc",
   "topic": "metin",
   "q": "Sayfaya yatay çizgi çizen etiket hangisidir?",
   "opts": [
    "`<hr>`",
    "`<u>`",
    "`<br>`",
    "`<s>`",
    "`<line>`"
   ],
   "a": 0,
   "exp": "`<hr>` (horizontal rule); kapatılmaz."
  },
  {
   "type": "mc",
   "topic": "metin",
   "q": "`<hr>` etiketinde çizginin **kalınlığını** belirleyen parametre hangisidir?",
   "opts": [
    "`color`",
    "`width`",
    "`align`",
    "`size`",
    "`height`"
   ],
   "a": 3,
   "exp": "size kalınlık, width uzunluk, align konum."
  },
  {
   "type": "mc",
   "topic": "metin",
   "q": "`<hr size=\"6\" width=\"200\" align=\"center\">` kodunda `width=\"200\"` neyi belirler?",
   "opts": [
    "Çizgi ile yazı arasındaki boşluğu",
    "Çizginin rengini",
    "Çizginin kalınlığını",
    "Çizginin uzunluğunu",
    "Çizginin konumunu"
   ],
   "a": 3,
   "exp": "width çizginin sayfadaki uzunluğu."
  },
  {
   "type": "mc",
   "topic": "metin",
   "q": "Metni **altı çizili** yapan etiket hangisidir?",
   "opts": [
    "`<u>`",
    "`<em>`",
    "`<b>`",
    "`<s>`",
    "`<i>`"
   ],
   "a": 0,
   "exp": "u = underline. s üstü çizili, i italik, b kalın."
  },
  {
   "type": "mc",
   "topic": "metin",
   "q": "Metni **eğik (italik)** yapan etiket hangisidir?",
   "opts": [
    "`<hr>`",
    "`<u>`",
    "`<b>`",
    "`<i>`",
    "`<s>`"
   ],
   "a": 3,
   "exp": "`<i>` ve `<em>` italik."
  },
  {
   "type": "mc",
   "topic": "metin",
   "q": "Aşağıdakilerden hangisi metni **kalın** yazar?",
   "opts": [
    "`<u>`",
    "`<em>`",
    "`<s>`",
    "`<strong>`",
    "`<pre>`"
   ],
   "a": 3,
   "exp": "`<b>` ve `<strong>` kalın, `<em>` italik."
  },
  {
   "type": "mc",
   "topic": "metin",
   "q": "Arasındaki metni boşluk ve satırlarıyla **aynen** yazan etiket hangisidir?",
   "opts": [
    "`<br>`",
    "`<font>`",
    "`<p>`",
    "`<pre>`",
    "`<center>`"
   ],
   "a": 3,
   "exp": "`<pre>` (preformatted)."
  },
  {
   "type": "mc",
   "topic": "metin",
   "q": "`<font>` etiketinin `size` parametresi hangi aralıkta değer alır?",
   "opts": [
    "8–72",
    "1–6",
    "1–7",
    "1–100",
    "0–10"
   ],
   "a": 2,
   "exp": "Slayt: yazının boyu 1-7 arası değer."
  },
  {
   "type": "mc",
   "topic": "metin",
   "q": "`<font>` etiketinde yazı tipini belirleyen parametre hangisidir?",
   "opts": [
    "`face`",
    "`type`",
    "`color`",
    "`size`",
    "`style`"
   ],
   "a": 0,
   "exp": "face yazı tipi, size boyut, color renk."
  },
  {
   "type": "mc",
   "topic": "metin",
   "q": "`<basefont>` etiketi için hangisi doğrudur?",
   "opts": [
    "Sayfa başlığını (sekme) belirler",
    "Sadece başlıkları etkiler",
    "Sayfanın ana yazı tipini belirler ama `<h>` başlıklarını etkilemez",
    "Kapatılması yasaktır",
    "Tablo kenarlığını belirler"
   ],
   "a": 2,
   "exp": "Slayt: basefont h'leri etkilemez."
  },
  {
   "type": "mc",
   "topic": "metin",
   "q": "HTML'de `<` işaretini sayfada göstermek için ne yazılır?",
   "opts": [
    "`&nbsp;`",
    "`&quot;`",
    "`&gt;`",
    "`&amp;`",
    "`&lt;`"
   ],
   "a": 4,
   "exp": "lt = less than (küçüktür), gt = greater than."
  },
  {
   "type": "mc",
   "topic": "metin",
   "q": "Bölünmeyen boşluk (art arda boşluk) için kullanılan özel karakter hangisidir?",
   "opts": [
    "`&amp;`",
    "`&reg;`",
    "`&lt;`",
    "`&nbsp;`",
    "`&copy;`"
   ],
   "a": 3,
   "exp": "HTML art arda boşlukları tek boşluk sayar; fazla boşluk için `&nbsp;`."
  },
  {
   "type": "mc",
   "topic": "metin",
   "q": "`&copy;` kodu sayfada hangi işareti gösterir?",
   "opts": [
    "\"",
    "&",
    "€",
    "®",
    "©"
   ],
   "a": 4,
   "exp": "&copy; telif hakkı, &reg; tescilli marka.",
   "code": "<p>&copy;</p>"
  },
  {
   "type": "fill",
   "topic": "metin",
   "q": "Metni ortalanmış bir 1. düzey başlık yapan kodu tamamla.",
   "code": "<h1 ____=\"center\">Metin Etiketleri</h1>",
   "ans": [
    "align"
   ],
   "cs": false,
   "exp": "`align` parametresi left, right, center, justify değerlerini alır."
  },
  {
   "type": "fill",
   "topic": "metin",
   "q": "Kırmızı renkli, 5 boyutunda yazı için boşluğu doldur.",
   "code": "<font size=\"5\" ____=\"red\">Merhaba</font>",
   "ans": [
    "color"
   ],
   "cs": false,
   "exp": "`<font>`: size, color, face."
  },
  {
   "type": "match",
   "topic": "metin",
   "q": "Etiketleri işlevleriyle eşleştir.",
   "pairs": [
    [
     "<b>",
     "Kalın yazı"
    ],
    [
     "<i>",
     "Eğik (italik) yazı"
    ],
    [
     "<u>",
     "Altı çizili yazı"
    ],
    [
     "<br>",
     "Alt satıra geçme"
    ],
    [
     "<hr>",
     "Yatay çizgi"
    ]
   ],
   "exp": "`<s>` üstü çizili, `<p>` paragraf, `<pre>` aynen yazma.",
   "choices": [
    "Altı çizili yazı",
    "Kalın yazı",
    "Alt satıra geçme",
    "Eğik (italik) yazı",
    "Yatay çizgi"
   ]
  },
  {
   "type": "open",
   "topic": "metin",
   "q": "Aşağıdaki görünümü veren HTML kodunu yazınız: kırmızı arka planlı sayfada ortalanmış \"Metin Etiketleri Denemeleri\" başlığı önce `<h1>`, sonra `<h3>`, sonra `<h6>` boyutunda alt alta yazılacak.",
   "model": "- `<body bgcolor=\"red\">` arka planı kırmızı yapar.\n- Her başlık `align=\"center\"` ile ortalanır; h1 en büyük, h6 en küçük.",
   "modelCode": "<html>\n<head>\n<title>Anasayfa</title>\n</head>\n<body bgcolor=\"red\">\n<h1 align=\"center\">Metin Etiketleri Denemeleri</h1>\n<h3 align=\"center\">Metin Etiketleri Denemeleri</h3>\n<h6 align=\"center\">Metin Etiketleri Denemeleri</h6>\n</body>\n</html>",
   "h": 130
  },
  {
   "type": "open",
   "topic": "metin",
   "q": "\"Ey Türk Gençliği\" kalın yazılacak, altına iki satırlık metin `<br>` ile bölünerek yazılacak, en altta ortalanmış ve italik \"Mustafa Kemal Atatürk\" `<h5>` boyutunda olacak. Kodu yazınız.",
   "model": "- `<b>` kalın, `<br>` alt satır, `<h5 align=\"center\">` ortalı başlık, `<i>` italik.",
   "modelCode": "<html>\n<head>\n<title>Anasayfa</title>\n</head>\n<body>\n<b>Ey Türk Gençliği</b><br>\nBirinci vazifen, Türk istiklalini, Türk Cumhuriyetini<br>\nilelebet muhafaza ve müdafaa etmektir.\n<h5 align=\"center\"><i>Mustafa Kemal Atatürk</i></h5>\n</body>\n</html>",
   "h": 140
  }
 ],
 "liste": [
  {
   "type": "mc",
   "topic": "liste",
   "q": "HTML'de **sıralı** (numaralı) liste hangi etiketle oluşturulur?",
   "opts": [
    "`<ol>`",
    "`<ul>`",
    "`<li>`",
    "`<dl>`",
    "`<dt>`"
   ],
   "a": 0,
   "exp": "ol = ordered list."
  },
  {
   "type": "mc",
   "topic": "liste",
   "q": "HTML'de **sırasız** (madde imli) liste hangi etiketle oluşturulur?",
   "opts": [
    "`<dd>`",
    "`<ul>`",
    "`<ol>`",
    "`<list>`",
    "`<dl>`"
   ],
   "a": 1,
   "exp": "ul = unordered list."
  },
  {
   "type": "mc",
   "topic": "liste",
   "q": "Liste maddelerini belirten `<li>` etiketinin açılımı nedir?",
   "opts": [
    "Link item",
    "Long item",
    "Line item",
    "List item",
    "List index"
   ],
   "a": 3,
   "exp": "`<li>` = list item."
  },
  {
   "type": "mc",
   "topic": "liste",
   "q": "Aşağıdaki listenin ikinci maddesi nasıl numaralanır?",
   "opts": [
    "B.",
    "b.",
    "2.",
    "II.",
    "ii."
   ],
   "a": 0,
   "exp": "`type=\"A\"` büyük harf: A, B, C.",
   "code": "<ol type=\"A\">\n  <li>Elma</li>\n  <li>Armut</li>\n</ol>",
   "prev": true,
   "h": 80
  },
  {
   "type": "mc",
   "topic": "liste",
   "q": "Romen rakamıyla (i, ii, iii) numaralı liste için hangi kod kullanılır?",
   "opts": [
    "`<ol type=\"i\">`",
    "`<ol start=\"i\">`",
    "`<ol type=\"1\">`",
    "`<ul type=\"i\">`",
    "`<ol type=\"r\">`"
   ],
   "a": 0,
   "exp": "type: 1, a, A, i, I."
  },
  {
   "type": "mc",
   "topic": "liste",
   "q": "Aşağıdaki listenin ilk maddesinin numarası nedir?",
   "opts": [
    "5.",
    "1.",
    "E.",
    "6.",
    "v."
   ],
   "a": 0,
   "exp": "`start=\"5\"` listeyi 5'ten başlatır.",
   "code": "<ol start=\"5\">\n  <li>Kimya</li>\n  <li>Fizik</li>\n</ol>",
   "prev": true,
   "h": 80
  },
  {
   "type": "mc",
   "topic": "liste",
   "q": "Aşağıdaki listenin üçüncü maddesi nasıl numaralanır?",
   "opts": [
    "3.",
    "c.",
    "iv.",
    "IV.",
    "iii."
   ],
   "a": 2,
   "exp": "type=\"i\" küçük Romen, start=\"2\" → ii, iii, iv.",
   "code": "<ol type=\"i\" start=\"2\">\n  <li>Türev</li>\n  <li>İntegral</li>\n  <li>Limit</li>\n</ol>",
   "prev": true,
   "h": 100
  },
  {
   "type": "mc",
   "topic": "liste",
   "q": "`<ul>` etiketinde maddelerin başına **içi boş daire** koyan `type` değeri hangisidir?",
   "opts": [
    "`circle`",
    "`round`",
    "`square`",
    "`a`",
    "`disc`"
   ],
   "a": 0,
   "exp": "disc içi dolu daire, circle içi boş daire, square içi dolu kare."
  },
  {
   "type": "mc",
   "topic": "liste",
   "q": "`<ul type=\"square\">` kullanılınca madde başlarında ne görünür?",
   "opts": [
    "İçi boş daire",
    "Harf",
    "İçi dolu daire",
    "Rakam",
    "İçi dolu kare"
   ],
   "a": 4,
   "exp": "square = kare."
  },
  {
   "type": "mc",
   "topic": "liste",
   "q": "`<ul>` için varsayılan (type yazılmazsa) madde imi hangisidir?",
   "opts": [
    "Kare (square)",
    "İçi boş daire (circle)",
    "İçi dolu daire (disc)",
    "Romen rakamı",
    "Rakam"
   ],
   "a": 2,
   "exp": "Varsayılan disc.",
   "code": "<ul><li>a</li></ul>"
  },
  {
   "type": "mc",
   "topic": "liste",
   "q": "Tanımlama listesinde kullanılan etiketler hangileridir?",
   "opts": [
    "`<table>`, `<td>`",
    "`<ul>`, `<li>`",
    "`<dl>`, `<dt>`, `<dd>`",
    "`<ol>`, `<li>`",
    "`<dl>`, `<li>`"
   ],
   "a": 2,
   "exp": "dl liste, dt terim, dd açıklama."
  },
  {
   "type": "mc",
   "topic": "liste",
   "q": "Tanımlama listesinde **açıklama** kısmı hangi etiketle yazılır?",
   "opts": [
    "`<dl>`",
    "`<dd>`",
    "`<li>`",
    "`<dt>`",
    "`<p>`"
   ],
   "a": 1,
   "exp": "dt = tanımlanan terim, dd = açıklama (içeriden başlar)."
  },
  {
   "type": "mc",
   "topic": "liste",
   "q": "İç içe liste oluşturmak için yeni liste nereye yazılır?",
   "opts": [
    "Bir `<li>` maddesinin içine",
    "`<head>` bölümüne",
    "Liste kapandıktan sonra `<br>` ile",
    "`<title>` içine",
    "Listenin `type` parametresine"
   ],
   "a": 0,
   "exp": "Alt liste, üst listenin bir maddesinin içinde açılır."
  },
  {
   "type": "mc",
   "topic": "liste",
   "q": "Aşağıdaki kodda kaç tane `<li>` maddesi **iç (alt) listede** yer alır?",
   "opts": [
    "4",
    "5",
    "2",
    "1",
    "3"
   ],
   "a": 2,
   "exp": "Dış listede 2 madde (Kimya, Fizik), Kimya'nın altında 2 madde (Organik, İnorganik).",
   "code": "<ol>\n  <li>Kimya\n    <ol type=\"a\">\n      <li>Organik</li>\n      <li>İnorganik</li>\n    </ol>\n  </li>\n  <li>Fizik</li>\n</ol>"
  },
  {
   "type": "fill",
   "topic": "liste",
   "q": "Maddeleri içi dolu kare olan sırasız listeyi tamamla.",
   "code": "<ul type=\"____\">\n  <li>Organik</li>\n  <li>İnorganik</li>\n</ul>",
   "ans": [
    "square"
   ],
   "cs": false,
   "exp": "ul type: disc, circle, square."
  },
  {
   "type": "fill",
   "topic": "liste",
   "q": "Tanımlama listesinde terimi yazan etiketi tamamla.",
   "code": "<dl>\n  <____>En sevdiğim çiçekler</dt>\n  <dd>Papatyalara bayılırım.</dd>\n</dl>",
   "ans": [
    "dt"
   ],
   "cs": false,
   "exp": "dt terim, dd açıklama."
  },
  {
   "type": "match",
   "topic": "liste",
   "q": "Liste türlerini etiketleriyle eşleştir.",
   "pairs": [
    [
     "Sıralı liste",
     "<ol>"
    ],
    [
     "Sırasız liste",
     "<ul>"
    ],
    [
     "Tanımlama listesi",
     "<dl>"
    ],
    [
     "Liste maddesi",
     "<li>"
    ],
    [
     "Tanımlama açıklaması",
     "<dd>"
    ]
   ],
   "exp": "dt terim, dd açıklama.",
   "choices": [
    "<li>",
    "<ol>",
    "<dd>",
    "<ul>",
    "<dl>"
   ]
  },
  {
   "type": "open",
   "topic": "liste",
   "q": "Aşağıdaki görünümü veren kodu yazınız:\n1. En sevdiğim yaz meyveleri: (altında içi boş daireli Kayısı, Şeftali)\n2. En sevdiğim kış meyveleri: (altında içi boş daireli Portakal, Mandalina)",
   "model": "- Dış liste sıralı `<ol>`; her maddenin içine `<ul type=\"circle\">` alt liste.",
   "modelCode": "<ol>\n  <li>En sevdiğim yaz meyveleri:\n    <ul type=\"circle\">\n      <li>Kayısı</li>\n      <li>Şeftali</li>\n    </ul>\n  </li>\n  <li>En sevdiğim kış meyveleri:\n    <ul type=\"circle\">\n      <li>Portakal</li>\n      <li>Mandalina</li>\n    </ul>\n  </li>\n</ol>",
   "h": 170
  },
  {
   "type": "open",
   "topic": "liste",
   "q": "Tanımlama listesi ile \"En sevdiğim hayvanlar: Kediler ve kaplumbağalardır.\" ve \"En sevdiğim yemekler: Köfte ve pilav.\" maddelerini yazınız; terimler kırmızı olsun.",
   "model": "- `<dl>` içinde her terim `<dt>`, açıklaması `<dd>`. Kırmızı için `<font color=\"red\">`.",
   "modelCode": "<dl>\n  <dt><font color=\"red\">En sevdiğim hayvanlar</font></dt>\n  <dd>Kediler ve kaplumbağalardır.</dd>\n  <dt><font color=\"red\">En sevdiğim yemekler</font></dt>\n  <dd>Köfte ve pilav.</dd>\n</dl>",
   "h": 130
  },
  {
   "type": "open",
   "topic": "liste",
   "q": "HTML'deki üç liste türünü yazınız; her birinin etiketlerini ve kullanılabilecek `type` değerlerini belirtiniz.",
   "model": "- **Sıralı liste** `<ol>` + `<li>`: type `1`, `a`, `A`, `i`, `I`; `start` başlangıç.\n- **Sırasız liste** `<ul>` + `<li>`: type `disc` (dolu daire), `circle` (boş daire), `square` (kare).\n- **Tanımlama listesi** `<dl>`: `<dt>` terim, `<dd>` açıklama."
  }
 ],
 "resim": [
  {
   "type": "mc",
   "topic": "resim",
   "q": "Sayfaya resim eklemek için kullanılan etiket hangisidir?",
   "opts": [
    "`<a>`",
    "`<pic>`",
    "`<img>`",
    "`<image>`",
    "`<src>`"
   ],
   "a": 2,
   "exp": "`<img src=\"...\">`."
  },
  {
   "type": "mc",
   "topic": "resim",
   "q": "`<img>` etiketinde resmin yerini (yolunu) gösteren parametre hangisidir?",
   "opts": [
    "`src`",
    "`path`",
    "`alt`",
    "`href`",
    "`link`"
   ],
   "a": 0,
   "exp": "src = source. href bağlantı adresidir."
  },
  {
   "type": "mc",
   "topic": "resim",
   "q": "Resim görüntülenemediğinde yerinde yazacak metin hangi parametreyle verilir?",
   "opts": [
    "`text`",
    "`title`",
    "`src`",
    "`name`",
    "`alt`"
   ],
   "a": 4,
   "exp": "alt = alternatif metin."
  },
  {
   "type": "mc",
   "topic": "resim",
   "q": "Fare resmin üzerine gelince ipucu olarak çıkan yazıyı hangi parametre belirler?",
   "opts": [
    "`align`",
    "`width`",
    "`border`",
    "`title`",
    "`src`"
   ],
   "a": 3,
   "exp": "title ipucu yazısı; alt resim görünmezse yazar."
  },
  {
   "type": "mc",
   "topic": "resim",
   "q": "`<img>` etiketinde resmin **enini** belirleyen parametre hangisidir?",
   "opts": [
    "`align`",
    "`border`",
    "`width`",
    "`height`",
    "`size`"
   ],
   "a": 2,
   "exp": "width en, height boy."
  },
  {
   "type": "mc",
   "topic": "resim",
   "q": "HTML dosyası ile `papatya.gif` aynı klasörde ise doğru kod hangisidir?",
   "opts": [
    "`<img src=\"/resim/papatya.gif\">`",
    "`<img src=\"papatya.gif\">`",
    "`<img href=\"papatya.gif\">`",
    "`<img src=\"../papatya.gif\">`",
    "`<img alt=\"papatya.gif\">`"
   ],
   "a": 1,
   "exp": "Aynı klasörde sadece dosya adı yazılır."
  },
  {
   "type": "mc",
   "topic": "resim",
   "q": "HTML dosyasının bulunduğu klasörde `resim` adlı alt klasördeki `papatya.gif` nasıl eklenir?",
   "opts": [
    "`<img src=\"../resim/papatya.gif\">`",
    "`<img src=\"resim/papatya.gif\">`",
    "`<img src=\"resim:papatya\">`",
    "`<img src=\"#resim\">`",
    "`<img src=\"papatya.gif/resim\">`"
   ],
   "a": 1,
   "exp": "Alt klasör: klasör adı / dosya adı."
  },
  {
   "type": "mc",
   "topic": "resim",
   "q": "HTML dosyası `c:\\html_ders\\sayfalarim\\deneme.htm`, resim `c:\\html_ders\\resim\\papatya.gif` ise `src` ne olmalıdır?",
   "opts": [
    "`../resim/papatya.gif`",
    "`sayfalarim/resim/papatya.gif`",
    "`../../papatya.gif`",
    "`resim/papatya.gif`",
    "`papatya.gif`"
   ],
   "a": 0,
   "exp": "Önce bir üst klasöre (`../`) çıkılır, sonra resim klasörüne girilir."
  },
  {
   "type": "mc",
   "topic": "resim",
   "q": "Dosya yolunda **iki üst** klasöre çıkmak için ne yazılır?",
   "opts": [
    "`//`",
    "`../`",
    "`..2/`",
    "`./`",
    "`../../`"
   ],
   "a": 4,
   "exp": "Her `../` bir üst klasör."
  },
  {
   "type": "mc",
   "topic": "resim",
   "q": "Resmi sayfanın sağına hizalamak için hangi kod kullanılır?",
   "opts": [
    "`<img src=\"a.gif\" float>`",
    "`<img src=\"a.gif\" align=\"right\">`",
    "`<img src=\"a.gif\" valign=\"right\">`",
    "`<img src=\"a.gif\" right>`",
    "`<img src=\"a.gif\" text=\"right\">`"
   ],
   "a": 1,
   "exp": "align: left, right, center."
  },
  {
   "type": "mc",
   "topic": "resim",
   "q": "Sayfanın arka planını resimle döşemek için hangi kod kullanılır?",
   "opts": [
    "`<body src=\"gokyuzu.jpg\">`",
    "`<img background=\"gokyuzu.jpg\">`",
    "`<head background=\"gokyuzu.jpg\">`",
    "`<body background=\"gokyuzu.jpg\">`",
    "`<body bgcolor=\"gokyuzu.jpg\">`"
   ],
   "a": 3,
   "exp": "background resim, bgcolor renk. Arka plan resmi için en/boy yazılmaz; tüm sayfayı kaplar."
  },
  {
   "type": "mc",
   "topic": "resim",
   "q": "Sunuma göre sayfaya eklenecek resim hangi formatlarda olmalıdır?",
   "opts": [
    "gif ya da jpg",
    "html ya da htm",
    "mp3 ya da midi",
    "doc ya da xls",
    "zip ya da rar"
   ],
   "a": 0,
   "exp": "Slayt: \"gif yada jpg formatında olması zorunluluğu dışında kısıtlama yok\"."
  },
  {
   "type": "mc",
   "topic": "resim",
   "q": "Aşağıdaki resim bulunamazsa sayfada ne yazar?",
   "opts": [
    "happy new year",
    "Yeni Yıl",
    "resim/2024_3.jpg",
    "500",
    "Hiçbir şey yazmaz"
   ],
   "a": 0,
   "exp": "Resim yüklenmezse `alt` metni görünür; `title` ise fare üstündeyken çıkar.",
   "code": "<img src=\"resim/2024_3.jpg\" alt=\"happy new year\" title=\"Yeni Yıl\" width=\"500\">"
  },
  {
   "type": "mc",
   "topic": "resim",
   "q": "`border=\"0\"` bir resim bağlantısında ne işe yarar?",
   "opts": [
    "Resmi siyah yapar",
    "Bağlantı çerçevesini tamamen kaldırır",
    "Resmi sola yaslar",
    "Bağlantıyı iptal eder",
    "Resmi gizler"
   ],
   "a": 1,
   "exp": "border bağlantı çerçevesinin kalınlığıdır; 0 çerçeveyi yok eder."
  },
  {
   "type": "fill",
   "topic": "resim",
   "q": "Resim görünmezse \"Papatya\" yazsın.",
   "code": "<img src=\"papatya.gif\" ____=\"Papatya\">",
   "ans": [
    "alt"
   ],
   "cs": false,
   "exp": "`alt` alternatif metin."
  },
  {
   "type": "fill",
   "topic": "resim",
   "q": "Bir üst klasördeki `resim` klasöründen resmi ekle.",
   "code": "<img src=\"____/resim/papatya.gif\" alt=\"papatya\">",
   "ans": [
    ".."
   ],
   "cs": false,
   "exp": "`..` bir üst klasör demektir."
  },
  {
   "type": "match",
   "topic": "resim",
   "q": "`<img>` parametrelerini eşleştir.",
   "pairs": [
    [
     "src",
     "Resmin yolu ve adı"
    ],
    [
     "alt",
     "Resim görünmezse yazacak metin"
    ],
    [
     "title",
     "Fare üstündeyken çıkan yazı"
    ],
    [
     "width",
     "Resmin eni"
    ],
    [
     "height",
     "Resmin boyu"
    ]
   ],
   "exp": "align hizalama, border çerçeve.",
   "choices": [
    "Resmin yolu ve adı",
    "Fare üstündeyken çıkan yazı",
    "Resmin eni",
    "Resmin boyu",
    "Resim görünmezse yazacak metin"
   ]
  },
  {
   "type": "open",
   "topic": "resim",
   "q": "Gökyüzü resmi (`gokyuzu.jpg`) sayfanın arka planı olacak, dünya resmi (`dunya.jpg`) ortada 300 piksel genişliğinde duracak; dünya resmi yüklenmezse \"Dünya\" yazacak. Kodu yazınız.",
   "model": "- Arka plan resmi `<body background>` ile.\n- Ortalamak için `<center>` (ya da `<p align=\"center\">`).\n- `alt=\"Dünya\"` resim yüklenmezse yazar.",
   "modelCode": "<html>\n<head>\n<title>Dünya</title>\n</head>\n<body background=\"gokyuzu.jpg\">\n<center>\n  <img src=\"dunya.jpg\" width=\"300\" alt=\"Dünya\" title=\"Dünya\">\n</center>\n</body>\n</html>",
   "h": 120
  }
 ],
 "link": [
  {
   "type": "mc",
   "topic": "link",
   "q": "HTML'de bağlantı (link) oluşturan etiket hangisidir?",
   "opts": [
    "`<url>`",
    "`<img>`",
    "`<href>`",
    "`<link>`",
    "`<a>`"
   ],
   "a": 4,
   "exp": "`<a href=\"...\">...</a>`. `<link>` head içinde dosya bağlamak içindir."
  },
  {
   "type": "mc",
   "topic": "link",
   "q": "`<a>` etiketinde bağlantının adresi hangi parametreye yazılır?",
   "opts": [
    "`src`",
    "`target`",
    "`name`",
    "`href`",
    "`alt`"
   ],
   "a": 3,
   "exp": "href = hypertext reference."
  },
  {
   "type": "mc",
   "topic": "link",
   "q": "Biçim verilmemiş bir bağlantı yazısı tarayıcıda varsayılan olarak nasıl görünür?",
   "opts": [
    "Gri ve küçük",
    "Kırmızı ve kalın",
    "Yeşil ve üstü çizili",
    "Mavi ve altı çizili",
    "Siyah ve italik"
   ],
   "a": 3,
   "exp": "Bağlantı mavi, altı çizili; imleç el şekline döner.",
   "code": "<a href=\"sayfa2.html\">Tıkla</a>"
  },
  {
   "type": "mc",
   "topic": "link",
   "q": "Bağlantının **yeni bir pencerede** açılması için hangi kod kullanılır?",
   "opts": [
    "`target=\"_self\"`",
    "`target=\"_top\"`",
    "`target=\"_new_page\"`",
    "`href=\"_blank\"`",
    "`target=\"_blank\"`"
   ],
   "a": 4,
   "exp": "_blank yeni pencere, _self aynı pencere."
  },
  {
   "type": "mc",
   "topic": "link",
   "q": "`target=\"_self\"` ne yapar?",
   "opts": [
    "Dosyayı indirir",
    "Bağlantıyı yeni pencerede açar",
    "Sayfanın en altına gider",
    "E-posta programını açar",
    "Bağlantıyı aynı pencerede açar"
   ],
   "a": 4,
   "exp": "_self aynı pencere (varsayılan davranış)."
  },
  {
   "type": "mc",
   "topic": "link",
   "q": "Bağlantıyı aynı pencerede **en üstten itibaren** açan target değeri hangisidir?",
   "opts": [
    "`_parent`",
    "`_top`",
    "`_up`",
    "`_blank`",
    "`_self`"
   ],
   "a": 1,
   "exp": "Slayt: _top bağlantı aynı pencere içerisinde en üstten itibaren açılır."
  },
  {
   "type": "mc",
   "topic": "link",
   "q": "Tıklanınca kullanıcının e-posta programını açan bağlantı hangisidir?",
   "opts": [
    "`<a mail=\"ali@mail.com\">`",
    "`<a href=\"ftp:ali@mail.com\">`",
    "`<a href=\"http://ali@mail.com\">`",
    "`<a href=\"mailto:ali@mail.com\">`",
    "`<a href=\"#ali@mail.com\">`"
   ],
   "a": 3,
   "exp": "mailto: e-posta programını açar ve \"kime\" kısmını doldurur."
  },
  {
   "type": "mc",
   "topic": "link",
   "q": "`<a href=\"midi.zip\">` bağlantısına tıklanınca tarayıcı ne yapar?",
   "opts": [
    "Dosyayı açmak mı kaydetmek mi istediğini sorar",
    "E-posta gönderir",
    "Sayfayı kapatır",
    "Dosyayı tarayıcıda gösterir",
    "Hata verir"
   ],
   "a": 0,
   "exp": "Tarayıcı htm, txt, jpg, gif gösterebilir; zip, doc, xls, mp3 gösteremez, aç/kaydet sorar."
  },
  {
   "type": "mc",
   "topic": "link",
   "q": "`<a href=\"meyve.gif\">` bağlantısına tıklanınca ne olur?",
   "opts": [
    "Sayfa yenilenir",
    "Resim e-postayla gönderilir",
    "Tarayıcı aynı klasördeki meyve.gif resmini açar",
    "Resim otomatik silinir",
    "Tarayıcı aç/kaydet diye sorar"
   ],
   "a": 2,
   "exp": "gif tarayıcının gösterebildiği bir dosyadır; dosya başka klasördeyse hata alınır."
  },
  {
   "type": "mc",
   "topic": "link",
   "q": "Bağlantıya tıklanınca dosyayı açmak yerine **indirmek** için hangi parametre kullanılır?",
   "opts": [
    "`get`",
    "`save`",
    "`download`",
    "`target`",
    "`href`"
   ],
   "a": 2,
   "exp": "`<a href=\"papatya.gif\" download=\"dosyaadi\">`; değer indirilen dosyanın adı olur."
  },
  {
   "type": "mc",
   "topic": "link",
   "q": "`<a href=\"papatya.gif\" download=\"cicek\">` kodunda `cicek` neyi belirler?",
   "opts": [
    "Resmin enini",
    "Açılacak pencereyi",
    "Resmin yerini",
    "İndirilecek dosyanın adını",
    "Bağlantı yazısını"
   ],
   "a": 3,
   "exp": "download değeri indirilen dosyanın adıdır."
  },
  {
   "type": "mc",
   "topic": "link",
   "q": "Bir resme bağlantı vermek için ne yapılır?",
   "opts": [
    "`<img>` etiketine `href` yazılır",
    "`<a>` etiketi `<img>` içine yazılır",
    "`<img link=\"...\">` kullanılır",
    "Resme bağlantı verilemez",
    "`<img>` etiketi `<a href>` ile `</a>` arasına yazılır"
   ],
   "a": 4,
   "exp": "`<a href=\"sayfa2.html\"><img src=\"...\"></a>`."
  },
  {
   "type": "mc",
   "topic": "link",
   "q": "Sayfa içi bağlantıda gidilecek yeri işaretlemek için hangi kod kullanılır?",
   "opts": [
    "`<a href=\"web\">`",
    "`<a target=\"web\">`",
    "`<a name=\"web\">`",
    "`<a link=\"#web\">`",
    "`<a href=\"#web\">`"
   ],
   "a": 2,
   "exp": "İşaret `name` ile, bağlantı `href=\"#web\"` ile."
  },
  {
   "type": "mc",
   "topic": "link",
   "q": "Sayfada `<a name=\"iletisim\">` ile işaretlenmiş bölüme giden bağlantı hangisidir?",
   "opts": [
    "`<a href=\"iletisim#\">`",
    "`<a href=\"iletisim\">`",
    "`<a name=\"#iletisim\">`",
    "`<a target=\"iletisim\">`",
    "`<a href=\"#iletisim\">`"
   ],
   "a": 4,
   "exp": "Çapaya gitmek için href'e # ile işaretin adı yazılır."
  },
  {
   "type": "mc",
   "topic": "link",
   "q": "`sayfa2.html` içindeki `web` adlı bölüme başka bir sayfadan bağlantı nasıl verilir?",
   "opts": [
    "`<a name=\"sayfa2.html#web\">`",
    "`<a href=\"sayfa2.html\" name=\"web\">`",
    "`<a href=\"web#sayfa2.html\">`",
    "`<a href=\"#sayfa2.html\">`",
    "`<a href=\"sayfa2.html#web\">`"
   ],
   "a": 4,
   "exp": "Önce sayfa, sonra # ve bölüm adı."
  },
  {
   "type": "mc",
   "topic": "link",
   "q": "FTP adresine bağlantı veren kod hangisidir?",
   "opts": [
    "`<a href=\"#ftp\">`",
    "`<a href=\"mailto:ftp.benimsitem.com\">`",
    "`<a ftp=\"benimsitem.com\">`",
    "`<a href=\"ftp://ftp.benimsitem.com/\">`",
    "`<a download=\"ftp\">`"
   ],
   "a": 3,
   "exp": "Protokol `ftp://` yazılır."
  },
  {
   "type": "mc",
   "topic": "link",
   "q": "Aşağıdaki kodda kaç tane tıklanabilir bağlantı vardır?",
   "opts": [
    "3",
    "1",
    "4",
    "2",
    "0"
   ],
   "a": 3,
   "exp": "Sadece href'i olan `<a>`'lar bağlantıdır; `name` olan çapa işaretidir, tıklanmaz.",
   "code": "<a href=\"#web\">Web</a>\n<a href=\"#prog\">Programlama</a>\n<a name=\"web\"><b>Web</b></a>"
  },
  {
   "type": "fill",
   "topic": "link",
   "q": "Yaşar Üniversitesi bağlantısı yeni pencerede açılsın.",
   "code": "<a href=\"https://www.yasar.edu.tr/\" ____=\"_blank\">Yaşar Üniversitesi</a>",
   "ans": [
    "target"
   ],
   "cs": false,
   "exp": "target=\"_blank\" yeni pencere."
  },
  {
   "type": "fill",
   "topic": "link",
   "q": "Sayfa içindeki \"prog\" işaretine giden bağlantıyı tamamla.",
   "code": "<a href=\"____prog\">Programlamanın Temelleri</a>",
   "ans": [
    "#"
   ],
   "cs": false,
   "exp": "Sayfa içi bağlantıda işaret adının önüne # konur."
  },
  {
   "type": "match",
   "topic": "link",
   "q": "target değerlerini eşleştir.",
   "pairs": [
    [
     "_blank",
     "Yeni pencerede açar"
    ],
    [
     "_self",
     "Aynı pencerede açar"
    ],
    [
     "_top",
     "Aynı pencerede en üstten açar"
    ],
    [
     "_parent",
     "Açan ana sayfanın yerine konur"
    ],
    [
     "çerçeve adı",
     "Adı verilen çerçevede açar"
    ]
   ],
   "exp": "Sunum 6, target parametreleri.",
   "choices": [
    "Adı verilen çerçevede açar",
    "Açan ana sayfanın yerine konur",
    "Aynı pencerede açar",
    "Yeni pencerede açar",
    "Aynı pencerede en üstten açar"
   ]
  },
  {
   "type": "open",
   "topic": "link",
   "q": "Sayfanın başında 3 derslik bir menü (Web Tasarımı, Programlama, Sayısal Elektronik) olsun; her menü bağlantısı aynı sayfadaki ilgili paragrafa gitsin. Kodu yazınız.",
   "model": "- Paragraflardaki başlıklar `<a name=\"...\">` ile işaretlenir.\n- Menüde `<a href=\"#...\">` ile o işarete gidilir; `#` sadece href'te yazılır.",
   "modelCode": "<a href=\"#web\">1. Web Tasarımının Temelleri</a><br>\n<a href=\"#prog\">2. Programlamanın Temelleri</a><br>\n<a href=\"#say\">3. Sayısal Elektronik</a>\n\n<p><a name=\"web\"><b>1. Web Tasarımının Temelleri</b></a> Ders açıklaması...</p>\n<p><a name=\"prog\"><b>2. Programlamanın Temelleri</b></a> Ders açıklaması...</p>\n<p><a name=\"say\"><b>3. Sayısal Elektronik</b></a> Ders açıklaması...</p>",
   "h": 170
  },
  {
   "type": "open",
   "topic": "link",
   "q": "`<a>` etiketiyle yapılabilecek bağlantı türlerini örnek kodlarla yazınız (en az dört).",
   "model": "- Web sitesi: `<a href=\"http://www.benimsitem.com/\">Siteye git</a>`\n- Başka sayfa / resim: `<a href=\"meyve.gif\">Resmi aç</a>`\n- İndirme: `<a href=\"papatya.gif\" download=\"cicek\">İndir</a>`\n- E-posta: `<a href=\"mailto:mymail@mail.com\">Mail at</a>`\n- FTP: `<a href=\"ftp://ftp.benimsitem.com/\">Dosyalar</a>`\n- Sayfa içi: `<a name=\"web\">` işaret, `<a href=\"#web\">` bağlantı\n- Resme bağlantı: `<a href=\"sayfa2.html\"><img src=\"papatya.gif\"></a>`"
  }
 ],
 "css": [
  {
   "type": "mc",
   "topic": "css",
   "q": "`<style>` etiketi (scoped belirtilmemişse) nereye yazılır?",
   "opts": [
    "`<p>` içine",
    "`<head>` içine",
    "`<html>` dışına",
    "`<body>` sonuna",
    "`<title>` içine"
   ],
   "a": 1,
   "exp": "Slayt: scoped yoksa head içinde tanımlanmalıdır."
  },
  {
   "type": "mc",
   "topic": "css",
   "q": "CSS'in açılımı hangisidir?",
   "opts": [
    "Creative Style System",
    "Computer Style Sheets",
    "Cascading Style Sheets",
    "Colorful Style Sheets",
    "Cascading Simple Styles"
   ],
   "a": 2,
   "exp": "Basamaklı stil şablonları."
  },
  {
   "type": "mc",
   "topic": "css",
   "q": "Aşağıdaki kodda paragrafın yazı rengi ne olur?",
   "opts": [
    "Siyah",
    "Gri",
    "Kırmızı",
    "Beyaz",
    "Mavi"
   ],
   "a": 4,
   "exp": "`p {color: blue;}` tüm paragrafları mavi yapar; h1 kırmızı, arka plan gri.",
   "code": "<style>\n  p {color: blue;}\n  h1 {color: red;}\n  body {background-color: gray;}\n</style>\n<h1>Başlık</h1>\n<p>Paragraf</p>",
   "prev": true,
   "h": 110
  },
  {
   "type": "mc",
   "topic": "css",
   "q": "`p {color: blue;}` ifadesinde `color` nedir?",
   "opts": [
    "Değer",
    "Özellik",
    "Seçici",
    "Etiket parametresi",
    "Sınıf"
   ],
   "a": 1,
   "exp": "p seçici, color özellik, blue değer."
  },
  {
   "type": "mc",
   "topic": "css",
   "q": "Yazı rengini belirleyen CSS özelliği hangisidir?",
   "opts": [
    "`font-color`",
    "`color`",
    "`text-color`",
    "`background-color`",
    "`bgcolor`"
   ],
   "a": 1,
   "exp": "CSS'te yazı rengi `color`; arka plan `background-color`."
  },
  {
   "type": "mc",
   "topic": "css",
   "q": "Arka plan rengini açık mavi yapan CSS kodu hangisidir?",
   "opts": [
    "`background-color: lightblue;`",
    "`bgcolor: lightblue;`",
    "`background = lightblue;`",
    "`text-align: lightblue;`",
    "`color: lightblue;`"
   ],
   "a": 0,
   "exp": "Özellik ve değer arasında iki nokta, sonda noktalı virgül."
  },
  {
   "type": "mc",
   "topic": "css",
   "q": "Yazıyı ortalayan CSS kodu hangisidir?",
   "opts": [
    "`align: center;`",
    "`text-decoration: center;`",
    "`center: text;`",
    "`font-style: center;`",
    "`text-align: center;`"
   ],
   "a": 4,
   "exp": "text-align: left, right, center, justify."
  },
  {
   "type": "mc",
   "topic": "css",
   "q": "`border: 2px solid green;` ne yapar?",
   "opts": [
    "2px kalınlığında düz, yeşil kenarlık ekler",
    "2px harf aralığı verir",
    "2px yeşil gölge ekler",
    "Yeşil arka plan ekler",
    "Yazıyı 2px yeşil yapar"
   ],
   "a": 0,
   "exp": "border: kalınlık, tür (solid = düz), renk."
  },
  {
   "type": "mc",
   "topic": "css",
   "q": "Yazının **üstünü çizen** (ortasından geçen) CSS değeri hangisidir?",
   "opts": [
    "`font-style: italic;`",
    "`text-decoration: overline;`",
    "`text-decoration: underline;`",
    "`text-decoration: line-through;`",
    "`text-shadow: 3px;`"
   ],
   "a": 3,
   "exp": "line-through üstü çizili, overline üst çizgi, underline alt çizgi."
  },
  {
   "type": "mc",
   "topic": "css",
   "q": "Harfler arasındaki boşluğu ayarlayan CSS özelliği hangisidir?",
   "opts": [
    "`font-spacing`",
    "`line-height`",
    "`text-spacing`",
    "`word-spacing`",
    "`letter-spacing`"
   ],
   "a": 4,
   "exp": "letter-spacing harf, word-spacing kelime aralığı."
  },
  {
   "type": "mc",
   "topic": "css",
   "q": "Kelimeler arasındaki boşluğu ayarlayan CSS özelliği hangisidir?",
   "opts": [
    "`letter-spacing`",
    "`word-spacing`",
    "`font-size`",
    "`text-indent`",
    "`padding`"
   ],
   "a": 1,
   "exp": "word-spacing: 10px; kelime arası."
  },
  {
   "type": "mc",
   "topic": "css",
   "q": "`text-shadow: 3px 2px red;` ne yapar?",
   "opts": [
    "Yazıyı kırmızı yapar",
    "Yazıya kırmızı gölge verir",
    "Kırmızı kenarlık ekler",
    "Arka planı kırmızı yapar",
    "Yazının altını kırmızı çizer"
   ],
   "a": 1,
   "exp": "text-shadow: yatay kayma, dikey kayma, renk."
  },
  {
   "type": "mc",
   "topic": "css",
   "q": "Yazıyı **kalın** yapan CSS kodu hangisidir?",
   "opts": [
    "`font-style: bold;`",
    "`font-size: bold;`",
    "`font-family: bold;`",
    "`font-weight: bold;`",
    "`text-decoration: bold;`"
   ],
   "a": 3,
   "exp": "font-weight kalınlık, font-style italik."
  },
  {
   "type": "mc",
   "topic": "css",
   "q": "CSS'te `.par1 { color: red; }` kuralı hangi etiketleri etkiler?",
   "opts": [
    "Bütün paragrafları",
    "Sadece `id=\"par1\"` olanı",
    "Hiçbirini; nokta hatalıdır",
    "`class=\"par1\"` verilmiş etiketleri",
    "Sadece başlıkları"
   ],
   "a": 3,
   "exp": "Nokta sınıf seçicisidir; sadece o sınıfı alan etiketler etkilenir.",
   "code": "<style> .par1 { color: red; } </style>\n<p class=\"par1\">Bir</p>\n<p>İki</p>"
  },
  {
   "type": "mc",
   "topic": "css",
   "q": "Aşağıdaki kodda **ikinci** paragraf nasıl görünür?",
   "opts": [
    "Sağda ve siyah",
    "Solda ve kırmızı",
    "Ortada ve mavi",
    "Solda ve mavi",
    "Ortada ve kırmızı"
   ],
   "a": 3,
   "exp": "İkinci paragraf par2 sınıfını alır: sola yaslı, mavi.",
   "code": "<style>\n  .par1 { text-align: center; color: red; }\n  .par2 { text-align: left; color: blue; }\n</style>\n<p class=\"par1\">Bu paragraf</p>\n<p class=\"par2\">Bu paragraf</p>",
   "prev": true,
   "h": 90
  },
  {
   "type": "mc",
   "topic": "css",
   "q": "Bir paragrafa `vurgu` sınıfı atamanın doğru yazımı hangisidir?",
   "opts": [
    "`<p .vurgu>`",
    "`<p style=\"vurgu\">`",
    "`<p class=\"vurgu\">`",
    "`<p id=\".vurgu\">`",
    "`<p class=\".vurgu\">`"
   ],
   "a": 2,
   "exp": "HTML'de nokta yazılmaz; nokta sadece CSS'te."
  },
  {
   "type": "mc",
   "topic": "css",
   "q": "Aşağıdaki kuralda paragrafın yazı boyutu kaç pikseldir?",
   "opts": [
    "20px",
    "400px",
    "4px",
    "40px",
    "16px"
   ],
   "a": 3,
   "exp": "font-size yazı boyutu.",
   "code": "<style> p { font-size: 40px; font-style: italic; } </style>\n<p>Yazı</p>"
  },
  {
   "type": "fill",
   "topic": "css",
   "q": "Bütün `<h1>` başlıkları kırmızı olsun.",
   "code": "<style>\n  h1 { ____: red; }\n</style>\n<h1>Başlık</h1>",
   "ans": [
    "color"
   ],
   "cs": false,
   "exp": "Yazı rengi `color`."
  },
  {
   "type": "fill",
   "topic": "css",
   "q": "`par2` sınıfı için CSS seçicisini tamamla.",
   "code": "<style>\n  ____par2 { color: blue; }\n</style>\n<p class=\"par2\">Mavi paragraf</p>",
   "ans": [
    "."
   ],
   "cs": false,
   "exp": "Sınıf seçicisi nokta ile başlar."
  },
  {
   "type": "match",
   "topic": "css",
   "q": "CSS özelliklerini eşleştir.",
   "pairs": [
    [
     "color",
     "Yazı rengi"
    ],
    [
     "background-color",
     "Arka plan rengi"
    ],
    [
     "text-align",
     "Yazı hizalama"
    ],
    [
     "letter-spacing",
     "Harf aralığı"
    ],
    [
     "font-family",
     "Yazı tipi"
    ]
   ],
   "exp": "word-spacing kelime aralığı, font-size boyut, font-weight kalınlık.",
   "choices": [
    "Yazı tipi",
    "Yazı hizalama",
    "Yazı rengi",
    "Harf aralığı",
    "Arka plan rengi"
   ]
  },
  {
   "type": "open",
   "topic": "css",
   "q": "Üç paragraf için `<style>` ile class tanımlayınız: 1. paragraf arka planı siyah, yazısı beyaz ve italik; 2. paragraf arka planı yeşil, yazı boyutu 50px ve altı çizili; 3. paragraf yazısı mavi, harf aralığı 10px ve sağa yaslı.",
   "model": "- Her paragrafa farklı sınıf (`par1`, `par2`, `par3`).\n- CSS'te sınıf nokta ile yazılır; `<style>` head içindedir.",
   "modelCode": "<html>\n<head>\n<style>\n  .par1 { background-color: black; color: white; font-style: italic; }\n  .par2 { background-color: green; font-size: 50px; text-decoration: underline; }\n  .par3 { color: blue; letter-spacing: 10px; text-align: right; }\n</style>\n</head>\n<body>\n<p class=\"par1\">Birinci paragraf</p>\n<p class=\"par2\">İkinci paragraf</p>\n<p class=\"par3\">Üçüncü paragraf</p>\n</body>\n</html>",
   "h": 200
  },
  {
   "type": "open",
   "topic": "css",
   "q": "`<style>` etiketini açıklayınız; etikete stil vermek ile class atamak arasındaki farkı örnekle yazınız.",
   "model": "- `<style>` HTML etiketlerinin nasıl görüneceğini tanımlar; head içine yazılır.\n- Etikete stil: `p { color: blue; }` sayfadaki **bütün** paragrafları etkiler.\n- Class: `.par1 { color: red; }` sadece `class=\"par1\"` verilen etiketleri etkiler; böylece aynı etiketler farklı görünebilir."
  }
 ],
 "tablo": [
  {
   "type": "mc",
   "topic": "tablo",
   "q": "Tabloda **satır** oluşturan etiket hangisidir?",
   "opts": [
    "`<tr>`",
    "`<th>`",
    "`<table>`",
    "`<td>`",
    "`<row>`"
   ],
   "a": 0,
   "exp": "tr = table row."
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "`<td>` etiketinin açılımı nedir?",
   "opts": [
    "Top data",
    "Table data",
    "Table division",
    "Table design",
    "Text data"
   ],
   "a": 1,
   "exp": "td = table data, veri hücresi."
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "Tabloda **sütun başlığı** hücresi hangi etiketle yazılır?",
   "opts": [
    "`<td>`",
    "`<caption>`",
    "`<head>`",
    "`<thead>`",
    "`<th>`"
   ],
   "a": 4,
   "exp": "th = table header; kalın ve ortalı görünür."
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "Tabloya açıklama (alt yazı) eklemek için hangi etiket kullanılır?",
   "opts": [
    "`<thead>`",
    "`<th>`",
    "`<tfoot>`",
    "`<caption>`",
    "`<title>`"
   ],
   "a": 3,
   "exp": "`<caption align=\"bottom\">` tablonun altına açıklama koyar."
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "Aşağıdaki tabloda kaç satır ve kaç hücre vardır?",
   "opts": [
    "2 satır, 4 hücre",
    "4 satır, 4 hücre",
    "1 satır, 4 hücre",
    "2 satır, 2 hücre",
    "4 satır, 2 hücre"
   ],
   "a": 0,
   "exp": "2 `<tr>`, her birinde 2 `<td>`.",
   "code": "<table border=\"1\">\n  <tr><td>hücre1</td><td>hücre2</td></tr>\n  <tr><td>hücre3</td><td>hücre4</td></tr>\n</table>",
   "prev": true,
   "h": 80
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "`border=\"0\"` tabloda ne yapar?",
   "opts": [
    "Çerçevenin görünmemesini sağlar",
    "Hücre içi boşluğu sıfırlar",
    "Tabloyu siler",
    "Tabloyu sola yaslar",
    "Hücreleri birleştirir"
   ],
   "a": 0,
   "exp": "border çerçeve kalınlığıdır; 0 görünmez yapar."
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "Hücre **içi** boşluğu (yazı ile hücre kenarı arası) ayarlayan parametre hangisidir?",
   "opts": [
    "`rules`",
    "`border`",
    "`cellspacing`",
    "`colspan`",
    "`cellpadding`"
   ],
   "a": 4,
   "exp": "cellpadding iç, cellspacing hücreler arası boşluk."
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "Hücreler **arası** boşluğu ayarlayan parametre hangisidir?",
   "opts": [
    "`cellpadding`",
    "`bgcolor`",
    "`cellspacing`",
    "`rowspan`",
    "`valign`"
   ],
   "a": 2,
   "exp": "cellspacing = hücre dışı boşluk."
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "Hücre içindeki yazıyı **dikey** olarak hizalayan parametre hangisidir?",
   "opts": [
    "`align`",
    "`valign`",
    "`rules`",
    "`height`",
    "`rowspan`"
   ],
   "a": 1,
   "exp": "valign: top, middle, bottom. align yatay hizalama."
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "`valign` parametresi hangi değeri **alamaz**?",
   "opts": [
    "`middle`",
    "`center`",
    "`top`",
    "Hepsini alabilir",
    "`bottom`"
   ],
   "a": 1,
   "exp": "valign: top, middle, bottom. center align'ın değeridir."
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "Yan yana iki hücreyi (aynı satırda) birleştirmek için hangi kod kullanılır?",
   "opts": [
    "`<td merge=\"2\">`",
    "`<td colspan=\"2\">`",
    "`<table colspan=\"2\">`",
    "`<td rowspan=\"2\">`",
    "`<tr colspan=\"2\">`"
   ],
   "a": 1,
   "exp": "colspan sütunları (yan yana) birleştirir; rowspan satırları (alt alta)."
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "Alt alta üç hücreyi (aynı sütunda) birleştirmek için hangi kod kullanılır?",
   "opts": [
    "`<td colspan=\"3\">`",
    "`<tr rowspan=\"3\">`",
    "`<td span=\"3\">`",
    "`<td rowspan=\"3\">`",
    "`<td valign=\"3\">`"
   ],
   "a": 3,
   "exp": "rowspan = satır birleştirme."
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "Aşağıdaki tablonun ilk satırında kaç `<td>` yazılmalıdır? (A ve B birleşik, C ve D ayrı; tablo 4 sütunlu)",
   "opts": [
    "2",
    "4",
    "5",
    "3",
    "1"
   ],
   "a": 3,
   "exp": "A ile B tek `<td colspan=\"2\">` olur; B'nin `<td>`'si silinir: A, C, D → 3.",
   "code": "<table border=\"1\" cellpadding=\"12\">\n  <tr><td colspan=\"2\">A</td><td>C</td><td>D</td></tr>\n  <tr><td>E</td><td>F</td><td>G</td><td>H</td></tr>\n</table>",
   "prev": true,
   "h": 100
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "Aşağıdaki tabloda 3. satırda neden sadece iki hücre (J ve L) yazılmıştır?",
   "opts": [
    "colspan=\"2\" kullanıldığı için",
    "Üst satırlardaki rowspan'li hücreler bu satıra da uzandığı için",
    "border=\"1\" olduğu için",
    "Tablo hatalı yazıldığı için",
    "cellpadding=\"12\" olduğu için"
   ],
   "a": 1,
   "exp": "C rowspan=\"3\", E rowspan=\"2\" olduğundan 3. satırda o sütunlar dolu; J ve L kalır.",
   "code": "<table border=\"1\" cellpadding=\"12\">\n  <tr><td>A</td><td>B</td><td rowspan=\"3\">C</td><td>D</td></tr>\n  <tr><td rowspan=\"2\">E</td><td>F</td><td>H</td></tr>\n  <tr><td>J</td><td>L</td></tr>\n</table>",
   "prev": true,
   "h": 170
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "`rules=\"cols\"` tabloda ne yapar?",
   "opts": [
    "Dikey iç kenarlıkları yok eder",
    "Yatay iç kenarlıkları yok eder; sadece sütun çizgileri kalır",
    "Sütunlara renk verir",
    "Sütunları birleştirir",
    "Tüm iç kenarlıkları yok eder"
   ],
   "a": 1,
   "exp": "cols: sütunlar arası (dikey) çizgiler kalır, yatay iç kenarlıklar gider. rows tersi, none hepsini kaldırır."
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "Tüm iç kenarlıkları yok eden `rules` değeri hangisidir?",
   "opts": [
    "`rows`",
    "`cols`",
    "`0`",
    "`all`",
    "`none`"
   ],
   "a": 4,
   "exp": "rules=\"none\"."
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "Bir hücrenin arka planını kırmızı yapan kod hangisidir?",
   "opts": [
    "`<td color=\"#FF0000\">`",
    "`<tr text=\"red\">`",
    "`<td bgcolor=\"#FF0000\">`",
    "`<td border=\"red\">`",
    "`<td background=\"#FF0000\">`"
   ],
   "a": 2,
   "exp": "bgcolor renk; background hücreye resim koyar."
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "Hücreye arka plan **resmi** koymak için hangi parametre kullanılır?",
   "opts": [
    "`bgcolor`",
    "`rules`",
    "`src`",
    "`background`",
    "`img`"
   ],
   "a": 3,
   "exp": "`<td background=\"resim1.jpg\">`."
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "Tabloya verilen `width` ve `height` için sunumda hangisi söylenir?",
   "opts": [
    "width sadece hücrelere verilebilir",
    "height yüzde ile verilemez",
    "Tablo büyütülebilir ama içeriğinden küçültülemez",
    "Tablo küçültülebilir ama büyütülemez",
    "İkisi birlikte kullanılamaz"
   ],
   "a": 2,
   "exp": "Tablonun normal ölçüsünden küçük değerler dikkate alınmaz."
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "Tabloyu sayfada ortalamak için `<table>` etiketine ne yazılır?",
   "opts": [
    "`cellspacing=\"center\"`",
    "`align=\"center\"`",
    "`rules=\"center\"`",
    "`valign=\"center\"`",
    "`text-align=\"center\"`"
   ],
   "a": 1,
   "exp": "align left/right/center tabloyu hizalar."
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "Tablonun başlık bölümünü ve gövde bölümünü ayıran etiketler hangileridir?",
   "opts": [
    "`<caption>` ve `<col>`",
    "`<thead>` ve `<tbody>`",
    "`<title>` ve `<table>`",
    "`<head>` ve `<body>`",
    "`<th>` ve `<td>`"
   ],
   "a": 1,
   "exp": "Tablo da head/body gibi ayrılır: thead ve tbody."
  },
  {
   "type": "mc",
   "topic": "tablo",
   "q": "Sütunları gruplayarak arka plan rengi vermek için hangi etiket kullanılır?",
   "opts": [
    "`<thead>`",
    "`<rowgroup>`",
    "`<tbody>`",
    "`<caption>`",
    "`<colgroup>`"
   ],
   "a": 4,
   "exp": "`<colgroup><col span=\"2\" style=\"background-color:red\"></colgroup>`."
  },
  {
   "type": "fill",
   "topic": "tablo",
   "q": "İki satırı (alt alta) birleştiren hücreyi tamamla.",
   "code": "<table border=\"1\">\n  <tr><td ____=\"2\">E</td><td>F</td></tr>\n  <tr><td>J</td></tr>\n</table>",
   "ans": [
    "rowspan"
   ],
   "cs": false,
   "exp": "Alt alta birleştirme rowspan."
  },
  {
   "type": "fill",
   "topic": "tablo",
   "q": "Hücre içi boşluk 10 olsun.",
   "code": "<table border=\"1\" ____=\"10\">\n  <tr><td>hücre</td></tr>\n</table>",
   "ans": [
    "cellpadding"
   ],
   "cs": false,
   "exp": "cellpadding iç boşluk."
  },
  {
   "type": "match",
   "topic": "tablo",
   "q": "Tablo parametrelerini eşleştir.",
   "pairs": [
    [
     "cellpadding",
     "Hücre içi boşluk"
    ],
    [
     "cellspacing",
     "Hücreler arası boşluk"
    ],
    [
     "colspan",
     "Yan yana hücreleri birleştirme"
    ],
    [
     "rowspan",
     "Alt alta hücreleri birleştirme"
    ],
    [
     "valign",
     "Hücre içi dikey hizalama"
    ]
   ],
   "exp": "align yatay, valign dikey; colspan yan yana, rowspan alt alta.",
   "choices": [
    "Alt alta hücreleri birleştirme",
    "Hücre içi boşluk",
    "Hücre içi dikey hizalama",
    "Hücreler arası boşluk",
    "Yan yana hücreleri birleştirme"
   ]
  },
  {
   "type": "match",
   "topic": "tablo",
   "q": "Tablo etiketlerini eşleştir.",
   "pairs": [
    [
     "<table>",
     "Tabloyu başlatır"
    ],
    [
     "<tr>",
     "Satır"
    ],
    [
     "<td>",
     "Veri hücresi"
    ],
    [
     "<th>",
     "Başlık hücresi"
    ],
    [
     "<caption>",
     "Tablo açıklaması"
    ]
   ],
   "exp": "thead başlık bölümü, tbody gövde bölümü.",
   "choices": [
    "Veri hücresi",
    "Satır",
    "Başlık hücresi",
    "Tablo açıklaması",
    "Tabloyu başlatır"
   ]
  },
  {
   "type": "open",
   "topic": "tablo",
   "q": "Kenarlığı yeşil, arka planı `#FFE7C1` olan 2 satır 3 sütunlu bir tablo yazınız: 1. satır Artvin, Rize, Trabzon; 2. satır Adana, Mersin, Hatay.",
   "model": "- `<table border=\"1\" bordercolor=\"green\" bgcolor=\"#FFE7C1\">`\n- 2 `<tr>`, her birinde 3 `<td>`.",
   "modelCode": "<table border=\"1\" bordercolor=\"green\" bgcolor=\"#FFE7C1\">\n  <tr>\n    <td>Artvin</td>\n    <td>Rize</td>\n    <td>Trabzon</td>\n  </tr>\n  <tr>\n    <td>Adana</td>\n    <td>Mersin</td>\n    <td>Hatay</td>\n  </tr>\n</table>",
   "h": 80
  },
  {
   "type": "open",
   "topic": "tablo",
   "q": "4 sütunlu, 3 satırlı tabloda: 1. satır A, B, C, D; 2. satırda E, F, G birleşik ve H; 3. satır I, J, K, L olacak. A ile B de birleşik olacak. Kodu yazınız.",
   "model": "- A–B birleşik: `<td colspan=\"2\">A</td>`, B yazılmaz.\n- E–F–G birleşik: `<td colspan=\"3\">E</td>`, F ve G yazılmaz.\n- `cellpadding=\"12\"` hücreleri genişletir.",
   "modelCode": "<table border=\"1\" cellpadding=\"12\">\n  <tr><td colspan=\"2\">A</td><td>C</td><td>D</td></tr>\n  <tr><td colspan=\"3\">E</td><td>H</td></tr>\n  <tr><td>I</td><td>J</td><td>K</td><td>L</td></tr>\n</table>",
   "h": 170
  },
  {
   "type": "open",
   "topic": "tablo",
   "q": "4 sütunlu, 3 satırlı tabloda: C, G ve K hücreleri alt alta birleşik; E ve I hücreleri alt alta birleşik. Diğer hücreler: A, B, D, F, H, J, L. Kodu yazınız.",
   "model": "- C: `<td rowspan=\"3\">`, G ve K yazılmaz.\n- E: `<td rowspan=\"2\">`, I yazılmaz.\n- 3. satırda sadece J ve L kalır.",
   "modelCode": "<table border=\"1\" cellpadding=\"12\">\n  <tr><td>A</td><td>B</td><td rowspan=\"3\">C</td><td>D</td></tr>\n  <tr><td rowspan=\"2\">E</td><td>F</td><td>H</td></tr>\n  <tr><td>J</td><td>L</td></tr>\n</table>",
   "h": 170
  },
  {
   "type": "open",
   "topic": "tablo",
   "q": "Hücre içi yatay hizalamayı gösteren tablo yazınız: genişliği 100 olan üç satırlık tabloda hücre1 sola, hücre2 ortaya, hücre3 sağa yaslansın.",
   "model": "- `<td>` etiketine `align=\"left\"`, `\"center\"`, `\"right\"`.",
   "modelCode": "<table border=\"1\" cellpadding=\"7\">\n  <tr><td width=\"100\" align=\"left\">hücre1</td></tr>\n  <tr><td width=\"100\" align=\"center\">hücre2</td></tr>\n  <tr><td width=\"100\" align=\"right\">hücre3</td></tr>\n</table>",
   "h": 130
  },
  {
   "type": "open",
   "topic": "tablo",
   "q": "`cellpadding` ile `cellspacing` arasındaki farkı ve `colspan` ile `rowspan` arasındaki farkı açıklayınız.",
   "model": "- **cellpadding**: hücre **içi** boşluk (yazı ile hücre kenarı arası). 0 ise yazı kenara bitişik.\n- **cellspacing**: hücre **dışı** boşluk (hücreler arası).\n- **colspan**: yan yana (aynı satırdaki) hücreleri birleştirir = sütun birleştirme.\n- **rowspan**: alt alta (aynı sütundaki) hücreleri birleştirir = satır birleştirme."
  }
 ]
};
window.EXTRA_CODE = [];
