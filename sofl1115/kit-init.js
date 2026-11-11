(function () {
  StudyKit.init({
    speak: [
      { sel: 'td.en', lang: 'en-GB', text: function (el) { return el.firstChild ? el.firstChild.textContent : el.textContent; } },
      { sel: '#cfront', lang: 'en-GB', text: function (el) { return /[ğışçöüİ]/.test(el.textContent) ? '' : el.textContent; } }
    ],
    index: function () {
      var out = [];
      (window.EXAMS || []).forEach(function (e) {
        out.push({ k: 'Test', t: e.title, s: e.desc, h: '#/test/' + e.id, w: -2 });
        e.listening.sections.forEach(function (s) {
          s.questions.forEach(function (q) { out.push({ k: 'Listening', t: q.q, s: e.title + ' · ' + q.opts.join(' · '), h: '#/test/' + e.id }); });
        });
        e.reading.forEach(function (r) {
          out.push({ k: 'Reading', t: r.title, s: e.title + ' · ' + r.body.join(' '), h: '#/test/' + e.id, w: -1 });
          r.questions.forEach(function (q) { out.push({ k: 'Soru', t: q.q, s: e.title + ' · ' + q.opts.join(' · '), h: '#/test/' + e.id }); });
        });
        if (e.writing) out.push({ k: 'Writing', t: e.title + ': ' + e.writing.name, s: e.writing.model, h: '#/test/' + e.id });
      });
      (window.VOCAB || []).forEach(function (g) {
        g.items.forEach(function (it) { out.push({ k: it[2] === 'p' ? 'Kalıp' : 'Kelime', t: it[0], s: it[1], h: '#/kelimeler/' + encodeURIComponent(it[0]) }); });
      });
      out.push({ k: 'Rehber', t: 'Sınav rehberi', s: StudyKit.plain(window.GUIDE || ''), h: '#/rehber', w: -1 });
      out.push({ k: 'Python', t: 'MBP1104 Python bölümü', s: 'Python vize çalışma, ders notları, hızlı özet', h: 'python/' });
      return out;
    }
  });
})();
