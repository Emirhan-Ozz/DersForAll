"""python3 build.py → ../content.js, ../questions.js, ../kod-data.js
Doğrulama: özet kodları, kod yazma model çözümleri ve test soruları mono ile (tr-TR) çalıştırılır; model çözümler kendi
kontrol listesinden tam puan almalı; for/while çiftlerinde bir sürümün modeli diğerinin döngü kontrolünü geçmemeli."""
import json, os, re, sys, random
from collections import Counter
HERE = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, HERE)
from cs import run
from content import T as TOPICS, TRAPS, TOPIC_RULES
import kod, qs
bad = 0
def err(*a):
    global bad; bad += 1; print('✗', *a)

for t in TOPICS:
    for b in t['blocks']:
        if b['t'] == 'code' and b.pop('run', False):
            st, out = run(b['code'], b.pop('inp', None))
            if st != 'OK': err('özet', t['id'], st, out, b['code'][:50])
            elif b.get('out') is not None and out != b['out']: err('özet çıktı', t['id'], repr(out), '≠', repr(b['out']))
            if b.get('out') is None: b.pop('out', None)

# ---- kod yazma
def strip(c): return re.sub(r'//[^\n]*', ' ', re.sub(r'/\*[\s\S]*?\*/', ' ', c))
def nostr(c): return re.sub(r'"(?:\\.|[^"\\\n])*"', '""', c)
def score(t, code):
    src = strip(code); bare = nostr(src); s = 0; miss = []
    for k in t['checks']:
        hit = bool(re.search(k['re'], src if re.search(r'ReadLine|"|Console', k['re']) else bare))
        ok = (not hit) if k['neg'] else hit
        if ok: s += k['w']
        else: miss.append(k['k'])
    return round(s, 2), miss
by = {t['id']: t for t in kod.K}
for t in kod.K:
    st, out = run(t['model'], t['girdi'])
    if st != 'OK': err('model', t['id'], st, out); continue
    t['cikti'] = out
    sc, miss = score(t, t['model'])
    if abs(sc - t['puan']) > .05: err('model tam puan almıyor', t['id'], sc, miss)
    if score(t, '')[0] > t['puan'] * .35: err('boş kod yüksek', t['id'], score(t, '')[0])
    es = [x for x in kod.K if x['pair'] == t['pair'] and x['id'] != t['id']]
    if es:
        t['esId'] = es[0]['id']
        o = es[0]
        if t['tur'] in ('for', 'while') and o['tur'] in ('for', 'while') and o['tur'] != t['tur']:
            sc2, miss2 = score(t, o['model'])
            if sc2 > t['puan'] * .6: err('karşı döngü çözümü fazla puan alıyor', t['id'], sc2)
for d in kod.DENEMELER: assert all(i in by for i in d['ids'])
for t in kod.K:
    for k in t['checks']:
        try: re.compile(k['re'])
        except re.error as ex: err('regex', t['id'], ex)

# ---- test soruları
tids = [t['id'] for t in TOPICS]
TQ = {t: [] for t in tids}
for n, (tid, d) in enumerate(qs.Q):
    for x in qs.verify(d, run): err('soru', tid, (d.get('q') or d.get('title'))[:60], x)
    d = qs.shuffled(d, n * 7919 + 29)
    out = {k: v for k, v in d.items() if k != 'chk'}
    if out['type'] == 'code': out['blanks'] = [{'ans': b, 'cs': True} for b in out['blanks']]
    TQ[tid].append(out)

def deneme(seed, used):
    r = random.Random(seed); sel = []
    pools = {t: [q for q in TQ[t] if q['type'] == 'mc' and id(q) not in used] for t in tids}
    order = ['operator', 'kosul', 'for', 'while', 'donusum', 'degisken', 'switch', 'girdi', 'algoritma', 'csharp']
    k = 0
    while len(sel) < 10:
        t = order[k % len(order)]; k += 1
        if pools[t]: q = pools[t].pop(r.randrange(len(pools[t]))); sel.append(q); used.add(id(q))
    fills = [q for t in order for q in TQ[t] if q['type'] == 'fill' and id(q) not in used]
    for q in r.sample(fills, 4): sel.append(q); used.add(id(q))
    return sel
used = set()
EXAMS = [{'id': 'deneme%d' % i, 'title': 'Deneme vizesi %d' % i, 'featured': i == 1,
          'desc': '10 test (50 p) + 4 boşluk (20 p). Kod yazma kısmı (30 p) için Kod yazma sekmesindeki Kod sınavı %d.' % i, 'questions': deneme(i, used)} for i in (1, 2, 3)]
total = sum(len(v) for v in TQ.values())
course = {
    'id': 'mbp193', 'lang': 'cs', 'storeKey': 'mbp193-best', 'themeKey': 'mbp193-theme',
    'points': {'mc': 5, 'fill': 5, 'code': 20},
    'randomMix': ['mc'] * 10 + ['fill'] * 4,
    'randomTitle': 'Rastgele vize (10 test + 4 boşluk)',
    'randomDesc': 'Bütün konulardan 10 test ve 4 boşluk doldurma (70 puan). Az gördüğün sorular önce gelir.',
    'reviewTitle': 'Programlama Temelleri (C#)',
    'reviewLead': 'Hocanın 12. ve 13. sunumlarındaki konular sırasıyla: algoritma, C#, girdi–çıktı, değişkenler, operatörler, tür dönüşümü, if–else, switch, **for** ve **while**. Bütün kod örnekleri Türkçe Windows ayarıyla (ondalık virgül) gerçek C# derleyicisinde çalıştırıldı; çıktılar birebir.',
    'testLead': 'Konu testleri (%d soru) ve 3 deneme vizesi. Çıktı soran her sorunun cevabı C# ile çalıştırılarak doğrulandı. Kod yazma kısmı için **Kod yazma** sekmesi.' % total,
    'formatTitle': 'Vize formatı',
    'formatNote': 'Bilinen: **test 50 puan**, **boşluk doldurma 20 puan**, kalan **30 puan kod yazma** ("şunu for ile, bunu while ile yazın"). Soru sayıları varsayım: 10 test × 5, 4 boşluk × 5, 2 kod sorusu × 15.',
    'hocaLink': {'href': '#kod', 'text': 'Kod yazma alıştırmalarına geç →'},
    'codeDesc': 'for, while, switch ve Convert kalıplarını boşluk doldurarak tekrar et.',
    'trapsLead': 'Testlerde ve kod yazarken en çok yapılan hatalar.',
}
EXAM_FORMAT = [{'range': '10 soru', 'what': 'Test', 'big': '50', 'small': 'puan'},
               {'range': '4 soru (varsayım)', 'what': 'Boşluk doldurma', 'big': '20', 'small': 'puan'},
               {'range': '2 soru (varsayım)', 'what': 'Kod yazma: for / while ile', 'big': '30', 'small': 'puan'}]
J = lambda x: json.dumps(x, ensure_ascii=False, indent=1)
dest = os.path.join(HERE, '..')
open(os.path.join(dest, 'content.js'), 'w', encoding='utf8').write('/* MBP193 Programlama Temelleri · konu özetleri. tools/build.py ile üretildi. */\nwindow.COURSE = ' + J(course) + ';\nwindow.EXAM_FORMAT = ' + J(EXAM_FORMAT) + ';\nwindow.TRAPS = ' + J(TRAPS) + ';\nwindow.TOPICS = ' + J(TOPICS) + ';\nwindow.TOPIC_RULES = ' + J(TOPIC_RULES) + ';\n')
open(os.path.join(dest, 'questions.js'), 'w', encoding='utf8').write('/* MBP193 test soruları. tools/build.py ile üretildi. */\nwindow.EXAMS = ' + J(EXAMS) + ';\nwindow.TOPIC_QUESTIONS = ' + J(TQ) + ';\nwindow.EXTRA_CODE = [];\n')
open(os.path.join(dest, 'kod-data.js'), 'w', encoding='utf8').write('/* MBP193 kod yazma görevleri. tools/build.py ile üretildi. */\nwindow.KOD = ' + J({'gorevler': kod.K, 'sinavlar': kod.DENEMELER}) + ';\n')
print('hata', bad, '| konu', {t: len(TQ[t]) for t in tids}, '| kod görevi', len(kod.K), '| tür', Counter(q['type'] for v in TQ.values() for q in v), '| doğru şık', Counter(q['a'] for v in TQ.values() for q in v if q['type'] == 'mc'))
sys.exit(1 if bad else 0)
