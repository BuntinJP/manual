# smb.conf 0625-0824 部分レビュー

- Samba 4.25.0、200 セグメント。全文完了ではない。
- request / IR と原文 HTML の意味を自己照合。独立レビューではない。glossary と既存原文/権利記録を保持。
- validateTranslation の対象 subset 検証成功、原文と manifest materials の SHA-256 一致。設定名見出しとスコープ (G)/(S)、保護トークン、数値、既定値、否定を保持。
- 共通文は kind/text/protected が完全一致し文脈も一致するものだけ再利用。全文 body↔IR 抽出監査は samba-large-extraction-audit.md（354435文字一致）。
- NTLMv2限定とフォールバック、FIPS時required強制、QUIC二重暗号化回避のAND条件と通常要件のOR条件、各方言で唯一のアルゴリズム除去、実験的netlogon本番使用禁止、copyの優先順位を照合。s0711のdisabled表記とs0717のクライアント/サーバー方向は原文のまま保持し、想像で訂正しない。
- queue/生成/commit 操作なし。以前の225segは変更していない。

## ハッシュ
- source.html: `04dcc678b4e4f08a0f5c37cd2143140e999de660aa71e38def0db9ce8555d4b0`
- ir.json: `1996c9a42715f6e442297bc3fbac9cade7ccf822758fd6d704d044eb4305628b`
- c3ad976acb81f4c6-part-0625-0824-ja.json: `d23813f7cc398a5cb041351525b02b53488f94565b6141136840786d0cf96b52`
