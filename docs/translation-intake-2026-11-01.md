# 2026-11-01 の翻訳対象取り込み

指定された翻訳対象一覧から、304件・58,200セグメントを原文付きでキューへ登録しました。全件 `pending` で、保存済み訳文は0件です。調査には Exa を使用し、原文の取得・保存・解析・翻訳依頼生成は既存パイプラインで行いました。

## 取り込んだ範囲

- AWS CLI の `ssm` リファレンス: 155文書。公式サービス索引から列挙し、`wait` の子コマンドも含みます。ページに明記されたCLI版ごとに保存しています。
- Samba: 公式 `current/man-html/` 索引の113文書すべて。Linux の CIFS クライアント一式として、cifs-utils 7.9 の10文書も登録しました。
- `cut`: GNU Coreutils 9.12、macOS 27.0.1、OpenBSD-current、FreeBSD 15.1-RELEASE の4実装。
- jq: upstream 1.8.2 の配布物に含まれる `jq.1` と、このMacの `jq-1.7.1-apple` に同梱された `jq.1`。
- `pbcopy`、`pbpaste`、`xcode-select`: このMacの macOS 27.0.1（26A434）のシステムマニュアル。
- `paste(1)` のBSD系: macOS、OpenBSD-current、FreeBSD 15.1-RELEASE の3実装。
- WireGuard `wg(8)`: wireguard-tools 1.0.20260223。
- GnuPG `gpg(1)`: 公式 gnupg24 オンラインマニュアル。フッターに記載された文書版2.4.4として保存し、現行バイナリ版とは区別しています。
- OpenPGP: RFC 9580。
- tmux: 指定された OpenBSD 公式マニュアル。版はページが表示する `OpenBSD-current`。
- Tripwire: 2.4.3.7 の `tripwire(8)`、`twconfig(4)`、`twfiles(5)`。一覧の `twfile` は正式名称 `twfiles` として記録しました。
- Swaks: 20240103.0 の公式GitHubにあるリリース固定のPODマニュアル。
- OpenSSL: 公式4.1系列の `openssl(1)`。文書が特定していないパッチ番号は補っていません。
- LibreSSL Portable: 4.4.0配布物の `openssl(1)`。OpenSSLとは別の提供元です。
- Mutt: 公式GitLabの `mutt-2-4-3-rel` にある `mutt.man`。
- ConvertX: v0.20.0のREADME。括弧内の Bun / Elysia は製品の実装技術として扱い、別製品の文書群には展開していません。
- Paru: 2.2.0 の `paru(8)` と `paru.conf(5)`。

重複していた tmux・pbcopy・pbpaste はそれぞれ1対象に統合しました。既存のmacOS 26.6.2の訳文8件とその他の受理済み資料は保持しています。

## 原文と版の扱い

文書ごとの取得元・識別情報・原文／IRハッシュ・ジョブID・セグメント数は [取り込み一覧](../translation-queue/intakes/2026-11-01.json) にあります。AWSとSambaの公式索引も同じフォルダーへ保存し、対象範囲を再確認できます。

Sambaの31文書はページ自体に番号付きリリースが書かれていないため、公式URLの `current` として保存しました。他ページの版を付け替えてはいません。

Sambaの2文書はISO-8859-1、cifs-utilsの10文書はRSTです。元のバイト列を `provenance/` に保存し、UTF-8への変換または docutils 0.23 によるHTML化を行いました。元の資料は `original-source` としてハッシュ検証され、`source.html` は解析用の入力であることを各 `source-observations.md` に記録しています。RST変換ではファイル挿入とrawディレクティブを無効化しています。通常の検証・ビルド・キュー処理に docutils は不要です。

`pbpaste(1)` の元ファイルは `.so man1/pbcopy.1` という別名です。別名ファイルと、実際の内容を持つ未変更の `pbcopy(1)` 原文を両方保存しています。

Muttの公開文書サイトでは取得時にTLS証明書のホスト名検証に失敗したため、公式GitLabリリースのman原文を使用しました。

## 次の翻訳作業

キューを処理する作業ツリーを1つ選び、[翻訳キューの手順](translation-queue.md) に従います。

```sh
bun run content:queue list
bun run content:queue next --worker CHAT_ID --max-segments 20
```

取得・解析・機械検証は済んでいますが、翻訳前の原文とIRの抽出照合、翻訳、意味レビューは未実施です。取り込み件数を翻訳完了件数や本番公開件数として扱いません。各ジョブは機械検証された途中訳文の保存、全文照合、受理・生成の順で進めます。

## 登録時の検証

`bun run verify` は単体39件・型・lint・全原文とキューの整合性検証・101ページ生成まで成功し、E2E 23件も成功しました。索引URLと登録結果の集合照合、1セグメントの取り出しと解放、全304件が未翻訳の待機状態であることを確認しています。

プライバシー検査では検出0件でした。通常検査がUTF-8として読めない保存原文2件は、Gitインデックスのバイト列とmanifestのハッシュを照合し、宣言されたISO-8859-1で読み取って同じ非公開検査設定で追加確認しました。原文の空白・改行・文字コードは保持しています。
