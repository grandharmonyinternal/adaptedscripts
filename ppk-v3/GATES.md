# Gates: PPK v3 storytelling rewrite, Eps 1-3 sample

OWNS: scripts/kuku-malayalam/ppk-v3/**

Scope: PPK Eps 1-3 retold through the characters' feelings per Kavya's call (16 Oct 2026), each 5:00 with a subheading, delivered to the owner as a docx for approval before the full 43 + BB 48.

- [x] G1: Every episode is 630-670 story words (5:00 at 130 wpm)
  CHECK: node verify.mjs budgets 1-3
  EXPECT: BUDGETS VERIFIED 3/3
  EVIDENCE: automatic-evidence=v1; definition-sha256=d36f35777df0857c7884637e8095c005a9c9e0434004394fcc6ccd8cac7cb215; exit=0; EXPECT=matched; output-sha256=4acec2d30ab22cc1f77b7c2c2835800a4aadc78e1eefee5d04c3e5b6cfe13a1c; output-bytes=21; shell=/bin/sh; cwd=/Users/apple/Desktop/Claude/scripts/kuku-malayalam/ppk-v3; path=92a705a82f40/23 entries

- [x] G2: Episode header plus subheading, no bare-quote paragraphs, dialogue at most 40%, curly quotes only
  CHECK: node verify.mjs format 1-3
  EXPECT: FORMAT VERIFIED 3/3
  EVIDENCE: automatic-evidence=v1; definition-sha256=be98ed4798c89835cb69d872e758a083d150631d4433ab4ac6066e33e161923c; exit=0; EXPECT=matched; output-sha256=0a32b37879673b7c517b146d28ee52f8e4b8c948cff92b07939440a669d34a9f; output-bytes=20; shell=/bin/sh; cwd=/Users/apple/Desktop/Claude/scripts/kuku-malayalam/ppk-v3; path=92a705a82f40/23 entries

- [x] G3: No literary words, poetic similes or telling-the-listener lines
  CHECK: node verify.mjs banned 1-3
  EXPECT: BANNED VERIFIED 3/3
  EVIDENCE: automatic-evidence=v1; definition-sha256=63ea047e437f866b4641336e6712d7d7928598aacd425b08492aacc2f965731d; exit=0; EXPECT=matched; output-sha256=60772590974272a53789279c8a0b17946d15f579865b67f360bd3306f9885590; output-bytes=20; shell=/bin/sh; cwd=/Users/apple/Desktop/Claude/scripts/kuku-malayalam/ppk-v3; path=92a705a82f40/23 entries

- [x] G4: No choppy runs, no back-to-back speech tags, no repeated word inside a sentence, no twin question endings
  CHECK: node verify.mjs style 1-3
  EXPECT: STYLE VERIFIED 3/3
  EVIDENCE: automatic-evidence=v1; definition-sha256=5386df5bf778d964baf688fccbd325457e5707142ddd4be1c692d053d8b9b64f; exit=0; EXPECT=matched; output-sha256=889b4c63f0e865913f9c1a86893fe06d6d4d1ef020a33d63f8b9167302db802b; output-bytes=19; shell=/bin/sh; cwd=/Users/apple/Desktop/Claude/scripts/kuku-malayalam/ppk-v3; path=92a705a82f40/23 entries

- [x] G5: At least 90% of the approved source quotes are kept (story beats unchanged)
  CHECK: node verify.mjs beats 1-3
  EXPECT: BEATS VERIFIED 3/3
  EVIDENCE: automatic-evidence=v1; definition-sha256=b0d2a0624394f6260d24ddee0400be67c288e4a98adaa5238f058d8efbd84ee2; exit=0; EXPECT=matched; output-sha256=02d3e2a3ead89acbd071ed8103ea6d64def8abefd3c4bf174790461f15c16e60; output-bytes=19; shell=/bin/sh; cwd=/Users/apple/Desktop/Claude/scripts/kuku-malayalam/ppk-v3; path=92a705a82f40/23 entries

- [x] G6: The details Kavya called pointless (watch on the chin, glass falling, etc.) are gone
  CHECK: node verify.mjs deadwood 1-3
  EXPECT: DEADWOOD VERIFIED 3/3
  EVIDENCE: automatic-evidence=v1; definition-sha256=bbe38de02f13c5291f2be8c429ed0595a78b5bdc8a310bd98c57f6e333756264; exit=0; EXPECT=matched; output-sha256=6882c0fcba432e30bb9308589da3676a015a6ccb9882567c31ad934c637be30c; output-bytes=22; shell=/bin/sh; cwd=/Users/apple/Desktop/Claude/scripts/kuku-malayalam/ppk-v3; path=92a705a82f40/23 entries

- [x] G7: Positive control: the deadwood check catches those details in the old v2 files
  CHECK: node verify.mjs control 1-3
  EXPECT: CONTROL CAUGHT
  EVIDENCE: automatic-evidence=v1; definition-sha256=c6874d159e02989d4317d40235361aa58f1e7998cc36f86f7311ea4535d8b3bb; exit=0; EXPECT=matched; output-sha256=a133bf8c2bcf3286da1f1db5268ceb7e91dbaeb989166b021f2f47636ecca2bc; output-bytes=266; shell=/bin/sh; cwd=/Users/apple/Desktop/Claude/scripts/kuku-malayalam/ppk-v3; path=92a705a82f40/23 entries

- [x] G8: The client docx matches the episode files exactly
  CHECK: python3 check_docx.py 1 3 "$HOME/Downloads/Paavam Paavam Kodeeswaran - Eps 1-3 (storytelling rewrite).docx"
  EXPECT: DOCX VERIFIED 3/3
  EVIDENCE: automatic-evidence=v1; definition-sha256=6c24215aba151ca3e6c7e85578fcea98cd7c603ef4fcbc3a060c5eba4c4b851b; exit=0; EXPECT=matched; output-sha256=532793d93d6a3483a6d1a41e434dfbe5ceb96275b9da05dac83d27d9f4bf144b; output-bytes=18; shell=/bin/sh; cwd=/Users/apple/Desktop/Claude/scripts/kuku-malayalam/ppk-v3; path=92a705a82f40/23 entries

- [x] G9: Full read-through as a listener against Kavya's notes (POV and feelings, no dead details, sentences flow, every episode readable on its own)
  EVIDENCE: 2026-10-17 read all three in full after the last edit. Fixed: Robin's second line read as Antony's (Ep 2), unclear 'one of two chairs' (Ep 2), double തന്നെ (Ep 2), two sentences starting അവളുടെ (Ep 3), stacked clause on Robin's shame (Ep 3). Ep 3 opens on Aleena's denial so the Ep 2 slap and her turning on Antony read as one feeling. Checks re-run green after the fixes.

- [x] G10: Docx sent to the owner in chat for approval
  EVIDENCE: 2026-10-17 SendUserFile delivered ~/Downloads/Paavam Paavam Kodeeswaran - Eps 1-3 (storytelling rewrite).docx (checked by G8).
