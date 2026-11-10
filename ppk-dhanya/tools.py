# Tools for the Dhanya-style Paavam Paavam Kodeeswaran episodes (bb-dhanya/epN.txt).
# Usage:
#   python3 tools.py normalize 11 48        rewrite epN.txt in Dhanya's encoding and punctuation
#   python3 tools.py check 11 48            report length, names and format problems
#   python3 tools.py docx 1 48 out.docx     build a docx in the same layout as Dhanya's approved doc
# Episode file: line 1 "Episode- N", then one paragraph per line (dialogue paragraphs in '...').
import os, re, sys

D = os.path.dirname(os.path.abspath(__file__))
ZWJ = '‍'
# Dhanya types chillus the old way (consonant + virama + ZWJ), never the atomic letters.
CHILLU = {'ൺ': 'ണ', 'ൻ': 'ന', 'ർ': 'ര', 'ൽ': 'ല', 'ൾ': 'ള', 'ൿ': 'ക'}
# Names and places from the client script that Dhanya replaced (see BIBLE.md).
LEAKS = ['പിയൂഷ്', 'മുംബൈ', 'ഈശ്വരന്']


def path(n):
    return os.path.join(D, f'ep{n}.txt')


def normalize_text(t):
    for atomic, base in CHILLU.items():
        t = t.replace(atomic, base + '്' + ZWJ)
    for q in ['“', '”', '‘', '’', '"']:
        t = t.replace(q, "'")
    t = t.replace('…', '..')
    lines = [re.sub(r'[ \t]+', ' ', l).strip() for l in t.replace('\r', '').split('\n')]
    return '\n'.join(l for l in lines if l) + '\n'


def body(n):
    lines = open(path(n), encoding='utf-8').read().split('\n')
    return lines[0], [l for l in lines[1:] if l.strip()]


def check(n):
    head, paras = body(n)
    text = '\n'.join(paras)
    words = len(text.split())
    issues = []
    if head != f'Episode- {n}':
        issues.append(f'heading is {head!r}')
    if not 580 <= words <= 850:
        issues.append(f'{words} words (want 580-850)')
    if re.search(r'[A-Za-z]', text):
        issues.append('Latin letters: ' + ' '.join(sorted(set(re.findall(r'[A-Za-z]+', text)))[:8]))
    if any(c in text for c in CHILLU):
        issues.append('atomic chillu letters (run normalize)')
    if re.search(r'[0-9]', text):
        issues.append('digits: ' + ' '.join(re.findall(r'[0-9]+', text)))
    for name in LEAKS:
        if name in text:
            issues.append(f'client name/place left in: {name}')
    for i, p in enumerate(paras, 2):
        if p.count("'") % 2:
            issues.append(f'line {i}: odd number of quote marks')
    if text.count('!') > 2:
        issues.append(f'{text.count("!")} exclamation marks (Dhanya uses almost none)')
    if 'തുടരും' in text and n != 43:
        issues.append('"തുടരും" line (Dhanya never writes it)')
    return words, issues


def docx(first, last, out):
    from docx import Document
    from docx.shared import Pt
    doc = Document()

    def para(text=''):
        p = doc.add_paragraph()
        if text:
            r = p.add_run(text)
            r.bold = True
            r.font.name = 'Arial Unicode MS'
        return p

    para('Paavam Paavam Kodeeswaran')
    for n in range(first, last + 1):
        head, paras = body(n)
        para()
        para(head)
        for p in paras:
            para(p)
            para()
    doc.core_properties.title = f'Paavam Paavam Kodeeswaran (Malayalam) Episodes {first}-{last}'
    doc.core_properties.author = 'Grand Harmony Studios'
    doc.save(out)
    print('saved', out)


if __name__ == '__main__':
    cmd, a, b = sys.argv[1], int(sys.argv[2]), int(sys.argv[3])
    if cmd == 'normalize':
        for n in range(a, b + 1):
            if os.path.exists(path(n)):
                t = open(path(n), encoding='utf-8').read()
                open(path(n), 'w', encoding='utf-8').write(normalize_text(t))
        print('normalized')
    elif cmd == 'check':
        bad = 0
        for n in range(a, b + 1):
            if not os.path.exists(path(n)):
                print(f'ep{n}: MISSING'); bad += 1; continue
            words, issues = check(n)
            print(f'ep{n}: {words} words' + ('' if not issues else ' | ' + '; '.join(issues)))
            bad += bool(issues)
        print('ALL CLEAN' if not bad else f'{bad} episode(s) to fix')
    elif cmd == 'docx':
        docx(a, b, sys.argv[4])
