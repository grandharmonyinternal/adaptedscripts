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
