import json, importlib, sys, os, lib
from content import TOPICS, TRAPS, TOPIC_RULES
for m in ['q%02d' % i for i in range(1, 11)]: importlib.import_module(m)
# özet kodlarını doğrula
bad = 0
os.chdir('/tmp')
for t in TOPICS:
    for b in t['blocks']:
        if b['t'] == 'code' and 'out' in b:
            rc, out, err = lib.run(b['code'])
            if rc or lib.norm(out) != lib.norm(b['out']):
                bad += 1; print('ÖZET ✗', t['id'], repr(lib.norm(out)), '≠', repr(b['out']), err[-200:])
ids = [t['id'] for t in TOPICS]
assert set(ids) == {tid for tid, _, _ in lib.Q}
TQ = {tid: [] for tid in ids}
for n, (tid, part, d) in enumerate(lib.Q):
    d = lib.shuffled(d, n * 7919 + 13)
    out = {k: v for k, v in d.items() if k != 'chk'}
    if out['type'] == 'open' and not out.get('modelCode'): out.pop('modelCode', None)
    if out['type'] == 'code': out['blanks'] = [{'ans': b, 'cs': True} for b in out['blanks']]
    TQ[tid].append((part, out))
for tid in ids:
    TQ[tid] = [d for p, d in sorted(TQ[tid], key=lambda x: x[0])]
    assert len(TQ[tid]) == 25, (tid, len(TQ[tid]))
dest = sys.argv[1]
J = lambda x: json.dumps(x, ensure_ascii=False, indent=1)
course = {
  'id': 'starterpy', 'lang': 'py', 'storeKey': 'starterpy-best', 'themeKey': 'starterpy-theme',
  'topicParts': 2,
  'randomMix': ['mc', 'mc', 'mc', 'mc', 'mc', 'fill', 'fill', 'code', 'open', 'open'],
  'randomTitle': 'Rastgele test (10 soru)',
  'randomDesc': 'Her açılışta tüm konulardan farklı 10 soru: 5 test, 2 boşluk, 1 kod tamamlama, 2 kod yazma. Az gördüğün sorular önce gelir.',
  'points': {'mc': 10, 'fill': 10, 'code': 10, 'open': 10},
  'reviewLead': 'PDF\'in sırasıyla 10 konu: kısa özet, kod örnekleri (çıktıları Python ile kontrol edildi) ve **tuzaklar**. Kitapta Python 3\'te çalışmayan ya da yanlış verilen yerler tuzak kutularında düzeltildi.',
  'testLead': 'Soru havuzu: **250 soru** (her konudan 25). Her konunun 2 testi var. Rastgele test her açılışta havuzdan 10 soru çeker. Soru türleri: çoktan seçmeli, şıklı kod tamamlama, boşluk doldurma, kod tamamlama ve "kodu yazınız". Kod yazma sorularında cevabını yazıp model cevapla karşılaştır, kendini puanla. Tüm cevaplar gerçek Python 3 ile doğrulandı.',
  'codeDesc': 'Havuzdaki tüm kod tamamlama soruları, anında kontrol.',
  'trapsLead': 'Testlerdeki yanlış şıkların çoğu bu tuzaklardan geliyor.',
}
open(dest + '/content.js', 'w', encoding='utf8').write(
  '/* Starter–Intermediate Python · konu özetleri (kaynak: PYTHON-II PDF, bölüm 1–10). gen/build.py ile üretildi. */\n'
  'window.COURSE = ' + J(course) + ';\nwindow.EXAM_FORMAT = [];\nwindow.TRAPS = ' + J(TRAPS) + ';\nwindow.TOPICS = ' + J(TOPICS) + ';\nwindow.TOPIC_RULES = ' + J(TOPIC_RULES) + ';\n')
open(dest + '/questions.js', 'w', encoding='utf8').write(
  '/* 250 soruluk havuz, her konudan 25 (Test 1: 13, Test 2: 12). Cevaplar Python 3 ile doğrulandı. gen/build.py ile üretildi. */\n'
  'window.EXAMS = [];\nwindow.TOPIC_QUESTIONS = ' + J(TQ) + ';\nwindow.EXTRA_CODE = [];\n')
from collections import Counter
print('özet hatası', bad, '| tür dağılımı', Counter(d['type'] for v in TQ.values() for d in v), '| doğru şık konumu', Counter(d['a'] for v in TQ.values() for d in v if d['type']=='mc'))
