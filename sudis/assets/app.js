/* Sudis motoru: giriş sayfası + konu özetleri.
   Yönlendirme: #  (giriş) · #<ders-id> · #<ders-id>/<konu-id> */
(function () {
  'use strict';
  var app = document.getElementById('app');
  var SUBJ = window.SUBJECTS || [];
  var KEY = (window.SITE && window.SITE.storeKey) || 'sudis-okundu';

  /* ---------- yardımcılar ---------- */
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function fmt(s) {
    return esc(s)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  }
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} }
  function isRead(sid, tid) { return !!load()[sid + '/' + tid]; }
  function setRead(sid, tid, v) { var d = load(); if (v) d[sid + '/' + tid] = 1; else delete d[sid + '/' + tid]; save(d); }
  function readCount(s) { return s.topics.filter(function (t) { return isRead(s.id, t.id); }).length; }
  function findSubj(id) { for (var i = 0; i < SUBJ.length; i++) if (SUBJ[i].id === id) return SUBJ[i]; return null; }

  /* ---------- bloklar ---------- */
  function block(b) {
    switch (b.t) {
      case 'p': return '<p>' + fmt(b.text) + '</p>';
      case 'h': return '<h3>' + fmt(b.text) + '</h3>';
      case 'ul': return '<ul>' + b.items.map(function (i) { return '<li>' + fmt(i) + '</li>'; }).join('') + '</ul>';
      case 'ol': return '<ol>' + b.items.map(function (i) { return '<li>' + fmt(i) + '</li>'; }).join('') + '</ol>';
      case 'quote': return '<blockquote>' + fmt(b.text) + '</blockquote>';
      case 'code': return '<pre><code>' + esc(b.code) + '</code></pre>' + (b.out ? '<pre class="out">' + esc(b.out) + '</pre>' : '');
      case 'table':
        return '<div class="tbl"><table><thead><tr>' + b.head.map(function (h) { return '<th>' + fmt(h) + '</th>'; }).join('') +
          '</tr></thead><tbody>' + b.rows.map(function (r) {
            return '<tr>' + r.map(function (c, i) { return '<td data-l="' + esc(b.head[i] || '') + '">' + fmt(c) + '</td>'; }).join('') + '</tr>';
          }).join('') + '</tbody></table></div>';
      case 'trap': return '<div class="box trap"><b>Dikkat</b>' + fmt(b.text) + '</div>';
      case 'tip': return '<div class="box tip"><b>Sınavda</b>' + fmt(b.text) + '</div>';
      case 'low': return '<div class="box low"><b>Not</b>' + fmt(b.text) + '</div>';
      default: return '';
    }
  }

  window.SudisRender = { block: block, fmt: fmt };

  /* ---------- giriş ---------- */
  function home() {
    document.title = 'Sudis · Çalışma';
    app.dataset.subj = '';
    window.scrollTo(0, 0);
    var g = (window.SITE && window.SITE.greeting) || '';
    var cards = SUBJ.map(function (s) {
      var n = readCount(s), tot = s.topics.length, pct = Math.round(n / tot * 100);
      return '<a class="card" href="#' + s.id + '">' +
        '<span class="num">' + s.no + '</span>' +
        '<h2>' + fmt(s.title) + '</h2>' +
        '<p class="auth">' + fmt(s.author) + '</p>' +
        '<p class="desc">' + fmt(s.desc) + '</p>' +
        '<div class="meta"><span>' + tot + ' başlık</span><span>' + n + '/' + tot + ' okundu</span></div>' +
        '<div class="bar"><i style="width:' + pct + '%"></i></div>' +
        '</a>';
    }).join('');
    app.innerHTML =
      '<section class="hero"><h1>' + fmt(g) + '</h1></section>' +
      '<section class="cards">' + cards + '</section>' +
      (window.SudisQuiz ? window.SudisQuiz.homeSection() : '');
  }

  /* ---------- ders sayfası ---------- */
  function subject(s, focus) {
    document.title = s.title + ' · Sudis';
    var toc = s.topics.map(function (t, i) {
      return '<a href="#' + s.id + '/' + t.id + '" data-t="' + t.id + '" class="' + (isRead(s.id, t.id) ? 'done' : '') + '">' +
        '<span class="i">' + (i + 1) + '</span>' + fmt(t.title) + '</a>';
    }).join('');
    var traps = (s.traps || []).map(function (x) {
      return '<li><a href="#' + s.id + '/' + x.topic + '">' + fmt(x.t) + '</a></li>';
    }).join('');
    var body = s.topics.map(function (t, i) {
      var r = isRead(s.id, t.id);
      return '<article class="topic" id="t-' + t.id + '">' +
        '<h2><span class="i">' + (i + 1) + '</span>' + fmt(t.title) + '</h2>' +
        t.blocks.map(block).join('') +
        '<button class="read' + (r ? ' on' : '') + '" data-t="' + t.id + '" type="button">' + (r ? '✓ Okundu' : 'Okudum olarak işaretle') + '</button>' +
        '</article>';
    }).join('');
    var idx = SUBJ.indexOf(s);
    var prev = SUBJ[idx - 1], next = SUBJ[idx + 1];

    app.innerHTML =
      '<div class="crumb"><a href="#">← Ana sayfa</a></div>' +
      '<header class="shead"><span class="num">' + s.no + '</span><div><h1>' + fmt(s.title) + '</h1>' +
      '<p class="auth">' + fmt(s.author) + ' · <span class="src">' + fmt(s.src) + '</span></p></div></header>' +
      '<div class="layout">' +
        '<nav class="toc" aria-label="Başlıklar"><div class="toc-in"><p class="toc-h">Başlıklar</p>' + toc + '</div></nav>' +
        '<div class="content">' +
          (traps ? '<section class="traps"><h2>Akılda tut</h2><ul>' + traps + '</ul></section>' : '') +
          body +
          ((window.PRACTICE || {})[s.id] ? '<a class="card tcard inline" href="#test/a-' + s.id + '"><h2>Bu konunun alıştırmasını çöz →</h2><p class="desc">' + window.PRACTICE[s.id].length + ' klasik soru, anında puan ve örnek cevap.</p></a>' : '') +
          '<div class="pn">' +
            (prev ? '<a href="#' + prev.id + '">← ' + fmt(prev.title) + '</a>' : '<span></span>') +
            (next ? '<a href="#' + next.id + '">' + fmt(next.title) + ' →</a>' : '<a href="#">Ana sayfa →</a>') +
          '</div>' +
        '</div>' +
      '</div>';

    app.querySelectorAll('button.read').forEach(function (b) {
      b.addEventListener('click', function () {
        var tid = b.dataset.t, v = !isRead(s.id, tid);
        setRead(s.id, tid, v);
        b.classList.toggle('on', v);
        b.textContent = v ? '✓ Okundu' : 'Okudum olarak işaretle';
        var l = app.querySelector('.toc a[data-t="' + tid + '"]');
        if (l) l.classList.toggle('done', v);
      });
    });

    spy();
    if (focus) {
      var el = document.getElementById('t-' + focus);
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }

  /* aktif başlığı içindekilerde vurgula */
  var obs = null;
  function spy() {
    if (obs) obs.disconnect();
    if (!('IntersectionObserver' in window)) return;
    obs = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var id = e.target.id.slice(2);
        app.querySelectorAll('.toc a').forEach(function (a) {
          var on = a.dataset.t === id;
          a.classList.toggle('cur', on);
          if (on && window.innerWidth < 900) a.scrollIntoView({ block: 'nearest', inline: 'center' });
        });
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    app.querySelectorAll('.topic').forEach(function (t) { obs.observe(t); });
  }

  /* ---------- yönlendirme ---------- */
  function route() {
    var h = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
    var parts = h.split('/');
    if (parts[0] === 'test' && window.SudisQuiz) { app.dataset.subj = ''; return window.SudisQuiz.render(app, parts[1]); }
    var s = findSubj(parts[0]);
    if (!s) return home();
    // aynı derste başka başlığa geçişte sayfayı yeniden çizme
    if (app.dataset.subj === s.id && parts[1]) {
      var el = document.getElementById('t-' + parts[1]);
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    subject(s, parts[1]);
    app.dataset.subj = s.id;
  }
  window.addEventListener('hashchange', function () {
    if (!findSubj(location.hash.replace(/^#\/?/, '').split('/')[0])) app.dataset.subj = '';
    route();
  });

  /* ---------- tema ---------- */
  var tb = document.getElementById('themeBtn');
  function curTheme() {
    return document.documentElement.dataset.theme ||
      (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  function icon() { if (tb) tb.textContent = curTheme() === 'dark' ? '☀' : '☾'; }
  if (tb) tb.addEventListener('click', function () {
    var nx = curTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = nx;
    try { localStorage.setItem('sudis-tema', nx); } catch (e) {}
    icon();
  });
  icon();

  route();
})();
