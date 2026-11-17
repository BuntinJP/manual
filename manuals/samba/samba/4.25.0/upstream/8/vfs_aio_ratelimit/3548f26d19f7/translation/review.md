# vfs_aio_ratelimit 翻訳自己照合

確認者: EMMA Samba batch-5担当（自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/samba/4.25.0/upstream/8/vfs_aio_ratelimit/3548f26d19f7
全66セグメントを読み、原文/IR/候補訳を照合。条件・否定・数値・既定値・対象方向を保持。コマンド/設定キー/コード/著者名を維持し、例はIRのliteralのまま。全ID/非空訳/保護トークン/強調の既存validateTranslation成功。原文SHA検証成功。原文復元テキストの空白正規化照合不一致: なし。

原文版: 4.25.0。別版の仕様で補正していない。原文内にある版表記・著者・参照先を保持。manifest追加license資料: なし（明示的な再配布許諾の確認とはしない）。

sourceSha256: 3548f26d19f73e33f2e6f45c5ef9854c0faface13b0c2e81b007fc2503fe8d21
irSha256: 6183e94ece86eeffa74e579faf8c36252060ced3485bb546fa7157b64295f7de

未受理。queue/生成/commitなし。

原文抽出の逆方向監査: body全文とIR全文の空白除去後完全一致を確認。詳細は samba-batch-5-extraction-audit.md。

## 個別確認

クラスタ全体の制限とノード単位の例、READ/WRITE、0=無制限、既定15=1.5倍/最大100=10倍、長期上限とバースト容量を区別。


## キュー受理の最終バインド

sourceSha256: 3548f26d19f73e33f2e6f45c5ef9854c0faface13b0c2e81b007fc2503fe8d21
irSha256: 6183e94ece86eeffa74e579faf8c36252060ced3485bb546fa7157b64295f7de
draftSha256: eb56dd2209c8527523edeea0025045fb764b8a374040b4a3912c39ab73f698e7

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
