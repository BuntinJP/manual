# smb.conf Japanese part 3 review

- Scope: s3718–s4017, exactly 300 segments, Samba 4.25.0 smb.conf.
- Output: `smb-part-3-ja.json`; all IDs present, locale ja, original source/IR hashes retained.
- Read and translated all prose in this assigned request; reviewed each against its English request text for meaning, negation, conditions, numbers, and option names. Parameter headings, empty definition entries, protected values, and literal `veto files : NAME =` remain unchanged; Default/Example/No default labels translated.
- Compared request text and kind for all 300 segments with source `ir.json`. Verified SHA-256 of source.html and ir.json equals request metadata. Consulted protected expansions for keytab commands, init script paths, user remapping, and veto-file deletion. Existing queue terminology sample consulted; no queue modified.
- Automated checks passed: exact 300-ID coverage, exact placeholder multisets for every segment, properly nested em/strong tokens. UNC path escaping in s3934 corrected to match the IR exactly.
- Semantic checks particularly covered: strict allocation caveats and historical filesystem claims; strict sync version/default change; keytab disabled/default differences; TLS verification hierarchy and mandatory CA/CRL/name checks; root password synchronization; print-driver prohibition; username map order, stop marker and authentication timing; usershare ownership/allow-deny order; veto deletion unless-condition.
- Source observations retained without silently modernizing: s3786 says no other net subcommands use disabled; older OS/filesystem behavior and version claims are historical upstream statements. s4008–s4010 intentionally form a sentence around a literal syntax example.
- No unresolved translation issue identified in assigned scope. This is the translator’s self-review, not independent expert review. Full renderer/build/manual validation and final PR integration remain for parent; no queue/generated pages/git touched.
