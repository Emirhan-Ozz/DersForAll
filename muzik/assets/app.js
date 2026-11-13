/* Müzik dersleri · anlatım motoru. Veri: data/<ders>.js → App.course({...})
   Şimdilik yalnız anlatım; Test sekmesi "yakında" sayfası gösterir. */
(function () {
  'use strict';

  var COURSES = [], BY = {};
  var M = window.MUSIC;
  var THEME_KEY = 'muzik-theme';

  /* ---------- yardımcılar ---------- */
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  // **kalın**, *eğik*, `kod`, [[𝄞]] (müzik yazı tipi)
  function rich(s) {
    return esc(s)
      .replace(/\[\[([^\]]+)\]\]/g, '<span class="mus">$1</span>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<b>$1</b>')
      .replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<i>$2</i>');
  }
  function $(s, r) { return (r || document).querySelector(s); }
  function words(t) {
    var n = 0;
    t.blocks.forEach(function (b) {
      var s = [b.text, (b.items || []).join(' '), (b.rows || []).map(function (r) { return r.join(' '); }).join(' '), (b.defs || []).map(function (d) { return d.join(' '); }).join(' ')].join(' ');
      n += s.split(/\s+/).filter(Boolean).length;
    });
    return n;
  }

  /* ---------- ders kaydı ---------- */
  function course(c) {
    c.topics.forEach(function (t, i) { t.n = i + 1; t.min = Math.max(1, Math.ceil(words(t) / 130)); });
    COURSES.push(c); BY[c.id] = c;
  }

  /* ---------- porte çizimi (Piano notes sitesinden) ---------- */
  var HS = 5, B1 = 90, B2 = 185;
  function nm(n) { return M.name(n, 'tr'); }
  function staffLines(clef, base, W) {
    var s = '<g class="st-lines">';
    for (var p = 0; p <= 8; p += 2) s += '<line x1="4" x2="' + (W - 4) + '" y1="' + (base - p * HS) + '" y2="' + (base - p * HS) + '"/>';
    s += '</g>';
    if (clef === 'treble') s += '<text class="clef" x="9" y="' + (base - 2 * HS) + '">𝄞</text>';
    else if (clef === 'bass') s += '<text class="clef" x="9" y="' + (base - 1 * HS) + '">𝄢</text>';
    return s;
  }
  function noteSVG(n, clef, base, cx, o) {
    var p = M.pos(n, clef), cy = base - p * HS, kind = o.kind || 'q';
    var s = '<g class="note ' + (o.cls || '') + '">';
    M.ledgers(p).forEach(function (q) { var y = base - q * HS; s += '<line class="ledger" x1="' + (cx - 11) + '" x2="' + (cx + 11) + '" y1="' + y + '" y2="' + y + '"/>'; });
    if (n.a) s += '<text class="acc" x="' + (cx - 10) + '" y="' + (cy + 4) + '">' + (n.a > 0 ? '♯' : '♭') + '</text>';
    var open = kind === 'w' || kind === 'h';
    s += '<ellipse class="head' + (open ? ' open' : '') + '" cx="' + cx + '" cy="' + cy + '" rx="' + (kind === 'w' ? 7.2 : 6.2) + '" ry="4.3" transform="rotate(-22 ' + cx + ' ' + cy + ')"/>';
    if (kind !== 'w') {
      if (p < 4) s += '<line class="stem" x1="' + (cx + 5.5) + '" x2="' + (cx + 5.5) + '" y1="' + (cy - 1) + '" y2="' + (cy - 34) + '"/>';
      else s += '<line class="stem" x1="' + (cx - 5.5) + '" x2="' + (cx - 5.5) + '" y1="' + (cy + 1) + '" y2="' + (cy + 34) + '"/>';
    }
    return s + '</g>';
  }
  function toNote(x) {
    if (typeof x === 'string') return { n: M.parse(x) };
    var o = {}; for (var k in x) o[k] = x[k];
    if (typeof o.n === 'string') o.n = M.parse(o.n);
    return o;
  }
  // o: { clef: 'treble'|'bass'|'grand', notes: ['C4', {n:'D4', st:'bass', label:'', kind:'h'}], spacing, labels }
  function staffSVG(o) {
    var notes = (o.notes || []).map(toNote);
    var grand = o.clef === 'grand';
    var x0 = 50, sp = o.spacing || 40;
    var W = o.width || Math.max(150, x0 + notes.length * sp + 12);
    var ext = function (clef, base) { return clef === 'treble' ? [base - 66, base + 8] : [base - 46, base + 4]; };
    var e = grand ? [ext('treble', B1)[0], ext('bass', B2)[1]] : ext(o.clef, B1);
    var y0 = e[0], y1 = e[1];
    notes.forEach(function (x) {
      var clef = grand ? (x.st || 'treble') : o.clef, base = grand && x.st === 'bass' ? B2 : B1;
      var p = M.pos(x.n, clef), cy = base - p * HS;
      y0 = Math.min(y0, p < 4 ? cy - 36 : cy - 12);
      y1 = Math.max(y1, p < 4 ? cy + 12 : cy + 36);
    });
    y0 -= 4; y1 += 2;
    var labels = o.labels !== false;
    var labelY = y1 + 16, H = y1 - y0 + (labels ? 24 : 4);
    var s = '<svg class="staff" viewBox="0 ' + y0 + ' ' + W + ' ' + H + '" style="max-width:' + Math.round(W * (o.scale || 1.8)) + 'px" role="img" aria-label="' + esc(o.aria || 'Porte') + '">';
    if (grand) {
      s += staffLines('treble', B1, W) + staffLines('bass', B2, W);
      s += '<line class="sysline" x1="4" x2="4" y1="' + (B1 - 40) + '" y2="' + B2 + '"/>';
      s += '<path class="brace" d="M2 ' + (B1 - 40) + ' C -8 ' + (B1 + 10) + ', 6 ' + (B1 + 30) + ', -4 ' + ((B1 + B2 - 40) / 2) + ' C 6 ' + (B2 - 70) + ', -8 ' + (B2 - 40) + ', 2 ' + B2 + '"/>';
    } else s += staffLines(o.clef, B1, W);
    notes.forEach(function (x, i) {
      var clef = grand ? (x.st || 'treble') : o.clef;
      var base = grand && x.st === 'bass' ? B2 : B1;
      var cx = x.x != null ? x.x : x0 + i * sp + sp / 2;
      s += noteSVG(x.n, clef, base, cx, x);
      var label = x.label != null ? x.label : nm(x.n);
      if (labels && label) s += '<text class="st-label ' + (x.cls || '') + '" x="' + cx + '" y="' + labelY + '">' + esc(label) + '</text>';
    });
    return s + '</svg>';
  }
  // klavye: { from:'C3', to:'C5', labels:'white'|'all'|'none', hi:['C4','E4'], mark:'C4', nums:{C4:'1'} }
  function keyboardHTML(o) {
    var a = M.dia(M.parse(o.from)), b = M.dia(M.parse(o.to)), whites = [];
    for (var d = a; d <= b; d++) whites.push(M.fromDia(d));
    var hi = {}; (o.hi || []).forEach(function (x) { hi[M.midi(M.parse(x))] = 1; });
    var nums = {}; Object.keys(o.nums || {}).forEach(function (k) { nums[M.midi(M.parse(k))] = o.nums[k]; });
    var n = whites.length, w = 100 / n, bw = w * 0.6;
    var s = '<div class="kb' + (n > 18 ? ' wide' : '') + '">';
    whites.forEach(function (wn) {
      var m = M.midi(wn);
      s += '<div class="wk' + (hi[m] ? ' hi' : '') + '">';
      if (o.mark && M.str(wn) === o.mark) s += '<i class="mark" title="Orta Do"></i>';
      if (nums[m]) s += '<em>' + esc(nums[m]) + '</em>';
      if (o.labels === 'white' || o.labels === 'all') s += '<span>' + esc(nm(wn)) + '</span>';
      s += '</div>';
    });
    whites.forEach(function (wn, i) {
      if ([0, 1, 3, 4, 5].indexOf(wn.s) < 0 || i === n - 1) return;
      var bn = { s: wn.s, a: 1, o: wn.o }, m = M.midi(bn);
      s += '<div class="bk' + (hi[m] ? ' hi' : '') + '" style="left:' + ((i + 1) * w - bw / 2).toFixed(3) + '%;width:' + bw.toFixed(3) + '%">';
      if (o.labels === 'all') s += '<span>' + esc(nm(bn)) + '<br>' + esc(nm({ s: wn.s + 1, a: -1, o: wn.o })) + '</span>';
      s += '</div>';
    });
    return s + '</div>';
  }

  /* ---------- bloklar ---------- */
  function table(b) {
    return '<div class="tbl-wrap"><table' + (b.cls ? ' class="' + b.cls + '"' : '') + '><thead><tr>' + b.head.map(function (x) { return '<th>' + rich(x) + '</th>'; }).join('') +
      '</tr></thead><tbody>' + b.rows.map(function (r) { return '<tr>' + r.map(function (x) { return '<td>' + rich(x) + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
  }
  function fig(inner, cap) { return '<figure class="fig">' + inner + (cap ? '<figcaption>' + rich(cap) + '</figcaption>' : '') + '</figure>'; }
  function block(b) {
    switch (b.t) {
      case 'p': return '<p>' + rich(b.text) + '</p>';
      case 'h': return '<h3>' + rich(b.text) + '</h3>';
      case 'ul': return '<ul>' + b.items.map(function (x) { return '<li>' + rich(x) + '</li>'; }).join('') + '</ul>';
      case 'ol': return '<ol>' + b.items.map(function (x) { return '<li>' + rich(x) + '</li>'; }).join('') + '</ol>';
      case 'table': return table(b);
      case 'defs': return '<dl class="defs">' + b.defs.map(function (d) { return '<dt>' + rich(d[0]) + '</dt><dd>' + rich(d[1]) + '</dd>'; }).join('') + '</dl>';
      case 'sym': return '<div class="syms">' + b.items.map(function (d) { return '<div class="sym"><span class="g mus">' + esc(d[0]) + '</span><span class="nm">' + rich(d[1]) + '</span>' + (d[2] ? '<span class="ds">' + rich(d[2]) + '</span>' : '') + '</div>'; }).join('') + '</div>';
      case 'trap': return '<div class="callout trap"><span class="label">Dikkat</span>' + rich(b.text) + '</div>';
      case 'tip': return '<div class="callout tip"><span class="label">' + esc(b.label || 'Akılda tut') + '</span>' + rich(b.text) + '</div>';
      case 'note': return '<div class="callout note"><span class="label">' + esc(b.label || 'Not') + '</span>' + rich(b.text) + '</div>';
      case 'ext': return '<div class="callout ext"><span class="label">' + esc(b.label || 'Ek bilgi') + '</span>' + rich(b.text) + (b.items ? '<ul>' + b.items.map(function (x) { return '<li>' + rich(x) + '</li>'; }).join('') + '</ul>' : '') + '</div>';
      case 'music': return '<div class="callout music"><span class="label">' + esc(b.label || 'Müzik açısından') + '</span>' + (b.text ? rich(b.text) : '') + (b.items ? '<ul>' + b.items.map(function (x) { return '<li>' + rich(x) + '</li>'; }).join('') + '</ul>' : '') + '</div>';
      case 'staff': return fig(staffSVG(b), b.caption);
      case 'kb': return fig(keyboardHTML(b), b.caption);
      case 'svg': return fig('<div class="svgbox">' + b.svg + '</div>', b.caption);
      case 'steps': return '<ol class="steps">' + b.items.map(function (x) { return '<li>' + rich(x) + '</li>'; }).join('') + '</ol>';
    }
    return '';
  }

  /* ---------- yönlendirme ---------- */
  var app, VIEW = '';
  function route() {
    var h = decodeURIComponent(location.hash.replace(/^#\/?/, '')).split('/').filter(Boolean);
    var c = BY[h[0]];
    var tab = !c ? '' : (h[1] === 'test' ? 'test' : 'tekrar');
    renderNav(c, tab);
    if (!c) { VIEW = 'home'; window.scrollTo(0, 0); return home(); }
    if (tab === 'test') { VIEW = c.id + '/test'; window.scrollTo(0, 0); return soon(c); }
    var key = c.id + '/tekrar';
    if (VIEW !== key) { VIEW = key; review(c); }
    goSec(h[2] ? 't-' + h[2] : null);
  }

  function renderNav(cur, tab) {
    $('#courseNav').innerHTML = COURSES.map(function (c) {
      return '<a href="#/' + c.id + '" class="' + (cur && cur.id === c.id ? 'active' : '') + '" title="' + esc(c.title) + '">' + esc(c.code) + '</a>';
    }).join('');
    var on = $('#courseNav a.active'); if (on) { var n = $('#courseNav'); n.scrollLeft = on.offsetLeft - n.clientWidth / 2 + on.offsetWidth / 2; }
    var tb = $('#tabNav');
    tb.hidden = !cur;
    if (cur) tb.innerHTML = '<a href="#/' + cur.id + '/tekrar" class="' + (tab === 'tekrar' ? 'active' : '') + '">Anlatım</a>' +
      '<a href="#/' + cur.id + '/test" class="' + (tab === 'test' ? 'active' : '') + '">Test</a>';
    $('#brandSub').textContent = cur ? ' · ' + cur.short : ' · ' + COURSES.length + ' ders';
    document.title = cur ? cur.code + ' ' + cur.short + ' · Müzik' : 'Müzik · ' + COURSES.length + ' ders';
    var t = document.querySelector('.topbar'); if (t) document.documentElement.style.setProperty('--toph', t.offsetHeight + 'px');
  }

  /* ---------- ana sayfa ---------- */
  function home() {
    var nt = 0, nm2 = 0;
    COURSES.forEach(function (c) { nt += c.topics.length; c.topics.forEach(function (t) { nm2 += t.min; }); });
    app.innerHTML = '<section class="card hero"><div class="hero-txt"><h1>Müzik dersleri</h1>' +
      '<p class="lead">Dört dersin kaynak kitapları konu konu ayrıldı ve <b>ayrıntılı</b> anlatıldı: piyano, viyolonsel, müzik teorisi ve antik uygarlıklar. ' +
      'Şimdilik yalnız <b>anlatım</b> var; testler derse göre sonra eklenecek.</p>' +
      '<div class="stats"><span><b>' + COURSES.length + '</b> ders</span><span><b>' + nt + '</b> konu</span><span><b>~' + Math.round(nm2 / 60 * 10) / 10 + '</b> saat okuma</span></div></div>' +
      '<div class="hero-staff">' + staffSVG({ clef: 'treble', notes: ['C4', 'E4', 'G4', 'C5', 'E5', 'G5'].map(function (x) { return { n: x, label: '' }; }), spacing: 34, labels: false, scale: 1.6 }) + '</div></section>' +
      '<div class="group-title">Dersler</div><div class="home-grid">' + COURSES.map(function (c) {
        var mins = c.topics.reduce(function (a, t) { return a + t.min; }, 0);
        return '<a class="test-card course-card" href="#/' + c.id + '"><span class="cc-g mus">' + esc(c.glyph || '♪') + '</span><div class="cc-code">' + esc(c.code) + '</div><div class="t">' + esc(c.title) + '</div><div class="d">' + esc(c.desc) + '</div>' +
          '<div class="meta"><span class="badge exam">' + c.topics.length + ' konu</span><span class="badge">~' + mins + ' dk okuma</span><span class="badge soon">Test yakında</span></div></a>';
      }).join('') + '</div>' +
      '<div class="group-title">Nasıl çalışılır?</div><section class="card"><ol class="home-steps">' +
      '<li>Dersi üstteki seçiciden aç. Solda (telefonda üstte) <b>İçindekiler</b> var; okudukça bulunduğun konu işaretlenir.</li>' +
      '<li>Her dersin başında <b>Önemli noktalar</b> listesi var: sınavdan önce son tekrar için.</li>' +
      '<li>Mor kutular <b>Akılda tut</b>, kırmızı kutular sık karıştırılan yerler (<b>Dikkat</b>), kesikli kutular kitapta olmayan <b>ek bilgi</b>dir.</li>' +
      '<li>Portelerdeki ve klavyedeki notalar adlarıyla yazılı; çalgının başında kitapla birlikte oku.</li></ol></section>';
  }

  /* ---------- test (yakında) ---------- */
  function soon(c) {
    app.innerHTML = '<section class="card soon-card"><span class="soon-g mus">𝄐</span><h1>Test · ' + esc(c.code) + '</h1>' +
      '<p class="lead">Bu dersin testleri henüz eklenmedi. Sınav biçimi (test, boşluk doldurma, nota okuma, klasik) belli olunca konu testleri ve denemeler buraya gelecek.</p>' +
      '<p style="margin:0">Şimdilik <a href="#/' + c.id + '/tekrar">anlatıma dön →</a></p></section>' +
      '<div class="group-title">Konular</div><div class="test-grid">' + c.topics.map(function (t) {
        return '<a class="test-card" href="#/' + c.id + '/tekrar/' + t.id + '"><div class="t">' + t.n + '. ' + esc(t.title) + '</div><div class="d">' + esc(t.src || '') + '</div><div class="meta"><span class="badge soon">Test yakında</span><span>~' + t.min + ' dk okuma</span></div></a>';
      }).join('') + '</div>';
  }

  /* ---------- anlatım ---------- */
  function review(c) {
    var base = '#/' + c.id + '/tekrar/';
    var toc = '<aside class="toc"><div class="toc-title">İçindekiler</div>' +
      '<a href="' + base + 'giris" data-sec="t-giris"><span class="num">·</span>Giriş</a>' +
      (c.traps && c.traps.length ? '<a href="' + base + 'onemli" data-sec="t-onemli"><span class="num">!</span>Önemli noktalar</a>' : '') +
      '<div class="toc-sep"></div>' +
      c.topics.map(function (t) { return '<a href="' + base + t.id + '" data-sec="t-' + t.id + '"><span class="num">' + t.n + '</span>' + esc(t.title) + '</a>'; }).join('') + '</aside>';
    var chips = '<nav class="chips">' +
      '<a href="' + base + 'giris" data-sec="t-giris">Giriş</a>' +
      (c.traps && c.traps.length ? '<a href="' + base + 'onemli" data-sec="t-onemli">Önemli</a>' : '') +
      c.topics.map(function (t) { return '<a href="' + base + t.id + '" data-sec="t-' + t.id + '">' + t.n + '. ' + esc(t.short || t.title) + '</a>'; }).join('') + '</nav>';
    var intro = '<section class="card" id="t-giris"><div class="cc-code">' + esc(c.code) + '</div><h1>' + esc(c.title) + '</h1><p class="lead" style="margin:0 0 10px">' + rich(c.lead) + '</p>' +
      (c.sources ? '<div class="srcs">' + c.sources.map(function (s) { return '<div class="src"><span class="mus">' + esc(s.g || '𝄞') + '</span><div><b>' + rich(s.t) + '</b><small>' + rich(s.d) + '</small></div></div>'; }).join('') + '</div>' : '') + '</section>';
    var traps = c.traps && c.traps.length ? '<section class="card" id="t-onemli"><h2>Önemli noktalar</h2>' +
      '<p class="topic-src" style="margin-top:4px">Sınavdan önce son tekrar: en çok karıştırılan bilgiler.</p><ol class="traps-list">' + c.traps.map(function (t) {
        return '<li>' + rich(t.t) + (t.topic ? ' <a class="go" href="' + base + t.topic + '">konu →</a>' : '') + '</li>';
      }).join('') + '</ol></section>' : '';
    var topics = c.topics.map(function (t, i) {
      var prev = c.topics[i - 1], next = c.topics[i + 1];
      return '<section class="card topic" id="t-' + t.id + '"><div class="topic-head"><span class="n">' + t.n + '</span><h2>' + esc(t.title) + '</h2><span class="spacer"></span>' +
        '<span class="rt">~' + t.min + ' dk</span></div>' +
        (t.src ? '<p class="topic-src">' + rich(t.src) + '</p>' : '') + t.blocks.map(block).join('') +
        '<div class="pn">' + (prev ? '<a href="' + base + prev.id + '" data-sec="t-' + prev.id + '">← ' + esc(prev.short || prev.title) + '</a>' : '<span></span>') +
        (next ? '<a href="' + base + next.id + '" data-sec="t-' + next.id + '">' + esc(next.short || next.title) + ' →</a>' : '<a href="#/' + c.id + '/test">Test (yakında) →</a>') + '</div></section>';
    }).join('');
    app.innerHTML = '<div class="review">' + toc + '<div class="review-main">' + chips + intro + traps + topics + '</div></div>';
    app.querySelectorAll('[data-sec]').forEach(function (a) {
      a.onclick = function (ev) {
        ev.preventDefault();
        try { history.replaceState(null, '', a.getAttribute('href')); } catch (e) { /* yok say */ }
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
    app.querySelectorAll('[data-sec]').forEach(function (a) { if (!a.closest('.pn')) a.classList.toggle('active', a.dataset.sec === cur); });
    var tocA = app.querySelector('.toc a.active'), toc = app.querySelector('.toc');
    if (tocA && toc && toc.scrollHeight > toc.clientHeight) {
      var r = tocA.offsetTop - toc.clientHeight / 2;
      if (Math.abs(toc.scrollTop - r) > toc.clientHeight / 3) toc.scrollTop = r;
    }
    var ch = app.querySelector('.chips a.active'), nav = app.querySelector('.chips');
    if (ch && nav && nav.offsetParent) { var want = ch.offsetLeft - nav.clientWidth / 2 + ch.offsetWidth / 2; if (Math.abs(nav.scrollLeft - want) > 40) nav.scrollLeft = want; }
  }

  /* ---------- başlat ---------- */
  function start() {
    app = $('#app');
    var tb = $('#themeBtn');
    var label = function () { tb.title = document.documentElement.dataset.theme === 'light' ? 'Koyu temaya geç' : 'Açık temaya geç'; };
    label();
    tb.onclick = function () {
      var t = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      document.documentElement.dataset.theme = t;
      try { localStorage.setItem(THEME_KEY, t); } catch (e) { /* gizli mod */ }
      label();
    };
    window.addEventListener('hashchange', route);
    var tick = false;
    window.addEventListener('scroll', function () { if (tick) return; tick = true; requestAnimationFrame(function () { tick = false; spy(); }); }, { passive: true });
    window.addEventListener('resize', function () { var t = document.querySelector('.topbar'); if (t) document.documentElement.style.setProperty('--toph', t.offsetHeight + 'px'); });
    route();
  }

  window.App = { course: course, start: start, _all: COURSES, staffSVG: staffSVG };
})();
