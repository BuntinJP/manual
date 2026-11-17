# AWS exact-match reuse: independent context review

Read-only review of reuse-plan.json, comparison.json, segment-deltas.json, current IR and old source IR. Only this report was written; no canonical, queue, translation, source or Git changes.

## Scope and counts

- 155 pages: 1 identical, 111 help-only, 43 with other changes.
- Same-page candidates: 31,545 occurrences. Plan signatures include kind, source text and complete protected inline data, not IDs alone.
- Cross-page candidates: 306 occurrences / 2 signatures, on 153 pages.
- New translation scope (579 occurrences / 100 signatures) is assigned elsewhere and is not approved by this report.

## Same-page context checks

Compared block ancestry types and nearest preceding heading for every one of the 31,545 same-page mappings against its available old source IDs. 31,534 occurrences had a matching old structural/heading context; 11 required inspection. This structural approximation deliberately ignores shifting sibling indices; a nearest heading can also be an admonition label rather than the actual section boundary.

Reviewed the non-help insertion/replacement/deletion groups across the 43 changed pages, and inspected 71 distinct immediate-boundary contexts with their proposed Japanese strings. Repeated boundaries were grouped by surrounding source text and Japanese wording. Changes consist of Azure/GCP target alternatives and JSON keys, GCP cloud-connector fields/filter options, ConfigConnectorArn optionality, parameter data-type additions, IAM warnings, summary counts, source-type additions, regex updates and typo corrections. Protected-key/regex/requiredness changes are new signatures, not silently reused old translations.

The 11 structural/heading outliers were:
- get-parameters s0009: unchanged parameter-name restriction follows newly added Warning instead of Note. Japanese wording remains an independent naming restriction.
- get-parameters-by-path s0005: Warning moved from quoted options-area structure to description-level heading; “警告” remains correct.
- get-parameters-by-path s0008–s0011: unchanged pagination/naming/reference prose now follows the new Warning; no dependent Japanese antecedent changes.
- get-parameters-by-path s0021–s0022: filter option label/description is unchanged; old nearest-heading tracking included the removed Warning, new tracking correctly reaches Options.
- delete-parameter s0007 and delete-parameters s0007: “関連項目” remains correct after the inserted Note/Warning.
- list-cloud-connectors s0150: “指定可能な値:” is reused for the new Provider enumeration in Output instead of the old Options occurrence. The phrase is context-independent, and the protected enumeration values themselves are separately mapped.

New constraints and structural labels sometimes reuse same-page text from another field. Observed examples (“制約:”, “最小:”, “最大:”, “パターン:”, “注記”, “指定可能な値:”, structure/type labels and protected-only tokens) remain applicable to their new fields; exact protected payload matching prevents copying another field’s number/regex under the same placeholder spelling. Existing explicit Azure descriptions remain attached to Azure fields rather than becoming general claims about GCP.

No context-induced Japanese correction was identified in the inspected reuse boundaries/outliers. This supports reuse for this version update, but is not a new line-by-line semantic certification of all 31,545 pre-existing translations.

## Cross-page help review

All 306 occurrences are root paragraph blocks under Global Options. Every one of the 153 pages contains the two candidates as an adjacent pair, in the same order. Both accepted DHMC source pages agree on the Japanese strings:

- `[[p0]] (boolean)`, with protected code text `--help` → `[[p0]] (boolean)`.
- `Display help for the command/subcommand.` → `コマンドまたはサブコマンドのヘルプを表示します。`

The translation is independent of command name, service-specific argument, resource type, permission model or output schema. All 153 contexts are the global --help option, not a similarly worded application-specific field. The pair can be reused across these reviewed 306 occurrences; no contextual exception found.

## Limits / conclusion

No blocking context defect found for the reviewed reuse plan. Exact source equality is mechanical evidence, while the boundary/outlier interpretation above is a limited contextual semantic review. New source sentences, literal/syntax changes, final assembled-page semantic checks and build/E2E remain separate obligations. Reuse approval here does not claim upstream factual correctness or independently authenticate a source version.
