# Flags reader-rejected phrasing (VOICE.md "Native reader notes") in v5 episodes, skipping client sentences.
# Usage: python3 lint_voice.py <show-dir> <first> <last>
import re, sys
d, a, b = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
PATTERNS = {
    'body reaction': r'ചിരിക്കാൻ നോക്കി|ചിരി വന്നില്ല|കണ്ണിലേക്ക് തന്നെയായിരുന്നു|വിറച്ചു|വിറയ്ക്കുന്നു|വിറയ്ക്കുന്നുണ്ടായിരുന്നു|ചുരുണ്ടു|ശ്വാസം .*നിന്നു|ഹൃദയം',
    'village/city or then/now contrast': r'നാട്ടിൽ ആരെങ്കിലും|നാട്ടിലാണെങ്കിൽ|ഇവിടെ അതിനു പോലും|ഇന്നലെ .* ഇന്ന് |അന്ന് .* ഇന്ന് ',
    'filler verdict / aphorism': r'അതു തന്നെയാ|തന്നെയായിരുന്നു മറുപടി|രക്തം കൊണ്ടല്ല|എന്നും കൂടെ കാണും|ഉള്ളിൽ എവിടെയോ',
    'echo reaction': r'-ഓ\?|നോക്കാൻ പോലും|കോലത്തിൽ',
    'tag after quote': r'[”"] *എന്ന് \S+ (പറഞ്ഞു|ചോദിച്ചു)',
}
norm = lambda s: re.sub(r'\s+', ' ', re.sub(r'[“”"]', '', s)).strip()
hits = 0
for n in range(a, b + 1):
    src = norm(open(f'{d}/src_ep{n}.txt', encoding='utf8').read())
    body = ' '.join(open(f'{d}/ep{n}.txt', encoding='utf8').read().split('\n')[2:])
    for s in re.split(r'(?<=[.!?…])\s+', body):
        if norm(s) in src: continue
        for name, p in PATTERNS.items():
            if re.search(p, s):
                hits += 1; print(f'ep{n} [{name}] {s.strip()[:110]}')
print('LINT CLEAN' if not hits else f'{hits} to review')
