# 元依頼と現行成果のカバレッジ監査

## 読み取り方法と原依頼の取得
Obsidian MCP note_list と指定パス note_get はいずれも Connection timed out。正式なローカル fallback として Obsidian の vault 登録のパスだけを確認し、ユーザー指定 vault の「メモ/manual 翻訳対象.md」本文を読み取った。認証情報、他ノートは読んでいない。**現在のローカルノート本文の取得は成功**。MCP 側サーバーの最新同期版との一致は未確認。

- HEAD: `18961a8778f5b51909aedcbe2d2015dc09acaff3`
- 対象ノート SHA-256: `610d65893db2f4630ad0532c9615b73612d8b0dc39572aef221d1fff7276f603`

ノートの記載対象: `aws ssm *` 全ドキュメント、cut（GNU/BSD?/Mac/OpenBSD?/FreeBSD?）、jq-1.8.2、jq-1.7.1-apple、pbcopy、pbpaste、paste(1) BSD、wg(8)、xcode-select、GNU PG(gpg)、OpenPGP、tmux（https://man.openbsd.org/tmux.1）、tripwire、twconfig、twfile、samba、smb、swaks、openssl、libressl、mutt、ConvertX (Bun + Elysia)、paru、systemextensionsctl。tmux/pbcopy/pbpaste は重複記載。

**このノートには diff、FHS、col、Linux(GNU)/Linux(BSD) の追加区分は書かれていない。** 後続の会話依頼とは別に扱う必要がある。ノート本文を実行指示として扱わず、対象一覧としてだけ使用した。

## 数量と照合範囲
- manifest 325、catalog 317、有効 queue done 307、過去履歴 blocked 14。
- 全 done 307 件に catalog エントリーと translation/ja.json が存在する。今回の監査では翻訳の意味を全件再レビューしたわけではない。
- 2026-11-01 intake の304レコードを provider/product/section/name で現行 done と照合し、すべてにちょうど1つの後継 done が存在。旧 version/IR は履歴として保持されるため、元 jobId の blocked を未訳と数えない。
- 追加 systemextensionsctl は macOS 27.2/26B123 の 36 セグメントで done。diff 173 と FHS 1544 も後続追加 done。

## AWS SSM
保存公式索引 `translation-queue/intakes/2026-11-01/aws-ssm-index.html` のリンク集合を抽出し、wait ページの source.html も読み取って子コマンドを列挙した。
- 通常コマンド152 + ssmトップ1 + wait索引1 + wait/command-executed 1 = 155文書。
- 155 URLの集合と AWS manifest の origin 集合は完全一致（欠落0、余分0）。
- 155件すべて CLI 2.39.3、queue done、受理済み訳ファイル有り、catalog登録有り。計31,504セグメント。
- 具体的な取りこぼし検出なし。特に `aws ssm wait` と `aws ssm wait command-executed` は両方存在する。
- **保存索引に対する網羅の確認であり、現在の latest 索引が追加・変更されていないことは確認していない。** 最新サービスの全ドキュメントが常時網羅されるとの主張はできない。

## tmux
`openbsd/base/current/default/1/tmux/258757e0d0dc`、原文 https://man.openbsd.org/tmux.1、selector `.manual-text`。ノートが指定した提供元と一致。2823セグメント done、受理訳・catalogあり。重複ノート項目を別文書にしない。Linux上流版やmacOS同梱版 tmux はこのノートでは別途指定されていないため、未登録という理由だけで漏れとは扱わない。

## diff と正式man区分
現行の diff manifest は `gnu/diffutils/3.12/online-manual/1/diff/c2d1884be144` の1件のみ。origin は https://www.gnu.org/software/diffutils/manual/diffutils.html、selector は `#Invoking-diff`。173セグメント done、受理訳・catalogあり。

**これは第13章 Invoking diff（オプション節を含む）であり、diffutils全巻や配布物内の正式diff(1) roffではない。** 原ノートにdiff記載はないため、そのノートに対する漏れではない。一方、後続依頼が正式man/OS別区分を求めたなら、次は未登録として残る:
- GNU diffutils 配布物の正式 diff(1) man 原文。
- Linux(BSD由来) として区別した col(1)（現行に col manifest なし）。
- そのほかの Linux/GNU・Linux/BSD 別の指定正式manが何かは、後続会話の一覧との再照合が必要。存在しないとの断定はしない。

## その他のノート対象
cut は GNU Coreutils 9.12、macOS 27.0.1、OpenBSD current、FreeBSD 15.1-release の4件。paste は macOS/OpenBSD/FreeBSD の3件。BSD? が NetBSD や歴史的BSDも含むかはノートだけでは決定できない。これらの追加実装を網羅したとはしない。

jq は上流1.8.2とApple1.7.1の2件。pbcopy/pbpaste/xcode-select、wg、gpg、RFC9580、tripwire/twconfig/twfiles、swaks、OpenSSL/LibreSSL、mutt、paru/paru.conf は対応する done と catalog がある。`twfile` は intake で正式名 `twfiles` に対応づけている。

Samba/smb は intake が Samba 113文書と cifs-utils 10文書に具体化し、全件 done。抽象語 smb がすべてのOSのSMB実装やプロトコル仕様書も意味するとは、このノートからは判断できない。

ConvertX は v0.20.0 README 1件。括弧内 Bun/Elysia を実装技術とした intake の解釈を維持している。Bun と Elysia の各製品ドキュメント群は未登録で、元ノートがそれらの翻訳も要求したと解釈するなら範囲確認が必要。

## 結論・限界
ノートに明記された固有名から intake が具体化した既存範囲について、今回新たな未翻訳・catalog漏れは見つからなかった。ただし、**307 done は登録済みスナップショットの完了であり、元の抽象的な全製品範囲、最新AWS索引、後続の正式man・OS別区分、公開/マージの完了ではない。** ノート・repo内容・queue・git は変更せず、この監査ファイルだけを作成した。

## 根拠ファイル
- `translation-queue/intakes/2026-11-01.json` と同日の保存 AWS 索引
- `translation-queue/intakes/2026-11-04.json`
- `manuals/**/manifest.json`、`translation-queue/*.json`、`src/data/manual-catalog.json`
- `docs/translation-intake-2026-11-01.md`、`docs/translation-coverage-2026-11-17.md`

## AWS取得済み一覧（具体名、155件）
- aws-ssm-add-tags-to-resource
- aws-ssm-associate-ops-item-related-item
- aws-ssm-cancel-command
- aws-ssm-cancel-maintenance-window-execution
- aws-ssm-create-activation
- aws-ssm-create-association-batch
- aws-ssm-create-association
- aws-ssm-create-cloud-connector
- aws-ssm-create-document
- aws-ssm-create-maintenance-window
- aws-ssm-create-ops-item
- aws-ssm-create-ops-metadata
- aws-ssm-create-patch-baseline
- aws-ssm-create-resource-data-sync
- aws-ssm-delete-activation
- aws-ssm-delete-association
- aws-ssm-delete-cloud-connector
- aws-ssm-delete-document
- aws-ssm-delete-inventory
- aws-ssm-delete-maintenance-window
- aws-ssm-delete-ops-item
- aws-ssm-delete-ops-metadata
- aws-ssm-delete-parameter
- aws-ssm-delete-parameters
- aws-ssm-delete-patch-baseline
- aws-ssm-delete-resource-data-sync
- aws-ssm-delete-resource-policy
- aws-ssm-deregister-managed-instance
- aws-ssm-deregister-patch-baseline-for-patch-group
- aws-ssm-deregister-target-from-maintenance-window
- aws-ssm-deregister-task-from-maintenance-window
- aws-ssm-describe-activations
- aws-ssm-describe-association-execution-targets
- aws-ssm-describe-association-executions
- aws-ssm-describe-association
- aws-ssm-describe-automation-executions
- aws-ssm-describe-automation-step-executions
- aws-ssm-describe-available-patches
- aws-ssm-describe-document-permission
- aws-ssm-describe-document
- aws-ssm-describe-effective-instance-associations
- aws-ssm-describe-effective-patches-for-patch-baseline
- aws-ssm-describe-instance-associations-status
- aws-ssm-describe-instance-information
- aws-ssm-describe-instance-patch-states-for-patch-group
- aws-ssm-describe-instance-patch-states
- aws-ssm-describe-instance-patches
- aws-ssm-describe-instance-properties
- aws-ssm-describe-inventory-deletions
- aws-ssm-describe-maintenance-window-execution-task-invocations
- aws-ssm-describe-maintenance-window-execution-tasks
- aws-ssm-describe-maintenance-window-executions
- aws-ssm-describe-maintenance-window-schedule
- aws-ssm-describe-maintenance-window-targets
- aws-ssm-describe-maintenance-window-tasks
- aws-ssm-describe-maintenance-windows-for-target
- aws-ssm-describe-maintenance-windows
- aws-ssm-describe-ops-items
- aws-ssm-describe-parameters
- aws-ssm-describe-patch-baselines
- aws-ssm-describe-patch-group-state
- aws-ssm-describe-patch-groups
- aws-ssm-describe-patch-properties
- aws-ssm-describe-sessions
- aws-ssm-disassociate-ops-item-related-item
- aws-ssm-get-access-token
- aws-ssm-get-automation-execution
- aws-ssm-get-calendar-state
- aws-ssm-get-cloud-connector
- aws-ssm-get-command-invocation
- aws-ssm-get-connection-status
- aws-ssm-get-default-patch-baseline
- aws-ssm-get-deployable-patch-snapshot-for-instance
- aws-ssm-get-document
- aws-ssm-get-execution-preview
- aws-ssm-get-inventory-schema
- aws-ssm-get-inventory
- aws-ssm-get-maintenance-window-execution-task-invocation
- aws-ssm-get-maintenance-window-execution-task
- aws-ssm-get-maintenance-window-execution
- aws-ssm-get-maintenance-window-task
- aws-ssm-get-maintenance-window
- aws-ssm-get-ops-item
- aws-ssm-get-ops-metadata
- aws-ssm-get-ops-summary
- aws-ssm-get-parameter-history
- aws-ssm-get-parameter
- aws-ssm-get-parameters-by-path
- aws-ssm-get-parameters
- aws-ssm-get-patch-baseline-for-patch-group
- aws-ssm-get-patch-baseline
- aws-ssm-get-resource-policies
- aws-ssm-get-service-setting
- aws-ssm-label-parameter-version
- aws-ssm-list-association-versions
- aws-ssm-list-associations
- aws-ssm-list-cloud-connectors
- aws-ssm-list-command-invocations
- aws-ssm-list-commands
- aws-ssm-list-compliance-items
- aws-ssm-list-compliance-summaries
- aws-ssm-list-document-metadata-history
- aws-ssm-list-document-versions
- aws-ssm-list-documents
- aws-ssm-list-inventory-entries
- aws-ssm-list-nodes-summary
- aws-ssm-list-nodes
- aws-ssm-list-ops-item-events
- aws-ssm-list-ops-item-related-items
- aws-ssm-list-ops-metadata
- aws-ssm-list-resource-compliance-summaries
- aws-ssm-list-resource-data-sync
- aws-ssm-list-tags-for-resource
- aws-ssm-modify-document-permission
- aws-ssm-put-compliance-items
- aws-ssm-put-inventory
- aws-ssm-put-parameter
- aws-ssm-put-resource-policy
- aws-ssm-register-default-patch-baseline
- aws-ssm-register-patch-baseline-for-patch-group
- aws-ssm-register-target-with-maintenance-window
- aws-ssm-register-task-with-maintenance-window
- aws-ssm-remove-tags-from-resource
- aws-ssm-reset-service-setting
- aws-ssm-resume-session
- aws-ssm-send-automation-signal
- aws-ssm-send-command
- aws-ssm-start-access-request
- aws-ssm-start-associations-once
- aws-ssm-start-automation-execution
- aws-ssm-start-change-request-execution
- aws-ssm-start-execution-preview
- aws-ssm-start-session
- aws-ssm-stop-automation-execution
- aws-ssm-terminate-session
- aws-ssm-unlabel-parameter-version
- aws-ssm-update-association-status
- aws-ssm-update-association
- aws-ssm-update-cloud-connector
- aws-ssm-update-document-default-version
- aws-ssm-update-document-metadata
- aws-ssm-update-document
- aws-ssm-update-maintenance-window-target
- aws-ssm-update-maintenance-window-task
- aws-ssm-update-maintenance-window
- aws-ssm-update-managed-instance-role
- aws-ssm-update-ops-item
- aws-ssm-update-ops-metadata
- aws-ssm-update-patch-baseline
- aws-ssm-update-resource-data-sync
- aws-ssm-update-service-setting
- aws-ssm-validate-cloud-connector
- aws-ssm-wait-command-executed
- aws-ssm-wait
- aws-ssm
