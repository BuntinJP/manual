# AWS2.40.4 reuse cost estimate

Read-only planning for the existing155 pages; no translation was saved/accepted or source hash relabeled.

- Current segments: 32430.
- Same-page exact accepted-translation matches: 31545 occurrences.
- **Not covered by same-page matching: 885 occurrences / 102 unique exact signatures.**
- Of those, two accepted2.40.4 DHMC pages offer **306 occurrences / 2 unique signatures** as cross-page candidates only.
- **Still unfilled even after those candidates: 579 occurrences / 100 unique exact signatures.**
- Same-page duplicate signatures with conflicting accepted translations: 0 current segment occurrences (not silently resolved).

Exact signatures include kind, text, and the complete protected inline structures; IDs may change. Accepted translation source/IR hashes were validated against their own original IR, never reassigned to the current page. Every mapping carries source leaf/ID and current source/IR hashes. Cross-page suggestions require context review before reuse; identical tokens alone do not certify meaning. Same-page equality also does not certify that an unchanged sentence remains correct in changed surrounding context. This is a workload estimate, not semantic review, not a new accepted translation, and not a claim of current-version completeness.

The numbers cover segment translation only. Literal/code blocks, links/structural changes, source provenance, whole-page semantic review, generation/tests, and PR integration remain separate work. Unique signature counts are deduplication estimates, not permission to translate once blindly across contexts.

Full per-ID source mapping, candidate translations and signature dictionaries: `reuse-plan.json`. Only this report and the planning files/scripts under recovery-work were written; canonical/queue/accepted/source/git unchanged.

## Per-page counts
| Page | Current segments | Same-page exact | Cross-page candidates | Unfilled after candidates |
|---|---:|---:|---:|---:|
| aws-ssm | 166 | 164 | 0 | 2 |
| aws-ssm-add-tags-to-resource | 140 | 136 | 2 | 2 |
| aws-ssm-associate-ops-item-related-item | 90 | 88 | 2 | 0 |
| aws-ssm-cancel-command | 94 | 92 | 2 | 0 |
| aws-ssm-cancel-maintenance-window-execution | 88 | 86 | 2 | 0 |
| aws-ssm-create-activation | 158 | 156 | 2 | 0 |
| aws-ssm-create-association | 843 | 809 | 2 | 32 |
| aws-ssm-create-association-batch | 1149 | 1099 | 2 | 48 |
| aws-ssm-create-cloud-connector | 215 | 186 | 2 | 27 |
| aws-ssm-create-document | 436 | 434 | 2 | 0 |
| aws-ssm-create-maintenance-window | 163 | 161 | 2 | 0 |
| aws-ssm-create-ops-item | 207 | 205 | 2 | 0 |
| aws-ssm-create-ops-metadata | 121 | 119 | 2 | 0 |
| aws-ssm-create-patch-baseline | 377 | 375 | 2 | 0 |
| aws-ssm-create-resource-data-sync | 166 | 164 | 2 | 0 |
| aws-ssm-delete-activation | 81 | 79 | 2 | 0 |
| aws-ssm-delete-association | 96 | 94 | 2 | 0 |
| aws-ssm-delete-cloud-connector | 80 | 78 | 2 | 0 |
| aws-ssm-delete-document | 92 | 90 | 2 | 0 |
| aws-ssm-delete-inventory | 127 | 125 | 2 | 0 |
| aws-ssm-delete-maintenance-window | 88 | 86 | 2 | 0 |
| aws-ssm-delete-ops-item | 79 | 77 | 2 | 0 |
| aws-ssm-delete-ops-metadata | 75 | 73 | 2 | 0 |
| aws-ssm-delete-parameter | 86 | 83 | 2 | 1 |
| aws-ssm-delete-parameters | 108 | 104 | 2 | 2 |
| aws-ssm-delete-patch-baseline | 88 | 86 | 2 | 0 |
| aws-ssm-delete-resource-data-sync | 87 | 85 | 2 | 0 |
| aws-ssm-delete-resource-policy | 88 | 86 | 2 | 0 |
| aws-ssm-deregister-managed-instance | 84 | 82 | 2 | 0 |
| aws-ssm-deregister-patch-baseline-for-patch-group | 100 | 98 | 2 | 0 |
| aws-ssm-deregister-target-from-maintenance-window | 102 | 100 | 2 | 0 |
| aws-ssm-deregister-task-from-maintenance-window | 100 | 98 | 2 | 0 |
| aws-ssm-describe-activations | 163 | 161 | 2 | 0 |
| aws-ssm-describe-association | 481 | 463 | 2 | 16 |
| aws-ssm-describe-association-execution-targets | 161 | 159 | 2 | 0 |
| aws-ssm-describe-association-executions | 187 | 185 | 2 | 0 |
| aws-ssm-describe-automation-executions | 622 | 596 | 2 | 24 |
| aws-ssm-describe-automation-step-executions | 466 | 446 | 2 | 18 |
| aws-ssm-describe-available-patches | 204 | 202 | 2 | 0 |
| aws-ssm-describe-document | 307 | 305 | 2 | 0 |
| aws-ssm-describe-document-permission | 113 | 111 | 2 | 0 |
| aws-ssm-describe-effective-instance-associations | 115 | 113 | 2 | 0 |
| aws-ssm-describe-effective-patches-for-patch-baseline | 180 | 178 | 2 | 0 |
| aws-ssm-describe-instance-associations-status | 144 | 142 | 2 | 0 |
| aws-ssm-describe-instance-information | 253 | 248 | 2 | 3 |
| aws-ssm-describe-instance-patch-states | 187 | 185 | 2 | 0 |
| aws-ssm-describe-instance-patch-states-for-patch-group | 235 | 233 | 2 | 0 |
| aws-ssm-describe-instance-patches | 167 | 165 | 2 | 0 |
| aws-ssm-describe-instance-properties | 267 | 263 | 2 | 2 |
| aws-ssm-describe-inventory-deletions | 142 | 140 | 2 | 0 |
| aws-ssm-describe-maintenance-window-execution-task-invocations | 191 | 189 | 2 | 0 |
| aws-ssm-describe-maintenance-window-execution-tasks | 206 | 204 | 2 | 0 |
| aws-ssm-describe-maintenance-window-executions | 167 | 165 | 2 | 0 |
| aws-ssm-describe-maintenance-window-schedule | 203 | 193 | 2 | 8 |
| aws-ssm-describe-maintenance-window-targets | 219 | 209 | 2 | 8 |
| aws-ssm-describe-maintenance-window-tasks | 308 | 298 | 2 | 8 |
| aws-ssm-describe-maintenance-windows | 174 | 172 | 2 | 0 |
| aws-ssm-describe-maintenance-windows-for-target | 165 | 155 | 2 | 8 |
| aws-ssm-describe-ops-items | 263 | 261 | 2 | 0 |
| aws-ssm-describe-parameters | 216 | 213 | 2 | 1 |
| aws-ssm-describe-patch-baselines | 166 | 164 | 2 | 0 |
| aws-ssm-describe-patch-group-state | 111 | 109 | 2 | 0 |
| aws-ssm-describe-patch-groups | 169 | 167 | 2 | 0 |
| aws-ssm-describe-patch-properties | 157 | 155 | 2 | 0 |
| aws-ssm-describe-sessions | 205 | 203 | 2 | 0 |
| aws-ssm-disassociate-ops-item-related-item | 83 | 81 | 2 | 0 |
| aws-ssm-get-access-token | 92 | 90 | 2 | 0 |
| aws-ssm-get-automation-execution | 1096 | 1032 | 2 | 62 |
| aws-ssm-get-calendar-state | 96 | 94 | 2 | 0 |
| aws-ssm-get-cloud-connector | 204 | 176 | 2 | 26 |
| aws-ssm-get-command-invocation | 182 | 180 | 2 | 0 |
| aws-ssm-get-connection-status | 91 | 89 | 2 | 0 |
| aws-ssm-get-default-patch-baseline | 122 | 120 | 2 | 0 |
| aws-ssm-get-deployable-patch-snapshot-for-instance | 334 | 332 | 2 | 0 |
| aws-ssm-get-document | 205 | 203 | 2 | 0 |
| aws-ssm-get-execution-preview | 127 | 125 | 2 | 0 |
| aws-ssm-get-inventory | 323 | 321 | 2 | 0 |
| aws-ssm-get-inventory-schema | 134 | 132 | 2 | 0 |
| aws-ssm-get-maintenance-window | 135 | 133 | 2 | 0 |
| aws-ssm-get-maintenance-window-execution | 115 | 113 | 2 | 0 |
| aws-ssm-get-maintenance-window-execution-task | 205 | 203 | 2 | 0 |
| aws-ssm-get-maintenance-window-execution-task-invocation | 152 | 150 | 2 | 0 |
| aws-ssm-get-maintenance-window-task | 389 | 379 | 2 | 8 |
| aws-ssm-get-ops-item | 214 | 212 | 2 | 0 |
| aws-ssm-get-ops-metadata | 106 | 104 | 2 | 0 |
| aws-ssm-get-ops-summary | 309 | 307 | 2 | 0 |
| aws-ssm-get-parameter | 144 | 140 | 2 | 2 |
| aws-ssm-get-parameter-history | 174 | 170 | 2 | 2 |
| aws-ssm-get-parameters | 158 | 153 | 2 | 3 |
| aws-ssm-get-parameters-by-path | 180 | 175 | 2 | 3 |
| aws-ssm-get-patch-baseline | 336 | 334 | 2 | 0 |
| aws-ssm-get-patch-baseline-for-patch-group | 130 | 128 | 2 | 0 |
| aws-ssm-get-resource-policies | 100 | 98 | 2 | 0 |
| aws-ssm-get-service-setting | 116 | 114 | 2 | 0 |
| aws-ssm-label-parameter-version | 120 | 118 | 2 | 0 |
| aws-ssm-list-association-versions | 405 | 387 | 2 | 16 |
| aws-ssm-list-associations | 253 | 243 | 2 | 8 |
| aws-ssm-list-cloud-connectors | 160 | 143 | 2 | 15 |
| aws-ssm-list-command-invocations | 328 | 326 | 2 | 0 |
| aws-ssm-list-commands | 389 | 379 | 2 | 8 |
| aws-ssm-list-compliance-items | 208 | 206 | 2 | 0 |
| aws-ssm-list-compliance-summaries | 166 | 164 | 2 | 0 |
| aws-ssm-list-document-metadata-history | 150 | 148 | 2 | 0 |
| aws-ssm-list-document-versions | 145 | 143 | 2 | 0 |
| aws-ssm-list-documents | 281 | 279 | 2 | 0 |
| aws-ssm-list-inventory-entries | 176 | 174 | 2 | 0 |
| aws-ssm-list-nodes | 263 | 259 | 2 | 2 |
| aws-ssm-list-nodes-summary | 209 | 207 | 2 | 0 |
| aws-ssm-list-ops-item-events | 124 | 122 | 2 | 0 |
| aws-ssm-list-ops-item-related-items | 142 | 140 | 2 | 0 |
| aws-ssm-list-ops-metadata | 132 | 130 | 2 | 0 |
| aws-ssm-list-resource-compliance-summaries | 204 | 202 | 2 | 0 |
| aws-ssm-list-resource-data-sync | 207 | 205 | 2 | 0 |
| aws-ssm-list-tags-for-resource | 110 | 108 | 2 | 0 |
| aws-ssm-modify-document-permission | 106 | 104 | 2 | 0 |
| aws-ssm-put-compliance-items | 178 | 176 | 2 | 0 |
| aws-ssm-put-inventory | 141 | 139 | 2 | 0 |
| aws-ssm-put-parameter | 242 | 223 | 2 | 17 |
| aws-ssm-put-resource-policy | 92 | 90 | 2 | 0 |
| aws-ssm-register-default-patch-baseline | 91 | 89 | 2 | 0 |
| aws-ssm-register-patch-baseline-for-patch-group | 100 | 98 | 2 | 0 |
| aws-ssm-register-target-with-maintenance-window | 197 | 187 | 2 | 8 |
| aws-ssm-register-task-with-maintenance-window | 417 | 407 | 2 | 8 |
| aws-ssm-remove-tags-from-resource | 110 | 108 | 2 | 0 |
| aws-ssm-reset-service-setting | 116 | 114 | 2 | 0 |
| aws-ssm-resume-session | 97 | 95 | 2 | 0 |
| aws-ssm-send-automation-signal | 116 | 114 | 2 | 0 |
| aws-ssm-send-command | 516 | 498 | 2 | 16 |
| aws-ssm-start-access-request | 151 | 141 | 2 | 8 |
| aws-ssm-start-associations-once | 86 | 84 | 2 | 0 |
| aws-ssm-start-automation-execution | 400 | 382 | 2 | 16 |
| aws-ssm-start-change-request-execution | 423 | 405 | 2 | 16 |
| aws-ssm-start-execution-preview | 319 | 301 | 2 | 16 |
| aws-ssm-start-session | 111 | 109 | 2 | 0 |
| aws-ssm-stop-automation-execution | 87 | 85 | 2 | 0 |
| aws-ssm-terminate-session | 86 | 84 | 2 | 0 |
| aws-ssm-unlabel-parameter-version | 114 | 112 | 2 | 0 |
| aws-ssm-update-association | 826 | 792 | 2 | 32 |
| aws-ssm-update-association-status | 491 | 473 | 2 | 16 |
| aws-ssm-update-cloud-connector | 189 | 162 | 2 | 25 |
| aws-ssm-update-document | 361 | 359 | 2 | 0 |
| aws-ssm-update-document-default-version | 100 | 98 | 2 | 0 |
| aws-ssm-update-document-metadata | 115 | 113 | 2 | 0 |
| aws-ssm-update-maintenance-window | 185 | 183 | 2 | 0 |
| aws-ssm-update-maintenance-window-target | 248 | 230 | 2 | 16 |
| aws-ssm-update-maintenance-window-task | 690 | 672 | 2 | 16 |
| aws-ssm-update-managed-instance-role | 89 | 87 | 2 | 0 |
| aws-ssm-update-ops-item | 193 | 191 | 2 | 0 |
| aws-ssm-update-ops-metadata | 110 | 108 | 2 | 0 |
| aws-ssm-update-patch-baseline | 571 | 569 | 2 | 0 |
| aws-ssm-update-resource-data-sync | 127 | 125 | 2 | 0 |
| aws-ssm-update-service-setting | 110 | 108 | 2 | 0 |
| aws-ssm-validate-cloud-connector | 128 | 122 | 2 | 4 |
| aws-ssm-wait | 6 | 6 | 0 | 0 |
| aws-ssm-wait-command-executed | 83 | 81 | 2 | 0 |
