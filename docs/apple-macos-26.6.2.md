# Apple macOS 26.6.2 コマンド資料の取得記録

確認日: 2026-09-06。対象はAppleが2026-08-17に公開したmacOS 26.6.2
build 25G83で、このMacの `sw_vers` と一致しています。Apple Open Sourceの
[`distribution-macOS` 固定コミット](https://github.com/apple-oss-distributions/distribution-macOS/blob/4e290a9b9d3723c65d2a606223d41eb90ecdbf99/release.json)
が宣言する版はmacOS 26.0です。取得経路は両者を別の版情報として保持します。

## 収録対象と原文

- `find(1)`: `shell_cmds-326` の固定コミット `b33f386ac431f17d4799b5662f20ff2ddf0773b9` にある `find/find.1`。実機原文とSHA-256 `72de98371bbac79f8dc59b50e4d506c23fc82add3da9c5bd60a36f8bacc0cf25` で一致します。
- `tar(1)`: `libarchive-158` の固定コミット `3136a5066323506878093401fd85827643f5289f` にある `libarchive/tar/bsdtar.1`。実機原文とSHA-256 `e7e0f61433da7fd2002d1c8b9dadb7bf497302eede7b488828d136b4a117a553` で一致します。公開元の `COPYING` も保持します。
- `tclsh(1)`: 実機のTcl 8.5.9用自己完結manページ。`tcl-149` の固定コミットにある原本候補は `.so man.macros` を含み、実機ファイルとはバイトが異なります。候補原本と `license.terms` は関連資料として保持します。
- `osascript(1)`、`osacompile(1)`、`launchctl(1)`、`sqlite3(1)`: build 25G83にインストールされた各manページ。該当する現在版原本は固定したmacOS 26.0公開マニフェストで確認できませんでした。古い公開 `launchctl` を現在版とは扱いません。
- `swift(1)`: `/Library/Developer/CommandLineTools` にあるApple Swift 6.3.3（swiftlang-6.3.3.1.3、swift-driver 1.148.6）のmanページ。macOSベースシステムやSwift公開リポジトリ由来とは扱いません。

この版で確認したほかの構成要素は、SQLite 3.51.0、bsdtar 3.5.3 / libarchive
3.7.4です。各manページの実パス、symlink解決後のパス、原文SHA-256、構成要素、
原文種別、Apple OSS側の可用性は各 `manifest.json` に保存しています。

## IR抽出照合

`mandoc` が生成した本文見出しとIRの見出しを照合し、8件すべてで一致しました。
原文マクロ定義内の見出しは本文に数えません。抽出された翻訳セグメントは次のとおりです。

- `find`: 本文見出し 12、翻訳セグメント 262
- `osascript`: 本文見出し 5、翻訳セグメント 36
- `osacompile`: 本文見出し 5、翻訳セグメント 36
- `launchctl`: 本文見出し 11、翻訳セグメント 204
- `tclsh`: 本文見出し 9、翻訳セグメント 31
- `tar`: 本文見出し 13、翻訳セグメント 368
- `swift`: 本文見出し 8、翻訳セグメント 32
- `sqlite3`: 本文見出し 9、翻訳セグメント 111

合計は1,080セグメントです。構文、コマンド例、定義語のオプションなどはIRの
literalまたは保護トークンとして保持されます。SQLiteの原文が、先頭にドットを持つ
設定例を出力するために一時的なroff制御文字変更を使うことも確認しました。解析器は
この限定パターンを処理しつつ、変更後の制御文字で隠した外部ファイル参照やシェル実行を
拒否します。

更新時は [翻訳CLIのApple経路](../tools/manual/README.md#apple-macos-snapshot-route)
に従い、最新版という表示を自動で繰り上げず、OS・ビルド・個別ツール・全原文ハッシュを
再確認します。
