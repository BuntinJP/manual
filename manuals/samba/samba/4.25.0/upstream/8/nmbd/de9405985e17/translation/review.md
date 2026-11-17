# nmbd 翻訳自己照合

確認者: EMMA Samba batch-5後半担当（自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/samba/4.25.0/upstream/8/nmbd/de9405985e17
全71セグメントを読み、原文/IR/候補訳を照合。条件・否定・数値・既定値・対象方向を保持。コマンド/設定キー/コード/著者名を維持し、例はIRのliteralのまま。全ID/非空訳/保護トークン/強調の既存validateTranslation成功。原文SHA検証成功。原文復元テキストの空白正規化照合不一致: なし。

原文版: 4.25.0。別版の仕様で補正していない。原文内にある版表記・著者・参照先を保持。manifest追加license資料: なし（明示的な再配布許諾の確認とはしない）。

sourceSha256: de9405985e17d89572f3dd0ae491910dc715b93d75c25927041bdc67aedd50dd
irSha256: 02ffd21e5ef57e03386ba90bd007b3e527b4b63a22c76de49f8856b8c4d2f039

未受理。queue/生成/commitなし。

## 個別照合メモ

lmhosts はこのホストからの名前解決のみに使い、外部問い合わせへの応答には使わないという否定を保持。終了には SIGTERM (-15) を推奨し、SIGKILL (-9) を最後の手段とする原文を保持。


## キュー受理の最終バインド

sourceSha256: de9405985e17d89572f3dd0ae491910dc715b93d75c25927041bdc67aedd50dd
irSha256: 02ffd21e5ef57e03386ba90bd007b3e527b4b63a22c76de49f8856b8c4d2f039
draftSha256: 38c6b01fbf45c574f28e842daae6ee044f77af86fed428ea8e12144e3df8f868

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
