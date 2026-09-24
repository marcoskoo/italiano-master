#!/usr/bin/env python3
"""Fix nested straight double-quotes inside TS string literals for exercises.ts.
Rule: for property values (prompt/statement/explain/sentence/etc.), the string
starts right after `: "` and must end right before `",` (or `"` then `,`/end).
Any interior `"` is converted to typographic “ or ” alternating.
"""
import re, sys

path = "/home/z/my-project/src/lib/lms/exercises.ts"
src = open(path, encoding="utf-8").read()
out_lines = []
fixed = 0

KEYS = r'(?:prompt|statement|explain|sentence|source|text|es)'

for line in src.split("\n"):
    m = re.match(r'^(\s*' + KEYS + r':\s*")(.*)("\s*,?\s*)$', line)
    if m and '"' in m.group(2):
        body = m.group(2)
        # alternate curly quotes: first inner " → “, next → ”, etc.
        new_body = []
        open_q = True
        for ch in body:
            if ch == '"':
                new_body.append("“" if open_q else "”")
                open_q = not open_q
            else:
                new_body.append(ch)
        line = m.group(1) + "".join(new_body) + m.group(3)
        fixed += 1
    out_lines.append(line)

open(path, "w", encoding="utf-8").write("\n".join(out_lines))
print(f"fixed {fixed} lines")
