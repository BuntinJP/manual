# AWS SSM command coverage audit

Audit time (UTC): 2026-11-17T16:50:07.998954+00:00

## Result
The saved AWS CLI **2.39.3** scope is complete at the document-list level: **155/155** documents appear in the intake, manifests, current catalog, and queue; all 155 queue jobs are `done`. No missing document from the saved index or its saved wait child was found.

However, the official `latest` index fetched in this audit identifies itself as **AWS CLI 2.40.4** and contains **two additional top-level commands** absent from the saved scope:

- [register-default-host-management-configuration](https://docs.aws.amazon.com/cli/latest/reference/ssm/register-default-host-management-configuration.html): enables Default Host Management Configuration for the current account/Region.
- [deregister-default-host-management-configuration](https://docs.aws.amazon.com/cli/latest/reference/ssm/deregister-default-host-management-configuration.html): removes that configuration.

Both individual official pages were fetched and identify version 2.40.4. This demonstrates additions relative to the saved 2.39.3 index, not their exact first-release version. No AWS operation was invoked.

## Counts and set differences
| Set | Count |
|---|---:|
| Saved top-level Available Commands links, including wait | 153 |
| Saved wait child links | 1 |
| Saved full document scope (above + service landing page) | 155 |
| Intake records / manifests / catalog / queue jobs | 155 each |
| Current official top-level Available Commands links, including wait | 155 |
| Current official wait child links | 1 |
| Current full indexed document scope (above + service landing page) | 157 |

- Saved full scope minus intake/manifest/catalog/queue: **empty for all four**.
- Intake/manifest/catalog/queue minus saved full scope: **empty for all four**.
- Current top-level index minus saved index: the two commands named above.
- Saved top-level index minus current index: **empty**.
- Current wait children minus saved wait children and reverse: **empty**. Both list only `command-executed`.
- Current full scope minus each repository set: **2**, the commands above.
- Each repository set minus current full scope: **0**.

The sets are compared by canonical SSM-relative URL, normalizing `index.html` to directory form and preserving `wait/` nesting. Only `toctree-l1` links in the Available Commands lists were counted, not navigation duplicates. Full sorted sets are recorded in `recovery-work/aws-ssm-coverage-sets.json`.

## Sources and version/provenance boundaries
Saved evidence:
- `translation-queue/intakes/2026-11-01.json`: collection count 155, matching registered records.
- `translation-queue/intakes/2026-11-01/aws-ssm-index.html`: title AWS CLI 2.39.3.
- Saved `aws-ssm-wait/.../source.html`: one `command-executed` child.
- All 155 manifest identities are CLI 2.39.3. Manifest retrieval timestamps span **2026-10-31T17:16:37.234Z–2026-10-31T17:16:38.056Z**; the intake grouping is dated **2026-11-01**. These dates are not silently equated.
- `src/data/manual-catalog.json` and the 155 corresponding `translation-queue/*.json` records were read as present at audit time.

Official live sources read:
- [SSM index](https://docs.aws.amazon.com/cli/latest/reference/ssm/index.html)
- [wait index](https://docs.aws.amazon.com/cli/latest/reference/ssm/wait/index.html)
- [wait command-executed](https://docs.aws.amazon.com/cli/latest/reference/ssm/wait/command-executed.html)
- The two new command pages linked above.

All five fetched pages show 2.40.4 in their titles. Fetch used normal HTTPS curl with TLS validation and redirects enabled; no access rejection or bypass occurred. Local read-only evidence snapshots were saved only under `recovery-work/`.

## Interpretation and next work
“Saved 155 documents translated/done” is supported, but **“all latest SSM commands translated” is not**: the current index covers 157 documents. Existing 155 pages were not individually refetched or content-diffed, so this audit makes no claim that their options, semantics, or examples match 2.40.4. Queue `done` was observed, not re-certified by a fresh semantic translation review.

For current coverage, the next scoped action would be to ingest the two official 2.40.4 command pages as new versioned sources and run the normal translation/review pipeline. Assessing updates to existing command pages is a separate version-refresh task. This audit did not ingest, translate, publish, or change canonical source, queue, catalog, or git.

## Retrieved snapshot hashes (SHA-256)
- `aws-ssm-current-deregister-default-host-management-configuration.html`: `77d6bc633b9963e6a1690ec05e0200c913a42f364bafb5956803c6f4a6691fc8`
- `aws-ssm-current-index.html`: `2772dc0058a698b15900e5b0864bdfa8114b120bd61778df37e7d28162133bb2`
- `aws-ssm-current-register-default-host-management-configuration.html`: `941c70915f132d6718f976d8ee0e4f284675e6cf3a61d5cb0ec1f1daab7c4a44`
- `aws-ssm-current-wait-command-executed.html`: `ee55d8a1d654b05ee4dd1ea070ff46d5fa42e75f16eb48d003db2d84955fae57`
- `aws-ssm-current-wait-index.html`: `e2aee14372448f71754abe0bb505c4f7970bb2073cbd5ade5f2f94a12ccc0a9c`
