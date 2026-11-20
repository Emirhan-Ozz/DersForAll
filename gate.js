/* DersDolabı şifre kapısı (eski adı DersForAll; localStorage anahtarı dfa: aynı kaldı).
   - Kökte (ana menü): kartlara ve hızlı erişim linklerine tıklanınca şifre ekranı açar.
   - Alt sitelerde (<head> içinde ilk script olarak): şifre girilmemişse ana menüye geri yollar.
   Şifreler burada açık durmaz; yalnızca SHA-256 özetleri tutulur.
   Not: Statik sitede bu bir kapıdır, kasa değildir (repo public). */
(function () {
  'use strict';
  var SITES = {
    'enesders':       { who: 'Enes',      h: 'f390e8a333b5bceceb73abf268ee274aeb5f8c745d9bc8dc4dd34465651704a2' },
    'sofl1115':       { who: 'Mustağfi',  h: '755b536c155e6f3a089e981ee912bd87565e997c73673cc56b5459b761bbe474' },
    'sudis':          { who: 'Sudiş',     h: 'f72c7526cdac104a94025fcd13a328278a4724cc9a2ad4ef14100ee00682cad2' },
    'starter-python': { who: 'Özge Abla', h: '9945d4b12a1f7ca4b510464ee918f15da6251c26b416a05335d2f6d473fad090' },
    'mbp193':         { who: 'Hako',      h: '881cb2670dc25b1a1c2f7fff3504b25df6eb044e3474ad740423084f3ec12ad2' },
    'muzik':          { who: 'Umutcan',   h: '10ea962bd3635b6b573f5292909e80f18f79841ffab41d40e32e848cc4dd16c0' },
    'piano':          { who: 'Emirhan',   h: '11737e643cb716628c09033de0a4199137d3bf2e33790997a9b16d67af0bd55b' }
  };
  var KEY = 'dfa:unlock:';
  var ROOT = (function () { try { return new URL('./', document.currentScript.src).href; } catch (e) { return null; } })();

  function stored(id) { try { return localStorage.getItem(KEY + id); } catch (e) { return null; } }
  function unlocked(id) { return !SITES[id] || stored(id) === SITES[id].h; }
  function siteOf(href) {
    if (!ROOT) return '';
    var u = new URL(href, location.href).href;
    if (u.indexOf(ROOT) !== 0) return '';
    return u.slice(ROOT.length).split(/[\/?#]/)[0];
  }

  /* ---------- alt site: koruma ---------- */
  var here = siteOf(location.href);
  if (here && SITES[here]) {
    if (!unlocked(here)) {
      document.documentElement.style.visibility = 'hidden';
      location.replace(ROOT + '?kilit=' + encodeURIComponent(here) + '&git=' + encodeURIComponent(location.href.slice(ROOT.length)));
    }
    return;
  }

  /* ---------- ana menü: şifre ekranı ---------- */
  function sha(text) {
    if (!(window.crypto && crypto.subtle)) return Promise.reject(new Error('nocrypto'));
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)).then(function (b) {
      return [].map.call(new Uint8Array(b), function (x) { return ('0' + x.toString(16)).slice(-2); }).join('');
    });
  }

  var css = '' +
    '.gate{position:fixed; inset:0; z-index:100; display:grid; place-items:center; padding:20px; background:rgba(8,9,12,.62);' +
    ' -webkit-backdrop-filter:blur(8px); backdrop-filter:blur(8px); opacity:0; transition:opacity .22s}' +
    '.gate[hidden]{display:none}.gate.on{opacity:1}' +
    '.gate-box{--a:var(--c1); width:min(400px,100%); background:var(--panel); color:var(--ink); border:1px solid var(--line); border-radius:22px;' +
    ' padding:30px 28px 24px; position:relative; overflow:hidden; box-shadow:0 24px 60px rgba(0,0,0,.45); transform:translateY(10px) scale(.98); transition:transform .25s cubic-bezier(.34,1.4,.55,1)}' +
    '.gate.on .gate-box{transform:none}' +
    '.gate-box::before{content:""; position:absolute; inset:0 0 auto 0; height:5px; background:var(--band, var(--a))}' +
    '.gate-box::after{content:""; position:absolute; inset:auto -30% -55% auto; width:80%; aspect-ratio:1; border-radius:50%; pointer-events:none;' +
    ' background:radial-gradient(closest-side, color-mix(in srgb, var(--a) 18%, transparent), transparent)}' +
    '.gate-box > *{position:relative; z-index:1}' +
    '.gate-lock{width:46px; height:46px; border-radius:14px; display:grid; place-items:center; margin-bottom:16px; color:var(--a);' +
    ' background:color-mix(in srgb, var(--a) 15%, transparent)}' +
    '.gate-box h2{margin:0 0 4px; font-size:1.45rem; letter-spacing:-.015em}' +
    '.gate-box p{margin:0 0 20px; color:var(--mute); font-size:.93rem}' +
    '.gate-box p b{color:var(--a)}' +
    '.gate-in{width:100%; font:inherit; font-size:1rem; padding:12px 14px; border-radius:12px; border:1.5px solid var(--line); background:var(--bg); color:var(--ink); outline:none; transition:border-color .2s, box-shadow .2s}' +
    '.gate-in:focus{border-color:var(--a); box-shadow:0 0 0 4px color-mix(in srgb, var(--a) 18%, transparent)}' +
    '.gate-box.bad .gate-in{border-color:#e5484d; box-shadow:0 0 0 4px rgba(229,72,77,.16)}' +
    '.gate-err{min-height:1.4em; margin:8px 2px 0; color:#ff6b70; font-size:.86rem; font-weight:600}' +
    '.gate-row{display:flex; gap:10px; margin-top:10px}' +
    '.gate-row button{flex:1; font:inherit; font-weight:700; font-size:.95rem; padding:11px 14px; border-radius:12px; cursor:pointer; border:1px solid var(--line); background:transparent; color:var(--mute)}' +
    '.gate-row button:hover{color:var(--ink)}' +
    '.gate-row .gate-ok{border:0; color:#fff; background:var(--band, var(--a))}' +
    '.gate-row .gate-ok:hover{filter:brightness(1.08)}' +
    '.gate-row button:disabled{opacity:.6; cursor:wait}' +
    '@keyframes gate-shake{20%,60%{transform:translateX(-7px)}40%,80%{transform:translateX(7px)}}' +
    '.gate-box.shake{animation:gate-shake .38s}' +
    '@media (prefers-reduced-motion: reduce){.gate,.gate-box{transition:none}.gate-box.shake{animation:none}}';

  var el, box, input, err, okBtn, cur = null, lastFocus = null;

  function build() {
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    el = document.createElement('div'); el.className = 'gate'; el.hidden = true;
    el.innerHTML =
      '<form class="gate-box" role="dialog" aria-modal="true" aria-labelledby="gate-t" novalidate>' +
      '<div class="gate-lock" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2.5"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg></div>' +
      '<h2 id="gate-t">Çalışma alanı kilitli</h2>' +
      '<p>Bu alan <b class="gate-who"></b> için. Devam etmek için şifreni gir.</p>' +
      '<label class="sr" for="gate-in" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)">Şifre</label>' +
      '<input class="gate-in" id="gate-in" type="password" autocomplete="current-password" placeholder="Şifre" required>' +
      '<div class="gate-err" role="alert" aria-live="assertive"></div>' +
      '<div class="gate-row"><button type="button" class="gate-x">Vazgeç</button><button type="submit" class="gate-ok">Giriş yap</button></div>' +
      '</form>';
    document.body.appendChild(el);
    box = el.querySelector('.gate-box'); input = el.querySelector('.gate-in'); err = el.querySelector('.gate-err'); okBtn = el.querySelector('.gate-ok');
    el.querySelector('.gate-x').addEventListener('click', close);
    el.addEventListener('mousedown', function (e) { if (e.target === el) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !el.hidden) close(); });
    input.addEventListener('input', function () { box.classList.remove('bad'); err.textContent = ''; });
    box.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!cur) return;
      var id = cur.id, pw = input.value.trim();
      if (!pw) { fail('Lütfen şifreni yaz.'); return; }
      okBtn.disabled = true;
      sha('dfa:' + id + ':' + pw).then(function (h) {
        okBtn.disabled = false;
        if (h === SITES[id].h) {
          try { localStorage.setItem(KEY + id, h); } catch (x) {}
          location.href = cur.href;
        } else fail('Hatalı şifre, lütfen tekrar deneyiniz.');
      }, function () { okBtn.disabled = false; fail('Tarayıcı şifreyi kontrol edemedi. Siteyi https üzerinden aç.'); });
    });
  }

  function fail(msg) {
    err.textContent = msg; box.classList.add('bad'); box.classList.remove('shake'); void box.offsetWidth; box.classList.add('shake');
    input.select();
  }

  function open(id, href, themeFrom) {
    if (!el) build();
    cur = { id: id, href: href };
    var cs = themeFrom ? getComputedStyle(themeFrom) : null;
    var a = cs && cs.getPropertyValue('--accent').trim();
    var band = cs && cs.getPropertyValue('--band').trim();
    box.style.setProperty('--a', a || 'var(--c1)');
    if (band) box.style.setProperty('--band', band); else box.style.removeProperty('--band');
    el.querySelector('.gate-who').textContent = SITES[id].who;
    input.value = ''; err.textContent = ''; box.classList.remove('bad');
    lastFocus = document.activeElement;
    el.hidden = false; void el.offsetWidth; el.classList.add('on');
    setTimeout(function () { input.focus(); }, 30);
  }

  function close() {
    if (!el || el.hidden) return;
    el.classList.remove('on'); cur = null;
    setTimeout(function () { el.hidden = true; }, 200);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function cardFor(id) { return document.querySelector('a.card[href^="' + id + '/"]'); }

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var id = siteOf(a.href);
    if (!id || unlocked(id)) return;
    e.preventDefault();
    open(id, a.href, a.classList.contains('card') ? a : cardFor(id));
  });

  /* alt siteden geri yollandıysa şifre ekranını hemen aç */
  function fromRedirect() {
    var q = new URLSearchParams(location.search), id = q.get('kilit');
    if (!id || !SITES[id]) return;
    var next = q.get('git') || (id + '/');
    if (siteOf(ROOT + next) !== id) next = id + '/';
    history.replaceState(null, '', location.pathname + location.hash);
    if (unlocked(id)) { location.replace(ROOT + next); return; }
    open(id, ROOT + next, cardFor(id));
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fromRedirect); else fromRedirect();

  window.DFAGate = { open: open, lock: function (id) { try { localStorage.removeItem(KEY + id); } catch (e) {} } };
})();
