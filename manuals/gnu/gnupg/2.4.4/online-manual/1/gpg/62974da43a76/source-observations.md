# Source observations

Requested: GNU PG (gpg)
Source: https://gnupg.org/documentation/manuals/gnupg24/gpg.1.html
The online manual footer explicitly identifies GnuPG 2.4.4, 2024-01-25. This records the document version, not a claim about the latest GnuPG binary.

Queued for translation. Source/IR extraction checks and semantic review remain agent work.


## GNU documentation licence evidence, 2026-11-17

The preserved online man page does not contain an explicit document copyright/permission notice. Primary tagged upstream gpg/gnupg gnupg-2.4.4 doc/gpg.texi explicitly says it is part of the GnuPG manual and refers copying conditions to gnupg.texi. That same tag doc/gnupg.texi @copying explicitly licenses the document under GPL version3 or later, not merely the product code. The full tagged files and COPYING are retained verbatim with SHA256 material hashes; their Git blob hashes were also verified. These are primary licensing/source references for the matching2.4.4 distribution; byte identity of the saved online HTML to a locally rebuilt tag is not asserted. Preserve these notices with derived distributions and do not represent an unofficial Japanese notice as copyright-holder-approved.
- provenance/gpg-gnupg-2.4.4.texi Git blob 1bc2bd9e4935ce7e7f960e4bcc3bec2b6f91ab1f; https://github.com/gpg/gnupg/blob/gnupg-2.4.4/doc/gpg.texi
- licenses/gnupg-manual-gnupg-2.4.4.texi Git blob 78d4669dac64c9ed2493fff6ed9cf0be3a15fd14; https://github.com/gpg/gnupg/blob/gnupg-2.4.4/doc/gnupg.texi
- licenses/COPYING.gnupg-2.4.4 Git blob ccbbaf61b794c7aaea10dffb486095fdc8f3a44a; https://github.com/gpg/gnupg/blob/gnupg-2.4.4/COPYING

## Non-LI content recovery, 2026-11-17

The upstream HTML has meaningful nested UL, bare text and SAMP directly under UL/OL. The old parser kept only LI, silently dropping23 direct-child nodes/groups including most edit-key menu, list/verify/import/export/debug options. The parser now preserves contiguous unexpected child groups in document order as implicit list items, without guessing which neighbouring item they belonged to, and records a warning. Active content is still discarded. Original source bytes are unchanged; regression tests and a new IR/queue hash are required. Previously saved old-IR partials are superseded/unaccepted and retained for audit/rebinding.
