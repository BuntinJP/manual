# smb.conf part 2 日本語訳の自己レビュー

## 対象と成果
- 入力: `recovery-work/smb-part-2-request.json`
- 出力: `recovery-work/smb-part-2-ja.json`
- 担当範囲: s3118–s3215 と s3516–s3717 の計 300 セグメント（非連続）。
- 原文: Samba 4.25.0 smb.conf(5)、保存済み `source.html` と抽出済みリクエスト。外部 API 不使用。
- sourceSha256: `04dcc678b4e4f08a0f5c37cd2143140e999de660aa71e38def0db9ce8555d4b0`
- irSha256: `1996c9a42715f6e442297bc3fbac9cade7ccf822758fd6d704d044eb4305628b`

## 実施したレビュー
全 300 セグメントを入力と照合。説明文・注意文の条件、否定、主語、数値、プロトコル版、設定例を確認した。保護要素の展開内容を参照して、RPC 起動元、認証条件、クラスタリングとディレクトリリースの条件、強調の対応を確認した。既存 queue draft の用語・文体を参照し、パラメーター、定数、プログラム名は保持した。

189 セグメントを日本語化し、111 セグメントはパラメーター見出し、空 term、コードのみ、SECURITY 設定見出し、ソケット定数のため原文を保持した。一般見出し Warning は「警告」に翻訳した。

機械検証は以下すべて合格:
- 300 件の ID が担当入力と完全一致し、欠落・余分な ID なし。
- schemaVersion/sourceSha256/irSha256/locale の一致。
- 各セグメントの保護トークンの個数・集合が原文と一致。
- 展開した inline tag の開始・終了順が整合。
- 保存済み source.html の SHA-256 が入力 sourceSha256 と一致。

## 原文にある注意点（無断で修正せず保持）
- s3137: `replication topology replication` という原文の重複表現を「レプリケーショントポロジーの複製」と訳した。
- s3187: NT1 を “Current up to date version” とする歴史的記述を原文どおり翻訳。現在の一般的推奨とは別の原文上の記述。
- s3518: 既定値 8MiB に対して SMB >= 2.1 の上限を 1MiB とする原文の数値を保持。
- s3524: 比較表現 `SMB => 2.1` を原文どおり保持（推測で `>=` に変更していない）。
- s3650: 原文の `SOME_OPTION = VALUE` と「= の前後に空白を入れない」という説明の両方を保持。
- s3671/s3676/s3681/s3686/s3690/s3694: os_major/os_minor を含め、原文がいずれも build number と説明するため「ビルド番号」を保持。数値も原文どおり。

この担当では queue save/complete、生成、リポジトリ全体テスト、git 操作、PR 更新は実施していない。統合後の検証は親担当の範囲。
