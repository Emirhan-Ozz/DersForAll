(function () {
  var B = StudyKit.blocks;
  StudyKit.init({
    fabBottom: '84px', fabSide: 'right',
    speak: [
      { sel: '.fc-front .fc-w, .fc-back .fc-w', lang: 'de-DE' },
      { sel: '.fc-sub', lang: 'de-DE' },
      { sel: 'dl.ex dt', lang: 'de-DE' }
    ],
    index: function () {
      var out = [];
      (window.SUBJECTS || []).forEach(function (s) {
        out.push({ k: 'Konu', t: s.title, s: s.desc, h: '#' + s.id, w: -3 });
        (s.topics || []).forEach(function (t) { out.push({ k: s.title, t: t.title, s: B(t.blocks), h: '#' + s.id + '/' + t.id, w: -2 }); });
        (s.traps || []).forEach(function (x) { out.push({ k: 'Tuzak', t: x.t, s: s.title, h: '#' + s.id + '/' + (x.topic || ''), w: -1 }); });
      });
      var P = window.PRACTICE || {}, BK = window.BANK || {};
      Object.keys(P).forEach(function (sid) { P[sid].forEach(function (q) { out.push({ k: 'Alıştırma', t: q.q, s: q.a, h: '#test/a-' + sid }); }); });
      Object.keys(BK).forEach(function (sid) { BK[sid].forEach(function (q) { out.push({ k: 'Soru', t: q.q, s: q.a, h: '#test/rastgele' }); }); });
      ((window.AlmancaKitap && AlmancaKitap.parts) || []).forEach(function (p) {
        p.secs.forEach(function (sc) {
          out.push({ k: 'Gramer ' + sc.no, t: sc.title, s: sc.blocks.map(function (b) {
            return b.t === 'ex' ? b.rows.map(function (r) { return r.join(' – '); }).join(' ') : b.t === 'ue' ? b.instr + ' ' + b.items.map(function (i) { return i.join(' → '); }).join(' ') : B([b]);
          }).join(' '), h: '#almanca/' + sc.id, w: -2 });
        });
      });
      (window.SOZLUK || []).forEach(function (r) { out.push({ k: 'Sözlük ' + r[3], t: r[0], s: (r[1] ? r[1] + ' · ' : '') + r[2], h: '#sozluk/' + encodeURIComponent(r[0].replace(/^(der|die|das)\s+/, '')) }); });
      return out;
    }
  });
})();
