# Apple jq 1.7.1-apple 全1096セグメント翻訳・自己照合
EMMA、2026-11-17。
## 対象と版
macOS27.0.1(26A434)同梱の /usr/share/man/man1/jq.1、取得2026-10-31、ヘッダーDecember2023。source-observationsに従い、古いmacOS版や上流1.8.2へ改名していない。
## 訳出と再利用
全s0001–s1096、ID欠落/重複0、既存validateTranslation成功、source SHA一致。上流1.8.2の自己照合済み訳から、順序整列した同一節文脈でkind/text/protectedが完全一致する1063件を再利用。対応はreuse.json。残る32件はApple原文/保護値を個別に読み訳出、s0002は別途Apple版表示/著者/変更・原版参照に置換したので合計33件が再利用外。上流との全非一致セグメントと全literal差分を読み、同じ字面でも別条件を追加しないことを確認。元から空のdefinition termは空のまま。
## 版差の具体的確認
-f説明に1.8.2の引数解釈説明を足さず、-Lに--library-pathを追加しない。数値精度には--disable-decnum条件を追加せず、先頭負符号IEEE754変換という旧版の説明を保持。add(generator)、toboolean、trim群、have_decnum/have_literal_numbers、@urid、skip、COMMENTS節はApple原文にないので追加しない。scanには捕捉配列の追加説明を持ち込まない。limitはexpの綴り、数学関数一覧のpow10、stream例の数値、.jqの$HOMEパスを保持。コードliteralはApple IRの161個をそのまま用い、上流の167個に置き換えない。
## 抽出の逆方向監査
roff .SH/.SS148、.nf161。mandoc diagnostics空。manual-textから全IRを文書順に復元した空白除去83630字が一致。148見出し/161literal/0表。selector外はJQヘッダーとDecember2023フッターだけで本文の節/表/例なし。意味照合は上流との一致文脈およびApple差分を自己確認したもので、独立した第三者レビューではない。
## 原文の疑義
s0631 strptime説明のprotected実値は「gmtimeが受け取りmktimeが出力」となり、1.8.2のmktime/gmtimeとは逆。Apple原文どおり保持し無断修正しない。s0932のstder、map_value(f)の綴り、代替演算子のnon-false/non-null既定値という文と例の矛盾、日時UTC限定とlocaltime説明/基数の記述も維持。誤字contruct/to to/overriden/is generally be/in the aは意味を変えず日本語化した。
## ライセンス観察
取得したApple sourceには許諾文もmaterialsもなく、Appleによる追加・変更の権利条件はこのファイルだけでは確定できない。2026-11-17に上流jq1.7.1公式COPYING https://raw.githubusercontent.com/jqlang/jq/jq-1.7.1/COPYING を確認し、ソフトウェア許諾とdocs/文書CC BY3.0が別記されていることを確認した。1.8.2のCOPYINGをApple原文の同梱ライセンスとして捏造・コピーしていない。候補冒頭は「上流文書のライセンス」と限定してCC BY3.0リンクを表示し、Stephen Dolan著作者、上流1.7.1参照、実際のAppleローカル原版/取得日、日本語変更版、Apple/原著者非承認を表示。文末の原著者と連絡先は保持。追加Apple条件の不明点は公開運営者の判断資料であり、翻訳を停止する条件にはしていない。
## 実施範囲
候補/監査/レビューのみ。source/IR/queue/生成物/commit/公開は操作していない。全1096件完訳候補、未訳なし。

```json
{
  "segments": 1096,
  "sourceSha256": "db8f6cd370376d8f040b837ebb9f6123872aa8a79438b4cd2c9db77151d59148",
  "irSha256": "e4ac413f2f247efccb37241bc477179d83030af54a167fd07177f0fb88cbd6c5",
  "candidateSha256": "a5ce1f02f2773869d61bcec18bbe19296a099a7220bc579996b0506292065825",
  "validation": "passed"
}
```


## キュー受理の最終バインド

sourceSha256: db8f6cd370376d8f040b837ebb9f6123872aa8a79438b4cd2c9db77151d59148
irSha256: e4ac413f2f247efccb37241bc477179d83030af54a167fd07177f0fb88cbd6c5
draftSha256: a5ce1f02f2773869d61bcec18bbe19296a099a7220bc579996b0506292065825

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
