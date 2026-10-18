import fs from 'node:fs';
for (const n of process.argv.slice(2)) {
  const L = fs.readFileSync(`ep${n}.txt`,'utf8').split('\n').map(l=>l.trim()).filter(Boolean).slice(1).filter(l=>!/^(തുടരും|ശുഭം)/.test(l));
  const b = L.join(' '); const w = s=>s.split(/\s+/).filter(Boolean).length;
  const q = (b.match(/“[^”]*”|"[^"]*"/g)||[]).join(' ');
  console.log(`ep${n}: ${w(b)} words, dialogue ${(100*w(q)/w(b)).toFixed(0)}%`);
}
