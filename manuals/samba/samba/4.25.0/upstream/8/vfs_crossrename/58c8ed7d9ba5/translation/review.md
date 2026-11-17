# vfs_crossrename 翻訳自己照合

確認者: EMMA diff-intake担当（翻訳者による自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/samba/4.25.0/upstream/8/vfs_crossrename/58c8ed7d9ba5
全22セグメントをrequest/glossary・保存原文・IRと照合。manifestの版を維持。原文/IR/queueを変更せず、候補のみ保存。

原文HTMLのlimitations直後は空dt/ddが4組あり制限本文は欠落。IR空term s0009–s0012を空のまま保持し、欠けた制限を推測で補わない。原文にBYTES/MiB/50MBの単位不整合がありその表記を保持。既定20MiB、閾値以下、最後のモジュール配置を照合。文書ライセンス明記なし。

共通文の再利用は、文脈が同じで原文・保護トークンが完全同一の段落のみ。構文・設定例・識別子を維持し、説明文は日本語化。保護トークンとIDの全出現一致検査済み。既存validateTranslationとsource/IR照合の結果は後述の検証記録を参照。

sourceSha256: 58c8ed7d9ba5a3bd0df1446fd52bc925e3db749b89d90120c38b9d7dd04e41a0
irSha256: cf8ae8044c51d546c2613dbe4f81ee981deac0353859932bd845f8521299f34e

queue保存・受理・生成・commitは未実施。

検証記録: validateTranslation全文成功。保護トークン復元後の全原文セグメントを保存HTML本文と照合し不一致0件。


## キュー受理の最終バインド

sourceSha256: 58c8ed7d9ba5a3bd0df1446fd52bc925e3db749b89d90120c38b9d7dd04e41a0
irSha256: cf8ae8044c51d546c2613dbe4f81ee981deac0353859932bd845f8521299f34e
draftSha256: 7d459f0de44efdab491b6e88b6ddb12370ec7bb21107bf9e4c643ab356d435a7

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
