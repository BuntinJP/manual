# smb.conf 2016-2215 部分レビュー

- Samba 4.25.0、200 セグメント。全文完了ではない。
- request / IR と原文 HTML の意味を自己照合。独立レビューではない。glossary と既存原文/権利記録を保持。
- validateTranslation の対象 subset 検証成功、原文と manifest materials の SHA-256 一致。設定名見出しとスコープ (G)/(S)、保護トークン、数値、既定値、否定を保持。
- 共通文は kind/text/protected が完全一致し文脈も一致するものだけ再利用。全文 body↔IR 抽出監査は samba-large-extraction-audit.md（354435文字一致）。
- 監査ログ生成がcommit前でrollback時非永続化、root直接変更はconsoleのみ、passdbのprofile値がsmb.conf空指定にも優先、netlogon書込禁止、切断時書込ファイル破損警告、lpq30秒と0無効を照合。ログ属性/クラス名は識別子として保持し、UNCとレジストリのバックスラッシュを原文と再照合。logon path等をlogon scriptと呼ぶ原文記述は補正しない。
- queue/生成/commit 操作なし。以前の225segは変更していない。

## ハッシュ
- source.html: `04dcc678b4e4f08a0f5c37cd2143140e999de660aa71e38def0db9ce8555d4b0`
- ir.json: `1996c9a42715f6e442297bc3fbac9cade7ccf822758fd6d704d044eb4305628b`
- c3ad976acb81f4c6-part-2016-2215-ja.json: `c074ce90ac1e77681e96b7bbdf619f4cbfd7309d77ecdbaba511d7ca79af0ef4`
