# Gates: Billionaire Boyfriend Malayalam v2, description and duration

OWNS: scripts/kuku-malayalam/bb-v2/**

Scope: all 48 episodes rewritten from the client-approved structure with reference-level description in simple Malayalam, eps 1-5 about 4:00 and eps 6-48 about 6:00 at 130 wpm, cues kept, pushed to Script Writer, client docx delivered.

- [x] G0: this ledger states outcomes that can fail
  CHECK: node /Users/apple/.claude/skills/unlazy/scripts/gate-lint.mjs GATES.md
  EXPECT: LINT OK
  EVIDENCE: automatic-evidence=v1; definition-sha256=a9deeba8789171887021264e2a4a78b167667e2ef1f7c8598145fdf941bf51e5; exit=0; EXPECT=matched; output-sha256=69103abd3c411ac11d3f337d560331a0fa9d6bbe5de2f53508a8db5a2658560e; output-bytes=725; shell=/bin/sh; cwd=/Users/apple/Desktop/Claude/scripts/kuku-malayalam/bb-v2; path=92a705a82f40/23 entries

- [x] G1: every episode file meets its word budget (eps 1-5: 500-545, eps 6-48: 760-795)
  CHECK: node verify.mjs budgets
  EXPECT: BUDGETS VERIFIED 48/48
  EVIDENCE: automatic-evidence=v1; definition-sha256=380912f9040b9aacc91143b7f4e3696453b03bddc7c472203b539f0540e96cde; exit=0; EXPECT=matched; output-sha256=6158d90787a526bc328c4714b7eb2334b60e0d95ca2e9c3525c62c91acd39046; output-bytes=23; shell=/bin/sh; cwd=/Users/apple/Desktop/Claude/scripts/kuku-malayalam/bb-v2; path=92a705a82f40/23 entries

- [x] G2: every episode keeps the single-narration format (header, sign-off, no bare dialogue paragraph, no speaker labels, dialogue at most 40 percent, balanced quotes)
  CHECK: node verify.mjs format
  EXPECT: FORMAT VERIFIED 48/48
  EVIDENCE: automatic-evidence=v1; definition-sha256=5bde11730de115adeb2491b6948494ac090f40a88f2e74027a69c8751c770859; exit=0; EXPECT=matched; output-sha256=e810478b884de90b54d0de0639b7315e56c13268389b053619f43b63151e6459; output-bytes=22; shell=/bin/sh; cwd=/Users/apple/Desktop/Claude/scripts/kuku-malayalam/bb-v2; path=92a705a82f40/23 entries

- [x] G3: every episode carries exactly its existing SFX/BGM cue lines in order and ends on a sting before the sign-off
  CHECK: node verify.mjs cues
  EXPECT: CUES VERIFIED 48/48
  EVIDENCE: automatic-evidence=v1; definition-sha256=5696749d048f54bd859343a928c637be836d78d8666c12c189f6fd20e1c17c30; exit=0; EXPECT=matched; output-sha256=e32c1c21a01676974793682119da82ee450a435d5f8760c0da2f98667781017e; output-bytes=20; shell=/bin/sh; cwd=/Users/apple/Desktop/Claude/scripts/kuku-malayalam/bb-v2; path=92a705a82f40/23 entries

- [x] G4: no episode uses the literary or abstract phrases the client marked against (fixture with one such word fails the same check)
  CHECK: node verify.mjs banned
  EXPECT: BANNED VERIFIED 48/48
  EVIDENCE: automatic-evidence=v1; definition-sha256=9f03a614fb31d1d89f632f2d2414867e1c0cf879afc46f8cca0c05e407eff3dc; exit=0; EXPECT=matched; output-sha256=edf9305295e1fc770e8e77b52c991aab996dfd6455d7ebf13f79347875196e5b; output-bytes=22; shell=/bin/sh; cwd=/Users/apple/Desktop/Claude/scripts/kuku-malayalam/bb-v2; path=92a705a82f40/23 entries

- [x] G5: every scene, beat and cliffhanger of the approved structure is still present in each episode (reviewed against the approved text, quote coverage measured in-page)
  EVIDENCE: 15 Oct 2026: each episode rewritten beat by beat from the approved v3 structure, same scene order and cliffhangers; in-page quote coverage against the pre-push Script Writer text: 734/759 quotes kept (96.7%), 94.7% of quote words present, the rest moved into reported speech.

- [x] G6: every named character gets a visual description at first appearance and every scene opens with its setting (reviewed episode by episode)
  EVIDENCE: 15 Oct 2026: first-appearance visuals checked: Meera ep1, Pallavi ep2, Vicky ep3, Madhav and Shantanu ep5, Rajesh ep7, Ajay ep14, Dileep ep22, Rahul ep30, side characters per characters.md; scene openers state place and time.

- [x] G7: Script Writer holds the new text for all 48 episodes (in-page hash of each script equals the local file, revision checked before each write)
  EVIDENCE: 15 Oct 2026: GET revision/updatedAt checked unchanged, manual-snapshot version saved, then PATCH with expectedRevision for all 48; in-page re-read 48/48 block texts and plainText equal the files (ep1 r11, ep48 r7).

- [x] G8: the client export from Script Writer contains the story and no cue lines (sampled episodes)
  EVIDENCE: 15 Oct 2026: POST export (client-defaults, scope episode) for eps 1, 25, 48 returned 200 text/plain with 0 SFX/BGM markers and the story text present.

- [x] G9: the client docx in Downloads holds all 48 episodes exactly as the files, with no cue lines
  CHECK: python3 check_docx.py
  EXPECT: DOCX VERIFIED 48/48
  EVIDENCE: automatic-evidence=v1; definition-sha256=d498926675dd0b1acc8d5f194a9fc7a5afa1bb3afeb35432762d96dcea56eeb8; exit=0; EXPECT=matched; output-sha256=84b0e03dc34f992a4972951649e679e5fe0da0752bfc625f4c235f1cce0f9c7e; output-bytes=20; shell=/bin/sh; cwd=/Users/apple/Desktop/Claude/scripts/kuku-malayalam/bb-v2; path=92a705a82f40/23 entries
