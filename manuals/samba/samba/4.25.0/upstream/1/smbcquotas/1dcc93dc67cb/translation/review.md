# smbcquotas 翻訳自己照合

確認者: EMMA Samba batch 6担当。翻訳者による自己照合であり独立レビューではない。2026-11-17。
対象: manuals/samba/samba/4.25.0/upstream/1/smbcquotas/1dcc93dc67cb
全124セグメントの原文/IR/訳文を読み意味照合。kind/text/protectedが完全一致する受理済みSamba訳を96セグメント再利用し、周辺のオプション文脈と意味を今回も照合。再利用元は同ID-reuse.jsonに記録。
クォータ単位はすべてバイト、ユーザー既定は現在ユーザー。test-argsは実操作なし。終了0成功/1接続・取得設定失敗/2引数解析失敗を保持。UQLIM/FSQLIM/FSQFLAGS構文を保護。原文の-nがnumericとnetbiosnameに重複する点、およびscopeのnmblookup参照は独自修正せず保持。

source/manifest/request/glossary/source-observationsを確認。body全体からselectorの外に残るテキストを逆方向に調査した結果は空で、selector外節の欠落なし。本文の見出し・段落・例をIRと照合。原文pre 1、IR literal 1、原文table 0。原文全セグメントのトークン展開テキストがbodyに存在すること、全ID/非空訳/保護トークン/styleは既存validateTranslationで成功。原文と追加材料のSHA確認成功。
版: 4.25.0。原文明記を尊重し別版仕様を補完しない。
ライセンス: 独立したlicense資料なし。再配布許諾を推定付与せず未確認事項として記録。著者/出典は保持。
sourceSha256: 1dcc93dc67cbef4307a03f9e782c911ffc9a7cb22908672fd0c6c727d3018b83
irSha256: 0eb5486bd01df7462cc0e602cead9de591668c57aecf70c61b441a1ec8f5c789
candidateFileSha256: b3c847ee2da8ef8d81ef8314b0949a259f74ea70d89dd518b257a681884b9b92

queue/受理/生成/commit未実施。資料内のコマンドや認証操作は実行していない。


## キュー受理の最終バインド

sourceSha256: 1dcc93dc67cbef4307a03f9e782c911ffc9a7cb22908672fd0c6c727d3018b83
irSha256: 0eb5486bd01df7462cc0e602cead9de591668c57aecf70c61b441a1ec8f5c789
draftSha256: b3c847ee2da8ef8d81ef8314b0949a259f74ea70d89dd518b257a681884b9b92

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。


## Accepted clarification 2026-11-17

s0079: Source unless(P or Q) is explicitly rendered as notP AND notQ, avoiding an ambiguous Japanese scope. Confirmed exact source sentence and previously accepted target; no other segment changed. Original accepted translation/review retained in revisions.
previousDraftSha256: b3c847ee2da8ef8d81ef8314b0949a259f74ea70d89dd518b257a681884b9b92
draftSha256: 739c14f2a57dad71f96aae1e3e9ebc20c73b415902dbf92e6d88d8fc4410bb73
