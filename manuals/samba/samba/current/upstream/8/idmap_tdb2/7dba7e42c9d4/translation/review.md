# idmap_tdb2 翻訳自己照合

確認者: EMMA diff-intake担当（翻訳者による自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/samba/current/upstream/8/idmap_tdb2/7dba7e42c9d4
全20セグメントをrequest/glossary・保存原文・IRと照合。manifestの版を維持。原文/IR/queueを変更せず、候補のみ保存。

原文にVERSION節なし、currentを維持。SID全範囲を網羅しない場合の衝突可能性、非推奨旧構文、1行の応答を保持。全設定・SIDTOID/IDTOSID応答例はIR literalに保持。原文int tdb2は文脈上inとして訳出。保存原文に文書ライセンス明記なし。

共通文の再利用は、文脈が同じで原文・保護トークンが完全同一の段落のみ。構文・設定例・識別子を維持し、説明文は日本語化。保護トークンとIDの全出現一致検査済み。既存validateTranslationとsource/IR照合の結果は後述の検証記録を参照。

sourceSha256: 7dba7e42c9d42f21c7d7d99fbe0fc2344be57e413ae3eadeb8fc57156355d14c
irSha256: 9f7b44377a6fff8ac5967c03e8cae5ad9fdcc76c45378b92d95fd7d16485b8c3

queue保存・受理・生成・commitは未実施。

検証記録: validateTranslation全文成功。保護トークン復元後の全原文セグメントを保存HTML本文と照合し不一致0件。


## キュー受理の最終バインド

sourceSha256: 7dba7e42c9d42f21c7d7d99fbe0fc2344be57e413ae3eadeb8fc57156355d14c
irSha256: 9f7b44377a6fff8ac5967c03e8cae5ad9fdcc76c45378b92d95fd7d16485b8c3
draftSha256: 2bc8977dec5ca9667d5a6024c74c2a9d7e214cfe1d20dbeb3a188bc188bdfba9

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
