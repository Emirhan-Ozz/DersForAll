/* Sağ altta ›Sudiş'in sordukları‹ menüsü */
(function () {
  'use strict';
  var data = window.SUDIS_ASKS || [], R = window.SudisRender;
  if (!data.length || !R) return;

  var fab = document.createElement('button');
  fab.className = 'ask-fab'; fab.type = 'button';
  fab.setAttribute('aria-expanded', 'false'); fab.setAttribute('aria-controls', 'askPanel');
  fab.innerHTML = '<span class="ask-ico">?</span><span class="ask-lbl">Sudiş\'in sordukları</span>';

  var panel = document.createElement('aside');
  panel.className = 'ask-panel'; panel.id = 'askPanel'; panel.hidden = true;
  panel.setAttribute('aria-label', 'Sudiş\'in sordukları');
  panel.innerHTML =
    '<header class="ask-head"><div><b>Sudiş\'in sordukları</b><span>' + data.length + ' soru · açıklamalarıyla</span></div>' +
    '<button class="ask-x" type="button" aria-label="Kapat">×</button></header>' +
    '<div class="ask-body">' + data.map(function (d, i) {
      return '<details class="ask-item" id="ask-' + d.id + '"><summary><span class="ask-n">' + (i + 1) + '</span>' + R.fmt(d.q) + '</summary>' +
        '<div class="ask-ans">' + d.blocks.map(R.block).join('') +
        (d.links && d.links.length ? '<p class="ask-links">Özette: ' + d.links.map(function (l) { return '<a href="' + l[0] + '">' + R.fmt(l[1]) + '</a>'; }).join(' · ') + '</p>' : '') +
        '</div></details>';
    }).join('') + '</div>';

  document.body.appendChild(panel);
  document.body.appendChild(fab);

  function set(open) {
    panel.hidden = !open;
    fab.setAttribute('aria-expanded', String(open));
    fab.classList.toggle('on', open);
  }
  fab.addEventListener('click', function () { set(panel.hidden); });
  panel.querySelector('.ask-x').addEventListener('click', function () { set(false); fab.focus(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) set(false); });
  // tek seferde bir cevap açık kalsın
  panel.querySelectorAll('.ask-item').forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      panel.querySelectorAll('.ask-item').forEach(function (o) { if (o !== d) o.open = false; });
      setTimeout(function () { d.scrollIntoView({ block: 'nearest' }); }, 0);
    });
  });
  // özete giden bağlantıda paneli telefonda kapat
  panel.addEventListener('click', function (e) {
    if (e.target.closest('.ask-links a') && window.innerWidth < 700) set(false);
  });
})();
