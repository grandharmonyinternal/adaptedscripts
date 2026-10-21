# Script versions (Kuku Malayalam)

| Show | Version | Folder | What changed |
|---|---|---|---|
| Paavam Paavam Kodeeswaran | v2 | `ppk-v2/` | Earlier draft (the native reader's first notes were on this text) |
| Paavam Paavam Kodeeswaran | v3 | `ppk-v3/` | Storytelling rewrite, Eps 1-5; reader fixes for Eps 2-4 already in |
| Paavam Paavam Kodeeswaran | **v4** | `ppk-v4/` | v3 + all native reader notes on Eps 2-5 (Oct 2026) + short in-scene beats to keep 585-650 words |
| Billionaire Boyfriend | v3 | `bb-v3/` | Storytelling rewrite, Eps 1-5 |
| Billionaire Boyfriend | **v4** | `bb-v4/` | v3 + the same reader rules applied: over-explained scene description and unneeded details cut, repeated names and redundant speaker tags fixed, untagged quotes given a speaker, "പല്ലവി വിക്കി" (read as Vicky) reworded, plus short in-scene beats to keep 585-650 words |
| Billionaire Boyfriend | **v4.1** | `bb-v4/` (updated in place) | v4 + native reader note on Ep 5: cut "നീണ്ട ഒറ്റ മുടിപ്പിന്നൽ നടക്കുമ്പോൾ പിന്നിൽ ആടി" from the last paragraph; reader OK'd the rest of BB v4 |

Rules: `STYLE.md`. Checks: `node verbatim.mjs <folder> 1-5` and `node <folder>/verify.mjs`.
Client copy: `python3 <folder>/build_docx.py 1 5 <SHOW>_<version>_Eps1-5.docx`.
BB v4.1: native reader has read all of Eps 1-5 (Oct 2026). PPK v4: confirm the reader has read the new beats.

## v5: client voice, lengthened (Eps 1-10)
Length: Eps 1-5 are 3:00-4:00 (390-520 words), Ep 6 onwards 4:30-5:00 (585-650 words).
| Show | Folder | What changed |
|---|---|---|
| Paavam Paavam Kodeeswaran | `ppk-v5/` | Rebuilt from the client-approved script in its own narration voice (see `VOICE.md`), 585-650 words, no tag-after-quote or description padding. Keeps the reader's fix for "തിരിച്ചറിവുകൾ നല്ലതാ…" (Ep 4) |
| Billionaire Boyfriend | `bb-v5/` | Same. `src_epN.txt` copied from the client-approved Google Doc (29 Sep 2026). Keeps the reader's v4.1 note (no plait line, Ep 5) and "അവളുടെ വാക്കുകൾ മുറിഞ്ഞു" for "പല്ലവി വിക്കി" (Ep 3) |

## v5.1 (Eps 1-10): native reader notes on v5 applied
Reader notes on BB Ep 1 and PPK Ep 1 turned into rules 1-7 in `VOICE.md`, applied to all Eps 1-10 of both shows.
Every episode ends on the client's own last line. `lint_voice.py <folder> 1 10` catches the flagged patterns.
Docs: `out/PPK_v5.1_Eps1-10.docx`, `out/BB_v5.1_Eps1-10.docx`.

## v5.2 (Eps 1-10): reader notes on BB Eps 2-3, PPK Eps 4-6, speaker clarity
Rules 8-12 in `VOICE.md` (backstory hung on client lines, echo reactions, grooming asides, smile lines,
speaker set up before every ambiguous line) applied to all Eps 1-10 of both shows.
Docs: `out/PPK_v5.2_Eps1-10.docx`, `out/BB_v5.2_Eps1-10.docx` (v5 and v5.1 docs removed: review only v5.2).

## v5.3 (Eps 1-10): reader notes on PPK Eps 2-3
Rule 13 (no added narrator speculation/commentary questions) applied to both shows.
Docs: `out/PPK_v5.3_Eps1-10.docx`, `out/BB_v5.3_Eps1-10.docx` (older docs removed: review only v5.3).

## BB v5.4 (Eps 1-10): reader-cleared
Reader: Eps 1-3 and 7-10 fine; notes on Eps 4-6 applied (rules 14-16). Doc: `out/BB_v5.4_Eps1-10.docx`.
PPK stays at v5.3 (reader has reviewed Eps 1-6).

## PPK v5.4 (Eps 1-10): reader-cleared
Reader: only change was PPK Ep 7 dialogue placement (rule 17); rest good. Doc: `out/PPK_v5.4_Eps1-10.docx`.
Both shows Eps 1-10 are now reader-cleared at v5.4.

## BB v5.5: reader note on Ep 10 (repeated "പോയി"), rule 18. Doc: `out/BB_v5.5_Eps1-10.docx`.

## PPK v5.5: reader note on Ep 2 (phrasing). Doc: `out/PPK_v5.5_Eps1-10.docx`.

## BB v6 sample (Ep 1): natural spoken dialogue
After Neethu's notes (dialogue reads "like reading from paper", incomplete sentences, village family's Malayalam
matches no dialect; the same issues exist in the client's original short script), v6 keeps the client's story beats
and narrator but rewrites dialogue as complete spoken Malayalam: Meera and Achan in Palakkad speech (client Ep 35:
Kollengode, near Palakkad), Mumbai characters in city Malayalam. `verbatim.mjs` no longer applies to v6 dialogue.
Doc: `out/BB_v6_sample_Ep1.docx`.

## v6 (Eps 1-5, both shows): natural spoken dialogue per Neethu-approved BB Ep 1. Docs: `out/PPK_v6_Eps1-5.docx`, `out/BB_v6_Eps1-5.docx`.

## v6.1 (Eps 1-5): Neethu found no issues; Vaishnav notes applied (BB Eps 1,3,4; PPK Eps 2,3), rules 19-21. Docs: `out/PPK_v6.1_Eps1-5.docx`, `out/BB_v6.1_Eps1-5.docx`.

## v7 (Eps 1-10, both shows): blend of v5.5 narration flow (Vaishnav) and v6 natural dialogue (Neethu), light dialect. Docs: `out/PPK_v7_Eps1-10.docx`, `out/BB_v7_Eps1-10.docx`.

## BB v7.1: reader notes on Eps 3-4 (cut commentary line, "5 star restaurant"). Doc: `out/BB_v7.1_Eps1-10.docx`.
