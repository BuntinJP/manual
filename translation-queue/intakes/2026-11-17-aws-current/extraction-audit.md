# AWS current body extraction audit

Read-only independent audit of all saved current.html/current.ir.json pairs, including aws-ssm index and 154 commands. Only this report was written; no canonical, queue, translation or Git changes.

## Method

Parsed each HTML div.body with LinkeDOM, reconstructed IR recursively in document order, expanded protected tokens to inline text, and compared the entire text after whitespace removal. Independently compared heading text/order, literal pre blocks with exact internal whitespace (one boundary newline removed), table counts and segment reference coverage. Comparison includes constraints, warnings and the final body text, not an excerpt. Header/sidebar/footer chrome outside div.body is intentionally excluded.

## Aggregate results

```json
{
  "pages": 155,
  "chars": 1678931,
  "segments": 32430,
  "code": 824,
  "tables": 0,
  "headings": 1438,
  "constraints": 2202,
  "failed": [],
  "warningPages": [],
  "termCounts": {
    "GCP": 31,
    "Azure": 31,
    "CloudConnector": 33,
    "Warning": 33
  }
}
```

All 155 full-body and order comparisons pass; no duplicated or missing body characters after whitespace normalization. All segment references occur once, heading sequences match, and all preformatted examples match exactly including internal whitespace. No tables exist in these selected bodies. New GCP/Azure/CloudConnector/warning text is included in the successful full-body comparisons; the term counts above are page counts, not a historical delta classification.

## Scope

Mechanical extraction fidelity is not Japanese semantic translation review. This audit does not establish factual accuracy of upstream material, exact prose whitespace, complete list nesting, link destinations, rendered-page behavior or whether wording is newly added versus an older version. No mismatch page required special investigation.

## Per-page results

| Page | Characters | Segments | Headings | Literal blocks | Result |
|---|---:|---:|---:|---:|---|
| aws-ssm | 4722 | 166 | 3 | 0 | PASS |
| aws-ssm-add-tags-to-resource | 8096 | 140 | 11 | 6 | PASS |
| aws-ssm-associate-ops-item-related-item | 5524 | 90 | 8 | 3 | PASS |
| aws-ssm-cancel-command | 5085 | 94 | 8 | 4 | PASS |
| aws-ssm-cancel-maintenance-window-execution | 5034 | 88 | 8 | 3 | PASS |
| aws-ssm-create-activation | 9013 | 158 | 13 | 7 | PASS |
| aws-ssm-create-association | 43823 | 843 | 17 | 21 | PASS |
| aws-ssm-create-association-batch | 55322 | 1149 | 17 | 4 | PASS |
| aws-ssm-create-cloud-connector | 8775 | 215 | 9 | 4 | PASS |
| aws-ssm-create-document | 18056 | 436 | 13 | 10 | PASS |
| aws-ssm-create-maintenance-window | 9356 | 163 | 11 | 7 | PASS |
| aws-ssm-create-ops-item | 11292 | 207 | 13 | 11 | PASS |
| aws-ssm-create-ops-metadata | 5701 | 121 | 6 | 5 | PASS |
| aws-ssm-create-patch-baseline | 20532 | 377 | 13 | 18 | PASS |
| aws-ssm-create-resource-data-sync | 9648 | 166 | 9 | 5 | PASS |
| aws-ssm-delete-activation | 4703 | 81 | 8 | 2 | PASS |
| aws-ssm-delete-association | 6003 | 96 | 9 | 3 | PASS |
| aws-ssm-delete-cloud-connector | 4050 | 80 | 6 | 1 | PASS |
| aws-ssm-delete-document | 5234 | 92 | 8 | 2 | PASS |
| aws-ssm-delete-inventory | 7447 | 127 | 8 | 5 | PASS |
| aws-ssm-delete-maintenance-window | 4564 | 88 | 8 | 3 | PASS |
| aws-ssm-delete-ops-item | 4740 | 79 | 7 | 1 | PASS |
| aws-ssm-delete-ops-metadata | 3958 | 75 | 6 | 1 | PASS |
| aws-ssm-delete-parameter | 4783 | 86 | 10 | 2 | PASS |
| aws-ssm-delete-parameters | 5368 | 108 | 10 | 4 | PASS |
| aws-ssm-delete-patch-baseline | 4563 | 88 | 8 | 3 | PASS |
| aws-ssm-delete-resource-data-sync | 4670 | 87 | 8 | 2 | PASS |
| aws-ssm-delete-resource-policy | 5234 | 88 | 6 | 1 | PASS |
| aws-ssm-deregister-managed-instance | 5012 | 84 | 8 | 2 | PASS |
| aws-ssm-deregister-patch-baseline-for-patch-group | 5117 | 100 | 8 | 3 | PASS |
| aws-ssm-deregister-target-from-maintenance-window | 5401 | 102 | 8 | 3 | PASS |
| aws-ssm-deregister-task-from-maintenance-window | 5214 | 100 | 8 | 3 | PASS |
| aws-ssm-describe-activations | 8631 | 163 | 8 | 5 | PASS |
| aws-ssm-describe-association | 22814 | 481 | 10 | 5 | PASS |
| aws-ssm-describe-association-execution-targets | 8358 | 161 | 8 | 5 | PASS |
| aws-ssm-describe-association-executions | 10004 | 187 | 8 | 7 | PASS |
| aws-ssm-describe-automation-executions | 25733 | 622 | 13 | 5 | PASS |
| aws-ssm-describe-automation-step-executions | 20605 | 466 | 10 | 7 | PASS |
| aws-ssm-describe-available-patches | 12843 | 204 | 11 | 7 | PASS |
| aws-ssm-describe-document | 11614 | 307 | 11 | 3 | PASS |
| aws-ssm-describe-document-permission | 6016 | 113 | 8 | 3 | PASS |
| aws-ssm-describe-effective-instance-associations | 7672 | 115 | 8 | 3 | PASS |
| aws-ssm-describe-effective-patches-for-patch-baseline | 12633 | 180 | 9 | 5 | PASS |
| aws-ssm-describe-instance-associations-status | 8109 | 144 | 8 | 3 | PASS |
| aws-ssm-describe-instance-information | 15584 | 253 | 11 | 11 | PASS |
| aws-ssm-describe-instance-patch-states | 11944 | 187 | 10 | 4 | PASS |
| aws-ssm-describe-instance-patch-states-for-patch-group | 15913 | 235 | 10 | 9 | PASS |
| aws-ssm-describe-instance-patches | 9913 | 167 | 9 | 9 | PASS |
| aws-ssm-describe-instance-properties | 10137 | 267 | 6 | 5 | PASS |
| aws-ssm-describe-inventory-deletions | 8670 | 142 | 8 | 5 | PASS |
| aws-ssm-describe-maintenance-window-execution-task-invocations | 9750 | 191 | 8 | 5 | PASS |
| aws-ssm-describe-maintenance-window-execution-tasks | 9421 | 206 | 8 | 5 | PASS |
| aws-ssm-describe-maintenance-window-executions | 9669 | 167 | 8 | 9 | PASS |
| aws-ssm-describe-maintenance-window-schedule | 11785 | 203 | 9 | 11 | PASS |
| aws-ssm-describe-maintenance-window-targets | 11734 | 219 | 9 | 7 | PASS |
| aws-ssm-describe-maintenance-window-tasks | 18882 | 308 | 15 | 11 | PASS |
| aws-ssm-describe-maintenance-windows | 9556 | 174 | 8 | 9 | PASS |
| aws-ssm-describe-maintenance-windows-for-target | 9596 | 165 | 9 | 5 | PASS |
| aws-ssm-describe-ops-items | 13101 | 263 | 8 | 5 | PASS |
| aws-ssm-describe-parameters | 12611 | 216 | 10 | 9 | PASS |
| aws-ssm-describe-patch-baselines | 9335 | 166 | 8 | 9 | PASS |
| aws-ssm-describe-patch-group-state | 7649 | 111 | 9 | 3 | PASS |
| aws-ssm-describe-patch-groups | 8284 | 169 | 8 | 5 | PASS |
| aws-ssm-describe-patch-properties | 7965 | 157 | 8 | 3 | PASS |
| aws-ssm-describe-sessions | 10112 | 205 | 8 | 7 | PASS |
| aws-ssm-disassociate-ops-item-related-item | 4909 | 83 | 8 | 2 | PASS |
| aws-ssm-get-access-token | 4463 | 92 | 6 | 1 | PASS |
| aws-ssm-get-automation-execution | 43883 | 1096 | 16 | 3 | PASS |
| aws-ssm-get-calendar-state | 6311 | 96 | 8 | 6 | PASS |
| aws-ssm-get-cloud-connector | 7681 | 204 | 9 | 1 | PASS |
| aws-ssm-get-command-invocation | 12847 | 182 | 8 | 3 | PASS |
| aws-ssm-get-connection-status | 4727 | 91 | 8 | 3 | PASS |
| aws-ssm-get-default-patch-baseline | 5686 | 122 | 8 | 5 | PASS |
| aws-ssm-get-deployable-patch-snapshot-for-instance | 17287 | 334 | 11 | 4 | PASS |
| aws-ssm-get-document | 9329 | 205 | 8 | 3 | PASS |
| aws-ssm-get-execution-preview | 6136 | 127 | 7 | 1 | PASS |
| aws-ssm-get-inventory | 14559 | 323 | 11 | 8 | PASS |
| aws-ssm-get-inventory-schema | 8323 | 134 | 8 | 5 | PASS |
| aws-ssm-get-maintenance-window | 6591 | 135 | 8 | 3 | PASS |
| aws-ssm-get-maintenance-window-execution | 5643 | 115 | 8 | 3 | PASS |
| aws-ssm-get-maintenance-window-execution-task | 8856 | 205 | 9 | 3 | PASS |
| aws-ssm-get-maintenance-window-execution-task-invocation | 7307 | 152 | 8 | 3 | PASS |
| aws-ssm-get-maintenance-window-task | 18720 | 389 | 15 | 3 | PASS |
| aws-ssm-get-ops-item | 11150 | 214 | 9 | 3 | PASS |
| aws-ssm-get-ops-metadata | 4771 | 106 | 6 | 1 | PASS |
| aws-ssm-get-ops-summary | 12681 | 309 | 8 | 8 | PASS |
| aws-ssm-get-parameter | 9297 | 144 | 13 | 9 | PASS |
| aws-ssm-get-parameter-history | 9731 | 174 | 10 | 3 | PASS |
| aws-ssm-get-parameters | 9825 | 158 | 14 | 8 | PASS |
| aws-ssm-get-parameters-by-path | 10940 | 180 | 12 | 5 | PASS |
| aws-ssm-get-patch-baseline | 13974 | 336 | 11 | 3 | PASS |
| aws-ssm-get-patch-baseline-for-patch-group | 5597 | 130 | 8 | 3 | PASS |
| aws-ssm-get-resource-policies | 6218 | 100 | 6 | 1 | PASS |
| aws-ssm-get-service-setting | 6879 | 116 | 8 | 3 | PASS |
| aws-ssm-label-parameter-version | 6904 | 120 | 9 | 6 | PASS |
| aws-ssm-list-association-versions | 20418 | 405 | 10 | 3 | PASS |
| aws-ssm-list-associations | 14062 | 253 | 12 | 7 | PASS |
| aws-ssm-list-cloud-connectors | 7440 | 160 | 6 | 3 | PASS |
| aws-ssm-list-command-invocations | 20606 | 328 | 10 | 5 | PASS |
| aws-ssm-list-commands | 23281 | 389 | 12 | 9 | PASS |
| aws-ssm-list-compliance-items | 12183 | 208 | 10 | 11 | PASS |
| aws-ssm-list-compliance-summaries | 11177 | 166 | 8 | 7 | PASS |
| aws-ssm-list-document-metadata-history | 7731 | 150 | 9 | 3 | PASS |
| aws-ssm-list-document-versions | 7420 | 145 | 8 | 3 | PASS |
| aws-ssm-list-documents | 12603 | 281 | 9 | 9 | PASS |
| aws-ssm-list-inventory-entries | 8475 | 176 | 9 | 7 | PASS |
| aws-ssm-list-nodes | 9889 | 263 | 7 | 3 | PASS |
| aws-ssm-list-nodes-summary | 9087 | 209 | 6 | 5 | PASS |
| aws-ssm-list-ops-item-events | 6617 | 124 | 6 | 3 | PASS |
| aws-ssm-list-ops-item-related-items | 8153 | 142 | 8 | 5 | PASS |
| aws-ssm-list-ops-metadata | 6316 | 132 | 6 | 3 | PASS |
| aws-ssm-list-resource-compliance-summaries | 12967 | 204 | 9 | 7 | PASS |
| aws-ssm-list-resource-data-sync | 10901 | 207 | 8 | 3 | PASS |
| aws-ssm-list-tags-for-resource | 5436 | 110 | 8 | 3 | PASS |
| aws-ssm-modify-document-permission | 5841 | 106 | 8 | 4 | PASS |
| aws-ssm-put-compliance-items | 10026 | 178 | 11 | 6 | PASS |
| aws-ssm-put-inventory | 6922 | 141 | 8 | 5 | PASS |
| aws-ssm-put-parameter | 18482 | 242 | 18 | 13 | PASS |
| aws-ssm-put-resource-policy | 6512 | 92 | 8 | 1 | PASS |
| aws-ssm-register-default-patch-baseline | 5305 | 91 | 8 | 5 | PASS |
| aws-ssm-register-patch-baseline-for-patch-group | 5182 | 100 | 8 | 3 | PASS |
| aws-ssm-register-target-with-maintenance-window | 11662 | 197 | 11 | 13 | PASS |
| aws-ssm-register-task-with-maintenance-window | 24574 | 417 | 15 | 20 | PASS |
| aws-ssm-remove-tags-from-resource | 5829 | 110 | 10 | 3 | PASS |
| aws-ssm-reset-service-setting | 6963 | 116 | 8 | 3 | PASS |
| aws-ssm-resume-session | 6130 | 97 | 9 | 3 | PASS |
| aws-ssm-send-automation-signal | 5492 | 116 | 8 | 4 | PASS |
| aws-ssm-send-command | 33788 | 516 | 13 | 28 | PASS |
| aws-ssm-start-access-request | 7651 | 151 | 7 | 5 | PASS |
| aws-ssm-start-associations-once | 4736 | 86 | 8 | 3 | PASS |
| aws-ssm-start-automation-execution | 20457 | 400 | 11 | 16 | PASS |
| aws-ssm-start-change-request-execution | 21867 | 423 | 16 | 11 | PASS |
| aws-ssm-start-execution-preview | 15158 | 319 | 9 | 2 | PASS |
| aws-ssm-start-session | 6676 | 111 | 9 | 7 | PASS |
| aws-ssm-stop-automation-execution | 4639 | 87 | 8 | 2 | PASS |
| aws-ssm-terminate-session | 4721 | 86 | 8 | 3 | PASS |
| aws-ssm-unlabel-parameter-version | 5436 | 114 | 9 | 4 | PASS |
| aws-ssm-update-association | 42621 | 826 | 17 | 17 | PASS |
| aws-ssm-update-association-status | 22056 | 491 | 10 | 5 | PASS |
| aws-ssm-update-cloud-connector | 7563 | 189 | 9 | 2 | PASS |
| aws-ssm-update-document | 14532 | 361 | 11 | 7 | PASS |
| aws-ssm-update-document-default-version | 5278 | 100 | 9 | 3 | PASS |
| aws-ssm-update-document-metadata | 5971 | 115 | 9 | 4 | PASS |
| aws-ssm-update-maintenance-window | 9582 | 185 | 10 | 7 | PASS |
| aws-ssm-update-maintenance-window-target | 12203 | 248 | 11 | 5 | PASS |
| aws-ssm-update-maintenance-window-task | 34458 | 690 | 22 | 12 | PASS |
| aws-ssm-update-managed-instance-role | 5288 | 89 | 9 | 2 | PASS |
| aws-ssm-update-ops-item | 9771 | 193 | 9 | 9 | PASS |
| aws-ssm-update-ops-metadata | 4855 | 110 | 6 | 4 | PASS |
| aws-ssm-update-patch-baseline | 26471 | 571 | 14 | 11 | PASS |
| aws-ssm-update-resource-data-sync | 7189 | 127 | 9 | 3 | PASS |
| aws-ssm-update-service-setting | 7069 | 110 | 9 | 2 | PASS |
| aws-ssm-validate-cloud-connector | 6244 | 128 | 6 | 1 | PASS |
| aws-ssm-wait | 156 | 6 | 3 | 0 | PASS |
| aws-ssm-wait-command-executed | 4905 | 83 | 6 | 1 | PASS |
