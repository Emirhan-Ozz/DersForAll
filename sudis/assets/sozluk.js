/* Almanca Sözlük: A1–B1 Wortliste kelimeleri, flashcard. Yönlendirme: #sozluk */
(function () {
  'use strict';
  var KEY = 'sudis-sozluk';
  var D = (window.SOZLUK || []).map(function (r, i) { return { w: r[0], f: r[1], t: r[2], l: r[3], k: r[3] + '|' + r[0] }; });
  var st = { lvl: 'all', q: '', shuf: false, dir: 'de', only: false, i: 0, flip: false, order: null };
  try { var sv = JSON.parse(localStorage.getItem(KEY + '-ayar')) || {}; ['lvl', 'shuf', 'dir', 'only'].forEach(function (k) { if (k in sv) st[k] = sv[k]; }); } catch (e) {}
  function known() { try { return JSON.parse(localStorage.getItem(KEY + '-bilinen')) || {}; } catch (e) { return {}; } }
  function setKnown(k, v) { var d = known(); if (v) d[k] = 1; else delete d[k]; try { localStorage.setItem(KEY + '-bilinen', JSON.stringify(d)); } catch (e) {} }
  function saveSet() { try { localStorage.setItem(KEY + '-ayar', JSON.stringify({ lvl: st.lvl, shuf: st.shuf, dir: st.dir, only: st.only })); } catch (e) {} }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function norm(s) { return s.toLowerCase().replace(/^(der|die|das|sich)\s+/, '').replace(/[ä]/g, 'a').replace(/[ö]/g, 'o').replace(/[ü]/g, 'u').replace(/ß/g, 'ss')
    .replace(/[ç]/g, 'c').replace(/[ğ]/g, 'g').replace(/[ı]/g, 'i').replace(/[ş]/g, 's'); }
  function art(w) {
    var m = /^(der|die|das)\s+(.*)$/.exec(w);
    return m ? '<span class="art art-' + m[1] + '">' + m[1] + '</span> ' + esc(m[2]) : esc(w);
  }

  var deck = [];
  function rebuild(keepWord) {
    var kn = known(), q = norm(st.q.trim());
    deck = D.filter(function (e) {
      if (st.lvl !== 'all' && e.l !== st.lvl) return false;
      if (st.only && kn[e.k]) return false;
      if (q && norm(e.w).indexOf(q) < 0 && norm(e.t).indexOf(q) < 0) return false;
      return true;
    });
    if (st.shuf) {
      for (var i = deck.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), x = deck[i]; deck[i] = deck[j]; deck[j] = x; }
    }
    var idx = keepWord ? deck.indexOf(keepWord) : -1;
    st.i = idx >= 0 ? idx : 0;
    st.flip = false;
  }

  var app = null, keyBound = false;
  function render(a, q) {
    app = a;
    if (q != null && q !== '') { st.q = q; st.only = false; st.i = 0; deck = []; }
    document.title = 'Almanca Sözlük · Sudis';
    app.dataset.subj = 'sozluk';
    var cnt = { all: D.length, A1: 0, A2: 0, B1: 0 };
    D.forEach(function (e) { cnt[e.l]++; });
    app.innerHTML =
      '<div class="crumb"><a href="#">← Ana sayfa</a></div>' +
      '<header class="shead"><span class="num">Wö</span><div><h1>Almanca Sözlük</h1>' +
      '<p class="auth">Goethe-Zertifikat Wortliste · <span class="src">A1, A2 ve B1 · ' + D.length + ' kelime</span></p></div></header>' +
      '<div class="fc-wrap">' +
        '<div class="fc-bar">' +
          '<div class="chips" role="group" aria-label="Seviye">' + ['all', 'A1', 'A2', 'B1'].map(function (l) {
            return '<button type="button" data-l="' + l + '" class="chip' + (st.lvl === l ? ' on' : '') + '">' + (l === 'all' ? 'Tümü' : l) + ' <small>' + cnt[l] + '</small></button>';
          }).join('') + '</div>' +
          '<input class="fc-q" type="search" placeholder="Kelime ara (Almanca ya da Türkçe)" value="' + esc(st.q) + '" aria-label="Ara">' +
        '</div>' +
        '<div class="fc-opts">' +
          '<label><input type="checkbox" data-o="shuf"' + (st.shuf ? ' checked' : '') + '> Karıştır</label>' +
          '<label><input type="checkbox" data-o="only"' + (st.only ? ' checked' : '') + '> Sadece bilmediklerim</label>' +
          '<button type="button" class="fc-dir">' + (st.dir === 'de' ? 'Ön yüz: Almanca' : 'Ön yüz: Türkçe') + ' ⇄</button>' +
        '</div>' +
        '<div class="fc-stage"></div>' +
        '<div class="fc-nav">' +
          '<button type="button" class="fc-prev" aria-label="Önceki">←</button>' +
          '<button type="button" class="fc-no">Tekrar et</button>' +
          '<button type="button" class="fc-yes">Biliyorum ✓</button>' +
          '<button type="button" class="fc-next" aria-label="Sonraki">→</button>' +
        '</div>' +
        '<p class="fc-meta"></p>' +
        '<p class="fc-help">Kartı çevirmek için tıkla ya da <kbd>Boşluk</kbd>; gezinmek için <kbd>←</kbd> <kbd>→</kbd>.</p>' +
      '</div>' +
      '<div class="pn"><a href="#almanca">← Almanca Kitap Özeti</a><a href="#">Ana sayfa →</a></div>';

    rebuild(deck[st.i]);
    draw();

    app.querySelectorAll('.chip').forEach(function (b) {
      b.addEventListener('click', function () {
        st.lvl = b.dataset.l; saveSet();
        app.querySelectorAll('.chip').forEach(function (c) { c.classList.toggle('on', c === b); });
        rebuild(); draw();
      });
    });
    var qi = app.querySelector('.fc-q'), tmr;
    qi.addEventListener('input', function () { clearTimeout(tmr); tmr = setTimeout(function () { st.q = qi.value; rebuild(); draw(); }, 150); });
    app.querySelectorAll('.fc-opts input').forEach(function (c) {
      c.addEventListener('change', function () { st[c.dataset.o] = c.checked; saveSet(); rebuild(c.dataset.o === 'shuf' ? null : deck[st.i]); draw(); });
    });
    app.querySelector('.fc-dir').addEventListener('click', function () {
      st.dir = st.dir === 'de' ? 'tr' : 'de'; saveSet(); st.flip = false;
      this.textContent = st.dir === 'de' ? 'Ön yüz: Almanca ⇄' : 'Ön yüz: Türkçe ⇄'; draw();
    });
    app.querySelector('.fc-prev').addEventListener('click', function () { go(-1); });
    app.querySelector('.fc-next').addEventListener('click', function () { go(1); });
    app.querySelector('.fc-yes').addEventListener('click', function () { mark(true); });
    app.querySelector('.fc-no').addEventListener('click', function () { mark(false); });
    if (!keyBound) {
      keyBound = true;
      document.addEventListener('keydown', function (e) {
        if (!app || app.dataset.subj !== 'sozluk') return;
        if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
        if (e.key === ' ' || e.key === 'Enter') { if (e.target.tagName === 'BUTTON' && e.key === 'Enter') return; e.preventDefault(); flip(); }
        else if (e.key === 'ArrowRight') { e.preventDefault(); go(1); }
        else if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1); }
      });
    }
    window.scrollTo(0, 0);
  }

  function go(d) {
    if (!deck.length) return;
    st.i = (st.i + d + deck.length) % deck.length; st.flip = false; draw(d);
  }
  function flip() {
    var c = app.querySelector('.fc-card'); if (!c) return;
    st.flip = !st.flip; c.classList.toggle('flip', st.flip);
  }
  function mark(v) {
    var e = deck[st.i]; if (!e) return;
    setKnown(e.k, v);
    if (st.only && v) { deck.splice(st.i, 1); if (st.i >= deck.length) st.i = 0; st.flip = false; draw(1); }
    else go(1);
  }

  function face(e, side) {
    if (side === 'de') {
      return '<div class="fc-w">' + art(e.w) + '</div>' + (e.f ? '<div class="fc-f">' + esc(e.f) + '</div>' : '');
    }
    return '<div class="fc-t">' + esc(e.t) + '</div>';
  }
  function draw(d) {
    var stage = app.querySelector('.fc-stage'), meta = app.querySelector('.fc-meta');
    var kn = known(), tot = D.filter(function (e) { return (st.lvl === 'all' || e.l === st.lvl) && kn[e.k]; }).length;
    var lvlTot = st.lvl === 'all' ? D.length : D.filter(function (e) { return e.l === st.lvl; }).length;
    if (!deck.length) {
      stage.innerHTML = '<div class="fc-empty">' + (st.only && !st.q ? 'Bu seviyedeki tüm kelimeleri bildiğini işaretledin. 🎉' : 'Aramana uyan kelime yok.') + '</div>';
      meta.textContent = 'Bildiğin: ' + tot + ' / ' + lvlTot;
      return;
    }
    var e = deck[st.i], other = st.dir === 'de' ? 'tr' : 'de';
    stage.innerHTML =
      '<div class="fc-card' + (st.flip ? ' flip' : '') + (d ? ' in' + (d > 0 ? 'r' : 'l') : '') + '" tabindex="0" role="button" aria-label="Kartı çevir">' +
        '<div class="fc-face fc-front"><span class="lv">' + e.l + '</span>' + (kn[e.k] ? '<span class="ok">✓</span>' : '') + face(e, st.dir) + '<span class="hint">çevir</span></div>' +
        '<div class="fc-face fc-back"><span class="lv">' + e.l + '</span>' + face(e, other) +
          (other === 'tr' ? '<div class="fc-sub">' + art(e.w) + '</div>' : '') + '</div>' +
      '</div>';
    stage.querySelector('.fc-card').addEventListener('click', flip);
    meta.textContent = (st.i + 1) + ' / ' + deck.length + '  ·  Bildiğin: ' + tot + ' / ' + lvlTot;
  }

  window.Sozluk = { render: render, size: D.length };
})();
