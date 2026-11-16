"""python3 build.py → ../content.js, ../questions.js
Doğrulama (Chromium, Playwright):
 - özet kod blokları: sayfa hatasız açılmalı; 'check' varsa JS ifadesi true dönmeli
 - test soruları: js=… olanlar kodu açar; dönen metin doğru şıkla birebir aynı olmalı, başka şıkla aynı olmamalı
 - boşluk soruları: boşluğa cevap konunca js ifadesi true dönmeli
 - klasik sorular: model kod açılınca js ifadesi true dönmeli
Hata varsa çıkış kodu 1."""
import json, os, random, sys
from collections import Counter
from playwright.sync_api import sync_playwright
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from content import T as TOPICS, TRAPS, TOPIC_RULES
import qs

bad = 0
def err(*a):
    global bad
    bad += 1
    print('✗', *a)

pw = sync_playwright().start()
browser = pw.chromium.launch()
page = browser.new_page()
page_errors = []
page.on('pageerror', lambda e: page_errors.append(str(e)))
def run(html, js=None):
    page_errors.clear()
    page.set_content('<!doctype html><meta charset="utf-8">' + html if '<html' not in html.lower() else html)
    r = page.evaluate(js) if js else True
    return r, list(page_errors)

checked = 0
# ---------------- özet kodları
for t in TOPICS:
    for b in t['blocks']:
        if b['t'] != 'code': continue
        chk = b.pop('check', None)
        r, pe = run(b['code'], chk)
        checked += 1
        if pe: err('özet sayfa hatası', t['id'], pe)
        if chk and r is not True: err('özet kontrol', t['id'], chk, r)

# ---------------- sorular
def verify(d):
    global checked
    e, js = [], d['chk'].get('js')
    if d['type'] == 'mc':
        if len(set(d['opts'])) != len(d['opts']): e.append('tekrarlı şık')
        if js:
            code = d.get('code') or d['chk'].get('vcode')
            if not code: e.append('js var ama kod yok')
            else:
                r, pe = run(code, js); checked += 1
                if pe: e.append('sayfa hatası %r' % pe)
                if r is True: pass
                elif r != d['opts'][0]: e.append('sonuç %r, doğru şık %r' % (r, d['opts'][0]))
                elif any(o == r for o in d['opts'][1:]): e.append('yanlış şık da doğru')
    elif d['type'] == 'fill':
        if d['code'].count('____') != len(d['ans']): e.append('boşluk sayısı')
        code = d['code']
        for a in d['ans']: code = code.replace('____', a, 1)
        if js:
            r, pe = run(code, js); checked += 1
            if r is not True: e.append('boşluk dolunca kontrol %r' % r)
            # yanlış bir cevapla kontrol geçmemeli (kontrolün işe yaradığını gösterir)
            r2, _ = run(d['code'].replace('____', 'yanlis'), js)
            if r2 is True: e.append('kontrol yanlış cevapla da geçiyor')
        else: e.append('boşlukta js yok')
    elif d['type'] == 'match':
        rs = [p[1] for p in d['pairs']]
        if len(set(rs)) != len(rs): e.append('eşleştirmede tekrarlı sağ taraf')
    elif d['type'] == 'open':
        if d.get('modelCode'):
            r, pe = run(d['modelCode'], js); checked += 1
            if pe: e.append('model kod hatası %r' % pe)
            if js and r is not True: e.append('model kod kontrolü %r' % r)
    return e

def shuffled(d, seed):
    d = dict(d)
    r = random.Random(seed)
    if d['type'] == 'mc':
        idx = list(range(len(d['opts'])))
        r.shuffle(idx)
        d['why'] = {str(idx.index(int(k))): v for k, v in d.get('why', {}).items()} if d.get('why') else None
        if not d['why']: d.pop('why')
        d['opts'] = [d['opts'][i] for i in idx]
        d['a'] = idx.index(0)
    elif d['type'] == 'match':
        ch = [p[1] for p in d['pairs']]
        while True:
            r.shuffle(ch)
            if sum(ch[i] == d['pairs'][i][1] for i in range(len(ch))) <= 1: break
        d['choices'] = ch
    return d

tids = [t['id'] for t in TOPICS]
TQ = {t: [] for t in tids}
for n, d in enumerate(qs.Q):
    for x in verify(d): err('soru', d['topic'], (d.get('q') or '')[:70], x)
    s = shuffled(d, n * 7919 + 1145)
    TQ[d['topic']].append({k: v for k, v in s.items() if k != 'chk'})
assert set(TQ) == set(tids)
browser.close(); pw.stop()

# ---------------- denemeler: 29 test + 1 klasik (30 soru), ortak soru yok
DIST = {'internet': 3, 'tasarim': 3, 'temel': 3, 'metin': 4, 'liste': 3, 'resim': 3, 'link': 4, 'css': 3, 'tablo': 3}
assert sum(DIST.values()) == 29 and set(DIST) == set(tids)
N = 4
rng = random.Random(1145)
pools = {t: [q for q in TQ[t] if q['type'] == 'mc'] for t in tids}
for t in tids: rng.shuffle(pools[t])
# klasik: kod yazdıranlar önce (sınavda en olası tip), konular farklı
opens = [q for t in ['tablo', 'liste', 'css', 'link', 'metin', 'resim'] for q in TQ[t] if q['type'] == 'open' and q.get('modelCode')]
picked_open, used_t = [], set()
for q in opens:
    if q['topic'] not in used_t: picked_open.append(q); used_t.add(q['topic'])
    if len(picked_open) == N: break
DENEMELER = []
for k in range(N):
    sel = []
    for t in tids:
        for _ in range(DIST[t]): sel.append(pools[t].pop())
    DENEMELER.append({'id': 'deneme%d' % (k + 1), 'title': 'Deneme sınavı %d' % (k + 1),
                      'desc': '30 soru: 29 test + 1 klasik (kod yazma). 9 konunun hepsinden; diğer denemelerle ortak soru yok.',
                      'featured': k == 0, 'questions': sel + [picked_open[k]]})
ALL_OPEN = [q for t in tids for q in TQ[t] if q['type'] == 'open']
EXAMS = DENEMELER + [
    {'id': 'klasik', 'title': 'Klasik soru provası', 'group': 'ek', 'mode': 'practice',
     'desc': '%d klasik soru: kodu yaz, model cevapla karşılaştır, kendini puanla. Tarayıcı görünümü de var.' % len(ALL_OPEN), 'questions': ALL_OPEN}]

total = sum(len(v) for v in TQ.values())
course = {
    'id': 'mbp1145', 'lang': 'html', 'storeKey': 'mbp1145-best', 'themeKey': 'sofl-theme',
    'points': {'mc': 3, 'fill': 3, 'match': 3, 'open': 13},
    'randomMix': ['mc'] * 29 + ['open'],
    'randomTitle': 'Rastgele deneme (30 soru)',
    'randomDesc': '29 test + 1 klasik; 9 konuya yayılır. Az gördüğün sorular önce gelir.',
    'reviewTitle': 'Web Tasarımı I',
    'reviewLead': 'Hocanın 8 sunumundan 9 konu: internet ve web kavramları, HTML\'e giriş ve tasarım ilkeleri, temel yapı, metin etiketleri, listeler, resim, bağlantılar, `<style>` ile CSS ve tablolar. Kod örneklerinin altında **tarayıcıdaki görünümü** var.',
    'testLead': 'Sınav 30 soru, biri klasik. Önce **deneme sınavlarını** çöz (4 deneme, ortak soru yok). Klasik soru için **Klasik soru provası**na bak. Toplam %d soru; görünüm soran sorular tarayıcıda açılarak doğrulandı.' % total,
    'formatTitle': 'Sınav formatı (varsayım)',
    'formatNote': 'Bilinen: 30 soru, 1 tanesi klasik. Puan dağılımı açıklanmadı; burada **varsayım** olarak test 29 × 3 = 87, klasik 13 puan sayıldı.',
    'hocaLink': {'href': '#test/deneme1', 'text': 'Deneme sınavı 1\'i çöz →'},
    'hocaTitle': 'Klasik soru',
    'hocaNote': 'Klasik soru büyük ihtimalle "aşağıdaki görünümü veren kodu yazınız" tipinde: tablo (colspan/rowspan), liste, `<style>` ile class.',
    'trapsLead': 'Testlerde en çok karıştırılan noktalar.',
}
EXAM_FORMAT = [
    {'range': '29 soru', 'what': 'Çoktan seçmeli test', 'big': '87', 'small': 'puan'},
    {'range': '1 soru', 'what': 'Klasik (kod yazma / açıklama)', 'big': '13', 'small': 'puan'},
    {'range': 'Toplam', 'what': '30 soru', 'big': '30', 'small': 'soru'},
]
J = lambda x: json.dumps(x, ensure_ascii=False, indent=1)
dest = os.path.join(HERE, '..')
open(os.path.join(dest, 'content.js'), 'w', encoding='utf8').write(
    '/* MBP1145 Web Tasarımı I · konu özetleri. tools/build.py ile üretildi. */\n'
    'window.COURSE = ' + J(course) + ';\nwindow.EXAM_FORMAT = ' + J(EXAM_FORMAT) + ';\nwindow.TRAPS = ' + J(TRAPS) +
    ';\nwindow.TOPICS = ' + J(TOPICS) + ';\nwindow.TOPIC_RULES = ' + J(TOPIC_RULES) + ';\n')
open(os.path.join(dest, 'questions.js'), 'w', encoding='utf8').write(
    '/* MBP1145 test soruları. tools/build.py ile üretildi. */\nwindow.EXAMS = ' + J(EXAMS) + ';\nwindow.TOPIC_QUESTIONS = ' + J(TQ) + ';\nwindow.EXTRA_CODE = [];\n')
print('hata', bad, '| tarayıcıda kontrol', checked, '| konu', {t: len(TQ[t]) for t in tids}, '| tür', dict(Counter(q['type'] for v in TQ.values() for q in v)),
      '| doğru şık', dict(sorted(Counter(q['a'] for v in TQ.values() for q in v if q['type'] == 'mc').items())))
sys.exit(1 if bad else 0)
