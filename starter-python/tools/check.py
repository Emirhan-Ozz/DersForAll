import sys, importlib, lib
mods = sys.argv[1:]
for m in mods: importlib.import_module(m)
bad = 0
from collections import Counter
for tid, part, d in lib.Q:
    e = lib.verify(d)
    if e:
        bad += 1; print('✗', tid, part, d['type'], (d.get('q') or d.get('title'))[:70]); [print('    ', x) for x in e]
c = Counter((t, p) for t, p, _ in lib.Q); ty = Counter((t, d['type']) for t, p, d in lib.Q)
for k in sorted(c): print(k, c[k])
print(dict(ty)); print('toplam', len(lib.Q), 'hatalı', bad)
