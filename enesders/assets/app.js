/* Vize çalışma motoru — tüm dersler ortak. Veri: data/<ders>.js → App.course({...}) */
(function () {
  'use strict';

  var COURSES = [];
  var BY = {};
  var TYPE_ORDER = ['mc', 'fill', 'tf', 'open', 'long'];
  var TYPE_NAME = { mc: 'Çoktan seçmeli', fill: 'Boşluk doldurma', tf: 'Doğru / Yanlış', open: 'Klasik', long: 'Uzun klasik' };
  var WEIGHT = { mc: 1, fill: 1, tf: 1, open: 3, long: 5 };
  var LETTERS = 'ABCDEFGH';

  /* ---------- soru yazma yardımcıları (veri dosyaları kullanır) ---------- */
  // mc: ilk şık doğru cevaptır; site şıkları seed'li karıştırır.
  var Q = {
    mc: function (topic, q, opts, exp, why) { return { type: 'mc', topic: topic, q: q, opts: opts, a: 0, exp: exp, why: why || {} }; },
    tf: function (topic, q, ans, exp) { return { type: 'tf', topic: topic, q: q, ans: !!ans, exp: exp }; },
    fill: function (topic, q, ans, exp) { return { type: 'fill', topic: topic, q: q, ans: [].concat(ans), exp: exp }; },
    op: function (topic, q, pts, model) { return { type: 'open', topic: topic, q: q, pts: pts, model: model }; },
    lg: function (topic, q, pts, model) { return { type: 'long', topic: topic, q: q, pts: pts, model: model }; }
  };

  /* ---------- yardımcılar ---------- */
  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rng(seed) { var x = seed || 1; return function () { x ^= x << 13; x >>>= 0; x ^= x >>> 17; x ^= x << 5; x >>>= 0; return (x % 100000) / 100000; }; }
  function shuffle(arr, r) { var a = arr.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function rich(s) {
    return esc(s).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>');
  }
  function norm(s) {
    return String(s || '').toLocaleLowerCase('tr')
      .replace(/[’'`´"“”]/g, '').replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
      .replace(/ö/g, 'o').replace(/ç/g, 'c').replace(/[âà]/g, 'a').replace(/î/g, 'i').replace(/û/g, 'u')
      .replace(/[–—−]/g, '-').replace(/\s*-\s*/g, '-').replace(/[%.,;:!?()\[\]]/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function store(key, val) {
    try {
      if (val === undefined) return JSON.parse(localStorage.getItem(key) || '{}');
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) { return {}; }
  }
  function el(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstChild; }
  function $(s, r) { return (r || document).querySelector(s); }

  /* ---------- ders kaydı ---------- */
  function course(c) {
    c.topicMap = {};
    c.topics.forEach(function (t) { c.topicMap[t.id] = t; });
    c.rules = c.rules || {};
    c.bank.forEach(function (q, i) { prep(c, q, c.id + '-' + i); });
    (c.extra || []).forEach(function (ex, k) {
      ex.questions.forEach(function (q, i) { prep(c, q, c.id + '-x' + k + '-' + i); });
    });
    c.exams = buildExams(c);
    COURSES.push(c);
    BY[c.id] = c;
  }

  function prep(c, q, id) {
    q.id = id;
    if (!c.topicMap[q.topic]) console.warn('Bilinmeyen konu:', q.topic, id);
    if (q.type === 'mc') {
      var r = rng(hash(id + 'opts'));
      var order = shuffle(q.opts.map(function (_, i) { return i; }), r);
      var why = {}, orig = q.opts;
      q.opts = order.map(function (o) { return orig[o]; });
      order.forEach(function (o, ni) { if (q.why[o]) why[ni] = q.why[o]; });
      q.a = order.indexOf(q.a);
      q.why = why;
    }
  }

  function byType(list, t) { return list.filter(function (q) { return q.type === t; }); }

  // konulara yayarak sıralar (seed'li)
  function spread(list, seed) {
    var groups = {}, keys = [];
    list.forEach(function (q) { if (!groups[q.topic]) { groups[q.topic] = []; keys.push(q.topic); } groups[q.topic].push(q); });
    var r = rng(seed);
    keys.forEach(function (k) { groups[k] = shuffle(groups[k], r); });
    var out = [], more = true;
    while (more) {
      more = false;
      keys.forEach(function (k) { if (groups[k].length) { out.push(groups[k].shift()); more = true; } });
    }
    return out;
  }
  function halves(list) {
    return [list.filter(function (_, i) { return i % 2 === 0; }), list.filter(function (_, i) { return i % 2 === 1; })];
  }

  function buildExams(c) {
    var ex = [];
    var seed = hash(c.id);
    var mcs = spread(byType(c.bank, 'mc'), seed + 1), mh = halves(mcs);
    var fills = spread(byType(c.bank, 'fill'), seed + 2), fh = halves(fills);
    var tfs = spread(byType(c.bank, 'tf'), seed + 3), th = halves(tfs);
    var ops = spread(byType(c.bank, 'open'), seed + 4), oh = halves(ops);
    var lgs = spread(byType(c.bank, 'long'), seed + 5);

    var n1 = Math.min(25, mh[0].length);
    ex.push({ id: 'test1', group: 'test', title: 'Test denemesi 1', desc: n1 + ' çoktan seçmeli soru, tüm konulara yayılmış.', mode: 'exam', questions: mh[0].slice(0, n1) });
    ex.push({ id: 'test2', group: 'test', title: 'Test denemesi 2', desc: Math.min(25, mh[1].length) + ' çoktan seçmeli soru, 1. denemeyle ortak soru yok.', mode: 'exam', questions: mh[1].slice(0, 25) });
    if (mcs.length >= 40) {
      var nb = Math.min(50, mcs.length);
      ex.push({ id: 'test50', group: 'test', title: 'Büyük test (' + nb + ' soru)', desc: 'Uzun test formatına alışmak için.', mode: 'exam', featured: true, questions: mcs.slice(0, nb) });
    }
    ex.push({ id: 'bdy1', group: 'bdy', title: 'Boşluk + D/Y denemesi 1', desc: '10 boşluk doldurma + 10 doğru/yanlış.', mode: 'exam', questions: fh[0].slice(0, 10).concat(th[0].slice(0, 10)) });
    ex.push({ id: 'bdy2', group: 'bdy', title: 'Boşluk + D/Y denemesi 2', desc: '10 boşluk doldurma + 10 doğru/yanlış, 1. denemeyle ortak soru yok.', mode: 'exam', questions: fh[1].slice(0, 10).concat(th[1].slice(0, 10)) });
    ex.push({ id: 'klasik1', group: 'klasik', title: 'Klasik deneme 1', desc: Math.min(5, oh[0].length) + ' soru-cevap. Cevabını yaz, sonra anahtar noktalarla kendini puanla.', mode: 'exam', questions: oh[0].slice(0, 5) });
    ex.push({ id: 'klasik2', group: 'klasik', title: 'Klasik deneme 2', desc: Math.min(5, oh[1].length) + ' soru-cevap, 1. denemeyle ortak soru yok.', mode: 'exam', questions: oh[1].slice(0, 5) });
    for (var k = 0; k * 4 < lgs.length; k++) {
      var part = lgs.slice(k * 4, k * 4 + 4);
      if (part.length < 4) break;
      ex.push({ id: 'uzun' + (k + 1), group: 'uzun', title: 'Uzun klasik vize ' + (k + 1), desc: '4 uzun soru; her soru bir konuyu tüm ayrıntısıyla ister. Her soru 25 puan.', mode: 'exam', featured: k === 0, questions: part });
    }
    (c.extra || []).forEach(function (e) { e.group = e.group || 'not'; ex.push(e); });
    c.topics.forEach(function (t) {
      var qs = c.bank.filter(function (q) { return q.topic === t.id; });
      qs.sort(function (a, b) { return TYPE_ORDER.indexOf(a.type) - TYPE_ORDER.indexOf(b.type); });
      if (qs.length) ex.push({ id: 'konu-' + t.id, group: 'konu', title: t.title, desc: qs.length + ' soru (tüm tipler)', mode: 'practice', questions: qs });
    });
    return ex;
  }

  /* ---------- rastgele seçim: en az görülen önce ---------- */
  function randomPick(c, type, count) {
    var seen = store('enesders-seen');
    var pool = byType(c.bank, type);
    var groups = {}, keys = [];
    pool.forEach(function (q) { if (!groups[q.topic]) { groups[q.topic] = []; keys.push(q.topic); } groups[q.topic].push(q); });
    keys.forEach(function (k) {
      groups[k] = groups[k].map(function (q) { return { q: q, s: (seen[q.id] || 0) + Math.random() * 0.9 }; })
        .sort(function (a, b) { return a.s - b.s; }).map(function (x) { return x.q; });
    });
    // en az görülen soruları olan konular önce
    keys = shuffle(keys, Math.random);
    var out = [];
    while (out.length < count) {
      var added = false;
      keys.sort(function (a, b) {
        var sa = groups[a].length ? (seen[groups[a][0].id] || 0) : 1e9, sb = groups[b].length ? (seen[groups[b][0].id] || 0) : 1e9;
        return sa - sb;
      });
      for (var i = 0; i < keys.length && out.length < count; i++) {
        if (groups[keys[i]].length) { out.push(groups[keys[i]].shift()); added = true; }
      }
      if (!added) break;
    }
    return shuffle(out, Math.random);
  }
  function markSeen(qs) {
    var seen = store('enesders-seen');
    qs.forEach(function (q) { seen[q.id] = (seen[q.id] || 0) + 1; });
    store('enesders-seen', seen);
  }
  function randomExam(c, kind, count) {
    var qs, title, desc;
    if (kind === 'test') { qs = randomPick(c, 'mc', count); title = 'Rastgele test (' + qs.length + ' soru)'; desc = 'Daha az gördüğün sorular öne alınır.'; }
    else if (kind === 'bdy') { qs = randomPick(c, 'fill', 10).concat(randomPick(c, 'tf', 10)); title = 'Rastgele boşluk + D/Y'; desc = '10 boşluk doldurma + 10 doğru/yanlış.'; }
    else if (kind === 'klasik') { qs = randomPick(c, 'open', 5); title = 'Rastgele klasik'; desc = '5 soru-cevap.'; }
    else { qs = randomPick(c, 'long', 4); title = 'Rastgele uzun klasik vize'; desc = '4 uzun soru, her biri 25 puan.'; }
    markSeen(qs);
    return { id: 'r-' + kind + '-' + count, group: kind, title: title, desc: desc, mode: 'exam', random: true, questions: qs };
  }

  /* ---------- yönlendirme ---------- */
  var app, CUR = null, VIEW = '';
  function route() {
    var h = decodeURIComponent(location.hash.replace(/^#\/?/, '')).split('/').filter(Boolean);
    var c = BY[h[0]];
    var tab = !c ? '' : (h[1] === 'test' ? 'test' : 'tekrar');
    renderNav(c, tab);
    if (!c) { VIEW = 'home'; window.scrollTo(0, 0); return home(); }
    if (h[1] === 'test' && h[2]) { VIEW = 'run'; window.scrollTo(0, 0); return runExam(c, h[2]); }
    if (h[1] === 'test') { VIEW = 'tests'; window.scrollTo(0, 0); return testList(c); }
    var key = c.id + '/tekrar';
    if (VIEW !== key) { VIEW = key; review(c); }
    goSec(h[2] ? 't-' + h[2] : null);
  }

  function renderNav(cur, tab) {
    CUR = cur;
    $('#courseNav').innerHTML = COURSES.map(function (c) {
      return '<a href="#/' + c.id + '" class="' + (cur && cur.id === c.id ? 'active' : '') + '">' + esc(c.short) + '</a>';
    }).join('');
    var on = $('#courseNav a.active'); if (on) { var n = $('#courseNav'); n.scrollLeft = on.offsetLeft - n.clientWidth / 2 + on.offsetWidth / 2; }
    var tb = $('#tabNav');
    tb.hidden = !cur;
    if (cur) tb.innerHTML = '<a href="#/' + cur.id + '/tekrar" class="' + (tab === 'tekrar' ? 'active' : '') + '">Genel Tekrar</a>' +
      '<a href="#/' + cur.id + '/test" class="' + (tab === 'test' ? 'active' : '') + '">Test</a>';
    $('#brandSub').textContent = cur ? '' : ' · 5 ders';
    document.title = cur ? cur.short + ' · Vize Çalışma' : 'Vize Çalışma';
    var t = document.querySelector('.topbar'); if (t) document.documentElement.style.setProperty('--toph', t.offsetHeight + 'px');
  }

  function counts(c) {
    var o = { mc: 0, fill: 0, tf: 0, open: 0, long: 0 };
    c.bank.forEach(function (q) { o[q.type]++; });
    (c.extra || []).forEach(function (e) { e.questions.forEach(function (q) { o[q.type]++; }); });
    return o;
  }

  function home() {
    app.innerHTML = '<section class="card" style="margin-bottom:18px"><h1>Vize çalışma sitesi</h1>' +
      '<p class="lead" style="margin:0">5 ders, tek site. Her derste <b>Genel Tekrar</b> (konu özetleri) ve <b>Test</b> sekmesi var. ' +
      'Sorular 4 tipte: çoktan seçmeli test (20–50 soru), boşluk doldurma + doğru/yanlış, klasik soru-cevap ve 4 sorudan oluşan uzun klasik vize.</p></section>' +
      '<div class="group-title">Dersler</div><div class="home-grid">' + COURSES.map(function (c, i) {
        var n = counts(c), tot = n.mc + n.fill + n.tf + n.open + n.long;
        return '<a class="test-card' + (i === 0 ? '' : '') + '" href="#/' + c.id + '"><div class="t">' + esc(c.title) + '</div><div class="d">' + esc(c.desc) + '</div>' +
          '<div class="meta"><span class="badge exam">' + c.topics.length + ' konu</span><span class="badge">' + tot + ' soru</span></div></a>';
      }).join('') + '</div>' +
      '<div class="group-title">Nasıl çalışılır?</div><section class="card"><ol class="traps-list">' +
      '<li>Önce <b>Genel Tekrar</b>daki "Önemli noktalar" listesini oku.</li>' +
      '<li>Konu testleriyle (anında kontrol) eksiklerini bul.</li>' +
      '<li>Denemeleri <b>sınav modunda</b> çöz; klasik sorularda cevabını yazıp anahtar noktalarla kendini puanla.</li>' +
      '<li>Rastgele testler daha az gördüğün soruları öne alır; arka arkaya açınca farklı sorular gelir.</li></ol></section>';
  }

  /* ---------- genel tekrar ---------- */
  function review(c) {
    var nq = function (t) { return c.bank.filter(function (q) { return q.topic === t.id; }).length; };
    var toc = '<aside class="toc"><div class="toc-title">İçindekiler</div>' +
      '<a href="#/' + c.id + '/tekrar/giris" data-sec="t-giris"><span class="num">·</span>Giriş</a>' +
      (c.traps && c.traps.length ? '<a href="#/' + c.id + '/tekrar/onemli" data-sec="t-onemli"><span class="num">!</span>Önemli noktalar</a>' : '') +
      '<div class="toc-sep"></div>' +
      c.topics.map(function (t, i) {
        return '<a href="#/' + c.id + '/tekrar/' + t.id + '" data-sec="t-' + t.id + '"><span class="num">' + (i + 1) + '</span>' + esc(t.title) + '</a>';
      }).join('') + '</aside>';
    var chips = '<nav class="chips">' +
      '<a href="#/' + c.id + '/tekrar/giris" data-sec="t-giris">Giriş</a>' +
      (c.traps && c.traps.length ? '<a href="#/' + c.id + '/tekrar/onemli" data-sec="t-onemli">Önemli</a>' : '') +
      c.topics.map(function (t, i) { return '<a href="#/' + c.id + '/tekrar/' + t.id + '" data-sec="t-' + t.id + '">' + (i + 1) + '. ' + esc(t.title) + '</a>'; }).join('') + '</nav>';
    var intro = '<section class="card" id="t-giris"><h1>' + esc(c.title) + '</h1><p class="lead" style="margin:0">' + rich(c.lead) + '</p></section>';
    var traps = c.traps && c.traps.length ? '<section class="card" id="t-onemli"><h2>Önemli noktalar</h2>' +
      '<p class="topic-src" style="margin-top:4px">Sınavda en çok karıştırılan bilgiler.</p><ol class="traps-list">' + c.traps.map(function (t) {
        return '<li>' + rich(t.t) + (t.topic ? ' <a class="go" href="#/' + c.id + '/tekrar/' + t.topic + '">konu →</a>' : '') + '</li>';
      }).join('') + '</ol></section>' : '';
    var topics = c.topics.map(function (t, i) {
      return '<section class="card topic" id="t-' + t.id + '"><div class="topic-head"><span class="n">' + (i + 1) + '</span><h2>' + esc(t.title) + '</h2><span class="spacer"></span>' +
        '<a class="btn-link" href="#/' + c.id + '/test/konu-' + t.id + '">Konu testi (' + nq(t) + ' soru) →</a></div>' +
        (t.src ? '<p class="topic-src">' + esc(t.src) + '</p>' : '') + t.blocks.map(block).join('') + '</section>';
    }).join('');
    app.innerHTML = '<div class="review">' + toc + '<div class="review-main">' + chips + intro + traps + topics + '</div></div>';
    app.querySelectorAll('[data-sec]').forEach(function (a) {
      a.onclick = function (ev) {
        ev.preventDefault();
        try { history.replaceState(null, '', a.getAttribute('href')); } catch (e) {}
        goSec(a.dataset.sec, true);
      };
    });
  }
  function goSec(id, smooth) {
    var s = id && document.getElementById(id);
    if (s) s.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
    else window.scrollTo(0, 0);
    spy();
  }
  function spy() {
    var secs = app.querySelectorAll('.review-main > section');
    if (!secs.length) return;
    var y = (parseInt(getComputedStyle(document.documentElement).scrollPaddingTop) || 80) + 10, cur = secs[0].id;
    secs.forEach(function (s) { if (s.getBoundingClientRect().top <= y) cur = s.id; });
    app.querySelectorAll('[data-sec]').forEach(function (a) { a.classList.toggle('active', a.dataset.sec === cur); });
    var ch = app.querySelector('.chips a.active'), nav = app.querySelector('.chips');
    if (ch && nav && nav.offsetParent) { var want = ch.offsetLeft - nav.clientWidth / 2 + ch.offsetWidth / 2; if (Math.abs(nav.scrollLeft - want) > 40) nav.scrollLeft = want; }
  }
  function block(b) {
    switch (b.t) {
      case 'p': return '<p>' + rich(b.text) + '</p>';
      case 'h': return '<h3>' + rich(b.text) + '</h3>';
      case 'ul': return '<ul>' + b.items.map(function (x) { return '<li>' + rich(x) + '</li>'; }).join('') + '</ul>';
      case 'ol': return '<ol>' + b.items.map(function (x) { return '<li>' + rich(x) + '</li>'; }).join('') + '</ol>';
      case 'table': return '<div class="tbl-wrap"><table><thead><tr>' + b.head.map(function (x) { return '<th>' + rich(x) + '</th>'; }).join('') +
        '</tr></thead><tbody>' + b.rows.map(function (r) { return '<tr>' + r.map(function (x) { return '<td>' + rich(x) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
      case 'trap': return '<div class="callout trap"><span class="label">Dikkat</span>' + rich(b.text) + '</div>';
      case 'tip': return '<div class="callout tip"><span class="label">Sınavda</span>' + rich(b.text) + '</div>';
      case 'note': return '<div class="callout note"><span class="label">Not</span>' + rich(b.text) + '</div>';
    }
    return '';
  }

  /* ---------- test listesi ---------- */
  function bestOf(c, id) { var b = store('enesders-best')[c.id + '/' + id]; return b == null ? '' : '<span class="badge best">En iyi: ' + b + '/100</span>'; }
  function examCard(c, e) {
    return '<a class="test-card' + (e.featured ? ' featured' : '') + '" href="#/' + c.id + '/test/' + e.id + '"><div class="t">' + esc(e.title) + '</div>' +
      '<div class="d">' + rich(e.desc || '') + '</div><div class="meta">' + (e.mode === 'exam' ? '<span class="badge exam">Sınav modu</span>' : '<span class="badge">Pratik</span>') +
      '<span>' + e.questions.length + ' soru</span>' + bestOf(c, e.id) + '</div></a>';
  }
  function randCard(c, kind, title, desc, sizes) {
    var sel = sizes ? '<select data-kind="' + kind + '">' + sizes.map(function (s) { return '<option value="' + s + '"' + (s === 30 ? ' selected' : '') + '>' + s + ' soru</option>'; }).join('') + '</select>' : '';
    return '<div class="test-card"><div class="t">' + esc(title) + '</div><div class="d">' + esc(desc) + '</div>' +
      '<div class="randbox">' + sel + '<button class="btn small" data-rand="' + kind + '">Başlat</button></div></div>';
  }
  /* ---------- Yanlışlarım ---------- */
  function wKey(c) { return 'enes-yanlis-' + c.id; }
  function getWrong(c) { try { return JSON.parse(localStorage.getItem(wKey(c))) || {}; } catch (e) { return {}; } }
  function logWrong(c, q, ok) {
    var w = getWrong(c);
    if (ok) { if (!(q.id in w)) return; delete w[q.id]; } else w[q.id] = Date.now();
    try { localStorage.setItem(wKey(c), JSON.stringify(w)); } catch (e) { /* yok say */ }
  }
  function allQs(c) {
    var out = c.bank.slice();
    (c.extra || []).forEach(function (e) { out = out.concat(e.questions); });
    return out;
  }
  function wrongExam(c) {
    var w = getWrong(c);
    var qs = allQs(c).filter(function (q) { return q.id in w; });
    qs.sort(function (a, b) { return TYPE_ORDER.indexOf(a.type) - TYPE_ORDER.indexOf(b.type); });
    return { id: 'yanlislar', group: 'yanlis', title: 'Yanlışlarım', mode: 'practice',
      desc: 'Yanlış yaptığın sorular. Doğru cevapladığında listeden düşer.', questions: qs };
  }

  function testList(c) {
    var g = function (name) { return c.exams.filter(function (e) { return e.group === name; }); };
    var n = counts(c);
    var sizes = [20, 25, 30, 40, 50].filter(function (s) { return s <= n.mc; });
    if (!sizes.length || sizes[sizes.length - 1] < n.mc && n.mc < 50) sizes.push(n.mc);
    var grp = function (title, note, inner) { return '<div class="group-title">' + title + (note ? '<small>' + note + '</small>' : '') + '</div><div class="test-grid">' + inner + '</div>'; };
    var html = '<h1>Test</h1><p class="lead">Vize formatı hocaya göre değişebiliyor: test 20–50 soru, boşluk doldurma + doğru/yanlış, klasik soru-cevap ya da 4 sorudan oluşan uzun klasik. ' +
      'Denemeler <b>sınav modunda</b> açılır (sonda puan); üstten <b>pratik</b> moduna geçip her soruyu anında kontrol edebilirsin.</p>';
    var wx = wrongExam(c);
    html += grp('Yanlışlarım', '', wx.questions.length ? examCard(c, wx)
      : '<div class="test-card"><div class="t">Yanlışlarım</div><div class="d">Henüz yanlış yaptığın soru yok. Testleri çözdükçe yanlışların burada birikir.</div></div>');
    var not = g('not');
    if (not.length) html += grp('Notlardaki sorular', '', not.map(function (e) { return examCard(c, e); }).join(''));
    html += grp('Test', 'çoktan seçmeli · ' + n.mc + ' soruluk banka', g('test').map(function (e) { return examCard(c, e); }).join('') +
      randCard(c, 'test', 'Rastgele test', 'Soru sayısını seç (20–50). Her açılışta farklı sorular.', sizes));
    html += grp('Boşluk doldurma + Doğru/Yanlış', n.fill + ' boşluk · ' + n.tf + ' D/Y', g('bdy').map(function (e) { return examCard(c, e); }).join('') +
      randCard(c, 'bdy', 'Rastgele boşluk + D/Y', '10 boşluk + 10 D/Y, her açılışta farklı.'));
    html += grp('Klasik (soru-cevap)', n.open + ' soru', g('klasik').map(function (e) { return examCard(c, e); }).join('') +
      randCard(c, 'klasik', 'Rastgele klasik', '5 soru-cevap.'));
    html += grp('Uzun klasik vize', '4 soru · her soru bir konu, tüm ayrıntılar', g('uzun').map(function (e) { return examCard(c, e); }).join('') +
      randCard(c, 'uzun', 'Rastgele uzun klasik', '4 uzun soru, ' + n.long + ' soruluk bankadan.'));
    html += grp('Konu testleri', 'konu konu tüm soru tipleri, anında kontrol', g('konu').map(function (e) { return examCard(c, e); }).join(''));
    app.innerHTML = html;
    app.querySelectorAll('[data-rand]').forEach(function (b) {
      b.onclick = function () {
        var kind = b.dataset.rand, s = app.querySelector('select[data-kind="' + kind + '"]');
        location.hash = '#/' + c.id + '/test/r-' + kind + '-' + (s ? s.value : 0);
      };
    });
  }

  /* ---------- sınav / pratik ---------- */
  var S = null;

  function runExam(c, id) {
    var exam;
    var m = /^r-(test|bdy|klasik|uzun)-(\d+)$/.exec(id);
    if (m) exam = randomExam(c, m[1], +m[2] || 30);
    else if (id === 'yanlislar') exam = wrongExam(c);
    else exam = c.exams.filter(function (e) { return e.id === id; })[0];
    if (!exam || !exam.questions.length) return testList(c);
    S = { c: c, exam: exam, mode: exam.mode || 'exam', ans: {}, done: {}, ticks: {}, finished: false };
    drawRunner();
  }

  function drawRunner() {
    var c = S.c, e = S.exam;
    var html = '<div class="test-head"><a class="back" href="#/' + c.id + '/test">← Testler</a><h1>' + esc(e.title) + '</h1><div class="info">' +
      '<div class="seg"><button data-mode="practice" class="' + (S.mode === 'practice' ? 'on' : '') + '">Pratik</button>' +
      '<button data-mode="exam" class="' + (S.mode === 'exam' ? 'on' : '') + '">Sınav</button></div>' +
      '<span>' + e.questions.length + ' soru · ' + (S.mode === 'exam' ? 'cevaplar sonda puanlanır' : 'her soru anında kontrol edilir') + '</span></div>' +
      (e.desc ? '<p class="lead" style="margin:8px 0 0">' + rich(e.desc) + '</p>' : '') + '</div>' +
      '<div id="endtop"></div><div id="qs"></div><div id="endzone"></div>' +
      '<div class="progress" id="prog"><span id="ptxt"></span><span id="pscore"></span><span class="grow"></span><span id="pact"></span></div>';
    app.innerHTML = html;
    app.querySelectorAll('[data-mode]').forEach(function (b) {
      b.onclick = function () {
        if (b.dataset.mode === S.mode) return;
        S.mode = b.dataset.mode; S.ans = {}; S.done = {}; S.ticks = {}; S.finished = false; drawRunner();
      };
    });
    var box = $('#qs'), lastType = null, multi = new Set(e.questions.map(function (q) { return q.type; })).size > 1;
    e.questions.forEach(function (q, i) {
      if (multi && q.type !== lastType && e.group !== 'konu') {
        var cnt = e.questions.filter(function (x) { return x.type === q.type; }).length;
        box.appendChild(el('<div class="section-title"><h2>' + TYPE_NAME[q.type] + '</h2><span class="sp">' + cnt + ' soru</span></div>'));
      }
      lastType = q.type;
      box.appendChild(qEl(q, i));
    });
    drawEnd();
    progress();
  }

  function isDone(q) { return S.finished || !!S.done[q.id]; }

  function correctness(q) {
    // 0..1 arası; açık uçlularda işaretlenen anahtar noktalara göre
    var a = S.ans[q.id];
    if (q.type === 'mc') return a === q.a ? 1 : 0;
    if (q.type === 'tf') return a === q.ans ? 1 : 0;
    if (q.type === 'fill') { var n = norm(a); return n && q.ans.some(function (x) { return norm(x) === n; }) ? 1 : 0; }
    var t = S.ticks[q.id] || [];
    var k = t.filter(Boolean).length;
    return q.pts.length ? k / q.pts.length : 0;
  }

  function qEl(q, i) {
    var done = isDone(q), a = S.ans[q.id], html = '';
    var cls = '';
    if (done) {
      var r = correctness(q);
      cls = (q.type === 'open' || q.type === 'long') ? (r >= 0.99 ? 'is-ok' : r > 0 ? 'is-part' : 'is-bad') : (r === 1 ? 'is-ok' : 'is-bad');
    }
    var topic = S.c.topicMap[q.topic];
    var resTxt = '';
    if (done) { var rr = correctness(q); resTxt = (q.type === 'open' || q.type === 'long') ? '<span class="res ' + (rr >= .99 ? 'ok' : rr > 0 ? '' : 'bad') + '">%' + Math.round(rr * 100) + '</span>' : '<span class="res ' + (rr === 1 ? 'ok">Doğru' : 'bad">Yanlış') + '</span>'; }
    html += '<div class="q ' + cls + '" id="q-' + q.id + '"><div class="q-top"><span class="qn">' + (i + 1) + '.</span>' +
      '<span class="badge exam">' + TYPE_NAME[q.type] + '</span>' + (topic && S.exam.group !== 'konu' ? '<span class="badge">' + esc(topic.title) + '</span>' : '') +
      (q.src ? '<span class="badge">' + esc(q.src) + '</span>' : '') + resTxt + '</div>';
    html += '<div class="q-text">' + rich(q.type === 'fill' ? q.q.replace(/_{3,}/g, '______') : q.q) + '</div>';

    if (q.type === 'mc') {
      html += '<ul class="opts">' + q.opts.map(function (o, k) {
        var c2 = '';
        if (done) { if (k === q.a) c2 = 'right'; else if (k === a) c2 = 'wrong'; }
        else if (k === a) c2 = 'sel';
        return '<li><button type="button" class="opt ' + c2 + '" data-k="' + k + '"' + (done ? ' disabled' : '') + '><span class="L">' + LETTERS[k] + '</span><span>' + rich(o) + '</span></button></li>';
      }).join('') + '</ul>';
    } else if (q.type === 'tf') {
      html += '<ul class="opts tf-opts">' + [true, false].map(function (v) {
        var c2 = '';
        if (done) { if (v === q.ans) c2 = 'right'; else if (v === a) c2 = 'wrong'; }
        else if (v === a) c2 = 'sel';
        return '<li><button type="button" class="opt ' + c2 + '" data-v="' + v + '"' + (done ? ' disabled' : '') + '><span class="L">' + (v ? 'D' : 'Y') + '</span><span>' + (v ? 'Doğru' : 'Yanlış') + '</span></button></li>';
      }).join('') + '</ul>';
    } else if (q.type === 'fill') {
      var ic = done ? (correctness(q) ? 'right' : 'wrong') : '';
      html += '<div class="fill-row"><input type="text" class="fill-in ' + ic + '" value="' + esc(a || '') + '" placeholder="Boşluğa gelecek ifade" autocomplete="off" autocapitalize="off"' + (done ? ' disabled' : '') + '>' +
        (S.mode === 'practice' && !done ? '<button type="button" class="btn" data-check>Kontrol et</button><span class="hint">veya Enter</span>' : '') + '</div>';
    } else {
      html += '<textarea class="open-in' + (q.type === 'long' ? ' long' : '') + '" rows="' + (q.type === 'long' ? 8 : 4) + '" placeholder="Cevabını buraya yaz…"' + (done ? ' readonly' : '') + '>' + esc(a || '') + '</textarea>' +
        (S.mode === 'practice' && !done ? '<div class="q-actions"><button type="button" class="btn ghost" data-show>Cevabı göster</button></div>' : '');
    }
    if (done) html += feedback(q);
    html += '</div>';
    var node = el(html);
    bind(node, q, i);
    return node;
  }

  function feedback(q) {
    var a = S.ans[q.id], rule = S.c.rules[q.topic];
    var ruleHtml = rule ? '<div class="rule"><b>Kural · ' + esc((S.c.topicMap[q.topic] || {}).title || '') + ':</b> ' + rich(rule) + '</div>' : '';
    if (q.type === 'open' || q.type === 'long') {
      var t = S.ticks[q.id] || [];
      var pts = Math.round(correctness(q) * (q.type === 'long' ? 25 : 100));
      return '<div class="exp"><div class="ans ok">Örnek cevap</div><div class="model">' + rich(q.model) + '</div>' +
        '<div class="rule"><b>Cevabında bu noktalar var mı?</b> İşaretle, puanın hesaplansın.</div><ul class="checks">' +
        q.pts.map(function (p, k) { return '<li><label><input type="checkbox" data-tick="' + k + '"' + (t[k] ? ' checked' : '') + '><span>' + rich(p) + '</span></label></li>'; }).join('') +
        '</ul><div class="selfscore">Puanın: ' + pts + (q.type === 'long' ? ' / 25' : ' / 100') + '</div></div>';
    }
    var ok = correctness(q) === 1;
    if (a !== undefined && a !== null && a !== '') logWrong(S.c, q, ok);
    var h = ok ? 'Doğru.' : 'Yanlış';
    var right = '';
    if (!ok) {
      if (q.type === 'mc') right = ' — doğru cevap: <b>' + LETTERS[q.a] + ') ' + rich(q.opts[q.a]) + '</b>';
      if (q.type === 'tf') right = ' — ifade <b>' + (q.ans ? 'doğru' : 'yanlış') + '</b>';
      if (q.type === 'fill') right = ' — doğru cevap: <b>' + rich(q.ans[0]) + '</b>' + (a ? '' : ' (boş bıraktın)');
    } else if (q.type === 'fill' && norm(a) !== norm(q.ans[0])) right = ' — tam ifade: <b>' + rich(q.ans[0]) + '</b>';
    var why = '';
    if (!ok && q.type === 'mc' && a != null && q.why[a]) why = '<div class="why"><b>Senin cevabın (' + LETTERS[a] + '):</b> ' + rich(q.why[a]) + '</div>';
    return '<div class="exp"><div class="ans ' + (ok ? 'ok' : 'bad') + '">' + h + right + '</div>' + rich(q.exp || '') + why + (ok ? '' : ruleHtml) + '</div>';
  }

  function refresh(q, i) {
    var old = $('#q-' + q.id);
    if (old) old.parentNode.replaceChild(qEl(q, i), old);
    progress();
    if (S.finished) drawEnd();
  }

  function bind(node, q, i) {
    var practice = S.mode === 'practice';
    node.querySelectorAll('[data-k]').forEach(function (b) {
      b.onclick = function () { S.ans[q.id] = +b.dataset.k; if (practice) S.done[q.id] = true; refresh(q, i); };
    });
    node.querySelectorAll('[data-v]').forEach(function (b) {
      b.onclick = function () { S.ans[q.id] = b.dataset.v === 'true'; if (practice) S.done[q.id] = true; refresh(q, i); };
    });
    var inp = node.querySelector('input[type=text]');
    if (inp) {
      inp.oninput = function () { S.ans[q.id] = inp.value; progress(); };
      inp.onkeydown = function (ev) { if (ev.key === 'Enter' && practice && inp.value.trim()) { S.done[q.id] = true; refresh(q, i); } };
    }
    var chk = node.querySelector('[data-check]');
    if (chk) chk.onclick = function () { S.done[q.id] = true; refresh(q, i); };
    var ta = node.querySelector('textarea');
    if (ta) ta.oninput = function () { S.ans[q.id] = ta.value; progress(); };
    var show = node.querySelector('[data-show]');
    if (show) show.onclick = function () { S.done[q.id] = true; refresh(q, i); };
    node.querySelectorAll('[data-tick]').forEach(function (cb) {
      cb.onchange = function () {
        var t = S.ticks[q.id] = S.ticks[q.id] || [];
        t[+cb.dataset.tick] = cb.checked;
        refresh(q, i);
      };
    });
  }

  function score() {
    var tot = 0, got = 0;
    S.exam.questions.forEach(function (q) { tot += WEIGHT[q.type]; got += WEIGHT[q.type] * correctness(q); });
    return tot ? Math.round(got / tot * 100) : 0;
  }

  function progress() {
    var qs = S.exam.questions, n = qs.length, k = 0, ok = 0, checked = 0;
    qs.forEach(function (q) {
      var a = S.ans[q.id];
      var answered = S.mode === 'practice' ? !!S.done[q.id] : (a !== undefined && a !== '');
      if (answered) k++;
      if (isDone(q) && q.type !== 'open' && q.type !== 'long') { checked++; if (correctness(q) === 1) ok++; }
    });
    var t = $('#ptxt'); if (t) t.innerHTML = '<span class="done">' + k + ' / ' + n + '</span> ' + (S.mode === 'practice' ? 'kontrol edildi' : 'cevaplandı');
    var sc = $('#pscore');
    if (sc) sc.innerHTML = S.finished ? '· <span class="done">Puan: ' + score() + '</span>' : (checked ? '· <span class="ok">Doğru ' + ok + '</span> · <span class="bad">Yanlış ' + (checked - ok) + '</span>' : '');
  }

  function drawEnd() {
    var z = $('#endzone'); if (!z) return;
    var c = S.c, e = S.exam;
    var again = e.random ? '<button type="button" class="btn ghost" id="again">Yeni sorular</button>' : '<button type="button" class="btn ghost" id="again">Baştan</button>';
    var pact = $('#pact');
    if (S.mode === 'exam' && !S.finished) {
      z.innerHTML = '';
      pact.innerHTML = '<button type="button" class="btn" id="finish">Sınavı bitir</button>';
      $('#finish').onclick = function () {
        var empty = e.questions.filter(function (q) { var a = S.ans[q.id]; return a === undefined || a === ''; }).length;
        if (empty && !window.confirm(empty + ' soru boş. Yine de bitirilsin mi?')) return;
        S.finished = true;
        saveBest();
        drawRunner();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
      return;
    }
    var hasOpen = e.questions.some(function (q) { return q.type === 'open' || q.type === 'long'; });
    var res = '';
    if (S.finished) {
      var wrong = e.questions.filter(function (q) { return q.type !== 'open' && q.type !== 'long' && correctness(q) < 1; }).length;
      res = '<div class="result" id="result"><div class="score">' + score() + ' <small>/ 100</small></div><div class="row2">' +
        '<span>' + e.questions.length + ' soru</span>' + (wrong || !hasOpen ? '<span>' + wrong + ' yanlış/boş (otomatik puanlanan)</span>' : '') + '</div>' +
        (hasOpen ? '<p style="margin:8px 0 0">Klasik sorularda örnek cevaba bakıp yazdığın anahtar noktaları işaretle; puan kendiliğinden güncellenir.</p>' : '') + '<div class="actions"><a class="btn ghost" href="#/' + c.id + '/test">Testlere dön</a></div></div>';
      saveBest();
    }
    z.innerHTML = '';
    var top = $('#endtop'); if (top) top.innerHTML = res;
    pact.innerHTML = again;
    $('#again').onclick = function () {
      if (e.random) { route(); return; }
      S.ans = {}; S.done = {}; S.ticks = {}; S.finished = false; drawRunner(); window.scrollTo(0, 0);
    };
  }

  function saveBest() {
    if (S.exam.random) return;
    var b = store('enesders-best'), k = S.c.id + '/' + S.exam.id, s = score();
    if (b[k] == null || s > b[k]) { b[k] = s; store('enesders-best', b); }
  }

  /* ---------- başlat ---------- */
  function start() {
    app = $('#app');
    var tb = $('#themeBtn');
    var label = function () { tb.title = document.documentElement.dataset.theme === 'light' ? 'Koyu temaya geç' : 'Açık temaya geç'; };
    label();
    window.addEventListener('scroll', function () { if (VIEW.indexOf('/tekrar') > 0) spy(); }, { passive: true });
    window.addEventListener('resize', function () { var t = document.querySelector('.topbar'); if (t) document.documentElement.style.setProperty('--toph', t.offsetHeight + 'px'); });
    tb.onclick = function () {
      var t = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      document.documentElement.dataset.theme = t;
      try { localStorage.setItem('enesders-theme', t); } catch (e) {}
      label();
    };
    window.addEventListener('hashchange', route);
    route();
  }

  window.App = { course: course, start: start, Q: Q, _all: COURSES, _norm: norm };
})();
