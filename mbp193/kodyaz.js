/* MBP193 · Kod yazma: sınavın 30 puanlık kısmı ("bunu for ile yazın, bunu while ile yazın").
   #kod · #kod/<görevId> · #kod/<sınavId> (k1..) · #kod/rastgele
   Kontrol: kodda istenen yapıların olup olmadığına bakan kontrol listesi (tarayıcıda C# çalıştırılmaz). Model çözümler mono ile çalıştırılmış çıktısıyla gösterilir. */
(function () {
  'use strict';
  var KEY = 'mbp193-kod';
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(k, v) { var d = load(); d[k] = v; try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) { /* yok say */ } }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function md(s) { return esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>'); }
  function fmt(n) { return (Math.round(n * 10) / 10).toString().replace('.', ','); }
  function hl(c) { return window.VizeHL ? window.VizeHL(c) : esc(c); }
  var TUR = { 'for': 'for döngüsü', 'while': 'while döngüsü', 'if': 'if – else', 'switch': 'switch', 'temel': 'Değişken ve işlem' };

  /* yorumları ve metinleri çıkar: "for" kelimesi bir string içinde geçerse sayılmasın */
  function strip(code) {
    return code.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/\/\/[^\n]*/g, ' ');
  }
  function noStrings(code) { return code.replace(/"(?:\\.|[^"\\\n])*"/g, '""'); }
  function balanced(code, o, c) { var n = 0; for (var i = 0; i < code.length; i++) { if (code[i] === o) n++; else if (code[i] === c) { n--; if (n < 0) return false; } } return n === 0; }
  function check(t, code) {
    var src = strip(code), bare = noStrings(src), res = { score: 0, items: [] };
    if (bare.replace(/\s/g, '').length < 15) { res.empty = true; }
    t.checks.forEach(function (k) {
      var re = new RegExp(k.re), hit = re.test(/ReadLine|"|Console/.test(k.re) ? src : bare);
      var ok = k.neg ? !hit : hit;
      if (res.empty) ok = false;
      res.items.push({ k: k.k, w: k.w, ok: ok });
      if (ok) res.score += k.w;
    });
    var gen = [
      ['Süslü parantezler dengeli { }', balanced(bare, '{', '}')],
      ['Parantezler dengeli ( )', balanced(bare, '(', ')')],
      ['Komutlar noktalı virgülle bitiyor', !/(Console\.\w+\([^;{}\n]*\)|\+\+|--)\s*\n/.test(bare + '\n')]
    ];
    res.gen = gen.map(function (g) { return { k: g[0], ok: !res.empty && g[1] }; });
    return res;
  }

  var CSS = '' +
    '.kz-info{background:var(--accent-soft);border-radius:var(--radius);padding:12px 16px;margin:0 0 18px;line-height:1.55}' +
    '.kz-filt{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 14px}.kz-filt button{font:inherit;font-size:.88rem;font-weight:600;cursor:pointer;border-radius:999px;padding:6px 13px;border:1px solid var(--border);background:var(--surface);color:var(--text)}' +
    '.kz-filt button.on{background:var(--accent);border-color:var(--accent);color:#fff}' +
    '.kz-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:12px;margin-bottom:22px}' +
    '.kz-card{display:block;text-decoration:none;color:var(--text);background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;box-shadow:var(--shadow);transition:transform .15s,border-color .15s}' +
    '.kz-card:hover{border-color:var(--accent);transform:translateY(-2px)}.kz-card h3{margin:0 0 4px;font-size:.98rem}.kz-card .m{font-size:.82rem;color:var(--muted)}.kz-card .m b{color:var(--ok)}' +
    '.kz-tag{display:inline-block;font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;padding:2px 8px;border-radius:6px;background:var(--accent-soft);color:var(--accent);margin-bottom:6px}' +
    '.kz-q{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:16px 18px;margin:0 0 18px;line-height:1.6;box-shadow:var(--shadow)}' +
    '.kz-q h2{margin:0 0 6px;font-size:1.08rem}.kz-q .soru{margin:4px 0 10px}.kz-q code{font:.86em var(--mono);background:var(--surface-2);border:1px solid var(--border);border-radius:4px;padding:0 4px}' +
    '.kz-q textarea{width:100%;min-height:15em;resize:vertical;font:15.5px/1.55 var(--mono);padding:10px 12px;border-radius:10px;border:1px solid var(--border);background:var(--code-bg);color:var(--code-text);tab-size:4}' +
    '.kz-bar{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin:10px 0 0}.kz-bar button{font:inherit;font-weight:600;cursor:pointer;border-radius:8px;padding:7px 14px;border:1px solid var(--border);background:var(--surface);color:var(--text)}' +
    '.kz-bar button.pri{background:var(--accent);border-color:var(--accent);color:#fff}' +
    '.kz-score{font-weight:800;padding:5px 12px;border-radius:8px}.kz-score.hi{background:var(--ok-soft);color:var(--ok)}.kz-score.mid{background:var(--warn-soft);color:var(--warn)}.kz-score.lo{background:var(--bad-soft);color:var(--bad)}' +
    '.kz-res{margin-top:10px;display:grid;gap:4px}.kz-res div{font-size:.9rem;padding:4px 10px;border-radius:6px}.kz-res .h{background:var(--ok-soft)}.kz-res .x{background:var(--bad-soft)}' +
    '.kz-res .h::before{content:"✓ ";color:var(--ok);font-weight:800}.kz-res .x::before{content:"✗ ";color:var(--bad);font-weight:800}.kz-res small{color:var(--muted)}.kz-res .g{opacity:.85}' +
    '.kz-model{margin-top:12px;border-top:1px dashed var(--border);padding-top:10px}.kz-model h4{margin:6px 0;font-size:.95rem;color:var(--accent)}' +
    '.kz-model pre{margin:6px 0 0;font:15px/1.5 var(--mono);background:var(--code-bg);color:var(--code-text);border-radius:8px;padding:10px 12px;overflow:auto}' +
    '.kz-model pre.out{background:var(--code-out, var(--surface-2));color:var(--code-text)}.kz-model small{color:var(--muted)}' +
    '.kz-tip{margin-top:8px;font-size:.9rem;background:var(--warn-soft);border-radius:8px;padding:6px 10px}';
  function css() { if (!document.getElementById('kz-css')) { var s = document.createElement('style'); s.id = 'kz-css'; s.textContent = CSS; document.head.appendChild(s); } }
  function byId(id) { return window.KOD.gorevler.filter(function (t) { return t.id === id; })[0]; }

  function render(app, arg) {
    css();
    var K = window.KOD, t = byId(arg);
    if (t) return page(app, t.baslik, [t]);
    var d = K.sinavlar.filter(function (x) { return x.id === arg; })[0];
    if (arg === 'rastgele') {
      var st = load(), fr = K.gorevler.filter(function (x) { return x.tur === 'for'; }), wh = K.gorevler.filter(function (x) { return x.tur === 'while'; });
      function pickOne(a) { a = a.slice().sort(function (x, y) { return ((st['n:' + x.id] || 0) - (st['n:' + y.id] || 0)) || (Math.random() - .5); }); return a[0]; }
      var a = pickOne(fr), b = pickOne(wh.filter(function (x) { return x.pair !== a.pair; }));
      return page(app, 'Rastgele kod sınavı (1 for + 1 while)', [a, b]);
    }
    if (d) return page(app, d.title, d.ids.map(byId));
    list(app);
  }

  function list(app) {
    var K = window.KOD, st = load(), filt = st.filt || 'hepsi';
    document.title = 'Kod yazma · MBP193';
    app.innerHTML = '<h1>Kod yazma</h1>' +
      '<div class="kz-info"><b>Sınavın 30 puanı:</b> hoca "şunu <b>for</b> ile yazın, bunu <b>while</b> ile yazın" gibi kod yazdıracak. Burada kodunu yaz, <b>Kontrol et</b>\'e bas: istenen yapıların (doğru döngü, değer okuma, sayaç, toplam…) kodunda olup olmadığını görürsün. ' +
      'Sonra <b>Model çözüm</b> ile karşılaştır; model çözümler gerçek C# ile çalıştırıldı, çıktısı altında.</div>' +
      '<h2 class="sec">Kod sınavları</h2><div class="kz-list">' + K.sinavlar.concat([{ id: 'rastgele', title: 'Rastgele kod sınavı', ids: null }]).map(function (s) {
        return '<a class="kz-card" href="#kod/' + s.id + '"><span class="kz-tag">2 soru · 30 puan</span><h3>' + esc(s.title) + '</h3><div class="m">' +
          (s.ids ? s.ids.map(function (i) { return esc(byId(i).baslik); }).join(' · ') : 'Bir for, bir while sorusu; az çalıştıkların önce') + '</div></a>';
      }).join('') + '</div>' +
      '<h2 class="sec">Bütün görevler</h2><div class="kz-filt">' + ['hepsi', 'for', 'while', 'if', 'switch', 'temel'].map(function (f) {
        return '<button type="button" data-f="' + f + '"' + (f === filt ? ' class="on"' : '') + '>' + (f === 'hepsi' ? 'Hepsi' : TUR[f]) + '</button>';
      }).join('') + '</div><div class="kz-list kz-all"></div>';
    function draw(f) {
      app.querySelector('.kz-all').innerHTML = K.gorevler.filter(function (t) { return f === 'hepsi' || t.tur === f; }).map(function (t) {
        var b = st['best:' + t.id];
        return '<a class="kz-card" href="#kod/' + t.id + '"><span class="kz-tag">' + esc(TUR[t.tur]) + '</span><h3>' + esc(t.baslik) + '</h3><div class="m">' + t.puan + ' puan' + (b != null ? ' · En iyi: <b>' + fmt(b) + '</b>' : '') + '</div></a>';
      }).join('');
      app.querySelectorAll('.kz-filt button').forEach(function (x) { x.classList.toggle('on', x.dataset.f === f); });
    }
    draw(filt);
    app.querySelectorAll('.kz-filt button').forEach(function (b) { b.addEventListener('click', function () { save('filt', b.dataset.f); draw(b.dataset.f); }); });
    window.scrollTo(0, 0);
  }

  function page(app, title, tasks) {
    var st = load();
    document.title = title + ' · MBP193';
    app.innerHTML = '<p><a href="#kod">← Kod yazma</a></p><h1>' + esc(title) + '</h1>' + tasks.map(function (t, i) {
      return '<section class="kz-q" data-i="' + i + '"><span class="kz-tag">' + esc(TUR[t.tur]) + ' · ' + t.puan + ' puan</span><h2>' + esc(t.baslik) + '</h2>' +
        '<div class="soru">' + md(t.soru) + '</div>' +
        '<textarea spellcheck="false" placeholder="// Main metodunun içine yazacağın kodu buraya yaz">' + esc(st['c:' + t.id] || '') + '</textarea>' +
        '<div class="kz-bar"><button type="button" class="pri kz-chk">Kontrol et</button><button type="button" class="kz-mod">Model çözüm</button><span class="kz-score" hidden></span></div>' +
        '<div class="kz-res"></div><div class="kz-model" hidden></div></section>';
    }).join('');
    app.querySelectorAll('.kz-q').forEach(function (box) {
      var t = tasks[+box.dataset.i], ta = box.querySelector('textarea'), res = box.querySelector('.kz-res'), sc = box.querySelector('.kz-score'), mod = box.querySelector('.kz-model');
      ta.addEventListener('input', function () { save('c:' + t.id, ta.value); });
      ta.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') { e.preventDefault(); var s = ta.selectionStart; ta.setRangeText('    ', s, ta.selectionEnd, 'end'); ta.dispatchEvent(new Event('input')); }
        else if (e.key === 'Enter') {
          var s2 = ta.selectionStart, line = ta.value.slice(0, s2).split('\n').pop(), ind = (line.match(/^\s*/) || [''])[0];
          if (/[{]\s*$/.test(line)) ind += '    ';
          e.preventDefault(); ta.setRangeText('\n' + ind, s2, ta.selectionEnd, 'end'); ta.dispatchEvent(new Event('input'));
        }
      });
      box.querySelector('.kz-chk').addEventListener('click', function () {
        var r = check(t, ta.value);
        sc.hidden = false; sc.textContent = fmt(r.score) + ' / ' + t.puan;
        sc.className = 'kz-score ' + (r.score >= t.puan * .75 ? 'hi' : r.score >= t.puan * .4 ? 'mid' : 'lo');
        res.innerHTML = (r.empty ? '<div class="x">Henüz kod yazılmamış.</div>' : '') +
          r.items.map(function (k) { return '<div class="' + (k.ok ? 'h' : 'x') + '">' + md(k.k) + ' <small>(' + fmt(k.w) + ')</small></div>'; }).join('') +
          r.gen.map(function (k) { return '<div class="g ' + (k.ok ? 'h' : 'x') + '">' + md(k.k) + ' <small>(puansız)</small></div>'; }).join('');
        var s = load(); save('n:' + t.id, (s['n:' + t.id] || 0) + 1); if (s['best:' + t.id] == null || r.score > s['best:' + t.id]) save('best:' + t.id, r.score);
      });
      box.querySelector('.kz-mod').addEventListener('click', function () {
        if (!mod.hidden) { mod.hidden = true; this.textContent = 'Model çözüm'; return; }
        mod.hidden = false; this.textContent = 'Model çözümü gizle';
        mod.innerHTML = '<h4>Model çözüm</h4><pre class="code">' + hl(t.model) + '</pre>' +
          (t.girdi.length ? '<small>Örnek girdiler: ' + t.girdi.map(esc).join(', ') + '</small>' : '') +
          '<h4>Ekran çıktısı</h4><pre class="out">' + esc(t.cikti) + '</pre>' +
          (t.ipucu ? '<div class="kz-tip">' + md(t.ipucu) + '</div>' : '') +
          (t.esId ? '<p><small>Aynı soru ' + (t.tur === 'for' ? 'while' : 'for') + ' ile: <a href="#kod/' + t.esId + '">' + esc(byId(t.esId).baslik) + '</a></small></p>' : '');
      });
    });
    window.scrollTo(0, 0);
  }

  window.KodYaz = { render: render, check: check };
})();
