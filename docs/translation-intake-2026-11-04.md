# 2026-11-04 の翻訳対象追加

`systemextensionsctl(8)` を1件・36セグメント、未翻訳の `pending` ジョブとして追加しました。
正規の登録経路 `content:queue add` で原文・IR・用語集・翻訳依頼を保存しています。

- 取得元: このMacの `/usr/share/man/man8/systemextensionsctl.8`（`man -w` で確認）
- 実測したOS: macOS 27.2、build 26B123（`sw_vers`）。最新版との一般的な主張ではありません。
- 文書の日付: October 30, 2023。OS版とは区別しています。
- 原文SHA-256: `52e39211f048c2aecbb32bacb88c5ea5135b444e6c25116186c134364b04ad21`
- 保存先: `manuals/apple/macos/27.2/26b123/8/systemextensionsctl/52e39211f048/`
- ジョブ: `translation-queue/b2d2cd154efa05ed.json`
- 登録一覧: [2026-11-04.json](../translation-queue/intakes/2026-11-04.json)
- 原文・抽出照合記録: [source-observations.md](../manuals/apple/macos/27.2/26b123/8/systemextensionsctl/52e39211f048/source-observations.md)

## 登録と検証

```sh
bun run content:queue add \
  --file /usr/share/man/man8/systemextensionsctl.8 --format roff \
  --origin file:///usr/share/man/man8/systemextensionsctl.8 \
  --provider apple --product macos --version 27.2 --variant 26b123 \
  --section 8 --name systemextensionsctl
```

保存原文とインストール済み原文のバイト列・SHA-256が一致しました。
全36セグメントとブロック構造を原文に照合し、6見出し・3サブコマンド・4状態・注意書き・終了値・参照先・履歴を確認しています。
同じコマンドで再登録し、ジョブIDとジョブファイルのSHA-256が不変で重複がないことを検証しました。

キューは304件・58,200セグメントから305件・58,236セグメントになりました。
全件 `pending`、保存済み訳文0セグメントです。既存の受理済み訳文10件は変更していません。
今回の対象の `translation/ja.json` と公開ページは作成していません。

`bun run verify` は原文・キューの整合性検証、lint、型検査、単体テスト39件、101ページのビルドまで成功しました。
初回は旧checkout内に置いた入れ子worktreeでAstroの親tsconfig解決に失敗したため、独立した場所へ移動して再実行しました。ソースコードや依存関係は変更していません。

キューCLIの実行中プロセス、既存ジョブの担当予約、ロックがないことを確認し、最新mainから独立した登録専用worktreeを1つだけ使用しました。
他の作業ツリーの未コミット変更・キューは変更していません。次の処理担当は本変更を同期した作業ツリー1つを選び、[翻訳キューの手順](translation-queue.md)に従ってください。
全文翻訳、マージ、本番公開は実施していません。
