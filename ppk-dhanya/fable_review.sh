#!/bin/bash
# Claude Fable 5.2 (low effort) vet-and-fix pass via the claude CLI.
# Usage: bash ppk-dhanya/fable_review.sh FIRST LAST
cd "$(dirname "$0")"
claude -p --model claude-fable-5-2 --effort low \
  --allowedTools "Read,Edit,Bash(python3 tools.py *)" \
  "You are a Malayalam script editor. Vet and fix ep$1.txt … ep$2.txt in this folder (edit only those). Read BIBLE.md and the approved ep6.txt–ep8.txt for style; story source is ../ppk-v5/src_epN.txt (every beat present, in order). Fix only real problems: spelling/grammar/case errors, lines a Kerala speaker would not say, back-to-back dialogue with no narration between, missing client beats, contradictions, scene jumps. Keep the format (single-quote dialogue paragraphs, '..', no Latin letters/digits/double quotes) and 580–850 words. Then run: python3 tools.py normalize $1 $2 && python3 tools.py check $1 $2 and fix until clean. Reply with a short list of fixes per episode."
