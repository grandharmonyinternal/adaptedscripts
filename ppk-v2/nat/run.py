import json, os, re, sys, time, urllib.request
base = os.path.dirname(os.path.abspath(__file__))
tok = None
for line in open(r'C:\Users\ARUN\gemini-tailscale-gateway\.env', encoding='utf-8'):
    if line.startswith('GATEWAY_TOKEN='): tok = line.split('=',1)[1].strip()
prompt = open(os.path.join(base,'prompt.txt'), encoding='utf-8').read()
os.makedirs(os.path.join(base,'out'), exist_ok=True)
log = open(os.path.join(base,'run.log'),'a',encoding='utf-8')
eps = [int(a) for a in sys.argv[1:]] or list(range(1,44))
for n in eps:
    dst = os.path.join(base,'out',f'ep{n}.txt')
    if os.path.exists(dst): continue
    src = open(os.path.join(base,'in',f'ep{n}.txt'),encoding='utf-8').read().strip()
    paras = [p for p in src.split('\n') if p.strip()]
    body = '\n\n'.join(paras)
    for attempt in range(3):
        try:
            req = urllib.request.Request('http://100.106.196.99:8766/v1/chat',
                data=json.dumps({'prompt': prompt + body, 'model':'gemini-3.8-flash-high'}).encode(),
                headers={'Authorization':'Bearer '+tok,'Content-Type':'application/json','X-GH-App':'ppk-naturalise'})
            r = json.load(urllib.request.urlopen(req, timeout=900))
            txt = r.get('response','').strip()
            if not txt.startswith(f'Episode {n}'): raise ValueError('bad header')
            open(dst,'w',encoding='utf-8').write(txt+'\n')
            log.write(f'{time.ctime()} ep{n} ok {r.get("duration_seconds")}\n'); log.flush()
            break
        except Exception as e:
            log.write(f'{time.ctime()} ep{n} attempt{attempt} ERR {type(e).__name__} {str(e)[:200]}\n'); log.flush()
            time.sleep(20)
log.write(f'{time.ctime()} DONE\n')
