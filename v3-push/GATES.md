# Gates: v3 Eps 1-3 into Script Writer + naturalise left for review

OWNS: scripts/kuku-malayalam/v3-push/**

Scope: PPK and BB Eps 1-3 (v3 storytelling text; 17 Oct morning: Fable full rewrite of both after the native reviewer's notes) loaded into their existing Script Writer episode scripts with a backup version saved first, then naturalise run on all six through the app (Prism on the gateway, KukuFM Malayalam profile) with the proposals left pending so a reviewer accepts them in the editor.

- [x] G1: The push payload is exactly the six v3 episode files, with a hash per episode
  CHECK: node build_payload.mjs --check
  EXPECT: PAYLOAD VERIFIED 6/6
  EVIDENCE: automatic-evidence=v1; definition-sha256=abbf884b34d5c2c7f7b6a5cfcac92cf82dae679b32bd486eeef38968b7c856a2; exit=0; EXPECT=matched; output-sha256=2a9f87ea3277d8673c5702778efc541a2815e2e9ef9f9f23ccaa625fc71d408c; output-bytes=21; shell=/bin/sh; cwd=/Users/apple/Desktop/Claude/scripts/kuku-malayalam/v3-push; path=92a705a82f40/23 entries

- [x] G2: Every one of the six scripts got a manual-snapshot version of its live v2 text before being changed
  EVIDENCE: 2026-10-17 01:1x IST, POST /api/scripts/{id}/versions "Before v3 storytelling (17 Oct)" returned 201 for all six, each after checking the live revision was the one read earlier (PPK 12/11/7, BB 15/11/8): PPK1 ver_3a4c66a4, PPK2 ver_8f6b526e, PPK3 ver_902380f6, BB1 ver_0be1d3e3, BB2 ver_8443c0a1, BB3 ver_44b44b11.

- [x] G3: Script Writer holds the v3 text for all six (in-page SHA-256 of the saved block texts equals the payload hash), and the editor shows text, not a blank page
  EVIDENCE: 2026-10-17 PATCH with expectedRevision returned 200 for all six (PPK1 r12->13, PPK2 r11->12, PPK3 r7->8, BB1 r15->16, BB2 r11->12, BB3 r8->9); re-read block texts hashed in-page equal the payload sha256 for all six (hashOK true), block counts 11/13/12/22/20/23 equal the file line counts. Editor check: PPK Ep1 .ProseMirror 5,626 chars starting "Episode 1 / വിളമ്പുകാരന്റെ രഹസ്യം"; BB Ep1 5,878 chars with the subheading, 10 cue lines and തുടരും… at the end.

- [ ] G4: A naturalise job ran for all six scripts and each script now has at least one PENDING proposal (none applied)
  EVIDENCE: partial, 4 of 6. Pending proposals (KukuFM Malayalam profile, Prism on the gateway = gemini-3.8-flash-high, extra note keeping Kavya's flow rules), each based on the v3 revision with the saved text as its before-text, revisions unchanged so nothing applied: PPK Ep1 8/11 lines changed, PPK Ep2 2/13, BB Ep1 8/22, BB Ep2 6/20; Episode line, subheading, cues and sign-off unchanged in all four. PPK Ep3 and BB Ep3: no proposal. Each failed twice with "Prism could not finish" = app log "Gemini gateway could not be reached: fetch failed" at about 300 s, also when run alone on an idle gateway (Node fetch's default 5-minute header timeout cuts the call although the app's own budget is 660 s).
ABANDON: G4 Ep3 of both shows cannot finish inside the app's 5-minute fetch cutoff on the gateway; needs the owner's call between an app fix (fetch timeout raised to the 660 s budget, deploy) and a later retry. Handoff in the report.

- [x] G5: Owner told what is waiting where (editor links), which model ran, and what was not done
  EVIDENCE: 2026-10-17 final chat report lists the four pending proposals with editor links, states Prism on gemini-3.8-flash-high (Pro not on the gateway), and names the two Ep3 scripts with no proposal and why.
