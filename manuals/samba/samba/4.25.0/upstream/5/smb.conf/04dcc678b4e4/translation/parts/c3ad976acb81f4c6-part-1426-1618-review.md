# smb.conf 1426-1618 部分レビュー

- Samba 4.25.0、193 セグメント。全文完了ではない。
- request / IR と原文 HTML の意味を自己照合。独立レビューではない。glossary と既存原文/権利記録を保持。
- validateTranslation の対象 subset 検証成功、原文と manifest materials の SHA-256 一致。設定名見出しとスコープ (G)/(S)、保護トークン、数値、既定値、否定を保持。
- 共通文は kind/text/protected が完全一致し文脈も一致するものだけ再利用。全文 body↔IR 抽出監査は samba-large-extraction-audit.md（354435文字一致）。
- guest onlyはguest ok未設定なら無効、hide filesのglobal+share加算、hosts allowのglobal優先とhosts deny競合時allow優先、idmap範囲非重複、inherit ownerのSID/uid分離、setuid継承禁止、samlogonミリ秒を照合。s1452は設定構文として原文維持。s1487 MSFDSは原文の綴りを保持。
- queue/生成/commit 操作なし。以前の225segは変更していない。

## ハッシュ
- source.html: `04dcc678b4e4f08a0f5c37cd2143140e999de660aa71e38def0db9ce8555d4b0`
- ir.json: `1996c9a42715f6e442297bc3fbac9cade7ccf822758fd6d704d044eb4305628b`
- c3ad976acb81f4c6-part-1426-1618-ja.json: `6132c5f571dacd9cb49df227b958f70d155ab1a8aff49b2b802c1798789c2b7e`
