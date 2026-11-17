# pam_winbind 翻訳自己照合

確認者: EMMA Samba batch-5担当（自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/samba/4.25.0/upstream/8/pam_winbind/98c73d293cac
全68セグメントを読み、原文/IR/候補訳を照合。条件・否定・数値・既定値・対象方向を保持。コマンド/設定キー/コード/著者名を維持し、例はIRのliteralのまま。全ID/非空訳/保護トークン/強調の既存validateTranslation成功。原文SHA検証成功。原文復元テキストの空白正規化照合不一致: なし。

原文版: 4.25.0。別版の仕様で補正していない。原文内にある版表記・著者・参照先を保持。manifest追加license資料: なし（明示的な再配布許諾の確認とはしない）。

sourceSha256: 98c73d293cac4de607b465bc1bb12dd51c77e90d814a1304183bd16520ca89f3
irSha256: c2d20166c4e4c062b9bab0b13ef93da67ad52475df867486430a6b1c4e59dcae

未受理。queue/生成/commitなし。

原文抽出の逆方向監査: body全文とIR全文の空白除去後完全一致を確認。詳細は samba-batch-5-extraction-audit.md。

## 個別確認

pam_winbind.confとの共通説明はkind/text/protected完全一致だけ再利用。confにのみある既定値をこのページへ追加しない。auth宣言限定、session順序、use/tryオプションの違いを照合。


## キュー受理の最終バインド

sourceSha256: 98c73d293cac4de607b465bc1bb12dd51c77e90d814a1304183bd16520ca89f3
irSha256: c2d20166c4e4c062b9bab0b13ef93da67ad52475df867486430a6b1c4e59dcae
draftSha256: 1752a3a9c2218b73a9f945f792c0dce4a6a2457958ae7fb4211721e7caadfc04

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
