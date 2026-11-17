# vfs_acl_xattr 翻訳自己照合

確認者: EMMA Samba batch-4担当（自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/samba/current/upstream/8/vfs_acl_xattr/5135edec2cb0
全35セグメントを読み、原文/IR/候補訳を照合。条件・否定・数値・既定値・対象方向を保持。コマンド/設定キー/コード/著者名を維持し、例はIRのliteralのまま。全ID/非空訳/保護トークン/強調の既存validateTranslation成功。原文SHA検証成功。原文復元テキストの空白正規化照合不一致: なし。

原文版: current。別版の仕様で補正していない。原文内にある版表記・著者・参照先を保持。manifest追加license資料: なし（明示的な再配布許諾の確認とはしない）。

sourceSha256: 5135edec2cb001957d90ef97e7bee61bcba02def404501b8b3634d503843fb25
irSha256: f4e8c53f6b8205e4f700540524d7406b50dc6632ae1cacf0713295a06a929324

未受理。queue/生成/commitなし。

個別意味照合: security.NTACLとuser.NTACLの保護差、SMB外からの上書き危険と予防必須、getfattr -dで非表示、-nで取得、POSIX草案ACLとの対応付け条件を保持。
追加材料ハッシュ検証: 成功（存在するもの）。
candidateFileSha256: 4cf7c40ba334cc289d66db7f2008ac1866db094dded3b79ae515b34ed5345a1d


## キュー受理の最終バインド

sourceSha256: 5135edec2cb001957d90ef97e7bee61bcba02def404501b8b3634d503843fb25
irSha256: f4e8c53f6b8205e4f700540524d7406b50dc6632ae1cacf0713295a06a929324
draftSha256: 4cf7c40ba334cc289d66db7f2008ac1866db094dded3b79ae515b34ed5345a1d

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
