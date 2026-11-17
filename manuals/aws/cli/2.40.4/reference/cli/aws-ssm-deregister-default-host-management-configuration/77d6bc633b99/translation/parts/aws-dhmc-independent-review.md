# AWS DHMC 2 commands: independent semantic review

## Artifacts inspected

|JSON|Segments|SHA-256|
|---|---:|---|
|`recovery-work/aws-register-dhmc-ja.json`|102 (s0001–s0102)|`183328ea63b00cda1b597f4a8539d26af0bc85361756dd3b139fbbb6eed0b79b`|
|`recovery-work/aws-deregister-dhmc-ja.json`|72 (s0001–s0072)|`15d97952ca6bb592c0086857499081b1242e9d4d3033abddd77888f61400e06f`|

Leaves are the two AWS CLI 2.40.4 entries in `recovery-work/next-four-intake.json`. This reviewer did not write either translation. All 174 English/Japanese segment pairs and their protected-value mappings were read. Register and deregister were reviewed separately, including their shared global-option passages, rather than accepting shared translations solely because strings match.

## Semantic findings

**No required correction found.** No omission, inverted condition, numeric/default change or permission substitution was found within the assigned translations.

### Register-specific review

- s0004–s0008: account AND region scope; DHMC removes the need to configure extra resources such as instance profiles; GetServiceSetting + UpdateServiceSetting for the named service setting; GetRole + PassRole for the role; SERVICE_MANAGED condition additionally requires CreateRole + AttachRolePolicy. All retained.
- s0012–s0031: permission model required; AWS creates/manages SERVICE_MANAGED role, caller supplies SELF_MANAGED role; RoleArn required for SELF_MANAGED and prohibited for SERVICE_MANAGED. Overwrite default false remains a guardrail, true replaces the current registration. No reversal.
- s0026–s0029 and s0099–s0102: ARN constraints retain 20/2048 and the exact protected regular expression; string type preserved. Translation does not introduce an unsubstantiated byte/character unit.
- s0092–s0102: output RoleArn identifies AWS-created role in IAM reserved path versus caller-provided RoleArn. No confusion between input role ARN and service-managed output ARN.

### Deregister-specific review

- s0004: removes DHMC configuration for account AND region; instances cease to be **automatically** managed. The translation does not claim EC2 instances themselves are deleted or that every other management mechanism stops.
- s0006: GetServiceSetting + **ResetServiceSetting**, not register's UpdateServiceSetting. Service-setting path preserved.
- s0007: DeleteRole is an **additional conditional** requirement when the registered role is service-managed. The translation does not extend deletion to all self-managed roles.
- s0071–s0072: Output None → 出力/なし. No invented response value.

### Shared global options: all 58 entries context-checked

Register s0034–s0091 and deregister s0013–s0070 each contain the same 58-entry Global Options block. Both were read in their command contexts: debug and endpoint override; SSL verification default/override; first-page-only no-paginate; output enum including off; JMESPath; profile; region/config/env precedence; version; color enum; unsigned requests and no credential loading; CA bundle precedence; read/connect timeouts (0 means no timeout, default 60 seconds); binary base64 default, V1-compatible raw mode, fileb:// bypass of binary format setting versus file:// respecting it; pager and prompt disable/enable; enhanced error-format default and enums; help. No register-only behavior was incorrectly introduced into deregister or vice versa.

Also checked each command's JSON/YAML and skeleton paragraphs: command-line values override JSON, arbitrary binary values cannot be supplied this way, skeleton generation sends no API request, input/yaml-input/output branches and absence of backwards-compatibility guarantee are preserved.

### Source wording and limits, not translation defects

- Register s0032 / deregister s0011: upstream combines `--cli-input-json | --cli-input-yaml` in the heading but ends with a prohibition on specifying it together with `--cli-input-yaml`. The translation preserves this upstream shared-boilerplate wording; it has not silently rewritten the source.
- SSL-verification paragraphs retain upstream “overrides the default behavior” wording rather than adding novel security advice. Meaning is consistent with the adjacent --no-verify-ssl option.
- No pricing, fees, charges or cost notice appears in either supplied command's source/request. There is therefore no pricing paragraph to translate or verify here. This finding is not a claim that DHMC/related AWS services are free. No pricing statement was added.

## Source/IR and mechanical checks (separate from meaning review)

Local source HTML descriptions, permission lists, synopsis and output sections were inspected directly. Request ID/text sequences exactly match the corresponding full IR. Source/IR hashes were recalculated:

- register source `941c70915f132d6718f976d8ee0e4f284675e6cf3a61d5cb0ec1f1daab7c4a44`; IR `ef2a53c75a0475b13561115caad6e232da2e091fcdc556c58981c4b43a8986cc`.
- deregister source `77d6bc633b9963e6a1690ec05e0200c913a42f364bafb5956803c6f4a6691fc8`; IR `111c0f1dc1e94566b7fdcaba0cd3c1b8820ebe3ff7ecc311d7f1c0e24b45280d`.

Both full documents passed repository `validateTranslation`: schema/hash binding, all expected IDs, non-empty translations, exact token multiplicities and inline-style balance. These mechanical checks do not substitute for the above semantic review.

Only this review file was written. No translation JSON, queue, accepted file or Git state was changed. No AWS command/API was executed and no external document instruction was followed. This is translation review of the pinned source, not verification against a live AWS service.
