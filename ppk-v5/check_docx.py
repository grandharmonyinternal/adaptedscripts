# Verifies a client docx built by build_docx.py: headings, subheadings and story text identical to ep*.txt.
# Usage: python3 check_docx.py <first> <last> <file.docx>
import sys, os, re
from docx import Document
d = os.path.dirname(os.path.abspath(__file__))
first, last, path = int(sys.argv[1]), int(sys.argv[2]), sys.argv[3]
paras = [p.text.strip() for p in Document(path).paragraphs if p.text.strip()]
fail = []
if any(re.match(r'^\[(SFX|BGM):', p) for p in paras): fail.append('cue line present in client docx')
heads = [p for p in paras if re.fullmatch(r'Episode \d+', p)]
if heads != [f'Episode {n}' for n in range(first, last + 1)]: fail.append(f'episode headings wrong: {heads}')
for n in range(first, last + 1):
    lines = [l.strip() for l in open(os.path.join(d, f'ep{n}.txt'), encoding='utf-8') if l.strip()]
    want = [l for l in lines[1:] if not re.match(r'^\[(SFX|BGM):', l)]
    i = paras.index(f'Episode {n}') if f'Episode {n}' in paras else -1
    got = paras[i + 1:i + 1 + len(want)] if i >= 0 else []
    if got != want: fail.append(f'ep{n}: docx text differs from ep{n}.txt')
if fail:
    print('\n'.join(fail)); print('FAIL'); sys.exit(1)
print(f'DOCX VERIFIED {last - first + 1}/{last - first + 1}')
