# デプロイ記録

2026-09-06、運営者の「wranglerから公開して」という指示に基づき、Wrangler 4.34.0 で既存 Worker を更新しました。

- 公開 URL: <https://manual.buntin.dev/>
- workers.dev: <https://manual.buntin.workers.dev/>
- アカウント: Buntin-Catalina
- Worker: `manual` / production
- サイト実装コミット: `a4dd7d4`
- 公開先固定コミット: `e20c48d`
- 公開バージョン: `30ec5cfa-cea9-4cc9-a748-7c658b4f1197`
- 更新前のバージョン: `d133921a-4625-4431-8c50-395864433114`

`wrangler.jsonc` のアカウントを固定し、実際に既存の独自ドメインが Worker `manual` に接続されていることを API で確認しました。独自ドメインの設定は既存のものを維持しています。既存のプレビュー URL 設定も `preview_urls: true` として明示しています。

静的ファイルのみを配信する構成です。有料プラン、課金設定、課金リソースの追加・変更は行っていません。今後の公開コマンドは `bun run deploy` です。

## 公開後の確認

- トップ、`find(1)`、`true(1)` が HTTPS / HTTP 200 で新しい日本語ページを返すこと。
- Cica Regular / Bold と日本語検索用 JSON の配信バイト列が、ローカル成果物の SHA-256 と一致すること。
- 実ブラウザで常時ダーク、Cica 読み込み、半角:全角の文字幅 1:2、`find(1)` の 13 見出しを確認。
- 「シンボリックリンク」の全文検索と、`man 1 find` による版付きコマンド検索が動作すること。
- 幅 320px でページ全体が横にはみ出さないこと。
- 不存在パスは HTTP 404、末尾スラッシュのないマニュアル URL は正しい URL へ HTTP 307 となること。
- 確認したブラウザ操作で JavaScript エラー、リクエスト失敗、第三者ホストへのリクエストがないこと。

この記録は公開時の確認範囲を示します。継続監視や GitHub Actions の実行結果を示すものではありません。

## 2026-09-06 macOS日本語マニュアル8件の本番反映

運営者の「日本語翻訳したものを、本番に適用してサイトに公開して」という指示に基づき、
`manual-japanese-manual` 作業ツリーで `bun run deploy` を実行しました。

- 公開先: https://manual.buntin.dev/search/?provider=apple
- 対象: macOS 26.6.2（25G83）の find / osascript / osacompile / launchctl / tclsh / tar / swift / sqlite3
- 新バージョン: `ce902c58-fe9c-455d-bdcb-406f1c7cd4b2`（配信割合100%を再取得して確認）
- デプロイID: `c4c0de1d-dca3-4aed-ac18-f6804b7f76db`
- 作成時刻: 2026-09-06T12:48:21.120963Z
- 更新前のバージョン: `2e8b76ca-c751-443a-9486-935c2dd44783`
- 公開コマンド: `bun run deploy`（ビルド後 `wrangler deploy --keep-vars`）
- 公開元: 当該タスクの未コミット変更を含む作業ツリー。Gitのmain反映やpushを示す記録ではありません。
- 公開前: `bun run verify`成功（26テスト、型検査エラー0、99ページ生成）、E2E 19件成功。
- 公開後: 全8件のHTTPS/HTTP 200と、配信HTMLのSHA-256がローカル成果物と一致することを確認。
- 実ブラウザ: 幅390pxで8ページの日本語表示・横はみ出しなし、Apple一覧8件、find(1)のApple/FreeBSD選択、Appleへの直接検索、日本語全文検索のApple絞り込みを確認。ページ実行エラー0件。
- 不存在マニュアルURLのHTTP 404を確認。

配信HTMLの照合記録:

- [find(1)](https://manual.buntin.dev/manuals/apple/macos/26.6.2/25g83/1/find/72de98371bba/): `2e897ded8b95b7611fff286bdd23386b76c01670b55fe877ee3d7e25c622bbd5`
- [launchctl(1)](https://manual.buntin.dev/manuals/apple/macos/26.6.2/25g83/1/launchctl/cf8752dd8eb8/): `5eafd2bed0115afcba51e07f2287d0f3fbb9cd4cf248ad02439480a71ad9fbfd`
- [osacompile(1)](https://manual.buntin.dev/manuals/apple/macos/26.6.2/25g83/1/osacompile/1c0ec4085753/): `ab9be461a2680a4fe3300669813ae323242138c16de212e82e687509ea567b2b`
- [osascript(1)](https://manual.buntin.dev/manuals/apple/macos/26.6.2/25g83/1/osascript/aca3abc5c3d0/): `b0617dd01d730b871f780181b8700cb3f8932beabcd1e1ad72303e0a95c62d7b`
- [sqlite3(1)](https://manual.buntin.dev/manuals/apple/macos/26.6.2/25g83/1/sqlite3/d6c2da942220/): `38a3d9387d6d70044fb1abdb86602b78e8b30b57cc10dad9b7bbf3599202e59b`
- [swift(1)](https://manual.buntin.dev/manuals/apple/macos/26.6.2/25g83/1/swift/28bbf6a0c380/): `788910553b83aeeb8683f2aece81e7ea19fd50c2b5f9af39d6e78b40e9db15da`
- [tar(1)](https://manual.buntin.dev/manuals/apple/macos/26.6.2/25g83/1/tar/e7e0f61433da/): `061b361898f884d2cdfa723fbdaba62d3c1b1b51d28d09baec18bcb3ce4164b7`
- [tclsh(1)](https://manual.buntin.dev/manuals/apple/macos/26.6.2/25g83/1/tclsh/198e1ed330b7/): `b364ae78579c9063739cbda61664dd3c03b8f2f1f5774c3e605250ccd6dcbb9e`

## 2026-11-01 フォントの表示安定化と提供元 HOME

ページ遷移時の文字のぶれを修正し、Apple / FreeBSD の HOME と提供元の共通定義を、既存 Worker `manual` へ反映しました。

- 公開ソース: 作業ツリー `manual-font-navigation`、ブランチ `codex/manual-font-navigation`、コミット `ecf82bc`。先行する Apple 収録分のスナップショット `bb89a33` を基底とし、元の未コミット作業ツリーは変更していません。
- 公開コマンド: 検証済みの `dist/` に対し `bunx wrangler deploy --keep-vars`。
- 新バージョン: `d1403bd2-36e9-4fb8-afa8-ab527bf04126`（配信割合100%を再取得して確認）。
- デプロイID: `96375732-5c70-4fef-bf86-34cdcf03b493`。
- 作成時刻: 2026-10-31T16:33:11.527912Z（2026-11-01 01:33 JST）。
- 更新前・復旧先のバージョン: `ce902c58-fe9c-455d-bdcb-406f1c7cd4b2`。
- 公開前: `bun run verify` 成功（28テスト、型エラー0、101ページ生成）、E2E 22件成功、Wrangler dry-run 成功。300ms のフォント遅延でも、文字の表示によるレイアウトシフトが規定値未満となることを検証。
- 公開後: 実ブラウザーでトップ・検索・4つの HOME・全10件の版別マニュアルを取得し、計16ページの HTTP 200 とローカル成果物との SHA-256 一致を確認。
- 公開後: Apple HOME から FreeBSD HOME をクリックして移動し、Cica Regular / Bold の転送量がともに0バイトとなることを確認。フォントの応答ヘッダー `Cache-Control: public, max-age=31536000, immutable` も確認。

提供元の追加と HOME 生成の運用は [構成](architecture.md#提供元と-home) を参照してください。


## 2026-11-01 UI整理と翻訳キュー統合後の本番反映

運営者の本番反映指示に基づき、PR #5・#6を統合したmainの成果物を既存Workerへ公開しました。

- 公開URL: <https://manual.buntin.dev/>
- 公開ソース: `20b5fde9a782965c5355d9fb2c6a2d928df2c636`（main、PR #6のマージコミット）。公開時の作業ツリーはcleanでした。
- アカウント／Worker: Buntin-Catalina / `manual` / production。独自ドメインの紐付けをAPIで確認しました。
- 公開コマンド: 検証済みの `dist/` に対して `bunx wrangler deploy --keep-vars`（Wrangler 4.34.0）。
- 新バージョン: `5288d107-52b9-4a90-a7d5-05b12a929951`。APIの読み戻しで配信割合100%を確認しました。
- デプロイID: `5f87efae-02a4-451f-bae6-f508835a2798`。
- 作成時刻: `2026-10-31T17:59:14.33276Z`（2026-11-01 02:59 JST）。
- 更新前・復旧先: `d1403bd2-36e9-4fb8-afa8-ab527bf04126`。必要時の復旧コマンドは `bunx wrangler rollback d1403bd2-36e9-4fb8-afa8-ab527bf04126 --message 'Restore the previous Manual production version'` です。

### 公開前の検証

- `bun run verify` 成功: 単体39件、型エラー0、lint、原文・キュー整合性、101ページ生成。
- ローカルE2E 23件、Wrangler dry-run成功。
- プライバシー検出0件。通常検査のUTF-8対象2,405ファイルに加え、原文保持のためISO-8859-1で保存している2件を同じ非公開設定で追加検査しました。配信対象のテキスト資材119件も確認しました。

### 公開後の検証

- 公開URLに対して既存の全E2E 23件を実行し成功。コマンド検索、日本語全文検索と提供元絞り込み、Apple/FreeBSD HOME、既存macOSマニュアル8件、版・原文リンク・アンカー、常時ダークとCica、320/390/720px、JavaScript無効時の閲覧を確認しました。
- トップの文書名は「マニュアル一覧」。検索フォームと一覧を表示し、宣伝的な共通肩書きと紹介文が削除されていることを確認しました。
- 通常HTML 100ページのHTTP 200と、404ページを含むHTML・検索資材・CSS/JS・フォント等126件の配信バイト列が、検証済み `dist/` のSHA-256と一致しました。不一致は0件です。
- 末尾スラッシュのない版別マニュアルURLはHTTP 307。不存在URL、原文manifestと翻訳キューの保存用パスはHTTP 404でした。
- 原文・ジョブを管理する作業ツリーで304件すべてがpending、処理中0件・翻訳完了0件であることを読み取り確認しました。公開マニュアルは92件です。
- 配信照合の全件記録: [2026-11-01-production-readback.json](evidence/2026-11-01-production-readback.json)。

公開URLで同じ検証を再実行する入口は `MANUAL_TEST_BASE_URL=https://manual.buntin.dev bun run test:e2e` です。検証先を指定するとローカルpreviewは起動せず、JavaScript無効のコンテキストも同じ公開先を開きます。この記録は今回の確認範囲を示します。
