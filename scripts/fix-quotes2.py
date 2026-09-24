#!/usr/bin/env python3
"""Context-aware fix: convert INNER straight double-quotes (adjacent to natural
text on both sides) into typographic quotes. Structural quotes (adjacent to
code delimiters like , { } [ ] : ) are preserved."""
import sys

path = "/home/z/my-project/src/lib/lms/exercises.ts"
src = open(path, encoding="utf-8").read()

STRUCT_NEXT = set(',:}])\n')
STRUCT_PREV = set('{,:[(\n=')

def prev_nonspace(s, i):
    j = i - 1
    while j >= 0 and s[j] in ' \t':
        j -= 1
    return s[j] if j >= 0 else ''

def next_nonspace(s, i):
    j = i + 1
    while j < len(s) and s[j] in ' \t':
        j += 1
    return s[j] if j < len(s) else ''

out = []
count = 0
for i, ch in enumerate(src):
    if ch != '"':
        out.append(ch)
        continue
    p = prev_nonspace(src, i)
    n = next_nonspace(src, i)
    # structural if clearly a delimiter on either side
    if p in STRUCT_PREV or n in STRUCT_NEXT:
        out.append(ch)
        continue
    # inner quote: decide open/close by previous char
    if p.isalnum() or p in '.!?’”':
        out.append('”')
    else:
        out.append('“')
    count += 1

open(path, "w", encoding="utf-8").write("".join(out))
print(f"converted {count} inner quotes")
