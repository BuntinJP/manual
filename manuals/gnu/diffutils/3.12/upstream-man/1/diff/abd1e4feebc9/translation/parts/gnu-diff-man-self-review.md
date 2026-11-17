# GNU diff(1) 3.12 正式man 翻訳・自己照合

## 対象

- Leaf: `manuals/gnu/diffutils/3.12/upstream-man/1/diff/abd1e4feebc9`
- 出力: `recovery-work/gnu-diff-man-ja.json`
- 検査JSON SHA-256: `7479c14e3b03e0eb514b554fdf63701d78e47d900766a1d2c2e45b04e96bfb0e`
- s0001–s0168 全168セグメント（heading 7、paragraph 86、term 75）。正式release roffの翻訳であり、既存Texinfo章の訳を流用していない。

## 実際に行った意味照合

request全件とprotected値を読み、source.roff全文を読み、翻訳出力168件を読み返して照合した。parser/mandoc.htmlは表題・分断段落・COPYRIGHT・SEE ALSO箇所を確認した。IRとrequestの英文同一性も別途機械検証した。

- s0001–s0093: オプション綴り/引数構文を保持。差分の有無、caseの区別/無視、全行条件、シンボリックリンク非追跡、FILE1から/FILE2への比較方向を確認。NUM既定3・130・8、反復可能、ディレクトリ許可、欠落ファイルの第1側のみという区別を保持。
- s0094–s0141: GFMT/LFMTの適用範囲、old/new/unchanged/changed、F/L/N/E/Mと小文字対応、L-F+1/F-1/L+1、三項条件、%Lと%l、末尾改行除外、8進文字、すべての記号とコードを保持。
- s0142–s0156: 最小化探索、共通prefix/suffixのNUM、散在変更の想定、color引数省略時auto、colon区切り、FILESの4組、stdin '-'、終了値0/1/2を確認。
- s0157–s0168: 著者5人、連絡先とURL、FSF 2025著作権行、GPLv3+の「3以降」、変更・再配布の自由、法令で認められる範囲の無保証を保持。man自体のGPL通知をGFDLに変更していない。Texinfo完全版への参照とinfo diff構文も保持。

### 原文分割への対処

s0095/s0097は元roffの別々の.IPで一文が切れており、parserでも別ddとなる。日本語ではs0095を「diffの出力を細かく制御」、s0097を「-D/--ifdefの一般化」とし、隣接2セグメント全体の意味を保って完結する2文にした。トークンは元セグメントに保持。s0165→s0167→s0168もコマンド挿入を挟む文として意味がつながることを確認。

未解決の誤訳・意味の欠落は自己照合では認めなかった。独立レビューは未実施。

## 機械検証（意味の正確さとは別）

- Repository `validateTranslation` を完全168件IRに対して実行: PASS（schema、hash binding、ID完全性、非空要件、保護token数、inline style平衡）。
- source.roff SHA-256: `abd1e4feebc9db8e78054f103649afb285b4e8cd79bc46ac4a2ed8c04868b17d` 一致。
- ir.json SHA-256: `ed8f3ec59145a0f11e801f1460146490adaae2ecaea76d7f190135fe41629f38` 一致。
- requestとIRの全segment ID/原文一致。
- builderで全セグメントのprotected token multiset一致を確認。出力の最上位キーは指定5個のみ。

queue/accepted翻訳/生成ページ/Gitは変更していない。補助builderは `recovery-work/gnu-diff-man-build.py`。親担当がsave/completeと統合検査を行う。
