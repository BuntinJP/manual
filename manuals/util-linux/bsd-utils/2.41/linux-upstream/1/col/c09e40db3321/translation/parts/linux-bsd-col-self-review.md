# util-linux 2.41 col(1) 日本語訳・自己照合

- 対象: `manuals/util-linux/bsd-utils/2.41/linux-upstream/1/col/c09e40db3321`
- 出力: `recovery-work/linux-bsd-col-ja.json`
- 62/62 セグメント。訳文 SHA-256: `8cbfc65bf5de4d3235674556701eb92b53145992bba8d5d3868073be86568de2`
- prepared source SHA-256: `c09e40db33219aba4965eea116e0f81c52e1b777640a5e42d69534de495bf26f`
- IR SHA-256（request記録）: `cd9458c3071c88d539b77289833eb14875900cfcb566b61def9fd5f229553485`

## 意味照合
request、source.roff、IR、元col.1およびcol.1.adocの対応本文を読み、全62件の訳を意味照合した。前方向/逆方向、半行、バックスペース抑止と各桁の最後の文字、tabs/spacesの方向、少なくともnumber行と既定128行、未知のシーケンスを通過させる-pの例外、制御文字の10進値（8/10/13/15/14/32/9/11）、先頭桁での無視、フラッシュ済み行への逆行警告、規格と-l拡張、V6の履歴を確認した。コマンド・オプション・リンクと保護トークンはそのまま維持。s0051の一般説明は原文どおりで、-p時の例外を消すような書き換えはしていない。

翻訳の具体的な意味上の未解決点は検出なし。自己照合であり、独立レビュー実施の主張ではない。リンク先の現行仕様や別OSのcolにすり替えていない。

## 原文準備・許諾原語の照合
`provenance/flatten-preparation.json` と元原文を読み、記録された未使用MTO aliasとgroff専用www.tmac stanzaだけを除くとprepared本文と一致することを検証した。末尾に付録を追加するための改行1つだけを比較時に除外した。roff safety gateには触れていない。

col.1.adoc中のCopyright (c) 1990、Berkeley/Michael Rendell帰属、4条件、免責末尾までをprepared sourceのliteral付録と照合し、原語テキスト完全一致。IR最終blockがliteralであり、同じ原語全文を空白除去後に保持することも検証した。IRでは空行位置に差があるためバイト同一とは主張しない。ライセンス本文は翻訳せず、62番の付録見出しだけを日本語化。共通COPYINGの1989年を文書固有1990年に混ぜていない。

## 機械検証
すべて成功:
- 62 IDの完全一致、余分・欠落なし、5つの出力キーとメタデータ一致。
- 各保護トークンの個数・集合一致、inlineタグの入れ子整合。
- requestとIRの全セグメント原文一致。
- sourceとoriginal sourceのSHA、manifestに記載された全materialのSHA一致。
- 記録stanza除去後の本文一致（末尾改行のみ除外）、原語付録の原adoc一致、IRの原語保持。

queue、accepted translation、生成ページ、gitは変更していない。新規Linux/BSD由来候補としての作業であり、以前失われた未回収2ページを同定したとは主張しない。全体の受理・生成・検証は親担当の範囲。
