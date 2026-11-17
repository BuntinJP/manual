# smbpasswd 翻訳自己照合

確認者: EMMA Samba batch-5後半担当（自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/samba/4.25.0/upstream/8/smbpasswd/d96124f4ace5
全80セグメントを読み、原文/IR/候補訳を照合。条件・否定・数値・既定値・対象方向を保持。コマンド/設定キー/コード/著者名を維持し、例はIRのliteralのまま。全ID/非空訳/保護トークン/強調の既存validateTranslation成功。原文SHA検証成功。原文復元テキストの空白正規化照合不一致: なし。

原文版: 4.25.0。別版の仕様で補正していない。原文内にある版表記・著者・参照先を保持。manifest追加license資料: なし（明示的な再配布許諾の確認とはしない）。

sourceSha256: d96124f4ace57f86daf095379510fee15f9d0ea37009fcd293323f1066d4c138
irSha256: 0d5b87540ea617c188a78ac19ef9f3fd398930285456d93f8ce1820e01e2afc7

未受理。queue/生成/commitなし。

## 個別照合メモ

root専用条件、ローカルファイル直接変更と通常ユーザーのsmbd通信の違い、旧形式での失敗、NULLパスワードに必要な設定、NT PDC限定を保持。パスワード自体の操作はしていない。


## キュー受理の最終バインド

sourceSha256: d96124f4ace57f86daf095379510fee15f9d0ea37009fcd293323f1066d4c138
irSha256: 0d5b87540ea617c188a78ac19ef9f3fd398930285456d93f8ce1820e01e2afc7
draftSha256: 66ed9b8e8edfc69f51b2f81ee3148cd24eed3b9ebf7dc6024a4fe86cd929c667

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
