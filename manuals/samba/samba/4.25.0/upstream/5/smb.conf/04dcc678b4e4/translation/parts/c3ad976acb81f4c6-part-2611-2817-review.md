# smb.conf 2611-2817 部分レビュー

- Samba 4.25.0、207 セグメント。全文完了ではない。
- request / IR と原文 HTML の意味を自己照合。独立レビューではない。glossary と既存原文/権利記録を保持。
- validateTranslation の対象 subset 検証成功、原文と manifest materials の SHA-256 一致。設定名見出しとスコープ (G)/(S)、保護トークン、数値、既定値、否定を保持。
- 共通文は kind/text/protected が完全一致し文脈も一致するものだけ再利用。全文 body↔IR 抽出監査は samba-large-extraction-audit.md（354435文字一致）。
- PAM条件、旧パスワード許容分/oplockミリ秒、passwd chatの初回秒と後続1/10、平文ログ危険、公開鍵のみ保存/全DC設定とコマンド単一DC、Persistent Handle全面停止と部分停止/性能コストを照合。s2675のacrosと変数断片、s2705 OpenGPGは原文表記を保持。
- queue/生成/commit 操作なし。以前の225segは変更していない。

## ハッシュ
- source.html: `04dcc678b4e4f08a0f5c37cd2143140e999de660aa71e38def0db9ce8555d4b0`
- ir.json: `1996c9a42715f6e442297bc3fbac9cade7ccf822758fd6d704d044eb4305628b`
- c3ad976acb81f4c6-part-2611-2817-ja.json: `0cdf82c594df6fd4adec9657f8660e011f3543c9a9d2f14f24f169aa523d3576`
