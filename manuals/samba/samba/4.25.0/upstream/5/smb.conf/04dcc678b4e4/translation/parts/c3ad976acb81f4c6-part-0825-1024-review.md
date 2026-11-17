# smb.conf 0825-1024 部分レビュー

- Samba 4.25.0、200 セグメント。全文完了ではない。
- request / IR と原文 HTML の意味を自己照合。独立レビューではない。glossary と既存原文/権利記録を保持。
- validateTranslation の対象 subset 検証成功、原文と manifest materials の SHA-256 一致。設定名見出しとスコープ (G)/(S)、保護トークン、数値、既定値、否定を保持。
- 共通文は kind/text/protected が完全一致し文脈も一致するものだけ再利用。全文 body↔IR 抽出監査は samba-large-extraction-audit.md（354435文字一致）。
- create mask のAND→force ORの順序、CTDBタイムアウトのミリ秒/0無期限推奨、CUPS TLS失敗時の平文fallback、deadtimeの分単位とopen files=0条件、デバッグ鍵漏えい警告、delete veto filesの再帰削除と権限条件を照合。s1022の既定値zeroとs1023のNo defaultの原文内不整合は補正せず保持。
- queue/生成/commit 操作なし。以前の225segは変更していない。

## ハッシュ
- source.html: `04dcc678b4e4f08a0f5c37cd2143140e999de660aa71e38def0db9ce8555d4b0`
- ir.json: `1996c9a42715f6e442297bc3fbac9cade7ccf822758fd6d704d044eb4305628b`
- c3ad976acb81f4c6-part-0825-1024-ja.json: `b16806a8fc06008322ba5011b39475d52c3ee90a8f6434161042e911780e3760`
