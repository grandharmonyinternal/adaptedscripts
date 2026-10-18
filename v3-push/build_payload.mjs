// Builds payload.json for the v3 push to Script Writer: for PPK and BB Eps 1-3, the episode
// file's non-empty lines in order ("Episode N", subheading, story, cues, sign-off) plus the
// SHA-256 of those lines joined with "\n", so the page can prove what it saved.
// Usage: node build_payload.mjs            -> writes payload.json
//        node build_payload.mjs --check    -> re-reads the episode files and compares with payload.json
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const here = path.dirname(new URL(import.meta.url).pathname);
const SHOWS = {
  PPK: { dir: '../ppk-v3', projectId: 'prj_b19b41e6-6b42-487d-866b-4d66975f8f24' },
  BB: { dir: '../bb-v3', projectId: 'prj_eecbed21-cd72-4c5d-95ca-4c81fef8b506' },
};
const EPS = [1, 2, 3, 4, 5];
const sha = s => crypto.createHash('sha256').update(s, 'utf8').digest('hex');
function build() {
  const out = {};
  for (const [show, cfg] of Object.entries(SHOWS)) {
    out[show] = { projectId: cfg.projectId, episodes: {} };
    for (const n of EPS) {
      const lines = fs.readFileSync(path.join(here, cfg.dir, `ep${n}.txt`), 'utf8').split('\n').map(l => l.trim()).filter(Boolean);
      if (lines[0] !== `Episode ${n}`) throw new Error(`${show} ep${n}: header is ${lines[0]}`);
      out[show].episodes[n] = { lines, sha256: sha(lines.join('\n')) };
    }
  }
  return out;
}
const fresh = build();
if (process.argv.includes('--check')) {
  const saved = JSON.parse(fs.readFileSync(path.join(here, 'payload.json'), 'utf8'));
  const bad = [];
  for (const show of Object.keys(SHOWS)) for (const n of EPS) {
    const a = fresh[show].episodes[n], b = saved[show]?.episodes?.[n];
    if (!b || a.sha256 !== b.sha256 || JSON.stringify(a.lines) !== JSON.stringify(b.lines)) bad.push(`${show} ep${n}`);
    if (sha(b.lines.join('\n')) !== b.sha256) bad.push(`${show} ep${n}: stored hash wrong`);
  }
  if (bad.length) { console.log('MISMATCH ' + bad.join(', ')); process.exit(1); }
  console.log(`PAYLOAD VERIFIED ${Object.keys(SHOWS).length * EPS.length}/10`);
} else {
  fs.writeFileSync(path.join(here, 'payload.json'), JSON.stringify(fresh, null, 1));
  for (const show of Object.keys(SHOWS)) for (const n of EPS) console.log(show, n, fresh[show].episodes[n].lines.length, 'lines', fresh[show].episodes[n].sha256.slice(0, 12));
}
