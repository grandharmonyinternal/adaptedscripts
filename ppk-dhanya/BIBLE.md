# Paavam Paavam Kodeeswaran (Malayalam) — writing Eps 9–43 in the approved style

## Sources
- **Style model:** the client-approved Eps 1–8 (same writer, same style as Dhanya's Billionaire Boyfriend), saved in
  `ppk-dhanya/ep1.txt … ep8.txt`. New episodes must read as if she wrote them. Her style overrides every earlier rule
  in this repo (VOICE.md, Writer Rules doc): she tags quotes with 'എന്ന് പറഞ്ഞ്…', describes emotions, looks and places.
- **Story base:** the client-approved short script `ppk-v5/src_epN.txt`. One new episode = one client episode: same
  beats, same order, same opening moment, same cliffhanger. Approved Ep 8 ends exactly where client Ep 8 ends (the punch).
- No Hindi original for PPK.

## What the client likes / asked for
- The way it is written, the language, natural narration, the flow, and how descriptive it is about each scene and
  character (scene-first openings, a look and manner for each new character, linking steps between places).
- Client comment on the approved doc: **"avoid back to back dialogue"** — don't stack quoted lines one after another;
  put a short narration line (reaction, action, tag) between two speakers' lines, as in Eps 6–8.

## Length and format
- **600–750 words** per episode (approved Eps 6–8 run 592–645). Checker range 580–850.
- Line 1 `Episode- N`, then one paragraph per line; dialogue paragraphs in single straight quotes '…'; '..' pauses;
  no Latin letters (English in Malayalam script), no digits, no double quotes, almost no '!'; no "തുടരും" except Ep 43
  may end with 'തുടരും..' only if the client's Ep 43 does.
- Old-style chillu encoding: run `python3 tools.py normalize N N` then `python3 tools.py check N N`.

## Cast (client → this version)
- അലീന (Aleena): coffee-shop worker in Bangalore, Christian family from home in Kerala; calls Antony 'അന്തോണിച്ചായാ'
  when teasing, else 'ആന്റണീ'. Her mother **മേരിക്കുട്ടി** (Aleena calls her 'അമ്മ'/'അമ്മാ'; the client's 'മമ്മാ' →
  use 'അമ്മാ' as Eps 1–8 do); grandma = **വല്യമ്മച്ചി**. Mother says 'കര്‍ത്താവേ', 'ഈശോ മിശിഹായ്ക്ക് സ്തുതിയായിരിക്കട്ടെ'.
- ആന്റണി: hidden billionaire posing as a caterer/security man; Ramesh and his team call him 'ബോസ്'/'സര്‍'.
- **പവന്‍** = the client's പിയൂഷ് (Antony's assistant). Never write പിയൂഷ്.
- രമേഷ്, റോബിന്‍, ഇഷ (Aleena's cousin) stay as in the client. Other client names (e.g. ക്ലീറ്റസ്) stay as the client has them.
- Keep every name, nickname and fact exactly as Eps 1–8 established them; read them before writing.

## How to adapt one episode
Read the client episode, list its beats; open where the previous episode ends; play every beat as a full scene with
reactions and small actions, keeping every client line's meaning; add scene/character description and Kerala texture
inside scenes; no new plot, no new named characters; end on the client's cliffhanger; normalize + check.
Avoid: '-ട്ടു നിന്നു' before another verb (write '-ട്ട് നിന്നു'); accusative '-നെ' on things; long 'പിന്നേ' for
"and also"; stacked question tags; calques; scene jumps without a link.
