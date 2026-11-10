"""Soru tanım yardımcıları + doğrulayıcı.
Her soru bir dict; 'chk' alanı sadece doğrulama içindir, siteye yazılmaz."""
import random, subprocess, sys, textwrap

Q = []          # (topic, part, dict)
_cur = {'topic': None, 'part': 1}

def topic(tid):
    _cur['topic'] = tid; _cur['part'] = 1

def part(n):
    _cur['part'] = n

def _add(d):
    d['topic'] = _cur['topic']
    Q.append((_cur['topic'], _cur['part'], d))
    return d

def dd(s):
    return textwrap.dedent(s).strip('\n')

def mc(q, opts, a, exp, code=None, why=None, run=None, blank=None, stdin='', src=None, fixed=False):
    """run='out'  -> code çalıştırılır, çıktı opts[a] ile aynı olmalı
       blank=EXP  -> code içindeki ____ yerine opts[a] konup çıktı EXP olmalı; diğer şıklar EXP vermemeli
       run='err:TypeError' -> code bu hatayı vermeli"""
    d = {'type': 'mc', 'q': q, 'opts': list(opts), 'a': a, 'exp': exp}
    if code is not None: d['code'] = dd(code)
    if why: d['why'] = why
    if src: d['src'] = src
    d['chk'] = {'run': run, 'blank': blank, 'stdin': stdin, 'fixed': fixed}
    return _add(d)

def fill(q, code, ans, exp, expect=None, stdin='', whyFill=None, cs=True, err=None, nocheck=False):
    d = {'type': 'fill', 'q': q, 'code': dd(code), 'ans': list(ans), 'cs': cs, 'exp': exp}
    if whyFill: d['whyFill'] = whyFill
    d['chk'] = {'expect': expect, 'stdin': stdin, 'err': err, 'nocheck': nocheck}
    return _add(d)

def code(title, q, src, blanks, exps, expect, stdin='', note=None):
    d = {'type': 'code', 'title': title, 'q': q, 'code': dd(src), 'blanks': [list(b) for b in blanks], 'exps': exps}
    if note: d['note'] = note
    d['expect'] = expect.strip('\n') if expect else expect
    d['chk'] = {'expect': expect, 'stdin': stdin}
    return _add(d)

def open_(q, model, modelCode, tests=None, stdin='', expect=None):
    """tests: modelCode'un sonuna eklenen assert'ler; ya da stdin+expect ile çıktı kontrolü"""
    d = {'type': 'open', 'q': q, 'model': model, 'modelCode': dd(modelCode) if modelCode else None}
    d['chk'] = {'tests': dd(tests) if tests else None, 'stdin': stdin, 'expect': expect}
    return _add(d)

# ---------------- çalıştırma ----------------
def run(src, stdin=''):
    p = subprocess.run([sys.executable, '-I', '-c', src], input=stdin, capture_output=True, text=True, timeout=10)
    return p.returncode, p.stdout, p.stderr

def norm(s):
    return '\n'.join(l.rstrip() for l in s.strip('\n').split('\n')).strip()

def verify(d):
    t, c = d['type'], d['chk']
    errs = []
    if t == 'mc':
        if c['run'] == 'out':
            rc, out, err = run(d['code'], c['stdin'])
            if rc: errs.append('çalışmadı: ' + err.strip().splitlines()[-1])
            elif norm(out) != norm(d['opts'][d['a']]):
                errs.append('çıktı %r, doğru şık %r' % (norm(out), d['opts'][d['a']]))
            for k, o in enumerate(d['opts']):
                if k != d['a'] and norm(o) == norm(out): errs.append('yanlış şık da doğru: %r' % o)
        elif c['run'] and c['run'].startswith('err:'):
            rc, out, err = run(d['code'], c['stdin'])
            want = c['run'][4:]
            if want == 'none':
                if rc: errs.append('hata vermemeliydi: ' + err.strip().splitlines()[-1])
            elif not rc or want not in err: errs.append('%s beklendi, gelen: %s' % (want, (err.strip().splitlines() or ['(hata yok)'])[-1]))
        if c['blank'] is not None:
            for k, o in enumerate(d['opts']):
                src = d['code'].replace('____', o)
                rc, out, err = run(src, c['stdin'])
                ok = rc == 0 and norm(out) == norm(c['blank'])
                if k == d['a'] and not ok:
                    errs.append('doğru şık çalışmadı: %r -> %s' % (o, (err.strip().splitlines() or [norm(out)])[-1]))
                if k != d['a'] and ok:
                    errs.append('yanlış şık da çalışıyor: %r' % o)
    elif t == 'fill':
        if not c['nocheck']:
            for a in d['ans']:
                src = d['code'].replace('____', a)
                rc, out, err = run(src, c['stdin'])
                if c['err']:
                    if not rc or c['err'] not in err: errs.append('%r ile %s beklendi' % (a, c['err']))
                elif rc: errs.append('%r ile hata: %s' % (a, err.strip().splitlines()[-1]))
                elif c['expect'] is not None and norm(out) != norm(c['expect']):
                    errs.append('%r ile çıktı %r, beklenen %r' % (a, norm(out), norm(c['expect'])))
    elif t == 'code':
        src = d['code']
        for i, b in enumerate(d['blanks']):
            src = src.replace('{{%d}}' % (i + 1), b[0])
        rc, out, err = run(src, c['stdin'])
        if rc: errs.append('hata: ' + err.strip().splitlines()[-1])
        elif norm(out) != norm(c['expect']): errs.append('çıktı %r, beklenen %r' % (norm(out), norm(c['expect'])))
        # her kabul edilen alternatif de çalışmalı
        for i, b in enumerate(d['blanks']):
            for alt in b[1:]:
                s2 = d['code']
                for j, bb in enumerate(d['blanks']):
                    s2 = s2.replace('{{%d}}' % (j + 1), alt if j == i else bb[0])
                rc, out, err = run(s2, c['stdin'])
                if rc or norm(out) != norm(c['expect']): errs.append('alternatif %r çalışmadı' % alt)
    elif t == 'open':
        if d['modelCode']:
            src = d['modelCode'] + ('\n' + c['tests'] if c['tests'] else '')
            rc, out, err = run(src, c['stdin'])
            if rc: errs.append('model kod hata: ' + err.strip().splitlines()[-1])
            elif c['expect'] is not None and norm(out) != norm(c['expect']):
                errs.append('model çıktı %r, beklenen %r' % (norm(out), norm(c['expect'])))
    return errs

def shuffled(d, seed):
    """mc şıklarını tohumlu karıştır (fixed=True olanlar hariç)"""
    if d['type'] != 'mc' or d['chk'].get('fixed'): return d
    r = random.Random(seed)
    idx = list(range(len(d['opts']))); r.shuffle(idx)
    d = dict(d)
    d['opts'] = [d['opts'][i] for i in idx]
    d['a'] = idx.index(d['a'])
    if 'why' in d: d['why'] = {idx.index(int(k)): v for k, v in d['why'].items()}
    return d
