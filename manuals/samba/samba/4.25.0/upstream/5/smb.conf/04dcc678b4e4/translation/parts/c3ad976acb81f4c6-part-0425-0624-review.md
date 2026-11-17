# smb.conf 0425-0624 部分レビュー

- Samba 4.25.0、200 セグメント。全文完了ではない。
- request / IR と原文 HTML の意味を自己照合。独立レビューではない。glossary と既存原文/権利記録を保持。
- validateTranslation の対象 subset 検証成功、原文と manifest materials の SHA-256 一致。設定名見出しとスコープ (G)/(S)、保護トークン、数値、既定値、否定を保持。
- 共通文は kind/text/protected が完全一致し文脈も一致するものだけ再利用。全文 body↔IR 抽出監査は samba-large-extraction-audit.md（354435文字一致）。
- クラスター版混在の安全検査、認証イベントの配信非保証、bind interface のなりすまし限界、永続ストレージ内の非永続キャッシュ、パスワードスクリプトの単一引用符とCVE、IPC署名必須対通常署名任意、LDAP sealのKDC時刻同期を照合。s0431の原文polices/対象表現とs0610のNT1をcurrentと呼ぶ記述は意味を変える独自訂正をしない。
- queue/生成/commit 操作なし。以前の225segは変更していない。

## ハッシュ
- source.html: `04dcc678b4e4f08a0f5c37cd2143140e999de660aa71e38def0db9ce8555d4b0`
- ir.json: `1996c9a42715f6e442297bc3fbac9cade7ccf822758fd6d704d044eb4305628b`
- c3ad976acb81f4c6-part-0425-0624-ja.json: `1967394e8a16ba74ec8c32f6387a98ad9a5a4887afeffe3d4dfbf29fae8343b6`
