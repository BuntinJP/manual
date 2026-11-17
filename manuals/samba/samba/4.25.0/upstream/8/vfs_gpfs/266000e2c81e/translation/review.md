# vfs_gpfs 翻訳自己照合

確認者: EMMA Samba batch-5後半担当（自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/samba/4.25.0/upstream/8/vfs_gpfs/266000e2c81e
全78セグメントを読み、原文/IR/候補訳を照合。条件・否定・数値・既定値・対象方向を保持。コマンド/設定キー/コード/著者名を維持し、例はIRのliteralのまま。全ID/非空訳/保護トークン/強調の既存validateTranslation成功。原文SHA検証成功。原文復元テキストの空白正規化照合不一致: なし。

原文版: 4.25.0。別版の仕様で補正していない。原文内にある版表記・著者・参照先を保持。manifest追加license資料: なし（明示的な再配布許諾の確認とはしない）。

sourceSha256: 266000e2c81ea31be4e3f2de6e7f8f6ff5a25df8fc80e47bf980e9a99248b40d
irSha256: 8320bde524b108d68463543c89bc6ac6a5babf859f2ddc869cd84be05f6a85ff

未受理。queue/生成/commitなし。

## 個別照合メモ

原文body直後と末尾の赤字spanにエスケープされた <ns:Root> と </ns:Root> があり、これは .refentry 外のXMLラッパー計19文字。親担当の逆方向監査では、このラッパーを除く本文とIRが一致。コード例内の欠落ではない。nfs4パラメーターが原文で1セグメントへ連結される部分も全項目を翻訳。GPFS時刻範囲は1970-01-01 00:00:00 UTCから2106-02-07 06:28:15 UTCを保持。


## キュー受理の最終バインド

sourceSha256: 266000e2c81ea31be4e3f2de6e7f8f6ff5a25df8fc80e47bf980e9a99248b40d
irSha256: 8320bde524b108d68463543c89bc6ac6a5babf859f2ddc869cd84be05f6a85ff
draftSha256: 60e0f9672e36476e2a66c968fd7aa1740c5748e7b630ecdd052094aeb9a0a298

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
