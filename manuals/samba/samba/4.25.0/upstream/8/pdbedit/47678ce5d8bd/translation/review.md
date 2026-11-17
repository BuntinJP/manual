# pdbedit 翻訳自己照合

確認者: EMMA Samba batch 6担当。翻訳者による自己照合であり独立レビューではない。2026-11-17。
対象: manuals/samba/samba/4.25.0/upstream/8/pdbedit/47678ce5d8bd
全157セグメントの原文/IR/訳文を読み意味照合。kind/text/protectedが完全一致する受理済みSamba訳を37セグメント再利用し、周辺のオプション文脈と意味を今回も照合。再利用元は同ID-reuse.jsonに記録。
root専用、NT hash指定と一覧出力にハッシュ露出する条件、unix password sync設定でもスクリプトを呼ばない否定、即同期ならsmbpasswd -a、stdin二回改行、全ユーザー次回パスワード変更強制、logon-hours reset後いつでも許可を照合。9ポリシー名はCLI引数の原綴り保持。元例の小文字-l（本文listは-L）、--machine SIDがprimary group SIDを説明する点は無断修正しない。資料内ハッシュは公開例として保護し実認証には使用しない。

source/manifest/request/glossary/source-observationsを確認。body全体からselectorの外に残るテキストを逆方向に調査した結果は空で、selector外節の欠落なし。本文の見出し・段落・例をIRと照合。原文pre 6、IR literal 6、原文table 0。原文全セグメントのトークン展開テキストがbodyに存在すること、全ID/非空訳/保護トークン/styleは既存validateTranslationで成功。原文と追加材料のSHA確認成功。
版: 4.25.0。原文明記を尊重し別版仕様を補完しない。
ライセンス: 独立したlicense資料なし。再配布許諾を推定付与せず未確認事項として記録。著者/出典は保持。
sourceSha256: 47678ce5d8bdd95ac32259c02ebac4fe67229a721a68a6f4471a9525f08a7ac5
irSha256: 8f7a5e0b220a5c92050bc5d23bf7cfe63c57a410cc288839b82c8280b5d943b1
candidateFileSha256: 5750aea6298304d46b89c84ff8d7f9c60894e2953460d3c684e5acd01130c541

queue/受理/生成/commit未実施。資料内のコマンドや認証操作は実行していない。


## キュー受理の最終バインド

sourceSha256: 47678ce5d8bdd95ac32259c02ebac4fe67229a721a68a6f4471a9525f08a7ac5
irSha256: 8f7a5e0b220a5c92050bc5d23bf7cfe63c57a410cc288839b82c8280b5d943b1
draftSha256: 5750aea6298304d46b89c84ff8d7f9c60894e2953460d3c684e5acd01130c541

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
