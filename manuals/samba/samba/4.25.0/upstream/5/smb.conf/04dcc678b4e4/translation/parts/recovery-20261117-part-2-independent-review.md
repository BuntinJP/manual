# Independent review: smb.conf part 2

## Reviewed artifact and scope

- Artifact: `recovery-work/smb-part-2-ja.json`
- SHA-256 of inspected bytes: `15f11f45c4a58f06f5f0b0635ad69a8cad63aaa0471414cdca114e7512ecd42f`
- All 300 request entries inspected: **s3118–s3215 (98)** and **s3516–s3717 (202)**. These are two disjoint ranges, not s3118–s3417.
- Composition: 217 paragraphs, 42 headings, 41 empty terms. The 41 empty terms remain empty.
- Reviewer did not author this translation. No translation/queue/generated/Git file was modified by this review.

## Meaning review (distinct from mechanical checks)

Read every English/Japanese pair in three complete 100-entry blocks and then read the protected-value mappings for all entries containing tokens. Compared meaning, negation, conditions, restrictions, defaults, numeric constants, option names and warnings. In particular:

- s3118–s3144: RPC role limits, NETLOGON exception, 0/default and port examples, mandatory `no` when samba-dcerpcd runs as a daemon, removed parameter and no-default wording.
- s3145–s3215: security modes, authentication-before-resource-name ordering, guest requirements, domain/ADS limitations, protocol values/defaults and SMB1 exception.
- s3516–s3575: SMB2 byte/size limits and dialect conditions; directory-lease dependencies; cluster flags, announcement conditions, AND/not logic, disk-only restrictions, explicit warnings.
- s3576–s3617: synchronous default; write-time lookup tradeoff; extended-attribute limits, OS restrictions, fallback conditions; profile activation prerequisite and defaults.
- s3618–s3663: socket performance warnings, numeric arguments and defaults, literal option names, no-spaces requirement, SPN command path.
- s3664–s3717: driver architecture match requirement; all Windows version numbers and default/example values; Spotlight prerequisites, no-result backend, stat cache and persistent/non-persistent TDB distinction.

**Result: no required translation correction found in these 300 entries.** The conditions, negations, numbers and defaults inspected retain their supplied source meaning. This is a translation accuracy review, not a verification that every upstream technical assertion is correct today.

## Non-blocking findings / source issues

1. **s3530, optional clarity only:** “逆の場合は有効になります” correctly follows the original inverse relationship, but explicitly saying “clustering が無効な場合は smb3 directory leases が有効になります” would reduce pronoun ambiguity. Existing wording is not an inversion or omission.
2. **s3558, upstream cross-reference mismatch:** the CLUSTER section's protected option is `smb3 share cap:SCALE OUT`, although it describes controlling SMB2_SHARE_CAP_CLUSTER. Both local IR and source HTML contain this mismatch; translation preserves it. Do not silently replace its protected token.
3. **s3650, upstream internal inconsistency:** literal syntax/example contains spaces around `=`, while the following sentence forbids them. Translation faithfully retains both. The local source HTML confirms this discrepancy.
4. **s3137 / s3187 / s3671 and related repeated OS descriptions:** source says “replication topology replication”; calls NT1 the current up-to-date version; and calls os_major/os_minor settings “build number.” These questionable source descriptions were reproduced rather than newly introduced by translation. Raw source HTML spot checks confirmed these phrasings. Correcting technical source material is separate from translation acceptance.
5. Minor terminology variation (“同義語” versus other batches' “別名”, “ブール値” versus “真偽値”) is stylistic, not a semantic defect or release blocker.

## Mechanical provenance and integrity checks

These checks are recorded separately and are **not** the basis for claiming meaning review:

- Every request English text equals its corresponding checked-out IR segment.
- Source HTML SHA-256 equals `04dcc678b4e4f08a0f5c37cd2143140e999de660aa71e38def0db9ce8555d4b0`.
- IR SHA-256 equals `1996c9a42715f6e442297bc3fbac9cade7ccf822758fd6d704d044eb4305628b`.
- Repository `validateTranslation` passed against the exact 300-ID IR subset: schema/hash bindings, expected ID coverage, required non-empty values, exact protected-token multiplicities and balanced inline styles.
- Full-manual merge/queue acceptance/rendering/build testing remains the parent's responsibility. This review does not cover unassigned segments or generated pages.
