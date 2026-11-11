/* Almanca Kitap Özeti içeriği (özgün Türkçe özet ve alıştırmalar) */
/* Teil I (1): §1–§11 */
K.part('t1', 'Teil I', 'Basit cümlenin parçaları: isim, artikel, zamir ve fiil', [

K.sec('s1', '§1', 'İsim çekimi I (Deklination des Nomens)', 10, [
  K.p('Almancada isim, cümledeki görevine göre dört hâlden (Kasus) birinde bulunur. Hâli en açık gösteren şey **artikel**dir; ismin kendisi çoğu zaman pek değişmez.'),
  K.tb(['Hâl', 'Soru', 'eril', 'dişil', 'nötr', 'çoğul'],
    [['Nominativ (yalın)', 'Wer? / Was?', 'der Vater', 'die Mutter', 'das Kind', 'die Kinder'],
     ['Akkusativ (-i hâli)', 'Wen? / Was?', 'den Vater', 'die Mutter', 'das Kind', 'die Kinder'],
     ['Dativ (-e hâli)', 'Wem?', 'dem Vater', 'der Mutter', 'dem Kind', 'den Kindern'],
     ['Genitiv (-in hâli)', 'Wessen?', 'des Vaters', 'der Mutter', 'des Kindes', 'der Kinder']]),
  K.ul(['**Özne** Nominativ\'dedir: *Der Gast öffnet die Tür.*',
        '**Belirtili nesne** (Türkçede genelde -i) Akkusativ\'dedir: *Der Gast kennt den Wirt.*',
        '**Kime/neye** sorusunun cevabı Dativ\'dedir: *Das Essen schmeckt dem Gast.*',
        '**Genitiv** sahipliği gösterir: *das Auto des Lehrers* (öğretmenin arabası).']),
  K.p('**Genitiv eki (eril ve nötr tekil):** çok heceli isimlerde `-s` (des Lehrers), tek heceli isimlerde çoğunlukla `-es` (des Mannes), `-s, -ss, -ß, -x, -z, -tz` ile bitenlerde mutlaka `-es` (des Glases, des Flusses, des Gesetzes).'),
  K.p('**Dativ çoğul** her zaman `-n` ile biter: *die Bäume → auf den Bäumen*. Çoğul zaten `-n` ile bitiyorsa ek gelmez (*mit den Frauen*), `-s` çoğullarında da `-n` eklenmez (*in den Autos*).'),
  K.tb(['Belirsiz artikel', 'eril', 'dişil', 'nötr'],
    [['Nom.', 'ein Mann', 'eine Frau', 'ein Kind'], ['Akk.', 'einen Mann', 'eine Frau', 'ein Kind'],
     ['Dat.', 'einem Mann', 'einer Frau', 'einem Kind'], ['Gen.', 'eines Mannes', 'einer Frau', 'eines Kindes']]),
  K.note('Ezber kısayolu: değişen hep **eril** artikeldir. Dişil ve nötr, Nominativ ile Akkusativ\'de aynı kalır. Belirsiz artikelin çoğulu yoktur: *ein Kind → Kinder*.'),
  K.ue('Boşluğa doğru artikeli yazın.', [
    ['Der Kellner bringt ___ Gast (m) die Rechnung.', 'dem'],
    ['Ich suche ___ Schlüssel (m).', 'den'],
    ['Das ist das Fahrrad ___ Schülerin.', 'der'],
    ['Wir helfen ___ Kindern.', 'den'],
    ['Er zeigt dem Besucher ___ Weg (m).', 'den'],
    ['Das ist das Büro ___ Lehrers.', 'des']])
]),

K.sec('s2', '§2', 'İsim çekimi II: n-Deklination', 15, [
  K.p('Bazı **eril** isimler tekil Nominativ dışındaki **bütün** hâllerde `-(e)n` eki alır. Buna **n-Deklination** (zayıf çekim) denir.'),
  K.tb(['', 'tekil', 'çoğul'],
    [['Nom.', 'der Junge', 'die Jungen'], ['Akk.', 'den Jungen', 'die Jungen'],
     ['Dat.', 'dem Jungen', 'den Jungen'], ['Gen.', 'des Jungen', 'der Jungen']]),
  K.p('**Hangi isimler?**'),
  K.ul(['`-e` ile biten eril canlılar: der Junge, der Kunde, der Kollege, der Neffe, der Löwe, der Affe',
        'Milliyet bildiren `-e` ile bitenler: der Türke, der Franzose, der Russe, der Grieche',
        'Yabancı kökenli `-ant, -ent, -ist, -at, -oge, -et` sonlu isimler: der Student, der Präsident, der Polizist, der Demokrat, der Biologe, der Planet',
        'Birkaç tek heceli isim: der Mensch, der Held, der Herr (tekilde `-n`, çoğulda `-en`: *dem Herrn, die Herren*), der Nachbar, der Bauer']),
  K.trap('Bazı isimler Genitiv\'de ayrıca `-s` alır: *der Name → des Namens*, aynı şekilde *der Gedanke, der Glaube, der Buchstabe, der Wille*. **Das Herz** nötr olduğu hâlde bu gruptadır: *des Herzens, dem Herzen*.'),
  K.p('**Ülke ve kıta halkları:** -e ile bitenler n-Deklination\'a uyar (*der Türke, des Türken*). -er ile bitenler normal çekilir (*der Engländer, des Engländers*). Dikkat: **der Deutsche** bir sıfattan türemiştir ve sıfat gibi çekilir (*ein Deutscher*).'),
  K.note('Pratik test: isim eril mi ve Nominativ dışında mı? İnsan ya da hayvan bildiriyorsa ve -e, -ent, -ist gibi bitiyorsa büyük ihtimalle `-n` alacak.'),
  K.ue('Parantezdeki ismi doğru biçimde yazın.', [
    ['Ich frage den ___ (Polizist).', 'Polizisten'],
    ['Das ist das Auto meines ___ (Nachbar).', 'Nachbarn'],
    ['Der Arzt hilft dem ___ (Patient).', 'Patienten'],
    ['Kennst du den ___ (Herr) dort?', 'Herrn'],
    ['Wie ist der Vorname des ___ (Kunde)?', 'Kunden'],
    ['Er hat keinen ___ (Name) genannt.', 'Namen']])
]),

K.sec('s3', '§3', 'Artikelin kullanımı', 19, [
  K.p('**Belirli artikel (der/die/das)**, bilinen ya da daha önce sözü edilen bir şeyden bahsederken kullanılır. Ayrıca tek olanlar (die Sonne, der Papst), dağ, nehir, deniz adları (die Zugspitze, der Rhein, die Ostsee) ve cadde adları belirli artikel alır.'),
  K.p('**Belirsiz artikel (ein/eine)**, ilk kez söz edilen ya da herhangi biri olan bir şey için kullanılır: *Dort steht ein Haus. Das Haus ist alt.*'),
  K.p('**Artikelsiz kullanım:**'),
  K.ul(['Belirsiz çoğulda: *Ich kaufe Äpfel.*',
        'Meslek, milliyet ve din bildirirken (sein, werden ile): *Er ist Lehrer. Sie wird Ärztin.*',
        'Ölçülemeyen maddelerde: *Ich trinke Milch. Sie hat Geld.*',
        'Özel adlar ve çoğu şehir/ülke adında: *Berlin, Deutschland* (ama *die Türkei, die Schweiz, der Iran*)',
        'Soyut kavramlarda genel anlamda: *Er hat Angst. Wir haben Hunger.*']),
  K.p('Olumsuzlukta belirsiz artikel ve artikelsiz isim **kein** ile olumsuz yapılır: *Ich habe ein Auto → Ich habe kein Auto. Ich trinke Milch → Ich trinke keine Milch.*'),
  K.trap('Meslek bir sıfatla nitelenirse artikel gelir: *Er ist Lehrer.* ama *Er ist ein guter Lehrer.*'),
  K.note('Türkçe "bir" kelimesini çoğu zaman söylemez; Almancada tekil sayılabilen isim genelde **artikelsiz kalamaz**. "Araba aldım" → *Ich habe ein Auto gekauft.*'),
  K.ue('Gerekiyorsa artikel yazın; gerekmiyorsa "–" yazın.', [
    ['Mein Bruder ist ___ Ingenieur.', '–'],
    ['Wir fahren im Sommer in ___ Türkei.', 'die'],
    ['Ich trinke morgens ___ Tee.', '–'],
    ['Gestern habe ich ___ Film gesehen. ___ Film war spannend.', 'einen · Der'],
    ['Sie ist ___ sehr gute Ärztin.', 'eine'],
    ['___ Rhein fließt durch Köln.', 'Der']])
]),

K.sec('s4', '§4', 'Şahıs zamirlerinin çekimi', 28, [
  K.tb(['Nom.', 'Akk.', 'Dat.'],
    [['ich', 'mich', 'mir'], ['du', 'dich', 'dir'], ['er', 'ihn', 'ihm'], ['sie', 'sie', 'ihr'], ['es', 'es', 'ihm'],
     ['wir', 'uns', 'uns'], ['ihr', 'euch', 'euch'], ['sie', 'sie', 'ihnen'], ['Sie (resmî)', 'Sie', 'Ihnen']]),
  K.ul(['Zamir, yerini tuttuğu ismin **cinsiyetine** uyar: *der Tisch → er, die Lampe → sie, das Buch → es.*',
        'Resmî hitap **Sie** her zaman büyük harfle yazılır ve fiil 3. çoğul gibi çekilir: *Kommen Sie?*',
        'Genitiv biçimleri (meiner, deiner…) günlük dilde neredeyse hiç kullanılmaz.']),
  K.ex([['Kennst du den Mann? – Ja, ich kenne **ihn**.', 'Adamı tanıyor musun? – Evet, onu tanıyorum.'],
        ['Ich gebe **dir** das Buch.', 'Kitabı sana veriyorum.'],
        ['Die Suppe ist kalt. – Ich wärme **sie** auf.', 'Çorba soğuk. – Onu ısıtıyorum.']]),
  K.note('Türkçede "o" tek kelimedir; Almancada isim eril ise **er/ihn/ihm**, dişil ise **sie/ihr** olur. Nesneler için de geçerli: *Wo ist der Schlüssel? – Er liegt auf dem Tisch.*'),
  K.ue('Altı çizili ismi uygun zamirle değiştirin (sadece zamiri yazın).', [
    ['Ich besuche **meine Tante**.', 'sie'],
    ['Wir danken **dem Lehrer**.', 'ihm'],
    ['Hast du **den Brief** gelesen?', 'ihn'],
    ['Das Geschenk gefällt **den Kindern**.', 'ihnen'],
    ['Er hilft **seiner Schwester**.', 'ihr'],
    ['**Das Fenster** ist offen.', 'Es']])
]),

K.sec('s5', '§5', 'İyelik artikelleri (Possessivartikel)', 31, [
  K.tb(['Şahıs', 'iyelik', 'Şahıs', 'iyelik'],
    [['ich', 'mein', 'wir', 'unser'], ['du', 'dein', 'ihr', 'euer'], ['er / es', 'sein', 'sie (çoğ.)', 'ihr'], ['sie', 'ihr', 'Sie', 'Ihr']]),
  K.p('İyelik artikeli, kendisinden sonra gelen ismin hâline ve cinsiyetine göre **ein** gibi çekilir. Çoğulda **die** gibi çekilir.'),
  K.tb(['', 'eril', 'dişil', 'nötr', 'çoğul'],
    [['Nom.', 'mein Sohn', 'meine Tochter', 'mein Kind', 'meine Kinder'], ['Akk.', 'meinen Sohn', 'meine Tochter', 'mein Kind', 'meine Kinder'],
     ['Dat.', 'meinem Sohn', 'meiner Tochter', 'meinem Kind', 'meinen Kindern'], ['Gen.', 'meines Sohnes', 'meiner Tochter', 'meines Kindes', 'meiner Kinder']]),
  K.trap('**Sahibe** göre seçilir, **sonu** ise sahip olunan şeye göre: *Er besucht seine Mutter* (erkek → sein, anne dişil → -e). *Sie besucht ihren Vater* (kadın → ihr, baba eril Akk. → -en).'),
  K.note('**euer** ek alınca ortadaki e düşer: *eure Mutter, euren Vater*. **unser** genelde düşmez: *unsere Wohnung*.'),
  K.ue('Boşluğa uygun iyelik artikelini yazın.', [
    ['Peter sucht ___ Brille (f).', 'seine'],
    ['Anna ruft ___ Bruder (m) an.', 'ihren'],
    ['Wir fahren mit ___ Auto (n).', 'unserem'],
    ['Kinder, wo sind ___ Schuhe?', 'eure'],
    ['Herr Kaya, ist das ___ Koffer?', 'Ihr'],
    ['Ich wohne bei ___ Eltern.', 'meinen']])
]),

K.sec('s6', '§6', 'Fiil çekimi', 35, [
  K.p('Almanca fiiller üç ana gruba ayrılır: **zayıf** (düzenli), **güçlü** (düzensiz) ve **karışık** fiiller. Her fiilin üç temel biçimi vardır: Infinitiv – Präteritum – Partizip II.'),
  K.tb(['Grup', 'Infinitiv', 'Präteritum', 'Partizip II', 'Özellik'],
    [['zayıf', 'machen', 'machte', 'gemacht', 'kök değişmez, -te / ge-...-t'],
     ['güçlü', 'fahren', 'fuhr', 'gefahren', 'kök ünlüsü değişir, ge-...-en'],
     ['karışık', 'bringen', 'brachte', 'gebracht', 'kök değişir ama -te / -t alır']]),
  K.tb(['Präsens', 'machen', 'fahren', 'arbeiten (Hilfs-e)'],
    [['ich', 'mache', 'fahre', 'arbeite'], ['du', 'machst', 'fährst', 'arbeitest'], ['er/sie/es', 'macht', 'fährt', 'arbeitet'],
     ['wir', 'machen', 'fahren', 'arbeiten'], ['ihr', 'macht', 'fahrt', 'arbeitet'], ['sie/Sie', 'machen', 'fahren', 'arbeiten']]),
  K.ul(['Güçlü fiillerde **du** ve **er** biçimlerinde ünlü değişebilir: a → ä (fahren → fährt), e → i (geben → gibt), e → ie (sehen → sieht).',
        'Kökü `-d, -t` ya da ünsüz + `m/n` ile biten fiillere araya **e** girer: *du arbeitest, er öffnet, es regnet.*',
        'Kökü `-s, -ß, -z` ile bitenlerde du biçimi sadece `-t` alır: *du heißt, du tanzt.*',
        'Präteritum\'da 1. ve 3. tekil şahıs ek almaz: *ich fuhr, er fuhr; ich machte, er machte.*']),
  K.note('Güçlü ve karışık fiillerin biçimleri kurala bağlanamaz, liste hâlinde ezberlenir. Kitabın sonunda düzensiz fiil listesi vardır; sözlük sekmesindeki B1 kartlarında da Präteritum ve Perfekt biçimleri yazıyor.'),
  K.ue('Fiili Präsens\'te ve parantezdeki şahısa göre çekin.', [
    ['(du) lesen', 'du liest'], ['(er) nehmen', 'er nimmt'], ['(du) warten', 'du wartest'],
    ['(sie, tekil) laufen', 'sie läuft'], ['(ihr) sprechen', 'ihr sprecht'], ['(du) sitzen', 'du sitzt']]),
  K.ue('Fiilin Präteritum biçimini yazın (er/sie/es).', [
    ['gehen', 'ging'], ['denken', 'dachte'], ['kaufen', 'kaufte'], ['bleiben', 'blieb'], ['wissen', 'wusste'], ['trinken', 'trank']])
]),

K.sec('s7', '§7', 'Ayrılabilen fiiller (Trennbare Verben)', 47, [
  K.p('Vurgulu ön ekler (ab-, an-, auf-, aus-, ein-, mit-, vor-, zu-, zurück-, weg- …) çekimli cümlede fiilden **ayrılır** ve cümlenin **sonuna** gider.'),
  K.ex([['anrufen → Ich **rufe** dich morgen **an**.', 'Seni yarın arayacağım.'],
        ['aufstehen → Er **steht** um sieben Uhr **auf**.', 'Saat yedide kalkar.'],
        ['einkaufen → **Kaufst** du heute **ein**?', 'Bugün alışveriş yapıyor musun?']]),
  K.ul(['**Perfekt:** ge- ön ek ile kök arasına girer: *angerufen, aufgestanden, eingekauft.*',
        '**zu + Infinitiv:** zu araya girer: *Ich habe keine Lust, früh aufzustehen.*',
        '**Yan cümlede** fiil sona gidince ayrılmaz: *…, weil ich früh aufstehe.*',
        'Vurgu her zaman **ön ektedir**: AN-rufen, AUF-stehen.']),
  K.note('Türkçede "kalkmak" tek kelime; Almancada *auf-stehen* ikiye bölünür. Cümleyi okurken sona bakmadan anlamı çözemezsin: *Er macht das Fenster …* → *zu* (kapatır) mı, *auf* (açar) mı?'),
  K.ue('Cümleyi Präsens\'te kurun.', [
    ['ich / um 6 Uhr / aufstehen', 'Ich stehe um 6 Uhr auf.'],
    ['der Zug / pünktlich / ankommen', 'Der Zug kommt pünktlich an.'],
    ['du / deine Freundin / mitbringen?', 'Bringst du deine Freundin mit?'],
    ['wir / heute Abend / fernsehen', 'Wir sehen heute Abend fern.'],
    ['sie (tekil) / die Tür / zumachen', 'Sie macht die Tür zu.']]),
  K.ue('Partizip II biçimini yazın.', [['einladen', 'eingeladen'], ['abholen', 'abgeholt'], ['zurückkommen', 'zurückgekommen'], ['vorstellen', 'vorgestellt']])
]),

K.sec('s8', '§8', 'Ayrılamayan fiiller (Untrennbare Verben)', 50, [
  K.p('Vurgusuz ön ekler **be-, emp-, ent-, er-, ge-, miss-, ver-, zer-** fiilden hiçbir zaman ayrılmaz. Vurgu fiil kökündedir: be-SU-chen, ver-STE-hen.'),
  K.ul(['Perfekt\'te **ge- eklenmez**: *besuchen → besucht, verstehen → verstanden, erklären → erklärt, gefallen → gefallen.*',
        'zu + Infinitiv\'de zu başa gelir: *zu verstehen, zu bezahlen.*',
        'Ön ek anlamı değiştirir: *kommen* (gelmek) → *bekommen* (almak, elde etmek); *stehen* (durmak) → *verstehen* (anlamak).']),
  K.ex([['Ich **verstehe** dich nicht.', 'Seni anlamıyorum.'],
        ['Wir haben unsere Oma **besucht**.', 'Büyükannemizi ziyaret ettik.'],
        ['Das Glas ist **zerbrochen**.', 'Bardak kırıldı.']]),
  K.trap('`-ieren` ile biten fiiller de ge- almaz: *studieren → studiert, telefonieren → telefoniert.*'),
  K.note('Hızlı kontrol: ön ek "be, ge, er, ver, zer, ent, emp, miss" ise Partizip II\'de **ge- yok**. *bekommen → bekommen* (bekommt değil, gebekommen hiç değil).'),
  K.ue('Partizip II biçimini yazın.', [['bezahlen', 'bezahlt'], ['vergessen', 'vergessen'], ['erzählen', 'erzählt'], ['entscheiden', 'entschieden'], ['gehören', 'gehört'], ['reparieren', 'repariert']])
]),

K.sec('s9', '§9', 'Hem ayrılan hem ayrılmayan fiiller', 53, [
  K.p('**durch-, über-, um-, unter-, wider-, wieder-** ön ekleri bazen ayrılır bazen ayrılmaz. Genel kural:'),
  K.ul(['**Ayrılan** biçimde vurgu ön ektedir ve anlam çoğunlukla **somut, gerçek hareket**tir: *Der Fährmann setzt die Leute ÜBER* (karşıya geçirir) → *hat übergesetzt.*',
        '**Ayrılmayan** biçimde vurgu köktedir ve anlam çoğunlukla **mecazi**dir: *Sie überSETZT den Text* (çevirir) → *hat übersetzt.*']),
  K.tb(['Fiil', 'ayrılan (somut)', 'ayrılmayan (mecazi)'],
    [['umfahren', 'Er fährt das Schild um. (devirir)', 'Er umfährt das Hindernis. (etrafından dolaşır)'],
     ['wiederholen', 'Ich hole das Buch wieder. (geri getiririm)', 'Ich wiederhole die Regel. (tekrarlarım)'],
     ['unterhalten', 'Halt den Teller unter! (altına tut)', 'Wir unterhalten uns. (sohbet ederiz)'],
     ['durchschauen', 'Er schaut durch das Fenster durch.', 'Ich durchschaue deinen Plan. (anlarım, çözerim)']]),
  K.note('**wiederholen** "tekrarlamak" anlamında ayrılmaz ve ge- almaz: *Ich habe die Übung wiederholt.* Bu sınavlarda en çok sorulan örnektir.'),
  K.ue('Cümleyi Perfekt\'e çevirin.', [
    ['Der Lehrer wiederholt die Frage.', 'Der Lehrer hat die Frage wiederholt.'],
    ['Sie übersetzt den Brief ins Deutsche.', 'Sie hat den Brief ins Deutsche übersetzt.'],
    ['Wir unterhalten uns lange.', 'Wir haben uns lange unterhalten.'],
    ['Der Junge zieht sich schnell um.', 'Der Junge hat sich schnell umgezogen.']])
]),

K.sec('s10', '§10', 'Dönüşlü fiiller (Reflexive Verben)', 60, [
  K.p('Eylem özneye geri dönüyorsa dönüşlü zamir kullanılır. Dönüşlü zamir 3. şahısta her zaman **sich** olur.'),
  K.tb(['', 'Akkusativ', 'Dativ'],
    [['ich', 'mich', 'mir'], ['du', 'dich', 'dir'], ['er/sie/es', 'sich', 'sich'], ['wir', 'uns', 'uns'], ['ihr', 'euch', 'euch'], ['sie/Sie', 'sich', 'sich']]),
  K.ul(['**Sadece dönüşlü** kullanılan fiiller: *sich beeilen, sich erholen, sich verabschieden, sich freuen, sich erkälten.*',
        '**Hem dönüşlü hem normal** kullanılanlar: *Ich wasche das Auto.* / *Ich wasche mich.*',
        'Cümlede başka bir Akkusativ nesne varsa dönüşlü zamir **Dativ** olur: *Ich wasche **mir** die Hände. Ich kaufe **mir** ein Buch.*',
        'Perfekt\'te dönüşlü fiiller **haben** alır: *Ich habe mich gefreut.*']),
  K.note('Türkçedeki "-n-, -ş-" ekleri (yıkanmak, sevinmek, görüşmek) çoğu zaman Almancada **sich** ile karşılanır: *sich waschen, sich freuen, sich treffen*.'),
  K.ue('Boşluğa dönüşlü zamiri yazın.', [
    ['Ich freue ___ auf die Ferien.', 'mich'],
    ['Du musst ___ beeilen!', 'dich'],
    ['Ich putze ___ die Zähne.', 'mir'],
    ['Wir haben ___ gestern kennengelernt.', 'uns'],
    ['Hast du ___ erkältet?', 'dich'],
    ['Er kauft ___ einen neuen Mantel.', 'sich']])
]),

K.sec('s11', '§11', 'Emir kipi (Imperativ)', 66, [
  K.tb(['Kime?', 'machen', 'fahren', 'geben', 'sein'],
    [['du', 'Mach!', 'Fahr!', 'Gib!', 'Sei!'], ['ihr', 'Macht!', 'Fahrt!', 'Gebt!', 'Seid!'], ['Sie', 'Machen Sie!', 'Fahren Sie!', 'Geben Sie!', 'Seien Sie!'], ['wir', 'Machen wir!', 'Fahren wir!', 'Geben wir!', 'Seien wir!']]),
  K.ul(['**du** biçimi: Präsens du biçiminden **-st** atılır; özne yazılmaz: *du kommst → Komm!*',
        'a → ä değişen fiillerde du-emri **değişmez**: *du fährst → Fahr!* Ama e → i değişenlerde **i kalır**: *du gibst → Gib! du liest → Lies!*',
        'Kökü -d/-t ile bitenler e alır: *Warte! Arbeite!*',
        'Ayrılabilen fiillerde ön ek sona gider: *Mach das Fenster zu! Ruf mich an!*',
        '**bitte**, **doch**, **mal** emri yumuşatır: *Komm doch mal vorbei!*']),
  K.note('Resmî emirde (Sie) fiil başa gelir ve **Sie** mutlaka yazılır: *Nehmen Sie Platz!* (Buyurun, oturun.)'),
  K.ue('Emir kipini parantezdeki kişiye göre yazın.', [
    ['(du) langsam sprechen', 'Sprich langsam!'],
    ['(ihr) die Bücher öffnen', 'Öffnet die Bücher!'],
    ['(Sie) hier unterschreiben', 'Unterschreiben Sie hier!'],
    ['(du) das Licht ausmachen', 'Mach das Licht aus!'],
    ['(du) nicht so nervös sein', 'Sei nicht so nervös!'],
    ['(du) die Zeitung lesen', 'Lies die Zeitung!']])
])
]);

/* Teil I (2): §12–§21 */
K.part('t1b', 'Teil I (devam)', 'Zamanlar, fiilin aldığı hâller, sorular, modal fiiller, Passiv', [

K.sec('s12', '§12', 'Perfekt ve Plusquamperfekt: haben mi sein mi?', 70, [
  K.p('Perfekt = **haben/sein (çekimli)** + **Partizip II** (cümle sonunda). Plusquamperfekt aynı yapının geçmiş hâlidir: **hatte/war** + Partizip II.'),
  K.p('**sein** alan fiiller:'),
  K.ul(['Nesne almayan ve **yer değiştirme** bildiren fiiller: *gehen, fahren, fliegen, kommen, laufen, reisen, steigen, fallen* → *Ich bin nach Hause gegangen.*',
        'Nesne almayan ve **durum değişikliği** bildirenler: *aufwachen, einschlafen, sterben, wachsen, werden* → *Das Kind ist eingeschlafen.*',
        '**sein, bleiben, werden, passieren, geschehen, gelingen** → *Ich bin zu Hause geblieben. Was ist passiert?*']),
  K.p('**haben** alanlar: Akkusativ nesne alan (geçişli) fiiller, dönüşlü fiiller, modal fiiller ve hareket ya da durum değişikliği bildirmeyen geçişsiz fiillerin çoğu (*schlafen, arbeiten, sitzen* (Kuzey Almanya), *stehen, liegen*).'),
  K.trap('Aynı fiil iki türlü olabilir: *Ich **bin** nach Berlin gefahren.* (gittim) ama *Ich **habe** das Auto in die Garage gefahren.* (arabayı sürdüm; Akkusativ nesne var).'),
  K.ex([['Er **hat** den Brief geschrieben.', 'Mektubu yazdı.'], ['Wir **sind** spät angekommen.', 'Geç vardık.'], ['Als wir kamen, **war** der Zug schon **abgefahren**.', 'Geldiğimizde tren çoktan kalkmıştı.']]),
  K.note('Plusquamperfekt, geçmişteki başka bir olaydan **daha önce** olanı anlatır: Türkçedeki "-mıştı" eki.'),
  K.ue('haben ya da sein: boşluğa çekimli biçimi yazın.', [
    ['Wir ___ gestern ins Kino gegangen.', 'sind'], ['Ich ___ den ganzen Tag gearbeitet.', 'habe'], ['Was ___ passiert?', 'ist'],
    ['Sie ___ mir ein Buch geschenkt.', 'hat'], ['Der Baum ___ schnell gewachsen.', 'ist'], ['Ihr ___ zu lange geschlafen.', 'habt']])
]),

K.sec('s13', '§13', 'Karıştırılan geçişli/geçişsiz fiil çiftleri', 75, [
  K.p('Bazı fiil çiftleri birbirine çok benzer: biri **nesne alır ve hareket** bildirir (geçişli, zayıf), diğeri **durum** bildirir (geçişsiz, güçlü).'),
  K.tb(['Hareket (wohin? + Akk.)', 'Durum (wo? + Dat.)'],
    [['legen – legte – gelegt (yatırmak)', 'liegen – lag – gelegen (yatmak, bulunmak)'],
     ['stellen – stellte – gestellt (dik koymak)', 'stehen – stand – gestanden (durmak)'],
     ['setzen – setzte – gesetzt (oturtmak)', 'sitzen – saß – gesessen (oturmak)'],
     ['hängen – hängte – gehängt (asmak)', 'hängen – hing – gehangen (asılı olmak)'],
     ['stecken – steckte – gesteckt (sokmak)', 'stecken – steckte/stak – gesteckt (takılı olmak)']]),
  K.ex([['Ich **lege** das Buch **auf den** Tisch. → Das Buch **liegt auf dem** Tisch.', 'Kitabı masaya koyuyorum. → Kitap masada duruyor.'],
        ['Sie **hängt** das Bild **an die** Wand. → Das Bild **hängt an der** Wand.', 'Resmi duvara asıyor. → Resim duvarda asılı.']]),
  K.p('Diğer çiftler: *erschrecken* (korkutmak, zayıf) / *erschrecken* (korkmak, güçlü: erschrak, ist erschrocken); *versenken / versinken; senken / sinken; sprengen / springen*.'),
  K.note('Formül: **-en ile biten zayıf fiil + Akkusativ = hareket**, **güçlü fiil + Dativ = sonuç/durum**. Wohin? sorusunu sorabiliyorsan legen/stellen/setzen/hängen.'),
  K.ue('Doğru fiili seçin ve çekin.', [
    ['Der Mantel ___ an der Garderobe. (hängen)', 'hängt (hing)'],
    ['Ich ___ die Flasche in den Kühlschrank. (stellen/stehen)', 'stelle'],
    ['Das Kind ___ auf dem Stuhl. (setzen/sitzen)', 'sitzt'],
    ['Wohin hast du meine Brille ___? (legen/liegen)', 'gelegt'],
    ['Gestern ___ das Paket noch vor der Tür. (liegen, Präteritum)', 'lag']])
]),

K.sec('s14', '§14', 'Fiilin yönettiği hâl (Rektion der Verben)', 79, [
  K.p('Her fiil belirli bir hâlde nesne ister. Bunlar kurala değil fiile bağlıdır; listeyle öğrenilir.'),
  K.tb(['Yapı', 'Örnek fiiller', 'Örnek'],
    [['Akkusativ', 'brauchen, fragen, kennen, lieben, suchen, besuchen', 'Ich frage **den** Lehrer.'],
     ['Dativ', 'danken, helfen, gefallen, gehören, gratulieren, antworten, folgen, schmecken, passen', 'Ich helfe **dem** Kind.'],
     ['Dativ (kişi) + Akk. (şey)', 'geben, schenken, zeigen, bringen, erklären, empfehlen, schicken', 'Er zeigt **dem** Gast **das** Zimmer.'],
     ['iki Akkusativ', 'kosten, lehren, nennen', 'Das kostet **mich** **einen** Euro.'],
     ['Akk. + Genitiv', 'anklagen, beschuldigen, verdächtigen (resmî)', 'Man beschuldigt ihn **des** Diebstahls.'],
     ['Nominativ (yüklem)', 'sein, werden, bleiben, heißen', 'Er ist **ein** guter Arzt.']]),
  K.trap('Türkçe "öğretmene sordum" (-e) der ama Almancada **fragen Akkusativ** alır: *Ich frage den Lehrer.* Tersine "ona yardım ettim" -e ile uyuşur: *Ich helfe ihm.*'),
  K.note('Dativ + Akkusativ fiillerde sıra: isimlerde önce Dativ (kişi), sonra Akkusativ (şey). Ayrıntı §22\'de.'),
  K.ue('Boşluğa doğru artikeli yazın.', [
    ['Das Fahrrad gehört ___ Nachbarin.', 'der'], ['Wir gratulieren ___ Sieger.', 'dem'], ['Ich brauche ___ Wörterbuch.', 'das'],
    ['Er schenkt ___ Freundin ___ Ring.', 'seiner · einen'], ['Die Jacke passt ___ Jungen nicht.', 'dem'], ['Ich habe ___ Arzt angerufen.', 'den']])
]),

K.sec('s15', '§15', 'Edatlı nesne alan fiiller', 86, [
  K.p('Pek çok fiil sabit bir **edatla** birlikte kullanılır; edatın yönettiği hâl de sabittir. Türkçedeki karşılığıyla tutmayabileceği için fiil + edat + hâl birlikte ezberlenir.'),
  K.tb(['Fiil', 'Edat + hâl', 'Anlam'],
    [['warten', 'auf + Akk.', '-i beklemek'], ['denken', 'an + Akk.', '-i düşünmek'], ['sich freuen', 'auf + Akk. / über + Akk.', '(gelecek bir şeyi) dört gözle beklemek / -e sevinmek'],
     ['sich interessieren', 'für + Akk.', '-e ilgi duymak'], ['teilnehmen', 'an + Dat.', '-e katılmak'], ['sprechen', 'mit + Dat. / über + Akk.', 'biriyle / bir şey hakkında konuşmak'],
     ['Angst haben', 'vor + Dat.', '-den korkmak'], ['sich kümmern', 'um + Akk.', 'ile ilgilenmek'], ['abhängen', 'von + Dat.', '-e bağlı olmak'], ['bitten', 'um + Akk.', 'rica etmek']]),
  K.p('**Soru ve zamir biçimleri:** Kişi için *edat + zamir* (Auf wen wartest du? – Auf ihn.), şey için **wo(r)- / da(r)-** biçimi kullanılır (Worauf wartest du? – Darauf.). Ünlüyle başlayan edatlarda araya **r** girer: *woran, darüber.*'),
  K.ex([['Ich warte **auf den** Bus. – **Worauf** wartest du? – **Darauf**.', 'Otobüsü bekliyorum.'],
        ['Wir freuen uns **darauf**, dass du kommst.', 'Gelmene seviniyoruz.']]),
  K.note('**da(r)-** bir yan cümleyi ya da zu-Infinitiv\'i önceden haber verir: *Ich denke **daran**, morgen anzurufen.*'),
  K.ue('Edatı (gerekiyorsa wo-/da- biçimini) yazın.', [
    ['Ich interessiere mich ___ Musik.', 'für'], ['Denkst du noch ___ unseren Urlaub?', 'an'], ['___ wartest du? – Auf den Zug.', 'Worauf'],
    ['Er nimmt ___ dem Kurs teil.', 'an'], ['Sie hat Angst ___ großen Hunden.', 'vor'], ['Wir sprechen morgen ___ das Problem.', 'über']])
]),

K.sec('s16', '§16', 'dass cümlesi ya da zu + Infinitiv alan fiiller', 94, [
  K.p('Birçok fiilin ardından ya **dass**-yan cümlesi ya da **zu + Infinitiv** gelir. İki cümlenin öznesi **aynıysa** genelde zu + Infinitiv tercih edilir.'),
  K.ex([['Ich hoffe, **dass ich** bald eine Arbeit finde. → Ich hoffe, bald eine Arbeit **zu finden**.', 'Yakında iş bulmayı umuyorum.'],
        ['Er bittet mich, **dass ich** ihm helfe. → Er bittet mich, ihm **zu helfen**.', 'Ona yardım etmemi rica ediyor.']]),
  K.ul(['zu + Infinitiv\'de **özne yazılmaz**.',
        'Ana cümlenin nesnesi yan cümlenin öznesiyse de dönüşüm yapılabilir: *Ich rate dir, dass du schläfst → Ich rate dir zu schlafen.*',
        'Özne farklıysa dönüşüm **olmaz**: *Ich hoffe, dass du kommst* (zu ile söylenemez).',
        'Geçmiş için: *Er behauptet, das Geld gefunden **zu haben**.* Edilgen için: *…, **gesehen worden zu sein**.*']),
  K.note('Sık fiiller: *anfangen, aufhören, beschließen, vergessen, versuchen, hoffen, glauben, vorhaben, Lust haben, Zeit haben.* "Lust/Zeit haben" sonrası her zaman zu: *Ich habe keine Zeit, ins Kino zu gehen.*'),
  K.ue('Cümleyi zu + Infinitiv ile yeniden yazın.', [
    ['Ich vergesse oft, dass ich die Tür abschließe.', 'Ich vergesse oft, die Tür abzuschließen.'],
    ['Er verspricht, dass er pünktlich kommt.', 'Er verspricht, pünktlich zu kommen.'],
    ['Sie hofft, dass sie die Prüfung besteht.', 'Sie hofft, die Prüfung zu bestehen.'],
    ['Wir beschließen, dass wir umziehen.', 'Wir beschließen umzuziehen.']])
]),

K.sec('s17', '§17', 'Soru cümleleri', 103, [
  K.p('**Soru kelimesiz sorular (Evet/Hayır):** fiil başa gelir: *Kommst du morgen?* Olumsuz bir soruya "evet" cevabı **doch** ile verilir: *Kommst du nicht? – **Doch**, ich komme.*'),
  K.p('**Soru kelimeli sorular:** soru kelimesi 1. sırada, çekimli fiil 2. sırada: *Wann kommst du?*'),
  K.tb(['Soru kelimesi', 'Anlam'],
    [['wer / wen / wem / wessen', 'kim / kimi / kime / kimin'], ['was', 'ne'], ['wo / wohin / woher', 'nerede / nereye / nereden'], ['wann', 'ne zaman'],
     ['warum / weshalb / wieso', 'neden'], ['wie / wie viel / wie lange', 'nasıl / ne kadar / ne kadar süre'], ['welcher, -e, -es', 'hangi (artikel gibi çekilir)'],
     ['was für ein(e)', 'ne tür bir'], ['womit / wofür / worauf …', 'neyle / ne için / neyi…']]),
  K.note('Cevap için kullanılan hâl soru kelimesiyle aynı olmalı: *Wem gehört das? – **Dem** Lehrer.* *Wen suchst du? – **Den** Lehrer.*'),
  K.ue('Altı çizili kısmı soracak soruyu yazın.', [
    ['Ich fahre **morgen** nach Hamburg.', 'Wann fährst du nach Hamburg?'],
    ['Das Buch gehört **meinem Bruder**.', 'Wem gehört das Buch?'],
    ['Sie wartet **auf ihren Freund**.', 'Auf wen wartet sie?'],
    ['Er kommt **aus der Türkei**.', 'Woher kommt er?'],
    ['Wir sprechen **über das Wetter**.', 'Worüber sprecht ihr?'],
    ['Du hast keine Zeit? – ___, ich habe Zeit! (olumlu cevap)', 'Doch']])
]),

K.sec('s18', '§18', 'Modal fiiller', 110, [
  K.tb(['Fiil', 'Anlam', 'ich/er', 'du'],
    [['können', 'yapabilmek, -ebilmek; mümkün olmak', 'kann', 'kannst'], ['dürfen', 'izinli olmak', 'darf', 'darfst'], ['müssen', 'zorunda olmak', 'muss', 'musst'],
     ['sollen', 'başkasının isteği/görev: -meli', 'soll', 'sollst'], ['wollen', 'istemek (niyet)', 'will', 'willst'], ['mögen / möchte', 'sevmek / (kibar) istemek', 'mag / möchte', 'magst / möchtest']]),
  K.ul(['Modal fiil çekimlidir, asıl fiil **yalın hâlde sona** gider: *Ich **kann** heute nicht **kommen**.*',
        'Tekil 1. ve 3. şahıs ek almaz: *ich kann, er kann.*',
        '**nicht müssen** = gerekmemek (Türkçe: zorunda değilsin); **nicht dürfen** = yasak: *Du musst nicht kommen* ≠ *Du darfst nicht kommen.*',
        'Perfekt\'te asıl fiille birlikte **iki Infinitiv** kullanılır: *Ich habe nicht kommen **können**.* Tek başına kullanıldığında Partizip: *Ich habe es nicht gekonnt.*',
        'Yan cümlede çekimli fiil iki Infinitiv\'in **önüne** geçer: *…, weil ich nicht **habe** kommen können.*']),
  K.p('Modal fiil gibi kullanılan fiiller: **lassen** (yaptırmak), **sehen, hören, helfen** (+ yalın Infinitiv), **brauchen** (nicht/nur + zu: *Du brauchst nicht zu kommen*).'),
  K.note('Günlük dilde geçmiş için Präteritum tercih edilir: *Ich **konnte** nicht kommen* ("Ich habe nicht kommen können"dan daha yaygın).'),
  K.ue('Uygun modal fiili çekin.', [
    ['Hier ___ man nicht rauchen. (yasak)', 'darf'], ['Ich ___ morgen früh aufstehen. (zorunluluk)', 'muss'], ['___ du Deutsch sprechen? (yetenek)', 'Kannst'],
    ['Der Arzt sagt, ich ___ weniger Kaffee trinken. (başkasının tavsiyesi)', 'soll'], ['Was ___ Sie trinken? (kibar istek)', 'möchten'], ['Gestern ___ ich nicht schlafen. (yetenek, Präteritum)', 'konnte']])
]),

K.sec('s19', '§19', 'Edilgen çatı (Passiv)', 120, [
  K.p('Passiv, eylemi **yapandan çok eylemin kendisini** öne çıkarır. Yapı: **werden (çekimli) + Partizip II.** Yapan kişi gerekirse **von + Dativ** ile, araç ya da sebep **durch + Akkusativ** ile verilir.'),
  K.tb(['Zaman', 'Passiv'],
    [['Präsens', 'Der Brief **wird** geschrieben.'], ['Präteritum', 'Der Brief **wurde** geschrieben.'], ['Perfekt', 'Der Brief **ist** geschrieben **worden**.'],
     ['Plusquamperfekt', 'Der Brief **war** geschrieben **worden**.'], ['Futur', 'Der Brief **wird** geschrieben **werden**.']]),
  K.ul(['Etken cümlenin **Akkusativ nesnesi** Passiv\'de **özne** olur: *Der Mechaniker repariert **das Auto**. → **Das Auto** wird (vom Mechaniker) repariert.*',
        'Perfekt\'te **worden** kullanılır, "geworden" değil.',
        'Akkusativ nesnesi olmayan fiillerden de **öznesiz Passiv** yapılabilir: *Hier wird nicht geraucht. Sonntags wird nicht gearbeitet.*',
        'Modal fiille: *Das Auto **muss** repariert **werden**.* (Perfekt: *hat repariert werden müssen*)']),
  K.note('Dativ nesnesi Passiv\'de **Dativ olarak kalır**, özne olmaz: *Man hilft dem Mann → **Dem Mann** wird geholfen.*'),
  K.ue('Cümleyi Passiv\'e çevirin (zamanı koruyun).', [
    ['Man baut hier ein neues Hotel.', 'Hier wird ein neues Hotel gebaut.'],
    ['Die Polizei verhaftete den Dieb.', 'Der Dieb wurde von der Polizei verhaftet.'],
    ['Man hat das Fenster geöffnet.', 'Das Fenster ist geöffnet worden.'],
    ['Man muss die Rechnung bezahlen.', 'Die Rechnung muss bezahlt werden.'],
    ['Man hilft den Kindern.', 'Den Kindern wird geholfen.']])
]),

K.sec('s20', '§20', 'Öznel anlamda modal fiiller (tahmin ve iddia)', 130, [
  K.p('Modal fiiller konuşanın bir bilgiye **ne kadar emin** olduğunu ya da bilginin **kaynağını** da gösterebilir.'),
  K.tb(['Fiil', 'Anlam', 'Örnek'],
    [['muss', 'çok eminim (≈ %90)', 'Er **muss** krank sein. (Kesin hasta.)'], ['dürfte', 'büyük ihtimalle', 'Das **dürfte** stimmen.'],
     ['kann / könnte', 'mümkün', 'Sie **könnte** im Büro sein.'], ['soll', 'duyduğuma göre (başkası söylüyor)', 'Er **soll** sehr reich sein. (Zenginmiş.)'],
     ['will', 'kendisi iddia ediyor', 'Er **will** das nicht gewusst haben. (Bilmediğini iddia ediyor.)'], ['mag', 'olabilir (kabul)', 'Das **mag** sein.']]),
  K.p('**Geçmiş için:** modal fiil (Präsens) + **Partizip II + haben/sein**: *Er **muss** den Zug **verpasst haben**.* (Treni kaçırmış olmalı.) *Sie **soll** gestern **angekommen sein**.* (Dün gelmiş.)'),
  K.note('Türkçedeki "-mış" (duyulan geçmiş) çoğu zaman **sollen** ile verilir: *In Berlin soll es geregnet haben* = Berlin\'de yağmur yağmış.'),
  K.ue('Cümleyi verilen modal fiille yeniden yazın.', [
    ['Ich bin sicher, dass er zu Hause ist. (müssen)', 'Er muss zu Hause sein.'],
    ['Man sagt, dass der Film gut ist. (sollen)', 'Der Film soll gut sein.'],
    ['Er behauptet, dass er das Geld gefunden hat. (wollen)', 'Er will das Geld gefunden haben.'],
    ['Vielleicht hat sie den Bus verpasst. (können)', 'Sie kann (könnte) den Bus verpasst haben.']])
]),

K.sec('s21', '§21', 'Tahmin bildiren Futur I ve Futur II', 134, [
  K.p('Futur I: **werden + Infinitiv**. Gelecek için kullanılır ama günlük dilde gelecek çoğunlukla Präsens + zaman zarfıyla anlatılır (*Morgen fahre ich*). Futur\'un asıl sık kullanımı **şimdiki tahmin**dir.'),
  K.tb(['', 'Yapı', 'Örnek'],
    [['Futur I (şimdiki tahmin)', 'werden + Infinitiv', 'Er **wird** wohl krank **sein**. (Herhalde hasta.)'],
     ['Futur II (geçmiş tahmin)', 'werden + Partizip II + haben/sein', 'Er **wird** den Zug verpasst **haben**. (Treni kaçırmıştır.)']]),
  K.ul(['Tahmin anlamı **wohl, sicher, wahrscheinlich, vielleicht** gibi zarflarla güçlenir.',
        'Yan cümlede **werden sona** gider: *…, dass er wohl krank sein **wird**.*',
        'Futur II, gelecekte bitmiş olacak bir eylemi de anlatır: *Bis morgen werde ich die Arbeit beendet haben.*']),
  K.note('"-dır" ile biten tahmin cümleleri (gelmiştir, yorgundur) Almancada genelde Futur ile verilir: *Sie wird müde sein.*'),
  K.ue('Tahmin bildiren Futur ile yazın (wohl kullanın).', [
    ['Vielleicht ist er im Urlaub. (Futur I)', 'Er wird wohl im Urlaub sein.'],
    ['Vielleicht hat sie den Termin vergessen. (Futur II)', 'Sie wird den Termin wohl vergessen haben.'],
    ['Wahrscheinlich ist der Zug schon abgefahren. (Futur II)', 'Der Zug wird wohl schon abgefahren sein.']])
])
]);

/* Teil II: §22–§35 */
K.part('t2', 'Teil II', 'Cümle yapısı: söz dizimi, bağlaçlar ve yan cümleler', [

K.sec('s22', '§22', 'Ana cümlede söz dizimi', 140, [
  K.p('Almanca ana cümlenin altın kuralı: **çekimli fiil 2. sırada**. 1. sıraya özne, zaman zarfı ya da nesne gelebilir; o zaman özne fiilin hemen arkasına geçer (**Umstellung** = devrik yapı).'),
  K.ex([['**Ich** fahre morgen nach Berlin.', 'Yarın Berlin\'e gidiyorum.'], ['**Morgen** fahre **ich** nach Berlin.', '(Zaman başa gelince özne fiilden sonra.)']]),
  K.tb(['Durum', 'Sıra', 'Örnek'],
    [['İki isim nesne', 'Dativ → Akkusativ', 'Er gibt **dem Kind** **den Ball**.'], ['İki zamir', 'Akkusativ → Dativ', 'Er gibt **ihn ihm**.'],
     ['Zamir + isim', 'zamir önce', 'Er gibt **ihm** den Ball. / Er gibt **ihn** dem Kind.'], ['Zarflar', 'Te-Ka-Mo-Lo: wann – warum – wie – wo', 'Ich fahre **morgen wegen der Arbeit mit dem Zug nach Köln**.']]),
  K.ul(['Dönüşlü zamir mümkün olduğunca **öne** gelir: *Gestern hat **sich** der Junge verletzt.*',
        'Edatlı nesne genelde cümlenin sonlarına yakın durur: *Ich habe gestern lange **auf dich** gewartet.*',
        'Cümlenin ikinci fiil kısmı (Partizip, Infinitiv, ayrılan ön ek) **en sona** gider: cümle bir "çerçeve" (Satzklammer) oluşturur.']),
  K.note('**TeKaMoLo** = Temporal (ne zaman), Kausal (neden), Modal (nasıl), Lokal (nerede/nereye). Bu sıra en doğal sıradır.'),
  K.ue('Kelimeleri doğru sırayla cümle yapın.', [
    ['gestern / ich / ein Buch / meinem Bruder / geschenkt habe (Ich habe … ile başlayın)', 'Ich habe meinem Bruder gestern ein Buch geschenkt.'],
    ['Heute / wir / ins Kino / gehen', 'Heute gehen wir ins Kino.'],
    ['Er gibt / es / ihr (zamirler)', 'Er gibt es ihr.'],
    ['Ich fahre / mit dem Bus / morgen / zur Arbeit (TeKaMoLo)', 'Ich fahre morgen mit dem Bus zur Arbeit.']])
]),

K.sec('s23', '§23', 'Sıfır konumundaki bağlaçlar: und, aber, oder, denn, sondern', 149, [
  K.p('**und, aber, oder, denn, sondern** iki ana cümleyi bağlar ve söz dizimini **etkilemez**: bağlaç "sıfır konumda" durur, ardından normal ana cümle gelir.'),
  K.ex([['Ich bleibe zu Hause, **denn** ich **bin** krank.', 'Evde kalıyorum, çünkü hastayım.'], ['Er ist nicht dumm, **sondern** faul.', 'Aptal değil, tembel.'], ['Sie kommt heute **oder** sie kommt morgen.', 'Bugün ya da yarın gelir.']]),
  K.ul(['Özneler ve fiiller aynıysa ikinci cümlede **tekrar edilmeyebilir**: *Er steht auf **und** (er) geht ins Bad.*',
        '**sondern** sadece **olumsuz** bir ifadeden sonra gelir (nicht A, sondern B). **aber** "ama, fakat" demektir.',
        '**denn** "çünkü" demektir ve söz dizimini değiştirmez; **weil** ise fiili sona gönderir (§27).',
        'Virgül: aber, denn, sondern önünde konur; und ile oder önünde genelde konmaz.']),
  K.note('Hafıza kodu **ADUSO**: aber, denn, und, sondern, oder. Bu beşinden sonra fiil yerinde kalır.'),
  K.ue('aber, denn, oder, sondern, und ile bağlayın.', [
    ['Ich trinke keinen Kaffee, ___ Tee.', 'sondern'], ['Er kommt nicht, ___ er hat keine Zeit.', 'denn'], ['Möchtest du Wasser ___ Saft?', 'oder'],
    ['Das Hotel ist teuer, ___ sehr schön.', 'aber'], ['Ich koche ___ du deckst den Tisch.', 'und']])
]),

K.sec('s24', '§24', 'Birinci konumdaki bağlaçlar ve bağlama zarfları', 156, [
  K.p('**deshalb, deswegen, darum, trotzdem, dann, danach, sonst, außerdem, also, inzwischen** gibi bağlaçlar **1. konumu kaplar**; bu yüzden ardından hemen **fiil**, sonra özne gelir.'),
  K.ex([['Ich bin krank, **deshalb bleibe ich** zu Hause.', 'Hastayım, bu yüzden evde kalıyorum.'], ['Es regnet, **trotzdem gehen wir** spazieren.', 'Yağmur yağıyor, yine de yürüyüşe çıkıyoruz.'], ['Beeil dich, **sonst verpasst du** den Zug!', 'Acele et, yoksa treni kaçırırsın!']]),
  K.tb(['Anlam', 'Bağlaçlar'],
    [['sonuç', 'deshalb, deswegen, darum, daher, also, folglich'], ['karşıtlık / beklenmeyen sonuç', 'trotzdem, dennoch, allerdings'], ['zaman sırası', 'dann, danach, anschließend, inzwischen, vorher'],
     ['ekleme', 'außerdem, ferner, zudem'], ['seçenek / tehdit', 'sonst, andernfalls'], ['iki parçalı', 'entweder … oder, nicht nur … sondern auch, zwar … aber, weder … noch, sowohl … als auch']]),
  K.note('Bu kelimeler cümlenin içine de girebilir: *Ich bleibe **deshalb** zu Hause.* Fiil yine 2. sırada kalır.'),
  K.ue('Verilen bağlaçla iki cümleyi birleştirin.', [
    ['Der Bus kam nicht. Wir nahmen ein Taxi. (deshalb)', 'Der Bus kam nicht, deshalb nahmen wir ein Taxi.'],
    ['Er hat viel gelernt. Er hat die Prüfung nicht bestanden. (trotzdem)', 'Er hat viel gelernt, trotzdem hat er die Prüfung nicht bestanden.'],
    ['Zieh eine Jacke an! Du erkältest dich. (sonst)', 'Zieh eine Jacke an, sonst erkältest du dich!'],
    ['Er spricht Englisch. Er spricht Spanisch. (nicht nur … sondern auch)', 'Er spricht nicht nur Englisch, sondern auch Spanisch.']])
]),

K.sec('s25', '§25', 'Yan cümleler: genel kurallar', 165, [
  K.p('Yan cümle (Nebensatz) bir bağlaçla başlar ve **çekimli fiil en sona** gider. Ana cümleden **virgülle** ayrılır.'),
  K.ex([['Ich weiß, **dass** er heute **kommt**.', 'Bugün geleceğini biliyorum.'], ['**Weil** es **regnet**, **bleiben** wir zu Hause.', 'Yağmur yağdığı için evde kalıyoruz.']]),
  K.ul(['Yan cümle başa gelirse, **ana cümle fiille başlar** (yan cümle 1. konumu kaplar): *Wenn ich Zeit habe, **komme** ich.*',
        'Ayrılan fiiller yan cümlede **birleşik** yazılır: *…, dass er morgen **ankommt**.*',
        'Perfekt ve modal yapılarda çekimli fiil en sondadır: *…, weil ich lange gearbeitet **habe**. …, weil er arbeiten **muss**.*']),
  K.note('Türkçe yüklem zaten sondadır; Almanca yan cümle bu bakımdan Türkçeye benzer. Ana cümlede ise fiil 2. sırada; karıştırma.'),
  K.ue('Parantezdeki bağlaçla yan cümleye çevirin.', [
    ['Er kommt heute. (Ich glaube, dass …)', 'Ich glaube, dass er heute kommt.'],
    ['Sie hat keine Zeit. (…, weil …) Sie kommt nicht.', 'Sie kommt nicht, weil sie keine Zeit hat.'],
    ['Der Film fängt um acht an. (Weißt du, ob …?)', 'Weißt du, ob der Film um acht anfängt?']])
]),

K.sec('s26', '§26', 'Zaman yan cümleleri', 167, [
  K.tb(['Bağlaç', 'Kullanım', 'Örnek'],
    [['wenn', 'şimdi/gelecekte; geçmişte **tekrarlanan** olaylar (her … -dığında)', '**Wenn** ich nach Hause komme, koche ich.'],
     ['als', 'geçmişte **bir kez** olan olay ya da dönem', '**Als** ich ein Kind war, wohnten wir in Ankara.'],
     ['während / solange', 'eşzamanlılık: -ırken / -dığı sürece', '**Während** er kocht, liest sie.'],
     ['bevor', 'sonraki eylem: -meden önce', '**Bevor** wir essen, waschen wir die Hände.'],
     ['nachdem', 'önceki eylem: -dikten sonra (zaman kayması!)', '**Nachdem** er gegessen **hatte**, ging er.'],
     ['sobald', '-ır -maz', '**Sobald** ich ankomme, rufe ich an.'],
     ['bis', '-e kadar', 'Warte, **bis** ich komme.'],
     ['seit / seitdem', '-den beri', '**Seit** sie in Berlin wohnt, ist sie glücklich.']]),
  K.trap('**nachdem** ile zaman kayar: yan cümle ana cümleden **bir zaman önce** olur. Ana cümle Präteritum ise yan cümle **Plusquamperfekt**; ana cümle Präsens ise yan cümle **Perfekt**.'),
  K.note('"-dığında" geçmişte tek bir olaysa **als**, her seferinde olan bir şeyse **wenn**: *Immer **wenn** ich ihn besuchte, … / **Als** ich ihn gestern besuchte, …*'),
  K.ue('als, wenn, nachdem, bevor, seit veya während yazın.', [
    ['___ ich 18 war, machte ich den Führerschein.', 'Als'], ['Immer ___ es regnet, bleibe ich zu Hause.', 'wenn'],
    ['___ er die Prüfung bestanden hatte, feierte er.', 'Nachdem'], ['Schalte das Licht aus, ___ du gehst.', 'bevor'],
    ['___ ich hier wohne, kenne ich viele Leute.', 'Seit'], ['___ die Kinder schlafen, räumt sie auf.', 'Während']])
]),

K.sec('s27', '§27', 'Sebep yan cümleleri: weil, da, zumal', 173, [
  K.p('**weil** ve **da** "-dığı için, çünkü" anlamındadır ve fiili sona gönderir. **da** genelde cümle başında, bilinen bir sebep için kullanılır. **zumal** "üstelik … olduğu için" ek bir sebep bildirir.'),
  K.ex([['Ich gehe zum Arzt, **weil** ich Kopfschmerzen **habe**.', 'Başım ağrıdığı için doktora gidiyorum.'], ['**Da** das Wetter schlecht **war**, fiel das Spiel aus.', 'Hava kötü olduğundan maç iptal edildi.']]),
  K.tb(['Yapı', 'Söz dizimi'], [['…, weil ich krank bin.', 'yan cümle: fiil sonda'], ['…, denn ich bin krank.', 'ana cümle: fiil 2. sırada'], ['Ich bin krank, deshalb …', 'sonuç: deshalb + fiil']]),
  K.note('"Warum?" sorusuna tek başına **weil** cümlesiyle cevap verilebilir: *Warum kommst du nicht? – Weil ich arbeiten muss.*'),
  K.ue('weil ile birleştirin.', [
    ['Er kommt zu spät. Der Bus hatte Verspätung.', 'Er kommt zu spät, weil der Bus Verspätung hatte.'],
    ['Sie lernt Deutsch. Sie will in Deutschland studieren.', 'Sie lernt Deutsch, weil sie in Deutschland studieren will.'],
    ['Wir bleiben hier. Es hat angefangen zu regnen.', 'Wir bleiben hier, weil es angefangen hat zu regnen.']])
]),

K.sec('s28', '§28', 'Koşul yan cümleleri: wenn, falls', 176, [
  K.p('**wenn** ve **falls** "eğer, … -se" anlamındadır. **falls** gerçekleşme ihtimalinin daha düşük olduğunu vurgular.'),
  K.ex([['**Wenn** du Zeit hast, besuch mich.', 'Vaktin olursa beni ziyaret et.'], ['**Falls** es regnet, nimm einen Schirm mit.', 'Yağmur yağarsa şemsiye al.']]),
  K.ul(['Bağlaç olmadan da koşul kurulabilir: fiil başa gelir: ***Hast** du Zeit, (dann) besuch mich.*',
        'Ana cümle **dann/so** ile başlayabilir.',
        'Farklı nüanslar: **nur wenn** (sadece … ise), **außer wenn** (… olmadıkça), **im Falle, dass** (… durumunda), **unter der Bedingung, dass** (… şartıyla).',
        'Gerçek dışı koşullar (keşke, -seydi) Konjunktiv II ister → §54.']),
  K.note('**wenn** hem "-dığında" (zaman) hem "-se" (koşul) anlamına gelir; bağlamdan anlaşılır.'),
  K.ue('wenn ile koşul cümlesi kurun.', [
    ['Du bist müde. Geh ins Bett.', 'Wenn du müde bist, geh ins Bett.'],
    ['Das Wetter ist schön. Wir grillen im Garten.', 'Wenn das Wetter schön ist, grillen wir im Garten.'],
    ['Aynı cümleyi bağlaçsız kurun: Das Wetter ist schön. Wir grillen.', 'Ist das Wetter schön, (dann) grillen wir.']])
]),

K.sec('s29', '§29', 'Sonuç yan cümleleri: sodass, so … dass', 179, [
  K.p('**sodass** (ya da **so dass**) bir eylemin **sonucunu** bildirir. Sıfat ya da zarf vurgulanacaksa **so + sıfat …, dass** kullanılır.'),
  K.ex([['Es regnete stark, **sodass** wir nass wurden.', 'Çok yağmur yağdı, öyle ki ıslandık.'], ['Er war **so** müde, **dass** er sofort einschlief.', 'O kadar yorgundu ki hemen uyudu.']]),
  K.ul(['Sonuç olmayan durum: **zu … als dass** (Konjunktiv II ile): *Er ist **zu** jung, **als dass** er das verstehen könnte.* (anlayamayacak kadar genç)',
        '**ohne dass** / **ohne … zu**: beklenen sonucun gerçekleşmediğini anlatır: *Er ging, **ohne** sich **zu** verabschieden.*']),
  K.note('Türkçede "o kadar … ki" yapısı birebir **so … dass** ile karşılanır.'),
  K.ue('so … dass ile birleştirin.', [
    ['Der Kaffee ist heiß. Ich kann ihn nicht trinken.', 'Der Kaffee ist so heiß, dass ich ihn nicht trinken kann.'],
    ['Sie sprach leise. Niemand verstand sie.', 'Sie sprach so leise, dass niemand sie verstand.'],
    ['Er ging weg. Er sagte nichts. (ohne … zu)', 'Er ging weg, ohne etwas zu sagen.']])
]),

K.sec('s30', '§30', 'Karşıtlık (taviz) yan cümleleri: obwohl', 182, [
  K.p('**obwohl** (resmî: obgleich, obschon) "-e rağmen, -dığı hâlde" anlamındadır ve fiili sona gönderir. Aynı anlam ana cümlede **trotzdem** ile verilir.'),
  K.ex([['**Obwohl** er krank **ist**, geht er zur Arbeit.', 'Hasta olmasına rağmen işe gidiyor.'], ['Er ist krank, **trotzdem geht** er zur Arbeit.', 'Hasta, yine de işe gidiyor.'], ['**Trotz** der Krankheit geht er zur Arbeit.', 'Hastalığa rağmen (edat + Genitiv).']]),
  K.p('**wenn … auch noch so**: "ne kadar … olsa da": *Wenn das Auto **auch noch so** teuer ist, ich kaufe es.*'),
  K.note('Üç biçimi birbirine çevirmek tipik bir alıştırmadır: **obwohl** (yan cümle) ↔ **trotzdem** (ana cümle) ↔ **trotz** + Genitiv (edat).'),
  K.ue('obwohl ile birleştirin.', [
    ['Es war kalt. Wir sind schwimmen gegangen.', 'Obwohl es kalt war, sind wir schwimmen gegangen.'],
    ['Er hat wenig Geld. Er reist viel.', 'Obwohl er wenig Geld hat, reist er viel.'],
    ['Aynı anlamı trotzdem ile: Es war kalt. Wir sind schwimmen gegangen.', 'Es war kalt, trotzdem sind wir schwimmen gegangen.']])
]),

K.sec('s31', '§31', 'Tarz ve karşılaştırma yan cümleleri: wie, als, je … desto, indem', 185, [
  K.tb(['Bağlaç', 'Anlam', 'Örnek'],
    [['so … wie', 'eşitlik', 'Er ist **so** groß **wie** sein Vater.'], ['Komparativ + als', 'farklılık', 'Es war teurer, **als** ich dachte.'],
     ['je + Komp. …, desto/umso + Komp.', 'ne kadar … o kadar', '**Je** mehr du übst, **desto** besser sprichst du.'], ['wie', 'nasıl, olduğu gibi', 'Mach es, **wie** du willst.'],
     ['indem', '-erek (araç/yöntem)', 'Man lernt Wörter, **indem** man sie oft wiederholt.']]),
  K.trap('**je … desto**: je kısmı yan cümledir (fiil sonda), desto kısmında Komparativ\'ten hemen sonra **fiil** gelir: *Je älter er **wird**, desto ruhiger **wird** er.*'),
  K.note('**indem** sorusu "Wie? / Wodurch?"tur. Aynı anlam **dadurch, dass** ile de verilir: *Er hat abgenommen, **indem** er Sport gemacht hat.*'),
  K.ue('Verilen bağlaçla tamamlayın.', [
    ['Die Prüfung war leichter, ___ ich gedacht hatte.', 'als'], ['___ früher wir losfahren, ___ schneller sind wir da.', 'Je · desto (umso)'],
    ['Er verdient Geld, ___ er Nachhilfe gibt.', 'indem'], ['Sie ist genauso alt ___ ich.', 'wie']])
]),

K.sec('s32', '§32', 'Amaç yan cümleleri: damit', 190, [
  K.p('**damit** "-sın diye, -mesi için" anlamındadır ve bir amaç bildirir; fiil sona gider.'),
  K.ex([['Ich spreche langsam, **damit** du mich **verstehst**.', 'Beni anlayasın diye yavaş konuşuyorum.']]),
  K.ul(['İki cümlenin öznesi **aynıysa** genelde **um … zu** kullanılır (§33): *Ich lerne viel, **um** die Prüfung **zu** bestehen.*',
        'Özneler **farklıysa** sadece **damit** mümkündür.',
        'damit cümlesinde **wollen** ve **sollen** kullanılmaz, çünkü amaç anlamı zaten bağlaçta var: *damit das Kind keine Angst **hat*** (… haben soll değil). **können** ise kullanılabilir: *damit er arbeiten kann*.']),
  K.note('Aynı özne → um … zu; farklı özne → damit. Bu ayrım sınav sorularının en klasiklerindendir.'),
  K.ue('damit ya da um … zu ile birleştirin.', [
    ['Ich spare Geld. Ich will ein Auto kaufen.', 'Ich spare Geld, um ein Auto zu kaufen.'],
    ['Die Mutter macht das Licht an. Das Kind soll keine Angst haben.', 'Die Mutter macht das Licht an, damit das Kind keine Angst hat.'],
    ['Er fährt nach Berlin. Er will seine Freunde besuchen.', 'Er fährt nach Berlin, um seine Freunde zu besuchen.']])
]),

K.sec('s33', '§33', 'Anlam taşıyan Infinitiv yapıları: um … zu, ohne … zu, (an)statt … zu', 192, [
  K.tb(['Yapı', 'Anlam', 'Örnek'],
    [['um … zu', '-mek için (amaç)', 'Er lernt, **um** Arzt **zu** werden.'], ['ohne … zu', '-meden, -meksizin', 'Sie ging, **ohne** Tschüs **zu** sagen.'], ['(an)statt … zu', '-ecek yerde, -mek yerine', 'Er spielt, **anstatt** **zu** lernen.']]),
  K.ul(['Bu yapılarda **özne yazılmaz** ve ana cümlenin öznesiyle aynıdır.',
        'Özneler farklıysa yan cümle kullanılır: **damit, ohne dass, (an)statt dass**.',
        'Ayrılan fiillerde zu araya girer: *um früh **aufzustehen***.']),
  K.note('Kısa ezber: um → için, ohne → -meden, statt → yerine; üçünde de fiil **zu** ile en sonda.'),
  K.ue('Verilen yapıyla tek cümle yapın.', [
    ['Er fuhr weiter. Er hielt nicht an. (ohne … zu)', 'Er fuhr weiter, ohne anzuhalten.'],
    ['Sie sieht fern. Sie sollte arbeiten. (anstatt … zu)', 'Sie sieht fern, anstatt zu arbeiten.'],
    ['Wir gehen in die Stadt. Wir wollen einkaufen. (um … zu)', 'Wir gehen in die Stadt, um einzukaufen.']])
]),

K.sec('s34', '§34', 'Dolaylı sorular (Fragesätze als Nebensätze)', 195, [
  K.p('Bir soru başka bir cümlenin içine yerleştirilince yan cümle olur ve fiil sona gider. Soru kelimesi aynen kalır; soru kelimesi yoksa **ob** (-ip -mediği) kullanılır.'),
  K.ex([['Wann kommt der Zug? → Weißt du, **wann** der Zug **kommt**?', 'Trenin ne zaman geldiğini biliyor musun?'], ['Kommt er morgen? → Ich frage mich, **ob** er morgen **kommt**.', 'Yarın gelip gelmeyeceğini merak ediyorum.']]),
  K.note('Kibar sorular çoğu zaman dolaylıdır: *Können Sie mir sagen, wo der Bahnhof ist?* (wo ist der Bahnhof değil!).'),
  K.ue('Dolaylı soruya çevirin.', [
    ['Wo wohnt sie? (Ich weiß nicht, …)', 'Ich weiß nicht, wo sie wohnt.'],
    ['Hat das Geschäft heute geöffnet? (Können Sie mir sagen, …)', 'Können Sie mir sagen, ob das Geschäft heute geöffnet hat?'],
    ['Wie viel kostet das Ticket? (Er fragt, …)', 'Er fragt, wie viel das Ticket kostet.'],
    ['Kommt ihr mit? (Wir möchten wissen, …)', 'Wir möchten wissen, ob ihr mitkommt.']])
]),

K.sec('s35', '§35', 'İlgi cümleleri (Relativsätze)', 198, [
  K.p('İlgi cümlesi bir ismi açıklar (Türkçedeki "-en, -dığı" sıfat-fiilleri). İlgi zamirinin **cinsiyeti ve sayısı** açıklanan isimden, **hâli** ise ilgi cümlesindeki görevinden gelir. Fiil sona gider.'),
  K.tb(['', 'eril', 'dişil', 'nötr', 'çoğul'],
    [['Nom.', 'der', 'die', 'das', 'die'], ['Akk.', 'den', 'die', 'das', 'die'], ['Dat.', 'dem', 'der', 'dem', '**denen**'], ['Gen.', '**dessen**', '**deren**', '**dessen**', '**deren**']]),
  K.ex([['Der Mann, **der** dort steht, ist mein Lehrer.', 'Orada duran adam öğretmenim. (Nom.)'], ['Der Mann, **den** ich gestern sah, …', 'Dün gördüğüm adam… (Akk.)'],
        ['Die Kinder, **denen** ich helfe, …', 'Yardım ettiğim çocuklar… (Dat. çoğul)'], ['Die Frau, **deren** Auto kaputt ist, …', 'Arabası bozuk olan kadın… (Gen.)']]),
  K.ul(['Edatlı yapılarda edat ilgi zamirinin **önüne** gelir: *Das ist der Freund, **mit dem** ich verreise.*',
        'Yer için **wo**: *die Stadt, **wo** (in der) ich wohne*.',
        '**was**: *alles, etwas, nichts, das Beste* gibi belgisiz/ön ad kökenli sözcüklerden ya da bütün bir cümleden sonra: *Das ist alles, **was** ich weiß. Er kam pünktlich, **was** mich wunderte.*',
        '**wer** (… olan kimse): *Wer lügt, (der) stiehlt auch.*']),
  K.note('Genitiv ilgi zamirinden sonraki isim **artikel almaz**: *der Freund, dessen **Bruder** …* (dessen der Bruder değil).'),
  K.ue('Boşluğa ilgi zamirini yazın.', [
    ['Das ist die Frau, ___ ich im Zug kennengelernt habe.', 'die'], ['Der Kollege, ___ ich geholfen habe, hat sich bedankt.', 'dem'],
    ['Die Leute, ___ Haus wir gekauft haben, sind umgezogen.', 'deren'], ['Das ist das Problem, über ___ wir gesprochen haben.', 'das'],
    ['Er hat alles verloren, ___ er hatte.', 'was'], ['Die Schüler, mit ___ ich lerne, sind nett.', 'denen']])
])
]);

/* Teil III: §36–§51 */
K.part('t3', 'Teil III', 'Zamirler, sayılar, sıfat çekimi, zarflar ve ortaç yapıları', [

K.sec('s36', '§36', 'İşaret zamirleri (Demonstrativpronomen)', 212, [
  K.p('**dieser, diese, dieses** (bu), **jener** (şu, o; daha çok yazı dilinde), **solcher** (böyle) belirli artikel gibi çekilir. **derselbe, dieselbe, dasselbe** (aynısı) ve **derjenige** (… olan kişi/şey) iki parçalıdır: artikel kısmı artikel gibi, ikinci kısım sıfat gibi çekilir.'),
  K.tb(['', 'eril', 'dişil', 'nötr', 'çoğul'],
    [['Nom.', 'dieser', 'diese', 'dieses', 'diese'], ['Akk.', 'diesen', 'diese', 'dieses', 'diese'], ['Dat.', 'diesem', 'dieser', 'diesem', 'diesen'], ['Gen.', 'dieses', 'dieser', 'dieses', 'dieser']]),
  K.ex([['Ich nehme **diesen** Mantel.', 'Bu paltoyu alıyorum.'], ['Wir wohnen in **demselben** Haus.', 'Aynı evde oturuyoruz.'], ['Kennst du den Film? – Nein, **den** kenne ich nicht.', '(der/die/das zamir olarak, vurgulu)']]),
  K.p('**der, die, das** işaret zamiri olarak kullanılınca vurgulanır; Genitiv ve Dativ çoğulda uzun biçimler kullanılır: **dessen, deren, denen** (*Ich spreche mit **denen**.*).'),
  K.note('**derselbe** (aynı kişi/şey) ile **der gleiche** (aynı türden başka biri) farklıdır: *Wir haben **dasselbe** Auto* (ortak tek araba) / *Wir haben **das gleiche** Auto* (aynı model, iki ayrı araba). Günlük dilde çoğu zaman karıştırılır.'),
  K.ue('Doğru biçimi yazın.', [
    ['Mit ___ (dieser) Zug fahren wir nach Wien.', 'diesem'], ['Er trägt jeden Tag ___ (derselbe) Pullover.', 'denselben'],
    ['___ (solcher) Leute mag ich nicht.', 'Solche'], ['Wir wohnen in ___ (dieselbe) Straße.', 'derselben']])
]),

K.sec('s37', '§37', 'Belgisiz zamirler (Indefinite Pronomen)', 218, [
  K.tb(['Zamir', 'Anlam', 'Not'],
    [['man', 'insan, (genel özne)', 'sadece Nom.; Akk. einen, Dat. einem: *Das freut einen.*'], ['jemand / niemand', 'birisi / hiç kimse', 'Akk. jemand(en), Dat. jemand(em)'],
     ['etwas / nichts', 'bir şey / hiçbir şey', 'çekilmez'], ['alles', 'her şey', 'sıfat gibi büyük harfle: *alles Gute*'],
     ['einer, eine, eins', 'biri, bir tane', '*Hast du einen Stift? – Ja, ich habe **einen**.*'], ['keiner, keine, keins', 'hiçbiri', '*Ich habe **keinen**.*'],
     ['jeder, jede, jedes', 'her (biri)', 'çoğulu: alle'], ['mancher, einige, mehrere, viele, wenige', 'bazı, birkaç, birçok, az', 'çoğul: belirli artikel gibi çekilir']]),
  K.ex([['Hier darf **man** nicht parken.', 'Buraya park edilmez.'], ['Ist **jemand** da? – Nein, **niemand**.', 'Kimse var mı? – Hayır, kimse yok.'], ['**Jeder** muss das wissen.', 'Herkes bunu bilmeli.']]),
  K.trap('**man** sadece özne olabilir ve fiil 3. tekil çekilir. Aynı cümlede tekrar edildiğinde yine **man** kullanılır, "er" kullanılmaz: *Wenn man müde ist, sollte man schlafen.*'),
  K.note('Zamir olarak kullanıldığında **ein** ve **kein** eril Nom.\'da **einer/keiner**, nötr Nom./Akk.\'da **eins/keins** olur: *Das ist ein Buch → Das ist **eins**.*'),
  K.ue('Boşluğa uygun belgisiz zamiri yazın.', [
    ['Hast du ein Fahrrad? – Nein, ich habe ___.', 'keins'], ['Hat ___ meinen Schlüssel gesehen? (biri)', 'jemand'],
    ['Ich habe heute ___ gegessen. (hiçbir şey)', 'nichts'], ['In der Bibliothek darf ___ nicht laut sprechen.', 'man'], ['Hier ist ein Glas. Brauchst du noch ___? (bir tane)', 'eins']])
]),

K.sec('s38', '§38', 'Sayılar', 223, [
  K.p('**Asıl sayılar:** 21–99 arası sayılar Türkçenin tersine **birler önce** okunur: 21 = einundzwanzig, 58 = achtundfünfzig. 1 sayı olarak **eins**, isimden önce **ein/eine** olur.'),
  K.p('**Sıra sayıları** 1–19 arası **-t-**, 20\'den sonra **-st-** ekiyle oluşur ve sıfat gibi çekilir: der zweite, der zwanzigste. Düzensizler: **erst-, dritt-, siebt-** (siebente de olur), **acht-**.'),
  K.tb(['Yazım', 'Okunuş'],
    [['der 1. Mai', 'der erste Mai'], ['am 3. Oktober', 'am dritten Oktober'], ['1999 (yıl)', 'neunzehnhundertneunundneunzig'], ['2024 (yıl)', 'zweitausendvierundzwanzig'],
     ['1/2, 1/4, 3/4', 'ein halb, ein Viertel, drei Viertel'], ['zweimal, zweifach', 'iki kez, iki kat'], ['erstens, zweitens', 'birincisi, ikincisi']]),
  K.ul(['Tarih Dativ\'de: **am** + sıra sayısı + -en: *am zwanzigsten Juli*.',
        'Kesirler: *ein Drittel, ein Fünftel* (sıra sayısı + -el).',
        'Romen rakamları: *Karl V. = Karl der Fünfte*.']),
  K.note('Yazıda sıra sayısını sayıdan sonra koyulan **nokta** gösterir: *3. = dritte*. Tarih ve cadde numaralarında dikkat!'),
  K.ue('Sayıları yazıyla yazın.', [['47', 'siebenundvierzig'], ['am 7. März', 'am siebten März'], ['der 20. Geburtstag', 'der zwanzigste Geburtstag'], ['1985 (yıl)', 'neunzehnhundertfünfundachtzig'], ['3/4', 'drei Viertel']])
]),

K.sec('s39', '§39', 'Sıfat çekimi (Deklination des Adjektivs)', 230, [
  K.p('İsmin **önünde** duran sıfat çekim eki alır; yüklem olarak (sein ile) kullanıldığında ek almaz: *Das Auto ist neu* / *das neue Auto*.'),
  K.tb(['Belirli artikelden sonra', 'eril', 'dişil', 'nötr', 'çoğul'],
    [['Nom.', 'der neu**e** Hut', 'die neu**e** Tasche', 'das neu**e** Kleid', 'die neu**en** Schuhe'], ['Akk.', 'den neu**en** Hut', 'die neu**e** Tasche', 'das neu**e** Kleid', 'die neu**en** Schuhe'],
     ['Dat.', 'dem neu**en** Hut', 'der neu**en** Tasche', 'dem neu**en** Kleid', 'den neu**en** Schuhen'], ['Gen.', 'des neu**en** Hutes', 'der neu**en** Tasche', 'des neu**en** Kleides', 'der neu**en** Schuhe']]),
  K.tb(['Belirsiz artikel / iyelik / kein', 'eril', 'dişil', 'nötr', 'çoğul (meine/keine)'],
    [['Nom.', 'ein neu**er** Hut', 'eine neu**e** Tasche', 'ein neu**es** Kleid', 'meine neu**en** Schuhe'], ['Akk.', 'einen neu**en** Hut', 'eine neu**e** Tasche', 'ein neu**es** Kleid', 'meine neu**en** Schuhe'],
     ['Dat.', 'einem neu**en** Hut', 'einer neu**en** Tasche', 'einem neu**en** Kleid', 'meinen neu**en** Schuhen'], ['Gen.', 'eines neu**en** Hutes', 'einer neu**en** Tasche', 'eines neu**en** Kleides', 'meiner neu**en** Schuhe']]),
  K.tb(['Artikelsiz', 'eril', 'dişil', 'nötr', 'çoğul'],
    [['Nom.', 'heiß**er** Tee', 'kalt**e** Milch', 'frisch**es** Brot', 'neu**e** Schuhe'], ['Akk.', 'heiß**en** Tee', 'kalt**e** Milch', 'frisch**es** Brot', 'neu**e** Schuhe'],
     ['Dat.', 'heiß**em** Tee', 'kalt**er** Milch', 'frisch**em** Brot', 'neu**en** Schuhen'], ['Gen.', 'heiß**en** Tees', 'kalt**er** Milch', 'frisch**en** Brotes', 'neu**er** Schuhe']]),
  K.ul(['**Temel fikir:** Hâl ve cinsiyet bilgisi bir kez gösterilmeli. Artikel bunu gösteriyorsa sıfat sadece **-e/-en** alır; artikel göstermiyorsa (ein, artikelsiz) **sıfat gösterir** (-er, -es, -em).',
        'Artikel yoksa sıfat **belirli artikelin sonunu** alır (der → -er, dem → -em, das → -es). Tek istisna: eril/nötr Genitiv **-en** (*frischen Brotes*).',
        'Birden fazla sıfat aynı eki alır: *ein großer, alter Baum*.',
        '**-el, -er** ile bitenlerde e düşebilir: *dunkel → ein dunkles Zimmer, teuer → ein teures Auto*. **hoch → das hohe Haus**.']),
  K.note('Kısa yol: belirli artikelden sonra **5 yerde -e** var (eril Nom., dişil ve nötr Nom./Akk.), **kalan her yerde -en**.'),
  K.ue('Sıfat ekini yazın.', [
    ['Ich wohne in einem alt___ Haus.', 'alten'], ['Der klein___ Junge spielt im Garten.', 'kleine'], ['Er kauft einen schwarz___ Mantel.', 'schwarzen'],
    ['Ich trinke gern kalt___ Wasser.', 'kaltes'], ['Wir sprechen mit den neu___ Kollegen.', 'neuen'], ['Das ist ein interessant___ Buch.', 'interessantes'],
    ['Mit frisch___ Gemüse (n) schmeckt die Suppe besser.', 'frischem'], ['Sie trägt eine rot___ Bluse.', 'rote']])
]),

K.sec('s40', '§40', 'Karşılaştırma: Komparativ ve Superlativ', 242, [
  K.tb(['Olumlu', 'Komparativ (-er)', 'Superlativ'],
    [['schnell', 'schneller', 'am schnellsten / der schnellste'], ['alt', 'älter', 'am ältesten'], ['groß', 'größer', 'am größten'],
     ['gut', '**besser**', '**am besten**'], ['viel', '**mehr**', '**am meisten**'], ['gern', '**lieber**', '**am liebsten**'], ['hoch', '**höher**', 'am höchsten'], ['nah', 'näher', '**am nächsten**']]),
  K.ul(['Tek heceli birçok sıfatta a, o, u → **ä, ö, ü** olur: *alt – älter, groß – größer, jung – jünger*.',
        '`-d, -t, -s, -ß, -sch, -z` ile bitenler Superlativ\'de **-est** alır: *am ältesten, am kürzesten*.',
        'Karşılaştırmada **als**: *Er ist größer **als** ich.* Eşitlikte **so … wie**: *Er ist **so** groß **wie** ich.*',
        'İsmin önünde Komparativ ve Superlativ de normal sıfat ekini alır: *ein schnelleres Auto, das schnellste Auto*.']),
  K.note('Superlativ iki biçimde: yüklem/zarf olarak **am …sten** (*Er läuft am schnellsten*), isimle **der/die/das …ste** (*der schnellste Läufer*).'),
  K.ue('Parantezdeki sıfatı doğru biçimde yazın.', [
    ['Berlin ist ___ als München. (groß)', 'größer'], ['Wer singt ___? (gut, Superlativ)', 'am besten'], ['Ich trinke ___ Tee als Kaffee. (gern)', 'lieber'],
    ['Das ist der ___ Berg Europas. (hoch, Superlativ)', 'höchste'], ['Mein Bruder ist ___ als ich. (jung)', 'jünger']])
]),

K.sec('s41', '§41', 'İsim olarak kullanılan sıfat ve ortaçlar', 247, [
  K.p('Sıfat ya da ortaç **isim** olarak kullanılabilir: büyük harfle yazılır ama **sıfat gibi çekilir**.'),
  K.tb(['', 'belirli artikelle', 'belirsiz artikelle'],
    [['eril', 'der Deutsch**e**', 'ein Deutsch**er**'], ['dişil', 'die Deutsch**e**', 'eine Deutsch**e**'], ['çoğul', 'die Deutsch**en**', 'Deutsch**e**'], ['Dat. eril', 'dem Deutsch**en**', 'einem Deutsch**en**']]),
  K.ul(['Kişiler: *der Bekannte, der Verwandte, der Erwachsene, der Angestellte, der Jugendliche, der Kranke, der Reisende.*',
        'Soyut kavramlar (nötr): *das Gute, das Neue* → *etwas Neues, nichts Besonderes, alles Gute* (etwas/nichts sonrası **-es**, alles sonrası **-e**).']),
  K.note('Tek istisna "Beamter": *der Beamte, ein Beamter* ama dişili ayrı bir isimdir: *die Beamtin*.'),
  K.ue('Doğru eki yazın.', [['Ein Bekannt___ hat mich angerufen.', 'Bekannter'], ['Ich habe etwas Interessant___ gelesen.', 'Interessantes'],
    ['Der Arzt hilft dem Krank___.', 'Kranken'], ['Wir wünschen dir alles Gut___!', 'Gute'], ['Sie ist eine Verwandt___ von mir.', 'Verwandte']])
]),

K.sec('s42', '§42', 'Zarflar (Adverbien)', 250, [
  K.p('Zarflar çekilmez. Anlamlarına göre gruplanırlar:'),
  K.tb(['Tür', 'Soru', 'Örnekler'],
    [['Zaman', 'wann? wie lange? wie oft?', 'heute, gestern, morgen, bald, damals, jetzt, immer, nie, oft, manchmal, schon, noch'],
     ['Tarz', 'wie?', 'gern, sehr, so, leider, vielleicht, zum Glück'], ['Yer', 'wo? wohin? woher?', 'hier, dort, oben, unten, drinnen, draußen, links, rechts'],
     ['Sebep', 'warum?', 'deshalb, darum, trotzdem']]),
  K.p('**hin ve her:** **her** konuşana doğru, **hin** konuşandan uzağa olan hareketi gösterir: *Komm **her**!* (buraya gel) / *Geh **hin**!* (oraya git). Birleşik biçimler: *herein, hinaus, herunter, hinauf* (günlük dilde: *rein, raus, runter, rauf*).'),
  K.note('"schon / noch / erst": *Er ist **schon** da* (çoktan geldi) – *Er ist **noch nicht** da* (henüz gelmedi) – *Er kommt **erst** morgen* (ancak yarın, beklenenden geç).'),
  K.ue('hin- veya her- ile tamamlayın.', [
    ['(Konuşan içeride) Bitte kommen Sie ___ein!', 'herein'], ['(Konuşan aşağıda) Kommst du ___unter?', 'herunter'], ['(Konuşan içeride, dışarıya) Geh bitte ___aus!', 'hinaus'],
    ['Er ist ___ noch nicht da. (henüz)', 'noch'], ['Sie kommt ___ übermorgen. (ancak)', 'erst']])
]),

K.sec('s43', '§43', 'Dativ ya da Akkusativ alan tarz zarfları', 255, [
  K.p('Bazı sıfat/zarflar bir **Dativ** tamlayıcısıyla kullanılır (kime göre?). Ölçü ve zaman bildirenler ise **Akkusativ** alır.'),
  K.tb(['Dativ ile', 'Örnek'],
    [['ähnlich, bekannt, dankbar, fremd, nützlich, peinlich, recht, schuldig, treu, wichtig, zu kalt/warm', 'Er ist **seinem Vater** ähnlich. Das ist **mir** zu teuer.']]),
  K.tb(['Akkusativ ile (ölçü/zaman)', 'Örnek'],
    [['alt, breit, groß, hoch, lang, schwer, tief, weit', 'Das Kind ist **einen Monat** alt. Der Tisch ist **einen Meter** breit.']]),
  K.note('"Bana soğuk" Almancada **Mir ist kalt** (Dativ) olur; *Ich bin kalt* "ben soğuk biriyim" anlamına gelir.'),
  K.ue('Boşluğa doğru zamiri ya da artikeli yazın.', [['Die Jacke ist ___ (ich) zu groß.', 'mir'], ['Ich bin ___ (du) sehr dankbar.', 'dir'],
    ['Die Wand ist ___ (ein) Meter hoch.', 'einen'], ['Diese Stadt ist ___ (er) fremd.', 'ihm']])
]),

K.sec('s44', '§44', 'Edatlı sıfat ve zarflar', 257, [
  K.p('Birçok sıfat sabit bir edatla kullanılır (fiillerde olduğu gibi, §15). Edatın yönettiği hâl de sabittir.'),
  K.tb(['Sıfat + edat', 'Anlam'],
    [['abhängig von + D', '-e bağlı/bağımlı'], ['stolz auf + A', '-den gurur duyan'], ['böse auf + A', '-e kızgın'], ['interessiert an + D', '-e ilgili'],
     ['zufrieden mit + D', '-den memnun'], ['verheiratet mit + D', 'ile evli'], ['bekannt für + A', 'ile tanınan'], ['überzeugt von + D', '-e inanmış'], ['gespannt auf + A', '-i merakla bekleyen'], ['froh über + A', '-e sevinen']]),
  K.ex([['Ich bin **mit** deiner Arbeit sehr **zufrieden**.', 'İşinden çok memnunum.'], ['Wir sind **stolz auf** unsere Tochter.', 'Kızımızla gurur duyuyoruz.']]),
  K.note('Soru ve zamirde fiillerdeki gibi **wo(r)-/da(r)-**: *Worauf bist du gespannt? – Darauf, wie der Film endet.*'),
  K.ue('Edatı yazın.', [['Bist du ___ deinem neuen Job zufrieden?', 'mit'], ['Er ist stolz ___ seinen Erfolg.', 'auf'],
    ['Die Stadt ist bekannt ___ ihre Brücken.', 'für'], ['Sie ist ___ einem Arzt verheiratet.', 'mit'], ['Ich bin gespannt ___ das Ergebnis.', 'auf']])
]),

K.sec('s45', '§45', 'Durum edilgeni (Zustandspassiv)', 259, [
  K.p('İşlem edilgeni (§19) bir **süreci** anlatır: *Die Tür **wird** geöffnet* (kapı açılıyor). Durum edilgeni ise sürecin **sonucunu** anlatır: *Die Tür **ist** geöffnet* (kapı açık). Yapı: **sein + Partizip II**.'),
  K.tb(['Zaman', 'Vorgangspassiv (süreç)', 'Zustandspassiv (sonuç)'],
    [['Präsens', 'Das Geschäft wird geschlossen.', 'Das Geschäft ist geschlossen.'], ['Präteritum', 'Das Geschäft wurde geschlossen.', 'Das Geschäft war geschlossen.']]),
  K.note('Durum edilgeni, işlem tamamlandıktan sonraki hâli anlatır; bu yüzden anlamı Perfekt Passiv\'e yakındır: *Das Auto ist repariert* ≈ *Das Auto ist repariert worden* (ama vurgu sonuçta).'),
  K.ue('Durum edilgeniyle (sein + Partizip II) cümle kurun.', [['Man hat den Tisch gedeckt.', 'Der Tisch ist gedeckt.'], ['Man hat die Briefe geschrieben.', 'Die Briefe sind geschrieben.'],
    ['Man hatte die Straße gesperrt.', 'Die Straße war gesperrt.']])
]),

K.sec('s46', '§46', 'Ortaç yapıları (Partizipialkonstruktion)', 261, [
  K.p('İsmin önüne genişletilmiş bir ortaç yapısı konabilir; bu yapı bir ilgi cümlesinin yerini tutar (Türkçe "-an, -dığı" yapısına çok benzer!). Ortaç sıfat gibi çekilir.'),
  K.tb(['Ortaç', 'Anlam', 'Örnek'],
    [['Partizip I (-end)', 'etken, eşzamanlı', 'das **schlafende** Kind = das Kind, das schläft (uyuyan çocuk)'],
     ['Partizip II (geçişli fiil)', 'edilgen, tamamlanmış', 'das **reparierte** Auto = das Auto, das repariert worden ist (tamir edilmiş araba)'],
     ['Partizip II (sein alan geçişsiz)', 'etken, tamamlanmış', 'der **angekommene** Zug = der Zug, der angekommen ist (gelmiş tren)']]),
  K.ex([['der **seit Stunden im Regen wartende** Mann', 'saatlerdir yağmurda bekleyen adam'], ['die **von den Studenten geschriebenen** Arbeiten', 'öğrencilerin yazdığı ödevler']]),
  K.note('Türkçe konuşanlar için bu yapı aslında tanıdık: "dün bize gelen misafir" → *der gestern zu uns gekommene Gast*. Sıra da Türkçedeki gibi: tümleçler önce, ortaç sonra, isim en sonda.'),
  K.ue('İlgi cümlesini ortaç yapısına çevirin.', [
    ['die Frau, die im Garten arbeitet', 'die im Garten arbeitende Frau'], ['der Brief, der gestern geschrieben wurde', 'der gestern geschriebene Brief'],
    ['die Gäste, die spät angekommen sind', 'die spät angekommenen Gäste'], ['das Kind, das laut lacht', 'das laut lachende Kind']])
]),

K.sec('s47', '§47', 'Ortaç cümlecikleri (Partizipialsätze)', 267, [
  K.p('Ortaç, özneyi olmadan kısa bir cümlecik gibi de kullanılabilir. Daha çok yazı dilinde ve edebî metinlerde görülür; özne ana cümleninkiyle aynıdır.'),
  K.ex([['**Laut singend** ging er durch die Straße.', 'Yüksek sesle şarkı söyleyerek caddeden yürüdü.'], ['**In Berlin angekommen**, rief sie ihre Eltern an.', 'Berlin\'e varınca ailesini aradı.'], ['**Von allen bewundert**, betrat er die Bühne.', 'Herkes tarafından hayranlıkla izlenerek sahneye çıktı.']]),
  K.note('Çeviride genelde "-erek", "-ınca", "-dıktan sonra" kullanılır. Bu yapıyı kendin üretmen pek gerekmez ama okurken tanıman önemli.'),
  K.ue('Ortaç cümleciğini yan cümleye çevirin.', [['Laut lachend verließ sie den Raum.', 'Sie verließ den Raum und lachte laut. / Während sie laut lachte, verließ sie den Raum.'],
    ['Zu Hause angekommen, legte er sich hin.', 'Nachdem er zu Hause angekommen war, legte er sich hin.']])
]),

K.sec('s48', '§48', 'haben ve sein + zu + Infinitiv', 269, [
  K.tb(['Yapı', 'Anlam', 'Örnek', 'Eşdeğer'],
    [['haben + zu', 'zorunluluk (etken)', 'Ich **habe** noch viel **zu tun**.', 'Ich muss noch viel tun.'],
     ['sein + zu', 'zorunluluk ya da olanak (edilgen)', 'Die Rechnung **ist** sofort **zu bezahlen**.', 'Die Rechnung muss sofort bezahlt werden.'],
     ['sein + zu', 'olanak (edilgen)', 'Das Problem **ist** leicht **zu lösen**.', 'Das Problem kann leicht gelöst werden.']]),
  K.note('**sein + zu** edilgen anlam taşır ve resmî metinlerde çok sık geçer: *Rauchen ist hier nicht gestattet / Der Ausweis ist vorzuzeigen* (kimlik gösterilmelidir).'),
  K.ue('Modal fiilli cümleyi haben/sein + zu ile yeniden yazın.', [
    ['Die Formulare müssen ausgefüllt werden.', 'Die Formulare sind auszufüllen.'], ['Er muss morgen früh arbeiten.', 'Er hat morgen früh zu arbeiten.'],
    ['Der Fehler kann leicht gefunden werden.', 'Der Fehler ist leicht zu finden.']])
]),

K.sec('s49', '§49', 'Gerundivum (zu + Partizip I)', 272, [
  K.p('Gerundivum, **sein + zu + Infinitiv** yapısının isim önünde kullanılan biçimidir: **zu + Partizip I** + sıfat eki. Anlamı "yapılması gereken / yapılabilecek" olur.'),
  K.ex([['die **zu lösende** Aufgabe = die Aufgabe, die zu lösen ist', 'çözülmesi gereken görev'], ['ein nicht **zu unterschätzendes** Problem', 'küçümsenmemesi gereken bir sorun']]),
  K.note('Ayrılan fiillerde zu araya girer: *die **abzuholenden** Pakete* (alınması gereken paketler).'),
  K.ue('Gerundivum ile ifade edin.', [['der Brief, der zu schreiben ist', 'der zu schreibende Brief'], ['die Kosten, die zu bezahlen sind', 'die zu bezahlenden Kosten'],
    ['die Gäste, die abzuholen sind', 'die abzuholenden Gäste']])
]),

K.sec('s50', '§50', 'Açıklamalar (Appositionen)', 274, [
  K.p('Apposition, bir ismi açıklayan ve **aynı hâlde** olan ikinci bir isim öbeğidir. Genelde virgüller arasında durur.'),
  K.ex([['Ich sprach mit **Herrn Meier, dem Direktor** der Schule.', 'Okulun müdürü Bay Meier ile konuştum. (ikisi de Dativ)'],
        ['Das ist das Auto **meines Bruders, eines bekannten Arztes**.', 'Bu, tanınmış bir doktor olan kardeşimin arabası. (ikisi de Genitiv)'], ['**am Montag, dem 3. Mai**', '3 Mayıs pazartesi günü']]),
  K.note('Tarihte iki kullanım da doğrudur: *am Montag, **dem** 3. Mai* (Dativ) ya da *am Montag, **den** 3. Mai* (Akkusativ, mektup başlıklarında).'),
  K.ue('Açıklamayı doğru hâlde yazın.', [['Ich wohne bei meiner Tante, ___ (eine Ärztin).', 'einer Ärztin'], ['Kennst du Herrn Kaya, ___ (unser neuer Nachbar)?', 'unseren neuen Nachbarn'],
    ['Das ist das Haus meines Onkels, ___ (ein bekannter Maler).', 'eines bekannten Malers']])
]),

K.sec('s51', '§51', 'Derece belirten tamlayıcılar (Rangattribute)', 275, [
  K.p('**sogar, nur, auch, besonders, vor allem, gerade, ausgerechnet, selbst** gibi sözcükler bir cümle öğesini öne çıkarır ve hemen **önündeki** öğeye bağlanır. Yerleri değişince anlam da değişir.'),
  K.ex([['**Nur** ich habe ihn gestern gesehen.', 'Dün onu yalnızca ben gördüm (başkası değil).'], ['Ich habe **nur** ihn gestern gesehen.', 'Dün yalnızca onu gördüm.'], ['Ich habe ihn **nur** gestern gesehen.', 'Onu yalnızca dün gördüm.']]),
  K.note('**selbst** iki anlama gelir: öğenin önünde "bile" (*Selbst der Lehrer wusste es nicht*), arkasında "bizzat, kendisi" (*Der Lehrer selbst wusste es nicht*).'),
  K.ue('Cümleyi Türkçeye çevirin.', [['Sogar mein Opa hat ein Smartphone.', 'Büyükbabamın bile akıllı telefonu var.'], ['Ausgerechnet heute regnet es.', 'Tam da bugün yağmur yağıyor.'],
    ['Ich habe nur zwei Stunden geschlafen.', 'Sadece iki saat uyudum.']])
])
]);

/* Teil IV: §52–§56 Konjunktiv */
K.part('t4', 'Teil IV', 'Konjunktiv: dilek, varsayım ve dolaylı anlatım', [

K.sec('s52', '§52–53', 'Konjunktiv II: biçimler', 278, [
  K.p('Konjunktiv II **gerçek olmayanı** anlatır: dilekler, varsayımlar, kibar ricalar. Şimdiki zaman için iki yol vardır: güçlü fiillerin ve yardımcı fiillerin kendi biçimi ya da **würde + Infinitiv**.'),
  K.tb(['Fiil', 'Präteritum', 'Konjunktiv II'],
    [['sein', 'war', '**wäre**'], ['haben', 'hatte', '**hätte**'], ['werden', 'wurde', '**würde**'], ['können', 'konnte', '**könnte**'], ['müssen', 'musste', '**müsste**'],
     ['dürfen', 'durfte', '**dürfte**'], ['mögen', 'mochte', '**möchte**'], ['wollen / sollen', 'wollte / sollte', '**wollte / sollte** (umlaut yok)'], ['kommen', 'kam', 'käme'], ['gehen', 'ging', 'ginge'], ['wissen', 'wusste', 'wüsste']]),
  K.ul(['Kural: Präteritum kökü + **-e** ekleri, a/o/u → **ä/ö/ü**: *kam → käme, flog → flöge*.',
        'Zayıf fiillerde Konjunktiv II Präteritum ile aynıdır (*ich arbeitete*), bu yüzden **würde + Infinitiv** kullanılır: *ich würde arbeiten*.',
        'Günlük dilde güçlü fiillerde de çoğunlukla **würde** tercih edilir; ama sein, haben, modal fiiller ve *wissen, kommen, gehen, geben* gibi sık fiiller kendi biçimleriyle kullanılır.',
        '**Geçmiş:** **hätte / wäre + Partizip II**: *Ich **hätte** dich **angerufen**. Er **wäre gekommen**.* Modal fiille: *Ich **hätte** kommen **können**.*']),
  K.tb(['Şahıs', 'sein', 'haben', 'würde'],
    [['ich', 'wäre', 'hätte', 'würde'], ['du', 'wär(e)st', 'hättest', 'würdest'], ['er/sie/es', 'wäre', 'hätte', 'würde'], ['wir', 'wären', 'hätten', 'würden'], ['ihr', 'wär(e)t', 'hättet', 'würdet'], ['sie/Sie', 'wären', 'hätten', 'würden']]),
  K.note('Geçmişte "yapabilirdim" anlamında iki Infinitiv sona gelir ve yan cümlede **hätte** onların önüne geçer: *…, dass ich hätte kommen können.*'),
  K.ue('Konjunktiv II biçimini yazın (şimdiki zaman).', [
    ['ich habe → ich ___', 'hätte'], ['wir sind → wir ___', 'wären'], ['du kannst → du ___', 'könntest'], ['er kommt → er ___ / er würde kommen', 'käme'],
    ['sie arbeitet → sie ___', 'würde arbeiten'], ['ihr wisst → ihr ___', 'wüsstet']]),
  K.ue('Geçmiş zaman Konjunktiv II\'ye çevirin.', [['Ich komme. (gekommen)', 'Ich wäre gekommen.'], ['Sie kauft das Kleid.', 'Sie hätte das Kleid gekauft.'],
    ['Wir können helfen.', 'Wir hätten helfen können.']])
]),

K.sec('s54', '§54', 'Konjunktiv II\'nin kullanımı', 283, [
  K.tb(['Kullanım', 'Örnek', 'Türkçe'],
    [['Gerçek dışı dilek', '**Wenn** ich doch mehr Zeit **hätte**! / **Hätte** ich doch mehr Zeit!', 'Keşke daha çok vaktim olsa!'],
     ['Gerçek dışı koşul', 'Wenn ich Geld **hätte**, **würde** ich reisen.', 'Param olsa seyahat ederdim.'],
     ['Geçmişte gerçek dışı koşul', 'Wenn du früher gekommen **wärst**, **hättest** du ihn gesehen.', 'Daha erken gelseydin onu görürdün.'],
     ['Gerçek dışı karşılaştırma', 'Er tut so, **als ob** er krank **wäre**. / …, **als wäre** er krank.', 'Sanki hastaymış gibi yapıyor.'],
     ['Kibar rica', '**Könnten** Sie mir helfen? **Hätten** Sie einen Moment Zeit?', 'Bana yardım edebilir miydiniz?'],
     ['Öneri / tavsiye', 'Du **solltest** mehr schlafen. An deiner Stelle **würde** ich …', 'Daha çok uyumalısın.'],
     ['Neredeyse olan', 'Fast **hätte** ich den Zug verpasst.', 'Neredeyse treni kaçırıyordum.'],
     ['Sonuç gerçekleşmeyen (zu …, als dass)', 'Es ist **zu** spät, **als dass** wir noch kommen **könnten**.', 'Gelemeyeceğimiz kadar geç.']]),
  K.ul(['**wenn** atılabilir; o zaman fiil başa gelir: *Hätte ich Geld, würde ich reisen.*',
        '**als ob / als wenn** ile fiil sonda; sadece **als** ile fiil hemen arkasında: *als wäre er krank*.',
        '**ohne dass / ohne … zu** ile gerçekleşmeyen: *Er ging, ohne dass er sich verabschiedet hätte.* (Konj. II opsiyonel)']),
  K.trap('Ana cümle ve **wenn** cümlesinin ikisinde de **würde** kullanmak günlük dilde duyulur ama yazıda kaçınılır: ~~Wenn ich Zeit haben würde~~ → *Wenn ich Zeit **hätte**, …*'),
  K.note('Türkçede "-sa/-se … -ır/-er-di" kalıbı = **Wenn … Konj. II, … würde/Konj. II**. Geçmiş için "-saydı … -ırdı" = **hätte/wäre + Partizip II**.'),
  K.ue('Gerçek dışı koşul cümlesi kurun (Konjunktiv II).', [
    ['Ich habe kein Auto. Ich fahre nicht ans Meer.', 'Wenn ich ein Auto hätte, würde ich ans Meer fahren.'],
    ['Es regnet. Wir gehen nicht spazieren.', 'Wenn es nicht regnete, würden wir spazieren gehen. (konuşma dilinde: Wenn es nicht regnen würde, …)'],
    ['Er hat nicht gelernt. Er hat die Prüfung nicht bestanden.', 'Wenn er gelernt hätte, hätte er die Prüfung bestanden.'],
    ['Du bist nicht gekommen. Du hast sie nicht kennengelernt.', 'Wenn du gekommen wärst, hättest du sie kennengelernt.']]),
  K.ue('Dilek cümlesi kurun (doch).', [['Ich bin nicht reich.', 'Wenn ich doch reich wäre! / Wäre ich doch reich!'], ['Ich habe nicht früher angefangen.', 'Hätte ich doch früher angefangen!'],
    ['Er kann nicht schwimmen.', 'Wenn er doch schwimmen könnte!']]),
  K.ue('als ob ile cümle kurun.', [['Er ist nicht der Chef. (Er tut so, …)', 'Er tut so, als ob er der Chef wäre.'], ['Sie hat nichts gehört. (Sie tut so, …)', 'Sie tut so, als ob sie nichts gehört hätte.']])
]),

K.sec('s55', '§55', 'Konjunktiv I: biçimler', 294, [
  K.p('Konjunktiv I, **Infinitiv kökü + -e** ekleriyle yapılır ve umlaut almaz. Pratikte en çok **3. tekil** biçimi kullanılır, çünkü diğer şahısların çoğu Indikativ ile aynıdır.'),
  K.tb(['Şahıs', 'sein', 'haben', 'können', 'kommen'],
    [['ich', 'sei', '(habe → hätte)', 'könne', '(komme → käme)'], ['du', 'sei(e)st', 'habest', 'könnest', 'kommest'], ['er/sie/es', '**sei**', '**habe**', '**könne**', '**komme**'],
     ['wir', 'seien', '(haben → hätten)', '(können → könnten)', '(kommen → kämen)'], ['sie/Sie', 'seien', '(haben → hätten)', '(können → könnten)', '(kommen → kämen)']]),
  K.ul(['Konjunktiv I biçimi Indikativ ile aynıysa (parantezdekiler) **Konjunktiv II** kullanılır; o da Präteritum ile aynıysa **würde** kullanılır.',
        'Geçmiş: **habe / sei + Partizip II**: *Er sagt, er **habe** angerufen / er **sei** gekommen.*',
        'Gelecek: **werde + Infinitiv**: *Sie sagt, sie **werde** morgen kommen.*', '**sein** düzensizdir ve her şahısta ayrı biçimi vardır: *ich sei, wir seien*.']),
  K.ue('3. tekil Konjunktiv I biçimini yazın.', [['er hat → er ___', 'habe'], ['sie ist → sie ___', 'sei'], ['er muss → er ___', 'müsse'], ['sie weiß → sie ___', 'wisse'], ['er fährt → er ___', 'fahre'],
    ['sie ist gegangen → sie ___ gegangen', 'sei']])
]),

K.sec('s56', '§56', 'Dolaylı anlatım (indirekte Rede)', 297, [
  K.p('Başkasının sözünü tarafsız aktarırken, özellikle haberlerde ve resmî yazılarda **Konjunktiv I** kullanılır. Konuşma dilinde çoğu zaman Indikativ ya da Konjunktiv II duyulur.'),
  K.tb(['Doğrudan söz', 'Dolaylı anlatım'],
    [['Er sagt: „Ich **bin** krank."', 'Er sagt, er **sei** krank.'], ['Sie sagt: „Ich **habe** keine Zeit."', 'Sie sagt, sie **habe** keine Zeit.'],
     ['Sie sagen: „Wir **haben** keine Zeit."', 'Sie sagen, sie **hätten** keine Zeit. (Konj. I = Indikativ → Konj. II)'],
     ['Er sagte: „Ich **war** gestern im Kino."', 'Er sagte, er **sei** gestern im Kino **gewesen**. (tüm geçmiş zamanlar → sei/habe + P. II)'],
     ['Sie fragt: „**Kommst** du mit?"', 'Sie fragt, **ob** ich mitkomme / mitkäme.'], ['Er fragt: „**Wann** beginnt der Kurs?"', 'Er fragt, **wann** der Kurs beginne.'],
     ['Sie sagt: „**Komm** bitte!"', 'Sie sagt, ich **solle** kommen. (rica: möge, emir: solle)']]),
  K.ul(['Zamirler aktaranın bakış açısına göre değişir: *„Ich helfe dir" → Er sagt, er helfe mir.*', 'Bağlaç **dass** kullanılabilir; o zaman fiil sona gider: *Er sagt, dass er krank sei.*',
        'Evet/hayır soruları **ob**, soru kelimeli sorular aynı soru kelimesiyle aktarılır.', 'Emir cümleleri **sollen** (emir) ya da **mögen** (kibar rica) ile aktarılır.']),
  K.note('Haber dilinde **Konjunktiv I**, "söylenene göre" mesafesi koyar: *Der Minister erklärte, die Lage **sei** unter Kontrolle.* Gazeteci bunu kendi iddiası olarak sunmaz.'),
  K.ue('Dolaylı anlatıma çevirin (Konjunktiv I; gerekiyorsa II).', [
    ['Er sagt: „Ich habe Hunger."', 'Er sagt, er habe Hunger.'], ['Sie sagt: „Ich bin müde."', 'Sie sagt, sie sei müde.'],
    ['Die Kinder sagen: „Wir haben Durst."', 'Die Kinder sagen, sie hätten Durst.'], ['Er sagte: „Ich habe den Film gesehen."', 'Er sagte, er habe den Film gesehen.'],
    ['Sie fragt: „Hast du Zeit?"', 'Sie fragt, ob ich Zeit habe / hätte.'], ['Der Lehrer sagt: „Macht die Hausaufgaben!"', 'Der Lehrer sagt, wir sollten die Hausaufgaben machen.'],
    ['Er erklärte: „Ich werde morgen abreisen."', 'Er erklärte, er werde morgen abreisen.']])
])
]);

/* Teil V: §57–§63 + Kommaregeln */
K.part('t5', 'Teil V', 'Edatlar, Funktionsverbgefüge, zaman kullanımı ve virgül kuralları', [

K.sec('s57', '§57', 'Edatlar: genel bakış', 303, [
  K.p('Almancada her edat belirli bir **hâli** yönetir: Akkusativ, Dativ, Genitiv ya da (iki yönlü edatlarda) duruma göre Akkusativ/Dativ. Edat + artikel çoğu zaman kaynaşır:'),
  K.tb(['Kaynaşma', 'Açılımı'], [['am, beim, im, vom, zum', 'an/bei/in/von/zu + dem'], ['zur', 'zu + der'], ['ans, ins', 'an/in + das'], ['aufs, durchs, fürs, ums (konuşma dili)', 'auf/durch/für/um + das']]),
  K.note('Kaynaşmış biçim, artikel vurgulanmıyorsa kullanılır. *Ich gehe **ins** Kino* (genel) / *Ich gehe **in das** Kino, das du empfohlen hast* (belirli o sinema).')
]),

K.sec('s58', '§58', 'Akkusativ alan edatlar', 304, [
  K.tb(['Edat', 'Anlam', 'Örnek'],
    [['bis', '-e kadar', '**bis** Montag, **bis** Berlin (genelde artikelsiz; artikelle: bis zum …)'], ['durch', '-in içinden; aracılığıyla', '**durch den** Park, **durch einen** Zufall'],
     ['für', 'için', '**für meinen** Bruder, **für eine** Woche'], ['gegen', '-e karşı; sularında (saat)', '**gegen den** Wind, **gegen** acht Uhr'],
     ['ohne', '-sız', '**ohne mich**, **ohne** Zucker'], ['um', 'etrafında; saat …\'de', '**um den** Tisch, **um** 8 Uhr'], ['entlang (sonra gelir)', 'boyunca', '**den Fluss entlang**']]),
  K.note('Ezber için: **D-O-G-F-U-B** = **d**urch, **o**hne, **g**egen, **f**ür, **u**m, **b**is.'),
  K.ue('Artikeli ya da zamiri doğru hâlde yazın.', [['Wir gehen durch ___ (der) Wald.', 'den'], ['Das Geschenk ist für ___ (du).', 'dich'], ['Ohne ___ (mein) Brille sehe ich nichts.', 'meine'],
    ['Sie sitzen um ___ (der) Tisch.', 'den'], ['Er ist gegen ___ (der) Plan.', 'den']])
]),

K.sec('s59', '§59', 'Dativ alan edatlar', 308, [
  K.tb(['Edat', 'Anlam', 'Örnek'],
    [['ab', '-den itibaren', '**ab** nächster Woche, **ab** 18 Jahren'], ['aus', '-den (içinden, köken), -den yapılmış', '**aus dem** Haus, **aus der** Türkei, **aus** Holz'],
     ['außer', '-den başka, hariç', '**außer mir**'], ['bei', 'yanında, -de (yer/kişi), sırasında', '**bei meinen** Eltern, **bei der** Arbeit'],
     ['gegenüber', 'karşısında', '**dem Bahnhof gegenüber** / **gegenüber dem** Bahnhof'], ['mit', 'ile', '**mit dem** Bus, **mit mir**'],
     ['nach', '-e (ülke/şehir, artikelsiz), -den sonra, -e göre', '**nach** Berlin, **nach dem** Essen, **meiner Meinung nach**'], ['seit', '-den beri', '**seit einem** Jahr'],
     ['von', '-den, -in (sahiplik), tarafından', '**vom** Arzt, **von** 8 **bis** 10'], ['zu', '-e (kişi, kurum), için (amaç)', '**zum** Arzt, **zur** Schule, **zu** Hause']]),
  K.tb(['Nereye? (yön)', 'Nerede? (yer)', 'Nereden?'],
    [['**zu** + kişi: zum Arzt', '**bei** + kişi: beim Arzt', '**von** + kişi: vom Arzt'], ['**nach** + şehir/ülke: nach Wien', '**in** + şehir/ülke: in Wien', '**aus** + şehir/ülke: aus Wien'],
     ['**nach** Hause', '**zu** Hause', '**von** zu Hause']]),
  K.trap('Artikelli ülkelerde **nach** değil **in + Akk.** kullanılır: *in **die** Türkei, in **die** Schweiz, in **die** USA*.'),
  K.ue('Uygun edatı (ve artikeli) yazın.', [['Ich fahre morgen ___ Hamburg.', 'nach'], ['Heute gehe ich ___ Zahnarzt.', 'zum'], ['Sie wohnt noch ___ ihren Eltern.', 'bei'],
    ['Er kommt ___ Italien.', 'aus'], ['Ich lerne ___ drei Monaten Deutsch.', 'seit'], ['___ dem Essen trinken wir Kaffee.', 'Nach'], ['Wir fahren ___ dem Zug.', 'mit']])
]),

K.sec('s60', '§60', 'Akkusativ ya da Dativ alan edatlar (Wechselpräpositionen)', 318, [
  K.p('**an, auf, hinter, in, neben, über, unter, vor, zwischen** – dokuz iki yönlü edat. Kural basit:'),
  K.tb(['Soru', 'Hâl', 'Örnek'], [['**Wohin?** (yön, yer değiştirme)', '**Akkusativ**', 'Ich lege das Buch **auf den** Tisch.'], ['**Wo?** (yer, durum)', '**Dativ**', 'Das Buch liegt **auf dem** Tisch.']]),
  K.tb(['Wohin? (+ Akk.)', 'Wo? (+ Dat.)'],
    [['legen – yatırarak koymak', 'liegen – yatık durmak'], ['stellen – dikey koymak', 'stehen – dik durmak'], ['setzen – oturtmak / sich setzen', 'sitzen – oturmak'],
     ['hängen (hängte) – asmak', 'hängen (hing) – asılı durmak'], ['stecken (steckte) – sokmak', 'stecken (steckte) – takılı durmak']]),
  K.ul(['Zaman bildirirken **an, in, vor** hep **Dativ** alır: *am Montag, im Sommer, vor einer Woche*.', '**über** "-den fazla" ve **unter** "-den az" anlamında edat gibi değil, sayı önünde kullanılır.']),
  K.note('Hareket olması yetmez, **yön değiştirme** önemli: *Er läuft **im** Park* (park içinde koşuyor, Dativ) / *Er läuft **in den** Park* (parka doğru koşuyor, Akk.).'),
  K.ue('Artikeli doğru hâlde yazın.', [['Ich stelle die Vase auf ___ Tisch.', 'den'], ['Die Vase steht auf ___ Tisch.', 'dem'], ['Er hängt das Bild an ___ Wand.', 'die'],
    ['Das Bild hängt an ___ Wand.', 'der'], ['Die Katze springt unter ___ Bett.', 'das'], ['Die Katze schläft unter ___ Bett.', 'dem'], ['Wir treffen uns vor ___ Kino.', 'dem'],
    ['Setz dich neben ___ (ich)!', 'mich']])
]),

K.sec('s61', '§61', 'Genitiv alan edatlar', 327, [
  K.tb(['Edat', 'Anlam', 'Örnek'],
    [['während', 'süresince, sırasında', '**während des** Unterrichts'], ['wegen', 'yüzünden, nedeniyle', '**wegen des** Regens'], ['trotz', '-e rağmen', '**trotz des** schlechten Wetters'],
     ['(an)statt', 'yerine', '**statt eines** Briefes'], ['innerhalb / außerhalb', 'içinde / dışında', '**innerhalb einer** Woche, **außerhalb der** Stadt'], ['aufgrund, infolge', 'nedeniyle, sonucunda', '**aufgrund des** Streiks'],
     ['diesseits / jenseits', 'bu / öte yakasında', '**jenseits des** Flusses'], ['oberhalb / unterhalb', 'üstünde / altında', '**oberhalb des** Dorfes']]),
  K.note('Konuşma dilinde **wegen, trotz, statt, während** sık sık **Dativ** ile kullanılır (*wegen dem Regen*). Yazıda Genitiv tercih edilir. Zamirlerle: *meinetwegen, deinetwegen* (benim yüzümden / bence olur).'),
  K.ue('Genitiv biçimini yazın.', [['wegen ___ (das Wetter)', 'des Wetters'], ['während ___ (die Ferien, Pl.)', 'der Ferien'], ['trotz ___ (der Stau)', 'des Staus'], ['statt ___ (ein Auto)', 'eines Autos'],
    ['innerhalb ___ (ein Monat)', 'eines Monats']])
]),

K.sec('s62', '§62', 'Funktionsverbgefüge', 335, [
  K.p('Funktionsverbgefüge, anlamı **isim** taşıyan, fiilin ise sadece "işlev" gördüğü kalıplardır: **edat/artikel + isim + fiil**. Resmî ve yazılı dilde çok sık geçer; çoğu zaman sade bir fiile denktir.'),
  K.tb(['Funktionsverbgefüge', 'Sade fiil', 'Anlam'],
    [['eine Entscheidung treffen', 'entscheiden', 'karar vermek'], ['in Frage stellen', 'bezweifeln', 'sorgulamak'], ['zur Verfügung stellen', 'bereitstellen', 'kullanıma sunmak'],
     ['in Kraft treten', 'gültig werden', 'yürürlüğe girmek'], ['Kritik üben (an + D)', 'kritisieren', 'eleştirmek'], ['eine Frage stellen', 'fragen', 'soru sormak'],
     ['in Anspruch nehmen', 'beanspruchen, nutzen', 'yararlanmak, (zaman) almak'], ['zum Ausdruck bringen', 'ausdrücken', 'ifade etmek'], ['Bescheid sagen / geben', 'informieren', 'haber vermek'],
     ['in Verbindung stehen (mit)', 'verbunden sein', 'bağlantılı olmak'], ['zu Ende bringen', 'beenden', 'bitirmek'], ['Rücksicht nehmen (auf + A)', 'berücksichtigen', 'dikkate almak, saygı göstermek']]),
  K.ul(['**bringen / setzen / stellen** genelde başlatmayı ya da edilgeni, **kommen / geraten** başlangıcı (edilgen anlamda), **sein / stehen** durumu anlatır: *in Bewegung **setzen** → in Bewegung **kommen** → in Bewegung **sein***.',
        'Olumsuzluk çoğu zaman **nicht** ile yapılır, isim artikelsizse: *Das kommt **nicht** in Frage* (söz konusu değil).']),
  K.note('Bu kalıplar çevirmede tuzaktır: kelime kelime değil, kalıp olarak öğren. *Das kommt nicht in Frage!* = "Asla olmaz!"'),
  K.ue('Boşluğa uygun fiili yazın (treffen, stellen, nehmen, treten, bringen).', [['Wir müssen bald eine Entscheidung ___.', 'treffen'], ['Das neue Gesetz ___ im Januar in Kraft.', 'tritt'],
    ['Die Firma ___ den Mitarbeitern Laptops zur Verfügung.', 'stellt'], ['Bitte ___ Sie Rücksicht auf die Nachbarn!', 'nehmen'], ['Er hat seine Arbeit endlich zu Ende ___.', 'gebracht']])
]),

K.sec('s63', '§63', 'Zamanların kullanımı (Tempusgebrauch)', 351, [
  K.tb(['Zaman', 'Kullanım', 'Örnek'],
    [['Präsens', 'şimdi, alışkanlık, genel doğrular; **yakın gelecek** (zaman zarfıyla)', 'Ich **fahre** morgen nach Berlin.'],
     ['Perfekt', 'geçmiş – **konuşma dilinde** ve mektupta; sonucu şimdiye uzanan olay', 'Ich **habe** gestern lange **gearbeitet**.'],
     ['Präteritum', 'geçmiş – **yazı dilinde**, hikâye, haber; ama sein, haben, modal fiiller konuşmada da', 'Es **war** einmal ein König. Ich **musste** warten.'],
     ['Plusquamperfekt', 'geçmişteki bir olaydan **daha önce** olan', 'Als ich ankam, **war** der Zug schon **abgefahren**.'],
     ['Futur I', 'gelecek (niyet, söz), **tahmin** (wohl ile)', 'Er **wird** wohl krank **sein**.'],
     ['Futur II', 'gelecekte tamamlanmış olacak; geçmiş hakkında tahmin', 'Er **wird** den Zug wohl **verpasst haben**.']]),
  K.ul(['**seit** + Präsens: hâlâ süren durum. Türkçedeki "-dır, -den beri" gibi: *Ich **wohne** seit fünf Jahren hier.* (Perfekt değil!)',
        '**Futur I** gelecekten çok **tahmin** için kullanılır; günlük dilde gelecek için çoğu zaman Präsens yeterli.']),
  K.trap('"5 yıldır burada yaşıyorum" → ~~Ich habe seit 5 Jahren hier gewohnt~~. Doğrusu: *Ich wohne seit 5 Jahren hier.*'),
  K.ue('Uygun zamanı seçin ya da yazın.', [['Ich ___ seit drei Jahren in Köln. (wohnen)', 'wohne'], ['Nachdem er gegessen ___, ging er spazieren.', 'hatte'],
    ['Wo ist Ali? – Er ___ wohl noch schlafen. (tahmin)', 'wird'], ['(Hikâye) Plötzlich ___ es an der Tür. (klingeln)', 'klingelte'], ['Morgen ___ wir ins Kino. (gehen)', 'gehen']])
]),

K.sec('skomma', 'Ek', 'Virgül kuralları (Kommaregeln)', 358, [
  K.ul(['**Yan cümle** her zaman virgülle ayrılır: *Ich weiß, **dass** er kommt.* / *Als ich kam, **war** er weg.*',
        '**İlgi cümlesi** baştan ve sondan virgülle ayrılır: *Der Mann, **der** dort steht, ist mein Lehrer.*',
        'Sıralamada virgül kullanılır ama **und / oder** önüne konmaz: *Äpfel, Birnen und Bananen*.',
        'Ana cümleler **aber, sondern, denn, doch** önünde virgül alır: *Ich wollte kommen, **aber** ich war krank.*',
        '**und / oder** ile bağlanan iki tam ana cümle arasında virgül **isteğe bağlıdır**.',
        '**zu + Infinitiv**: *um, ohne, statt, als* ile başlıyorsa ya da bir isme/işaret sözcüğüne bağlıysa **zorunlu**; *Er ging, **ohne** zu grüßen. Ich habe **keine Lust**, zu kommen.* Diğerlerinde isteğe bağlıdır.',
        'Ünlem, hitap ve araya giren açıklamalar virgülle ayrılır: *Ja, das stimmt. Anna, komm bitte! Herr Kaya, unser Lehrer, ist krank.*']),
  K.note('Türkçeden farklı: Almancada yan cümle virgülü **zorunludur**, nefes durağı değil dilbilgisi kuralıdır. "dass" önünde virgülü unutmak en sık hatadır.'),
  K.ue('Gerekli virgülleri koyun.', [['Ich hoffe dass du bald kommst.', 'Ich hoffe, dass du bald kommst.'], ['Das Buch das ich lese ist spannend.', 'Das Buch, das ich lese, ist spannend.'],
    ['Er kauft Brot Käse und Milch.', 'Er kauft Brot, Käse und Milch.'], ['Sie ging ohne sich zu verabschieden.', 'Sie ging, ohne sich zu verabschieden.'], ['Ich bin müde aber ich muss noch arbeiten.', 'Ich bin müde, aber ich muss noch arbeiten.']])
])
]);

