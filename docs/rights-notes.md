# 権利に関する参考メモ

確認日: 2026-09-06。取得元の表示・条件を、運営者の判断や権利者への照会に使えるよう記録したものです。公開するか、公開を差し止めるかは運営者が判断します。このメモや調査結果を理由に、取り込み・翻訳・サイト生成を止める仕組みは設けません。

広告を掲載しないこと、無償であること、翻訳に AI を用いること、運営者が追加の権利を主張しないことだけでは、原文やフォントの許諾条件はなくなりません。以下は個別資料について確認できた条件の要約です。GNU・BSD という分類やコマンド名だけで他の資料に同じ条件が適用されるとは判断できません。

## Cica フォント

- 公式配布: [Cica v5.0.3](https://github.com/miiton/Cica/releases/tag/v5.0.3)。確認時点の公式最新リリースです。
- 配布 ZIP の `LICENSE.txt` は Cica フォントに SIL Open Font License 1.1 を指定し、Cica を Reserved Font Name としています。生成スクリプトの MIT License とは対象が異なります。
- 公式 ZIP の `COPYRIGHT.txt` と `LICENSE.txt` は、`public/fonts/cica/` にそのまま収録しています。構成元フォントの表示も含まれます。
- Web 配信には全グリフを保持した WOFF2 を使用します。元の TTF・ZIP と配信ファイルの SHA-256、変換ツール、検証内容は [provenance.json](../public/fonts/cica/provenance.json) に記録しています。
- [OFL の Webfonts and Reserved Font Names](https://openfontlicense.org/webfonts-and-reserved-font-names/) は、元のデータ・メタデータを保持した WOFF/WOFF2 圧縮について、名前を変えずに配信できる条件を説明しています。今回の変換はグリフの削除やデザイン変更を行いません。

## FreeBSD の find(1)

確認した資料は FreeBSD `releng/15.1` 系列の `usr.bin/find/find.1` です。ユーザーが示した Web マニュアルと同じ 2026-02-14 の文書日付を持ちますが、Web ページ全体の配布条件や、他の版・Ports の文書まで同一と認定するものではありません。

[確認した公式ソース](https://github.com/freebsd/freebsd-src/blob/5cbb1e05086c2cb510a9b77a6979dfb42c0cf215/usr.bin/find/find.1) の先頭には University of California の著作権表示と 3 条項 BSD の条件があります。改変を含む再配布を認め、著作権表示・条件・免責文の保持、配布物への再掲、許可のない推薦・支持を示す名称利用の禁止を記載しています。照会や表示内容の確認には、このファイルのヘッダー全体が根拠になります。

原文が roff のコメントに持つ表示は、HTML 変換すると画面から消える場合があります。原文ファイル内の保持と、生成したページ・添付資料から読める表示は別に確認できる情報です。

- コミット: `5cbb1e05086c2cb510a9b77a6979dfb42c0cf215`
- 取得したファイルの SHA-256: `e037d991f8eb695f43ce5196dd1ada25fe603621645652a4a2ab53776ac3bc2b`

## GNU findutils: man ページと詳説マニュアル

同じ GNU find の資料でも、確認した公式ソースでは条件が異なります。

- [`find/find.1`](https://git.savannah.gnu.org/cgit/findutils.git/tree/find/find.1?id=db41ebaf0486e9903745c46a59fed9ccc4d5938b) の COPYRIGHT 節は GPL version 3 or later を示しています。[GPLv3 第 4・5 節](https://www.gnu.org/licenses/gpl-3.0.html) は著作権・許諾・免責の表示、ライセンスの提供、改変した旨と日付、改変物への同じライセンスの適用などを記載しています。翻訳の編集元と生成物を対応づけて保存すると、配布する翻訳のソース提供についても説明できます。
- [`doc/find.texi`](https://git.savannah.gnu.org/cgit/findutils.git/tree/doc/find.texi?id=db41ebaf0486e9903745c46a59fed9ccc4d5938b) と [GNU の HTML 詳説マニュアル](https://www.gnu.org/software/findutils/manual/html_mono/find.html) は GFDL version 1.3 or later、Invariant Sections・Front-Cover Texts・Back-Cover Texts はなし、と表示しています。[GFDL 第 8 節](https://www.gnu.org/licenses/fdl-1.3.html) は翻訳を改変として扱い、第 4 節の条件を参照しています。そこには題名、原著者・改変担当者・発行者、著作権・許諾表示、履歴などの扱いが含まれます。許諾文・免責文を翻訳する場合にも、原文の表示と英語のライセンス本文の保持について記載があります。

「追加の権利を主張しない」という方針と、上流ライセンスが求める改変者・著作権表示などをどう表現するかは、資料ごとに運営者が判断・照会できる事項です。「GNU の文書はすべて GFDL」「GNU のソースはすべて GPL」といった一括扱いは、この 2 ファイルだけでも正確ではありません。

- 確認した公式 HEAD: `db41ebaf0486e9903745c46a59fed9ccc4d5938b`
- `find/find.1` SHA-256: `7b136f9c7e0156f4029495e7549846f9653dcee1d711a36db7d85e903c6e2ed5`
- `doc/find.texi` SHA-256: `aaeaa4e88519fc0c629410c61b6b4c953881f15dacff864229d697c325f436a4`

## 個別資料の報告・照会に使える情報

原文の取得 URL、実装名・版・文書セクション、コミットまたは原文ハッシュ、見つかった著作権・許諾表示、翻訳した範囲、翻訳・改変日、生成した日本語ページや編集元をまとめると、権利者が対象と利用方法を確認できます。原文の表示が見つからない場合は「取得した資料では表示を確認できなかった」と、その事実と取得範囲を報告します。

翻訳ページに使える説明例は「このページは原文に基づく AI 支援の日本語訳です。原文: … / 対象版: … / 翻訳・改変日: … / 上流の著作権・許諾表示: …」です。この説明自体は個別ライセンスの条文や必要な表示を置き換えません。公開判断のために翻訳・生成した成果物を参照できることを優先し、調査結果は情報として添えます。
