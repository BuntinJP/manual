# macOS cut / paste 候補訳の自己照合

確認者: EMMA diff-intake担当（翻訳者による自己照合。独立レビューではない）。2026-11-17。

保存済みsource.roff全文をIR/requestと照合し、cut全43、paste全40セグメントを翻訳・照合した。上流の著作権・BSD許諾条件はsource.roff冒頭に保持され、原文・manifestは変更していない。

## cut

対象: manuals/apple/macos/27.0.1/26a434/1/cut/07a23411a22e
候補: /workspace/shared/manual-translations/apple-cut-ja.json

- バイト、文字、フィールド位置の区別、1始まり、範囲両端を含むこと、重複は1回だけ出力、存在しない列の選択がエラーでないことを保持。
- -nは少なくとも1バイトを選択し、未選択の先頭部分に続く残りのバイトをすべて選択する条件。単に「一部を選べば全文字を出す」とは訳していない。
- -sの否定条件、区切りなしの行を既定でそのまま出力、-wの連続空白・タブを1区切り扱いする条件を保持。
- 3つの書式、7オプション、環境変数、終了値0/>0、2つのコマンド例、規格・拡張・歴史を照合。
- 書式と例はこのIRでは保護トークンを持つparagraphであり、そのトークンと囲み括弧を原文のまま保持。

sourceSha256: 07a23411a22ee06d224decf5a09054284eb9e22a13ecd37d666a2ef6e3343077
irSha256: 9a4ac8d3f3cc38e4e50f54b243162ebbaa5447029bd694e7ccc1b0b2093762a6

## paste

対象: manuals/apple/macos/27.0.1/26a434/1/paste/9995ee22bca1
候補: /workspace/shared/manual-translations/apple-paste-ja.json

- 対応行の連結と-sによるファイルごとの連結を区別。最後のファイル/最後の行の改行を残す例外を保持。
- -dの文字循環と、通常は最後の入力ファイルの行、-sでは各ファイルの最終行で選択位置をリセットする条件を保持。
- EOF時の無限の空行扱い、複数の「-」への標準入力の行単位の循環読み込みを保持。
- \\0は空文字列でありヌル文字でないこと、その他のバックスラッシュ付き文字の扱いを保持。
- 4つの使用例のコマンド文字列を保護トークンで保持。規格の「互換であることが期待される」は断定的な準拠表現へ変えていない。

sourceSha256: 9995ee22bca19980c80b4754c742a4ad942893501f720cbba3ffa15a584421ff
irSha256: 837e214676d3243fef83fd445fb95d57c118ab7be9025ec144dc23a3e595fe85

両候補ともvalidateTranslation成功（43/43、40/40）。保護トークンの全出現を原文と照合。不明点・未解決の抽出漏れは検出しなかった。queue操作・受理・生成・commitは行っていない。管理者がsave後のdraftSha256と最終検証結果をレビュー記録へ追加すること。


この記録の対象: paste
sourceSha256: 9995ee22bca19980c80b4754c742a4ad942893501f720cbba3ffa15a584421ff
irSha256: 837e214676d3243fef83fd445fb95d57c118ab7be9025ec144dc23a3e595fe85
draftSha256: 58336adcd9c482b7c90e051ab2a7d00c94845d9d0b89afa63cae21344a6cd883
