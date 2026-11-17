# jq 1.8.2 全1135セグメント翻訳・統合自己照合
EMMA、2026-11-17。
## 範囲と検証
全s0001–s1135を6partから統合。重複0、欠落0、partとのID/訳文字列差分0。全IRのID集合と完全一致させたうえで既存validateTranslation成功。元sourceとCOPYING等materialsのSHA一致。未翻訳範囲なし。空のdefinition termは元の空文字のまま。関数/演算子/構文識別子は原綴りを保持。
## 原文からの逆方向監査
公式1.8.2アーカイブのjq.1(rofff)は.SH/.SS155、.nf167。mandoc diagnostics空。mandoc本文.manual-textとIRを文書順に展開して空白を除いた87232字が完全一致、155見出し/167literal/0表。selector外はJQ(1)ヘッダーとMay 2025フッターのみで、本文の節/表/例はなし。これは機械的な抽出完全性確認であり、意味は各partで原文IRの本文/保護実値/関連コード例を自己照合した。別人の独立レビューではない。
## 権利・版・表示
COPYINGはjqソフトウェアの許諾とdocs/文書CC BY3.0を区別している。ソフトウェアMIT系許諾を文書全体の許諾として扱わない。最初part s0002のStephen Dolan、原版URL、非公式日本語への変更表示、CC BY3.0リンク、承認を意味しない旨を変更せず保持。元の最終著者節/連絡先/issue URLも保持。版は1.8.2、原文THの日付May 2025を別版へ変更しない。原文・IR・コードliteral変更なし。
## 上流の疑義
s0713はnon-false/non-null valuesに既定値を生成と述べるが直後の例と逆。原文どおり訳し無断修正しない。日時冒頭UTC-onlyと後続localtimeの説明、gmtimeの特記なし1始まり、数学節IEEE754のみと冒頭decnum説明の関係も原文を維持し、翻訳者の推測で統一していない。原文length説明等の留意点はpartレビュー参照。
## 操作範囲
候補とレビューのみ保存。queue/生成/commit/公開なし。Apple jq1.7.1は別版で未着手。

## 全件検証
```json
{
  "segments": 1135,
  "sourceSha256": "6f1dac8bf304aa3a16f452a60b827a25fe1928e3165888a6f1b6493cc024c073",
  "irSha256": "cacd8baf8bf1763d5b09f400ce5b860d6df650000ad002249d3d263721064c99",
  "candidateSha256": "aac0e7955a3dc5a8e95a9fa95489cce80793dfa162a0a630e540f217f8afe5d9",
  "validation": "passed"
}
```

## Part照合記録
# jq 1.8.2 s0001–s0200 翻訳自己照合
EMMA、2026-11-17。200セグメント（原文空termも含む）の翻訳者自己照合。未完s0201–s1135。
原文roff冒頭とIR本文/保護トークン実値/コード例を照合。シェル別引用符、--arg文字列123と--argjson数値123、NUL含有時非0、--seq解析失敗から次RSまで破棄、NO_COLOR条件、--stream-errorsの含意、-Lで既定検索なし、exit0/1/4と通常2/3/0、バイナリLF/CRLF、--run-tests最終指定と後方非互換警告を保持。数値精度は現版の記述で規範要件でないとする限定、decnum条件、配列0起点/負インデックス/終端除外、フィルター入力の分岐・直積を照合。
名前節に原著作者Stephen Dolan、原文jq1.8.2参照URL、非公式日本語変更版、文書CC BY3.0リンク/非承認表示を追加。COPYINGのソフトウェアMIT系許諾とdocs/文書CC BY3.0を区別し、コード許諾を文書の許諾と混同しない。ソース本体とCOPYINGのSHA確認成功。資料内コマンド/テストを実行していない。
全体抽出監査: roff SH/SS155、nf167と、保存済mandoc .manual-text/IRの155見出し・167literal・0表が一致。文書順IR展開と.manual-textは空白除去後87232字完全一致。これは残り本文の意味レビュー済みという意味ではない。原文の空definition termは空のまま保持（未翻訳散文の代用品ではない）。mandocによる引用符´表記は改変していない。既存validateTranslationの全IR hash＋subset200検証成功。queue/生成/commitなし。
{
  "segments": 200,
  "sourceSha256": "6f1dac8bf304aa3a16f452a60b827a25fe1928e3165888a6f1b6493cc024c073",
  "irSha256": "cacd8baf8bf1763d5b09f400ce5b860d6df650000ad002249d3d263721064c99",
  "candidateSha256": "88c1d67d4e2fe9ea33d762ee588349dd5773950a48c6c77e96e1e74107c26208",
  "validation": "passed"
}


# jq 1.8.2 s0201–s0400 翻訳自己照合
EMMA、2026-11-17。200セグメントの自己照合、未完s0401–s1135。
原文IR/保護実値/関連literal例を照合。オブジェクト複数出力/変数キーの省略時挙動、再帰下降..a不可、暗黙変換なし、加算右優先と乗算再帰マージ、文字列*0は空文字（古い版のnullをコピーしない）、map_values最初の値だけ/emptyならキー削除、path正確パスは存在不要・patternは存在時、pick負添字/スライス不可、emptyはnullさえ返さない、halt0/halt_error既定5/無改行stderr、any空false/all空trueを照合。halt_error例の\nを実改行にしないよう点検して原文エスケープに修正後保存。関数名見出しはAPI識別子として原綴り保持。
原文length説明のASCII/JSON符号化バイト数という表現などを別仕様で補完しない。全体抽出は保存済監査でroff155見出し167nf、mandoc/IR87232文字順序一致。原文・COPYINGハッシュ一致。文書CC BY3.0とコードのMITを区別し、著作者/参照/日本語変更表示は最初partに保持。既存subset validateTranslation200成功。queue/生成/commitなし。
{
  "segments": 200,
  "sourceSha256": "6f1dac8bf304aa3a16f452a60b827a25fe1928e3165888a6f1b6493cc024c073",
  "irSha256": "cacd8baf8bf1763d5b09f400ce5b860d6df650000ad002249d3d263721064c99",
  "candidateSha256": "9ae88a21bb2588190146bf6a24bf3defd02e09b972414f84518ff1465cb86d88",
  "validation": "passed"
}


# jq1.8.2 s0401–s0600 自己照合
EMMA、2026-11-17。200件訳出、subset validate成功。IR・保護実値と関連literal例を照合。range上限除外/負step、NaN/無限大とゼロ除算の違い、sort型順、contains包含方向とinside逆方向、join null空文字/配列非対応、while false・until true・repeat errorの停止条件、再帰の入力ごと高々1出力なら追加メモリーなし、walk要素先行、env起動時/現在、bsearch負の挿入位置を保持。コード例/原文/IR変更なし。全体抽出監査は既存extraction-audit参照。CC BY3.0著作者・変更表示はpart0001に保持。queue/生成/commitなし。未完s0601–s1135。
{
  "segments": 200,
  "sourceSha256": "6f1dac8bf304aa3a16f452a60b827a25fe1928e3165888a6f1b6493cc024c073",
  "irSha256": "cacd8baf8bf1763d5b09f400ce5b860d6df650000ad002249d3d263721064c99",
  "candidateSha256": "6921b8acddb971ca758af8c4144f2e01414a0466d0379b3617a617923fb5186c",
  "validation": "passed"
}


# jq1.8.2 s0601–s0800 自己照合
EMMA、2026-11-17。200件訳出、subset validate成功。IR・保護実値と関連literal例を照合。JSON文字列化との差、各エスケープと補間のみのエスケープ、UTF8でないbase64結果未定義、日時の基数/日付境界/OS依存、条件false/nullのみ、//の複数出力と優先順位、try省略時empty、label字句スコープ、regex m/sフラグとcodepoint単位、未一致offset -1を保持。上流疑義: s0713原文がnon-false/non-null valuesに既定値と書いているが同節の例は逆。原文どおり訳し無断補正しない。日時冒頭UTCのみと後のlocaltime、およびgmtimeの特記なし1始まりも原文どおり。全体抽出監査はextraction-audit参照。CC BY3.0著作者・変更表示はpart0001に保持。原文/IR/コード未変更。queue/生成/commitなし。未完s0801–s1135。
{
  "segments": 200,
  "sourceSha256": "6f1dac8bf304aa3a16f452a60b827a25fe1928e3165888a6f1b6493cc024c073",
  "irSha256": "cacd8baf8bf1763d5b09f400ce5b860d6df650000ad002249d3d263721064c99",
  "candidateSha256": "0e116583f943e93f15871e310b8945b7032b9b7df3a8944eec058fe67890cb35",
  "validation": "passed"
}


# jq1.8.2 s0801–s1000 自己照合
EMMA、2026-11-17。200件訳出・subset validate成功。原文IR保護実値・関連literalを確認。sub最初/gsub全非重複、asは元入力維持、分解の欠損null、?//は後続エラー時次候補/最後エラー伝播、関数引数は値でなくフィルター、字句スコープ/再定義、nth負引数不可、reduce単一結果とforeach中間出力、末尾最適化条件、input/inputs使用時-n必要・初回欠損注意、stderr無改行、ストリームのleaf/end形式を照合。数学節のIEEE754のみという記述は冒頭decnum説明へ合わせて改変せず原文どおり。API見出し/コードは原綴り。CC BY3.0表示はpart0001、全体抽出監査はextraction-audit参照。未完1001–1135、queue/生成/commitなし。
{
  "segments": 200,
  "sourceSha256": "6f1dac8bf304aa3a16f452a60b827a25fe1928e3165888a6f1b6493cc024c073",
  "irSha256": "cacd8baf8bf1763d5b09f400ce5b860d6df650000ad002249d3d263721064c99",
  "candidateSha256": "407f96eb1226bf4c0771da85e58cb9d989c2ecc53bb000cb68698b641ac8adb5",
  "validation": "passed"
}


# jq1.8.2 s1001–s1135 自己照合
EMMA、2026-11-17。135件訳出・subset validate成功。原文IR/保護実値・関連literal例を確認。不変値/循環不可、=元入力・全出力と|=旧値入力・最初のみ、empty削除、1.5以前は最後という互換性注意、パス括弧差、コメント行末奇数バックスラッシュ、shebangのsh/jq差、モジュール相対探索順/接頭辞/データimport、JQ_COLORS数値順を照合。コードliteralと元の著者連絡先を保持。上流の単純例がcomments追加文と異なることも勝手に揃えない。文書CC BY3.0、著作者/非公式変更表示はpart0001。queue/生成/commitなし。
{
  "segments": 135,
  "sourceSha256": "6f1dac8bf304aa3a16f452a60b827a25fe1928e3165888a6f1b6493cc024c073",
  "irSha256": "cacd8baf8bf1763d5b09f400ce5b860d6df650000ad002249d3d263721064c99",
  "candidateSha256": "89623acb993d10c9da0d77446bcf9d9c8588b17b657702d9475c7396ce5f3f01",
  "validation": "passed"
}


## キュー受理の最終バインド

sourceSha256: 6f1dac8bf304aa3a16f452a60b827a25fe1928e3165888a6f1b6493cc024c073
irSha256: cacd8baf8bf1763d5b09f400ce5b860d6df650000ad002249d3d263721064c99
draftSha256: aac0e7955a3dc5a8e95a9fa95489cce80793dfa162a0a630e540f217f8afe5d9

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
