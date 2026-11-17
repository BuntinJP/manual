# vfs_nfs4acl_xattr 翻訳自己照合

確認者: EMMA Samba batch-4担当（自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/samba/current/upstream/8/vfs_nfs4acl_xattr/1bf86d069286
全37セグメントを読み、原文/IR/候補訳を照合。条件・否定・数値・既定値・対象方向を保持。コマンド/設定キー/コード/著者名を維持し、例はIRのliteralのまま。全ID/非空訳/保護トークン/強調の既存validateTranslation成功。原文SHA検証成功。原文復元テキストの空白正規化照合不一致: なし。

原文版: current。別版の仕様で補正していない。原文内にある版表記・著者・参照先を保持。manifest追加license資料: なし（明示的な再配布許諾の確認とはしない）。

sourceSha256: 1bf86d0692862240b51211a19767e1178bf0659faade16894abc1c5557bd3eef
irSha256: 7a0f6d1c025f1d253abce25f0299aaa27d775733d8f6a636f3067059cae50e8e

未受理。queue/生成/commitなし。

個別意味照合: NFS4共通段落はzfsacl同一kind/text/protectedをassert照合して再利用。ndr/nfs/xdrの属性名、既定41/everyone、0777/0666不適合時のxattr破棄を保持。
追加材料ハッシュ検証: 成功（存在するもの）。
candidateFileSha256: 53bf94674fdcb442313509490c15047b4e1c26e28d5776506ca24c41e6251068


## キュー受理の最終バインド

sourceSha256: 1bf86d0692862240b51211a19767e1178bf0659faade16894abc1c5557bd3eef
irSha256: 7a0f6d1c025f1d253abce25f0299aaa27d775733d8f6a636f3067059cae50e8e
draftSha256: 53bf94674fdcb442313509490c15047b4e1c26e28d5776506ca24c41e6251068

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
