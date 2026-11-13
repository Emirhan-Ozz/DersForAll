(function () {
  var B = StudyKit.blocks;
  StudyKit.init({
    index: function () {
      var out = [], C = (window.App && App._all) || [];
      C.forEach(function (c) {
        out.push({ k: 'Ders', t: c.code + ' · ' + c.title, s: c.desc, h: '#/' + c.id, w: -3 });
        c.topics.forEach(function (t) {
          var defs = []; t.blocks.forEach(function (b) { (b.defs || []).forEach(function (d) { defs.push(d.join(' ')); }); (b.items || []).forEach(function (d) { if (Array.isArray(d)) defs.push(d.join(' ')); }); });
          out.push({ k: c.code, t: t.title, s: (t.src ? t.src + ' · ' : '') + B(t.blocks.filter(function (b) { return b.t !== 'sym'; })) + ' ' + defs.join(' '), h: '#/' + c.id + '/tekrar/' + t.id, w: -2 });
        });
        (c.traps || []).forEach(function (x) { out.push({ k: 'Önemli · ' + c.code, t: x.t, s: c.short, h: '#/' + c.id + (x.topic ? '/tekrar/' + x.topic : ''), w: -1 }); });
      });
      return out;
    }
  });
})();
