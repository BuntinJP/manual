# AIX formal manual availability check

Checked 2026-11-17. Read-only public-source research; no source intake, translation, queue change, or login.

## Finding

Do not mark AIX unavailable. IBM publishes AIX documentation, and IBM explicitly explains that its AIX man pages use the HTML pages also published in Knowledge Center. Thus HTML is not inherently a lesser or non-man source for AIX. However, this check did **not** successfully verify the individual AIX 7.3 cut/paste/diff reference bodies, their exact document revisions, installed fileset parity, or individual manual section identifiers. Leave translation coverage **unregistered / source verification pending**, not translated, and do not label guessed `cut(1)` etc.

## Verified primary evidence

- [IBM Support: Why is the local man page different from the Knowledge Center command reference?](https://www.ibm.com/support/pages/why-local-man-page-different-knowledge-center-command-reference), document 6360809, modified 2020-11-06, applies to all versions: AIX man pages are HTML shared with Knowledge Center; local HTML is distributed in `infocenter.man.XX_XX.commands`. Online English updates may precede the installed documentation filesets and translation releases. This supports the format/provenance relationship, but does not prove an exact AIX 7.3 local revision matches today's web page.
- [IBM AIX Version 7.3: Operating system management PDF](https://www.ibm.com/docs/sv/ssw_aix_73/pdf/osmanagement_pdf.pdf): indexed English content explicitly contains cut and paste usage guidance (printed page 193). This verifies published AIX 7.3 documentation for those commands, **not** a complete command-reference/man source. The `/sv/` URL serves indexed English content; do not infer a Swedish translation from the path. Exact PDF edition/date not inspected.
- [IBM paste Command, AIX 7.1](https://www.ibm.com/docs/en/aix/7.1.0?topic=p-paste-command): public HTML body retrieved, including purpose and syntax. The old `ssw_aix_71/p_commands/paste.html` URL redirected here. This is older-version evidence only, not a substitute for 7.3.
- [IBM diff Command, AIX 7.2](https://www.ibm.com/docs/en/aix/7.2.0?topic=d-diff-command): search index exposes command-reference description and exit status; direct fetch returned HTTP 403. Again, not evidence for exact 7.3 text.

## AIX 7.3 candidate reference routes and observed limits

| Command | Candidate official route | Result in this check |
| --- | --- | --- |
| cut | https://www.ibm.com/docs/en/aix/7.3.0?topic=c-cut-command | Fetch cache miss; body and page existence not independently verified |
| paste | https://www.ibm.com/docs/en/aix/7.3.0?topic=p-paste-command | HTTP 403; body not verified |
| diff | https://www.ibm.com/docs/en/aix/7.3.0?topic=d-diff-command | HTTP 403; body not verified |
| man | https://www.ibm.com/docs/en/aix/7.3.0?topic=m-man-command | HTTP 403; body not verified |

These are candidate routes constructed from IBM's observed topic pattern, **not confirmed canonical page URLs**. Alternative legacy-style `en/ssw_aix_73/{c,p,d,m}_commands/{command}.html` routes were unavailable through the research tool. No access control bypass was attempted.

## Next safe step

When public IBM Docs content can be read normally, resolve the 7.3 reference pages through its navigation, preserve the full rendered/source HTML plus retrieval date and hash, and identify exact product version and any revision metadata. Treat raw roff as optional rather than required: IBM's documented distribution is HTML. No publicly downloadable raw roff for these AIX 7.3 commands was verified; this is an absence of evidence, not a claim none exists. Do not invent a numeric manual section or a TL/SP revision. Public readability is not redistribution/translation permission, and this report grants no licensing approval.
