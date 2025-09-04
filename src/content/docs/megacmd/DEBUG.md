---
title: DEBUG
description: MEGAcmd のデバッグ
sidebar:
  order: 6
---

> 翻訳元:https://github.com/meganz/MEGAcmd/blob/master/contrib/docs/DEBUG.md

# MEGAcmd のデバッグ

ログメッセージには 2 種類あります：

- MEGAcmd: これらのメッセージは MEGAcmd 自体から報告されます。ユーザーコマンドの処理に関する情報が表示されます。`cmd`というラベルが付けられます。

- SDK: これらのメッセージは SDK およびその依存ライブラリから報告されます。リクエスト、転送、ネットワークなどに関する情報が表示されます。`sdk`というラベルが付けられます。

MEGAcmd サーバーは、これら 2 つのカテゴリに対して設定されたログレベルに応じてメッセージを記録します。ログレベルは`log`コマンドで調整可能です。ログレベルは FATAL（最低）から VERBOSE（最高）まであります。各メッセージのログレベルは cmd/sdk のプレフィックスの後に表示されます。

以下はランダムなログメッセージの例です：

```
2025-02-07_16-47-56.662269 cmd DBG  Registering state listener petition with socket: 85 [comunicationsmanagerfilesockets.cpp:189]
2025-02-07_16-47-56.662366 cmd DTL  Unregistering no longer listening client. Original petition: registerstatelistener [comunicationsmanagerfilesockets.cpp:346]
2025-02-07_16-47-56.662671 sdk INFO Request (RETRY_PENDING_CONNECTIONS) starting [megaapi_impl.cpp:16964]
```

メッセージが記録されたソースファイルと行番号がログメッセージの最後に付加されており、開発者がどこから来たのかを素早く特定できるようになっています。

## ログへのアクセス方法

MEGAcmd からのログは`megacmdserver.log`ファイルに書き込まれます。このファイルは再起動を跨いでも削除されず、サイズが大きくなると自動的に圧縮されタイムスタンプ付きで名前が変更されます（ログ記録は停止しません）。

ログファイルは Linux および macOS では`$HOME/.megaCmd`、Windows では`%LOCALAPPDATA%\MEGAcmd\.megaCmd`にあります。

## 起動時の詳細度設定

サーバー起動時により高い詳細度でログレベルを設定したい場合は、実行ファイルに`--debug-full`引数を渡します（例：`MEGAcmdServer.exe --debug-full`）。または、サーバー起動前に環境変数`MEGACMD_LOGLEVEL`を`FULLVERBOSE`に設定することも可能です。

他の起動時ログレベルは以下の通りです：

- `--debug` または `MEGACMD_LOGLEVEL=DEBUG` は以下を設定します：

  ```
  MEGAcmdのログレベル = DEBUG
  SDKのログレベル = DEFAULT
  ```

- `--debug-full` または `MEGACMD_LOGLEVEL=DEBUG` は以下を設定します：

  ```
  MEGAcmdのログレベル = DEBUG
  SDKのログレベル = DEBUG
  ```

- `--verbose` または `MEGACMD_LOGLEVEL=VERBOSE` は以下を設定します：

  ```
  MEGAcmdのログレベル = VERBOSE
  SDKのログレベル = DEFAULT
  ```

- `--verbose-full` または `MEGACMD_LOGLEVEL=FULLVERBOSE` は以下を設定します：
  ```
  MEGAcmdのログレベル = VERBOSE
  SDKのログレベル = VERBOSE
  ```

## 単一コマンドの詳細度制御

一般的に、低い詳細度のログメッセージはコンソールには直接表示されません。エラーのみが表示されます。コマンド実行時に`-v`、`-vv`、`-vvv`を渡すことで、それぞれ警告、デバッグ、詳細メッセージをコンソールに表示させることができます。これはあくまでコンソール用であり、`megacmdserver.log`のログレベルは上記のルールに従います。

## JSON ログ

SDK のログレベルが`VERBOSE`の場合、API に送受信される HTTP リクエストの全 JSON ペイロードがログに記録されます。これによりログサイズは増えますが、より詳細な情報が得られます。JSON ログの有効・無効は環境変数`MEGACMD_JSON_LOGS`を`0`または`1`に設定することで独立して制御可能です。

## ローテーティングロガーの設定

MEGAcmd のロガーはログファイルが大きくなりすぎないようにローテーションと圧縮を行います。以下の設定項目を調整して特定のシステムに合わせることができます：

- `RotationType`: ローテーションの種類。設定可能な値は*Timestamp*と*Numbered*です。デフォルトは*Timestamp*です。
  - Numbered ローテーションはファイル名に番号を付けてローテーションし、`MaxFilesToKeep`を超えると古いファイルを削除します。
  - Timestamp ローテーションはファイルの作成日時を管理し、`MaxFileAge`を超えたファイルを削除します。
- `CompressionType`: 圧縮の種類。設定可能な値は*Gzip*と*None*（圧縮なし）です。デフォルトは*Gzip*です。
- `MaxFileMB`: `megacmdserver.log`ファイルの最大サイズ（MB 単位）。これを超えるとファイルはリネーム・圧縮されます。通常は 50MB ですが、ディスク容量に応じて小さくなることがあります。
- `MaxFilesToKeep`: ローテーションされたファイルの最大保持数。これを超えると古いファイルが削除されます。デフォルト値は`MaxFileMB`や圧縮設定、システムスペックによります。
- `MaxFileAgeSeconds`: ローテーションされたファイルの最大保持期間（秒単位）。デフォルトは約 1 ヶ月です。_注_: Timestamp ローテーションでのみ使用されます。
- `MaxMessageBusMB`: ロガー内部のメモリバスの最大容量（MB 単位）。デフォルトは 512MB です。多くの場合はこれより少ない RAM を使用します。変更する場合はメモリ使用量を確認することを推奨します。

これらの設定は`megacmd.cfg`ファイルを手動で編集して行います。このファイルは`megacmdserver.log`と同じディレクトリに配置する必要があります。存在しない場合は手動で作成してください。ファイルの書式例は以下の通りです：

```
RotatingLogger:RotationType=Timestamp
RotatingLogger:CompressionType=None
RotatingLogger:MaxFileMB=40.25
RotatingLogger:MaxFilesToKeep=20
RotatingLogger:MaxFileAgeSeconds=3600
RotatingLogger:MaxMessageBusMB=64.0
```

未記載の値はデフォルトが適用されます。負の値など無効な値は無視されます。この設定は起動時にのみ読み込まれるため、設定変更後は MEGAcmd サーバーの再起動が必要です。

ローテーティングロガーの設定変更により、過去のログファイルが正しくローテーションまたは削除されなくなる可能性があります。設定変更前に古いログファイルを手動で削除するか、保存したい場合は別場所へ移動することを推奨します。

</file>
