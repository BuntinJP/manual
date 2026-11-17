# smb.conf 1224-1425 部分レビュー

- Samba 4.25.0、202 セグメント。全文完了ではない。
- request / IR と原文 HTML の意味を自己照合。独立レビューではない。glossary と既存原文/権利記録を保持。
- validateTranslation の対象 subset 検証成功、原文と manifest materials の SHA-256 一致。設定名見出しとスコープ (G)/(S)、保護トークン、数値、既定値、否定を保持。
- 共通文は kind/text/protected が完全一致し文脈も一致するものだけ再利用。全文 body↔IR 抽出監査は samba-large-extraction-audit.md（354435文字一致）。
- oplock同時書込の破損警告、force groupの+条件とforce user接続認証維持、quotaの引数/列順/1024単位を照合。s1241 max results見出しなのにJSONパス説明という原文不整合、s1362 SIDをsecurity descriptorと呼ぶ原文を勝手に直さず保持。
- queue/生成/commit 操作なし。以前の225segは変更していない。

## ハッシュ
- source.html: `04dcc678b4e4f08a0f5c37cd2143140e999de660aa71e38def0db9ce8555d4b0`
- ir.json: `1996c9a42715f6e442297bc3fbac9cade7ccf822758fd6d704d044eb4305628b`
- c3ad976acb81f4c6-part-1224-1425-ja.json: `0ce1611be6165470eea47e867c559bf2872c4455cfab0f2e8c1a7ed5c78a0761`
