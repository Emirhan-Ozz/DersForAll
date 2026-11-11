(function () {
  StudyKit.init({
    index: function () {
      var out = [];
      ((window.PY || {}).exams || []).forEach(function (e) {
        out.push({ k: 'Çalışma', t: e.title, s: e.desc, h: '#/' + e.id, w: -2 });
        e.q.forEach(function (q) { out.push({ k: 'Soru', t: StudyKit.plain(q.q || q.title || ''), s: e.title + ' · ' + (q.opts || []).join(' · ') + ' ' + (q.exp || ''), h: '#/' + e.id }); });
      });
      (window.PYNOTES || []).forEach(function (n) {
        out.push({ k: 'Not', t: n.title, s: StudyKit.plain(n.html), h: '#/notlar/' + n.id, w: -2 });
        var re = /<h[23][^>]*>(.*?)<\/h[23]>/g, m;
        while ((m = re.exec(n.html))) out.push({ k: 'Not', t: StudyKit.plain(m[1]), s: n.title, h: '#/notlar/' + n.id, w: -1 });
      });
      out.push({ k: 'Özet', t: 'Hızlı özet', s: StudyKit.plain(window.PYGUIDE || ''), h: '#/ozet', w: -1 });
      out.push({ k: 'İngilizce', t: 'SoFL 1115 İngilizce bölümü', s: 'Testler, kelimeler, rehber', h: '../' });
      return out;
    }
  });
})();
