# smb.conf 1025-1223 部分レビュー

- Samba 4.25.0、199 セグメント。全文完了ではない。
- request / IR と原文 HTML の意味を自己照合。独立レビューではない。glossary と既存原文/権利記録を保持。
- validateTranslation の対象 subset 検証成功、原文と manifest materials の SHA-256 一致。設定名見出しとスコープ (G)/(S)、保護トークン、数値、既定値、否定を保持。
- 共通文は kind/text/protected が完全一致し文脈も一致するものだけ再利用。全文 body↔IR 抽出監査は samba-large-extraction-audit.md（354435文字一致）。
- ディレクトリーマスクAND→OR、dfree root所有/setuid禁止、DNS清掃による静的レコード損失警告、ゾーン転送deny優先、2秒切り下げ、属性64K制限を照合。s1216は原文がprefix searchesと言いながら先頭*追加の例を示すため、記述と例をともに保持し独自補正しない。
- queue/生成/commit 操作なし。以前の225segは変更していない。

## ハッシュ
- source.html: `04dcc678b4e4f08a0f5c37cd2143140e999de660aa71e38def0db9ce8555d4b0`
- ir.json: `1996c9a42715f6e442297bc3fbac9cade7ccf822758fd6d704d044eb4305628b`
- c3ad976acb81f4c6-part-1025-1223-ja.json: `2d946aa2935ba3e293e3a8a872af963f85934127eef0ea69d6e18e92b1a4fd46`
