(function () {
  var B = StudyKit.blocks;
  StudyKit.init({
    index: function () {
      var out = [], C = (window.App && App._all) || [];
      C.forEach(function (c) {
        out.push({ k: 'Ders', t: c.title, s: c.desc, h: '#/' + c.id, w: -3 });
        c.topics.forEach(function (t) { out.push({ k: c.short || 'Konu', t: t.title, s: (t.src ? t.src + ' · ' : '') + B(t.blocks), h: '#/' + c.id + '/tekrar/' + t.id, w: -2 }); });
        (c.traps || []).forEach(function (x) { out.push({ k: 'Önemli', t: x.t, s: c.short, h: '#/' + c.id + (x.topic ? '/tekrar/' + x.topic : ''), w: -1 }); });
        c.bank.forEach(function (q) {
          var s = q.type === 'mc' ? q.opts.join(' · ') : q.type === 'fill' ? 'Cevap: ' + q.ans.join(' / ') : q.type === 'tf' ? (q.ans ? 'Doğru' : 'Yanlış') : (q.model || '');
          out.push({ k: 'Soru', t: q.q, s: s + ' ' + (q.exp || ''), h: '#/' + c.id + '/test/konu-' + q.topic });
        });
      });
      return out;
    }
  });
})();
