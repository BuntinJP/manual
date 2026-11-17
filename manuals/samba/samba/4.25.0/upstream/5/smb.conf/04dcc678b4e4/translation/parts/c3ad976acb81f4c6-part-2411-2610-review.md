# smb.conf 2411-2610 部分レビュー

- Samba 4.25.0、200 セグメント。全文完了ではない。
- request / IR と原文 HTML の意味を自己照合。独立レビューではない。glossary と既存原文/権利記録を保持。
- validateTranslation の対象 subset 検証成功、原文と manifest materials の SHA-256 一致。設定名見出しとスコープ (G)/(S)、保護トークン、数値、既定値、否定を保持。
- 共通文は kind/text/protected が完全一致し文脈も一致するものだけ再利用。全文 body↔IR 抽出監査は samba-large-extraction-audit.md（354435文字一致）。
- 非署名時のみrecvfile、128k上限/16Mb表記、名前解決の型と順序、NTハッシュ省略の信頼アカウント例外、履歴3個/名前変更後制限、NTLMローカルのみとRODC転送失敗を照合。s2511 wins_wins重複見出しも原文保持。
- queue/生成/commit 操作なし。以前の225segは変更していない。

## ハッシュ
- source.html: `04dcc678b4e4f08a0f5c37cd2143140e999de660aa71e38def0db9ce8555d4b0`
- ir.json: `1996c9a42715f6e442297bc3fbac9cade7ccf822758fd6d704d044eb4305628b`
- c3ad976acb81f4c6-part-2411-2610-ja.json: `844a4b8cf418ed664b32f6d1725a0502a3c95654421c652b2067ac3df4c1c374`
