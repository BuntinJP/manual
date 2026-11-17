# col(1) independent translation review

- Translation snapshot: `recovery-work/linux-bsd-col-ja.json`
- SHA-256: `8cbfc65bf5de4d3235674556701eb92b53145992bba8d5d3868073be86568de2`
- Source leaf: `manuals/util-linux/bsd-utils/2.41/linux-upstream/1/col/c09e40db3321`; util-linux 2.41, source man date 2025-02-26.
- Reviewed every segment s0001–s0062 (62/62), reading English request and Japanese side by side, plus full prepared source.roff and relevant IR blocks.

## Semantic outcome
No substantive mistranslation, missing condition, number change, reversed negation or token loss identified.

Checked reverse/full and half-reverse line feeds versus forward/half-forward output; fine mode permits half-forward movement while normal half-boundary text prints on following line; whitespace-to-tab conversion; --tabs versus --spaces direction; --no-backspaces retains only last character per column; minimum line buffer and 128-line default; --pass preserves unknown sequences versus normal filtering; specification extension -l; character-set tracking; warning at the last flushed line; history and cross-references.

Control table checked individually: ESC then 7 = reverse line feed, ESC then 8 = half reverse, ESC then 9 = half forward; BS 8 and ignored at first column; newline 10 includes carriage return; carriage return 13; shift in 15 normal set; shift out 14 alternate set; space 32 moves one column; tab 9 moves to next tab stop; vertical tab 11 reverses a line. **This particular source explicitly labels the numeric values decimal, not octal.** Japanese s0028 correctly says 10進数; no octal conversion should be introduced. Literal ESC-7/8/9 sequences retain their original protected values.

## English license appendix
s0062 only translates the appendix heading. The following IR block is a non-translatable `literal` containing the original English UC Regents 1990 notice, Michael Rendell attribution, all four conditions (including advertising acknowledgement), and the complete warranty/liability disclaimer. Compared the full literal against source.roff appendix: identical after whitespace normalization, not byte-identical layout (IR has normalized blank lines/indentation). The source adoc license material also carries the 1990 notice. The generic COPYING.BSD-4-Clause-UC has a 1989 notice, so it was not substituted for the col-specific appendix. No English license text was translated or removed by this JSON. Final rendered placement is for the parent pipeline to verify; no generated page was modified here.

## Mechanical checks, distinct from semantic reading
62 exact IDs present, exact token multisets for each segment, all request texts match corresponding IR segments, source and IR hashes match request metadata. Hash checks establish identity only, not meaning. Original source preparation/provenance caveats in source-observations.md remain applicable.

Only this review file was written. No JSON, canonical source, queue, generated pages or git changes. No command from the document was run.
