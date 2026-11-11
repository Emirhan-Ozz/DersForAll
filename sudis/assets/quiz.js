/* Sudis — klasik soru motoru: alıştırma + rastgele test + anahtar kavram puanlaması.
   app.js'ten window.SudisQuiz.render(app, parts) ile çağrılır.  #test/a-<ders> · #test/rastgele */
(function () {
  'use strict';
  var CONF = window.TEST_CONF || { perSubject: 2, pointsPerQ: 10 };
  var SEEN = 'sudis-gorulen', BEST = 'sudis-test-en-iyi', CUR = 'sudis-aktif-test';

  /* ---------- metin normalleştirme ---------- */
  var MAP = { 'ç': 'c', 'ğ': 'g', 'ı': 'i', 'ö': 'o', 'ş': 's', 'ü': 'u', 'â': 'a', 'î': 'i', 'û': 'u', 'ä': 'a', 'ß': 'ss', 'é': 'e', 'è': 'e', 'ê': 'e', 'à': 'a', 'ç': 'c', 'č': 'c', 'ć': 'c', 'š': 's' };
  function tokens(s) {
    s = String(s || '').replace(/İ/g, 'i').replace(/I/g, 'ı').toLowerCase();
    s = s.replace(/[çğıöşüâîûäßéèêàčćš]/g, function (c) { return MAP[c]; });
    s = s.replace(/(\d)\.(?=\d{3}(\D|$))/g, '$1');           // 1.118.000 → 1118000
    return s.replace(/[^a-z0-9]+/g, ' ').trim().split(' ').filter(Boolean);
  }
  function lev(a, b) {
    var m = a.length, n = b.length, d = [], i, j;
    for (i = 0; i <= m; i++) d[i] = [i];
    for (j = 0; j <= n; j++) d[0][j] = j;
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
  }
  // bir kelime bir köke uyuyor mu? (ek almış hâli + 1 harflik yazım hatası)
  // multi: çok kelimeli ifadenin parçası mı (o zaman 'iki yıl' → 'iki yıllık' gibi kısa kökler de ek alabilir)
  function wmatch(t, p, multi) {
    if (/^\d+$/.test(p)) return t === p;
    if (p.length <= 3 && !multi) return t === p;
    if (t.indexOf(p) === 0) return true;
    if (p.length >= 6) {
      for (var L = p.length - 1; L <= p.length + 1; L++) if (lev(t.slice(0, L), p) <= 1) return true;
    }
    return false;
  }
  function phraseIn(toks, ph) {
    for (var i = 0; i + ph.length <= toks.length; i++) {
      var ok = true;
      for (var j = 0; j < ph.length; j++) if (!wmatch(toks[i + j], ph[j], ph.length > 1)) { ok = false; break; }
      if (ok) return true;
    }
    return false;
  }
  function grade(q, text) {
    var toks = tokens(text);
    var res = { score: 0, hits: [], miss: [], short: toks.length < 3 };
    if (res.short) { res.miss = q.keys.slice(); return res; }
    q.keys.forEach(function (k) {
      var hit = k.any.some(function (ph) { return phraseIn(toks, tokens(ph)); });
      (hit ? res.hits : res.miss).push(k);
      if (hit) res.score += k.w;
    });
    res.score = Math.min(CONF.pointsPerQ, Math.round(res.score * 2) / 2);
    return res;
  }
  window.SudisGrade = grade;

  /* ---------- yardımcılar ---------- */
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function ls(k, v) { try { if (v === undefined) return JSON.parse(localStorage.getItem(k)); localStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; } }
  function ss(k, v) { try { if (v === undefined) return JSON.parse(sessionStorage.getItem(k)); sessionStorage.setItem(k, JSON.stringify(v)); } catch (e) { return null; } }
  function subj(id) { return (window.SUBJECTS || []).filter(function (s) { return s.id === id; })[0]; }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function fmtScore(n) { return (Math.round(n * 10) / 10).toString().replace('.', ','); }

  /* ---------- rastgele seçim: en az görülenler öne ---------- */
  function newRandom() {
    var seen = ls(SEEN) || {}, ids = [];
    Object.keys(window.BANK || {}).forEach(function (sid) {
      var pool = shuffle(window.BANK[sid].slice()).sort(function (a, b) { return (seen[a.id] || 0) - (seen[b.id] || 0); });
      pool.slice(0, CONF.perSubject).forEach(function (q) { ids.push(sid + ':' + q.id); seen[q.id] = (seen[q.id] || 0) + 1; });
    });
    ls(SEEN, seen);
    ss(CUR, ids);
    return ids;
  }
  function lookup(key) {
    var p = key.split(':'), list = (window.BANK || {})[p[0]] || [];
    for (var i = 0; i < list.length; i++) if (list[i].id === p[1]) return { sid: p[0], q: list[i] };
    return null;
  }

  /* ---------- Yanlışlarım: 10 üzerinden 5'in altı yanlış sayılır ---------- */
  var WRONG = 'sudis-yanlis';
  function getWrong() { return ls(WRONG) || {}; }
  function logWrong(key, r, text) {
    if (!String(text || '').trim() || r.short) return;
    var w = getWrong();
    if (r.score >= 5) { if (!(key in w)) return; delete w[key]; } else w[key] = Date.now();
    ls(WRONG, w);
  }
  function findQ(key) {
    var p = key.split(':'), src = p[0] === 'p' ? window.PRACTICE : window.BANK, list = (src || {})[p[1]] || [];
    for (var i = 0; i < list.length; i++) if (list[i].id === p[2]) return { sid: p[1], q: list[i] };
    return null;
  }
  function wrongPage(app) {
    var keys = Object.keys(getWrong()), items = keys.map(function (k) { var x = findQ(k); if (x) x.key = k; return x; }).filter(Boolean);
    document.title = 'Yanlışlarım · Sudis';
    var head = '<div class="crumb"><a href="#">← Ana sayfa</a></div>' +
      '<header class="shead"><span class="num">!</span><div><h1>Yanlışlarım</h1>' +
      '<p class="auth">10 üzerinden 5\'in altında kalan cevapların. Burada 5 ve üstü aldığında listeden düşer.</p></div></header>';
    if (!items.length) { app.innerHTML = head + '<p class="fb-note">Şu an yanlış listen boş. Alıştırma ve testleri çözdükçe zorlandığın sorular burada birikir.</p>'; return; }
    app.innerHTML = head + '<div class="qwrap">' + items.map(function (it, i) {
      return qCard(it.q, i + 1, subj(it.sid).title).replace('<div class="qfb"></div>', '<div class="qact"><button class="btn" type="button">Kontrol et</button></div><div class="qfb"></div>');
    }).join('') + '</div>';
    app.querySelectorAll('.qcard').forEach(function (card, i) {
      card.querySelector('.btn').addEventListener('click', function () {
        var txt = card.querySelector('textarea').value, r = grade(items[i].q, txt);
        logWrong(items[i].key, r, txt);
        card.querySelector('.qfb').innerHTML = feedback(items[i].q, r) + (r.score >= 5 ? '<p class="fb-note"><b>Listeden çıktı.</b></p>' : '');
      });
    });
    window.scrollTo(0, 0);
  }

  /* ---------- ortak çizim ---------- */
  function feedback(q, r) {
    var cls = r.score >= 7 ? 'good' : r.score >= 4 ? 'mid' : 'bad';
    var h = '<div class="fb ' + cls + '"><div class="fb-score"><b>' + fmtScore(r.score) + '</b> / ' + CONF.pointsPerQ + ' puan</div>';
    if (r.short) h += '<p class="fb-note">Cevap çok kısa, puanlanamadı. Birkaç cümleyle açıklamayı dene.</p>';
    if (r.hits.length) h += '<p class="fb-h">Cevabında olanlar</p><ul class="ok">' + r.hits.map(function (k) { return '<li>' + esc(k.k) + ' <span>+' + fmtScore(k.w) + '</span></li>'; }).join('') + '</ul>';
    if (r.miss.length) h += '<p class="fb-h">Eksik kalanlar</p><ul class="no">' + r.miss.map(function (k) { return '<li>' + esc(k.k) + ' <span>' + fmtScore(k.w) + '</span></li>'; }).join('') + '</ul>';
    h += '<details open><summary>Örnek cevap</summary><p>' + esc(q.a) + '</p></details></div>';
    return h;
  }
  function qCard(q, n, tag) {
    return '<article class="topic qcard" data-q="' + q.id + '">' +
      '<div class="qhead"><span class="i">' + n + '</span>' + (tag ? '<span class="qtag">' + esc(tag) + '</span>' : '') + '<span class="qpts">' + CONF.pointsPerQ + ' puan</span></div>' +
      '<p class="qtext">' + esc(q.q) + '</p>' +
      '<textarea rows="5" placeholder="Cevabını kendi cümlelerinle yaz…"></textarea>' +
      '<div class="qfb"></div></article>';
  }

  /* ---------- alıştırma ---------- */
  function practice(app, sid) {
    var s = subj(sid), list = (window.PRACTICE || {})[sid];
    if (!s || !list) { location.hash = ''; return; }
    document.title = 'Alıştırma · ' + s.title;
    app.innerHTML = '<div class="crumb"><a href="#">← Ana sayfa</a> · <a href="#' + s.id + '">Özete dön</a></div>' +
      '<header class="shead"><span class="num">' + s.no + '</span><div><h1>Alıştırma: ' + esc(s.title) + '</h1>' +
      '<p class="auth">' + list.length + ' klasik soru · cevabını yaz, <b>Kontrol et</b>\'e bas, istediğin kadar düzeltip yeniden dene.</p></div></header>' +
      '<div class="qwrap">' + list.map(function (q, i) {
        return qCard(q, i + 1).replace('<div class="qfb"></div>', '<div class="qact"><button class="btn" type="button">Kontrol et</button></div><div class="qfb"></div>');
      }).join('') +
      '<div class="pn"><a href="#' + s.id + '">← Özete dön</a><a href="#test/rastgele">Rastgele teste geç →</a></div></div>';
    app.querySelectorAll('.qcard').forEach(function (card, i) {
      card.querySelector('.btn').addEventListener('click', function () {
        var txt = card.querySelector('textarea').value, r = grade(list[i], txt);
        logWrong('p:' + sid + ':' + list[i].id, r, txt);
        card.querySelector('.qfb').innerHTML = feedback(list[i], r);
      });
    });
    window.scrollTo(0, 0);
  }

  /* ---------- rastgele test ---------- */
  function randomTest(app, fresh) {
    var ids = (!fresh && ss(CUR)) || newRandom();
    var items = ids.map(lookup).filter(Boolean);
    if (!items.length) { ids = newRandom(); items = ids.map(lookup).filter(Boolean); }
    var total = items.length * CONF.pointsPerQ, best = ls(BEST);
    document.title = 'Rastgele test · Sudis';
    app.innerHTML = '<div class="crumb"><a href="#">← Ana sayfa</a></div>' +
      '<header class="shead"><span class="num">?</span><div><h1>Rastgele test</h1>' +
      '<p class="auth">' + items.length + ' klasik soru, her konudan ' + CONF.perSubject + ' tane · 100 üzerinden puanlanır' +
      (best != null ? ' · En iyi puanın: <b>' + fmtScore(best) + '</b>' : '') + '</p></div></header>' +
      '<div class="qwrap">' + items.map(function (it, i) { return qCard(it.q, i + 1, subj(it.sid).title); }).join('') +
      '<div class="tbar"><button class="btn" id="finish" type="button">Testi bitir ve puanla</button>' +
      '<button class="btn ghost" id="again" type="button">Yeni rastgele test</button></div>' +
      '<div id="result"></div></div>';

    app.querySelector('#again').addEventListener('click', function () { randomTest(app, true); window.scrollTo(0, 0); });
    app.querySelector('#finish').addEventListener('click', function () {
      var sum = 0;
      app.querySelectorAll('.qcard').forEach(function (card, i) {
        var txt = card.querySelector('textarea').value, r = grade(items[i].q, txt);
        logWrong('b:' + items[i].sid + ':' + items[i].q.id, r, txt);
        sum += r.score;
        card.querySelector('.qfb').innerHTML = feedback(items[i].q, r);
      });
      var pct = Math.round(sum / total * 1000) / 10;
      var prev = ls(BEST);
      if (prev == null || pct > prev) ls(BEST, pct);
      var res = app.querySelector('#result');
      res.innerHTML = '<div class="result"><p class="big">' + fmtScore(pct) + ' <span>/ 100</span></p>' +
        '<p>' + fmtScore(sum) + ' / ' + total + ' ham puan' + (prev != null && pct > prev ? ' · <b>Yeni rekor!</b>' : '') + '</p>' +
        '<p class="fb-note">Puan, cevabındaki anahtar kavramlara göre verilir. Eksik kalanları her sorunun altında görebilirsin.</p></div>';
      res.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
    window.scrollTo(0, 0);
  }

  /* ---------- giriş sayfası bölümü ---------- */
  function homeSection() {
    var P = window.PRACTICE || {}, best = ls(BEST), poolN = 0;
    Object.keys(window.BANK || {}).forEach(function (k) { poolN += window.BANK[k].length; });
    var cards = (window.SUBJECTS || []).filter(function (s) { return P[s.id]; }).map(function (s) {
      return '<a class="card tcard" href="#test/a-' + s.id + '"><span class="num">' + s.no + '</span>' +
        '<h2>Alıştırma</h2><p class="auth">' + esc(s.title) + '</p>' +
        '<p class="desc">' + P[s.id].length + ' klasik soru, anında puan ve örnek cevap.</p></a>';
    }).join('');
    cards += '<a class="card tcard feat" href="#test/rastgele"><span class="num">?</span><h2>Rastgele test</h2>' +
      '<p class="auth">3 konudan karışık</p><p class="desc">Her seferinde ' + poolN + ' soruluk havuzdan, daha az gördüğün sorular öne alınarak seçilir.</p>' +
      '<div class="meta"><span>' + (Object.keys(window.BANK || {}).length * CONF.perSubject) + ' soru · 100 puan</span><span>' + (best != null ? 'En iyi: ' + fmtScore(best) : 'Henüz çözülmedi') + '</span></div></a>';
    var nW = Object.keys(getWrong()).length;
    cards += '<a class="card tcard" href="#test/yanlislar"><span class="num">!</span><h2>Yanlışlarım</h2><p class="auth">Zorlandığın sorular</p>' +
      '<p class="desc">' + (nW ? nW + ' soru bekliyor. 5 ve üstü aldığında listeden düşer.' : 'Alıştırma ve testlerde 10 üzerinden 5\'in altında kalan cevapların burada birikir.') + '</p></a>';
    return '<section class="tests"><h2 class="sec-h">Testler</h2><div class="tcards">' + cards + '</div></section>';
  }

  window.SudisQuiz = {
    homeSection: homeSection,
    render: function (app, what) {
      if (what === 'rastgele') return randomTest(app, false);
      if (what === 'yanlislar') return wrongPage(app);
      if (what && what.indexOf('a-') === 0) return practice(app, what.slice(2));
      location.hash = '';
    }
  };
})();
