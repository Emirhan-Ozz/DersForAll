/* Almanca Kitap Özeti: veri yardımcıları (K) + görüntüleyici.
   Yönlendirme: #almanca · #almanca/<bölüm-id> */
(function () {
  'use strict';
  var PARTS = [];
  window.K = {
    part: function (id, title, desc, secs) { PARTS.push({ id: id, title: title, desc: desc, secs: secs }); },
    sec: function (id, no, title, page, blocks) { return { id: id, no: no, title: title, page: page, blocks: blocks }; },
    p: function (t) { return { t: 'p', text: t }; },
    ul: function (a) { return { t: 'ul', items: a }; },
    tb: function (h, r) { return { t: 'table', head: h, rows: r }; },
    ex: function (r) { return { t: 'ex', rows: r }; },
    note: function (t) { return { t: 'note', text: t }; },
    trap: function (t) { return { t: 'trap', text: t }; },
    ue: function (instr, items) { return { t: 'ue', instr: instr, items: items }; }
  };

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function fmt(s) {
    return esc(s)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/~~([^~]+)~~/g, '<s>$1</s>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*\n]+?)\*/g, '<em>$1</em>');
  }
  var ueN = 0;
  function block(b) {
    switch (b.t) {
      case 'p': return '<p>' + fmt(b.text) + '</p>';
      case 'ul': return '<ul>' + b.items.map(function (i) { return '<li>' + fmt(i) + '</li>'; }).join('') + '</ul>';
      case 'table':
        return '<div class="tbl de-tbl"><table><thead><tr>' + b.head.map(function (h) { return '<th>' + fmt(h) + '</th>'; }).join('') +
          '</tr></thead><tbody>' + b.rows.map(function (r) {
            return '<tr>' + r.map(function (c, i) { return '<td data-l="' + esc(b.head[i] || '') + '">' + fmt(c) + '</td>'; }).join('') + '</tr>';
          }).join('') + '</tbody></table></div>';
      case 'ex':
        return '<dl class="ex">' + b.rows.map(function (r) { return '<div><dt>' + fmt(r[0]) + '</dt><dd>' + fmt(r[1]) + '</dd></div>'; }).join('') + '</dl>';
      case 'note': return '<div class="box tip"><b>Mini not</b>' + fmt(b.text) + '</div>';
      case 'trap': return '<div class="box trap"><b>Dikkat</b>' + fmt(b.text) + '</div>';
      case 'ue':
        ueN++;
        return '<section class="ue"><div class="ue-h"><span class="ue-tag">Alıştırma</span><p>' + fmt(b.instr) + '</p>' +
          '<button type="button" class="ue-all">Tüm cevapları göster</button></div><ol>' +
          b.items.map(function (it) {
            return '<li><span class="q">' + fmt(it[0]) + '</span><button type="button" class="ans" aria-expanded="false">Cevap</button>' +
              '<span class="a">' + fmt(it[1]) + '</span></li>';
          }).join('') + '</ol></section>';
      default: return '';
    }
  }

  var built = null;
  function build() {
    if (built) return built;
    var toc = '', body = '';
    PARTS.forEach(function (p) {
      toc += '<p class="toc-h">' + esc(p.title) + '</p>' + p.secs.map(function (s) {
        return '<a href="#almanca/' + s.id + '" data-t="' + s.id + '"><span class="i">' + esc(s.no) + '</span>' + fmt(s.title) + '</a>';
      }).join('');
      body += '<div class="partsep" id="p-' + p.id + '"><span>' + esc(p.title) + '</span><h2>' + fmt(p.desc) + '</h2></div>' +
        p.secs.map(function (s) {
          return '<article class="topic" id="t-' + s.id + '"><h2><span class="i">' + esc(s.no) + '</span>' + fmt(s.title) +
            '<small class="pg">s. ' + s.page + '</small></h2>' + s.blocks.map(block).join('') + '</article>';
        }).join('');
    });
    var n = PARTS.reduce(function (a, p) { return a + p.secs.length; }, 0);
    built = { toc: toc, body: body, n: n };
    return built;
  }

  var obs = null;
  function spy(app) {
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

  function render(app, focus) {
    document.title = 'Almanca Kitap Özeti · Sudis';
    if (app.dataset.subj === 'almanca' && focus) {
      var el0 = document.getElementById('t-' + focus);
      if (el0) { el0.scrollIntoView({ behavior: 'smooth' }); return; }
    }
    var b = build();
    app.dataset.subj = 'almanca';
    app.innerHTML =
      '<div class="crumb"><a href="#">← Ana sayfa</a></div>' +
      '<header class="shead"><span class="num">DE</span><div><h1>Almanca Kitap Özeti</h1>' +
      '<p class="auth">Dreyer / Schmitt · <span class="src">Lehr- und Übungsbuch der deutschen Grammatik – aktuell</span></p></div></header>' +
      '<div class="layout">' +
        '<nav class="toc" aria-label="Bölümler"><div class="toc-in">' + b.toc + '</div></nav>' +
        '<div class="content">' +
          '<section class="traps intro"><h2>Nasıl kullanılır?</h2><p>Konular kitabın sırasını izler; her başlığın yanında kitaptaki sayfa numarası var. ' +
          'Bölüm sonlarındaki alıştırmalar kitaptakilere benzer biçimde hazırlandı. Önce kendin çöz, sonra <b>Cevap</b> düğmesiyle kontrol et.</p></section>' +
          b.body +
          '<div class="pn"><a href="#">← Ana sayfa</a><a href="#sozluk">Almanca Sözlük →</a></div>' +
        '</div>' +
      '</div>';

    app.querySelectorAll('.ue').forEach(function (u) {
      var all = u.querySelector('.ue-all');
      function sync() {
        var open = u.querySelectorAll('li.open').length, tot = u.querySelectorAll('li').length;
        all.textContent = open === tot ? 'Cevapları gizle' : 'Tüm cevapları göster';
      }
      u.querySelectorAll('.ans').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var li = btn.parentNode, v = !li.classList.contains('open');
          li.classList.toggle('open', v); btn.setAttribute('aria-expanded', v); btn.textContent = v ? 'Gizle' : 'Cevap';
          sync();
        });
      });
      all.addEventListener('click', function () {
        var lis = u.querySelectorAll('li'), v = u.querySelectorAll('li.open').length !== lis.length;
        lis.forEach(function (li) {
          li.classList.toggle('open', v);
          var btn = li.querySelector('.ans'); btn.setAttribute('aria-expanded', v); btn.textContent = v ? 'Gizle' : 'Cevap';
        });
        sync();
      });
    });

    spy(app);
    if (focus) {
      var el = document.getElementById('t-' + focus);
      if (el) { el.scrollIntoView(); return; }
    }
    window.scrollTo(0, 0);
  }

  window.AlmancaKitap = { render: render, parts: PARTS, count: function () { return build().n; } };
})();
