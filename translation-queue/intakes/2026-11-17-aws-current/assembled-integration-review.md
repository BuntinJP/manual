# AWS assembled integration review

## Conclusion, scope and unresolved items

PASS: No blocking mapping or delta-context defect found. All 155 candidate pages / 32,430 mappings independently verified against actual source IR, original accepted translations and new translation parts. All 155 canonical IR hashes also match. Semantic review covers the 100 new signatures plus changed/reused boundary contexts on 43 non-help-delta pages and all help contexts, not a fresh line-by-line review of all 31,545 historical translations. No unresolved issue in this scope. Final generation, validation and E2E remain separate.

Only this report was written. No canonical, queue, source, IR, translation or Git changes.

## Mechanical evidence

```json
{
  "pages": 155,
  "mappingCounts": {
    "same-page-exact-match": 31545,
    "cross-page-candidate-only": 306,
    "unfilled": 579
  },
  "newSignatures": 100,
  "protectedTokens": 21642,
  "protectedLinks": 1594,
  "canonicalIrHashesMatched": 155,
  "errors": 0,
  "preparedManifestSha256": "f12e051bae16acdf7b73a01baba3aa849e28f5e767b6805509c3e6783ffd3491"
}
```

Verified exact current signatures including protected inline payloads, every old source mapping against the actual accepted Japanese value, every cross-page source against accepted DHMC values, and all unfilled values against the 100-signature part files. All candidate ID sets equal IR ID sets. Verified prepared plan/input/candidate hashes and source/IR bindings. Every protected token occurs with required multiplicity. Canonical IR byte hashes match audited current IR, preserving literal/code blocks and link structures. Assembly supplies only segment values: it cannot replace those blocks. This does not assert literals equal the older version; it confirms retention of the audited new-version IR.

## Contextual interpretation

Read all 100 new signature translations from assembled candidates against English source. Combined with the preceding explicit review of the 43 changed pages, 71 distinct immediate reused-boundary contexts and 11 structural/heading outliers. Mechanical checks prove those exact strings are assembled at their mapped occurrences, not merely present in detached files.

No contradictory adjacent translation or shifted referent found:
- Automation-only and association-specific Azure/GCP targeting remain separate from Run Command/Maintenance Windows guidance.
- GCP required fields and tagged-union exclusivity retain their scope; Azure descriptions stay attached to Azure fields.
- ConfigConnectorArn is optional on creation and conditionally returned in outputs; obsolete requiredness is not reused.
- Data-type validation and string-return behavior are compatible. AMI-specific validation remains explicitly qualified.
- IAM warnings retain negation, distinct read/delete action names, recursive ancestor-path scope, and current-version history access. Existing naming/pagination prose does not become an authorization claim.
- Summary counts distinguish total, started, completed (success or failure), successful and failed/timed-out/canceled executions.
- Azure/GCP filters retain the non-combination restriction; enums and constraints preserve exact protected values.
- All 306 help occurrences are the reviewed adjacent global --help option/description pair on 153 pages.

Minor パラメータ/パラメーター and コネクタ/コネクター spelling variants are nonblocking and do not change meaning. Exact mapping checks are mechanical evidence; the delta-context findings are limited semantic interpretation, not certification of all pre-existing translation quality or upstream factual correctness.
