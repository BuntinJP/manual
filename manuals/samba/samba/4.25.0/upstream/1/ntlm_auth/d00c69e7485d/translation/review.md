# ntlm_auth 翻訳自己照合

確認者: EMMA Samba batch-5担当（自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/samba/4.25.0/upstream/1/ntlm_auth/d00c69e7485d
全74セグメントを読み、原文/IR/候補訳を照合。条件・否定・数値・既定値・対象方向を保持。コマンド/設定キー/コード/著者名を維持し、例はIRのliteralのまま。全ID/非空訳/保護トークン/強調の既存validateTranslation成功。原文SHA検証成功。原文復元テキストの空白正規化照合不一致: なし。

原文版: 4.25.0。別版の仕様で補正していない。原文内にある版表記・著者・参照先を保持。manifest追加license資料: なし（明示的な再配布許諾の確認とはしない）。

sourceSha256: d00c69e7485de3fa3c11d717b8a6532ebdd383536295c80a752728eb29219520
irSha256: 8a93722fa65d41eddf8c189443a8355dad45567d0a8415c6a640a16e5c18ab0d

未受理。queue/生成/commitなし。

原文抽出の逆方向監査: body全文とIR全文の空白除去後完全一致を確認。詳細は samba-batch-5-extraction-audit.md。

## 個別確認

旧jobの1423文字欠落を検出し、親担当のselector=bodyによる正式再parse後の74segを翻訳。body/IRは7825文字完全一致。s0062は原文の不正なdl入れ子に由来する長い複合段落だが全オプションを翻訳。Examples:の空のddは原文自体に例がないため創作しない。s0069リンク本文は保護トークンのため原文を維持して日本語説明を補助。


## キュー受理の最終バインド

sourceSha256: d00c69e7485de3fa3c11d717b8a6532ebdd383536295c80a752728eb29219520
irSha256: 8a93722fa65d41eddf8c189443a8355dad45567d0a8415c6a640a16e5c18ab0d
draftSha256: 583f92fcc6358ea22786b6465b3d8860b356e56e339c05ff5bd6184db685f7e7

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
