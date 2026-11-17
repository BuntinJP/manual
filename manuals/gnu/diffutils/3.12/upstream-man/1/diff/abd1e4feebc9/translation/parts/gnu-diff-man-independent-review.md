# GNU diffutils 3.12 正式 diff(1) 独立レビュー

- 検査訳文: `recovery-work/gnu-diff-man-ja.json`
- 検査SHA-256: `7479c14e3b03e0eb514b554fdf63701d78e47d900766a1d2c2e45b04e96bfb0e`
- 原文leaf: `manuals/gnu/diffutils/3.12/upstream-man/1/diff/abd1e4feebc9`
- 全168件を、保護トークンを展開した英語・日本語の対照で意味レビューした。requestとIRの原文全件一致を別途検証し、source.roff全文も読み、オプションとの対応および分割文の連続性を確認した。機械的な一致を意味レビューの代用にはしていない。

## 判定
具体的な誤訳・欠落・否定反転・数値相違は検出しなかった。必須修正指摘なし。

重点確認:
- normal既定、context/unified各3行、width上限130、tabsize8。
- -qと-s、--left-columnと--suppress-common-lines、-tと-T、--new-fileと--unidirectional-new-fileの違い。
- ファイル名と内容それぞれのcase指定、ignore-space関連の粒度、-B/-Iの「すべての行」の条件。
- --from-file/--to-fileの左右、シンボリックリンク非追従、入力末尾CR除去、入力'-'と終了値0/1/2。
- GFMT/LFMT限定と共通指定、old/newの大文字小文字、%< / %> / %=、%Lと%l、L-F+1/F-1/L+1、%(A=B?T:E)、%c'\OOO'の8進数。
- --color単独がautoを意味すること、--paletteがcolor有効時の設定であること。
- 2025/Free Software Foundationの帰属、GPLv3+の「バージョン3以降」、変更・再配布の自由、法令で許される範囲の無保証。
- s0095/s0097の分割文は2つの自然な日本語文として意味を保持。s0165～s0168の条件付きinfo diff案内も連続して成立。

## 機械検証
168件ID集合の完全一致、メタデータ一致、各保護トークンの個数・集合一致、inlineタグの入れ子整合、source.roff SHA一致、requestとIRの全原文一致を確認し成功した。

翻訳JSON、queue、accepted、生成ページ、gitは変更していない。この正式manのレビューであり、別途登録済みのInvoking diff章173件やTexinfo全巻の独立レビューを実施したという意味ではない。
