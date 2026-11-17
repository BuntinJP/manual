# smb.conf Japanese translation: part 1 review

## Delivered scope

- Assigned and translated all 300 segments, s2818–s3117 inclusive.
- File: `recovery-work/smb-part-1-ja.json`.
- 48 parameter headings retained verbatim; 46 empty term segments remain empty; 206 paragraph segments translated or protected-only content retained.
- Translation was written and self-reviewed against the supplied English segment text, with protected substitutions inspected for the security-sensitive and inline-emphasis passages. This is a translation review of this assigned range, not an independent technical verification of Samba behavior or a review of the whole manual.
- No queue, accepted translation, generated page, Git branch or other worker's file changed. The Python builder in this same directory is a reproducibility helper only.

## Checks actually performed

1. Compared source English and Japanese for the assigned prose, checking conditions, negations, priority/override direction, deprecation and safety warnings, numbers and defaults. Headings, examples, parameter names and protected content are retained. Self-review clarified s3004 so the `client use krb5 netlogon` option is explicitly the option whose effective value is off.
2. All assigned request segment texts equal the corresponding texts in the checked-out `ir.json`.
3. SHA-256 of the local source.html and ir.json exactly matches request/output metadata:
   - source: `04dcc678b4e4f08a0f5c37cd2143140e999de660aa71e38def0db9ce8555d4b0`
   - IR: `1996c9a42715f6e442297bc3fbac9cade7ccf822758fd6d704d044eb4305628b`
4. Builder checked exact protected-token multisets for every segment.
5. Repository `validateTranslation` passed on the 300-segment IR subset, checking schema, source/IR metadata, complete expected IDs, non-empty translations where required, protected token multiplicity, and balanced inline styles. This was a read-only validation and did not accept or save to the queue.

## Source issues retained rather than silently corrected

- s2831: the original example says increment 2, maximum 5, then delays 0, 2, 4, and 4 on all subsequent restarts. Retained all numbers and the stated behavior, although the preceding description could suggest a different cap interpretation.
- s2919: the original says nine printing styles but lists ten protected style names. Retained “9” and all ten names; an upstream correction is separate work.
- s2887: retained the supplied source's CVE-2026-4480 reference and requirement for direct single quotes around %J. The CVE reference was not externally verified.

No unresolved translation blocker in the assigned range. Parent still needs to combine batches, perform full-manual queue/accept/render checks and site tests, and decide how to communicate upstream-source inconsistencies.
