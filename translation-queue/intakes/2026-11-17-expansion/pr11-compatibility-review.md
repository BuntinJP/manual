# PR11 Linux coverage 4ファイル独立レビュー

## 対象
`../pr11-ui-checkout` の基点 `45a10b77` からの差分（os-coverage.ts、OsCoverage.astro、unit、E2E）。検査した4ファイルの `git diff 45a10b77` SHA-256: `2d6249f4b8b0da818e35322bfceb65bc5c32be8f9cc759b8daaad0878b448160`。

## 判定
今回の変更に必須修正となるコード・安全性・データ不一致は見つからなかった。PR12現行catalogの実データを読み取り、PR11のbuildOsCoverage関数へ直接入力して期待する分類を確認した。

- 正式diff: `gnu/diffutils/3.12/upstream-man/1/diff/abd1e4feebc9`、section 1、sourceFormat roff。Linux(GNU)に1リンク。
- 旧diff HTML章: `gnu/diffutils/3.12/online-manual/1/diff/c2d1884be144` は正式man判定を通らず、Linux(GNU)のリンクに混入しない。
- col: `util-linux/bsd-utils/2.41/linux-upstream/1/col/c09e40db3321`、section 1、prepared sourceFormat roff。Linux(BSD)だけに1リンク。
- util-linux判定はprovider/product/variantの3値すべてを必要とする。productがutil-linux、variantがdefault、どちらか未指定、providerがApple/FreeBSD/OpenBSD、sectionがcli、一般HTML URLの各負例を実データから作成して関数へ投入し、翻訳・原文の双方がLinux(BSD)に入らないことを確認。
- 従来からのprovider=`linux-bsd`の明示分類は残っている。したがって「全providerを含めこの3値以外は一切Linux(BSD)に入らない」ではなく、「util-linuxを追加分類する経路だけを限定」という実装である。
- 名前固定のcol例外ではなく、明示的にbsd-utils/linux-upstreamと登録した正式manを対象にするため、将来同じ分類の別コマンドにも適用される。来歴の事実性は取り込み時に別途確認する設計。

## AIX注記
リンク先の直接openはタイムアウトしたが、同じIBM一次資料の検索結果本文で、AIX manがKnowledge Centerで用いるHTMLであり、オンライン版とローカル版の更新時期に差がある説明を取得した。新注記の方向性は裏付けられる。共通HTMLという表現を「常に同一リビジョン」の意味に読ませないよう、個別版未照合の文が続く点も適切。
根拠: https://www.ibm.com/support/pages/why-local-man-page-different-knowledge-center-command-reference

現行データにAIX原文/訳文はないため「AIX欄は原文未登録・確認待ち」は現時点と整合。ただし将来AIX原文を追加したときは、この固定注記も更新する必要がある。既存isManPageは一般的なIBM docs URLを自動で正式manと認める実装ではない。今回の差分はその対象登録まで行っていないため、現時点では不具合としない。

## テストレビューと限界
- unitはpositiveの訳文・原文、product/variant/他OS/section/一般HTMLのnegativeを検証しており追加分を適切に覆う。今回追加の読み取り実行ではproduct/variant未指定も確認。
- E2Eはcatalogから導出した期待リンク数と各hrefの可視性を検証する。単独UIでGNU/LinuxBSD文書0件の場合は0件確認に留まるが、実PR12 catalogが載るoverlayではdiff/colリンク確認になる。
- 期待値にisManPageと同じ識別条件を使うため、共通ロジックの誤りを独立に検出するテストではない。今回の実データ・負例の独立照合で補った。将来の回帰耐性向上には固定diff/col fixtureを追加できるが必須修正ではない。
- productionはhrefを重複排除する一方、E2E期待件数はcatalog生件数。現行catalogに問題はなく、将来重複データが入ればテストが厳しく失敗する可能性がある。
- 親が確認した単独verify44/44・E2E27/27は再実行していない。今回実行したのはBunによるread-only関数照合。統合overlayのページ生成/実ブラウザー検証は親担当で別途必要。

## 安全・変更範囲
追加コードは分類の純粋条件と固定HTML注記、テストだけ。実行命令、外部入力評価、roff safety gate変更、原文変更は含まれない。既存の一般的man URLヒューリスティックの全面監査を完了したとの主張ではない。
UI・git・queueは変更せず、このPR12 recovery-workレポートだけを作成した。
