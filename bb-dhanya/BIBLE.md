# Billionaire Boyfriend (Malayalam) — writing Eps 11–48 in Dhanya's approved style

## Sources
- **Story base:** the client-approved Malayalam short script (Google Doc dated 29 Sep 2026), copied in `bb-v5/src_ep1.txt … src_ep48.txt`.
  Each new episode covers exactly one client episode: same beats, same order, same opening, same cliffhanger.
- **Extra detail:** the original Hindi screenplay (Hinglish; Sargun = Namitha, Papaji/Ishwar Singh = Mohanan,
  Pallavi = Mamitha, Mihir Raheja = Madhav, Shantanu = Sanal, Rakesh Khanna = Rajesh, Ajay Chopra = Ajay Menon,
  Armaan Kaushal = Niranjan, Raheja Mall = Madhav's mall, Shahkot/Jalandhar = Rajakkad). The Malayalam short script
  is a close condensation of it. Use it for scene texture, stage directions and the odd extra line. Its Eps 45–48 are
  arranged differently and have no Season 2 hook: **follow the Malayalam episode split and its ending.** Where the two
  differ, the approved Malayalam short script wins.

## What the client likes (the brief)
The client liked Dhanya's first ten episodes for: **the way it is written, the language, the natural narration, the
overall flow of the story, and how descriptive she is about each scene and each character.** Every new episode must
deliver those five things. In practice:
- **Scene first.** Open each new location with one to three sentences that let the listener see it, the way she opens
  the mall ('ഗ്ലാസും സ്റ്റീലും കൊണ്ട് കണ്ടംപററി സ്റ്റൈലില്‍ പണിത ആ കെട്ടിടം ഒരു ലക്ഷ്വറി മാളായിരുന്നു…') or the flat's kitchen
  (cupboards opened one by one, the fridge with only water, champagne and five-star delivery boxes).
- **Character on entry.** Each person who appears for the first time gets a look and a manner: Madhav ('മൂര്‍ച്ചയുള്ള നോട്ടവും
  ഗൗരവം നിറഞ്ഞ ഭാവവും… നല്ല ഉയരമുള്ള വെളുത്ത ശരീരം, ആഢ്യത്വം തുളുമ്പുന്ന പ്രകൃതം'), the guard ('ഡാര്‍ക്ക് ബ്ലൂ കളര്‍ യൂണിഫോം ധരിച്ച…
  ഗൗരവത്തോടെ'), the old lady ('കാഴ്ചയില്‍ തന്നെ അവര്‍ സമ്പന്നയാണെന്ന് മനസ്സിലാവും'). Keep it to a sentence or two.
- **Flow.** Each scene runs on from the last without jumps: a small linking action or a 'അതേ സമയം…' line. Inside a scene,
  every line answers the one before it.
- **Natural language.** Malayalam the way people in Kerala actually speak it, narration in her warm storyteller voice.
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

## Recurring places and people (describe them the same way every time)
- **Madhav's mall:** the glass-and-steel luxury mall from Ep 5 (shops, hypermarket, restaurants, entertainment zone,
  theatres). Saffron restaurant and its VIP section are inside it. Rival mall: വൈ സിറ്റി മാള്‍.
- **Ajay Menon's bungalow:** an old-money Kerala mansion: big gates with guards, a long drive, teak and brass inside,
  a nadumuttam, and a garden three times the size of Mamitha's flat (client Ep 11).
- **Madhav's bungalow:** a modern white bungalow by the backwaters: tall glass windows, a lawn, a wide hall, the kayal
  outside. His bedroom has his photo on the wall (Ep 32).
- **Namitha's room (from Ep 19):** a small rented one-room house in a lane near Edappally, neat but crowded.
- **Rajakkad:** high-range village: cardamom and pepper estates, rubber trees, mist, narrow climbing roads, the junction
  shops, the government hospital. Mohanan's small house at the edge of the estate.
- **Ajay Menon (first seen Ep 14):** about sixty, grey at the temples, dignified, plain in manner; at Ep 14 his white
  shirt and trousers are covered in mud from a tree-planting programme.
- **Niranjan (first seen Ep 22):** Madhav's younger brother, a film star and singer: stylish, easy charm, a wink.
- **Rahul (Ep 30):** slick, gelled hair, expensive watch, a smile that doesn't reach his eyes.

## Decisions for tricky spots
- Ep 11: Namitha mentions redeeming her locket (Dhanya's Ep 10 thread); Mohanan avoids the subject and goes home by bus.
- Ep 12: the BP machine is meant for Mohanan back in Rajakkad.
- Ep 16: outside the trial room Namitha remembers that **her own locket** had the same small red heart, and wonders
  if Madhav's ring is connected to her family.
- Ep 17: Ajay says 'അനന്യ എന്റെ മോള്‍ തന്നെയാ'. Ajay and Madhav call Mamitha 'അനന്യ' until the truth comes out.
- Ep 19: the dried leaves came from a packet tucked in a corner of **Mamitha's wardrobe** (Hindi: her almirah), not the
  fridge (Dhanya's Ep 4 says the fridge held nothing else). Food: കപ്പയും മീന്‍കറിയും, a special green chammanthi.
  The kappa came from Mohanan's plot.
- Ep 24: the out-of-town performers are 'ദുബായില്‍ ഒരു സ്റ്റേജ് ഷോയ്ക്ക്'. Namitha learned മോഹിനിയാട്ടം at the temple back home.
- Ep 25: Niranjan introduces her as coming 'ഇടുക്കിയിലെ ഒരു കൊച്ചു മലയോര ഗ്രാമത്തില്‍ നിന്ന്'.
- Ep 35: Ajay: 'ഹൈറേഞ്ചിലേക്കാ.. ഇടുക്കിയില്‍.. രാജാക്കാട്'. The project is the client's mall project for the village.
- Ep 36: Namitha knows she is the adopted one, so Mamitha's claim baffles her, but she doesn't connect it to herself
  (Hindi note: she won't do 2+2).
- Ep 38: neighbour കുഞ്ഞുമോന്‍ ചേട്ടന്‍; hospital = രാജാക്കാട്ടെ സര്‍ക്കാര്‍ ആശുപത്രി. Ep 39: Niranjan had come with Madhav.
- Ep 41: Mamitha comes to the Rajakkad hospital in sunglasses and a scarf so nobody from the village knows her; she gives
  her name at the desk as 'അനന്യ' (that is why the nurse later says Miss Ananya visited). Namitha is away from the ward.
- Ep 42: the doctor scene: 'എന്റെ അച്ഛന്‍ മോഹനന്‍..'.
- Ep 45: the thulabharam gold goes to 'അവരുടെ നാട്ടില്‍' = Rajakkad.
- Ep 47: Rajesh **and Rahul** are dragged in; Namitha whips both. Proposal: 'അനന്യ അജയ് മേനോന്‍.. എന്റെ നമിതാ.. മിസിസ് നമിത മാധവ് മേനോന്‍ ആവാമോ?'
- Ep 48: balcony over the kayal and the city lights; 'കാക്കനാട്ടെ ജില്ലാ ജയില്‍'; ends 'തുടരും.. സീസണ്‍ 2-ല്‍..'.
- Flashback to the kidnapping (Eps 11, 34, 48): a dark room, two children hiding behind old sacks, heavy footsteps
  outside; the girl (about five) splits her locket and puts one half in little Madhav's hand: 'പേടിയാവുന്നുണ്ടല്ലേ? ഇത് ഇട്ടോ..
  എന്റെ പപ്പ തന്നതാ.. ഈ ലോക്കറ്റ് നിന്നെ കാക്കും..'. Each half has a small red ruby heart. (Don't give Madhav's age then.)

## Episode split vs the Hindi
Malayalam Eps 12–44 match Hindi Eps 12–44 one to one. Malayalam 45 = Hindi 45 + Hindi 46; Malayalam 46 = Hindi 47;
Malayalam 47 = Hindi 48 plus the snake-tattoo man and Mamitha's line in the police jeep (Malayalam only);
Malayalam 48 = Malayalam only (a month later, the jail call, the black car, Season 2 hook).

## Reference episode
`ep11.txt` was written to this guide first; use it with Dhanya's Eps 1–10 as the model.
