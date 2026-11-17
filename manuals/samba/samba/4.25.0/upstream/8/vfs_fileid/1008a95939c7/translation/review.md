# vfs_fileid 翻訳自己照合

確認者: EMMA Samba batch-4担当（自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/samba/4.25.0/upstream/8/vfs_fileid/1008a95939c7
全45セグメントを読み、原文/IR/候補訳を照合。条件・否定・数値・既定値・対象方向を保持。コマンド/設定キー/コード/著者名を維持し、例はIRのliteralのまま。全ID/非空訳/保護トークン/強調の既存validateTranslation成功。原文SHA検証成功。原文復元テキストの空白正規化照合不一致: なし。

原文版: 4.25.0。別版の仕様で補正していない。原文内にある版表記・著者・参照先を保持。manifest追加license資料: なし（明示的な再配布許諾の確認とはしない）。

sourceSha256: 1008a95939c7c5578debf55d8034d58b2839e5acd5d8e071454d673d0b712541
irSha256: 8c856fa370b8952b5a7ff5da4ae545c0a8c1eec8958f88d45735e25f099d2faa

未受理。queue/生成/commitなし。

個別意味照合: nolock_all_inodesの説明が原文ではall directoriy inode/all directoriesであり名称と整合しない可能性がある。原文どおりディレクトリーと訳し、全inodeへ勝手に補完しない。データ破損/SMBセマンティクス破壊警告、1〜18446744073709551615、tree connect時のみ評価を保持。
追加材料ハッシュ検証: 成功（存在するもの）。
candidateFileSha256: 860a1b92446763ea250688892ea0966cd47051078cbf1bfbcfcbffa585533717


## キュー受理の最終バインド

sourceSha256: 1008a95939c7c5578debf55d8034d58b2839e5acd5d8e071454d673d0b712541
irSha256: 8c856fa370b8952b5a7ff5da4ae545c0a8c1eec8958f88d45735e25f099d2faa
draftSha256: 860a1b92446763ea250688892ea0966cd47051078cbf1bfbcfcbffa585533717

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
