# smb.conf 0226-0424 部分レビュー

- Samba 4.25.0、199 セグメント。全文完了ではない。
- request / IR と原文 HTML の意味を自己照合。独立レビューではない。glossary と既存原文/権利記録を保持。
- validateTranslation の対象 subset 検証成功、原文と manifest materials の SHA-256 一致。設定名見出しとスコープ (G)/(S)、保護トークン、数値、既定値、否定を保持。
- 共通文は kind/text/protected が完全一致し文脈も一致するものだけ再利用。全文 body↔IR 抽出監査は samba-large-extraction-audit.md（354435文字一致）。
- AD機能レベルを手動設定した場合の保護低下、root実行条件、要求キューと拒否の違い、aio write behind の成功応答とデータ損失危険、信頼方向DOMA→DOMB、暗号例外の優先関係を照合。4.19未完成等の原文の時点記述は4.25本文でも補正せず保持。
- queue/生成/commit 操作なし。以前の225segは変更していない。

## ハッシュ
- source.html: `04dcc678b4e4f08a0f5c37cd2143140e999de660aa71e38def0db9ce8555d4b0`
- ir.json: `1996c9a42715f6e442297bc3fbac9cade7ccf822758fd6d704d044eb4305628b`
- c3ad976acb81f4c6-part-0226-0424-ja.json: `75efc6e87a09bc4c87c50e47f6410fb8f18de067a57bcc77c3f9d6187ab08d69`
