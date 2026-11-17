# Linux BSD-derived col extraction audit

Independent read-only audit of `manuals/util-linux/bsd-utils/2.41/linux-upstream/1/col/c09e40db3321`, 2026-11-17. Only this report was written. Source, IR, queue, UI and Git refs were not modified.

## Verified

- Source SHA-256, IR source binding and all six manifest material hashes match actual saved bytes.
- The prepared original body equals original-col.1 with exactly the recorded unused MTO alias/groff-only www.tmac stanza removed, plus a terminating newline. No MTO invocation exists in the original. The existing URL fallback remains.
- Independently rendered original, prepared original body (without appendix), and prepared complete source with `/usr/bin/mandoc -Thtml` using stdin/in-memory output. All exit 0 with empty diagnostics.
- Original vs prepared original-body rendered text is identical after whitespace removal. Anchor href/text sequences are identical. Both external URL strings and surrounding text survive unchanged. They are plain text produced by the original URL fallback, not clickable external anchors; preparation does not introduce this limitation.
- Prepared complete manual body vs recursively reconstructed IR (protected tokens expanded in document order) is exactly equal after whitespace removal: 3,708 characters each.
- 62 segments, referenced once each; 11 headings, 51 paragraphs, one literal. The 11 headings include all original 10 sections and the explicit original-English license appendix.
- All mandoc preformatted text equals IR literal text exactly after removal of boundary newlines. No literal control bytes other than normal tab/newline are present in source.roff. The NOTES control names, escape forms and decimal values survive the full-text comparison, including ESC-7/8/9, backspace 8, newline 10, carriage return 13, shift in 15, shift out 14, space 32, tab 9, vertical tab 11.
- Source appendix exactly reproduces the adoc copyright block up to (excluding) the Berkeley SCCS identification line: copyright, contribution notice, all four conditions, full disclaimer. The original adoc including SCCS identification is retained as a hashed material.
- License IR retains every non-whitespace character exactly. Mandoc changes blank-line placement under `.nf`, adding blank lines before some indented continuation lines and removing some original paragraph gaps. Thus literal IR is exact relative to mandoc output, not byte-identical to adoc. This is a formatting difference, not omitted license wording.
- Source observations and release record explicitly say detached signature verification was not performed. Hash consistency is not signature verification.

## Assessment and scope

No blocking extraction/preparation defect found. Do not describe the license IR as byte-identical to adoc: only the prepared roff appendix is exact, while rendered/IR wording is equal ignoring whitespace. Original material and provenance clearly distinguish prepared source from upstream bytes.

This is a source/preparation/extraction audit, not Japanese semantic review or legal advice. No signature authentication or fresh remote download was performed. The parser safety check still visibly rejects aliases and external includes; this audit did not modify or weaken it. The new lineage classification does not imply all util-linux utilities are BSD-derived.
