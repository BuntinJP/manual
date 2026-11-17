# traffic_replay 翻訳自己照合

確認者: EMMA Samba batch 6担当。翻訳者による自己照合であり独立レビューではない。2026-11-17。
対象: manuals/samba/samba/4.25.0/upstream/7/traffic_replay/f784192f8de1
全107セグメントの原文/IR/訳文を読み意味照合。kind/text/protectedが完全一致する受理済みSamba訳を13セグメント再利用し、周辺のオプション文脈と意味を今回も照合。再利用元は同ID-reuse.jsonに記録。
専用test DC推奨・本番避ける警告、ユーザー残留/clean-up、固定パスワード整合性、-T/-S排他、replay-rateのパケット数非変更、平均/総メンバー数排他、100/10/300、60秒/120秒/5000/25/10を照合。原文の--group-membership単数表記も保護されたまま。機密除去/共有可能性は原文の説明として訳し、実データの匿名化を保証するものではない。コマンド例はcode保護で保持、実際のユーザー作成や通信は一切なし。

source/manifest/request/glossary/source-observationsを確認。body全体からselectorの外に残るテキストを逆方向に調査した結果は空で、selector外節の欠落なし。本文の見出し・段落・例をIRと照合。原文pre 0、IR literal 0、原文table 0。原文全セグメントのトークン展開テキストがbodyに存在すること、全ID/非空訳/保護トークン/styleは既存validateTranslationで成功。原文と追加材料のSHA確認成功。
版: 4.25.0。原文明記を尊重し別版仕様を補完しない。
ライセンス: 独立したlicense資料なし。再配布許諾を推定付与せず未確認事項として記録。著者/出典は保持。
sourceSha256: f784192f8de1f78747d883762d0c0473aa1ec25718cd87d8a9b99e7a833282f4
irSha256: 75abff9dd31127cfdaf654a5b66dcf55d4bb68241a64d127eeff6127d306ac44
candidateFileSha256: 2049b16fe648d0be6ee147c1fc3152674b4c97367dd4436ceb62c147af9eb9e7

queue/受理/生成/commit未実施。資料内のコマンドや認証操作は実行していない。


## キュー受理の最終バインド

sourceSha256: f784192f8de1f78747d883762d0c0473aa1ec25718cd87d8a9b99e7a833282f4
irSha256: 75abff9dd31127cfdaf654a5b66dcf55d4bb68241a64d127eeff6127d306ac44
draftSha256: 2049b16fe648d0be6ee147c1fc3152674b4c97367dd4436ceb62c147af9eb9e7

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
