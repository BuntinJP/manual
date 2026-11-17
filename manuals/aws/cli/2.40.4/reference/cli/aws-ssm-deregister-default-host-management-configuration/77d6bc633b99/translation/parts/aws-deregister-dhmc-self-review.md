# AWS deregister DHMC translation self-review

## Snapshot
- AWS CLI page version: 2.40.4.
- Translation: `aws-deregister-dhmc-ja.json`; SHA-256 `15d97952ca6bb592c0086857499081b1242e9d4d3033abddd77888f61400e06f`.
- Source SHA-256: `77d6bc633b9963e6a1690ec05e0200c913a42f364bafb5956803c6f4a6691fc8`.
- IR SHA-256: `111c0f1dc1e94566b7fdcaba0cd3c1b8820ebe3ff7ecc311d7f1c0e24b45280d`.
- Full assigned scope: s0001–s0072, 72/72 segments.

## Semantic review
Read all request English segments and compared the Japanese during translation. Independently inspected the source HTML’s command description, permissions, synopsis/options and output structure; checked the IR/request text agreement mechanically separately. Checked account/Region scope and that EC2 instances cease to be automatically managed nodes after deregistration. Required service-setting permissions are GetServiceSetting + ResetServiceSetting (not register’s UpdateServiceSetting). DeleteRole is additional only for a service-managed registered role. No command-specific input options are invented. Output None is translated as なし.

Read and meaning-checked the existing common-option translations before reusing them. Reused exactly 58 segments per file from `aws-ssm-add-tags-to-resource` CLI 2.39.3, covering cli-input/skeleton and global options (not new command description/permissions/constraints/output). Reuse required exact equality of kind, text and protected array; common CLI option context is unchanged. Exact old/new ID mapping is in `aws-deregister-dhmc-reuse.json`. The meaning review included input precedence, no arbitrary binary JSON values, API-free skeleton generation, no skeleton compatibility guarantee, SSL verification override, first-page-only pagination, region/profile precedence, no-sign credentials behavior, zero timeout versus 60-second default, fileb/file binary handling, pager/prompt negation and enhanced error default. Added --help label and description directly from new source. Literal choices/types remain unchanged.

Upstream note: the shared cli-input-json/cli-input-yaml paragraph describes JSON and says it may not be combined with cli-input-yaml. This is inherited source wording, retained rather than silently rewritten. No unresolved translation error identified. This is translator self-review, not independent review.

## Mechanical checks (not semantic proof)
Verified original source.html and ir.json SHA-256 against request metadata; every request text/kind matches IR; all 72 IDs present exactly once; placeholder multiset unchanged for every segment; schema/source/IR/locale fields retained. Protected IAM actions, setting path, enum constants, defaults, ARN regex and numeric bounds remain tied to their original IDs. Command syntax is in unchanged IR code blocks and is not translated or executed.

Only recovery-work artifacts written. No canonical source, queue, accepted translation, generated page or git modification; no AWS operation or documented command executed. Parent owns save/complete and integration tests.
