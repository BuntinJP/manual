# smbget 翻訳自己照合

確認者: EMMA diff-intake担当（翻訳者による自己照合、独立レビューではない）。2026-11-17。

対象: manuals/samba/samba/4.25.0/upstream/1/smbget/82afe81a5cbe
全20セグメントをrequest/glossary・保存原文・IRと照合。manifestの版を維持。原文/IR/queueを変更せず、候補のみ保存。

OPTIONSは元HTMLの構造により132保護トークンを含む1セグメントへ平坦化されている。全説明を翻訳し、各オプションの境界に改行を付けて読みやすくした。ユーザー/パスワード指定の%P保護分割、no-passによる明示パスワード無視、環境変数探索順、Kerberos DNS条件、暗号化・署名・速度KB/sとブロック64000バイトを照合。原文の-rがresumeとrealm両方に記載される点、NetBIOS scope説明中のnmblookupは原文のまま保持。保存HTMLに明示的な文書再配布許諾文/別licenseなし。

共通文の再利用は、文脈が同じで原文・保護トークンが完全同一の段落のみ。構文・設定例・識別子を維持し、説明文は日本語化。保護トークンとIDの全出現一致検査済み。既存validateTranslationとsource/IR照合の結果は後述の検証記録を参照。

sourceSha256: 82afe81a5cbe91d33d265f191f49e565800f2de26b03cacab7452d0f6aaca263
irSha256: 1c81f87ab6c74b0073b783c6b56e4702e8aa9a1f650285a76705d06731d0f871

queue保存・受理・生成・commitは未実施。

検証記録: validateTranslation全文成功。保護トークン復元後の全原文セグメントを保存HTML本文と照合し不一致0件。


## キュー受理の最終バインド

sourceSha256: 82afe81a5cbe91d33d265f191f49e565800f2de26b03cacab7452d0f6aaca263
irSha256: 1c81f87ab6c74b0073b783c6b56e4702e8aa9a1f650285a76705d06731d0f871
draftSha256: 0da11a968d6bb2cdaa21a2044764732b9e2d1acafa5172feb545f8bf4643be62

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。


## Accepted amendment 2026-11-17

s0008 UNC example restored to the exact 4/2/2 backslashes in the preserved HTML instead of normalizing to a conventional UNC path. The prior accepted translation/review are retained under translation/revisions/. The translating worker reported this final source check after initial acceptance; only this segment changed. Source and IR are unchanged.
previousDraftSha256: 0da11a968d6bb2cdaa21a2044764732b9e2d1acafa5172feb545f8bf4643be62
draftSha256: b822eb9e098532cb5549624c30b3faa0f0290f5c07f0abef346942f18ee91d8e
