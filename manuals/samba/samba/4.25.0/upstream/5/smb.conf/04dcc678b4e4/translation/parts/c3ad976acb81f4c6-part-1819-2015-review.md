# smb.conf 1819-2015 部分レビュー

- Samba 4.25.0、197 セグメント。全文完了ではない。
- request / IR と原文 HTML の意味を自己照合。独立レビューではない。glossary と既存原文/権利記録を保持。
- validateTranslation の対象 subset 検証成功、原文と manifest materials の SHA-256 一致。設定名見出しとスコープ (G)/(S)、保護トークン、数値、既定値、否定を保持。
- 共通文は kind/text/protected が完全一致し文脈も一致するものだけ再利用。全文 body↔IR 抽出監査は samba-large-extraction-audit.md（354435文字一致）。
- LANMAN無効後のハッシュ消去と再有効でも認証不可、LDAPタイムアウト秒と複製待ちミリ秒、suffix前置/後置、TLSチャネルバインディング3値、LM AD DC無関係、実ロック無効による破損警告を照合。ldap sslのrpc限定や古い64bit OS記述は原文どおり。
- queue/生成/commit 操作なし。以前の225segは変更していない。

## ハッシュ
- source.html: `04dcc678b4e4f08a0f5c37cd2143140e999de660aa71e38def0db9ce8555d4b0`
- ir.json: `1996c9a42715f6e442297bc3fbac9cade7ccf822758fd6d704d044eb4305628b`
- c3ad976acb81f4c6-part-1819-2015-ja.json: `e09b417f4232cbf9f75dcae300f1804cb9cf992ac6b352d2187f274c012cf864`
