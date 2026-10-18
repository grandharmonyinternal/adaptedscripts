// Checks for the Paavam Paavam Kodeeswaran v2 rewrite. Usage: node verify.mjs <budgets|format|banned|all> [dir]
import fs from 'node:fs';
import path from 'node:path';
const mode = process.argv[2] || 'all';
const dir = process.argv[3] || path.dirname(new URL(import.meta.url).pathname);
const CUE = /^\[(SFX|BGM):/;
const EPS = Array.from({ length: 43 }, (_, i) => i + 1);
const BANNED = ['അവജ്ഞ', 'അതിദ്രുത', 'ബലിഷ്ഠ', 'ബലിഷ്ട', 'ആകർഷണീയ', 'മിഴി', 'അസുലഭ', 'പെരുമ്പറ', 'തുളുമ്പുന്ന', 'വിധിയാൽ', 'നിർന്നിമേഷ', 'അനിർവചനീയ', 'ലജ്ജാവിവശ', 'ആനന്ദാശ്രു', 'സ്തബ്ധ', 'ചകിത', 'മാജിക് നടക്കുന്ന', 'പേരറിയാത്ത ഒരു തോന്നൽ', 'ഹൃദയം മാത്രം', 'ആത്മാവ്', 'നിശ്വാസ', 'യുഗം', 'യുഗവും'];
let fail = [];
function load(n) {
  const f = path.join(dir, `ep${n}.txt`);
  if (!fs.existsSync(f)) { fail.push(`ep${n}: missing file`); return null; }
  const lines = fs.readFileSync(f, 'utf8').split('\n').map(l => l.trim()).filter(Boolean);
  const story = lines.slice(1).filter(l => !CUE.test(l) && !/^(തുടരും|ശുഭം)/.test(l));
  return { lines, story, cues: lines.filter(l => CUE.test(l)) };
}
const words = s => s.split(/\s+/).filter(Boolean).length;
function budgets() {
  for (const n of EPS) {
    const e = load(n); if (!e) continue;
    const w = words(e.story.join(' '));
    const [lo, hi] = n <= 5 ? [500, 545] : [760, 795];
    if (w < lo || w > hi) fail.push(`ep${n}: ${w} words outside ${lo}-${hi}`);
  }
}
function format() {
  for (const n of EPS) {
    const e = load(n); if (!e) continue;
    if (e.lines[0] !== `Episode ${n}`) fail.push(`ep${n}: header is "${e.lines[0]}"`);
    const last = e.lines[e.lines.length - 1];
    if (n === 43 && last !== 'ശുഭം…') fail.push('ep43: does not end with ശുഭം…');
    if (n !== 43 && /^(തുടരും|ശുഭം)/.test(last)) fail.push(`ep${n}: sign-off line not used in the approved doc`);
    const body = e.story.join(' ');
    const quotes = body.match(/“[^”]*”|"[^"]*"/g) || [];
    const dq = words(quotes.join(' ')), all = words(body);
    if (dq / all > 0.40) fail.push(`ep${n}: dialogue ${(100 * dq / all).toFixed(0)}% > 40%`);
    for (const p of e.story) {
      const stripped = p.replace(/“[^”]*”|"[^"]*"/g, '').trim();
      if (stripped.length === 0) fail.push(`ep${n}: bare dialogue paragraph: ${p.slice(0, 40)}`);
      if (/^[ഀ-ൿA-Za-z .]{1,25}\s*[:：]\s*[“"]/.test(p)) fail.push(`ep${n}: speaker label: ${p.slice(0, 40)}`);
    }
    if ((body.match(/“/g) || []).length !== (body.match(/”/g) || []).length) fail.push(`ep${n}: unbalanced curly quotes`);
  }
}
function banned() {
  for (const n of EPS) {
    const e = load(n); if (!e) continue;
    const body = e.story.join(' ');
    for (const b of BANNED) if (body.includes(b)) fail.push(`ep${n}: literary/abstract phrase "${b}"`);
  }
}
const run = { budgets, format, banned };
if (mode === 'all') Object.values(run).forEach(f => f()); else if (run[mode]) run[mode](); else { console.error('unknown mode'); process.exit(2); }
if (fail.length) { console.log(fail.join('\n')); console.log(`FAIL ${fail.length}`); process.exit(1); }
console.log(`${mode.toUpperCase()} VERIFIED 43/43`);
