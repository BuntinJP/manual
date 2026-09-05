# manual / ja

英語のコマンドマニュアルを、原文と対応づけて日本語で読むための静的サイトです。Astro 7.3.1 / Starlight 0.42.0、常時ダーク、Cica。広告・アクセス解析・外部フォント配信はありません。

## 開発

Node.js 22.12 以上（検証環境: 24.18.0）と Bun 1.3.14 を使用します。

```sh
bun install --frozen-lockfile
bun run dev
```

通常ビルドと検証:

```sh
bun run verify
bun run preview
bun run test:e2e
```

`verify` は原文・翻訳整合性、lint、型、単体テスト、サイト生成を検証します。E2E はビルド済みサイトのダーク表示、Cica の文字幅、320px からの表示、版別検索、全文検索、JavaScript 無効時の閲覧を確認します。ローカルではインストール済みの Google Chrome、CI では Playwright Chromium を使用します。

通常のビルドは保存済み原文・解析結果・訳文だけで動作し、ネットワーク、LLM API、API キー、mandoc を必要としません。roff の解析と roff の統合テストにのみ mandoc が必要です（macOS は /usr/bin/mandoc、Linux はディストリビューションの mandoc パッケージ）。

## AI に依頼する

例えば「この HTML の URL にある find のマニュアルを日本語化して」「この roff を新しい版として追加して」と依頼できます。AI は取得元と版を確認し、取り込み、解析、セグメント翻訳、照合、ページ生成まで実行します。

- [翻訳 CLI の使い方](tools/manual/README.md)
- [ディレクトリ・データ・表示の構成](docs/architecture.md)
- [AI の作業案内](AGENTS.md)
- [公開上の条件に関する参考メモ](docs/rights-notes.md)

HTML の URL を指定すれば、roff の場所を探して指定する必要はありません。自動抽出だけで構造を取り切れない資料では、AI が保存原文と照合し、本文領域や IR を調整して同じ翻訳プロセスに流せます。未知の版情報を推測で埋めません。

翻訳ごとの資料は `manuals/<provider>/<product>/<version>/<variant>/<section>/<name>/<sha12>/` にまとまります。同名コマンドでも実装・版・配布差分・原文リビジョンを区別できます。原文のバイト列は保存し、新しい原文を以前の版に上書きしません。

## 収録内容と公開

参照された FreeBSD find(1) の HTML から、原文 13 節を日本語化しています。実 roff の処理例として FreeBSD true(1) も収録しています。機械検証と独立した意味レビューの記録は、当該マニュアルの `translation/` にあります。既存の isync / MEGAcmd / Wrangler のページは従来の URL で引き続き閲覧できます。

フォントやマニュアルに公開上の懸念を確認した場合は、その根拠を参考情報として報告・記録します。翻訳・解析・サイト生成は続行し、生成物を問い合わせ資料としても利用できます。ライセンス判定によって作業を止める仕組みはありません。一般公開するか、差し止めるかは運営者が判断します。

`bun run build` の出力は `dist/` です。既存の静的配信設定は残しています。ビルドや CI から自動デプロイや課金操作は行いません。

運営者が公開を指示した場合は `bun run deploy` でビルド後に Wrangler から公開します。公開先は Buntin-Catalina アカウントの Worker `manual`、独自ドメインは <https://manual.buntin.dev/> です。`--keep-vars` によりダッシュボード側の変数を保持します。公開状態と確認結果は [デプロイ記録](docs/deployment.md) を参照してください。
