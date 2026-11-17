# pam_winbind.conf 翻訳自己照合

確認者: EMMA Samba batch-5担当（自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/samba/4.25.0/upstream/5/pam_winbind.conf/9fe17982ce27
全60セグメントを読み、原文/IR/候補訳を照合。条件・否定・数値・既定値・対象方向を保持。コマンド/設定キー/コード/著者名を維持し、例はIRのliteralのまま。全ID/非空訳/保護トークン/強調の既存validateTranslation成功。原文SHA検証成功。原文復元テキストの空白正規化照合不一致: なし。

原文版: 4.25.0。別版の仕様で補正していない。原文内にある版表記・著者・参照先を保持。manifest追加license資料: なし（明示的な再配布許諾の確認とはしない）。

sourceSha256: 9fe17982ce27bc1832d7e94da48673de99c6eb7869c2428539fd479d71532b7b
irSha256: 5d472bf6d8ff6934296a5faa61fd0ce3c20cc72c7e9ffed0481a72727b578ee9

未受理。queue/生成/commitなし。

原文抽出の逆方向監査: body全文とIR全文の空白除去後完全一致を確認。詳細は samba-batch-5-extraction-audit.md。

## 個別確認

PAM設定の優先順位、パスワード不要時のmembership制限非適用、既定no/空/14日を照合。try_first_pass説明は原文の記述を保持。原文VERSIONは4.25.0で、古いcurrentという観察は追記で訂正済み。


## キュー受理の最終バインド

sourceSha256: 9fe17982ce27bc1832d7e94da48673de99c6eb7869c2428539fd479d71532b7b
irSha256: 5d472bf6d8ff6934296a5faa61fd0ce3c20cc72c7e9ffed0481a72727b578ee9
draftSha256: 744afc9603ce60c163603f06f7c452bacebdaeb5ab7a78f907fa432222a5eb01

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
