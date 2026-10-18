# Gates: Paavam Paavam Kodeeswaran Malayalam v2, description and duration

OWNS: scripts/kuku-malayalam/ppk-v2/**

Scope: all 43 episodes rewritten from the latest approved Google Doc (10FsLtb9…) with reference-level description in simple Malayalam, eps 1-5 about 4:00 and eps 6-43 about 6:00 at 130 wpm, beats and cliffhangers kept, pushed to Script Writer (with a snapshot first), left in Script Writer only (no Drive upload).

- [x] G0: this ledger states outcomes that can fail
  CHECK: node /Users/apple/.claude/skills/unlazy/scripts/gate-lint.mjs GATES.md
  EXPECT: LINT OK
  EVIDENCE: automatic-evidence=v1; definition-sha256=a9deeba8789171887021264e2a4a78b167667e2ef1f7c8598145fdf941bf51e5; exit=0; EXPECT=matched; output-sha256=9aa67fcd394f47149de29cd82aa7a000a1ea7b431ec2306a79dd52c4d541c8d0; output-bytes=611; shell=/bin/sh; cwd=/Users/apple/Desktop/Claude/scripts/kuku-malayalam/ppk-v2; path=92a705a82f40/23 entries

- [x] G1: every episode file meets its word budget (eps 1-5: 500-545, eps 6-43: 760-795)
  CHECK: node verify.mjs budgets
  EXPECT: BUDGETS VERIFIED 43/43
  EVIDENCE: automatic-evidence=v1; definition-sha256=96dcb030940d68d54821d62c598c51fc89259487448a3290e71a152707b16d0d; exit=0; EXPECT=matched; output-sha256=fc9dde6c11541deef9e8f2a0c8578fc22f3c94b731634e4e5446d36721a6634b; output-bytes=23; shell=/bin/sh; cwd=/Users/apple/Desktop/Claude/scripts/kuku-malayalam/ppk-v2; path=92a705a82f40/23 entries

- [x] G2: every episode keeps the single-narration format (header, sign-off, no bare dialogue paragraph, no speaker labels, dialogue at most 40 percent, balanced quotes)
  CHECK: node verify.mjs format
  EXPECT: FORMAT VERIFIED 43/43
  EVIDENCE: automatic-evidence=v1; definition-sha256=b1ab4d2f9853473dd6c4e2ed8e967c84c8c4d561addd6007fd38c9f533be637d; exit=0; EXPECT=matched; output-sha256=eac4dfb3fb490356903244d9053cefde98bbf0ab3ae43d073b84aa44fd776949; output-bytes=22; shell=/bin/sh; cwd=/Users/apple/Desktop/Claude/scripts/kuku-malayalam/ppk-v2; path=92a705a82f40/23 entries

- [x] G3: no episode uses the literary or abstract phrases the client marked against (fixture with one such word fails the same check)
  CHECK: node verify.mjs banned
  EXPECT: BANNED VERIFIED 43/43
  EVIDENCE: automatic-evidence=v1; definition-sha256=f3e4bc5bb9b042c138b98844e63532e1f1aa8bd8fec79f083468f031fa2ee81a; exit=0; EXPECT=matched; output-sha256=28716806ae72faa3d467a79704644084f77329645eb8db28993ef4faf3bbb7f7; output-bytes=22; shell=/bin/sh; cwd=/Users/apple/Desktop/Claude/scripts/kuku-malayalam/ppk-v2; path=92a705a82f40/23 entries

- [x] G4: every scene, beat and cliffhanger of the approved doc is still present in each episode (reviewed against src_epN.txt, quote coverage measured)
  EVIDENCE: 15 Oct 2026: each episode rewritten beat by beat from src_epN.txt (latest approved doc), same scene order and episode endings, Ep43 ends ശുഭം…; quote coverage measured: 320/327 source quotes kept (97.9%), 97.7% of quote words present, the 7 misses are short lines moved into narration.

- [x] G5: every named character gets a visual description at first appearance and every scene opens with its setting (characters.md continuity sheet, reviewed episode by episode)
  EVIDENCE: 15 Oct 2026: first-appearance visuals per characters.md: Aleena + Antony ep1, Ramesh + Piyush ep1, Robin + Isha ep2, register officer ep6, Marykutty ep7, airport officer ep9, grandma ep10, Stella ep13, resort manager ep28, Cletus ep31, inspector ep33, Rose Palace manager ep35, auction manager ep40, Frederick ep41; every scene opens with place/time.

- [x] G6: Script Writer holds the new text for all 43 episodes (revision checked before each write, snapshot saved, in-page re-read equals the local file)
  EVIDENCE: 15 Oct 2026: for all 43 scripts: GET current revision, manual-snapshot version saved (all 200), PATCH with expectedRevision (all 200); in-page re-read 43/43 block texts and plainText equal the local files (ep1 r9, ep43 r5).
