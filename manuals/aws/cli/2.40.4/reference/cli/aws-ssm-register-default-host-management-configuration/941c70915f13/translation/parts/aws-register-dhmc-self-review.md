# AWS register DHMC translation self-review

## Snapshot
- AWS CLI page version: 2.40.4.
- Translation: `aws-register-dhmc-ja.json`; SHA-256 `183328ea63b00cda1b597f4a8539d26af0bc85361756dd3b139fbbb6eed0b79b`.
- Source SHA-256: `941c70915f132d6718f976d8ee0e4f284675e6cf3a61d5cb0ec1f1daab7c4a44`.
- IR SHA-256: `ef2a53c75a0475b13561115caad6e232da2e091fcdc556c58981c4b43a8986cc`.
- Full assigned scope: s0001–s0102, 102/102 segments.

## Semantic review
Read all request English segments and compared the Japanese during translation. Independently inspected the source HTML’s command description, permissions, synopsis/options and output structure; checked the IR/request text agreement mechanically separately. Checked account/Region scope; no extra instance-profile configuration required with DHMC; GetServiceSetting + UpdateServiceSetting for the stated setting; GetRole + PassRole for the role; CreateRole + AttachRolePolicy additionally only for SERVICE_MANAGED. Confirmed permission-model string is required; SELF_MANAGED requires RoleArn while SERVICE_MANAGED prohibits it. ARN min 20/max 2048 and regex are protected unchanged. Overwrite defaults false; true replaces the registered role. Output RoleArn is service-created in the IAM reserved path vs user-provided depending on model.

Read and meaning-checked the existing common-option translations before reusing them. Reused exactly 58 segments per file from `aws-ssm-add-tags-to-resource` CLI 2.39.3, covering cli-input/skeleton and global options (not new command description/permissions/constraints/output). Reuse required exact equality of kind, text and protected array; common CLI option context is unchanged. Exact old/new ID mapping is in `aws-register-dhmc-reuse.json`. The meaning review included input precedence, no arbitrary binary JSON values, API-free skeleton generation, no skeleton compatibility guarantee, SSL verification override, first-page-only pagination, region/profile precedence, no-sign credentials behavior, zero timeout versus 60-second default, fileb/file binary handling, pager/prompt negation and enhanced error default. Added --help label and description directly from new source. Literal choices/types remain unchanged.

Upstream note: the shared cli-input-json/cli-input-yaml paragraph describes JSON and says it may not be combined with cli-input-yaml. This is inherited source wording, retained rather than silently rewritten. No unresolved translation error identified. This is translator self-review, not independent review.

## Mechanical checks (not semantic proof)
Verified original source.html and ir.json SHA-256 against request metadata; every request text/kind matches IR; all 102 IDs present exactly once; placeholder multiset unchanged for every segment; schema/source/IR/locale fields retained. Protected IAM actions, setting path, enum constants, defaults, ARN regex and numeric bounds remain tied to their original IDs. Command syntax is in unchanged IR code blocks and is not translated or executed.

Only recovery-work artifacts written. No canonical source, queue, accepted translation, generated page or git modification; no AWS operation or documented command executed. Parent owns save/complete and integration tests.
