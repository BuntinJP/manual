# vfs_syncops 翻訳自己照合

確認者: EMMA diff-intake担当（翻訳者による自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/samba/4.25.0/upstream/8/vfs_syncops/2d71a0b7568a
全18セグメントをrequest/glossary・保存原文・IRと照合。manifestの版を維持。原文/IR/queueを変更せず、候補のみ保存。

fsync/close、メタデータ同期、共有単位の完全無効化を区別。条件付きの安全性と性能低下の説明を保持。例のonclose=noはIR literalに保持。保存HTMLに明示的な文書再配布許諾文はなく、別licenseファイルもないため権利調査完了とはしない。

共通文の再利用は、文脈が同じで原文・保護トークンが完全同一の段落のみ。構文・設定例・識別子を維持し、説明文は日本語化。保護トークンとIDの全出現一致検査済み。既存validateTranslationとsource/IR照合の結果は後述の検証記録を参照。

sourceSha256: 2d71a0b7568adca04a33ec4cbbabd3b487aad033d61c88c9878e6e10ec8ee4b6
irSha256: c58adc49cc3d86e9d26e050e370a79692f9f36cfb147889b97196e56e6cd47d2

queue保存・受理・生成・commitは未実施。

検証記録: validateTranslation全文成功。保護トークン復元後の全原文セグメントを保存HTML本文と照合し不一致0件。


## キュー受理の最終バインド

sourceSha256: 2d71a0b7568adca04a33ec4cbbabd3b487aad033d61c88c9878e6e10ec8ee4b6
irSha256: c58adc49cc3d86e9d26e050e370a79692f9f36cfb147889b97196e56e6cd47d2
draftSha256: ab9da42acb9ecf0a203171f7b3664e10c9a03742922667978eae5ebbc8b6105d

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
