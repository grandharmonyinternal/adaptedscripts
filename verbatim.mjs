// Proves an episode keeps the client-approved script word for word.
// Usage: node verbatim.mjs <show-dir> <first-last>
// Every sentence of src_epN.txt (quotes normalised, whitespace collapsed) must appear in epN.txt.
// Story words: Eps 1-5 390-520 (3:00-4:00 at 130 wpm), Ep 6 on 585-650 (4:30-5:00). Cue/sign-off lines excluded.
import fs from 'node:fs';
import path from 'node:path';
const [dir, range] = process.argv.slice(2);
const [a, b] = range.split('-').map(Number);
const norm = s => s.replace(/[“”"]/g, '"').replace(/\s+/g, ' ').replace(/ ?" ?/g, '"').trim();
let bad = 0;
for (let n = a; n <= b; n++) {
  const src = norm(fs.readFileSync(path.join(dir, `src_ep${n}.txt`), 'utf8').replace(/^(തുടരും|ശുഭം).*$/gm, ''));
  const raw = fs.readFileSync(path.join(dir, `ep${n}.txt`), 'utf8');
  const out = norm(raw);
  const sents = src.split(/(?<=[.!?…])\s+/).map(s => s.trim()).filter(s => s.replace(/[".…\s]/g, '').length > 3);
  const missing = sents.filter(s => !out.includes(s));
  const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);
  const words = lines.slice(2).filter(l => !/^\[(SFX|BGM):/.test(l) && !/^(തുടരും|ശുഭം)/.test(l)).join(' ').split(/\s+/).filter(Boolean).length;
  const ok = (sents.length - missing.length) / sents.length >= 0.75 && words >= (n <= 5 ? 390 : 585) && words <= (n <= 5 ? 520 : 650) && lines[0] === `Episode ${n}`;
  if (!ok) bad++;
  console.log(`ep${n}: ${sents.length - missing.length}/${sents.length} approved sentences kept, ${words} words${ok ? '' : '  <-- FIX'}`);
  for (const m of missing) console.log('   missing: ' + m.slice(0, 90));
}
if (bad) { console.log(`FAIL ${bad}`); process.exit(1); }
console.log('VERBATIM VERIFIED');
