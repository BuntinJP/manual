# vfs_io_uring 翻訳自己照合

確認者: EMMA diff-intake担当（翻訳者による自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/samba/4.25.0/upstream/8/vfs_io_uring/5a42cb9f37cd
全23セグメントをrequest/glossary・保存原文・IRと照合。manifestの版を維持。原文/IR/queueを変更せず、候補のみ保存。

Linux>=5.1、2のべき乗へ切り上げ（四捨五入ではない）、キュー既定128/sqpoll既定noを照合。SHOULDをべきと訳出。文書ライセンス明記なし。

共通文の再利用は、文脈が同じで原文・保護トークンが完全同一の段落のみ。構文・設定例・識別子を維持し、説明文は日本語化。保護トークンとIDの全出現一致検査済み。既存validateTranslationとsource/IR照合の結果は後述の検証記録を参照。

sourceSha256: 5a42cb9f37cd1f89c51aac74d045e4fd5198a5bdbc76520eaca1118b9bfdd922
irSha256: b16d760e7b5122f4f890cff82d1dfaddb8dc0da166ca6ad640ab3dd2b0908f5a

queue保存・受理・生成・commitは未実施。

検証記録: validateTranslation全文成功。保護トークン復元後の全原文セグメントを保存HTML本文と照合し不一致0件。


## キュー受理の最終バインド

sourceSha256: 5a42cb9f37cd1f89c51aac74d045e4fd5198a5bdbc76520eaca1118b9bfdd922
irSha256: b16d760e7b5122f4f890cff82d1dfaddb8dc0da166ca6ad640ab3dd2b0908f5a
draftSha256: 6965db9e1d3cfa4e2fea86c7c0d5e47557967564f221dd5fd7929d6c01020d2c

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
