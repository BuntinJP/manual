# setcifsacl 翻訳自己照合

確認者: EMMA Samba batch-5後半担当（自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/cifs-utils/7.9/linux/1/setcifsacl/31c37a2c4b64
全70セグメントを読み、原文/IR/候補訳を照合。条件・否定・数値・既定値・対象方向を保持。コマンド/設定キー/コード/著者名を維持し、例はIRのliteralのまま。全ID/非空訳/保護トークン/強調の既存validateTranslation成功。原文SHA検証成功。原文復元テキストの空白正規化照合不一致: なし。

原文版: 7.9。別版の仕様で補正していない。原文内にある版表記・著者・参照先を保持。manifest追加license資料: licenses/COPYING。

sourceSha256: 31c37a2c4b6413ae114f7ad35dae878913820961283e9ab61a3a1f28aae2e5c9
irSha256: d6dbe30eb86a0ddf192e79235191a71284a5490f4336d0c09a13204cb3a83269

未受理。queue/生成/commitなし。

## 個別照合メモ

cifs-utils 7.9 の原本 RST と COPYING (GPLv3) の material SHA を確認。@pluginpath@ はテンプレートのまま保持。SUCCESSFULL_ACCESS という原文の綴りと、s0049/s0050 の CIFSTESTDOMuserN（バックスラッシュなし）を独自訂正していない。すべてのコマンド例、SID、マスク、16進値を保持。SACL と DACL、重複ACE追加と完全一致削除を区別。


## キュー受理の最終バインド

sourceSha256: 31c37a2c4b6413ae114f7ad35dae878913820961283e9ab61a3a1f28aae2e5c9
irSha256: d6dbe30eb86a0ddf192e79235191a71284a5490f4336d0c09a13204cb3a83269
draftSha256: 1b87dd50397fe55b96e2f568769575e5cf0965b5107095a9431564d67fe0aac5

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
