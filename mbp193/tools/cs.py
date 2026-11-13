"""C# kodunu mono ile Türkçe kültürde (tr-TR) çalıştırır. Gövde (Main içi) ya da tam program verilebilir."""
import subprocess, tempfile, os, shutil, textwrap
_cache = {}
HEAD = 'using System;\nusing System.Threading;\nclass Program {\n    static void Main(string[] args) {\n        System.Threading.Thread.CurrentThread.CurrentCulture = new System.Globalization.CultureInfo("tr-TR");\n'
def wrap(body):
    if 'static void Main' in body:
        return body.replace('static void Main(string[] args)\n    {', 'static void Main(string[] args)\n    {\n        System.Threading.Thread.CurrentThread.CurrentCulture = new System.Globalization.CultureInfo("tr-TR");', 1) if 'using System;' in body else 'using System;\n' + body
    return HEAD + textwrap.indent(body, '        ') + '\n    }\n}\n'
def run(body, inp=None):
    src = wrap(body)
    key = (src, tuple(inp or ()))
    if key in _cache: return _cache[key]
    d = tempfile.mkdtemp(prefix='cs193')
    try:
        open(os.path.join(d, 'p.cs'), 'w').write(src)
        c = subprocess.run(['mcs', '-nowarn:219,168', '-out:' + os.path.join(d, 'p.exe'), os.path.join(d, 'p.cs')], capture_output=True, text=True)
        if c.returncode:
            line = [l for l in (c.stdout + c.stderr).splitlines() if 'error' in l]
            r = ('DERLEME', line[0].split('error')[1] if line else '?')
        else:
            x = subprocess.run(['mono', os.path.join(d, 'p.exe')], input='\n'.join(inp or []) + '\n', capture_output=True, text=True, timeout=20)
            r = ('OK', x.stdout.replace('\r', '').rstrip('\n')) if x.returncode == 0 else ('HATA', (x.stderr.strip().splitlines() or ['?'])[0])
    finally:
        shutil.rmtree(d, ignore_errors=True)
    _cache[key] = r
    return r
if __name__ == '__main__':
    print(run('Console.WriteLine(8 + 2 / 4 + 1);\nConsole.WriteLine(7.5);\ndouble d = Convert.ToDouble("2.5");\nConsole.WriteLine(d);\nfloat f = 5.9f; Console.WriteLine(f);'))
    print(run('int n = Convert.ToInt32(Console.ReadLine());\nConsole.WriteLine(n * 2);', ['21']))
    print(run('float sayi = 5,9;'))
