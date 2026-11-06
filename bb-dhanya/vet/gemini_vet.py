# Sends the new Billionaire Boyfriend episodes (bb-dhanya/ep11.txt ... ep48.txt) to the Gemini gateway on the
# audio server for vetting, and saves Gemini's correction notes in bb-dhanya/vet/gemini/epN.md.
# Run on a machine on the tailnet (the Mac with the gateway, or the Windows PC; same setup as ppk-v2/nat/run.py):
#   git pull
#   python3 bb-dhanya/vet/gemini_vet.py            (all episodes 11-48 that have no notes yet)
#   python3 bb-dhanya/vet/gemini_vet.py 11 12 13   (only these)
# Then commit and push bb-dhanya/vet/gemini/ so the notes can be applied.
# The token comes from GATEWAY_TOKEN, else from the gateway's .env (~/gemini-tailscale-gateway/.env on the Mac,
# C:\Users\ARUN\gemini-tailscale-gateway\.env on Windows). GATEWAY_URL overrides the address.
import json, os, sys, time, urllib.request

base = os.path.dirname(os.path.abspath(__file__))
show = os.path.dirname(base)
repo = os.path.dirname(show)
tok = os.environ.get('GATEWAY_TOKEN')
for env_file in [os.path.expanduser('~/gemini-tailscale-gateway/.env'), r'C:\Users\ARUN\gemini-tailscale-gateway\.env']:
    if tok or not os.path.exists(env_file):
        continue
    for line in open(env_file, encoding='utf-8'):
        if line.startswith('GATEWAY_TOKEN='):
            tok = line.split('=', 1)[1].strip()
if not tok:
    sys.exit('No gateway token: set GATEWAY_TOKEN or keep the gateway .env in its usual folder.')
URL = os.environ.get('GATEWAY_URL', 'http://100.106.196.99:8766').rstrip('/') + '/v1/chat'
MODEL = 'gemini-3.8-flash-high'


def read(*p):
    return open(os.path.join(*p), encoding='utf-8').read().strip()


INSTRUCTIONS = '''You are a senior Malayalam script editor vetting a new episode of a Malayalam audio drama (KukuFM) for corrections.
The new episode must read as if it was written by Dhanya, whose ten client-approved episodes are given below as the style model.
The client likes her episodes for: the way they are written, the language, natural narration, the flow of the story, and how
descriptive they are about scenes and characters. The story must follow the client-approved short script for this episode.

Check and report, quoting the exact Malayalam text for each item:
1. Language errors: spelling, grammar, wrong word forms or case endings, typos.
2. Unnatural Malayalam: lines a native Kerala speaker would not say, or that sound translated or written; give a natural replacement.
3. Style mismatches with Dhanya's episodes: narration voice, dialogue paragraphs in single quotes, how speakers are tagged,
   punctuation, English words written in Malayalam script, each character's way of speaking (Namitha and Mohanan are from
   Rajakkad, Idukki).
4. Story problems: a beat of the short script missing or changed, wrong order, contradictions with the style guide's
   continuity facts, logic gaps, wrong names.
5. Description and flow: a place or a new character that needs a line of description, a jump between scenes.

Output: a numbered list. Each item: [category] [MUST or SHOULD] "exact quote" -> suggested correction - one-line reason.
MUST = an error, SHOULD = an improvement. Do not rewrite lines that are fine. End with a short overall verdict.
'''


def prompt(n):
    style = '\n\n'.join(read(show, f'ep{k}.txt') for k in range(6, 11))
    parts = [INSTRUCTIONS,
             '=== STYLE GUIDE (BIBLE.md) ===\n' + read(show, 'BIBLE.md'),
             '=== DHANYA\'S APPROVED EPISODES 6-10 (style model) ===\n' + style,
             f'=== CLIENT SHORT SCRIPT, EPISODE {n} (story source) ===\n' + read(repo, 'bb-v5', f'src_ep{n}.txt'),
             f'=== NEW EPISODE {n} TO VET ===\n' + read(show, f'ep{n}.txt')]
    return '\n\n'.join(parts)


out = os.path.join(base, 'gemini')
os.makedirs(out, exist_ok=True)
log = open(os.path.join(base, 'gemini_vet.log'), 'a', encoding='utf-8')
eps = [int(a) for a in sys.argv[1:]] or list(range(11, 49))
for n in eps:
    dst = os.path.join(out, f'ep{n}.md')
    if os.path.exists(dst) or not os.path.exists(os.path.join(show, f'ep{n}.txt')):
        continue
    for attempt in range(3):
        try:
            req = urllib.request.Request(URL, data=json.dumps({'prompt': prompt(n), 'model': MODEL}).encode(),
                                         headers={'Authorization': 'Bearer ' + tok, 'Content-Type': 'application/json',
                                                  'X-GH-App': 'bb-dhanya-vet'})
            r = json.load(urllib.request.urlopen(req, timeout=900))
            txt = r.get('response', '').strip()
            if not txt:
                raise ValueError('empty response')
            open(dst, 'w', encoding='utf-8').write(f'# Gemini ({MODEL}) notes on Episode {n}\n\n{txt}\n')
            log.write(f'{time.ctime()} ep{n} ok {r.get("duration_seconds")}\n'); log.flush()
            print(f'ep{n} ok')
            break
        except Exception as e:
            log.write(f'{time.ctime()} ep{n} attempt {attempt + 1} failed: {e}\n'); log.flush()
            print(f'ep{n} attempt {attempt + 1} failed: {e}')
            time.sleep(10)
