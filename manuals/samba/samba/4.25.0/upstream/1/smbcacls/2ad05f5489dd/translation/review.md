# smbcacls 翻訳自己照合

確認者: EMMA Samba batch 6担当。翻訳者による自己照合であり独立レビューではない。2026-11-17。
対象: manuals/samba/samba/4.25.0/upstream/1/smbcacls/2ad05f5489dd
全197セグメントの原文/IR/訳文を読み意味照合。kind/text/protectedが完全一致する受理済みSamba訳を110セグメント再利用し、周辺のオプション文脈と意味を今回も照合。再利用元は同ID-reuse.jsonに記録。
追加/変更/削除/全置換を区別しsetは既存ACL消去、saveはDACLのみでSACL/owner/integrityなし、recurseはsave限定、継承のOI/CI/NP/IO/Iと6個のツリー図を照合。原文疑義を補正せず保持: set-security-info説明がqueries、既定NT1とmax-protocol重複説明、SRがSACL Inheritance RequiredとSelf Relativeに重複、継承可能フラグが(OI)(OI)重複。必要なsecurity descriptorというDR/SR原文の不自然な修飾も別仕様で補完せず保持。終了0/1/2、最大アクセスはSMB2以上、8literalを確認。

source/manifest/request/glossary/source-observationsを確認。body全体からselectorの外に残るテキストを逆方向に調査した結果は空で、selector外節の欠落なし。本文の見出し・段落・例をIRと照合。原文pre 8、IR literal 8、原文table 0。原文全セグメントのトークン展開テキストがbodyに存在すること、全ID/非空訳/保護トークン/styleは既存validateTranslationで成功。原文と追加材料のSHA確認成功。
版: 4.25.0。原文明記を尊重し別版仕様を補完しない。
ライセンス: 独立したlicense資料なし。再配布許諾を推定付与せず未確認事項として記録。著者/出典は保持。
sourceSha256: 2ad05f5489dd440cf15065d866aec6eaab4b7f46d4d4f739743e57379c19da37
irSha256: 6ee7269035ea03045838ca7b1261c55500b8249c8bbea15b3625633057f92c86
candidateFileSha256: a2359422d35b4a9d1cf3d68ff35bbbba13f7b799588555d7027f3904e3b528f1

queue/受理/生成/commit未実施。資料内のコマンドや認証操作は実行していない。


## キュー受理の最終バインド

sourceSha256: 2ad05f5489dd440cf15065d866aec6eaab4b7f46d4d4f739743e57379c19da37
irSha256: 6ee7269035ea03045838ca7b1261c55500b8249c8bbea15b3625633057f92c86
draftSha256: a2359422d35b4a9d1cf3d68ff35bbbba13f7b799588555d7027f3904e3b528f1

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
