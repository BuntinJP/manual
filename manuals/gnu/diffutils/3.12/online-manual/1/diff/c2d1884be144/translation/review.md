# GNU Diffutils 3.12 diff 候補訳の自己照合

確認者: EMMA diff-intake 担当（翻訳者による自己照合。独立レビューではない）。2026-11-17。

対象: manuals/gnu/diffutils/3.12/online-manual/1/diff/c2d1884be144
候補: /workspace/shared/manual-translations/gnu-diff-ja.json

保存済みGNU公式マニュアルの #Invoking-diff の全173セグメントを照合。第13章の呼出し規則と13.1の全オプションを含む。Diffutils全巻の翻訳やroff manページではない。

- 比較方向（--from-file / --to-file、first / second）、ディレクトリ比較の再帰条件、標準入力に関する禁止、終了状態0/1/2を保持。
- 空白量・全空白・行末空白、空行だけ・正規表現に一致する行だけという区別を保持。
- context/unifiedの既定3行、patchが通常必要とする最低2行、タブ既定8桁、横並び既定130桁を保持。
- --colorのnone/auto/always、引数省略時auto、--paletteの色とSGR値、シンボリックリンクの名前一致条件を保持。
- --minimalは最小の変更集合の発見を保証する訳にせず、可能性として記述。
- HTMLの75段落、92用語、2見出し、1構文例に加え、リスト項目をIRと照合。呼出し構文はliteralのまま保持。すべての保護トークンの一対一対応を検証。
- s0029の原文はオプションに en dash（–color）を用いているため、無断で表記訂正せずそのまま保持。

sourceSha256: c2d1884be14432ad07dc6aa45bd983c55371c5250a7d31a79c315534c9df1096
irSha256: ecceb503bcfba45fdc3b7ba622cc2f35b2613439d9ae8df7fd142a4e89473940

対象content verifyとvalidateTranslation（173セグメント）成功。キュー保存後のハッシュを追加。completeで受理・生成を検証する。

draftSha256: 99e6bfb3b805cbf621742437c84cbeb9143c166514ff705baf28b457af79ba78
