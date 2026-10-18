# Verifies the client docx built from ep*.txt: 48 episode headings, no cue lines, story text identical to the files.
import sys, os, re
from docx import Document
d = os.path.dirname(os.path.abspath(__file__))
path = sys.argv[1] if len(sys.argv) > 1 else os.path.expanduser("~/Downloads/The Billionaire's Lost Bride - Episodes 1-48.docx")
doc = Document(path)
paras = [p.text.strip() for p in doc.paragraphs if p.text.strip()]
fail = []
if any(re.match(r'^\[(SFX|BGM):', p) for p in paras): fail.append('cue line present in client docx')
heads = [p for p in paras if re.fullmatch(r'Episode \d+', p)]
if heads != [f'Episode {n}' for n in range(1, 49)]: fail.append(f'episode headings wrong: {len(heads)}')
for n in range(1, 49):
    lines = [l.strip() for l in open(os.path.join(d, f'ep{n}.txt'), encoding='utf-8') if l.strip()]
    want = [l for l in lines[1:] if not re.match(r'^\[(SFX|BGM):', l)]
    i = paras.index(f'Episode {n}') if f'Episode {n}' in paras else -1
    got = paras[i + 1:i + 1 + len(want)] if i >= 0 else []
    if got != want: fail.append(f'ep{n}: docx text differs from ep{n}.txt')
if fail:
    print('\n'.join(fail)); print('FAIL'); sys.exit(1)
print('DOCX VERIFIED 48/48')
