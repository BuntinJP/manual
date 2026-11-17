# smb.conf 2216-2410 部分レビュー

- Samba 4.25.0、195 セグメント。全文完了ではない。
- request / IR と原文 HTML の意味を自己照合。独立レビューではない。glossary と既存原文/権利記録を保持。
- validateTranslation の対象 subset 検証成功、原文と manifest materials の SHA-256 一致。設定名見出しとスコープ (G)/(S)、保護トークン、数値、既定値、否定を保持。
- 共通文は kind/text/protected が完全一致し文脈も一致するものだけ再利用。全文 body↔IR 抽出監査は samba-large-extraction-audit.md（354435文字一致）。
- map readonly三値/owner書込とACLの区別、guest認証失敗とユーザー不存在の差、ディスク見かけ上限と保存量非制限、max open最低16384、TTL秒を照合。s2260改行をCRとする記述とs2373 remote誤記は原文意味を保持。
- queue/生成/commit 操作なし。以前の225segは変更していない。

## ハッシュ
- source.html: `04dcc678b4e4f08a0f5c37cd2143140e999de660aa71e38def0db9ce8555d4b0`
- ir.json: `1996c9a42715f6e442297bc3fbac9cade7ccf822758fd6d704d044eb4305628b`
- c3ad976acb81f4c6-part-2216-2410-ja.json: `faaa0c5f3c2fb714714cb46d7eb0c35343dcb6e8fd9f90ddbb000a577a76bdff`
