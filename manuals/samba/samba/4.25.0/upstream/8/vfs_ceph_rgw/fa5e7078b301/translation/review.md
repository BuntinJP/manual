# vfs_ceph_rgw 翻訳自己照合

確認者: EMMA Samba batch-5担当（自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/samba/4.25.0/upstream/8/vfs_ceph_rgw/fa5e7078b301
全51セグメントを読み、原文/IR/候補訳を照合。条件・否定・数値・既定値・対象方向を保持。コマンド/設定キー/コード/著者名を維持し、例はIRのliteralのまま。全ID/非空訳/保護トークン/強調の既存validateTranslation成功。原文SHA検証成功。原文復元テキストの空白正規化照合不一致: なし。

原文版: 4.25.0。別版の仕様で補正していない。原文内にある版表記・著者・参照先を保持。manifest追加license資料: なし（明示的な再配布許諾の確認とはしない）。

sourceSha256: fa5e7078b3015fab5e4fb6d352f8549210a401a0cb2c4d0d09bc2ec08880bd11
irSha256: 7a557616299315fb53e99003270092659a0970da16f824ec0d79b59f1594fe10

未受理。queue/生成/commitなし。

原文抽出の逆方向監査: body全文とIR全文の空白除去後完全一致を確認。詳細は samba-batch-5-extraction-audit.md。

## 個別確認

原文s0011は共有パスをバケット名とし、s0012は / をルートとする記述が併存。どちらも原文どおり保持し独自修正していない。global専用オプションと共有単位オプション、非同期書込非対応を区別。


## キュー受理の最終バインド

sourceSha256: fa5e7078b3015fab5e4fb6d352f8549210a401a0cb2c4d0d09bc2ec08880bd11
irSha256: 7a557616299315fb53e99003270092659a0970da16f824ec0d79b59f1594fe10
draftSha256: 7025f4da01357cc1593ff5892fb700f2b0460f601d7b7c3a1cd5acaf200df9a5

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
