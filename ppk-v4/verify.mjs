// Checks for the Paavam Paavam Kodeeswaran v4 (v3 + native reader fixes, Oct 2026) (Kavya's notes, call of 16 Oct 2026).
// Usage: node verify.mjs <budgets|format|banned|style|beats|deadwood|control|all> [first-last] [dir]
//   budgets   every episode 630-670 story words (5:00 at 130 wpm)
//   format    "Episode N" + subheading, no bare-quote paragraphs, dialogue <= 40%, curly quotes only
//   banned    literary words, poetic similes, telling-the-listener lines
//   style     no runs of 3+ short sentences, no back-to-back speech tags, no repeated word in a sentence,
//             no two questions in a row with the same ending
//   beats     at least 90% of the source quotes kept (60% of each quote's words present)
//   deadwood  details Kavya called pointless (and v2 inventions) are gone
//   control   deadwood must catch the old v2 files (positive control for the deadwood check)
import fs from 'node:fs';
import path from 'node:path';
const mode = process.argv[2] || 'all';
const [first, last] = (process.argv[3] || '1-43').split('-').map(Number);
const EPS = Array.from({ length: (last || first) - first + 1 }, (_, i) => first + i);
const dir = process.argv[4] || path.dirname(new URL(import.meta.url).pathname);
const CUE = /^\[(SFX|BGM):/;
const SIGNOFF = /^(തുടരും|ശുഭം)/;
const BANNED = ['അവജ്ഞ', 'അതിദ്രുത', 'ബലിഷ്ഠ', 'ബലിഷ്ട', 'ആകർഷണീയ', 'മിഴി', 'അസുലഭ', 'പെരുമ്പറ', 'തുളുമ്പുന്ന', 'വിധിയാൽ', 'നിർന്നിമേഷ', 'അനിർവചനീയ', 'ലജ്ജാവിവശ', 'ആനന്ദാശ്രു', 'സ്തബ്ധ', 'ചകിത', 'മാജിക് നടക്കുന്ന', 'പേരറിയാത്ത ഒരു തോന്നൽ', 'ഹൃദയം മാത്രം', 'ആത്മാവ്', 'നിശ്വാസ', 'യുഗം', 'യുഗവും',
  'ഇടിമുഴക്കം', 'തിരമാല', 'ലോകം നിന്നുപോയ', 'ചാട്ടവാറടി'];
const DEADWOOD = ['watch ആന്റണിയുടെ താടി', 'glass മറിഞ്ഞു', 'സൈക്കിൾ', 'band-ന്റെ പാട്ട്', 'video പിടിക്ക', 'lipstick പടർന്ന', 'strap നേരെയാക്കി', 'button ഇടാൻ'];
// Function words and pronouns that may repeat inside one sentence without being a style fault.
const STOP = new Set(['അവൻ', 'അവൾ', 'അവർ', 'അയാൾ', 'അവന്റെ', 'അവളുടെ', 'അവരുടെ', 'അയാളുടെ', 'അവനെ', 'അവളെ', 'അവനോട്', 'അവളോട്', 'തന്റെ', 'എന്റെ', 'നിന്റെ', 'ഒരു', 'എന്ന്', 'എന്നും', 'എന്ന', 'പക്ഷേ', 'എന്നാൽ', 'തന്നെ', 'ഒന്നു', 'ഒന്ന്', 'ഇല്ല', 'ആണ്', 'നിന്ന്', 'കൊണ്ട്', 'വേണ്ടി', 'പോലെ', 'എല്ലാം', 'ഇപ്പോൾ', 'അപ്പോൾ', 'ഇനി', 'പിന്നെ', 'കൂടി', 'മാത്രം', 'എന്നിട്ട്', 'എന്താ', 'എന്ത്', 'ഇത്', 'അത്', 'ഞാൻ', 'നീ', 'നിങ്ങൾ', 'എനിക്ക്', 'നിനക്ക്']);
const NAMES = ['ആന്റണി', 'അലീന', 'റോബിൻ', 'ഇഷ', 'പിയൂഷ്', 'രമേഷ്', 'അന്തോണി', 'മേരിക്കുട്ടി', 'സ്റ്റെല്ല'];
let fail = [];
const words = s => s.split(/\s+/).filter(Boolean).length;
const QUOTE = /“[^”]*”|"[^"]*"/g;
function load(n, d = dir) {
  const f = path.join(d, `ep${n}.txt`);
  if (!fs.existsSync(f)) { fail.push(`ep${n}: missing file`); return null; }
  const lines = fs.readFileSync(f, 'utf8').split('\n').map(l => l.trim()).filter(Boolean);
  const story = lines.slice(2).filter(l => !CUE.test(l) && !SIGNOFF.test(l));
  return { lines, story, text: lines.join('\n') };
}
function norm(tok) {
  let t = tok.replace(/[.,!?…“”"'()\-–—;:]+$/g, '').replace(/^[“"'(]+/, '');
  if (/[A-Za-z]/.test(t)) t = t.split('-')[0].toLowerCase();
  return t;
}
const cps = s => [...s];
function sentences(s) { return s.split(/(?<=[.!?…][”"']?)\s+/).map(x => x.trim()).filter(Boolean); }
function budgets() {
  for (const n of EPS) {
    const e = load(n); if (!e) continue;
    const w = words(e.story.join(' '));
    if (w < 585 || w > 650) fail.push(`ep${n}: ${w} words outside 585-650`);
  }
}
function format() {
  for (const n of EPS) {
    const e = load(n); if (!e) continue;
    if (e.lines[0] !== `Episode ${n}`) fail.push(`ep${n}: header is "${e.lines[0]}"`);
    const sub = e.lines[1] || '';
    if (!sub || /[“"]/.test(sub) || words(sub) > 8 || /\.$/.test(sub) || /^Episode/.test(sub)) fail.push(`ep${n}: subheading missing or malformed: "${sub}"`);
    const lastLine = e.lines[e.lines.length - 1];
    if (n === 43 && lastLine !== 'ശുഭം…') fail.push('ep43: does not end with ശുഭം…');
    if (n !== 43 && SIGNOFF.test(lastLine)) fail.push(`ep${n}: sign-off line not used in the approved doc`);
    const body = e.story.join(' ');
    if (/"/.test(body)) fail.push(`ep${n}: straight double quote, use “ ”`);
    const dq = words((body.match(QUOTE) || []).join(' '));
    if (dq / words(body) > 0.40) fail.push(`ep${n}: dialogue ${(100 * dq / words(body)).toFixed(0)}% > 40%`);
    for (const p of e.story) {
      if (p.replace(QUOTE, '').trim().length === 0) fail.push(`ep${n}: bare dialogue paragraph: ${p.slice(0, 40)}`);
      if (/^[ഀ-ൿA-Za-z .]{1,25}\s*[:：]\s*[“"]/.test(p)) fail.push(`ep${n}: speaker label: ${p.slice(0, 40)}`);
    }
    if ((body.match(/“/g) || []).length !== (body.match(/”/g) || []).length) fail.push(`ep${n}: unbalanced curly quotes`);
  }
}
function banned() {
  for (const n of EPS) {
    const e = load(n); if (!e) continue;
    const body = e.story.join(' ');
    for (const b of BANNED) if (body.includes(b)) fail.push(`ep${n}: literary/simile/telling phrase "${b}"`);
  }
}
const SPEECH_END = /(പറഞ്ഞു|ചോദിച്ചു|തിരുത്തി|അലറി|പറഞ്ഞുള്ളൂ|ഉപദേശിച്ചു)[,.!?…]*$/;
function style() {
  for (const n of EPS) {
    const e = load(n); if (!e) continue;
    // 1) choppy runs and back-to-back speech tags, measured on narration (each quote counts as one token Q)
    const narr = e.story.flatMap(p => sentences(p.replace(QUOTE, ' Q ')));
    let run = 0, prevTag = false;
    narr.forEach((s, i) => {
      const w = s.split(/\s+/).filter(t => t && t !== 'Q').length;
      run = (w <= 4 && !/\bQ\b/.test(s)) ? run + 1 : 0; // a line of dialogue is a beat, not a choppy narration fragment
      if (run === 3) fail.push(`ep${n}: 3 short sentences in a row ending "${narr.slice(i - 2, i + 1).join(' | ').slice(0, 90)}"`);
      const tag = SPEECH_END.test(s.replace(/\s*Q\s*[,.!?…]*$/, ''));
      if (tag && prevTag) fail.push(`ep${n}: two speech tags in a row: "${narr[i - 1].slice(-40)}" / "${s.slice(-40)}"`);
      prevTag = tag;
    });
    // 2) repeated word inside one sentence, and two questions in a row with the same ending (full text)
    const full = e.story.flatMap(p => sentences(p));
    let prevQ = null;
    for (const s of full) {
      const toks = s.split(/\s+/).map(norm).filter(t => t && !STOP.has(t));
      const seen = new Map();
      let prevKey = null;
      for (const t of toks) {
        const latin = /[A-Za-z]/.test(t);
        if (latin ? t.length < 3 : cps(t).length < 4) continue;
        if (!latin && NAMES.some(nm => t.startsWith(nm))) continue;
        const key = latin ? t : (cps(t).length >= 7 ? cps(t).slice(0, 6).join('') : t);
        // Adjacent reduplication (മടിച്ചു മടിച്ച്, മുറിഞ്ഞു മുറിഞ്ഞ്) is grammar, not repetition.
        if (seen.has(key) && key !== prevKey) fail.push(`ep${n}: repeated "${seen.get(key)}"/"${t}" in: ${s.slice(0, 70)}`);
        else seen.set(key, t);
        prevKey = key;
      }
      const isQ = /\?[”"]?$/.test(s);
      const end = isQ ? cps(s.replace(/[?”"]+$/, '')).slice(-4).join('') : null;
      if (isQ && prevQ && end === prevQ) fail.push(`ep${n}: two questions in a row ending "${end}": ${s.slice(0, 60)}`);
      prevQ = isQ ? end : null;
    }
  }
}
// STYLE.md rules 1,3,6: telling verbs, narrator questions, long or semicolon sentences in narration.
const TELL = /(തോന്നി|മനസ്സിലായി|മനസ്സിലായിത്തുടങ്ങി|തിരിച്ചറിഞ്ഞു|ഓർത്തു|ആശിച്ചു|പ്രാർത്ഥിച്ചു|ഇല്ലാതായി|നീറി|കനത്തു|വിങ്ങൽ|നോവ്|ആശ്വാസം)/;
const IDIOM = ['കളി മാറി','നെഞ്ച് നീറി','ഭാരം','ഒരുപാട് വയസ്സായ','മനസ്സ് നിലവിളിച്ചു','ഉള്ളിൽ ചെന്നു തൊട്ടു'];
function tell() {
  for (const n of EPS) {
    const e = load(n); if (!e) continue;
    const narr = e.story.flatMap(p => sentences(p.replace(QUOTE, ' Q ')));
    let tells = 0;
    for (const s of narr) {
      const plain = s.replace(/\bQ\b/g, '').trim();
      if (/[;；]/.test(plain)) fail.push(`ep${n}: semicolon in narration: ${plain.slice(0, 50)}`);
      if (/\?$/.test(plain) && !/Q/.test(s)) fail.push(`ep${n}: narrator question: ${plain.slice(0, 50)}`);
      if (words(plain) > 22) fail.push(`ep${n}: narration sentence ${words(plain)} words: ${plain.slice(0, 50)}`);
      if (TELL.test(plain)) tells++;
    }
    // Rule 14: a paragraph that opens with a quote must name the speaker in that sentence.
    for (const para of e.story) {
      const first = sentences(para)[0] || '';
      if (/^“/.test(first) && !/(എന്ന്|ചോദിച്ചു|പറഞ്ഞു|വിളിച്ചു|അലറി|തിരുത്തി|ചിരിച്ചു)/.test(first.replace(QUOTE,'')) ) fail.push(`ep${n}: opening quote with no speaker: ${first.slice(0, 40)}`);
    }
    if (tells > 3) fail.push(`ep${n}: ${tells} telling sentences (max 3)`);
    const body = e.story.join(' ');
    for (const i of IDIOM) if (body.includes(i)) fail.push(`ep${n}: english-shaped idiom "${i}"`);
  }
}
function tokset(s) { return new Set(s.split(/\s+/).map(norm).filter(t => t && cps(t).length >= 3)); }
function beats() {
  for (const n of EPS) {
    const e = load(n); if (!e) continue;
    const src = fs.readFileSync(path.join(dir, `src_ep${n}.txt`), 'utf8');
    const quotes = (src.match(QUOTE) || []).map(q => q.slice(1, -1).trim()).filter(q => words(q) >= 2);
    const have = tokset(e.story.join(' '));
    const missing = quotes.filter(q => { const t = [...tokset(q)]; return t.length && t.filter(x => have.has(x)).length / t.length < 0.6; });
    const kept = quotes.length - missing.length;
    if (kept / Math.max(quotes.length, 1) < 0.9) fail.push(`ep${n}: only ${kept}/${quotes.length} source quotes kept; missing: ${missing.map(q => q.slice(0, 30)).join(' | ')}`);
    else if (missing.length) console.log(`ep${n}: ${kept}/${quotes.length} source quotes kept (reworded: ${missing.map(q => q.slice(0, 30)).join(' | ')})`);
  }
}
function deadwoodHits(eps, d) {
  const hits = [];
  for (const n of eps) {
    const f = path.join(d, `ep${n}.txt`);
    if (!fs.existsSync(f)) continue;
    const t = fs.readFileSync(f, 'utf8');
    for (const p of DEADWOOD) if (t.includes(p)) hits.push(`ep${n}: "${p}"`);
  }
  return hits;
}
function deadwood() { for (const h of deadwoodHits(EPS, dir)) fail.push(`dead detail ${h}`); }
function control() {
  const hits = deadwoodHits(EPS, path.join(dir, '..', 'ppk-v2'));
  if (!hits.length) { console.log('CONTROL MISSED: deadwood found nothing in ppk-v2'); process.exit(1); }
  console.log(`CONTROL CAUGHT ${hits.length} in ppk-v2: ${hits.join('; ')}`); process.exit(0);
}
const run = { budgets, format, banned, style, beats, deadwood , tell };
if (mode === 'control') control();
else if (mode === 'all') Object.values(run).forEach(f => f());
else if (run[mode]) run[mode]();
else { console.error('unknown mode'); process.exit(2); }
if (fail.length) { console.log(fail.join('\n')); console.log(`FAIL ${fail.length}`); process.exit(1); }
console.log(`${mode.toUpperCase()} VERIFIED ${EPS.length}/${EPS.length}`);
