/* MBP1145 Web Tasarımı I · konu özetleri. tools/build.py ile üretildi. */
window.COURSE = {
 "id": "mbp1145",
 "lang": "html",
 "storeKey": "mbp1145-best",
 "themeKey": "sofl-theme",
 "points": {
  "mc": 3,
  "fill": 3,
  "match": 3,
  "open": 13
 },
 "randomMix": [
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "mc",
  "open"
 ],
 "randomTitle": "Rastgele deneme (30 soru)",
 "randomDesc": "29 test + 1 klasik; 9 konuya yayılır. Az gördüğün sorular önce gelir.",
 "reviewTitle": "Web Tasarımı I",
 "reviewLead": "Hocanın 8 sunumundan 9 konu: internet ve web kavramları, HTML'e giriş ve tasarım ilkeleri, temel yapı, metin etiketleri, listeler, resim, bağlantılar, `<style>` ile CSS ve tablolar. Kod örneklerinin altında **tarayıcıdaki görünümü** var.",
 "testLead": "Sınav 30 soru, biri klasik. Önce **deneme sınavlarını** çöz (4 deneme, ortak soru yok). Klasik soru için **Klasik soru provası**na bak. Toplam 211 soru; görünüm soran sorular tarayıcıda açılarak doğrulandı.",
 "formatTitle": "Sınav formatı (varsayım)",
 "formatNote": "Bilinen: 30 soru, 1 tanesi klasik. Puan dağılımı açıklanmadı; burada **varsayım** olarak test 29 × 3 = 87, klasik 13 puan sayıldı.",
 "hocaLink": {
  "href": "#test/deneme1",
  "text": "Deneme sınavı 1'i çöz →"
 },
 "hocaTitle": "Klasik soru",
 "hocaNote": "Klasik soru büyük ihtimalle \"aşağıdaki görünümü veren kodu yazınız\" tipinde: tablo (colspan/rowspan), liste, `<style>` ile class.",
 "trapsLead": "Testlerde en çok karıştırılan noktalar."
};
window.EXAM_FORMAT = [
 {
  "range": "29 soru",
  "what": "Çoktan seçmeli test",
  "big": "87",
  "small": "puan"
 },
 {
  "range": "1 soru",
  "what": "Klasik (kod yazma / açıklama)",
  "big": "13",
  "small": "puan"
 },
 {
  "range": "Toplam",
  "what": "30 soru",
  "big": "30",
  "small": "soru"
 }
];
window.TRAPS = [
 {
  "t": "Türkiye internete **12 Nisan 1993**'te **ODTÜ ve TÜBİTAK** ile bağlandı. ARPA **1969**.",
  "topic": "internet"
 },
 {
  "t": "URL'nin **3 bölümü**: protokol (`http://`), alan adı (`www.ornek.edu.tr`), dizin yolu (`/ders/1.html`).",
  "topic": "internet"
 },
 {
  "t": "`edu` eğitim, `com` ticari, `gov` devlet, `mil` askeri, `net` ağ destek, `gen` genel amaçlı.",
  "topic": "internet"
 },
 {
  "t": "HTML **işaretleme** dilidir, programlama dili değil. Dosya `.htm` ya da `.html`.",
  "topic": "tasarim"
 },
 {
  "t": "Front-end: HTML, CSS, JavaScript. Back-end: PHP, Python, Node.js, Java, veri tabanı.",
  "topic": "tasarim"
 },
 {
  "t": "HTML büyük/küçük harfe **duyarlı değildir**. Parametre **başlangıç** etiketine, değeri **tırnak** içine yazılır.",
  "topic": "temel"
 },
 {
  "t": "İç içe etiketlerde **ilk açılan en son kapatılır**: `<b><u>…</u></b>`.",
  "topic": "temel"
 },
 {
  "t": "`<title>` sekmedeki başlıktır ve `<head>` içindedir; sayfada görünenler `<body>` içindedir.",
  "topic": "temel"
 },
 {
  "t": "`vlink` ziyaret edilmiş, `alink` tıklama anındaki bağlantı rengi.",
  "topic": "temel"
 },
 {
  "t": "`<h1>` en büyük, `<h6>` en küçük başlık. `<br>` ve `<hr>` kapatılmaz.",
  "topic": "metin"
 },
 {
  "t": "`<font size>` 1–7 arası. `<basefont>` başlıkları (`<h>`) etkilemez. `<hr size>` kalınlık, `width` uzunluk.",
  "topic": "metin"
 },
 {
  "t": "`<ul>` type: disc, circle, square. `<ol>` type: 1, a, A, i, I; başlangıç `start`.",
  "topic": "liste"
 },
 {
  "t": "Tanımlama listesi: `<dl>`, `<dt>` terim, `<dd>` açıklama; `<li>` kullanılmaz.",
  "topic": "liste"
 },
 {
  "t": "Bir üst klasör `../`, iki üst `../../`. `alt` resim görünmeyince, `title` fare üstündeyken yazar.",
  "topic": "resim"
 },
 {
  "t": "Yeni pencere `target=\"_blank\"`. Çapa: `<a name=\"x\">` ile işaretle, `<a href=\"#x\">` ile git.",
  "topic": "link"
 },
 {
  "t": "CSS sınıfı nokta ile: `.par1 { }`; HTML'de `class=\"par1\"`. `<style>` `<head>` içine yazılır.",
  "topic": "css"
 },
 {
  "t": "`<tr>` satır, `<td>` hücre, `<th>` başlık hücresi. `cellpadding` iç, `cellspacing` dış boşluk.",
  "topic": "tablo"
 },
 {
  "t": "`colspan` yan yana (sütun), `rowspan` alt alta (satır) birleştirir; yutulan hücreler yazılmaz.",
  "topic": "tablo"
 }
];
window.TOPICS = [
 {
  "id": "internet",
  "title": "İnternet ve Web kavramları",
  "src": "Sunum 1",
  "blocks": [
   {
    "t": "p",
    "text": "**İnternet** (International Network, uluslararası ağ): dünyadaki bilgisayar ağlarını ve kurumsal sistemleri birbirine bağlayan elektronik iletişim ağıdır. Çok protokollüdür; bilgi bilgisayarlar arasında protokollere göre **paketler** halinde taşınır."
   },
   {
    "t": "table",
    "head": [
     "Tarih",
     "Olay"
    ],
    "rows": [
     [
      "1960'lar",
      "ABD hükümeti hataya dayanıklı, sağlam bir ağ için araştırma başlatır (askeri ve bilimsel amaç)."
     ],
     [
      "1962",
      "MIT'den araştırmacılar bilgisayarların küresel ağını öneren \"kısa notlar serisi\"ni yayınlar."
     ],
     [
      "1965",
      "MIT'den Lawrence Roberts çevirmeli telefon hattıyla Kaliforniya ile Massachusetts'teki iki bilgisayarı bağlar."
     ],
     [
      "1969",
      "**ARPA** (ARPANET) kurulur; ABD Savunma Bakanlığı destekli. Dosya transferi ve e-posta ile kullanıcı hızla artar."
     ],
     [
      "1983",
      "Dünya çapında hızla yaygınlaşmaya başlar."
     ],
     [
      "**12 Nisan 1993**",
      "Türkiye internete bağlanır: **ODTÜ ve TÜBİTAK** ortak çalışması."
     ]
    ]
   },
   {
    "t": "p",
    "text": "Ağlar telefon hatları, **fiber optik** kablolar ve **uydular** üzerinden veri taşır. Ağları devlet kurumları, üniversiteler, gönüllü kuruluşlar ve **İSS (İnternet Servis Sağlayıcı)** gibi ticari kuruluşlar işletir."
   },
   {
    "t": "p",
    "text": "**Temel internet kavramları**"
   },
   {
    "t": "table",
    "head": [
     "Kavram",
     "Anlamı"
    ],
    "rows": [
     [
      "**WWW** (World Wide Web, Web, W3)",
      "Yazı, resim, ses, film gibi verilere **etkileşimli** ulaşmayı sağlayan web sayfaları ağı. Siteler çoğunlukla `www` ile başlar."
     ],
     [
      "**E-posta**",
      "En yaygın internet uygulaması. **SMTP** (Simple Mail Transfer Protocol) ile çalışır, istemci/sunucu prensibiyle."
     ],
     [
      "**Download**",
      "İnternetten veri **indirmek**. Bir sayfayı açmak bile onu indirmektir."
     ],
     [
      "**Upload**",
      "Kendi bilgisayarındaki veriyi başka bilgisayara **yüklemek** (siteye fotoğraf yüklemek)."
     ],
     [
      "**Sunucu (server)**",
      "Bilgi istendiğinde **cevap veren** bilgisayar."
     ],
     [
      "**İstemci (client)**",
      "Bilgiyi **isteyen** bilgisayar. Siteye giren sen istemcisin."
     ],
     [
      "**Hosting** (barındırma)",
      "Site dosyalarının internete hızlı bağlı bir **web sunucusunda** tutulması; alan kiralamak."
     ],
     [
      "**Domain name** (alan adı)",
      "Sitenin internetteki adı. IP adresinin akılda kalan, kelimeli hâli. Alınmış alan adı tekrar alınamaz."
     ],
     [
      "**Tarayıcı (browser)**",
      "Web sayfalarını indirip HTML'i yorumlayarak gösteren program (Chrome, Firefox, Edge, Safari)."
     ]
    ]
   },
   {
    "t": "p",
    "text": "**Sunucu çeşitleri**: web sunucuları, dosya paylaşım sunucuları, medya sunucuları, veri tabanı sunucuları, **DNS** (alan adı) sunucuları."
   },
   {
    "t": "p",
    "text": "Ev bilgisayarı site barındırmaya uygun değildir: **upload hızı** genelde yetersizdir. Site, yüzlerce kullanıcıya aynı anda hizmet veren bir sunucuda durmalıdır."
   },
   {
    "t": "p",
    "text": "**E-posta adresi kuralları**: nokta `.`, tire `-`, alt çizgi `_` dışında sembol ve **Türkçe karakter** (ğ, ş, ü, ç, ö, ı, İ) kullanılmaz. Ücretsiz (`@gmail.com`, `@hotmail.com`) ve kurumsal (`@ankara.edu.tr`) adresler vardır."
   },
   {
    "t": "p",
    "text": "**URL** (Uniform Resource Locator, standart kaynak bulucu): internetteki her belgenin kendine özgü, tek adresi. **3 bölümden** oluşur:"
   },
   {
    "t": "table",
    "head": [
     "Bölüm",
     "Örnek"
    ],
    "rows": [
     [
      "1. Protokol",
      "`http://`, `ftp://`, `news://`"
     ],
     [
      "2. Domain (alan) adı",
      "`www.emyo.ankara.edu.tr`"
     ],
     [
      "3. Dizin yolu",
      "`/ders1/bolum10.html`"
     ]
    ]
   },
   {
    "t": "p",
    "text": "Alan adının içinde ayrıca **uzantı** ve **ülke adı** bölümleri vardır: `ankara.edu.tr` → `edu` uzantı, `tr` ülke."
   },
   {
    "t": "table",
    "head": [
     "Uzantı",
     "Anlamı",
     "Örnek"
    ],
    "rows": [
     [
      "`edu`",
      "Eğitim kurumları",
      "ankara.edu.tr"
     ],
     [
      "`com`",
      "Ticari kuruluşlar",
      "hmyazilim.com"
     ],
     [
      "`gov`",
      "Devlet kurumları",
      "tbmm.gov.tr"
     ],
     [
      "`mil`",
      "Askeri kurumlar",
      "tsk.mil.tr"
     ],
     [
      "`net`",
      "Ağ destek kurumları",
      "tr.net"
     ],
     [
      "`gen`",
      "Genel amaçlı siteler",
      "okey.gen.tr"
     ]
    ]
   },
   {
    "t": "p",
    "text": "Ülke adları: `tr` Türkiye, `de` Almanya, `fr` Fransa, `jp` Japonya, `ca` Kanada, `uk` Birleşik Krallık, `it` İtalya, `ru` Rusya."
   },
   {
    "t": "p",
    "text": "**Protokoller** (sunum 2 verilmedi; konu listesinde geçtiği için genel bilgi):"
   },
   {
    "t": "table",
    "head": [
     "Protokol",
     "Görevi"
    ],
    "rows": [
     [
      "**HTTP** / HTTPS",
      "Web sayfalarının tarayıcı ile sunucu arasında aktarılması. HTTPS şifrelidir."
     ],
     [
      "**TCP/IP**",
      "İnternetin temel protokol ailesi; veriyi paketlere böler ve adresler."
     ],
     [
      "**FTP**",
      "Dosya aktarımı (File Transfer Protocol)."
     ],
     [
      "**SMTP**",
      "E-posta gönderimi."
     ],
     [
      "**IP adresi**",
      "Ağdaki her bilgisayarın sayısal adresi (ör. `192.168.1.10`)."
     ],
     [
      "**DNS**",
      "Alan adını IP adresine çevirir."
     ]
    ]
   },
   {
    "t": "trap",
    "text": "Alan adı yazınca tarayıcı önce onu **IP adresine çevirir** (DNS), sonra o IP'deki sunucuya gider. **Sunucu** cevap veren, **istemci** isteyen taraftır."
   },
   {
    "t": "tip",
    "text": "Türkiye'nin internete bağlanma tarihi (**12 Nisan 1993**, ODTÜ + TÜBİTAK), **ARPA 1969**, URL'nin **3 bölümü** ve alan adı uzantıları sık sorulur."
   }
  ]
 },
 {
  "id": "tasarim",
  "title": "HTML'e giriş ve web tasarım ilkeleri",
  "src": "Sunum 3",
  "blocks": [
   {
    "t": "p",
    "text": "**HTML** (Hyper Text Markup Language) = **Hiper Metin İşaretleme Dili**. Tarayıcıların yorumladığı **metin tabanlı** bir dildir; yorumlanan metinden web sayfası oluşur. Dosya uzantısı **`.htm` ya da `.html`** olmalıdır."
   },
   {
    "t": "p",
    "text": "**Hypertext**: \"bir şeylere bağ kuran kelimelere sahip sayfalar\", yani bağlantılı metin."
   },
   {
    "t": "trap",
    "text": "HTML bir **programlama dili değil, işaretleme dilidir**. Döngü, değişken yoktur; etiketlerle içerik işaretlenir."
   },
   {
    "t": "p",
    "text": "**Web sitesine neden ihtiyaç var?** Dünya çapında tanınmak, reklam ve satış, eğlence ve kültür tanıtımı, haber, bilgi paylaşmak, iletişim."
   },
   {
    "t": "p",
    "text": "**Web sitesinin planlanması** (sırasıyla):"
   },
   {
    "t": "ul",
    "items": [
     "1. Sitenin **amacının** belirlenmesi",
     "2. Sitenin **içeriğine** karar verilmesi",
     "3. İçeriğin **düzenlenmesi**",
     "4. **Sayfa düzeninin** (tasarımın) belirlenmesi",
     "5. **Ana sayfanın** oluşturulması",
     "6. Bilgilerin yazılması"
    ]
   },
   {
    "t": "p",
    "text": "**Web tasarımında 5 temel ilke**"
   },
   {
    "t": "table",
    "head": [
     "İlke",
     "Ne demek?"
    ],
    "rows": [
     [
      "**İçeriğin belirlenmesi**",
      "En önemli şey içeriktir. Tasarımı güzel ama içeriği boş siteye kimse gelmez; tasarımı zayıf ama içeriği iyi siteye ziyaretçi gelir. Uzun cümle yerine sade anlatım."
     ],
     [
      "**Tasarımın belirlenmesi**",
      "Logo, yazılar, menüler nerede olacak; kâğıda ya da bilgisayara çizilir."
     ],
     [
      "**İşlevsellik**",
      "Ana sayfadan her sayfaya, iç sayfalardan da diğer sayfalara ve ana sayfaya bağlantı olmalı (alışveriş sitesinde her sayfadan sepete)."
     ],
     [
      "**Kullanılabilirlik**",
      "Kolay kullanım: okunur yazı tipi/renk/boyut, hızlı yüklenme, görünür menü, logodan ana sayfaya bağlantı, iletişim formu, çok içerikte arama kutusu."
     ],
     [
      "**Tarayıcılarla uyumluluk**",
      "Farklı tarayıcı, sürüm ve ekran çözünürlüklerinde düzgün görünmeli. Standartları **W3C** (World Wide Web Consortium, w3c.org) belirler."
     ]
    ]
   },
   {
    "t": "p",
    "text": "**Kullanılabilirlik maddeleri**: sayfa hızlı yüklenmeli; menü (navigasyon) kolay görülen yerde olmalı (genelde sayfa başı, sol ya da sağ); **logodan ana sayfaya** bağlantı verilmeli; her sayfada **\"Anasayfa\"** yazısı olmalı; iletişim bilgisi ve formu bulunmalı; önemli kelimeler kalın ya da renkli vurgulanmalı; içerik çoksa **arama kutusu** olmalı. Yazı renkleri yazıcıdan çıkınca da okunacak şekilde seçilmeli."
   },
   {
    "t": "p",
    "text": "**Front-end ve Back-end**"
   },
   {
    "t": "table",
    "head": [
     "",
     "Front-end (ön yüz)",
     "Back-end (arka yüz)"
    ],
    "rows": [
     [
      "Ne?",
      "Kullanıcının **gördüğü** ve etkileşimde bulunduğu kısım",
      "Görünmeyen kısım: sunucu, veri tabanı, API, iş mantığı"
     ],
     [
      "Teknolojiler",
      "**HTML** (yapı/içerik), **CSS** (stil, renk, düzen, animasyon), **JavaScript** (etkileşim, dinamiklik)",
      "Node.js, Python (Django, Flask), Ruby (Rails), PHP, Java (Spring), Go; SQL (MySQL, PostgreSQL, MSSQL) ve NoSQL (MongoDB, Cassandra)"
     ],
     [
      "Görevler",
      "Tasarım, **responsive** (mobil uyum), tıklama/form etkileşimi, hızlı yükleme, hata düzeltme",
      "Veri yönetimi, güvenlik (şifreleme, kimlik doğrulama), API ve web servisleri, performans, arka plan işleri"
     ]
    ]
   },
   {
    "t": "p",
    "text": "**API** (Application Programming Interface): front-end ile back-end arasındaki iletişimi sağlar; RESTful ya da GraphQL ile çalışır."
   },
   {
    "t": "trap",
    "text": "**CSS** görünümü (stil), **HTML** yapıyı, **JavaScript** etkileşimi sağlar. PHP, Python, Node.js **back-end** dilleridir."
   }
  ]
 },
 {
  "id": "temel",
  "title": "HTML temel yapısı ve etiket kuralları",
  "src": "Sunum 4_1 · Sunum 5_1",
  "blocks": [
   {
    "t": "p",
    "text": "HTML'de her şey metindir; yazmak için bir **editör** yeterlidir, Windows **Not Defteri** (Notepad) bile olur. Derste **Notepad++** kullanıldı."
   },
   {
    "t": "table",
    "head": [
     "Editör tipi",
     "Örnekler"
    ],
    "rows": [
     [
      "**Metin tabanlı** (kod yazılır, rutin işleri kolaylaştırır)",
      "HomeSite, HotDog, Notepad++"
     ],
     [
      "**WYSIWYG** (What You See Is What You Get, \"ne görürsen onu alırsın\"; görsel, kod gerektirmez)",
      "FrontPage, Dreamweaver, NetObjects Fusion"
     ]
    ]
   },
   {
    "t": "p",
    "text": "**Etiket (tag)**: `<` ve `>` arasına yazılan komut. Çoğu etiketin **başlangıç** ve **bitiş** etiketi vardır (`<b>` … `</b>`). Bazıları **tek** etikettir, kapatılmaz: `<br>`, `<hr>`, `<img>`."
   },
   {
    "t": "p",
    "text": "**Yazım kuralları**"
   },
   {
    "t": "ul",
    "items": [
     "Komutlar `< >` işaretleri arasına yazılır.",
     "HTML **büyük/küçük harfe duyarlı değildir**: `<BODY>` ile `<body>` aynıdır.",
     "Açılan etiket kapatılır; kapatırken `/` kullanılır.",
     "Dosya **.htm** ya da **.html** uzantısıyla kaydedilir.",
     "**Parametre** (nitelik) her zaman **başlangıç etiketine** yazılır, değeri **tırnak** içindedir: `<p align=\"center\">`.",
     "Etiketler iç içe olabilir; **ilk açılan en son kapatılır**."
    ]
   },
   {
    "t": "table",
    "head": [
     "Yanlış",
     "Doğru"
    ],
    "rows": [
     [
      "`<b><u>metin</b></u>`",
      "`<b><u>metin</u></b>`"
     ]
    ]
   },
   {
    "t": "p",
    "text": "**Temel yapı**: her belge `<html>` ile başlar, `</html>` ile biter. İki ana kısım vardır: `<head>` (başlık bölümü) ve `<body>` (gövde)."
   },
   {
    "t": "code",
    "code": "<html>\n<head>\n<title>İlk Sayfamız</title>\n</head>\n<body>\n<h1>Merhaba</h1>\nBu bizim ilk web sayfamız.\n</body>\n</html>",
    "prev": true,
    "h": 110
   },
   {
    "t": "table",
    "head": [
     "Etiket",
     "Görevi"
    ],
    "rows": [
     [
      "`<html>`",
      "Tüm HTML kodları bunun arasındadır; genelde parametresiz kullanılır."
     ],
     [
      "`<head>`",
      "Sayfa hakkındaki bilgiler: `<title>`, `<style>`, `<link>`, `<meta>`, `<script>`, `<noscript>`. Görünmez."
     ],
     [
      "`<title>`",
      "Sayfanın **tarayıcı sekmesindeki** başlığı. `<head>` içine yazılır."
     ],
     [
      "`<body>`",
      "Sayfada **görünen** her şey: metin, tablo, resim, video, bağlantı."
     ]
    ]
   },
   {
    "t": "p",
    "text": "**Meta etiketleri** (`<head>` içinde): Türkçe karakterlerin (ç, ğ, ı, ş, ö, ü) düzgün görünmesi için karakter seti yazılır."
   },
   {
    "t": "code",
    "code": "<head>\n<meta charset=\"UTF-8\">\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=iso-8859-9\">\n<meta http-equiv=\"Content-Type\" content=\"text/html; charset=windows-1254\">\n<meta name=\"description\" content=\"HTML ile Web Tasarımı\">\n<meta name=\"keywords\" content=\"HTML, Web, Tasarım, CSS, Js\">\n<meta name=\"author\" content=\"Zafer BAŞAR\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n</head>"
   },
   {
    "t": "table",
    "head": [
     "Meta",
     "Anlamı"
    ],
    "rows": [
     [
      "`charset`",
      "Karakter seti (Türkçe için **UTF-8**, **iso-8859-9** ya da **windows-1254**)"
     ],
     [
      "`description`",
      "Sayfanın açıklaması (arama motorları için)"
     ],
     [
      "`keywords`",
      "Anahtar kelimeler"
     ],
     [
      "`author`",
      "Yazar"
     ],
     [
      "`viewport`",
      "Mobil uyum"
     ]
    ]
   },
   {
    "t": "p",
    "text": "**`<body>` parametreleri**"
   },
   {
    "t": "table",
    "head": [
     "Parametre",
     "Değer",
     "Tanımı"
    ],
    "rows": [
     [
      "`bgcolor`",
      "renk",
      "Arka plan **rengi**: `<body bgcolor=\"orange\">`, `bgcolor=\"#CCCC33\"`"
     ],
     [
      "`background`",
      "URL",
      "Arka plan **resmi**: `<body background=\"logo.jpg\">`"
     ],
     [
      "`text`",
      "renk",
      "Belgedeki **metin** rengi"
     ],
     [
      "`link`",
      "renk",
      "Bağlantıların rengi"
     ],
     [
      "`vlink`",
      "renk",
      "**Ziyaret edilmiş** bağlantıların rengi"
     ],
     [
      "`alink`",
      "renk",
      "Bağlantıya **tıklandığı anda** oluşacak renk (aktif)"
     ]
    ]
   },
   {
    "t": "p",
    "text": "Renkler adla (`red`) ya da onaltılık kodla (`#FF0000`) yazılır: `#FF0000` kırmızı, `#00FF00` yeşil, `#0000FF` mavi, `#FFFFFF` beyaz, `#000000` siyah."
   },
   {
    "t": "trap",
    "text": "`link` = bağlantı rengi, `vlink` = ziyaret edilmiş (visited), `alink` = tıklama anı (active). `text` normal yazı rengidir."
   }
  ]
 },
 {
  "id": "metin",
  "title": "Metin biçimlendirme etiketleri",
  "src": "Sunum 4_1 · Sunum 5_1",
  "blocks": [
   {
    "t": "table",
    "head": [
     "Etiket",
     "Adı",
     "İşlevi"
    ],
    "rows": [
     [
      "`<h1>` … `<h6>`",
      "Heading",
      "Başlık. **Sayı azaldıkça yazı büyür**: `<h1>` en büyük, `<h6>` en küçük."
     ],
     [
      "`<p>`",
      "Paragraf",
      "Yazıyı kesip **bir satır boşluk** bırakır, satır başından devam eder."
     ],
     [
      "`<br>`",
      "Break",
      "Alt satıra geçer (Enter). **Kapatılmaz.**"
     ],
     [
      "`<hr>`",
      "Horizontal rule",
      "Yatay çizgi. **Kapatılmaz.**"
     ],
     [
      "`<b>`, `<strong>`",
      "Bold",
      "Kalın yazı"
     ],
     [
      "`<i>`, `<em>`",
      "Italic",
      "Eğik (italik) yazı"
     ],
     [
      "`<u>`",
      "Underline",
      "Altı çizili yazı"
     ],
     [
      "`<s>`",
      "Strike",
      "Üstü çizili yazı"
     ],
     [
      "`<center>`",
      "",
      "Ortalar"
     ],
     [
      "`<pre>`",
      "Preformatted",
      "Arasındaki metni **aynen** (boşluk ve satırlarıyla) yazar"
     ],
     [
      "`<font>`",
      "Font",
      "Yazı tipi, boyutu, rengi"
     ]
    ]
   },
   {
    "t": "p",
    "text": "**`align` parametresi** (`<h1>`…`<h6>` ve `<p>`): `left` sola, `right` sağa, `center` ortala, `justify` iki yana yasla."
   },
   {
    "t": "code",
    "code": "<body bgcolor=\"red\">\n<h1 align=\"center\">Metin Etiketleri Denemeleri</h1>\n<h3 align=\"center\">Metin Etiketleri Denemeleri</h3>\n<h6 align=\"center\">Metin Etiketleri Denemeleri</h6>\n</body>",
    "prev": true,
    "h": 130
   },
   {
    "t": "p",
    "text": "**`<font>` parametreleri**: `size` yazı boyu (**1–7** arası), `color` renk, `face` yazı tipi. `<basefont>` sayfanın ana yazı tipini belirler ama **`<h>` başlıklarını etkilemez**."
   },
   {
    "t": "code",
    "code": "<font face=\"Algerian\" size=\"7\" color=\"blue\">Merhaba</font>\n<font face=\"Algerian\" size=\"5\" color=\"red\">Merhaba</font>\n<font face=\"Algerian\" size=\"3\" color=\"purple\">Merhaba</font>",
    "prev": true,
    "h": 80
   },
   {
    "t": "p",
    "text": "**`<hr>` parametreleri**: `size` çizginin **kalınlığı**, `width` çizginin **uzunluğu**, `align` konumu (left, right, center)."
   },
   {
    "t": "code",
    "code": "<b>Ey Türk Gençliği</b><br>\nBirinci vazifen, Türk istiklalini, Türk Cumhuriyetini<br>\nilelebet muhafaza ve müdafaa etmektir.\n<hr size=\"6\" width=\"200\" align=\"center\">\n<h5 align=\"center\"><i>Mustafa Kemal Atatürk</i></h5>",
    "prev": true,
    "h": 160
   },
   {
    "t": "p",
    "text": "**Özel karakterler**: HTML'de anlamı olan ya da klavyede olmayan işaretler kodla yazılır."
   },
   {
    "t": "table",
    "head": [
     "Kod",
     "Karakter",
     "Anlamı"
    ],
    "rows": [
     [
      "`&nbsp;`",
      "(boşluk)",
      "Bölünmeyen boşluk; HTML'de art arda boşluklar tek boşluk sayılır"
     ],
     [
      "`&lt;`",
      "<",
      "Küçüktür"
     ],
     [
      "`&gt;`",
      ">",
      "Büyüktür"
     ],
     [
      "`&amp;`",
      "&",
      "ve işareti"
     ],
     [
      "`&quot;`",
      "\"",
      "Çift tırnak"
     ],
     [
      "`&copy;`",
      "©",
      "Telif hakkı"
     ],
     [
      "`&reg;`",
      "®",
      "Tescilli marka"
     ],
     [
      "`&euro;`",
      "€",
      "Euro"
     ]
    ]
   },
   {
    "t": "code",
    "code": "<p>a &lt; b ve b &gt; c</p>\n<p>Ali&nbsp;&nbsp;&nbsp;Veli</p>\n<p>&copy; 2026 Yaşar Üniversitesi</p>",
    "prev": true,
    "h": 110
   },
   {
    "t": "trap",
    "text": "`<br>` ve `<hr>` **kapatılmaz**. `<p>` paragraf yapar (araya boşluk koyar), `<br>` sadece alt satıra geçer. `<h1>` **en büyük** başlıktır."
   },
   {
    "t": "tip",
    "text": "\"Aşağıdaki görünümü elde ediniz\" tipi sorularda `<h1 align=\"center\">`, `<font size color face>`, `<hr size width align>` ve `<br>` birlikte kullanılır."
   }
  ]
 },
 {
  "id": "liste",
  "title": "Listeler",
  "src": "Sunum 5_1",
  "blocks": [
   {
    "t": "p",
    "text": "HTML'de **3 tip liste** vardır:"
   },
   {
    "t": "table",
    "head": [
     "Liste",
     "Etiketler",
     "Madde başı"
    ],
    "rows": [
     [
      "**Sıralı** (ordered list)",
      "`<ol>` … `</ol>`, maddeler `<li>`",
      "Rakam, harf ya da Romen rakamı"
     ],
     [
      "**Sırasız** (unordered list)",
      "`<ul>` … `</ul>`, maddeler `<li>`",
      "Madde imi: daire, kare, çember"
     ],
     [
      "**Tanımlama** (definition list)",
      "`<dl>` … `</dl>`, `<dt>` terim, `<dd>` açıklama",
      "İmi yok; açıklama içeriden başlar"
     ]
    ]
   },
   {
    "t": "p",
    "text": "`<li>` = **list item** (liste maddesi)."
   },
   {
    "t": "p",
    "text": "**`<ol>` parametreleri**: `type` (numara türü) ve `start` (hangi rakam/harften başlayacağı)."
   },
   {
    "t": "table",
    "head": [
     "`type`",
     "Görünüm"
    ],
    "rows": [
     [
      "`1` (varsayılan)",
      "1. 2. 3."
     ],
     [
      "`a`",
      "a. b. c."
     ],
     [
      "`A`",
      "A. B. C."
     ],
     [
      "`i`",
      "i. ii. iii."
     ],
     [
      "`I`",
      "I. II. III."
     ]
    ]
   },
   {
    "t": "code",
    "code": "<ol type=\"A\">\n  <li>Elma</li>\n  <li>Armut</li>\n  <li>Kavun</li>\n</ol>\n<ol type=\"i\" start=\"3\">\n  <li>Kimya</li>\n  <li>Fizik</li>\n</ol>",
    "prev": true,
    "h": 170
   },
   {
    "t": "p",
    "text": "**`<ul>` parametresi** `type`: `disc` (içi dolu daire, varsayılan), `circle` (içi boş daire), `square` (içi dolu kare)."
   },
   {
    "t": "code",
    "code": "<ul type=\"disc\">\n  <li>Kimya\n    <ul type=\"square\">\n      <li>Organik</li>\n      <li>İnorganik</li>\n    </ul>\n  </li>\n  <li>Matematik\n    <ul type=\"circle\">\n      <li>Türev</li>\n    </ul>\n  </li>\n</ul>",
    "prev": true,
    "h": 170
   },
   {
    "t": "p",
    "text": "**İç içe liste**: bir `<li>`'nin içine yeni bir `<ol>` ya da `<ul>` yazılır. Sıralı ve sırasız liste birlikte kullanılabilir."
   },
   {
    "t": "code",
    "code": "<ol>\n  <li>En sevdiğim yaz meyveleri:\n    <ul type=\"circle\">\n      <li>Kayısı</li>\n      <li>Şeftali</li>\n    </ul>\n  </li>\n  <li>En sevdiğim kış meyveleri:\n    <ul type=\"circle\">\n      <li>Portakal</li>\n      <li>Mandalina</li>\n    </ul>\n  </li>\n</ol>",
    "prev": true,
    "h": 180
   },
   {
    "t": "p",
    "text": "**Tanımlama listesi**: `<li>` yerine `<dt>` (tanımlanan terim) ve `<dd>` (açıklama) kullanılır; liste `<dl>` arasına yazılır."
   },
   {
    "t": "code",
    "code": "<dl>\n  <dt><font color=\"red\">En sevdiğim hayvanlar</font></dt>\n  <dd>Kediler ve kaplumbağalardır.</dd>\n  <dt><font color=\"red\">En sevdiğim çiçekler</font></dt>\n  <dd>Papatyalara bayılırım.</dd>\n</dl>",
    "prev": true,
    "h": 140
   },
   {
    "t": "trap",
    "text": "Sırasız listede `type` değerleri **disc, circle, square**; sıralı listede **1, a, A, i, I**. Slaytta \"`<ol>` için disc/circle/square\" yazıyor; doğrusu `<ul>`."
   },
   {
    "t": "tip",
    "text": "`<dl>` tanımlama listesinde `<li>` **yoktur**: `<dt>` terim, `<dd>` açıklama."
   }
  ]
 },
 {
  "id": "resim",
  "title": "Resim ekleme",
  "src": "Sunum 5_1",
  "blocks": [
   {
    "t": "p",
    "text": "Resim `<img>` etiketiyle eklenir; kapatılmaz. Resmin yeri `src` parametresiyle verilir. Slayta göre resim **gif** ya da **jpg** formatında olmalıdır."
   },
   {
    "t": "code",
    "code": "<img src=\"papatya.gif\" width=\"150\" height=\"65\" alt=\"Papatya resmi\">",
    "prev": true,
    "h": 90
   },
   {
    "t": "table",
    "head": [
     "Parametre",
     "Görevi"
    ],
    "rows": [
     [
      "`src`",
      "Resmin **yolu ve adı** (zorunlu)"
     ],
     [
      "`width`",
      "Resmin **eni** (piksel)"
     ],
     [
      "`height`",
      "Resmin **boyu** (piksel)"
     ],
     [
      "`align`",
      "Hizalama: `left`, `right`, `center`; metinle kullanılınca resim metne göre hizalanır"
     ],
     [
      "`alt`",
      "**Alternatif metin**: resim görüntülenmezse yerinde yazar"
     ],
     [
      "`title`",
      "Fare resmin üstüne gelince çıkan **ipucu** yazısı"
     ],
     [
      "`border`",
      "Çerçeve kalınlığı; `0` çerçeveyi kaldırır"
     ]
    ]
   },
   {
    "t": "p",
    "text": "**Dosya yolu** (tarayıcı, açık olan HTML dosyasının klasörünü **kök** kabul eder):"
   },
   {
    "t": "table",
    "head": [
     "Durum",
     "Yazım"
    ],
    "rows": [
     [
      "Resim HTML ile **aynı klasörde**",
      "`src=\"papatya.gif\"`"
     ],
     [
      "Resim **alt klasörde** (resim/)",
      "`src=\"resim/papatya.gif\"`"
     ],
     [
      "Resim **bir üst** klasörün içinde",
      "`src=\"../resim/papatya.gif\"`"
     ],
     [
      "**İki üst** klasör",
      "`src=\"../../resim/papatya.gif\"`"
     ]
    ]
   },
   {
    "t": "p",
    "text": "Örnek: HTML `c:\\html_ders\\sayfalarim\\deneme.htm`, resim `c:\\html_ders\\resim\\papatya.gif` ise önce bir üste çıkılır, sonra resim klasörüne girilir: `../resim/papatya.gif`."
   },
   {
    "t": "p",
    "text": "**Arka plana resim**: `<body background=\"gokyuzu.jpg\">`. Resim tüm sayfayı kaplayacak şekilde döşenir; en/boy yazmaya gerek yoktur. `bgcolor` ile birlikte de yazılabilir."
   },
   {
    "t": "code",
    "code": "<body bgcolor=\"red\">\n<h1>RESİM EKLEME</h1>\n<img src=\"resim/2024_3.jpg\" alt=\"happy new year\" title=\"happy new year\" width=\"500\">\n</body>",
    "prev": true,
    "h": 130
   },
   {
    "t": "trap",
    "text": "`alt` resim **görünmediğinde** yerine yazılan metindir; fare üstüne gelince çıkan yazı `title`'dır (slayt alt'ın eski tarayıcılarda bunu da yaptığını söyler). Üst klasör `../` ile gösterilir."
   },
   {
    "t": "tip",
    "text": "`width` = **en** (genişlik), `height` = **boy** (yükseklik). İkisini yazmak zorunlu değil ama faydalıdır."
   }
  ]
 },
 {
  "id": "link",
  "title": "Bağlantılar (link)",
  "src": "Sunum 6",
  "blocks": [
   {
    "t": "p",
    "text": "Bağlantı **`<a>` … `</a>`** etiketiyle yapılır, adres `href` parametresine yazılır. Arasındaki yazı ya da resim tıklanabilir olur; aksi belirtilmezse yazı **mavi ve altı çizili** görünür, imleç **el** şekline döner."
   },
   {
    "t": "code",
    "code": "<a href=\"https://www.yasar.edu.tr/\">Yaşar Üniversitesi</a><br>\n<a href=\"https://myo.yasar.edu.tr/\">Meslek Yüksekokulu</a><br>\n<a href=\"sayfa2.html\">İkinci sayfa</a>",
    "prev": true,
    "h": 90
   },
   {
    "t": "table",
    "head": [
     "Parametre",
     "Değer",
     "Görevi"
    ],
    "rows": [
     [
      "`href`",
      "URL",
      "Bağlantının adresi"
     ],
     [
      "`target`",
      "`_blank`, `_self`, `_parent`, `_top`, çerçeve adı",
      "Bağlantının açılacağı pencere"
     ],
     [
      "`download`",
      "dosya adı",
      "Dosyayı açmak yerine **indirir**; değer indirilen dosyanın adı olur"
     ],
     [
      "`name`",
      "ad",
      "Sayfa içi bağlantı için **çapa** (işaret) koyar"
     ]
    ]
   },
   {
    "t": "table",
    "head": [
     "`target`",
     "Anlamı"
    ],
    "rows": [
     [
      "`_blank`",
      "**Yeni** bir pencerede açar"
     ],
     [
      "`_self`",
      "**Aynı** pencerede açar (varsayılan)"
     ],
     [
      "`_top`",
      "Aynı pencerede, **en üstten** itibaren açar (çerçeveleri kaldırır)"
     ],
     [
      "`_parent`",
      "Açılan bağlantı, açık sayfayı oluşturmuş bir **ana sayfa** varsa onun yerine konur"
     ],
     [
      "çerçeve adı",
      "Adı verilen **çerçevede** açar"
     ]
    ]
   },
   {
    "t": "p",
    "text": "**Bağlantı türleri**"
   },
   {
    "t": "table",
    "head": [
     "Tür",
     "Örnek",
     "Ne olur?"
    ],
    "rows": [
     [
      "Web sitesi",
      "`<a href=\"http://www.benimsitem.com/\">`",
      "Siteye gider"
     ],
     [
      "Resim / sayfa",
      "`<a href=\"meyve.gif\">`",
      "Tarayıcı resmi açar (htm, txt, jpg, gif gösterilebilir)"
     ],
     [
      "Dosya",
      "`<a href=\"midi.zip\">`",
      "Tarayıcı zip, doc, xls, mp3'ü gösteremez; **aç ya da kaydet** diye sorar"
     ],
     [
      "İndirme",
      "`<a href=\"papatya.gif\" download=\"cicek\">`",
      "Açmadan indirir"
     ],
     [
      "FTP",
      "`<a href=\"ftp://ftp.benimsitem.com/\">`",
      "FTP adresine gider"
     ],
     [
      "E-posta",
      "`<a href=\"mailto:mymail@mail.com\">`",
      "E-posta programı açılır, **kime** kısmı dolar"
     ]
    ]
   },
   {
    "t": "p",
    "text": "**Resme bağlantı**: `<img>` etiketi `<a href>` … `</a>` arasına alınır. `border` resmin bağlantı çerçevesidir; `0` çerçeveyi yok eder."
   },
   {
    "t": "code",
    "code": "<a href=\"sayfa2.html\">\n  <img src=\"resim/papatya.gif\" width=\"150\" height=\"65\" border=\"1\" alt=\"papatya\">\n</a>",
    "prev": true,
    "h": 100
   },
   {
    "t": "p",
    "text": "**Sayfa içi bağlantı (çapa)**: iki adım. 1) Gidilecek yer işaretlenir: `<a name=\"web\">`. 2) Menüdeki bağlantı `#` ile o işarete gider: `<a href=\"#web\">`."
   },
   {
    "t": "code",
    "code": "<a href=\"#web\">1. Web Tasarımının Temelleri</a><br>\n<a href=\"#prog\">2. Programlamanın Temelleri</a>\n\n<p><a name=\"web\"><b>1. Web Tasarımının Temelleri</b></a> ...</p>\n<p><a name=\"prog\"><b>2. Programlamanın Temelleri</b></a> ...</p>",
    "prev": true,
    "h": 150
   },
   {
    "t": "trap",
    "text": "Çapada `href`'e **`#` konur** (`href=\"#web\"`), `name`'e **konmaz** (`name=\"web\"`). Slayt örneğinde `name=#\"web\"` yazıyor; bu yanlış yazımdır. Başka sayfadaki çapaya: `href=\"sayfa2.html#web\"`."
   },
   {
    "t": "tip",
    "text": "Yeni pencerede açmak: `target=\"_blank\"`. E-posta bağlantısı: `mailto:`. Açmadan indirmek: `download`."
   }
  ]
 },
 {
  "id": "css",
  "title": "<style> etiketi ve CSS",
  "src": "Sunum 6_2",
  "blocks": [
   {
    "t": "p",
    "text": "`<style>` etiketi HTML etiketlerinin nasıl görüneceğini (biçimlendirme) tanımlar. Bir belgede birden çok `<style>` olabilir. `scoped` özelliği yoksa **`<head>` içine** yazılır. **CSS** = Cascading Style Sheets."
   },
   {
    "t": "p",
    "text": "Yazım: `seçici { özellik: değer; }`. Her özellik **iki nokta** ile değer alır, **noktalı virgülle** biter."
   },
   {
    "t": "code",
    "code": "<html>\n<head>\n<style>\n  p {color: blue;}\n  h1 {color: red;}\n  body {background-color: gray;}\n</style>\n</head>\n<body>\n<h1>Bu bir başlıktır.</h1>\n<p>Bu bir paragraftır.</p>\n</body>\n</html>",
    "prev": true,
    "h": 130
   },
   {
    "t": "table",
    "head": [
     "Özellik",
     "Örnek",
     "Ne yapar?"
    ],
    "rows": [
     [
      "`color`",
      "`color: red;`",
      "Yazı rengi"
     ],
     [
      "`background-color`",
      "`background-color: lightblue;`",
      "Arka plan rengi"
     ],
     [
      "`text-align`",
      "`text-align: center;`",
      "Yazı hizalama (left, right, center, justify)"
     ],
     [
      "`width` / `height`",
      "`width: 200px;`",
      "Genişlik / yükseklik"
     ],
     [
      "`border`",
      "`border: 2px solid green;`",
      "Kenarlık: kalınlık, tür (solid = düz), renk"
     ],
     [
      "`text-decoration`",
      "`underline` / `overline` / `line-through`",
      "Alt çizgi / üst çizgi / üstü çizili"
     ],
     [
      "`letter-spacing`",
      "`letter-spacing: 3px;`",
      "**Harf** aralığı"
     ],
     [
      "`word-spacing`",
      "`word-spacing: 10px;`",
      "**Kelime** aralığı"
     ],
     [
      "`text-shadow`",
      "`text-shadow: 3px 2px red;`",
      "Yazı gölgesi (yatay, dikey, renk)"
     ],
     [
      "`font-style`",
      "`normal` / `italic`",
      "Yazı stili (italik)"
     ],
     [
      "`font-size`",
      "`font-size: 40px;`",
      "Yazı boyutu"
     ],
     [
      "`font-weight`",
      "`font-weight: bold;`",
      "Kalın yazı"
     ],
     [
      "`font-family`",
      "`font-family: Times New Roman;`",
      "Yazı tipi"
     ]
    ]
   },
   {
    "t": "p",
    "text": "**Class (sınıf) ataması**: `p { }` yazınca **bütün** paragraflar etkilenir. Paragraflar farklı görünecekse her birine `class` verilir; CSS'te sınıf adının önüne **nokta** konur. Sınıf adını biz seçeriz."
   },
   {
    "t": "code",
    "code": "<style>\n  .par1 { text-align: center; color: red; }\n  .par2 { text-align: left; color: blue; }\n</style>\n<p class=\"par1\">Bu paragraf ortada ve rengi kırmızı</p>\n<p class=\"par2\">Bu paragraf solda ve rengi mavi</p>",
    "prev": true,
    "h": 100
   },
   {
    "t": "code",
    "code": "<style>\n  .par1 { background-color: black; color: white; font-style: italic; }\n  .par2 { background-color: green; font-size: 50px; text-decoration: underline; }\n  .par3 { color: blue; letter-spacing: 10px; text-align: right; }\n</style>\n<p class=\"par1\">Arka plan siyah, yazı beyaz ve italik</p>\n<p class=\"par2\">Arka plan yeşil, 50px, altı çizili</p>\n<p class=\"par3\">Mavi, harf aralığı 10px, sağa yaslı</p>",
    "prev": true,
    "h": 200
   },
   {
    "t": "trap",
    "text": "CSS'te sınıf **nokta** ile yazılır (`.par1`), HTML'de noktasız (`class=\"par1\"`). `letter-spacing` **harf**, `word-spacing` **kelime** aralığıdır. `line-through` üstü çizili, `overline` üst çizgi."
   },
   {
    "t": "tip",
    "text": "Bilmen gereken üç parça: **seçici**, **özellik**, **değer**. `p {color: blue;}` → seçici `p`, özellik `color`, değer `blue`."
   }
  ]
 },
 {
  "id": "tablo",
  "title": "Tablolar",
  "src": "Sunum 7 · Sunum 8",
  "blocks": [
   {
    "t": "p",
    "text": "Tablo `<table>` ile başlar. `<tr>` (table row) **satır**, `<td>` (table data) **hücre** (sütun) açar. Hücreye metin, resim, liste, paragraf, form, yatay çizgi, hatta başka tablo konabilir."
   },
   {
    "t": "code",
    "code": "<table border=\"1\">\n  <tr>\n    <td>satır 1, hücre 1</td>\n    <td>satır 1, hücre 2</td>\n  </tr>\n  <tr>\n    <td>satır 2, hücre 1</td>\n    <td>satır 2, hücre 2</td>\n  </tr>\n</table>",
    "prev": true,
    "h": 90
   },
   {
    "t": "table",
    "head": [
     "Etiket",
     "Görevi"
    ],
    "rows": [
     [
      "`<th>`",
      "**Sütun başlığı** hücresi (kalın ve ortalı görünür); `<td>` gibi `<tr>` içine yazılır"
     ],
     [
      "`<thead>`",
      "Tablonun **başlık** bölümü"
     ],
     [
      "`<tbody>`",
      "Tablonun **gövde** bölümü; `<tr>` ve `<td>`'ler burada"
     ],
     [
      "`<caption>`",
      "Tabloya **açıklama** (alt yazı); `align=\"bottom\"` ile tablonun altına alınır"
     ],
     [
      "`<colgroup>` + `<col>`",
      "Sütunları gruplayıp arka plan rengi verir; `<col span=\"2\">` iki sütunu birden etkiler"
     ]
    ]
   },
   {
    "t": "code",
    "code": "<table border=\"1\">\n  <caption align=\"bottom\">alt-yazı (caption)</caption>\n  <thead><tr><th>1.Sütun</th><th>2.Sütun</th><th>3.Sütun</th></tr></thead>\n  <tbody>\n    <tr><td>hücre1</td><td>hücre2</td><td>hücre3</td></tr>\n    <tr><td>hücre4</td><td>hücre5</td><td>hücre6</td></tr>\n  </tbody>\n</table>",
    "prev": true,
    "h": 130
   },
   {
    "t": "p",
    "text": "**`<table>` parametreleri**"
   },
   {
    "t": "table",
    "head": [
     "Parametre",
     "Görevi"
    ],
    "rows": [
     [
      "`border`",
      "Kenarlık kalınlığı. `border=\"0\"` çerçeveyi gizler"
     ],
     [
      "`bordercolor`",
      "Kenarlık rengi"
     ],
     [
      "`cellpadding`",
      "Hücre **içi** boşluk (yazı ile kenar arası). `0` → yazı kenara bitişik"
     ],
     [
      "`cellspacing`",
      "Hücre **dışı** boşluk (hücreler arası)"
     ],
     [
      "`align`",
      "Tabloyu sayfada hizalar: left, right, center"
     ],
     [
      "`width` / `height`",
      "Tablonun eni / boyu. Tablo **büyütülebilir ama küçültülemez** (içeriğinden küçük değer dikkate alınmaz)"
     ],
     [
      "`bgcolor`",
      "Arka plan rengi"
     ],
     [
      "`rules`",
      "İç kenarlıkların görünürlüğü"
     ]
    ]
   },
   {
    "t": "table",
    "head": [
     "`rules`",
     "Sonuç"
    ],
    "rows": [
     [
      "`none`",
      "Tüm iç kenarlıklar yok"
     ],
     [
      "`rows`",
      "Sadece satırlar arası (yatay) çizgiler kalır; **dikey** iç kenarlıklar yok"
     ],
     [
      "`cols`",
      "Sadece sütunlar arası (dikey) çizgiler kalır; **yatay** iç kenarlıklar yok"
     ]
    ]
   },
   {
    "t": "code",
    "code": "<table border=\"1\" bordercolor=\"green\" bgcolor=\"#FFE7C1\">\n  <tr><td>Artvin</td><td>Rize</td><td>Trabzon</td></tr>\n  <tr><td>Adana</td><td>Mersin</td><td>Hatay</td></tr>\n</table>",
    "prev": true,
    "h": 80
   },
   {
    "t": "p",
    "text": "**`<td>` parametreleri**"
   },
   {
    "t": "table",
    "head": [
     "Parametre",
     "Görevi"
    ],
    "rows": [
     [
      "`bgcolor`",
      "Hücrenin arka plan rengi: `<td bgcolor=\"#FF0000\">`"
     ],
     [
      "`background`",
      "Hücreye arka plan **resmi**"
     ],
     [
      "`align`",
      "Hücre içi **yatay** hizalama: left, center, right"
     ],
     [
      "`valign`",
      "Hücre içi **dikey** hizalama: top, middle, bottom"
     ],
     [
      "`width` / `height`",
      "Hücrenin eni / boyu (`<td width=\"30%\">`)"
     ],
     [
      "`colspan`",
      "**Sütun birleştirme**: yan yana hücreleri birleştirir"
     ],
     [
      "`rowspan`",
      "**Satır birleştirme**: alt alta hücreleri birleştirir"
     ]
    ]
   },
   {
    "t": "code",
    "code": "<table border=\"1\" cellpadding=\"7\">\n  <tr><td width=\"100\" align=\"left\">hücre1</td></tr>\n  <tr><td width=\"100\" align=\"center\">hücre2</td></tr>\n  <tr><td width=\"100\" align=\"right\">hücre3</td></tr>\n</table>",
    "prev": true,
    "h": 130
   },
   {
    "t": "p",
    "text": "**Hücre birleştirme**: birleşen hücre `colspan` / `rowspan` alır, **yutulan hücrelerin `<td>`'si silinir**."
   },
   {
    "t": "code",
    "code": "<table border=\"1\" cellpadding=\"12\">\n  <tr><td colspan=\"2\">A</td><td>C</td><td>D</td></tr>\n  <tr><td colspan=\"3\">E</td><td>H</td></tr>\n  <tr><td>I</td><td>J</td><td>K</td><td>L</td></tr>\n</table>",
    "prev": true,
    "h": 170
   },
   {
    "t": "p",
    "text": "Yukarıda: A ile B birleşti (`colspan=\"2\"`, B silindi); E, F, G birleşti (`colspan=\"3\"`, F ve G silindi)."
   },
   {
    "t": "code",
    "code": "<table border=\"1\" cellpadding=\"12\">\n  <tr><td>A</td><td>B</td><td rowspan=\"3\">C</td><td>D</td></tr>\n  <tr><td rowspan=\"2\">E</td><td>F</td><td>H</td></tr>\n  <tr><td>J</td><td>L</td></tr>\n</table>",
    "prev": true,
    "h": 170
   },
   {
    "t": "p",
    "text": "Yukarıda: C, G ve K alt alta birleşti (`rowspan=\"3\"`); E ile I birleşti (`rowspan=\"2\"`). 3. satırda yalnız J ve L kaldı."
   },
   {
    "t": "trap",
    "text": "Slayt \"aynı sütundaki hücreler için colspan, aynı satırdakiler için rowspan\" diyor; bu cümle **ters**. Doğrusu: **colspan yan yana** (aynı satırda, sütunları birleştirir), **rowspan alt alta** (aynı sütunda, satırları birleştirir). Slaytın kendi örnekleri de böyle."
   },
   {
    "t": "trap",
    "text": "`cellpadding` **içeri** (hücre içi), `cellspacing` **dışarı** (hücreler arası) boşluktur. `align` yatay, `valign` dikey hizalar."
   },
   {
    "t": "tip",
    "text": "Sık klasik soru: \"Aşağıdaki tablonun kodunu yazınız.\" Önce satır sayısını say (`<tr>`), sonra her satırdaki hücreleri; birleşen hücreye colspan/rowspan yaz, yutulanları yazma."
   }
  ]
 }
];
window.TOPIC_RULES = {
 "internet": "İnternet ağların ağıdır; WWW etkileşimli web sayfaları ağıdır. Sunucu cevap verir, istemci ister. URL = protokol + alan adı + dizin yolu. Alan adı, IP adresinin akılda kalan hâlidir.",
 "tasarim": "HTML = Hiper Metin İşaretleme Dili, uzantı .htm/.html. 5 ilke: içerik, tasarım, işlevsellik, kullanılabilirlik, tarayıcı uyumu. Front-end görünen kısım (HTML/CSS/JS), back-end görünmeyen kısım (sunucu, veri tabanı).",
 "temel": "Belge <html> ile başlar; <head> (title, meta, style) ve <body> (görünen her şey) bölümleri vardır. Etiketler büyük/küçük harfe duyarsız; parametre başlangıç etiketinde, değer tırnakta; ilk açılan en son kapanır.",
 "metin": "<h1> en büyük, <h6> en küçük başlık. <p> paragraf, <br> alt satır (kapatılmaz), <hr> yatay çizgi (kapatılmaz; size kalınlık, width uzunluk). <font size=\"1-7\" color face>.",
 "liste": "<ol> sıralı (type 1/a/A/i/I, start), <ul> sırasız (type disc/circle/square), maddeler <li>. <dl> tanımlama listesi: <dt> terim, <dd> açıklama.",
 "resim": "<img src=\"yol\" width=\"en\" height=\"boy\" alt=\"metin\">. Aynı klasör: ad; alt klasör: klasor/ad; üst klasör: ../ad. alt resim yoksa yazar, title fare üstündeyken.",
 "link": "<a href=\"adres\">yazı</a>. target=\"_blank\" yeni pencere. mailto: e-posta, download indirme. Sayfa içi: <a name=\"x\"> işaret, <a href=\"#x\"> bağlantı.",
 "css": "<style> head içinde: seçici { özellik: değer; }. Sınıf: .ad { } ve class=\"ad\". color yazı rengi, background-color arka plan, text-align hizalama, letter-spacing harf aralığı.",
 "tablo": "<table> → <tr> satır → <td> hücre (<th> başlık). border kenarlık, cellpadding iç, cellspacing dış boşluk. colspan yan yana, rowspan alt alta birleştirir; yutulan <td> silinir."
};
