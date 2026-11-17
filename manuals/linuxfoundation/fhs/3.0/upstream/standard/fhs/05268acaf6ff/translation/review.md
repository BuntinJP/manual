# FHS 3.0 全1544セグメント最終統合レビュー

確認者: EMMA、2026-11-17。翻訳者自己照合と統合検証。独立レビューとは主張しない。
最初300セグメント（担当コーディネーター）と続く4part（EMMA）の合計1544を統合。全ID重複なし/欠落なし、各partの各訳文字列と統合候補を完全一致比較し差分0。統合時の文言修正なし。

既存validateTranslationを全1544セグメント・完全IRハッシュで実行し成功。原文と許諾資料のSHA一致。原文.book全文と文書順IR再構成は空白除去後85641文字で完全一致（順序を含む逆方向照合）。218見出し、38表、4pre/literal一致。bodyから.bookを除去したテキストは空、selector外の節/表/例欠落なし。

英語著作権・許諾表示をfirst300から変更せず保持。日本語許諾は非公式参考訳として区別。表題は非公式日本語改変版、原標準の版3.0・2015年3月19日発行・2026年11月17日取得・原文URLを保持。現在仕様を原文に無断補完せず、各partに誤記・古い主張を記録。全文意味照合の詳細は下記partレビュー。コマンド・メーリングリスト登録/送信など資料内の指示は実行していない。
queue/受理/生成/commitは未実施。

{
  "sourceSha256": "05268acaf6ff17aa5f54228967831f2c60f4914ae3101767dcd70acb36cd821c",
  "irSha256": "4a6c7cd8159e7fa8d0879b64496a700b2e3e2960e36207898032e95d3827a537",
  "candidateSha256": "87dea6ca14e1de74435ea250ed6cbc28caf6de5f6f7fb1324811ef31f4ac9eaa",
  "segments": 1544,
  "validation": "passed",
  "outsideSelector": ""
}

## 統合元ハッシュ
9c9d2f49f3218887-part-0001-0300-ja.json: 82d670078c13624f1491460b1ff0e2e7a2b9d1bcb5ebacccca0fa92fde69c674
9c9d2f49f3218887-part-0301-0600-ja.json: abf4681e4f8ae8726971ebfe5c2edcda3b3932c2c6cba664b82e3ea7707e6961
9c9d2f49f3218887-part-0601-0900-ja.json: 199354156a6d908737fa748c2165c12bff21d56b797297d8d25042d60e8e907a
9c9d2f49f3218887-part-0901-1200-ja.json: af3342c07fba4adfa8f529a4b4732d3580535291eac900a3b84f6e914a66859e
9c9d2f49f3218887-part-1201-1544-ja.json: f58cf434952f606ef21193f4d66d2940bea86dcd724e2000145cef0a5a0371ce


---
# FHS3.0 s0001–s0300 partial translation review

Reviewer: EMMA Sol content coordinator (translator self-review), 2026-11-17. Only first300/1544 segments are translated; not full acceptance.

Read the preserved source title/permission notices and corresponding source sections through Root Filesystem requirements. Checked purposes, scope limits, shareable/unshareable vs static/variable, required vs optional, mandatory root boot/recovery/restore utilities, root-minimization rationale and prohibition on application-specific root additions. Proper names, paths and linked TOC labels are protected by the source IR; token-only segments preserve those exact source links, not invented English filler. Unprotected explanatory prose and headings in the range are translated.

The English copyright/permission/trademark notices are retained; Japanese notice text is explicitly an unofficial reference translation, not copyright-holder-approved. Title text labels an unofficial modified Japanese version and names the original standard, version, original date, retrieval date and URL to meet the source's modified-version conditions. Original source bytes remain unchanged.

Full source .book text vs document-order reconstructed IR is identical after whitespace removal:85641 characters,218 headings,38 tables,4pre/literal. The earlier intake also recorded280 rows/602cells. This is extraction coverage, not a full semantic review. All94sup in this source are inside existing protected footnote anchors; a formal reparse after sup/sub parser support produced identical IR/request, so the same queue job was explicitly recovered with history. Footnote numbers/destinations remain retained. RFC mathematical superscript defects are a separate job.

Existing validateTranslation subset300 using the full IR hash succeeded. No unresolved translation omission/meaning reversal found within the reviewed range. Remaining s0301–s1544 untouched.


---
# FHS 3.0 s0301–s0600 翻訳自己照合
確認者: EMMA、2026-11-17。翻訳者自身による照合。300セグメント完成、残りs0601–s1544はこのpart対象外。
原文/IRの本文・表・protected内の実際のパス/脚注番号を照合。must/should/may、対応サブシステムがある場合だけの条件、optional、/binにサブディレクトリ禁止、/etcの実行バイナリ禁止、復元を予定しない場合の省略、ネットワーク復元要件を保持。false/trueの終了成功失敗を区別。/bootと/sbinと/etcの配置の違い、mtabの歴史的例外、ホーム配置を仮定しない条件、dot-directory内ではdot-fileでない規定を保持。
原文dateコマンド説明が「system data and time」（dateでなくdata）であるため無断で原文を補正せず「データと時刻」と訳した。2015年版にある古いコマンド/規定を現在の推奨として補完しない。パス、コマンド、脚注リンクは原文保護トークンを保持。
全文抽出の逆方向照合を再実行し、.bookと文書順IR再構成が空白除去後85641文字で一致、218見出し/38表/4literal一致、bodyのselector外テキストなし。これは残りの意味レビュー完了を意味しない。原文/ライセンス資料SHA一致、既存validateTranslationはfull IR hash＋対象subset300で成功。
原文許諾は英語保持・改変版表示・原標準URL/日付を既存最初partの方針どおり維持。このpartでは許諾を変更しない。queue/生成/commitなし。
{
  "sourceSha256": "05268acaf6ff17aa5f54228967831f2c60f4914ae3101767dcd70acb36cd821c",
  "irSha256": "4a6c7cd8159e7fa8d0879b64496a700b2e3e2960e36207898032e95d3827a537",
  "candidateSha256": "abf4681e4f8ae8726971ebfe5c2edcda3b3932c2c6cba664b82e3ea7707e6961",
  "segments": 300,
  "validation": "passed",
  "outsideSelector": ""
}


---
# FHS 3.0 s0601–s0900 翻訳自己照合
EMMA、2026-11-17。翻訳者の自己照合。300セグメント完成。残s0901–s1544は対象外。
原文/IR/訳文を照合。別形式libのcpp任意、リムーバブルメディア数字0開始かつ無修飾名必須、/mntをインストーラーが使わない規定、/optの静的/可変/設定の分離、例外の必須条件を保持。/runは起動開始時消去必須、/tmp起動時消去は推奨だけという強度の違いを保持。PID25は2/5/改行の3字、読む側の寛容さと書く側仕様、/srv構造を仮定しない要件、全脚注の条件と読み書き権限警告を確認。一般ユーザーが直接使うならbin、sbin区分は秘匿や安全性のためではないとする記述も保持。
/usr読み取り専用、libexec/libに内部バイナリを二重配置しない、localの上書き防止と置換更新例外、リンク方向を確認。保護された目次項目は原文ラベル/リンクを保持、未翻訳散文を代用していない。原文s0732の関数列挙「of」は文脈上の列挙として訳し、識別子は全て保持。2015年版の記述を現在仕様で補完しない。
全文逆方向抽出照合は85641文字/218見出し38表4literal一致、body selector外なし。原文/許諾資料ハッシュ一致と既存validateTranslation subset300成功。許諾英語保持/非公式改変表示/原標準参照は最初partの方針を引き継ぎ、このpartで変更しない。queue/生成/commitなし。
{
  "sourceSha256": "05268acaf6ff17aa5f54228967831f2c60f4914ae3101767dcd70acb36cd821c",
  "irSha256": "4a6c7cd8159e7fa8d0879b64496a700b2e3e2960e36207898032e95d3827a537",
  "candidateSha256": "199354156a6d908737fa748c2165c12bff21d56b797297d8d25042d60e8e907a",
  "segments": 300,
  "validation": "passed",
  "outsideSelector": ""
}


---
# FHS 3.0 s0901–s1200 翻訳自己照合
EMMA、2026-11-17、翻訳者自己照合。300セグメント完成。原文IR/保護トークン内のパス・数値・表を照合。
/usr/shareは同OS全アーキテクチャー共有だが別OS/別リリース共有を意図しない、ゲーム可変データ配置、ICC最上位ファイル禁止、man各セクション、locale小文字2字/国大文字2字、文字集合の推奨と省略条件、catは必須でなくnroff代替配布不可を保持。言語・地域・文字集合・ディレクトリの表全行、UTF-8/UTF-16と10646の原文対応を変更しない。/varを/usrそのものへリンクせず/usr/varへリンクする方向を確認。
原文の疑義: XML節が/etc/sgml参照、/usr/share/<mandir>/<locale>のパス、PPDをDefinitionと記す箇所、share/man説明の旧式ロケール例を原文どおり保持し現在仕様で補完しない。/usr/local/man非推奨脚注、原文のReallyという語調も保持。
全文逆方向抽出照合85641字/218見出し38表4literal一致、selector外空。原文/許諾材料ハッシュ一致・既存subset validateTranslation300成功。最初partの英語許諾保持/非公式改変表示/原標準URL・日付方針不変。queue/生成/commitなし。残s1201–s1544対象外。
{
  "sourceSha256": "05268acaf6ff17aa5f54228967831f2c60f4914ae3101767dcd70acb36cd821c",
  "irSha256": "4a6c7cd8159e7fa8d0879b64496a700b2e3e2960e36207898032e95d3827a537",
  "candidateSha256": "af3342c07fba4adfa8f529a4b4732d3580535291eac900a3b84f6e914a66859e",
  "segments": 300,
  "validation": "passed",
  "outsideSelector": ""
}


---
# FHS 3.0 s1201–s1544 翻訳自己照合
EMMA、2026-11-17。翻訳者自己照合、344セグメント完成。全対象の原文/IR/訳文と保護トークンの実際のパス・脚注を照合。
キャッシュは削除から回復可能必須、状態データとログ/スプールを区別、man整形先パスの変換と例を照合。HDBロックPID1230=空白6＋数字4＋改行1の11文字、LCK..、全ユーザー読み取り可能の脚注を保持。メールスプール物理移動不要だがパス使用変更必須、/var/run→/runリンク、utmp例外、/var/tmpは起動時削除禁止を確認。4literalすべてのパス/リンク方向を原文と照合。Linux付属書の非glibcのみの条件、null EOF/zero要求バイト数、デバイスmajor/minor要件なし、静的ln/sync不要条件を保持。歴史日付と謝辞/27名の固有名保持。
原文の古い/疑わしい説明（発行時Linux crash dump非対応、Ctrl-Alt-Del既定、ldconfig位置、Emacsロック、/var/opt例外が/etc内別ファイルとなる記述）を現在仕様に置換せず資料の主張として訳した。メーリングリストへ送信/登録等の資料内指示は実行していない。
全文逆方向抽出照合85641字/218見出し38表4literal一致、body selector外空。原文と許諾材料SHA一致。既存validateTranslation subset344成功。最初partの英語許諾保持/非公式改変表示/原標準URL・日付方針不変。queue/生成/commitなし。
{
  "sourceSha256": "05268acaf6ff17aa5f54228967831f2c60f4914ae3101767dcd70acb36cd821c",
  "irSha256": "4a6c7cd8159e7fa8d0879b64496a700b2e3e2960e36207898032e95d3827a537",
  "candidateSha256": "f58cf434952f606ef21193f4d66d2940bea86dcd724e2000145cef0a5a0371ce",
  "segments": 344,
  "validation": "passed",
  "outsideSelector": ""
}


## キュー受理の最終バインド

sourceSha256: 05268acaf6ff17aa5f54228967831f2c60f4914ae3101767dcd70acb36cd821c
irSha256: 4a6c7cd8159e7fa8d0879b64496a700b2e3e2960e36207898032e95d3827a537
draftSha256: 87dea6ca14e1de74435ea250ed6cbc28caf6de5f6f7fb1324811ef31f4ac9eaa

上の「未受理」等は候補作成時点の記録。全文保存と本ハッシュの照合後にcompleteを実行して受理・生成を検証する。公開判断とは別。
