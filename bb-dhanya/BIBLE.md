# Billionaire Boyfriend (Malayalam) — writing Eps 11–48 in Dhanya's approved style

## Sources
- **Story base:** the client-approved Malayalam short script (Google Doc dated 29 Sep 2026), copied in `bb-v5/src_ep1.txt … src_ep48.txt`.
  Each new episode covers exactly one client episode: same beats, same order, same opening, same cliffhanger.
- **Extra detail:** the original Hindi script (to be added when the user shares it). Use it only to enrich a scene
  the short script compressed. Where the two differ, the approved Malayalam short script wins.
- **Style model:** Dhanya's Eps 1–10 (Kavya's final approval), saved verbatim in `bb-dhanya/ep1.txt … ep10.txt`.
  Write so that a listener cannot tell where Dhanya stopped. Her style overrides every earlier rule in
  VOICE.md and in the Writer Rules doc (for example she *does* tag lines with "എന്ന് പറഞ്ഞു", and she
  *does* describe emotions: Kavya asked for that).

## Length
Dhanya's Eps 6–10 run 563–1009 words (average about 750). Write **700–850 words** per episode (the check tool flags anything outside 650–900).
The length comes from playing each client beat out fully: the whole exchange, the reactions, the small actions
that move the scene, a character's thought. Never from new plot.

## Format
- File: line 1 `Episode- N`, then one paragraph per line. No episode title line (only Ep 1 has one). No "തുടരും".
  (Ep 48 alone ends with "തുടരും.. സീസണ്‍ 2-ല്‍.." because the client's season ends there.)
- Every spoken line is its **own paragraph in single straight quotes**: `'...'`. Never double quotes or curly quotes.
- Pauses are `..` (her most used mark; `...` occasionally). Commas are rare. Exclamation marks almost never (2 in 10 episodes).
- **No Latin letters anywhere.** English words are written in Malayalam script, as she does:
  ഫ്‌ലാറ്റ്, സോഫ, കിച്ചന്‍, ഫ്രിഡ്ജ്, മാള്‍, ലിഫ്റ്റ്, ഐപാഡ്, ബയോഡാറ്റ, ഫ്‌ലോര്‍ മാനേജര്‍, ജിപേ, ബിപി, ഡിഎന്‍എ ടെസ്റ്റ്.
  English sentences too: 'ഐ ആം ഇംപ്രസ്ഡ്..', 'ഷട്ടപ്പ്', 'ഐ ആം ബ്രേക്കിങ് അപ്പ് വിത്ത് യു..'.
- Numbers as words: ഇരുന്നൂറ് രൂപ, മുപ്പതിനായിരം, ഒരു ലക്ഷം, എട്ട് കോടി, ഇരുപത് വര്‍ഷം.
- Encoding: she types chillus the old way (ന്‍ ര്‍ ള്‍ ല്‍ ണ്‍ = consonant + ് + ZWJ). Run `python3 tools.py normalize 11 48`
  after writing; it converts atomic chillus and quotes.

## Narration (how her voice sounds)
- Third person, past and past-progressive, a warm storyteller-novel voice:
  'അതേ സമയം സിറ്റിയുടെ മറ്റൊരു ഭാഗത്തെ ഒരു ബഹുനിലക്കെട്ടിടം.' / 'നമിത തരിച്ച് നില്‍ക്കുകയാണ്.' /
  'അപ്പോഴാണ് പ്രായമായ ഒരു സ്ത്രീ അവിടേക്ക് വരുന്നത്.' / 'ഇതെല്ലാം കണ്ട് നിന്ന മോഹനന്റെ കണ്ണ് നിറഞ്ഞ് തുളുമ്പി.'
- Scene changes in one line: 'അതേ സമയം…', 'ഈ സമയം ഫ്‌ലാറ്റിനകത്ത്…', 'അതേ സമയം അതേ മാളിലെ…'.
- Emotion is shown openly, one or two phrases at a time (Kavya wants this):
  'അവളുടെ കണ്ണുകള്‍ നിറഞ്ഞൊഴുകി.', 'മമിതയുടെ മുഖം വിളറി വെളുത്തു.', 'അയാളുടെ കണ്ണില്‍ കോപം ഇരച്ച് കയറി.',
  'നമിതയുടെ ചോദ്യം നെഞ്ചില്‍ തുളഞ്ഞുകയറിയെങ്കിലും…', 'നമിതയുടെ മുഖത്ത് നിന്ന് ചോരവാര്‍ന്ന് വിളറിവെളുത്തു.'
- Thoughts are quoted lines followed by 'അവള്‍ മനസ്സില്‍ ഓര്‍ത്തു.' / '…മനസ്സില്‍ ചിന്തിച്ചു.' / '…സ്വയം പിറുപിറുത്തു.'
- Small concrete Kerala touches, the way she adds Lulu Mall, the metro, കുഴലപ്പം-അച്ചപ്പം, റബ്ബര്‍ വെട്ട്, കുറുവാ സംഘം,
  ജിപേ, the guard's 'എഐ പരിപാടിയോ'. One or two per episode, inside the scene, never a list.
- Light humour in the Namitha–Madhav scenes (Ep 7: she offers the mall owner a job). Keep that playfulness.
- End each episode on the client's cliffhanger, often a single dramatic sentence or one quoted line.

## Dialogue
- Natural spoken Malayalam, complete sentences. Keep the meaning of every client line, reworded the way people talk;
  add the replies and follow-ups that make the exchange play out.
- Speaker always clear. Her three patterns:
  1. narration ending in a comma, then the quote: 'അവള്‍ നമിതയുടെ നേര്‍ക്ക് ചീറി,' → `'…'`
  2. quote, then a tag paragraph: `'…'` → 'എന്ന് പറഞ്ഞുകൊണ്ട് അവള്‍ കിലുകിലെ ചിരിച്ചു.' / 'എന്ന് പറഞ്ഞ് നമിത കിച്ചനിലേക്ക് ഓടി.'
  3. quote, then a short line: 'മാധവ് എക്‌സൈറ്റഡായി ചോദിച്ചു.' / 'അയാള്‍ മുന്നറിയിപ്പ് നല്‍കി.' / 'സനല്‍ പറഞ്ഞ് നിര്‍ത്തി.'
- Long speeches can continue after a beat: 'അവള്‍ പല്ലുകള്‍ ഞെരിച്ചുകൊണ്ട് തുടര്‍ന്നു,' → `'…'`

## Cast (client name → Dhanya's name) and voices
| Client | Dhanya | Who / voice |
|---|---|---|
| മീര | **നമിത** (നമിത മോഹന്‍; real identity **അനന്യ**, Ajay Menon's daughter) | Rajakkad girl, honest, quick-tongued, proud, kind. Calls Mohanan 'അച്ഛാ', Mamitha 'ചേച്ചീ', Madhav 'സര്‍' (and 'ബോസ്' where the client has 'boss'), Ajay 'അങ്കിള്‍' (later 'ഡാഡ്'). Words: ശെന്റമ്മോ, എന്റമ്മച്ചീ, ദൈവമേ, വല്ലോം, ഇച്ചിരി, അയ്യോ. |
| അച്ഛൻ (ഈശ്വരൻ, Ep 42) | **മോഹനന്‍** | Rajakkad farmer, works the തോട്ടം, റബ്ബര്‍ വെട്ട്. Idukki speech: എടീ മോളേ, കൊച്ച്, എന്നാ (what), വെളവ്, കെടന്ന്, അറിഞ്ഞൂട, സാറന്മാരേ, മോനേ. BP problems (Ep 4). Calls Madhav 'മോനേ'/'സാറേ'. |
| പല്ലവി | **മമിത** (poses as **അനന്യ**) | Mohanan's own daughter. City snob, English mixed in Malayalam script (വാട്ട്?, ഓഹ് ഗോഡ്, യു ഇഡിയറ്റ്, സച്ച് എ വേസ്റ്റ്, നശൂലം/നശൂലങ്ങള്). Sugar-sweet with Madhav and Ajay ('ഡാഡ്'). Narration calls her മമിത; Ajay and Madhav call her അനന്യ until the truth is out, then മമിത. |
| Vicky | **വിവേക്** ('വിവി') | Mamitha's ex. Only mentioned later (Ep 45). |
| മാധവ് മേനോൻ | **മാധവ് മേനോന്‍** | 28, CEO of **മിഥില ഗ്രൂപ്പ് ഓഫ് ഇന്‍ഡസ്ട്രീസ്**, owns the luxury mall. Calm authority, English phrases, dry humour with Namitha. Wears the other half of the locket as a ring on a chain ('ലോക്കറ്റ് പോലെ തൂങ്ങിക്കിടക്കുന്ന ഒരു റിങ്'). Calls Mohanan 'അങ്കിള്‍', Ajay 'അജയ് അങ്കിള്‍'. |
| ശന്തനു | **സനല്‍** | Madhav's assistant: 'സര്‍', 'ഷുവര്‍ സര്‍', 'ഓക്കെ സര്‍'; a sly smile when the boss is jealous. |
| രാജേഷ് | **രാജേഷ്** | Operations manager; scared of Madhav; becomes Mamitha's spy (Ep 19). |
| അജയ് സാർ | **അജയ് മേനോന്‍** ('അജയ് സര്‍') | Owner of **അജയ് ഗ്രൂപ്പ് ഓഫ് ഇന്‍ഡസ്ട്രീസ്**, one of South India's top businessmen. Dignified, warm, 'മോളേ'. Lost his daughter Ananya twenty years ago. |
| ദിലീപ് കുമാർ | **നിരഞ്ജന്‍** | Madhav's younger brother, film star and singer; flirty, fun, calls Madhav 'ചേട്ടാ'. (Renamed: the name Dileep belongs to a real Malayalam star.) |
| രാഹുൽ | **രാഹുല്‍** | Mamitha's hired man who drugs Namitha (Eps 30–31). |
| Jessy Thomas | **ജെസ്സി തോമസ്** | Celebrity dancer who doesn't arrive (Ep 24). |
| Malhotra (meeting) | **കുര്യന്‍ ഗ്രൂപ്പ്** | The meeting Madhav lies about (Ep 18). |
| neighbour (Ep 38) | **കുഞ്ഞുമോന്‍ ചേട്ടന്‍** | Rajakkad neighbour. |
| others | unnamed | sales girl, manager, maid, doctor, nurse, investor, store manager, Y City Mall owner, friends, inspector, warden, the snake-tattoo man. Don't name them. |

## Places
- Mumbai → **കൊച്ചി**. Kollengode (Palakkad) → **രാജാക്കാട്** (ഇടുക്കി, ഹൈറേഞ്ച്). "Kerala-യിലെ ഒരു ഗ്രാമം" → 'ഇടുക്കിയിലെ ഒരു കൊച്ചു മലയോര ഗ്രാമം'.
- Madhav's mall: unnamed luxury mall (Saffron restaurant = 'സാഫ്രണ്‍ റസ്റ്റോറന്റ്' inside it). The rival mall: 'വൈ സിറ്റി മാള്‍'.
- Mamitha's flat: near ഇടപ്പള്ളി. Namitha's later room (Ep 19): a small rented one-room house near ഇടപ്പള്ളി.
- Ajay's and Madhav's homes: 'ബംഗ്ലാവ്'. Rajakkad hospital: 'രാജാക്കാട്ടെ സര്‍ക്കാര്‍ ആശുപത്രി' (keep the client's 'വിഐപി വാര്‍ഡ്').
- Jail (Ep 48): 'കാക്കനാട്ടെ ജില്ലാ ജയില്‍'. Out-of-town performers (Ep 24): 'ദുബായില്‍ ഒരു സ്റ്റേജ് ഷോയ്ക്ക്'.

## Continuity from Dhanya's Eps 1–10 (keep consistent)
- Mohanan and Namitha came by early bus from Rajakkad with കുഴലപ്പം, അച്ചപ്പം, കുമ്പിളപ്പം for Mamitha.
- Mamitha told Vivek her 'ഡാഡി' was a Delhi diamond exporter worth five thousand crore. Vivek dumped her; she slapped Namitha.
- Mohanan's BP dropped (Ep 4). The flat's fridge had only water, champagne and five-star delivery boxes.
- The locket: Namitha has worn it since she can remember, on a string ('ചരടില്‍ കോര്‍ത്ത ലോക്കറ്റ്'); it is the only clue
  to who she is. She gave it to Mamitha to pawn at a gold-loan branch near the mall; the branch had only a phone number
  (switched off); Sanal traced the Edappally flat from it. Madhav redeemed it and handed it to Mamitha, who now wears it.
  **Mamitha keeps it hidden whenever Namitha is near; Namitha must not see it before Ep 44.** Namitha still believes it is
  in the pawn shop and wants to redeem it.
- Halves: Madhav's half is a ring worn on a chain; both halves carry a small red ruby heart (client Ep 11).
- Namitha joined a premium grocery & lifestyle shop in Madhav's mall as a sales girl, made the operations manager Rajesh
  panic by offering Madhav a job, was fired by the floor manager, then promoted by Madhav to **floor manager** with a
  ₹30,000 gift; he paid ₹200 by GPay for the protein bar and milk.
- Madhav is 28. Ananya went missing twenty years ago at about five. Mohanan found her crying alone where his തോട്ടം
  meets the road, searched for her family and told the police; nobody came.
- Mamitha stopped Mohanan from speaking ('ഒരക്ഷരം മിണ്ടിപ്പോവരുത്'), told Namitha she had patched up with her boyfriend,
  and left. Mohanan packed to go home and was about to tell Namitha the truth (Ep 10 ends there).
- Salary line to keep: VIP room supervisor ₹1 lakh/month (Ep 15), Associate Operations Manager ₹2 lakh/month (Ep 26).

## How to adapt one episode
1. Read the client episode (and the Hindi, once available) and list its beats.
2. Open where the previous episode's cliffhanger left off, in the same moment.
3. Play every beat as a full scene: who says what, how the other reacts, what they do next. Keep every client line's meaning.
4. Add Dhanya-style texture inside scenes (an emotion, a gesture that matters, a thought, a Kerala detail). No new plot,
   no new named characters, no hint of later reveals beyond what the client episode itself plants.
5. Swap every client name, place and term per the tables above.
6. End on the client's cliffhanger.
7. Run `python3 tools.py normalize N N` and `python3 tools.py check N N`.
