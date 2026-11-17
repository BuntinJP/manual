# RFC 9580 OpenPGP Japanese full candidate review

## Status and scope
Complete candidate: 3079/3079 requested segments in 534d08e34c5dfee4-ja.json, bound to the current repaired source/request/IR. Existing validateTranslation passes for all ten parts individually and for the full candidate. Original preserved source SHA256 rechecked and matches request. Candidate only: no acceptance, queue operations, rendering, commits or PR by this worker.

Review type: translation worker's semantic self-review across all ranges, plus parent independently repaired/retranslated and reviewed initial math s0169/s0172 and bound first300 to new IR. This is NOT independent semantic review of the whole document. Detailed actual checks, source caveats and incomplete-at-the-time status are retained in each ten part reviews; those historical partial-status statements do not mean the full candidate lacks those ranges.

Parts assembled:0001–0300(parent repaired version),0301–0600,0601–0900,0901–1200,1201–1500,1501–1800,1801–2150,2151–2450,2451–2770,2771–3079. No gaps, duplicates or source-hash mixing. Old ab1dffee job/candidate was not used.

## Final-to-part differences (exhaustive)
Only s0038,s0039,s0040,s0041 differ from the latest on-disk parts. Exact before/after text is in 534d08e34c5dfee4-final-differences.json.
- s0038: heading changed to「著作権表示（原文と非公式参考訳）」.
- s0039: full original English copyright notice comes first with its original single protected pilcrow token, followed by「非公式参考訳:」and Japanese notice without duplicate token.
- s0040: full original English BCP78/IETF Trust/Code Components/Revised BSD notice comes first with each original link/pilcrow token once, followed by labelled unofficial Japanese reference translation. Japanese link token replaced by「上記参照先」and Japanese pilcrow removed.
- s0041: full original English pre2008 material qualification/translation exception comes first with its single token, followed by labelled unofficial Japanese reference translation without duplicate token. Added explicit statement that this Japanese translation is not an official IETF/IETF Trust-approved translation and normative original is English RFC9580.

No original notice removed; no claim of IETF approval. All untouched part text preserved exactly in full assembly. Separately, final QA caught and corrected s2551 in part2451–2770 from accidental English heading restoration to「16.2. 参考情報の文献」before assembly. Parent was notified to supersede any earlier stale queued version of that segment. It is not an additional final-to-current-part difference.

## Whole-source backwards extraction audit
Reran stdlib HTMLParser text-node comparison over the ENTIRE preserved source body (excluding script/style/head presentation data), reconstructing full IR segment text plus protected inline text and literal blocks. 9790 nonempty text nodes scanned,0 unmatched. Retained result:534d08e34c5dfee4-extraction-unmatched.json. Audit is backwards from source nodes, not only selected-region or translated-segment matches.

Source31 tables/148 pre blocks correspond to IR31 table/148 literal blocks. Recursive IR inventory:2598 paragraphs,307 headings,148 literals,130lists,31tables,18definitions,1quote. This includes notes, nested lists, registry tables, normative/informative references, appendix hex dumps/examples and author information. Text-node presence/counts alone cannot establish all nesting/visual fidelity; final renderer review remains parent's work.

Earlier actual source inspection found20 sup instances semantically flattened by parser. Parent formally repaired sup/sub extraction and issued current new job/IR. Current IR has20sup,1sub,6strong opening styles. All native sup/sub token pairs remain balanced in full candidate; powers include Argon2 2^encoded_m/2^31/2^21, RSA/Elgamal/DSA exponents, trailer2^32, Curve25519 bounds2^254/2^255, AEAD chunk2^22, and algorithm table powers. Do not substitute stale old-IR candidate.

## Semantic checks and limits
Each requested source segment was read, translated and compared during its part. Reviewed in particular MUST/SHOULD/MAY/SHALL/REQUIRED/RECOMMENDED/OPTIONAL strengths, NOT clauses, defaults/absence/zero rules, AND/OR conditions, inclusive/exclusive numerical bounds, algorithm identities/versions, public-versus-secret and primary-versus-subkey roles, byte ordering, constants and units. Final mechanical counts found no per-segment differences for normative uppercase keyword counts or MUST NOT/SHOULD NOT/SHALL NOT/NOT RECOMMENDED phrase counts outside the intentional duplicated unofficial legal prose. Counts supplement, not replace, semantic review.

Reviewed encryption/signature/hash order, MPI bit count and stream boundary rules, S2K octet-versus-iteration counts and Argon2 constraints, native seed-versus-scalar, X25519/X448 versus Ed25519/Ed448 lengths, HKDF input/salt/info, RSA EME-versus-EMSA and decode-versus-decrypt, signed/unsigned subpacket authority, revocation/delegation, v4/v6 payload/ESK/OPS correspondence, fingerprint low64-versus-high64, CFB resynchronization distinction, MDC boundaries versus AEAD tag failure/streaming truncation, final tags/nonce indices, cleartext normalization/dash escaping, CRC no-reject/no-generate rules, traffic analysis, session-key-reuse recipient pitfalls, IANA registration policies, references and examples. See per-part reviews for concrete values and decisions.

Final unchanged-English-prose scan found no ordinary prose placeholders. Remaining identical entries are code/algorithms/formulas/OID/hex/numeric/citation data, protected-only content, proper names such as SequoiaPGP/bzip2 publication identity, HKDF info parameter labels and ASCII Armor name. Bibliography titles and metadata are translated; author/publication names, identifiers, DOI/ISBN and page ranges preserved. No invented versions/licences. Generic Unix glossary primary=一次式 was not applied to crypto keys.

## Source caveats deliberately not silently corrected
- s0601 describes q as the group generated by DSA generator; preserved source description, though later q is a group order.
- s1017 and appendixA12 mention Argon2 with v4SKESK/CFB-era examples; source preserved despite other contexts restricting Argon2 secret-key protection toAEAD.
- s1886 wording joins version4fingerprint calculation 'for purposes of' MDC; preserved as upstream rather than inventing separate exception wording.
- s2106 original says '2-bit count octets' in a context of2-octetMPI count; preserved literal inconsistency and documented.
- s2962 m=21 is as source (encoded parameter), unlike earlier actual sup2^21; not silently changed.
- s3012 upgrade list spells EdDSA25519Legacy differently from main Ed25519Legacy; preserved.
- Bibliography irregularities (JKS02 DOI0.1007 prefix, KR02 paper/date mismatch, SEC1 empty field, C99 label versus2018standard, AES mixed update/publicationdates) retained.

These are observations for operator review, not claims that the source specification is corrected. Original bytes unchanged. No manual code, commands or examples executed; only repository validation used.

## Rights and remaining handoff
Source copyright and IETF Trust/BCP78 qualifications, RevisedBSD CodeComponent requirements and pre2008 translation exception remain in English in final, with explicitly unofficial Japanese reference text. Rights observations do not gate local translation; publication/delivery decisions remain operator's. Final candidate has no untranslated ranges. Parent still owns independent review as warranted, queue persistence including final-only four-segment overrides and corrected s2551, acceptance, rendering/visual and search verification, repository tests, commits and PR.


## キュー受理の最終バインド

sourceSha256: 28315eaa57c371658d749783db3786f207ff80478862547199635f2a425a8c91
irSha256: 172f4df34d949dd53b769615fdece14a65098d7a829aa610f65d2655b0c5b9a1
draftSha256: bdcdab2e8dd055b0818e72908fcabbcfdeed55ea0d55374ebec106e2be30964a

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
