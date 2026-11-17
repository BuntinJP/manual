# samba_downgrade_db 翻訳自己照合

確認者: EMMA diff-intake担当（翻訳者による自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/samba/4.25.0/upstream/8/samba_downgrade_db/9ee3ff23d58d
全19セグメントをrequest/glossary・保存原文・IRと照合。manifestの版を維持。原文/IR/queueを変更せず、候補のみ保存。

全サービス停止→DBダウングレード→パッケージダウングレードの順序と途中再起動/変更禁止を保持。版識別の未解決事項: manifestはcurrent、source-observationsは版記載なしとするが、実際の保存HTMLには4.25.0と明記されている。原文にある4.25.0/4.7は訳出し、既存の識別パスは改変していない。管理者へ報告済み。保存HTMLに明示的な文書再配布許諾文/別licenseなし。

共通文の再利用は、文脈が同じで原文・保護トークンが完全同一の段落のみ。構文・設定例・識別子を維持し、説明文は日本語化。保護トークンとIDの全出現一致検査済み。既存validateTranslationとsource/IR照合の結果は後述の検証記録を参照。

sourceSha256: 9ee3ff23d58d2e2b1df784ae8c7d9ff7a568ed3219fd70610ddb5ee1ed7da3f6
irSha256: a33eaf1a187f0b431a974a8c7a64f2a3b4673cc6d01dff4b085a88826bd18a33

queue保存・受理・生成・commitは未実施。

旧current原文を残して4.25.0へ識別訂正。新旧requestの全segments同一性確認済み。新requestハッシュを採用。


## キュー受理の最終バインド

sourceSha256: 9ee3ff23d58d2e2b1df784ae8c7d9ff7a568ed3219fd70610ddb5ee1ed7da3f6
irSha256: a33eaf1a187f0b431a974a8c7a64f2a3b4673cc6d01dff4b085a88826bd18a33
draftSha256: 55946e153c98de9be19455c504fd80adb2f83e3d8b86919f787ce54357230b47

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
