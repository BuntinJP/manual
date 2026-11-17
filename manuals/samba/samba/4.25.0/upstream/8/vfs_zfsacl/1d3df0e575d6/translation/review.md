# vfs_zfsacl 翻訳自己照合

確認者: EMMA Samba batch-4担当（自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/samba/4.25.0/upstream/8/vfs_zfsacl/1d3df0e575d6
全35セグメントを読み、原文/IR/候補訳を照合。条件・否定・数値・既定値・対象方向を保持。コマンド/設定キー/コード/著者名を維持し、例はIRのliteralのまま。全ID/非空訳/保護トークン/強調の既存validateTranslation成功。原文SHA検証成功。原文復元テキストの空白正規化照合不一致: なし。

原文版: 4.25.0。別版の仕様で補正していない。原文内にある版表記・著者・参照先を保持。manifest追加license資料: なし（明示的な再配布許諾の確認とはしない）。

sourceSha256: 1d3df0e575d6ac2998ed9b6bb257a727a07de52bc481100130db9dd63b13111b
irSha256: 1e214b43217cdbdf914f0b0e60847d7369da0d99fe66a7128d95ee32f9dfb636

未受理。queue/生成/commitなし。

個別意味照合: chown奪取リスク、file限定FILE_DELETE_CHILD、ACL継承とDENY/阻止の差、default/deprecatedを含む保護トークン保持。原文のacl map full control = acl map full controlは補正せず保持。
追加材料ハッシュ検証: 成功（存在するもの）。
candidateFileSha256: 9037561dc259e7f2fca250ffbb4140482f4415ebdd727144ea2f44b51cae289a


## キュー受理の最終バインド

sourceSha256: 1d3df0e575d6ac2998ed9b6bb257a727a07de52bc481100130db9dd63b13111b
irSha256: 1e214b43217cdbdf914f0b0e60847d7369da0d99fe66a7128d95ee32f9dfb636
draftSha256: 9037561dc259e7f2fca250ffbb4140482f4415ebdd727144ea2f44b51cae289a

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
